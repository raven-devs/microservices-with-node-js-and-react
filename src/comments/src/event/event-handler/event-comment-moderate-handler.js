const { EventHandler } = require('./event-handler');
const { Comment } = require('../../comment/comment');
const { CommentDao } = require('../../comment/comment-dao');
const { Event } = require('../event');
const { EventEmitter } = require('../event-emitter');
const { EventType } = require('../event-type');

// replace a comment entity in dao with an updated comment entity from the Moderation Service
class EventCommentModerateHandler extends EventHandler {
  static async handle(payload) {
    const comment = new Comment({ ...payload });
    const { id, postId } = comment;

    const comments = CommentDao.commentsByPostId[postId] || [];
    let commentUpdated = comments.find((comment) => comment.id === id);
    if (!commentUpdated) {
      return;
    }

    commentUpdated = {
      ...comment,
    };

    const event = new Event({
      type: EventType.CommentUpdate,
      payload: commentUpdated,
    });
    await EventEmitter.emit(event);
  }
}

module.exports = {
  EventCommentModerateHandler,
};
