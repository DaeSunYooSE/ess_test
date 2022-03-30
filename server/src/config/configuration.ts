import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { configInterface } from './config.type';

const YAML_CONFIG_FILENAME = 'config.yaml';
var num: number = 0

const config = () => {
  if (num == 0) {
    num += 1
    return yaml.load(
      readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
      ) as configInterface;
  }
  else {
    return configs
  }
};
const configs = config()
export default configs