const fs = require('fs');
const path = require('path');

class SitemapUpdater {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '../..');
        this.sitemapPath = path.join(this.projectRoot, 'sitemap.xml');
        this.newTimePath = path.join(this.projectRoot, 'scripts', 'data', 'new-time.json');
    }

    loadNewTime() {
        const data = fs.readFileSync(this.newTimePath, 'utf8');
        return JSON.parse(data).time;
    }

    loadSitemap() {
        return fs.readFileSync(this.sitemapPath, 'utf8');
    }

    generateWordUrl(word) {
        // 转换为小写，替换空格为连字符
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

    checkExistingUrls(sitemapContent, newUrls) {
        const existingUrls = new Set();
        const urlRegex = /<loc>(https:\/\/mzc0603\.xyz\/word\/[^<]+)<\/loc>/g;
        let match;
        while ((match = urlRegex.exec(sitemapContent)) !== null) {
            existingUrls.add(match[1]);
        }

        return newUrls.filter(url => !existingUrls.has(url));
    }

    updateSitemap() {
        try {
            const words = this.loadNewTime();
            const sitemapContent = this.loadSitemap();

            // 生成新的URL条目
            const newUrlEntries = [];
            const newUrls = [];

            for (const wordData of words) {
                const url = this.generateWordUrl(wordData.word);
                newUrls.push(url);
                newUrlEntries.push(this.generateUrlEntry(wordData.word));
            }

            // 检查是否已存在
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

            // 找到合适的位置插入新链接（在数字分类链接之后）
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

// 执行更新
const updater = new SitemapUpdater();
updater.updateSitemap();
