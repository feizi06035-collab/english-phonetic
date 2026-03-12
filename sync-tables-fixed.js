const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const indexPath = path.join(__dirname, 'index.html');

const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// 提取wordDatabase对象
const wordDatabaseMatch = wordDataContent.match(/const wordDatabase = (\{[\s\S]*\});/);
if (!wordDatabaseMatch) {
    console.error('无法提取wordDatabase对象');
    process.exit(1);
}

// 解析wordDatabase
const wordDatabase = eval(`(${wordDatabaseMatch[1]})`);

const categories = {
    greetings: '日常问候类 | Daily Greetings',
    emotions: '情感表达 | Emotions',
    numbers: '数字 | Numbers',
    colors: '颜色 | Colors',
    family: '家人称呼 | Family',
    time: '时间常用 | Time',
    food: '食物基础 | Food',
    sentences: '常用语句 | Common Sentences',
    conversations: '交流对话 | Conversations'
};

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

Object.keys(categories).forEach(catKey => {
    const words = wordDatabase[catKey];
    if (!words || words.length === 0) {
        console.log(`${categories[catKey]}: 未找到数据`);
        return;
    }
    
    const tableRows = generateTableRows(words);
    const catName = categories[catKey].split(' | ')[0];
    
    // 构建表格替换模式
    const sectionPattern = new RegExp(
        `<section class="word-category" id="${catKey}"[\\s\\S]*?<table aria-label="[^"]*">[\\s\\S]*?<tbody>[\\s\\S]*?<\\/tbody>[\\s\\S]*?<\\/table>`
    );
    
    const sectionMatch = indexContent.match(sectionPattern);
    
    if (sectionMatch) {
        const newSectionContent = `<section class="word-category" id="${catKey}" aria-label="${catName}词汇">
                <h2>${categories[catKey]}</h2>
                <table aria-label="${catName}单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>`;
        
        indexContent = indexContent.replace(sectionPattern, newSectionContent);
        console.log(`${categories[catKey]}: 成功更新 ${words.length} 个单词`);
    } else {
        console.log(`${categories[catKey]}: 未找到表格位置`);
    }
});

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('\n✅ 所有分类表格已同步更新完成！');
