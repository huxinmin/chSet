# chSet
简单快速替换目录或多个文件中的一些配置项


## Installation
```shell
# Using npm, installing to local project
npm i --save chset

# Using yarn
yarn add chset
```

## Basic usage

```js
const options = {
  files: ['./*.js'],
  test: /FOO|FOO/g,
  ignore:['*.html'],
  transform: (text) => text.toUpperCase()
};

chSet(options);
```

```js
const options = {
  files: ['./lib', './test'],
  test: /FOO|FOO/g,
  ignore:['*.html'],
  transform: (text) => text.toUpperCase()
};

chSet(options);
```