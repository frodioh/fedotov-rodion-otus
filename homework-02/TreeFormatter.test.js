const TreeFormatter = require('./TreeFormatter.js');
const TreeFormatterFixtures = require('./fixtures/TreeFormatter.fixtures.js');

test('prints tree', () => {
  const treeFormatter = new TreeFormatter(
    TreeFormatterFixtures.inputs.treeStructure
  );

  expect(
    treeFormatter.getStringRepresentation()
  ).toBe(
    TreeFormatterFixtures.outputs.treeStructure
  );
});

