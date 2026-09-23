import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Sagar1',
      email: 'sagar@example.com',
      age: 30,
    },
    {
      id: 2,
      name: 'John1',
      email: 'john@example.com',
      age: 28,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(userData: any) {
    const newUser = {
      id: this.users.length
        ? Math.max(...this.users.map(user => user.id)) + 1
        : 1,
      ...userData,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, userData: any) {
    const user = this.users.find(user => user.id === id);

    if (!user) {
      return undefined;
    }

    Object.assign(user, userData);

    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      return undefined;
    }

    const deletedUser = this.users[index];

    this.users.splice(index, 1);

    return deletedUser;
  }
}