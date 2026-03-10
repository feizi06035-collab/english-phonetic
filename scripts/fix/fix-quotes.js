// 修复word-data.js文件中的单引号问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复单词中的单引号问题
const fixes = [
    { pattern: /word:\s*['"]Im\s*['"]/g, replacement: "word: 'I'm'" },
    { pattern: /word:\s*['"]Whats\s*['"]/g, replacement: "word: 'What's'" },
    { pattern: /word:\s*['"]dont\s*['"]/g, replacement: "word: 'don't'" },
    { pattern: /word:\s*['"]I dont\s*['"]/g, replacement: "word: 'I don't'" },
    { pattern: /word:\s*['"]Youre\s*['"]/g, replacement: "word: 'You're'" },
    { pattern: /word:\s*['"]Thats\s*['"]/g, replacement: "word: 'That's'" },
    { pattern: /word:\s*['"]lets\s*['"]/g, replacement: "word: 'let's'" },
    { pattern: /word:\s*['"]Shall we\s*['"]/g, replacement: "word: 'Shall we'" }
];

fixes.forEach(fix => {
    wordDataContent = wordDataContent.replace(fix.pattern, fix.replacement);
});

// 修复例句中的单引号问题
const sentenceFixes = [
    { pattern: /sentence:\s*['"]Im\s*/g, replacement: "sentence: 'I'm " },
    { pattern: /sentence:\s*['"]Whats\s*/g, replacement: "sentence: 'What's " },
    { pattern: /sentence:\s*['"]dont\s*/g, replacement: "sentence: 'don't " },
    { pattern: /sentence:\s*['"]I dont\s*/g, replacement: "sentence: 'I don't " },
    { pattern: /sentence:\s*['"]Youre\s*/g, replacement: "sentence: 'You're " },
    { pattern: /sentence:\s*['"]Thats\s*/g, replacement: "sentence: 'That's " },
    { pattern: /sentence:\s*['"]lets\s*/g, replacement: "sentence: 'let's " }
];

sentenceFixes.forEach(fix => {
    wordDataContent = wordDataContent.replace(fix.pattern, fix.replacement);
});

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号问题');
