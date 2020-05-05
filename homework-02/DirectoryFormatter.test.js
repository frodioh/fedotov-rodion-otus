const DirectoryFormatter = require('./DirectoryFormatter');
const DirectoryFormatterFixtures = require('./fixtures/DirectoryFormatter.fixtures.js');

test('throws error on file path', () => {
  expect(() => {
    new DirectoryFormatter('./package.json')
  }).toThrow();
});

test('throw error on empty argument', () => {
  expect(() => {
    new DirectoryFormatter();
  }).toThrow();
});

test('prints directory tree', () => {
  const directoryFormatter = new DirectoryFormatter('./fixtures');

  expect(directoryFormatter.getStringRepresentation()).toEqual(
    DirectoryFormatterFixtures.outputs.fixturesDirectoryString
  );
});
