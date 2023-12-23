const env = process.env

const configuration = () => ({
  storage: {
    bucket: env.STORAGE_BUCKET,
    maxSize: 20000000, // 20MB
    supabaseURL: env.STORAGE_SUPABASE_URL,
    supabaseKEY: env.STORAGE_SUPABASE_KEY,
  },
  mongodb: {
    uri: env.MONGO_URI,
  },
  jwt: {
    secret: env.JWT_SECRET,
    ttl: env.JWT_TTL,
  },
})

export type EnvironmentVariables = ReturnType<typeof configuration>

export default configuration
