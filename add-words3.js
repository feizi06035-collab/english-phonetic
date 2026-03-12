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
    
    // 新单词数据（第三批）
    const newWords = {
        greetings: [
            { word: 'Good morning everyone', phonetic: '/ɡʊd ˈmɔːnɪŋ ˈevriwʌn/', homophone: '古德莫宁埃弗里万', meaning: '大家早上好', sentence: 'Good morning everyone!', translation: '大家早上好！', homophoneSentence: '古德莫宁埃弗里万!' },
            { word: 'Good afternoon everyone', phonetic: '/ɡʊd ˌɑːftəˈnuːn ˈevriwʌn/', homophone: '古德阿夫特努恩埃弗里万', meaning: '大家下午好', sentence: 'Good afternoon everyone!', translation: '大家下午好！', homophoneSentence: '古德阿夫特努恩埃弗里万!' },
            { word: 'Good evening everyone', phonetic: '/ɡʊd ˈiːvnɪŋ ˈevriwʌn/', homophone: '古德伊夫宁埃弗里万', meaning: '大家晚上好', sentence: 'Good evening everyone!', translation: '大家晚上好！', homophoneSentence: '古德伊夫宁埃弗里万!' },
            { word: 'Good night everyone', phonetic: '/ɡʊd naɪt ˈevriwʌn/', homophone: '古德奈特埃弗里万', meaning: '大家晚安', sentence: 'Good night everyone!', translation: '大家晚安！', homophoneSentence: '古德奈特埃弗里万!' },
            { word: 'Hello everyone', phonetic: '/həˈləʊ ˈevriwʌn/', homophone: '哈罗埃弗里万', meaning: '大家好', sentence: 'Hello everyone!', translation: '大家好！', homophoneSentence: '哈罗埃弗里万!' },
            { word: 'Hi everyone', phonetic: '/haɪ ˈevriwʌn/', homophone: '嗨埃弗里万', meaning: '大家好', sentence: 'Hi everyone!', translation: '大家好！', homophoneSentence: '嗨埃弗里万!' },
            { word: 'Hey everyone', phonetic: '/heɪ ˈevriwʌn/', homophone: '嘿埃弗里万', meaning: '大家好', sentence: 'Hey everyone!', translation: '大家好！', homophoneSentence: '嘿埃弗里万!' },
            { word: 'Howdy everyone', phonetic: '/ˈhaʊdi ˈevriwʌn/', homophone: '豪迪埃弗里万', meaning: '大家好', sentence: 'Howdy everyone!', translation: '大家好！', homophoneSentence: '豪迪埃弗里万!' },
            { word: 'Welcome everyone', phonetic: '/ˈwelkəm ˈevriwʌn/', homophone: '威尔康埃弗里万', meaning: '欢迎大家', sentence: 'Welcome everyone!', translation: '欢迎大家！', homophoneSentence: '威尔康埃弗里万!' },
            { word: 'Greetings everyone', phonetic: '/ˈɡriːtɪŋz ˈevriwʌn/', homophone: '格瑞廷兹埃弗里万', meaning: '问候大家', sentence: 'Greetings everyone!', translation: '问候大家！', homophoneSentence: '格瑞廷兹埃弗里万!' },
            { word: 'Good day everyone', phonetic: '/ɡʊd deɪ ˈevriwʌn/', homophone: '古德戴埃弗里万', meaning: '大家好', sentence: 'Good day everyone!', translation: '大家好！', homophoneSentence: '古德戴埃弗里万!' },
            { word: 'Have a great day everyone', phonetic: '/hæv ə ɡreɪt deɪ ˈevriwʌn/', homophone: '海夫阿格瑞特戴埃弗里万', meaning: '大家今天愉快', sentence: 'Have a great day everyone!', translation: '大家今天愉快！', homophoneSentence: '海夫阿格瑞特戴埃弗里万!' }
        ],
        emotions: [
            { word: 'Depressed', phonetic: '/dɪˈprest/', homophone: '迪普雷斯德', meaning: '沮丧的', sentence: 'I feel depressed!', translation: '我感到沮丧！', homophoneSentence: '爱菲尔迪普雷斯德!' },
            { word: 'Sad', phonetic: '/sæd/', homophone: '赛德', meaning: '悲伤的', sentence: 'I feel sad!', translation: '我感到悲伤！', homophoneSentence: '爱菲尔赛德!' },
            { word: 'Unhappy', phonetic: '/ʌnˈhæpi/', homophone: '昂哈皮', meaning: '不开心的', sentence: 'I feel unhappy!', translation: '我感到不开心！', homophoneSentence: '爱菲尔昂哈皮!' },
            { word: 'Miserable', phonetic: '/ˈmɪzrəbl/', homophone: '米泽若波', meaning: '痛苦的', sentence: 'I feel miserable!', translation: '我感到痛苦！', homophoneSentence: '爱菲尔米泽若波!' },
            { word: 'Heartbroken', phonetic: '/ˈhɑːtbrəʊkən/', homophone: '哈特布罗肯', meaning: '心碎的', sentence: 'I feel heartbroken!', translation: '我感到心碎！', homophoneSentence: '爱菲尔哈特布罗肯!' },
            { word: 'Lonely', phonetic: '/ˈləʊnli/', homophone: '龙利', meaning: '孤独的', sentence: 'I feel lonely!', translation: '我感到孤独！', homophoneSentence: '爱菲尔龙利!' },
            { word: 'Isolated', phonetic: '/ˈaɪsəleɪtɪd/', homophone: '艾索雷特德', meaning: '孤立的', sentence: 'I feel isolated!', translation: '我感到孤立！', homophoneSentence: '爱菲尔艾索雷特德!' },
            { word: 'Alone', phonetic: '/əˈləʊn/', homophone: '阿龙', meaning: '孤独的', sentence: 'I feel alone!', translation: '我感到孤独！', homophoneSentence: '爱菲尔阿龙!' },
            { word: 'Angry', phonetic: '/ˈæŋɡri/', homophone: '安格利', meaning: '生气的', sentence: 'I feel angry!', translation: '我感到生气！', homophoneSentence: '爱菲尔安格利!' },
            { word: 'Mad', phonetic: '/mæd/', homophone: '麦德', meaning: '生气的', sentence: 'I feel mad!', translation: '我感到生气！', homophoneSentence: '爱菲尔麦德!' },
            { word: 'Furious', phonetic: '/ˈfjʊəriəs/', homophone: '菲尤瑞尔斯', meaning: '暴怒的', sentence: 'I feel furious!', translation: '我感到暴怒！', homophoneSentence: '爱菲尔菲尤瑞尔斯!' },
            { word: 'Enraged', phonetic: '/ɪnˈreɪdʒd/', homophone: '伊恩瑞吉德', meaning: '愤怒的', sentence: 'I feel enraged!', translation: '我感到愤怒！', homophoneSentence: '爱菲尔伊恩瑞吉德!' }
        ],
        numbers: [
            { word: 'Three trillion', phonetic: '/θriː ˈtrɪljən/', homophone: '斯瑞吹林', meaning: '三万亿', sentence: 'Three trillion dollars.', translation: '三万亿美元。', homophoneSentence: '斯瑞吹林道乐兹.' },
            { word: 'Four trillion', phonetic: '/fɔː ˈtrɪljən/', homophone: '佛吹林', meaning: '四万亿', sentence: 'Four trillion dollars.', translation: '四万亿美元。', homophoneSentence: '佛吹林道乐兹.' },
            { word: 'Five trillion', phonetic: '/faɪv ˈtrɪljən/', homophone: '法艾夫吹林', meaning: '五万亿', sentence: 'Five trillion dollars.', translation: '五万亿美元。', homophoneSentence: '法艾夫吹林道乐兹.' },
            { word: 'Six trillion', phonetic: '/sɪks ˈtrɪljən/', homophone: '西克斯吹林', meaning: '六万亿', sentence: 'Six trillion dollars.', translation: '六万亿美元。', homophoneSentence: '西克斯吹林道乐兹.' },
            { word: 'Seven trillion', phonetic: '/ˈsevn ˈtrɪljən/', homophone: '赛文吹林', meaning: '七万亿', sentence: 'Seven trillion dollars.', translation: '七万亿美元。', homophoneSentence: '赛文吹林道乐兹.' },
            { word: 'Eight trillion', phonetic: '/eɪt ˈtrɪljən/', homophone: '艾特吹林', meaning: '八万亿', sentence: 'Eight trillion dollars.', translation: '八万亿美元。', homophoneSentence: '艾特吹林道乐兹.' },
            { word: 'Nine trillion', phonetic: '/naɪn ˈtrɪljən/', homophone: '奈恩吹林', meaning: '九万亿', sentence: 'Nine trillion dollars.', translation: '九万亿美元。', homophoneSentence: '奈恩吹林道乐兹.' },
            { word: 'Ten trillion', phonetic: '/ten ˈtrɪljən/', homophone: '坦吹林', meaning: '十万亿', sentence: 'Ten trillion dollars.', translation: '十万亿美元。', homophoneSentence: '坦吹林道乐兹.' },
            { word: 'Hundred trillion', phonetic: '/ˈhʌndrəd ˈtrɪljən/', homophone: '汉德瑞吹林', meaning: '一百万亿', sentence: 'Hundred trillion dollars.', translation: '一百万亿美元。', homophoneSentence: '汉德瑞吹林道乐兹.' },
            { word: 'One quadrillion', phonetic: '/wʌn kwɒˈdrɪljən/', homophone: '万夸德林', meaning: '千万亿', sentence: 'One quadrillion dollars.', translation: '千万亿美元。', homophoneSentence: '万夸德林道乐兹.' },
            { word: 'Two quadrillion', phonetic: '/tuː kwɒˈdrɪljən/', homophone: '图夸德林', meaning: '两千万亿', sentence: 'Two quadrillion dollars.', translation: '两千万亿美元。', homophoneSentence: '图夸德林道乐兹.' },
            { word: 'Three quadrillion', phonetic: '/θriː kwɒˈdrɪljən/', homophone: '斯瑞夸德林', meaning: '三千万亿', sentence: 'Three quadrillion dollars.', translation: '三千万亿美元。', homophoneSentence: '斯瑞夸德林道乐兹.' }
        ],
        colors: [
            { word: 'Titanium', phonetic: '/taɪˈteɪniəm/', homophone: '泰泰坦尼姆', meaning: '钛色', sentence: 'Titanium dress.', translation: '钛色连衣裙。', homophoneSentence: '泰泰坦尼姆德雷斯.' },
            { word: 'Coal', phonetic: '/kəʊl/', homophone: '科尔', meaning: '煤黑色', sentence: 'Coal dress.', translation: '煤黑色连衣裙。', homophoneSentence: '科尔德雷斯.' },
            { word: 'Charcoal', phonetic: '/ˈtʃɑːkəʊl/', homophone: '查尔科尔', meaning: '炭黑色', sentence: 'Charcoal dress.', translation: '炭黑色连衣裙。', homophoneSentence: '查尔科尔德雷斯.' },
            { word: 'Ebony', phonetic: '/ˈebəni/', homophone: '埃博尼', meaning: '乌木色', sentence: 'Ebony dress.', translation: '乌木色连衣裙。', homophoneSentence: '埃博尼德雷斯.' },
            { word: 'Jet black', phonetic: '/dʒet blæk/', homophone: '杰特布莱克', meaning: '墨黑色', sentence: 'Jet black dress.', translation: '墨黑色连衣裙。', homophoneSentence: '杰特布莱克德雷斯.' },
            { word: 'Snow white', phonetic: '/snəʊ waɪt/', homophone: '斯诺怀特', meaning: '雪白色', sentence: 'Snow white dress.', translation: '雪白色连衣裙。', homophoneSentence: '斯诺怀特德雷斯.' },
            { word: 'Ivory white', phonetic: '/ˈaɪvəri waɪt/', homophone: '艾弗里怀特', meaning: '象牙白', sentence: 'Ivory white dress.', translation: '象牙白连衣裙。', homophoneSentence: '艾弗里怀特德雷斯.' },
            { word: 'Pearl white', phonetic: '/pɜːl waɪt/', homophone: '珀尔怀特', meaning: '珍珠白', sentence: 'Pearl white dress.', translation: '珍珠白连衣裙。', homophoneSentence: '珀尔怀特德雷斯.' },
            { word: 'Cream white', phonetic: '/kriːm waɪt/', homophone: '克里姆怀特', meaning: '奶油白', sentence: 'Cream white dress.', translation: '奶油白连衣裙。', homophoneSentence: '克里姆怀特德雷斯.' },
            { word: 'Off white', phonetic: '/ɒf waɪt/', homophone: '奥夫怀特', meaning: '米白色', sentence: 'Off white dress.', translation: '米白色连衣裙。', homophoneSentence: '奥夫怀特德雷斯.' },
            { word: 'Bone white', phonetic: '/bəʊn waɪt/', homophone: '伯恩怀特', meaning: '骨白色', sentence: 'Bone white dress.', translation: '骨白色连衣裙。', homophoneSentence: '伯恩怀特德雷斯.' },
            { word: 'Alabaster', phonetic: '/ˈæləbɑːstə/', homophone: '阿拉巴斯特', meaning: '雪花石膏色', sentence: 'Alabaster dress.', translation: '雪花石膏色连衣裙。', homophoneSentence: '阿拉巴斯特德雷斯.' }
        ],
        family: [
            { word: 'Biological mother', phonetic: '/ˌbaɪəˈlɒdʒɪkl ˈmʌðə/', homophone: '拜欧劳吉科玛泽', meaning: '生母', sentence: 'My biological mother is kind.', translation: '我的生母很善良。', homophoneSentence: '麦拜欧劳吉科玛泽伊凯恩德.' },
            { word: 'Biological son', phonetic: '/ˌbaɪəˈlɒdʒɪkl sʌn/', homophone: '拜欧劳吉科森', meaning: '生子', sentence: 'My biological son is smart.', translation: '我的生子很聪明。', homophoneSentence: '麦拜欧劳吉科森伊斯马特.' },
            { word: 'Biological daughter', phonetic: '/ˌbaɪəˈlɒdʒɪkl ˈdɔːtə/', homophone: '拜欧劳吉科道特', meaning: '生女', sentence: 'My biological daughter is smart.', translation: '我的生女很聪明。', homophoneSentence: '麦拜欧劳吉科道特伊斯马特.' },
            { word: 'Step-sibling', phonetic: '/step ˈsɪblɪŋ/', homophone: '斯特普西布林', meaning: '继兄弟姐妹', sentence: 'My step-sibling is kind.', translation: '我的继兄弟姐妹很善良。', homophoneSentence: '麦斯特普西布林伊凯恩德.' },
            { word: 'Half-sibling', phonetic: '/hɑːf ˈsɪblɪŋ/', homophone: '哈夫西布林', meaning: '同父异母兄弟姐妹', sentence: 'My half-sibling is kind.', translation: '我的同父异母兄弟姐妹很善良。', homophoneSentence: '麦哈夫西布林伊凯恩德.' },
            { word: 'Adoptive parent', phonetic: '/əˈdɒptɪv ˈpeərənt/', homophone: '阿多普蒂夫佩伦特', meaning: '养父母', sentence: 'My adoptive parent is kind.', translation: '我的养父母很善良。', homophoneSentence: '麦阿多普蒂夫佩伦特伊凯恩德.' },
            { word: 'Foster parent', phonetic: '/ˈfɒstə ˈpeərənt/', homophone: '福斯特佩伦特', meaning: '养父母', sentence: 'My foster parent is kind.', translation: '我的养父母很善良。', homophoneSentence: '麦福斯特佩伦特伊凯恩德.' },
            { word: 'Godparent', phonetic: '/ˈɡɒdpeərənt/', homophone: '高德佩伦特', meaning: '教父母', sentence: 'My godparent is kind.', translation: '我的教父母很善良。', homophoneSentence: '麦高德佩伦特伊凯恩德.' },
            { word: 'Godfather', phonetic: '/ˈɡɒdfɑːðə/', homophone: '高德法泽', meaning: '教父', sentence: 'My godfather is kind.', translation: '我的教父很善良。', homophoneSentence: '麦高德法泽伊凯恩德.' },
            { word: 'Godmother', phonetic: '/ˈɡɒdmʌðə/', homophone: '高德玛泽', meaning: '教母', sentence: 'My godmother is kind.', translation: '我的教母很善良。', homophoneSentence: '麦高德玛泽伊凯恩德.' },
            { word: 'Great-grandparent', phonetic: '/ɡreɪt ˈɡrænpeərənt/', homophone: '格瑞特格兰佩伦特', meaning: '曾祖父母', sentence: 'My great-grandparent is old.', translation: '我的曾祖父母年纪大了。', homophoneSentence: '麦格瑞特格兰佩伦特伊欧德.' },
            { word: 'Great-great-grandparent', phonetic: '/ɡreɪt ɡreɪt ˈɡrænpeərənt/', homophone: '格瑞特格瑞特格兰佩伦特', meaning: '高曾祖父母', sentence: 'My great-great-grandparent is very old.', translation: '我的高曾祖父母非常老了。', homophoneSentence: '麦格瑞特格瑞特格兰佩伦特伊歪瑞欧德.' }
        ],
        time: [
            { word: 'Microsecond', phonetic: '/ˈmaɪkrəʊsekənd/', homophone: '麦克罗塞肯德', meaning: '微秒', sentence: 'A microsecond is very short.', translation: '微秒非常短。', homophoneSentence: '阿麦克罗塞肯德伊歪瑞肖特.' },
            { word: 'Nanosecond', phonetic: '/ˈnænəsekənd/', homophone: '南诺塞肯德', meaning: '纳秒', sentence: 'A nanosecond is extremely short.', translation: '纳秒极其短。', homophoneSentence: '阿南诺塞肯德伊伊克斯吹姆利肖特.' },
            { word: 'Picosecond', phonetic: '/ˈpaɪkəsekənd/', homophone: '皮克塞肯德', meaning: '皮秒', sentence: 'A picosecond is very very short.', translation: '皮秒非常非常短。', homophoneSentence: '阿皮克塞肯德伊歪瑞歪瑞肖特.' },
            { word: 'Minute hand', phonetic: '/ˈmɪnɪt hænd/', homophone: '米尼特汉德', meaning: '分针', sentence: 'The minute hand is long.', translation: '分针很长。', homophoneSentence: '泽米尼特汉德伊朗.' },
            { word: 'Hour hand', phonetic: '/aʊə hænd/', homophone: '奥阿汉德', meaning: '时针', sentence: 'The hour hand is short.', translation: '时针很短。', homophoneSentence: '泽奥阿汉德伊肖特.' },
            { word: 'Second hand', phonetic: '/ˈsekənd hænd/', homophone: '塞肯德汉德', meaning: '秒针', sentence: 'The second hand is thin.', translation: '秒针很细。', homophoneSentence: '泽塞肯德汉德伊森.' },
            { word: 'Clock', phonetic: '/klɒk/', homophone: '克洛科', meaning: '时钟', sentence: 'The clock is on the wall.', translation: '时钟在墙上。', homophoneSentence: '泽克洛科伊昂泽沃尔.' },
            { word: 'Watch', phonetic: '/wɒtʃ/', homophone: '沃奇', meaning: '手表', sentence: 'I wear a watch.', translation: '我戴手表。', homophoneSentence: '爱维尔阿沃奇.' },
            { word: 'Alarm clock', phonetic: '/əˈlɑːm klɒk/', homophone: '阿朗克洛科', meaning: '闹钟', sentence: 'The alarm clock is loud.', translation: '闹钟很响。', homophoneSentence: '泽阿朗克洛科伊劳德.' },
            { word: 'Stopwatch', phonetic: '/ˈstɒpwɒtʃ/', homophone: '斯托普沃奇', meaning: '秒表', sentence: 'I use a stopwatch.', translation: '我使用秒表。', homophoneSentence: '爱尤兹阿斯托普沃奇.' },
            { word: 'Timer', phonetic: '/ˈtaɪmə/', homophone: '泰默', meaning: '计时器', sentence: 'I set a timer.', translation: '我设置了计时器。', homophoneSentence: '爱塞特阿泰默.' },
            { word: 'Calendar', phonetic: '/ˈkælɪndə/', homophone: '凯林达', meaning: '日历', sentence: 'I check the calendar.', translation: '我查看日历。', homophoneSentence: '爱切克泽凯林达.' }
        ],
        food: [
            { word: 'Cherimoya', phonetic: '/ˌtʃerɪˈmɔɪə/', homophone: '切里莫亚', meaning: '释迦果', sentence: 'I love cherimoya.', translation: '我喜欢释迦果。', homophoneSentence: '爱拉乌切里莫亚.' },
            { word: 'Pitaya', phonetic: '/pɪˈtaɪə/', homophone: '皮塔亚', meaning: '火龙果', sentence: 'I love pitaya.', translation: '我喜欢火龙果。', homophoneSentence: '爱拉乌皮塔亚.' },
            { word: 'Durian', phonetic: '/ˈdʊəriən/', homophone: '榴莲', meaning: '榴莲', sentence: 'I love durian.', translation: '我喜欢榴莲。', homophoneSentence: '爱拉乌榴莲.' },
            { word: 'Mangosteen', phonetic: '/ˈmæŋɡəstiːn/', homophone: '芒果steen', meaning: '山竹', sentence: 'I love mangosteen.', translation: '我喜欢山竹。', homophoneSentence: '爱拉乌芒果steen.' },
            { word: 'Lychee', phonetic: '/ˈlaɪtʃiː/', homophone: '荔枝', meaning: '荔枝', sentence: 'I love lychee.', translation: '我喜欢荔枝。', homophoneSentence: '爱拉乌荔枝.' },
            { word: 'Longan', phonetic: '/ˈlɒŋɡən/', homophone: '龙眼', meaning: '龙眼', sentence: 'I love longan.', translation: '我喜欢龙眼。', homophoneSentence: '爱拉乌龙眼.' },
            { word: 'Rambutan', phonetic: '/ræmˈbuːtən/', homophone: '红毛丹', meaning: '红毛丹', sentence: 'I love rambutan.', translation: '我喜欢红毛丹。', homophoneSentence: '爱拉乌红毛丹.' },
            { word: 'Guava', phonetic: '/ˈɡwɑːvə/', homophone: '番石榴', meaning: '番石榴', sentence: 'I love guava.', translation: '我喜欢番石榴。', homophoneSentence: '爱拉乌番石榴.' },
            { word: 'Passion fruit', phonetic: '/ˈpæʃn fruːt/', homophone: '百香果', meaning: '百香果', sentence: 'I love passion fruit.', translation: '我喜欢百香果。', homophoneSentence: '爱拉乌百香果.' },
            { word: 'Kiwi fruit', phonetic: '/ˈkiːwiː fruːt/', homophone: '猕猴桃', meaning: '猕猴桃', sentence: 'I love kiwi fruit.', translation: '我喜欢猕猴桃。', homophoneSentence: '爱拉乌猕猴桃.' },
            { word: 'Star fruit', phonetic: '/stɑː fruːt/', homophone: '杨桃', meaning: '杨桃', sentence: 'I love star fruit.', translation: '我喜欢杨桃。', homophoneSentence: '爱拉乌杨桃.' },
            { word: 'Persimmon', phonetic: '/pəˈsɪmən/', homophone: '柿子', meaning: '柿子', sentence: 'I love persimmon.', translation: '我喜欢柿子。', homophoneSentence: '爱拉乌柿子.' }
        ],
        conversations: [
            { word: 'What are you doing', phonetic: '/wɒt ɑː juː ˈduːɪŋ/', homophone: '沃茨阿油杜英', meaning: '你在做什么', sentence: 'What are you doing?', translation: '你在做什么？', homophoneSentence: '沃茨阿油杜英?' },
            { word: 'Im doing', phonetic: '/aɪm ˈduːɪŋ/', homophone: '爱姆杜英', meaning: '我在做', sentence: 'Im doing homework.', translation: '我在做作业。', homophoneSentence: '爱姆杜英霍姆沃克.' },
            { word: 'How was your day', phonetic: '/haʊ wɒz jɔː deɪ/', homophone: '好沃兹哟戴', meaning: '你今天过得怎么样', sentence: 'How was your day?', translation: '你今天过得怎么样？', homophoneSentence: '好沃兹哟戴?' },
            { word: 'It was good', phonetic: '/ɪt wɒz ɡʊd/', homophone: '伊特沃兹古德', meaning: '很好', sentence: 'It was good!', translation: '很好！', homophoneSentence: '伊特沃兹古德!' },
            { word: 'What did you do today', phonetic: '/wɒt dɪd juː duː təˈdeɪ/', homophone: '沃茨迪德油杜特德', meaning: '你今天做了什么', sentence: 'What did you do today?', translation: '你今天做了什么？', homophoneSentence: '沃茨迪德油杜特德?' },
            { word: 'I did', phonetic: '/aɪ dɪd/', homophone: '爱迪德', meaning: '我做了', sentence: 'I did homework.', translation: '我做了作业。', homophoneSentence: '爱迪德霍姆沃克.' },
            { word: 'Where are you going', phonetic: '/weə ɑː juː ˈɡəʊɪŋ/', homophone: '维尔阿油够英', meaning: '你要去哪里', sentence: 'Where are you going?', translation: '你要去哪里？', homophoneSentence: '维尔阿油够英?' },
            { word: 'Im going to', phonetic: '/aɪm ˈɡəʊɪŋ tuː/', homophone: '爱姆够英图', meaning: '我要去', sentence: 'Im going to school.', translation: '我要去上学。', homophoneSentence: '爱姆够英图斯库.' },
            { word: 'When will you be back', phonetic: '/wen wɪl juː biː bæk/', homophone: '温威尔油比贝克', meaning: '你什么时候回来', sentence: 'When will you be back?', translation: '你什么时候回来？', homophoneSentence: '温威尔油比贝克?' },
            { word: 'I will be back', phonetic: '/aɪ wɪl biː bæk/', homophone: '爱威尔比贝克', meaning: '我会回来', sentence: 'I will be back soon.', translation: '我很快会回来。', homophoneSentence: '爱威尔比贝克苏恩.' },
            { word: 'Do you need help', phonetic: '/duː juː niːd help/', homophone: '杜油尼德海尔普', meaning: '你需要帮助吗', sentence: 'Do you need help?', translation: '你需要帮助吗？', homophoneSentence: '杜油尼德海尔普?' },
            { word: 'Yes I need help', phonetic: '/jes aɪ niːd help/', homophone: '耶斯爱尼德海尔普', meaning: '是的，我需要帮助', sentence: 'Yes I need help!', translation: '是的，我需要帮助！', homophoneSentence: '耶斯爱尼德海尔普!' }
        ],
        sentences: [
            { word: 'I am proud of you', phonetic: '/aɪ æm praʊd əv juː/', homophone: '爱阿姆普劳德阿乌油', meaning: '我为你感到骄傲', sentence: 'I am proud of you!', translation: '我为你感到骄傲！', homophoneSentence: '爱阿姆普劳德阿乌油!' },
            { word: 'I am ashamed of you', phonetic: '/aɪ æm əˈʃeɪmd əv juː/', homophone: '爱阿姆阿舍姆德阿乌油', meaning: '我为你感到羞耻', sentence: 'I am ashamed of you!', translation: '我为你感到羞耻！', homophoneSentence: '爱阿姆阿舍姆德阿乌油!' },
            { word: 'I am jealous of you', phonetic: '/aɪ æm ˈdʒeləs əv juː/', homophone: '爱阿姆杰勒斯阿乌油', meaning: '我嫉妒你', sentence: 'I am jealous of you!', translation: '我嫉妒你！', homophoneSentence: '爱阿姆杰勒斯阿乌油!' },
            { word: 'I am envious of you', phonetic: '/aɪ æm ˈenviəs əv juː/', homophone: '爱阿姆恩维阿乌油', meaning: '我羡慕你', sentence: 'I am envious of you!', translation: '我羡慕你！', homophoneSentence: '爱阿姆恩维阿乌油!' },
            { word: 'I am afraid of you', phonetic: '/aɪ æm əˈfreɪd əv juː/', homophone: '爱阿姆阿弗雷德阿乌油', meaning: '我害怕你', sentence: 'I am afraid of you!', translation: '我害怕你！', homophoneSentence: '爱阿姆阿弗雷德阿乌油!' },
            { word: 'I am scared of you', phonetic: '/aɪ æm skeəd əv juː/', homophone: '爱阿姆斯凯德阿乌油', meaning: '我害怕你', sentence: 'I am scared of you!', translation: '我害怕你！', homophoneSentence: '爱阿姆斯凯德阿乌油!' },
            { word: 'I am tired of you', phonetic: '/aɪ æm ˈtaɪəd əv juː/', homophone: '爱阿姆泰尔德阿乌油', meaning: '我厌倦你', sentence: 'I am tired of you!', translation: '我厌倦你！', homophoneSentence: '爱阿姆泰尔德阿乌油!' },
            { word: 'I am sick of you', phonetic: '/aɪ æm sɪk əv juː/', homophone: '爱阿姆西克阿乌油', meaning: '我讨厌你', sentence: 'I am sick of you!', translation: '我讨厌你！', homophoneSentence: '爱阿姆西克阿乌油!' },
            { word: 'I am fond of you', phonetic: '/aɪ æm fɒnd əv juː/', homophone: '爱阿姆方德阿乌油', meaning: '我喜欢你', sentence: 'I am fond of you!', translation: '我喜欢你！', homophoneSentence: '爱阿姆方德阿乌油!' },
            { word: 'I am crazy about you', phonetic: '/aɪ æm ˈkreɪzi əˈbaʊt juː/', homophone: '爱阿姆克雷齐阿鲍特油', meaning: '我为你疯狂', sentence: 'I am crazy about you!', translation: '我为你疯狂！', homophoneSentence: '爱阿姆克雷齐阿鲍特油!' },
            { word: 'I am obsessed with you', phonetic: '/aɪ æm əbˈsesd wɪð juː/', homophone: '爱阿姆阿博塞斯德威兹油', meaning: '我迷恋你', sentence: 'I am obsessed with you!', translation: '我迷恋你！', homophoneSentence: '爱阿姆阿博塞斯德威兹油!' },
            { word: 'I am in love with you', phonetic: '/aɪ æm ɪn lʌv wɪð juː/', homophone: '爱阿姆因拉乌威兹油', meaning: '我爱上你了', sentence: 'I am in love with you!', translation: '我爱上你了！', homophoneSentence: '爱阿姆因拉乌威兹油!' }
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