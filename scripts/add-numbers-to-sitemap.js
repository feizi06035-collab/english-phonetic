const fs = require('fs');

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const wordData = fs.readFileSync('word-data.js', 'utf8');
const today = new Date().toISOString().split('T')[0];

const numbersMatch = wordData.match(/numbers: \[([\s\S]*?)\n    \],/);
if (!numbersMatch) {
    console.log('未找到numbers数组');
    process.exit(1);
}

const numbersContent = numbersMatch[1];
const wordMatches = numbersContent.matchAll(/\{ word: '([^']+)',/g);

const existingUrls = new Set();
const urlMatches = sitemap.matchAll(/<loc>https:\/\/mzc0603\.xyz\/word\/([^<]+)<\/loc>/g);
for (const match of urlMatches) {
    existingUrls.add(match[1].toLowerCase());
}

const newUrls = [];
for (const match of wordMatches) {
    const word = match[1];
    const urlWord = word.toLowerCase().replace(/ /g, '-');
    if (!existingUrls.has(urlWord)) {
        newUrls.push(urlWord);
    }
}

console.log('现有URL数量:', existingUrls.size);
console.log('需要添加的新URL数量:', newUrls.length);

const newUrlEntries = newUrls.map(urlWord => {
    return `  <url>
    <loc>https://mzc0603.xyz/word/${urlWord}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
}).join('\n');

const numbersSectionMatch = sitemap.match(/(  <!-- 单词页 - numbers 分类 -->[\s\S]*?)(\n  <!-- 单词页 - )/);
if (!numbersSectionMatch) {
    console.log('未找到numbers分类标记');
    process.exit(1);
}

const updatedSitemap = sitemap.replace(
    /(  <!-- 单词页 - numbers 分类 -->[\s\S]*?)(\n  <!-- 单词页 - )/,
    `$1\n${newUrlEntries}\n$2`
);

fs.writeFileSync('sitemap.xml', updatedSitemap);
console.log('已将', newUrls.length, '个新URL添加到sitemap.xml');
