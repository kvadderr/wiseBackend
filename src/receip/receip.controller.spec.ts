import { Test, TestingModule } from '@nestjs/testing';
import { ReceipController } from './receip.controller';
import { ReceipService } from './receip.service';

describe('ReceipController', () => {
  let controller: ReceipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceipController],
      providers: [ReceipService],
    }).compile();

    controller = module.get<ReceipController>(ReceipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
