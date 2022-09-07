import { Injectable } from '@nestjs/common';
import { User } from '../entities/User.entity';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userRepository: ReturnModelType<typeof User>) {}

    async getUsers(userId: string) {
        return this.userRepository.find({ where: { userId: userId } });
    }
}
