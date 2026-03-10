const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 更强大的修复函数，能够处理包含单引号的字符串
const fixQuotes = (content) => {
    // 匹配整个对象结构
    return content.replace(/\{\s*word:\s*'([^']*(?:'[^']*)*)',\s*phonetic:\s*'([^']*(?:'[^']*)*)',\s*homophone:\s*'([^']*(?:'[^']*)*)',\s*meaning:\s*'([^']*(?:'[^']*)*)',\s*sentence:\s*'([^']*(?:'[^']*)*)',\s*translation:\s*'([^']*(?:'[^']*)*)',\s*homophoneSentence:\s*'([^']*(?:'[^']*)*)'\s*\}/g, 
    (match, word, phonetic, homophone, meaning, sentence, translation, homophoneSentence) => {
        // 对每个字段进行转义处理
        const escapeField = (value) => {
            // 移除所有转义符
            const unescaped = value.replace(/\\'/g, "'");
            // 转义单引号
            return unescaped.replace(/'/g, "\\'");
        };
        
        return `{ word: '${escapeField(word)}', phonetic: '${escapeField(phonetic)}', homophone: '${escapeField(homophone)}', meaning: '${escapeField(meaning)}', sentence: '${escapeField(sentence)}', translation: '${escapeField(translation)}', homophoneSentence: '${escapeField(homophoneSentence)}' }`;
    });
};

wordDataContent = fixQuotes(wordDataContent);

fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单引号转义问题');