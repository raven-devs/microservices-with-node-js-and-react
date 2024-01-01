const { HttpStatusCode } = require('axios');
const { EventDao } = require('./event-dao');
const { EventHandler } = require('./event-handler');

const EventController = {
  findAll: (req, res) => {
    res.status(HttpStatusCode.Ok).send(EventDao.data);
  },

  create: async (req, res) => {
    try {
      const event = req.body;

      await EventHandler.handle(event);

      res.status(HttpStatusCode.NoContent).send();
    } catch (error) {
      console.error(error);
      res.status(HttpStatusCode.NoContent).send();
    }
  },
};

module.exports = {
  EventController,
};
