import type { IConfig } from '../types';
declare type IParams = Omit<IConfig, 'ignore' | 'encoding' | 'src' | 'test'> & {
    file: string;
    contents: string;
    test: RegExp[];
};
declare function doReplace({ contents, test, transform, file }: IParams): {
    result: {
        file: string;
        hasChanged: boolean;
    };
    newContents: string;
};
export default doReplace;
