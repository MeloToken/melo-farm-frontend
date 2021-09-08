import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'MELO',
    stakingTokenName: QuoteToken.x24k,
    stakingTokenAddress: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x9f1900a35f2d16ff0f731036e592af6ac98b6c91',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://melotoken.com/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
