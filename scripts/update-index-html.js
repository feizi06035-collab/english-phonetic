// 更新index.html中的静态表格
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const indexHtmlPath = path.join(projectRoot, 'index.html');
const newGreetingsPath = path.join(__dirname, 'new-greetings.json');

// 读取新单词
const newGreetings = JSON.parse(fs.readFileSync(newGreetingsPath, 'utf8'));
console.log(`读取了 ${newGreetings.length} 个新单词`);

// 读取index.html
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// 构建新表格行的字符串
const newRowsString = newGreetings.map(word => {
    const wordKey = word.word.replace(/[^a-zA-Z0-9]/g, '');
    const example = word.sentence.replace(/'/g, "\\'") + ' → 【' + word.translation + '】→ ' + word.homophoneSentence.replace(/'/g, "\\'");
    return `                <tr><td><button class="sound-btn" onclick="playSound('${wordKey}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${example}</td></tr>`;
}).join('\n');

// 找到日常问候类表格的结束位置（</tbody>之前）
const tableEndPattern = /(<section class="word-category" id="greetings"[\s\S]*?<tbody>[\s\S]*?)(<\/tbody>\s*<\/table>\s*<\/section>)/;
const match = indexHtmlContent.match(tableEndPattern);

if (!match) {
    console.error('无法找到日常问候类表格的结束位置');
    process.exit(1);
}

// 在表格结束前插入新行
const updatedContent = indexHtmlContent.replace(
    tableEndPattern,
    `$1${newRowsString}\n$2`
);

// 写回文件
fs.writeFileSync(indexHtmlPath, updatedContent);
console.log(`成功将 ${newGreetings.length} 个新单词添加到index.html`);
