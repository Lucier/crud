import fastify from 'fastify'
import { usersRoutes } from './modules/user/http/controllers/routes'

export const app = fastify()

app.register(usersRoutes)
