const fs = require('fs');

const today = new Date().toISOString().split('T')[0];

const data = fs.readFileSync('word-data.js', 'utf8');

const categories = ['greetings', 'emotions', 'numbers', 'colors', 'family', 'time', 'food', 'conversations', 'sentences'];

function extractWords(category) {
    const regex = new RegExp(`${category}:\\s*\\[([\\s\\S]*?)\\],\\s*\\w+:`, 'g');
    const match = regex.exec(data);
    if (!match) return [];
    
    const arrayContent = match[1];
    const wordRegex = /\{\s*word:\s*['"]([^'"]+)['"]/g;
    
    const words = [];
    let wordMatch;
    while ((wordMatch = wordRegex.exec(arrayContent)) !== null) {
        words.push(wordMatch[1]);
    }
    return words;
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 首页 -->
  <url>
    <loc>https://mzc0603.xyz/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

`;

categories.forEach(category => {
    const words = extractWords(category);
    const totalPages = Math.ceil(words.length / 50);
    
    sitemap += `  <!-- ${category} 分类页 -->
  <url>
    <loc>https://mzc0603.xyz/category/${category}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    
    for (let i = 2; i <= totalPages; i++) {
        sitemap += `  <url>
    <loc>https://mzc0603.xyz/category/${category}?page=${i}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }
    
    words.forEach(word => {
        const slug = word.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        sitemap += `  <url>
    <loc>https://mzc0603.xyz/word/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });
});

sitemap += `</urlset>
`;

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('sitemap.xml 已更新！');
