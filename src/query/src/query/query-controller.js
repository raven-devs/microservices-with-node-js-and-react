const { HttpStatusCode } = require('axios');
const { PostDao } = require('../post/post-dao');

const QueryController = {
  findAllPosts: (req, res) => {
    res.status(HttpStatusCode.Ok).send(PostDao.postsById);
  },
};

module.exports = {
  QueryController,
};
