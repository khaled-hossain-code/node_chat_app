class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = {
      id,
      name,
      room
    };

    this.users.push(user);
    return user;
  }

  removeUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id)
    let removedUser = this.users.splice(userIndex, 1);
    return removedUser[0];
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  getUsersList(room) {
    return this
      .users
      .filter(user => user.room === room)
      .map(user => user.name)
  }
}

module.exports = Users;