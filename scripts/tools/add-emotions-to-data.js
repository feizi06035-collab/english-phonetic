const fs = require('fs');

// 读取新生成的情感单词
const newEmotions = JSON.parse(fs.readFileSync('new-emotions.json', 'utf8'));

// 读取word-data.js文件
let wordDataContent = fs.readFileSync('word-data.js', 'utf8');

// 找到emotions数组的位置
const emotionsStart = wordDataContent.indexOf('emotions: [');
const emotionsEnd = wordDataContent.indexOf('],', emotionsStart);

if (emotionsStart === -1 || emotionsEnd === -1) {
    console.error('无法找到emotions数组');
    process.exit(1);
}

// 提取现有的emotions数组
const existingEmotionsStr = wordDataContent.substring(emotionsStart + 'emotions: ['.length, emotionsEnd);
const existingEmotions = eval('[' + existingEmotionsStr + ']');

console.log('现有情感单词数量:', existingEmotions.length);
console.log('新增情感单词数量:', newEmotions.length);

// 合并单词（保留现有的，添加新的）
const mergedEmotions = [...existingEmotions, ...newEmotions];

console.log('合并后总数量:', mergedEmotions.length);

// 将合并后的数组转换为字符串
const mergedEmotionsStr = mergedEmotions.map(word => {
    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
}).join(',\n');

// 替换emotions数组
const newEmotionsArray = `emotions: [\n${mergedEmotionsStr}\n    ]`;

const beforeEmotions = wordDataContent.substring(0, emotionsStart);
const afterEmotions = wordDataContent.substring(emotionsEnd + 2);

const newWordDataContent = beforeEmotions + newEmotionsArray + afterEmotions;

// 写入word-data.js文件
fs.writeFileSync('word-data.js', newWordDataContent, 'utf8');

console.log('成功将', newEmotions.length, '个新单词添加到emotions数组中');
console.log('emotions数组现在共有', mergedEmotions.length, '个单词');
