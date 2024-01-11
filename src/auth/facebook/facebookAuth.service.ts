import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookAuthService extends PassportStrategy(Strategy, 'facebook') {
    constructor(private config: ConfigService) {
        super({
            clientID: config.get("FACEBOOK_APP_ID"),
            clientSecret: config.get("FACEBOOK_APP_SECRET"),
            callbackURL: config.get("FACEBOOK_AUTH_REDIRECT"),
            scope: 'email',
            profileFields: ['name', 'email']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        // User validation and data processing logic goes here
        return {
            id: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
        };
    }
}
