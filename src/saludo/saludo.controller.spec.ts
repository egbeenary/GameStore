import { Test, TestingModule } from '@nestjs/testing';
import { SaludoController } from './saludo.controller';

describe('SaludoController', () => {
  let controller: SaludoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaludoController],
    }).compile();

    controller = module.get<SaludoController>(SaludoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
