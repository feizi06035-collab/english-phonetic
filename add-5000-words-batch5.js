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
        { word: "How are you doing today", phonetic: "/haʊ ɑː juː ˈduːɪŋ təˈdeɪ/", homophone: "好阿油杜英特戴", meaning: "你今天怎么样", sentence: "How are you doing today?", translation: "你今天怎么样？", homophoneSentence: "好阿油杜英特戴?" },
        { word: "Nice seeing you", phonetic: "/naɪs ˈsiːɪŋ juː/", homophone: "奈斯西宁油", meaning: "很高兴见到你", sentence: "Nice seeing you again!", translation: "很高兴再次见到你！", homophoneSentence: "奈斯西宁油阿根!" },
        { word: "It's been a while", phonetic: "/ɪts biːn ə waɪl/", homophone: "伊茨宾阿瓦伊尔", meaning: "有一段时间了", sentence: "It's been a while since we met.", translation: "我们有一段时间没见面了。", homophoneSentence: "伊茨宾阿瓦伊尔辛斯维梅特." },
        { word: "Where have you been", phonetic: "/weə hæv juː biːn/", homophone: "韦尔哈夫油宾", meaning: "你去哪了", sentence: "Where have you been hiding?", translation: "你躲到哪里去了？", homophoneSentence: "韦尔哈夫油宾海丁?" },
        { word: "I've missed you", phonetic: "/aɪv mɪst juː/", homophone: "艾夫米斯特油", meaning: "我想念你", sentence: "I've missed you so much!", translation: "我非常想念你！", homophoneSentence: "艾夫米斯特油索马奇!" },
        { word: "It's good to be back", phonetic: "/ɪts ɡʊd tuː biː bæk/", homophone: "伊茨古德图比拜克", meaning: "回来真好", sentence: "It's good to be back home.", translation: "回家真好。", homophoneSentence: "伊茨古德图比拜克霍姆." },
        { word: "Welcome back", phonetic: "/ˈwelkəm bæk/", homophone: "韦尔卡姆拜克", meaning: "欢迎回来", sentence: "Welcome back! How was your trip?", translation: "欢迎回来！旅行怎么样？", homophoneSentence: "韦尔卡姆拜克!好沃兹哟特里普?" },
        { word: "Long time", phonetic: "/lɒŋ taɪm/", homophone: "朗泰姆", meaning: "好久", sentence: "Long time no see!", translation: "好久不见！", homophoneSentence: "朗泰姆诺西!" },
        { word: "It's been ages", phonetic: "/ɪts biːn ˈeɪdʒɪz/", homophone: "伊茨宾埃奇兹", meaning: "好久不见", sentence: "It's been ages since we talked.", translation: "我们好久没聊天了。", homophoneSentence: "伊茨宾埃奇兹辛斯维托克特." },
        { word: "What a surprise", phonetic: "/wɒt ə səˈpraɪz/", homophone: "沃特阿苏普赖兹", meaning: "真是惊喜", sentence: "What a surprise to see you!", translation: "见到你真是惊喜！", homophoneSentence: "沃特阿苏普赖兹图西油!" }
    ],
    emotions: [
        { word: "Inspired", phonetic: "/ɪnˈspaɪəd/", homophone: "因斯派尔德", meaning: "受到启发的", sentence: "I feel inspired by your words.", translation: "你的话让我受到启发。", homophoneSentence: "爱菲尔因斯派尔德拜哟沃德兹." },
        { word: "Motivated", phonetic: "/ˈməʊtɪveɪtɪd/", homophone: "莫蒂韦蒂德", meaning: "有动力的", sentence: "I feel motivated to work harder.", translation: "我有动力更努力工作。", homophoneSentence: "爱菲尔莫蒂韦蒂德图沃克哈德." },
        { word: "Empowered", phonetic: "/ɪmˈpaʊəd/", homophone: "因帕沃德", meaning: "被赋予权力的", sentence: "She feels empowered.", translation: "她感到被赋予权力。", homophoneSentence: "希菲尔兹因帕沃德." },
        { word: "Confident", phonetic: "/ˈkɒnfɪdənt/", homophone: "康菲登特", meaning: "自信的", sentence: "I feel confident about the exam.", translation: "我对考试有信心。", homophoneSentence: "爱菲尔康菲登特阿鲍特泽伊格扎姆." },
        { word: "Courageous", phonetic: "/kəˈreɪdʒəs/", homophone: "科雷贾斯", meaning: "勇敢的", sentence: "She's a courageous woman.", translation: "她是一个勇敢的女性。", homophoneSentence: "希兹阿科雷贾斯沃曼." },
        { word: "Brave", phonetic: "/breɪv/", homophone: "布雷夫", meaning: "勇敢的", sentence: "Be brave and try again.", translation: "勇敢点，再试一次。", homophoneSentence: "比布雷夫安德特赖阿根." },
        { word: "Fearless", phonetic: "/ˈfɪələs/", homophone: "菲尔勒斯", meaning: "无畏的", sentence: "She's a fearless leader.", translation: "她是一个无畏的领导者。", homophoneSentence: "希兹阿菲尔勒斯利德." },
        { word: "Bold", phonetic: "/bəʊld/", homophone: "博尔德", meaning: "大胆的", sentence: "Make a bold decision.", translation: "做一个大胆的决定。", homophoneSentence: "梅克阿博尔德迪西詹." },
        { word: "Daring", phonetic: "/ˈdeərɪŋ/", homophone: "戴林", meaning: "大胆的", sentence: "That was a daring move.", translation: "那是一个大胆的举动。", homophoneSentence: "泽特沃兹阿戴林穆夫." },
        { word: "Adventurous", phonetic: "/ədˈventʃərəs/", homophone: "阿德文彻勒斯", meaning: "爱冒险的", sentence: "He's an adventurous traveler.", translation: "他是一个爱冒险的旅行者。", homophoneSentence: "希兹安阿德文彻勒斯特拉维勒." }
    ],
    numbers: [
        { word: "Double", phonetic: "/ˈdʌbl/", homophone: "达布尔", meaning: "双倍", sentence: "I want a double portion.", translation: "我要双份。", homophoneSentence: "爱旺特阿达布尔波申." },
        { word: "Triple", phonetic: "/ˈtrɪpl/", homophone: "特里普尔", meaning: "三倍", sentence: "The price tripled.", translation: "价格翻了三倍。", homophoneSentence: "泽普赖斯特里普尔德." },
        { word: "Quadruple", phonetic: "/kwɒˈdruːpl/", homophone: "夸德鲁普尔", meaning: "四倍", sentence: "The profits quadrupled.", translation: "利润翻了四倍。", homophoneSentence: "泽普罗菲茨夸德鲁普尔德." },
        { word: "Single", phonetic: "/ˈsɪŋɡl/", homophone: "辛格尔", meaning: "单个", sentence: "I'd like a single room.", translation: "我想要一个单人房。", homophoneSentence: "爱德拉克斯阿辛格尔鲁姆." },
        { word: "Multiple", phonetic: "/ˈmʌltɪpl/", homophone: "马尔蒂普尔", meaning: "多个", sentence: "There are multiple options.", translation: "有多个选择。", homophoneSentence: "泽尔阿马尔蒂普尔奥普申兹." },
        { word: "Various", phonetic: "/ˈveəriəs/", homophone: "韦里厄斯", meaning: "各种各样的", sentence: "There are various colors.", translation: "有各种各样的颜色。", homophoneSentence: "泽尔阿韦里厄斯卡勒兹." },
        { word: "Diverse", phonetic: "/daɪˈvɜːs/", homophone: "戴弗斯", meaning: "多样的", sentence: "Our team is diverse.", translation: "我们的团队很多样化。", homophoneSentence: "奥尔蒂姆伊兹戴弗斯." },
        { word: "Plenty", phonetic: "/ˈplenti/", homophone: "普伦蒂", meaning: "充足", sentence: "There's plenty of time.", translation: "时间很充足。", homophoneSentence: "泽尔兹普伦蒂阿夫泰姆." },
        { word: "Abundant", phonetic: "/əˈbʌndənt/", homophone: "阿班登特", meaning: "丰富的", sentence: "The harvest was abundant.", translation: "收成很丰富。", homophoneSentence: "泽哈维斯特沃兹阿班登特." },
        { word: "Infinite", phonetic: "/ˈɪnfɪnət/", homophone: "因菲尼特", meaning: "无限的", sentence: "The possibilities are infinite.", translation: "可能性是无限的。", homophoneSentence: "泽波西比利蒂兹阿因菲尼特." }
    ],
    colors: [
        { word: "Ivory", phonetic: "/ˈaɪvəri/", homophone: "艾沃里", meaning: "象牙色", sentence: "Ivory is elegant.", translation: "象牙色很优雅。", homophoneSentence: "艾沃里伊兹埃勒甘特." },
        { word: "Beige", phonetic: "/beɪʒ/", homophone: "贝奇", meaning: "米色", sentence: "Beige is a neutral color.", translation: "米色是一种中性颜色。", homophoneSentence: "贝奇伊兹阿纽特雷尔卡勒." },
        { word: "Tan", phonetic: "/tæn/", homophone: "坦", meaning: "棕褐色", sentence: "Tan shoes are versatile.", translation: "棕褐色鞋子很百搭。", homophoneSentence: "坦舒兹阿弗萨泰尔." },
        { word: "Khaki", phonetic: "/ˈkɑːki/", homophone: "卡基", meaning: "卡其色", sentence: "Khaki pants are classic.", translation: "卡其裤很经典。", homophoneSentence: "卡基潘茨阿克拉斯克." },
        { word: "Olive", phonetic: "/ˈɒlɪv/", homophone: "奥利夫", meaning: "橄榄色", sentence: "Olive green is earthy.", translation: "橄榄绿很朴实。", homophoneSentence: "奥利夫格林伊兹厄西." },
        { word: "Forest green", phonetic: "/ˈfɒrɪst ɡriːn/", homophone: "福雷斯特格林", meaning: "森林绿", sentence: "Forest green is deep.", translation: "森林绿很深沉。", homophoneSentence: "福雷斯特格林伊兹迪普." },
        { word: "Mint green", phonetic: "/mɪnt ɡriːn/", homophone: "明特格林", meaning: "薄荷绿", sentence: "Mint green is refreshing.", translation: "薄荷绿很清新。", homophoneSentence: "明特格林伊兹里弗雷希宁." },
        { word: "Lime green", phonetic: "/laɪm ɡriːn/", homophone: "莱姆格林", meaning: "青柠绿", sentence: "Lime green is vibrant.", translation: "青柠绿很鲜艳。", homophoneSentence: "莱姆格林伊兹瓦伊布伦特." },
        { word: "Emerald", phonetic: "/ˈemərəld/", homophone: "埃默拉尔德", meaning: "祖母绿", sentence: "Emerald is a precious stone.", translation: "祖母绿是一种珍贵的宝石。", homophoneSentence: "埃默拉尔德伊兹阿普雷舍斯斯通." },
        { word: "Jade", phonetic: "/dʒeɪd/", homophone: "杰德", meaning: "玉色", sentence: "Jade is valued in China.", translation: "玉在中国很珍贵。", homophoneSentence: "杰德伊兹瓦尔尤德因柴纳." }
    ],
    family: [
        { word: "Half-sister", phonetic: "/hɑːf ˈsɪstə/", homophone: "哈夫西斯特", meaning: "同父异母/同母异父姐妹", sentence: "My half-sister is younger than me.", translation: "我的异父妹妹比我小。", homophoneSentence: "麦哈夫西斯特伊兹扬格泽米." },
        { word: "Stepchild", phonetic: "/ˈsteptʃaɪld/", homophone: "斯特普柴尔德", meaning: "继子/继女", sentence: "He treats his stepchild well.", translation: "他对继子很好。", homophoneSentence: "希特里茨希兹斯特普柴尔德韦尔." },
        { word: "Adoptive parent", phonetic: "/əˈdɒptɪv ˈpeərənt/", homophone: "阿多普蒂夫佩伦特", meaning: "养父母", sentence: "They are adoptive parents.", translation: "他们是养父母。", homophoneSentence: "泽伊阿阿多普蒂夫佩伦茨." },
        { word: "Biological parent", phonetic: "/ˌbaɪəˈlɒdʒɪkl ˈpeərənt/", homophone: "拜奥洛吉克尔佩伦特", meaning: "亲生父母", sentence: "She met her biological parents.", translation: "她见到了她的亲生父母。", homophoneSentence: "希梅特赫拜奥洛吉克尔佩伦茨." },
        { word: "Surrogate mother", phonetic: "/ˈsʌrəɡət ˈmʌðə/", homophone: "萨拉盖特马泽", meaning: "代孕母亲", sentence: "They used a surrogate mother.", translation: "他们使用了代孕母亲。", homophoneSentence: "泽伊尤兹德阿萨拉盖特马泽." },
        { word: "Guardian", phonetic: "/ˈɡɑːdiən/", homophone: "加迪恩", meaning: "监护人", sentence: "Her aunt is her guardian.", translation: "她的阿姨是她的监护人。", homophoneSentence: "赫安特伊兹赫加迪恩." },
        { word: "Ward", phonetic: "/wɔːd/", homophone: "沃德", meaning: "被监护人", sentence: "He is a ward of the state.", translation: "他是国家的被监护人。", homophoneSentence: "希伊兹阿沃德阿夫泽斯泰特." },
        { word: "Heir", phonetic: "/eə/", homophone: "埃尔", meaning: "继承人", sentence: "He is the heir to the throne.", translation: "他是王位继承人。", homophoneSentence: "希伊兹泽埃尔图泽斯罗恩." },
        { word: "Heiress", phonetic: "/ˈeəres/", homophone: "埃里斯", meaning: "女继承人", sentence: "She is a wealthy heiress.", translation: "她是一个富有的女继承人。", homophoneSentence: "希伊兹阿韦尔西埃里斯." },
        { word: "Ancestor", phonetic: "/ˈænsestə/", homophone: "安塞斯特", meaning: "祖先", sentence: "My ancestors came from Ireland.", translation: "我的祖先来自爱尔兰。", homophoneSentence: "麦安塞斯特兹凯姆弗罗姆艾尔兰德." }
    ],
    time: [
        { word: "Present", phonetic: "/ˈpreznt/", homophone: "普雷曾特", meaning: "现在", sentence: "Live in the present.", translation: "活在当下。", homophoneSentence: "利夫因泽普雷曾特." },
        { word: "Past", phonetic: "/pɑːst/", homophone: "帕斯特", meaning: "过去", sentence: "Learn from the past.", translation: "从过去中学习。", homophoneSentence: "勒恩弗罗姆泽帕斯特." },
        { word: "Future", phonetic: "/ˈfjuːtʃə/", homophone: "菲尤彻", meaning: "未来", sentence: "The future is bright.", translation: "未来是光明的。", homophoneSentence: "泽菲尤彻伊兹布赖特." },
        { word: "Recently", phonetic: "/ˈriːsntli/", homophone: "里斯恩特利", meaning: "最近", sentence: "I recently moved here.", translation: "我最近搬到了这里。", homophoneSentence: "爱里斯恩特利穆夫德希尔." },
        { word: "Lately", phonetic: "/ˈleɪtli/", homophone: "雷特利", meaning: "最近", sentence: "I haven't seen him lately.", translation: "我最近没见到他。", homophoneSentence: "爱哈文特辛希姆雷特利." },
        { word: "Currently", phonetic: "/ˈkʌrəntli/", homophone: "卡伦特利", meaning: "目前", sentence: "I'm currently working.", translation: "我目前正在工作。", homophoneSentence: "爱姆卡伦特利沃金." },
        { word: "Nowadays", phonetic: "/ˈnaʊədeɪz/", homophone: "诺阿戴兹", meaning: "如今", sentence: "Nowadays, people use smartphones.", translation: "如今人们使用智能手机。", homophoneSentence: "诺阿戴兹,皮普尔尤兹斯马特福恩兹." },
        { word: "Formerly", phonetic: "/ˈfɔːməli/", homophone: "福默利", meaning: "以前", sentence: "This was formerly a school.", translation: "这里以前是一所学校。", homophoneSentence: "泽斯沃兹福默利阿斯库尔." },
        { word: "Previously", phonetic: "/ˈpriːviəsli/", homophone: "普里维厄斯利", meaning: "以前", sentence: "I previously worked there.", translation: "我以前在那里工作。", homophoneSentence: "爱普里维厄斯利沃克特泽尔." },
        { word: "Eventually", phonetic: "/ɪˈventʃuəli/", homophone: "伊文丘利", meaning: "最终", sentence: "Eventually, we succeeded.", translation: "最终我们成功了。", homophoneSentence: "伊文丘利,维萨克西迪德." }
    ],
    food: [
        { word: "Spices", phonetic: "/ˈspaɪsɪz/", homophone: "斯派西兹", meaning: "香料", sentence: "Add spices to taste.", translation: "根据口味添加香料。", homophoneSentence: "埃德斯派西兹图泰斯特." },
        { word: "Sauces", phonetic: "/ˈsɔːsɪz/", homophone: "索西兹", meaning: "酱汁", sentence: "Try different sauces.", translation: "尝试不同的酱汁。", homophoneSentence: "特赖迪弗伦特索西兹." },
        { word: "Dressings", phonetic: "/ˈdresɪŋz/", homophone: "德雷辛兹", meaning: "调味汁", sentence: "Salad dressings vary.", translation: "沙拉调味汁各不相同。", homophoneSentence: "萨拉德德雷辛兹韦里." },
        { word: "Marinade", phonetic: "/ˌmærɪˈneɪd/", homophone: "马里纳德", meaning: "腌料", sentence: "Marinate the chicken.", translation: "腌制鸡肉。", homophoneSentence: "马里内特泽奇肯." },
        { word: "Glaze", phonetic: "/ɡleɪz/", homophone: "格雷兹", meaning: "釉料", sentence: "Add a honey glaze.", translation: "添加蜂蜜釉料。", homophoneSentence: "埃德阿哈尼格雷兹." },
        { word: "Frosting", phonetic: "/ˈfrɒstɪŋ/", homophone: "弗罗斯廷", meaning: "糖霜", sentence: "Chocolate frosting is sweet.", translation: "巧克力糖霜很甜。", homophoneSentence: "乔克利特弗罗斯廷伊兹斯威特." },
        { word: "Topping", phonetic: "/ˈtɒpɪŋ/", homophone: "托平", meaning: "配料", sentence: "What topping do you want?", translation: "你想要什么配料？", homophoneSentence: "沃特托平杜油旺特?" },
        { word: "Filling", phonetic: "/ˈfɪlɪŋ/", homophone: "菲林", meaning: "馅料", sentence: "The pie has apple filling.", translation: "派有苹果馅料。", homophoneSentence: "泽派哈兹阿普尔菲林." },
        { word: "Batter", phonetic: "/ˈbætə/", homophone: "巴特", meaning: "面糊", sentence: "Mix the batter well.", translation: "把面糊搅拌均匀。", homophoneSentence: "米克斯泽巴特韦尔." },
        { word: "Dough", phonetic: "/dəʊ/", homophone: "多", meaning: "面团", sentence: "Knead the dough.", translation: "揉面团。", homophoneSentence: "尼德泽多." }
    ],
    conversations: [
        { word: "That sounds great", phonetic: "/ðæt saʊndz ɡreɪt/", homophone: "泽特桑兹格雷特", meaning: "听起来不错", sentence: "That sounds great to me!", translation: "对我来说听起来不错！", homophoneSentence: "泽特桑兹格雷特图米!" },
        { word: "That sounds interesting", phonetic: "/ðæt saʊndz ˈɪntrəstɪŋ/", homophone: "泽特桑兹因特雷斯特宁", meaning: "听起来有趣", sentence: "That sounds interesting, tell me more.", translation: "听起来有趣，告诉我更多。", homophoneSentence: "泽特桑兹因特雷斯特宁,泰尔米莫." },
        { word: "I'm not so sure", phonetic: "/aɪm nɒt səʊ ʃʊə/", homophone: "爱姆诺特索舒尔", meaning: "我不太确定", sentence: "I'm not so sure about that.", translation: "我不太确定那个。", homophoneSentence: "爱姆诺特索舒尔阿鲍特泽特." },
        { word: "I have my doubts", phonetic: "/aɪ hæv maɪ daʊts/", homophone: "爱哈夫麦道茨", meaning: "我有些怀疑", sentence: "I have my doubts about this plan.", translation: "我对这个计划有些怀疑。", homophoneSentence: "爱哈夫麦道茨阿鲍特泽斯普兰." },
        { word: "Let me think about it", phonetic: "/let miː θɪŋk əˈbaʊt ɪt/", homophone: "莱特米辛克阿鲍特伊特", meaning: "让我想想", sentence: "Let me think about it and get back to you.", translation: "让我想想再回复你。", homophoneSentence: "莱特米辛克阿鲍特伊特安德盖特拜克图油." },
        { word: "I'll get back to you", phonetic: "/aɪl ɡet bæk tuː juː/", homophone: "爱尔盖特拜克图油", meaning: "我会回复你", sentence: "I'll get back to you soon.", translation: "我会很快回复你。", homophoneSentence: "爱尔盖特拜克图油苏恩." },
        { word: "I'll let you know", phonetic: "/aɪl let juː nəʊ/", homophone: "爱尔莱特油诺", meaning: "我会通知你", sentence: "I'll let you know my decision.", translation: "我会通知你我的决定。", homophoneSentence: "爱尔莱特油诺麦迪西詹." },
        { word: "Keep me posted", phonetic: "/kiːp miː ˈpəʊstɪd/", homophone: "基普米波斯特德", meaning: "随时通知我", sentence: "Keep me posted on the progress.", translation: "随时通知我进展。", homophoneSentence: "基普米波斯特德昂泽普罗格雷斯." },
        { word: "Stay in touch", phonetic: "/steɪ ɪn tʌtʃ/", homophone: "斯泰因塔奇", meaning: "保持联系", sentence: "Let's stay in touch!", translation: "我们保持联系！", homophoneSentence: "莱茨斯泰因塔奇!" },
        { word: "Drop me a line", phonetic: "/drɒp miː ə laɪn/", homophone: "德罗普米阿莱恩", meaning: "给我写信", sentence: "Drop me a line when you can.", translation: "有空给我写信。", homophoneSentence: "德罗普米阿莱恩温油坎." }
    ],
    sentences: [
        { word: "Have your cake and eat it too", phonetic: "/hæv jɔː keɪk ænd iːt ɪt tuː/", homophone: "哈夫哟凯克安德伊特伊特图", meaning: "鱼与熊掌兼得", sentence: "You can't have your cake and eat it too.", translation: "你不能鱼与熊掌兼得。", homophoneSentence: "油坎特哈夫哟凯克安德伊特伊特图." },
        { word: "Hit the sack", phonetic: "/hɪt ðə sæk/", homophone: "希特泽萨克", meaning: "睡觉", sentence: "I'm going to hit the sack.", translation: "我要去睡觉了。", homophoneSentence: "爱姆戈宁图希特泽萨克." },
        { word: "Ignorance is bliss", phonetic: "/ˈɪɡnərəns ɪz blɪs/", homophone: "伊格纳伦斯伊兹布利斯", meaning: "无知是福", sentence: "Sometimes ignorance is bliss.", translation: "有时候无知是福。", homophoneSentence: "萨姆泰姆兹伊格纳伦斯伊兹布利斯." },
        { word: "It takes two to tango", phonetic: "/ɪt teɪks tuː tuː ˈtæŋɡəʊ/", homophone: "伊特泰克斯图图坦戈", meaning: "一个巴掌拍不响", sentence: "It takes two to tango.", translation: "一个巴掌拍不响。", homophoneSentence: "伊特泰克斯图图坦戈." },
        { word: "Keep your chin up", phonetic: "/kiːp jɔː tʃɪn ʌp/", homophone: "基普哟奇恩阿普", meaning: "不要气馁", sentence: "Keep your chin up!", translation: "不要气馁！", homophoneSentence: "基普哟奇恩阿普!" },
        { word: "Kill the goose that lays the golden egg", phonetic: "/kɪl ðə ɡuːs ðæt leɪz ðə ˈɡəʊldən eɡ/", homophone: "基尔泽古斯泽特雷兹泽戈尔登埃格", meaning: "杀鸡取卵", sentence: "Don't kill the goose that lays the golden egg.", translation: "不要杀鸡取卵。", homophoneSentence: "东特基尔泽古斯泽特雷兹泽戈尔登埃格." },
        { word: "Let bygones be bygones", phonetic: "/let ˈbaɪɡɒnz biː ˈbaɪɡɒnz/", homophone: "莱特拜贡兹比拜贡兹", meaning: "过去的事就让它过去", sentence: "Let bygones be bygones.", translation: "过去的事就让它过去。", homophoneSentence: "莱特拜贡兹比拜贡兹." },
        { word: "Live and let live", phonetic: "/lɪv ænd let lɪv/", homophone: "利夫安德莱特利夫", meaning: "互相宽容", sentence: "Live and let live.", translation: "互相宽容。", homophoneSentence: "利夫安德莱特利夫." },
        { word: "Make a long story short", phonetic: "/meɪk ə lɒŋ ˈstɔːri ʃɔːt/", homophone: "梅克阿朗斯托里肖特", meaning: "长话短说", sentence: "To make a long story short...", translation: "长话短说...", homophoneSentence: "图梅克阿朗斯托里肖特..." },
        { word: "Miss the boat", phonetic: "/mɪs ðə bəʊt/", homophone: "米斯泽博特", meaning: "错失良机", sentence: "Don't miss the boat!", translation: "别错失良机！", homophoneSentence: "东特米斯泽博特!" }
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
