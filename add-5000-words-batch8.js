const fs = require('fs');

const data = fs.readFileSync('word-data.js', 'utf8');

const existingWords = new Set();
const wordRegex = /word:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = wordRegex.exec(data)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

const newWords = {
    greetings: [
        { word: "Have a nice day", phonetic: "/hæv ə naɪs deɪ/", homophone: "哈夫阿奈斯戴", meaning: "祝你今天愉快", sentence: "Have a nice day!", translation: "祝你今天愉快！", homophoneSentence: "哈夫阿奈斯戴!" },
        { word: "Have a good one", phonetic: "/hæv ə ɡʊd wʌn/", homophone: "哈夫阿古德万", meaning: "祝你愉快", sentence: "Have a good one!", translation: "祝你愉快！", homophoneSentence: "哈夫阿古德万!" },
        { word: "Take it easy", phonetic: "/teɪk ɪt ˈiːzi/", homophone: "泰克伊特伊齐", meaning: "保重", sentence: "Take it easy, friend!", translation: "保重，朋友！", homophoneSentence: "泰克伊特伊齐,弗伦德!" },
        { word: "See you soon", phonetic: "/siː juː suːn/", homophone: "西油苏恩", meaning: "很快见", sentence: "See you soon!", translation: "很快见！", homophoneSentence: "西油苏恩!" },
        { word: "See you around", phonetic: "/siː juː əˈraʊnd/", homophone: "西油阿劳恩德", meaning: "回头见", sentence: "See you around!", translation: "回头见！", homophoneSentence: "西油阿劳恩德!" },
        { word: "Until next time", phonetic: "/ənˈtɪl nekst taɪm/", homophone: "安蒂尔内克斯特泰姆", meaning: "下次见", sentence: "Until next time!", translation: "下次见！", homophoneSentence: "安蒂尔内克斯特泰姆!" },
        { word: "Keep in touch", phonetic: "/kiːp ɪn tʌtʃ/", homophone: "基普因塔奇", meaning: "保持联系", sentence: "Keep in touch!", translation: "保持联系！", homophoneSentence: "基普因塔奇!" },
        { word: "Don't be a stranger", phonetic: "/dəʊnt biː ə ˈstreɪndʒə/", homophone: "东特比阿斯特兰杰", meaning: "别疏远了", sentence: "Don't be a stranger!", translation: "别疏远了！", homophoneSentence: "东特比阿斯特兰杰!" },
        { word: "Stay safe", phonetic: "/steɪ seɪf/", homophone: "斯泰塞夫", meaning: "注意安全", sentence: "Stay safe!", translation: "注意安全！", homophoneSentence: "斯泰塞夫!" },
        { word: "All the best", phonetic: "/ɔːl ðə best/", homophone: "奥尔泽贝斯特", meaning: "一切顺利", sentence: "All the best to you!", translation: "祝你一切顺利！", homophoneSentence: "奥尔泽贝斯特图油!" }
    ],
    emotions: [
        { word: "Anxious", phonetic: "/ˈæŋkʃəs/", homophone: "安克沙斯", meaning: "焦虑的", sentence: "I feel anxious about the exam.", translation: "我对考试感到焦虑。", homophoneSentence: "爱菲尔安克沙斯阿鲍特泽伊格扎姆." },
        { word: "Nervous", phonetic: "/ˈnɜːvəs/", homophone: "纳沃斯", meaning: "紧张的", sentence: "I'm nervous about the interview.", translation: "我对面试感到紧张。", homophoneSentence: "爱姆纳沃斯阿鲍特泽因特维尤." },
        { word: "Worried", phonetic: "/ˈwʌrid/", homophone: "沃里德", meaning: "担心的", sentence: "I'm worried about him.", translation: "我担心他。", homophoneSentence: "爱姆沃里德阿鲍特希姆." },
        { word: "Concerned", phonetic: "/kənˈsɜːnd/", homophone: "康瑟恩德", meaning: "关心的", sentence: "I'm concerned about the situation.", translation: "我对情况感到关心。", homophoneSentence: "爱姆康瑟恩德阿鲍特泽西图埃申." },
        { word: "Apprehensive", phonetic: "/ˌæprɪˈhensɪv/", homophone: "阿普里亨西夫", meaning: "忧虑的", sentence: "I'm apprehensive about the future.", translation: "我对未来感到忧虑。", homophoneSentence: "爱姆阿普里亨西夫阿鲍特泽菲尤彻." },
        { word: "Uneasy", phonetic: "/ʌnˈiːzi/", homophone: "安伊齐", meaning: "不安的", sentence: "I feel uneasy about this.", translation: "我对此感到不安。", homophoneSentence: "爱菲尔安伊齐阿鲍特泽斯." },
        { word: "Restless", phonetic: "/ˈrestləs/", homophone: "雷斯特勒斯", meaning: "不安的", sentence: "I feel restless tonight.", translation: "我今晚感到不安。", homophoneSentence: "爱菲尔雷斯特勒斯特奈特." },
        { word: "Tense", phonetic: "/tens/", homophone: "滕斯", meaning: "紧张的", sentence: "The atmosphere is tense.", translation: "气氛很紧张。", homophoneSentence: "泽埃特莫斯菲尔伊兹滕斯." },
        { word: "Stressed", phonetic: "/strest/", homophone: "斯特雷斯特", meaning: "压力大的", sentence: "I'm feeling stressed.", translation: "我感到压力很大。", homophoneSentence: "爱姆菲林斯特雷斯特." },
        { word: "Overwhelmed", phonetic: "/ˌəʊvəˈwelmd/", homophone: "欧沃韦尔姆德", meaning: "不知所措的", sentence: "I feel overwhelmed by work.", translation: "工作让我不知所措。", homophoneSentence: "爱菲尔欧沃韦尔姆德拜沃克." }
    ],
    numbers: [
        { word: "Ninetieth", phonetic: "/ˈnaɪntiəθ/", homophone: "奈恩蒂厄斯", meaning: "第九十", sentence: "It's the ninetieth anniversary.", translation: "这是九十周年纪念日。", homophoneSentence: "伊茨泽奈恩蒂厄斯阿尼弗萨里." },
        { word: "Hundredth", phonetic: "/ˈhʌndrədθ/", homophone: "亨德里德思", meaning: "第一百", sentence: "It's the hundredth episode.", translation: "这是第一百集。", homophoneSentence: "伊茨泽亨德里德思埃皮索德." },
        { word: "Thousandth", phonetic: "/ˈθaʊzəndθ/", homophone: "绍赞德思", meaning: "第一千", sentence: "It's the thousandth customer.", translation: "这是第一千位顾客。", homophoneSentence: "伊茨泽绍赞德思卡斯特默." },
        { word: "Millionth", phonetic: "/ˈmɪljənθ/", homophone: "米尔里恩思", meaning: "第一百万", sentence: "The millionth visitor won a prize.", translation: "第一百万位访客赢得了奖品。", homophoneSentence: "泽米尔里恩思维齐特旺阿普莱兹." },
        { word: "Billionth", phonetic: "/ˈbɪljənθ/", homophone: "比利恩思", meaning: "第十亿", sentence: "The billionth download.", translation: "第十亿次下载。", homophoneSentence: "泽比利恩思道恩洛德." },
        { word: "Once", phonetic: "/wʌns/", homophone: "万斯", meaning: "一次", sentence: "I've been there once.", translation: "我去过那里一次。", homophoneSentence: "艾夫宾泽尔万斯." },
        { word: "Twice", phonetic: "/twaɪs/", homophone: "特瓦伊斯", meaning: "两次", sentence: "I've told you twice.", translation: "我告诉过你两次了。", homophoneSentence: "艾夫托尔德油特瓦伊斯." },
        { word: "Thrice", phonetic: "/θraɪs/", homophone: "斯莱斯", meaning: "三次", sentence: "I've checked it thrice.", translation: "我检查了三次。", homophoneSentence: "艾夫切克特伊特斯莱斯." },
        { word: "Zero", phonetic: "/ˈzɪərəʊ/", homophone: "齐罗", meaning: "零", sentence: "The temperature is zero.", translation: "温度是零度。", homophoneSentence: "泽滕珀拉彻伊兹齐罗." },
        { word: "Nil", phonetic: "/nɪl/", homophone: "尼尔", meaning: "零", sentence: "The score was three-nil.", translation: "比分是三比零。", homophoneSentence: "泽斯科沃兹斯里尼尔." }
    ],
    colors: [
        { word: "Sienna", phonetic: "/siˈenə/", homophone: "西埃纳", meaning: "赭色", sentence: "Sienna is an earthy color.", translation: "赭色是一种土色。", homophoneSentence: "西埃纳伊兹安厄西卡勒." },
        { word: "Ochre", phonetic: "/ˈəʊkə/", homophone: "欧克", meaning: "赭石色", sentence: "Ochre is a natural pigment.", translation: "赭石色是一种天然颜料。", homophoneSentence: "欧克伊兹阿纳彻拉尔皮格门特." },
        { word: "Rust", phonetic: "/rʌst/", homophone: "拉斯特", meaning: "铁锈色", sentence: "Rust is a reddish-brown.", translation: "铁锈色是一种红棕色。", homophoneSentence: "拉斯特伊兹阿雷迪什布劳恩." },
        { word: "Terracotta", phonetic: "/ˌterəˈkɒtə/", homophone: "特拉科塔", meaning: "赤陶色", sentence: "Terracotta pots are classic.", translation: "赤陶花盆很经典。", homophoneSentence: "特拉科塔波茨阿克拉斯克." },
        { word: "Cinnamon", phonetic: "/ˈsɪnəmən/", homophone: "西纳蒙", meaning: "肉桂色", sentence: "Cinnamon is a warm brown.", translation: "肉桂色是一种温暖的棕色。", homophoneSentence: "西纳蒙伊兹阿沃姆布劳恩." },
        { word: "Chestnut", phonetic: "/ˈtʃesnʌt/", homophone: "切斯纳特", meaning: "栗色", sentence: "Chestnut hair is beautiful.", translation: "栗色头发很美。", homophoneSentence: "切斯纳特黑尔伊兹比尤特福尔." },
        { word: "Chocolate", phonetic: "/ˈtʃɒklət/", homophone: "乔克利特", meaning: "巧克力色", sentence: "Chocolate brown is rich.", translation: "巧克力色很浓郁。", homophoneSentence: "乔克利特布劳恩伊兹里奇." },
        { word: "Coffee", phonetic: "/ˈkɒfi/", homophone: "科菲", meaning: "咖啡色", sentence: "Coffee brown is warm.", translation: "咖啡色很温暖。", homophoneSentence: "科菲布劳恩伊兹沃姆." },
        { word: "Mocha", phonetic: "/ˈmɒkə/", homophone: "莫卡", meaning: "摩卡色", sentence: "Mocha is a coffee brown.", translation: "摩卡色是一种咖啡棕。", homophoneSentence: "莫卡伊兹阿科菲布劳恩." },
        { word: "Espresso", phonetic: "/eˈspresəʊ/", homophone: "埃斯普雷索", meaning: "浓缩咖啡色", sentence: "Espresso is a dark brown.", translation: "浓缩咖啡色是一种深棕色。", homophoneSentence: "埃斯普雷索伊兹阿达克布劳恩." }
    ],
    family: [
        { word: "Spouse", phonetic: "/spaʊs/", homophone: "斯帕维斯", meaning: "配偶", sentence: "Bring your spouse to the party.", translation: "带你的配偶来参加派对。", homophoneSentence: "布林哟斯帕维斯图泽帕蒂." },
        { word: "Partner", phonetic: "/ˈpɑːtnə/", homophone: "帕特纳", meaning: "伴侣", sentence: "My partner is supportive.", translation: "我的伴侣很支持我。", homophoneSentence: "麦帕特纳伊兹萨波蒂夫." },
        { word: "Significant other", phonetic: "/sɪɡˈnɪfɪkənt ˈʌðə/", homophone: "西格尼菲坎特阿泽", meaning: "另一半", sentence: "Bring your significant other.", translation: "带上你的另一半。", homophoneSentence: "布林哟西格尼菲坎特阿泽." },
        { word: "Better half", phonetic: "/ˈbetə hɑːf/", homophone: "贝特哈夫", meaning: "另一半", sentence: "My better half is waiting.", translation: "我的另一半在等。", homophoneSentence: "麦贝特哈夫伊兹韦廷." },
        { word: "Soulmate", phonetic: "/ˈsəʊlmeɪt/", homophone: "索尔梅特", meaning: "灵魂伴侣", sentence: "She is my soulmate.", translation: "她是我的灵魂伴侣。", homophoneSentence: "希伊兹麦索尔梅特." },
        { word: "Fiancé", phonetic: "/fiˈɒnseɪ/", homophone: "菲昂塞", meaning: "未婚夫", sentence: "My fiancé proposed yesterday.", translation: "我的未婚夫昨天求婚了。", homophoneSentence: "麦菲昂塞普拉波兹德耶斯特迪." },
        { word: "Fiancée", phonetic: "/fiˈɒnseɪ/", homophone: "菲昂塞", meaning: "未婚妻", sentence: "His fiancée is beautiful.", translation: "他的未婚妻很美。", homophoneSentence: "希兹菲昂塞伊兹比尤特福尔." },
        { word: "Bride", phonetic: "/braɪd/", homophone: "布赖德", meaning: "新娘", sentence: "The bride looked stunning.", translation: "新娘看起来很美。", homophoneSentence: "泽布赖德卢克特斯塔宁." },
        { word: "Groom", phonetic: "/ɡruːm/", homophone: "格鲁姆", meaning: "新郎", sentence: "The groom was nervous.", translation: "新郎很紧张。", homophoneSentence: "泽格鲁姆沃兹纳沃斯." },
        { word: "Newlyweds", phonetic: "/ˈnjuːliwedz/", homophone: "纽利韦德兹", meaning: "新婚夫妇", sentence: "The newlyweds are happy.", translation: "新婚夫妇很幸福。", homophoneSentence: "泽纽利韦德兹阿哈皮." }
    ],
    time: [
        { word: "Seldom", phonetic: "/ˈseldəm/", homophone: "塞尔德姆", meaning: "很少", sentence: "I seldom go there.", translation: "我很少去那里。", homophoneSentence: "爱塞尔德姆戈泽尔." },
        { word: "Rarely", phonetic: "/ˈreəli/", homophone: "雷尔利", meaning: "很少", sentence: "I rarely eat out.", translation: "我很少在外面吃饭。", homophoneSentence: "爱雷尔利伊特奥特." },
        { word: "Hardly", phonetic: "/ˈhɑːdli/", homophone: "哈德利", meaning: "几乎不", sentence: "I hardly know him.", translation: "我几乎不认识他。", homophoneSentence: "爱哈德利诺希姆." },
        { word: "Barely", phonetic: "/ˈbeəli/", homophone: "贝利", meaning: "几乎不", sentence: "I barely finished on time.", translation: "我勉强按时完成。", homophoneSentence: "爱贝利菲尼什德昂泰姆." },
        { word: "Scarcely", phonetic: "/ˈskeəsli/", homophone: "斯凯尔斯利", meaning: "几乎不", sentence: "I can scarcely believe it.", translation: "我几乎不敢相信。", homophoneSentence: "爱坎斯凯尔斯利比利夫伊特." },
        { word: "Often", phonetic: "/ˈɒfn/", homophone: "奥芬", meaning: "经常", sentence: "I often visit there.", translation: "我经常去那里。", homophoneSentence: "爱奥芬维齐特泽尔." },
        { word: "Frequently", phonetic: "/ˈfriːkwəntli/", homophone: "弗里克温特利", meaning: "频繁地", sentence: "I frequently travel.", translation: "我经常旅行。", homophoneSentence: "爱弗里克温特利特拉维尔." },
        { word: "Regularly", phonetic: "/ˈreɡjələli/", homophone: "雷吉尤拉利", meaning: "定期地", sentence: "I exercise regularly.", translation: "我定期锻炼。", homophoneSentence: "爱埃克瑟赛兹雷吉尤拉利." },
        { word: "Daily", phonetic: "/ˈdeɪli/", homophone: "戴利", meaning: "每天", sentence: "I check my email daily.", translation: "我每天检查邮件。", homophoneSentence: "爱切克麦伊梅尔戴利." },
        { word: "Weekly", phonetic: "/ˈwiːkli/", homophone: "威克利", meaning: "每周", sentence: "We meet weekly.", translation: "我们每周见面。", homophoneSentence: "维米特威克利." }
    ],
    food: [
        { word: "Pie", phonetic: "/paɪ/", homophone: "派", meaning: "派", sentence: "Apple pie is classic.", translation: "苹果派很经典。", homophoneSentence: "阿普尔派伊兹克拉斯克." },
        { word: "Cake", phonetic: "/keɪk/", homophone: "凯克", meaning: "蛋糕", sentence: "Birthday cake is sweet.", translation: "生日蛋糕很甜。", homophoneSentence: "伯斯戴凯克伊兹斯威特." },
        { word: "Cookie", phonetic: "/ˈkʊki/", homophone: "库基", meaning: "曲奇", sentence: "Chocolate chip cookie.", translation: "巧克力曲奇。", homophoneSentence: "乔克利特奇普库基." },
        { word: "Brownie", phonetic: "/ˈbraʊni/", homophone: "布劳尼", meaning: "布朗尼", sentence: "Fudgy brownie is delicious.", translation: "软糖布朗尼很好吃。", homophoneSentence: "法吉布劳尼伊兹迪利谢斯." },
        { word: "Cheesecake", phonetic: "/ˈtʃiːzkeɪk/", homophone: "奇兹凯克", meaning: "芝士蛋糕", sentence: "New York cheesecake.", translation: "纽约芝士蛋糕。", homophoneSentence: "纽约奇兹凯克." },
        { word: "Tiramisu", phonetic: "/ˌtɪrəmɪˈsuː/", homophone: "蒂拉米苏", meaning: "提拉米苏", sentence: "Tiramisu is Italian.", translation: "提拉米苏是意大利的。", homophoneSentence: "蒂拉米苏伊兹伊塔利恩." },
        { word: "Pudding", phonetic: "/ˈpʊdɪŋ/", homophone: "普丁", meaning: "布丁", sentence: "Chocolate pudding.", translation: "巧克力布丁。", homophoneSentence: "乔克利特普丁." },
        { word: "Mousse", phonetic: "/muːs/", homophone: "穆斯", meaning: "慕斯", sentence: "Chocolate mousse is light.", translation: "巧克力慕斯很轻盈。", homophoneSentence: "乔克利特穆斯伊兹莱特." },
        { word: "Custard", phonetic: "/ˈkʌstəd/", homophone: "卡斯塔德", meaning: "蛋奶冻", sentence: "Custard is creamy.", translation: "蛋奶冻很滑腻。", homophoneSentence: "卡斯塔德伊兹克里米." },
        { word: "Gelato", phonetic: "/dʒəˈlɑːtəʊ/", homophone: "杰拉托", meaning: "意式冰淇淋", sentence: "Italian gelato is smooth.", translation: "意式冰淇淋很顺滑。", homophoneSentence: "伊塔利恩杰拉托伊兹斯穆斯." }
    ],
    conversations: [
        { word: "I'm not sure I understand", phonetic: "/aɪm nɒt ʃʊə aɪ ˌʌndəˈstænd/", homophone: "爱姆诺特舒尔爱安德斯坦德", meaning: "我不确定我理解了", sentence: "I'm not sure I understand.", translation: "我不确定我理解了。", homophoneSentence: "爱姆诺特舒尔爱安德斯坦德." },
        { word: "Could you clarify", phonetic: "/kʊd juː ˈklærəfaɪ/", homophone: "库德油克拉里法伊", meaning: "你能澄清一下吗", sentence: "Could you clarify that?", translation: "你能澄清一下吗？", homophoneSentence: "库德油克拉里法伊泽特?" },
        { word: "What do you mean by", phonetic: "/wɒt duː juː miːn baɪ/", homophone: "沃特度油米恩拜", meaning: "你说的...是什么意思", sentence: "What do you mean by that?", translation: "你那样说是什么意思？", homophoneSentence: "沃特度油米恩拜泽特?" },
        { word: "Can you give an example", phonetic: "/kæn juː ɡɪv ən ɪɡˈzɑːmpl/", homophone: "坎油吉夫安伊格扎姆普尔", meaning: "你能举个例子吗", sentence: "Can you give an example?", translation: "你能举个例子吗？", homophoneSentence: "坎油吉夫安伊格扎姆普尔?" },
        { word: "Let me make sure I understand", phonetic: "/let miː meɪk ʃʊə aɪ ˌʌndəˈstænd/", homophone: "莱特米梅克舒尔爱安德斯坦德", meaning: "让我确认我理解了", sentence: "Let me make sure I understand.", translation: "让我确认我理解了。", homophoneSentence: "莱特米梅克舒尔爱安德斯坦德." },
        { word: "So what you're saying is", phonetic: "/səʊ wɒt jɔː ˈseɪɪŋ ɪz/", homophone: "索沃特约塞英伊兹", meaning: "所以你的意思是", sentence: "So what you're saying is...", translation: "所以你的意思是...", homophoneSentence: "索沃特约塞英伊兹..." },
        { word: "In other words", phonetic: "/ɪn ˈʌðə wɜːdz/", homophone: "因阿泽沃德兹", meaning: "换句话说", sentence: "In other words, you mean...", translation: "换句话说，你的意思是...", homophoneSentence: "因阿泽沃德兹,油米恩..." },
        { word: "To put it simply", phonetic: "/tuː pʊt ɪt ˈsɪmpli/", homophone: "图普特伊特辛普利", meaning: "简单来说", sentence: "To put it simply...", translation: "简单来说...", homophoneSentence: "图普特伊特辛普利..." },
        { word: "Let me explain", phonetic: "/let miː ɪkˈspleɪn/", homophone: "莱特米伊克斯普莱恩", meaning: "让我解释", sentence: "Let me explain why.", translation: "让我解释原因。", homophoneSentence: "莱特米伊克斯普莱恩瓦伊." },
        { word: "The point I'm trying to make", phonetic: "/ðə pɔɪnt aɪm ˈtraɪɪŋ tuː meɪk/", homophone: "泽波因特爱姆特拉英图梅克", meaning: "我想表达的观点是", sentence: "The point I'm trying to make is...", translation: "我想表达的观点是...", homophoneSentence: "泽波因特爱姆特拉英图梅克伊兹..." }
    ],
    sentences: [
        { word: "You can lead a horse to water but you can't make it drink", phonetic: "/juː kæn liːd ə hɔːs tuː ˈwɔːtə bʌt juː kɑːnt meɪk ɪt drɪŋk/", homophone: "油坎利德阿霍斯图沃特巴特油坎特梅克伊特德林克", meaning: "你可以引马到河边但不能逼它喝水", sentence: "You can lead a horse to water but you can't make it drink.", translation: "你可以引马到河边但不能逼它喝水。", homophoneSentence: "油坎利德阿霍斯图沃特巴特油坎特梅克伊特德林克." },
        { word: "Don't count your chickens before they hatch", phonetic: "/dəʊnt kaʊnt jɔː ˈtʃɪkɪnz bɪˈfɔː ðeɪ hætʃ/", homophone: "东特考恩特哟奇肯兹比福泽伊哈奇", meaning: "不要过早乐观", sentence: "Don't count your chickens before they hatch.", translation: "不要过早乐观。", homophoneSentence: "东特考恩特哟奇肯兹比福泽伊哈奇." },
        { word: "A bird in the hand is worth two in the bush", phonetic: "/ə bɜːd ɪn ðə hænd ɪz wɜːθ tuː ɪn ðə bʊʃ/", homophone: "阿伯德因泽汉德伊兹沃斯图因泽布什", meaning: "一鸟在手胜过双鸟在林", sentence: "A bird in the hand is worth two in the bush.", translation: "一鸟在手胜过双鸟在林。", homophoneSentence: "阿伯德因泽汉德伊兹沃斯图因泽布什." },
        { word: "Don't bite off more than you can chew", phonetic: "/dəʊnt baɪt ɒf mɔː ðæn juː kæn tʃuː/", homophone: "东特拜特奥夫莫泽油坎丘", meaning: "不要贪多嚼不烂", sentence: "Don't bite off more than you can chew.", translation: "不要贪多嚼不烂。", homophoneSentence: "东特拜特奥夫莫泽油坎丘." },
        { word: "The devil is in the details", phonetic: "/ðə ˈdevl ɪz ɪn ðə ˈdiːteɪlz/", homophone: "泽德弗尔伊兹因泽迪泰尔兹", meaning: "细节决定成败", sentence: "The devil is in the details.", translation: "细节决定成败。", homophoneSentence: "泽德弗尔伊兹因泽迪泰尔兹." },
        { word: "Don't put the cart before the horse", phonetic: "/dəʊnt pʊt ðə kɑːt bɪˈfɔː ðə hɔːs/", homophone: "东特普特泽卡特比福泽霍斯", meaning: "不要本末倒置", sentence: "Don't put the cart before the horse.", translation: "不要本末倒置。", homophoneSentence: "东特普特泽卡特比福泽霍斯." },
        { word: "All that glitters is not gold", phonetic: "/ɔːl ðæt ˈɡlɪtəz ɪz nɒt ɡəʊld/", homophone: "奥尔泽特格利特兹伊兹诺特戈尔德", meaning: "发光的不一定是金子", sentence: "All that glitters is not gold.", translation: "发光的不一定是金子。", homophoneSentence: "奥尔泽特格利特兹伊兹诺特戈尔德." },
        { word: "Don't judge a book by its cover", phonetic: "/dəʊnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌvə/", homophone: "东特贾奇阿布克拜伊茨卡弗", meaning: "不要以貌取人", sentence: "Don't judge a book by its cover.", translation: "不要以貌取人。", homophoneSentence: "东特贾奇阿布克拜伊茨卡弗." },
        { word: "Honesty is the best policy", phonetic: "/ˈɒnəsti ɪz ðə best ˈpɒləsi/", homophone: "奥内斯蒂伊兹泽贝斯特波利西", meaning: "诚实是上策", sentence: "Honesty is the best policy.", translation: "诚实是上策。", homophoneSentence: "奥内斯蒂伊兹泽贝斯特波利西." },
        { word: "Patience is a virtue", phonetic: "/ˈpeɪʃəns ɪz ə ˈvɜːtʃuː/", homophone: "佩申斯伊兹阿弗丘", meaning: "耐心是一种美德", sentence: "Patience is a virtue.", translation: "耐心是一种美德。", homophoneSentence: "佩申斯伊兹阿弗丘." }
    ]
};

