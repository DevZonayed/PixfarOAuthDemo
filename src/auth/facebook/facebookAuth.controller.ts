import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/facebook')
export class FacebookAuthController {

    // api/auth/facebook/login
    @Get('login')
    @UseGuards(AuthGuard('facebook'))
    async facebookLogin() {
    }

    // api/auth/facebook/redirect
    @Get('redirect')
    @UseGuards(AuthGuard('facebook'))
    facebookLoginRedirect(@Req() req) {
        return {
            msg: "Redirected",
            userInfo: req.user
        };
    }
}
