import { Body, Controller, Get, Post } from '@nestjs/common'
import { registerUser } from 'src/type/user.type'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: registerUser) {
    return this.userService.create(user)
  }
}
