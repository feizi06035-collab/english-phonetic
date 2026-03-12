const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const indexPath = path.join(__dirname, 'index.html');

const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const categories = [
    { key: 'greetings', name: '日常问候类', nameEn: 'Daily Greetings', comment: '日常问候类' },
    { key: 'emotions', name: '情感表达', nameEn: 'Emotions', comment: '情感表达类' },
    { key: 'numbers', name: '数字', nameEn: 'Numbers', comment: '数字类' },
    { key: 'colors', name: '颜色', nameEn: 'Colors', comment: '颜色类' },
    { key: 'family', name: '家人称呼', nameEn: 'Family', comment: '家人称呼类' },
    { key: 'time', name: '时间常用', nameEn: 'Time', comment: '时间常用类' },
    { key: 'food', name: '食物基础', nameEn: 'Food', comment: '食物基础类' },
    { key: 'sentences', name: '常用语句', nameEn: 'Common Sentences', comment: '常用语句类' },
    { key: 'conversations', name: '交流对话', nameEn: 'Conversations', comment: '交流对话类' }
];

function extractWords(data, category) {
    const regex = new RegExp(`${category}:\\s*\\[([\\s\\S]*?)\\n    \\]`, 'g');
    const match = regex.exec(data);
    if (!match) return [];
    
    const arrayContent = match[1];
    const wordObjects = arrayContent.match(/\{[^}]*\}/g) || [];
    
    return wordObjects.map(objStr => {
        const wordMatch = objStr.match(/word:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const phoneticMatch = objStr.match(/phonetic:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const homophoneMatch = objStr.match(/homophone:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const meaningMatch = objStr.match(/meaning:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const sentenceMatch = objStr.match(/sentence:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const translationMatch = objStr.match(/translation:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const homophoneSentenceMatch = objStr.match(/homophoneSentence:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        
        const unescape = (str) => str ? str.replace(/\\'/g, "'") : '';
        
        return {
            word: wordMatch ? unescape(wordMatch[1]) : '',
            phonetic: phoneticMatch ? unescape(phoneticMatch[1]) : '',
            homophone: homophoneMatch ? unescape(homophoneMatch[1]) : '',
            meaning: meaningMatch ? unescape(meaningMatch[1]) : '',
            sentence: sentenceMatch ? unescape(sentenceMatch[1]) : '',
            translation: translationMatch ? unescape(translationMatch[1]) : '',
            homophoneSentence: homophoneSentenceMatch ? unescape(homophoneSentenceMatch[1]) : ''
        };
    }).filter(word => word.word);
}

function generateTableRows(words) {
    return words.map(word => {
        const soundWord = word.word.replace(/\s+/g, '').replace(/'/g, "\\'");
        const safeWord = word.word.replace(/'/g, "&apos;");
        const safeSentence = word.sentence.replace(/'/g, "&apos;");
        const safeTranslation = word.translation.replace(/'/g, "&apos;");
        const safeHomophoneSentence = word.homophoneSentence.replace(/'/g, "&apos;");
        return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${safeWord}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
    }).join('\n');
}

categories.forEach(cat => {
    const words = extractWords(wordDataContent, cat.key);
    if (words.length === 0) {
        console.log(`${cat.name}: 未找到数据`);
        return;
    }
    
    const tableRows = generateTableRows(words);
    
    const tablePattern = new RegExp(
        `<!-- ${cat.comment} -->[\\s\\S]*?<table aria-label="${cat.name}单词列表">[\\s\\S]*?<tbody>[\\s\\S]*?<\\/tbody>`,
        'g'
    );
    
    const tableMatch = indexContent.match(tablePattern);
    
    if (tableMatch) {
        const newTableContent = `<!-- ${cat.comment} -->
                <table aria-label="${cat.name}单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>`;
        
        indexContent = indexContent.replace(tablePattern, newTableContent);
        console.log(`${cat.name}: 成功更新 ${words.length} 个单词`);
    } else {
        console.log(`${cat.name}: 未找到表格位置`);
    }
});

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('\n所有分类表格已同步更新完成！');
