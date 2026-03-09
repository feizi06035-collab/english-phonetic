// 更新index.html中的日常问候静态表格
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 移除const wordDatabase = 部分，只保留对象内容
wordDataContent = wordDataContent.replace('const wordDatabase = ', '');
wordDataContent = wordDataContent.replace(/;$/, '');

// 解析wordDatabase对象
try {
    const wordDatabase = eval(`(${wordDataContent})`);
    const greetingsData = wordDatabase.greetings;
    
    // 生成表格行
    const tableRows = greetingsData.map(word => {
        // 处理单词中的空格，用于playSound函数
        const soundWord = word.word.replace(/\s+/g, '');
        return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence} → 【${word.translation}】→ ${word.homophoneSentence}</td></tr>`;
    }).join('\n');
    
    // 读取index.html文件
    const indexPath = path.join(__dirname, 'index.html');
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // 替换表格内容
    const tableRegex = /<!-- 日常问候类 -->[\s\S]*?<section class="word-category" id="greetings"[^>]*>[\s\S]*?<table[^>]*>[\s\S]*?<thead>[\s\S]*?<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>[\s\S]*?<\/table>[\s\S]*?<\/section>/;
    
    const newTableContent = `<!-- 日常问候类 -->
            <section class="word-category" id="greetings" aria-label="日常问候类词汇">
                <h2>日常问候类 | Daily Greetings</h2>
                <table aria-label="日常问候类单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>
            </section>`;
    
    indexContent = indexContent.replace(tableRegex, newTableContent);
    
    // 写入更新后的index.html
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('成功更新index.html中的日常问候静态表格');
} catch (error) {
    console.error('解析word-data.js文件时出错:', error);
    // 尝试使用更简单的方法 - 直接读取greetings部分并手动解析
    console.log('尝试使用备用方法...');
    
    // 读取word-data.js文件
    const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
    
    // 提取greetings部分
    const greetingsRegex = /greetings:\s*\[(.*?)\],/s;
    const match = wordDataContent.match(greetingsRegex);
    
    if (match) {
        let greetingsText = match[1];
        
        // 简单的解析逻辑
        const rows = [];
        let currentRow = '';
        let braceCount = 0;
        
        for (let i = 0; i < greetingsText.length; i++) {
            const char = greetingsText[i];
            currentRow += char;
            
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
            
            if (braceCount === 0 && (char === ',' || char === ' ')) {
                if (currentRow.trim()) {
                    // 简单处理，提取需要的字段
                    const wordMatch = currentRow.match(/word:\s*['"]([^'"]*)['"]/);
                    const phoneticMatch = currentRow.match(/phonetic:\s*['"]([^'"]*)['"]/);
                    const homophoneMatch = currentRow.match(/homophone:\s*['"]([^'"]*)['"]/);
                    const meaningMatch = currentRow.match(/meaning:\s*['"]([^'"]*)['"]/);
                    const sentenceMatch = currentRow.match(/sentence:\s*['"]([^'"]*)['"]/);
                    const translationMatch = currentRow.match(/translation:\s*['"]([^'"]*)['"]/);
                    const homophoneSentenceMatch = currentRow.match(/homophoneSentence:\s*['"]([^'"]*)['"]/);
                    
                    if (wordMatch) {
                        const word = wordMatch[1];
                        const phonetic = phoneticMatch ? phoneticMatch[1] : '';
                        const homophone = homophoneMatch ? homophoneMatch[1] : '';
                        const meaning = meaningMatch ? meaningMatch[1] : '';
                        const sentence = sentenceMatch ? sentenceMatch[1] : '';
                        const translation = translationMatch ? translationMatch[1] : '';
                        const homophoneSentence = homophoneSentenceMatch ? homophoneSentenceMatch[1] : '';
                        
                        const soundWord = word.replace(/\s+/g, '');
                        rows.push(`                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${word}</button></td><td>${phonetic}</td><td>${homophone}</td><td>${meaning}</td><td>${sentence} → 【${translation}】→ ${homophoneSentence}</td></tr>`);
                    }
                }
                currentRow = '';
            }
        }
        
        if (rows.length > 0) {
            const tableRows = rows.join('\n');
            
            // 读取index.html文件
            const indexPath = path.join(__dirname, 'index.html');
            let indexContent = fs.readFileSync(indexPath, 'utf8');
            
            // 替换表格内容
            const tableRegex = /<!-- 日常问候类 -->[\s\S]*?<section class="word-category" id="greetings"[^>]*>[\s\S]*?<table[^>]*>[\s\S]*?<thead>[\s\S]*?<\/thead>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>[\s\S]*?<\/table>[\s\S]*?<\/section>/;
            
            const newTableContent = `<!-- 日常问候类 -->
            <section class="word-category" id="greetings" aria-label="日常问候类词汇">
                <h2>日常问候类 | Daily Greetings</h2>
                <table aria-label="日常问候类单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>
            </section>`;
            
            indexContent = indexContent.replace(tableRegex, newTableContent);
            
            // 写入更新后的index.html
            fs.writeFileSync(indexPath, indexContent, 'utf8');
            console.log('成功使用备用方法更新index.html中的日常问候静态表格');
        } else {
            console.error('无法解析greetings数据');
        }
    } else {
        console.error('未找到greetings数据');
    }
}
