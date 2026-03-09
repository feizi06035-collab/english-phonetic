const fs = require('fs');

// 读取word-data.js文件内容
const wordDataContent = fs.readFileSync('word-data.js', 'utf8');

// 提取emotions数组
const emotionsStart = wordDataContent.indexOf('emotions: [');
const emotionsEnd = wordDataContent.indexOf('],', emotionsStart);

if (emotionsStart === -1 || emotionsEnd === -1) {
    console.error('无法找到emotions数组');
    process.exit(1);
}

const emotionsStr = wordDataContent.substring(emotionsStart + 'emotions: ['.length, emotionsEnd);

// 使用正则表达式提取每个单词对象
const wordRegex = /\{\s*word:\s*'([^']+)'\s*,\s*phonetic:\s*'([^']+)'\s*,\s*homophone:\s*'([^']+)'\s*,\s*meaning:\s*'([^']+)'\s*,\s*sentence:\s*'([^']+)'\s*,\s*translation:\s*'([^']+)'\s*,\s*homophoneSentence:\s*'([^']+)'\s*\}/g;

const emotions = [];
let match;
while ((match = wordRegex.exec(emotionsStr)) !== null) {
    emotions.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('情感单词总数:', emotions.length);

// 读取sitemap.xml文件
let sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');

// 查找emotions分类的链接位置
const emotionsUrlStart = sitemapContent.indexOf('<loc>https://mzc0603.xyz/category/emotions</loc>');
const emotionsUrlEnd = sitemapContent.indexOf('</url>', emotionsUrlStart);

if (emotionsUrlStart === -1 || emotionsUrlEnd === -1) {
    console.error('无法找到emotions分类链接');
    process.exit(1);
}

// 更新emotions分类的lastmod日期
const today = new Date().toISOString().split('T')[0];
const updatedEmotionsUrl = `  <url>
    <loc>https://mzc0603.xyz/category/emotions</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

sitemapContent = sitemapContent.substring(0, emotionsUrlStart) + updatedEmotionsUrl + sitemapContent.substring(emotionsUrlEnd + 6);

// 更新emotions分页的lastmod日期
const emotionsPage2Start = sitemapContent.indexOf('<loc>https://mzc0603.xyz/category/emotions?page=2</loc>');
const emotionsPage2End = sitemapContent.indexOf('</url>', emotionsPage2Start);

if (emotionsPage2Start !== -1 && emotionsPage2End !== -1) {
    const updatedEmotionsPage2 = `  <url>
    <loc>https://mzc0603.xyz/category/emotions?page=2</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    sitemapContent = sitemapContent.substring(0, emotionsPage2Start) + updatedEmotionsPage2 + sitemapContent.substring(emotionsPage2End + 6);
}

// 检查是否需要添加emotions?page=3的链接
const emotionsPage3Exists = sitemapContent.includes('<loc>https://mzc0603.xyz/category/emotions?page=3</loc>');

if (!emotionsPage3Exists && emotions.length > 200) {
    // 计算需要多少页
    const wordsPerPage = 100;
    const totalPages = Math.ceil(emotions.length / wordsPerPage);
    
    // 添加新的分页链接
    const urlsetEnd = sitemapContent.indexOf('</urlset>');
    const newUrls = [];
    
    for (let i = 3; i <= totalPages; i++) {
        const priority = i === 3 ? 0.7 : 0.6;
        newUrls.push(`  <url>
    <loc>https://mzc0603.xyz/category/emotions?page=${i}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
    }
    
    sitemapContent = sitemapContent.substring(0, urlsetEnd) + '\n' + newUrls.join('\n') + '\n' + sitemapContent.substring(urlsetEnd);
}

// 写入sitemap.xml文件
fs.writeFileSync('sitemap.xml', sitemapContent, 'utf8');

console.log('成功更新sitemap.xml');
console.log('emotions分类链接已更新');
