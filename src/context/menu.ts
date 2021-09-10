import { MenuEntry } from '@pancakeswap/uikit'

var menus:MenuEntry[]=[
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
          href: '/swap',
        },
        {
          label: 'Liquidity',
          href: '/liquidity',
        },
        {
          label: 'LP Migration',
          href: 'https://v1exchange.pancakeswap.finance/#/migrate',
        },
      ],
    },
    {
      label: 'Farms',
      icon: 'FarmIcon',
      href: '/farms',
    },
    {
      label: 'Pools',
      icon: 'PoolIcon',
      href: '/pools',
    },
    {
      label: 'Prediction (BETA)',
      icon: 'PredictionsIcon',
      href: '/prediction',
    },
    {
      label: 'Lottery',
      icon: 'TicketIcon',
      href: '/lottery',
    },
    {
      label: 'Collectibles',
      icon: 'NftIcon',
      href: '/collectibles',
    },
    {
      label: 'Team Battle',
      icon: 'TeamBattleIcon',
      href: '/competition',
    },
    {
      label: 'Teams & Profile',
      icon: 'GroupsIcon',
      items: [
        {
          label: 'Leaderboard',
          href: '/teams',
        },
        {
          label: 'Task Center',
          href: '/profile/tasks',
        },
        {
          label: 'Your Profile',
          href: '/profile',
        },
      ],
    },
    {
      label: 'Info',
      icon: 'InfoIcon',
      href: '/info',
    },
    {
      label: 'IFO',
      icon: 'IfoIcon',
      href: '/ifo',
    },
    {
      label: 'More',
      icon: 'MoreIcon',
      items: [
        {
          label: 'Contact',
          href: 'https://docs.pancakeswap.finance/contact-us',
        },
        {
          label: 'Voting',
          href: '/voting',
        },
        {
          label: 'Github',
          href: 'https://github.com/pancakeswap',
        },
        {
          label: 'Docs',
          href: 'https://docs.pancakeswap.finance',
        },
        {
          label: 'Blog',
          href: 'https://pancakeswap.medium.com',
        },
        {
          label: 'Merch',
          href: 'https://pancakeswap.creator-spring.com/',
        },
      ],
    },
  ];

  export default menus;