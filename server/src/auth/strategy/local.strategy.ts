import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../auth.service'
import { userTokenInfo } from 'src/type/user.type'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'userId' })
  }

  async validate(userId: string, password: string): Promise<userTokenInfo> {
    const user = await this.authService.validateUser(userId, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
