import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import {Request,Response} from 'express'
import { JwtAuthGuard } from "src/authentication/auth.guard";
import { AuthGuard } from "@nestjs/passport";


@Controller('users')
export class UsersController {
     constructor(private readonly userService : UsersService){}

     @Get('get')
     @UseGuards(JwtAuthGuard)
     async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
          try{
              
               console.log(request.user);
               return response.status(200).json({
                    status: 'Ok!',
                    message: 'Truy cập dữ liệu thành công!',
                    result: request.user
               })
          }catch(err){
               console.log('err: ', err);
               return response.status(500).json({
                    status: 'Err!',
                    message : 'Truy cập dữ liệu thất bại!'
               })
          }
     }
}