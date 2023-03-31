import { FastifyInstance } from "fastify";
import { postCrash } from "../controllers/crashes.controller";
import { CustomError, UncontrolledError } from "../errors";

export const loadErrorHandler = (fastify: FastifyInstance) => {
  fastify.setErrorHandler(function (error: Error, request, reply) {
    // TODO: Clarify where are this logs going
    this.log.error(error);
    if (error instanceof CustomError) {
      error.message = request.t(error.reference);
      return reply.send(error);
    }
    // TODO: Identify right error type given by fastify's DTO validation and act accordingly
    if ((error as any).validation && (error as any).validationContext) {
      return reply.status(422).send({
        validation: (error as any).validation,
        validationContext: (error as any).validationContext,
      });
    }

    try {
      postCrash({
        type: "Uncontrolled backend crash",
        message: error.message,
      }).then(() => {
        const error = new UncontrolledError();
        // TODO: Find a way to internationalize
        // error.message = request.t(error.reference);
        return reply.send(error);
      });
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
};
