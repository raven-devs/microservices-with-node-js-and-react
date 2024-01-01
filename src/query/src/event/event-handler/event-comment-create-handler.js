const { EventHandler } = require('./event-handler');
const { Comment } = require('../../comment/comment');
const { PostDao } = require('../../post/post-dao');

class EventCommentCreateHandler extends EventHandler {
  static async handle(payload) {
    const commentCreated = new Comment({ ...payload });
    const postId = commentCreated.postId;
    const commentId = commentCreated.id;
    PostDao.postsById[postId].comments[commentId] = commentCreated;
  }
}

module.exports = {
  EventCommentCreateHandler,
};
