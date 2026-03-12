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
        { word: "Top of the morning", phonetic: "/tɒp əv ðə ˈmɔːnɪŋ/", homophone: "托普阿夫泽莫宁", meaning: "早上好", sentence: "Top of the morning to you!", translation: "早上好！", homophoneSentence: "托普阿夫泽莫宁图油!" },
        { word: "Good afternoon", phonetic: "/ɡʊd ˌɑːftəˈnuːn/", homophone: "古德阿夫特努恩", meaning: "下午好", sentence: "Good afternoon, everyone!", translation: "大家下午好！", homophoneSentence: "古德阿夫特努恩,艾弗里万!" },
        { word: "Good evening", phonetic: "/ɡʊd ˈiːvnɪŋ/", homophone: "古德伊夫宁", meaning: "晚上好", sentence: "Good evening, ladies and gentlemen.", translation: "女士们先生们晚上好。", homophoneSentence: "古德伊夫宁,雷迪兹安德真特尔曼." },
        { word: "Good night", phonetic: "/ɡʊd naɪt/", homophone: "古德奈特", meaning: "晚安", sentence: "Good night, sleep well!", translation: "晚安，睡个好觉！", homophoneSentence: "古德奈特,斯利普韦尔!" },
        { word: "Sleep tight", phonetic: "/sliːp taɪt/", homophone: "斯利普泰特", meaning: "睡个好觉", sentence: "Good night, sleep tight!", translation: "晚安，睡个好觉！", homophoneSentence: "古德奈特,斯利普泰特!" },
        { word: "Sweet dreams", phonetic: "/swiːt driːmz/", homophone: "斯威特德里姆兹", meaning: "美梦", sentence: "Sweet dreams, my dear!", translation: "亲爱的，做个好梦！", homophoneSentence: "斯威特德里姆兹,麦迪尔!" },
        { word: "See you later", phonetic: "/siː juː ˈleɪtə/", homophone: "西油雷特", meaning: "回头见", sentence: "See you later, alligator!", translation: "回头见！", homophoneSentence: "西油雷特,阿利盖特!" },
        { word: "Catch you later", phonetic: "/kætʃ juː ˈleɪtə/", homophone: "凯奇油雷特", meaning: "待会儿见", sentence: "Catch you later, buddy!", translation: "伙计，待会儿见！", homophoneSentence: "凯奇油雷特,巴迪!" },
        { word: "Take care", phonetic: "/teɪk keə/", homophone: "泰克凯尔", meaning: "保重", sentence: "Take care of yourself!", translation: "照顾好自己！", homophoneSentence: "泰克凯尔阿夫约塞尔夫!" },
        { word: "Have a good one", phonetic: "/hæv ə ɡʊd wʌn/", homophone: "哈夫阿古德万", meaning: "祝你愉快", sentence: "Have a good one!", translation: "祝你愉快！", homophoneSentence: "哈夫阿古德万!" }
    ],
    emotions: [
        { word: "Melancholy", phonetic: "/ˈmelənkəli/", homophone: "梅兰克利", meaning: "忧郁的", sentence: "She felt melancholy today.", translation: "她今天感到忧郁。", homophoneSentence: "希菲尔特梅兰克利特戴." },
        { word: "Nostalgic", phonetic: "/nɒˈstældʒɪk/", homophone: "诺斯塔尔吉克", meaning: "怀旧的", sentence: "I feel nostalgic about the past.", translation: "我对过去感到怀旧。", homophoneSentence: "爱菲尔诺斯塔尔吉克阿鲍特泽帕斯特." },
        { word: "Sentimental", phonetic: "/ˌsentɪˈmentl/", homophone: "森蒂门特尔", meaning: "感伤的", sentence: "She's very sentimental.", translation: "她很感伤。", homophoneSentence: "希兹韦里森蒂门特尔." },
        { word: "Wistful", phonetic: "/ˈwɪstfʊl/", homophone: "威斯特福尔", meaning: "惆怅的", sentence: "He had a wistful look.", translation: "他带着惆怅的表情。", homophoneSentence: "希哈德阿威斯特福尔卢克." },
        { word: "Yearning", phonetic: "/ˈjɜːnɪŋ/", homophone: "耶宁", meaning: "渴望的", sentence: "I have a yearning for home.", translation: "我渴望回家。", homophoneSentence: "爱哈夫阿耶宁福霍姆." },
        { word: "Longing", phonetic: "/ˈlɒŋɪŋ/", homophone: "朗金", meaning: "渴望", sentence: "She felt a deep longing.", translation: "她感到深深的渴望。", homophoneSentence: "希菲尔特阿迪普朗金." },
        { word: "Hopeful", phonetic: "/ˈhəʊpfʊl/", homophone: "霍普福尔", meaning: "充满希望的", sentence: "I'm hopeful about the future.", translation: "我对未来充满希望。", homophoneSentence: "爱姆霍普福尔阿鲍特泽菲尤彻." },
        { word: "Optimistic", phonetic: "/ˌɒptɪˈmɪstɪk/", homophone: "奥普蒂米斯蒂克", meaning: "乐观的", sentence: "She's always optimistic.", translation: "她总是很乐观。", homophoneSentence: "希兹奥尔韦兹奥普蒂米斯蒂克." },
        { word: "Pessimistic", phonetic: "/ˌpesɪˈmɪstɪk/", homophone: "佩西米斯蒂克", meaning: "悲观的", sentence: "Don't be so pessimistic!", translation: "别那么悲观！", homophoneSentence: "东特比索佩西米斯蒂克!" },
        { word: "Cynical", phonetic: "/ˈsɪnɪkl/", homophone: "西尼克尔", meaning: "愤世嫉俗的", sentence: "He's become very cynical.", translation: "他变得很愤世嫉俗。", homophoneSentence: "希兹比卡姆韦里西尼克尔." }
    ],
    numbers: [
        { word: "Two million", phonetic: "/tuː ˈmɪljən/", homophone: "图米尔里恩", meaning: "两百万", sentence: "Two million people watched.", translation: "两百万人观看了。", homophoneSentence: "图米尔里恩皮普尔沃奇德." },
        { word: "Three million", phonetic: "/θriː ˈmɪljən/", homophone: "斯里米尔里恩", meaning: "三百万", sentence: "Three million dollars.", translation: "三百万美元。", homophoneSentence: "斯里米尔里恩多拉兹." },
        { word: "Five million", phonetic: "/faɪv ˈmɪljən/", homophone: "法伊夫米尔里恩", meaning: "五百万", sentence: "Five million views.", translation: "五百万次观看。", homophoneSentence: "法伊夫米尔里恩维尤兹." },
        { word: "Ten million", phonetic: "/ten ˈmɪljən/", homophone: "滕米尔里恩", meaning: "一千万", sentence: "Ten million users.", translation: "一千万用户。", homophoneSentence: "滕米尔里恩尤泽兹." },
        { word: "One hundred million", phonetic: "/wʌn ˈhʌndrəd ˈmɪljən/", homophone: "万亨德里德米尔里恩", meaning: "一亿", sentence: "One hundred million people.", translation: "一亿人。", homophoneSentence: "万亨德里德米尔里恩皮普尔." },
        { word: "One billion", phonetic: "/wʌn ˈbɪljən/", homophone: "万比利恩", meaning: "十亿", sentence: "One billion dollars!", translation: "十亿美元！", homophoneSentence: "万比利恩多拉兹!" },
        { word: "Two billion", phonetic: "/tuː ˈbɪljən/", homophone: "图比利恩", meaning: "二十亿", sentence: "Two billion people.", translation: "二十亿人。", homophoneSentence: "图比利恩皮普尔." },
        { word: "Half", phonetic: "/hɑːf/", homophone: "哈夫", meaning: "一半", sentence: "Half of the class.", translation: "班上一半的人。", homophoneSentence: "哈夫阿夫泽克拉斯." },
        { word: "Quarter", phonetic: "/ˈkwɔːtə/", homophone: "夸特", meaning: "四分之一", sentence: "A quarter of the pizza.", translation: "四分之一的披萨。", homophoneSentence: "阿夸特阿夫泽皮扎." },
        { word: "Third", phonetic: "/θɜːd/", homophone: "瑟德", meaning: "三分之一", sentence: "A third of the students.", translation: "三分之一的学生。", homophoneSentence: "阿瑟德阿夫泽斯图登茨." }
    ],
    colors: [
        { word: "Teal", phonetic: "/tiːl/", homophone: "蒂尔", meaning: "蓝绿色", sentence: "The teal ocean is beautiful.", translation: "蓝绿色的海洋很美。", homophoneSentence: "泽蒂尔欧申伊兹比尤特福尔." },
        { word: "Cyan", phonetic: "/ˈsaɪæn/", homophone: "赛恩", meaning: "青色", sentence: "Cyan is a bright color.", translation: "青色是一种明亮的颜色。", homophoneSentence: "赛恩伊兹阿布赖特卡勒." },
        { word: "Aquamarine", phonetic: "/ˌækwəməˈriːn/", homophone: "阿夸马里恩", meaning: "海蓝宝石色", sentence: "Aquamarine is my birthstone.", translation: "海蓝宝石是我的诞生石。", homophoneSentence: "阿夸马里恩伊兹麦伯斯斯通." },
        { word: "Turquoise", phonetic: "/ˈtɜːkwɔɪz/", homophone: "特克沃伊兹", meaning: "绿松石色", sentence: "She loves turquoise jewelry.", translation: "她喜欢绿松石首饰。", homophoneSentence: "希拉夫兹特克沃伊兹朱厄里." },
        { word: "Navy", phonetic: "/ˈneɪvi/", homophone: "内维", meaning: "藏青色", sentence: "He wore a navy suit.", translation: "他穿着藏青色西装。", homophoneSentence: "希沃尔阿内维苏特." },
        { word: "Royal blue", phonetic: "/ˌrɔɪəl ˈbluː/", homophone: "罗亚尔布卢", meaning: "宝蓝色", sentence: "Royal blue is elegant.", translation: "宝蓝色很优雅。", homophoneSentence: "罗亚尔布卢伊兹埃勒甘特." },
        { word: "Sky blue", phonetic: "/skaɪ bluː/", homophone: "斯凯布卢", meaning: "天蓝色", sentence: "The sky blue dress is pretty.", translation: "天蓝色的裙子很漂亮。", homophoneSentence: "泽斯凯布卢德雷斯伊兹普里蒂." },
        { word: "Baby blue", phonetic: "/ˈbeɪbi bluː/", homophone: "贝比布卢", meaning: "淡蓝色", sentence: "Baby blue is a soft color.", translation: "淡蓝色是一种柔和的颜色。", homophoneSentence: "贝比布卢伊兹阿索夫特卡勒." },
        { word: "Powder blue", phonetic: "/ˈpaʊdə bluː/", homophone: "鲍德布卢", meaning: "粉蓝色", sentence: "Powder blue is calming.", translation: "粉蓝色令人平静。", homophoneSentence: "鲍德布卢伊兹卡明." },
        { word: "Steel blue", phonetic: "/stiːl bluː/", homophone: "斯蒂尔布卢", meaning: "钢蓝色", sentence: "Steel blue is modern.", translation: "钢蓝色很现代。", homophoneSentence: "斯蒂尔布卢伊兹莫登." }
    ],
    family: [
        { word: "Godfather", phonetic: "/ˈɡɒdfɑːðə/", homophone: "戈德法泽", meaning: "教父", sentence: "My godfather is my mentor.", translation: "我的教父是我的导师。", homophoneSentence: "麦戈德法泽伊兹麦门托." },
        { word: "Godmother", phonetic: "/ˈɡɒdmʌðə/", homophone: "戈德马泽", meaning: "教母", sentence: "My godmother is very kind.", translation: "我的教母很和蔼。", homophoneSentence: "麦戈德马泽伊兹韦里凯恩德." },
        { word: "Godson", phonetic: "/ˈɡɒdsʌn/", homophone: "戈德桑", meaning: "教子", sentence: "My godson is adorable.", translation: "我的教子很可爱。", homophoneSentence: "麦戈德桑伊兹阿多拉布尔." },
        { word: "Goddaughter", phonetic: "/ˈɡɒddɔːtə/", homophone: "戈德道特", meaning: "教女", sentence: "My goddaughter is five.", translation: "我的教女五岁了。", homophoneSentence: "麦戈德道特伊兹法伊夫." },
        { word: "Twin brother", phonetic: "/twɪn ˈbrʌðə/", homophone: "特温布拉泽", meaning: "双胞胎兄弟", sentence: "My twin brother looks like me.", translation: "我的双胞胎兄弟长得像我。", homophoneSentence: "麦特温布拉泽卢克斯莱克米." },
        { word: "Twin sister", phonetic: "/twɪn ˈsɪstə/", homophone: "特温西斯特", meaning: "双胞胎姐妹", sentence: "My twin sister is older by minutes.", translation: "我的双胞胎姐妹大我几分钟。", homophoneSentence: "麦特温西斯特伊兹欧尔德拜米尼茨." },
        { word: "Identical twins", phonetic: "/aɪˈdentɪkl twɪnz/", homophone: "艾登蒂克尔特温兹", meaning: "同卵双胞胎", sentence: "They are identical twins.", translation: "他们是同卵双胞胎。", homophoneSentence: "泽伊阿艾登蒂克尔特温兹." },
        { word: "Fraternal twins", phonetic: "/frəˈtɜːnl twɪnz/", homophone: "弗拉特内尔特温兹", meaning: "异卵双胞胎", sentence: "They are fraternal twins.", translation: "他们是异卵双胞胎。", homophoneSentence: "泽伊阿弗拉特内尔特温兹." },
        { word: "Only child", phonetic: "/ˈəʊnli tʃaɪld/", homophone: "欧恩利柴尔德", meaning: "独生子女", sentence: "I am an only child.", translation: "我是独生子女。", homophoneSentence: "爱埃姆安欧恩利柴尔德." },
        { word: "Eldest child", phonetic: "/ˈeldɪst tʃaɪld/", homophone: "埃尔德伊斯特柴尔德", meaning: "长子/长女", sentence: "I am the eldest child.", translation: "我是长子。", homophoneSentence: "爱埃姆泽埃尔德伊斯特柴尔德." }
    ],
    time: [
        { word: "Sunrise", phonetic: "/ˈsʌnraɪz/", homophone: "桑赖兹", meaning: "日出", sentence: "The sunrise is beautiful.", translation: "日出很美。", homophoneSentence: "泽桑赖兹伊兹比尤特福尔." },
        { word: "Sunset", phonetic: "/ˈsʌnset/", homophone: "桑塞特", meaning: "日落", sentence: "Let's watch the sunset.", translation: "我们看日落吧。", homophoneSentence: "莱茨沃奇泽桑塞特." },
        { word: "Dawn", phonetic: "/dɔːn/", homophone: "道恩", meaning: "黎明", sentence: "We left at dawn.", translation: "我们在黎明出发。", homophoneSentence: "维莱夫特阿特道恩." },
        { word: "Dusk", phonetic: "/dʌsk/", homophone: "达斯克", meaning: "黄昏", sentence: "The sky is orange at dusk.", translation: "黄昏时天空是橙色的。", homophoneSentence: "泽斯凯伊兹奥伦奇阿特达斯克." },
        { word: "Twilight", phonetic: "/ˈtwaɪlaɪt/", homophone: "特瓦伊莱特", meaning: "暮色", sentence: "The twilight sky is magical.", translation: "暮色天空很神奇。", homophoneSentence: "泽特瓦伊莱特斯凯伊兹马吉克尔." },
        { word: "Midnight", phonetic: "/ˈmɪdnaɪt/", homophone: "米德奈特", meaning: "午夜", sentence: "The party ended at midnight.", translation: "派对在午夜结束。", homophoneSentence: "泽帕蒂恩迪德阿特米德奈特." },
        { word: "Noon", phonetic: "/nuːn/", homophone: "努恩", meaning: "中午", sentence: "Let's meet at noon.", translation: "我们中午见面吧。", homophoneSentence: "莱茨米特阿特努恩." },
        { word: "Midday", phonetic: "/mɪdˈdeɪ/", homophone: "米德戴", meaning: "正午", sentence: "The sun is strongest at midday.", translation: "正午时阳光最强。", homophoneSentence: "泽桑伊兹斯特朗格斯特阿特米德戴." },
        { word: "Early morning", phonetic: "/ˈɜːli ˈmɔːnɪŋ/", homophone: "厄利莫宁", meaning: "清晨", sentence: "I exercise in the early morning.", translation: "我在清晨锻炼。", homophoneSentence: "爱埃克瑟赛兹因泽厄利莫宁." },
        { word: "Late night", phonetic: "/leɪt naɪt/", homophone: "雷特奈特", meaning: "深夜", sentence: "I work late at night.", translation: "我深夜工作。", homophoneSentence: "爱沃克雷特阿特奈特." }
    ],
    food: [
        { word: "Steak", phonetic: "/steɪk/", homophone: "斯特克", meaning: "牛排", sentence: "I'd like my steak medium-rare.", translation: "我的牛排要五分熟。", homophoneSentence: "爱德拉克斯麦斯特克米迪厄姆雷尔." },
        { word: "Chicken", phonetic: "/ˈtʃɪkɪn/", homophone: "奇肯", meaning: "鸡肉", sentence: "Grilled chicken is healthy.", translation: "烤鸡很健康。", homophoneSentence: "格里尔德奇肯伊兹海尔希." },
        { word: "Pork", phonetic: "/pɔːk/", homophone: "波克", meaning: "猪肉", sentence: "Pork chops are delicious.", translation: "猪排很好吃。", homophoneSentence: "波克乔普斯阿迪利谢斯." },
        { word: "Beef", phonetic: "/biːf/", homophone: "比夫", meaning: "牛肉", sentence: "Beef stew is hearty.", translation: "牛肉炖菜很丰盛。", homophoneSentence: "比夫斯尤伊兹哈蒂." },
        { word: "Lamb", phonetic: "/læm/", homophone: "拉姆", meaning: "羊肉", sentence: "Roast lamb is tender.", translation: "烤羊肉很嫩。", homophoneSentence: "罗斯特拉姆伊兹滕德." },
        { word: "Fish", phonetic: "/fɪʃ/", homophone: "菲什", meaning: "鱼", sentence: "Fresh fish is best.", translation: "新鲜的鱼最好。", homophoneSentence: "弗雷什菲什伊兹贝斯特." },
        { word: "Shrimp", phonetic: "/ʃrɪmp/", homophone: "什里姆普", meaning: "虾", sentence: "Grilled shrimp is tasty.", translation: "烤虾很好吃。", homophoneSentence: "格里尔德什里姆普伊兹泰斯蒂." },
        { word: "Crab", phonetic: "/kræb/", homophone: "克拉布", meaning: "螃蟹", sentence: "Crab cakes are popular.", translation: "蟹饼很受欢迎。", homophoneSentence: "克拉布凯克斯阿波皮尤勒." },
        { word: "Lobster", phonetic: "/ˈlɒbstə/", homophone: "洛布斯特", meaning: "龙虾", sentence: "Lobster is a delicacy.", translation: "龙虾是美味佳肴。", homophoneSentence: "洛布斯特伊兹阿德利卡西." },
        { word: "Squid", phonetic: "/skwɪd/", homophone: "斯奎德", meaning: "鱿鱼", sentence: "Fried squid is crispy.", translation: "炸鱿鱼很脆。", homophoneSentence: "弗拉德斯奎德伊兹克里斯皮." }
    ],
    conversations: [
        { word: "I beg your pardon", phonetic: "/aɪ beɡ jɔː ˈpɑːdn/", homophone: "爱贝格哟帕登", meaning: "请再说一遍", sentence: "I beg your pardon?", translation: "请再说一遍？", homophoneSentence: "爱贝格哟帕登?" },
        { word: "Excuse me", phonetic: "/ɪkˈskjuːz miː/", homophone: "伊克斯凯尤兹米", meaning: "打扰一下", sentence: "Excuse me, may I ask?", translation: "打扰一下，我可以问一下吗？", homophoneSentence: "伊克斯凯尤兹米,梅爱阿斯克?" },
        { word: "Pardon me", phonetic: "/ˈpɑːdn miː/", homophone: "帕登米", meaning: "抱歉", sentence: "Pardon me, I didn't hear you.", translation: "抱歉，我没听见你说的话。", homophoneSentence: "帕登米,爱迪登特希尔油." },
        { word: "Sorry to bother you", phonetic: "/ˈsɒri tuː ˈbɒðə juː/", homophone: "索里图博泽油", meaning: "抱歉打扰你", sentence: "Sorry to bother you, but...", translation: "抱歉打扰你，但是...", homophoneSentence: "索里图博泽油,巴特..." },
        { word: "Do you mind", phonetic: "/duː juː maɪnd/", homophone: "度油迈恩德", meaning: "你介意吗", sentence: "Do you mind if I sit here?", translation: "你介意我坐这里吗？", homophoneSentence: "度油迈恩德伊夫爱西特希尔?" },
        { word: "Would you mind", phonetic: "/wʊd juː maɪnd/", homophone: "武德油迈恩德", meaning: "你介意吗", sentence: "Would you mind helping me?", translation: "你介意帮我一下吗？", homophoneSentence: "武德油迈恩德赫尔平米?" },
        { word: "May I ask", phonetic: "/meɪ aɪ ɑːsk/", homophone: "梅爱阿斯克", meaning: "我可以问吗", sentence: "May I ask a question?", translation: "我可以问个问题吗？", homophoneSentence: "梅爱阿斯克阿奎斯钦?" },
        { word: "Could I ask", phonetic: "/kʊd aɪ ɑːsk/", homophone: "库德爱阿斯克", meaning: "我能问吗", sentence: "Could I ask for your help?", translation: "我能请你帮忙吗？", homophoneSentence: "库德爱阿斯克福哟赫尔普?" },
        { word: "Is it okay", phonetic: "/ɪz ɪt ˈəʊkeɪ/", homophone: "伊兹伊特欧凯", meaning: "可以吗", sentence: "Is it okay if I come later?", translation: "我晚点来可以吗？", homophoneSentence: "伊兹伊特欧凯伊夫爱卡姆雷特?" },
        { word: "Is that alright", phonetic: "/ɪz ðæt ɔːlˈraɪt/", homophone: "伊兹泽特奥尔赖特", meaning: "那样行吗", sentence: "Is that alright with you?", translation: "你觉得那样行吗？", homophoneSentence: "伊兹泽特奥尔赖特威兹油?" }
    ],
    sentences: [
        { word: "Raining cats and dogs", phonetic: "/ˈreɪnɪŋ kæts ænd dɒɡz/", homophone: "雷宁凯茨安德多格兹", meaning: "倾盆大雨", sentence: "It's raining cats and dogs!", translation: "下着倾盆大雨！", homophoneSentence: "伊茨雷宁凯茨安德多格兹!" },
        { word: "Cost an arm and a leg", phonetic: "/kɒst ən ɑːm ænd ə leɡ/", homophone: "科斯特安阿姆安德阿莱格", meaning: "非常昂贵", sentence: "That car cost an arm and a leg.", translation: "那辆车非常昂贵。", homophoneSentence: "泽特卡科斯特安阿姆安德阿莱格." },
        { word: "Once in a blue moon", phonetic: "/wʌns ɪn ə bluː muːn/", homophone: "万斯因阿布卢穆恩", meaning: "千载难逢", sentence: "This happens once in a blue moon.", translation: "这种事千载难逢。", homophoneSentence: "泽斯哈彭兹万斯因阿布卢穆恩." },
        { word: "See eye to eye", phonetic: "/siː aɪ tuː aɪ/", homophone: "西艾图艾", meaning: "看法一致", sentence: "We don't see eye to eye.", translation: "我们看法不一致。", homophoneSentence: "维东特西艾图艾." },
        { word: "When pigs fly", phonetic: "/wen pɪɡz flaɪ/", homophone: "温皮格兹弗莱", meaning: "绝不可能", sentence: "I'll do that when pigs fly!", translation: "我绝不可能做那事！", homophoneSentence: "爱尔杜泽特温皮格兹弗莱!" },
        { word: "Let sleeping dogs lie", phonetic: "/let ˈsliːpɪŋ dɒɡz laɪ/", homophone: "莱特斯利平多格兹莱", meaning: "别惹麻烦", sentence: "Just let sleeping dogs lie.", translation: "别惹麻烦了。", homophoneSentence: "贾斯特莱特斯利平多格兹莱." },
        { word: "You can't judge a book by its cover", phonetic: "/juː kɑːnt dʒʌdʒ ə bʊk baɪ ɪts ˈkʌvə/", homophone: "油坎特贾奇阿布克拜伊茨卡弗", meaning: "人不可貌相", sentence: "You can't judge a book by its cover.", translation: "人不可貌相。", homophoneSentence: "油坎特贾奇阿布克拜伊茨卡弗." },
        { word: "Birds of a feather flock together", phonetic: "/bɜːdz əv ə ˈfeðə flɒk təˈɡeðə/", homophone: "伯德兹阿夫阿费泽弗洛克特格泽", meaning: "物以类聚", sentence: "Birds of a feather flock together.", translation: "物以类聚。", homophoneSentence: "伯德兹阿夫阿费泽弗洛克特格泽." },
        { word: "The apple doesn't fall far from the tree", phonetic: "/ði ˈæpl dʌznt fɔːl fɑː frɒm ðə triː/", homophone: "泽阿普尔达兹特福尔法弗罗姆泽特里", meaning: "有其父必有其子", sentence: "The apple doesn't fall far from the tree.", translation: "有其父必有其子。", homophoneSentence: "泽阿普尔达兹特福尔法弗罗姆泽特里." },
        { word: "Don't count your chickens before they hatch", phonetic: "/dəʊnt kaʊnt jɔː ˈtʃɪkɪnz bɪˈfɔː ðeɪ hætʃ/", homophone: "东特考恩特哟奇肯兹比福泽伊哈奇", meaning: "不要过早乐观", sentence: "Don't count your chickens before they hatch.", translation: "不要过早乐观。", homophoneSentence: "东特考恩特哟奇肯兹比福泽伊哈奇." }
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
