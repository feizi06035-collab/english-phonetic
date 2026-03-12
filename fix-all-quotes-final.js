const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const patterns = [
    { pattern: /sentence: "([^"]*)\\"s([^"]*)"/g, replacement: 'sentence: "$1\'s$2"' },
    { pattern: /sentence: "([^"]*)\\"t([^"]*)"/g, replacement: 'sentence: "$1\'t$2"' },
    { pattern: /sentence: "([^"]*)\\"ve([^"]*)"/g, replacement: 'sentence: "$1\'ve$2"' },
    { pattern: /sentence: "([^"]*)\\"re([^"]*)"/g, replacement: 'sentence: "$1\'re$2"' },
    { pattern: /sentence: "([^"]*)\\"d([^"]*)"/g, replacement: 'sentence: "$1\'d$2"' },
    { pattern: /sentence: "([^"]*)\\"m([^"]*)"/g, replacement: 'sentence: "$1\'m$2"' },
    { pattern: /sentence: "([^"]*)\\"ll([^"]*)"/g, replacement: 'sentence: "$1\'ll$2"' },
];

patterns.forEach(({ pattern, replacement }) => {
    const before = data;
    data = data.replace(pattern, replacement);
    if (data !== before) {
        fixedCount++;
    }
});

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    if (!line.includes('sentence: "') && !line.includes("sentence: '")) return line;
    
    let fixed = line;
    
    fixed = fixed.replace(/sentence: "([^"]*)'([^"]*)"/g, (match, before, after) => {
        if (before.includes("'") || after.includes("'")) {
            return match;
        }
        return match;
    });
    
    fixed = fixed.replace(/sentence: '([^']*)'([^']*)'/g, (match, content, rest) => {
        if (content.includes("'") && !content.includes("\\'")) {
            fixedCount++;
            return `sentence: "${content}"${rest}`;
        }
        return match;
    });
    
    return fixed;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
