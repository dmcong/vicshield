import { env } from './env'
import rpc from './rpc.config'
import api from './api.config'

const configs = {
  rpc: rpc[env],
  baseUrl: api[env],
}

/**
 * Module exports
 */
export default configs
