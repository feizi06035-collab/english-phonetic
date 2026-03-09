const fs = require('fs');

const wordData = fs.readFileSync('word-data.js', 'utf8');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');

const colorsMatch = wordData.match(/colors: \[([\s\S]*?)\n    \],/);
if (!colorsMatch) {
    console.log('未找到colors数组');
    process.exit(1);
}

const colorsContent = colorsMatch[1];
const wordMatches = colorsContent.matchAll(/word: '([^']+)'/g);

const colors = [];
for (const match of wordMatches) {
    colors.push(match[1]);
}

console.log('找到颜色类单词数量:', colors.length);

const existingUrls = new Set();
const urlMatches = sitemap.matchAll(/<loc>https:\/\/mzc0603\.xyz\/word\/([^<]+)<\/loc>/g);
for (const match of urlMatches) {
    existingUrls.add(match[1].toLowerCase());
}

const newUrls = colors.filter(c => !existingUrls.has(c.toLowerCase()));
console.log('需要添加的新URL数量:', newUrls.length);

const newUrlEntries = newUrls.map(word => {
    return `  <url>
    <loc>https://mzc0603.xyz/word/${word}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const lastUrlIndex = sitemap.lastIndexOf('</url>');
const beforeLastUrl = sitemap.substring(0, lastUrlIndex + 6);
const afterLastUrl = sitemap.substring(lastUrlIndex + 6);

const updatedSitemap = beforeLastUrl + '\n' + newUrlEntries + afterLastUrl;

fs.writeFileSync('sitemap.xml', updatedSitemap);
console.log('已将新URL添加到sitemap.xml');
