// 更新sitemap.xml文件，添加常用语句分类的新单词链接
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
    const words = [];
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < sentencesText.length; i++) {
        const char = sentencesText[i];
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
        
        // 找到最后一个单词页分类的位置，或者在</urlset>标签前添加
        const lastWordSectionRegex = /<!-- 单词页 - [^>]+ -->[\s\S]*?(?=<!-- 单词页 - |<\/urlset>)/g;
        const sections = sitemapContent.match(lastWordSectionRegex);
        
        if (sections && sections.length > 0) {
            // 找到最后一个单词页分类的结束位置
            const lastSection = sections[sections.length - 1];
            const lastSectionEndIndex = sitemapContent.indexOf(lastSection) + lastSection.length;
            
            // 在最后一个单词页分类后添加sentences分类
            const newSentencesSection = `
  <!-- 单词页 - sentences 分类 -->
${sitemapEntries}`;
            sitemapContent = sitemapContent.slice(0, lastSectionEndIndex) + newSentencesSection + sitemapContent.slice(lastSectionEndIndex);
        } else {
            // 如果没有其他单词页分类，在</urlset>标签前添加
            const urlsetEndIndex = sitemapContent.indexOf('</urlset>');
            if (urlsetEndIndex > 0) {
                const newSentencesSection = `
  <!-- 单词页 - sentences 分类 -->
${sitemapEntries}
`;
                sitemapContent = sitemapContent.slice(0, urlsetEndIndex) + newSentencesSection + sitemapContent.slice(urlsetEndIndex);
            } else {
                console.error('未找到</urlset>标签');
                return;
            }
        }
        
        // 写入更新后的sitemap.xml
        fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
        console.log('成功更新sitemap.xml中的常用语句分类单词链接');
    } else {
        console.error('未找到sentences单词数据');
    }
} else {
    console.error('未找到sentences数据');
}
