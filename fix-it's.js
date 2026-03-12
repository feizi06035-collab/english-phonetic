const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;

// 修复 sentence: "It's never too late to learn.',
data = data.replace(/sentence: "It's never too late to learn.',/g, () => {
    count++;
    return 'sentence: "It\'s never too late to learn.",';
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} issues`);
