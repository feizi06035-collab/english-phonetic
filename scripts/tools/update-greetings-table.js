const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const greetingsRegex = /greetings:\s*\[(.*?)\s*\]/s;
const match = wordDataContent.match(greetingsRegex);

if (match) {
    const greetingsText = match[1];
    const wordObjects = greetingsText.match(/\{[^}]*\}/g) || [];
    
    const greetingsData = wordObjects.map(objStr => {
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
    
    if (greetingsData.length > 0) {
        const tableRows = greetingsData.map(word => {
            const soundWord = word.word.replace(/\s+/g, '').replace(/'/g, "\\'");
            const safeWord = word.word.replace(/'/g, "&apos;");
            const safeSentence = word.sentence.replace(/'/g, "&apos;");
            const safeTranslation = word.translation.replace(/'/g, "&apos;");
            const safeHomophoneSentence = word.homophoneSentence.replace(/'/g, "&apos;");
            return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${safeWord}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
        }).join('\n');
        
        const tablePattern = /<!-- 日常问候类 -->[\s\S]*?<table aria-label="日常问候类单词列表">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/
        const tableMatch = indexContent.match(tablePattern);
        
        if (tableMatch) {
            const newTableContent = indexContent.replace(
                tablePattern,
                `<!-- 日常问候类 -->\n                <table aria-label="日常问候类单词列表">\n                    <thead>\n                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>\n                    </thead>\n                    <tbody>\n${tableRows}\n                    </tbody>`
            );
            
            fs.writeFileSync(indexPath, newTableContent, 'utf8');
            console.log('成功更新index.html中的日常问候分类表格');
        } else {
            console.log('未找到日常问候表格位置');
        }
    } else {
        console.log('未找到日常问候数据');
    }
} else {
    console.log('未找到greetings分类');
}
