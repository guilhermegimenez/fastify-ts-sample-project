import fp from 'fastify-plugin'
import fastifySwagger, { FastifySwaggerOptions } from '@fastify/swagger';
// import swaggerUi from '@fastify/swagger-ui'

/**
 * This plugins serving Swagger (OpenAPI v2) or OpenAPI v3 schemas, 
 *
 * @see https://github.com/fastify/fastify-swagger
 */

export default fp<FastifySwaggerOptions>(async (fastify, opt) => {
    fastify.register(fastifySwagger, {
        swagger: {
            info: {
                title: 'Name of Sample Project API',
                description: 'This is a sample project',
                version: '0.1.0',
                contact: {
                    email: 'auto.sistemasanaliticos@portoseguro.com.br'
                }
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
            },
            host: 'host-sample.aws.com',
            schemes: ['http', 'https'],
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
                { name: 'sample', description: 'Sample related end-points' }
            ],
        }
    })
})
