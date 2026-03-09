// 修复word-data.js文件中sentences部分的格式问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复常用语句分类的数据格式
const sentencesRegex = /sentences:\s*\[(.*?)\]/s;
const sentencesMatch = wordDataContent.match(sentencesRegex);

if (sentencesMatch) {
    let sentencesText = sentencesMatch[1];
    
    // 清理常用语句分类的数据
    let cleanedSentences = [];
    
    // 按行分割
    const lines = sentencesText.split('\n');
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        
        // 跳过空行和只有逗号的行
        if (!trimmedLine || trimmedLine === ',') continue;
        
        // 清理多余的逗号
        let cleanedLine = trimmedLine.replace(/,,/g, ',');
        
        // 确保每行以逗号结尾（除了最后一行）
        if (cleanedLine.endsWith('}') && !cleanedLine.endsWith('},')) {
            cleanedLine += ',';
        }
        
        cleanedSentences.push(cleanedLine);
    }
    
    // 移除最后一行的逗号
    if (cleanedSentences.length > 0) {
        const lastIndex = cleanedSentences.length - 1;
        cleanedSentences[lastIndex] = cleanedSentences[lastIndex].replace(/,$/, '');
    }
    
    // 重新生成常用语句分类的内容
    const newSentencesContent = cleanedSentences.map(item => `        ${item}`).join('\n');
    wordDataContent = wordDataContent.replace(sentencesRegex, `sentences: [\n${newSentencesContent}\n    ]`);
    
    console.log('成功修复常用语句分类的数据格式');
} else {
    console.error('未找到sentences部分');
}

// 写入修复后的文件
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件的数据格式');
