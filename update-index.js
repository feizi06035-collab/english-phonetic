const fs = require('fs');

const data = fs.readFileSync('word-data.js', 'utf8');

const categories = ['greetings', 'emotions', 'numbers', 'colors', 'family', 'time', 'food', 'conversations', 'sentences'];

const categoryNames = {
    greetings: '问候语',
    emotions: '情感词汇',
    numbers: '数字',
    colors: '颜色',
    family: '家庭',
    time: '时间',
    food: '食物',
    conversations: '交流对话',
    sentences: '句子'
};

function extractWords(category) {
    const regex = new RegExp(`${category}:\\s*\\[([\\s\\S]*?)\\],\\s*\\w+:`, 'g');
    const match = regex.exec(data);
    if (!match) return [];
    
    const arrayContent = match[1];
    const wordRegex = /\{\s*word:\s*['"]([^'"]+)['"]\s*,\s*phonetic:\s*['"]([^'"]+)['"]\s*,\s*homophone:\s*['"]([^'"]+)['"]\s*,\s*meaning:\s*['"]([^'"]+)['"]\s*,\s*sentence:\s*['"]([^'"]+)['"]\s*,\s*translation:\s*['"]([^'"]+)['"]\s*,\s*homophoneSentence:\s*['"]([^'"]+)['"]\s*\}/g;
    
    const words = [];
    let wordMatch;
    while ((wordMatch = wordRegex.exec(arrayContent)) !== null) {
        words.push({
            word: wordMatch[1],
            phonetic: wordMatch[2],
            homophone: wordMatch[3],
            meaning: wordMatch[4],
            sentence: wordMatch[5],
            translation: wordMatch[6],
            homophoneSentence: wordMatch[7]
        });
    }
    return words;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function generateTableRow(word, index) {
    const safeWord = escapeHtml(word.word);
    const safePhonetic = escapeHtml(word.phonetic);
    const safeHomophone = escapeHtml(word.homophone);
    const safeMeaning = escapeHtml(word.meaning);
    const safeSentence = escapeHtml(word.sentence);
    const safeTranslation = escapeHtml(word.translation);
    const safeHomophoneSentence = escapeHtml(word.homophoneSentence);
    
    const soundId = safeWord.replace(/[^a-zA-Z0-9]/g, '');
    
    return `<tr><td><button class="sound-btn" onclick="playSound('${soundId}')">${safeWord}</button></td><td>${safePhonetic}</td><td>${safeHomophone}</td><td>${safeMeaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
}

function generateTableBody(words) {
    return words.map((word, index) => generateTableRow(word, index)).join('\n');
}

let indexHtml = fs.readFileSync('index.html', 'utf8');

categories.forEach(category => {
    const words = extractWords(category);
    console.log(`${category}: ${words.length} 个单词`);
    
    const sectionStart = indexHtml.indexOf(`<section class="word-category" id="${category}">`);
    if (sectionStart === -1) {
        console.log(`  未找到 ${category} 分类区域`);
        return;
    }
    
    const tbodyStart = indexHtml.indexOf('<tbody>', sectionStart);
    const tbodyEnd = indexHtml.indexOf('</tbody>', tbodyStart);
    
    if (tbodyStart === -1 || tbodyEnd === -1) {
        console.log(`  未找到 ${category} 表格`);
        return;
    }
    
    const newTableBody = generateTableBody(words);
    
    indexHtml = indexHtml.substring(0, tbodyStart + 7) + '\n' + newTableBody + '\n' + indexHtml.substring(tbodyEnd);
    
    console.log(`  已更新 ${category} 表格`);
});

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('\nindex.html 已更新！');
