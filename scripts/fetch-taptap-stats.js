#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const TAP_XUA = encodeURIComponent(
  'V=1&PN=WebApp&VN=0.1.0&LANG=zh_CN&LOC=CN&PLT=PC&CH=website'
)

/** 与 src/data/games.ts 保持同步 */
const games = [
  { id: 'flip-coin', appId: 942322, title: '这地毯能爆金币' },
  { id: 'head-flick', appId: 923121, title: '吃我一记脑瓜崩' },
  { id: 'cleaning', appId: 904067, title: '完美清洁公司' },
  { id: 'egg-smash', appId: 910424, title: '一锤子买卖' },
  { id: 'bloodfall', appId: 877529, title: '末日喋血双雄' },
  { id: 'dagger', appId: 872257, title: '弑神匕首' },
  { id: 'earth-defense', appId: 867574, title: '地球保卫计划' },
  { id: 'angler', appId: 802340, title: '异界钓鱼佬' },
  { id: 'swordmaster', appId: 766679, title: '小小御剑士' }
]

function parseScore(raw) {
  const n = Number(raw)
  if (!Number.isFinite(n) || n <= 0) return null
  return n
}

function parseChineseCount(text) {
  const t = String(text || '')
    .replace(/,/g, '')
    .replace(/\s+/g, '')
    .trim()
  const wan = t.match(/^([\d.]+)万/)
  if (wan) return Math.round(parseFloat(wan[1]) * 10000)
  const n = Number(t)
  return Number.isFinite(n) ? n : 0
}

function parseHeatFromHtml(html) {
  const ld = html.match(
    /"@type"\s*:\s*"DownloadAction"[\s\S]{0,200}?"userInteractionCount"\s*:\s*(\d+)/
  )
  if (ld) return Number(ld[1]) || 0

  const dom = html.match(
    /热度<\/span><\/div><span class="app-basic-info__value"[^>]*>([^<]+)/
  )
  if (dom) return parseChineseCount(dom[1])

  return 0
}

async function fetchStat(appId) {
  const detailUrl = `https://www.taptap.cn/webapiv2/app/v2/detail-by-id/${appId}?X-UA=${TAP_XUA}`
  const pageUrl = `https://www.taptap.cn/app/${appId}`
  const headers = {
    Accept: 'application/json,text/html',
    'User-Agent': 'Mozilla/5.0 SuperJellyCatStatsBot',
    Referer: 'https://www.taptap.cn/'
  }

  const [detailRes, pageRes] = await Promise.all([
    fetch(detailUrl, { headers }),
    fetch(pageUrl, { headers: { ...headers, Accept: 'text/html' } })
  ])

  if (!detailRes.ok) {
    throw new Error(`detail HTTP ${detailRes.status}`)
  }

  const json = await detailRes.json()
  if (!json?.success || !json?.data?.id) {
    throw new Error(json?.data?.msg || 'invalid detail response')
  }

  const data = json.data
  const stat = data.stat || {}
  const rating = stat.rating || {}
  const html = pageRes.ok ? await pageRes.text() : ''
  const heatCount = html ? parseHeatFromHtml(html) : 0

  return {
    appId,
    title: String(data.title || ''),
    score: parseScore(rating.score),
    reviewCount: Number(stat.review_count) || 0,
    heatCount,
    fansCount: Number(stat.fans_count) || 0,
    reserveCount: Number(stat.reserve_count) || 0,
    updatedAt: new Date().toISOString()
  }
}

async function main() {
  console.log('🚀 开始拉取 TapTap 评分/热度...')

  const gamesMap = {}
  let success = 0

  for (const game of games) {
    try {
      const stat = await fetchStat(game.appId)
      gamesMap[String(game.appId)] = stat
      gamesMap[game.id] = stat
      success += 1
      console.log(
        `✅ ${game.title}: score=${stat.score ?? '暂无'} heat=${stat.heatCount} fans=${stat.fansCount}`
      )
    } catch (error) {
      console.error(`❌ ${game.title}(${game.appId})`, error.message)
    }
  }

  const outDir = path.resolve(projectRoot, 'public/data')
  fs.mkdirSync(outDir, { recursive: true })
  const outFile = path.join(outDir, 'taptap-stats.json')
  const payload = {
    updatedAt: new Date().toISOString(),
    success,
    total: games.length,
    games: gamesMap
  }
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2))
  console.log(`✨ 已写入 ${outFile} (${success}/${games.length})`)

  if (success === 0) {
    process.exitCode = 1
  }
}

main()
