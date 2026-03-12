const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Use regex to find and fix all sentences with contractions
// Pattern: sentence: '...' where the content contains an apostrophe

// Find all sentence fields that have contractions
const regex = /sentence: '([^']*'[^']*)'/g;

let match;
let count = 0;
const fixes = [];

while ((match = regex.exec(data)) !== null) {
    const original = match[0];
    const content = match[1];
    // Replace the outer single quotes with double quotes and escape inner single quotes
    const fixed = 'sentence: "' + content.replace(/'/g, "\\'") + '"';
    fixes.push({ original, fixed });
}

// Apply fixes
fixes.forEach(fix => {
    data = data.replace(fix.original, fix.fixed);
    count++;
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`Fixed ${count} sentence fields with contractions`);
