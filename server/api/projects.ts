// server/api/projects.ts
import { getProjects } from '../data/projects'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const featured = query.featured === 'true'
  return getProjects(featured)
})
