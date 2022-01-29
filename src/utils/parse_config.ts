
import { defaultsConfig } from '../constants';
import type { IConfig } from '../types';
import validateConfig from './validate_config';


function parseConfig(config:IConfig) {
  validateConfig(config);

  if (!Array.isArray(config.test)) {
    config.test = [config.test];
  }
  return Object.assign({}, defaultsConfig, config);
};

export default parseConfig