const data = require('../word-data.js');
const fs = require('fs');

const existingWords = new Set(data.food.map(w => w.word.toLowerCase()));

fs.writeFileSync(__dirname + '/existing-food-words.txt', [...existingWords].join('\n'), 'utf8');

console.log('Total existing food words:', existingWords.size);
console.log('Saved to existing-food-words.txt');
