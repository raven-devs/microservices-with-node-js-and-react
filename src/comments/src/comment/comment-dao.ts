import { Comment } from './comment';

interface CommentDao {
  commentsByPostId: Record<string, Comment[]>;
}

export const CommentDao: CommentDao = {
  commentsByPostId: {},
};
