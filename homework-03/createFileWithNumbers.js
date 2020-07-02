const fs = require('fs');
const crypto = require('crypto');
const { Readable } = require('stream');

const TOTAL = Symbol('total number of numbers');
const GENERATE = Symbol('number of generate numbers');

class RandomNumbersStream extends Readable {
  constructor(total) {
    super();

    this[TOTAL] = total;
    this[GENERATE] = 0;
  }

  _read() {
    debugger;
    if (this[GENERATE] > this[TOTAL]) {
      this.destroy();

      return;
    }

    console.log(this[GENERATE]);

    while (true) {
      const buf = new Uint8Array(1024);
      let str = crypto.randomFillSync(buf).toString();

      const ok = this.push(str);
      this[GENERATE] += str.length;

      if (!ok) {
        break;
      }
    }
  }
}

const writeStream = fs.createWriteStream('numbers.txt');
const randomNumbersStream = new RandomNumbersStream(104857600);
randomNumbersStream.pipe(writeStream);