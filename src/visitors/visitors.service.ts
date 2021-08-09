import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, UpdateResult } from 'typeorm';

import { VisitorEntity } from './visitor.entity';
import { CreateVisitorDto } from './dto/create-visitor.dto';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(VisitorEntity)
    private visitorRepository: Repository<VisitorEntity>,
  ) {}

  async findById(id: string): Promise<VisitorEntity> {
    const foundedVisitor = await this.visitorRepository.findOne(id, {
      withDeleted: false,
    });
    if (!foundedVisitor) {
      throw new NotFoundException('Посетитель не был найден');
    }
    return foundedVisitor;
  }

  async findMany(query: any): Promise<VisitorEntity[]> {
    return this.visitorRepository.find();
  }

  async create(visitorDto: CreateVisitorDto): Promise<VisitorEntity> {
    const visitor = this.visitorRepository.create({
      name: visitorDto.name,
      surname: visitorDto.surname,
      middlename: visitorDto.middlename,
    });
    return this.visitorRepository.save(visitor);
  }

  async update(
    id: string,
    visitorDto: CreateVisitorDto,
  ): Promise<UpdateResult> {
    return this.visitorRepository.update(id, visitorDto);
  }

  async deleteById(id: string): Promise<VisitorEntity> {
    const visitor = await this.findById(id);
    return this.visitorRepository.softRemove(visitor);
  }

  async restoreById(id: string): Promise<UpdateResult> {
    return this.visitorRepository.restore(id);
  }
}
