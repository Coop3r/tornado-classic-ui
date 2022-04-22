import networkConfig from '@/networkConfig'

export const CHAIN_IDS = Object.keys(networkConfig)

export const NETWORKS = CHAIN_IDS.map((i) => i.replace('netId', ''))

export const LOCALES_NAMES = {
  en: 'en-US',
  es: 'es-ES',
  'zh-cn': 'zh-CN',
  ru: 'ru-RU',
  tr: 'tr-TR',
  uk: 'uk-UA',
  fr: 'fr-FR'
}
export const SECOND = 1000
export const ROUNDING_PRECISION = 0.0001

const DEPOSIT = 'deposit'
const WITHDRAWAL = 'withdrawal'

export const eventsType = {
  DEPOSIT,
  WITHDRAWAL
}

export const CONTRACT_INSTANCES = ['0.1', '1', '10', '100', '1000']

export const INDEX_DB_ERROR = 'A mutation operation was attempted on a database that did not allow mutations.'

export const ACTION = Object.freeze({
  WITHDRAW: 'WITHDRAW',
  WITHDRAW_WITH_EXTRA: 'WITHDRAW_WITH_EXTRA',
  ARB_WITHDRAW: 'ARB_WITHDRAW',
  OP_WITHDRAW: 'OP_WITHDRAW'
})

// TODO unique gas limit for each token
export const ACTION_GAS = Object.freeze({
  [ACTION.WITHDRAW]: 390000,
  [ACTION.WITHDRAW_WITH_EXTRA]: 550000,
  [ACTION.OP_WITHDRAW]: 440000,
  [ACTION.ARB_WITHDRAW]: 1900000
})

export const GAS_PRICES = ['low', 'standard', 'fast']

export const addressType = { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' }

// TODO auto update in yarn updateCache
export const cachedEventsLength = {
  mainnet: {
    ENCRYPTED_NOTES: 14550
  },
  goerli: {
    ENCRYPTED_NOTES: 1350
  }
}

export const PROVIDERS = {
  walletConnect: {
    name: 'WalletConnect',
    isPartialSupport: true,
    storageName: 'walletconnect',
    listener: 'walletConnectSocketListener'
  },
  metamask: {
    name: 'Metamask',
    isPartialSupport: false
  },
  generic: {
    name: 'Web3 Wallet',
    isPartialSupport: true
  },
  mobileWallet: {
    name: 'Wallet',
    isPartialSupport: true
  }
}

export const REGISTRY_DEPLOYED_BLOCK = {
  1: 14173129
}
export const DONATIONS_ADDRESS = '0x08ec3A4e3873505D34450b0F726136E1BF0c9DF7'

export const trees = {
  PARTS_COUNT: 4,
  LEVELS: 20 // const from contract
}
