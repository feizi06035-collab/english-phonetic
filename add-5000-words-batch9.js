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
        { word: "Have a wonderful day", phonetic: "/hæv ə ˈwʌndəfl deɪ/", homophone: "哈夫阿旺德福尔戴", meaning: "祝你美好的一天", sentence: "Have a wonderful day!", translation: "祝你美好的一天！", homophoneSentence: "哈夫阿旺德福尔戴!" },
        { word: "Have a great weekend", phonetic: "/hæv ə ɡreɪt ˌwiːkˈend/", homophone: "哈夫阿格雷特威肯德", meaning: "周末愉快", sentence: "Have a great weekend!", translation: "周末愉快！", homophoneSentence: "哈夫阿格雷特威肯德!" },
        { word: "Enjoy your weekend", phonetic: "/ɪnˈdʒɔɪ jɔː ˌwiːkˈend/", homophone: "因乔伊哟威肯德", meaning: "享受你的周末", sentence: "Enjoy your weekend!", translation: "享受你的周末！", homophoneSentence: "因乔伊哟威肯德!" },
        { word: "Have a safe trip", phonetic: "/hæv ə seɪf trɪp/", homophone: "哈夫阿塞夫特里普", meaning: "旅途平安", sentence: "Have a safe trip!", translation: "旅途平安！", homophoneSentence: "哈夫阿塞夫特里普!" },
        { word: "Safe travels", phonetic: "/seɪf ˈtrævlz/", homophone: "塞夫特拉维尔兹", meaning: "旅途平安", sentence: "Safe travels!", translation: "旅途平安！", homophoneSentence: "塞夫特拉维尔兹!" },
        { word: "Bon voyage", phonetic: "/ˌbɒn vɔɪˈɑːʒ/", homophone: "邦沃亚日", meaning: "旅途愉快", sentence: "Bon voyage!", translation: "旅途愉快！", homophoneSentence: "邦沃亚日!" },
        { word: "Have fun", phonetic: "/hæv fʌn/", homophone: "哈夫凡", meaning: "玩得开心", sentence: "Have fun at the party!", translation: "在派对上玩得开心！", homophoneSentence: "哈夫凡阿特泽帕蒂!" },
        { word: "Enjoy yourself", phonetic: "/ɪnˈdʒɔɪ jɔːˈself/", homophone: "因乔伊约塞尔夫", meaning: "玩得开心", sentence: "Enjoy yourself!", translation: "玩得开心！", homophoneSentence: "因乔伊约塞尔夫!" },
        { word: "Have a blast", phonetic: "/hæv ə blɑːst/", homophone: "哈夫阿布拉斯特", meaning: "玩得尽兴", sentence: "Have a blast!", translation: "玩得尽兴！", homophoneSentence: "哈夫阿布拉斯特!" },
        { word: "Make yourself at home", phonetic: "/meɪk jɔːˈself æt həʊm/", homophone: "梅克约塞尔夫阿特霍姆", meaning: "别客气", sentence: "Make yourself at home!", translation: "别客气！", homophoneSentence: "梅克约塞尔夫阿特霍姆!" }
    ],
    emotions: [
        { word: "Excited", phonetic: "/ɪkˈsaɪtɪd/", homophone: "伊克赛蒂德", meaning: "兴奋的", sentence: "I'm so excited!", translation: "我太兴奋了！", homophoneSentence: "爱姆索伊克赛蒂德!" },
        { word: "Thrilled", phonetic: "/θrɪld/", homophone: "斯里尔德", meaning: "激动的", sentence: "I'm thrilled about the news!", translation: "我对这个消息很激动！", homophoneSentence: "爱姆斯里尔德阿鲍特泽纽兹!" },
        { word: "Overjoyed", phonetic: "/ˌəʊvəˈdʒɔɪd/", homophone: "欧沃乔伊德", meaning: "欣喜若狂", sentence: "I'm overjoyed!", translation: "我欣喜若狂！", homophoneSentence: "爱姆欧沃乔伊德!" },
        { word: "Ecstatic", phonetic: "/ekˈstætɪk/", homophone: "埃克斯塔蒂克", meaning: "狂喜的", sentence: "She's ecstatic!", translation: "她狂喜！", homophoneSentence: "希兹埃克斯塔蒂克!" },
        { word: "Elated", phonetic: "/ɪˈleɪtɪd/", homophone: "伊雷蒂德", meaning: "兴高采烈", sentence: "He was elated by the win.", translation: "他对胜利感到兴高采烈。", homophoneSentence: "希沃兹伊雷蒂德拜泽温." },
        { word: "Jubilant", phonetic: "/ˈdʒuːbɪlənt/", homophone: "朱比兰特", meaning: "欢欣的", sentence: "The team was jubilant.", translation: "团队欢欣鼓舞。", homophoneSentence: "泽蒂姆沃兹朱比兰特." },
        { word: "Giddy", phonetic: "/ˈɡɪdi/", homophone: "吉迪", meaning: "头晕目眩的", sentence: "She was giddy with excitement.", translation: "她兴奋得头晕目眩。", homophoneSentence: "希沃兹吉迪威兹伊克赛特门特." },
        { word: "Euphoric", phonetic: "/juːˈfɒrɪk/", homophone: "尤福里克", meaning: "极度兴奋的", sentence: "I feel euphoric!", translation: "我感到极度兴奋！", homophoneSentence: "爱菲尔尤福里克!" },
        { word: "On cloud nine", phonetic: "/ɒn klaʊd naɪn/", homophone: "昂克劳德奈恩", meaning: "欣喜若狂", sentence: "She's on cloud nine.", translation: "她欣喜若狂。", homophoneSentence: "希兹昂克劳德奈恩." },
        { word: "Walking on air", phonetic: "/ˈwɔːkɪŋ ɒn eə/", homophone: "沃金昂埃尔", meaning: "飘飘欲仙", sentence: "He's walking on air.", translation: "他飘飘欲仙。", homophoneSentence: "希兹沃金昂埃尔." }
    ],
    numbers: [
        { word: "None", phonetic: "/nʌn/", homophone: "南", meaning: "没有", sentence: "None of them came.", translation: "他们都没来。", homophoneSentence: "南阿夫泽姆凯姆." },
        { word: "Nothing", phonetic: "/ˈnʌθɪŋ/", homophone: "纳辛", meaning: "没有东西", sentence: "There's nothing left.", translation: "什么都没剩下。", homophoneSentence: "泽尔兹纳辛莱夫特." },
        { word: "Empty", phonetic: "/ˈempti/", homophone: "恩普蒂", meaning: "空的", sentence: "The room is empty.", translation: "房间是空的。", homophoneSentence: "泽鲁姆伊兹恩普蒂." },
        { word: "Full", phonetic: "/fʊl/", homophone: "福尔", meaning: "满的", sentence: "The glass is full.", translation: "杯子是满的。", homophoneSentence: "泽格拉斯伊兹福尔." },
        { word: "Complete", phonetic: "/kəmˈpliːt/", homophone: "康普利特", meaning: "完整的", sentence: "The set is complete.", translation: "这套是完整的。", homophoneSentence: "泽塞特伊兹康普利特." },
        { word: "Whole", phonetic: "/həʊl/", homophone: "霍尔", meaning: "完整的", sentence: "The whole cake.", translation: "整个蛋糕。", homophoneSentence: "泽霍尔凯克." },
        { word: "Entire", phonetic: "/ɪnˈtaɪə/", homophone: "因泰尔", meaning: "全部的", sentence: "The entire class.", translation: "全班。", homophoneSentence: "泽因泰尔克拉斯." },
        { word: "Total", phonetic: "/ˈtəʊtl/", homophone: "托特尔", meaning: "总的", sentence: "The total cost.", translation: "总成本。", homophoneSentence: "泽托特尔科斯特." },
        { word: "Sum", phonetic: "/sʌm/", homophone: "萨姆", meaning: "总和", sentence: "The sum of numbers.", translation: "数字的总和。", homophoneSentence: "泽萨姆阿夫南伯兹." },
        { word: "Average", phonetic: "/ˈævərɪdʒ/", homophone: "艾弗里奇", meaning: "平均", sentence: "The average score.", translation: "平均分。", homophoneSentence: "泽艾弗里奇斯科." }
    ],
    colors: [
        { word: "Caramel", phonetic: "/ˈkærəmel/", homophone: "卡拉梅尔", meaning: "焦糖色", sentence: "Caramel is sweet.", translation: "焦糖色很甜。", homophoneSentence: "卡拉梅尔伊兹斯威特." },
        { word: "Toffee", phonetic: "/ˈtɒfi/", homophone: "托菲", meaning: "太妃糖色", sentence: "Toffee is a light brown.", translation: "太妃糖色是一种浅棕色。", homophoneSentence: "托菲伊兹阿莱特布劳恩." },
        { word: "Butterscotch", phonetic: "/ˈbʌtəskɒtʃ/", homophone: "巴特斯科奇", meaning: "奶油糖色", sentence: "Butterscotch is creamy.", translation: "奶油糖色很滑腻。", homophoneSentence: "巴特斯科奇伊兹克里米." },
        { word: "Hazelnut", phonetic: "/ˈheɪzlnʌt/", homophone: "海泽尔纳特", meaning: "榛子色", sentence: "Hazelnut is a warm brown.", translation: "榛子色是一种温暖的棕色。", homophoneSentence: "海泽尔纳特伊兹阿沃姆布劳恩." },
        { word: "Walnut", phonetic: "/ˈwɔːlnʌt/", homophone: "沃尔纳特", meaning: "核桃色", sentence: "Walnut wood is beautiful.", translation: "核桃木很美。", homophoneSentence: "沃尔纳特伍德伊兹比尤特福尔." },
        { word: "Mahogany", phonetic: "/məˈhɒɡəni/", homophone: "马霍加尼", meaning: "红木色", sentence: "Mahogany furniture is classic.", translation: "红木家具很经典。", homophoneSentence: "马霍加尼弗尼彻伊兹克拉斯克." },
        { word: "Ebony", phonetic: "/ˈebəni/", homophone: "埃博尼", meaning: "乌木色", sentence: "Ebony is a dark wood.", translation: "乌木是一种深色木材。", homophoneSentence: "埃博尼伊兹阿达克伍德." },
        { word: "Jet black", phonetic: "/dʒet blæk/", homophone: "杰特布莱克", meaning: "乌黑色", sentence: "Jet black hair.", translation: "乌黑的头发。", homophoneSentence: "杰特布莱克黑尔." },
        { word: "Coal", phonetic: "/kəʊl/", homophone: "科尔", meaning: "煤黑色", sentence: "Coal black.", translation: "煤黑色。", homophoneSentence: "科尔布莱克." },
        { word: "Onyx", phonetic: "/ˈɒnɪks/", homophone: "奥尼克斯", meaning: "玛瑙黑色", sentence: "Onyx is a black gem.", translation: "玛瑙是一种黑色宝石。", homophoneSentence: "奥尼克斯伊兹阿布莱克杰姆." }
    ],
    family: [
        { word: "In-laws", phonetic: "/ˈɪnlɔːz/", homophone: "因洛兹", meaning: "姻亲", sentence: "My in-laws are visiting.", translation: "我的姻亲来访了。", homophoneSentence: "麦因洛兹阿维齐廷." },
        { word: "Extended family", phonetic: "/ɪkˈstendɪd ˈfæmɪli/", homophone: "伊克斯滕迪德法米利", meaning: "大家庭", sentence: "Our extended family is large.", translation: "我们的大家庭很大。", homophoneSentence: "奥尔伊克斯滕迪德法米利伊兹拉奇." },
        { word: "Immediate family", phonetic: "/ɪˈmiːdiət ˈfæmɪli/", homophone: "伊米迪特法米利", meaning: "直系亲属", sentence: "Only immediate family attended.", translation: "只有直系亲属参加。", homophoneSentence: "欧恩利伊米迪特法米利阿滕迪德." },
        { word: "Close relative", phonetic: "/kləʊs ˈrelətɪv/", homophone: "克洛斯雷拉蒂夫", meaning: "近亲", sentence: "She's a close relative.", translation: "她是近亲。", homophoneSentence: "希兹阿克洛斯雷拉蒂夫." },
        { word: "Distant relative", phonetic: "/ˈdɪstənt ˈrelətɪv/", homophone: "迪斯坦特雷拉蒂夫", meaning: "远亲", sentence: "He's a distant relative.", translation: "他是远亲。", homophoneSentence: "希兹阿迪斯坦特雷拉蒂夫." },
        { word: "Blood relative", phonetic: "/blʌd ˈrelətɪv/", homophone: "布拉德雷拉蒂夫", meaning: "血亲", sentence: "She's a blood relative.", translation: "她是血亲。", homophoneSentence: "希兹阿布拉德雷拉蒂夫." },
        { word: "Family reunion", phonetic: "/ˈfæmɪli riːˈjuːniən/", homophone: "法米利里尤尼恩", meaning: "家庭团聚", sentence: "We had a family reunion.", translation: "我们举行了家庭团聚。", homophoneSentence: "维哈德阿法米利里尤尼恩." },
        { word: "Family gathering", phonetic: "/ˈfæmɪli ˈɡæðərɪŋ/", homophone: "法米利盖泽林", meaning: "家庭聚会", sentence: "The family gathering was fun.", translation: "家庭聚会很有趣。", homophoneSentence: "泽法米利盖泽林沃兹凡." },
        { word: "Family tradition", phonetic: "/ˈfæmɪli trəˈdɪʃn/", homophone: "法米利特拉迪申", meaning: "家庭传统", sentence: "This is a family tradition.", translation: "这是一个家庭传统。", homophoneSentence: "泽斯伊兹阿法米利特拉迪申." },
        { word: "Family values", phonetic: "/ˈfæmɪli ˈvæljuːz/", homophone: "法米利瓦尔尤兹", meaning: "家庭价值观", sentence: "We have strong family values.", translation: "我们有很强的家庭价值观。", homophoneSentence: "维哈夫斯特朗法米利瓦尔尤兹." }
    ],
    time: [
        { word: "Monthly", phonetic: "/ˈmʌnθli/", homophone: "曼斯利", meaning: "每月", sentence: "We meet monthly.", translation: "我们每月见面。", homophoneSentence: "维米特曼斯利." },
        { word: "Yearly", phonetic: "/ˈjɪəli/", homophone: "耶利", meaning: "每年", sentence: "We have a yearly meeting.", translation: "我们每年开会。", homophoneSentence: "维哈夫阿耶利米廷." },
        { word: "Annually", phonetic: "/ˈænjuəli/", homophone: "安纽利", meaning: "每年", sentence: "The event is held annually.", translation: "活动每年举行。", homophoneSentence: "泽伊文特伊兹赫尔德安纽利." },
        { word: "Quarterly", phonetic: "/ˈkwɔːtəli/", homophone: "夸特利", meaning: "每季度", sentence: "We report quarterly.", translation: "我们每季度报告。", homophoneSentence: "维里波特夸特利." },
        { word: "Biweekly", phonetic: "/baɪˈwiːkli/", homophone: "拜威克利", meaning: "每两周", sentence: "We meet biweekly.", translation: "我们每两周见面。", homophoneSentence: "维米特拜威克利." },
        { word: "Bimonthly", phonetic: "/baɪˈmʌnθli/", homophone: "拜曼斯利", meaning: "每两月", sentence: "The magazine is bimonthly.", translation: "杂志是双月刊。", homophoneSentence: "泽马加津伊兹拜曼斯利." },
        { word: "Hourly", phonetic: "/ˈaʊəli/", homophone: "奥利", meaning: "每小时", sentence: "We get hourly updates.", translation: "我们每小时更新。", homophoneSentence: "维盖特奥利阿普戴茨." },
        { word: "Minutely", phonetic: "/ˈmɪnɪtli/", homophone: "米尼特利", meaning: "每分钟", sentence: "The changes are minutely.", translation: "变化是每分钟的。", homophoneSentence: "泽钱奇兹阿米尼特利." },
        { word: "Secondly", phonetic: "/ˈsekəndli/", homophone: "塞肯德利", meaning: "其次", sentence: "Secondly, I want to say...", translation: "其次，我想说...", homophoneSentence: "塞肯德利,爱旺特图塞..." },
        { word: "Lastly", phonetic: "/ˈlɑːstli/", homophone: "拉斯特利", meaning: "最后", sentence: "Lastly, thank you all.", translation: "最后，谢谢大家。", homophoneSentence: "拉斯特利,森克油奥尔." }
    ],
    food: [
        { word: "Ice cream", phonetic: "/aɪs kriːm/", homophone: "艾斯克里姆", meaning: "冰淇淋", sentence: "I love ice cream!", translation: "我喜欢冰淇淋！", homophoneSentence: "爱拉夫艾斯克里姆!" },
        { word: "Sorbet", phonetic: "/ˈsɔːbeɪ/", homophone: "索贝", meaning: "雪酪", sentence: "Lemon sorbet is refreshing.", translation: "柠檬雪酪很清爽。", homophoneSentence: "莱蒙索贝伊兹里弗雷希宁." },
        { word: "Sherbet", phonetic: "/ˈʃɜːbət/", homophone: "舒伯特", meaning: "冰糕", sentence: "Orange sherbet is sweet.", translation: "橙子冰糕很甜。", homophoneSentence: "奥伦奇舒伯特伊兹斯威特." },
        { word: "Frozen yogurt", phonetic: "/ˈfrəʊzn ˈjɒɡət/", homophone: "弗罗兹恩约格特", meaning: "冻酸奶", sentence: "Frozen yogurt is popular.", translation: "冻酸奶很受欢迎。", homophoneSentence: "弗罗兹恩约格特伊兹波皮尤勒." },
        { word: "Soft serve", phonetic: "/sɒft sɜːv/", homophone: "索夫特瑟夫", meaning: "软冰淇淋", sentence: "Soft serve ice cream.", translation: "软冰淇淋。", homophoneSentence: "索夫特瑟夫艾斯克里姆." },
        { word: "Gelato", phonetic: "/dʒəˈlɑːtəʊ/", homophone: "杰拉托", meaning: "意式冰淇淋", sentence: "Italian gelato.", translation: "意式冰淇淋。", homophoneSentence: "伊塔利恩杰拉托." },
        { word: "Popsicle", phonetic: "/ˈpɒpsɪkl/", homophone: "波普西克尔", meaning: "冰棒", sentence: "Kids love popsicles.", translation: "孩子们喜欢冰棒。", homophoneSentence: "基德拉夫波普西克尔兹." },
        { word: "Ice pop", phonetic: "/aɪs pɒp/", homophone: "艾斯波普", meaning: "冰棒", sentence: "An ice pop on a hot day.", translation: "热天吃冰棒。", homophoneSentence: "安艾斯波普昂阿霍特戴." },
        { word: "Snow cone", phonetic: "/snəʊ kəʊn/", homophone: "斯诺科恩", meaning: "刨冰", sentence: "A snow cone with syrup.", translation: "刨冰配糖浆。", homophoneSentence: "阿斯诺科恩威兹西鲁普." },
        { word: "Slushie", phonetic: "/ˈslʌʃi/", homophone: "斯卢希", meaning: "冰沙", sentence: "A cold slushie.", translation: "一杯冰沙。", homophoneSentence: "阿科尔德斯卢希." }
    ],
    conversations: [
        { word: "That's a good question", phonetic: "/ðæts ə ɡʊd ˈkwestʃən/", homophone: "泽茨阿古德奎斯钦", meaning: "这是个好问题", sentence: "That's a good question!", translation: "这是个好问题！", homophoneSentence: "泽茨阿古德奎斯钦!" },
        { word: "I'm glad you asked", phonetic: "/aɪm ɡlæd juː ɑːskt/", homophone: "爱姆格拉德油阿斯特", meaning: "很高兴你问了", sentence: "I'm glad you asked that.", translation: "很高兴你问了那个。", homophoneSentence: "爱姆格拉德油阿斯特泽特." },
        { word: "Let me think about that", phonetic: "/let miː θɪŋk əˈbaʊt ðæt/", homophone: "莱特米辛克阿鲍特泽特", meaning: "让我想想", sentence: "Let me think about that for a moment.", translation: "让我想一下。", homophoneSentence: "莱特米辛克阿鲍特泽特福阿莫门特." },
        { word: "That's an interesting question", phonetic: "/ðæts ən ˈɪntrəstɪŋ ˈkwestʃən/", homophone: "泽茨安因特雷斯特宁奎斯钦", meaning: "这是个有趣的问题", sentence: "That's an interesting question!", translation: "这是个有趣的问题！", homophoneSentence: "泽茨安因特雷斯特宁奎斯钦!" },
        { word: "I've never thought about that", phonetic: "/aɪv ˈnevə θɔːt əˈbaʊt ðæt/", homophone: "艾夫内弗索特阿鲍特泽特", meaning: "我从没想过这个问题", sentence: "I've never thought about that before.", translation: "我以前从没想过这个问题。", homophoneSentence: "艾夫内弗索特阿鲍特泽特比福." },
        { word: "That reminds me", phonetic: "/ðæt rɪˈmaɪndz miː/", homophone: "泽特里曼兹米", meaning: "那提醒了我", sentence: "That reminds me of a story.", translation: "那让我想起了一个故事。", homophoneSentence: "泽特里曼兹米阿夫阿斯托里." },
        { word: "Speaking of which", phonetic: "/ˈspiːkɪŋ əv wɪtʃ/", homophone: "斯皮金阿夫威奇", meaning: "说到这个", sentence: "Speaking of which, did you hear?", translation: "说到这个，你听说了吗？", homophoneSentence: "斯皮金阿夫威奇,迪德油希尔?" },
        { word: "By the way", phonetic: "/baɪ ðə weɪ/", homophone: "拜泽韦", meaning: "顺便说一下", sentence: "By the way, I have news.", translation: "顺便说一下，我有消息。", homophoneSentence: "拜泽韦,爱哈夫纽兹." },
        { word: "Incidentally", phonetic: "/ˌɪnsɪˈdentli/", homophone: "因西登特利", meaning: "顺便说一句", sentence: "Incidentally, I saw him yesterday.", translation: "顺便说一句，我昨天看到他了。", homophoneSentence: "因西登特利,爱索希姆耶斯特迪." },
        { word: "On a side note", phonetic: "/ɒn ə saɪd nəʊt/", homophone: "昂阿赛德诺特", meaning: "顺便说一下", sentence: "On a side note, I wanted to mention...", translation: "顺便说一下，我想提一下...", homophoneSentence: "昂阿赛德诺特,爱旺蒂德图门申..." }
    ],
    sentences: [
        { word: "Actions speak louder than words", phonetic: "/ˈækʃənz spiːk ˈlaʊdə ðæn wɜːdz/", homophone: "阿克申兹斯皮克劳德泽沃德兹", meaning: "行动胜于言语", sentence: "Actions speak louder than words.", translation: "行动胜于言语。", homophoneSentence: "阿克申兹斯皮克劳德泽沃德兹." },
        { word: "All good things come to an end", phonetic: "/ɔːl ɡʊd θɪŋz kʌm tuː ən end/", homophone: "奥尔古德辛兹卡姆图安恩德", meaning: "天下没有不散的筵席", sentence: "All good things come to an end.", translation: "天下没有不散的筵席。", homophoneSentence: "奥尔古德辛兹卡姆图安恩德." },
        { word: "Beauty is in the eye of the beholder", phonetic: "/ˈbjuːti ɪz ɪn ði aɪ əv ðə bɪˈhəʊldə/", homophone: "比尤蒂伊兹因泽艾阿夫泽比霍尔达", meaning: "情人眼里出西施", sentence: "Beauty is in the eye of the beholder.", translation: "情人眼里出西施。", homophoneSentence: "比尤蒂伊兹因泽艾阿夫泽比霍尔达." },
        { word: "Better safe than sorry", phonetic: "/ˈbetə seɪf ðæn ˈsɒri/", homophone: "贝特塞夫泽索里", meaning: "安全总比后悔好", sentence: "Better safe than sorry.", translation: "安全总比后悔好。", homophoneSentence: "贝特塞夫泽索里." },
        { word: "Don't bite the hand that feeds you", phonetic: "/dəʊnt baɪt ðə hænd ðæt fiːdz juː/", homophone: "东特拜特泽汉德泽特菲德兹油", meaning: "不要恩将仇报", sentence: "Don't bite the hand that feeds you.", translation: "不要恩将仇报。", homophoneSentence: "东特拜特泽汉德泽特菲德兹油." },
        { word: "Don't put all your eggs in one basket", phonetic: "/dəʊnt pʊt ɔːl jɔː eɡz ɪn wʌn ˈbɑːskɪt/", homophone: "东特普特奥尔哟埃格兹因万巴斯吉特", meaning: "不要孤注一掷", sentence: "Don't put all your eggs in one basket.", translation: "不要孤注一掷。", homophoneSentence: "东特普特奥尔哟埃格兹因万巴斯吉特." },
        { word: "Every cloud has a silver lining", phonetic: "/ˈevri klaʊd hæz ə ˈsɪlvə ˈlaɪnɪŋ/", homophone: "艾弗里克劳德哈兹阿西尔弗莱宁", meaning: "黑暗中总有一线光明", sentence: "Every cloud has a silver lining.", translation: "黑暗中总有一线光明。", homophoneSentence: "艾弗里克劳德哈兹阿西尔弗莱宁." },
        { word: "Fortune favors the bold", phonetic: "/ˈfɔːtʃuːn ˈfeɪvəz ðə bəʊld/", homophone: "福琼费弗兹泽博尔德", meaning: "勇者得天助", sentence: "Fortune favors the bold.", translation: "勇者得天助。", homophoneSentence: "福琼费弗兹泽博尔德." },
        { word: "Good things come to those who wait", phonetic: "/ɡʊd θɪŋz kʌm tuː ðəʊz huː weɪt/", homophone: "古德辛兹卡姆图索兹胡韦特", meaning: "好事多磨", sentence: "Good things come to those who wait.", translation: "好事多磨。", homophoneSentence: "古德辛兹卡姆图索兹胡韦特." },
        { word: "Hope for the best, prepare for the worst", phonetic: "/həʊp fɔː ðə best prɪˈpeə fɔː ðə wɜːst/", homophone: "霍普福泽贝斯特普里佩尔福泽沃斯特", meaning: "抱最好的希望做最坏的打算", sentence: "Hope for the best, prepare for the worst.", translation: "抱最好的希望，做最坏的打算。", homophoneSentence: "霍普福泽贝斯特普里佩尔福泽沃斯特." }
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
