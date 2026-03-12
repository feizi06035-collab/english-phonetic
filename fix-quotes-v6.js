const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const apostropheWords = ["I've", "I'm", "I'd", "It's", "He's", "She's", "We've", "We're", "They've", "They're", "You're", "You've", "Don't", "Doesn't", "Didn't", "Won't", "Can't", "Couldn't", "Shouldn't", "Wouldn't", "Isn't", "Aren't", "Wasn't", "Weren't", "Haven't", "Hasn't", "Hadn't", "What's", "How's", "Where's", "Who's", "Why's", "When's", "Let's", "There's", "Here's", "That's", "This's", "Season's", "Morning's", "Today's", "Tonight's", "Year's", "Years'", "Mother's", "Father's", "Children's", "Valentine's", "New Year's"];

let fixedCount = 0;

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const hasApostrophe = apostropheWords.some(word => line.includes(word));
    if (!hasApostrophe) return line;
    
    const newLine = line.replace(/sentence: '([^']*)'/g, (match, content) => {
        return `sentence: "${content}"`;
    });
    
    if (newLine !== line) {
        fixedCount++;
    }
    return newLine;
});

fs.writeFileSync('word-data.js', fixedLines.join('\n'), 'utf8');
console.log(`修复了 ${fixedCount} 处单引号嵌套问题`);
