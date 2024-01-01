const { v4: uuid } = require('uuid');
const { EventType } = require('../event/event-type');
const { HttpStatusCode } = require('axios');
const { Event } = require('../event/event');
const { EventEmitter } = require('../event/event-emitter');
const { Post } = require('./post');
const { PostDao } = require('../post/post-dao');

const PostController = {
  findAll: (req, res) => {
    res.status(HttpStatusCode.Ok).send(PostDao.postsById);
  },

  create: async (req, res) => {
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

module.exports = {
  PostController,
};
