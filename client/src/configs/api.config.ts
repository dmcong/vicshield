import { Env } from './env'

/**
 * Contructor
 */

type Conf = {
  apiContracts: string
}

const conf: Record<Env, Conf> = {
  /**
   * Development configurations
   */
  development: {
    apiContracts: 'http://localhost:9000',
  },

  /**
   * Testing configurations
   */
  test: {
    apiContracts: 'https://vicshield-api.onrender.com',
  },

  /**
   * Production configurations
   */
  production: {
    apiContracts: 'https://vicshield-api.onrender.com',
  },
}

/**
 * Module exports
 */
export default conf
