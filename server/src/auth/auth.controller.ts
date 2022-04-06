import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { userTokenInfo } from 'src/type/user.type'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt/jwt-auth.guard'
import { LocalAuthGuard } from './strategy/local-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: Request) {
    const user: userTokenInfo | any = req.user
    return this.authService.login(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Req() req: Request) {
    const jwt: string = req.headers.authorization.replace('bearer', '')
  }
}
