import { Env, env } from './env'

/**
 * Contructor
 */
type Config = {
  walletConnectId: string
}

const config: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    walletConnectId: '4486494e462de41da0cf88ad753cf38f',
  },

  /**
   * Test configurations
   */
  test: {
    walletConnectId: '4486494e462de41da0cf88ad753cf38f',
  },

  /**
   * Production configurations
   */
  production: {
    walletConnectId: '4486494e462de41da0cf88ad753cf38f',
  },
}

/**
 * Module exports
 */
export default config[env]
