const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const patterns = [
    { find: /sentence: "([^"]*)"s/g, replace: 'sentence: "$1\'s' },
    { find: /sentence: "([^"]*)"t/g, replace: 'sentence: "$1\'t' },
    { find: /sentence: "([^"]*)"ve/g, replace: 'sentence: "$1\'ve' },
    { find: /sentence: "([^"]*)"re/g, replace: 'sentence: "$1\'re' },
    { find: /sentence: "([^"]*)"m/g, replace: 'sentence: "$1\'m' },
    { find: /sentence: "([^"]*)"d/g, replace: 'sentence: "$1\'d' },
    { find: /sentence: "([^"]*)"ll/g, replace: 'sentence: "$1\'ll' },
];

patterns.forEach(({ find, replace }) => {
    const before = data;
    data = data.replace(find, replace);
    const matches = before.match(find);
    if (matches) {
        fixedCount += matches.length;
    }
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
