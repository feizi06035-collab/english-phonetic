const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix word fields that contain apostrophes
// Pattern: word: 'xxx'sxxx' is broken
// Should be: word: "xxx'sxxx"

const regex = /word: '([^']*?)'([^']*?)'/g;
let match;
const fixes = [];

while ((match = regex.exec(data)) !== null) {
    // Check if this looks like a word with contraction (short text after apostrophe)
    const after = match[2];
    if (after.length < 30 && !after.includes(',') && !after.includes(':')) {
        fixes.push({
            original: match[0],
            before: match[1],
            after: after
        });
    }
}

fixes.forEach(fix => {
    const newWord = 'word: "' + fix.before + "'" + fix.after + '"';
    data = data.replace(fix.original, newWord);
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`Fixed ${fixes.length} word fields with apostrophes`);
