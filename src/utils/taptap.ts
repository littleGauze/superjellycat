export type TapTapStat = {
  appId: number
  title: string
  score: number | null
  reviewCount: number
  /** TapTap 页面「热度」，对应 download_count / DownloadAction；null 表示未取到 */
  heatCount: number | null
  fansCount: number
  reserveCount: number
  updatedAt: string
}

export type TapTapStatsMap = Record<string, TapTapStat>

const TAP_XUA = encodeURIComponent(
  'V=1&PN=WebApp&VN=0.1.0&LANG=zh_CN&LOC=CN&PLT=PC&CH=website'
)

export function formatTapScore(score: number | null | undefined): string {
  if (score == null || Number.isNaN(score) || score <= 0) {
    return '暂无评分'
  }
  return `评分 ${score.toFixed(1)}`
}

export function formatHeatCount(count: number | null | undefined): string {
  if (count == null || Number.isNaN(Number(count))) {
    return '热度 --'
  }
  const n = Number(count) || 0
  if (n >= 10000) {
    const value = n / 10000
    const text = value >= 10 ? value.toFixed(0) : value.toFixed(1).replace(/\.0$/, '')
    return `热度 ${text}万+`
  }
  if (n >= 1000) {
    const value = n / 1000
    const text = value >= 10 ? value.toFixed(0) : value.toFixed(1).replace(/\.0$/, '')
    return `热度 ${text}千+`
  }
  return `热度 ${n}`
}

function parseScore(raw: unknown): number | null {
  const n = Number(raw)
  if (!Number.isFinite(n) || n <= 0) return null
  return n
}

/** 解析中文数量：6.6万 / 1,234 / 688 */
export function parseChineseCount(text: string): number {
  const t = String(text || '')
    .replace(/,/g, '')
    .replace(/\s+/g, '')
    .trim()
  const wan = t.match(/^([\d.]+)万/)
  if (wan) return Math.round(parseFloat(wan[1]) * 10000)
  const n = Number(t)
  return Number.isFinite(n) ? n : 0
}

/** 从详情页 HTML 提取热度（download_count） */
export function parseHeatFromHtml(html: string): number | null {
  if (!html) return null

  // JSON-LD: interactionType:{"@type":"DownloadAction"},"userInteractionCount":688
  const ld = html.match(
    /DownloadAction"\s*\}\s*,\s*"userInteractionCount"\s*:\s*(\d+)/
  )
  if (ld) return Number(ld[1]) || 0

  const ldLoose = html.match(
    /"@type"\s*:\s*"DownloadAction"[\s\S]{0,240}?"userInteractionCount"\s*:\s*(\d+)/
  )
  if (ldLoose) return Number(ldLoose[1]) || 0

  const dom = html.match(
    /热度<\/span><\/div><span class="app-basic-info__value"[^>]*>([^<]+)/
  )
  if (dom) return parseChineseCount(dom[1])

  return null
}

export function normalizeTapTapDetail(
  appId: number,
  data: any,
  heatCount: number | null = null
): TapTapStat {
  const stat = data?.stat || {}
  const rating = stat.rating || {}
  return {
    appId,
    title: String(data?.title || ''),
    score: parseScore(rating.score),
    reviewCount: Number(stat.review_count) || 0,
    heatCount,
    fansCount: Number(stat.fans_count) || 0,
    reserveCount: Number(stat.reserve_count) || 0,
    updatedAt: new Date().toISOString()
  }
}

async function fetchDetailJson(appId: number): Promise<any> {
  const url = `/api/taptap/app/v2/detail-by-id/${appId}?X-UA=${TAP_XUA}`
  const res = await fetch(url, {
    headers: { Accept: 'application/json' }
  })
  if (!res.ok) {
    throw new Error(`TapTap API HTTP ${res.status}`)
  }
  const json = await res.json()
  if (!json?.success || !json?.data?.id) {
    throw new Error(json?.data?.msg || 'TapTap API failed')
  }
  return json.data
}

async function fetchAppPageHtml(appId: number): Promise<string> {
  const res = await fetch(`/api/taptap-app/${appId}`, {
    headers: { Accept: 'text/html' }
  })
  if (!res.ok) {
    throw new Error(`TapTap page HTTP ${res.status}`)
  }
  return res.text()
}

/** 开发环境走 Vite 代理：详情 API + 页面热度 */
export async function fetchTapTapStatLive(appId: number): Promise<TapTapStat> {
  const data = await fetchDetailJson(appId)

  let heatCount: number | null = null
  try {
    const html = await fetchAppPageHtml(appId)
    heatCount = parseHeatFromHtml(html)
  } catch {
    heatCount = null
  }

  return normalizeTapTapDetail(appId, data, heatCount)
}

export async function fetchTapTapStatsSnapshot(): Promise<TapTapStatsMap> {
  const res = await fetch('/data/taptap-stats.json', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(`stats snapshot HTTP ${res.status}`)
  }
  const json = await res.json()
  return (json?.games || json || {}) as TapTapStatsMap
}
