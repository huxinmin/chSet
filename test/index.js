const chSet = require('../lib/index').default;

const options = {
  files: ['./*.js'],
  test: /FOO|FOO/g,
  transform: (text) => text.toUpperCase()
};

chSet(options);