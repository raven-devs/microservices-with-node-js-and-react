import { CommentStatus } from './comment-status';

export class CommentCreateDto {
  id: string;
  postId: string;
  content: string;
  status: CommentStatus;
}
