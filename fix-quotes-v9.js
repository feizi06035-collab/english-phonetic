const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes('sentence: "')) return line;
    
    let fixed = line;
    
    fixed = fixed.replace(/sentence: "([^"]*)"\'/g, 'sentence: "$1"');
    
    if (fixed !== line) {
        fixedCount++;
    }
    
    return fixed;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
