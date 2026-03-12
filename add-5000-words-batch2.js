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
        { word: "What's shaking", phonetic: "/wɒts ˈʃeɪkɪŋ/", homophone: "沃茨谢金", meaning: "怎么样", sentence: "What's shaking, buddy?", translation: "伙计，怎么样？", homophoneSentence: "沃茨谢金,巴迪?" },
        { word: "How goes it", phonetic: "/haʊ ɡəʊz ɪt/", homophone: "好戈兹伊特", meaning: "进展如何", sentence: "How goes it with you?", translation: "你进展如何？", homophoneSentence: "好戈兹伊特威兹油?" },
        { word: "What's the scoop", phonetic: "/wɒts ðə skuːp/", homophone: "沃茨泽斯库普", meaning: "有什么新闻", sentence: "What's the scoop today?", translation: "今天有什么新闻？", homophoneSentence: "沃茨泽斯库普特戴?" },
        { word: "How's tricks", phonetic: "/haʊz trɪks/", homophone: "好兹特里克斯", meaning: "近况如何", sentence: "How's tricks, old friend?", translation: "老朋友，近况如何？", homophoneSentence: "好兹特里克斯,欧尔德弗伦德?" },
        { word: "What's the story", phonetic: "/wɒts ðə ˈstɔːri/", homophone: "沃茨泽斯托里", meaning: "有什么故事", sentence: "What's the story, morning glory?", translation: "有什么新鲜事？", homophoneSentence: "沃茨泽斯托里,莫宁格洛里?" },
        { word: "How's your world", phonetic: "/haʊz jɔː wɜːld/", homophone: "好兹哟沃德", meaning: "你的世界怎么样", sentence: "How's your world treating you?", translation: "你的世界对你怎么样？", homophoneSentence: "好兹哟沃德特里廷油?" },
        { word: "What's the haps", phonetic: "/wɒts ðə hæps/", homophone: "沃茨泽哈普斯", meaning: "有什么事", sentence: "What's the haps, my friend?", translation: "朋友，有什么事？", homophoneSentence: "沃茨泽哈普斯,麦弗伦德?" },
        { word: "How's everything shaking", phonetic: "/haʊz ˈevriθɪŋ ˈʃeɪkɪŋ/", homophone: "好兹艾弗里辛谢金", meaning: "一切都好吗", sentence: "How's everything shaking?", translation: "一切都好吗？", homophoneSentence: "好兹艾弗里辛谢金?" },
        { word: "What's popping", phonetic: "/wɒts ˈpɒpɪŋ/", homophone: "沃茨波平", meaning: "有什么新鲜事", sentence: "What's popping, dude?", translation: "伙计，有什么新鲜事？", homophoneSentence: "沃茨波平,杜德?" },
        { word: "How's your vibe", phonetic: "/haʊz jɔː vaɪb/", homophone: "好兹哟瓦伊布", meaning: "你的状态怎么样", sentence: "How's your vibe today?", translation: "今天状态怎么样？", homophoneSentence: "好兹哟瓦伊布特戴?" }
    ],
    emotions: [
        { word: "Euphoric", phonetic: "/juːˈfɒrɪk/", homophone: "尤福里克", meaning: "极度兴奋的", sentence: "I feel euphoric today!", translation: "今天我感到极度兴奋！", homophoneSentence: "爱菲尔尤福里克特戴!" },
        { word: "Blissful", phonetic: "/ˈblɪsfʊl/", homophone: "布利斯福尔", meaning: "极乐的", sentence: "What a blissful moment!", translation: "多么幸福的时刻！", homophoneSentence: "沃特阿布利斯福尔莫门特!" },
        { word: "Jubilant", phonetic: "/ˈdʒuːbɪlənt/", homophone: "朱比兰特", meaning: "欢欣的", sentence: "The team was jubilant.", translation: "团队欢欣鼓舞。", homophoneSentence: "泽蒂姆沃兹朱比兰特." },
        { word: "Exhilarated", phonetic: "/ɪɡˈzɪləreɪtɪd/", homophone: "伊格齐勒雷蒂德", meaning: "振奋的", sentence: "I feel exhilarated!", translation: "我感到振奋！", homophoneSentence: "爱菲尔伊格齐勒雷蒂德!" },
        { word: "Radiant", phonetic: "/ˈreɪdiənt/", homophone: "雷迪恩特", meaning: "容光焕发的", sentence: "She looks radiant today.", translation: "她今天容光焕发。", homophoneSentence: "希卢克斯雷迪恩特特戴." },
        { word: "Gleeful", phonetic: "/ˈɡliːfʊl/", homophone: "格利福尔", meaning: "欣喜的", sentence: "He had a gleeful expression.", translation: "他脸上带着欣喜的表情。", homophoneSentence: "希哈德阿格利福尔伊克斯普雷申." },
        { word: "Cheerful", phonetic: "/ˈtʃɪəfʊl/", homophone: "奇尔福尔", meaning: "快乐的", sentence: "She's always cheerful.", translation: "她总是很快乐。", homophoneSentence: "希兹奥尔韦兹奇尔福尔." },
        { word: "Joyful", phonetic: "/ˈdʒɔɪfʊl/", homophone: "乔伊福尔", meaning: "欢乐的", sentence: "What a joyful occasion!", translation: "多么欢乐的场合！", homophoneSentence: "沃特阿乔伊福尔奥凯詹!" },
        { word: "Merry", phonetic: "/ˈmeri/", homophone: "梅里", meaning: "愉快的", sentence: "Merry Christmas!", translation: "圣诞快乐！", homophoneSentence: "梅里克里斯马斯!" },
        { word: "Jolly", phonetic: "/ˈdʒɒli/", homophone: "乔利", meaning: "快乐的", sentence: "He's a jolly fellow.", translation: "他是个快乐的家伙。", homophoneSentence: "希兹阿乔利费洛." }
    ],
    numbers: [
        { word: "Twenty thousand", phonetic: "/ˈtwenti ˈθaʊzənd/", homophone: "滕蒂绍赞德", meaning: "两万", sentence: "Twenty thousand people came.", translation: "两万人来了。", homophoneSentence: "滕蒂绍赞德皮普尔凯姆." },
        { word: "Thirty thousand", phonetic: "/ˈθɜːti ˈθaʊzənd/", homophone: "瑟蒂绍赞德", meaning: "三万", sentence: "Thirty thousand dollars.", translation: "三万美元。", homophoneSentence: "瑟蒂绍赞德多拉兹." },
        { word: "Forty thousand", phonetic: "/ˈfɔːti ˈθaʊzənd/", homophone: "福蒂绍赞德", meaning: "四万", sentence: "Forty thousand students.", translation: "四万名学生。", homophoneSentence: "福蒂绍赞德斯图登茨." },
        { word: "Fifty thousand", phonetic: "/ˈfɪfti ˈθaʊzənd/", homophone: "菲夫蒂绍赞德", meaning: "五万", sentence: "Fifty thousand fans.", translation: "五万名粉丝。", homophoneSentence: "菲夫蒂绍赞德凡兹." },
        { word: "Sixty thousand", phonetic: "/ˈsɪksti ˈθaʊzənd/", homophone: "西克斯蒂绍赞德", meaning: "六万", sentence: "Sixty thousand votes.", translation: "六万票。", homophoneSentence: "西克斯蒂绍赞德沃茨." },
        { word: "Seventy thousand", phonetic: "/ˈsevnti ˈθaʊzənd/", homophone: "塞文蒂绍赞德", meaning: "七万", sentence: "Seventy thousand viewers.", translation: "七万名观众。", homophoneSentence: "塞文蒂绍赞德维尤尔兹." },
        { word: "Eighty thousand", phonetic: "/ˈeɪti ˈθaʊzənd/", homophone: "埃蒂绍赞德", meaning: "八万", sentence: "Eighty thousand participants.", translation: "八万名参与者。", homophoneSentence: "埃蒂绍赞德帕蒂西潘茨." },
        { word: "Ninety thousand", phonetic: "/ˈnaɪnti ˈθaʊzənd/", homophone: "奈恩蒂绍赞德", meaning: "九万", sentence: "Ninety thousand applicants.", translation: "九万名申请人。", homophoneSentence: "奈恩蒂绍赞德阿普利坎茨." },
        { word: "One hundred thousand", phonetic: "/wʌn ˈhʌndrəd ˈθaʊzənd/", homophone: "万亨德里德绍赞德", meaning: "十万", sentence: "One hundred thousand people.", translation: "十万人。", homophoneSentence: "万亨德里德绍赞德皮普尔." },
        { word: "One million", phonetic: "/wʌn ˈmɪljən/", homophone: "万米尔里恩", meaning: "一百万", sentence: "One million dollars!", translation: "一百万美元！", homophoneSentence: "万米尔里恩多拉兹!" }
    ],
    colors: [
        { word: "Magenta", phonetic: "/məˈdʒentə/", homophone: "马真塔", meaning: "洋红色", sentence: "The magenta flowers are beautiful.", translation: "洋红色的花很美。", homophoneSentence: "泽马真塔弗劳尔兹阿比尤特福尔." },
        { word: "Fuchsia", phonetic: "/ˈfjuːʃə/", homophone: "菲尤沙", meaning: "紫红色", sentence: "She wore a fuchsia dress.", translation: "她穿着紫红色的裙子。", homophoneSentence: "希沃尔阿菲尤沙德雷斯." },
        { word: "Lavender", phonetic: "/ˈlævəndə/", homophone: "拉文德", meaning: "薰衣草色", sentence: "The lavender fields are stunning.", translation: "薰衣草田令人惊叹。", homophoneSentence: "泽拉文德菲尔兹阿斯唐宁." },
        { word: "Lilac", phonetic: "/ˈlaɪlək/", homophone: "莱拉克", meaning: "丁香色", sentence: "The lilac bush is blooming.", translation: "丁香灌木正在开花。", homophoneSentence: "泽莱拉克布什伊兹布鲁明." },
        { word: "Violet", phonetic: "/ˈvaɪələt/", homophone: "瓦伊奥利特", meaning: "紫罗兰色", sentence: "Violet is my favorite color.", translation: "紫罗兰是我最喜欢的颜色。", homophoneSentence: "瓦伊奥利特伊兹麦费沃里特卡勒." },
        { word: "Indigo", phonetic: "/ˈɪndɪɡəʊ/", homophone: "因迪戈", meaning: "靛蓝色", sentence: "The indigo sky at night.", translation: "夜晚靛蓝色的天空。", homophoneSentence: "泽因迪戈斯凯阿特奈特." },
        { word: "Periwinkle", phonetic: "/ˈperɪwɪŋkl/", homophone: "佩里温克尔", meaning: "长春花色", sentence: "Periwinkle is a soft blue.", translation: "长春花色是柔和的蓝色。", homophoneSentence: "佩里温克尔伊兹阿索夫特布卢." },
        { word: "Plum", phonetic: "/plʌm/", homophone: "普拉姆", meaning: "梅红色", sentence: "She painted the room plum.", translation: "她把房间漆成了梅红色。", homophoneSentence: "希佩因蒂德泽鲁姆普拉姆." },
        { word: "Orchid", phonetic: "/ˈɔːkɪd/", homophone: "奥基德", meaning: "兰花色", sentence: "The orchid color is elegant.", translation: "兰花色很优雅。", homophoneSentence: "泽奥基德卡勒伊兹埃勒甘特." },
        { word: "Mauve", phonetic: "/məʊv/", homophone: "莫夫", meaning: "淡紫色", sentence: "Mauve is a gentle color.", translation: "淡紫色是一种柔和的颜色。", homophoneSentence: "莫夫伊兹阿真特尔卡勒." }
    ],
    family: [
        { word: "Father-in-law", phonetic: "/ˈfɑːðər ɪn lɔː/", homophone: "法泽因洛", meaning: "公公/岳父", sentence: "My father-in-law is retired.", translation: "我的公公退休了。", homophoneSentence: "麦法泽因洛伊兹里泰尔德." },
        { word: "Mother-in-law", phonetic: "/ˈmʌðər ɪn lɔː/", homophone: "马泽因洛", meaning: "婆婆/岳母", sentence: "My mother-in-law cooks well.", translation: "我的婆婆做饭很好吃。", homophoneSentence: "麦马泽因洛库克斯韦尔." },
        { word: "Son-in-law", phonetic: "/ˈsʌn ɪn lɔː/", homophone: "桑因洛", meaning: "女婿", sentence: "My son-in-law is a doctor.", translation: "我的女婿是医生。", homophoneSentence: "麦桑因洛伊兹阿多克特." },
        { word: "Daughter-in-law", phonetic: "/ˈdɔːtər ɪn lɔː/", homophone: "道特因洛", meaning: "儿媳", sentence: "My daughter-in-law is kind.", translation: "我的儿媳很和蔼。", homophoneSentence: "麦道特因洛伊兹凯恩德." },
        { word: "Brother-in-law", phonetic: "/ˈbrʌðər ɪn lɔː/", homophone: "布拉泽因洛", meaning: "姐夫/妹夫/大伯/小叔", sentence: "My brother-in-law is funny.", translation: "我的姐夫很有趣。", homophoneSentence: "麦布拉泽因洛伊兹凡尼." },
        { word: "Sister-in-law", phonetic: "/ˈsɪstər ɪn lɔː/", homophone: "西斯特因洛", meaning: "嫂子/弟媳/大姑/小姑", sentence: "My sister-in-law is helpful.", translation: "我的嫂子很乐于助人。", homophoneSentence: "麦西斯特因洛伊兹赫尔普福尔." },
        { word: "Grandnephew", phonetic: "/ˈɡrænˌnefjuː/", homophone: "格兰德内菲尤", meaning: "侄孙", sentence: "My grandnephew is cute.", translation: "我的侄孙很可爱。", homophoneSentence: "麦格兰德内菲尤伊兹凯尤特." },
        { word: "Grandniece", phonetic: "/ˈɡrænniːs/", homophone: "格兰德尼斯", meaning: "侄孙女", sentence: "My grandniece is adorable.", translation: "我的侄孙女很可爱。", homophoneSentence: "麦格兰德尼斯伊兹阿多拉布尔." },
        { word: "First cousin", phonetic: "/fɜːst ˈkʌzn/", homophone: "弗斯特卡曾", meaning: "亲堂/表兄弟姐妹", sentence: "My first cousin lives nearby.", translation: "我的表兄弟住在附近。", homophoneSentence: "麦弗斯特卡曾利夫兹尼拜." },
        { word: "Second cousin", phonetic: "/ˈsekənd ˈkʌzn/", homophone: "塞肯德卡曾", meaning: "远房堂/表兄弟姐妹", sentence: "My second cousin visited us.", translation: "我的远房表兄弟来看我们了。", homophoneSentence: "麦塞肯德卡曾维齐蒂德阿斯." }
    ],
    time: [
        { word: "Fortnight", phonetic: "/ˈfɔːtnaɪt/", homophone: "福特奈特", meaning: "两周", sentence: "I'll see you in a fortnight.", translation: "两周后见。", homophoneSentence: "爱尔西油因阿福特奈特." },
        { word: "Quarter", phonetic: "/ˈkwɔːtə/", homophone: "夸特", meaning: "季度/一刻钟", sentence: "The first quarter of the year.", translation: "一年的第一季度。", homophoneSentence: "泽弗斯特夸特阿夫泽耶尔." },
        { word: "Semester", phonetic: "/sɪˈmestə/", homophone: "西梅斯特", meaning: "学期", sentence: "This semester is challenging.", translation: "这个学期很有挑战性。", homophoneSentence: "泽斯西梅斯特伊兹查林金." },
        { word: "Trimester", phonetic: "/traɪˈmestə/", homophone: "特拉伊梅斯特", meaning: "三个月/孕期", sentence: "She's in her second trimester.", translation: "她处于孕中期。", homophoneSentence: "希兹因赫塞肯德特拉伊梅斯特." },
        { word: "Fiscal year", phonetic: "/ˈfɪskəl jɪə/", homophone: "菲斯卡尔耶尔", meaning: "财政年度", sentence: "The fiscal year ends in March.", translation: "财政年度在三月结束。", homophoneSentence: "泽菲斯卡尔耶尔恩兹因马奇." },
        { word: "Calendar year", phonetic: "/ˈkælɪndə jɪə/", homophone: "卡伦德耶尔", meaning: "日历年", sentence: "The calendar year has 365 days.", translation: "日历年有365天。", homophoneSentence: "泽卡伦德耶尔哈兹斯里克斯蒂法伊夫戴兹." },
        { word: "Leap year", phonetic: "/liːp jɪə/", homophone: "利普耶尔", meaning: "闰年", sentence: "2024 is a leap year.", translation: "2024年是闰年。", homophoneSentence: "图绍赞德恩德滕福伊兹阿利普耶尔." },
        { word: "Workweek", phonetic: "/ˈwɜːkwiːk/", homophone: "沃克威克", meaning: "工作周", sentence: "The workweek is 40 hours.", translation: "工作周是40小时。", homophoneSentence: "泽沃克威克伊兹福蒂阿沃兹." },
        { word: "Weekend", phonetic: "/ˌwiːkˈend/", homophone: "威肯德", meaning: "周末", sentence: "Have a great weekend!", translation: "周末愉快！", homophoneSentence: "哈夫阿格雷特威肯德!" },
        { word: "Weekday", phonetic: "/ˈwiːkdeɪ/", homophone: "威克戴", meaning: "工作日", sentence: "I work on weekdays.", translation: "我工作日上班。", homophoneSentence: "爱沃克昂威克戴兹." }
    ],
    food: [
        { word: "Appetizer", phonetic: "/ˈæpɪtaɪzə/", homophone: "阿佩泰泽", meaning: "开胃菜", sentence: "We ordered an appetizer.", translation: "我们点了一份开胃菜。", homophoneSentence: "维奥尔德安阿佩泰泽." },
        { word: "Main course", phonetic: "/meɪn kɔːs/", homophone: "梅因科斯", meaning: "主菜", sentence: "What's the main course?", translation: "主菜是什么？", homophoneSentence: "沃茨泽梅因科斯?" },
        { word: "Side dish", phonetic: "/saɪd dɪʃ/", homophone: "赛德迪什", meaning: "配菜", sentence: "I'll have a side dish.", translation: "我要一份配菜。", homophoneSentence: "爱尔哈夫阿赛德迪什." },
        { word: "Soup", phonetic: "/suːp/", homophone: "苏普", meaning: "汤", sentence: "Would you like some soup?", translation: "你想要一些汤吗？", homophoneSentence: "武德油莱克萨姆苏普?" },
        { word: "Salad", phonetic: "/ˈsæləd/", homophone: "萨拉德", meaning: "沙拉", sentence: "I'll have a Caesar salad.", translation: "我要一份凯撒沙拉。", homophoneSentence: "爱尔哈夫阿西泽萨拉德." },
        { word: "Sandwich", phonetic: "/ˈsænwɪtʃ/", homophone: "桑威奇", meaning: "三明治", sentence: "I had a sandwich for lunch.", translation: "我午餐吃了一个三明治。", homophoneSentence: "爱哈德阿桑威奇福兰奇." },
        { word: "Pasta", phonetic: "/ˈpæstə/", homophone: "帕斯塔", meaning: "意大利面", sentence: "I love Italian pasta.", translation: "我喜欢意大利面。", homophoneSentence: "爱拉夫伊塔利恩帕斯塔." },
        { word: "Rice", phonetic: "/raɪs/", homophone: "莱斯", meaning: "米饭", sentence: "Would you like rice?", translation: "你想要米饭吗？", homophoneSentence: "武德油莱克莱斯?" },
        { word: "Noodles", phonetic: "/ˈnuːdlz/", homophone: "努多尔兹", meaning: "面条", sentence: "Chinese noodles are delicious.", translation: "中国面条很好吃。", homophoneSentence: "柴尼兹努多尔兹阿迪利谢斯." },
        { word: "Dumplings", phonetic: "/ˈdʌmplɪŋz/", homophone: "达姆普林兹", meaning: "饺子", sentence: "I love Chinese dumplings.", translation: "我喜欢中国饺子。", homophoneSentence: "爱拉夫柴尼兹达姆普林兹." }
    ],
    conversations: [
        { word: "What do you think", phonetic: "/wɒt duː juː θɪŋk/", homophone: "沃特度油辛克", meaning: "你怎么看", sentence: "What do you think about this?", translation: "你觉得这个怎么样？", homophoneSentence: "沃特度油辛克阿鲍特泽斯?" },
        { word: "In my opinion", phonetic: "/ɪn maɪ əˈpɪnjən/", homophone: "因麦阿平尼恩", meaning: "在我看来", sentence: "In my opinion, it's great.", translation: "在我看来，这很棒。", homophoneSentence: "因麦阿平尼恩,伊茨格雷特." },
        { word: "I agree with you", phonetic: "/aɪ əˈɡriː wɪð juː/", homophone: "爱阿格里威兹油", meaning: "我同意你的看法", sentence: "I agree with you on this.", translation: "在这点上我同意你的看法。", homophoneSentence: "爱阿格里威兹油昂泽斯." },
        { word: "I disagree", phonetic: "/aɪ ˌdɪsəˈɡriː/", homophone: "爱迪萨格里", meaning: "我不同意", sentence: "I have to disagree.", translation: "我不得不表示不同意。", homophoneSentence: "爱哈夫图迪萨格里." },
        { word: "That makes sense", phonetic: "/ðæt meɪks sens/", homophone: "泽特梅克斯森斯", meaning: "有道理", sentence: "That makes sense to me.", translation: "对我来说有道理。", homophoneSentence: "泽特梅克斯森斯图米." },
        { word: "I'm not sure", phonetic: "/aɪm nɒt ʃʊə/", homophone: "爱姆诺特舒尔", meaning: "我不确定", sentence: "I'm not sure about that.", translation: "我不确定那个。", homophoneSentence: "爱姆诺特舒尔阿鲍特泽特." },
        { word: "Let me think", phonetic: "/let miː θɪŋk/", homophone: "莱特米辛克", meaning: "让我想想", sentence: "Let me think about it.", translation: "让我想想。", homophoneSentence: "莱特米辛克阿鲍特伊特." },
        { word: "Good point", phonetic: "/ɡʊd pɔɪnt/", homophone: "古德波因特", meaning: "说得好", sentence: "That's a good point!", translation: "说得好！", homophoneSentence: "泽茨阿古德波因特!" },
        { word: "I see what you mean", phonetic: "/aɪ siː wɒt juː miːn/", homophone: "爱西沃特油米恩", meaning: "我明白你的意思", sentence: "I see what you mean now.", translation: "我现在明白你的意思了。", homophoneSentence: "爱西沃特油米恩诺." },
        { word: "That's interesting", phonetic: "/ðæts ˈɪntrəstɪŋ/", homophone: "泽茨因特雷斯特宁", meaning: "很有趣", sentence: "That's interesting to know.", translation: "知道这个很有趣。", homophoneSentence: "泽茨因特雷斯特宁图诺." }
    ],
    sentences: [
        { word: "A penny for your thoughts", phonetic: "/ə ˈpeni fɔː jɔː θɔːts/", homophone: "阿佩尼福哟索茨", meaning: "你在想什么", sentence: "A penny for your thoughts?", translation: "你在想什么？", homophoneSentence: "阿佩尼福哟索茨?" },
        { word: "Bite the bullet", phonetic: "/baɪt ðə ˈbʊlɪt/", homophone: "拜特泽布利特", meaning: "咬紧牙关", sentence: "Sometimes you have to bite the bullet.", translation: "有时候你必须咬紧牙关。", homophoneSentence: "萨姆泰姆兹油哈夫图拜特泽布利特." },
        { word: "Break the ice", phonetic: "/breɪk ðə aɪs/", homophone: "布雷克泽艾斯", meaning: "打破僵局", sentence: "He told a joke to break the ice.", translation: "他讲了个笑话来打破僵局。", homophoneSentence: "希托尔德阿乔克图布雷克泽艾斯." },
        { word: "Call it a day", phonetic: "/kɔːl ɪt ə deɪ/", homophone: "科尔伊特阿戴", meaning: "收工", sentence: "Let's call it a day.", translation: "我们收工吧。", homophoneSentence: "莱茨科尔伊特阿戴." },
        { word: "Cut to the chase", phonetic: "/kʌt tuː ðə tʃeɪs/", homophone: "卡特图泽切斯", meaning: "直奔主题", sentence: "Let me cut to the chase.", translation: "让我直奔主题。", homophoneSentence: "莱特米卡特图泽切斯." },
        { word: "Hit the nail on the head", phonetic: "/hɪt ðə neɪl ɒn ðə hed/", homophone: "希特泽内尔昂泽黑德", meaning: "一针见血", sentence: "You hit the nail on the head!", translation: "你说得一针见血！", homophoneSentence: "油希特泽内尔昂泽黑德!" },
        { word: "Kill two birds with one stone", phonetic: "/kɪl tuː bɜːdz wɪð wʌn stəʊn/", homophone: "基尔图伯德兹威兹万斯通", meaning: "一石二鸟", sentence: "I killed two birds with one stone.", translation: "我一石二鸟。", homophoneSentence: "爱基尔德图伯德兹威兹万斯通." },
        { word: "Let the cat out of the bag", phonetic: "/let ðə kæt aʊt əv ðə bæɡ/", homophone: "莱特泽凯特奥特阿夫泽拜格", meaning: "泄露秘密", sentence: "Don't let the cat out of the bag!", translation: "别泄露秘密！", homophoneSentence: "东特莱特泽凯特奥特阿夫泽拜格!" },
        { word: "Piece of cake", phonetic: "/piːs əv keɪk/", homophone: "皮斯阿夫凯克", meaning: "小菜一碟", sentence: "That was a piece of cake!", translation: "那简直是小菜一碟！", homophoneSentence: "泽特沃兹阿皮斯阿夫凯克!" },
        { word: "Under the weather", phonetic: "/ˈʌndə ðə ˈweðə/", homophone: "安德泽韦泽", meaning: "身体不适", sentence: "I'm feeling under the weather.", translation: "我感觉身体不适。", homophoneSentence: "爱姆菲林安德泽韦泽." }
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
