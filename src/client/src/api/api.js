const Api = {
  Posts: {
    create: () => `http://localhost:4001/posts`,
  },
  Comments: {
    createByPostId: (postId) => `http://localhost:4002/posts/${postId}/comments`,
  },
  Query: {
    findAllPosts: () => `http://localhost:4003/posts`,
  },
};

module.exports = {
  Api,
};
