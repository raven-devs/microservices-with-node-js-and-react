const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { EventController } = require('../event/event-controller');
const { CommentController } = require('../comment/comment-controller');

const PORT = 4002;
const SERVICE_NAME = '[Comments Service]';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', CommentController.findAll);
app.get('/posts/:id/comments', CommentController.findAllByPostId);
app.post('/posts/:id/comments', CommentController.createByPostId);

app.post('/events', EventController.create);

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} is running on port ${PORT}`);
});
