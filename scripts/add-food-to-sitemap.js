const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '../word-data.js');
const sitemapPath = path.join(__dirname, '../sitemap.xml');

let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
const foodMatch = wordDataContent.match(/food:\s*\[([\s\S]*?)\n    \]/);
if (!foodMatch) {
    console.error('Could not find food array');
    process.exit(1);
}

const foodContent = foodMatch[1];
const foodWords = [];
const wordRegex = /\{\s*word:\s*'([^']+)',/g;

let match;
while ((match = wordRegex.exec(foodContent)) !== null) {
    foodWords.push(match[1]);
}

console.log('Total food words in word-data.js:', foodWords.length);

let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

const existingUrls = new Set();
const urlRegex = /<loc>https:\/\/english-phonetic\.vercel\.app\/\?word=([^<]+)<\/loc>/g;
let urlMatch;
while ((urlMatch = urlRegex.exec(sitemapContent)) !== null) {
    existingUrls.add(decodeURIComponent(urlMatch[1]).toLowerCase());
}

console.log('Existing URLs in sitemap:', existingUrls.size);

const today = new Date().toISOString().split('T')[0];
const newUrls = foodWords
    .filter(word => !existingUrls.has(word.toLowerCase()))
    .map(word => {
        const encodedWord = encodeURIComponent(word);
        return `  <url>
    <loc>https://english-phonetic.vercel.app/?word=${encodedWord}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

console.log('New URLs to add:', newUrls.length);

if (newUrls.length > 0) {
    const urlsetEnd = sitemapContent.lastIndexOf('</urlset>');
    if (urlsetEnd === -1) {
        console.error('Could not find </urlset> tag');
        process.exit(1);
    }
    
    const newContent = sitemapContent.substring(0, urlsetEnd) + 
        '\n' + newUrls.join('\n') + '\n' +
        sitemapContent.substring(urlsetEnd);
    
    fs.writeFileSync(sitemapPath, newContent, 'utf8');
    console.log('Successfully updated sitemap.xml with', newUrls.length, 'new URLs');
} else {
    console.log('No new URLs to add');
}
