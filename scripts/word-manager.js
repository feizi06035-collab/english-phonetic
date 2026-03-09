const fs = require('fs');
const path = require('path');

class WordManager {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '..');
        this.wordDataPath = path.join(this.projectRoot, 'word-data.js');
        this.indexHtmlPath = path.join(this.projectRoot, 'index.html');
        this.sitemapPath = path.join(this.projectRoot, 'sitemap.xml');
        this.categories = {
            'greetings': '日常问候类',
            'emotions': '情感表达类',
            'numbers': '数字分类',
            'common': '常用语句类'
        };
    }

    async run() {
        console.log('=== 英语单词管理工具 ===\n');
        
        try {
            // 选择分类
            const category = await this.selectCategory();
            if (!category) return;
            
            // 输入单词数量
            const count = await this.inputWordCount();
            if (!count) return;
            
            // 生成并添加单词
            console.log('\n正在生成并添加单词...');
            const newWords = this.generateWords(category, count);
            await this.addWordsToDatabase(category, newWords);
            
            // 更新index.html
            console.log('正在更新index.html...');
            await this.updateIndexHtml(category);
            
            // 更新sitemap.xml
            console.log('正在更新sitemap.xml...');
            await this.updateSitemap(category);
            
            // 修复语法错误
            console.log('正在修复语法错误...');
            await this.fixSyntaxErrors();
            
            // 推送GitHub
            const pushToGithub = await this.confirmPushToGithub();
            if (pushToGithub) {
                console.log('正在推送GitHub...');
                await this.pushToGithub();
            }
            
            console.log('\n✅ 操作完成！');
            console.log(`已成功添加 ${count} 个单词到 ${this.categories[category]} 分类`);
            
        } catch (error) {
            console.error('❌ 操作失败:', error.message);
        }
    }

    selectCategory() {
        return new Promise((resolve) => {
            console.log('请选择要添加单词的分类:');
            Object.entries(this.categories).forEach(([key, value], index) => {
                console.log(`${index + 1}. ${value} (${key})`);
            });
            console.log('0. 退出');
            
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            readline.question('请输入选项编号: ', (answer) => {
                readline.close();
                const index = parseInt(answer);
                if (index === 0) {
                    resolve(null);
                } else if (index > 0 && index <= Object.keys(this.categories).length) {
                    const category = Object.keys(this.categories)[index - 1];
                    resolve(category);
                } else {
                    console.log('❌ 无效选项，请重新运行');
                    resolve(null);
                }
            });
        });
    }

    inputWordCount() {
        return new Promise((resolve) => {
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            readline.question('请输入要添加的单词数量: ', (answer) => {
                readline.close();
                const count = parseInt(answer);
                if (count > 0) {
                    resolve(count);
                } else {
                    console.log('❌ 无效数量，请重新运行');
                    resolve(null);
                }
            });
        });
    }

    generateWords(category, count) {
        const words = [];
        
        for (let i = 1; i <= count; i++) {
            let word, phonetic, homophone, meaning, sentence, translation, homophoneSentence;
            
            switch (category) {
                case 'greetings':
                    word = `Greeting ${i}`;
                    phonetic = `/ˈɡriːtɪŋ ${i}/`;
                    homophone = `格瑞庭 ${i}`;
                    meaning = `问候语 ${i}`;
                    sentence = `Hello, this is greeting ${i}!`;
                    translation = `你好，这是问候语 ${i}！`;
                    homophoneSentence = `哈喽, 迪斯伊兹格瑞庭 ${i}!`;
                    break;
                    
                case 'emotions':
                    word = `Emotion ${i}`;
                    phonetic = `/ɪˈmoʊʃn ${i}/`;
                    homophone = `伊莫申 ${i}`;
                    meaning = `情感 ${i}`;
                    sentence = `I feel emotion ${i}!`;
                    translation = `我感受到情感 ${i}！`;
                    homophoneSentence = `爱费偶伊莫申 ${i}!`;
                    break;
                    
                case 'numbers':
                    word = `Number ${i}`;
                    phonetic = `/ˈnʌmbər ${i}/`;
                    homophone = `楠博 ${i}`;
                    meaning = `数字 ${i}`;
                    sentence = `This is number ${i}.`;
                    translation = `这是数字 ${i}。`;
                    homophoneSentence = `迪斯伊兹楠博 ${i}.`;
                    break;
                    
                case 'common':
                    word = `Common ${i}`;
                    phonetic = `/ˈkɑːmən ${i}/`;
                    homophone = `卡门 ${i}`;
                    meaning = `常用语句 ${i}`;
                    sentence = `This is common sentence ${i}.`;
                    translation = `这是常用语句 ${i}。`;
                    homophoneSentence = `迪斯伊兹卡门森腾斯 ${i}.`;
                    break;
            }
            
            words.push({
                word,
                phonetic,
                homophone,
                meaning,
                sentence,
                translation,
                homophoneSentence
            });
        }
        
        return words;
    }

    async addWordsToDatabase(category, words) {
        const content = fs.readFileSync(this.wordDataPath, 'utf8');
        
        const categoryPattern = new RegExp(`${category}:\s*\[(.*?)\]`, 's');
        const match = content.match(categoryPattern);
        
        if (match) {
            const categoryContent = match[1];
            const isEmpty = categoryContent.trim() === '';
            
            const newWordsString = words.map(word => {
                return `        { word: '${word.word.replace(/'/g, "\\'")}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence.replace(/'/g, "\\'")}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
            }).join(',\n');
            
            let newCategoryContent;
            if (isEmpty) {
                newCategoryContent = newWordsString;
            } else {
                newCategoryContent = categoryContent.trim() + ',\n' + newWordsString;
            }
            
            const newContent = content.replace(categoryPattern, `${category}: [\n${newCategoryContent}\n    ]`);
            fs.writeFileSync(this.wordDataPath, newContent, 'utf8');
        }
    }

    async updateIndexHtml(category) {
        const content = fs.readFileSync(this.wordDataPath, 'utf8');
        const categoryPattern = new RegExp(`${category}:\s*\[(.*?)\]`, 's');
        const match = content.match(categoryPattern);
        
        if (match) {
            const categoryContent = match[1];
            const wordObjects = categoryContent.match(/\{[^}]*\}/g) || [];
            
            const words = wordObjects.map(objStr => {
                const wordMatch = objStr.match(/word:\s*['"]([^'"]+)['"]/);
                const phoneticMatch = objStr.match(/phonetic:\s*['"]([^'"]+)['"]/);
                const homophoneMatch = objStr.match(/homophone:\s*['"]([^'"]+)['"]/);
                const meaningMatch = objStr.match(/meaning:\s*['"]([^'"]+)['"]/);
                const sentenceMatch = objStr.match(/sentence:\s*['"]([^'"]+)['"]/);
                const translationMatch = objStr.match(/translation:\s*['"]([^'"]+)['"]/);
                const homophoneSentenceMatch = objStr.match(/homophoneSentence:\s*['"]([^'"]+)['"]/);
                
                return {
                    word: wordMatch ? wordMatch[1] : '',
                    phonetic: phoneticMatch ? phoneticMatch[1] : '',
                    homophone: homophoneMatch ? homophoneMatch[1] : '',
                    meaning: meaningMatch ? meaningMatch[1] : '',
                    sentence: sentenceMatch ? sentenceMatch[1] : '',
                    translation: translationMatch ? translationMatch[1] : '',
                    homophoneSentence: homophoneSentenceMatch ? homophoneSentenceMatch[1] : ''
                };
            });
            
            const tableRows = words.map(word => {
                const soundWord = word.word.replace(/\s+/g, '').replace(/'/g, "\\'");
                const safeWord = word.word.replace(/'/g, "&apos;");
                const safeSentence = word.sentence.replace(/'/g, "&apos;");
                const safeTranslation = word.translation.replace(/'/g, "&apos;");
                const safeHomophoneSentence = word.homophoneSentence.replace(/'/g, "&apos;");
                return `                <tr><td><button class="sound-btn" onclick="playSound('${soundWord}')">${safeWord}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${safeSentence} → 【${safeTranslation}】→ ${safeHomophoneSentence}</td></tr>`;
            }).join('\n');
            
            const htmlContent = fs.readFileSync(this.indexHtmlPath, 'utf8');
            const tablePattern = new RegExp(`<!-- ${this.categories[category]} -->[\s\S]*?<table aria-label="${this.categories[category]}单词列表">[\s\S]*?<tbody>([\s\S]*?)<\/tbody>`, 's');
            
            if (tablePattern.test(htmlContent)) {
                const newHtmlContent = htmlContent.replace(tablePattern, `<!-- ${this.categories[category]} -->\n            <section class="word-category" id="${category}" aria-label="${this.categories[category]}词汇">\n                <h2>${this.categories[category]} | ${category.charAt(0).toUpperCase() + category.slice(1)}</h2>\n                <table aria-label="${this.categories[category]}单词列表">\n                    <thead>\n                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>\n                    </thead>\n                    <tbody>\n${tableRows}\n                    </tbody>`);
                fs.writeFileSync(this.indexHtmlPath, newHtmlContent, 'utf8');
            }
        }
    }

    async updateSitemap(category) {
        const content = fs.readFileSync(this.wordDataPath, 'utf8');
        const categoryPattern = new RegExp(`${category}:\s*\[(.*?)\]`, 's');
        const match = content.match(categoryPattern);
        
        if (match) {
            const categoryContent = match[1];
            const wordMatches = categoryContent.matchAll(/word:\s*['"]([^'"]+)['"]/g);
            
            const sitemapContent = fs.readFileSync(this.sitemapPath, 'utf8');
            const today = new Date().toISOString().split('T')[0];
            let newUrls = '';
            
            for (const wordMatch of wordMatches) {
                const word = wordMatch[1].toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
                newUrls += `  <url>\n    <loc>https://mzc0603.xyz/word/${word}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
            }
            
            if (newUrls) {
                const newSitemapContent = sitemapContent.replace('</urlset>', newUrls + '</urlset>');
                fs.writeFileSync(this.sitemapPath, newSitemapContent, 'utf8');
            }
        }
    }

    async fixSyntaxErrors() {
        let content = fs.readFileSync(this.wordDataPath, 'utf8');
        content = content.replace(/},,/g, ',');
        content = content.replace(/homophoneSentence:\s*['"][^'"]*['"]\s*,\s*,,/g, (match) => {
            return match.replace(/,,/, '},');
        });
        fs.writeFileSync(this.wordDataPath, content, 'utf8');
    }

    confirmPushToGithub() {
        return new Promise((resolve) => {
            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            readline.question('是否推送到GitHub？(y/n): ', (answer) => {
                readline.close();
                resolve(answer.toLowerCase() === 'y');
            });
        });
    }

    async pushToGithub() {
        const { execSync } = require('child_process');
        
        try {
            execSync('git add index.html sitemap.xml word-data.js', { stdio: 'inherit' });
            execSync('git commit -m "添加新单词到分类"', { stdio: 'inherit' });
            execSync('git push', { stdio: 'inherit' });
            return true;
        } catch (error) {
            console.error('❌ GitHub推送失败:', error.message);
            return false;
        }
    }
}

// 运行工具
if (require.main === module) {
    const manager = new WordManager();
    manager.run();
}

module.exports = WordManager;