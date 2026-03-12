const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const apostropheWords = [
    "I'm", "I've", "I'd", "I'll", "It's", "He's", "She's", "We're", "We've", "They're", "They've", "You're", "You've",
    "Don't", "Doesn't", "Didn't", "Won't", "Can't", "Couldn't", "Shouldn't", "Wouldn't", "Isn't", "Aren't", "Wasn't", "Weren't",
    "Haven't", "Hasn't", "Hadn't", "What's", "How's", "Where's", "Who's", "Why's", "When's", "Let's", "There's", "Here's", "That's",
    "ain't", "There'll", "It'll", "You'd", "He'd", "She'd", "We'd", "They'd", "Who'd", "What'd", "ain't", "o'clock"
];

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const hasApostropheWord = apostropheWords.some(word => line.includes(word));
    if (!hasApostropheWord) return line;
    
    const sentenceStart = line.indexOf("sentence: '");
    if (sentenceStart === -1) return line;
    
    const afterSentence = line.substring(sentenceStart + 11);
    
    let endQuoteIndex = -1;
    let quoteCount = 0;
    for (let i = 0; i < afterSentence.length; i++) {
        if (afterSentence[i] === "'" && (i === 0 || afterSentence[i-1] !== '\\')) {
            quoteCount++;
            if (quoteCount === 1) continue;
            endQuoteIndex = i;
            break;
        }
    }
    
    if (endQuoteIndex === -1) return line;
    
    const sentenceContent = afterSentence.substring(0, endQuoteIndex);
    
    const before = line.substring(0, sentenceStart + 10);
    const after = afterSentence.substring(endQuoteIndex);
    const newLine = before + '"' + sentenceContent + '"' + after;
    fixedCount++;
    return newLine;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
