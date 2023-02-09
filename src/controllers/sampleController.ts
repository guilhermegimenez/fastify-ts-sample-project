// import { ObjectId } from '@fastify/mongodb';
import fp from 'fastify-plugin'
import { ISample } from '../interfaces/iSample';

export interface ISampleControllerOptions {
    // Specify Support plugin options here
}

// Here you declare the methods of the sample service
export interface ISampleController {
    listAll: () => Promise<ISample[] | []>
}


// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<ISampleControllerOptions>(async (fastify, opts) => {

    const sampleController: ISampleController = {
        listAll: async (): Promise<ISample[] | []> => {
            return await fastify.sampleService.listAll();
        }
    }


    fastify.decorate('sampleController', sampleController)
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
    export interface FastifyInstance {
        sampleController: ISampleController;
    }
}
