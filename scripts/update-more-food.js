const fs = require('fs');
const path = require('path');
const newFoodWords = require('./generate-more-food.js');

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

const existingFoodMatch = content.match(/food:\s*\[([\s\S]*?)\]/);
if (!existingFoodMatch) {
    console.error('Could not find food array in word-data.js');
    process.exit(1);
}

const existingFoodContent = existingFoodMatch[1];
const existingWords = new Set();
const wordRegex = /word:\s*'([^']+)'/g;
let match;
while ((match = wordRegex.exec(existingFoodContent)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

console.log('Existing food words:', existingWords.size);

const uniqueNewWords = newFoodWords.filter(word => {
    const isDuplicate = existingWords.has(word.word.toLowerCase());
    if (isDuplicate) {
        console.log('Skipping duplicate:', word.word);
    }
    return !isDuplicate;
});

console.log('Unique new words to add:', uniqueNewWords.length);

const newFoodEntries = uniqueNewWords.map(word => {
    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
}).join(',\n');

const foodArrayMatch = content.match(/(food:\s*\[[\s\S]*?\n    \])/);
if (!foodArrayMatch) {
    console.error('Could not find food array pattern');
    process.exit(1);
}

const oldFoodArray = foodArrayMatch[1];
const lastEntryMatch = oldFoodArray.match(/(\s*\{[^}]+\})(\s*\])/);
if (!lastEntryMatch) {
    console.error('Could not find last entry in food array');
    process.exit(1);
}

const newFoodArray = oldFoodArray.replace(/\]$/, `,\n${newFoodEntries}\n    ]`);

content = content.replace(foodArrayMatch[1], newFoodArray);

fs.writeFileSync(wordDataPath, content, 'utf8');

console.log(`Successfully added ${uniqueNewWords.length} new food words to word-data.js`);
console.log('Total food words now:', existingWords.size + uniqueNewWords.length);
