import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import configuration from './config/configuration'

const mongodb = configuration.db.mongodb

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${mongodb.database.user}:${mongodb.database.password}@${mongodb.url}:${mongodb.port}/${mongodb.database.dbname}`, //
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
