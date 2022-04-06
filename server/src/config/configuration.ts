import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'
import { configInterface } from './config.type'

const YAML_CONFIG_FILENAME = 'config.yaml'

const config = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as configInterface
}

const c = config()

const configuration: configInterface = {
  http: { port: c.http.port || 8080 },
  db: {
    postgres: {
      url: c.db.postgres.url || 'localhost',
      port: c.db.postgres.port || 5432,
      database: c.db.postgres.database || 'postgres',
    },
    mongodb: {
      url: c.db.mongodb.url || 'localhost',
      port: c.db.mongodb.port || 27017,
      database: {
        dbname: c.db.mongodb.database.dbname || 'nest',
        user: c.db.mongodb.database.user || 'nest',
        password: c.db.mongodb.database.password || 'nest-stnd',
      },
      session: {
        user: c.db.mongodb.session.user || 'session',
        password: c.db.mongodb.session.password || 'session-stnd',
        dbname: c.db.mongodb.session.dbname || 'nest-session',
        secret: c.db.mongodb.session.secret || 'secret-key',
      },
    },
  },
}

export default configuration
