// 修复word-data.js文件中的过度转义单引号问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复过度转义的单引号
const fixOverEscapedQuotes = (content) => {
    // 将过度转义的单引号恢复为正常状态
    return content.replace(/\\\\'/g, "'");
};

// 应用修复
wordDataContent = fixOverEscapedQuotes(wordDataContent);

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的过度转义单引号问题');
