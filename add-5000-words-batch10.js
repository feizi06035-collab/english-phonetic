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
        { word: "Feel better soon", phonetic: "/fiːl ˈbetə suːn/", homophone: "菲尔贝特苏恩", meaning: "早日康复", sentence: "Feel better soon!", translation: "早日康复！", homophoneSentence: "菲尔贝特苏恩!" },
        { word: "Get well soon", phonetic: "/ɡet wel suːn/", homophone: "盖特韦尔苏恩", meaning: "早日康复", sentence: "Get well soon!", translation: "早日康复！", homophoneSentence: "盖特韦尔苏恩!" },
        { word: "Hope you feel better", phonetic: "/həʊp juː fiːl ˈbetə/", homophone: "霍普油菲尔贝特", meaning: "希望你早日康复", sentence: "Hope you feel better!", translation: "希望你早日康复！", homophoneSentence: "霍普油菲尔贝特!" },
        { word: "Bless you", phonetic: "/bles juː/", homophone: "布莱斯油", meaning: "保佑你", sentence: "Bless you!", translation: "保佑你！", homophoneSentence: "布莱斯油!" },
        { word: "Gesundheit", phonetic: "/ɡəˈzʊnthaɪt/", homophone: "格桑特海特", meaning: "祝你健康", sentence: "Gesundheit!", translation: "祝你健康！", homophoneSentence: "格桑特海特!" },
        { word: "Congratulations", phonetic: "/kənˌɡrætʃuˈleɪʃənz/", homophone: "康格雷图莱申兹", meaning: "恭喜", sentence: "Congratulations on your success!", translation: "恭喜你成功！", homophoneSentence: "康格雷图莱申兹昂哟萨克塞斯!" },
        { word: "Well done", phonetic: "/wel dʌn/", homophone: "韦尔丹", meaning: "做得好", sentence: "Well done!", translation: "做得好！", homophoneSentence: "韦尔丹!" },
        { word: "Good job", phonetic: "/ɡʊd dʒɒb/", homophone: "古德乔布", meaning: "干得好", sentence: "Good job!", translation: "干得好！", homophoneSentence: "古德乔布!" },
        { word: "Nice work", phonetic: "/naɪs wɜːk/", homophone: "奈斯沃克", meaning: "做得好", sentence: "Nice work!", translation: "做得好！", homophoneSentence: "奈斯沃克!" },
        { word: "Keep up the good work", phonetic: "/kiːp ʌp ðə ɡʊd wɜːk/", homophone: "基普阿普泽古德沃克", meaning: "继续保持", sentence: "Keep up the good work!", translation: "继续保持！", homophoneSentence: "基普阿普泽古德沃克!" }
    ],
    emotions: [
        { word: "Sad", phonetic: "/sæd/", homophone: "萨德", meaning: "悲伤的", sentence: "I feel sad today.", translation: "我今天感到悲伤。", homophoneSentence: "爱菲尔萨德特戴." },
        { word: "Unhappy", phonetic: "/ʌnˈhæpi/", homophone: "安哈皮", meaning: "不快乐的", sentence: "She looks unhappy.", translation: "她看起来不快乐。", homophoneSentence: "希卢克斯安哈皮." },
        { word: "Miserable", phonetic: "/ˈmɪzrəbl/", homophone: "米泽拉布尔", meaning: "悲惨的", sentence: "I feel miserable.", translation: "我感到悲惨。", homophoneSentence: "爱菲尔米泽拉布尔." },
        { word: "Depressed", phonetic: "/dɪˈprest/", homophone: "迪普雷斯特", meaning: "沮丧的", sentence: "He's feeling depressed.", translation: "他感到沮丧。", homophoneSentence: "希兹菲林迪普雷斯特." },
        { word: "Heartbroken", phonetic: "/ˈhɑːtbrəʊkən/", homophone: "哈特布罗肯", meaning: "心碎的", sentence: "She was heartbroken.", translation: "她心碎了。", homophoneSentence: "希沃兹哈特布罗肯." },
        { word: "Devastated", phonetic: "/ˈdevəsteɪtɪd/", homophone: "德瓦斯特蒂德", meaning: "崩溃的", sentence: "I was devastated by the news.", translation: "这个消息让我崩溃。", homophoneSentence: "爱沃兹德瓦斯特蒂德拜泽纽兹." },
        { word: "Grief", phonetic: "/ɡriːf/", homophone: "格里夫", meaning: "悲伤", sentence: "She's in grief.", translation: "她很悲伤。", homophoneSentence: "希兹因格里夫." },
        { word: "Sorrow", phonetic: "/ˈsɒrəʊ/", homophone: "索罗", meaning: "悲伤", sentence: "He felt deep sorrow.", translation: "他感到深深的悲伤。", homophoneSentence: "希菲尔特迪普索罗." },
        { word: "Despair", phonetic: "/dɪˈspeə/", homophone: "迪斯佩尔", meaning: "绝望", sentence: "He was in despair.", translation: "他绝望了。", homophoneSentence: "希沃兹因迪斯佩尔." },
        { word: "Hopeless", phonetic: "/ˈhəʊpləs/", homophone: "霍普勒斯", meaning: "绝望的", sentence: "The situation seems hopeless.", translation: "情况看起来很绝望。", homophoneSentence: "泽西图埃申西姆兹霍普勒斯." }
    ],
    numbers: [
        { word: "Ratio", phonetic: "/ˈreɪʃiəʊ/", homophone: "雷希奥", meaning: "比率", sentence: "The ratio is 2:1.", translation: "比率是2比1。", homophoneSentence: "泽雷希奥伊兹图图万." },
        { word: "Percentage", phonetic: "/pəˈsentɪdʒ/", homophone: "珀森蒂奇", meaning: "百分比", sentence: "What's the percentage?", translation: "百分比是多少？", homophoneSentence: "沃茨泽珀森蒂奇?" },
        { word: "Fraction", phonetic: "/ˈfrækʃn/", homophone: "弗拉克申", meaning: "分数", sentence: "A fraction of the cost.", translation: "成本的一小部分。", homophoneSentence: "阿弗拉克申阿夫泽科斯特." },
        { word: "Decimal", phonetic: "/ˈdesɪml/", homophone: "德西马尔", meaning: "小数", sentence: "Round to two decimal places.", translation: "保留两位小数。", homophoneSentence: "劳恩德图图德西马尔普莱斯." },
        { word: "Proportion", phonetic: "/prəˈpɔːʃn/", homophone: "普罗波申", meaning: "比例", sentence: "A large proportion.", translation: "很大比例。", homophoneSentence: "阿拉奇普罗波申." },
        { word: "Rate", phonetic: "/reɪt/", homophone: "雷特", meaning: "率", sentence: "The growth rate.", translation: "增长率。", homophoneSentence: "泽格罗思雷特." },
        { word: "Scale", phonetic: "/skeɪl/", homophone: "斯凯尔", meaning: "规模", sentence: "On a scale of 1 to 10.", translation: "在1到10的范围内。", homophoneSentence: "昂阿斯凯尔阿夫万图滕." },
        { word: "Degree", phonetic: "/dɪˈɡriː/", homophone: "迪格里", meaning: "程度", sentence: "To some degree.", translation: "在某种程度上。", homophoneSentence: "图萨姆迪格里." },
        { word: "Level", phonetic: "/ˈlevl/", homophone: "莱弗尔", meaning: "水平", sentence: "What's your level?", translation: "你的水平如何？", homophoneSentence: "沃茨哟莱弗尔?" },
        { word: "Amount", phonetic: "/əˈmaʊnt/", homophone: "阿蒙特", meaning: "数量", sentence: "A large amount.", translation: "大量。", homophoneSentence: "阿拉奇阿蒙特." }
    ],
    colors: [
        { word: "Midnight", phonetic: "/ˈmɪdnaɪt/", homophone: "米德奈特", meaning: "午夜蓝", sentence: "Midnight blue is dark.", translation: "午夜蓝很深。", homophoneSentence: "米德奈特布卢伊兹达克." },
        { word: "Space", phonetic: "/speɪs/", homophone: "斯佩斯", meaning: "太空色", sentence: "Space gray is modern.", translation: "太空灰很现代。", homophoneSentence: "斯佩斯格雷伊兹莫登." },
        { word: "Galaxy", phonetic: "/ˈɡæləksi/", homophone: "加拉克西", meaning: "银河色", sentence: "Galaxy blue is deep.", translation: "银河蓝很深邃。", homophoneSentence: "加拉克西布卢伊兹迪普." },
        { word: "Cosmic", phonetic: "/ˈkɒzmɪk/", homophone: "科兹米克", meaning: "宇宙色", sentence: "Cosmic purple is mysterious.", translation: "宇宙紫很神秘。", homophoneSentence: "科兹米克珀普尔伊兹米斯特里厄斯." },
        { word: "Aurora", phonetic: "/ɔːˈrɔːrə/", homophone: "奥罗拉", meaning: "极光色", sentence: "Aurora green is magical.", translation: "极光绿很神奇。", homophoneSentence: "奥罗拉格林伊兹马吉克尔." },
        { word: "Sunset", phonetic: "/ˈsʌnset/", homophone: "桑塞特", meaning: "日落色", sentence: "Sunset orange is warm.", translation: "日落橙很温暖。", homophoneSentence: "桑塞特奥伦奇伊兹沃姆." },
        { word: "Sunrise", phonetic: "/ˈsʌnraɪz/", homophone: "桑赖兹", meaning: "日出色", sentence: "Sunrise pink is soft.", translation: "日出粉很柔和。", homophoneSentence: "桑赖兹平克伊兹索夫特." },
        { word: "Ocean", phonetic: "/ˈəʊʃn/", homophone: "欧申", meaning: "海洋色", sentence: "Ocean blue is calming.", translation: "海洋蓝很平静。", homophoneSentence: "欧申布卢伊兹卡明." },
        { word: "Forest", phonetic: "/ˈfɒrɪst/", homophone: "福雷斯特", meaning: "森林色", sentence: "Forest green is natural.", translation: "森林绿很自然。", homophoneSentence: "福雷斯特格林伊兹纳彻拉尔." },
        { word: "Mountain", phonetic: "/ˈmaʊntɪn/", homophone: "蒙滕", meaning: "山色", sentence: "Mountain gray is solid.", translation: "山灰色很坚实。", homophoneSentence: "蒙滕格雷伊兹索利德." }
    ],
    family: [
        { word: "Family bond", phonetic: "/ˈfæmɪli bɒnd/", homophone: "法米利邦德", meaning: "家庭纽带", sentence: "Our family bond is strong.", translation: "我们的家庭纽带很牢固。", homophoneSentence: "奥尔法米利邦德伊兹斯特朗." },
        { word: "Family ties", phonetic: "/ˈfæmɪli taɪz/", homophone: "法米利泰兹", meaning: "家庭关系", sentence: "Family ties are important.", translation: "家庭关系很重要。", homophoneSentence: "法米利泰兹阿因波坦特." },
        { word: "Bloodline", phonetic: "/ˈblʌdlaɪn/", homophone: "布拉德莱恩", meaning: "血统", sentence: "The bloodline continues.", translation: "血统延续。", homophoneSentence: "泽布拉德莱恩康蒂纽兹." },
        { word: "Heritage", phonetic: "/ˈherɪtɪdʒ/", homophone: "赫里蒂奇", meaning: "遗产", sentence: "Our family heritage.", translation: "我们的家族遗产。", homophoneSentence: "奥尔法米利赫里蒂奇." },
        { word: "Legacy", phonetic: "/ˈleɡəsi/", homophone: "莱格西", meaning: "遗产", sentence: "A family legacy.", translation: "家族遗产。", homophoneSentence: "阿法米利莱格西." },
        { word: "Upbringing", phonetic: "/ˈʌpbrɪŋɪŋ/", homophone: "阿普布林宁", meaning: "教养", sentence: "Her upbringing was strict.", translation: "她的教养很严格。", homophoneSentence: "赫阿普布林宁沃兹斯特里克特." },
        { word: "Nurture", phonetic: "/ˈnɜːtʃə/", homophone: "纳彻", meaning: "养育", sentence: "Nurture your children.", translation: "养育你的孩子。", homophoneSentence: "纳彻哟奇尔德伦." },
        { word: "Upbringing", phonetic: "/ˈʌpbrɪŋɪŋ/", homophone: "阿普布林宁", meaning: "家庭教育", sentence: "Good upbringing matters.", translation: "良好的家庭教育很重要。", homophoneSentence: "古德阿普布林宁马特兹." },
        { word: "Generation gap", phonetic: "/ˌdʒenəˈreɪʃn ɡæp/", homophone: "杰纳雷申盖普", meaning: "代沟", sentence: "There's a generation gap.", translation: "有代沟。", homophoneSentence: "泽尔兹阿杰纳雷申盖普." },
        { word: "Family history", phonetic: "/ˈfæmɪli ˈhɪstri/", homophone: "法米利希斯特里", meaning: "家族史", sentence: "Our family history is rich.", translation: "我们的家族史很丰富。", homophoneSentence: "奥尔法米利希斯特里伊兹里奇." }
    ],
    time: [
        { word: "Firstly", phonetic: "/ˈfɜːstli/", homophone: "弗斯特利", meaning: "首先", sentence: "Firstly, let me explain.", translation: "首先，让我解释一下。", homophoneSentence: "弗斯特利,莱特米伊克斯普莱恩." },
        { word: "Primarily", phonetic: "/praɪˈmerəli/", homophone: "普莱梅里利", meaning: "主要地", sentence: "This is primarily about...", translation: "这主要是关于...", homophoneSentence: "泽斯伊兹普莱梅里利阿鲍特..." },
        { word: "Mainly", phonetic: "/ˈmeɪnli/", homophone: "梅因利", meaning: "主要地", sentence: "It's mainly about...", translation: "主要是关于...", homophoneSentence: "伊茨梅因利阿鲍特..." },
        { word: "Chiefly", phonetic: "/ˈtʃiːfli/", homophone: "奇弗利", meaning: "主要地", sentence: "Chiefly, we need to...", translation: "主要的是，我们需要...", homophoneSentence: "奇弗利,维尼德图..." },
        { word: "Principally", phonetic: "/ˈprɪnsəpli/", homophone: "普林西帕利", meaning: "主要地", sentence: "Principally, the issue is...", translation: "主要的问题是...", homophoneSentence: "普林西帕利,泽伊舒伊兹..." },
        { word: "Essentially", phonetic: "/ɪˈsenʃəli/", homophone: "伊森沙利", meaning: "本质上", sentence: "Essentially, it means...", translation: "本质上，它意味着...", homophoneSentence: "伊森沙利,伊特米恩兹..." },
        { word: "Basically", phonetic: "/ˈbeɪsɪkli/", homophone: "贝西克利", meaning: "基本上", sentence: "Basically, it's simple.", translation: "基本上，这很简单。", homophoneSentence: "贝西克利,伊茨辛普尔." },
        { word: "Fundamentally", phonetic: "/ˌfʌndəˈmentəli/", homophone: "凡达门特利", meaning: "根本上", sentence: "Fundamentally, we agree.", translation: "根本上，我们同意。", homophoneSentence: "凡达门特利,维阿格里." },
        { word: "Ultimately", phonetic: "/ˈʌltɪmətli/", homophone: "奥蒂米特利", meaning: "最终", sentence: "Ultimately, we succeeded.", translation: "最终，我们成功了。", homophoneSentence: "奥蒂米特利,维萨克西迪德." },
        { word: "Finally", phonetic: "/ˈfaɪnəli/", homophone: "法因纳利", meaning: "最后", sentence: "Finally, we're done!", translation: "最后，我们完成了！", homophoneSentence: "法因纳利,维尔丹!" }
    ],
    food: [
        { word: "Candy", phonetic: "/ˈkændi/", homophone: "坎迪", meaning: "糖果", sentence: "Kids love candy.", translation: "孩子们喜欢糖果。", homophoneSentence: "基德拉夫坎迪." },
        { word: "Chocolate", phonetic: "/ˈtʃɒklət/", homophone: "乔克利特", meaning: "巧克力", sentence: "I love chocolate!", translation: "我喜欢巧克力！", homophoneSentence: "爱拉夫乔克利特!" },
        { word: "Sweets", phonetic: "/swiːts/", homophone: "斯威茨", meaning: "甜食", sentence: "Too many sweets.", translation: "太多甜食。", homophoneSentence: "图梅尼斯威茨." },
        { word: "Lollipop", phonetic: "/ˈlɒlɪpɒp/", homophone: "洛利波普", meaning: "棒棒糖", sentence: "A sweet lollipop.", translation: "一个甜甜的棒棒糖。", homophoneSentence: "阿斯威特洛利波普." },
        { word: "Gummy bear", phonetic: "/ˈɡʌmi beə/", homophone: "古米贝尔", meaning: "软糖熊", sentence: "Gummy bears are chewy.", translation: "软糖熊很有嚼劲。", homophoneSentence: "古米贝尔兹阿丘伊." },
        { word: "Jelly bean", phonetic: "/ˈdʒeli biːn/", homophone: "杰利宾", meaning: "软糖豆", sentence: "Colorful jelly beans.", translation: "五颜六色的软糖豆。", homophoneSentence: "卡勒福杰利宾兹." },
        { word: "Marshmallow", phonetic: "/ˈmɑːʃmæləʊ/", homophone: "马什梅洛", meaning: "棉花糖", sentence: "Toasted marshmallow.", translation: "烤棉花糖。", homophoneSentence: "托斯蒂德马什梅洛." },
        { word: "Caramel", phonetic: "/ˈkærəmel/", homophone: "卡拉梅尔", meaning: "焦糖", sentence: "Caramel sauce.", translation: "焦糖酱。", homophoneSentence: "卡拉梅尔索斯." },
        { word: "Toffee", phonetic: "/ˈtɒfi/", homophone: "托菲", meaning: "太妃糖", sentence: "English toffee.", translation: "英式太妃糖。", homophoneSentence: "英格利什托菲." },
        { word: "Fudge", phonetic: "/fʌdʒ/", homophone: "法奇", meaning: "软糖", sentence: "Chocolate fudge.", translation: "巧克力软糖。", homophoneSentence: "乔克利特法奇." }
    ],
    conversations: [
        { word: "I'm sorry to hear that", phonetic: "/aɪm ˈsɒri tuː hɪə ðæt/", homophone: "爱姆索里图希尔泽特", meaning: "听到这个我很遗憾", sentence: "I'm sorry to hear that.", translation: "听到这个我很遗憾。", homophoneSentence: "爱姆索里图希尔泽特." },
        { word: "That's too bad", phonetic: "/ðæts tuː bæd/", homophone: "泽茨图拜德", meaning: "太糟糕了", sentence: "That's too bad!", translation: "太糟糕了！", homophoneSentence: "泽茨图拜德!" },
        { word: "What a shame", phonetic: "/wɒt ə ʃeɪm/", homophone: "沃特阿谢姆", meaning: "真可惜", sentence: "What a shame!", translation: "真可惜！", homophoneSentence: "沃特阿谢姆!" },
        { word: "That's unfortunate", phonetic: "/ðæts ʌnˈfɔːtʃənət/", homophone: "泽茨安福切纳特", meaning: "真不幸", sentence: "That's unfortunate.", translation: "真不幸。", homophoneSentence: "泽茨安福切纳特." },
        { word: "I feel for you", phonetic: "/aɪ fiːl fɔː juː/", homophone: "爱菲尔福油", meaning: "我同情你", sentence: "I really feel for you.", translation: "我真的很同情你。", homophoneSentence: "爱里利菲尔福油." },
        { word: "My heart goes out to you", phonetic: "/maɪ hɑːt ɡəʊz aʊt tuː juː/", homophone: "麦哈特戈兹奥特图油", meaning: "我为你感到难过", sentence: "My heart goes out to you.", translation: "我为你感到难过。", homophoneSentence: "麦哈特戈兹奥特图油." },
        { word: "I understand how you feel", phonetic: "/aɪ ˌʌndəˈstænd haʊ juː fiːl/", homophone: "爱安德斯坦德好油菲尔", meaning: "我理解你的感受", sentence: "I understand how you feel.", translation: "我理解你的感受。", homophoneSentence: "爱安德斯坦德好油菲尔." },
        { word: "It could happen to anyone", phonetic: "/ɪt kʊd ˈhæpən tuː ˈeniwʌn/", homophone: "伊特库德哈彭图艾尼万", meaning: "这种事可能发生在任何人身上", sentence: "It could happen to anyone.", translation: "这种事可能发生在任何人身上。", homophoneSentence: "伊特库德哈彭图艾尼万." },
        { word: "Don't worry about it", phonetic: "/dəʊnt ˈwʌri əˈbaʊt ɪt/", homophone: "东特沃里阿鲍特伊特", meaning: "别担心", sentence: "Don't worry about it!", translation: "别担心！", homophoneSentence: "东特沃里阿鲍特伊特!" },
        { word: "Everything will be fine", phonetic: "/ˈevriθɪŋ wɪl biː faɪn/", homophone: "艾弗里辛威尔比法因", meaning: "一切都会好的", sentence: "Everything will be fine.", translation: "一切都会好的。", homophoneSentence: "艾弗里辛威尔比法因." }
    ],
    sentences: [
        { word: "If it ain't broke, don't fix it", phonetic: "/ɪf ɪt eɪnt brəʊk dəʊnt fɪks ɪt/", homophone: "伊夫伊特埃特布罗克东特菲克斯伊特", meaning: "没坏就别修", sentence: "If it ain't broke, don't fix it.", translation: "没坏就别修。", homophoneSentence: "伊夫伊特埃特布罗克东特菲克斯伊特." },
        { word: "It's never too late to learn", phonetic: "/ɪts ˈnevə tuː leɪt tuː lɜːn/", homophone: "伊茨内弗图雷特图勒恩", meaning: "学习永远不晚", sentence: "It's never too late to learn.", translation: "学习永远不晚。", homophoneSentence: "伊茨内弗图雷特图勒恩." },
        { word: "Knowledge is power", phonetic: "/ˈnɒlɪdʒ ɪz ˈpaʊə/", homophone: "诺利奇伊兹帕沃", meaning: "知识就是力量", sentence: "Knowledge is power.", translation: "知识就是力量。", homophoneSentence: "诺利奇伊兹帕沃." },
        { word: "Laughter is the best medicine", phonetic: "/ˈlɑːftə ɪz ðə best ˈmedsən/", homophone: "拉夫特伊兹泽贝斯特梅德辛", meaning: "笑是最好的良药", sentence: "Laughter is the best medicine.", translation: "笑是最好的良药。", homophoneSentence: "拉夫特伊兹泽贝斯特梅德辛." },
        { word: "Life is what you make it", phonetic: "/laɪf ɪz wɒt juː meɪk ɪt/", homophone: "莱夫伊兹沃特油梅克伊特", meaning: "生活是你创造的", sentence: "Life is what you make it.", translation: "生活是你创造的。", homophoneSentence: "莱夫伊兹沃特油梅克伊特." },
        { word: "Look before you leap", phonetic: "/lʊk bɪˈfɔː juː liːp/", homophone: "卢克比福油利普", meaning: "三思而后行", sentence: "Look before you leap.", translation: "三思而后行。", homophoneSentence: "卢克比福油利普." },
        { word: "Money doesn't grow on trees", phonetic: "/ˈmʌni dʌznt ɡrəʊ ɒn triːz/", homophone: "马尼达兹特格罗昂特里兹", meaning: "钱不是大风刮来的", sentence: "Money doesn't grow on trees.", translation: "钱不是大风刮来的。", homophoneSentence: "马尼达兹特格罗昂特里兹." },
        { word: "Necessity is the mother of invention", phonetic: "/nəˈsesəti ɪz ðə ˈmʌðər əv ɪnˈvenʃn/", homophone: "内塞西蒂伊兹泽马泽阿夫因文申", meaning: "需要是发明之母", sentence: "Necessity is the mother of invention.", translation: "需要是发明之母。", homophoneSentence: "内塞西蒂伊兹泽马泽阿夫因文申." },
        { word: "No news is good news", phonetic: "/nəʊ njuːz ɪz ɡʊd njuːz/", homophone: "诺纽兹伊兹古德纽兹", meaning: "没有消息就是好消息", sentence: "No news is good news.", translation: "没有消息就是好消息。", homophoneSentence: "诺纽兹伊兹古德纽兹." },
        { word: "Old habits die hard", phonetic: "/əʊld ˈhæbɪts daɪ hɑːd/", homophone: "欧尔德哈比茨戴哈德", meaning: "旧习难改", sentence: "Old habits die hard.", translation: "旧习难改。", homophoneSentence: "欧尔德哈比茨戴哈德." }
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
