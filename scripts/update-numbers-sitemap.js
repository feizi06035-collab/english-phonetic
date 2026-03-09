const fs = require('fs');

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const today = new Date().toISOString().split('T')[0];

const updatedSitemap = sitemap.replace(
    /(<loc>https:\/\/mzc0603\.xyz\/category\/numbers[^<]*<\/loc>\n\s*<lastmod>)[^<]*(<\/lastmod>)/g,
    `$1${today}$2`
);

fs.writeFileSync('sitemap.xml', updatedSitemap);
console.log('已更新sitemap.xml中numbers分类的lastmod日期为', today);
