import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/health', (c) => {
  const now = new Date()
  const limaTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'America/Lima',
  }).format(now)
  return c.json({ hour: limaTime, status: 'Todo bien uwu' })
})

export default {
  port: 8080,
  fetch: app.fetch,
}
