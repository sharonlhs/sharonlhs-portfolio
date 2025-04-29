// server/api/social-links.ts
import { getSocialLinks } from '../data/social-links'

export default defineEventHandler((event) => {
  return getSocialLinks()
})
