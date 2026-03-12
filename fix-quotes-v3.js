const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const lines = data.split('\n');
let fixedCount = 0;

const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const match = line.match(/sentence: '((?:[^'\\]|\\.)*)'/);
    if (match && match[1].includes("'")) {
        const newLine = line.replace(/sentence: '((?:[^'\\]|\\.)*)'/, (m, content) => {
            return `sentence: "${content}"`;
        });
        fixedCount++;
        return newLine;
    }
    return line;
});

fs.writeFileSync('word-data.js', fixedLines.join('\n'), 'utf8');
console.log(`修复了 ${fixedCount} 处单引号嵌套问题`);
