// 更新index.html中的常用语句分类静态表格
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 提取sentences数据
const sentencesRegex = /sentences:\s*\[(.*?)\s*\]/s;
const match = wordDataContent.match(sentencesRegex);

if (match) {
    const sentencesText = match[1];
    
    // 提取所有单词对象
    const wordObjects = sentencesText.match(/\{[^}]*\}/g) || [];
    
    const sentencesData = wordObjects.map(objStr => {
        // 提取各个字段
        const wordMatch = objStr.match(/word:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const phoneticMatch = objStr.match(/phonetic:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const homophoneMatch = objStr.match(/homophone:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const meaningMatch = objStr.match(/meaning:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const sentenceMatch = objStr.match(/sentence:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const translationMatch = objStr.match(/translation:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        const homophoneSentenceMatch = objStr.match(/homophoneSentence:\s*['"]([^'"]*(?:\\.[^'"]*)*)['"]/);
        
        // 处理转义字符
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
    
    if (sentencesData.length > 0) {
        // 生成表格行
        const tableRows = sentencesData.map(word => {
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
