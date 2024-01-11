import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";


@Injectable()
export class GoogleAuthService extends PassportStrategy(Strategy, 'google') {

    constructor(private config: ConfigService) {
        super({
            clientID: config.get("GOOGLE_CLIENT_ID"),
            clientSecret: config.get("GOOGLE_CLIENT_SECRET"),
            callbackURL: config.get("GOOGLE_AUTH_REDIRECT"),
            scope: ["profile", "email"]
        })
    }


    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
        // User validation and data processing logic goes here
        const { name, emails, photos } = profile;
        const user = {
            id: profile.id,
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, {
            Message: "Yeee , You are logged in.",
            UserData: user
        });

    }

}