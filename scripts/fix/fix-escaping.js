// 修复word-data.js文件中的单引号转义问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复所有字段中的单引号转义问题
const fixQuotes = (content) => {
    // 匹配所有字段（包括包含单引号的字段值）
    return content.replace(/(\w+):\s*'([^']*(?:'[^']*)*)'(?=,|})/g, (match, field, value) => {
        // 手动检查并转义未转义的单引号
        let escapedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (value[i] === "'") {
                // 检查前一个字符是否是反斜杠
                if (i > 0 && value[i-1] === '\\') {
                    // 已经转义，直接添加
                    escapedValue += "'";
                } else {
                    // 未转义，需要转义
                    escapedValue += "\\'";
                }
            } else {
                escapedValue += value[i];
            }
        }
        return `${field}: '${escapedValue}'`;
    });
};

// 应用修复
wordDataContent = fixQuotes(wordDataContent);

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号转义问题');
