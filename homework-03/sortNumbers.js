const fs = require('fs');
const splitFile = require('./splitFile');

const PARTS_NUMBER = 4;

async function sortNumbers() {
  const files = await splitFile('./numbers.txt', PARTS_NUMBER);

}

