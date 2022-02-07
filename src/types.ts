export interface IConfig {
  ignore: string[];
  encoding: string;
  src : string[];
  test: RegExp | RegExp[];
  transform: (matchText: string)=> string;
}