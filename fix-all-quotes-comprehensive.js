const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Comprehensive quote fixer - fix all possible quote issues in one pass

const lines = data.split('\n');
const fixedLines = [];

lines.forEach(line => {
    let fixedLine = line;
    
    // Fix word: 'xxx'sxxx' -> word: "xxx'sxxx"
    if (fixedLine.includes("word: '")) {
        // Check if the word field has an apostrophe inside single quotes
        const wordMatch = fixedLine.match(/word: '([^']*?)'([^']*?)'/);
        if (wordMatch) {
            fixedLine = fixedLine.replace(/word: '([^']*?)'([^']*?)'/g, 'word: "$1'$2"');
        }
    }
    
    // Fix sentence: 'xxx'sxxx' -> sentence: "xxx'sxxx"
    if (fixedLine.includes("sentence: '")) {
        const sentenceMatch = fixedLine.match(/sentence: '([^']*?)'([^']*?)'/);
        if (sentenceMatch) {
            fixedLine = fixedLine.replace(/sentence: '([^']*?)'([^']*?)'/g, 'sentence: "$1'$2"');
        }
    }
    
    // Fix any mismatched quotes in translation: "xxx' -> translation: 'xxx'
    if (fixedLine.includes('translation: "')) {
        fixedLine = fixedLine.replace(/translation: "([^"]*?)'/g, "translation: '$1'");
    }
    
    // Fix any mismatched quotes in homophoneSentence: "xxx' -> homophoneSentence: 'xxx'
    if (fixedLine.includes('homophoneSentence: "')) {
        fixedLine = fixedLine.replace(/homophoneSentence: "([^"]*?)'/g, "homophoneSentence: '$1'");
    }
    
    fixedLines.push(fixedLine);
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all quote issues');
