import { FastifyRedisPlugin, fastifyRedis } from '@fastify/redis'
import fp from 'fastify-plugin'

/**
 * This plugins adds a client to the redis
 *
 * @see https://github.com/fastify/fastify-redis
 */

const URL_REDIS = process.env.URL_REDIS || 'redis://127.0.0.1:6379';

export default fp<FastifyRedisPlugin>(async (fastify, opt) => {
    fastify.register(fastifyRedis, {
        url: URL_REDIS
    })
})
