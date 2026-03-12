const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const lines = data.split('\n');
let fixedCount = 0;

const fixedLines = lines.map((line, index) => {
    const apostrophePattern = /sentence: '([^']*'[^']*)'/;
    const match = line.match(apostrophePattern);
    
    if (match) {
        const newLine = line.replace(/sentence: '([^']*'[^']*)'/, (m, content) => {
            return `sentence: "${content}"`;
        });
        fixedCount++;
        return newLine;
    }
    
    return line;
});

const newData = fixedLines.join('\n');

fs.writeFileSync('word-data.js', newData, 'utf8');
console.log(`修复了 ${fixedCount} 处单引号嵌套问题`);
