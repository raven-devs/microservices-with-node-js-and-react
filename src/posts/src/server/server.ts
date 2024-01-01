import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { EventController } from '../event/event-controller';
import { PostController } from '../post/post-controller';

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
