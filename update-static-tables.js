const fs = require('fs');

// 读取word-data.js文件
const wordDataContent = fs.readFileSync('word-data.js', 'utf8');

// 提取wordDatabase对象
const wordDatabaseMatch = wordDataContent.match(/const wordDatabase = (\{[\s\S]*\});/);
if (!wordDatabaseMatch) {
    console.error('无法提取wordDatabase对象');
    process.exit(1);
}

// 解析wordDatabase对象
let wordDatabase;
try {
    wordDatabase = eval(`(${wordDatabaseMatch[1]})`);
} catch (error) {
    console.error('解析wordDatabase对象失败:', error);
    process.exit(1);
}

// 读取index.html文件
const indexHtmlContent = fs.readFileSync('index.html', 'utf8');

// 分类映射
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

// 生成表格内容的函数
function generateTableContent(category, words) {
    let tableContent = `            <section class="word-category" id="${category}" aria-label="${categories[category]}词汇">
                <h2>${categories[category]}</h2>
                <table aria-label="${categories[category]}单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>`;

    words.forEach(word => {
        // 处理playSound函数的参数，移除空格
        const soundParam = word.word.replace(/\s+/g, '');
        
        tableContent += `
                <tr><td><button class="sound-btn" onclick="playSound('${soundParam}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}</td></tr>`;
    });

    tableContent += `
                    </tbody>
                </table>
            </section>`;

    return tableContent;
}

// 替换index.html中的表格内容
let updatedIndexHtmlContent = indexHtmlContent;

// 遍历所有分类
Object.keys(categories).forEach(category => {
    const words = wordDatabase[category] || [];
    const tableContent = generateTableContent(category, words);
    
    // 替换对应分类的表格内容
    const categoryRegex = new RegExp(`<section class="word-category" id="${category}"[\s\S]*?</section>`, 'g');
    updatedIndexHtmlContent = updatedIndexHtmlContent.replace(categoryRegex, tableContent);
});

// 写入更新后的index.html文件
fs.writeFileSync('index.html', updatedIndexHtmlContent, 'utf8');

console.log('静态表格更新完成！');
console.log('更新的分类：', Object.keys(categories).join(', '));
Object.keys(categories).forEach(category => {
    const words = wordDatabase[category] || [];
    console.log(`${category}: ${words.length} 个单词`);
});
