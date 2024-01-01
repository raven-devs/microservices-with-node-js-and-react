import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { Event } from '../event/event';
import { EventEmitter } from '../event/event-emitter';
import { EventType } from '../event/event-type';
import { Comment } from './comment';
import { CommentDao } from './comment-dao';
import { CommentStatus } from './comment-status';

export const CommentController = {
  findAll: (req: Request, res: Response) => {
    res.status(HttpStatusCode.Ok).send(CommentDao.commentsByPostId);
  },

  findAllByPostId: (req: Request, res: Response) => {
    const postId = req.params.id;
    const comments = CommentDao.commentsByPostId[postId] || [];

    res.status(HttpStatusCode.Ok).send(comments);
  },

  createByPostId: async (req: Request, res: Response) => {
    try {
      const id = uuid();
      const postId = req.params.id;
      const { content } = req.body;

      const comment = new Comment({
        id,
        postId,
        content,
        status: CommentStatus.Pending,
      });

      const comments: Comment[] = CommentDao.commentsByPostId[postId] || [];
      comments.push(comment);
      CommentDao.commentsByPostId[postId] = comments;

      const event = new Event({
        type: EventType.CommentCreate,
        payload: comment,
      });
      await EventEmitter.emit(event);

      res.status(HttpStatusCode.Created).send(comment);
    } catch (error) {
      console.error(error);
      res.status(HttpStatusCode.InternalServerError).send({ error });
    }
  },
};
