const expect = require('expect');

const Users = require('./users');

describe('Users', () => {
  let mockUsers;

  beforeEach(() => {
    mockUsers = new Users();
    mockUsers.users = [{
      id: '1',
      name: 'i',
      room: 'node'
    }, {
      id: '2',
      name: 'j',
      room: 'react'
    }, {
      id: '3',
      name: 'i',
      room: 'node'
    }]
  })
  
  it('should add new user', () => {
    const demoUsers = new Users();
    const user = {
      id: '123',
      name: 'arian',
      room: 'The office fans'
    }

    let resUser = demoUsers.addUser(user);
    expect(demoUsers.users).toEqual([resUser])
  })

  it('should return list of users of a room', () => {
    const expectedUsers = mockUsers.getUsersList('node');
    expect(expectedUsers).toEqual([mockUsers.users[0].name, mockUsers.users[2].name])
  })

  it('should remove a user', () => {
    const removedUser = mockUsers.removeUser('1');
    expect(removedUser).toMatchObject({"id": '1'});
    expect(mockUsers.users).toHaveLength(2);
  });

  it('should not remove user', () => {

  });

  it('should find user by id', () => {
    let user = mockUsers.getUser('2');
    expect(user).toEqual(mockUsers.users[1])
  });

  it('should not find user', () => {
    let user = mockUsers.getUser('5');
    expect(user).toEqual(undefined)
  });
})
