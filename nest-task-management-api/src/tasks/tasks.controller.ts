import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Request, Response } from 'express';
@Controller('tasks')
export class TasksController {
  @Get()
  findAll() {
    return 'Get all tasks';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `${id}`;
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): string {
    return `Title: ${createTaskDto.title}
            Description: ${createTaskDto.description}    
    `;
  }

  @Put(':id')
  update(@Body() updateTaskDto: CreateTaskDto, @Param('id') id): string {
    return `Update ${id} - Title: ${updateTaskDto.title}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }
}
