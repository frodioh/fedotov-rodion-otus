#!/usr/bin/env node
const path = require('path');
const FlagsParser = require('./FlagsParser.js');
const DirectoryFormatter = require('./DirectoryFormatter.js');
const FIRST_USER_ARGUMENT = 2;

const directory = process.argv[FIRST_USER_ARGUMENT];
if (directory === undefined) {
  throw new Error('directory can\'t be empty');
}

const flagsParser = new FlagsParser(process.argv);
const depthFlag = parseInt(flagsParser.getFlag(
  'depth',
  'd'
),10);

const directoryFormatter = new DirectoryFormatter(
  path.join(
    process.cwd(),
    directory
  ),
  !Number.isNaN(depthFlag) ? depthFlag : null,
);

console.log(directoryFormatter.getStringRepresentation());

