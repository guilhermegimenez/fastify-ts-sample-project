// import { ObjectId } from '@fastify/mongodb';
import fp from 'fastify-plugin'
import { ISample } from '../interfaces/iSample';

// Environments Variables
const SAMPLE_COLLECITON_NAME = process.env.SAMPLE_COLLECITON_NAME || 'sample-example';

export interface ISampleServiceOptions {
    // Specify Support plugin options here
}

// Here you declare the methods of the sample service
export interface ISampleService {
    listAll: () => Promise<ISample[] | []>
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<ISampleServiceOptions>(async (fastify, opts) => {

    const sampleService: ISampleService = {
        listAll: async (): Promise<ISample[] | []> => {
            const colletion = fastify.mongo.db?.collection(SAMPLE_COLLECITON_NAME);
            try {
                const result = await colletion?.find<ISample>({});
                const list = await result?.toArray();
                return list !== undefined ? list : [];
            } catch (error) {
                throw error;
            }
        }
    }

    fastify.decorate('sampleService', sampleService)
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
    export interface FastifyInstance {
        sampleService: ISampleService;
    }
}
