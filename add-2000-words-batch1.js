const fs = require('fs');

const newWords = [
    { word: 'Abundant', phonetic: '/əˈbʌndənt/', homophone: '阿班登特', meaning: '丰富的', sentence: 'The garden has abundant flowers.', translation: '花园里有丰富的花朵。', homophoneSentence: '泽加登哈兹阿班登特夫劳尔斯.' },
    { word: 'Accelerate', phonetic: '/əkˈseləreɪt/', homophone: '阿克塞勒雷特', meaning: '加速', sentence: 'We need to accelerate the process.', translation: '我们需要加快这个过程。', homophoneSentence: '威尼德图阿克塞勒雷特泽普罗塞斯.' },
    { word: 'Accomplish', phonetic: '/əˈkʌmplɪʃ/', homophone: '阿康普利什', meaning: '完成', sentence: 'She accomplished her goal.', translation: '她完成了她的目标。', homophoneSentence: '希阿康普利什德赫尔格尔.' },
    { word: 'Accurate', phonetic: '/ˈækjərət/', homophone: '阿克尤拉特', meaning: '准确的', sentence: 'The information is accurate.', translation: '信息是准确的。', homophoneSentence: '泽因弗梅申伊兹阿克尤拉特.' },
    { word: 'Achieve', phonetic: '/əˈtʃiːv/', homophone: '阿奇夫', meaning: '实现', sentence: 'You can achieve anything.', translation: '你可以实现任何事情。', homophoneSentence: '优坎阿奇夫埃尼辛.' },
    { word: 'Acknowledge', phonetic: '/əkˈnɒlɪdʒ/', homophone: '阿克诺利奇', meaning: '承认', sentence: 'Please acknowledge the receipt.', translation: '请确认收到。', homophoneSentence: '普利斯阿克诺利奇泽瑞希特.' },
    { word: 'Acquire', phonetic: '/əˈkwaɪə(r)/', homophone: '阿克瓦亚', meaning: '获得', sentence: 'He acquired new skills.', translation: '他获得了新技能。', homophoneSentence: '希阿克瓦亚德纽斯基尔斯.' },
    { word: 'Adapt', phonetic: '/əˈdæpt/', homophone: '阿达普特', meaning: '适应', sentence: 'We must adapt to changes.', translation: '我们必须适应变化。', homophoneSentence: '威马斯特阿达普特图切因杰斯.' },
    { word: 'Adequate', phonetic: '/ˈædɪkwət/', homophone: '阿迪克沃特', meaning: '足够的', sentence: 'We have adequate resources.', translation: '我们有足够的资源。', homophoneSentence: '威海夫阿迪克沃特里索西斯.' },
    { word: 'Adjust', phonetic: '/əˈdʒʌst/', homophone: '阿贾斯特', meaning: '调整', sentence: 'Please adjust the settings.', translation: '请调整设置。', homophoneSentence: '普利斯阿贾斯特泽塞丁斯.' }
];

let data = fs.readFileSync('word-data.js', 'utf8');

const categories = ['greetings', 'emotions', 'numbers', 'colors', 'family', 'time', 'food', 'conversations', 'sentences'];

const existingWords = new Set();
categories.forEach(cat => {
    const regex = new RegExp(`${cat}:\\s*\\[([\\s\\S]*?)\\n    \\]`, 'g');
    const match = regex.exec(data);
    if (match) {
        const words = match[1].match(/word: '([^']+)'/g);
        if (words) {
            words.forEach(w => {
                const word = w.match(/word: '([^']+)'/)[1].toLowerCase();
                existingWords.add(word);
            });
        }
    }
});

let wordsToAdd = newWords.filter(w => !existingWords.has(w.word.toLowerCase()));

const wordsPerCategory = Math.ceil(wordsToAdd.length / categories.length);

categories.forEach((cat, index) => {
    const startIdx = index * wordsPerCategory;
    const endIdx = Math.min(startIdx + wordsPerCategory, wordsToAdd.length);
    const catWords = wordsToAdd.slice(startIdx, endIdx);
    
    if (catWords.length === 0) return;
    
    const wordsString = catWords.map(w => {
        return `        { word: '${w.word}', phonetic: '${w.phonetic}', homophone: '${w.homophone}', meaning: '${w.meaning}', sentence: '${w.sentence}', translation: '${w.translation}', homophoneSentence: '${w.homophoneSentence}' }`;
    }).join(',\n');
    
    const regex = new RegExp(`(${cat}:\\s*\\[)`);
    data = data.replace(regex, `$1\n${wordsString},`);
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Added ${wordsToAdd.length} new words`);
