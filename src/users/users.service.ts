import { Injectable } from '@nestjs/common';

export interface User {
  id: string;
  name: string;
}

@Injectable()
export class UsersService {
  users: User[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' },
  ];
  // Service methods would go here
  getUsers() {
    return this.users;
  }

  createUser(name: string) {
    const newUser = { id: (this.users.length + 1).toString(), name };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, name: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.name = name;
    }
    return user;
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  updateUserName(id: string, name: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.name = name;
    }
    return user;
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
