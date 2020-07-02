const util = require('util');
const fs = require('fs');
const stream = require('stream');
const stat = util.promisify(fs.stat);
const finished = util.promisify(stream.finished);

module.exports = async function splitFile(filename, partsNumber) {
  const stats = await stat(filename);
  const partSize = Math.floor(stats.size / partsNumber);
  const filesPool = [];
  const promisesPool = [];

  for (let i = 0; i < partsNumber; i++) {
    const fileName = `numbers${i}.txt`;
    const stream = fs.createWriteStream(fileName);
    filesPool.push(stream);
    promisesPool.push(finished(stream));
  }

  let currentPartNumber = 0;
  let currentBytesNumber = 0;
  const readStream = fs.createReadStream(filename);
  readStream.on('data', (chunk) => {
    if (
      currentPartNumber !== (partsNumber - 1)
      && (currentBytesNumber + chunk.length) >= partSize
    ) {
      let currentTail = chunk.slice(0, partSize - currentBytesNumber);
      const lastCommaIndex = currentTail.lastIndexOf(',');
      currentTail = currentTail.slice(0, lastCommaIndex);
      filesPool[currentPartNumber].write(currentTail);

      const nextHead = chunk.slice(lastCommaIndex + 1);
      filesPool[currentPartNumber + 1].write(nextHead);

      currentBytesNumber = nextHead.length;
      currentPartNumber++;
      return;
    }

    filesPool[currentPartNumber].write(chunk);
    currentBytesNumber += chunk.length;
  });
  readStream.on('end', () => {
    filesPool[partsNumber - 1].end();
  });

  await Promise.all(promisesPool);

  console.log('files created');

  return filesPool.map(fileStream => fileStream.path);
};