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
        { word: "How's it hanging", phonetic: "/haʊz ɪt ˈhæŋɪŋ/", homophone: "好兹伊特汉金", meaning: "近况如何", sentence: "How's it hanging, buddy?", translation: "伙计，近况如何？", homophoneSentence: "好兹伊特汉金,巴迪?" },
        { word: "What's cooking", phonetic: "/wɒts ˈkʊkɪŋ/", homophone: "沃茨库金", meaning: "有什么新鲜事", sentence: "What's cooking, good looking?", translation: "有什么新鲜事，帅哥？", homophoneSentence: "沃茨库金,古德卢金?" },
        { word: "How's the family", phonetic: "/haʊz ðə ˈfæmɪli/", homophone: "好兹泽法米利", meaning: "家人怎么样", sentence: "How's the family doing?", translation: "家人怎么样？", homophoneSentence: "好兹泽法米利杜英?" },
        { word: "What's the good word", phonetic: "/wɒts ðə ɡʊd wɜːd/", homophone: "沃茨泽古德沃德", meaning: "有什么好消息", sentence: "What's the good word today?", translation: "今天有什么好消息？", homophoneSentence: "沃茨泽古德沃德特戴?" },
        { word: "How are things", phonetic: "/haʊ ɑː θɪŋz/", homophone: "好阿辛兹", meaning: "事情怎么样", sentence: "How are things with you?", translation: "你那边事情怎么样？", homophoneSentence: "好阿辛兹威兹油?" },
        { word: "What's the latest", phonetic: "/wɒts ðə ˈleɪtɪst/", homophone: "沃茨泽雷蒂斯特", meaning: "有什么最新消息", sentence: "What's the latest news?", translation: "有什么最新消息？", homophoneSentence: "沃茨泽雷蒂斯特纽兹?" },
        { word: "How's your day going", phonetic: "/haʊz jɔː deɪ ˈɡəʊɪŋ/", homophone: "好兹哟戴戈英", meaning: "你今天过得怎么样", sentence: "How's your day going so far?", translation: "你今天过得怎么样？", homophoneSentence: "好兹哟戴戈英索法?" },
        { word: "What have you been up to", phonetic: "/wɒt hæv juː biːn ʌp tuː/", homophone: "沃特哈夫油宾阿普图", meaning: "你最近在忙什么", sentence: "What have you been up to lately?", translation: "你最近在忙什么？", homophoneSentence: "沃特哈夫油宾阿普图雷特利?" },
        { word: "How's the weather", phonetic: "/haʊz ðə ˈweðə/", homophone: "好兹泽韦泽", meaning: "天气怎么样", sentence: "How's the weather there?", translation: "那边天气怎么样？", homophoneSentence: "好兹泽韦泽泽尔?" },
        { word: "Nice to meet you too", phonetic: "/naɪs tuː miːt juː tuː/", homophone: "奈斯图米特油图", meaning: "我也很高兴认识你", sentence: "Nice to meet you too!", translation: "我也很高兴认识你！", homophoneSentence: "奈斯图米特油图!" }
    ],
    emotions: [
        { word: "Enthusiastic", phonetic: "/ɪnˌθjuːziˈæstɪk/", homophone: "因苏齐阿斯蒂克", meaning: "热情的", sentence: "She's very enthusiastic.", translation: "她非常热情。", homophoneSentence: "希兹韦里因苏齐阿斯蒂克." },
        { word: "Passionate", phonetic: "/ˈpæʃənət/", homophone: "帕什纳特", meaning: "热情的", sentence: "He's passionate about music.", translation: "他对音乐充满热情。", homophoneSentence: "希兹帕什纳特阿鲍特缪齐克." },
        { word: "Dedicated", phonetic: "/ˈdedɪkeɪtɪd/", homophone: "德迪凯蒂德", meaning: "专注的", sentence: "She's dedicated to her work.", translation: "她专注于工作。", homophoneSentence: "希兹德迪凯蒂德图赫沃克." },
        { word: "Devoted", phonetic: "/dɪˈvəʊtɪd/", homophone: "迪沃蒂德", meaning: "忠诚的", sentence: "He's devoted to his family.", translation: "他对家人很忠诚。", homophoneSentence: "希兹迪沃蒂德图希兹法米利." },
        { word: "Committed", phonetic: "/kəˈmɪtɪd/", homophone: "科米蒂德", meaning: "坚定的", sentence: "I'm committed to this project.", translation: "我坚定地致力于这个项目。", homophoneSentence: "爱姆科米蒂德图泽斯普罗杰克特." },
        { word: "Determined", phonetic: "/dɪˈtɜːmɪnd/", homophone: "迪特明德", meaning: "坚决的", sentence: "She's determined to succeed.", translation: "她决心要成功。", homophoneSentence: "希兹迪特明德图萨克西德." },
        { word: "Resilient", phonetic: "/rɪˈzɪliənt/", homophone: "里齐利恩特", meaning: "有韧性的", sentence: "Children are resilient.", translation: "孩子们很有韧性。", homophoneSentence: "奇尔德伦阿里齐利恩特." },
        { word: "Tenacious", phonetic: "/təˈneɪʃəs/", homophone: "特内沙斯", meaning: "坚韧的", sentence: "She's a tenacious worker.", translation: "她是一个坚韧的工作者。", homophoneSentence: "希兹阿特内沙斯沃克." },
        { word: "Persistent", phonetic: "/pəˈsɪstənt/", homophone: "佩西斯坦特", meaning: "坚持不懈的", sentence: "Be persistent in your efforts.", translation: "坚持不懈地努力。", homophoneSentence: "比佩西斯坦特因哟埃福茨." },
        { word: "Ambitious", phonetic: "/æmˈbɪʃəs/", homophone: "安比沙斯", meaning: "有雄心的", sentence: "She's an ambitious young woman.", translation: "她是一个有雄心的年轻女性。", homophoneSentence: "希兹安安比沙斯扬沃曼." }
    ],
    numbers: [
        { word: "Dozen", phonetic: "/ˈdʌzn/", homophone: "达兹恩", meaning: "一打(12个)", sentence: "I need a dozen eggs.", translation: "我需要一打鸡蛋。", homophoneSentence: "爱尼德阿达兹恩埃格兹." },
        { word: "Score", phonetic: "/skɔː/", homophone: "斯科", meaning: "二十", sentence: "A score of years.", translation: "二十年。", homophoneSentence: "阿斯科阿夫耶尔兹." },
        { word: "Gross", phonetic: "/ɡrəʊs/", homophone: "格罗斯", meaning: "一罗(144个)", sentence: "A gross of pencils.", translation: "一罗铅笔。", homophoneSentence: "阿格罗斯阿夫彭西尔兹." },
        { word: "Pair", phonetic: "/peə/", homophone: "佩尔", meaning: "一对", sentence: "I need a pair of shoes.", translation: "我需要一双鞋。", homophoneSentence: "爱尼德阿佩尔阿夫舒兹." },
        { word: "Couple", phonetic: "/ˈkʌpl/", homophone: "卡普尔", meaning: "一对/几个", sentence: "A couple of days.", translation: "几天。", homophoneSentence: "阿卡普尔阿夫戴兹." },
        { word: "Few", phonetic: "/fjuː/", homophone: "菲尤", meaning: "几个", sentence: "I have a few ideas.", translation: "我有几个想法。", homophoneSentence: "爱哈夫阿菲尤艾迪亚兹." },
        { word: "Several", phonetic: "/ˈsevrəl/", homophone: "塞弗拉尔", meaning: "几个", sentence: "I've read several books.", translation: "我读了几本书。", homophoneSentence: "艾夫雷德塞弗拉尔布克斯." },
        { word: "Many", phonetic: "/ˈmeni/", homophone: "梅尼", meaning: "许多", sentence: "How many do you want?", translation: "你想要多少？", homophoneSentence: "好梅尼杜油旺特?" },
        { word: "Numerous", phonetic: "/ˈnjuːmərəs/", homophone: "纽默拉斯", meaning: "众多的", sentence: "There are numerous options.", translation: "有很多选择。", homophoneSentence: "泽尔阿纽默拉斯奥普申兹." },
        { word: "Countless", phonetic: "/ˈkaʊntləs/", homophone: "考恩特勒斯", meaning: "无数的", sentence: "There are countless stars.", translation: "有无数的星星。", homophoneSentence: "泽尔阿考恩特勒斯斯塔兹." }
    ],
    colors: [
        { word: "Charcoal", phonetic: "/ˈtʃɑːkəʊl/", homophone: "查科尔", meaning: "炭灰色", sentence: "Charcoal is a dark gray.", translation: "炭灰色是一种深灰色。", homophoneSentence: "查科尔伊兹阿达克格雷." },
        { word: "Slate", phonetic: "/sleɪt/", homophone: "斯莱特", meaning: "石板色", sentence: "Slate is a cool gray.", translation: "石板色是一种冷灰色。", homophoneSentence: "斯莱特伊兹阿库尔格雷." },
        { word: "Silver", phonetic: "/ˈsɪlvə/", homophone: "西尔弗", meaning: "银色", sentence: "Silver jewelry is elegant.", translation: "银首饰很优雅。", homophoneSentence: "西尔弗朱厄里伊兹埃勒甘特." },
        { word: "Platinum", phonetic: "/ˈplætɪnəm/", homophone: "普拉蒂纳姆", meaning: "铂金色", sentence: "Platinum blonde hair.", translation: "铂金色的头发。", homophoneSentence: "普拉蒂纳姆布隆德黑尔." },
        { word: "Gold", phonetic: "/ɡəʊld/", homophone: "戈尔德", meaning: "金色", sentence: "Gold is a precious metal.", translation: "金是一种贵金属。", homophoneSentence: "戈尔德伊兹阿普雷舍斯梅特尔." },
        { word: "Bronze", phonetic: "/brɒnz/", homophone: "布隆兹", meaning: "青铜色", sentence: "Bronze medal winner.", translation: "铜牌获得者。", homophoneSentence: "布隆兹梅德尔维纳." },
        { word: "Copper", phonetic: "/ˈkɒpə/", homophone: "科珀", meaning: "铜色", sentence: "Copper pots are beautiful.", translation: "铜锅很漂亮。", homophoneSentence: "科珀波茨阿比尤特福尔." },
        { word: "Rose gold", phonetic: "/rəʊz ɡəʊld/", homophone: "罗兹戈尔德", meaning: "玫瑰金", sentence: "Rose gold is trendy.", translation: "玫瑰金很流行。", homophoneSentence: "罗兹戈尔德伊兹特伦迪." },
        { word: "Champagne", phonetic: "/ʃæmˈpeɪn/", homophone: "香佩恩", meaning: "香槟色", sentence: "Champagne is elegant.", translation: "香槟色很优雅。", homophoneSentence: "香佩恩伊兹埃勒甘特." },
        { word: "Cream", phonetic: "/kriːm/", homophone: "克里姆", meaning: "奶油色", sentence: "Cream walls are warm.", translation: "奶油色的墙壁很温暖。", homophoneSentence: "克里姆沃尔兹阿沃姆." }
    ],
    family: [
        { word: "Youngest child", phonetic: "/ˈjʌŋɡɪst tʃaɪld/", homophone: "扬吉斯特柴尔德", meaning: "最小的孩子", sentence: "I am the youngest child.", translation: "我是最小的孩子。", homophoneSentence: "爱埃姆泽扬吉斯特柴尔德." },
        { word: "Middle child", phonetic: "/ˈmɪdl tʃaɪld/", homophone: "米德尔柴尔德", meaning: "中间的孩子", sentence: "The middle child syndrome.", translation: "中间孩子综合症。", homophoneSentence: "泽米德尔柴尔德辛德罗姆." },
        { word: "Firstborn", phonetic: "/ˈfɜːstbɔːn/", homophone: "弗斯特伯恩", meaning: "长子/长女", sentence: "The firstborn has responsibilities.", translation: "长子有责任。", homophoneSentence: "泽弗斯特伯恩哈兹里斯彭西比利蒂兹." },
        { word: "Lastborn", phonetic: "/ˈlɑːstbɔːn/", homophone: "拉斯特伯恩", meaning: "最小的孩子", sentence: "The lastborn is often spoiled.", translation: "最小的孩子通常被宠坏。", homophoneSentence: "泽拉斯特伯恩伊兹奥芬斯波伊尔德." },
        { word: "Extended family", phonetic: "/ɪkˈstendɪd ˈfæmɪli/", homophone: "伊克斯滕迪德法米利", meaning: "大家庭", sentence: "Our extended family is large.", translation: "我们的大家庭很大。", homophoneSentence: "奥尔伊克斯滕迪德法米利伊兹拉奇." },
        { word: "Nuclear family", phonetic: "/ˈnjuːkliə ˈfæmɪli/", homophone: "纽克利厄法米利", meaning: "核心家庭", sentence: "The nuclear family is common.", translation: "核心家庭很常见。", homophoneSentence: "泽纽克利厄法米利伊兹科蒙." },
        { word: "Single parent", phonetic: "/ˈsɪŋɡl ˈpeərənt/", homophone: "辛格尔佩伦特", meaning: "单亲家长", sentence: "She's a single parent.", translation: "她是一个单亲妈妈。", homophoneSentence: "希兹阿辛格尔佩伦特." },
        { word: "Adopted child", phonetic: "/əˈdɒptɪd tʃaɪld/", homophone: "阿多普蒂德柴尔德", meaning: "养子/养女", sentence: "They have an adopted child.", translation: "他们有一个养子。", homophoneSentence: "泽伊哈夫安阿多普蒂德柴尔德." },
        { word: "Foster child", phonetic: "/ˈfɒstə tʃaɪld/", homophone: "福斯特柴尔德", meaning: "寄养儿童", sentence: "They are foster parents.", translation: "他们是寄养父母。", homophoneSentence: "泽伊阿福斯特佩伦茨." },
        { word: "Half-brother", phonetic: "/hɑːf ˈbrʌðə/", homophone: "哈夫布拉泽", meaning: "同父异母/同母异父兄弟", sentence: "My half-brother lives in Canada.", translation: "我的异父兄弟住在加拿大。", homophoneSentence: "麦哈夫布拉泽利夫兹因卡纳达." }
    ],
    time: [
        { word: "Early", phonetic: "/ˈɜːli/", homophone: "厄利", meaning: "早的", sentence: "The early bird catches the worm.", translation: "早起的鸟儿有虫吃。", homophoneSentence: "泽厄利伯德凯奇兹泽沃姆." },
        { word: "Late", phonetic: "/leɪt/", homophone: "雷特", meaning: "晚的", sentence: "Better late than never.", translation: "迟做总比不做好。", homophoneSentence: "贝特雷特泽内弗." },
        { word: "On time", phonetic: "/ɒn taɪm/", homophone: "昂泰姆", meaning: "准时", sentence: "Please be on time.", translation: "请准时。", homophoneSentence: "普利斯比昂泰姆." },
        { word: "In time", phonetic: "/ɪn taɪm/", homophone: "因泰姆", meaning: "及时", sentence: "We arrived in time.", translation: "我们及时到达了。", homophoneSentence: "维阿莱夫德因泰姆." },
        { word: "Ahead of time", phonetic: "/əˈhed əv taɪm/", homophone: "阿赫德阿夫泰姆", meaning: "提前", sentence: "We finished ahead of time.", translation: "我们提前完成了。", homophoneSentence: "维菲尼什德阿赫德阿夫泰姆." },
        { word: "Behind schedule", phonetic: "/bɪˈhaɪnd ˈʃedjuːl/", homophone: "比海恩德谢杜尔", meaning: "落后于计划", sentence: "The project is behind schedule.", translation: "项目落后于计划。", homophoneSentence: "泽普罗杰克特伊兹比海恩德谢杜尔." },
        { word: "Ahead of schedule", phonetic: "/əˈhed əv ˈʃedjuːl/", homophone: "阿赫德阿夫谢杜尔", meaning: "提前于计划", sentence: "We are ahead of schedule.", translation: "我们提前于计划。", homophoneSentence: "维阿阿赫德阿夫谢杜尔." },
        { word: "From now on", phonetic: "/frɒm naʊ ɒn/", homophone: "弗罗姆诺昂", meaning: "从现在开始", sentence: "From now on, I'll study harder.", translation: "从现在开始，我会更努力学习。", homophoneSentence: "弗罗姆诺昂,爱尔斯塔迪哈德." },
        { word: "Sooner or later", phonetic: "/ˈsuːnə ɔː ˈleɪtə/", homophone: "苏纳奥尔雷特", meaning: "迟早", sentence: "Sooner or later, you'll understand.", translation: "迟早你会明白的。", homophoneSentence: "苏纳奥尔雷特,尤尔安德斯坦德." },
        { word: "Right now", phonetic: "/raɪt naʊ/", homophone: "赖特诺", meaning: "现在", sentence: "I need it right now!", translation: "我现在就需要！", homophoneSentence: "爱尼德伊特赖特诺!" }
    ],
    food: [
        { word: "Vegetables", phonetic: "/ˈvedʒtəblz/", homophone: "韦杰特布兹", meaning: "蔬菜", sentence: "Eat your vegetables!", translation: "吃你的蔬菜！", homophoneSentence: "伊特哟韦杰特布兹!" },
        { word: "Fruits", phonetic: "/fruːts/", homophone: "弗鲁茨", meaning: "水果", sentence: "Fresh fruits are healthy.", translation: "新鲜水果很健康。", homophoneSentence: "弗雷什弗鲁茨阿海尔希." },
        { word: "Meat", phonetic: "/miːt/", homophone: "米特", meaning: "肉类", sentence: "I don't eat meat.", translation: "我不吃肉。", homophoneSentence: "爱东特伊特米特." },
        { word: "Seafood", phonetic: "/ˈsiːfuːd/", homophone: "西弗德", meaning: "海鲜", sentence: "I love seafood.", translation: "我喜欢海鲜。", homophoneSentence: "爱拉夫西弗德." },
        { word: "Dairy", phonetic: "/ˈdeəri/", homophone: "戴里", meaning: "乳制品", sentence: "Dairy products are nutritious.", translation: "乳制品营养丰富。", homophoneSentence: "戴里普罗达克茨阿纽特里谢斯." },
        { word: "Grains", phonetic: "/ɡreɪnz/", homophone: "格雷恩兹", meaning: "谷物", sentence: "Whole grains are healthy.", translation: "全谷物很健康。", homophoneSentence: "霍尔格雷恩兹阿海尔希." },
        { word: "Legumes", phonetic: "/ˈleɡjuːmz/", homophone: "莱格尤姆兹", meaning: "豆类", sentence: "Legumes are protein-rich.", translation: "豆类富含蛋白质。", homophoneSentence: "莱格尤姆兹阿普罗廷里奇." },
        { word: "Nuts", phonetic: "/nʌts/", homophone: "纳茨", meaning: "坚果", sentence: "Nuts are a healthy snack.", translation: "坚果是健康的零食。", homophoneSentence: "纳茨阿阿海尔希斯内克." },
        { word: "Seeds", phonetic: "/siːdz/", homophone: "西兹", meaning: "种子", sentence: "Sunflower seeds are tasty.", translation: "葵花籽很好吃。", homophoneSentence: "桑弗劳尔西兹阿泰斯蒂." },
        { word: "Herbs", phonetic: "/hɜːbz/", homophone: "赫布兹", meaning: "香草", sentence: "Fresh herbs add flavor.", translation: "新鲜香草增添风味。", homophoneSentence: "弗雷什赫布兹埃德弗雷沃." }
    ],
    conversations: [
        { word: "I was wondering", phonetic: "/aɪ wɒz ˈwʌndərɪŋ/", homophone: "爱沃兹旺德林", meaning: "我在想", sentence: "I was wondering if you could help.", translation: "我在想你是否能帮忙。", homophoneSentence: "爱沃兹旺德林伊夫油库德赫尔普." },
        { word: "Would it be possible", phonetic: "/wʊd ɪt biː ˈpɒsəbl/", homophone: "武德伊特比波西布尔", meaning: "是否可能", sentence: "Would it be possible to meet tomorrow?", translation: "明天见面是否可能？", homophoneSentence: "武德伊特比波西布尔图米特托莫罗?" },
        { word: "I was hoping", phonetic: "/aɪ wɒz ˈhəʊpɪŋ/", homophone: "爱沃兹霍平", meaning: "我希望", sentence: "I was hoping you could join us.", translation: "我希望你能加入我们。", homophoneSentence: "爱沃兹霍平油库德乔因阿斯." },
        { word: "Do you happen to know", phonetic: "/duː juː ˈhæpən tuː nəʊ/", homophone: "度油哈彭图诺", meaning: "你碰巧知道吗", sentence: "Do you happen to know the answer?", translation: "你碰巧知道答案吗？", homophoneSentence: "度油哈彭图诺泽安瑟?" },
        { word: "I'm afraid that", phonetic: "/aɪm əˈfreɪd ðæt/", homophone: "爱姆阿弗雷德泽特", meaning: "恐怕", sentence: "I'm afraid that I can't help.", translation: "恐怕我帮不上忙。", homophoneSentence: "爱姆阿弗雷德泽特爱坎特赫尔普." },
        { word: "I'm sorry to say", phonetic: "/aɪm ˈsɒri tuː seɪ/", homophone: "爱姆索里图塞", meaning: "很抱歉地说", sentence: "I'm sorry to say that I can't come.", translation: "很抱歉地说我不能来了。", homophoneSentence: "爱姆索里图塞泽特爱坎特卡姆." },
        { word: "I hate to ask", phonetic: "/aɪ heɪt tuː ɑːsk/", homophone: "爱海特图阿斯克", meaning: "我不愿意开口", sentence: "I hate to ask, but could you help?", translation: "我不愿意开口，但你能帮忙吗？", homophoneSentence: "爱海特图阿斯克,巴特库德油赫尔普?" },
        { word: "I don't mean to", phonetic: "/aɪ dəʊnt miːn tuː/", homophone: "爱东特米恩图", meaning: "我不是故意", sentence: "I don't mean to bother you.", translation: "我不是故意打扰你的。", homophoneSentence: "爱东特米恩图博泽油." },
        { word: "If you don't mind", phonetic: "/ɪf juː dəʊnt maɪnd/", homophone: "伊夫油东特迈恩德", meaning: "如果你不介意", sentence: "If you don't mind, I'll leave early.", translation: "如果你不介意，我要早点走。", homophoneSentence: "伊夫油东特迈恩德,爱尔利夫厄利." },
        { word: "No problem at all", phonetic: "/nəʊ ˈprɒbləm æt ɔːl/", homophone: "诺普罗布勒姆阿特奥尔", meaning: "完全没问题", sentence: "No problem at all!", translation: "完全没问题！", homophoneSentence: "诺普罗布勒姆阿特奥尔!" }
    ],
    sentences: [
        { word: "Beat around the bush", phonetic: "/biːt əˈraʊnd ðə bʊʃ/", homophone: "比特阿劳恩德泽布什", meaning: "拐弯抹角", sentence: "Stop beating around the bush!", translation: "别拐弯抹角了！", homophoneSentence: "斯托普比廷阿劳恩德泽布什!" },
        { word: "Burn the midnight oil", phonetic: "/bɜːn ðə ˈmɪdnaɪt ɔɪl/", homophone: "伯恩泽米德奈托伊尔", meaning: "熬夜工作", sentence: "I burned the midnight oil studying.", translation: "我熬夜学习。", homophoneSentence: "爱伯恩德泽米德奈托伊尔斯塔迪宁." },
        { word: "Cry over spilt milk", phonetic: "/kraɪ ˈəʊvə spɪlt mɪlk/", homophone: "克赖欧弗斯皮尔特米尔克", meaning: "为无法挽回的事后悔", sentence: "There's no use crying over spilt milk.", translation: "为无法挽回的事后悔没有用。", homophoneSentence: "泽尔兹诺尤兹克赖宁欧弗斯皮尔特米尔克." },
        { word: "Curiosity killed the cat", phonetic: "/ˌkjʊəriˈɒsəti kɪld ðə kæt/", homophone: "克尤里奥西蒂基尔德泽凯特", meaning: "好奇害死猫", sentence: "Curiosity killed the cat, but satisfaction brought it back.", translation: "好奇害死猫，但满足感让它复活。", homophoneSentence: "克尤里奥西蒂基尔德泽凯特,巴特萨蒂斯法克申布罗特伊特拜克." },
        { word: "Don't put all your eggs in one basket", phonetic: "/dəʊnt pʊt ɔːl jɔː eɡz ɪn wʌn ˈbɑːskɪt/", homophone: "东特普特奥尔哟埃格兹因万巴斯吉特", meaning: "不要孤注一掷", sentence: "Don't put all your eggs in one basket.", translation: "不要孤注一掷。", homophoneSentence: "东特普特奥尔哟埃格兹因万巴斯吉特." },
        { word: "Easy come, easy go", phonetic: "/ˈiːzi kʌm ˈiːzi ɡəʊ/", homophone: "伊齐卡姆伊齐戈", meaning: "来得容易去得快", sentence: "Easy come, easy go.", translation: "来得容易去得快。", homophoneSentence: "伊齐卡姆伊齐戈." },
        { word: "Every dog has its day", phonetic: "/ˈevri dɒɡ hæz ɪts deɪ/", homophone: "艾弗里多格哈兹伊茨戴", meaning: "人人都有得意时", sentence: "Every dog has its day.", translation: "人人都有得意时。", homophoneSentence: "艾弗里多格哈兹伊茨戴." },
        { word: "Get a taste of your own medicine", phonetic: "/ɡet ə teɪst əv jɔː əʊn ˈmedsən/", homophone: "盖特阿泰斯特阿夫哟欧恩梅德辛", meaning: "自食其果", sentence: "He got a taste of his own medicine.", translation: "他自食其果了。", homophoneSentence: "希戈特阿泰斯特阿夫希兹欧恩梅德辛." },
        { word: "Give someone the cold shoulder", phonetic: "/ɡɪv ˈsʌmwʌn ðə kəʊld ˈʃəʊldə/", homophone: "吉夫萨姆万泽科尔德肖尔德", meaning: "冷落某人", sentence: "She gave him the cold shoulder.", translation: "她冷落了他。", homophoneSentence: "希盖夫希姆泽科尔德肖尔德." },
        { word: "Go the extra mile", phonetic: "/ɡəʊ ði ˈekstrə maɪl/", homophone: "戈泽埃克斯特拉迈尔", meaning: "加倍努力", sentence: "He always goes the extra mile.", translation: "他总是加倍努力。", homophoneSentence: "希奥尔韦兹戈兹泽埃克斯特拉迈尔." }
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
