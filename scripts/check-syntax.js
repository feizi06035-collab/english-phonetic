const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

let braceCount = 0;
let inObject = false;
let errors = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    
    braceCount += openBraces - closeBraces;
    
    if (line.includes(',\n') || line.endsWith(',\n')) {
        errors.push({ line: lineNum, issue: 'trailing comma with newline', content: line.substring(0, 100) });
    }
    
    if (line.includes('} ,') || line.includes('}  ,')) {
        errors.push({ line: lineNum, issue: 'brace with comma before newline', content: line.substring(0, 100) });
    }
}

console.log('Total lines:', lines.length);
console.log('Final brace count:', braceCount);
console.log('Errors found:', errors.length);

if (errors.length > 0) {
    console.log('\nFirst 10 errors:');
    errors.slice(0, 10).forEach(e => {
        console.log(`Line ${e.line}: ${e.issue}`);
        console.log(`  Content: ${e.content}`);
    });
}
