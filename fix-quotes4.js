const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

data = data.replace(/translation: "([^"]+)'/g, 'translation: "$1"');
data = data.replace(/homophoneSentence: '([^']+)'/g, 'homophoneSentence: "$1"');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('修复了所有引号问题');
