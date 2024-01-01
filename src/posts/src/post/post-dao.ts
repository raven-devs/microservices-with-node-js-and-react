import { Post } from './post';

interface PostDao {
  postsById: Record<string, Post>;
}

export const PostDao: PostDao = {
  postsById: {},
};
