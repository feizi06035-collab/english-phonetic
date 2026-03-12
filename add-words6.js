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
    
    // 新单词数据（第六批）
    const newWords = {
        greetings: [
            { word: 'Greetings everyone', phonetic: '/ˈɡriːtɪŋz ˈevriwʌn/', homophone: '格瑞廷兹埃弗里万', meaning: '问候大家', sentence: 'Greetings everyone!', translation: '问候大家！', homophoneSentence: '格瑞廷兹埃弗里万!' },
            { word: 'Good day everyone', phonetic: '/ɡʊd deɪ ˈevriwʌn/', homophone: '古德戴埃弗里万', meaning: '大家好', sentence: 'Good day everyone!', translation: '大家好！', homophoneSentence: '古德戴埃弗里万!' },
            { word: 'Have a great day everyone', phonetic: '/hæv ə ɡreɪt deɪ ˈevriwʌn/', homophone: '海夫阿格瑞特戴埃弗里万', meaning: '大家今天愉快', sentence: 'Have a great day everyone!', translation: '大家今天愉快！', homophoneSentence: '海夫阿格瑞特戴埃弗里万!' },
            { word: 'See you later everyone', phonetic: '/siː juː ˈleɪtə ˈevriwʌn/', homophone: '西油雷特埃弗里万', meaning: '大家待会见', sentence: 'See you later everyone!', translation: '大家待会见！', homophoneSentence: '西油雷特埃弗里万!' },
            { word: 'See you soon everyone', phonetic: '/siː juː suːn ˈevriwʌn/', homophone: '西油苏恩埃弗里万', meaning: '大家很快见', sentence: 'See you soon everyone!', translation: '大家很快见！', homophoneSentence: '西油苏恩埃弗里万!' }
        ],
        emotions: [
            { word: 'Furious', phonetic: '/ˈfjʊəriəs/', homophone: '菲尤瑞尔斯', meaning: '暴怒的', sentence: 'I feel furious!', translation: '我感到暴怒！', homophoneSentence: '爱菲尔菲尤瑞尔斯!' },
            { word: 'Enraged', phonetic: '/ɪnˈreɪdʒd/', homophone: '伊恩瑞吉德', meaning: '愤怒的', sentence: 'I feel enraged!', translation: '我感到愤怒！', homophoneSentence: '爱菲尔伊恩瑞吉德!' },
            { word: 'Frustrated', phonetic: '/frʌˈstreɪtɪd/', homophone: '弗斯特瑞特德', meaning: '沮丧的', sentence: 'I feel frustrated!', translation: '我感到沮丧！', homophoneSentence: '爱菲尔弗斯特瑞特德!' },
            { word: 'Annoyed', phonetic: '/əˈnɔɪd/', homophone: '阿诺伊德', meaning: '恼怒的', sentence: 'I feel annoyed!', translation: '我感到恼怒！', homophoneSentence: '爱菲尔阿诺伊德!' },
            { word: 'Irritated', phonetic: '/ˈɪrɪteɪtɪd/', homophone: '伊瑞泰特德', meaning: '烦躁的', sentence: 'I feel irritated!', translation: '我感到烦躁！', homophoneSentence: '爱菲尔伊瑞泰特德!' }
        ],
        numbers: [
            { word: 'Two quintillion', phonetic: '/tuː kwɪnˈtɪljən/', homophone: '图昆特林', meaning: '二亿亿亿', sentence: 'Two quintillion dollars.', translation: '二亿亿亿美元。', homophoneSentence: '图昆特林道乐兹.' },
            { word: 'Three quintillion', phonetic: '/θriː kwɪnˈtɪljən/', homophone: '斯瑞昆特林', meaning: '三亿亿亿', sentence: 'Three quintillion dollars.', translation: '三亿亿亿美元。', homophoneSentence: '斯瑞昆特林道乐兹.' },
            { word: 'Four quintillion', phonetic: '/fɔː kwɪnˈtɪljən/', homophone: '佛昆特林', meaning: '四亿亿亿', sentence: 'Four quintillion dollars.', translation: '四亿亿亿美元。', homophoneSentence: '佛昆特林道乐兹.' },
            { word: 'Five quintillion', phonetic: '/faɪv kwɪnˈtɪljən/', homophone: '法艾夫昆特林', meaning: '五亿亿亿', sentence: 'Five quintillion dollars.', translation: '五亿亿亿美元。', homophoneSentence: '法艾夫昆特林道乐兹.' },
            { word: 'Six quintillion', phonetic: '/sɪks kwɪnˈtɪljən/', homophone: '西克斯昆特林', meaning: '六亿亿亿', sentence: 'Six quintillion dollars.', translation: '六亿亿亿美元。', homophoneSentence: '西克斯昆特林道乐兹.' }
        ],
        colors: [
            { word: 'Bone white', phonetic: '/bəʊn waɪt/', homophone: '伯恩怀特', meaning: '骨白色', sentence: 'Bone white dress.', translation: '骨白色连衣裙。', homophoneSentence: '伯恩怀特德雷斯.' },
            { word: 'Alabaster', phonetic: '/ˈæləbɑːstə/', homophone: '阿拉巴斯特', meaning: '雪花石膏色', sentence: 'Alabaster dress.', translation: '雪花石膏色连衣裙。', homophoneSentence: '阿拉巴斯特德雷斯.' },
            { word: 'Porcelain', phonetic: '/ˈpɔːsəlɪn/', homophone: '波塞林', meaning: '瓷白色', sentence: 'Porcelain dress.', translation: '瓷白色连衣裙。', homophoneSentence: '波塞林德雷斯.' },
            { word: 'Ivory', phonetic: '/ˈaɪvəri/', homophone: '艾弗里', meaning: '象牙色', sentence: 'Ivory dress.', translation: '象牙色连衣裙。', homophoneSentence: '艾弗里德雷斯.' },
            { word: 'Cream', phonetic: '/kriːm/', homophone: '克里姆', meaning: '奶油色', sentence: 'Cream dress.', translation: '奶油色连衣裙。', homophoneSentence: '克里姆德雷斯.' }
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