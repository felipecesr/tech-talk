import { rest } from 'msw'

export const handlers = [
  rest.post('/login', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }))
  })
]
