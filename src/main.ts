import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from "passport"
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  // Session Middleware
  app.use(
    session({
      secret: 'jfvbhkwejahbcs',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000
      }
    }));
  // Passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3001);
}
bootstrap();
