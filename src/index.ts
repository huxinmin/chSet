import { IConfig } from './types';
import getPaths from './utils/get_paths';
import parseConfig from './utils/parse_config';
import replace from './utils/replace';

function chSet(config:IConfig) {
  const pasrsedConfig = parseConfig(config);

  const {files, test, transform} = pasrsedConfig;
  const paths = getPaths(files, pasrsedConfig);

  return paths.map(path => replace({
    //@ts-ignore
    file: path, test, transform, config
  }));
}


export default chSet
