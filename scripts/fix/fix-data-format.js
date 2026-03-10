// 修复word-data.js文件中的数据格式问题
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复numbers部分的格式问题
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
                const cleanedRow = currentRow.trim().replace(/,,/g, ',').replace(/,$/, '');
                if (cleanedRow) {
                    cleanedNumbers.push(cleanedRow);
                }
            }
            currentRow = '';
        }
    }
    
    // 处理最后一行
    if (currentRow.trim()) {
        const cleanedRow = currentRow.trim().replace(/,,/g, ',').replace(/,$/, '');
        if (cleanedRow) {
            cleanedNumbers.push(cleanedRow);
        }
    }
    
    // 重新组合numbers数据
    const newNumbersContent = 'numbers: [\n' + cleanedNumbers.map(row => '        ' + row).join(',\n') + '\n    ],';
    
    // 替换原始数据
    wordDataContent = wordDataContent.replace(numbersRegex, newNumbersContent);
    
    console.log('成功修复numbers部分的格式问题');
} else {
    console.error('未找到numbers数据');
}

// 修复sentences部分的格式问题
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
                const cleanedRow = currentRow.trim().replace(/,,/g, ',').replace(/,$/, '');
                if (cleanedRow) {
                    cleanedSentences.push(cleanedRow);
                }
            }
            currentRow = '';
        }
    }
    
    // 处理最后一行
    if (currentRow.trim()) {
        const cleanedRow = currentRow.trim().replace(/,,/g, ',').replace(/,$/, '');
        if (cleanedRow) {
            cleanedSentences.push(cleanedRow);
        }
    }
    
    // 重新组合sentences数据
    const newSentencesContent = 'sentences: [\n' + cleanedSentences.map(row => '        ' + row).join(',\n') + '\n    ]';
    
    // 替换原始数据
    wordDataContent = wordDataContent.replace(sentencesRegex, newSentencesContent);
    
    console.log('成功修复sentences部分的格式问题');
} else {
    console.error('未找到sentences数据');
}

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功写入修复后的word-data.js文件');
