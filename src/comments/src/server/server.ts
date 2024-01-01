import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { CommentController } from '../comment/comment-controller';
import { EventController } from '../event/event-controller';

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
