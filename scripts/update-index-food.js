const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const wordDataPath = path.join(__dirname, '../word-data.js');

const wordData = require(wordDataPath);
const foodWords = wordData.food;

console.log('Total food words in word-data.js:', foodWords.length);

let html = fs.readFileSync(indexPath, 'utf8');

const foodSectionStart = html.indexOf('<!-- 食物基础类 -->');
const sentencesSectionStart = html.indexOf('<!-- 常用语句类 -->');

if (foodSectionStart === -1 || sentencesSectionStart === -1) {
    console.error('Could not find food section markers');
    process.exit(1);
}

console.log('Food section found at:', foodSectionStart);
console.log('Sentences section found at:', sentencesSectionStart);

const tableStart = html.indexOf('<tbody>', foodSectionStart);
const tableEnd = html.indexOf('</tbody>', tableStart);

if (tableStart === -1 || tableEnd === -1) {
    console.error('Could not find table markers');
    process.exit(1);
}

console.log('Table tbody found at:', tableStart, 'to', tableEnd);

const newTableRows = foodWords.map(word => {
    return `<tr><td><button class="sound-btn" onclick="playSound('${word.word}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}.</td></tr>`;
}).join('\n');

const beforeTable = html.substring(0, tableStart + 7);
const afterTable = html.substring(tableEnd);

const newHtml = beforeTable + '\n' + newTableRows + '\n                    ' + afterTable;

fs.writeFileSync(indexPath, newHtml, 'utf8');

console.log('Successfully updated index.html with', foodWords.length, 'food words');
