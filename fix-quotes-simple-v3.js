// 修复word-data.js文件中的单引号转义问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复所有字段中的单引号转义问题
const fixQuotes = (content) => {
    // 使用一个更简单的方法：找到所有包含单引号的字段值，并转义它们
    // 匹配所有字段（包括包含单引号的字段值）
    return content.replace(/(\w+):\s*'([^']*(?:'[^']*)*)'(?=,|})/g, (match, field, value) => {
        // 检查字段值中是否包含单引号
        if (value.includes("'")) {
            // 转义单引号
            const escapedValue = value.replace(/'/g, "\\'");
            return `${field}: '${escapedValue}'`;
        }
        return match;
    });
};

// 应用修复
wordDataContent = fixQuotes(wordDataContent);

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号转义问题');
