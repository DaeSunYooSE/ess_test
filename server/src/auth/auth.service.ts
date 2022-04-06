import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User, userDocument } from 'src/schemas/user'
import { logInUser, userTokenInfo } from 'src/type/user.type'
import { isHashValid } from 'src/util/hash'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<userDocument>,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: string, password: string) {
    const user = await this.userModel.findOne({ userId: userId }).lean().exec()
    if (user && isHashValid(password, user.password)) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: userTokenInfo) {
    const payload = user
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
  async logout(user: userTokenInfo) {}
}
