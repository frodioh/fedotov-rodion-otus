exports.inputs = {
  emptyStringFlags: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-',
    '3',
  ],
  duplicateFlags: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-depth',
    '3',
    '-depth',
    '6',
  ],
  booleanFlag: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-depth',
  ],
  multipleBooleanFlags: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-depth',
    '-width',
  ],
  oneStringFlag: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-depth',
    '5'
  ],
  multipleStringFlags: [
    'home/frodion/.nvm/versions/node/v14.1.0/bin/node',
    '/home/frodion/Projects/fedotov-rodion-otus/homework-02/index.js',
    '-depth',
    '5',
    '-width',
    '10'
  ],
};

exports.outputs = {
  booleanFlag: {
    'depth': true,
  },
  multipleBooleanFlags: {
    'depth': true,
    'width': true,
  },
  oneStringFlag: {
    'depth': '5',
  },
  multipleStringFlags: {
    'depth': '5',
    'width': '10',
  },
};
