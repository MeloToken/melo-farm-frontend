import { MenuEntry } from '24testui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.melotoken.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.melotoken.com/#/pool',
      },
    ],
  },
  {
    label: 'Farm & Stake',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/24kFinance',
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://melotoken.com/file/MELO-swap.pdf',
  },
]

export default config
