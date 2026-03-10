const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
let unclosedStrings = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const singleQuotes = (line.match(/'/g) || []).length;
    
    if (singleQuotes % 2 !== 0 && !line.trim().startsWith('//')) {
        unclosedStrings.push({ line: i + 1, content: line });
    }
}

fs.writeFileSync(path.join(__dirname, 'unclosed-quotes.txt'), 
    unclosedStrings.map(u => `Line ${u.line}: ${u.content}`).join('\n'), 
    'utf8');

console.log(`Found ${unclosedStrings.length} lines with odd quotes. Saved to unclosed-quotes.txt`);
