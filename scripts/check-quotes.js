const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const problemPatterns = [
    { name: 'Missing closing quote', pattern: /'[^']*$/gm },
    { name: 'Double single quotes', pattern: /''/g },
    { name: 'Unescaped quote in string', pattern: /'[^']*'[^']*'[^']*:/g },
];

console.log('Checking for problem patterns...\n');

problemPatterns.forEach(({ name, pattern }) => {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
        console.log(`${name}: found ${matches.length} matches`);
        matches.slice(0, 5).forEach(m => console.log(`  "${m.substring(0, 80)}..."`));
    } else {
        console.log(`${name}: none found`);
    }
});

const lines = content.split('\n');
let unclosedStrings = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const singleQuotes = (line.match(/'/g) || []).length;
    
    if (singleQuotes % 2 !== 0 && !line.trim().startsWith('//')) {
        unclosedStrings.push({ line: i + 1, content: line.substring(0, 100) });
    }
}

console.log(`\nLines with odd number of single quotes: ${unclosedStrings.length}`);
if (unclosedStrings.length > 0 && unclosedStrings.length < 50) {
    unclosedStrings.forEach(u => {
        console.log(`  Line ${u.line}: ${u.content}`);
    });
}
