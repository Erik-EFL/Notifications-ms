import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Controller('notifications') // <== define o prefixo da rota
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
  @Get()
  list() {
    return this.prisma.notification.findMany();
  }
