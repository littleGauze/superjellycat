export type StudioGame = {
  id: string
  title: string
  cover: string
  url: string
  appId: number
  hot?: boolean
  tagline?: string
}

/** 首页热门游戏轮播（含 TapTap appId，用于拉取评分/热度） */
export const hotGames: StudioGame[] = [
  {
    id: 'cleaning',
    title: '完美清洁公司',
    cover: '/images/games/perfect-cleaning-company/logo.png',
    url: 'https://tap.cn/1xKUO9Cl',
    appId: 904067,
    tagline: '轻松解压 · 清洁经营'
  },
  {
    id: 'head-flick',
    title: '吃我一记脑瓜崩',
    cover: '/images/games/head-flick/logo.png',
    url: 'https://tap.cn/mhHzvW1d',
    appId: 923121,
    tagline: '动作肉鸽 · 爽快弹指'
  },
  {
    id: 'flip-coin',
    title: '这地毯能爆金币',
    cover: '/images/games/flip-coin/logo.png',
    url: 'https://tap.cn/xKXaAdUC',
    appId: 942322,
    hot: true,
    tagline: '像素增量 · 抛币爆金'
  },
  {
    id: 'egg-smash',
    title: '一锤子买卖',
    cover: '/images/games/golden-egg-smash/logo.png',
    url: 'https://tap.cn/Bdkma8m8',
    appId: 910424,
    tagline: '敲蛋成长 · 连锁伤害'
  },
  {
    id: 'bloodfall',
    title: '末日喋血双雄',
    cover: '/images/games/bloodfallDuo/logo.png',
    url: 'https://l.taptap.cn/x0dHwsJY?channel=rep-rep_j9ktjgag7ko',
    appId: 877529,
    tagline: '双人求生 · 昼夜尸潮'
  }
]

/** 全站游戏（构建脚本也会用这份映射） */
export const allStudioGames: StudioGame[] = [
  ...hotGames,
  {
    id: 'dagger',
    title: '弑神匕首',
    cover: '/images/games/goldslayerDagger/logo.png',
    url: 'https://l.taptap.cn/uTFNDi4B?channel=rep-rep_kqof5bro48z',
    appId: 872257
  },
  {
    id: 'earth-defense',
    title: '地球保卫计划',
    cover: '/images/games/earthDefenseInitiative/logo.png',
    url: 'https://l.taptap.cn/rT2bFETp?channel=rep-rep_djitefuit5g',
    appId: 867574
  },
  {
    id: 'angler',
    title: '异界钓鱼佬',
    cover: '/images/games/theisekaiangler/banner1.png',
    url: 'https://www.taptap.cn/app/802340?os=android',
    appId: 802340
  },
  {
    id: 'swordmaster',
    title: '小小御剑士',
    cover: '/images/games/littleswordmaster/logo-512.png',
    url: 'https://www.taptap.cn/app/766679?os=android',
    appId: 766679
  }
]
