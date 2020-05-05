const FlagsParser = require('./FlagsParser');
const FlagsParserFixtures = require('./fixtures/FlagsParser.fixtures.js');

test('throws error on empty string flag', () => {
  expect(() => {
    new FlagsParser(FlagsParserFixtures.inputs.emptyStringFlags)
  }).toThrow();
});

test('throws error on duplicate flags', () => {
  expect(() => {
    new FlagsParser(FlagsParserFixtures.inputs.duplicateFlags)
  }).toThrow();
});

test('parses boolean flags', () => {
  const flagsParser = new FlagsParser(FlagsParserFixtures.inputs.booleanFlag);

  expect(flagsParser.getFlags()).toEqual(
    new Map(
      Object.entries(FlagsParserFixtures.outputs.booleanFlag)
    )
  );
});

test('parses multiple boolean flags', () => {
  const flagsParser = new FlagsParser(FlagsParserFixtures.inputs.multipleBooleanFlags);

  expect(flagsParser.getFlags()).toEqual(
    new Map(
      Object.entries(FlagsParserFixtures.outputs.multipleBooleanFlags)
    )
  );
});

test('parses one string flag', () => {
  const flagsParser = new FlagsParser(FlagsParserFixtures.inputs.multipleStringFlags);

  expect(flagsParser.getFlags()).toEqual(
    new Map(
      Object.entries(FlagsParserFixtures.outputs.multipleStringFlags)
    )
  );
});

