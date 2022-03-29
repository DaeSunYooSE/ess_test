import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose"

import { User, userDocument, UserSchema } from 'src/schemas/user';
import { logInUser, registerUser }from "src/type/user.type"
import { hashText, isHashValid } from 'src/util/hash';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<userDocument>
    ) { }
    
    async create(user: registerUser){
        const { userId } = user
        let { password } = user
        if (this.checkUserByUserId(userId)) {
            throw new HttpException('user alread exists', HttpStatus.BAD_REQUEST)
        }
        password = await hashText(password)
        try {
            await this.userModel.create({ userId, password })
            return true
        } catch(e) {
            throw new HttpException(e + ' & cannot create user', HttpStatus.BAD_REQUEST)
        }        
    }

    async checkUserByUserId(userId: string): Promise<User | undefined>{
        // lean is convert Document to Object. POJO.memory > lean.memory
        const user = await this.userModel.findOne({ userId }).lean().exec()
        return user
    }

}
