const glob = require("glob")
import { IConfig } from '../types';

function getPaths(patterns: string[], config:IConfig) {
  const {ignore} = config;

  const cfg = Object.assign({ignore}, {nodir: true});

  const paths = patterns.map(pattern => glob.sync(pattern, cfg));

  return [].concat.apply([], paths);
};

export default getPaths