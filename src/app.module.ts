import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { SingersModule } from './singers/singers.module';
import configuration from './config/config'

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true,
  }), AlbumModule,
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      uri: configService.get('urlDb')
    }),
    inject: [ConfigService]
  }),
  SongsModule,
  SingersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
