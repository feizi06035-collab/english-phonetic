const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix word fields that are using single quotes but contain apostrophes
// We'll read the file line by line and fix each occurrence

const lines = data.split('\n');
const fixedLines = lines.map(line => {
    // Check for patterns like: word: 'You're...' which is broken
    if (line.includes("word: 'You're")) {
        // Replace with double quotes
        return line.replace(/word: 'You're([^']*?)'/g, 'word: "You\'re$1"');
    }
    return line;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed word field quote issues');
