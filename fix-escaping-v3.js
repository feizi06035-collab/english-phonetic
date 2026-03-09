const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 第一步：移除所有单引号前的转义符（恢复原始文本）
wordDataContent = wordDataContent.replace(/\\'/g, "'");

// 第二步：正确转义字符串值中的单引号
const fixQuotes = (content) => {
    return content.replace(/(\w+):\s*'((?:[^']|\\')*)'(?=,|})/g, (match, field, value) => {
        // 移除值中的所有转义符
        const unescapedValue = value.replace(/\\'/g, "'");
        // 重新转义字符串值中的单引号
        const escapedValue = unescapedValue.replace(/'/g, "\\'");
        return `${field}: '${escapedValue}'`;
    });
};

wordDataContent = fixQuotes(wordDataContent);

fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号转义问题');