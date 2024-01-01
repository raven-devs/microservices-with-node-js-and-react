import { EventType } from '../event-type';
import { EventCommentModerateHandler } from './event-comment-moderate-handler';
import { EventHandler } from './event-handler';

export class EventHandlerFactory {
  static create(type: EventType): EventHandler | null {
    switch (type) {
      case EventType.CommentModerate:
        return new EventCommentModerateHandler();
      default:
        return null;
    }
  }
}
