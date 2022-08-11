import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn() {
    return { msg: 'shut the fuck off!!' };
  }

  signUp(dto: AuthDto) {
    console.log(dto);
    return { msg: 'shut the fuck off!!' };
  }
}
