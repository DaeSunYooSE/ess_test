import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import session from 'express-session'
import { join } from 'path'
import { AppModule } from './app.module'
import MongoStore from 'connect-mongo'
import configuration from './config/configuration'

const config = configuration
const mongo = config.db.mongodb

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, '..', 'client'))
  app.use(
    session({
      secret: mongo.session.secret,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: `mongodb://${mongo.session.user}:${mongo.session.password}@${mongo.url}:${mongo.port}/${mongo.session.dbname}`,
        crypto: {
          secret: 'squirrel',
        },
        //collectionName: "sessions"
      }),
    }),
  )
  await app.listen(3101)
}

bootstrap()
