class Post {
  id;
  title;

  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }
}

module.exports = {
  Post,
};