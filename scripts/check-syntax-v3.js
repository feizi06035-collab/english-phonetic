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
    
    if (trimmed.includes(',\n') || trimmed.includes(', \n')) {
        continue;
    }
    
    if (trimmed.startsWith('{ word:') && !trimmed.endsWith('},') && !trimmed.endsWith('}') && lineNum < lines.length - 5) {
        const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
        if (!nextLine.startsWith('{ word:') && !nextLine.startsWith(']') && !nextLine.startsWith('},') && !nextLine.startsWith('}')) {
            errors.push({
                line: lineNum,
                content: trimmed.substring(0, 100),
                nextLine: nextLine.substring(0, 50)
            });
        }
    }
}

console.log('Total lines:', lines.length);
console.log('Potential errors:', errors.length);

if (errors.length > 0) {
    console.log('\nFirst 30 errors:');
    errors.slice(0, 30).forEach(e => {
        console.log(`Line ${e.line}:`);
        console.log(`  Content: ${e.content}`);
        console.log(`  Next: ${e.nextLine}`);
    });
}
