import type { IConfig } from '../types';
declare function replace({ file, test, transform, encoding }: Omit<IConfig, 'files' | 'test'> & {
    file: string;
    test: RegExp[];
}): {
    file: string;
    hasChanged: boolean;
};
export default replace;
