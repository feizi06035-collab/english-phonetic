const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

console.log('Total lines:', lines.length);

let braceCount = 0;
let bracketCount = 0;
let errors = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    const openBrackets = (line.match(/\[/g) || []).length;
    const closeBrackets = (line.match(/\]/g) || []).length;
    
    braceCount += openBraces - closeBraces;
    bracketCount += openBrackets - closeBrackets;
    
    if (braceCount < 0) {
        errors.push({ line: lineNum, issue: 'negative brace count', braceCount });
    }
    if (bracketCount < 0) {
        errors.push({ line: lineNum, issue: 'negative bracket count', bracketCount });
    }
}

console.log('Final brace count:', braceCount);
console.log('Final bracket count:', bracketCount);
console.log('Errors:', errors.length);

if (errors.length > 0) {
    console.log('\nFirst 10 errors:');
    errors.slice(0, 10).forEach(e => {
        console.log(`Line ${e.line}: ${e.issue} (${e.braceCount !== undefined ? 'brace=' + e.braceCount : 'bracket=' + e.bracketCount})`);
    });
}
