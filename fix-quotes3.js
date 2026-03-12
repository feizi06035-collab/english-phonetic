const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

data = data.replace(/sentence: "([^"]+)', translation: "([^"]+)',/g, 'sentence: "$1", translation: "$2",');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('修复了混合引号问题');
