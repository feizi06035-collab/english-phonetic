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
    
    // 新单词数据（第二批）
    const newWords = {
        greetings: [
            { word: 'Goodbye', phonetic: '/ˌɡʊdˈbaɪ/', homophone: '古德拜', meaning: '再见', sentence: 'Goodbye!', translation: '再见！', homophoneSentence: '古德拜!' },
            { word: 'See you later', phonetic: '/siː juː ˈleɪtə/', homophone: '西油雷特', meaning: '待会见', sentence: 'See you later!', translation: '待会见！', homophoneSentence: '西油雷特!' },
            { word: 'See you soon', phonetic: '/siː juː suːn/', homophone: '西油苏恩', meaning: '很快见', sentence: 'See you soon!', translation: '很快见！', homophoneSentence: '西油苏恩!' },
            { word: 'Take care', phonetic: '/teɪk keə/', homophone: '泰克凯尔', meaning: '保重', sentence: 'Take care!', translation: '保重！', homophoneSentence: '泰克凯尔!' },
            { word: 'Have a nice day', phonetic: '/hæv ə naɪs deɪ/', homophone: '海夫阿奈斯戴', meaning: '祝你有个愉快的一天', sentence: 'Have a nice day!', translation: '祝你有个愉快的一天！', homophoneSentence: '海夫阿奈斯戴!' },
            { word: 'Have a good day', phonetic: '/hæv ə ɡʊd deɪ/', homophone: '海夫阿古德戴', meaning: '祝你有个好的一天', sentence: 'Have a good day!', translation: '祝你有个好的一天！', homophoneSentence: '海夫阿古德戴!' },
            { word: 'Have a great day', phonetic: '/hæv ə ɡreɪt deɪ/', homophone: '海夫阿格瑞特戴', meaning: '祝你有个美好的一天', sentence: 'Have a great day!', translation: '祝你有个美好的一天！', homophoneSentence: '海夫阿格瑞特戴!' },
            { word: 'Have a wonderful day', phonetic: '/hæv ə ˈwʌndəfl deɪ/', homophone: '海夫阿旺德夫欧戴', meaning: '祝你有个精彩的一天', sentence: 'Have a wonderful day!', translation: '祝你有个精彩的一天！', homophoneSentence: '海夫阿旺德夫欧戴!' },
            { word: 'Have a fantastic day', phonetic: '/hæv ə fænˈtæstɪk deɪ/', homophone: '海夫阿范塔斯蒂克戴', meaning: '祝你有个美妙的一天', sentence: 'Have a fantastic day!', translation: '祝你有个美妙的一天！', homophoneSentence: '海夫阿范塔斯蒂克戴!' },
            { word: 'Have a lovely day', phonetic: '/hæv ə ˈlʌvli deɪ/', homophone: '海夫阿拉夫利戴', meaning: '祝你有个可爱的一天', sentence: 'Have a lovely day!', translation: '祝你有个可爱的一天！', homophoneSentence: '海夫阿拉夫利戴!' },
            { word: 'Have a pleasant day', phonetic: '/hæv ə ˈpleznt deɪ/', homophone: '海夫阿普莱森特戴', meaning: '祝你有个愉快的一天', sentence: 'Have a pleasant day!', translation: '祝你有个愉快的一天！', homophoneSentence: '海夫阿普莱森特戴!' },
            { word: 'Have a joyful day', phonetic: '/hæv ə ˈdʒɔɪfl deɪ/', homophone: '海夫阿乔伊夫戴', meaning: '祝你有个快乐的一天', sentence: 'Have a joyful day!', translation: '祝你有个快乐的一天！', homophoneSentence: '海夫阿乔伊夫戴!' },
            { word: 'Have a happy day', phonetic: '/hæv ə ˈhæpi deɪ/', homophone: '海夫阿哈皮戴', meaning: '祝你有个开心的一天', sentence: 'Have a happy day!', translation: '祝你有个开心的一天！', homophoneSentence: '海夫阿哈皮戴!' },
            { word: 'Have a blessed day', phonetic: '/hæv ə ˈblest deɪ/', homophone: '海夫阿布雷斯戴', meaning: '祝你有个幸福的一天', sentence: 'Have a blessed day!', translation: '祝你有个幸福的一天！', homophoneSentence: '海夫阿布雷斯戴!' },
            { word: 'Have a wonderful weekend', phonetic: '/hæv ə ˈwʌndəfl ˌwiːkˈend/', homophone: '海夫阿旺德夫欧威肯德', meaning: '祝你周末愉快', sentence: 'Have a wonderful weekend!', translation: '祝你周末愉快！', homophoneSentence: '海夫阿旺德夫欧威肯德!' },
            { word: 'Have a great weekend', phonetic: '/hæv ə ɡreɪt ˌwiːkˈend/', homophone: '海夫阿格瑞特威肯德', meaning: '祝你周末愉快', sentence: 'Have a great weekend!', translation: '祝你周末愉快！', homophoneSentence: '海夫阿格瑞特威肯德!' },
            { word: 'Have a nice weekend', phonetic: '/hæv ə naɪs ˌwiːkˈend/', homophone: '海夫阿奈斯威肯德', meaning: '祝你周末愉快', sentence: 'Have a nice weekend!', translation: '祝你周末愉快！', homophoneSentence: '海夫阿奈斯威肯德!' },
            { word: 'Have a good weekend', phonetic: '/hæv ə ɡʊd ˌwiːkˈend/', homophone: '海夫阿古德威肯德', meaning: '祝你周末愉快', sentence: 'Have a good weekend!', translation: '祝你周末愉快！', homophoneSentence: '海夫阿古德威肯德!' },
            { word: 'Have a wonderful holiday', phonetic: '/hæv ə ˈwʌndəfl ˈhɒlədeɪ/', homophone: '海夫阿旺德夫欧霍勒戴', meaning: '祝你假期愉快', sentence: 'Have a wonderful holiday!', translation: '祝你假期愉快！', homophoneSentence: '海夫阿旺德夫欧霍勒戴!' },
            { word: 'Have a great holiday', phonetic: '/hæv ə ɡreɪt ˈhɒlədeɪ/', homophone: '海夫阿格瑞特霍勒戴', meaning: '祝你假期愉快', sentence: 'Have a great holiday!', translation: '祝你假期愉快！', homophoneSentence: '海夫阿格瑞特霍勒戴!' },
            { word: 'Have a nice holiday', phonetic: '/hæv ə naɪs ˈhɒlədeɪ/', homophone: '海夫阿奈斯霍勒戴', meaning: '祝你假期愉快', sentence: 'Have a nice holiday!', translation: '祝你假期愉快！', homophoneSentence: '海夫阿奈斯霍勒戴!' },
            { word: 'Have a good holiday', phonetic: '/hæv ə ɡʊd ˈhɒlədeɪ/', homophone: '海夫阿古德霍勒戴', meaning: '祝你假期愉快', sentence: 'Have a good holiday!', translation: '祝你假期愉快！', homophoneSentence: '海夫阿古德霍勒戴!' }
        ],
        emotions: [
            { word: 'Euphoric', phonetic: '/juːˈfɒrɪk/', homophone: '尤弗瑞克', meaning: '欣喜若狂的', sentence: 'I feel euphoric!', translation: '我感到欣喜若狂！', homophoneSentence: '爱菲尔尤弗瑞克!' },
            { word: 'Ecstatic', phonetic: '/ɪkˈstætɪk/', homophone: '伊克斯塔蒂克', meaning: '狂喜的', sentence: 'I feel ecstatic!', translation: '我感到狂喜！', homophoneSentence: '爱菲尔伊克斯塔蒂克!' },
            { word: 'Overjoyed', phonetic: '/ˌəʊvəˈdʒɔɪd/', homophone: '欧弗乔伊德', meaning: '欣喜若狂的', sentence: 'I feel overjoyed!', translation: '我感到欣喜若狂！', homophoneSentence: '爱菲尔欧弗乔伊德!' },
            { word: 'Thrilled', phonetic: '/θrɪld/', homophone: '斯瑞尔德', meaning: '非常兴奋的', sentence: 'I feel thrilled!', translation: '我感到非常兴奋！', homophoneSentence: '爱菲尔斯瑞尔德!' },
            { word: 'Delighted', phonetic: '/dɪˈlaɪtɪd/', homophone: '迪莱特德', meaning: '高兴的', sentence: 'I feel delighted!', translation: '我感到高兴！', homophoneSentence: '爱菲尔迪莱特德!' },
            { word: 'Elated', phonetic: '/ɪˈleɪtɪd/', homophone: '伊莱蒂德', meaning: '兴高采烈的', sentence: 'I feel elated!', translation: '我感到兴高采烈！', homophoneSentence: '爱菲尔伊莱蒂德!' },
            { word: 'Grateful', phonetic: '/ˈɡreɪtfʊl/', homophone: '格瑞特弗欧', meaning: '感激的', sentence: 'I feel grateful!', translation: '我感到感激！', homophoneSentence: '爱菲尔格瑞特弗欧!' },
            { word: 'Appreciative', phonetic: '/əˈpriːʃətɪv/', homophone: '阿普瑞舍蒂夫', meaning: '感激的', sentence: 'I feel appreciative!', translation: '我感到感激！', homophoneSentence: '爱菲尔阿普瑞舍蒂夫!' },
            { word: 'Thankful', phonetic: '/ˈθæŋkfʊl/', homophone: '桑克弗欧', meaning: '感谢的', sentence: 'I feel thankful!', translation: '我感到感谢！', homophoneSentence: '爱菲尔桑克弗欧!' },
            { word: 'Content', phonetic: '/kənˈtent/', homophone: '康滕特', meaning: '满足的', sentence: 'I feel content!', translation: '我感到满足！', homophoneSentence: '爱菲尔康滕特!' },
            { word: 'Satisfied', phonetic: '/ˈsætɪsfaɪd/', homophone: '萨特isfai德', meaning: '满意的', sentence: 'I feel satisfied!', translation: '我感到满意！', homophoneSentence: '爱菲尔萨特isfai德!' },
            { word: 'Relaxed', phonetic: '/rɪˈlækst/', homophone: '瑞莱克斯德', meaning: '放松的', sentence: 'I feel relaxed!', translation: '我感到放松！', homophoneSentence: '爱菲尔瑞莱克斯德!' },
            { word: 'Calm', phonetic: '/kɑːm/', homophone: '卡姆', meaning: '平静的', sentence: 'I feel calm!', translation: '我感到平静！', homophoneSentence: '爱菲尔卡姆!' },
            { word: 'Peaceful', phonetic: '/ˈpiːsfl/', homophone: '皮斯夫欧', meaning: '和平的', sentence: 'I feel peaceful!', translation: '我感到和平！', homophoneSentence: '爱菲尔皮斯夫欧!' },
            { word: 'Serene', phonetic: '/səˈriːn/', homophone: '瑟瑞恩', meaning: '宁静的', sentence: 'I feel serene!', translation: '我感到宁静！', homophoneSentence: '爱菲尔瑟瑞恩!' },
            { word: 'Tranquil', phonetic: '/ˈtræŋkwɪl/', homophone: '川奎尔', meaning: '宁静的', sentence: 'I feel tranquil!', translation: '我感到宁静！', homophoneSentence: '爱菲尔川奎尔!' },
            { word: 'Comfortable', phonetic: '/ˈkʌmftəbl/', homophone: '康福特波', meaning: '舒适的', sentence: 'I feel comfortable!', translation: '我感到舒适！', homophoneSentence: '爱菲尔康福特波!' },
            { word: 'Cozy', phonetic: '/ˈkəʊzi/', homophone: '扣齐', meaning: '舒适的', sentence: 'I feel cozy!', translation: '我感到舒适！', homophoneSentence: '爱菲尔扣齐!' },
            { word: 'Warm', phonetic: '/wɔːm/', homophone: '沃姆', meaning: '温暖的', sentence: 'I feel warm!', translation: '我感到温暖！', homophoneSentence: '爱菲尔沃姆!' },
            { word: 'Fuzzy', phonetic: '/ˈfʌzi/', homophone: '法齐', meaning: '模糊的', sentence: 'I feel fuzzy!', translation: '我感到模糊！', homophoneSentence: '爱菲尔法齐!' },
            { word: 'Mellow', phonetic: '/ˈmeləʊ/', homophone: '梅洛', meaning: '柔和的', sentence: 'I feel mellow!', translation: '我感到柔和！', homophoneSentence: '爱菲尔梅洛!' },
            { word: 'Gentle', phonetic: '/ˈdʒentl/', homophone: '詹特尔', meaning: '温和的', sentence: 'I feel gentle!', translation: '我感到温和！', homophoneSentence: '爱菲尔詹特尔!' }
        ],
        numbers: [
            { word: 'Three million', phonetic: '/θriː ˈmɪljən/', homophone: '斯瑞米尔金', meaning: '三百万', sentence: 'Three million dollars.', translation: '三百万美元。', homophoneSentence: '斯瑞米尔金道乐兹.' },
            { word: 'Four million', phonetic: '/fɔː ˈmɪljən/', homophone: '佛米尔金', meaning: '四百万', sentence: 'Four million dollars.', translation: '四百万美元。', homophoneSentence: '佛米尔金道乐兹.' },
            { word: 'Five million', phonetic: '/faɪv ˈmɪljən/', homophone: '法艾夫米尔金', meaning: '五百万', sentence: 'Five million dollars.', translation: '五百万美元。', homophoneSentence: '法艾夫米尔金道乐兹.' },
            { word: 'Six million', phonetic: '/sɪks ˈmɪljən/', homophone: '西克斯米尔金', meaning: '六百万', sentence: 'Six million dollars.', translation: '六百万美元。', homophoneSentence: '西克斯米尔金道乐兹.' },
            { word: 'Seven million', phonetic: '/ˈsevn ˈmɪljən/', homophone: '赛文米尔金', meaning: '七百万', sentence: 'Seven million dollars.', translation: '七百万美元。', homophoneSentence: '赛文米尔金道乐兹.' },
            { word: 'Eight million', phonetic: '/eɪt ˈmɪljən/', homophone: '艾特米尔金', meaning: '八百万', sentence: 'Eight million dollars.', translation: '八百万美元。', homophoneSentence: '艾特米尔金道乐兹.' },
            { word: 'Nine million', phonetic: '/naɪn ˈmɪljən/', homophone: '奈恩米尔金', meaning: '九百万', sentence: 'Nine million dollars.', translation: '九百万美元。', homophoneSentence: '奈恩米尔金道乐兹.' },
            { word: 'Ten million', phonetic: '/ten ˈmɪljən/', homophone: '坦米尔金', meaning: '一千万', sentence: 'Ten million dollars.', translation: '一千万美元。', homophoneSentence: '坦米尔金道乐兹.' },
            { word: 'Hundred million', phonetic: '/ˈhʌndrəd ˈmɪljən/', homophone: '汉德瑞德米尔金', meaning: '一亿', sentence: 'Hundred million dollars.', translation: '一亿美元。', homophoneSentence: '汉德瑞德米尔金道乐兹.' },
            { word: 'One billion', phonetic: '/wʌn ˈbɪljən/', homophone: '万比林', meaning: '十亿', sentence: 'One billion dollars.', translation: '十亿美元。', homophoneSentence: '万比林道乐兹.' },
            { word: 'Two billion', phonetic: '/tuː ˈbɪljən/', homophone: '图比林', meaning: '二十亿', sentence: 'Two billion dollars.', translation: '二十亿美元。', homophoneSentence: '图比林道乐兹.' },
            { word: 'Three billion', phonetic: '/θriː ˈbɪljən/', homophone: '斯瑞比林', meaning: '三十亿', sentence: 'Three billion dollars.', translation: '三十亿美元。', homophoneSentence: '斯瑞比林道乐兹.' },
            { word: 'Four billion', phonetic: '/fɔː ˈbɪljən/', homophone: '佛比林', meaning: '四十亿', sentence: 'Four billion dollars.', translation: '四十亿美元。', homophoneSentence: '佛比林道乐兹.' },
            { word: 'Five billion', phonetic: '/faɪv ˈbɪljən/', homophone: '法艾夫比林', meaning: '五十亿', sentence: 'Five billion dollars.', translation: '五十亿美元。', homophoneSentence: '法艾夫比林道乐兹.' },
            { word: 'Six billion', phonetic: '/sɪks ˈbɪljən/', homophone: '西克斯比林', meaning: '六十亿', sentence: 'Six billion dollars.', translation: '六十亿美元。', homophoneSentence: '西克斯比林道乐兹.' },
            { word: 'Seven billion', phonetic: '/ˈsevn ˈbɪljən/', homophone: '赛文比林', meaning: '七十亿', sentence: 'Seven billion dollars.', translation: '七十亿美元。', homophoneSentence: '赛文比林道乐兹.' },
            { word: 'Eight billion', phonetic: '/eɪt ˈbɪljən/', homophone: '艾特比林', meaning: '八十亿', sentence: 'Eight billion dollars.', translation: '八十亿美元。', homophoneSentence: '艾特比林道乐兹.' },
            { word: 'Nine billion', phonetic: '/naɪn ˈbɪljən/', homophone: '奈恩比林', meaning: '九十亿', sentence: 'Nine billion dollars.', translation: '九十亿美元。', homophoneSentence: '奈恩比林道乐兹.' },
            { word: 'Ten billion', phonetic: '/ten ˈbɪljən/', homophone: '坦比林', meaning: '一百亿', sentence: 'Ten billion dollars.', translation: '一百亿美元。', homophoneSentence: '坦比林道乐兹.' },
            { word: 'Hundred billion', phonetic: '/ˈhʌndrəd ˈbɪljən/', homophone: '汉德瑞德比林', meaning: '一千亿', sentence: 'Hundred billion dollars.', translation: '一千亿美元。', homophoneSentence: '汉德瑞德比林道乐兹.' },
            { word: 'One trillion', phonetic: '/wʌn ˈtrɪljən/', homophone: '万吹林', meaning: '一万亿', sentence: 'One trillion dollars.', translation: '一万亿美元。', homophoneSentence: '万吹林道乐兹.' },
            { word: 'Two trillion', phonetic: '/tuː ˈtrɪljən/', homophone: '图吹林', meaning: '二万亿', sentence: 'Two trillion dollars.', translation: '二万亿美元。', homophoneSentence: '图吹林道乐兹.' }
        ],
        colors: [
            { word: 'Beige', phonetic: '/beɪdʒ/', homophone: '贝奇', meaning: '米色', sentence: 'Beige dress.', translation: '米色连衣裙。', homophoneSentence: '贝奇德雷斯.' },
            { word: 'Ivory', phonetic: '/ˈaɪvəri/', homophone: '艾弗里', meaning: '象牙色', sentence: 'Ivory dress.', translation: '象牙色连衣裙。', homophoneSentence: '艾弗里德雷斯.' },
            { word: 'Cream', phonetic: '/kriːm/', homophone: '克里姆', meaning: '奶油色', sentence: 'Cream dress.', translation: '奶油色连衣裙。', homophoneSentence: '克里姆德雷斯.' },
            { word: 'Tan', phonetic: '/tæn/', homophone: '坦', meaning: '棕褐色', sentence: 'Tan dress.', translation: '棕褐色连衣裙。', homophoneSentence: '坦德雷斯.' },
            { word: 'Khaki', phonetic: '/ˈkɑːki/', homophone: '卡其', meaning: '卡其色', sentence: 'Khaki dress.', translation: '卡其色连衣裙。', homophoneSentence: '卡其德雷斯.' },
            { word: 'Brown', phonetic: '/braʊn/', homophone: '布朗', meaning: '棕色', sentence: 'Brown dress.', translation: '棕色连衣裙。', homophoneSentence: '布朗德雷斯.' },
            { word: 'Dark brown', phonetic: '/dɑːk braʊn/', homophone: '达克布朗', meaning: '深棕色', sentence: 'Dark brown dress.', translation: '深棕色连衣裙。', homophoneSentence: '达克布朗德雷斯.' },
            { word: 'Light brown', phonetic: '/laɪt braʊn/', homophone: '莱特布朗', meaning: '浅棕色', sentence: 'Light brown dress.', translation: '浅棕色连衣裙。', homophoneSentence: '莱特布朗德雷斯.' },
            { word: 'Chocolate', phonetic: '/ˈtʃɒklət/', homophone: '巧克力', meaning: '巧克力色', sentence: 'Chocolate dress.', translation: '巧克力色连衣裙。', homophoneSentence: '巧克力德雷斯.' },
            { word: 'Coffee', phonetic: '/ˈkɒfi/', homophone: '咖啡', meaning: '咖啡色', sentence: 'Coffee dress.', translation: '咖啡色连衣裙。', homophoneSentence: '咖啡德雷斯.' },
            { word: 'Black', phonetic: '/blæk/', homophone: '布莱克', meaning: '黑色', sentence: 'Black dress.', translation: '黑色连衣裙。', homophoneSentence: '布莱克德雷斯.' },
            { word: 'White', phonetic: '/waɪt/', homophone: '怀特', meaning: '白色', sentence: 'White dress.', translation: '白色连衣裙。', homophoneSentence: '怀特德雷斯.' },
            { word: 'Gray', phonetic: '/ɡreɪ/', homophone: '格雷', meaning: '灰色', sentence: 'Gray dress.', translation: '灰色连衣裙。', homophoneSentence: '格雷德雷斯.' },
            { word: 'Light gray', phonetic: '/laɪt ɡreɪ/', homophone: '莱特格雷', meaning: '浅灰色', sentence: 'Light gray dress.', translation: '浅灰色连衣裙。', homophoneSentence: '莱特格雷德雷斯.' },
            { word: 'Dark gray', phonetic: '/dɑːk ɡreɪ/', homophone: '达克格雷', meaning: '深灰色', sentence: 'Dark gray dress.', translation: '深灰色连衣裙。', homophoneSentence: '达克格雷德雷斯.' },
            { word: 'Silver', phonetic: '/ˈsɪlvə/', homophone: '西尔弗', meaning: '银色', sentence: 'Silver dress.', translation: '银色连衣裙。', homophoneSentence: '西尔弗德雷斯.' },
            { word: 'Gold', phonetic: '/ɡəʊld/', homophone: '高德', meaning: '金色', sentence: 'Gold dress.', translation: '金色连衣裙。', homophoneSentence: '高德德雷斯.' },
            { word: 'Bronze', phonetic: '/brɒnz/', homophone: '布朗兹', meaning: '古铜色', sentence: 'Bronze dress.', translation: '古铜色连衣裙。', homophoneSentence: '布朗兹德雷斯.' },
            { word: 'Copper', phonetic: '/ˈkɒpə/', homophone: '科珀', meaning: '铜色', sentence: 'Copper dress.', translation: '铜色连衣裙。', homophoneSentence: '科珀德雷斯.' },
            { word: 'Brass', phonetic: '/brɑːs/', homophone: '布拉斯', meaning: '黄铜色', sentence: 'Brass dress.', translation: '黄铜色连衣裙。', homophoneSentence: '布拉斯德雷斯.' },
            { word: 'Aluminum', phonetic: '/əˈluːmɪnəm/', homophone: '阿鲁米南', meaning: '铝色', sentence: 'Aluminum dress.', translation: '铝色连衣裙。', homophoneSentence: '阿鲁米南德雷斯.' },
            { word: 'Steel', phonetic: '/stiːl/', homophone: '斯蒂尔', meaning: '钢色', sentence: 'Steel dress.', translation: '钢色连衣裙。', homophoneSentence: '斯蒂尔德雷斯.' }
        ],
        family: [
            { word: 'Goddaughter', phonetic: '/ˈɡɒddɔːtə/', homophone: '高德道特', meaning: '教女', sentence: 'My goddaughter is cute.', translation: '我的教女很可爱。', homophoneSentence: '麦高德道特伊丘特.' },
            { word: 'Great-grandfather', phonetic: '/ɡreɪt ˈɡrænfɑːðə/', homophone: '格瑞特格兰法泽', meaning: '曾祖父', sentence: 'My great-grandfather is old.', translation: '我的曾祖父年纪大了。', homophoneSentence: '麦格瑞特格兰法泽伊欧德.' },
            { word: 'Great-grandmother', phonetic: '/ɡreɪt ˈɡrænmʌðə/', homophone: '格瑞特格兰玛泽', meaning: '曾祖母', sentence: 'My great-grandmother is kind.', translation: '我的曾祖母很善良。', homophoneSentence: '麦格瑞特格兰玛泽伊凯恩德.' },
            { word: 'Great-grandson', phonetic: '/ɡreɪt ˈɡrænsʌn/', homophone: '格瑞特格兰森', meaning: '曾孙子', sentence: 'My great-grandson is cute.', translation: '我的曾孙子很可爱。', homophoneSentence: '麦格瑞特格兰森伊丘特.' },
            { word: 'Great-granddaughter', phonetic: '/ɡreɪt ˈɡrændɔːtə/', homophone: '格瑞特格兰道特', meaning: '曾孙女', sentence: 'My great-granddaughter is smart.', translation: '我的曾孙女很聪明。', homophoneSentence: '麦格瑞特格兰道特伊斯马特.' },
            { word: 'Great-uncle', phonetic: '/ɡreɪt ˈʌŋkl/', homophone: '格瑞特昂克尔', meaning: '叔祖父', sentence: 'My great-uncle is tall.', translation: '我的叔祖父很高。', homophoneSentence: '麦格瑞特昂克尔伊托尔.' },
            { word: 'Great-aunt', phonetic: '/ɡreɪt ɑːnt/', homophone: '格瑞特昂特', meaning: '叔祖母', sentence: 'My great-aunt is pretty.', translation: '我的叔祖母很漂亮。', homophoneSentence: '麦格瑞特昂特伊普里蒂.' },
            { word: 'Cousin once removed', phonetic: '/ˈkʌzn wʌns rɪˈmuːvd/', homophone: '卡森万斯瑞穆夫德', meaning: '表侄', sentence: 'My cousin once removed is my age.', translation: '我的表侄和我同龄。', homophoneSentence: '麦卡森万斯瑞穆夫德伊麦艾吉.' },
            { word: 'Cousin twice removed', phonetic: '/ˈkʌzn twaɪs rɪˈmuːvd/', homophone: '卡森特瓦斯瑞穆夫德', meaning: '表侄孙', sentence: 'My cousin twice removed is young.', translation: '我的表侄孙很年轻。', homophoneSentence: '麦卡森特瓦斯瑞穆夫德伊杨.' },
            { word: 'Step-grandfather', phonetic: '/step ˈɡrænfɑːðə/', homophone: '斯特普格兰法泽', meaning: '继祖父', sentence: 'My step-grandfather is nice.', translation: '我的继祖父很好。', homophoneSentence: '麦斯特普格兰法泽伊奈斯.' },
            { word: 'Step-grandmother', phonetic: '/step ˈɡrænmʌðə/', homophone: '斯特普格兰玛泽', meaning: '继祖母', sentence: 'My step-grandmother is kind.', translation: '我的继祖母很善良。', homophoneSentence: '麦斯特普格兰玛泽伊凯恩德.' },
            { word: 'Step-grandson', phonetic: '/step ˈɡrænsʌn/', homophone: '斯特普格兰森', meaning: '继孙子', sentence: 'My step-grandson is cute.', translation: '我的继孙子很可爱。', homophoneSentence: '麦斯特普格兰森伊丘特.' },
            { word: 'Step-granddaughter', phonetic: '/step ˈɡrændɔːtə/', homophone: '斯特普格兰道特', meaning: '继孙女', sentence: 'My step-granddaughter is smart.', translation: '我的继孙女很聪明。', homophoneSentence: '麦斯特普格兰道特伊斯马特.' },
            { word: 'Adopted father', phonetic: '/əˈdɒptɪd ˈfɑːðə/', homophone: '阿多普蒂德法泽', meaning: '养父', sentence: 'My adopted father is kind.', translation: '我的养父很善良。', homophoneSentence: '麦阿多普蒂德法泽伊凯恩德.' },
            { word: 'Adopted mother', phonetic: '/əˈdɒptɪd ˈmʌðə/', homophone: '阿多普蒂德玛泽', meaning: '养母', sentence: 'My adopted mother is kind.', translation: '我的养母很善良。', homophoneSentence: '麦阿多普蒂德玛泽伊凯恩德.' },
            { word: 'Adopted son', phonetic: '/əˈdɒptɪd sʌn/', homophone: '阿多普蒂德森', meaning: '养子', sentence: 'My adopted son is smart.', translation: '我的养子很聪明。', homophoneSentence: '麦阿多普蒂德森伊斯马特.' },
            { word: 'Adopted daughter', phonetic: '/əˈdɒptɪd ˈdɔːtə/', homophone: '阿多普蒂德道特', meaning: '养女', sentence: 'My adopted daughter is smart.', translation: '我的养女很聪明。', homophoneSentence: '麦阿多普蒂德道特伊斯马特.' },
            { word: 'Foster father', phonetic: '/ˈfɒstə ˈfɑːðə/', homophone: '福斯特法泽', meaning: '养父', sentence: 'My foster father is kind.', translation: '我的养父很善良。', homophoneSentence: '麦福斯特法泽伊凯恩德.' },
            { word: 'Foster mother', phonetic: '/ˈfɒstə ˈmʌðə/', homophone: '福斯特玛泽', meaning: '养母', sentence: 'My foster mother is kind.', translation: '我的养母很善良。', homophoneSentence: '麦福斯特玛泽伊凯恩德.' },
            { word: 'Foster son', phonetic: '/ˈfɒstə sʌn/', homophone: '福斯特森', meaning: '养子', sentence: 'My foster son is smart.', translation: '我的养子很聪明。', homophoneSentence: '麦福斯特森伊斯马特.' },
            { word: 'Foster daughter', phonetic: '/ˈfɒstə ˈdɔːtə/', homophone: '福斯特道特', meaning: '养女', sentence: 'My foster daughter is smart.', translation: '我的养女很聪明。', homophoneSentence: '麦福斯特道特伊斯马特.' },
            { word: 'Biological father', phonetic: '/ˌbaɪəˈlɒdʒɪkl ˈfɑːðə/', homophone: '拜欧劳吉科法泽', meaning: '生父', sentence: 'My biological father is tall.', translation: '我的生父很高。', homophoneSentence: '麦拜欧劳吉科法泽伊托尔.' }
        ],
        time: [
            { word: 'Millisecond', phonetic: '/ˈmɪlisekənd/', homophone: '米利塞肯德', meaning: '毫秒', sentence: 'A millisecond is very short.', translation: '毫秒非常短。', homophoneSentence: '阿米利塞肯德伊歪瑞肖特.' },
            { word: 'Second', phonetic: '/ˈsekənd/', homophone: '塞肯德', meaning: '秒', sentence: 'A second is short.', translation: '秒很短。', homophoneSentence: '阿塞肯德伊肖特.' },
            { word: 'Minute', phonetic: '/ˈmɪnɪt/', homophone: '米尼特', meaning: '分钟', sentence: 'A minute is 60 seconds.', translation: '一分钟有60秒。', homophoneSentence: '阿米尼特伊60塞肯兹.' },
            { word: 'Hour', phonetic: '/aʊə/', homophone: '奥阿', meaning: '小时', sentence: 'An hour is 60 minutes.', translation: '一小时有60分钟。', homophoneSentence: '安奥阿伊60米尼特兹.' },
            { word: 'Day', phonetic: '/deɪ/', homophone: '戴', meaning: '天', sentence: 'A day is 24 hours.', translation: '一天有24小时。', homophoneSentence: '阿戴伊24奥阿兹.' },
            { word: 'Week', phonetic: '/wiːk/', homophone: '威克', meaning: '周', sentence: 'A week is 7 days.', translation: '一周有7天。', homophoneSentence: '阿威克伊7戴兹.' },
            { word: 'Month', phonetic: '/mʌnθ/', homophone: '芒斯', meaning: '月', sentence: 'A month has about 30 days.', translation: '一个月大约有30天。', homophoneSentence: '阿芒斯海兹阿鲍特30戴兹.' },
            { word: 'Year', phonetic: '/jɪə/', homophone: '伊尔', meaning: '年', sentence: 'A year has 12 months.', translation: '一年有12个月。', homophoneSentence: '阿伊尔海兹12芒斯兹.' },
            { word: 'Decade', phonetic: '/ˈdekeɪd/', homophone: '德凯德', meaning: '十年', sentence: 'A decade is 10 years.', translation: '十年是10年。', homophoneSentence: '阿德凯德伊10伊尔兹.' },
            { word: 'Century', phonetic: '/ˈsentʃəri/', homophone: '森彻瑞', meaning: '世纪', sentence: 'A century is 100 years.', translation: '一个世纪是100年。', homophoneSentence: '阿森彻瑞伊100伊尔兹.' },
            { word: 'Millennium', phonetic: '/mɪˈleniəm/', homophone: '米莱尼姆', meaning: '千年', sentence: 'A millennium is 1000 years.', translation: '一千年是1000年。', homophoneSentence: '阿米莱尼姆伊1000伊尔兹.' },
            { word: 'Eon', phonetic: '/ˈiːɒn/', homophone: '伊昂', meaning: '纪元', sentence: 'An eon is a very long time.', translation: '纪元是很长的时间。', homophoneSentence: '安伊昂伊歪瑞朗泰姆.' },
            { word: 'Morning', phonetic: '/ˈmɔːnɪŋ/', homophone: '莫宁', meaning: '早晨', sentence: 'Morning is from 6 AM to 12 PM.', translation: '早晨是从6点到12点。', homophoneSentence: '莫宁伊弗罗姆6AM图12PM.' },
            { word: 'Afternoon', phonetic: '/ˌɑːftəˈnuːn/', homophone: '阿夫特努恩', meaning: '下午', sentence: 'Afternoon is from 12 PM to 6 PM.', translation: '下午是从12点到6点。', homophoneSentence: '阿夫特努恩伊弗罗姆12PM图6PM.' },
            { word: 'Evening', phonetic: '/ˈiːvnɪŋ/', homophone: '伊夫宁', meaning: '晚上', sentence: 'Evening is from 6 PM to 12 AM.', translation: '晚上是从6点到12点。', homophoneSentence: '伊夫宁伊弗罗姆6PM图12AM.' },
            { word: 'Night', phonetic: '/naɪt/', homophone: '奈特', meaning: '夜晚', sentence: 'Night is from 12 AM to 6 AM.', translation: '夜晚是从12点到6点。', homophoneSentence: '奈特伊弗罗姆12AM图6AM.' },
            { word: 'Dawn', phonetic: '/dɔːn/', homophone: '道恩', meaning: '黎明', sentence: 'Dawn is early morning.', translation: '黎明是清晨。', homophoneSentence: '道恩伊厄利莫宁.' },
            { word: 'Sunrise', phonetic: '/ˈsʌnraɪz/', homophone: '森莱兹', meaning: '日出', sentence: 'Sunrise is beautiful.', translation: '日出很美。', homophoneSentence: '森莱兹伊比欧特夫欧.' },
            { word: 'Sunset', phonetic: '/ˈsʌnset/', homophone: '森塞特', meaning: '日落', sentence: 'Sunset is beautiful.', translation: '日落很美。', homophoneSentence: '森塞特伊比欧特夫欧.' },
            { word: 'Dusk', phonetic: '/dʌsk/', homophone: '达斯克', meaning: '黄昏', sentence: 'Dusk is the time before night.', translation: '黄昏是夜晚前的时间。', homophoneSentence: '达斯克伊泽泰姆比弗奈特.' },
            { word: 'Midnight', phonetic: '/ˈmɪdnaɪt/', homophone: '米德奈特', meaning: '午夜', sentence: 'Midnight is 12 AM.', translation: '午夜是12点。', homophoneSentence: '米德奈特伊12AM.' },
            { word: 'Noon', phonetic: '/nuːn/', homophone: '努恩', meaning: '中午', sentence: 'Noon is 12 PM.', translation: '中午是12点。', homophoneSentence: '努恩伊12PM.' }
        ],
        food: [
            { word: 'Apple', phonetic: '/ˈæpl/', homophone: '阿普尔', meaning: '苹果', sentence: 'I love apple.', translation: '我喜欢苹果。', homophoneSentence: '爱拉乌阿普尔.' },
            { word: 'Banana', phonetic: '/bəˈnɑːnə/', homophone: '巴纳纳', meaning: '香蕉', sentence: 'I love banana.', translation: '我喜欢香蕉。', homophoneSentence: '爱拉乌巴纳纳.' },
            { word: 'Orange', phonetic: '/ˈɒrɪndʒ/', homophone: '奥林奇', meaning: '橙子', sentence: 'I love orange.', translation: '我喜欢橙子。', homophoneSentence: '爱拉乌奥林奇.' },
            { word: 'Grape', phonetic: '/ɡreɪp/', homophone: '格瑞普', meaning: '葡萄', sentence: 'I love grape.', translation: '我喜欢葡萄。', homophoneSentence: '爱拉乌格瑞普.' },
            { word: 'Strawberry', phonetic: '/ˈstrɔːbəri/', homophone: '斯特劳贝里', meaning: '草莓', sentence: 'I love strawberry.', translation: '我喜欢草莓。', homophoneSentence: '爱拉乌斯特劳贝里.' },
            { word: 'Blueberry', phonetic: '/ˈbluːbəri/', homophone: '布鲁贝里', meaning: '蓝莓', sentence: 'I love blueberry.', translation: '我喜欢蓝莓。', homophoneSentence: '爱拉乌布鲁贝里.' },
            { word: 'Raspberry', phonetic: '/ˈrɑːzbəri/', homophone: '拉兹贝里', meaning: '树莓', sentence: 'I love raspberry.', translation: '我喜欢树莓。', homophoneSentence: '爱拉乌拉兹贝里.' },
            { word: 'Blackberry', phonetic: '/ˈblækberi/', homophone: '布莱克贝里', meaning: '黑莓', sentence: 'I love blackberry.', translation: '我喜欢黑莓。', homophoneSentence: '爱拉乌布莱克贝里.' },
            { word: 'Cherry', phonetic: '/ˈtʃeri/', homophone: '彻瑞', meaning: '樱桃', sentence: 'I love cherry.', translation: '我喜欢樱桃。', homophoneSentence: '爱拉乌彻瑞.' },
            { word: 'Peach', phonetic: '/piːtʃ/', homophone: '皮奇', meaning: '桃子', sentence: 'I love peach.', translation: '我喜欢桃子。', homophoneSentence: '爱拉乌皮奇.' },
            { word: 'Pear', phonetic: '/peə/', homophone: '皮尔', meaning: '梨', sentence: 'I love pear.', translation: '我喜欢梨。', homophoneSentence: '爱拉乌皮尔.' },
            { word: 'Plum', phonetic: '/plʌm/', homophone: '普拉姆', meaning: '李子', sentence: 'I love plum.', translation: '我喜欢李子。', homophoneSentence: '爱拉乌普拉姆.' },
            { word: 'Apricot', phonetic: '/ˈeɪprɪkɒt/', homophone: '艾普瑞考特', meaning: '杏子', sentence: 'I love apricot.', translation: '我喜欢杏子。', homophoneSentence: '爱拉乌艾普瑞考特.' },
            { word: 'Mango', phonetic: '/ˈmæŋɡəʊ/', homophone: '芒果', meaning: '芒果', sentence: 'I love mango.', translation: '我喜欢芒果。', homophoneSentence: '爱拉乌芒果.' },
            { word: 'Pineapple', phonetic: '/ˈpaɪnæpl/', homophone: '派纳普尔', meaning: '菠萝', sentence: 'I love pineapple.', translation: '我喜欢菠萝。', homophoneSentence: '爱拉乌派纳普尔.' },
            { word: 'Watermelon', phonetic: '/ˈwɔːtəmelən/', homophone: '沃特梅伦', meaning: '西瓜', sentence: 'I love watermelon.', translation: '我喜欢西瓜。', homophoneSentence: '爱拉乌沃特梅伦.' },
            { word: 'Cantaloupe', phonetic: '/ˈkæntəluːp/', homophone: '坎塔卢普', meaning: '哈密瓜', sentence: 'I love cantaloupe.', translation: '我喜欢哈密瓜。', homophoneSentence: '爱拉乌坎塔卢普.' },
            { word: 'Honeydew', phonetic: '/ˈhʌnɪdjuː/', homophone: '哈尼杜', meaning: '白兰瓜', sentence: 'I love honeydew.', translation: '我喜欢白兰瓜。', homophoneSentence: '爱拉乌哈尼杜.' },
            { word: 'Kiwi', phonetic: '/ˈkiːwiː/', homophone: '基维', meaning: '猕猴桃', sentence: 'I love kiwi.', translation: '我喜欢猕猴桃。', homophoneSentence: '爱拉乌基维.' },
            { word: 'Papaya', phonetic: '/pəˈpaɪə/', homophone: '帕帕亚', meaning: '木瓜', sentence: 'I love papaya.', translation: '我喜欢木瓜。', homophoneSentence: '爱拉乌帕帕亚.' },
            { word: 'Guava', phonetic: '/ˈɡwɑːvə/', homophone: '瓜瓦', meaning: '番石榴', sentence: 'I love guava.', translation: '我喜欢番石榴。', homophoneSentence: '爱拉乌瓜瓦.' },
            { word: 'Lychee', phonetic: '/ˈlaɪtʃiː/', homophone: '荔枝', meaning: '荔枝', sentence: 'I love lychee.', translation: '我喜欢荔枝。', homophoneSentence: '爱拉乌荔枝.' }
        ],
        conversations: [
            { word: 'Whats your name', phonetic: '/wɒts jɔː neɪm/', homophone: '沃茨哟内姆', meaning: '你叫什么名字', sentence: 'Whats your name?', translation: '你叫什么名字？', homophoneSentence: '沃茨哟内姆?' },
            { word: 'My name is', phonetic: '/maɪ neɪm ɪz/', homophone: '麦内姆伊兹', meaning: '我的名字是', sentence: 'My name is John.', translation: '我的名字是约翰。', homophoneSentence: '麦内姆伊兹约翰.' },
            { word: 'Nice to meet you', phonetic: '/naɪs tuː miːt juː/', homophone: '奈斯图米特油', meaning: '很高兴认识你', sentence: 'Nice to meet you!', translation: '很高兴认识你！', homophoneSentence: '奈斯图米特油!' },
            { word: 'Pleased to meet you', phonetic: '/pliːzd tuː miːt juː/', homophone: '普利兹图米特油', meaning: '很高兴认识你', sentence: 'Pleased to meet you!', translation: '很高兴认识你！', homophoneSentence: '普利兹图米特油!' },
            { word: 'How are you', phonetic: '/haʊ ɑː juː/', homophone: '好阿油', meaning: '你好吗', sentence: 'How are you?', translation: '你好吗？', homophoneSentence: '好阿油?' },
            { word: 'Im fine', phonetic: '/aɪm faɪn/', homophone: '爱姆法因', meaning: '我很好', sentence: 'Im fine, thank you.', translation: '我很好，谢谢。', homophoneSentence: '爱姆法因，桑克油.' },
            { word: 'Im good', phonetic: '/aɪm ɡʊd/', homophone: '爱姆古德', meaning: '我很好', sentence: 'Im good, thank you.', translation: '我很好，谢谢。', homophoneSentence: '爱姆古德，桑克油.' },
            { word: 'Im well', phonetic: '/aɪm wel/', homophone: '爱姆威尔', meaning: '我很好', sentence: 'Im well, thank you.', translation: '我很好，谢谢。', homophoneSentence: '爱姆威尔，桑克油.' },
            { word: 'Thank you', phonetic: '/θæŋk juː/', homophone: '桑克油', meaning: '谢谢', sentence: 'Thank you!', translation: '谢谢！', homophoneSentence: '桑克油!' },
            { word: 'Youre welcome', phonetic: '/jɔː ˈwelkəm/', homophone: '哟威尔康', meaning: '不客气', sentence: 'Youre welcome!', translation: '不客气！', homophoneSentence: '哟威尔康!' },
            { word: 'Im sorry', phonetic: '/aɪm ˈsɒri/', homophone: '爱姆索瑞', meaning: '对不起', sentence: 'Im sorry!', translation: '对不起！', homophoneSentence: '爱姆索瑞!' },
            { word: 'Thats okay', phonetic: '/ðæts əˈkeɪ/', homophone: '赞茨欧凯', meaning: '没关系', sentence: 'Thats okay!', translation: '没关系！', homophoneSentence: '赞茨欧凯!' },
            { word: 'Excuse me', phonetic: '/ɪkˈskjuːz miː/', homophone: '伊克斯丘兹米', meaning: '打扰一下', sentence: 'Excuse me!', translation: '打扰一下！', homophoneSentence: '伊克斯丘兹米!' },
            { word: 'May I help you', phonetic: '/meɪ aɪ help juː/', homophone: '梅爱海尔普油', meaning: '我能帮你吗', sentence: 'May I help you?', translation: '我能帮你吗？', homophoneSentence: '梅爱海尔普油?' },
            { word: 'Yes please', phonetic: '/jes pliːz/', homophone: '耶斯普利兹', meaning: '是的，请', sentence: 'Yes please!', translation: '是的，请！', homophoneSentence: '耶斯普利兹!' },
            { word: 'No thank you', phonetic: '/nəʊ θæŋk juː/', homophone: '诺桑克油', meaning: '不用了，谢谢', sentence: 'No thank you!', translation: '不用了，谢谢！', homophoneSentence: '诺桑克油!' },
            { word: 'Where are you from', phonetic: '/weə ɑː juː frɒm/', homophone: '维尔阿油弗罗姆', meaning: '你来自哪里', sentence: 'Where are you from?', translation: '你来自哪里？', homophoneSentence: '维尔阿油弗罗姆?' },
            { word: 'Im from', phonetic: '/aɪm frɒm/', homophone: '爱姆弗罗姆', meaning: '我来自', sentence: 'Im from China.', translation: '我来自中国。', homophoneSentence: '爱姆弗罗姆查伊纳.' },
            { word: 'How old are you', phonetic: '/haʊ əʊld ɑː juː/', homophone: '好欧尔德阿油', meaning: '你多大了', sentence: 'How old are you?', translation: '你多大了？', homophoneSentence: '好欧尔德阿油?' },
            { word: 'Im', phonetic: '/aɪm/', homophone: '爱姆', meaning: '我是', sentence: 'Im 18 years old.', translation: '我18岁了。', homophoneSentence: '爱姆18伊尔兹欧尔德.' },
            { word: 'What do you do', phonetic: '/wɒt duː juː duː/', homophone: '沃茨杜油杜', meaning: '你是做什么的', sentence: 'What do you do?', translation: '你是做什么的？', homophoneSentence: '沃茨杜油杜?' },
            { word: 'I am a', phonetic: '/aɪ æm ə/', homophone: '爱阿姆阿', meaning: '我是一个', sentence: 'I am a student.', translation: '我是一个学生。', homophoneSentence: '爱阿姆阿斯图登特.' }
        ],
        sentences: [
            { word: 'I love you', phonetic: '/aɪ lʌv juː/', homophone: '爱拉乌油', meaning: '我爱你', sentence: 'I love you!', translation: '我爱你！', homophoneSentence: '爱拉乌油!' },
            { word: 'I miss you', phonetic: '/aɪ mɪs juː/', homophone: '爱米斯油', meaning: '我想你', sentence: 'I miss you!', translation: '我想你！', homophoneSentence: '爱米斯油!' },
            { word: 'I need you', phonetic: '/aɪ niːd juː/', homophone: '爱尼德油', meaning: '我需要你', sentence: 'I need you!', translation: '我需要你！', homophoneSentence: '爱尼德油!' },
            { word: 'I want you', phonetic: '/aɪ wɒnt juː/', homophone: '爱旺特油', meaning: '我想要你', sentence: 'I want you!', translation: '我想要你！', homophoneSentence: '爱旺特油!' },
            { word: 'I like you', phonetic: '/aɪ laɪk juː/', homophone: '爱莱克油', meaning: '我喜欢你', sentence: 'I like you!', translation: '我喜欢你！', homophoneSentence: '爱莱克油!' },
            { word: 'I hate you', phonetic: '/aɪ heɪt juː/', homophone: '爱海特油', meaning: '我讨厌你', sentence: 'I hate you!', translation: '我讨厌你！', homophoneSentence: '爱海特油!' },
            { word: 'I forgive you', phonetic: '/aɪ fəˈɡɪv juː/', homophone: '爱佛吉夫油', meaning: '我原谅你', sentence: 'I forgive you!', translation: '我原谅你！', homophoneSentence: '爱佛吉夫油!' },
            { word: 'I apologize', phonetic: '/aɪ əˈpɒlədʒaɪz/', homophone: '爱阿波拉吉兹', meaning: '我道歉', sentence: 'I apologize!', translation: '我道歉！', homophoneSentence: '爱阿波拉吉兹!' },
            { word: 'I thank you', phonetic: '/aɪ θæŋk juː/', homophone: '爱桑克油', meaning: '我谢谢你', sentence: 'I thank you!', translation: '我谢谢你！', homophoneSentence: '爱桑克油!' },
            { word: 'I appreciate you', phonetic: '/aɪ əˈpriːʃieɪt juː/', homophone: '爱阿普瑞舍伊特油', meaning: '我感激你', sentence: 'I appreciate you!', translation: '我感激你！', homophoneSentence: '爱阿普瑞舍伊特油!' },
            { word: 'I respect you', phonetic: '/aɪ rɪˈspekt juː/', homophone: '爱瑞思佩克特油', meaning: '我尊重你', sentence: 'I respect you!', translation: '我尊重你！', homophoneSentence: '爱瑞思佩克特油!' },
            { word: 'I admire you', phonetic: '/aɪ ədˈmaɪə juː/', homophone: '爱阿德麦尔油', meaning: '我钦佩你', sentence: 'I admire you!', translation: '我钦佩你！', homophoneSentence: '爱阿德麦尔油!' },
            { word: 'I trust you', phonetic: '/aɪ trʌst juː/', homophone: '爱特拉斯油', meaning: '我信任你', sentence: 'I trust you!', translation: '我信任你！', homophoneSentence: '爱特拉斯油!' },
            { word: 'I believe you', phonetic: '/aɪ bɪˈliːv juː/', homophone: '爱比里夫油', meaning: '我相信你', sentence: 'I believe you!', translation: '我相信你！', homophoneSentence: '爱比里夫油!' },
            { word: 'I understand you', phonetic: '/aɪ ˌʌndəˈstænd juː/', homophone: '爱安德斯塔恩德油', meaning: '我理解你', sentence: 'I understand you!', translation: '我理解你！', homophoneSentence: '爱安德斯塔恩德油!' },
            { word: 'I support you', phonetic: '/aɪ səˈpɔːt juː/', homophone: '爱萨波特油', meaning: '我支持你', sentence: 'I support you!', translation: '我支持你！', homophoneSentence: '爱萨波特油!' },
            { word: 'I encourage you', phonetic: '/aɪ ɪnˈkʌrɪdʒ juː/', homophone: '爱因卡瑞奇油', meaning: '我鼓励你', sentence: 'I encourage you!', translation: '我鼓励你！', homophoneSentence: '爱因卡瑞奇油!' },
            { word: 'I congratulate you', phonetic: '/aɪ kənˈɡrætʃuleɪt juː/', homophone: '爱康格瑞丘雷伊特油', meaning: '我祝贺你', sentence: 'I congratulate you!', translation: '我祝贺你！', homophoneSentence: '爱康格瑞丘雷伊特油!' },
            { word: 'I celebrate you', phonetic: '/aɪ ˈselɪbreɪt juː/', homophone: '爱塞勒布雷伊特油', meaning: '我庆祝你', sentence: 'I celebrate you!', translation: '我庆祝你！', homophoneSentence: '爱塞勒布雷伊特油!' },
            { word: 'I bless you', phonetic: '/aɪ bles juː/', homophone: '爱布雷斯油', meaning: '我祝福你', sentence: 'I bless you!', translation: '我祝福你！', homophoneSentence: '爱布雷斯油!' },
            { word: 'I wish you well', phonetic: '/aɪ wɪʃ juː wel/', homophone: '爱威什油威尔', meaning: '我祝你一切顺利', sentence: 'I wish you well!', translation: '我祝你一切顺利！', homophoneSentence: '爱威什油威尔!' },
            { word: 'I hope you are happy', phonetic: '/aɪ həʊp juː ɑː ˈhæpi/', homophone: '爱霍普油阿嗨皮', meaning: '我希望你快乐', sentence: 'I hope you are happy!', translation: '我希望你快乐！', homophoneSentence: '爱霍普油阿嗨皮!' }
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