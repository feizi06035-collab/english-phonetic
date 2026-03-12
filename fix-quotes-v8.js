const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const sentenceStart = line.indexOf("sentence: '");
    if (sentenceStart === -1) return line;
    
    const afterSentence = line.substring(sentenceStart + 11);
    
    let endQuoteIndex = -1;
    for (let i = 0; i < afterSentence.length; i++) {
        if (afterSentence[i] === "'" && (i === 0 || afterSentence[i-1] !== '\\')) {
            endQuoteIndex = i;
            break;
        }
    }
    
    if (endQuoteIndex === -1) return line;
    
    const sentenceContent = afterSentence.substring(0, endQuoteIndex);
    
    if (sentenceContent.includes("'")) {
        const before = line.substring(0, sentenceStart + 11);
        const after = afterSentence.substring(endQuoteIndex);
        const newLine = before.slice(0, -1) + '"' + sentenceContent + '"' + after;
        fixedCount++;
        return newLine;
    }
    
    return line;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
