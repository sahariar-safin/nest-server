import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    console.log({
      dto: dto,
    });
    return this.authService.signUp(dto);
  }
}
