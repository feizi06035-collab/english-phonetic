const fs = require('fs');

// 读取word-data.js文件内容
const wordDataContent = fs.readFileSync('word-data.js', 'utf8');

// 提取emotions数组
const emotionsStart = wordDataContent.indexOf('emotions: [');
const emotionsEnd = wordDataContent.indexOf('],', emotionsStart);

if (emotionsStart === -1 || emotionsEnd === -1) {
    console.error('无法找到emotions数组');
    process.exit(1);
}

const emotionsStr = wordDataContent.substring(emotionsStart + 'emotions: ['.length, emotionsEnd);

// 使用正则表达式提取每个单词对象
const wordRegex = /\{\s*word:\s*'([^']+)'\s*,\s*phonetic:\s*'([^']+)'\s*,\s*homophone:\s*'([^']+)'\s*,\s*meaning:\s*'([^']+)'\s*,\s*sentence:\s*'([^']+)'\s*,\s*translation:\s*'([^']+)'\s*,\s*homophoneSentence:\s*'([^']+)'\s*\}/g;

const emotions = [];
let match;
while ((match = wordRegex.exec(emotionsStr)) !== null) {
    emotions.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('情感单词总数:', emotions.length);

// 读取index.html文件
let indexHtmlContent = fs.readFileSync('index.html', 'utf8');

// 找到emotions表格的tbody开始和结束位置
const emotionsTableStart = indexHtmlContent.indexOf('<!-- 情感表达类 -->');
const tbodyStart = indexHtmlContent.indexOf('<tbody>', emotionsTableStart);
const tbodyEnd = indexHtmlContent.indexOf('</tbody>', tbodyStart);

if (emotionsTableStart === -1 || tbodyStart === -1 || tbodyEnd === -1) {
    console.error('无法找到emotions表格');
    process.exit(1);
}

// 生成新的表格行
const newTableRows = emotions.map(word => {
    return `<tr><td><button class="sound-btn" onclick="playSound('${word.word}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}</td></tr>`;
}).join('\n                ');

// 替换tbody内容
const beforeTbody = indexHtmlContent.substring(0, tbodyStart + '<tbody>'.length);
const afterTbody = indexHtmlContent.substring(tbodyEnd);

const newIndexHtmlContent = beforeTbody + '\n                ' + newTableRows + '\n                    ' + afterTbody;

// 写入index.html文件
fs.writeFileSync('index.html', newIndexHtmlContent, 'utf8');

console.log('成功更新index.html中的情感表达类表格');
console.log('表格现在包含', emotions.length, '个单词');
