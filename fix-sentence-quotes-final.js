const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all patterns where sentence has " inside single quotes
// This will handle: sentence: 'xxx"xxx', 
// and replace with: sentence: "xxx'xxx",

const regex = /sentence: '([^']*?)"([^']*?)',/g;
let match;
const fixes = [];

while ((match = regex.exec(data)) !== null) {
    fixes.push({
        original: match[0],
        before: match[1],
        after: match[2]
    });
}

console.log(`Found ${fixes.length} patterns to fix`);

fixes.forEach(fix => {
    const newSentence = 'sentence: "' + fix.before + "'" + fix.after + '",';
    data = data.replace(fix.original, newSentence);
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all sentence quote issues');
