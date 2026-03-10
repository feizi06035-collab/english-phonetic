const fs = require('fs');
const path = require('path');

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
    existingWords.add(match[1]);
}

console.log('Total food words:', existingWords.size);
console.log('Food words list:', Array.from(existingWords).slice(-50));
