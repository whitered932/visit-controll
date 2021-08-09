import { Module } from '@nestjs/common';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorEntity } from './visitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorEntity])],
  providers: [VisitorsService],
  controllers: [VisitorsController],
})
export class VisitorsModule {}
