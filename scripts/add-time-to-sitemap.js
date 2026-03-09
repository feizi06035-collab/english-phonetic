const fs = require('fs');

console.log('开始读取文件...');

const wordData = fs.readFileSync('word-data.js', 'utf8');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');

console.log('文件读取完成');

const timeMatch = wordData.match(/time: \[([\s\S]*?)\n    \],/);
if (!timeMatch) {
    console.log('未找到time数组');
    process.exit(1);
}

console.log('找到time数组');

const timeContent = timeMatch[1];
const wordMatches = timeContent.matchAll(/word: '([^']+)'/g);

const times = [];
for (const match of wordMatches) {
    times.push(match[1]);
}

console.log('找到时间类单词数量:', times.length);

const existingUrls = new Set();
const urlMatches = sitemap.matchAll(/<loc>https:\/\/mzc0603\.xyz\/word\/([^<]+)<\/loc>/g);
for (const match of urlMatches) {
    existingUrls.add(match[1].toLowerCase());
}

console.log('现有URL数量:', existingUrls.size);

const newUrls = times.filter(c => !existingUrls.has(c.toLowerCase()));
console.log('需要添加的新URL数量:', newUrls.length);

if (newUrls.length > 0) {
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
} else {
    console.log('没有新URL需要添加');
}
