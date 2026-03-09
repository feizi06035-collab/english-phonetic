const fs = require('fs');
const path = require('path');

// 读取word-data.js
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 读取sitemap.xml
const sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 获取今天的日期
const today = new Date().toISOString().split('T')[0];

// 从word-data.js中提取numbers和sentences分类的单词
const numbersMatch = wordDataContent.match(/numbers:\s*\[([\s\S]*?)\]/);
const sentencesMatch = wordDataContent.match(/sentences:\s*\[([\s\S]*?)\]/);

let newUrls = '';

// 处理numbers分类
if (numbersMatch) {
    const numbersContent = numbersMatch[1];
    const wordMatches = numbersContent.matchAll(/word:\s*['"]([^'"]+)['"]/g);
    for (const match of wordMatches) {
        const word = match[1].toLowerCase().replace(/\s+/g, '-');
        newUrls += `  <url>\n    <loc>https://mzc0603.xyz/word/${word}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    }
}

// 处理sentences分类
if (sentencesMatch) {
    const sentencesContent = sentencesMatch[1];
    const wordMatches = sentencesContent.matchAll(/word:\s*['"]([^'"]+)['"]/g);
    for (const match of wordMatches) {
        const word = match[1].toLowerCase().replace(/\s+/g, '-');
        newUrls += `  <url>\n    <loc>https://mzc0603.xyz/word/${word}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    }
}

// 在</urlset>之前插入新的URL
sitemapContent = sitemapContent.replace('</urlset>', newUrls + '</urlset>');

// 写入sitemap.xml
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('成功更新sitemap.xml文件');
