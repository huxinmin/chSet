export interface IConfig {
  ignore: string[];
  encoding: string;
  files : string[];
  test: RegExp | RegExp[];
  transform: (matchText: string)=> string;
}