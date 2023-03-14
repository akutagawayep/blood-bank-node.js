module.exports = class PostDto {
  name;
  type;
  number;
  role;
  active;
  key;
  id;

  constructor(model) {
    this.name = model.name;
    this.type = model.type;
    this.number = model.number;
    this.role = model.role;
    this.active = model.active;
    this.key = model.key;
    this.id = model._id;
  }
};
  