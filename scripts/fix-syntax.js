const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

const regex = /(homophoneSentence: '[^']+'\s*),\s*\n(\s*\{ word:)/g;

content = content.replace(regex, "$1 },\n$2");

const regex2 = /(homophoneSentence: '[^']+'\s*),\s*\n(\s*\]\s*,)/g;
content = content.replace(regex2, "$1 }\n$2");

fs.writeFileSync(wordDataPath, content, 'utf8');

console.log('Fixed syntax errors in word-data.js');
