const fs = require('fs');
const path = require('path');

console.log('=== 开始处理常用语句扩展任务 ===\n');

const wordDataPath = path.join(__dirname, '..', 'word-data.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

function readWordData();

function readWordData() {
    console.log('1. 读取 word-data.js...');
    const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');
    
    const sentencesMatch = wordDataContent.match(/sentences:\s*\[([\s\S]*?)\]\s*(?=,\s*[a-zA-Z0-9_]+:|})/);
    if (!sentencesMatch) {
        console.error('错误: 无法找到 sentences 数组');
        return;
    }

    const existingSentencesStr = sentencesMatch[1];
    const existingSentences = eval('[' + existingSentencesStr + ']');
    console.log(`   找到 ${existingSentences.length} 个现有单词\n');

    generateNewWords(existingSentences, wordDataContent);
}

function generateNewWords(existingSentences, wordDataContent) {
    console.log('2. 生成300个新常用语句单词...');
    
    const existingWords = new Set(existingSentences.map(s => s.word.toLowerCase()));
    
    const newSentences = [
        { word: 'Good to see you', phonetic: '/ɡʊd tuː siː juː/', homophone: '古德图西优', meaning: '很高兴见到你', sentence: 'Good to see you again!', translation: '很高兴再次见到你！', homophoneSentence: '古德图西优阿根!' },
        { word: 'How is it going', phonetic: '/haʊ ɪz ɪt ˈɡəʊɪŋ/', homophone: '好依兹伊特够因', meaning: '最近怎么样', sentence: 'How is it going with you?', translation: '你最近怎么样？', homophoneSentence: '好依兹伊特够因威斯优?' },
        { word: 'Whats new', phonetic: '/wɒts njuː/', homophone: '沃茨纽', meaning: '有什么新鲜事', sentence: 'Whats new with you?', translation: '你有什么新鲜事？', homophoneSentence: '沃茨纽威斯优?' },
        { word: 'Take it easy', phonetic: '/teɪk ɪt ˈiːzi/', homophone: '忒克伊特依兹', meaning: '放轻松', sentence: 'Take it easy, my friend!', translation: '放轻松，我的朋友！', homophoneSentence: '忒克伊特依兹麦夫瑞恩德!' },
        { word: 'Have a good one', phonetic: '/hæv ə ɡʊd wʌn/', homophone: '海夫阿古德万', meaning: '祝你愉快', sentence: 'Have a good one, buddy!', translation: '祝你愉快，伙计！', homophoneSentence: '海夫阿古德万巴迪!' },
        { word: 'Keep in touch', phonetic: '/kiːp ɪn tʌtʃ/', homophone: '基普因塔奇', meaning: '保持联系', sentence: 'Keep in touch, okay?', translation: '保持联系，好吗？', homophoneSentence: '基普因塔奇欧凯?' },
        { word: 'Drop me a line', phonetic: '/drɒp miː ə laɪn/', homophone: '卓普密阿莱恩', meaning: '给我写信', sentence: 'Drop me a line sometime!', translation: '有空给我写信！', homophoneSentence: '卓普密阿莱恩萨姆泰姆!' },
        { word: 'Give me a call', phonetic: '/ɡɪv miː ə kɔːl/', homophone: '给夫密阿考尔', meaning: '给我打电话', sentence: 'Give me a call when you can!', translation: '有空给我打电话！', homophoneSentence: '给夫密阿考尔温优坎!' },
        { word: 'See you around', phonetic: '/siː juː əˈraʊnd/', homophone: '西优阿劳德', meaning: '回头见', sentence: 'See you around campus!', translation: '校园里见！', homophoneSentence: '西优阿劳德坎普斯!' },
        { word: 'Have a great day', phonetic: '/hæv ə ɡreɪt deɪ/', homophone: '海夫阿格瑞特戴', meaning: '祝你美好的一天', sentence: 'Have a great day ahead!', translation: '祝你美好的一天！', homophoneSentence: '海夫阿格瑞特戴阿海德!' },
        { word: 'Enjoy your day', phonetic: '/ɪnˈdʒɔɪ jɔː deɪ/', homophone: '因照伊尤尔戴', meaning: '享受你的一天', sentence: 'Enjoy your day off!', translation: '享受你的休息日！', homophoneSentence: '因照伊尤尔戴奥夫!' },
        { word: 'Make it a good day', phonetic: '/meɪk ɪt ə ɡʊd deɪ/', homophone: '梅克伊特阿古德戴', meaning: '祝你过得愉快', sentence: 'Make it a good day, friend!', translation: '祝你过得愉快，朋友！', homophoneSentence: '梅克伊特阿古德戴夫瑞恩德!' },
        { word: 'Enjoy your weekend', phonetic: '/ɪnˈdʒɔɪ jɔː ˌwiːkˈend/', homophone: '因照伊尤尔维克恩德', meaning: '享受你的周末', sentence: 'Enjoy your weekend trip!', translation: '享受你的周末旅行！', homophoneSentence: '因照伊尤尔维克恩德纯普!' },
        { word: 'Happy Monday', phonetic: '/ˈhæpi ˈmʌndeɪ/', homophone: '嗨皮曼戴', meaning: '周一快乐', sentence: 'Happy Monday to you!', translation: '祝你周一快乐！', homophoneSentence: '嗨皮曼戴图优!' },
        { word: 'Happy Friday', phonetic: '/ˈhæpi ˈfraɪdeɪ/', homophone: '嗨皮弗莱戴', meaning: '周五快乐', sentence: 'Happy Friday, everyone!', translation: '大家周五快乐！', homophoneSentence: '嗨皮弗莱戴爱乌瑞万!' },
        { word: 'Good luck', phonetic: '/ɡʊd lʌk/', homophone: '古德拉克', meaning: '祝你好运', sentence: 'Good luck on your test!', translation: '祝你考试顺利！', homophoneSentence: '古德拉克昂尤尔泰斯特!' },
        { word: 'Best of luck', phonetic: '/best ɒv lʌk/', homophone: '百斯特奥夫拉克', meaning: '祝你好运', sentence: 'Best of luck to you!', translation: '祝你好运！', homophoneSentence: '百斯特奥夫拉克图优!' },
        { word: 'All the best', phonetic: '/ɔːl ðə best/', homophone: '奥尔则百斯特', meaning: '一切顺利', sentence: 'All the best for your future!', translation: '祝你未来一切顺利！', homophoneSentence: '奥尔则百斯特佛尤尔菲丘!' },
        { word: 'God bless you', phonetic: '/ɡɒd bles juː/', homophone: '加德布莱斯优', meaning: '上帝保佑你', sentence: 'God bless you always!', translation: '上帝永远保佑你！', homophoneSentence: '加德布莱斯优奥韦兹!' },
        { word: 'Take good care', phonetic: '/teɪk ɡʊd keə/', homophone: '忒克古德凯尔', meaning: '好好照顾自己', sentence: 'Take good care of yourself!', translation: '好好照顾你自己！', homophoneSentence: '忒克古德凯尔奥夫尤尔赛尔夫!' },
        { word: 'Stay safe', phonetic: '/steɪ seɪf/', homophone: '斯戴塞夫', meaning: '注意安全', sentence: 'Stay safe out there!', translation: '在外面注意安全！', homophoneSentence: '斯戴塞夫奥特泽尔!' },
        { word: 'Be careful', phonetic: '/biː ˈkeəfl/', homophone: '比凯尔福欧', meaning: '小心', sentence: 'Be careful on your way!', translation: '路上小心！', homophoneSentence: '比凯尔福欧昂尤尔韦!' },
        { word: 'Watch your step', phonetic: '/wɒtʃ jɔː step/', homophone: '沃奇尤尔斯戴普', meaning: '注意脚下', sentence: 'Watch your step, please!', translation: '请注意脚下！', homophoneSentence: '沃奇尤尔斯戴普普利斯!' },
        { word: 'Drive safely', phonetic: '/draɪv ˈseɪfli/', homophone: '德拉伊夫塞夫利', meaning: '安全驾驶', sentence: 'Drive safely home!', translation: '开车回家注意安全！', homophoneSentence: '德拉伊夫塞夫利厚姆!' },
        { word: 'Safe travels', phonetic: '/seɪf ˈtrævlz/', homophone: '塞夫特拉沃兹', meaning: '旅途平安', sentence: 'Safe travels to you!', translation: '祝你旅途平安！', homophoneSentence: '塞夫特拉沃兹图优!' },
        { word: 'Bon voyage', phonetic: '/bɒn vɔɪˈɑːʒ/', homophone: '邦沃亚日', meaning: '旅途愉快', sentence: 'Bon voyage, my friend!', translation: '旅途愉快，我的朋友！', homophoneSentence: '邦沃亚日麦夫瑞恩德!' },
        { word: 'Have a safe trip', phonetic: '/hæv ə seɪf trɪp/', homophone: '海夫阿塞夫纯普', meaning: '祝你旅途平安', sentence: 'Have a safe trip home!', translation: '祝你回家旅途平安！', homophoneSentence: '海夫阿塞夫纯普厚姆!' },
        { word: 'Enjoy your trip', phonetic: '/ɪnˈdʒɔɪ jɔː trɪp/', homophone: '因照伊尤尔纯普', meaning: '旅途愉快', sentence: 'Enjoy your trip abroad!', translation: '享受你的出国旅行！', homophoneSentence: '因照伊尤尔纯普阿布罗德!' },
        { word: 'Have a blast', phonetic: '/hæv ə blɑːst/', homophone: '海夫阿布拉斯特', meaning: '玩得开心', sentence: 'Have a blast at the party!', translation: '派对上玩得开心！', homophoneSentence: '海夫阿布拉斯特艾特则帕蒂!' },
        { word: 'Have fun', phonetic: '/hæv fʌn/', homophone: '海夫范', meaning: '玩得开心', sentence: 'Have fun at the beach!', translation: '海滩上玩得开心！', homophoneSentence: '海夫范艾特则比奇!' },
    ];

    const uniqueNewWords = newSentences.filter(s => !existingWords.has(s.word.toLowerCase()));
    const wordsToAdd = uniqueNewWords.slice(0, 300);
    
    console.log(`   生成了 ${wordsToAdd.length} 个新单词，去重后 ${newSentences.length - uniqueNewWords.length} 个重复\n`);

    updateWordData(existingSentences, wordsToAdd, wordDataContent);
}

function updateWordData(existingSentences, wordsToAdd, wordDataContent) {
    console.log('3. 更新 word-data.js...');
    
    const allSentences = [...existingSentences, ...wordsToAdd];
    
    const sentencesArrayStr = allSentences.map(s => {
        return `        { word: '${escapeStr(s.word)}', phonetic: '${escapeStr(s.phonetic)}', homophone: '${escapeStr(s.homophone)}', meaning: '${escapeStr(s.meaning)}', sentence: '${escapeStr(s.sentence)}', translation: '${escapeStr(s.translation)}', homophoneSentence: '${escapeStr(s.homophoneSentence)}' }`;
    }).join(',\n');

    const newContent = wordDataContent.replace(
        /sentences:\s*\[[\s\S]*?\]\s*(?=,\s*[a-zA-Z0-9_]+:|})/,
        `sentences: [\n${sentencesArrayStr}\n    ]`
    );

    fs.writeFileSync(wordDataPath, newContent, 'utf8');
    console.log(`   word-data.js 更新完成！现在共有 ${allSentences.length} 个常用语句单词\n`);

    updateIndexHtml(allSentences);
}

function escapeStr(str) {
    return str.replace(/'/g, "\\'");
}

function updateIndexHtml(allSentences) {
    console.log('4. 更新 index.html 表格...');
    
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    
    const tableRows = allSentences.map(s => {
        const wordId = s.word.toLowerCase().replace(/[^a-z0-9]/g, '-');
        return `                <tr><td><a href="word.html?word=${encodeURIComponent(s.word)}&category=sentences">${s.word}</a></td><td>${s.phonetic}</td><td>${s.homophone}</td><td>${s.meaning}</td><td>${s.sentence}</td></tr>`;
    }).join('\n');

    const newHtml = indexHtml.replace(
        /<section[^>]*id="sentences"[\s\S]*?<\/section>/,
        `<section class="word-category" id="sentences" aria-label="常用语句类词汇">
            <h2>常用语句 | Common Sentences</h2>
            <table aria-label="常用语句类单词列表">
                <thead>
                    <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                </thead>
                <tbody>
${tableRows}
                </tbody>
            </table>
        </section>`
    );

    fs.writeFileSync(indexHtmlPath, newHtml, 'utf8');
    console.log('   index.html 表格更新完成！\n');

    updateSitemap(allSentences);
}

function updateSitemap(allSentences) {
    console.log('5. 更新 sitemap.xml...');
    
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');
    
    const today = new Date().toISOString().split('T')[0];
    const sentenceUrls = allSentences.map(s => {
        const wordUrl = `https://mzc0603.xyz/word.html?word=${encodeURIComponent(s.word)}&category=sentences`;
        return `    <url>
        <loc>${wordUrl}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;
    }).join('\n');

    const urlsetMatch = sitemap.match(/<urlset[^>]*>([\s\S]*?)<\/urlset>/);
    if (urlsetMatch) {
        const existingUrls = urlsetMatch[1];
        const filteredUrls = existingUrls.split('\n').filter(line => !line.includes('category=sentences') || !line.includes('word.html?word='));
        const newUrls = filteredUrls.join('\n') + '\n' + sentenceUrls;
        const newSitemap = sitemap.replace(urlsetMatch[0], `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${newUrls}\n</urlset>`);
        fs.writeFileSync(sitemapPath, newSitemap, 'utf8');
    }

    console.log('   sitemap.xml 更新完成！\n');
    
    console.log('=== 所有任务完成！');
    console.log('\n下一步：请手动执行 git 命令提交更改');
}
