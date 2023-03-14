module.exports = class UserDto {
  email;
  role;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.role = model.role;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
};
