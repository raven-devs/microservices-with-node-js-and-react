const { HttpStatusCode } = require('axios');
const { EventHandlerFactory } = require('../event/event-handler/event-handler-factory');

const EventController = {
  create: async (req, res) => {
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

module.exports = {
  EventController,
};
