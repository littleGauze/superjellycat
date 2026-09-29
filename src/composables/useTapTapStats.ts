import { onMounted, onUnmounted, reactive, ref } from 'vue'
import type { StudioGame } from '@/data/games'
import {
  fetchTapTapStatLive,
  fetchTapTapStatsSnapshot,
  type TapTapStat,
  type TapTapStatsMap
} from '@/utils/taptap'

export function useTapTapStats(games: StudioGame[]) {
  const stats = reactive<TapTapStatsMap>({})
  const loading = ref(true)
  const source = ref<'live' | 'snapshot' | 'none'>('none')
  const error = ref('')
  let timer: number | undefined

  const applyMap = (map: TapTapStatsMap, { preserveHeat = false } = {}) => {
    for (const game of games) {
      const key = String(game.appId)
      const item = map[key] || map[game.id]
      if (!item) continue

      const prev = stats[key]
      const next: TapTapStat = { ...item }

      // 热度未解析成功时，保留已有快照/上次值，避免被 0/null 覆盖
      if (
        preserveHeat &&
        (next.heatCount == null) &&
        prev?.heatCount != null
      ) {
        next.heatCount = prev.heatCount
      }

      stats[key] = next
    }
  }

  const loadLive = async () => {
    const results = await Promise.allSettled(
      games.map(async (game) => {
        const stat = await fetchTapTapStatLive(game.appId)
        return [String(game.appId), stat] as const
      })
    )

    const map: TapTapStatsMap = {}
    let ok = 0
    for (const result of results) {
      if (result.status === 'fulfilled') {
        map[result.value[0]] = result.value[1]
        ok += 1
      }
    }

    if (ok === 0) {
      throw new Error('全部 TapTap 实时请求失败')
    }

    applyMap(map, { preserveHeat: true })
    source.value = 'live'
  }

  const loadSnapshot = async () => {
    const map = await fetchTapTapStatsSnapshot()
    applyMap(map)
    source.value = 'snapshot'
  }

  const refresh = async () => {
    loading.value = true
    error.value = ''
    try {
      // 先用构建期快照立刻填上正确热度，再尝试实时刷新
      await loadSnapshot()
      loading.value = false
      await loadLive()
    } catch (liveError) {
      if (source.value === 'none') {
        try {
          await loadSnapshot()
        } catch (snapshotError) {
          error.value =
            liveError instanceof Error ? liveError.message : 'TapTap 数据加载失败'
          source.value = 'none'
          console.warn('TapTap stats unavailable', liveError, snapshotError)
        }
      }
    } finally {
      loading.value = false
    }
  }

  const refreshQuiet = async () => {
    try {
      await loadLive()
    } catch {
      // 静默刷新失败时保留现有数据
    }
  }

  const getStat = (gameOrAppId: StudioGame | number): TapTapStat | undefined => {
    const key = typeof gameOrAppId === 'number' ? String(gameOrAppId) : String(gameOrAppId.appId)
    return stats[key]
  }

  onMounted(() => {
    void refresh()
    timer = window.setInterval(() => {
      void refreshQuiet()
    }, 5 * 60 * 1000)
  })

  onUnmounted(() => {
    if (timer) window.clearInterval(timer)
  })

  return {
    stats,
    loading,
    source,
    error,
    refresh,
    getStat
  }
}
