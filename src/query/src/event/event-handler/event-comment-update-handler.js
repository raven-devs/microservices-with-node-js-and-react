const { EventHandler } = require('./event-handler');
const { Comment } = require('../../comment/comment');
const { PostDao } = require('../../post/post-dao');

class EventCommentUpdateHandler extends EventHandler {
  static async handle(payload) {
    const commentUpdated = new Comment({ ...payload });
    const postId = commentUpdated.postId;
    const commentId = commentUpdated.id;
    PostDao.postsById[postId].comments[commentId] = commentUpdated;
  }
}

module.exports = {
  EventCommentUpdateHandler,
};
