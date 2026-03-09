// 修复word-data.js文件的数据格式问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复数字分类的数据格式
const numbersRegex = /numbers:\s*\[(.*?)\],/s;
const numbersMatch = wordDataContent.match(numbersRegex);

if (numbersMatch) {
    let numbersText = numbersMatch[1];
    
    // 清理数字分类的数据
    let cleanedNumbers = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < numbersText.length; i++) {
        const char = numbersText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                // 清理多余的逗号
                const cleanedRow = currentRow.trim().replace(/,,/g, ',');
                if (cleanedRow) {
                    cleanedNumbers.push(cleanedRow);
                }
            }
            currentRow = '';
        }
    }
    
    // 重新生成数字分类的内容
    const newNumbersContent = cleanedNumbers.map(item => `        ${item}`).join(',\n');
    wordDataContent = wordDataContent.replace(numbersRegex, `numbers: [\n${newNumbersContent}\n    ],`);
    
    console.log('成功修复数字分类的数据格式');
} else {
    console.error('未找到numbers部分');
}

// 修复常用语句分类的数据格式
const sentencesRegex = /sentences:\s*\[(.*?)\]/s;
const sentencesMatch = wordDataContent.match(sentencesRegex);

if (sentencesMatch) {
    let sentencesText = sentencesMatch[1];
    
    // 清理常用语句分类的数据
    let cleanedSentences = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < sentencesText.length; i++) {
        const char = sentencesText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                // 清理多余的逗号
                const cleanedRow = currentRow.trim().replace(/,,/g, ',');
                if (cleanedRow) {
                    cleanedSentences.push(cleanedRow);
                }
            }
            currentRow = '';
        }
    }
    
    // 重新生成常用语句分类的内容
    const newSentencesContent = cleanedSentences.map(item => `        ${item}`).join(',\n');
    wordDataContent = wordDataContent.replace(sentencesRegex, `sentences: [\n${newSentencesContent}\n    ]`);
    
    console.log('成功修复常用语句分类的数据格式');
} else {
    console.error('未找到sentences部分');
}

// 写入修复后的文件
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件的数据格式');
