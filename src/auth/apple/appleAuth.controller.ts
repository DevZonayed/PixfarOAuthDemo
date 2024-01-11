/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/apple')
export class AppleAuthController {

    // api/auth/apple/login
    @Get('login')
    @UseGuards(AuthGuard('apple'))
    async appleLogin(@Req() req) {
        // Initiates the Apple OAuth flow
    }

    // api/auth/apple/redirect
    @Get('redirect')
    @UseGuards(AuthGuard('apple'))
    appleLoginRedirect(@Req() req) {
        // Handles the OAuth redirect
        return req.user;
    }
}
