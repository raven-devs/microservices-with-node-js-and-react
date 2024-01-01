const { EventType } = require('../event-type');
const { EventCommentModerateHandler } = require('./event-comment-moderate-handler');

class EventHandlerFactory {
  static create(type) {
    switch (type) {
      case EventType.CommentModerate:
        return EventCommentModerateHandler;
      default:
        return null;
    }
  }
}

module.exports = {
  EventHandlerFactory,
};
