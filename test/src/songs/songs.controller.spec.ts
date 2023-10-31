import { Test, TestingModule } from '@nestjs/testing';
import { SongsController } from '../../../src/songs/songs.controller';
import { SongsService } from '../../../src/songs/songs.service';

describe('SongsController', () => {
  let controller: SongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [SongsService],
    }).compile();

    controller = module.get<SongsController>(SongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
