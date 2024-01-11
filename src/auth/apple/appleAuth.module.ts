import { Module } from '@nestjs/common';
import { AppleAuthController } from './appleAuth.controller';
import { AppleAuthService } from './appleAuth.service';

@Module({
  controllers: [AppleAuthController],
  providers: [AppleAuthService],
})
export class AppleAuthModule {}
