const fs = require('fs');

const wordData = fs.readFileSync('word-data.js', 'utf8');
const newNumbers = JSON.parse(fs.readFileSync('new-numbers.json', 'utf8'));

const existingWords = new Set();
const numbersMatch = wordData.match(/numbers: \[([\s\S]*?)\n    \],/s);
if (numbersMatch) {
    const numbersContent = numbersMatch[1];
    const wordMatches = numbersContent.matchAll(/word: '([^']+)'/g);
    for (const match of wordMatches) {
        existingWords.add(match[1].toLowerCase());
    }
}

const uniqueNewNumbers = newNumbers.filter(n => !existingWords.has(n.word.toLowerCase()));

console.log('现有单词数量:', existingWords.size);
console.log('新生成单词数量:', newNumbers.length);
console.log('去重后新增单词数量:', uniqueNewNumbers.length);

const numbersArrayStr = uniqueNewNumbers.map(n => {
    return `        { word: '${n.word}', phonetic: '${n.phonetic}', homophone: '${n.homophone}', meaning: '${n.meaning}', sentence: '${n.sentence}', translation: '${n.translation}', homophoneSentence: '${n.homophoneSentence}' }`;
}).join(',\n');

const updatedWordData = wordData.replace(
    /numbers: \[([\s\S]*?)\n    \],/s,
    `numbers: [$1,\n${numbersArrayStr}\n    ],`
);

fs.writeFileSync('word-data.js', updatedWordData);
console.log('已将新单词添加到word-data.js');
