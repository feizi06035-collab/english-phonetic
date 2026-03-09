// 更新index.html中的常用语句分类静态表格
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 提取sentences数据
const sentencesRegex = /sentences:\s*\[(.*?)\]/s;
const match = wordDataContent.match(sentencesRegex);

if (match) {
    let sentencesText = match[1];
    
    // 简单的解析逻辑
    const sentencesData = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < sentencesText.length; i++) {
        const char = sentencesText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                // 提取各个字段
                const wordMatch = currentRow.match(/word:\s*['"]([^'"]*)['"]/);
                const phoneticMatch = currentRow.match(/phonetic:\s*['"]([^'"]*)['"]/);
                const homophoneMatch = currentRow.match(/homophone:\s*['"]([^'"]*)['"]/);
                const meaningMatch = currentRow.match(/meaning:\s*['"]([^'"]*)['"]/);
                const sentenceMatch = currentRow.match(/sentence:\s*['"]([^'"]*)['"]/);
                
                if (wordMatch && phoneticMatch && homophoneMatch && meaningMatch && sentenceMatch) {
                    sentencesData.push({
                        word: wordMatch[1],
                        phonetic: phoneticMatch[1],
                        homophone: homophoneMatch[1],
                        meaning: meaningMatch[1],
                        sentence: sentenceMatch[1]
                    });
                }
            }
            currentRow = '';
        }
    }
    
    if (sentencesData.length > 0) {
        // 生成表格行
        const tableRows = sentencesData.map(word => {
            const soundWord = word.word.replace(/\s+/g, '');
            return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${word.sentence}</td></tr>`;
        }).join('\n');
        
        // 读取index.html文件
        const indexPath = path.join(__dirname, 'index.html');
        let indexContent = fs.readFileSync(indexPath, 'utf8');
        
        // 找到常用语句分类的表格位置
        const sentencesTableRegex = /<!-- 常用语句类 -->[\s\S]*?<table aria-label="常用语句类单词列表">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/;
        const tableMatch = indexContent.match(sentencesTableRegex);
        
        if (tableMatch) {
            // 替换表格内容
            const newTableContent = `<!-- 常用语句类 -->
            <section class="word-category" id="sentences" aria-label="常用语句类词汇">
                <h2>常用语句类 | Common Sentences</h2>
                <table aria-label="常用语句类单词列表">
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
            
            indexContent = indexContent.replace(/<!-- 常用语句类 -->[\s\S]*?<\/tbody>/, newTableContent);
            
            // 写入更新后的index.html
            fs.writeFileSync(indexPath, indexContent, 'utf8');
            console.log('成功更新index.html中的常用语句分类表格');
        } else {
            console.error('未找到常用语句分类的表格位置');
        }
    } else {
        console.error('未找到sentences单词数据');
    }
} else {
    console.error('未找到sentences数据');
}
