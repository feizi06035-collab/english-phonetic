const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

// 简单地在文件末尾添加一个注释
const newContent = content + '\n// Test modification';
fs.writeFileSync(wordDataPath, newContent);
console.log('已修改文件');
