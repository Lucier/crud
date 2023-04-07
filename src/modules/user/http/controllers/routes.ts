import { FastifyInstance } from 'fastify'
import { register } from './register'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.get('/me', profile)
}
