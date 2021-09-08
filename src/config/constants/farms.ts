import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'MELO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x617DeB524c7ce1AD1b7095f510Ed55eed53f71a7',
    },
    tokenSymbol: 'MELO',
    tokenAddresses: {
      97: '',
      56: '0x38A62b2030068e7b7a5268df7Ab7a48Bc6e396b4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MELO POOL',
    lpAddresses: {
      97: '',
      56: '0x38A62b2030068e7b7a5268df7Ab7a48Bc6e396b4',
    },
    tokenSymbol: 'MELO',
    tokenAddresses: {
      97: '',
      56: '0x38A62b2030068e7b7a5268df7Ab7a48Bc6e396b4',
    },
    quoteTokenSymbol: QuoteToken.MELO,
    quoteTokenAdresses: contracts.cake,
  },
{
    pid: 3,
    risk: 5,
    lpSymbol: 'MELO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb6a27E3e658b1801d0Bb232766f6F414Ab51F45c',
    },
    tokenSymbol: 'MELO',
    tokenAddresses: {
      97: '',
      56: '0x38A62b2030068e7b7a5268df7Ab7a48Bc6e396b4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   {
    pid: 4,
    risk: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
]

export default farms
