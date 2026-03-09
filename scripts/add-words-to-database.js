// 将新单词添加到word-data.js的脚本
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const wordDataPath = path.join(projectRoot, 'word-data.js');
const newGreetingsPath = path.join(__dirname, 'new-greetings.json');

// 读取新单词
const newGreetings = JSON.parse(fs.readFileSync(newGreetingsPath, 'utf8'));
console.log(`读取了 ${newGreetings.length} 个新单词`);

// 读取word-data.js
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 找到greetings数组的结束位置（在emotions: [之前）
const greetingsEndPattern = /(greetings:\s*\[)([\s\S]*?)(\],\s*emotions:)/;
const match = wordDataContent.match(greetingsEndPattern);

if (!match) {
    console.error('无法找到greetings数组的结束位置');
    process.exit(1);
}

// 构建新单词的字符串
const newWordsString = newGreetings.map(word => {
    return `        { word: '${word.word.replace(/'/g, "\\'")}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence.replace(/'/g, "\\'")}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence.replace(/'/g, "\\'")}' }`;
}).join(',\n');

// 在greetings数组结束前插入新单词
const updatedContent = wordDataContent.replace(
    greetingsEndPattern,
    `$1$2,\n${newWordsString}$3`
);

// 写回文件
fs.writeFileSync(wordDataPath, updatedContent);
console.log(`成功将 ${newGreetings.length} 个新单词添加到word-data.js`);
