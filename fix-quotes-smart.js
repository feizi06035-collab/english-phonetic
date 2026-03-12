const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const apostrophePatterns = [
    "I'm", "I've", "I'd", "I'll", "It's", "He's", "She's", "We're", "We've", "They're", "They've", "You're", "You've",
    "Don't", "Doesn't", "Didn't", "Won't", "Can't", "Couldn't", "Shouldn't", "Wouldn't", "Isn't", "Aren't", "Wasn't", "Weren't",
    "Haven't", "Hasn't", "Hadn't", "What's", "How's", "Where's", "Who's", "Why's", "When's", "Let's", "There's", "Here's", "That's",
    "ain't", "There'll", "It'll", "You'd", "He'd", "She'd", "We'd", "They'd", "Who'd", "What'd"
];

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes("sentence: '")) return line;
    
    const hasApostrophe = apostrophePatterns.some(pattern => line.includes(pattern));
    if (!hasApostrophe) return line;
    
    const sentenceMatch = line.match(/sentence: '([^']*)'/);
    if (!sentenceMatch) return line;
    
    const sentenceContent = sentenceMatch[1];
    
    if (sentenceContent.includes("'") && !sentenceContent.includes("\\'")) {
        const newLine = line.replace(`sentence: '${sentenceContent}'`, `sentence: "${sentenceContent}"`);
        fixedCount++;
        return newLine;
    }
    
    return line;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
