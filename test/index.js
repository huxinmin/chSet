const chSet = require('../lib/index').default;

const options = {
  files: ['./*.js'],
  test: 'FOO',
  transform: (text) => text.toUpperCase()
};

chSet(options);