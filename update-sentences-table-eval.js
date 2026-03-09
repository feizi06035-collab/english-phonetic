// 更新index.html中的常用语句分类静态表格
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 使用eval来解析word-data.js文件中的数据
const wordDatabase = eval(`(() => { ${wordDataContent} return wordDatabase; })()`);
const sentencesData = wordDatabase.sentences;

if (sentencesData && sentencesData.length > 0) {
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
        const updatedContent = indexContent.replace(sentencesTableRegex, `<!-- 常用语句类 -->\n                    <table aria-label="常用语句类单词列表">\n                        <thead>\n                            <tr>\n                                <th>单词</th>\n                                <th>音标</th>\n                                <th>中文谐音</th>\n                                <th>释义</th>\n                                <th>例句</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n${tableRows}\n                        </tbody>\n                    </table>`);
        
        // 写入更新后的index.html
        fs.writeFileSync(indexPath, updatedContent, 'utf8');
        console.log('成功更新index.html中的常用语句分类表格');
    } else {
        console.error('未找到常用语句分类的表格位置');
    }
} else {
    console.error('未找到sentences单词数据');
}
