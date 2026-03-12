const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix the specific patterns we found

// 1. Fix: sentence: 'Don"t mention it! Glad to help!",
data = data.replace(/sentence: 'Don"t mention it! Glad to help!",/g, 'sentence: "Don\'t mention it! Glad to help!",');

// 2. Fix: sentence: 'Sounds good! Let"s do it!",
data = data.replace(/sentence: 'Sounds good! Let"s do it!",/g, 'sentence: "Sounds good! Let\'s do it!",');

// 3. Fix any remaining similar patterns with " inside single quotes
data = data.replace(/sentence: '([^']*?)"([^']*?)',/g, (match, before, after) => {
    return 'sentence: "' + before + "'" + after + '",';
});

// 4. Fix word: "Don\'t mention it" (double backslash)
data = data.replace(/word: "([^"]*?)\\\\'([^"]*?)"/g, 'word: "$1\'$2"');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed remaining quote issues');
