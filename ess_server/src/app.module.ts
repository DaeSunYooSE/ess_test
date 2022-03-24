import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forRoot("mongodb://172.17.0.4:27017/nest"),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,"..","client")
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
