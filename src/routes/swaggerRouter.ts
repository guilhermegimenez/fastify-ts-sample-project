import { FastifyPluginAsync } from "fastify"

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/documentation/swagger', {
        schema: {
            hide: true
        }
    }, async function (request, reply) {
        return fastify.swagger()
    })
}

export default example;
