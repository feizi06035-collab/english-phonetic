const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    let fixed = line;
    
    const sentenceMatch = fixed.match(/sentence: '([^']*)'/);
    if (sentenceMatch) {
        const content = sentenceMatch[1];
        if (content.includes("'") && !content.includes("\\'")) {
            fixed = fixed.replace(/sentence: '([^']*)'/, `sentence: "$1"`);
            fixedCount++;
        }
    }
    
    fixed = fixed.replace(/sentence: "([^"]*)'([^"]*)'([^"]*)'/g, 'sentence: "$1\'$2\'$3"');
    
    return fixed;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
