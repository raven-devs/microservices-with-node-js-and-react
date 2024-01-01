const { EventType } = require('../event-type');
const { EventPostCreateHandler } = require('./event-post-create-handler');
const { EventCommentCreateHandler } = require('./event-comment-create-handler');
const { EventCommentUpdateHandler } = require('./event-comment-update-handler');

class EventHandlerFactory {
  static create(type) {
    switch (type) {
      case EventType.PostCreate:
        return EventPostCreateHandler;
      case EventType.CommentCreate:
        return EventCommentCreateHandler;
      case EventType.CommentUpdate:
        return EventCommentUpdateHandler;
      default:
        return null;
    }
  }
}

module.exports = {
  EventHandlerFactory,
};
