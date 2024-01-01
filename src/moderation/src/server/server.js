const express = require('express');
const bodyParser = require('body-parser');
const { EventController } = require('../event/event-controller');

const PORT = 4004;
const SERVICE_NAME = '[Moderation Service]';

const app = express();
app.use(bodyParser.json());

app.post('/events', EventController.create);

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} is running on port ${PORT}`);
});
