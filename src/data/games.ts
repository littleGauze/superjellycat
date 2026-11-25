import { productCatalog } from '@/data/productCatalog'

export type StudioGame = {
  id: string
  title: string
  cover: string
  url: string
  appId: number
  hot?: boolean
  tagline?: string
}

const hotIds = ['cleaning', 'water-catch', 'escape-ascent', 'clone-brawl', 'last-brain'] as const

/** 首页热门游戏轮播（含 TapTap appId，用于拉取评分/热度） */
export const hotGames: StudioGame[] = hotIds.map((id) => {
  const game = productCatalog.find((item) => item.id === id)!
  return {
    id: game.id,
    title: game.title,
    cover: game.cover,
    url: game.url,
    appId: game.appId,
    tagline: game.tagline,
    hot: id === 'escape-ascent'
  }
})

/** 全站游戏（构建脚本也会用这份映射） */
export const allStudioGames: StudioGame[] = productCatalog.map((game) => ({
  id: game.id,
  title: game.title,
  cover: game.cover,
  url: game.url,
  appId: game.appId,
  tagline: game.tagline,
  hot: game.id === 'escape-ascent'
}))
