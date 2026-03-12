const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix all the broken patterns caused by previous scripts

// 1. Fix \' at the end of quoted strings (should be ')
data = data.replace(/\\'/g, "'");

// 2. Fix pattern: sentence: "xxx', translation: 'xxx'
// Should be: sentence: "xxx", translation: 'xxx'
data = data.replace(/sentence: "([^"]*?)', translation: '([^']*?)'/g, 'sentence: "$1", translation: \'$2\'');

// 3. Fix pattern where translation starts with \'
// translation: \'xxx\' should be translation: 'xxx'
data = data.replace(/translation: \\'([^']*?)\\'/g, "translation: '$1'");

// 4. Fix pattern where homophoneSentence starts with \'
data = data.replace(/homophoneSentence: \\'([^']*?)\\'/g, "homophoneSentence: '$1'");

// 5. Fix pattern where word starts with \'
data = data.replace(/word: \\'([^']*?)\\'/g, "word: '$1'");

// 6. Fix pattern where phonetic starts with \'
data = data.replace(/phonetic: \\'([^']*?)\\'/g, "phonetic: '$1'");

// 7. Fix pattern where homophone starts with \'
data = data.replace(/homophone: \\'([^']*?)\\'/g, "homophone: '$1'");

// 8. Fix pattern where meaning starts with \'
data = data.replace(/meaning: \\'([^']*?)\\'/g, "meaning: '$1'");

// 9. Fix sentence fields with contractions that are now broken
// Pattern: sentence: "xxx'sxxx', should be sentence: "xxx'sxxx"
data = data.replace(/sentence: "([^"]*?)'([^"]*?)', translation: '/g, (match, before, after) => {
    // Check if this looks like a contraction
    if (after.length < 30 && !after.includes(',')) {
        return 'sentence: "' + before + "'" + after + '", translation: \'';
    }
    return match;
});

// 10. Fix any remaining "xxx', pattern at end of sentence field
data = data.replace(/sentence: "([^"]*?)', translation: '/g, 'sentence: "$1", translation: \'');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed all broken patterns');
