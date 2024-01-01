import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { Event } from '../event/event';
import { EventEmitter } from '../event/event-emitter';
import { EventType } from '../event/event-type';
import { Post } from './post';
import { PostDao } from './post-dao';

export const PostController = {
  findAll: (req: Request, res: Response) => {
    res.status(HttpStatusCode.Ok).send(PostDao.postsById);
  },

  create: async (req: Request, res: Response) => {
    try {
      const id = uuid();
      const { title } = req.body;

      const post = new Post({ id, title });

      PostDao.postsById[id] = post;

      const event = new Event({
        type: EventType.PostCreate,
        payload: post,
      });
      await EventEmitter.emit(event);

      res.status(HttpStatusCode.Created).send(PostDao.postsById[id]);
    } catch (error) {
      console.error(error);
      res.status(HttpStatusCode.InternalServerError).send({ error });
    }
  },
};
