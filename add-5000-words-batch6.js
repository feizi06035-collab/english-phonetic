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
        { word: "How's your day", phonetic: "/haʊz jɔː deɪ/", homophone: "好兹哟戴", meaning: "你今天怎么样", sentence: "How's your day been?", translation: "你今天过得怎么样？", homophoneSentence: "好兹哟戴宾?" },
        { word: "What's up with you", phonetic: "/wɒts ʌp wɪð juː/", homophone: "沃茨阿普威兹油", meaning: "你怎么样", sentence: "What's up with you these days?", translation: "你最近怎么样？", homophoneSentence: "沃茨阿普威兹油泽兹戴兹?" },
        { word: "How have things been", phonetic: "/haʊ hæv θɪŋz biːn/", homophone: "好哈夫辛兹宾", meaning: "事情怎么样", sentence: "How have things been with you?", translation: "你那边事情怎么样？", homophoneSentence: "好哈夫辛兹宾威兹油?" },
        { word: "What's going on", phonetic: "/wɒts ˈɡəʊɪŋ ɒn/", homophone: "沃茨戈宁昂", meaning: "发生什么事", sentence: "What's going on here?", translation: "这里发生什么事了？", homophoneSentence: "沃茨戈宁昂希尔?" },
        { word: "How are things coming along", phonetic: "/haʊ ɑː θɪŋz ˈkʌmɪŋ əˈlɒŋ/", homophone: "好阿辛兹卡明阿隆", meaning: "事情进展如何", sentence: "How are things coming along?", translation: "事情进展如何？", homophoneSentence: "好阿辛兹卡明阿隆?" },
        { word: "Any news", phonetic: "/ˈeni njuːz/", homophone: "艾尼纽兹", meaning: "有什么新闻", sentence: "Any news from home?", translation: "家里有什么新闻吗？", homophoneSentence: "艾尼纽兹弗罗姆霍姆?" },
        { word: "What's new with you", phonetic: "/wɒts njuː wɪð juː/", homophone: "沃茨纽威兹油", meaning: "你有什么新鲜事", sentence: "What's new with you lately?", translation: "你最近有什么新鲜事？", homophoneSentence: "沃茨纽威兹油雷特利?" },
        { word: "How's everything with you", phonetic: "/haʊz ˈevriθɪŋ wɪð juː/", homophone: "好兹艾弗里辛威兹油", meaning: "你一切都好吗", sentence: "How's everything with you these days?", translation: "你最近一切都好吗？", homophoneSentence: "好兹艾弗里辛威兹油泽兹戴兹?" },
        { word: "Nice to see you again", phonetic: "/naɪs tuː siː juː əˈɡen/", homophone: "奈斯图西油阿根", meaning: "很高兴再次见到你", sentence: "Nice to see you again!", translation: "很高兴再次见到你！", homophoneSentence: "奈斯图西油阿根!" },
        { word: "Good to have you back", phonetic: "/ɡʊd tuː hæv juː bæk/", homophone: "古德图哈夫油拜克", meaning: "欢迎回来", sentence: "Good to have you back!", translation: "欢迎回来！", homophoneSentence: "古德图哈夫油拜克!" }
    ],
    emotions: [
        { word: "Curious", phonetic: "/ˈkjʊəriəs/", homophone: "克尤里厄斯", meaning: "好奇的", sentence: "I'm curious about that.", translation: "我对那很好奇。", homophoneSentence: "爱姆克尤里厄斯阿鲍特泽特." },
        { word: "Intrigued", phonetic: "/ɪnˈtriːɡd/", homophone: "因特里格德", meaning: "感兴趣的", sentence: "I'm intrigued by your idea.", translation: "我对你的想法很感兴趣。", homophoneSentence: "爱姆因特里格德拜哟艾迪亚." },
        { word: "Fascinated", phonetic: "/ˈfæsɪneɪtɪd/", homophone: "法西内蒂德", meaning: "着迷的", sentence: "I'm fascinated by science.", translation: "我对科学着迷。", homophoneSentence: "爱姆法西内蒂德拜赛恩斯." },
        { word: "Captivated", phonetic: "/ˈkæptɪveɪtɪd/", homophone: "卡普蒂韦蒂德", meaning: "被迷住的", sentence: "She was captivated by the music.", translation: "她被音乐迷住了。", homophoneSentence: "希沃兹卡普蒂韦蒂德拜泽缪齐克." },
        { word: "Mesmerized", phonetic: "/ˈmezməraɪzd/", homophone: "梅兹默拉伊兹德", meaning: "被迷住的", sentence: "I was mesmerized by the view.", translation: "我被景色迷住了。", homophoneSentence: "爱沃兹梅兹默拉伊兹德拜泽维尤." },
        { word: "Spellbound", phonetic: "/ˈspelbaʊnd/", homophone: "斯佩尔鲍恩德", meaning: "入迷的", sentence: "The audience was spellbound.", translation: "观众入迷了。", homophoneSentence: "泽奥迪恩斯沃兹斯佩尔鲍恩德." },
        { word: "Enchanted", phonetic: "/ɪnˈtʃɑːntɪd/", homophone: "因钱蒂德", meaning: "被迷住的", sentence: "I was enchanted by the story.", translation: "我被故事迷住了。", homophoneSentence: "爱沃兹因钱蒂德拜泽斯托里." },
        { word: "Charmed", phonetic: "/tʃɑːmd/", homophone: "查姆德", meaning: "被迷住的", sentence: "I was charmed by her smile.", translation: "我被她的微笑迷住了。", homophoneSentence: "爱沃兹查姆德拜赫斯迈尔." },
        { word: "Delighted", phonetic: "/dɪˈlaɪtɪd/", homophone: "迪莱蒂德", meaning: "高兴的", sentence: "I'm delighted to meet you.", translation: "很高兴认识你。", homophoneSentence: "爱姆迪莱蒂德图米特油." },
        { word: "Pleased", phonetic: "/pliːzd/", homophone: "普利兹德", meaning: "高兴的", sentence: "I'm pleased to help.", translation: "我很乐意帮忙。", homophoneSentence: "爱姆普利兹德图赫尔普." }
    ],
    numbers: [
        { word: "First", phonetic: "/fɜːst/", homophone: "弗斯特", meaning: "第一", sentence: "This is my first time.", translation: "这是我第一次。", homophoneSentence: "泽斯伊兹麦弗斯特泰姆." },
        { word: "Second", phonetic: "/ˈsekənd/", homophone: "塞肯德", meaning: "第二", sentence: "This is the second time.", translation: "这是第二次。", homophoneSentence: "泽斯伊兹泽塞肯德泰姆." },
        { word: "Third", phonetic: "/θɜːd/", homophone: "瑟德", meaning: "第三", sentence: "Third time's the charm.", translation: "第三次一定成功。", homophoneSentence: "瑟德泰姆兹泽查姆." },
        { word: "Fourth", phonetic: "/fɔːθ/", homophone: "福斯", meaning: "第四", sentence: "It's the fourth of July.", translation: "今天是七月四日。", homophoneSentence: "伊茨泽福斯阿夫朱莱." },
        { word: "Fifth", phonetic: "/fɪfθ/", homophone: "菲夫斯", meaning: "第五", sentence: "This is the fifth floor.", translation: "这是五楼。", homophoneSentence: "泽斯伊兹泽菲夫斯弗洛." },
        { word: "Sixth", phonetic: "/sɪksθ/", homophone: "西克斯斯", meaning: "第六", sentence: "It's my sixth birthday.", translation: "这是我的六岁生日。", homophoneSentence: "伊茨麦西克斯斯伯斯戴." },
        { word: "Seventh", phonetic: "/ˈsevnθ/", homophone: "塞文斯", meaning: "第七", sentence: "She came in seventh place.", translation: "她得了第七名。", homophoneSentence: "希凯姆因塞文斯普莱斯." },
        { word: "Eighth", phonetic: "/eɪtθ/", homophone: "埃特斯", meaning: "第八", sentence: "It's the eighth day.", translation: "这是第八天。", homophoneSentence: "伊茨泽埃特斯戴." },
        { word: "Ninth", phonetic: "/naɪnθ/", homophone: "奈恩斯", meaning: "第九", sentence: "He finished ninth.", translation: "他得了第九名。", homophoneSentence: "希菲尼什德奈恩斯." },
        { word: "Tenth", phonetic: "/tenθ/", homophone: "滕斯", meaning: "第十", sentence: "This is the tenth time.", translation: "这是第十次。", homophoneSentence: "泽斯伊兹泽滕斯泰姆." }
    ],
    colors: [
        { word: "Ruby", phonetic: "/ˈruːbi/", homophone: "鲁比", meaning: "红宝石色", sentence: "Ruby red is stunning.", translation: "红宝石色很惊艳。", homophoneSentence: "鲁比雷德伊兹斯塔宁." },
        { word: "Garnet", phonetic: "/ˈɡɑːnɪt/", homophone: "加尼特", meaning: "石榴红色", sentence: "Garnet is a deep red.", translation: "石榴红是一种深红色。", homophoneSentence: "加尼特伊兹阿迪普雷德." },
        { word: "Wine", phonetic: "/waɪn/", homophone: "瓦因", meaning: "酒红色", sentence: "Wine red is elegant.", translation: "酒红色很优雅。", homophoneSentence: "瓦因雷德伊兹埃勒甘特." },
        { word: "Burgundy", phonetic: "/ˈbɜːɡəndi/", homophone: "伯甘迪", meaning: "勃艮第红", sentence: "Burgundy is sophisticated.", translation: "勃艮第红很精致。", homophoneSentence: "伯甘迪伊兹索菲斯提凯蒂德." },
        { word: "Cranberry", phonetic: "/ˈkrænbəri/", homophone: "克兰贝里", meaning: "蔓越莓色", sentence: "Cranberry is a bright red.", translation: "蔓越莓色是一种鲜艳的红色。", homophoneSentence: "克兰贝里伊兹阿布赖特雷德." },
        { word: "Cherry", phonetic: "/ˈtʃeri/", homophone: "切里", meaning: "樱桃红", sentence: "Cherry red is vibrant.", translation: "樱桃红很鲜艳。", homophoneSentence: "切里雷德伊兹瓦伊布伦特." },
        { word: "Rose", phonetic: "/rəʊz/", homophone: "罗兹", meaning: "玫瑰色", sentence: "Rose pink is romantic.", translation: "玫瑰粉很浪漫。", homophoneSentence: "罗兹平克伊兹罗曼蒂克." },
        { word: "Blush", phonetic: "/blʌʃ/", homophone: "布拉什", meaning: "腮红色", sentence: "Blush is a soft pink.", translation: "腮红色是一种柔和的粉色。", homophoneSentence: "布拉什伊兹阿索夫特平克." },
        { word: "Coral", phonetic: "/ˈkɒrəl/", homophone: "科拉尔", meaning: "珊瑚色", sentence: "Coral is warm and inviting.", translation: "珊瑚色温暖而诱人。", homophoneSentence: "科拉尔伊兹沃姆安德因瓦伊丁." },
        { word: "Peach", phonetic: "/piːtʃ/", homophone: "皮奇", meaning: "桃色", sentence: "Peach is a gentle color.", translation: "桃色是一种柔和的颜色。", homophoneSentence: "皮奇伊兹阿真特尔卡勒." }
    ],
    family: [
        { word: "Descendant", phonetic: "/dɪˈsendənt/", homophone: "迪森登特", meaning: "后代", sentence: "He is a descendant of kings.", translation: "他是国王的后代。", homophoneSentence: "希伊兹阿迪森登特阿夫金兹." },
        { word: "Lineage", phonetic: "/ˈlɪniɪdʒ/", homophone: "利尼伊奇", meaning: "血统", sentence: "She comes from a noble lineage.", translation: "她来自贵族血统。", homophoneSentence: "希卡姆兹弗罗姆阿诺布尔利尼伊奇." },
        { word: "Ancestry", phonetic: "/ˈænsestri/", homophone: "安塞斯特里", meaning: "祖先", sentence: "I'm proud of my ancestry.", translation: "我为我的祖先感到骄傲。", homophoneSentence: "爱姆普劳德阿夫麦安塞斯特里." },
        { word: "Genealogy", phonetic: "/ˌdʒiːniˈælədʒi/", homophone: "吉尼阿勒吉", meaning: "家谱学", sentence: "Genealogy is fascinating.", translation: "家谱学很迷人。", homophoneSentence: "吉尼阿勒吉伊兹法西内丁." },
        { word: "Family tree", phonetic: "/ˈfæmɪli triː/", homophone: "法米利特里", meaning: "家谱", sentence: "Let's look at the family tree.", translation: "让我们看看家谱。", homophoneSentence: "莱茨卢克阿特泽法米利特里." },
        { word: "Relative", phonetic: "/ˈrelətɪv/", homophone: "雷拉蒂夫", meaning: "亲戚", sentence: "She's a distant relative.", translation: "她是一个远房亲戚。", homophoneSentence: "希兹阿迪斯坦特雷拉蒂夫." },
        { word: "Kin", phonetic: "/kɪn/", homophone: "金", meaning: "亲属", sentence: "He is my next of kin.", translation: "他是我的近亲。", homophoneSentence: "希伊兹麦内克斯特阿夫金." },
        { word: "Kinsman", phonetic: "/ˈkɪnzmən/", homophone: "金兹曼", meaning: "男性亲属", sentence: "He is my kinsman.", translation: "他是我的男性亲属。", homophoneSentence: "希伊兹麦金兹曼." },
        { word: "Kinswoman", phonetic: "/ˈkɪnzwʊmən/", homophone: "金兹沃曼", meaning: "女性亲属", sentence: "She is my kinswoman.", translation: "她是我的女性亲属。", homophoneSentence: "希伊兹麦金兹沃曼." },
        { word: "Clan", phonetic: "/klæn/", homophone: "克兰", meaning: "氏族", sentence: "The clan gathered together.", translation: "氏族聚集在一起。", homophoneSentence: "泽克兰盖泽德特格泽." }
    ],
    time: [
        { word: "Simultaneously", phonetic: "/ˌsɪmlˈteɪniəsli/", homophone: "西穆尔泰尼厄斯利", meaning: "同时地", sentence: "They arrived simultaneously.", translation: "他们同时到达。", homophoneSentence: "泽伊阿莱夫德西穆尔泰尼厄斯利." },
        { word: "Concurrently", phonetic: "/kənˈkʌrəntli/", homophone: "康卡伦特利", meaning: "同时地", sentence: "The events happened concurrently.", translation: "事件同时发生。", homophoneSentence: "泽伊文茨哈潘德康卡伦特利." },
        { word: "Subsequently", phonetic: "/ˈsʌbsɪkwəntli/", homophone: "萨布西昆特利", meaning: "随后", sentence: "He subsequently left.", translation: "他随后离开了。", homophoneSentence: "希萨布西昆特利莱夫特." },
        { word: "Consequently", phonetic: "/ˈkɒnsɪkwəntli/", homophone: "康西昆特利", meaning: "因此", sentence: "Consequently, he failed.", translation: "因此，他失败了。", homophoneSentence: "康西昆特利,希菲尔德." },
        { word: "Immediately", phonetic: "/ɪˈmiːdiətli/", homophone: "伊米迪特利", meaning: "立即", sentence: "Come here immediately!", translation: "马上来这里！", homophoneSentence: "卡姆希尔伊米迪特利!" },
        { word: "Instantly", phonetic: "/ˈɪnstəntli/", homophone: "因斯坦特利", meaning: "立即", sentence: "She recognized him instantly.", translation: "她立即认出了他。", homophoneSentence: "希雷科格奈兹德希姆因斯坦特利." },
        { word: "Promptly", phonetic: "/ˈprɒmptli/", homophone: "普罗姆普特利", meaning: "迅速地", sentence: "Please respond promptly.", translation: "请迅速回复。", homophoneSentence: "普利斯里斯庞德普罗姆普特利." },
        { word: "Shortly", phonetic: "/ˈʃɔːtli/", homophone: "肖特利", meaning: "不久", sentence: "He will arrive shortly.", translation: "他很快就会到。", homophoneSentence: "希尔威尔阿莱夫肖特利." },
        { word: "Briefly", phonetic: "/ˈbriːfli/", homophone: "布利夫利", meaning: "简短地", sentence: "Let me explain briefly.", translation: "让我简短地解释一下。", homophoneSentence: "莱特米伊克斯普莱恩布利夫利." },
        { word: "Temporarily", phonetic: "/ˌtempəˈrerəli/", homophone: "滕珀雷里利", meaning: "暂时地", sentence: "The store is temporarily closed.", translation: "商店暂时关闭。", homophoneSentence: "泽斯托伊兹滕珀雷里利克洛兹德." }
    ],
    food: [
        { word: "Appetizer", phonetic: "/ˈæpɪtaɪzə/", homophone: "阿佩泰泽", meaning: "开胃菜", sentence: "We started with an appetizer.", translation: "我们以开胃菜开始。", homophoneSentence: "维斯塔蒂德威兹安阿佩泰泽." },
        { word: "Entree", phonetic: "/ˈɒntreɪ/", homophone: "昂特雷", meaning: "主菜", sentence: "What's your entree choice?", translation: "你选什么主菜？", homophoneSentence: "沃茨哟昂特雷乔伊斯?" },
        { word: "Dessert", phonetic: "/dɪˈzɜːt/", homophone: "迪泽特", meaning: "甜点", sentence: "Save room for dessert!", translation: "留点肚子吃甜点！", homophoneSentence: "塞夫鲁姆福迪泽特!" },
        { word: "Beverage", phonetic: "/ˈbevərɪdʒ/", homophone: "贝弗里奇", meaning: "饮料", sentence: "What beverage would you like?", translation: "你想要什么饮料？", homophoneSentence: "沃特贝弗里奇武德油莱克?" },
        { word: "Cocktail", phonetic: "/ˈkɒkteɪl/", homophone: "科克泰尔", meaning: "鸡尾酒", sentence: "I'll have a cocktail.", translation: "我要一杯鸡尾酒。", homophoneSentence: "爱尔哈夫阿科克泰尔." },
        { word: "Mocktail", phonetic: "/ˈmɒkteɪl/", homophone: "莫克泰尔", meaning: "无酒精鸡尾酒", sentence: "She ordered a mocktail.", translation: "她点了一杯无酒精鸡尾酒。", homophoneSentence: "希奥尔德阿莫克泰尔." },
        { word: "Smoothie", phonetic: "/ˈsmuːði/", homophone: "斯穆西", meaning: "果昔", sentence: "I made a fruit smoothie.", translation: "我做了一杯水果果昔。", homophoneSentence: "爱梅德阿弗鲁特斯穆西." },
        { word: "Milkshake", phonetic: "/ˈmɪlkʃeɪk/", homophone: "米尔克谢克", meaning: "奶昔", sentence: "Chocolate milkshake, please.", translation: "请给我巧克力奶昔。", homophoneSentence: "乔克利特米尔克谢克,普利斯." },
        { word: "Float", phonetic: "/fləʊt/", homophone: "弗洛特", meaning: "漂浮饮料", sentence: "I'll have a root beer float.", translation: "我要一杯根汁啤酒漂浮饮料。", homophoneSentence: "爱尔哈夫阿鲁特比尔弗洛特." },
        { word: "Sundae", phonetic: "/ˈsʌndeɪ/", homophone: "桑戴", meaning: "圣代冰淇淋", sentence: "Hot fudge sundae, please.", translation: "请给我热软糖圣代。", homophoneSentence: "霍特法奇桑戴,普利斯." }
    ],
    conversations: [
        { word: "I couldn't agree more", phonetic: "/aɪ ˈkʊdnt əˈɡriː mɔː/", homophone: "爱库德恩特阿格里莫", meaning: "我完全同意", sentence: "I couldn't agree more with you.", translation: "我完全同意你的看法。", homophoneSentence: "爱库德恩特阿格里莫威兹油." },
        { word: "You have a point", phonetic: "/juː hæv ə pɔɪnt/", homophone: "油哈夫阿波因特", meaning: "你说得有道理", sentence: "You have a point there.", translation: "你说得有道理。", homophoneSentence: "油哈夫阿波因特泽尔." },
        { word: "I see your point", phonetic: "/aɪ siː jɔː pɔɪnt/", homophone: "爱西哟波因特", meaning: "我明白你的观点", sentence: "I see your point, but...", translation: "我明白你的观点，但是...", homophoneSentence: "爱西哟波因特,巴特..." },
        { word: "That's one way to look at it", phonetic: "/ðæts wʌn weɪ tuː lʊk æt ɪt/", homophone: "泽茨万韦图卢克阿特伊特", meaning: "这是一种看法", sentence: "That's one way to look at it.", translation: "这是一种看法。", homophoneSentence: "泽茨万韦图卢克阿特伊特." },
        { word: "I beg to differ", phonetic: "/aɪ beɡ tuː ˈdɪfə/", homophone: "爱贝格图迪弗", meaning: "恕我不能苟同", sentence: "I beg to differ on this point.", translation: "在这一点上恕我不能苟同。", homophoneSentence: "爱贝格图迪弗昂泽斯波因特." },
        { word: "We'll have to agree to disagree", phonetic: "/wiːl hæv tuː əˈɡriː tuː ˌdɪsəˈɡriː/", homophone: "威尔哈夫图阿格里图迪萨格里", meaning: "我们只能保留各自意见", sentence: "We'll have to agree to disagree.", translation: "我们只能保留各自意见。", homophoneSentence: "威尔哈夫图阿格里图迪萨格里." },
        { word: "Let's compromise", phonetic: "/lets ˈkɒmprəmaɪz/", homophone: "莱茨康普罗马伊兹", meaning: "让我们妥协", sentence: "Let's compromise on this.", translation: "让我们在这点上妥协。", homophoneSentence: "莱茨康普罗马伊兹昂泽斯." },
        { word: "Can we find a middle ground", phonetic: "/kæn wiː faɪnd ə ˈmɪdl ɡraʊnd/", homophone: "坎维法因德阿米德尔格劳恩德", meaning: "我们能找到折中方案吗", sentence: "Can we find a middle ground?", translation: "我们能找到折中方案吗？", homophoneSentence: "坎维法因德阿米德尔格劳恩德?" },
        { word: "Let's meet halfway", phonetic: "/lets miːt hɑːfˈweɪ/", homophone: "莱茨米特哈夫韦", meaning: "让我们各让一步", sentence: "Let's meet halfway on this.", translation: "让我们在这点上各让一步。", homophoneSentence: "莱茨米特哈夫韦昂泽斯." },
        { word: "I'm open to suggestions", phonetic: "/aɪm ˈəʊpən tuː səˈdʒestʃənz/", homophone: "爱姆欧彭图萨杰斯钦兹", meaning: "我愿意接受建议", sentence: "I'm open to suggestions.", translation: "我愿意接受建议。", homophoneSentence: "爱姆欧彭图萨杰斯钦兹." }
    ],
    sentences: [
        { word: "No pain, no gain", phonetic: "/nəʊ peɪn nəʊ ɡeɪn/", homophone: "诺佩恩诺盖恩", meaning: "一分耕耘一分收获", sentence: "No pain, no gain!", translation: "一分耕耘一分收获！", homophoneSentence: "诺佩恩诺盖恩!" },
        { word: "Out of sight, out of mind", phonetic: "/aʊt əv saɪt aʊt əv maɪnd/", homophone: "奥特阿夫萨伊特奥特阿夫迈恩德", meaning: "眼不见心不烦", sentence: "Out of sight, out of mind.", translation: "眼不见心不烦。", homophoneSentence: "奥特阿夫萨伊特奥特阿夫迈恩德." },
        { word: "Practice what you preach", phonetic: "/ˈpræktɪs wɒt juː priːtʃ/", homophone: "普拉克蒂斯沃特油普里奇", meaning: "言行一致", sentence: "You should practice what you preach.", translation: "你应该言行一致。", homophoneSentence: "油舒德普拉克蒂斯沃特油普里奇." },
        { word: "Rome wasn't built in a day", phonetic: "/rəʊm ˈwɒznt bɪlt ɪn ə deɪ/", homophone: "罗姆沃兹特比尔特因阿戴", meaning: "罗马不是一天建成的", sentence: "Rome wasn't built in a day.", translation: "罗马不是一天建成的。", homophoneSentence: "罗姆沃兹特比尔特因阿戴." },
        { word: "Silence is golden", phonetic: "/ˈsaɪləns ɪz ˈɡəʊldən/", homophone: "赛伦斯伊兹戈尔登", meaning: "沉默是金", sentence: "Sometimes silence is golden.", translation: "有时候沉默是金。", homophoneSentence: "萨姆泰姆兹赛伦斯伊兹戈尔登." },
        { word: "The early bird catches the worm", phonetic: "/ði ˈɜːli bɜːd ˈkætʃɪz ðə wɜːm/", homophone: "泽厄利伯德凯奇兹泽沃姆", meaning: "早起的鸟儿有虫吃", sentence: "Remember, the early bird catches the worm.", translation: "记住，早起的鸟儿有虫吃。", homophoneSentence: "里梅姆伯,泽厄利伯德凯奇兹泽沃姆." },
        { word: "The grass is always greener", phonetic: "/ðə ɡrɑːs ɪz ˈɔːlweɪz ˈɡriːnə/", homophone: "泽格拉斯伊兹奥尔韦兹格林纳", meaning: "这山望着那山高", sentence: "The grass is always greener on the other side.", translation: "这山望着那山高。", homophoneSentence: "泽格拉斯伊兹奥尔韦兹格林纳昂泽阿泽赛德." },
        { word: "There's no place like home", phonetic: "/ðeəz nəʊ pleɪs laɪk həʊm/", homophone: "泽尔兹诺普莱斯莱克霍姆", meaning: "金窝银窝不如自己的狗窝", sentence: "There's no place like home.", translation: "金窝银窝不如自己的狗窝。", homophoneSentence: "泽尔兹诺普莱斯莱克霍姆." },
        { word: "Time flies when you're having fun", phonetic: "/taɪm flaɪz wen jɔː ˈhævɪŋ fʌn/", homophone: "泰姆弗莱兹温约哈文凡", meaning: "快乐时光过得快", sentence: "Time flies when you're having fun!", translation: "快乐时光过得快！", homophoneSentence: "泰姆弗莱兹温约哈文凡!" },
        { word: "You can't have it both ways", phonetic: "/juː kɑːnt hæv ɪt bəʊθ weɪz/", homophone: "油坎特哈夫伊特博斯韦兹", meaning: "你不能两全其美", sentence: "You can't have it both ways.", translation: "你不能两全其美。", homophoneSentence: "油坎特哈夫伊特博斯韦兹." }
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
