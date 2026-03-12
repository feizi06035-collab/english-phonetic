const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

data = data.replace(/word: "([^']*)'/g, "word: '$1'");
data = data.replace(/word: '([^"]*)"/g, 'word: "$1"');

data = data.replace(/phonetic: "([^']*)'/g, "phonetic: '$1'");
data = data.replace(/phonetic: '([^"]*)"/g, 'phonetic: "$1"');

data = data.replace(/homophone: "([^']*)'/g, "homophone: '$1'");
data = data.replace(/homophone: '([^"]*)"/g, 'homophone: "$1"');

data = data.replace(/meaning: "([^']*)'/g, "meaning: '$1'");
data = data.replace(/meaning: '([^"]*)"/g, 'meaning: "$1"');

data = data.replace(/sentence: "([^']*)'/g, "sentence: \"$1\"");
data = data.replace(/sentence: '([^"]*)"/g, "sentence: '$1'");

data = data.replace(/translation: "([^']*)'/g, "translation: '$1'");
data = data.replace(/translation: '([^"]*)"/g, 'translation: "$1"');

data = data.replace(/homophoneSentence: "([^']*)'/g, "homophoneSentence: \"$1\"");
data = data.replace(/homophoneSentence: '([^"]*)"/g, "homophoneSentence: '$1'");

fs.writeFileSync('word-data.js', data, 'utf8');

console.log('Fixed all mixed quote issues');
