import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: bcrypt.hashSync('changeme', 10),
      role: 'admin',
    },
    {
      userId: 2,
      username: 'chris',
      password: bcrypt.hashSync('secret', 10),
      role: 'user',
    },
    {
      userId: 3,
      username: 'maria',
      password: bcrypt.hashSync('guess', 10),
      role: 'user',
    },
  ];

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async update(id: number, user: UpdateUserDto): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
