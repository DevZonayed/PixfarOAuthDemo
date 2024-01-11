import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth/google")
export class GoogleAuthController {

    // api/auth/google/login
    @Get("login")
    @UseGuards(AuthGuard("google"))
    async handleGoogleAuth() { }


    // api/auth/google/redirect
    @Get("redirect")
    @UseGuards(AuthGuard("google"))
    async googleAuthRedirect(@Req() req) {
        return req.user
    }
}