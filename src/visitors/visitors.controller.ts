import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorEntity } from './visitor.entity';
import { DeepPartial, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { CreateVisitorDto } from "./dto/create-visitor.dto";

@ApiTags('Посетители')
@Controller('visitors')
export class VisitorsController {
  constructor(private visitorService: VisitorsService) {}

  @Get(':id')
  async findOne(@Param() id: string): Promise<VisitorEntity> {
    return this.visitorService.findById(id);
  }

  @Get()
  async findMany(@Query() query): Promise<VisitorEntity[]> {
    return this.visitorService.findMany(query);
  }

  @Post()
  async create(@Body() visitorDto: CreateVisitorDto): Promise<VisitorEntity> {
    return this.visitorService.create(visitorDto);
  }

  @Patch(':id')
  async update(
    @Param() id: string,
    visitorDto: CreateVisitorDto,
  ): Promise<UpdateResult> {
    return this.visitorService.update(id, visitorDto);
  }

  @Delete(':id')
  async delete(@Param() id: string): Promise<VisitorEntity> {
    return this.visitorService.deleteById(id);
  }

  @Patch(':id/restore')
  async restore(@Param() id: string): Promise<UpdateResult> {
    return this.visitorService.restoreById(id);
  }
}
