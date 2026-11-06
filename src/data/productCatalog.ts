export type GameImage = {
  title: string
  image: string
  portrait?: boolean
}

export type ProductGame = {
  id: string
  title: string
  subtitle: string
  cover: string
  url: string
  appId: number
  tagline?: string
  description: string
  systems: string[]
  images: GameImage[]
  videoUrl?: string
  bilibiliUrl?: string
}

/** 作品页目录：最新在前 */
export const productCatalog: ProductGame[] = [
  {
    id: 'clone-brawl',
    title: '复制人大乱斗',
    subtitle: 'Clone Brawl',
    cover: '/images/games/clone-brawl/logo.png',
    url: 'https://tap.cn/izDPeR9v',
    appId: 968597,
    tagline: '卡牌构筑 · 自动战斗',
    description:
      '《复制人大乱斗》是一款融合卡牌构筑与自动战斗的策略游戏。从一个样本出发，通过复制、改造和技能组合，打造属于你的复制人军团。是让巨人冲锋陷阵，还是靠分裂复制形成数量优势？灵活搭配攻击、防御、再生与死亡触发效果，让不同能力产生连锁反应。在不断升级的挑战中保住核心样本，用你的构筑赢下混乱又热闹的大乱斗！',
    systems: [
      '从一个样本出发，复制改造打造属于你的军团',
      '搭配攻击、防御、再生与死亡触发，形成连锁',
      '巨人冲锋或分裂铺场，用构筑赢下大乱斗',
      '肉鸽远征、猛兽挑战、三队竞技等多种模式'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/clone-brawl/banner.png', portrait: false },
      { title: '开始菜单', image: '/images/games/clone-brawl/01.png', portrait: true },
      { title: '卡牌构筑', image: '/images/games/clone-brawl/02.png', portrait: true },
      { title: '自动战斗', image: '/images/games/clone-brawl/03.png', portrait: true },
      { title: '复制军团', image: '/images/games/clone-brawl/04.png', portrait: true },
      { title: '技能连锁', image: '/images/games/clone-brawl/05.png', portrait: true },
      { title: '猛兽挑战', image: '/images/games/clone-brawl/06.png', portrait: true },
      { title: '三队竞技', image: '/images/games/clone-brawl/07.png', portrait: true },
      { title: '肉鸽远征', image: '/images/games/clone-brawl/08.png', portrait: true },
      { title: '自由试验场', image: '/images/games/clone-brawl/09.png', portrait: true }
    ],
    videoUrl: '/video/clone-brawl.mp4'
  },
  {
    id: 'last-brain',
    title: '人类最后一颗脑瓜',
    subtitle: 'Last Brain',
    cover: '/images/games/last-brain/logo.png',
    url: 'https://tap.cn/GleXc5RA',
    appId: 969023,
    tagline: '背包拼装 · 末日肉鸽',
    description:
      '丧尸占据了世界，而你的脑瓜仍在维生脑罐中保持清醒。你就是这颗脑瓜的主人，正在操控机器人作战、驾驶装甲车突围，为自己寻找一条逃生之路。《人类最后一颗脑瓜》是一款融合背包拼装与肉鸽战斗的生存游戏。拖动、旋转武器，搭配配件、扩展背包，为机器人拼出专属火力。通过升级三选一完善构筑，在随机路线中寻找补给、应对突发事件、突破首领封锁；或挑战无尽模式，看看你能在尸潮中逃出多远。',
    systems: [
      '拖动旋转武器，搭配配件扩展背包，拼出专属火力',
      '升级三选一完善构筑，在随机路线中寻找补给',
      '操控机器人作战、驾驶装甲车突围，突破首领封锁',
      '挑战无尽模式，在尸潮中看看你能逃出多远'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/last-brain/banner.png', portrait: false },
      { title: '开始菜单', image: '/images/games/last-brain/01.png', portrait: true },
      { title: '装甲突围', image: '/images/games/last-brain/02.png', portrait: true },
      { title: '路线地图', image: '/images/games/last-brain/03.png', portrait: true },
      { title: '尸潮作战', image: '/images/games/last-brain/04.png', portrait: true },
      { title: '肢解连击', image: '/images/games/last-brain/05.png', portrait: true },
      { title: 'Boss 对决', image: '/images/games/last-brain/06.png', portrait: true },
      { title: '三选一强化', image: '/images/games/last-brain/07.png', portrait: true },
      { title: '背包拼装', image: '/images/games/last-brain/08.png', portrait: true },
      { title: '配件扩展', image: '/images/games/last-brain/09.png', portrait: true },
      { title: '无尽模式', image: '/images/games/last-brain/10.png', portrait: true }
    ],
    videoUrl: '/video/last-brain.mp4'
  },
  {
    id: 'rebirth-cell',
    title: '重生随机细胞',
    subtitle: 'Rebirth Cell',
    cover: '/images/games/rebirth-cell/logo.png',
    url: 'https://tap.cn/PolYuF4z',
    appId: 954572,
    tagline: '丑萌进化 · 身体即武器',
    description:
      '《重生随机细胞》是一款丑萌画风的生物进化动作冒险游戏。你将从一个微小的细胞开始，在捕食、探索与战斗中不断成长，进化出属于自己的奇妙生命。自由组合巨口、利爪、毒刺、电囊、触手和甲壳，让身体与战斗方式一同改变。潜入幽暗深海，跃出水面捕食飞行生物，或长出双脚踏上陆地，探索不同的生态环境。面对结群狩猎的变异动物和拥有二阶段招式的巨型 Boss，灵活冲刺、施展专属技能，甚至引诱首领撞碎巨石，创造反击机会。每一次进化，都会长出新的可能。',
    systems: [
      '自由组合巨口、利爪、毒刺、电囊、触手与甲壳',
      '潜入深海、跃出水面、踏上陆地探索多元生态',
      '面对结群猎物与二阶段巨型 Boss，灵活冲刺反击',
      '每一次进化，都会长出新的可能'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/rebirth-cell/banner.png', portrait: false },
      { title: '开始菜单', image: '/images/games/rebirth-cell/01.png', portrait: false },
      { title: '珊瑚育苗湾', image: '/images/games/rebirth-cell/02.png', portrait: false },
      { title: '巨口进化', image: '/images/games/rebirth-cell/03.png', portrait: false },
      { title: '器官组合', image: '/images/games/rebirth-cell/04.png', portrait: false },
      { title: '深海大鲨鱼', image: '/images/games/rebirth-cell/05.png', portrait: false },
      { title: '水面捕食', image: '/images/games/rebirth-cell/06.png', portrait: false },
      { title: '陆地行走', image: '/images/games/rebirth-cell/07.png', portrait: false },
      { title: '古甲山龟', image: '/images/games/rebirth-cell/08.png', portrait: false },
      { title: '雪山探索', image: '/images/games/rebirth-cell/09.png', portrait: false },
      { title: '自由进化', image: '/images/games/rebirth-cell/10.png', portrait: false }
    ],
    videoUrl: '/video/rebirth-cell.mp4'
  },
  {
    id: 'flip-coin',
    title: '我家地毯会爆金币',
    subtitle: 'Flip Coin',
    cover: '/images/games/flip-coin/logo.png',
    url: 'https://tap.cn/RWuqb0Q9',
    appId: 942322,
    tagline: '像素增量 · 抛币爆金',
    description:
      '《我家地毯会爆金币》是一款轻松解压的竖屏像素风增量游戏。从一枚硬币开始，在神奇的魔毯上不断抛币、翻面、爆金币！赚到的钱可以购买更多硬币，雇佣兔兔、忍者、牛仔等员工，让他们帮你自动抛币、拾取金币。解锁不同魔毯、连锁翻币和各种强力技能，让满屋子的硬币越翻越快、金币越爆越多！打造属于你的全自动金币生产线，不断重生强化，开启下一轮疯狂暴富之旅！',
    systems: [
      '在魔毯上抛币、翻面、爆金币，开启暴富之旅',
      '雇佣兔兔、忍者、牛仔等员工自动抛币拾取',
      '解锁不同魔毯、连锁翻币与各种强力技能',
      '重生强化，打造属于你的全自动金币生产线'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/flip-coin/banner.png', portrait: false },
      { title: '开始界面', image: '/images/games/flip-coin/IMG_5011.PNG', portrait: true },
      { title: '金币生产线', image: '/images/games/flip-coin/IMG_5012.PNG', portrait: true },
      { title: '雇佣员工', image: '/images/games/flip-coin/IMG_5013.PNG', portrait: true },
      { title: '升级强化', image: '/images/games/flip-coin/IMG_5014.PNG', portrait: true },
      { title: '解锁魔毯', image: '/images/games/flip-coin/IMG_5015.PNG', portrait: true },
      { title: '太极运势毯', image: '/images/games/flip-coin/IMG_5016.PNG', portrait: true },
      { title: '抛币翻面', image: '/images/games/flip-coin/IMG_5017.PNG', portrait: true },
      { title: '连锁爆金币', image: '/images/games/flip-coin/IMG_5018.PNG', portrait: true },
      { title: '重生技能', image: '/images/games/flip-coin/IMG_5019.PNG', portrait: true },
      { title: '重生技能树', image: '/images/games/flip-coin/IMG_5020.PNG', portrait: true }
    ],
    videoUrl: '/video/flip-coin.mp4'
  },
  {
    id: 'head-flick',
    title: '吃我一记脑瓜崩',
    subtitle: 'Head Flick',
    cover: '/images/games/head-flick/logo.png',
    url: 'https://tap.cn/mhHzvW1d',
    appId: 923121,
    tagline: '动作肉鸽 · 爽快弹指',
    description:
      '《吃我一记脑瓜崩》是一款搞笑爽快的动作肉鸽游戏。操控蓝衣少年在怪物包围中移动、蓄力、弹指，把敌人狠狠弹飞！利用撞墙、敌人互撞与连锁爆炸清场，搭配随机强化技能，挑战越来越凶的精英与 Boss。',
    systems: [
      '移动、蓄力、弹指，把敌人狠狠弹飞',
      '利用撞墙、敌人互撞与连锁爆炸清场',
      '搭配随机强化技能构筑更强打法',
      '挑战越来越凶的精英与 Boss'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/head-flick/banner.png', portrait: false },
      { title: '蓄力弹指', image: '/images/games/head-flick/IMG_4878.PNG', portrait: true },
      { title: '敌人弹飞', image: '/images/games/head-flick/IMG_4879.PNG', portrait: true },
      { title: '撞墙清场', image: '/images/games/head-flick/IMG_4880.PNG', portrait: true },
      { title: '互撞连锁', image: '/images/games/head-flick/IMG_4881.PNG', portrait: true },
      { title: '爆炸连击', image: '/images/games/head-flick/IMG_4882.PNG', portrait: true },
      { title: '随机强化', image: '/images/games/head-flick/IMG_4886.PNG', portrait: true },
      { title: '精英挑战', image: '/images/games/head-flick/IMG_4887.PNG', portrait: true },
      { title: 'Boss 对决', image: '/images/games/head-flick/IMG_4888.PNG', portrait: true },
      { title: '肉鸽成长', image: '/images/games/head-flick/IMG_4889.PNG', portrait: true },
      { title: '爽快连弹', image: '/images/games/head-flick/IMG_4890.PNG', portrait: true }
    ],
    videoUrl: '/video/head-flick.mp4'
  },
  {
    id: 'cleaning',
    title: '完美清洁公司',
    subtitle: 'Perfect Cleaning Company',
    cover: '/images/games/perfect-cleaning-company/logo.png',
    url: 'https://tap.cn/1xKUO9Cl',
    appId: 904067,
    tagline: '轻松解压 · 清洁经营',
    description:
      '《完美清洁公司》是一款轻松解压的休闲清洁经营游戏。接取不同场景的限时订单，擦除污渍、分类垃圾、整理物品并清洗衣物，努力达成完美清洁评价。赚取报酬后升级工具、购置自动设备和清洁无人机，把小小清洁队经营成行业王牌！',
    systems: [
      '接取不同场景的限时订单，完成完美清洁',
      '擦除污渍、分类垃圾、整理物品并清洗衣物',
      '赚取报酬，升级工具与自动清洁设备',
      '购置清洁无人机，把小小清洁队经营成行业王牌'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/perfect-cleaning-company/banner.png', portrait: false },
      { title: '清洁工具', image: '/images/games/perfect-cleaning-company/IMG_4795.PNG', portrait: true },
      { title: '限时订单', image: '/images/games/perfect-cleaning-company/IMG_4804.PNG', portrait: true },
      { title: '擦除污渍', image: '/images/games/perfect-cleaning-company/IMG_4805.PNG', portrait: true },
      { title: '分类整理', image: '/images/games/perfect-cleaning-company/IMG_4806.PNG', portrait: true },
      { title: '清洗衣物', image: '/images/games/perfect-cleaning-company/IMG_4807.PNG', portrait: true },
      { title: '工具升级', image: '/images/games/perfect-cleaning-company/IMG_4808.PNG', portrait: true },
      { title: '自动设备', image: '/images/games/perfect-cleaning-company/IMG_4809.PNG', portrait: true },
      { title: '清洁无人机', image: '/images/games/perfect-cleaning-company/IMG_4811.PNG', portrait: true }
    ],
    videoUrl: '/video/perfect-cleaning-company.mp4'
  },
  {
    id: 'egg-smash',
    title: '一锤子买卖',
    subtitle: 'Golden Egg Smash',
    cover: '/images/games/golden-egg-smash/logo.png',
    url: 'https://tap.cn/Bdkma8m8',
    appId: 910424,
    tagline: '敲蛋成长 · 连锁伤害',
    description:
      '《一锤子买卖》是一款轻松爽快的增量敲蛋成长游戏。组合不同锤子卡，击碎不断成长的金蛋，触发连锁伤害、特殊蛋与 Boss 挑战。收集金币和黄金碎片，解锁永久成长，在无尽模式中不断刷新自己的伤害与财富记录。',
    systems: [
      '组合不同锤子卡，击碎不断成长的金蛋',
      '触发连锁伤害、特殊蛋与 Boss 挑战',
      '收集金币与黄金碎片，解锁永久成长',
      '无尽模式不断刷新伤害与财富记录'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/golden-egg-smash/banner.png', portrait: false },
      { title: '敲蛋开局', image: '/images/games/golden-egg-smash/1.png', portrait: true },
      { title: '锤子卡组合', image: '/images/games/golden-egg-smash/2.png', portrait: true },
      { title: '连锁伤害', image: '/images/games/golden-egg-smash/3.png', portrait: true },
      { title: '特殊金蛋', image: '/images/games/golden-egg-smash/4.png', portrait: true },
      { title: 'Boss 挑战', image: '/images/games/golden-egg-smash/5.png', portrait: true },
      { title: '永久成长', image: '/images/games/golden-egg-smash/6.png', portrait: true },
      { title: '财富积累', image: '/images/games/golden-egg-smash/7.png', portrait: true },
      { title: '限时任务', image: '/images/games/golden-egg-smash/8.png', portrait: true },
      { title: '无尽记录', image: '/images/games/golden-egg-smash/9.png', portrait: true }
    ],
    videoUrl: '/video/golden-egg-smash.mp4'
  },
  {
    id: 'bloodfall',
    title: '末日喋血双雄',
    subtitle: 'Bloodfall Duo',
    cover: '/images/games/bloodfallDuo/logo.png',
    url: 'https://l.taptap.cn/x0dHwsJY?channel=rep-rep_j9ktjgag7ko',
    appId: 877529,
    tagline: '双人求生 · 昼夜尸潮',
    description:
      '《末日喋血双雄》是一款横屏俯视角末日生存射击游戏。文明崩塌、异变怪物席卷荒野，你将独自作战或与好友并肩求生，在昼夜交替、天气变幻的开放战场中搜寻空投、收集武器、搭配护具与补给，迎战不断强化的尸潮、精英敌人与弹幕 Boss。',
    systems: [
      '昼夜交替、天气变幻的开放战场',
      '单人作战或与好友双人组队求生',
      '搜寻空投，收集武器、护具与补给',
      '迎战尸潮、精英敌人与弹幕 Boss'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/bloodfallDuo/banner.png' },
      { title: '双雄并肩', image: '/images/games/bloodfallDuo/IMG_4110.PNG' },
      { title: '白昼推进', image: '/images/games/bloodfallDuo/IMG_4622.PNG' },
      { title: '空投搜寻', image: '/images/games/bloodfallDuo/IMG_4623.PNG' },
      { title: '黑夜尸潮', image: '/images/games/bloodfallDuo/IMG_4616.PNG' },
      { title: '弹幕交火', image: '/images/games/bloodfallDuo/IMG_4618.PNG' },
      { title: '弹幕 Boss', image: '/images/games/bloodfallDuo/IMG_4626.PNG' },
      { title: 'Boss 连战', image: '/images/games/bloodfallDuo/IMG_4627.PNG' },
      { title: '荒野商人', image: '/images/games/bloodfallDuo/IMG_4621.PNG' },
      { title: '外骨骼改装', image: '/images/games/bloodfallDuo/IMG_4620.PNG' },
      { title: '无人机支援', image: '/images/games/bloodfallDuo/IMG_4624.PNG' },
      { title: '挑战模式与排行榜', image: '/images/games/bloodfallDuo/IMG_4602.PNG' }
    ],
    videoUrl: '/video/bloodfallDuo.mp4'
  },
  {
    id: 'dagger',
    title: '弑神匕首',
    subtitle: 'Goldslayer Dagger',
    cover: '/images/games/goldslayerDagger/logo.png',
    url: 'https://l.taptap.cn/uTFNDi4B?channel=rep-rep_kqof5bro48z',
    appId: 872257,
    description:
      '《弑神匕首》是一款融合法阵绘制、回合制战斗与 Roguelike 构筑的 2D 像素风肉鸽游戏。在伪神统治的黑暗时代，身为矿坑奴工的你意外获得一把传说中的弑神匕首，并觉醒了失落已久的法阵之力。',
    systems: [
      '亲手绘制法阵，发动攻击、防御或诅咒',
      '图形与面积匹配度决定法阵威力',
      '收集匕首、宝石与挂饰，构筑专属流派',
      '回合制战斗，挑战天使、神使与伪神'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/goldslayerDagger/banner_hov.png', portrait: false },
      { title: '法阵绘制', image: '/images/games/goldslayerDagger/1.webp', portrait: true },
      { title: '回合制战斗', image: '/images/games/goldslayerDagger/2.webp', portrait: true },
      { title: '像素风场景', image: '/images/games/goldslayerDagger/3.webp', portrait: true },
      { title: '匕首收集', image: '/images/games/goldslayerDagger/4.webp', portrait: true },
      { title: '宝石构筑', image: '/images/games/goldslayerDagger/5.webp', portrait: true },
      { title: '挂饰搭配', image: '/images/games/goldslayerDagger/6.webp', portrait: true },
      { title: 'Boss 对决', image: '/images/games/goldslayerDagger/7.webp', portrait: true },
      { title: '弑神之路', image: '/images/games/goldslayerDagger/8.webp', portrait: true },
      { title: '流派构筑', image: '/images/games/goldslayerDagger/9.webp', portrait: true }
    ],
    videoUrl: '/video/goldslayerDagger.mp4'
  },
  {
    id: 'earth-defense',
    title: '地球保卫计划',
    subtitle: 'Earth Defense Project',
    cover: '/images/games/earthDefenseInitiative/logo.png',
    url: 'https://l.taptap.cn/rT2bFETp?channel=rep-rep_djitefuit5g',
    appId: 867574,
    description:
      '《地球保卫计划》是一款融合引力操控、塔防与肉鸽成长的竖屏休闲游戏。玩家将操控月球改变陨石轨迹，阻止其撞击地球；同时接收地球发射的科研火箭获取经验，解锁护盾、激光炮、轨道炮、导弹等科技武器。',
    systems: [
      '操控月球引力，改变陨石轨迹',
      '接收科研火箭，获取经验与科技卡牌',
      '解锁护盾、激光炮、轨道炮、导弹等武器',
      '应对高速、分裂、巨型等特殊陨石'
    ],
    images: [
      { title: '游戏 Banner', image: '/images/games/earthDefenseInitiative/banner.png', portrait: false },
      { title: '月球引力操控', image: '/images/games/earthDefenseInitiative/IMG_4184.PNG', portrait: true },
      { title: '陨石风暴', image: '/images/games/earthDefenseInitiative/IMG_4188.PNG', portrait: true },
      { title: '科研火箭', image: '/images/games/earthDefenseInitiative/IMG_4190.PNG', portrait: true },
      { title: '科技升级', image: '/images/games/earthDefenseInitiative/IMG_4198.PNG', portrait: true },
      { title: '护盾防线', image: '/images/games/earthDefenseInitiative/IMG_4200.PNG', portrait: true },
      { title: '武器构筑', image: '/images/games/earthDefenseInitiative/IMG_4201.PNG', portrait: true },
      { title: '巨型陨石', image: '/images/games/earthDefenseInitiative/IMG_4227.PNG', portrait: true },
      { title: '防御流派', image: '/images/games/earthDefenseInitiative/IMG_4238.PNG', portrait: true },
      { title: '无尽守护', image: '/images/games/earthDefenseInitiative/IMG_4241.PNG', portrait: true }
    ],
    videoUrl: '/video/earthDefenseInitiative.mp4'
  },
  {
    id: 'angler',
    title: '异界钓鱼佬',
    subtitle: 'The Isekai Angler',
    cover: '/images/games/theisekaiangler/banner1.png',
    url: 'https://www.taptap.cn/app/802340?os=android',
    appId: 802340,
    description:
      '一名无名钓鱼佬误入异界，在四季流转的世界里一边钓鱼、一边战斗。通过收集鱼卡、武器、鱼竿与符文，在章节间休整、商店选择与钓鱼补强中逐步搭建自己的战斗流派。',
    systems: [
      '在章节地图中边走位边战斗，击退异界怪物并推进关卡',
      '通过钓获稀有鱼种与收集鱼卡，为下一场战斗补强',
      '武器、鱼竿、符文与鱼卡互相组合，形成不同流派',
      '穿过春夏秋冬的章节节奏，完成商店选择与关底 Boss'
    ],
    images: [
      { title: '异界垂钓', image: '/images/games/theisekaiangler/banner1.png', portrait: false },
      { title: '异界钓鱼佬', image: '/images/games/theisekaiangler/banner3.png', portrait: false },
      { title: '钓鱼补强', image: '/images/games/theisekaiangler/IMG_3816.PNG', portrait: true },
      { title: 'Boss 压迫', image: '/images/games/theisekaiangler/Boss1.jpg', portrait: true },
      { title: '鱼卡战斗', image: '/images/games/theisekaiangler/IMG_3827.PNG', portrait: true },
      { title: '章节休整', image: '/images/games/theisekaiangler/IMG_3826.PNG', portrait: true },
      { title: '构筑选择', image: '/images/games/theisekaiangler/IMG_3819.PNG', portrait: true },
      { title: '异界水域', image: '/images/games/theisekaiangler/IMG_3807.PNG', portrait: true }
    ],
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Q2DXBbEvt/?vd_source=475144602498f2d7de7a1820b128c413'
  },
  {
    id: 'swordmaster',
    title: '小小御剑士',
    subtitle: 'Little Sword Master',
    cover: '/images/games/littleswordmaster/logo-512.png',
    url: 'https://www.taptap.cn/app/766679?os=android',
    appId: 766679,
    description:
      '本游戏创新融合 Roguelike、平台跳跃、弹幕射击与随机抽牌机制，力求让每一局体验都焕然一新。玩家将置身于不断变化的关卡节奏中：跳跃、躲避、射击，同时运筹抽卡策略，从而在每次战斗中探索新的玩法、策略与挑战。',
    systems: ['Roguelike 随机生成', '平台跳跃挑战', '弹幕射击战斗', '随机抽牌策略'],
    images: [
      { title: '游戏 Banner', image: '/images/games/littleswordmaster/banner-1920x1080.png', portrait: false },
      { title: '秋季场景', image: '/images/games/littleswordmaster/screenshots/autumn_1080x1920.png', portrait: true },
      { title: 'Boss 战斗', image: '/images/games/littleswordmaster/screenshots/boss_fight_1080x1920.png', portrait: true },
      { title: '闪电技能', image: '/images/games/littleswordmaster/screenshots/lightning_1080x1920.png', portrait: true },
      { title: '夏季场景', image: '/images/games/littleswordmaster/screenshots/summer_1080x1920.png', portrait: true },
      { title: '剑术展示', image: '/images/games/littleswordmaster/screenshots/swords-1080x1920.png', portrait: true },
      { title: '冬季场景', image: '/images/games/littleswordmaster/screenshots/winter_1080x1920.png', portrait: true }
    ],
    videoUrl: '/video/littleswordmaster.mp4',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Gva7zNEMS/?spm_id_from=333.1387.0.0'
  }
]

export const latestProductGame = productCatalog[0]

export function getProductGame(id: string): ProductGame | undefined {
  return productCatalog.find((game) => game.id === id)
}
