const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all the broken patterns:
// 1. \\' should be '
// 2. \" should be '
// 3. Fix mixed quotes

// Fix double backslash apostrophe
data = data.replace(/\\\\'/g, "'");

// Fix escaped double quote that should be apostrophe
data = data.replace(/\\"/g, "'");

// Fix pattern: sentence: "xxx', translation: "xxx'
// This is a broken pattern where sentence starts with " but ends with '
data = data.replace(/sentence: "([^']*?)', translation: "([^']*?)'/g, (match, sentence, translation) => {
    // Escape any internal apostrophes in sentence
    const escapedSentence = sentence.replace(/'/g, "\\'");
    return `sentence: "${escapedSentence}", translation: '${translation}'`;
});

// Fix pattern where sentence has broken quotes
// sentence: "xxx! Don"t xxx' - this pattern
data = data.replace(/sentence: "([^"]*?)"([^"]*?)'/g, (match, before, after) => {
    const fullSentence = before + "'" + after;
    const escaped = fullSentence.replace(/'/g, "\\'");
    return `sentence: "${escaped}"`;
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all broken quote patterns');
