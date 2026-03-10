const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../sitemap.xml');
const wordDataPath = path.join(__dirname, '../word-data.js');

console.log('Loading word data...');
const wordDatabase = require(wordDataPath);
const foodWords = wordDatabase.food;

console.log(`Loaded ${foodWords.length} food words`);

console.log('Reading sitemap.xml...');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

console.log('Finding position to insert new food word URLs...');
const urlsetEnd = sitemapContent.indexOf('</urlset>');

if (urlsetEnd === -1) {
    console.error('Could not find </urlset> in sitemap.xml');
    process.exit(1);
}

console.log('Generating new food word URLs...');
const today = new Date().toISOString().split('T')[0];
const newUrls = foodWords.map(item => {
    const wordSlug = item.word.toLowerCase().replace(/\s+/g, '-');
    return `  <url>
    <loc>https://mzc0603.xyz/word/${wordSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
}).join('\n');

console.log('Checking for existing food word URLs...');
const existingFoodUrls = new Set();
const urlRegex = /<loc>https:\/\/mzc0603\.xyz\/word\/([^<]+)<\/loc>/g;
let match;
while ((match = urlRegex.exec(sitemapContent)) !== null) {
    existingFoodUrls.add(match[1]);
}

console.log(`Found ${existingFoodUrls.size} existing word URLs`);

console.log('Filtering out existing URLs...');
const uniqueNewUrls = foodWords.filter(item => {
    const wordSlug = item.word.toLowerCase().replace(/\s+/g, '-');
    return !existingFoodUrls.has(wordSlug);
}).map(item => {
    const wordSlug = item.word.toLowerCase().replace(/\s+/g, '-');
    return `  <url>
    <loc>https://mzc0603.xyz/word/${wordSlug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
}).join('\n');

if (uniqueNewUrls) {
    console.log(`Adding ${uniqueNewUrls.split('\n').filter(line => line.trim()).length / 5} new food word URLs`);
    const newSitemap = sitemapContent.substring(0, urlsetEnd) + '\n' + uniqueNewUrls + '\n' + sitemapContent.substring(urlsetEnd);
    
    console.log('Writing updated sitemap.xml...');
    fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
    
    console.log('Done! sitemap.xml has been updated.');
} else {
    console.log('No new food word URLs to add. All are already present.');
}
