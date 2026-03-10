const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '..', 'word-data.js');
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const sentencesMatch = wordDataContent.match(/sentences:\s*\[([\s\S]*?)\]/);
if (sentencesMatch) {
    const sentencesContent = sentencesMatch[1];
    const wordObjects = sentencesContent.match(/\{[^}]*\}/g) || [];
    
    const today = new Date().toISOString().split('T')[0];
    let newUrls = '';
    
    wordObjects.forEach(objStr => {
        const wordMatch = objStr.match(/word:\s*'([^']*(?:\\.[^']*)*)'/);
        if (wordMatch) {
            const word = wordMatch[1].replace(/\\'/g, "'");
            const safeWord = word.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '').replace(/\?/g, '').replace(/!/g, '').replace(/,/g, '');
            newUrls += `  <url>
    <loc>https://mzc0603.xyz/word/${safeWord}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
        }
    });

    if (sitemapContent.includes('<!-- 单词页 - sentences 分类 -->')) {
        sitemapContent = sitemapContent.replace(/<!-- 单词页 - sentences 分类 -->[\s\S]*?(?=\s*<!--|$)/, '');
    }
    
    const sentencesSection = `  <!-- 单词页 - sentences 分类 -->\n${newUrls}`;
    sitemapContent = sitemapContent.replace('</urlset>', `${sentencesSection}\n</urlset>`);
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log(`成功更新sitemap.xml，添加了 ${wordObjects.length} 个sentences分类的单词链接`);
} else {
    console.log('未找到sentences分类');
}
