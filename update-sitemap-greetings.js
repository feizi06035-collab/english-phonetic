const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const today = new Date().toISOString().split('T')[0];

const greetingsMatch = wordDataContent.match(/greetings:\s*\[([\s\S]*?)\]/);

let newUrls = '';

if (greetingsMatch) {
    const greetingsContent = greetingsMatch[1];
    const wordMatches = greetingsContent.matchAll(/word:\s*['"]([^'"]+)['"]/g);
    for (const match of wordMatches) {
        const word = match[1].toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
        newUrls += `  <url>\n    <loc>https://mzc0603.xyz/word/${word}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    }
}

sitemapContent = sitemapContent.replace('</urlset>', newUrls + '</urlset>');

fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('成功更新sitemap.xml文件，添加日常问候分类新单词链接');
