const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复特定的未转义单引号模式
const fixes = [
    { pattern: /It's/g, replacement: "It\\'s" },
    { pattern: /Don't/g, replacement: "Don\\'t" },
    { pattern: /You're/g, replacement: "You\\'re" },
    { pattern: /Season's/g, replacement: "Season\\'s" },
    { pattern: /What's/g, replacement: "What\\'s" },
    { pattern: /That's/g, replacement: "That\\'s" },
    { pattern: /Let's/g, replacement: "Let\\'s" },
];

fixes.forEach(fix => {
    wordDataContent = wordDataContent.replace(fix.pattern, fix.replacement);
});

fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号转义问题');