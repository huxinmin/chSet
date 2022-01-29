import type { IConfig } from '../types';
declare function parseConfig(config: IConfig): Partial<IConfig> & IConfig;
export default parseConfig;
