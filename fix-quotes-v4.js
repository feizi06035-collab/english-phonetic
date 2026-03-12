const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const regex = /sentence: '((?:[^']|\\')*)'/g;

data = data.replace(regex, (match, content) => {
    if (content.includes("'") && !content.includes("\\'")) {
        fixedCount++;
        return `sentence: "${content}"`;
    }
    return match;
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处单引号嵌套问题`);
