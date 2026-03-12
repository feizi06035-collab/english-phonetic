const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all patterns where there are mismatched quotes

// 1. Fix pattern: sentence: "It's six o\"clock.'
data = data.replace(/sentence: "([^"]*?)"([^"]*?)'/g, (match, before, after) => {
    return 'sentence: "' + before + "'" + after + '"';
});

// 2. Fix any remaining word: 'xxx" patterns
data = data.replace(/word: '([^']*?)"/g, 'word: "$1');

// 3. Fix any word: "xxx' patterns
data = data.replace(/word: "([^"]*?)'/g, 'word: "$1"');

// 4. Fix any sentence: 'xxx" patterns
data = data.replace(/sentence: '([^']*?)"/g, 'sentence: "$1');

// 5. Fix any sentence: "xxx' patterns that are not contractions
data = data.replace(/sentence: "([^"]*?)'(?!,)/g, (match, content) => {
    // Check if content contains contractions
    if (content.includes("'")) {
        return 'sentence: "' + content.replace(/'/g, "\\'") + '"';
    }
    return 'sentence: \'' + content + '\'';
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all remaining quote issues');
