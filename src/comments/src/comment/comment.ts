import { CommentCreateDto } from './comment-create-dto';
import { CommentStatus } from './comment-status';

export class Comment {
  id: string;
  postId: string;
  content: string;
  status: CommentStatus;

  constructor({ id, postId, content, status }: CommentCreateDto) {
    this.id = id;
    this.postId = postId;
    this.content = content;
    this.status = status;
  }
}
