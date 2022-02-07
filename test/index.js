const chSet = require('../lib/index');

const options = {
  src: ['./*.js'],
  test: 'FOO',
  transform: (text) => text.toUpperCase()
};

chSet(options);