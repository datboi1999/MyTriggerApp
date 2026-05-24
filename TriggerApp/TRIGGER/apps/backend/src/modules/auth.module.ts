import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'trigger-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class AuthModule {}
