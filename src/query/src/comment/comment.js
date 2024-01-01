class Comment {
  id;
  postId;
  content;
  status;

  constructor({ id, postId, content, status }) {
    this.id = id;
    this.postId = postId;
    this.content = content;
    this.status = status;
  }
}

module.exports = {
  Comment,
};
