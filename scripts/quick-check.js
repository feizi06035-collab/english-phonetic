const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

try {
    new Function(content);
    console.log('Syntax is valid!');
} catch (e) {
    console.log('Syntax error at line', e.lineNumber || 'unknown');
    console.log(e.message);
}
