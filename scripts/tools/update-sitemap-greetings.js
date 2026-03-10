const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 读取sitemap.xml文件
const sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 找到greetings分类的单词
const greetingsMatch = wordDataContent.match(/greetings:\s*\[(.*?)\]/s);
if (greetingsMatch) {
    const greetingsContent = greetingsMatch[1];
    const wordMatches = greetingsContent.matchAll(/word:\s*['"]([^'"]+)['"]/g);
    
    // 生成新的URL条目
    let newUrls = '';
    const today = new Date().toISOString().split('T')[0];
    
    for (const match of wordMatches) {
        const word = match[1].toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
        newUrls += `  <url>\n    <loc>https://mzc0603.xyz/word/${word}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    }
    
    // 检查是否已存在greetings分类的URL
    const existingGreetingsUrls = sitemapContent.match(/<url>\s*<loc>https:\/\/mzc0603\.xyz\/word\/[^<]+<\/loc>[\s\S]*?<\/url>/g) || [];
    
    if (existingGreetingsUrls.length > 0) {
        // 替换现有URL
        sitemapContent = sitemapContent.replace(/(<url>\s*<loc>https:\/\/mzc0603\.xyz\/word\/[^<]+<\/loc>[\s\S]*?<\/url>\n)+/, newUrls);
    } else {
        // 添加新URL
        sitemapContent = sitemapContent.replace('</urlset>', newUrls + '</urlset>');
    }
    
    // 写入文件
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('成功更新sitemap.xml，添加了greetings分类的单词链接');
} else {
    console.log('未找到greetings分类');
}
