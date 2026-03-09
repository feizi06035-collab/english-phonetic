// 更新sitemap.xml文件，添加日常问候分类的新单词链接
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 提取greetings数据
const greetingsRegex = /greetings:\s*\[(.*?)\],/s;
const match = wordDataContent.match(greetingsRegex);

if (match) {
    let greetingsText = match[1];
    
    // 简单的解析逻辑
    const words = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < greetingsText.length; i++) {
        const char = greetingsText[i];
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
        
        // 找到greetings分类的位置
        const greetingsSectionRegex = /<!-- 单词页 - greetings 分类 -->[\s\S]*?(?=<!-- 单词页 - |<\/urlset>)/;
        const match = sitemapContent.match(greetingsSectionRegex);
        
        if (match) {
            // 替换greetings分类的内容
            const newGreetingsSection = `<!-- 单词页 - greetings 分类 -->
${sitemapEntries}`;
            sitemapContent = sitemapContent.replace(greetingsSectionRegex, newGreetingsSection);
            
            // 写入更新后的sitemap.xml
            fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
            console.log('成功更新sitemap.xml中的日常问候单词链接');
        } else {
            console.error('未找到greetings分类的位置');
        }
    } else {
        console.error('未找到greetings单词数据');
    }
} else {
    console.error('未找到greetings数据');
}
