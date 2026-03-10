const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

let braceCount = 0;
let bracketCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    const openBrackets = (line.match(/\[/g) || []).length;
    const closeBrackets = (line.match(/\]/g) || []).length;
    
    braceCount += openBraces - closeBraces;
    bracketCount += openBrackets - closeBrackets;
}

fs.writeFileSync(path.join(__dirname, 'check-result.txt'), 
    `Total lines: ${lines.length}\nFinal brace count: ${braceCount}\nFinal bracket count: ${bracketCount}\n`, 
    'utf8');

console.log('Done. Check result.txt');
