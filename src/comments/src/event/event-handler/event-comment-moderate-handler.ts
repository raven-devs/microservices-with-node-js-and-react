import { Comment } from '../../comment/comment';
import { CommentCreateDto } from '../../comment/comment-create-dto';
import { CommentDao } from '../../comment/comment-dao';
import { Event } from '../event';
import { EventEmitter } from '../event-emitter';
import { EventType } from '../event-type';
import { EventHandler } from './event-handler';

// replace a comment entity in dao with an updated comment entity from the Moderation Service
export class EventCommentModerateHandler implements EventHandler {
  async handle(payload: CommentCreateDto): Promise<void> {
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
