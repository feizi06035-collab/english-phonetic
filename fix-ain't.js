const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;

// 修复 sentence: 'If it ain't broke, don't fix it.',
data = data.replace(/sentence: 'If it ain't broke, don't fix it.',/g, () => {
    count++;
    return 'sentence: "If it ain\'t broke, don\'t fix it.",';
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} issues`);
