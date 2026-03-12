const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const lines = data.split('\n');
let fixedCount = 0;

const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const sentenceStart = line.indexOf("sentence: '");
    if (sentenceStart === -1) return line;
    
    const afterSentence = line.substring(sentenceStart + 11);
    let depth = 1;
    let endIndex = 0;
    
    for (let i = 0; i < afterSentence.length; i++) {
        if (afterSentence[i] === "'" && (i === 0 || afterSentence[i-1] !== '\\')) {
            depth--;
            if (depth === 0) {
                endIndex = i;
                break;
            }
        }
    }
    
    const content = afterSentence.substring(0, endIndex);
    
    if (content.includes("'") && !content.includes("\\'")) {
        const before = line.substring(0, sentenceStart + 11);
        const after = afterSentence.substring(endIndex + 1);
        fixedCount++;
        return before.slice(0, -1) + '"' + content + '"' + after;
    }
    
    return line;
});

fs.writeFileSync('word-data.js', fixedLines.join('\n'), 'utf8');
console.log(`修复了 ${fixedCount} 处单引号嵌套问题`);
