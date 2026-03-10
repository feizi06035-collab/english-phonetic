const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const originalLength = content.length;

content = content.replace(/o'clock/g, "o\\'clock");
content = content.replace(/It's/g, "It\\'s");

const newLength = content.length;

fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed o\'clock and It\'s issues');
console.log('Original length:', originalLength);
console.log('New length:', newLength);
