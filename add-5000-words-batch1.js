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
        { word: "Hey there", phonetic: "/heɪ ðeə/", homophone: "嘿泽尔", meaning: "嘿，你好", sentence: "Hey there, how's it going?", translation: "嘿，最近怎么样？", homophoneSentence: "嘿泽尔，好兹伊特勾英?" },
        { word: "What's happening", phonetic: "/wɒts ˈhæpənɪŋ/", homophone: "沃茨哈普宁", meaning: "发生什么事了", sentence: "What's happening today?", translation: "今天发生什么事了？", homophoneSentence: "沃茨哈普宁特戴?" },
        { word: "How's everything", phonetic: "/haʊz ˈevriθɪŋ/", homophone: "好兹艾弗里辛", meaning: "一切都好吗", sentence: "How's everything with you?", translation: "你一切都好吗？", homophoneSentence: "好兹艾弗里辛威兹油?" },
        { word: "Good to see you", phonetic: "/ɡʊd tuː siː juː/", homophone: "古德图西油", meaning: "很高兴见到你", sentence: "Good to see you again!", translation: "很高兴再次见到你！", homophoneSentence: "古德图西油阿根!" },
        { word: "Long time no see", phonetic: "/lɒŋ taɪm nəʊ siː/", homophone: "朗泰姆诺西", meaning: "好久不见", sentence: "Long time no see, friend!", translation: "朋友，好久不见！", homophoneSentence: "朗泰姆诺西,弗伦德!" },
        { word: "How have you been", phonetic: "/haʊ hæv juː biːn/", homophone: "好哈夫油宾", meaning: "你最近怎么样", sentence: "How have you been lately?", translation: "你最近怎么样？", homophoneSentence: "好哈夫油宾雷特利?" },
        { word: "What's new", phonetic: "/wɒts njuː/", homophone: "沃茨纽", meaning: "有什么新鲜事", sentence: "What's new with you?", translation: "你有什么新鲜事？", homophoneSentence: "沃茨纽威兹油?" },
        { word: "How's life", phonetic: "/haʊz laɪf/", homophone: "好兹莱夫", meaning: "生活怎么样", sentence: "How's life treating you?", translation: "生活对你怎么样？", homophoneSentence: "好兹莱夫特里廷油?" },
        { word: "Pleasure to meet you", phonetic: "/ˈpleʒə tuː miːt juː/", homophone: "普莱热图米特油", meaning: "很高兴认识你", sentence: "Pleasure to meet you, sir.", translation: "先生，很高兴认识您。", homophoneSentence: "普莱热图米特油,瑟." },
        { word: "How do you do", phonetic: "/haʊ duː juː duː/", homophone: "好度油度", meaning: "您好", sentence: "How do you do, madam?", translation: "女士，您好？", homophoneSentence: "好度油度,麦达姆?" }
    ],
    emotions: [
        { word: "Overjoyed", phonetic: "/ˌəʊvəˈdʒɔɪd/", homophone: "欧沃乔伊德", meaning: "欣喜若狂", sentence: "I'm overjoyed to hear the news!", translation: "听到这个消息我欣喜若狂！", homophoneSentence: "爱姆欧沃乔伊德图希尔泽纽兹!" },
        { word: "Ecstatic", phonetic: "/ekˈstætɪk/", homophone: "埃克斯塔蒂克", meaning: "狂喜的", sentence: "She was ecstatic about her promotion.", translation: "她对晋升感到狂喜。", homophoneSentence: "希沃兹埃克斯塔蒂克阿鲍特赫普罗莫申." },
        { word: "Thrilled", phonetic: "/θrɪld/", homophone: "斯里尔德", meaning: "激动的", sentence: "I'm thrilled to be here!", translation: "我很激动能来这里！", homophoneSentence: "爱姆斯里尔德图比希尔!" },
        { word: "Elated", phonetic: "/ɪˈleɪtɪd/", homophone: "伊雷蒂德", meaning: "兴高采烈", sentence: "He was elated by the success.", translation: "他对成功感到兴高采烈。", homophoneSentence: "希沃兹伊雷蒂德拜泽萨克塞斯." },
        { word: "Delighted", phonetic: "/dɪˈlaɪtɪd/", homophone: "迪莱蒂德", meaning: "高兴的", sentence: "I'm delighted to meet you!", translation: "很高兴认识你！", homophoneSentence: "爱姆迪莱蒂德图米特油!" },
        { word: "Content", phonetic: "/kənˈtent/", homophone: "康滕特", meaning: "满足的", sentence: "I feel content with my life.", translation: "我对我的生活感到满足。", homophoneSentence: "爱菲尔康滕特威兹麦莱夫." },
        { word: "Satisfied", phonetic: "/ˈsætɪsfaɪd/", homophone: "萨蒂斯法伊德", meaning: "满意的", sentence: "Are you satisfied with the result?", translation: "你对结果满意吗？", homophoneSentence: "啊油萨蒂斯法伊德威兹泽里索特?" },
        { word: "Grateful", phonetic: "/ˈɡreɪtfʊl/", homophone: "格雷特福尔", meaning: "感激的", sentence: "I'm grateful for your help.", translation: "我感激你的帮助。", homophoneSentence: "爱姆格雷特福尔福哟赫尔普." },
        { word: "Thankful", phonetic: "/ˈθæŋkfʊl/", homophone: "森克福尔", meaning: "感谢的", sentence: "I'm thankful for my family.", translation: "我感谢我的家人。", homophoneSentence: "爱姆森克福尔福麦法米利." },
        { word: "Blessed", phonetic: "/bles/", homophone: "布莱斯特", meaning: "幸福的", sentence: "I feel blessed to have you.", translation: "有你我感到很幸福。", homophoneSentence: "爱菲尔布莱斯特图哈夫油." }
    ],
    numbers: [
        { word: "One thousand", phonetic: "/wʌn ˈθaʊzənd/", homophone: "万绍赞德", meaning: "一千", sentence: "One thousand people attended.", translation: "一千人参加了。", homophoneSentence: "万绍赞德皮普尔阿滕迪德." },
        { word: "Two thousand", phonetic: "/tuː ˈθaʊzənd/", homophone: "图绍赞德", meaning: "两千", sentence: "Two thousand dollars.", translation: "两千美元。", homophoneSentence: "图绍赞德多拉兹." },
        { word: "Three thousand", phonetic: "/θriː ˈθaʊzənd/", homophone: "斯里绍赞德", meaning: "三千", sentence: "Three thousand years ago.", translation: "三千年前。", homophoneSentence: "斯里绍赞德耶尔兹阿戈." },
        { word: "Four thousand", phonetic: "/fɔː ˈθaʊzənd/", homophone: "福绍赞德", meaning: "四千", sentence: "Four thousand students.", translation: "四千名学生。", homophoneSentence: "福绍赞德斯图登茨." },
        { word: "Five thousand", phonetic: "/faɪv ˈθaʊzənd/", homophone: "法伊夫绍赞德", meaning: "五千", sentence: "Five thousand books.", translation: "五千本书。", homophoneSentence: "法伊夫绍赞德布克斯." },
        { word: "Six thousand", phonetic: "/sɪks ˈθaʊzənd/", homophone: "西克斯绍赞德", meaning: "六千", sentence: "Six thousand miles.", translation: "六千英里。", homophoneSentence: "西克斯绍赞德迈尔兹." },
        { word: "Seven thousand", phonetic: "/ˈsevn ˈθaʊzənd/", homophone: "塞文绍赞德", meaning: "七千", sentence: "Seven thousand fans.", translation: "七千名粉丝。", homophoneSentence: "塞文绍赞德凡兹." },
        { word: "Eight thousand", phonetic: "/eɪt ˈθaʊzənd/", homophone: "埃特绍赞德", meaning: "八千", sentence: "Eight thousand visitors.", translation: "八千名访客。", homophoneSentence: "埃特绍赞德维齐特兹." },
        { word: "Nine thousand", phonetic: "/naɪn ˈθaʊzənd/", homophone: "奈恩绍赞德", meaning: "九千", sentence: "Nine thousand tickets.", translation: "九千张票。", homophoneSentence: "奈恩绍赞德蒂凯茨." },
        { word: "Ten thousand", phonetic: "/ten ˈθaʊzənd/", homophone: "滕绍赞德", meaning: "一万", sentence: "Ten thousand people.", translation: "一万人。", homophoneSentence: "滕绍赞德皮普尔." }
    ],
    colors: [
        { word: "Scarlet", phonetic: "/ˈskɑːlət/", homophone: "斯卡利特", meaning: "猩红色", sentence: "She wore a scarlet dress.", translation: "她穿着一件猩红色的裙子。", homophoneSentence: "希沃尔阿斯卡利特德雷斯." },
        { word: "Crimson", phonetic: "/ˈkrɪmzn/", homophone: "克里姆兹恩", meaning: "深红色", sentence: "The crimson sunset was beautiful.", translation: "深红色的日落很美。", homophoneSentence: "泽克里姆兹恩桑塞特沃兹比尤特福尔." },
        { word: "Maroon", phonetic: "/məˈruːn/", homophone: "马鲁恩", meaning: "栗色", sentence: "He wore a maroon tie.", translation: "他戴着栗色领带。", homophoneSentence: "希沃尔阿马鲁恩泰." },
        { word: "Burgundy", phonetic: "/ˈbɜːɡəndi/", homophone: "伯甘迪", meaning: "勃艮第红", sentence: "The burgundy wine is excellent.", translation: "勃艮第红酒很棒。", homophoneSentence: "泽伯甘迪瓦恩伊兹埃克塞伦特." },
        { word: "Coral", phonetic: "/ˈkɒrəl/", homophone: "科拉尔", meaning: "珊瑚色", sentence: "The coral reef is colorful.", translation: "珊瑚礁色彩斑斓。", homophoneSentence: "泽科拉尔里夫伊兹卡勒福尔." },
        { word: "Salmon", phonetic: "/ˈsæmən/", homophone: "萨蒙", meaning: "鲑鱼色", sentence: "She painted the walls salmon.", translation: "她把墙漆成了鲑鱼色。", homophoneSentence: "希佩因蒂德泽沃尔兹萨蒙." },
        { word: "Peach", phonetic: "/piːtʃ/", homophone: "皮奇", meaning: "桃色", sentence: "The peach color is soft.", translation: "桃色很柔和。", homophoneSentence: "泽皮奇卡勒伊兹索夫特." },
        { word: "Apricot", phonetic: "/ˈeɪprɪkɒt/", homophone: "埃普里科特", meaning: "杏色", sentence: "She wore an apricot blouse.", translation: "她穿着杏色衬衫。", homophoneSentence: "希沃尔安埃普里科特布劳兹." },
        { word: "Tangerine", phonetic: "/ˌtændʒəˈriːn/", homophone: "坦哲林", meaning: "橘子色", sentence: "The tangerine sky at sunset.", translation: "日落时橘子色的天空。", homophoneSentence: "泽坦哲林斯凯阿特桑塞特." },
        { word: "Amber", phonetic: "/ˈæmbə/", homophone: "安伯", meaning: "琥珀色", sentence: "The amber gemstone is rare.", translation: "琥珀宝石很稀有。", homophoneSentence: "泽安伯杰姆斯通伊兹雷尔." }
    ],
    family: [
        { word: "Great-grandfather", phonetic: "/ˌɡreɪt ˈɡrænfɑːðə/", homophone: "格雷特格兰德法泽", meaning: "曾祖父", sentence: "My great-grandfather was a farmer.", translation: "我的曾祖父是个农民。", homophoneSentence: "麦格雷特格兰德法泽沃兹阿法默." },
        { word: "Great-grandmother", phonetic: "/ˌɡreɪt ˈɡrænmʌðə/", homophone: "格雷特格兰德马泽", meaning: "曾祖母", sentence: "My great-grandmother lived to 100.", translation: "我的曾祖母活到了100岁。", homophoneSentence: "麦格雷特格兰德马泽利夫德图万亨德里德." },
        { word: "Great-grandparents", phonetic: "/ˌɡreɪt ˈɡrænpeərənts/", homophone: "格雷特格兰德佩伦茨", meaning: "曾祖父母", sentence: "My great-grandparents emigrated.", translation: "我的曾祖父母移民了。", homophoneSentence: "麦格雷特格兰德佩伦茨埃米格雷蒂德." },
        { word: "Great-grandson", phonetic: "/ˌɡreɪt ˈɡrænsʌn/", homophone: "格雷特格兰德桑", meaning: "曾孙", sentence: "He is my great-grandson.", translation: "他是我的曾孙。", homophoneSentence: "希伊兹麦格雷特格兰德桑." },
        { word: "Great-granddaughter", phonetic: "/ˌɡreɪt ˈɡrændɔːtə/", homophone: "格雷特格兰德道特", meaning: "曾孙女", sentence: "She is my great-granddaughter.", translation: "她是我的曾孙女。", homophoneSentence: "希伊兹麦格雷特格兰德道特." },
        { word: "Great-grandchildren", phonetic: "/ˌɡreɪt ˈɡræntʃɪldrən/", homophone: "格雷特格兰德奇尔德伦", meaning: "曾孙辈", sentence: "I have five great-grandchildren.", translation: "我有五个曾孙辈。", homophoneSentence: "爱哈夫法伊夫格雷特格兰德奇尔德伦." },
        { word: "Stepfather", phonetic: "/ˈstepfɑːðə/", homophone: "斯特普法泽", meaning: "继父", sentence: "My stepfather is very kind.", translation: "我的继父很和蔼。", homophoneSentence: "麦斯特普法泽伊兹韦里凯恩德." },
        { word: "Stepmother", phonetic: "/ˈstepmʌðə/", homophone: "斯特普马泽", meaning: "继母", sentence: "My stepmother cooks well.", translation: "我的继母做饭很好吃。", homophoneSentence: "麦斯特普马泽库克斯韦尔." },
        { word: "Stepbrother", phonetic: "/ˈstepbrʌðə/", homophone: "斯特普布拉泽", meaning: "继兄弟", sentence: "My stepbrother is older than me.", translation: "我的继兄弟比我大。", homophoneSentence: "麦斯特普布拉泽伊兹欧尔德泽米." },
        { word: "Stepsister", phonetic: "/ˈstepsɪstə/", homophone: "斯特普西斯特", meaning: "继姐妹", sentence: "My stepsister lives in London.", translation: "我的继姐妹住在伦敦。", homophoneSentence: "麦斯特普西斯特利夫兹因伦敦." }
    ],
    time: [
        { word: "Millisecond", phonetic: "/ˈmɪlisekənd/", homophone: "米利塞肯德", meaning: "毫秒", sentence: "It happened in a millisecond.", translation: "这在一毫秒内发生了。", homophoneSentence: "伊特哈潘德因阿米利塞肯德." },
        { word: "Microsecond", phonetic: "/ˈmaɪkrəʊsekənd/", homophone: "迈克罗塞肯德", meaning: "微秒", sentence: "Computers process in microseconds.", translation: "计算机以微秒处理。", homophoneSentence: "康皮尤特兹普罗塞斯因迈克罗塞肯兹." },
        { word: "Nanosecond", phonetic: "/ˈnænəʊsekənd/", homophone: "纳诺塞肯德", meaning: "纳秒", sentence: "Light travels fast in nanoseconds.", translation: "光以纳秒速度快速传播。", homophoneSentence: "莱特特拉维尔斯法斯特因纳诺塞肯兹." },
        { word: "Picosecond", phonetic: "/ˈpiːkəʊsekənd/", homophone: "皮科塞肯德", meaning: "皮秒", sentence: "Scientists measure in picoseconds.", translation: "科学家以皮秒测量。", homophoneSentence: "赛恩蒂斯特兹梅热因皮科塞肯兹." },
        { word: "Decade", phonetic: "/ˈdekeɪd/", homophone: "德凯德", meaning: "十年", sentence: "A decade has passed.", translation: "十年过去了。", homophoneSentence: "阿德凯德哈兹帕斯特." },
        { word: "Century", phonetic: "/ˈsentʃəri/", homophone: "森丘里", meaning: "世纪", sentence: "We live in the 21st century.", translation: "我们生活在21世纪。", homophoneSentence: "维利夫因泽滕特伊斯特森丘里." },
        { word: "Millennium", phonetic: "/mɪˈleniəm/", homophone: "米莱尼厄姆", meaning: "千年", sentence: "The new millennium began in 2000.", translation: "新千年始于2000年。", homophoneSentence: "泽纽米莱尼厄姆比根因图绍赞德." },
        { word: "Era", phonetic: "/ˈɪərə/", homophone: "伊拉", meaning: "时代", sentence: "We are in a new era.", translation: "我们处于一个新时代。", homophoneSentence: "维阿因阿纽伊拉." },
        { word: "Epoch", phonetic: "/ˈiːpɒk/", homophone: "伊波克", meaning: "纪元", sentence: "This marks a new epoch.", translation: "这标志着一个新纪元。", homophoneSentence: "泽斯马克斯阿纽伊波克." },
        { word: "Age", phonetic: "/eɪdʒ/", homophone: "埃奇", meaning: "年龄/时代", sentence: "What is your age?", translation: "你多大年纪？", homophoneSentence: "沃特伊兹哟埃奇?" }
    ],
    food: [
        { word: "Appetizer", phonetic: "/ˈæpɪtaɪzə/", homophone: "阿佩泰泽", meaning: "开胃菜", sentence: "We ordered an appetizer.", translation: "我们点了一份开胃菜。", homophoneSentence: "维奥尔德安阿佩泰泽." },
        { word: "Entree", phonetic: "/ˈɒntreɪ/", homophone: "昂特雷", meaning: "主菜", sentence: "What's your entree?", translation: "你的主菜是什么？", homophoneSentence: "沃茨哟昂特雷?" },
        { word: "Dessert", phonetic: "/dɪˈzɜːt/", homophone: "迪泽特", meaning: "甜点", sentence: "I'd like some dessert.", translation: "我想要一些甜点。", homophoneSentence: "爱德拉克斯姆迪泽特." },
        { word: "Beverage", phonetic: "/ˈbevərɪdʒ/", homophone: "贝弗里奇", meaning: "饮料", sentence: "What beverage would you like?", translation: "你想要什么饮料？", homophoneSentence: "沃特贝弗里奇武德油莱克?" },
        { word: "Cuisine", phonetic: "/kwɪˈziːn/", homophone: "奎津", meaning: "烹饪/菜肴", sentence: "French cuisine is famous.", translation: "法国菜很有名。", homophoneSentence: "弗伦奇奎津伊兹费默斯." },
        { word: "Delicacy", phonetic: "/ˈdelɪkəsi/", homophone: "德利卡西", meaning: "美味佳肴", sentence: "This is a local delicacy.", translation: "这是当地的美味佳肴。", homophoneSentence: "泽斯伊兹阿洛卡尔德利卡西." },
        { word: "Ingredient", phonetic: "/ɪnˈɡriːdiənt/", homophone: "因格里迪恩特", meaning: "配料", sentence: "What ingredients do you need?", translation: "你需要什么配料？", homophoneSentence: "沃特因格里迪恩茨杜油尼德?" },
        { word: "Recipe", phonetic: "/ˈresɪpi/", homophone: "雷斯皮", meaning: "食谱", sentence: "Do you have the recipe?", translation: "你有食谱吗？", homophoneSentence: "杜油哈夫泽雷斯皮?" },
        { word: "Seasoning", phonetic: "/ˈsiːzənɪŋ/", homophone: "西兹宁", meaning: "调味料", sentence: "Add some seasoning.", translation: "加一些调味料。", homophoneSentence: "埃德萨姆西兹宁." },
        { word: "Garnish", phonetic: "/ˈɡɑːnɪʃ/", homophone: "加尼什", meaning: "装饰菜", sentence: "Garnish with parsley.", translation: "用欧芹装饰。", homophoneSentence: "加尼什威兹帕斯利." }
    ],
    conversations: [
        { word: "How do you spell that", phonetic: "/haʊ duː juː spel ðæt/", homophone: "好度油斯佩尔泽特", meaning: "那个怎么拼写", sentence: "How do you spell your name?", translation: "你的名字怎么拼写？", homophoneSentence: "好度油斯佩尔哟内姆?" },
        { word: "Could you repeat that", phonetic: "/kʊd juː rɪˈpiːt ðæt/", homophone: "库德油里皮特泽特", meaning: "你能重复一遍吗", sentence: "Could you repeat that, please?", translation: "请重复一遍好吗？", homophoneSentence: "库德油里皮特泽特,普利斯?" },
        { word: "I don't understand", phonetic: "/aɪ dəʊnt ˌʌndəˈstænd/", homophone: "爱东特安德斯坦德", meaning: "我不明白", sentence: "I don't understand what you mean.", translation: "我不明白你的意思。", homophoneSentence: "爱东特安德斯坦德沃特油米恩." },
        { word: "Could you speak slower", phonetic: "/kʊd juː spiːk ˈsləʊə/", homophone: "库德油斯皮克斯洛尔", meaning: "你能说慢一点吗", sentence: "Could you speak slower, please?", translation: "请说慢一点好吗？", homophoneSentence: "库德油斯皮克斯洛尔,普利斯?" },
        { word: "What does that mean", phonetic: "/wɒt dʌz ðæt miːn/", homophone: "沃特达兹泽特米恩", meaning: "那是什么意思", sentence: "What does that word mean?", translation: "那个词是什么意思？", homophoneSentence: "沃特达兹泽特沃德米恩?" },
        { word: "How do you say this", phonetic: "/haʊ duː juː seɪ ðɪs/", homophone: "好度油塞泽斯", meaning: "这个怎么说", sentence: "How do you say this in English?", translation: "这个用英语怎么说？", homophoneSentence: "好度油塞泽斯因英格利什?" },
        { word: "I'm learning English", phonetic: "/aɪm ˈlɜːnɪŋ ˈɪŋɡlɪʃ/", homophone: "爱姆勒宁英格利什", meaning: "我在学英语", sentence: "I'm learning English now.", translation: "我现在在学英语。", homophoneSentence: "爱姆勒宁英格利什诺." },
        { word: "Can you help me", phonetic: "/kæn juː help miː/", homophone: "坎油赫尔普米", meaning: "你能帮我吗", sentence: "Can you help me with this?", translation: "你能帮我做这个吗？", homophoneSentence: "坎油赫尔普米威兹泽斯?" },
        { word: "I need your help", phonetic: "/aɪ niːd jɔː help/", homophone: "爱尼德哟赫尔普", meaning: "我需要你的帮助", sentence: "I need your help with this project.", translation: "这个项目我需要你的帮助。", homophoneSentence: "爱尼德哟赫尔普威兹泽斯普罗杰克特." },
        { word: "Thank you for your help", phonetic: "/θæŋk juː fɔː jɔː help/", homophone: "森克油福哟赫尔普", meaning: "谢谢你的帮助", sentence: "Thank you for your help today.", translation: "谢谢你今天的帮助。", homophoneSentence: "森克油福哟赫尔普特戴." }
    ],
    sentences: [
        { word: "The early bird catches the worm", phonetic: "/ði ˈɜːli bɜːd ˈkætʃɪz ðə wɜːm/", homophone: "泽厄利伯德凯奇兹泽沃姆", meaning: "早起的鸟儿有虫吃", sentence: "Remember, the early bird catches the worm.", translation: "记住，早起的鸟儿有虫吃。", homophoneSentence: "里梅姆伯,泽厄利伯德凯奇兹泽沃姆." },
        { word: "Actions speak louder than words", phonetic: "/ˈækʃənz spiːk ˈlaʊdə ðæn wɜːdz/", homophone: "阿克申兹斯皮克劳德泽沃德兹", meaning: "行动胜于言语", sentence: "Actions speak louder than words.", translation: "行动胜于言语。", homophoneSentence: "阿克申兹斯皮克劳德泽沃德兹." },
        { word: "Practice makes perfect", phonetic: "/ˈpræktɪs meɪks ˈpɜːfɪkt/", homophone: "普拉克蒂斯梅克斯珀菲克特", meaning: "熟能生巧", sentence: "Keep practicing, practice makes perfect.", translation: "继续练习，熟能生巧。", homophoneSentence: "基普普拉克蒂辛,普拉克蒂斯梅克斯珀菲克特." },
        { word: "Better late than never", phonetic: "/ˈbetə leɪt ðæn ˈnevə/", homophone: "贝特雷特泽内弗", meaning: "迟做总比不做好", sentence: "Better late than never, right?", translation: "迟做总比不做好，对吧？", homophoneSentence: "贝特雷特泽内弗,赖特?" },
        { word: "Every cloud has a silver lining", phonetic: "/ˈevri klaʊd hæz ə ˈsɪlvə ˈlaɪnɪŋ/", homophone: "艾弗里克劳德哈兹阿西尔弗莱宁", meaning: "黑暗中总有一线光明", sentence: "Every cloud has a silver lining.", translation: "黑暗中总有一线光明。", homophoneSentence: "艾弗里克劳德哈兹阿西尔弗莱宁." },
        { word: "When in Rome, do as the Romans do", phonetic: "/wen ɪn rəʊm duː æz ðə ˈrəʊmənz duː/", homophone: "温因罗姆杜阿兹泽罗曼兹杜", meaning: "入乡随俗", sentence: "When in Rome, do as the Romans do.", translation: "入乡随俗。", homophoneSentence: "温因罗姆杜阿兹泽罗曼兹杜." },
        { word: "The pen is mightier than the sword", phonetic: "/ðə pen ɪz ˈmaɪtiə ðæn ðə sɔːd/", homophone: "泽彭伊兹迈蒂尔泽索德", meaning: "笔杆子比刀剑更有力", sentence: "The pen is mightier than the sword.", translation: "笔杆子比刀剑更有力。", homophoneSentence: "泽彭伊兹迈蒂尔泽索德." },
        { word: "A picture is worth a thousand words", phonetic: "/ə ˈpɪktʃə ɪz wɜːθ ə ˈθaʊzənd wɜːdz/", homophone: "阿皮克彻伊兹沃斯阿绍赞德沃德兹", meaning: "一图胜千言", sentence: "A picture is worth a thousand words.", translation: "一图胜千言。", homophoneSentence: "阿皮克彻伊兹沃斯阿绍赞德沃德兹." },
        { word: "Two heads are better than one", phonetic: "/tuː hedz ɑː ˈbetə ðæn wʌn/", homophone: "图黑兹阿贝特泽万", meaning: "三个臭皮匠顶个诸葛亮", sentence: "Two heads are better than one.", translation: "三个臭皮匠顶个诸葛亮。", homophoneSentence: "图黑兹阿贝特泽万." },
        { word: "Time heals all wounds", phonetic: "/taɪm hiːlz ɔːl wuːndz/", homophone: "泰姆希尔兹奥尔武恩兹", meaning: "时间能治愈一切创伤", sentence: "Don't worry, time heals all wounds.", translation: "别担心，时间能治愈一切创伤。", homophoneSentence: "东特沃里,泰姆希尔兹奥尔武恩兹." }
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
