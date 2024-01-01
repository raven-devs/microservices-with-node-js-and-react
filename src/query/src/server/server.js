const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { QueryController } = require('../query/query-controller');
const { EventController } = require('../event/event-controller');
const { EventSync } = require('../event/event-sync');

const PORT = 4003;
const SERVICE_NAME = '[Query Service]';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', QueryController.findAllPosts);

app.post('/events', EventController.create);

app.listen(PORT, async () => {
  console.log(`${SERVICE_NAME} is running on port ${PORT}`);

  await EventSync.sync();
});
