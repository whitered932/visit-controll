import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorsModule } from './visitors/visitors.module';
import { VisitsModule } from './visits/visits.module';

@Module({
  imports: [VisitorsModule, VisitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
