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
    
    // 新单词数据（第五批）
    const newWords = {
        greetings: [
            { word: 'Hello everyone', phonetic: '/həˈləʊ ˈevriwʌn/', homophone: '哈罗埃弗里万', meaning: '大家好', sentence: 'Hello everyone!', translation: '大家好！', homophoneSentence: '哈罗埃弗里万!' },
            { word: 'Hi everyone', phonetic: '/haɪ ˈevriwʌn/', homophone: '嗨埃弗里万', meaning: '大家好', sentence: 'Hi everyone!', translation: '大家好！', homophoneSentence: '嗨埃弗里万!' },
            { word: 'Hey everyone', phonetic: '/heɪ ˈevriwʌn/', homophone: '嘿埃弗里万', meaning: '大家好', sentence: 'Hey everyone!', translation: '大家好！', homophoneSentence: '嘿埃弗里万!' },
            { word: 'Howdy everyone', phonetic: '/ˈhaʊdi ˈevriwʌn/', homophone: '豪迪埃弗里万', meaning: '大家好', sentence: 'Howdy everyone!', translation: '大家好！', homophoneSentence: '豪迪埃弗里万!' },
            { word: 'Welcome everyone', phonetic: '/ˈwelkəm ˈevriwʌn/', homophone: '威尔康埃弗里万', meaning: '欢迎大家', sentence: 'Welcome everyone!', translation: '欢迎大家！', homophoneSentence: '威尔康埃弗里万!' }
        ],
        emotions: [
            { word: 'Lonely', phonetic: '/ˈləʊnli/', homophone: '龙利', meaning: '孤独的', sentence: 'I feel lonely!', translation: '我感到孤独！', homophoneSentence: '爱菲尔龙利!' },
            { word: 'Isolated', phonetic: '/ˈaɪsəleɪtɪd/', homophone: '艾索雷特德', meaning: '孤立的', sentence: 'I feel isolated!', translation: '我感到孤立！', homophoneSentence: '爱菲尔艾索雷特德!' },
            { word: 'Alone', phonetic: '/əˈləʊn/', homophone: '阿龙', meaning: '孤独的', sentence: 'I feel alone!', translation: '我感到孤独！', homophoneSentence: '爱菲尔阿龙!' },
            { word: 'Angry', phonetic: '/ˈæŋɡri/', homophone: '安格利', meaning: '生气的', sentence: 'I feel angry!', translation: '我感到生气！', homophoneSentence: '爱菲尔安格利!' },
            { word: 'Mad', phonetic: '/mæd/', homophone: '麦德', meaning: '生气的', sentence: 'I feel mad!', translation: '我感到生气！', homophoneSentence: '爱菲尔麦德!' }
        ],
        numbers: [
            { word: 'Eight quadrillion', phonetic: '/eɪt kwɒˈdrɪljən/', homophone: '艾特夸德林', meaning: '八千万亿', sentence: 'Eight quadrillion dollars.', translation: '八千万亿美元。', homophoneSentence: '艾特夸德林道乐兹.' },
            { word: 'Nine quadrillion', phonetic: '/naɪn kwɒˈdrɪljən/', homophone: '奈恩夸德林', meaning: '九千万亿', sentence: 'Nine quadrillion dollars.', translation: '九千万亿美元。', homophoneSentence: '奈恩夸德林道乐兹.' },
            { word: 'Ten quadrillion', phonetic: '/ten kwɒˈdrɪljən/', homophone: '坦夸德林', meaning: '十万亿', sentence: 'Ten quadrillion dollars.', translation: '十万亿美元。', homophoneSentence: '坦夸德林道乐兹.' },
            { word: 'Hundred quadrillion', phonetic: '/ˈhʌndrəd kwɒˈdrɪljən/', homophone: '汉德瑞夸德林', meaning: '一百万亿', sentence: 'Hundred quadrillion dollars.', translation: '一百万亿美元。', homophoneSentence: '汉德瑞夸德林道乐兹.' },
            { word: 'One quintillion', phonetic: '/wʌn kwɪnˈtɪljən/', homophone: '万昆特林', meaning: '一亿亿亿', sentence: 'One quintillion dollars.', translation: '一亿亿亿美元。', homophoneSentence: '万昆特林道乐兹.' }
        ],
        colors: [
            { word: 'Snow white', phonetic: '/snəʊ waɪt/', homophone: '斯诺怀特', meaning: '雪白色', sentence: 'Snow white dress.', translation: '雪白色连衣裙。', homophoneSentence: '斯诺怀特德雷斯.' },
            { word: 'Ivory white', phonetic: '/ˈaɪvəri waɪt/', homophone: '艾弗里怀特', meaning: '象牙白', sentence: 'Ivory white dress.', translation: '象牙白连衣裙。', homophoneSentence: '艾弗里怀特德雷斯.' },
            { word: 'Pearl white', phonetic: '/pɜːl waɪt/', homophone: '珀尔怀特', meaning: '珍珠白', sentence: 'Pearl white dress.', translation: '珍珠白连衣裙。', homophoneSentence: '珀尔怀特德雷斯.' },
            { word: 'Cream white', phonetic: '/kriːm waɪt/', homophone: '克里姆怀特', meaning: '奶油白', sentence: 'Cream white dress.', translation: '奶油白连衣裙。', homophoneSentence: '克里姆怀特德雷斯.' },
            { word: 'Off white', phonetic: '/ɒf waɪt/', homophone: '奥夫怀特', meaning: '米白色', sentence: 'Off white dress.', translation: '米白色连衣裙。', homophoneSentence: '奥夫怀特德雷斯.' }
        ],
        family: [
            { word: 'Half-sibling', phonetic: '/hɑːf ˈsɪblɪŋ/', homophone: '哈夫西布林', meaning: '同父异母兄弟姐妹', sentence: 'My half-sibling is kind.', translation: '我的同父异母兄弟姐妹很善良。', homophoneSentence: '麦哈夫西布林伊凯恩德.' },
            { word: 'Adoptive parent', phonetic: '/əˈdɒptɪv ˈpeərənt/', homophone: '阿多普蒂夫佩伦特', meaning: '养父母', sentence: 'My adoptive parent is kind.', translation: '我的养父母很善良。', homophoneSentence: '麦阿多普蒂夫佩伦特伊凯恩德.' },
            { word: 'Foster parent', phonetic: '/ˈfɒstə ˈpeərənt/', homophone: '福斯特佩伦特', meaning: '养父母', sentence: 'My foster parent is kind.', translation: '我的养父母很善良。', homophoneSentence: '麦福斯特佩伦特伊凯恩德.' },
            { word: 'Godparent', phonetic: '/ˈɡɒdpeərənt/', homophone: '高德佩伦特', meaning: '教父母', sentence: 'My godparent is kind.', translation: '我的教父母很善良。', homophoneSentence: '麦高德佩伦特伊凯恩德.' },
            { word: 'Godfather', phonetic: '/ˈɡɒdfɑːðə/', homophone: '高德法泽', meaning: '教父', sentence: 'My godfather is kind.', translation: '我的教父很善良。', homophoneSentence: '麦高德法泽伊凯恩德.' }
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