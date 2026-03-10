const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const originalLength = content.length;

content = content.replace(/' ,\r?\n\s*\},\r?\n/g, "' },\n");

const newLength = content.length;

fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed syntax issues');
console.log('Original length:', originalLength);
console.log('New length:', newLength);
console.log('Difference:', originalLength - newLength);
