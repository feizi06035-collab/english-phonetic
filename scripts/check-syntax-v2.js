const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

let errors = [];
let lastValidLine = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    
    const trimmed = line.trim();
    
    if (trimmed.startsWith('{ word:')) {
        const openBraces = (trimmed.match(/\{/g) || []).length;
        const closeBraces = (trimmed.match(/\}/g) || []).length;
        
        if (openBraces !== closeBraces) {
            errors.push({ 
                line: lineNum, 
                openBraces, 
                closeBraces, 
                content: trimmed.substring(0, 80) 
            });
        }
        
        if (!trimmed.endsWith('},') && !trimmed.endsWith('}') && lineNum < lines.length - 5) {
            errors.push({
                line: lineNum,
                issue: 'object not ending with }, or }',
                content: trimmed.substring(trimmed.length - 20)
            });
        }
    }
}

console.log('Total lines:', lines.length);
console.log('Errors found:', errors.length);

if (errors.length > 0) {
    console.log('\nFirst 20 errors:');
    errors.slice(0, 20).forEach(e => {
        if (e.openBraces !== undefined) {
            console.log(`Line ${e.line}: open=${e.openBraces}, close=${e.closeBraces}`);
        } else {
            console.log(`Line ${e.line}: ${e.issue}`);
        }
        console.log(`  ${e.content}`);
    });
}
