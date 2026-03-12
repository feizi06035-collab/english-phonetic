const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;
data = data.replace(/"(\w+)"(\w+)/g, (match, p1, p2) => {
    count++;
    return `"${p1}'${p2}`;
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} broken apostrophes`);
