import { Module } from "@nestjs/common";
import { GoogleAuthModule } from "./google/googleAuth.module";
import { AuthController } from "./auth.controller";
import { SessionSerializer } from "./utils/SessionSerializer";
import { FacebookAuthModule } from "./facebook/facebookAuth.module";
import { AppleAuthModule } from "./apple/appleAuth.module";


@Module({
    imports: [GoogleAuthModule, FacebookAuthModule, AppleAuthModule],
    controllers: [AuthController],
    providers: [SessionSerializer]
})
export class AuthModule {

}