// const users = [new User("Uma"), new User("Josh"), new User("Ollie")];

class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return users.length;
  }

  getNames() {
    return users.map((user) => user.getName());
  }

  getIntroductions() {
    return users.map((user) => user.getIntroduction());
  }
}

module.exports = UserBase;
