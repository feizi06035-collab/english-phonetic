const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

let errors = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    const trimmed = line.trim();
    
    if (trimmed.includes('} ,') || trimmed.includes('}  ,')) {
        errors.push({
            line: lineNum,
            issue: 'brace with space before comma',
            content: trimmed.substring(0, 100)
        });
    }
    
    if (trimmed.endsWith(', ,') || trimmed.endsWith(',  ,')) {
        errors.push({
            line: lineNum,
            issue: 'double comma',
            content: trimmed.substring(0, 100)
        });
    }
    
    if (trimmed.startsWith('{ word:') && trimmed.includes(', ,')) {
        errors.push({
            line: lineNum,
            issue: 'double comma in object',
            content: trimmed.substring(0, 100)
        });
    }
}

console.log('Total lines:', lines.length);
console.log('Errors found:', errors.length);

if (errors.length > 0) {
    console.log('\nAll errors:');
    errors.forEach(e => {
        console.log(`Line ${e.line}: ${e.issue}`);
        console.log(`  ${e.content}`);
    });
}

const problemPatterns = [
    /\}\s*,\s*\}/g,
    /\}\s*,\s*\{/g,
    /,\s*,/g,
    /\}\s+\}/g,
    /\}\s+\{/g,
];

console.log('\nSearching for problem patterns...');
problemPatterns.forEach((pattern, idx) => {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
        console.log(`Pattern ${idx + 1}: found ${matches.length} matches`);
        console.log(`  Examples: ${matches.slice(0, 3).join(', ')}`);
    }
});
