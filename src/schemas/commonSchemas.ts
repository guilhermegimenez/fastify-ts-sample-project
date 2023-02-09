import { FastifyPluginAsync } from 'fastify'

const commonSchema: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.addSchema({
        $id: 'Bad Request',
        description: 'Bad Request',
        type: 'object',
        properties: {
            statusCode: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' }
        }
    } as const)

    fastify.addSchema({
        $id: 'Not Found',
        description: 'Resource not found',
        type: 'object',
        properties: {
            statusCode: { type: 'number' },
            error: { type: 'string' },
            message: { type: 'string' }
        }
    } as const)
}

export default commonSchema;
