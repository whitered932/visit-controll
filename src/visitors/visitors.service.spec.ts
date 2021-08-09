import { Test, TestingModule } from '@nestjs/testing';
import { VisitorsService } from './visitors.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VisitorEntity } from './visitor.entity';

describe('VisitorsService', () => {
  let service: VisitorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VisitorsService,
        {
          provide: getRepositoryToken(VisitorEntity),
          useFactory: () => ({
            metadata: {
              columns: [
                {
                  isPrimary: true,
                  propertyName: 'id',
                },
              ],
              connection: { options: { type: null } },
              relations: [],
            },
          }),
        },
      ],
    }).compile();

    service = module.get<VisitorsService>(VisitorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
