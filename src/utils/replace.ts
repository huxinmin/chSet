import type { IConfig } from '../types';
import doReplace from './do_replace';
const fs = require('fs');

function replace({file, test, transform, encoding}: Omit<IConfig, 'files'| 'test'> & {file: string, test: RegExp[]}) {
  const contents = fs.readFileSync(file, encoding).toString();

  const {result, newContents} = doReplace(
   { contents, test, transform, file}
  );

  if (result.hasChanged) {
    fs.writeFileSync(file, newContents, encoding);
  }

  return result;
};

export default replace