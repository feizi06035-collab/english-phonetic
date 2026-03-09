const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '../word-data.js');
const htmlPath = path.join(__dirname, '../index.html');

let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
const foodMatch = wordDataContent.match(/food:\s*\[([\s\S]*?)\n    \]/);
if (!foodMatch) {
    console.error('Could not find food array');
    process.exit(1);
}

const foodContent = foodMatch[1];
const foodWords = [];
const wordRegex = /\{\s*word:\s*'([^']+)',\s*phonetic:\s*'([^']+)',\s*homophone:\s*'([^']+)',\s*meaning:\s*'([^']+)',\s*sentence:\s*'([^']+)',\s*translation:\s*'([^']+)',\s*homophoneSentence:\s*'([^']+)'\s*\}/g;

let match;
while ((match = wordRegex.exec(foodContent)) !== null) {
    foodWords.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('Total food words in word-data.js:', foodWords.length);

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const foodTableStart = htmlContent.indexOf('<!-- 食物基础类 -->');
const tbodyStart = htmlContent.indexOf('<tbody>', foodTableStart);
const tbodyEnd = htmlContent.indexOf('</tbody>', tbodyStart);

if (foodTableStart === -1 || tbodyStart === -1 || tbodyEnd === -1) {
    console.error('Could not find food table markers');
    process.exit(1);
}

const existingRows = htmlContent.substring(tbodyStart + 7, tbodyEnd);
const existingWords = new Set();
const rowWordRegex = /onclick="playSound\('([^']+)'\)"/g;
let rowMatch;
while ((rowMatch = rowWordRegex.exec(existingRows)) !== null) {
    existingWords.add(rowMatch[1].toLowerCase());
}

console.log('Existing food words in HTML:', existingWords.size);

const newRows = foodWords
    .filter(word => !existingWords.has(word.word.toLowerCase()))
    .map(word => {
        return `<tr><td><button class="sound-btn" onclick="playSound('${word.word}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}.</td></tr>`;
    });

console.log('New rows to add:', newRows.length);

if (newRows.length > 0) {
    const newContent = htmlContent.substring(0, tbodyEnd) + 
        '\n' + newRows.join('\n') + '\n                    ' +
        htmlContent.substring(tbodyEnd);
    
    fs.writeFileSync(htmlPath, newContent, 'utf8');
    console.log('Successfully updated index.html with', newRows.length, 'new food words');
} else {
    console.log('No new words to add');
}
