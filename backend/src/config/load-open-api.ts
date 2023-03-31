import { FastifyInstance } from 'fastify';
import openApi from '@fastify/swagger';
import openApiUI from '@fastify/swagger-ui';

export const loadOpenApi = async (server: FastifyInstance) => {
    await server.register(openApi, {
        openapi:{
            info: {
                title: "repository explorer",
                version: "1.0.0"
            },
        },
    });

    await server.register(openApiUI, {
        routePrefix: "/docs",
        staticCSP: true,
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
    });
};