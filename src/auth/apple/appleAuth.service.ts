import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-apple';

@Injectable()
export class AppleAuthService extends PassportStrategy(Strategy, 'apple') {
    constructor(private config: ConfigService) {
        super({
            clientID: config.get("APPLE_CLIENT_ID"),
            teamID: config.get("APPLE_TEAM_ID"),
            keyID: config.get("APPLE_KEY_ID"),
            privateKey: config.get("APPLE_PRIVATE_KEY"),
            callbackURL: config.get("APPLE_AUTH_REDIRECT"),
            scope: ['name', 'email']
        });
    }

    async validate(accessToken: string, refreshToken: string, idToken: string, profile: any) {
        // User validation and data processing logic goes here
        return {
            id: profile.id,
            email: profile.email,
            firstName: profile.firstName,
            lastName: profile.lastName
        };
    }
}
