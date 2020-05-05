exports.inputs = {
  treeStructure: {
    "name": 1,
    "items": [
      {
        "name": 2,
        "items": [
          { "name": 3 },
          { "name": 4 }
        ]
      },
      {
        "name": 5,
        "items": [
          { "name": 6 }
        ]
      },
      {
        "name": 7
      },
    ]
  }
};

exports.outputs = {
  treeStructure: '1\n' +
  '├── 2\n' +
  '│ ├── 3\n' +
  '│ └── 4\n' +
  '├── 5\n' +
  '│ └── 6\n' +
  '└── 7\n',
};

