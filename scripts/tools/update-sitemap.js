const fs = require('fs');
const path = require('path');

class SitemapUpdater {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '../..');
        this.sitemapPath = path.join(this.projectRoot, 'sitemap.xml');
    }

    loadWordData(jsonPath) {
        const data = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(data);
    }

    loadSitemap() {
        return fs.readFileSync(this.sitemapPath, 'utf8');
    }

    generateWordUrl(word) {
        const wordSlug = word.toLowerCase().replace(/\s+/g, '-');
        return `https://mzc0603.xyz/word/${wordSlug}`;
    }

    generateUrlEntry(word) {
        const url = this.generateWordUrl(word);
        return `  <url>
    <loc>${url}</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    }

    updateSitemap(jsonPath, category = 'all') {
        try {
            const wordData = this.loadWordData(jsonPath);
            const sitemapContent = this.loadSitemap();

            let words = [];
            
            if (category === 'all') {
                for (const cat of Object.keys(wordData)) {
                    words = words.concat(wordData[cat]);
                }
            } else if (wordData[category]) {
                words = wordData[category];
            } else {
                console.error(`Category ${category} not found in JSON file`);
                return;
            }

            const newUrlEntries = [];
            const newUrls = [];

            for (const wordData of words) {
                const url = this.generateWordUrl(wordData.word);
                newUrls.push(url);
                newUrlEntries.push(this.generateUrlEntry(wordData.word));
            }

            const existingUrls = new Set();
            const urlRegex = /<loc>(https:\/\/mzc0603\.xyz\/word\/[^<]+)<\/loc>/g;
            let urlMatch;
            while ((urlMatch = urlRegex.exec(sitemapContent)) !== null) {
                existingUrls.add(urlMatch[1]);
            }

            const uniqueUrlEntries = [];
            for (let i = 0; i < newUrls.length; i++) {
                if (!existingUrls.has(newUrls[i])) {
                    uniqueUrlEntries.push(newUrlEntries[i]);
                }
            }

            if (uniqueUrlEntries.length === 0) {
                console.log('All word URLs already exist in sitemap.xml');
                return;
            }

            const numbersCategoryRegex = /(<url>\s*<loc>https:\/\/mzc0603\.xyz\/category\/numbers\?page=2<\/loc>[\s\S]*?<\/url>)/;
            const categoryMatch = sitemapContent.match(numbersCategoryRegex);

            if (categoryMatch) {
                const insertionPoint = categoryMatch.index + categoryMatch[0].length;
                const newSitemapContent = 
                    sitemapContent.substring(0, insertionPoint) + '\n' +
                    uniqueUrlEntries.join('\n') + '\n' +
                    sitemapContent.substring(insertionPoint);

                fs.writeFileSync(this.sitemapPath, newSitemapContent);
                console.log(`Added ${uniqueUrlEntries.length} new word URLs to sitemap.xml`);
            } else {
                console.error('Could not find numbers category in sitemap.xml');
            }

        } catch (error) {
            console.error('Error updating sitemap:', error);
        }
    }
}

const updater = new SitemapUpdater();
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log('用法: node update-sitemap.js <JSON文件路径> [分类名称]');
    console.log('示例: node update-sitemap.js scripts/data/new-all.json all');
    console.log('示例: node update-sitemap.js scripts/data/new-numbers.json numbers');
    process.exit(1);
}

const jsonPath = args[0];
const category = args[1] || 'all';

updater.updateSitemap(jsonPath, category);
