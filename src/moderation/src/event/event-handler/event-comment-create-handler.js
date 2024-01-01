const { EventHandler } = require('./event-handler');
const { Comment } = require('../../comment/comment');
const { Event } = require('../event');
const { EventEmitter } = require('../event-emitter');
const { EventType } = require('../event-type');
const { CommentStatus } = require('../../comment/comment-status');

const BAD_WORD = 'orange';

// update a comment entity with a proper status, send back an event with the updated comment
class EventCommentCreateHandler extends EventHandler {
  static async handle(payload) {
    const comment = new Comment({ ...payload });
    const { content } = comment;

    const statusUpdated = content.includes(BAD_WORD) ? CommentStatus.Rejected : CommentStatus.Approved;
    const commentUpdated = {
      ...comment,
      status: statusUpdated,
    };

    const event = new Event({
      type: EventType.CommentModerate,
      payload: commentUpdated,
    });
    await EventEmitter.emit(event);
  }
}

module.exports = {
  EventCommentCreateHandler,
};
