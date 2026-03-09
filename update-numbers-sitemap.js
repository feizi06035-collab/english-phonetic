// 更新sitemap.xml文件，添加数字分类的新单词链接
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 提取numbers数据
const numbersRegex = /numbers:\s*\[(.*?)\],/s;
const match = wordDataContent.match(numbersRegex);

if (match) {
    let numbersText = match[1];
    
    // 简单的解析逻辑
    const words = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < numbersText.length; i++) {
        const char = numbersText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                // 简单处理，提取单词
                const wordMatch = currentRow.match(/word:\s*['"]([^'"]*)['"]/);
                if (wordMatch) {
                    words.push(wordMatch[1]);
                }
            }
            currentRow = '';
        }
    }
    
    if (words.length > 0) {
        // 生成sitemap条目
        const sitemapEntries = words.map(word => {
            // 处理URL格式，将空格替换为-，并转为小写
            const urlWord = word.toLowerCase().replace(/\s+/g, '-');
            return `  <url>
    <loc>https://mzc0603.xyz/word/${urlWord}</loc>
    <lastmod>2026-03-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
        }).join('\n');
        
        // 读取sitemap.xml文件
        const sitemapPath = path.join(__dirname, 'sitemap.xml');
        let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
        
        // 找到numbers分类的位置
        const numbersSectionRegex = /<!-- 单词页 - numbers 分类 -->[\s\S]*?(?=<!-- 单词页 - |<\/urlset>)/;
        const match = sitemapContent.match(numbersSectionRegex);
        
        if (match) {
            // 替换numbers分类的内容
            const newNumbersSection = `<!-- 单词页 - numbers 分类 -->
${sitemapEntries}`;
            sitemapContent = sitemapContent.replace(numbersSectionRegex, newNumbersSection);
            
            // 写入更新后的sitemap.xml
            fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
            console.log('成功更新sitemap.xml中的数字分类单词链接');
        } else {
            console.error('未找到numbers分类的位置');
        }
    } else {
        console.error('未找到numbers单词数据');
    }
} else {
    console.error('未找到numbers数据');
}
