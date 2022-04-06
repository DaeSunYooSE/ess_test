import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User, userDocument } from 'src/schemas/user'
import { registerUser } from 'src/type/user.type'
import { hashText } from 'src/util/hash'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}

  async create(user: registerUser) {
    const { userId } = user
    const checkUser = await this.checkUserByUserId(userId)
    const now = Date.now()

    if (checkUser !== null) {
      throw new HttpException('user alread exists', HttpStatus.BAD_REQUEST)
    }

    const password = await hashText(user.password)
    try {
      await this.userModel.create({
        userId,
        username: user.username,
        password,
        createDate: now,
      })
      return { statusCode: 200, message: 'success to create' }
    } catch (e) {
      throw new HttpException(
        e + ' & cannot create user',
        HttpStatus.BAD_REQUEST,
      )
    }
  }

  async checkUserByUserId(userId: string): Promise<User> | null {
    // lean is convert Document to Object. POJO.memory > lean.memory
    const user = await this.userModel.findOne({ userId }).lean().exec()
    return user
  }
}
