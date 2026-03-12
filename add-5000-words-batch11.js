const fs = require('fs');

const data = fs.readFileSync('word-data.js', 'utf8');

const existingWords = new Set();
const wordRegex = /word:\s*["']([^"']+)["']/g;
let match;
while ((match = wordRegex.exec(data)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

const newWords = {
    greetings: [
        { word: "Pardon me", phonetic: "/ˈpɑːdn miː/", homophone: "帕登米", meaning: "抱歉", sentence: "Pardon me, may I pass?", translation: "抱歉，我可以过去吗？", homophoneSentence: "帕登米,梅爱帕斯?" },
        { word: "Excuse me", phonetic: "/ɪkˈskjuːz miː/", homophone: "伊克斯丘兹米", meaning: "打扰一下", sentence: "Excuse me, where is the station?", translation: "打扰一下，车站在哪里？", homophoneSentence: "伊克斯丘兹米,韦尔伊兹泽斯特申?" },
        { word: "My apologies", phonetic: "/maɪ əˈpɒlədʒiz/", homophone: "麦阿波洛吉兹", meaning: "我道歉", sentence: "My apologies for the delay.", translation: "为延误我道歉。", homophoneSentence: "麦阿波洛吉兹福泽迪雷." },
        { word: "I beg your pardon", phonetic: "/aɪ beɡ jɔː ˈpɑːdn/", homophone: "爱贝格哟帕登", meaning: "请原谅", sentence: "I beg your pardon?", translation: "请原谅？", homophoneSentence: "爱贝格哟帕登?" },
        { word: "So sorry", phonetic: "/səʊ ˈsɒri/", homophone: "索索里", meaning: "非常抱歉", sentence: "I'm so sorry about that.", translation: "我对此非常抱歉。", homophoneSentence: "爱姆索索里阿鲍特泽特." },
        { word: "My mistake", phonetic: "/maɪ mɪˈsteɪk/", homophone: "麦米斯特克", meaning: "我的错", sentence: "My mistake, sorry!", translation: "我的错，抱歉！", homophoneSentence: "麦米斯特克,索里!" },
        { word: "My bad", phonetic: "/maɪ bæd/", homophone: "麦拜德", meaning: "我的错", sentence: "My bad!", translation: "我的错！", homophoneSentence: "麦拜德!" },
        { word: "I apologize", phonetic: "/aɪ əˈpɒlədʒaɪz/", homophone: "爱阿波洛贾兹", meaning: "我道歉", sentence: "I apologize for the inconvenience.", translation: "为不便我道歉。", homophoneSentence: "爱阿波洛贾兹福泽因康维尼恩斯." },
        { word: "Please accept my apologies", phonetic: "/pliːz əkˈsept maɪ əˈpɒlədʒiz/", homophone: "普利斯阿克塞普特麦阿波洛吉兹", meaning: "请接受我的道歉", sentence: "Please accept my apologies.", translation: "请接受我的道歉。", homophoneSentence: "普利斯阿克塞普特麦阿波洛吉兹." },
        { word: "I'm truly sorry", phonetic: "/aɪm ˈtruːli ˈsɒri/", homophone: "爱姆特鲁利索里", meaning: "我真的很抱歉", sentence: "I'm truly sorry.", translation: "我真的很抱歉。", homophoneSentence: "爱姆特鲁利索里." }
    ],
    emotions: [
        { word: "Nervous", phonetic: "/ˈnɜːvəs/", homophone: "纳沃斯", meaning: "紧张的", sentence: "I feel nervous.", translation: "我感到紧张。", homophoneSentence: "爱菲尔纳沃斯." },
        { word: "Anxious", phonetic: "/ˈæŋkʃəs/", homophone: "安克沙斯", meaning: "焦虑的", sentence: "She looks anxious.", translation: "她看起来很焦虑。", homophoneSentence: "希卢克斯安克沙斯." },
        { word: "Worried", phonetic: "/ˈwʌrid/", homophone: "沃里德", meaning: "担心的", sentence: "I'm worried about him.", translation: "我担心他。", homophoneSentence: "爱姆沃里德阿鲍特希姆." },
        { word: "Stressed", phonetic: "/strest/", homophone: "斯特雷斯特", meaning: "有压力的", sentence: "I'm so stressed.", translation: "我压力很大。", homophoneSentence: "爱姆索斯特雷斯特." },
        { word: "Tense", phonetic: "/tens/", homophone: "滕斯", meaning: "紧张的", sentence: "The situation is tense.", translation: "局势很紧张。", homophoneSentence: "泽西图埃申伊兹滕斯." },
        { word: "Uneasy", phonetic: "/ʌnˈiːzi/", homophone: "安伊兹", meaning: "不安的", sentence: "I feel uneasy.", translation: "我感到不安。", homophoneSentence: "爱菲尔安伊兹." },
        { word: "Apprehensive", phonetic: "/ˌæprɪˈhensɪv/", homophone: "阿普里亨西夫", meaning: "忧虑的", sentence: "I'm apprehensive about the future.", translation: "我对未来感到忧虑。", homophoneSentence: "爱姆阿普里亨西夫阿鲍特泽菲尤彻." },
        { word: "Restless", phonetic: "/ˈrestləs/", homophone: "雷斯特勒斯", meaning: "坐立不安的", sentence: "He was restless all night.", translation: "他整晚坐立不安。", homophoneSentence: "希沃兹雷斯特勒斯奥尔奈特." },
        { word: "Jittery", phonetic: "/ˈdʒɪtəri/", homophone: "吉特里", meaning: "紧张不安的", sentence: "I feel jittery before the interview.", translation: "面试前我感到紧张不安。", homophoneSentence: "爱菲尔吉特里比福泽因特弗尤." },
        { word: "On edge", phonetic: "/ɒn edʒ/", homophone: "昂埃奇", meaning: "紧张不安", sentence: "I've been on edge all day.", translation: "我整天都很紧张。", homophoneSentence: "艾夫宾昂埃奇奥尔戴." }
    ],
    numbers: [
        { word: "Dozen", phonetic: "/ˈdʌzn/", homophone: "达曾", meaning: "一打", sentence: "A dozen eggs.", translation: "一打鸡蛋。", homophoneSentence: "阿达曾埃格兹." },
        { word: "Score", phonetic: "/skɔː/", homophone: "斯科", meaning: "二十", sentence: "Three score years.", translation: "六十年。", homophoneSentence: "斯里斯科耶尔兹." },
        { word: "Gross", phonetic: "/ɡrəʊs/", homophone: "格罗斯", meaning: "十二打", sentence: "A gross of items.", translation: "一罗物品。", homophoneSentence: "阿格罗斯阿夫艾特姆兹." },
        { word: "Pair", phonetic: "/peə/", homophone: "佩尔", meaning: "一对", sentence: "A pair of shoes.", translation: "一双鞋。", homophoneSentence: "阿佩尔阿夫舒兹." },
        { word: "Couple", phonetic: "/ˈkʌpl/", homophone: "卡普尔", meaning: "一对", sentence: "A couple of days.", translation: "几天。", homophoneSentence: "阿卡普尔阿夫戴兹." },
        { word: "Triple", phonetic: "/ˈtrɪpl/", homophone: "特里普尔", meaning: "三倍", sentence: "Triple the amount.", translation: "三倍的数量。", homophoneSentence: "特里普尔泽阿蒙特." },
        { word: "Quadruple", phonetic: "/kwɒˈdruːpl/", homophone: "夸德鲁普尔", meaning: "四倍", sentence: "Quadruple the speed.", translation: "四倍的速度。", homophoneSentence: "夸德鲁普尔泽斯皮德." },
        { word: "Quintuple", phonetic: "/kwɪnˈtjuːpl/", homophone: "昆图普尔", meaning: "五倍", sentence: "Quintuple the profit.", translation: "五倍的利润。", homophoneSentence: "昆图普尔泽普罗菲特." },
        { word: "Sextuple", phonetic: "/sekˈstjuːpl/", homophone: "塞克斯图普尔", meaning: "六倍", sentence: "Sextuple the value.", translation: "六倍的价值。", homophoneSentence: "塞克斯图普尔泽瓦尔尤." },
        { word: "Septuple", phonetic: "/sepˈtjuːpl/", homophone: "塞普图普尔", meaning: "七倍", sentence: "Septuple the size.", translation: "七倍的大小。", homophoneSentence: "塞普图普尔泽赛兹." }
    ],
    colors: [
        { word: "Champagne", phonetic: "/ʃæmˈpeɪn/", homophone: "尚佩恩", meaning: "香槟色", sentence: "Champagne gold.", translation: "香槟金。", homophoneSentence: "尚佩恩戈尔德." },
        { word: "Blush", phonetic: "/blʌʃ/", homophone: "布拉什", meaning: "腮红色", sentence: "Blush pink is soft.", translation: "腮红色很柔和。", homophoneSentence: "布拉什平克伊兹索夫特." },
        { word: "Coral", phonetic: "/ˈkɒrəl/", homophone: "科拉尔", meaning: "珊瑚色", sentence: "Coral is a warm color.", translation: "珊瑚色是一种温暖的颜色。", homophoneSentence: "科拉尔伊兹阿沃姆卡勒." },
        { word: "Peach", phonetic: "/piːtʃ/", homophone: "皮奇", meaning: "桃色", sentence: "Peach is a sweet color.", translation: "桃色是一种甜美的颜色。", homophoneSentence: "皮奇伊兹阿斯威特卡勒." },
        { word: "Salmon", phonetic: "/ˈsæmən/", homophone: "萨蒙", meaning: "鲑鱼色", sentence: "Salmon pink.", translation: "鲑鱼粉。", homophoneSentence: "萨蒙平克." },
        { word: "Rose", phonetic: "/rəʊz/", homophone: "罗兹", meaning: "玫瑰色", sentence: "Rose gold is popular.", translation: "玫瑰金很受欢迎。", homophoneSentence: "罗兹戈尔德伊兹波皮尤勒." },
        { word: "Burgundy", phonetic: "/ˈbɜːɡəndi/", homophone: "伯冈迪", meaning: "勃艮第红", sentence: "Burgundy is elegant.", translation: "勃艮第红很优雅。", homophoneSentence: "伯冈迪伊兹埃勒根特." },
        { word: "Maroon", phonetic: "/məˈruːn/", homophone: "马鲁恩", meaning: "栗色", sentence: "Maroon is a deep red.", translation: "栗色是一种深红色。", homophoneSentence: "马鲁恩伊兹阿迪普雷德." },
        { word: "Crimson", phonetic: "/ˈkrɪmzn/", homophone: "克里姆森", meaning: "深红色", sentence: "Crimson is a rich color.", translation: "深红色是一种浓郁的颜色。", homophoneSentence: "克里姆森伊兹阿里奇卡勒." },
        { word: "Scarlet", phonetic: "/ˈskɑːlət/", homophone: "斯卡利特", meaning: "猩红色", sentence: "Scarlet is bright red.", translation: "猩红色是鲜红色。", homophoneSentence: "斯卡利特伊兹布莱特雷德." }
    ],
    family: [
        { word: "Stepfather", phonetic: "/ˈstepfɑːðə/", homophone: "斯特普法泽", meaning: "继父", sentence: "My stepfather is kind.", translation: "我的继父很和蔼。", homophoneSentence: "麦斯特普法泽伊兹凯恩德." },
        { word: "Stepmother", phonetic: "/ˈstepmʌðə/", homophone: "斯特普马泽", meaning: "继母", sentence: "My stepmother is nice.", translation: "我的继母很好。", homophoneSentence: "麦斯特普马泽伊兹奈斯." },
        { word: "Stepbrother", phonetic: "/ˈstepbrʌðə/", homophone: "斯特普布拉泽", meaning: "继兄弟", sentence: "My stepbrother lives nearby.", translation: "我的继兄弟住在附近。", homophoneSentence: "麦斯特普布拉泽利夫兹尼拜." },
        { word: "Stepsister", phonetic: "/ˈstepsɪstə/", homophone: "斯特普西斯特", meaning: "继姐妹", sentence: "My stepsister is young.", translation: "我的继姐妹很年轻。", homophoneSentence: "麦斯特普西斯特伊兹扬." },
        { word: "Half-brother", phonetic: "/hɑːf ˈbrʌðə/", homophone: "哈夫布拉泽", meaning: "同父异母/同母异父兄弟", sentence: "My half-brother visits often.", translation: "我的异父/异母兄弟经常来访。", homophoneSentence: "麦哈夫布拉泽维齐茨奥芬." },
        { word: "Half-sister", phonetic: "/hɑːf ˈsɪstə/", homophone: "哈夫西斯特", meaning: "同父异母/同母异父姐妹", sentence: "My half-sister is older.", translation: "我的异父/异母姐妹年纪更大。", homophoneSentence: "麦哈夫西斯特伊兹欧尔德." },
        { word: "Godfather", phonetic: "/ˈɡɒdfɑːðə/", homophone: "戈德法泽", meaning: "教父", sentence: "My godfather is my mentor.", translation: "我的教父是我的导师。", homophoneSentence: "麦戈德法泽伊兹麦门托." },
        { word: "Godmother", phonetic: "/ˈɡɒdmʌðə/", homophone: "戈德马泽", meaning: "教母", sentence: "My godmother is caring.", translation: "我的教母很关心我。", homophoneSentence: "麦戈德马泽伊兹凯林." },
        { word: "Godson", phonetic: "/ˈɡɒdsʌn/", homophone: "戈德桑", meaning: "教子", sentence: "My godson is adorable.", translation: "我的教子很可爱。", homophoneSentence: "麦戈德桑伊兹阿多拉布尔." },
        { word: "Goddaughter", phonetic: "/ˈɡɒddɔːtə/", homophone: "戈德道特", meaning: "教女", sentence: "My goddaughter is sweet.", translation: "我的教女很甜美。", homophoneSentence: "麦戈德道特伊兹斯威特." }
    ],
    time: [
        { word: "Instant", phonetic: "/ˈɪnstənt/", homophone: "因斯坦特", meaning: "瞬间", sentence: "In an instant.", translation: "一瞬间。", homophoneSentence: "因安因斯坦特." },
        { word: "Moment", phonetic: "/ˈməʊmənt/", homophone: "莫门特", meaning: "时刻", sentence: "Just a moment.", translation: "等一下。", homophoneSentence: "贾斯特阿莫门特." },
        { word: "Second", phonetic: "/ˈsekənd/", homophone: "塞肯德", meaning: "秒", sentence: "Wait a second.", translation: "等一秒。", homophoneSentence: "韦特阿塞肯德." },
        { word: "Minute", phonetic: "/ˈmɪnɪt/", homophone: "米尼特", meaning: "分钟", sentence: "Just a minute.", translation: "等一分钟。", homophoneSentence: "贾斯特阿米尼特." },
        { word: "Hour", phonetic: "/ˈaʊə/", homophone: "奥尔", meaning: "小时", sentence: "An hour ago.", translation: "一小时前。", homophoneSentence: "安奥尔阿戈." },
        { word: "Day", phonetic: "/deɪ/", homophone: "戴", meaning: "天", sentence: "Have a nice day!", translation: "祝你今天愉快！", homophoneSentence: "哈夫阿奈斯戴!" },
        { word: "Week", phonetic: "/wiːk/", homophone: "威克", meaning: "周", sentence: "Have a good week!", translation: "祝你这周愉快！", homophoneSentence: "哈夫阿古德威克!" },
        { word: "Fortnight", phonetic: "/ˈfɔːtnaɪt/", homophone: "福特奈特", meaning: "两周", sentence: "See you in a fortnight.", translation: "两周后见。", homophoneSentence: "西油因阿福特奈特." },
        { word: "Month", phonetic: "/mʌnθ/", homophone: "曼斯", meaning: "月", sentence: "See you next month.", translation: "下个月见。", homophoneSentence: "西油奈克斯特曼斯." },
        { word: "Year", phonetic: "/jɪə/", homophone: "耶", meaning: "年", sentence: "Happy New Year!", translation: "新年快乐！", homophoneSentence: "哈皮纽耶!" }
    ],
    food: [
        { word: "Pastry", phonetic: "/ˈpeɪstri/", homophone: "佩斯特里", meaning: "糕点", sentence: "Fresh pastry.", translation: "新鲜糕点。", homophoneSentence: "弗雷什佩斯特里." },
        { word: "Croissant", phonetic: "/ˈkrwæsɒ̃/", homophone: "克瓦桑", meaning: "羊角面包", sentence: "Butter croissant.", translation: "黄油羊角面包。", homophoneSentence: "巴特克瓦桑." },
        { word: "Bagel", phonetic: "/ˈbeɪɡl/", homophone: "贝格尔", meaning: "百吉饼", sentence: "Cream cheese bagel.", translation: "奶油芝士百吉饼。", homophoneSentence: "克里姆奇兹贝格尔." },
        { word: "Muffin", phonetic: "/ˈmʌfɪn/", homophone: "马芬", meaning: "松饼", sentence: "Blueberry muffin.", translation: "蓝莓松饼。", homophoneSentence: "布鲁贝里马芬." },
        { word: "Scone", phonetic: "/skɒn/", homophone: "斯康", meaning: "司康饼", sentence: "Fresh baked scone.", translation: "新鲜烤司康饼。", homophoneSentence: "弗雷什贝克德斯康." },
        { word: "Danish", phonetic: "/ˈdeɪnɪʃ/", homophone: "丹尼什", meaning: "丹麦酥", sentence: "Apple Danish.", translation: "苹果丹麦酥。", homophoneSentence: "阿普尔丹尼什." },
        { word: "Donut", phonetic: "/ˈdəʊnʌt/", homophone: "多纳特", meaning: "甜甜圈", sentence: "Glazed donut.", translation: "糖霜甜甜圈。", homophoneSentence: "格雷兹德多纳特." },
        { word: "Pretzel", phonetic: "/ˈpretsl/", homophone: "普雷策尔", meaning: "椒盐卷饼", sentence: "Soft pretzel.", translation: "软椒盐卷饼。", homophoneSentence: "索夫特普雷策尔." },
        { word: "Biscuit", phonetic: "/ˈbɪskɪt/", homophone: "比斯吉特", meaning: "饼干", sentence: "Butter biscuit.", translation: "黄油饼干。", homophoneSentence: "巴特比斯吉特." },
        { word: "Cookie", phonetic: "/ˈkʊki/", homophone: "库基", meaning: "曲奇", sentence: "Chocolate chip cookie.", translation: "巧克力曲奇。", homophoneSentence: "乔克利特奇普库基." }
    ],
    conversations: [
        { word: "I couldn't agree more", phonetic: "/aɪ ˈkʊdnt əˈɡriː mɔː/", homophone: "爱库德恩特阿格里莫", meaning: "我完全同意", sentence: "I couldn't agree more!", translation: "我完全同意！", homophoneSentence: "爱库德恩特阿格里莫!" },
        { word: "That makes sense", phonetic: "/ðæt meɪks sens/", homophone: "泽特梅克斯森斯", meaning: "有道理", sentence: "That makes sense.", translation: "有道理。", homophoneSentence: "泽特梅克斯森斯." },
        { word: "I see your point", phonetic: "/aɪ siː jɔː pɔɪnt/", homophone: "爱西哟波因特", meaning: "我明白你的观点", sentence: "I see your point.", translation: "我明白你的观点。", homophoneSentence: "爱西哟波因特." },
        { word: "Fair enough", phonetic: "/feər ɪˈnʌf/", homophone: "费尔伊纳夫", meaning: "有道理", sentence: "Fair enough!", translation: "有道理！", homophoneSentence: "费尔伊纳夫!" },
        { word: "I get it now", phonetic: "/aɪ ɡet ɪt naʊ/", homophone: "爱盖特伊特纳奥", meaning: "我现在明白了", sentence: "I get it now!", translation: "我现在明白了！", homophoneSentence: "爱盖特伊特纳奥!" },
        { word: "That explains it", phonetic: "/ðæt ɪkˈspleɪnz ɪt/", homophone: "泽特伊克斯普莱恩兹伊特", meaning: "这就解释了", sentence: "That explains it!", translation: "这就解释了！", homophoneSentence: "泽特伊克斯普莱恩兹伊特!" },
        { word: "Now I understand", phonetic: "/naʊ aɪ ˌʌndəˈstænd/", homophone: "纳奥爱安德斯坦德", meaning: "现在我明白了", sentence: "Now I understand!", translation: "现在我明白了！", homophoneSentence: "纳奥爱安德斯坦德!" },
        { word: "It all adds up", phonetic: "/ɪt ɔːl ædz ʌp/", homophone: "伊特奥尔艾兹阿普", meaning: "一切都说得通了", sentence: "It all adds up now.", translation: "现在一切都说得通了。", homophoneSentence: "伊特奥尔艾兹阿普纳奥." },
        { word: "The pieces fit", phonetic: "/ðə ˈpiːsɪz fɪt/", homophone: "泽皮西斯菲特", meaning: "一切都吻合了", sentence: "The pieces fit together.", translation: "一切都吻合了。", homophoneSentence: "泽皮西斯菲特图盖泽." },
        { word: "That clarifies things", phonetic: "/ðæt ˈklærɪfaɪz θɪŋz/", homophone: "泽特克拉里法兹辛兹", meaning: "那澄清了事情", sentence: "That clarifies things.", translation: "那澄清了事情。", homophoneSentence: "泽特克拉里法兹辛兹." }
    ],
    sentences: [
        { word: "Practice makes perfect", phonetic: "/ˈpræktɪs meɪks ˈpɜːfɪkt/", homophone: "普拉克蒂斯梅克斯珀费克特", meaning: "熟能生巧", sentence: "Practice makes perfect.", translation: "熟能生巧。", homophoneSentence: "普拉克蒂斯梅克斯珀费克特." },
        { word: "Patience is a virtue", phonetic: "/ˈpeɪʃəns ɪz ə ˈvɜːtʃuː/", homophone: "佩申斯伊兹阿沃丘", meaning: "耐心是一种美德", sentence: "Patience is a virtue.", translation: "耐心是一种美德。", homophoneSentence: "佩申斯伊兹阿沃丘." },
        { word: "Rome wasn't built in a day", phonetic: "/rəʊm ˈwɒznt bɪlt ɪn ə deɪ/", homophone: "罗姆沃兹特比尔特因阿戴", meaning: "罗马不是一天建成的", sentence: "Rome wasn't built in a day.", translation: "罗马不是一天建成的。", homophoneSentence: "罗姆沃兹特比尔特因阿戴." },
        { word: "Slow and steady wins the race", phonetic: "/sləʊ ənd ˈstedi wɪnz ðə reɪs/", homophone: "斯洛安德斯特迪温兹泽雷斯", meaning: "稳扎稳打无往不胜", sentence: "Slow and steady wins the race.", translation: "稳扎稳打无往不胜。", homophoneSentence: "斯洛安德斯特迪温兹泽雷斯." },
        { word: "The early bird catches the worm", phonetic: "/ði ˈɜːli bɜːd ˈkætʃɪz ðə wɜːm/", homophone: "泽厄利伯德卡奇兹泽沃姆", meaning: "早起的鸟儿有虫吃", sentence: "The early bird catches the worm.", translation: "早起的鸟儿有虫吃。", homophoneSentence: "泽厄利伯德卡奇兹泽沃姆." },
        { word: "Time flies when you're having fun", phonetic: "/taɪm flaɪz wen jɔː ˈhævɪŋ fʌn/", homophone: "泰姆弗莱兹温约哈文凡", meaning: "快乐时光过得快", sentence: "Time flies when you're having fun.", translation: "快乐时光过得快。", homophoneSentence: "泰姆弗莱兹温约哈文凡." },
        { word: "Where there's a will, there's a way", phonetic: "/weə ðeəz ə wɪl ðeəz ə weɪ/", homophone: "韦尔泽尔兹阿威尔泽尔兹阿韦", meaning: "有志者事竟成", sentence: "Where there's a will, there's a way.", translation: "有志者事竟成。", homophoneSentence: "韦尔泽尔兹阿威尔泽尔兹阿韦." },
        { word: "You can't judge a book by its cover", phonetic: "/juː kɑːnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌvə/", homophone: "油坎特贾奇阿布克拜伊茨卡沃", meaning: "不能以貌取人", sentence: "You can't judge a book by its cover.", translation: "不能以貌取人。", homophoneSentence: "油坎特贾奇阿布克拜伊茨卡沃." },
        { word: "Two wrongs don't make a right", phonetic: "/tuː rɒŋz dəʊnt meɪk ə raɪt/", homophone: "图朗兹东特梅克阿莱特", meaning: "两个错误不能成为一个正确", sentence: "Two wrongs don't make a right.", translation: "两个错误不能成为一个正确。", homophoneSentence: "图朗兹东特梅克阿莱特." },
        { word: "When in Rome, do as the Romans do", phonetic: "/wen ɪn rəʊm duː æz ðə ˈrəʊmənz duː/", homophone: "温因罗姆杜阿兹泽罗曼兹杜", meaning: "入乡随俗", sentence: "When in Rome, do as the Romans do.", translation: "入乡随俗。", homophoneSentence: "温因罗姆杜阿兹泽罗曼兹杜." }
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
    const existingWordRegex = /word:\s*["']([^"']+)["']/g;
    let m;
    while ((m = existingWordRegex.exec(existingContent)) !== null) {
        existingWordsInCategory.add(m[1].toLowerCase());
    }
    
    const wordsToAdd = words.filter(w => !existingWords.has(w.word.toLowerCase()) && !existingWordsInCategory.has(w.word.toLowerCase()));
    
    if (wordsToAdd.length === 0) continue;
    
    const newEntries = wordsToAdd.map(w => {
        return `        { word: "${w.word}", phonetic: "${w.phonetic}", homophone: "${w.homophone}", meaning: "${w.meaning}", sentence: "${w.sentence}", translation: "${w.translation}", homophoneSentence: "${w.homophoneSentence}" }`;
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
