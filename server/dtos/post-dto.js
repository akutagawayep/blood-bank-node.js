module.exports = class PostDto {
  email;
  name;
  type;
  number;
  role;
  city;
  isActive;
  date;
  id;

  constructor(model) {
    this.email = model.email;
    this.name = model.name;
    this.type = model.type;
    this.number = model.number;
    this.role = model.role;
    this.city = model.city;
    this.isActive = model.isActive;
    this.date = model.date;
    this.id = model._id;
  }
};
