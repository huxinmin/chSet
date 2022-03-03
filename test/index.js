const chSet = require('../lib/index');

const options = {
  src: ['./*.js'],
  test: /TOO/ig,
  transform: (text) => text.toUpperCase()
};

chSet(options);