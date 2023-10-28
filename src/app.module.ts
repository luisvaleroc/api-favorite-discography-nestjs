import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AlbumModule,
    MongooseModule.forRoot('mongodb://discography:favorite@localhost:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
