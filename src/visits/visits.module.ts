import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitEntity } from './visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitEntity])],
  controllers: [VisitsController],
  providers: [VisitsService],
})
export class VisitsModule {}
