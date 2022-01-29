import { IConfig } from './types';
declare function chSet(config: IConfig): {
    file: string;
    hasChanged: boolean;
}[];
export default chSet;
