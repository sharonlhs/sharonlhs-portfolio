// server/api/get-song.ts
import { getCurrentListening } from '../data/current-listening'

export default defineEventHandler((event) => {
  return getCurrentListening()
})
