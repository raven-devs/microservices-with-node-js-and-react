interface PostDao {
  postsById: Record<string, unknown>;
}

export const PostDao: PostDao = {
  postsById: {},
};
