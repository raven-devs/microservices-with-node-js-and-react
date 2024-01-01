const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PostController } = require('../post/post-controller');
const { EventController } = require('../event/event-controller');

const PORT = 4001;
const SERVICE_NAME = '[Posts Service]';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', PostController.findAll);
app.post('/posts', PostController.create);

app.post('/events', EventController.create);

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} is running on port ${PORT}`);
});
