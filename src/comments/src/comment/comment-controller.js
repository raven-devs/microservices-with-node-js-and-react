const { HttpStatusCode } = require('axios');
const { v4: uuid } = require('uuid');
const { EventType } = require('../event/event-type');
const { Event } = require('../event/event');
const { EventEmitter } = require('../event/event-emitter');
const { Comment } = require('./comment');
const { CommentStatus } = require('./comment-status');
const { CommentDao } = require('../comment/comment-dao');

const CommentController = {
  findAll: (req, res) => {
    res.status(HttpStatusCode.Ok).send(CommentDao.commentsByPostId);
  },

  findAllByPostId: (req, res) => {
    const postId = req.params.id;
    const comments = CommentDao.commentsByPostId[postId] || [];

    res.status(HttpStatusCode.Ok).send(comments);
  },

  createByPostId: async (req, res) => {
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

      const comments = CommentDao.commentsByPostId[postId] || [];
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

module.exports = {
  CommentController,
};
