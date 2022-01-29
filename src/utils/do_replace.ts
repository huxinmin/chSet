import type { IConfig } from '../types';

type IParams  = Omit<IConfig, 'ignore'|'encoding' | 'files' | 'test'> & {file: string, contents: string, test: RegExp[]}

function doReplace({contents, test, transform, file}: IParams ) {
  const result = {file, hasChanged:false};

  const newContents = test.reduce((totalContents, item) => {
    const matches = contents.match(item);
    if (matches?.length) result.hasChanged = true;
    matches?.forEach((matchText)=> {
      totalContents = totalContents.replace(item, transform(matchText));
    });

    return totalContents;
  }, contents);

  return {result, newContents};
};

export default doReplace;