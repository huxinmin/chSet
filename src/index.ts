import { IConfig } from './types';
import getPaths from './utils/get_paths';
import parseConfig from './utils/parse_config';
import replace from './utils/replace';

function chSet(config:IConfig) {
  const pasrsedConfig = parseConfig(config);

  const {src, test, transform} = pasrsedConfig;
  const paths = getPaths(src, pasrsedConfig);

  return paths.map(path => replace({
    //@ts-ignore
    file: path, test, transform, config
  }));
}


module.exports = chSet
