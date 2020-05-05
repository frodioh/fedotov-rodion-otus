class TreeFormatter {
  constructor(tree) {
    this.tree = tree;
  }

  getStringRepresentation() {
    function parseTree(tree, level, isLastOnLevel) {
      let treeItem = '';

      if (level === 0) {
        treeItem += `${tree.name}\n`;
      }

      for (let i = 1; i <= level; i++) {
        if (i < level) {
          treeItem += isLastOnLevel[i] ? '  ' : '│ ';
        }

        if (i === level) {
          treeItem += isLastOnLevel[level] ? '└' : '├';
          treeItem += `── ${tree.name}\n`;
        }
      }

      if (tree.items) {
        for (let i = 0; i < tree.items.length; i++) {
          let newIsLastOnLevel = isLastOnLevel.slice(0);
          newIsLastOnLevel.push(i === (tree.items.length - 1));

          treeItem += parseTree(
            tree.items[i],
            level + 1,
            newIsLastOnLevel,
          );
        }
      }

      return treeItem;
    }

    return parseTree(
      this.tree,
      0,
      [true]
    );
  }
}

module.exports = TreeFormatter;

