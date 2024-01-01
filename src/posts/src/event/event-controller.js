const { HttpStatusCode } = require('axios');

const EventController = {
  create: (req, res) => {
    res.status(HttpStatusCode.NoContent).send();
  },
};

module.exports = {
  EventController,
};
