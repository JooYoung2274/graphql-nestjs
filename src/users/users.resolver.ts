import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../entities/User.entity';

@Resolver('User')
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(() => [User])
    async getUsers(@Args('userId') userId: string) {
        return await this.usersService.getUsers(userId);
    }
}
