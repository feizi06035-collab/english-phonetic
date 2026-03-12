const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes('sentence: "')) return line;
    
    const sentenceMatch = line.match(/sentence: "([^"]*)"/);
    if (!sentenceMatch) return line;
    
    const sentenceContent = sentenceMatch[1];
    
    if (sentenceContent.includes('"')) {
        const fixedSentence = sentenceContent.replace(/"/g, "'");
        const newLine = line.replace(`sentence: "${sentenceContent}"`, `sentence: "${fixedSentence}"`);
        fixedCount++;
        return newLine;
    }
    
    return line;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
