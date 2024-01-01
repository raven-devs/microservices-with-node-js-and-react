class Post {
  id;
  title;
  comments = {}; // comments by id

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }
}

module.exports = {
  Post,
};