let addedCount = 0;
let newData = data;

for (const [category, words] of Object.entries(newWords)) {
    const categoryStart = newData.indexOf(`${category}: [`);
    if (categoryStart === -1) continue;
    
    const arrayStart = newData.indexOf('[', categoryStart);
    const arrayEnd = newData.indexOf(']', arrayStart);
    
    if (arrayStart === -1 || arrayEnd === -1) continue;
    
    const existingContent = newData.substring(arrayStart + 1, arrayEnd);
    const existingWordsInCategory = new Set();
    const existingWordRegex = /word:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = existingWordRegex.exec(existingContent)) !== null) {
        existingWordsInCategory.add(m[1].toLowerCase());
    }
    
    const wordsToAdd = words.filter(w => !existingWords.has(w.word.toLowerCase()) && !existingWordsInCategory.has(w.word.toLowerCase()));
    
    if (wordsToAdd.length === 0) continue;
    
    const newEntries = wordsToAdd.map(w => {
        return `        { word: "${w.word}", phonetic: '${w.phonetic}', homophone: '${w.homophone}', meaning: '${w.meaning}', sentence: '${w.sentence}', translation: '${w.translation}', homophoneSentence: '${w.homophoneSentence}' }`;
    }).join(',\n');
    
    const insertPosition = arrayEnd;
    const beforeInsert = newData.substring(0, insertPosition);
    const afterInsert = newData.substring(insertPosition);
    
    const needsComma = existingContent.trim().length > 0 && !existingContent.trim().endsWith(',');
    const separator = needsComma ? ',\n' : '\n';
    
    newData = beforeInsert + separator + newEntries + afterInsert;
    
    wordsToAdd.forEach(w => existingWords.add(w.word.toLowerCase()));
    addedCount += wordsToAdd.length;
    console.log(`${category}: 添加了 ${wordsToAdd.length} 个单词`);
}

fs.writeFileSync('word-data.js', newData, 'utf8');
console.log(`\n总共添加了 ${addedCount} 个新单词！`);
