import { Module } from '@nestjs/common';
import { SingersService } from './singers.service';
import { SingersController } from './singers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Singer, SingerSchema } from './schemas/singer.schema';

@Module({
imports: [MongooseModule.forFeature([{name: Singer.name, schema: SingerSchema}])],
  controllers: [SingersController],
  providers: [SingersService],
})
export class SingersModule {}
