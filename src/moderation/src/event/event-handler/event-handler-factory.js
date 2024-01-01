const { EventType } = require('../event-type');
const { EventCommentCreateHandler } = require('./event-comment-create-handler');

class EventHandlerFactory {
  static create(type) {
    switch (type) {
      case EventType.CommentCreate:
        return EventCommentCreateHandler;
      default:
        return null;
    }
  }
}

module.exports = {
  EventHandlerFactory,
};
