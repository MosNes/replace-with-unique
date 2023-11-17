import fs from 'fs';
import path from 'path';

const filePath = 'C:/Users/moses.nester/Desktop/Steven Creed - mailFilters - Text.txt';

let file = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');

console.log(file);