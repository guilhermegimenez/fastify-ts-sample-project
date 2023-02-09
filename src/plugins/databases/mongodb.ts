import { FastifyMongodbOptions, fastifyMongodb } from '@fastify/mongodb'
import fp from 'fastify-plugin'


/**
 * This plugins adds a client to the mongodb
 *
 * @see https://github.com/fastify/fastify-mongodb
 */


/**     
 * If URL does not have database, 
 * @uncomment the lines with const API_DATABASE declared and set into the .env file
 * 
 */

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';

//const API_DATABASE = process.env.API_DATABASE || 'dbsinase';
export default fp<FastifyMongodbOptions>(async (fastify, opt) => {
    fastify.register(fastifyMongodb, {
        // force to close the mongodb connection when app stopped
        // the default value is false
        forceClose: true,
        url: MONGODB_URL,
        // database: API_DATABASE
    })
})
