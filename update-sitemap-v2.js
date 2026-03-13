const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, 'word-data.js');
const sitemapPath = path.join(__dirname, 'sitemap.xml');

// 读取word-data.js文件
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 解析单词数据
function parseWordData(content) {
    const words = [];
    const regex = /\{\s*word:\s*[\'"]([^\'"]+)[\'"],\s*phonetic:\s*[\'"]([^\'"]*)[\'"],\s*homophone:\s*[\'"]([^\'"]*)[\'"],\s*meaning:\s*[\'"]([^\'"]*)[\'"],\s*sentence:\s*[\'"]([^\'"]*)[\'"],\s*translation:\s*[\'"]([^\'"]*)[\'"],\s*homophoneSentence:\s*[\'"]([^\'"]*)[\'"]\s*\}/g;
    
    let match;
    while ((match = regex.exec(content)) !== null) {
        words.push({
            word: match[1],
            phonetic: match[2],
            homophone: match[3],
            meaning: match[4],
            sentence: match[5],
            translation: match[6],
            homophoneSentence: match[7]
        });
    }
    
    return words;
}

// 生成sitemap.xml
function generateSitemap(words) {
    const today = new Date().toISOString().split('T')[0];
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://english-phonetic.top/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`;
    
    words.forEach(word => {
        const encodedWord = encodeURIComponent(word.word);
        sitemapXml += `
    <url>
        <loc>https://english-phonetic.top/?word=${encodedWord}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
    });
    
    sitemapXml += `
</urlset>`;
    
    return sitemapXml;
}

// 解析单词数据
const words = parseWordData(wordDataContent);
console.log(`共解析到 ${words.length} 个单词`);

// 生成新的sitemap.xml
const newSitemapXml = generateSitemap(words);

// 写入更新后的sitemap.xml文件
fs.writeFileSync(sitemapPath, newSitemapXml, 'utf8');

console.log('✅ 成功更新sitemap.xml');
