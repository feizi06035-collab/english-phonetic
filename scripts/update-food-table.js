const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const wordDataPath = path.join(__dirname, '../word-data.js');

console.log('Loading word data...');
const wordDatabase = require(wordDataPath);
const foodWords = wordDatabase.food;

console.log(`Loaded ${foodWords.length} food words`);

console.log('Reading index.html...');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

console.log('Generating new table rows...');
const newRows = foodWords.map(item => {
    const sentenceText = `${item.sentence} → 【${item.translation}】→ ${item.homophoneSentence}`;
    return `<tr><td><button class="sound-btn" onclick="playSound('${item.word}')">${item.word}</button></td><td>${item.phonetic}</td><td>${item.homophone}</td><td>${item.meaning}</td><td>${sentenceText}</td></tr>`;
}).join('\n');

console.log('Finding and replacing food table content...');
const foodSectionStart = htmlContent.indexOf('<section class="word-category" id="food"');
const tbodyStart = htmlContent.indexOf('<tbody>', foodSectionStart);
const tbodyEnd = htmlContent.indexOf('</tbody>', tbodyStart);

if (tbodyStart === -1 || tbodyEnd === -1) {
    console.error('Could not find food table tbody in index.html');
    process.exit(1);
}

const beforeTbody = htmlContent.substring(0, tbodyStart + '<tbody>'.length);
const afterTbody = htmlContent.substring(tbodyEnd);
const newHtml = beforeTbody + '\n' + newRows + '\n' + afterTbody;

console.log('Writing updated index.html...');
fs.writeFileSync(indexPath, newHtml, 'utf8');

console.log('Done! index.html has been updated.');
