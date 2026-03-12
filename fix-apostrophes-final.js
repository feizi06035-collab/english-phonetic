const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all remaining quote issues

// 1. Fix double backslash apostrophe: \\' should be just ' (when inside single quotes)
// But if it's inside single quotes, we need to change to double quotes
// Pattern: sentence: 'xxx\\'sxxx' - this is broken
// Should be: sentence: "xxx'sxxx"

// Find all sentence fields with \\' (double backslash apostrophe)
const regex1 = /sentence: '([^']*?)\\\\'([^']*?)'/g;
data = data.replace(regex1, (match, before, after) => {
    return 'sentence: "' + before + "'" + after + '"';
});

// 2. Fix single backslash apostrophe inside single quotes
// Pattern: sentence: 'xxx\\'xxx' - this is also broken
const regex2 = /sentence: '([^']*?)\\'([^']*?)'/g;
data = data.replace(regex2, (match, before, after) => {
    return 'sentence: "' + before + "'" + after + '"';
});

// 3. Fix any remaining patterns where sentence has unescaped apostrophe in single quotes
// sentence: 'xxx'sxxx' - this is the original problem
const regex3 = /sentence: '([^']*?)'([^']*?)'/g;
let match3;
const fixes3 = [];
while ((match3 = regex3.exec(data)) !== null) {
    // Check if this looks like a contraction (short text after the apostrophe)
    if (match3[2].length < 20 && !match3[2].includes(',')) {
        fixes3.push({
            original: match3[0],
            before: match3[1],
            after: match3[2]
        });
    }
}

fixes3.forEach(fix => {
    const newSentence = 'sentence: "' + fix.before + "'" + fix.after + '"';
    data = data.replace(fix.original, newSentence);
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all apostrophe issues');
