const fs = require('fs');
const path = require('path');
const TreeFormatter = require('./TreeFormatter.js');

class DirectoryFormatter extends TreeFormatter {
  constructor(directory, depth) {
    let tree = {};

    function parseDirectory(directory, treeItem, level) {
      if (!treeItem.name) {
        treeItem.name = path.parse(directory).base;
      }

      if (Number.isInteger(depth) && level >= depth) {
        return tree;
      }

      const list = fs.readdirSync(directory);
      if (list && list.length > 0) {
        treeItem.items = [];

        list.forEach(function(fileName) {
          const newTreeItem = {};
          const file = path.resolve(directory, fileName);
          const stats = fs.statSync(file);

          newTreeItem.name = fileName;
          treeItem.items.push(newTreeItem);

          if (stats && stats.isDirectory()) {
            parseDirectory(file, newTreeItem, level + 1);
          }
        });
      }

      return tree;
    }

    super(parseDirectory(directory, tree, 0));
  }
}

module.exports = DirectoryFormatter;

