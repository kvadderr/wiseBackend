import { Test, TestingModule } from '@nestjs/testing';
import { ReceipService } from './receip.service';

describe('ReceipService', () => {
  let service: ReceipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceipService],
    }).compile();

    service = module.get<ReceipService>(ReceipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
