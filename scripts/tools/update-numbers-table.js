// 更新index.html中数字分类的静态表格
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 提取numbers数据
const numbersRegex = /numbers:\s*\[(.*?)\]\s*,/s;
const match = wordDataContent.match(numbersRegex);

if (match) {
    let numbersText = match[1];
    
    // 解析数字数据
    const numbersData = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < numbersText.length; i++) {
        const char = numbersText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                // 尝试使用JSON解析
                try {
                    // 修复单引号为双引号
                    const fixedRow = currentRow.trim().replace(/'/g, '"');
                    const word = JSON.parse(fixedRow);
                    numbersData.push(word);
                } catch (e) {
                    // 备用解析方法
                    const wordMatch = currentRow.match(/word:\s*['"]([^'"]*)['"]/);
                    const phoneticMatch = currentRow.match(/phonetic:\s*['"]([^'"]*)['"]/);
                    const homophoneMatch = currentRow.match(/homophone:\s*['"]([^'"]*)['"]/);
                    const meaningMatch = currentRow.match(/meaning:\s*['"]([^'"]*)['"]/);
                    const sentenceMatch = currentRow.match(/sentence:\s*['"]([^'"]*)['"]/);
                    const translationMatch = currentRow.match(/translation:\s*['"]([^'"]*)['"]/);
                    const homophoneSentenceMatch = currentRow.match(/homophoneSentence:\s*['"]([^'"]*)['"]/);
                    
                    if (wordMatch) {
                        numbersData.push({
                            word: wordMatch[1],
                            phonetic: phoneticMatch ? phoneticMatch[1] : '',
                            homophone: homophoneMatch ? homophoneMatch[1] : '',
                            meaning: meaningMatch ? meaningMatch[1] : '',
                            sentence: sentenceMatch ? sentenceMatch[1] : '',
                            translation: translationMatch ? translationMatch[1] : '',
                            homophoneSentence: homophoneSentenceMatch ? homophoneSentenceMatch[1] : ''
                        });
                    }
                }
            }
            currentRow = '';
        }
    }
    
    if (numbersData.length > 0) {
        // 生成表格行
        const tableRows = numbersData.map(word => {
            const soundWord = word.word.replace(/\s+/g, '').replace(/'/g, "\\'");
            const safeWord = word.word.replace(/'/g, "&apos;");
            const safeSentence = word.sentence.replace(/'/g, "&apos;");
            const safeTranslation = word.translation.replace(/'/g, "&apos;");
            const safeHomophoneSentence = word.homophoneSentence.replace(/'/g, "&apos;");
            return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${safeWord}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
        }).join('\n');
        
        // 读取index.html文件
        const indexPath = path.join(__dirname, 'index.html');
        let indexContent = fs.readFileSync(indexPath, 'utf8');
        
        // 找到数字分类的表格位置
        const numbersTableRegex = /<!-- 数字类 -->[\s\S]*?<table aria-label="数字类单词列表">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/;
        const tableMatch = indexContent.match(numbersTableRegex);
        
        if (tableMatch) {
            // 替换表格内容
            const newTableContent = `<!-- 数字类 -->
            <section class="word-category" id="numbers" aria-label="数字类词汇">
                <h2>数字类 | Numbers</h2>
                <table aria-label="数字类单词列表">
                    <thead>
                        <tr>
                            <th>单词</th>
                            <th>音标</th>
                            <th>谐音</th>
                            <th>释义</th>
                            <th>例句</th>
                        </tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>`;
            
            indexContent = indexContent.replace(/<!-- 数字类 -->[\s\S]*?<\/tbody>/, newTableContent);
            
            // 写入更新后的index.html
            fs.writeFileSync(indexPath, indexContent, 'utf8');
            console.log('成功更新index.html中的数字分类表格');
        } else {
            console.error('未找到数字分类的表格位置');
        }
    } else {
        console.error('未找到数字数据');
    }
} else {
    console.error('未找到numbers数据');
}
