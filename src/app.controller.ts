/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('register')
  register() {
    return {};
  }

  @Get('index')
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('CRDLE')
  @Render('CRDLE')
  crdle() {
    return {};
  }
}
