const fs = require('fs');

try {
    let data = fs.readFileSync('word-data.js', 'utf8');
    
    // 收集所有现有单词
    const allWords = new Set();
    const wordMatches = data.match(/\{\s*word:\s*["']([^"']+)["']/g) || [];
    wordMatches.forEach(match => {
        const matchResult = match.match(/\{\s*word:\s*["']([^"']+)["']/);
        if (matchResult && matchResult[1]) {
            allWords.add(matchResult[1].toLowerCase());
        }
    });
    
    console.log(`现有单词总数: ${allWords.size} 个`);
    
    // 第一批：100个 greetings 单词
    const greetingsWords = [
        { word: "Good day to you", phonetic: "/ɡʊd deɪ tuː juː/", homophone: "古德戴图优", meaning: "祝你日安", sentence: "Good day to you!", translation: "祝你日安！", homophoneSentence: "古德戴图优!" },
        { word: "Good day sir", phonetic: "/ɡʊd deɪ sɜːr/", homophone: "古德戴瑟", meaning: "先生日安", sentence: "Good day sir!", translation: "先生日安！", homophoneSentence: "古德戴瑟!" },
        { word: "Good day madam", phonetic: "/ɡʊd deɪ ˈmædəm/", homophone: "古德戴麦德姆", meaning: "女士日安", sentence: "Good day madam!", translation: "女士日安！", homophoneSentence: "古德戴麦德姆!" },
        { word: "Top of the morning", phonetic: "/tɒp ɒv ðə ˈmɔːnɪŋ/", homophone: "托普奥夫泽莫宁", meaning: "早上好", sentence: "Top of the morning to you!", translation: "祝你早上好！", homophoneSentence: "托普奥夫泽莫宁图优!" },
        { word: "Rise and shine", phonetic: "/raɪz ænd ʃaɪn/", homophone: "瑞兹安德晒恩", meaning: "起床啦", sentence: "Rise and shine!", translation: "起床啦！", homophoneSentence: "瑞兹安德晒恩!" },
        { word: "Bright and early", phonetic: "/braɪt ænd ˈɜːli/", homophone: "布瑞特安德厄利", meaning: "一大早就", sentence: "Bright and early today!", translation: "今天一大早就！", homophoneSentence: "布瑞特安德厄利特戴!" },
        { word: "Morning has broken", phonetic: "/ˈmɔːnɪŋ hæz ˈbrəʊkən/", homophone: "莫宁海兹布柔肯", meaning: "早晨来临", sentence: "Morning has broken!", translation: "早晨来临了！", homophoneSentence: "莫宁海兹布柔肯!" },
        { word: "Beautiful morning", phonetic: "/ˈbjuːtɪfl ˈmɔːnɪŋ/", homophone: "比优提夫欧莫宁", meaning: "美好的早晨", sentence: "What a beautiful morning!", translation: "多么美好的早晨！", homophoneSentence: "沃特啊比优提夫欧莫宁!" },
        { word: "Lovely morning", phonetic: "/ˈlʌvli ˈmɔːnɪŋ/", homophone: "拉夫利莫宁", meaning: "可爱的早晨", sentence: "Lovely morning!", translation: "可爱的早晨！", homophoneSentence: "拉夫利莫宁!" },
        { word: "Pleasant morning", phonetic: "/ˈpleznt ˈmɔːnɪŋ/", homophone: "普莱曾特莫宁", meaning: "愉快的早晨", sentence: "Pleasant morning!", translation: "愉快的早晨！", homophoneSentence: "普莱曾特莫宁!" },
        { word: "Good afternoon sir", phonetic: "/ɡʊd ˌɑːftəˈnuːn sɜːr/", homophone: "古德阿夫特努恩瑟", meaning: "先生下午好", sentence: "Good afternoon sir!", translation: "先生下午好！", homophoneSentence: "古德阿夫特努恩瑟!" },
        { word: "Good afternoon madam", phonetic: "/ɡʊd ˌɑːftəˈnuːn ˈmædəm/", homophone: "古德阿夫特努恩麦德姆", meaning: "女士下午好", sentence: "Good afternoon madam!", translation: "女士下午好！", homophoneSentence: "古德阿夫特努恩麦德姆!" },
        { word: "Afternoon greetings", phonetic: "/ˌɑːftəˈnuːn ɡriːtɪŋz/", homophone: "阿夫特努恩格瑞听兹", meaning: "下午问候", sentence: "Afternoon greetings!", translation: "下午问候！", homophoneSentence: "阿夫特努恩格瑞听兹!" },
        { word: "Pleasant afternoon", phonetic: "/ˈpleznt ˌɑːftəˈnuːn/", homophone: "普莱曾特阿夫特努恩", meaning: "愉快的下午", sentence: "Have a pleasant afternoon!", translation: "祝你下午愉快！", homophoneSentence: "海夫啊普莱曾特阿夫特努恩!" },
        { word: "Good afternoon everyone", phonetic: "/ɡʊd ˌɑːftəˈnuːn ˈevriwʌn/", homophone: "古德阿夫特努恩埃弗里万", meaning: "大家下午好", sentence: "Good afternoon everyone!", translation: "大家下午好！", homophoneSentence: "古德阿夫特努恩埃弗里万!" },
        { word: "Good evening sir", phonetic: "/ɡʊd ˈiːvnɪŋ sɜːr/", homophone: "古德伊夫宁瑟", meaning: "先生晚上好", sentence: "Good evening sir!", translation: "先生晚上好！", homophoneSentence: "古德伊夫宁瑟!" },
        { word: "Good evening madam", phonetic: "/ɡʊd ˈiːvnɪŋ ˈmædəm/", homophone: "古德伊夫宁麦德姆", meaning: "女士晚上好", sentence: "Good evening madam!", translation: "女士晚上好！", homophoneSentence: "古德伊夫宁麦德姆!" },
        { word: "Evening greetings", phonetic: "/ˈiːvnɪŋ ɡriːtɪŋz/", homophone: "伊夫宁格瑞听兹", meaning: "晚上问候", sentence: "Evening greetings!", translation: "晚上问候！", homophoneSentence: "伊夫宁格瑞听兹!" },
        { word: "Lovely evening", phonetic: "/ˈlʌvli ˈiːvnɪŋ/", homophone: "拉夫利伊夫宁", meaning: "美好的晚上", sentence: "Lovely evening!", translation: "美好的晚上！", homophoneSentence: "拉夫利伊夫宁!" },
        { word: "Pleasant evening", phonetic: "/ˈpleznt ˈiːvnɪŋ/", homophone: "普莱曾特伊夫宁", meaning: "愉快的晚上", sentence: "Have a pleasant evening!", translation: "祝你晚上愉快！", homophoneSentence: "海夫啊普莱曾特伊夫宁!" },
        { word: "Sleep well", phonetic: "/sliːp wel/", homophone: "斯利普威尔", meaning: "睡个好觉", sentence: "Sleep well!", translation: "睡个好觉！", homophoneSentence: "斯利普威尔!" },
        { word: "Sweet dreams", phonetic: "/swiːt driːmz/", homophone: "斯威特德瑞姆兹", meaning: "做个好梦", sentence: "Sweet dreams!", translation: "做个好梦！", homophoneSentence: "斯威特德瑞姆兹!" },
        { word: "Night night", phonetic: "/naɪt naɪt/", homophone: "奈特奈特", meaning: "晚安晚安", sentence: "Night night!", translation: "晚安晚安！", homophoneSentence: "奈特奈特!" },
        { word: "Rest well", phonetic: "/rest wel/", homophone: "瑞斯特威尔", meaning: "好好休息", sentence: "Rest well!", translation: "好好休息！", homophoneSentence: "瑞斯特威尔!" },
        { word: "Pleasant dreams", phonetic: "/ˈpleznt driːmz/", homophone: "普莱曾特德瑞姆兹", meaning: "愉快的梦", sentence: "Pleasant dreams!", translation: "祝你做个愉快的梦！", homophoneSentence: "普莱曾特德瑞姆兹!" },
        { word: "Goodnight sleep tight", phonetic: "/ɡʊdnaɪt sliːp taɪt/", homophone: "古德奈特斯利普泰特", meaning: "晚安睡个好觉", sentence: "Goodnight sleep tight!", translation: "晚安睡个好觉！", homophoneSentence: "古德奈特斯利普泰特!" },
        { word: "See you in the morning", phonetic: "/siː juː ɪn ðə ˈmɔːnɪŋ/", homophone: "西优因泽莫宁", meaning: "早上见", sentence: "See you in the morning!", translation: "早上见！", homophoneSentence: "西优因泽莫宁!" },
        { word: "Until tomorrow", phonetic: "/ənˈtɪl təˈmɒrəʊ/", homophone: "安提尔特莫柔", meaning: "直到明天", sentence: "Until tomorrow!", translation: "明天见！", homophoneSentence: "安提尔特莫柔!" },
        { word: "Have a good night", phonetic: "/hæv ə ɡʊd naɪt/", homophone: "海夫阿古德奈特", meaning: "祝你晚安", sentence: "Have a good night!", translation: "祝你晚安！", homophoneSentence: "海夫阿古德奈特!" },
        { word: "See you around", phonetic: "/siː juː əˈraʊnd/", homophone: "西优阿柔德", meaning: "回头见", sentence: "See you around!", translation: "回头见！", homophoneSentence: "西优阿柔德!" },
        { word: "Catch you later", phonetic: "/kætʃ juː ˈleɪtə/", homophone: "凯奇优雷特", meaning: "待会见", sentence: "Catch you later!", translation: "待会见！", homophoneSentence: "凯奇优雷特!" },
        { word: "Talk to you later", phonetic: "/tɔːk tuː juː ˈleɪtə/", homophone: "托克图优雷特", meaning: "回头再聊", sentence: "Talk to you later!", translation: "回头再聊！", homophoneSentence: "托克图优雷特!" },
        { word: "Until next time", phonetic: "/ənˈtɪl nekst taɪm/", homophone: "安提尔克斯特泰姆", meaning: "下次见", sentence: "Until next time!", translation: "下次见！", homophoneSentence: "安提尔克斯特泰姆!" },
        { word: "So long", phonetic: "/səʊ lɒŋ/", homophone: "搜朗", meaning: "再见", sentence: "So long!", translation: "再见！", homophoneSentence: "搜朗!" },
        { word: "Farewell for now", phonetic: "/ˌfeəˈwel fɔː naʊ/", homophone: "夫尔威尔佛纳", meaning: "暂时告别", sentence: "Farewell for now!", translation: "暂时告别！", homophoneSentence: "夫尔威尔佛纳!" },
        { word: "Take it easy", phonetic: "/teɪk ɪt ˈiːzi/", homophone: "忒克伊特伊兹", meaning: "放轻松", sentence: "Take it easy!", translation: "放轻松！", homophoneSentence: "忒克伊特伊兹!" },
        { word: "Keep in touch", phonetic: "/kiːp ɪn tʌtʃ/", homophone: "基普因塔奇", meaning: "保持联系", sentence: "Keep in touch!", translation: "保持联系！", homophoneSentence: "基普因塔奇!" },
        { word: "Have a good one", phonetic: "/hæv ə ɡʊd wʌn/", homophone: "海夫阿古德万", meaning: "祝你愉快", sentence: "Have a good one!", translation: "祝你愉快！", homophoneSentence: "海夫阿古德万!" },
        { word: "It is a pleasure to meet you", phonetic: "/ɪts ə ˈpleʒə tuː miːt juː/", homophone: "伊茨啊普莱舍图米特优", meaning: "很高兴认识你", sentence: "It is a pleasure to meet you!", translation: "很高兴认识你！", homophoneSentence: "伊茨啊普莱舍图米特优!" },
        { word: "Pleased to meet you", phonetic: "/pliːzd tuː miːt juː/", homophone: "普利兹德图米特优", meaning: "很高兴见到你", sentence: "Pleased to meet you!", translation: "很高兴见到你！", homophoneSentence: "普利兹德图米特优!" },
        { word: "Nice to see you", phonetic: "/naɪs tuː siː juː/", homophone: "奈斯图西优", meaning: "很高兴见到你", sentence: "Nice to see you!", translation: "很高兴见到你！", homophoneSentence: "奈斯图西优!" },
        { word: "Glad to see you", phonetic: "/ɡlæd tuː siː juː/", homophone: "格拉德图西优", meaning: "很高兴见到你", sentence: "Glad to see you!", translation: "很高兴见到你！", homophoneSentence: "格拉德图西优!" },
        { word: "Good to see you again", phonetic: "/ɡʊd tuː siː juː əˈɡen/", homophone: "古德图西优阿盖恩", meaning: "很高兴再次见到你", sentence: "Good to see you again!", translation: "很高兴再次见到你！", homophoneSentence: "古德图西优阿盖恩!" },
        { word: "Long time no see", phonetic: "/lɒŋ taɪm nəʊ siː/", homophone: "朗泰姆诺西", meaning: "好久不见", sentence: "Long time no see!", translation: "好久不见！", homophoneSentence: "朗泰姆诺西!" },
        { word: "How have you been", phonetic: "/haʊ hæv juː biːn/", homophone: "好海夫优宾", meaning: "你最近怎么样", sentence: "How have you been?", translation: "你最近怎么样？", homophoneSentence: "好海夫优宾?" },
        { word: "What brings you here", phonetic: "/wɒt brɪŋz juː hɪə/", homophone: "沃特布林兹优希尔", meaning: "什么风把你吹来了", sentence: "What brings you here?", translation: "什么风把你吹来了？", homophoneSentence: "沃特布林兹优希尔?" },
        { word: "Fancy meeting you here", phonetic: "/ˈfænsi ˈmiːtɪŋ juː hɪə/", homophone: "范西米听优希尔", meaning: "真巧在这里见到你", sentence: "Fancy meeting you here!", translation: "真巧在这里见到你！", homophoneSentence: "范西米听优希尔!" },
        { word: "Small world", phonetic: "/smɔːl wɜːld/", homophone: "斯莫尔沃德", meaning: "世界真小", sentence: "Small world!", translation: "世界真小！", homophoneSentence: "斯莫尔沃德!" },
        { word: "Happy New Year", phonetic: "/ˈhæpi njuː jɪə/", homophone: "嗨皮纽伊尔", meaning: "新年快乐", sentence: "Happy New Year!", translation: "新年快乐！", homophoneSentence: "嗨皮纽伊尔!" },
        { word: "Merry Christmas", phonetic: "/ˈmeri ˈkrɪsməs/", homophone: "麦瑞克里斯莫斯", meaning: "圣诞快乐", sentence: "Merry Christmas!", translation: "圣诞快乐！", homophoneSentence: "麦瑞克里斯莫斯!" },
        { word: "Happy Easter", phonetic: "/ˈhæpi ˈiːstə/", homophone: "嗨皮伊斯特", meaning: "复活节快乐", sentence: "Happy Easter!", translation: "复活节快乐！", homophoneSentence: "嗨皮伊斯特!" },
        { word: "Happy Thanksgiving", phonetic: "/ˈhæpi ˌθæŋksˈɡɪvɪŋ/", homophone: "嗨皮桑克斯给听", meaning: "感恩节快乐", sentence: "Happy Thanksgiving!", translation: "感恩节快乐！", homophoneSentence: "嗨皮桑克斯给听!" },
        { word: "Happy Halloween", phonetic: "/ˈhæpi ˌhæləʊˈiːn/", homophone: "嗨皮哈柔伊恩", meaning: "万圣节快乐", sentence: "Happy Halloween!", translation: "万圣节快乐！", homophoneSentence: "嗨皮哈柔伊恩!" },
        { word: "Happy Valentine Day", phonetic: "/ˈhæpi ˈvæləntaɪnz deɪ/", homophone: "嗨皮瓦伦泰恩兹戴", meaning: "情人节快乐", sentence: "Happy Valentine Day!", translation: "情人节快乐！", homophoneSentence: "嗨皮瓦伦泰恩兹戴!" },
        { word: "Happy Mother Day", phonetic: "/ˈhæpi ˈmʌðəz deɪ/", homophone: "嗨皮马泽兹戴", meaning: "母亲节快乐", sentence: "Happy Mother Day!", translation: "母亲节快乐！", homophoneSentence: "嗨皮马泽兹戴!" },
        { word: "Happy Father Day", phonetic: "/ˈhæpi ˈfɑːðəz deɪ/", homophone: "嗨皮法泽兹戴", meaning: "父亲节快乐", sentence: "Happy Father Day!", translation: "父亲节快乐！", homophoneSentence: "嗨皮法泽兹戴!" },
        { word: "Happy birthday to you", phonetic: "/ˈhæpi ˈbɜːθdeɪ tuː juː/", homophone: "嗨皮波斯戴图优", meaning: "祝你生日快乐", sentence: "Happy birthday to you!", translation: "祝你生日快乐！", homophoneSentence: "嗨皮波斯戴图优!" },
        { word: "Many happy returns", phonetic: "/ˈmeni ˈhæpi rɪˈtɜːnz/", homophone: "麦尼嗨瑞瑞腾兹", meaning: "祝你年年有今日", sentence: "Many happy returns!", translation: "祝你年年有今日！", homophoneSentence: "麦尼嗨瑞瑞腾兹!" },
        { word: "Thanks a lot", phonetic: "/θæŋks ə lɒt/", homophone: "桑克斯阿洛特", meaning: "非常感谢", sentence: "Thanks a lot!", translation: "非常感谢！", homophoneSentence: "桑克斯阿洛特!" },
        { word: "Thanks so much", phonetic: "/θæŋks səʊ mʌtʃ/", homophone: "桑克斯搜马奇", meaning: "非常感谢", sentence: "Thanks so much!", translation: "非常感谢！", homophoneSentence: "桑克斯搜马奇!" },
        { word: "Thank you very much", phonetic: "/θæŋk juː ˈveri mʌtʃ/", homophone: "桑克优歪瑞马奇", meaning: "非常感谢你", sentence: "Thank you very much!", translation: "非常感谢你！", homophoneSentence: "桑克优歪瑞马奇!" },
        { word: "Many thanks", phonetic: "/ˈmeni θæŋks/", homophone: "麦尼桑克斯", meaning: "多谢", sentence: "Many thanks!", translation: "多谢！", homophoneSentence: "麦尼桑克斯!" },
        { word: "Thanks a million", phonetic: "/θæŋks ə ˈmɪljən/", homophone: "桑克斯阿米尔金", meaning: "万分感谢", sentence: "Thanks a million!", translation: "万分感谢！", homophoneSentence: "桑克斯阿米尔金!" },
        { word: "I really appreciate it", phonetic: "/aɪ ˈrɪəli əˈpriːʃieɪt ɪt/", homophone: "爱瑞尔利阿普瑞希埃特伊特", meaning: "我真的很感激", sentence: "I really appreciate it!", translation: "我真的很感激！", homophoneSentence: "爱瑞尔利阿普瑞希埃特伊特!" },
        { word: "I am so grateful", phonetic: "/aɪm səʊ ˈɡreɪtfl/", homophone: "艾姆搜格瑞特夫欧", meaning: "我非常感激", sentence: "I am so grateful!", translation: "我非常感激！", homophoneSentence: "艾姆搜格瑞特夫欧!" },
        { word: "You are too kind", phonetic: "/jɔːr tuː kaɪnd/", homophone: "优儿图凯德", meaning: "你太客气了", sentence: "You are too kind!", translation: "你太客气了！", homophoneSentence: "优儿图凯德!" },
        { word: "That is very kind of you", phonetic: "/ðæts ˈveri kaɪnd ɒv juː/", homophone: "戴茨歪瑞凯德奥夫优", meaning: "你真是太好了", sentence: "That is very kind of you!", translation: "你真是太好了！", homophoneSentence: "戴茨歪瑞凯德奥夫优!" },
        { word: "I am so sorry", phonetic: "/aɪm səʊ ˈsɒri/", homophone: "艾姆搜索瑞", meaning: "我很抱歉", sentence: "I am so sorry!", translation: "我很抱歉！", homophoneSentence: "艾姆搜索瑞!" },
        { word: "I apologize", phonetic: "/aɪ əˈpɒlədʒaɪz/", homophone: "爱阿波勒吉艾兹", meaning: "我道歉", sentence: "I apologize!", translation: "我道歉！", homophoneSentence: "爱阿波勒吉艾兹!" },
        { word: "My apologies", phonetic: "/maɪ əˈpɒlədʒiz/", homophone: "麦阿波勒吉兹", meaning: "我的道歉", sentence: "My apologies!", translation: "我的道歉！", homophoneSentence: "麦阿波勒吉兹!" },
        { word: "Please forgive me", phonetic: "/pliːz fəˈɡɪv miː/", homophone: "普利兹夫给夫米", meaning: "请原谅我", sentence: "Please forgive me!", translation: "请原谅我！", homophoneSentence: "普利兹夫给夫米!" },
        { word: "I did not mean to", phonetic: "/aɪ ˈdɪdnt miːn tuː/", homophone: "爱戴德恩特明图", meaning: "我不是故意的", sentence: "I did not mean to!", translation: "我不是故意的！", homophoneSentence: "爱戴德恩特明图!" },
        { word: "It was an accident", phonetic: "/ɪt wɒz ən ˈæksɪdənt/", homophone: "伊特沃兹安阿克西登特", meaning: "那是个意外", sentence: "It was an accident!", translation: "那是个意外！", homophoneSentence: "伊特沃兹安阿克西登特!" },
        { word: "I feel terrible", phonetic: "/aɪ fiːl ˈterəbl/", homophone: "爱菲尔泰瑞波欧", meaning: "我感觉很糟糕", sentence: "I feel terrible!", translation: "我感觉很糟糕！", homophoneSentence: "爱菲尔泰瑞波欧!" },
        { word: "How careless of me", phonetic: "/haʊ ˈkeələs ɒv miː/", homophone: "好凯尔勒斯奥夫米", meaning: "我真粗心", sentence: "How careless of me!", translation: "我真粗心！", homophoneSentence: "好凯尔勒斯奥夫米!" },
        { word: "I owe you an apology", phonetic: "/aɪ əʊ juː ən əˈpɒlədʒi/", homophone: "爱欧优安阿波勒吉", meaning: "我欠你一个道歉", sentence: "I owe you an apology!", translation: "我欠你一个道歉！", homophoneSentence: "爱欧优安阿波勒吉!" },
        { word: "Pardon my mistake", phonetic: "/ˈpɑːdn maɪ mɪˈsteɪk/", homophone: "帕登麦米斯泰克", meaning: "请原谅我的错误", sentence: "Pardon my mistake!", translation: "请原谅我的错误！", homophoneSentence: "帕登麦米斯泰克!" },
        { word: "Would you like to join us", phonetic: "/wʊd juː laɪk tuː dʒɔɪn ʌs/", homophone: "伍德优来克图卓因阿斯", meaning: "你愿意加入我们吗", sentence: "Would you like to join us?", translation: "你愿意加入我们吗？", homophoneSentence: "伍德优来克图卓因阿斯?" },
        { word: "Come and join us", phonetic: "/kʌm ænd dʒɔɪn ʌs/", homophone: "卡姆安德卓因阿斯", meaning: "来加入我们吧", sentence: "Come and join us!", translation: "来加入我们吧！", homophoneSentence: "卡姆安德卓因阿斯!" },
        { word: "You are welcome to come", phonetic: "/jɔːr ˈwelkəm tuː kʌm/", homophone: "优儿威尔康图卡姆", meaning: "欢迎你来", sentence: "You are welcome to come!", translation: "欢迎你来！", homophoneSentence: "优儿威尔康图卡姆!" },
        { word: "Feel free to join", phonetic: "/fiːl friː tuː dʒɔɪn/", homophone: "菲尔弗里图卓因", meaning: "随意加入", sentence: "Feel free to join!", translation: "随意加入！", homophoneSentence: "菲尔弗里图卓因!" },
        { word: "We would love to have you", phonetic: "/wiːd lʌv tuː hæv juː/", homophone: "维德拉夫图海夫优", meaning: "我们很高兴有你", sentence: "We would love to have you!", translation: "我们很高兴有你！", homophoneSentence: "维德拉夫图海夫优!" },
        { word: "Please come in", phonetic: "/pliːz kʌm ɪn/", homophone: "普利兹卡姆因", meaning: "请进", sentence: "Please come in!", translation: "请进！", homophoneSentence: "普利兹卡姆因!" },
        { word: "Make yourself at home", phonetic: "/meɪk jɔːˈself æt həʊm/", homophone: "梅克优儿塞尔夫艾特厚姆", meaning: "请随意就像在自己家", sentence: "Make yourself at home!", translation: "请随意，就像在自己家！", homophoneSentence: "梅克优儿塞尔夫艾特厚姆!" },
        { word: "Take a seat", phonetic: "/teɪk ə siːt/", homophone: "忒克阿西特", meaning: "请坐", sentence: "Please take a seat!", translation: "请坐！", homophoneSentence: "普利兹忒克阿西特!" },
        { word: "Have a drink", phonetic: "/hæv ə drɪŋk/", homophone: "海夫阿德林克", meaning: "喝一杯", sentence: "Have a drink!", translation: "喝一杯！", homophoneSentence: "海夫阿德林克!" },
        { word: "Help yourself", phonetic: "/help jɔːˈself/", homophone: "海尔普优儿塞尔夫", meaning: "请自便", sentence: "Help yourself!", translation: "请自便！", homophoneSentence: "海尔普优儿塞尔夫!" }
    ];
    
    // 100个 emotions 单词
    const emotionsWords = [
        { word: "Overjoyed", phonetic: "/ˌəʊvəˈdʒɔɪd/", homophone: "欧夫卓伊德", meaning: "欣喜若狂", sentence: "I am overjoyed!", translation: "我欣喜若狂！", homophoneSentence: "艾姆欧夫卓伊德!" },
        { word: "Ecstatic", phonetic: "/ɪkˈstætɪk/", homophone: "伊克斯塔提克", meaning: "狂喜的", sentence: "I am ecstatic!", translation: "我狂喜不已！", homophoneSentence: "艾姆伊克斯塔提克!" },
        { word: "Elated", phonetic: "/ɪˈleɪtɪd/", homophone: "伊莱提德", meaning: "兴高采烈的", sentence: "I am elated!", translation: "我兴高采烈！", homophoneSentence: "艾姆伊莱提德!" },
        { word: "Euphoric", phonetic: "/juːˈfɒrɪk/", homophone: "优佛瑞克", meaning: "极度愉快的", sentence: "I feel euphoric!", translation: "我感到极度愉快！", homophoneSentence: "爱菲尔优佛瑞克!" },
        { word: "Blissful", phonetic: "/ˈblɪsfl/", homophone: "布利斯夫欧", meaning: "极乐的", sentence: "I feel blissful!", translation: "我感到极乐！", homophoneSentence: "爱菲尔布利斯夫欧!" },
        { word: "Jubilant", phonetic: "/ˈdʒuːbɪlənt/", homophone: "朱比伦特", meaning: "欢庆的", sentence: "I am jubilant!", translation: "我欢欣鼓舞！", homophoneSentence: "艾姆朱比伦特!" },
        { word: "Radiant", phonetic: "/ˈreɪdiənt/", homophone: "瑞迪恩特", meaning: "容光焕发的", sentence: "I feel radiant!", translation: "我容光焕发！", homophoneSentence: "爱菲尔瑞迪恩特!" },
        { word: "Thrilled", phonetic: "/θrɪld/", homophone: "斯瑞欧德", meaning: "激动的", sentence: "I am thrilled!", translation: "我很激动！", homophoneSentence: "艾姆斯瑞欧德!" },
        { word: "Exhilarated", phonetic: "/ɪɡˈzɪləreɪtɪd/", homophone: "伊格齐勒瑞提德", meaning: "振奋的", sentence: "I feel exhilarated!", translation: "我感到振奋！", homophoneSentence: "爱菲尔伊格齐勒瑞提德!" },
        { word: "Contented", phonetic: "/kənˈtentɪd/", homophone: "康滕提德", meaning: "满足的", sentence: "I feel contented!", translation: "我感到满足！", homophoneSentence: "爱菲尔康滕提德!" },
        { word: "Heartbroken", phonetic: "/ˈhɑːtbrəʊkən/", homophone: "哈特布柔肯", meaning: "心碎的", sentence: "I am heartbroken!", translation: "我心碎了！", homophoneSentence: "艾姆哈特布柔肯!" },
        { word: "Devastated", phonetic: "/ˈdevəsteɪtɪd/", homophone: "戴瓦斯蒂提德", meaning: "崩溃的", sentence: "I am devastated!", translation: "我崩溃了！", homophoneSentence: "艾姆戴瓦斯蒂提德!" },
        { word: "Crushed", phonetic: "/krʌʃt/", homophone: "克拉什特", meaning: " crushing的", sentence: "I feel crushed!", translation: "我感到 crushing！", homophoneSentence: "爱菲尔克拉什特!" },
        { word: "Miserable", phonetic: "/ˈmɪzrəbl/", homophone: "米泽瑞波欧", meaning: "痛苦的", sentence: "I feel miserable!", translation: "我很痛苦！", homophoneSentence: "爱菲尔米泽瑞波欧!" },
        { word: "Despondent", phonetic: "/dɪˈspɒndənt/", homophone: "迪斯庞登特", meaning: "沮丧的", sentence: "I am despondent!", translation: "我很沮丧！", homophoneSentence: "艾姆迪斯庞登特!" },
        { word: "Gloomy", phonetic: "/ˈɡluːmi/", homophone: "格鲁米", meaning: "忧郁的", sentence: "I feel gloomy!", translation: "我感到忧郁！", homophoneSentence: "爱菲尔格鲁米!" },
        { word: "Melancholy", phonetic: "/ˈmelənkɒli/", homophone: "梅伦科利", meaning: "忧郁的", sentence: "I feel melancholy!", translation: "我感到忧郁！", homophoneSentence: "爱菲尔梅伦科利!" },
        { word: "Sorrowful", phonetic: "/ˈsɒrəʊfl/", homophone: "索柔夫欧", meaning: "悲伤的", sentence: "I am sorrowful!", translation: "我很悲伤！", homophoneSentence: "艾姆索柔夫欧!" },
        { word: "Woeful", phonetic: "/ˈwəʊfl/", homophone: "沃夫欧", meaning: "悲哀的", sentence: "I feel woeful!", translation: "我感到悲哀！", homophoneSentence: "爱菲尔沃夫欧!" },
        { word: "Furious", phonetic: "/ˈfjʊəriəs/", homophone: "菲尤瑞尔斯", meaning: "暴怒的", sentence: "I am furious!", translation: "我暴怒了！", homophoneSentence: "艾姆菲尤瑞尔斯!" },
        { word: "Enraged", phonetic: "/ɪnˈreɪdʒd/", homophone: "伊恩瑞吉德", meaning: "愤怒的", sentence: "I am enraged!", translation: "我愤怒了！", homophoneSentence: "艾姆伊恩瑞吉德!" },
        { word: "Infuriated", phonetic: "/ɪnˈfjʊərieɪtɪd/", homophone: "伊恩菲尤瑞埃提德", meaning: "被激怒的", sentence: "I am infuriated!", translation: "我被激怒了！", homophoneSentence: "艾姆伊恩菲尤瑞埃提德!" },
        { word: "Livid", phonetic: "/ˈlɪvɪd/", homophone: "利维德", meaning: "大怒的", sentence: "I am livid!", translation: "我大怒！", homophoneSentence: "艾姆利维德!" },
        { word: "Irritated", phonetic: "/ˈɪrɪteɪtɪd/", homophone: "伊瑞泰特德", meaning: "恼怒的", sentence: "I am irritated!", translation: "我很恼怒！", homophoneSentence: "艾姆伊瑞泰特德!" },
        { word: "Agitated", phonetic: "/ˈædʒɪteɪtɪd/", homophone: "阿吉泰特德", meaning: "焦虑的", sentence: "I feel agitated!", translation: "我感到焦虑！", homophoneSentence: "爱菲尔阿吉泰特德!" },
        { word: "Frustrated", phonetic: "/frʌˈstreɪtɪd/", homophone: "弗斯特瑞特德", meaning: "沮丧的", sentence: "I am frustrated!", translation: "我很沮丧！", homophoneSentence: "艾姆弗斯特瑞特德!" },
        { word: "Annoyed", phonetic: "/əˈnɔɪd/", homophone: "阿诺伊德", meaning: "烦恼的", sentence: "I am annoyed!", translation: "我很烦恼！", homophoneSentence: "艾姆阿诺伊德!" },
        { word: "Resentful", phonetic: "/rɪˈzentfl/", homophone: "瑞森特夫欧", meaning: "怨恨的", sentence: "I feel resentful!", translation: "我感到怨恨！", homophoneSentence: "爱菲尔瑞森特夫欧!" },
        { word: "Bitter", phonetic: "/ˈbɪtə/", homophone: "比特", meaning: "痛苦的", sentence: "I feel bitter!", translation: "我感到痛苦！", homophoneSentence: "爱菲尔比特!" },
        { word: "Terrified", phonetic: "/ˈterɪfaɪd/", homophone: "泰瑞法艾德", meaning: "恐惧的", sentence: "I am terrified!", translation: "我吓坏了！", homophoneSentence: "艾姆泰瑞法艾德!" },
        { word: "Petrified", phonetic: "/ˈpetrɪfaɪd/", homophone: "佩特里法艾德", meaning: "吓呆的", sentence: "I am petrified!", translation: "我吓呆了！", homophoneSentence: "艾姆佩特里法艾德!" },
        { word: "Horrified", phonetic: "/ˈhɒrɪfaɪd/", homophone: "霍瑞法艾德", meaning: "惊骇的", sentence: "I am horrified!", translation: "我惊骇了！", homophoneSentence: "艾姆霍瑞法艾德!" },
        { word: "Panicked", phonetic: "/ˈpænɪkt/", homophone: "帕尼科特", meaning: "恐慌的", sentence: "I am panicked!", translation: "我恐慌了！", homophoneSentence: "艾姆帕尼科特!" },
        { word: "Anxious", phonetic: "/ˈæŋkʃəs/", homophone: "安克修斯", meaning: "焦虑的", sentence: "I feel anxious!", translation: "我很焦虑！", homophoneSentence: "爱菲尔安克修斯!" },
        { word: "Nervous", phonetic: "/ˈnɜːvəs/", homophone: "纳维斯", meaning: "紧张的", sentence: "I am nervous!", translation: "我很紧张！", homophoneSentence: "艾姆纳维斯!" },
        { word: "Worried", phonetic: "/ˈwʌrid/", homophone: "沃瑞德", meaning: "担心的", sentence: "I am worried!", translation: "我很担心！", homophoneSentence: "艾姆沃瑞德!" },
        { word: "Stressed", phonetic: "/strest/", homophone: "斯瑞斯特", meaning: "有压力的", sentence: "I feel stressed!", translation: "我感到有压力！", homophoneSentence: "爱菲尔斯瑞斯特!" },
        { word: "Uneasy", phonetic: "/ʌnˈiːzi/", homophone: "安伊兹", meaning: "不安的", sentence: "I feel uneasy!", translation: "我感到不安！", homophoneSentence: "爱菲尔安伊兹!" },
        { word: "Apprehensive", phonetic: "/ˌæprɪˈhensɪv/", homophone: "阿普瑞亨西夫", meaning: "忧虑的", sentence: "I feel apprehensive!", translation: "我感到忧虑！", homophoneSentence: "爱菲尔阿普瑞亨西夫!" },
        { word: "Surprised", phonetic: "/səˈpraɪzd/", homophone: "色普瑞兹德", meaning: "惊讶的", sentence: "I am surprised!", translation: "我很惊讶！", homophoneSentence: "艾姆色普瑞兹德!" },
        { word: "Amazed", phonetic: "/əˈmeɪzd/", homophone: "阿梅兹德", meaning: "惊奇的", sentence: "I am amazed!", translation: "我很惊奇！", homophoneSentence: "艾姆阿梅兹德!" },
        { word: "Astonished", phonetic: "/əˈstɒnɪʃt/", homophone: "阿斯托尼什特", meaning: "吃惊的", sentence: "I am astonished!", translation: "我很吃惊！", homophoneSentence: "艾姆阿斯托尼什特!" },
        { word: "Stunned", phonetic: "/stʌnd/", homophone: "斯坦德", meaning: "震惊的", sentence: "I am stunned!", translation: "我震惊了！", homophoneSentence: "艾姆斯特安德!" },
        { word: "Shocked", phonetic: "/ʃɒkt/", homophone: "绍克特", meaning: "震惊的", sentence: "I am shocked!", translation: "我震惊了！", homophoneSentence: "艾姆绍克特!" },
        { word: "Speechless", phonetic: "/ˈspiːtʃləs/", homophone: "斯皮奇勒斯", meaning: "说不出话的", sentence: "I am speechless!", translation: "我说不出话了！", homophoneSentence: "艾姆斯皮奇勒斯!" },
        { word: "Bewildered", phonetic: "/bɪˈwɪldəd/", homophone: "比威尔德", meaning: "困惑的", sentence: "I am bewildered!", translation: "我很困惑！", homophoneSentence: "艾姆比威尔德!" },
        { word: "Perplexed", phonetic: "/pəˈplekst/", homophone: "波普莱克斯特", meaning: "困惑的", sentence: "I am perplexed!", translation: "我很困惑！", homophoneSentence: "艾姆波普莱克斯特!" },
        { word: "Baffled", phonetic: "/ˈbæfld/", homophone: "巴夫尔德", meaning: "困惑的", sentence: "I am baffled!", translation: "我很困惑！", homophoneSentence: "艾姆巴夫尔德!" },
        { word: "Puzzled", phonetic: "/ˈpʌzld/", homophone: "帕兹尔德", meaning: "迷惑的", sentence: "I am puzzled!", translation: "我很迷惑！", homophoneSentence: "艾姆帕兹尔德!" },
        { word: "Confused", phonetic: "/kənˈfjuːzd/", homophone: "康菲优兹德", meaning: "困惑的", sentence: "I am confused!", translation: "我很困惑！", homophoneSentence: "艾姆康菲优兹德!" },
        { word: "Disoriented", phonetic: "/dɪsˈɔːrientɪd/", homophone: "迪斯奥瑞恩提德", meaning: "迷失方向的", sentence: "I feel disoriented!", translation: "我感到迷失方向！", homophoneSentence: "爱菲尔迪斯奥瑞恩提德!" },
        { word: "Lost", phonetic: "/lɒst/", homophone: "洛斯特", meaning: "迷茫的", sentence: "I feel lost!", translation: "我感到迷茫！", homophoneSentence: "爱菲尔洛斯特!" },
        { word: "Uncertain", phonetic: "/ʌnˈsɜːtn/", homophone: "安瑟腾", meaning: "不确定的", sentence: "I feel uncertain!", translation: "我不确定！", homophoneSentence: "爱菲尔安瑟腾!" },
        { word: "Doubtful", phonetic: "/ˈdaʊtfl/", homophone: "道特夫欧", meaning: "怀疑的", sentence: "I am doubtful!", translation: "我很怀疑！", homophoneSentence: "艾姆道特夫欧!" },
        { word: "Skeptical", phonetic: "/ˈskeptɪkl/", homophone: "斯凯普提克尔", meaning: "怀疑的", sentence: "I am skeptical!", translation: "我很怀疑！", homophoneSentence: "艾姆斯凯普提克尔!" },
        { word: "Suspicious", phonetic: "/səˈspɪʃəs/", homophone: "色斯皮修斯", meaning: "怀疑的", sentence: "I am suspicious!", translation: "我很怀疑！", homophoneSentence: "艾姆色斯皮修斯!" },
        { word: "Cautious", phonetic: "/ˈkɔːʃəs/", homophone: "考修斯", meaning: "谨慎的", sentence: "I am cautious!", translation: "我很谨慎！", homophoneSentence: "艾姆考修斯!" },
        { word: "Wary", phonetic: "/ˈweəri/", homophone: "威瑞", meaning: "警惕的", sentence: "I am wary!", translation: "我很警惕！", homophoneSentence: "艾姆威瑞!" },
        { word: "Guarded", phonetic: "/ˈɡɑːdɪd/", homophone: "加迪德", meaning: "谨慎的", sentence: "I am guarded!", translation: "我很谨慎！", homophoneSentence: "艾姆加迪德!" },
        { word: "Reserved", phonetic: "/rɪˈzɜːvd/", homophone: "瑞泽夫德", meaning: "含蓄的", sentence: "I am reserved!", translation: "我很含蓄！", homophoneSentence: "艾姆瑞泽夫德!" },
        { word: "Withdrawn", phonetic: "/wɪðˈdrɔːn/", homophone: "威兹德龙", meaning: "孤僻的", sentence: "I feel withdrawn!", translation: "我感到孤僻！", homophoneSentence: "爱菲尔威兹德龙!" },
        { word: "Indifferent", phonetic: "/ɪnˈdɪfrənt/", homophone: "因迪夫伦特", meaning: "漠不关心的", sentence: "I am indifferent!", translation: "我漠不关心！", homophoneSentence: "艾姆因迪夫伦特!" },
        { word: "Apathetic", phonetic: "/ˌæpəˈθetɪk/", homophone: "阿帕塞提克", meaning: "冷漠的", sentence: "I feel apathetic!", translation: "我感到冷漠！", homophoneSentence: "爱菲尔阿帕塞提克!" },
        { word: "Uninterested", phonetic: "/ʌnˈɪntrəstɪd/", homophone: "安因特瑞斯蒂德", meaning: "不感兴趣的", sentence: "I am uninterested!", translation: "我不感兴趣！", homophoneSentence: "艾姆安因特瑞斯蒂德!" },
        { word: "Bored", phonetic: "/bɔːd/", homophone: "博德", meaning: "无聊的", sentence: "I am bored!", translation: "我很无聊！", homophoneSentence: "艾姆博德!" },
        { word: "Weary", phonetic: "/ˈwɪəri/", homophone: "威瑞", meaning: "疲倦的", sentence: "I feel weary!", translation: "我感到疲倦！", homophoneSentence: "爱菲尔威瑞!" },
        { word: "Exhausted", phonetic: "/ɪɡˈzɔːstɪd/", homophone: "伊格佐斯蒂德", meaning: "筋疲力尽的", sentence: "I am exhausted!", translation: "我筋疲力尽了！", homophoneSentence: "艾姆伊格佐斯蒂德!" },
        { word: "Drained", phonetic: "/dreɪnd/", homophone: "德瑞恩德", meaning: "精疲力竭的", sentence: "I feel drained!", translation: "我感到精疲力竭！", homophoneSentence: "爱菲尔德瑞恩德!" },
        { word: "Burned out", phonetic: "/bɜːnd aʊt/", homophone: "伯恩德奥特", meaning: " burnout的", sentence: "I am burned out!", translation: "我 burnout了！", homophoneSentence: "艾姆伯恩德奥特!" },
        { word: "Overwhelmed", phonetic: "/ˌəʊvəˈwelmd/", homophone: "欧夫威尔姆德", meaning: "不知所措的", sentence: "I feel overwhelmed!", translation: "我感到不知所措！", homophoneSentence: "爱菲尔欧夫威尔姆德!" },
        { word: "Stuck", phonetic: "/stʌk/", homophone: "斯塔克", meaning: "被困住的", sentence: "I feel stuck!", translation: "我感到被困住了！", homophoneSentence: "爱菲尔斯塔克!" },
        { word: "Trapped", phonetic: "/træpt/", homophone: "特拉普特", meaning: "被困的", sentence: "I feel trapped!", translation: "我感到被困了！", homophoneSentence: "爱菲尔特拉普特!" },
        { word: "Confined", phonetic: "/kənˈfaɪnd/", homophone: "康法艾恩德", meaning: "受限制的", sentence: "I feel confined!", translation: "我感到受限制！", homophoneSentence: "爱菲尔康法艾恩德!" },
        { word: "Restricted", phonetic: "/rɪˈstrɪktɪd/", homophone: "瑞斯崔克提德", meaning: "受限制的", sentence: "I feel restricted!", translation: "我感到受限制！", homophoneSentence: "爱菲尔瑞斯崔克提德!" },
        { word: "Limited", phonetic: "/ˈlɪmɪtɪd/", homophone: "利米提德", meaning: "有限的", sentence: "I feel limited!", translation: "我感到有限！", homophoneSentence: "爱菲尔利米提德!" },
        { word: "Powerless", phonetic: "/ˈpaʊələs/", homophone: "鲍威尔勒斯", meaning: "无力的", sentence: "I feel powerless!", translation: "我感到无力！", homophoneSentence: "爱菲尔鲍威尔勒斯!" },
        { word: "Helpless", phonetic: "/ˈhelpləs/", homophone: "海尔普勒斯", meaning: "无助的", sentence: "I feel helpless!", translation: "我感到无助！", homophoneSentence: "爱菲尔海尔普勒斯!" },
        { word: "Vulnerable", phonetic: "/ˈvʌlnərəbl/", homophone: "瓦尔纳瑞波欧", meaning: "脆弱的", sentence: "I feel vulnerable!", translation: "我感到脆弱！", homophoneSentence: "爱菲尔瓦尔纳瑞波欧!" },
        { word: "Exposed", phonetic: "/ɪkˈspəʊzd/", homophone: "伊克斯波兹德", meaning: "暴露的", sentence: "I feel exposed!", translation: "我感到暴露！", homophoneSentence: "爱菲尔伊克斯波兹德!" },
        { word: "Insecure", phonetic: "/ˌɪnsɪˈkjʊə/", homophone: "因西克优尔", meaning: "不安全的", sentence: "I feel insecure!", translation: "我感到不安全！", homophoneSentence: "爱菲尔因西克优尔!" },
        { word: "Inferior", phonetic: "/ɪnˈfɪəriə/", homophone: "因菲瑞尔", meaning: "自卑的", sentence: "I feel inferior!", translation: "我感到自卑！", homophoneSentence: "爱菲尔因菲瑞尔!" },
        { word: "Worthless", phonetic: "/ˈwɜːθləs/", homophone: "沃斯勒斯", meaning: "无价值的", sentence: "I feel worthless!", translation: "我感到无价值！", homophoneSentence: "爱菲尔沃斯勒斯!" },
        { word: "Inadequate", phonetic: "/ɪnˈædɪkwət/", homophone: "因阿迪奎特", meaning: "不足的", sentence: "I feel inadequate!", translation: "我感到不足！", homophoneSentence: "爱菲尔因阿迪奎特!" },
        { word: "Incompetent", phonetic: "/ɪnˈkɒmpɪtənt/", homophone: "因康皮特恩特", meaning: "无能的", sentence: "I feel incompetent!", translation: "我感到无能！", homophoneSentence: "爱菲尔因康皮特恩特!" },
        { word: "Unworthy", phonetic: "/ʌnˈwɜːði/", homophone: "安沃斯", meaning: "不值得的", sentence: "I feel unworthy!", translation: "我感到不值得！", homophoneSentence: "爱菲尔安沃斯!" },
        { word: "Ashamed", phonetic: "/əˈʃeɪmd/", homophone: "阿什艾姆德", meaning: "羞愧的", sentence: "I feel ashamed!", translation: "我感到羞愧！", homophoneSentence: "爱菲尔阿什艾姆德!" },
        { word: "Embarrassed", phonetic: "/ɪmˈbærəst/", homophone: "伊姆巴瑞斯特", meaning: "尴尬的", sentence: "I am embarrassed!", translation: "我很尴尬！", homophoneSentence: "艾姆伊姆巴瑞斯特!" },
        { word: "Humiliated", phonetic: "/hjuːˈmɪlieɪtɪd/", homophone: "休米利埃提德", meaning: "羞辱的", sentence: "I feel humiliated!", translation: "我感到羞辱！", homophoneSentence: "爱菲尔休米利埃提德!" },
        { word: "Disgraced", phonetic: "/dɪsˈɡreɪst/", homophone: "迪斯格瑞斯特", meaning: "耻辱的", sentence: "I feel disgraced!", translation: "我感到耻辱！", homophoneSentence: "爱菲尔迪斯格瑞斯特!" },
        { word: "Guilty", phonetic: "/ˈɡɪlti/", homophone: "吉尔提", meaning: "内疚的", sentence: "I feel guilty!", translation: "我感到内疚！", homophoneSentence: "爱菲尔吉尔提!" },
        { word: "Remorseful", phonetic: "/rɪˈmɔːsfl/", homophone: "瑞莫斯夫欧", meaning: "悔恨的", sentence: "I feel remorseful!", translation: "我感到悔恨！", homophoneSentence: "爱菲尔瑞莫斯夫欧!" },
        { word: "Regretful", phonetic: "/rɪˈɡretfl/", homophone: "瑞格瑞特夫欧", meaning: "后悔的", sentence: "I feel regretful!", translation: "我感到后悔！", homophoneSentence: "爱菲尔瑞格瑞特夫欧!" },
        { word: "Contrite", phonetic: "/ˈkɒntraɪt/", homophone: "康特瑞特", meaning: "悔悟的", sentence: "I feel contrite!", translation: "我感到悔悟！", homophoneSentence: "爱菲尔康特瑞特!" },
        { word: "Penitent", phonetic: "/ˈpenɪtənt/", homophone: "佩尼腾特", meaning: "忏悔的", sentence: "I feel penitent!", translation: "我感到忏悔！", homophoneSentence: "爱菲尔佩尼腾特!" },
        { word: "Forgiven", phonetic: "/fəˈɡɪvn/", homophone: "夫给文", meaning: "被宽恕的", sentence: "I feel forgiven!", translation: "我感到被宽恕！", homophoneSentence: "爱菲尔夫给文!" },
        { word: "Relieved", phonetic: "/rɪˈliːvd/", homophone: "瑞利夫德", meaning: "释然的", sentence: "I feel relieved!", translation: "我感到释然！", homophoneSentence: "爱菲尔瑞利夫德!" },
        { word: "Liberated", phonetic: "/ˈlɪbəreɪtɪd/", homophone: "利伯瑞提德", meaning: "解放的", sentence: "I feel liberated!", translation: "我感到解放！", homophoneSentence: "爱菲尔利伯瑞提德!" },
        { word: "Free", phonetic: "/friː/", homophone: "弗里", meaning: "自由的", sentence: "I feel free!", translation: "我感到自由！", homophoneSentence: "爱菲尔弗里!" },
        { word: "Light", phonetic: "/laɪt/", homophone: "莱特", meaning: "轻松的", sentence: "I feel light!", translation: "我感到轻松！", homophoneSentence: "爱菲尔莱特!" },
        { word: "Peaceful", phonetic: "/ˈpiːsfl/", homophone: "皮斯夫欧", meaning: "平静的", sentence: "I feel peaceful!", translation: "我感到平静！", homophoneSentence: "爱菲尔皮斯夫欧!" },
        { word: "Serene", phonetic: "/səˈriːn/", homophone: "色瑞恩", meaning: "宁静的", sentence: "I feel serene!", translation: "我感到宁静！", homophoneSentence: "爱菲尔色瑞恩!" },
        { word: "Tranquil", phonetic: "/ˈtræŋkwɪl/", homophone: "特兰克威尔", meaning: "安宁的", sentence: "I feel tranquil!", translation: "我感到安宁！", homophoneSentence: "爱菲尔特兰克威尔!" },
        { word: "Calm", phonetic: "/kɑːm/", homophone: "卡姆", meaning: "冷静的", sentence: "I feel calm!", translation: "我感到冷静！", homophoneSentence: "爱菲尔卡姆!" },
        { word: "Composed", phonetic: "/kəmˈpəʊzd/", homophone: "康波兹德", meaning: "沉着的", sentence: "I feel composed!", translation: "我感到沉着！", homophoneSentence: "爱菲尔康波兹德!" },
        { word: "Centered", phonetic: "/ˈsentəd/", homophone: "森特德", meaning: "专注的", sentence: "I feel centered!", translation: "我感到专注！", homophoneSentence: "爱菲尔森特德!" },
        { word: "Balanced", phonetic: "/ˈbælənst/", homophone: "巴伦斯德", meaning: "平衡的", sentence: "I feel balanced!", translation: "我感到平衡！", homophoneSentence: "爱菲尔巴伦斯德!" },
        { word: "Harmonious", phonetic: "/hɑːˈməʊniəs/", homophone: "哈莫尼尔斯", meaning: "和谐的", sentence: "I feel harmonious!", translation: "我感到和谐！", homophoneSentence: "爱菲尔哈莫尼尔斯!" },
        { word: "Unified", phonetic: "/ˈjuːnɪfaɪd/", homophone: "尤尼法艾德", meaning: "统一的", sentence: "I feel unified!", translation: "我感到统一！", homophoneSentence: "爱菲尔尤尼法艾德!" },
        { word: "Connected", phonetic: "/kəˈnektɪd/", homophone: "康内克提德", meaning: "连接的", sentence: "I feel connected!", translation: "我感到连接！", homophoneSentence: "爱菲尔康内克提德!" },
        { word: "Loved", phonetic: "/lʌvd/", homophone: "拉夫德", meaning: "被爱的", sentence: "I feel loved!", translation: "我感到被爱！", homophoneSentence: "爱菲尔拉夫德!" },
        { word: "Cherished", phonetic: "/ˈtʃerɪʃt/", homophone: "切瑞什特", meaning: "珍爱的", sentence: "I feel cherished!", translation: "我感到被珍爱！", homophoneSentence: "爱菲尔切瑞什特!" },
        { word: "Valued", phonetic: "/ˈvæljuːd/", homophone: "瓦尔优德", meaning: "受重视的", sentence: "I feel valued!", translation: "我感到受重视！", homophoneSentence: "爱菲尔瓦尔优德!" },
        { word: "Appreciated", phonetic: "/əˈpriːʃieɪtɪd/", homophone: "阿普瑞希埃提德", meaning: "被赏识的", sentence: "I feel appreciated!", translation: "我感到被赏识！", homophoneSentence: "爱菲尔阿普瑞希埃提德!" },
        { word: "Respected", phonetic: "/rɪˈspektɪd/", homophone: "瑞斯佩克提德", meaning: "受尊敬的", sentence: "I feel respected!", translation: "我感到受尊敬！", homophoneSentence: "爱菲尔瑞斯佩克提德!" },
        { word: "Admired", phonetic: "/ədˈmaɪəd/", homophone: "阿德迈尔德", meaning: "被钦佩的", sentence: "I feel admired!", translation: "我感到被钦佩！", homophoneSentence: "爱菲尔阿德迈尔德!" },
        { word: "Honored", phonetic: "/ˈɒnəd/", homophone: "奥纳德", meaning: "荣幸的", sentence: "I feel honored!", translation: "我感到荣幸！", homophoneSentence: "爱菲尔奥纳德!" },
        { word: "Proud", phonetic: "/praʊd/", homophone: "普柔德", meaning: "骄傲的", sentence: "I feel proud!", translation: "我感到骄傲！", homophoneSentence: "爱菲尔普柔德!" },
        { word: "Accomplished", phonetic: "/əˈkʌmplɪʃt/", homophone: "阿康普利什特", meaning: "有成就的", sentence: "I feel accomplished!", translation: "我感到有成就！", homophoneSentence: "爱菲尔阿康普利什特!" },
        { word: "Fulfilled", phonetic: "/fʊlˈfɪld/", homophone: "富尔菲尔德", meaning: "满足的", sentence: "I feel fulfilled!", translation: "我感到满足！", homophoneSentence: "爱菲尔富尔菲尔德!" },
        { word: "Satisfied", phonetic: "/ˈsætɪsfaɪd/", homophone: "萨提斯法艾德", meaning: "满意的", sentence: "I feel satisfied!", translation: "我感到满意！", homophoneSentence: "爱菲尔萨提斯法艾德!" },
        { word: "Complete", phonetic: "/kəmˈpliːt/", homophone: "康普利特", meaning: "完整的", sentence: "I feel complete!", translation: "我感到完整！", homophoneSentence: "爱菲尔康普利特!" },
        { word: "Whole", phonetic: "/həʊl/", homophone: "霍尔", meaning: "完整的", sentence: "I feel whole!", translation: "我感到完整！", homophoneSentence: "爱菲尔霍尔!" }
    ];
    
    // 添加函数
    function addWordsToCategory(category, words) {
        let addedCount = 0;
        
        words.forEach(newWord => {
            if (!allWords.has(newWord.word.toLowerCase())) {
                const categoryStart = data.indexOf(`${category}: [`);
                if (categoryStart !== -1) {
                    let openBrackets = 1;
                    let categoryEnd = categoryStart + `${category}: [`.length;
                    while (openBrackets > 0 && categoryEnd < data.length) {
                        if (data[categoryEnd] === '[') openBrackets++;
                        else if (data[categoryEnd] === ']') openBrackets--;
                        categoryEnd++;
                    }
                    
                    if (openBrackets === 0) {
                        const insertPosition = data.lastIndexOf(']', categoryEnd);
                        const newWordString = `        { word: "${newWord.word}", phonetic: "${newWord.phonetic}", homophone: "${newWord.homophone}", meaning: "${newWord.meaning}", sentence: "${newWord.sentence}", translation: "${newWord.translation}", homophoneSentence: "${newWord.homophoneSentence}" },`;
                        data = data.substring(0, insertPosition) + '\n' + newWordString + '\n' + data.substring(insertPosition);
                        allWords.add(newWord.word.toLowerCase());
                        addedCount++;
                    }
                }
            }
        });
        
        return addedCount;
    }
    
    // 添加 greetings 单词
    const greetingsAdded = addWordsToCategory('greetings', greetingsWords);
    console.log(`Greetings 分类添加了 ${greetingsAdded} 个新单词`);
    
    // 添加 emotions 单词
    const emotionsAdded = addWordsToCategory('emotions', emotionsWords);
    console.log(`Emotions 分类添加了 ${emotionsAdded} 个新单词`);
    
    // 保存文件
    fs.writeFileSync('word-data.js', data, 'utf8');
    console.log('word-data.js 已更新');
    console.log(`第一批总共添加了 ${greetingsAdded + emotionsAdded} 个新单词`);
    
} catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
}