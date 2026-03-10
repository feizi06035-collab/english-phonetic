const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const wordDataPath = path.join(__dirname, '../word-data.js');

let content = fs.readFileSync(wordDataPath, 'utf8');

const foodMatch = content.match(/food:\s*\[([\s\S]*?)\],\s*sentences:/);
if (!foodMatch) {
    console.error('Could not find food array in word-data.js');
    process.exit(1);
}

const foodArrayStr = '[' + foodMatch[1] + ']';
let foodWords;
try {
    foodWords = eval(foodArrayStr);
} catch (e) {
    console.error('Error parsing food array:', e.message);
    process.exit(1);
}

console.log('Total food words:', foodWords.length);

let html = fs.readFileSync(indexPath, 'utf8');

const foodSectionStart = html.indexOf('<!-- 食物基础类 -->');
const sentencesSectionStart = html.indexOf('<!-- 常用语句类 -->');

if (foodSectionStart === -1 || sentencesSectionStart === -1) {
    console.error('Could not find section markers');
    process.exit(1);
}

console.log('Food section found at:', foodSectionStart);
console.log('Sentences section found at:', sentencesSectionStart);

const sectionBetween = html.substring(foodSectionStart, sentencesSectionStart);

const tbodyStart = sectionBetween.indexOf('<tbody>');
const tbodyEnd = sectionBetween.indexOf('</tbody>');

if (tbodyStart === -1 || tbodyEnd === -1) {
    console.error('Could not find tbody markers');
    process.exit(1);
}

const beforeTbody = html.substring(0, foodSectionStart + tbodyStart + 7);
const afterTbody = html.substring(foodSectionStart + tbodyEnd);

const newRows = foodWords.map(word => {
    const escapedWord = word.word.replace(/'/g, "\\'");
    return `<tr><td><button class="sound-btn" onclick="playSound('${escapedWord}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}.</td></tr>`;
}).join('\n');

const newHtml = beforeTbody + '\n' + newRows + '\n                    ' + afterTbody;

fs.writeFileSync(indexPath, newHtml, 'utf8');

console.log('Successfully updated index.html with', foodWords.length, 'food words');
