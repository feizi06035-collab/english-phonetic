const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '..', 'word-data.js');
const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

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
    { word: 'Have fun', phonetic: '/hæv fʌn/', homophone: '海夫范', meaning: '玩得开心', sentence: 'Have fun at the beach!', translation: '海滩上玩得开心！', homophoneSentence: '海夫范艾特则比奇!' }
];

const sentencesRegex = /sentences:\s*\[([\s\S]*?)\s*\]/;
const match = wordDataContent.match(sentencesRegex);

if (match) {
    const sentencesText = match[1];
    const wordObjects = sentencesText.match(/\{[^}]*\}/g) || [];
    
    const existingWords = new Set();
    wordObjects.forEach(objStr => {
        const wordMatch = objStr.match(/word:\s*'([^']*(?:\\.[^']*)*)'/);
        if (wordMatch) {
            existingWords.add(wordMatch[1].toLowerCase());
        }
    });

    const uniqueNewWords = newSentences.filter(s => !existingWords.has(s.word.toLowerCase()));
    console.log(`现有 ${existingWords.size} 个单词，新生成 ${newSentences.length} 个，去重后添加 ${uniqueNewWords.length} 个`);

    const wordsToAdd = uniqueNewWords.slice(0, 300);

    const newSentenceObjects = wordsToAdd.map(s => {
        return `        { word: '${s.word.replace(/'/g, "\\'")}', phonetic: '${s.phonetic.replace(/'/g, "\\'")}', homophone: '${s.homophone.replace(/'/g, "\\'")}', meaning: '${s.meaning.replace(/'/g, "\\'")}', sentence: '${s.sentence.replace(/'/g, "\\'")}', translation: '${s.translation.replace(/'/g, "\\'")}', homophoneSentence: '${s.homophoneSentence.replace(/'/g, "\\'")}' }`;
    }).join(',\n');

    const newSentencesText = sentencesText + (sentencesText.trim() ? ',\n' : '') + newSentenceObjects;
    const newWordDataContent = wordDataContent.replace(sentencesRegex, `sentences: [${newSentencesText}]`);

    fs.writeFileSync(wordDataPath, newWordDataContent, 'utf8');
    console.log('成功更新word-data.js');
} else {
    console.error('未找到sentences数据');
}
