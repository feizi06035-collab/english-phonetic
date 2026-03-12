const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const indexPath = path.join(__dirname, 'index.html');

console.log('开始自动同步表格...');

try {
    // 读取文件
    console.log('正在读取 word-data.js...');
    const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
    
    console.log('正在读取 index.html...');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // 提取wordDatabase对象 - 使用更精确的匹配
    console.log('正在解析 wordDatabase...');
    const wordDatabaseMatch = wordDataContent.match(/const wordDatabase = (\{[\s\S]*?\n\});/);
    if (!wordDatabaseMatch) {
        console.error('无法提取wordDatabase对象');
        process.exit(1);
    }
    
    // 解析wordDatabase
    const wordDatabase = eval(`(${wordDatabaseMatch[1]})`);
    console.log('成功解析 wordDatabase，包含', Object.keys(wordDatabase).length, '个分类');
    
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
            // 确保所有必要属性都存在
            const wordText = word.word || '';
            const phonetic = word.phonetic || '';
            const homophone = word.homophone || '';
            const meaning = word.meaning || '';
            const sentence = word.sentence || '';
            const translation = word.translation || '';
            const homophoneSentence = word.homophoneSentence || '';
            
            const soundWord = wordText.replace(/\s+/g, '').replace(/'/g, "\\'");
            const safeWord = wordText.replace(/'/g, "&apos;");
            const safeSentence = sentence.replace(/'/g, "&apos;");
            const safeTranslation = translation.replace(/'/g, "&apos;");
            const safeHomophoneSentence = homophoneSentence.replace(/'/g, "&apos;");
            
            return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${safeWord}</button></td><td>${phonetic}</td><td>${homophone}</td><td>${meaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
        }).join('\n');
    }
    
    let updatedCount = 0;
    
    Object.keys(categories).forEach(catKey => {
        const words = wordDatabase[catKey];
        if (!words || words.length === 0) {
            console.log(`${categories[catKey]}: 未找到数据`);
            return;
        }
        
        console.log(`正在处理 ${categories[catKey]}...`);
        const tableRows = generateTableRows(words);
        const catName = categories[catKey].split(' | ')[0];
        
        // 使用更精确的替换方法
        const sectionStart = indexContent.indexOf(`<section class="word-category" id="${catKey}"`);
        if (sectionStart === -1) {
            console.log(`${categories[catKey]}: 未找到分类部分`);
            return;
        }
        
        const tableStart = indexContent.indexOf('<table', sectionStart);
        const tableEnd = indexContent.indexOf('</table>', tableStart) + '</table>'.length;
        
        if (tableStart === -1 || tableEnd === -1) {
            console.log(`${categories[catKey]}: 未找到表格`);
            return;
        }
        
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
        
        // 替换内容
        indexContent = indexContent.substring(0, sectionStart) + newSectionContent + indexContent.substring(tableEnd);
        console.log(`${categories[catKey]}: 成功更新 ${words.length} 个单词`);
        updatedCount++;
    });
    
    // 写入更新后的文件
    console.log('正在写入更新后的 index.html...');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    
    console.log(`\n✅ 自动同步完成！更新了 ${updatedCount} 个分类的表格`);
    
} catch (error) {
    console.error('同步过程中发生错误:', error);
    process.exit(1);
}
