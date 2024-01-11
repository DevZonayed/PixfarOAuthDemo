import { Controller, Get } from "@nestjs/common";


@Controller("auth")
export class AuthController{

    @Get()
    handleAuthGet(){
        return "Auth Route Get Request"
    }
}