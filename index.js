import fs from 'fs';
import path from 'path';
import { URL } from 'url';

//necessary for __dirname and __filename to work with ES6 modules
const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

//path to file
const filePath = 'C:/Users/moses.nester/Desktop/Steven Creed - mailFilters - Text.txt';

//string to search for
const searchString = '~!~';

//string to replace with
const replaceString = 'Floob';

let fileText = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');

console.log(`Searching document for instances of ${searchString}...`);

let position = fileText.search(searchString);

let increment = 1;

while( position !== -1 ) {
    fileText = fileText.replace(searchString, increment.toString());
    position = fileText.search(searchString);
    increment++;
}

console.log(`Finished searching document. Replaced ${increment-1} instances of ${searchString}.`);