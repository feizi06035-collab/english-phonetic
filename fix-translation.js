const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const fixedData = data.replace(/translation: "'([^']+)',/g, "translation: '$1',");

fs.writeFileSync('word-data.js', fixedData, 'utf8');

console.log('Fixed translation fields');
