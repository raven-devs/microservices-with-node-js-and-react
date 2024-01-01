const { EventHandler } = require('./event-handler');
const { Post } = require('../../post/post');
const { PostDao } = require('../../post/post-dao');

class EventPostCreateHandler extends EventHandler {
  static async handle(payload) {
    const postCreated = new Post({ ...payload });
    const postId = postCreated.id;
    PostDao.postsById[postId] = postCreated;
  }
}

module.exports = {
  EventPostCreateHandler,
};
