import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { configInterface } from './config.type';

const YAML_CONFIG_FILENAME = 'config.yaml';

const config = () => {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as configInterface;
};

export default config()