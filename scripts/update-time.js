const fs = require('fs');

const wordData = fs.readFileSync('word-data.js', 'utf8');
const newTimeWords = JSON.parse(fs.readFileSync('new-time.json', 'utf8'));

const existingWords = new Set();
const timeMatch = wordData.match(/time: \[([\s\S]*?)\n    \],/);
if (timeMatch) {
    const timeContent = timeMatch[1];
    const wordMatches = timeContent.matchAll(/word: '([^']+)'/g);
    for (const match of wordMatches) {
        existingWords.add(match[1].toLowerCase());
    }
}

const uniqueNewWords = newTimeWords.filter(n => !existingWords.has(n.word.toLowerCase()));

console.log('现有单词数量:', existingWords.size);
console.log('新生成单词数量:', newTimeWords.length);
console.log('去重后新增单词数量:', uniqueNewWords.length);

const timeArrayStr = uniqueNewWords.map(n => {
    return `        { word: '${n.word}', phonetic: '${n.phonetic}', homophone: '${n.homophone}', meaning: '${n.meaning}', sentence: '${n.sentence}', translation: '${n.translation}', homophoneSentence: '${n.homophoneSentence}' }`;
}).join(',\n');

const updatedWordData = wordData.replace(
    /time: \[([\s\S]*?)\n    \],/,
    `time: [$1,\n${timeArrayStr}\n    ],`
);

fs.writeFileSync('word-data.js', updatedWordData);
console.log('已将新单词添加到word-data.js');
