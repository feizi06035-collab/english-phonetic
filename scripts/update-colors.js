const fs = require('fs');

const wordData = fs.readFileSync('word-data.js', 'utf8');
const newColors = JSON.parse(fs.readFileSync('new-colors.json', 'utf8'));

const existingWords = new Set();
const colorsMatch = wordData.match(/colors: \[([\s\S]*?)\n    \],/);
if (colorsMatch) {
    const colorsContent = colorsMatch[1];
    const wordMatches = colorsContent.matchAll(/word: '([^']+)'/g);
    for (const match of wordMatches) {
        existingWords.add(match[1].toLowerCase());
    }
}

const uniqueNewColors = newColors.filter(n => !existingWords.has(n.word.toLowerCase()));

console.log('现有单词数量:', existingWords.size);
console.log('新生成单词数量:', newColors.length);
console.log('去重后新增单词数量:', uniqueNewColors.length);

const colorsArrayStr = uniqueNewColors.map(n => {
    return `        { word: '${n.word}', phonetic: '${n.phonetic}', homophone: '${n.homophone}', meaning: '${n.meaning}', sentence: '${n.sentence}', translation: '${n.translation}', homophoneSentence: '${n.homophoneSentence}' }`;
}).join(',\n');

const updatedWordData = wordData.replace(
    /colors: \[([\s\S]*?)\n    \],/,
    `colors: [$1,\n${colorsArrayStr}\n    ],`
);

fs.writeFileSync('word-data.js', updatedWordData);
console.log('已将新单词添加到word-data.js');
