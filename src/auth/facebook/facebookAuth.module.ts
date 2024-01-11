import { Module } from "@nestjs/common";
import { FacebookAuthController } from "./facebookAuth.controller";
import { FacebookAuthService } from "./facebookAuth.service";

@Module({
    controllers: [FacebookAuthController],
    providers: [FacebookAuthService]
})
export class FacebookAuthModule {

}