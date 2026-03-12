const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all homophoneSentence fields that have mixed quotes
// Pattern: homophoneSentence: "xxx.'
// Should be: homophoneSentence: 'xxx.'

const regex = /homophoneSentence: "([^"]*?)\.'/g;
data = data.replace(regex, "homophoneSentence: '$1.'");

// Also fix any other similar patterns
data = data.replace(/homophoneSentence: "([^"]*?)"/g, "homophoneSentence: '$1'");

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed homophoneSentence quote issues');
