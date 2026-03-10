const fs = require('fs');
const path = require('path');

const newFoodWords = [
    { word: 'Frozen yogurt', phonetic: '/ˈfroʊzən ˈjoʊɡərt/', homophone: '弗罗赞酸奶', meaning: '冻酸奶', sentence: 'Frozen yogurt is cold dessert.', translation: '冻酸奶是冷甜点。', homophoneSentence: '弗罗赞酸奶is扣德迪泽特.' },
    { word: 'Gelato', phonetic: '/dʒəˈlɑːtoʊ/', homophone: '杰拉托', meaning: '意式冰淇淋', sentence: 'Gelato is Italian ice cream.', translation: '意式冰淇淋是意大利冰淇淋。', homophoneSentence: '杰拉托is意大利安艾斯克里姆.' },
    { word: 'Sorbet', phonetic: '/ˈsɔːrbət/', homophone: '索贝特', meaning: '雪葩', sentence: 'Sorbet is fruit-based dessert.', translation: '雪葩是以水果为基础的甜点。', homophoneSentence: '索贝特is弗鲁特-贝斯特迪泽特.' },
    { word: 'Sherbet', phonetic: '/ˈʃɜːrbət/', homophone: '舍贝特', meaning: '冰沙', sentence: 'Sherbet has dairy.', translation: '冰沙含有乳制品。', homophoneSentence: '舍贝特哈兹戴里.' },
    { word: 'Granita', phonetic: '/ɡrəˈniːtə/', homophone: '格拉尼塔', meaning: '格兰尼塔冰', sentence: 'Granita is Sicilian ice.', translation: '格兰尼塔冰是西西里冰。', homophoneSentence: '格拉尼塔is西西里安艾斯.' },
    { word: 'Affogato', phonetic: '/ˌɑːfoʊˈɡɑːtoʊ/', homophone: '阿佛加托', meaning: '阿芙佳朵', sentence: 'Affogato has coffee and ice cream.', translation: '阿芙佳朵有咖啡和冰淇淋。', homophoneSentence: '阿佛加托哈兹咖啡安德艾斯克里姆.' },
    { word: 'Trifle', phonetic: '/ˈtraɪfəl/', homophone: '特赖弗尔', meaning: ' trifle', sentence: 'Trifle has layers of dessert.', translation: 'trifle有多层甜点。', homophoneSentence: '特赖弗尔哈兹莱尔兹欧夫迪泽特.' },
    { word: 'Pavlova', phonetic: '/pævˈloʊvə/', homophone: '帕夫洛娃', meaning: '帕夫洛娃', sentence: 'Pavlova is meringue dessert.', translation: '帕夫洛娃是蛋白酥皮甜点。', homophoneSentence: '帕夫洛娃is默兰迪泽特.' },
    { word: 'Eton mess', phonetic: '/ˈiːtn mes/', homophone: '伊顿梅斯', meaning: '伊顿混乱', sentence: 'Eton mess has strawberries.', translation: '伊顿混乱有草莓。', homophoneSentence: '伊顿梅斯哈兹斯特罗贝瑞兹.' },
    { word: 'Banoffee pie', phonetic: '/bəˈnɒfi paɪ/', homophone: '班诺菲派', meaning: '香蕉太妃派', sentence: 'Banoffee pie has banana and toffee.', translation: '香蕉太妃派有香蕉和太妃糖。', homophoneSentence: '班诺菲派哈兹巴娜娜安德托菲.' }
];

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

console.log('Reading word-data.js...');

const foodArrayStart = content.indexOf('food: [');
const foodArrayEnd = content.indexOf(']', foodArrayStart + 6);

if (foodArrayStart === -1 || foodArrayEnd === -1) {
    console.error('Could not find food array');
    process.exit(1);
}

console.log('Found food array at positions:', foodArrayStart, '-', foodArrayEnd);

const existingFoodContent = content.substring(foodArrayStart + 6, foodArrayEnd);
const existingWords = new Set();
const wordRegex = /word:\s*'([^']+)'/g;
let match;
while ((match = wordRegex.exec(existingFoodContent)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

console.log('Existing food words:', existingWords.size);

const uniqueNewWords = newFoodWords.filter(word => {
    const isDuplicate = existingWords.has(word.word.toLowerCase());
    if (isDuplicate) {
        console.log('Skipping duplicate:', word.word);
    }
    return !isDuplicate;
});

console.log('Unique new words to add:', uniqueNewWords.length);

if (uniqueNewWords.length === 0) {
    console.log('No new unique words to add');
    process.exit(0);
}

const newFoodEntries = uniqueNewWords.map(word => {
    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
}).join(',\n');

const oldContentBefore = content.substring(0, foodArrayEnd);
const oldContentAfter = content.substring(foodArrayEnd);

const newContent = oldContentBefore + ',\n' + newFoodEntries + oldContentAfter;

fs.writeFileSync(wordDataPath, newContent, 'utf8');

console.log(`Successfully added ${uniqueNewWords.length} new food words to word-data.js`);
console.log('Total food words now:', existingWords.size + uniqueNewWords.length);
