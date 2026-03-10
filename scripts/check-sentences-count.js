const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '..', 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

const sentencesRegex = /sentences:\s*\[([\s\S]*?)\s*\]/;
const match = wordDataContent.match(sentencesRegex);

if (match) {
    const sentencesText = match[1];
    const wordObjects = sentencesText.match(/\{[^}]*\}/g) || [];
    console.log(`sentences数组当前包含 ${wordObjects.length} 个单词`);
    
    const words = [];
    wordObjects.forEach(objStr => {
        const wordMatch = objStr.match(/word:\s*'([^']*(?:\\.[^']*)*)'/);
        if (wordMatch) {
            words.push(wordMatch[1]);
        }
    });
    console.log(`前10个单词：${words.slice(0,10).join(', ')}`);
    console.log(`后10个单词：${words.slice(-10).join(', ')}`);
} else {
    console.log('未找到sentences数据');
}
