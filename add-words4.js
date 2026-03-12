const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 收集所有现有单词
    const allWords = new Set();
    const wordMatches = data.match(/\{\s*word:\s*['"]([^'"]+)['"]/g) || [];
    wordMatches.forEach(match => {
        const matchResult = match.match(/\{\s*word:\s*['"]([^'"]+)['"]/);
        if (matchResult && matchResult[1]) {
            allWords.add(matchResult[1].toLowerCase());
        }
    });
    
    console.log(`现有单词总数: ${allWords.size} 个`);
    
    // 新单词数据（第四批）
    const newWords = {
        greetings: [
            { word: 'Good morning everyone', phonetic: '/ɡʊd ˈmɔːnɪŋ ˈevriwʌn/', homophone: '古德莫宁埃弗里万', meaning: '大家早上好', sentence: 'Good morning everyone!', translation: '大家早上好！', homophoneSentence: '古德莫宁埃弗里万!' },
            { word: 'Good afternoon everyone', phonetic: '/ɡʊd ˌɑːftəˈnuːn ˈevriwʌn/', homophone: '古德阿夫特努恩埃弗里万', meaning: '大家下午好', sentence: 'Good afternoon everyone!', translation: '大家下午好！', homophoneSentence: '古德阿夫特努恩埃弗里万!' },
            { word: 'Good evening everyone', phonetic: '/ɡʊd ˈiːvnɪŋ ˈevriwʌn/', homophone: '古德伊夫宁埃弗里万', meaning: '大家晚上好', sentence: 'Good evening everyone!', translation: '大家晚上好！', homophoneSentence: '古德伊夫宁埃弗里万!' },
            { word: 'Good night everyone', phonetic: '/ɡʊd naɪt ˈevriwʌn/', homophone: '古德奈特埃弗里万', meaning: '大家晚安', sentence: 'Good night everyone!', translation: '大家晚安！', homophoneSentence: '古德奈特埃弗里万!' },
            { word: 'Hello everyone', phonetic: '/həˈləʊ ˈevriwʌn/', homophone: '哈罗埃弗里万', meaning: '大家好', sentence: 'Hello everyone!', translation: '大家好！', homophoneSentence: '哈罗埃弗里万!' }
        ],
        emotions: [
            { word: 'Depressed', phonetic: '/dɪˈprest/', homophone: '迪普雷斯德', meaning: '沮丧的', sentence: 'I feel depressed!', translation: '我感到沮丧！', homophoneSentence: '爱菲尔迪普雷斯德!' },
            { word: 'Sad', phonetic: '/sæd/', homophone: '赛德', meaning: '悲伤的', sentence: 'I feel sad!', translation: '我感到悲伤！', homophoneSentence: '爱菲尔赛德!' },
            { word: 'Unhappy', phonetic: '/ʌnˈhæpi/', homophone: '昂哈皮', meaning: '不开心的', sentence: 'I feel unhappy!', translation: '我感到不开心！', homophoneSentence: '爱菲尔昂哈皮!' },
            { word: 'Miserable', phonetic: '/ˈmɪzrəbl/', homophone: '米泽若波', meaning: '痛苦的', sentence: 'I feel miserable!', translation: '我感到痛苦！', homophoneSentence: '爱菲尔米泽若波!' },
            { word: 'Heartbroken', phonetic: '/ˈhɑːtbrəʊkən/', homophone: '哈特布罗肯', meaning: '心碎的', sentence: 'I feel heartbroken!', translation: '我感到心碎！', homophoneSentence: '爱菲尔哈特布罗肯!' }
        ],
        numbers: [
            { word: 'Three quadrillion', phonetic: '/θriː kwɒˈdrɪljən/', homophone: '斯瑞夸德林', meaning: '三千万亿', sentence: 'Three quadrillion dollars.', translation: '三千万亿美元。', homophoneSentence: '斯瑞夸德林道乐兹.' },
            { word: 'Four quadrillion', phonetic: '/fɔː kwɒˈdrɪljən/', homophone: '佛夸德林', meaning: '四千万亿', sentence: 'Four quadrillion dollars.', translation: '四千万亿美元。', homophoneSentence: '佛夸德林道乐兹.' },
            { word: 'Five quadrillion', phonetic: '/faɪv kwɒˈdrɪljən/', homophone: '法艾夫夸德林', meaning: '五千万亿', sentence: 'Five quadrillion dollars.', translation: '五千万亿美元。', homophoneSentence: '法艾夫夸德林道乐兹.' },
            { word: 'Six quadrillion', phonetic: '/sɪks kwɒˈdrɪljən/', homophone: '西克斯夸德林', meaning: '六千万亿', sentence: 'Six quadrillion dollars.', translation: '六千万亿美元。', homophoneSentence: '西克斯夸德林道乐兹.' },
            { word: 'Seven quadrillion', phonetic: '/ˈsevn kwɒˈdrɪljən/', homophone: '赛文夸德林', meaning: '七千万亿', sentence: 'Seven quadrillion dollars.', translation: '七千万亿美元。', homophoneSentence: '赛文夸德林道乐兹.' }
        ],
        colors: [
            { word: 'Titanium', phonetic: '/taɪˈteɪniəm/', homophone: '泰泰坦尼姆', meaning: '钛色', sentence: 'Titanium dress.', translation: '钛色连衣裙。', homophoneSentence: '泰泰坦尼姆德雷斯.' },
            { word: 'Coal', phonetic: '/kəʊl/', homophone: '科尔', meaning: '煤黑色', sentence: 'Coal dress.', translation: '煤黑色连衣裙。', homophoneSentence: '科尔德雷斯.' },
            { word: 'Charcoal', phonetic: '/ˈtʃɑːkəʊl/', homophone: '查尔科尔', meaning: '炭黑色', sentence: 'Charcoal dress.', translation: '炭黑色连衣裙。', homophoneSentence: '查尔科尔德雷斯.' },
            { word: 'Ebony', phonetic: '/ˈebəni/', homophone: '埃博尼', meaning: '乌木色', sentence: 'Ebony dress.', translation: '乌木色连衣裙。', homophoneSentence: '埃博尼德雷斯.' },
            { word: 'Jet black', phonetic: '/dʒet blæk/', homophone: '杰特布莱克', meaning: '墨黑色', sentence: 'Jet black dress.', translation: '墨黑色连衣裙。', homophoneSentence: '杰特布莱克德雷斯.' }
        ],
        family: [
            { word: 'Biological mother', phonetic: '/ˌbaɪəˈlɒdʒɪkl ˈmʌðə/', homophone: '拜欧劳吉科玛泽', meaning: '生母', sentence: 'My biological mother is kind.', translation: '我的生母很善良。', homophoneSentence: '麦拜欧劳吉科玛泽伊凯恩德.' },
            { word: 'Biological son', phonetic: '/ˌbaɪəˈlɒdʒɪkl sʌn/', homophone: '拜欧劳吉科森', meaning: '生子', sentence: 'My biological son is smart.', translation: '我的生子很聪明。', homophoneSentence: '麦拜欧劳吉科森伊斯马特.' },
            { word: 'Biological daughter', phonetic: '/ˌbaɪəˈlɒdʒɪkl ˈdɔːtə/', homophone: '拜欧劳吉科道特', meaning: '生女', sentence: 'My biological daughter is smart.', translation: '我的生女很聪明。', homophoneSentence: '麦拜欧劳吉科道特伊斯马特.' },
            { word: 'Step-sibling', phonetic: '/step ˈsɪblɪŋ/', homophone: '斯特普西布林', meaning: '继兄弟姐妹', sentence: 'My step-sibling is kind.', translation: '我的继兄弟姐妹很善良。', homophoneSentence: '麦斯特普西布林伊凯恩德.' }
        ]
    };
    
    // 添加新单词
    let addedCount = 0;
    let fixedData = data;
    
    Object.keys(newWords).forEach(category => {
        newWords[category].forEach(newWord => {
            if (!allWords.has(newWord.word.toLowerCase())) {
                // 找到分类的结束位置并插入新单词
                const categoryStart = fixedData.indexOf(`${category}: [`);
                if (categoryStart !== -1) {
                    // 找到对应的结束括号
                    let openBrackets = 1;
                    let categoryEnd = categoryStart + `${category}: [`.length;
                    while (openBrackets > 0 && categoryEnd < fixedData.length) {
                        if (fixedData[categoryEnd] === '[') openBrackets++;
                        else if (fixedData[categoryEnd] === ']') openBrackets--;
                        categoryEnd++;
                    }
                    
                    if (openBrackets === 0) {
                        const insertPosition = fixedData.lastIndexOf(']', categoryEnd);
                        const newWordString = `        { word: '${newWord.word}', phonetic: '${newWord.phonetic}', homophone: '${newWord.homophone}', meaning: '${newWord.meaning}', sentence: '${newWord.sentence}', translation: '${newWord.translation}', homophoneSentence: '${newWord.homophoneSentence}' },`;
                        fixedData = fixedData.substring(0, insertPosition) + '\n' + newWordString + '\n' + fixedData.substring(insertPosition);
                        allWords.add(newWord.word.toLowerCase());
                        addedCount++;
                    }
                }
            }
        });
    });
    
    console.log(`添加了 ${addedCount} 个新单词`);
    
    fs.writeFileSync('word-data.js', fixedData, 'utf8');
    console.log('word-data.js已更新');
    
} catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
}