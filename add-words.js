const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 修复单引号问题
    let fixedData = data.replace(/word: '([^']*')([^']*)'/g, "word: '$1$2'");
    
    // 直接读取和解析数据
    const wordDatabase = {
        greetings: [],
        emotions: [],
        numbers: [],
        colors: [],
        family: [],
        time: [],
        food: [],
        conversations: [],
        sentences: []
    };
    
    // 收集所有现有单词
    const allWords = new Set();
    
    // 新单词数据
    const newWords = {
        greetings: [
            { word: 'Good to see you', phonetic: '/ɡʊd tuː siː juː/', homophone: '古德图西油', meaning: '很高兴见到你', sentence: 'Good to see you!', translation: '很高兴见到你！', homophoneSentence: '古德图西油!' },
            { word: 'How have you been', phonetic: '/haʊ hæv juː biːn/', homophone: '好海夫油比恩', meaning: '你最近怎么样', sentence: 'How have you been?', translation: '你最近怎么样？', homophoneSentence: '好海夫油比恩?' },
            { word: 'Long time no see', phonetic: '/lɒŋ taɪm nəʊ siː/', homophone: '朗泰姆诺西', meaning: '好久不见', sentence: 'Long time no see!', translation: '好久不见！', homophoneSentence: '朗泰姆诺西!' },
            { word: 'Whats new', phonetic: '/wɒts njuː/', homophone: '沃茨纽', meaning: '有什么新鲜事', sentence: 'Whats new?', translation: '有什么新鲜事？', homophoneSentence: '沃茨纽?' },
            { word: 'Nice to meet you', phonetic: '/naɪs tuː miːt juː/', homophone: '奈斯图米特油', meaning: '很高兴认识你', sentence: 'Nice to meet you!', translation: '很高兴认识你！', homophoneSentence: '奈斯图米特油!' },
            { word: 'Pleased to meet you', phonetic: '/pliːzd tuː miːt juː/', homophone: '普利兹图米特油', meaning: '很高兴认识你', sentence: 'Pleased to meet you!', translation: '很高兴认识你！', homophoneSentence: '普利兹图米特油!' },
            { word: 'How are you doing', phonetic: '/haʊ ɑː juː ˈduːɪŋ/', homophone: '好阿油杜英', meaning: '你好吗', sentence: 'How are you doing?', translation: '你好吗？', homophoneSentence: '好阿油杜英?' },
            { word: 'Whats up', phonetic: '/wɒts ʌp/', homophone: '沃茨阿普', meaning: '怎么了', sentence: 'Whats up?', translation: '怎么了？', homophoneSentence: '沃茨阿普?' },
            { word: 'Hey there', phonetic: '/heɪ ðeə/', homophone: '嘿泽尔', meaning: '嘿，你好', sentence: 'Hey there!', translation: '嘿，你好！', homophoneSentence: '嘿泽尔!' },
            { word: 'Hi everyone', phonetic: '/haɪ ˈevriwʌn/', homophone: '嗨艾夫瑞万', meaning: '大家好', sentence: 'Hi everyone!', translation: '大家好！', homophoneSentence: '嗨艾夫瑞万!' },
            { word: 'Good morning everyone', phonetic: '/ɡʊd ˈmɔːnɪŋ ˈevriwʌn/', homophone: '古德莫宁艾夫瑞万', meaning: '大家早上好', sentence: 'Good morning everyone!', translation: '大家早上好！', homophoneSentence: '古德莫宁艾夫瑞万!' },
            { word: 'Good afternoon everyone', phonetic: '/ɡʊd ˌɑːftəˈnuːn ˈevriwʌn/', homophone: '古德阿夫特努恩艾夫瑞万', meaning: '大家下午好', sentence: 'Good afternoon everyone!', translation: '大家下午好！', homophoneSentence: '古德阿夫特努恩艾夫瑞万!' },
            { word: 'Good evening everyone', phonetic: '/ɡʊd ˈiːvnɪŋ ˈevriwʌn/', homophone: '古德伊夫宁艾夫瑞万', meaning: '大家晚上好', sentence: 'Good evening everyone!', translation: '大家晚上好！', homophoneSentence: '古德伊夫宁艾夫瑞万!' },
            { word: 'Welcome back', phonetic: '/ˈwelkəm bæk/', homophone: '威尔康拜克', meaning: '欢迎回来', sentence: 'Welcome back!', translation: '欢迎回来！', homophoneSentence: '威尔康拜克!' },
            { word: 'Welcome to our home', phonetic: '/ˈwelkəm tuː ˈaʊə həʊm/', homophone: '威尔康图奥阿霍姆', meaning: '欢迎来到我们家', sentence: 'Welcome to our home!', translation: '欢迎来到我们家！', homophoneSentence: '威尔康图奥阿霍姆!' },
            { word: 'Welcome to our store', phonetic: '/ˈwelkəm tuː ˈaʊə stɔː/', homophone: '威尔康图奥阿斯托', meaning: '欢迎来到我们商店', sentence: 'Welcome to our store!', translation: '欢迎来到我们商店！', homophoneSentence: '威尔康图奥阿斯托!' },
            { word: 'Welcome to our city', phonetic: '/ˈwelkəm tuː ˈaʊə ˈsɪti/', homophone: '威尔康图奥阿西蒂', meaning: '欢迎来到我们城市', sentence: 'Welcome to our city!', translation: '欢迎来到我们城市！', homophoneSentence: '威尔康图奥阿西蒂!' },
            { word: 'Welcome to our country', phonetic: '/ˈwelkəm tuː ˈaʊə ˈkʌntri/', homophone: '威尔康图奥阿康垂', meaning: '欢迎来到我们国家', sentence: 'Welcome to our country!', translation: '欢迎来到我们国家！', homophoneSentence: '威尔康图奥阿康垂!' },
            { word: 'Welcome to our school', phonetic: '/ˈwelkəm tuː ˈaʊə skuːl/', homophone: '威尔康图奥阿斯库尔', meaning: '欢迎来到我们学校', sentence: 'Welcome to our school!', translation: '欢迎来到我们学校！', homophoneSentence: '威尔康图奥阿斯库尔!' },
            { word: 'Welcome to our company', phonetic: '/ˈwelkəm tuː ˈaʊə ˈkʌmpəni/', homophone: '威尔康图奥阿康帕尼', meaning: '欢迎来到我们公司', sentence: 'Welcome to our company!', translation: '欢迎来到我们公司！', homophoneSentence: '威尔康图奥阿康帕尼!' },
            { word: 'Welcome to our team', phonetic: '/ˈwelkəm tuː ˈaʊə tiːm/', homophone: '威尔康图奥阿蒂姆', meaning: '欢迎加入我们团队', sentence: 'Welcome to our team!', translation: '欢迎加入我们团队！', homophoneSentence: '威尔康图奥阿蒂姆!' },
            { word: 'Welcome to our family', phonetic: '/ˈwelkəm tuː ˈaʊə ˈfæməli/', homophone: '威尔康图奥阿法梅里', meaning: '欢迎加入我们家庭', sentence: 'Welcome to our family!', translation: '欢迎加入我们家庭！', homophoneSentence: '威尔康图奥阿法梅里!' }
        ],
        emotions: [
            { word: 'Ecstatic', phonetic: '/ɪkˈstætɪk/', homophone: '伊克斯塔蒂克', meaning: '狂喜的', sentence: 'Im ecstatic!', translation: '我狂喜！', homophoneSentence: '爱姆伊克斯塔蒂克!' },
            { word: 'Overjoyed', phonetic: '/ˌəʊvəˈdʒɔɪd/', homophone: '欧弗乔伊德', meaning: '欣喜若狂的', sentence: 'She was overjoyed.', translation: '她欣喜若狂。', homophoneSentence: '西沃欧弗乔伊德.' },
            { word: 'Thrilled', phonetic: '/θrɪld/', homophone: '斯瑞尔德', meaning: '非常兴奋的', sentence: 'Im thrilled!', translation: '我非常兴奋！', homophoneSentence: '爱姆斯瑞尔德!' },
            { word: 'Delighted', phonetic: '/dɪˈlaɪtɪd/', homophone: '迪莱特德', meaning: '高兴的', sentence: 'Im delighted!', translation: '我很高兴！', homophoneSentence: '爱姆迪莱特德!' },
            { word: 'Elated', phonetic: '/ɪˈleɪtɪd/', homophone: '伊莱蒂德', meaning: '兴高采烈的', sentence: 'He was elated.', translation: '他兴高采烈。', homophoneSentence: '黑沃伊莱蒂德.' },
            { word: 'Grateful', phonetic: '/ˈɡreɪtfʊl/', homophone: '格瑞特弗欧', meaning: '感激的', sentence: 'Im grateful.', translation: '我很感激。', homophoneSentence: '爱姆格瑞特弗欧.' },
            { word: 'Appreciative', phonetic: '/əˈpriːʃətɪv/', homophone: '阿普瑞舍蒂夫', meaning: '感激的', sentence: 'She is appreciative.', translation: '她很感激。', homophoneSentence: '西伊阿普瑞舍蒂夫.' },
            { word: 'Thankful', phonetic: '/ˈθæŋkfʊl/', homophone: '桑克弗欧', meaning: '感谢的', sentence: 'Im thankful.', translation: '我很感谢。', homophoneSentence: '爱姆桑克弗欧.' },
            { word: 'Content', phonetic: '/kənˈtent/', homophone: '康滕特', meaning: '满足的', sentence: 'Im content.', translation: '我很满足。', homophoneSentence: '爱姆康滕特.' },
            { word: 'Satisfied', phonetic: '/ˈsætɪsfaɪd/', homophone: '萨特isfai德', meaning: '满意的', sentence: 'Im satisfied.', translation: '我很满意。', homophoneSentence: '爱姆萨特isfai德.' },
            { word: 'Relaxed', phonetic: '/rɪˈlækst/', homophone: '瑞莱克斯德', meaning: '放松的', sentence: 'I feel relaxed.', translation: '我感到放松。', homophoneSentence: '爱菲尔瑞莱克斯德.' },
            { word: 'Calm', phonetic: '/kɑːm/', homophone: '卡姆', meaning: '平静的', sentence: 'I feel calm.', translation: '我感到平静。', homophoneSentence: '爱菲尔卡姆.' },
            { word: 'Peaceful', phonetic: '/ˈpiːsfl/', homophone: '皮斯夫欧', meaning: '和平的', sentence: 'The place is peaceful.', translation: '这个地方很和平。', homophoneSentence: '泽普雷斯伊皮斯夫欧.' },
            { word: 'Serene', phonetic: '/səˈriːn/', homophone: '瑟瑞恩', meaning: '宁静的', sentence: 'The lake is serene.', translation: '湖水很宁静。', homophoneSentence: '泽莱克伊瑟瑞恩.' },
            { word: 'Tranquil', phonetic: '/ˈtræŋkwɪl/', homophone: '川奎尔', meaning: '宁静的', sentence: 'The garden is tranquil.', translation: '花园很宁静。', homophoneSentence: '泽加登伊川奎尔.' },
            { word: 'Comfortable', phonetic: '/ˈkʌmftəbl/', homophone: '康福特波', meaning: '舒适的', sentence: 'I feel comfortable.', translation: '我感到舒适。', homophoneSentence: '爱菲尔康福特波.' },
            { word: 'Cozy', phonetic: '/ˈkəʊzi/', homophone: '扣齐', meaning: '舒适的', sentence: 'The room is cozy.', translation: '房间很舒适。', homophoneSentence: '泽如姆伊扣齐.' },
            { word: 'Warm', phonetic: '/wɔːm/', homophone: '沃姆', meaning: '温暖的', sentence: 'I feel warm.', translation: '我感到温暖。', homophoneSentence: '爱菲尔沃姆.' },
            { word: 'Fuzzy', phonetic: '/ˈfʌzi/', homophone: '法齐', meaning: '模糊的', sentence: 'My head feels fuzzy.', translation: '我的头感觉模糊。', homophoneSentence: '麦海德菲尔法齐.' },
            { word: 'Mellow', phonetic: '/ˈmeləʊ/', homophone: '梅洛', meaning: '柔和的', sentence: 'The music is mellow.', translation: '音乐很柔和。', homophoneSentence: '泽谬齐伊梅洛.' },
            { word: 'Gentle', phonetic: '/ˈdʒentl/', homophone: '詹特尔', meaning: '温和的', sentence: 'He has a gentle voice.', translation: '他有温和的声音。', homophoneSentence: '黑海兹啊詹特尔沃伊思.' },
            { word: 'Kind', phonetic: '/kaɪnd/', homophone: '凯恩德', meaning: '善良的', sentence: 'She is kind.', translation: '她很善良。', homophoneSentence: '西伊凯恩德.' }
        ],
        numbers: [
            { word: 'One hundred', phonetic: '/wʌn ˈhʌndrəd/', homophone: '万汉德瑞德', meaning: '一百', sentence: 'One hundred dollars.', translation: '一百美元。', homophoneSentence: '万汉德瑞德道乐兹.' },
            { word: 'Two hundred', phonetic: '/tuː ˈhʌndrəd/', homophone: '图汉德瑞德', meaning: '二百', sentence: 'Two hundred dollars.', translation: '二百美元。', homophoneSentence: '图汉德瑞德道乐兹.' },
            { word: 'Three hundred', phonetic: '/θriː ˈhʌndrəd/', homophone: '斯瑞汉德瑞德', meaning: '三百', sentence: 'Three hundred dollars.', translation: '三百美元。', homophoneSentence: '斯瑞汉德瑞德道乐兹.' },
            { word: 'Four hundred', phonetic: '/fɔː ˈhʌndrəd/', homophone: '佛汉德瑞德', meaning: '四百', sentence: 'Four hundred dollars.', translation: '四百美元。', homophoneSentence: '佛汉德瑞德道乐兹.' },
            { word: 'Five hundred', phonetic: '/faɪv ˈhʌndrəd/', homophone: '法艾夫汉德瑞德', meaning: '五百', sentence: 'Five hundred dollars.', translation: '五百美元。', homophoneSentence: '法艾夫汉德瑞德道乐兹.' },
            { word: 'Six hundred', phonetic: '/sɪks ˈhʌndrəd/', homophone: '西克斯汉德瑞德', meaning: '六百', sentence: 'Six hundred dollars.', translation: '六百美元。', homophoneSentence: '西克斯汉德瑞德道乐兹.' },
            { word: 'Seven hundred', phonetic: '/ˈsevn ˈhʌndrəd/', homophone: '赛文汉德瑞德', meaning: '七百', sentence: 'Seven hundred dollars.', translation: '七百美元。', homophoneSentence: '赛文汉德瑞德道乐兹.' },
            { word: 'Eight hundred', phonetic: '/eɪt ˈhʌndrəd/', homophone: '艾特汉德瑞德', meaning: '八百', sentence: 'Eight hundred dollars.', translation: '八百美元。', homophoneSentence: '艾特汉德瑞德道乐兹.' },
            { word: 'Nine hundred', phonetic: '/naɪn ˈhʌndrəd/', homophone: '奈恩汉德瑞德', meaning: '九百', sentence: 'Nine hundred dollars.', translation: '九百美元。', homophoneSentence: '奈恩汉德瑞德道乐兹.' },
            { word: 'One thousand', phonetic: '/wʌn ˈθaʊznd/', homophone: '万萨赞德', meaning: '一千', sentence: 'One thousand dollars.', translation: '一千美元。', homophoneSentence: '万萨赞德道乐兹.' },
            { word: 'Two thousand', phonetic: '/tuː ˈθaʊznd/', homophone: '图萨赞德', meaning: '二千', sentence: 'Two thousand dollars.', translation: '二千美元。', homophoneSentence: '图萨赞德道乐兹.' },
            { word: 'Three thousand', phonetic: '/θriː ˈθaʊznd/', homophone: '斯瑞萨赞德', meaning: '三千', sentence: 'Three thousand dollars.', translation: '三千美元。', homophoneSentence: '斯瑞萨赞德道乐兹.' },
            { word: 'Four thousand', phonetic: '/fɔː ˈθaʊznd/', homophone: '佛萨赞德', meaning: '四千', sentence: 'Four thousand dollars.', translation: '四千美元。', homophoneSentence: '佛萨赞德道乐兹.' },
            { word: 'Five thousand', phonetic: '/faɪv ˈθaʊznd/', homophone: '法艾夫萨赞德', meaning: '五千', sentence: 'Five thousand dollars.', translation: '五千美元。', homophoneSentence: '法艾夫萨赞德道乐兹.' },
            { word: 'Six thousand', phonetic: '/sɪks ˈθaʊznd/', homophone: '西克斯萨赞德', meaning: '六千', sentence: 'Six thousand dollars.', translation: '六千美元。', homophoneSentence: '西克斯萨赞德道乐兹.' },
            { word: 'Seven thousand', phonetic: '/ˈsevn ˈθaʊznd/', homophone: '赛文萨赞德', meaning: '七千', sentence: 'Seven thousand dollars.', translation: '七千美元。', homophoneSentence: '赛文萨赞德道乐兹.' },
            { word: 'Eight thousand', phonetic: '/eɪt ˈθaʊznd/', homophone: '艾特萨赞德', meaning: '八千', sentence: 'Eight thousand dollars.', translation: '八千美元。', homophoneSentence: '艾特萨赞德道乐兹.' },
            { word: 'Nine thousand', phonetic: '/naɪn ˈθaʊznd/', homophone: '奈恩萨赞德', meaning: '九千', sentence: 'Nine thousand dollars.', translation: '九千美元。', homophoneSentence: '奈恩萨赞德道乐兹.' },
            { word: 'Ten thousand', phonetic: '/ten ˈθaʊznd/', homophone: '坦萨赞德', meaning: '一万', sentence: 'Ten thousand dollars.', translation: '一万美元。', homophoneSentence: '坦萨赞德道乐兹.' },
            { word: 'Hundred thousand', phonetic: '/ˈhʌndrəd ˈθaʊznd/', homophone: '汉德瑞德萨赞德', meaning: '十万', sentence: 'Hundred thousand dollars.', translation: '十万美元。', homophoneSentence: '汉德瑞德萨赞德道乐兹.' },
            { word: 'One million', phonetic: '/wʌn ˈmɪljən/', homophone: '万米尔金', meaning: '一百万', sentence: 'One million dollars.', translation: '一百万美元。', homophoneSentence: '万米尔金道乐兹.' },
            { word: 'Two million', phonetic: '/tuː ˈmɪljən/', homophone: '图米尔金', meaning: '二百万', sentence: 'Two million dollars.', translation: '二百万美元。', homophoneSentence: '图米尔金道乐兹.' }
        ],
        colors: [
            { word: 'Scarlet', phonetic: '/ˈskɑːlət/', homophone: '斯卡莱特', meaning: '猩红色', sentence: 'Scarlet dress.', translation: '猩红色连衣裙。', homophoneSentence: '斯卡莱特德雷斯.' },
            { word: 'Crimson', phonetic: '/ˈkrɪmzn/', homophone: '克里姆森', meaning: '深红色', sentence: 'Crimson rose.', translation: '深红色玫瑰。', homophoneSentence: '克里姆森柔斯.' },
            { word: 'Maroon', phonetic: '/məˈruːn/', homophone: '马鲁恩', meaning: '栗色', sentence: 'Maroon jacket.', translation: '栗色夹克。', homophoneSentence: '马鲁恩杰基特.' },
            { word: 'Burgundy', phonetic: '/ˈbɜːɡəndi/', homophone: '伯格undy', meaning: '酒红色', sentence: 'Burgundy wine.', translation: '酒红色葡萄酒。', homophoneSentence: '伯格undy外恩.' },
            { word: 'Cherry', phonetic: '/ˈtʃeri/', homophone: '彻瑞', meaning: '樱桃红', sentence: 'Cherry lipstick.', translation: '樱桃红口红。', homophoneSentence: '彻瑞利普斯迪克.' },
            { word: 'Coral', phonetic: '/ˈkɒrəl/', homophone: '科拉尔', meaning: '珊瑚红', sentence: 'Coral dress.', translation: '珊瑚红连衣裙。', homophoneSentence: '科拉尔德雷斯.' },
            { word: 'Salmon', phonetic: '/ˈsæmən/', homophone: '萨蒙', meaning: '三文鱼色', sentence: 'Salmon shirt.', translation: '三文鱼色衬衫。', homophoneSentence: '萨蒙舍尔特.' },
            { word: 'Peach', phonetic: '/piːtʃ/', homophone: '皮奇', meaning: '桃色', sentence: 'Peach dress.', translation: '桃色连衣裙。', homophoneSentence: '皮奇德雷斯.' },
            { word: 'Apricot', phonetic: '/ˈeɪprɪkɒt/', homophone: '艾普瑞考特', meaning: '杏色', sentence: 'Apricot dress.', translation: '杏色连衣裙。', homophoneSentence: '艾普瑞考特德雷斯.' },
            { word: 'Tangerine', phonetic: '/ˌtændʒəˈriːn/', homophone: '坦杰瑞恩', meaning: '橘色', sentence: 'Tangerine dress.', translation: '橘色连衣裙。', homophoneSentence: '坦杰瑞恩德雷斯.' },
            { word: 'Mustard', phonetic: '/ˈmʌstəd/', homophone: '马斯特德', meaning: '芥末黄', sentence: 'Mustard jacket.', translation: '芥末黄夹克。', homophoneSentence: '马斯特德杰基特.' },
            { word: 'Saffron', phonetic: '/ˈsæfrən/', homophone: '萨弗伦', meaning: '藏黄色', sentence: 'Saffron dress.', translation: '藏黄色连衣裙。', homophoneSentence: '萨弗伦德雷斯.' },
            { word: 'Lime', phonetic: '/laɪm/', homophone: '莱姆', meaning: '酸橙绿', sentence: 'Lime dress.', translation: '酸橙绿连衣裙。', homophoneSentence: '莱姆德雷斯.' },
            { word: 'Mint', phonetic: '/mɪnt/', homophone: '明特', meaning: '薄荷绿', sentence: 'Mint dress.', translation: '薄荷绿连衣裙。', homophoneSentence: '明特德雷斯.' },
            { word: 'Teal', phonetic: '/tiːl/', homophone: '蒂尔', meaning: '蓝绿色', sentence: 'Teal dress.', translation: '蓝绿色连衣裙。', homophoneSentence: '蒂尔德雷斯.' },
            { word: 'Cyan', phonetic: '/ˈsaɪən/', homophone: '赛安', meaning: '青色', sentence: 'Cyan dress.', translation: '青色连衣裙。', homophoneSentence: '赛安德雷斯.' },
            { word: 'Azure', phonetic: '/ˈæʒə/', homophone: '阿热', meaning: '天蓝色', sentence: 'Azure sky.', translation: '天蓝色天空。', homophoneSentence: '阿热斯凯.' },
            { word: 'Sapphire', phonetic: '/ˈsæfaɪə/', homophone: '萨法伊尔', meaning: '宝蓝色', sentence: 'Sapphire dress.', translation: '宝蓝色连衣裙。', homophoneSentence: '萨法伊尔德雷斯.' },
            { word: 'Indigo', phonetic: '/ˈɪndɪɡəʊ/', homophone: '因迪戈', meaning: '靛蓝色', sentence: 'Indigo dress.', translation: '靛蓝色连衣裙。', homophoneSentence: '因迪戈德雷斯.' },
            { word: 'Violet', phonetic: '/ˈvaɪələt/', homophone: '瓦伊莱特', meaning: '紫罗兰色', sentence: 'Violet dress.', translation: '紫罗兰色连衣裙。', homophoneSentence: '瓦伊莱特约德雷斯.' },
            { word: 'Plum', phonetic: '/plʌm/', homophone: '普拉姆', meaning: '李子色', sentence: 'Plum dress.', translation: '李子色连衣裙。', homophoneSentence: '普拉姆德雷斯.' },
            { word: 'Magenta', phonetic: '/məˈdʒentə/', homophone: '马金塔', meaning: '洋红色', sentence: 'Magenta dress.', translation: '洋红色连衣裙。', homophoneSentence: '马金塔德雷斯.' }
        ],
        family: [
            { word: 'Grandfather', phonetic: '/ˈɡrænfɑːðə/', homophone: '格兰法泽', meaning: '祖父', sentence: 'My grandfather is old.', translation: '我的祖父年纪大了。', homophoneSentence: '麦格兰法泽伊欧德.' },
            { word: 'Grandmother', phonetic: '/ˈɡrænmʌðə/', homophone: '格兰玛泽', meaning: '祖母', sentence: 'My grandmother is kind.', translation: '我的祖母很善良。', homophoneSentence: '麦格兰玛泽伊凯恩德.' },
            { word: 'Grandson', phonetic: '/ˈɡrænsʌn/', homophone: '格兰森', meaning: '孙子', sentence: 'My grandson is cute.', translation: '我的孙子很可爱。', homophoneSentence: '麦格兰森伊丘特.' },
            { word: 'Granddaughter', phonetic: '/ˈɡrændɔːtə/', homophone: '格兰道特', meaning: '孙女', sentence: 'My granddaughter is smart.', translation: '我的孙女很聪明。', homophoneSentence: '麦格兰道特伊斯马特.' },
            { word: 'Uncle', phonetic: '/ˈʌŋkl/', homophone: '昂克尔', meaning: '叔叔', sentence: 'My uncle is tall.', translation: '我的叔叔很高。', homophoneSentence: '麦昂克尔伊托尔.' },
            { word: 'Aunt', phonetic: '/ɑːnt/', homophone: '昂特', meaning: '阿姨', sentence: 'My aunt is pretty.', translation: '我的阿姨很漂亮。', homophoneSentence: '麦昂特伊普里蒂.' },
            { word: 'Cousin', phonetic: '/ˈkʌzn/', homophone: '卡森', meaning: '表兄弟', sentence: 'My cousin is my age.', translation: '我的表兄弟和我同龄。', homophoneSentence: '麦卡森伊麦艾吉.' },
            { word: 'Nephew', phonetic: '/ˈnefjuː/', homophone: '内夫尤', meaning: '侄子', sentence: 'My nephew is naughty.', translation: '我的侄子很调皮。', homophoneSentence: '麦内夫尤伊诺蒂.' },
            { word: 'Niece', phonetic: '/niːs/', homophone: '尼斯', meaning: '侄女', sentence: 'My niece is sweet.', translation: '我的侄女很可爱。', homophoneSentence: '麦尼斯伊斯威特.' },
            { word: 'Father-in-law', phonetic: '/ˈfɑːðər ɪn lɔː/', homophone: '法泽因劳', meaning: '岳父', sentence: 'My father-in-law is nice.', translation: '我的岳父很好。', homophoneSentence: '麦法泽因劳伊奈斯.' },
            { word: 'Mother-in-law', phonetic: '/ˈmʌðər ɪn lɔː/', homophone: '玛泽因劳', meaning: '岳母', sentence: 'My mother-in-law is kind.', translation: '我的岳母很善良。', homophoneSentence: '麦玛泽因劳伊凯恩德.' },
            { word: 'Brother-in-law', phonetic: '/ˈbrʌðər ɪn lɔː/', homophone: '布拉泽因劳', meaning: '姐夫', sentence: 'My brother-in-law is tall.', translation: '我的姐夫很高。', homophoneSentence: '麦布拉泽因劳伊托尔.' },
            { word: 'Sister-in-law', phonetic: '/ˈsɪstər ɪn lɔː/', homophone: '西斯泽因劳', meaning: '嫂子', sentence: 'My sister-in-law is pretty.', translation: '我的嫂子很漂亮。', homophoneSentence: '麦西斯泽因劳伊普里蒂.' },
            { word: 'Son-in-law', phonetic: '/ˈsʌn ɪn lɔː/', homophone: '森因劳', meaning: '女婿', sentence: 'My son-in-law is smart.', translation: '我的女婿很聪明。', homophoneSentence: '麦森因劳伊斯马特.' },
            { word: 'Daughter-in-law', phonetic: '/ˈdɔːtər ɪn lɔː/', homophone: '道特因劳', meaning: '儿媳', sentence: 'My daughter-in-law is kind.', translation: '我的儿媳很善良。', homophoneSentence: '麦道特因劳伊凯恩德.' },
            { word: 'Stepfather', phonetic: '/ˈstepfɑːðə/', homophone: '斯特普法泽', meaning: '继父', sentence: 'My stepfather is nice.', translation: '我的继父很好。', homophoneSentence: '麦斯特普法泽伊奈斯.' },
            { word: 'Stepmother', phonetic: '/ˈstepmʌðə/', homophone: '斯特普玛泽', meaning: '继母', sentence: 'My stepmother is kind.', translation: '我的继母很善良。', homophoneSentence: '麦斯特普玛泽伊凯恩德.' },
            { word: 'Stepbrother', phonetic: '/ˈstepbrʌðə/', homophone: '斯特普布拉泽', meaning: '继兄弟', sentence: 'My stepbrother is tall.', translation: '我的继兄弟很高。', homophoneSentence: '麦斯特普布拉泽伊托尔.' },
            { word: 'Stepsister', phonetic: '/ˈstepsɪstə/', homophone: '斯特普西斯泽', meaning: '继姐妹', sentence: 'My stepsister is pretty.', translation: '我的继姐妹很漂亮。', homophoneSentence: '麦斯特普西斯泽伊普里蒂.' },
            { word: 'Godfather', phonetic: '/ˈɡɒdfɑːðə/', homophone: '高德法泽', meaning: '教父', sentence: 'My godfather is kind.', translation: '我的教父很善良。', homophoneSentence: '麦高德法泽伊凯恩德.' },
            { word: 'Godmother', phonetic: '/ˈɡɒdmʌðə/', homophone: '高德玛泽', meaning: '教母', sentence: 'My godmother is nice.', translation: '我的教母很好。', homophoneSentence: '麦高德玛泽伊奈斯.' },
            { word: 'Godson', phonetic: '/ˈɡɒdsʌn/', homophone: '高德森', meaning: '教子', sentence: 'My godson is cute.', translation: '我的教子很可爱。', homophoneSentence: '麦高德森伊丘特.' }
        ],
        time: [
            { word: 'Midnight', phonetic: '/ˈmɪdnaɪt/', homophone: '米德奈特', meaning: '午夜', sentence: 'Its midnight.', translation: '现在是午夜。', homophoneSentence: '伊茨米德奈特.' },
            { word: 'Dawn', phonetic: '/dɔːn/', homophone: '道恩', meaning: '黎明', sentence: 'Dawn is beautiful.', translation: '黎明很美。', homophoneSentence: '道恩伊比欧特夫欧.' },
            { word: 'Sunrise', phonetic: '/ˈsʌnraɪz/', homophone: '森莱兹', meaning: '日出', sentence: 'Sunrise is beautiful.', translation: '日出很美。', homophoneSentence: '森莱兹伊比欧特夫欧.' },
            { word: 'Morning', phonetic: '/ˈmɔːnɪŋ/', homophone: '莫宁', meaning: '早晨', sentence: 'Morning is fresh.', translation: '早晨很新鲜。', homophoneSentence: '莫宁伊弗雷什.' },
            { word: 'Noon', phonetic: '/nuːn/', homophone: '努恩', meaning: '中午', sentence: 'Its noon.', translation: '现在是中午。', homophoneSentence: '伊茨努恩.' },
            { word: 'Afternoon', phonetic: '/ˌɑːftəˈnuːn/', homophone: '阿夫特努恩', meaning: '下午', sentence: 'Afternoon is warm.', translation: '下午很温暖。', homophoneSentence: '阿夫特努恩伊沃姆.' },
            { word: 'Evening', phonetic: '/ˈiːvnɪŋ/', homophone: '伊夫宁', meaning: '晚上', sentence: 'Evening is cool.', translation: '晚上很凉爽。', homophoneSentence: '伊夫宁伊库尔.' },
            { word: 'Sunset', phonetic: '/ˈsʌnset/', homophone: '森塞特', meaning: '日落', sentence: 'Sunset is beautiful.', translation: '日落很美。', homophoneSentence: '森塞特伊比欧特夫欧.' },
            { word: 'Dusk', phonetic: '/dʌsk/', homophone: '达斯克', meaning: '黄昏', sentence: 'Dusk is peaceful.', translation: '黄昏很宁静。', homophoneSentence: '达斯克伊皮斯夫欧.' },
            { word: 'Night', phonetic: '/naɪt/', homophone: '奈特', meaning: '夜晚', sentence: 'Night is quiet.', translation: '夜晚很安静。', homophoneSentence: '奈特伊夸艾特.' },
            { word: 'Weekday', phonetic: '/ˈwiːkdeɪ/', homophone: '威克戴', meaning: '工作日', sentence: 'Today is a weekday.', translation: '今天是工作日。', homophoneSentence: '特戴伊啊威克戴.' },
            { word: 'Weekend', phonetic: '/ˌwiːkˈend/', homophone: '威肯德', meaning: '周末', sentence: 'Weekend is fun.', translation: '周末很有趣。', homophoneSentence: '威肯德伊范.' },
            { word: 'Holiday', phonetic: '/ˈhɒlədeɪ/', homophone: '霍勒戴', meaning: '假日', sentence: 'Holiday is relaxing.', translation: '假日很放松。', homophoneSentence: '霍勒戴伊瑞莱克斯英.' },
            { word: 'Vacation', phonetic: '/vəˈkeɪʃn/', homophone: '沃凯申', meaning: '假期', sentence: 'Vacation is fun.', translation: '假期很有趣。', homophoneSentence: '沃凯申伊范.' },
            { word: 'Sabbath', phonetic: '/ˈsæbəθ/', homophone: '萨巴斯', meaning: '安息日', sentence: 'Sabbath is holy.', translation: '安息日是神圣的。', homophoneSentence: '萨巴斯伊霍利.' },
            { word: 'Festival', phonetic: '/ˈfestɪvl/', homophone: '费斯特夫欧', meaning: '节日', sentence: 'Festival is lively.', translation: '节日很热闹。', homophoneSentence: '费斯特夫欧伊莱夫利.' },
            { word: 'Celebration', phonetic: '/ˌselɪˈbreɪʃn/', homophone: '塞勒布雷申', meaning: '庆祝', sentence: 'Celebration is joyful.', translation: '庆祝很欢乐。', homophoneSentence: '塞勒布雷申伊乔伊夫欧.' },
            { word: 'Anniversary', phonetic: '/ˌænɪˈvɜːsəri/', homophone: '安尼沃瑟瑞', meaning: '周年纪念', sentence: 'Anniversary is special.', translation: '周年纪念很特别。', homophoneSentence: '安尼沃瑟瑞伊斯佩肖.' },
            { word: 'Birthday', phonetic: '/ˈbɜːθdeɪ/', homophone: '伯斯戴', meaning: '生日', sentence: 'Birthday is happy.', translation: '生日很快乐。', homophoneSentence: '伯斯戴伊嗨皮.' },
            { word: 'Wedding', phonetic: '/ˈwedɪŋ/', homophone: '威丁', meaning: '婚礼', sentence: 'Wedding is beautiful.', translation: '婚礼很美。', homophoneSentence: '威丁伊比欧特夫欧.' },
            { word: 'Funeral', phonetic: '/ˈfjuːnərəl/', homophone: '弗尤内若', meaning: '葬礼', sentence: 'Funeral is sad.', translation: '葬礼很悲伤。', homophoneSentence: '弗尤内若伊赛德.' },
            { word: 'Graduation', phonetic: '/ˌɡrædʒuˈeɪʃn/', homophone: '格拉乔艾申', meaning: '毕业', sentence: 'Graduation is exciting.', translation: '毕业很令人兴奋。', homophoneSentence: '格拉乔艾申伊伊克赛特英.' }
        ],
        food: [
            { word: 'Pizza', phonetic: '/ˈpiːtsə/', homophone: '皮萨', meaning: '披萨', sentence: 'I love pizza.', translation: '我喜欢披萨。', homophoneSentence: '爱拉乌皮萨.' },
            { word: 'Burger', phonetic: '/ˈbɜːɡə/', homophone: '伯格', meaning: '汉堡', sentence: 'I love burger.', translation: '我喜欢汉堡。', homophoneSentence: '爱拉乌伯格.' },
            { word: 'Fries', phonetic: '/fraɪz/', homophone: '弗赖兹', meaning: '薯条', sentence: 'I love fries.', translation: '我喜欢薯条。', homophoneSentence: '爱拉乌弗赖兹.' },
            { word: 'Hotdog', phonetic: '/ˈhɒtdɒɡ/', homophone: '霍特道格', meaning: '热狗', sentence: 'I love hotdog.', translation: '我喜欢热狗。', homophoneSentence: '爱拉乌霍特道格.' },
            { word: 'Sandwich', phonetic: '/ˈsænwɪdʒ/', homophone: '桑威奇', meaning: '三明治', sentence: 'I love sandwich.', translation: '我喜欢三明治。', homophoneSentence: '爱拉乌桑威奇.' },
            { word: 'Salad', phonetic: '/ˈsæləd/', homophone: '萨拉德', meaning: '沙拉', sentence: 'I love salad.', translation: '我喜欢沙拉。', homophoneSentence: '爱拉乌萨拉德.' },
            { word: 'Soup', phonetic: '/suːp/', homophone: '苏普', meaning: '汤', sentence: 'I love soup.', translation: '我喜欢汤。', homophoneSentence: '爱拉乌苏普.' },
            { word: 'Steak', phonetic: '/steɪk/', homophone: '斯泰克', meaning: '牛排', sentence: 'I love steak.', translation: '我喜欢牛排。', homophoneSentence: '爱拉乌斯泰克.' },
            { word: 'Chicken', phonetic: '/ˈtʃɪkɪn/', homophone: '奇金', meaning: '鸡肉', sentence: 'I love chicken.', translation: '我喜欢鸡肉。', homophoneSentence: '爱拉乌奇金.' },
            { word: 'Fish', phonetic: '/fɪʃ/', homophone: '菲什', meaning: '鱼', sentence: 'I love fish.', translation: '我喜欢鱼。', homophoneSentence: '爱拉乌菲什.' },
            { word: 'Pasta', phonetic: '/ˈpæstə/', homophone: '帕斯塔', meaning: '意大利面', sentence: 'I love pasta.', translation: '我喜欢意大利面。', homophoneSentence: '爱拉乌帕斯塔.' },
            { word: 'Rice', phonetic: '/raɪs/', homophone: '莱斯', meaning: '米饭', sentence: 'I love rice.', translation: '我喜欢米饭。', homophoneSentence: '爱拉乌莱斯.' },
            { word: 'Bread', phonetic: '/bred/', homophone: '布雷德', meaning: '面包', sentence: 'I love bread.', translation: '我喜欢面包。', homophoneSentence: '爱拉乌布雷德.' },
            { word: 'Cake', phonetic: '/keɪk/', homophone: '凯克', meaning: '蛋糕', sentence: 'I love cake.', translation: '我喜欢蛋糕。', homophoneSentence: '爱拉乌凯克.' },
            { word: 'Ice cream', phonetic: '/aɪs kriːm/', homophone: '艾斯克里姆', meaning: '冰淇淋', sentence: 'I love ice cream.', translation: '我喜欢冰淇淋。', homophoneSentence: '爱拉乌艾斯克里姆.' },
            { word: 'Cookies', phonetic: '/ˈkʊkiz/', homophone: '库基兹', meaning: '饼干', sentence: 'I love cookies.', translation: '我喜欢饼干。', homophoneSentence: '爱拉乌库基兹.' },
            { word: 'Chocolate', phonetic: '/ˈtʃɒklət/', homophone: '巧克力', meaning: '巧克力', sentence: 'I love chocolate.', translation: '我喜欢巧克力。', homophoneSentence: '爱拉乌巧克力.' },
            { word: 'Candy', phonetic: '/ˈkændi/', homophone: '坎迪', meaning: '糖果', sentence: 'I love candy.', translation: '我喜欢糖果。', homophoneSentence: '爱拉乌坎迪.' },
            { word: 'Fruit', phonetic: '/fruːt/', homophone: '弗鲁特', meaning: '水果', sentence: 'I love fruit.', translation: '我喜欢水果。', homophoneSentence: '爱拉乌弗鲁特.' },
            { word: 'Vegetables', phonetic: '/ˈvedʒtəblz/', homophone: '维杰特布兹', meaning: '蔬菜', sentence: 'I love vegetables.', translation: '我喜欢蔬菜。', homophoneSentence: '爱拉乌维杰特布兹.' },
            { word: 'Milk', phonetic: '/mɪlk/', homophone: '米尔克', meaning: '牛奶', sentence: 'I love milk.', translation: '我喜欢牛奶。', homophoneSentence: '爱拉乌米尔克.' },
            { word: 'Juice', phonetic: '/dʒuːs/', homophone: '朱斯', meaning: '果汁', sentence: 'I love juice.', translation: '我喜欢果汁。', homophoneSentence: '爱拉乌朱斯.' }
        ],
        conversations: [
            { word: 'Hello', phonetic: '/həˈləʊ/', homophone: '哈喽', meaning: '你好', sentence: 'Hello!', translation: '你好！', homophoneSentence: '哈喽!' },
            { word: 'Hi', phonetic: '/haɪ/', homophone: '嗨', meaning: '嗨', sentence: 'Hi!', translation: '嗨！', homophoneSentence: '嗨!' },
            { word: 'Hey', phonetic: '/heɪ/', homophone: '嘿', meaning: '嘿', sentence: 'Hey!', translation: '嘿！', homophoneSentence: '嘿!' },
            { word: 'Hi there', phonetic: '/haɪ ðeə/', homophone: '嗨泽尔', meaning: '嗨，你好', sentence: 'Hi there!', translation: '嗨，你好！', homophoneSentence: '嗨泽尔!' },
            { word: 'Hello there', phonetic: '/həˈləʊ ðeə/', homophone: '哈喽泽尔', meaning: '你好，在那里', sentence: 'Hello there!', translation: '你好，在那里！', homophoneSentence: '哈喽泽尔!' },
            { word: 'How are you', phonetic: '/haʊ ɑː juː/', homophone: '好阿油', meaning: '你好吗', sentence: 'How are you?', translation: '你好吗？', homophoneSentence: '好阿油?' },
            { word: 'How are you doing', phonetic: '/haʊ ɑː juː ˈduːɪŋ/', homophone: '好阿油杜英', meaning: '你好吗', sentence: 'How are you doing?', translation: '你好吗？', homophoneSentence: '好阿油杜英?' },
            { word: 'How have you been', phonetic: '/haʊ hæv juː biːn/', homophone: '好海夫油比恩', meaning: '你最近怎么样', sentence: 'How have you been?', translation: '你最近怎么样？', homophoneSentence: '好海夫油比恩?' },
            { word: 'Whats up', phonetic: '/wɒts ʌp/', homophone: '沃茨阿普', meaning: '怎么了', sentence: 'Whats up?', translation: '怎么了？', homophoneSentence: '沃茨阿普?' },
            { word: 'Whats new', phonetic: '/wɒts njuː/', homophone: '沃茨纽', meaning: '有什么新鲜事', sentence: 'Whats new?', translation: '有什么新鲜事？', homophoneSentence: '沃茨纽?' },
            { word: 'Long time no see', phonetic: '/lɒŋ taɪm nəʊ siː/', homophone: '朗泰姆诺西', meaning: '好久不见', sentence: 'Long time no see!', translation: '好久不见！', homophoneSentence: '朗泰姆诺西!' },
            { word: 'Nice to meet you', phonetic: '/naɪs tuː miːt juː/', homophone: '奈斯图米特油', meaning: '很高兴认识你', sentence: 'Nice to meet you!', translation: '很高兴认识你！', homophoneSentence: '奈斯图米特油!' },
            { word: 'Pleased to meet you', phonetic: '/pliːzd tuː miːt juː/', homophone: '普利兹图米特油', meaning: '很高兴认识你', sentence: 'Pleased to meet you!', translation: '很高兴认识你！', homophoneSentence: '普利兹图米特油!' },
            { word: 'Good to see you', phonetic: '/ɡʊd tuː siː juː/', homophone: '古德图西油', meaning: '很高兴见到你', sentence: 'Good to see you!', translation: '很高兴见到你！', homophoneSentence: '古德图西油!' },
            { word: 'Great to see you', phonetic: '/ɡreɪt tuː siː juː/', homophone: '格瑞特图西油', meaning: '很高兴见到你', sentence: 'Great to see you!', translation: '很高兴见到你！', homophoneSentence: '格瑞特图西油!' },
            { word: 'Hows it going', phonetic: '/haʊz ɪt ˈɡəʊɪŋ/', homophone: '好兹伊特勾英', meaning: '怎么样', sentence: 'Hows it going?', translation: '怎么样？', homophoneSentence: '好兹伊特勾英?' },
            { word: 'Hows everything', phonetic: '/haʊz ˈevriθɪŋ/', homophone: '好兹艾夫瑞星', meaning: '一切怎么样', sentence: 'Hows everything?', translation: '一切怎么样？', homophoneSentence: '好兹艾夫瑞星?' },
            { word: 'Hows life', phonetic: '/haʊz laɪf/', homophone: '好兹莱夫', meaning: '生活怎么样', sentence: 'Hows life?', translation: '生活怎么样？', homophoneSentence: '好兹莱夫?' },
            { word: 'Hows work', phonetic: '/haʊz wɜːk/', homophone: '好兹沃克', meaning: '工作怎么样', sentence: 'Hows work?', translation: '工作怎么样？', homophoneSentence: '好兹沃克?' },
            { word: 'Hows school', phonetic: '/haʊz skuːl/', homophone: '好兹斯库尔', meaning: '学校怎么样', sentence: 'Hows school?', translation: '学校怎么样？', homophoneSentence: '好兹斯库尔?' },
            { word: 'Hows family', phonetic: '/haʊz ˈfæməli/', homophone: '好兹法梅里', meaning: '家人怎么样', sentence: 'Hows family?', translation: '家人怎么样？', homophoneSentence: '好兹法梅里?' },
            { word: 'Hows your day', phonetic: '/haʊz jɔː deɪ/', homophone: '好兹哟戴', meaning: '你今天怎么样', sentence: 'Hows your day?', translation: '你今天怎么样？', homophoneSentence: '好兹哟戴?' }
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
    
    // 读取现有单词
    const wordMatches = data.match(/\{ word: '[^']+'/g) || [];
    wordMatches.forEach(match => {
        const word = match.match(/\{ word: '(.*)'/)[1];
        allWords.add(word.toLowerCase());
    });
    
    console.log(`现有单词总数: ${allWords.size} 个`);
    
    // 添加新单词
    let addedCount = 0;
    Object.keys(newWords).forEach(category => {
        newWords[category].forEach(newWord => {
            if (!allWords.has(newWord.word.toLowerCase())) {
                // 找到分类的结束位置并插入新单词
                const categoryStart = data.indexOf(`${category}: [`);
                if (categoryStart !== -1) {
                    // 找到对应的结束括号
                    let openBrackets = 1;
                    let categoryEnd = categoryStart + `${category}: [`.length;
                    while (openBrackets > 0 && categoryEnd < data.length) {
                        if (data[categoryEnd] === '[') openBrackets++;
                        else if (data[categoryEnd] === ']') openBrackets--;
                        categoryEnd++;
                    }
                    
                    if (openBrackets === 0) {
                        const categoryContent = data.substring(categoryStart, categoryEnd);
                        const insertPosition = categoryContent.lastIndexOf(']');
                        const newWordString = `        { word: '${newWord.word}', phonetic: '${newWord.phonetic}', homophone: '${newWord.homophone}', meaning: '${newWord.meaning}', sentence: '${newWord.sentence}', translation: '${newWord.translation}', homophoneSentence: '${newWord.homophoneSentence}' },`;
                        fixedData = fixedData.substring(0, categoryStart + insertPosition) + '\n' + newWordString + '\n' + fixedData.substring(categoryStart + insertPosition);
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