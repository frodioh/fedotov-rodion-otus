function printTree(tree) {
    function parseTree(tree, level, isLast) {
        let treeItem = '';

        if (level === 0) {
            treeItem += `${tree.name}\n`;
        }

        for (let i = 1; i <= level; i++) {
            if (i < level) {
                treeItem += '│ ';
            }

            if (i === level) {
                treeItem += isLast ? '└' : '├';
                treeItem += `── ${tree.name}\n`;
            }
        }

        if (tree.items) {
            for (let i = 0; i < tree.items.length; i++) {
                treeItem += parseTree(
                  tree.items[i],
                  level + 1,
                  i === (tree.items.length - 1),
                );
            }
        }

        return treeItem;
    }

    return parseTree(
      tree,
      0,
      true
    );
}

module.exports = printTree;
