import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { EventHandlerFactory } from './event-handler/event-handler-factory';

export const EventController = {
  create: async (req: Request, res: Response) => {
    try {
      const event = req.body;
      const { type, payload } = event;

      const eventHandler = EventHandlerFactory.create(type);
      if (eventHandler) {
        await eventHandler.handle(payload);
      }

      res.status(HttpStatusCode.NoContent).send();
    } catch (error) {
      console.error(error);
      res.status(HttpStatusCode.InternalServerError).send({ error });
    }
  },
};
