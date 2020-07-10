import * as fs from 'fs';
import * as path from 'path';
import ArbitraryObject from './interfaces/ArbitraryObject';

function readJsonAsync(fpath: string): ArbitraryObject {
  return JSON.parse(String(fs.readFileSync(fpath)));
}

const data = readJsonAsync(path.join(__dirname, 'data.json'));
console.log(data);