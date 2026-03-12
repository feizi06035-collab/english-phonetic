const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix the broken quotes pattern: sentence: "...', translation: "...'
// This pattern was created by the previous script
// We need to fix: sentence: "...', translation: "...' to proper format

// Pattern 1: sentence: "xxx\', translation: "xxx'
// Should become: sentence: 'xxx.', translation: 'xxx。'

// First, let's fix the broken pattern where sentence ends with \' and translation starts with "
data = data.replace(/sentence: "([^']*?)\\', translation: "([^']*?)'/g, (match, sentence, translation) => {
    // Check if sentence contains contractions (apostrophes)
    if (sentence.includes("'")) {
        // Use double quotes and escape internal apostrophes
        const escapedSentence = sentence.replace(/'/g, "\\'");
        return `sentence: "${escapedSentence}", translation: '${translation}'`;
    } else {
        // Use single quotes
        return `sentence: '${sentence}', translation: '${translation}'`;
    }
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed broken quote patterns');
