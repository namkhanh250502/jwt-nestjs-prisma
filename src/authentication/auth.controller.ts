import { Controller,Post,Body,Req,Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login-user.dto";
import {Request,Response} from 'express'
import { RegisterUsersDto } from "./dto/register-user.dto";


@Controller('/auth')
export class AuthController{


     constructor(private readonly authService:AuthService){}



     @Post('/login')
     async login(@Req() request:Request, @Res() response :Response, @Body() loginDto: LoginDto):Promise<any>{
          try{
              const result = await this.authService.login(loginDto);
              console.log('loginDto: ', loginDto);
              return response.status(200).json({
               status: 'Ok!',
               message: 'Đăng nhập thành công!',
               result: result
              })

          }catch(err){
            console.log('err: ', err);
               return response.status(500).json({
                    status: 'Error!',
                    message: 'Đăng nhập thất bại!',
                   })
          }
     }


     @Post('/register')
     async register(@Req() request:Request, @Res() response :Response, @Body() registerDto: RegisterUsersDto):Promise<any>{
          try {
               const result = await this.authService.register(registerDto);
               console.log('registerDto: ', registerDto);
               return response.status(200).json({
                 status: 'Ok!',
                 message: 'Đăng ký thành công!',
                 result: result,
               });
             } catch (err) {
               console.log(err)
               return response.status(500).json({
                 status: 'Error!',
                 message: 'Đăng ký thất bại!',
               });
             }
           }
     
}