const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

// 查找数字分类部分
const numbersMatch = content.match(/numbers:\s*10(.*?)10/s);
if (numbersMatch) {
    const numbersContent = numbersMatch[1];
    const newWord = 
        { word: 'TestNumber', phonetic: '/test/', homophone: '测试数字', meaning: '测试数字', sentence: 'This is a test', translation: '这是一个测试', homophoneSentence: '测试句子!' },;
    
    const newContent = content.replace(/numbers:\s*10(.*?)10/s, 
umbers: [);
    fs.writeFileSync(wordDataPath, newContent);
    console.log('已添加测试单词');
}
