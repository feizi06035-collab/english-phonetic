// 更新sitemap.xml，添加新单词链接
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sitemapPath = path.join(projectRoot, 'sitemap.xml');
const newGreetingsPath = path.join(__dirname, 'new-greetings.json');

// 读取新单词
const newGreetings = JSON.parse(fs.readFileSync(newGreetingsPath, 'utf8'));
console.log(`读取了 ${newGreetings.length} 个新单词`);

// 读取sitemap.xml
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 获取当前日期
const today = new Date().toISOString().split('T')[0];

// 构建新URL条目的字符串
const newUrlsString = newGreetings.map(word => {
    const wordSlug = word.word.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `  <url>
    <loc>https://mzc0603.xyz/word/${wordSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
}).join('\n');

// 找到sitemap的结束位置（</urlset>之前）
const sitemapEndPattern = /(<\/urlset>)/;
const match = sitemapContent.match(sitemapEndPattern);

if (!match) {
    console.error('无法找到sitemap的结束位置');
    process.exit(1);
}

// 在sitemap结束前插入新URL
const updatedContent = sitemapContent.replace(
    sitemapEndPattern,
    `  <!-- 新增日常问候类单词 -->\n${newUrlsString}\n$1`
);

// 写回文件
fs.writeFileSync(sitemapPath, updatedContent);
console.log(`成功将 ${newGreetings.length} 个新单词链接添加到sitemap.xml`);
