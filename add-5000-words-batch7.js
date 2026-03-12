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
        { word: "How's your morning", phonetic: "/haʊz jɔː ˈmɔːnɪŋ/", homophone: "好兹哟莫宁", meaning: "你早上怎么样", sentence: "How's your morning going?", translation: "你早上过得怎么样？", homophoneSentence: "好兹哟莫宁戈宁?" },
        { word: "How was your night", phonetic: "/haʊ wɒz jɔː naɪt/", homophone: "好沃兹哟奈特", meaning: "你晚上过得怎么样", sentence: "How was your night?", translation: "你晚上过得怎么样？", homophoneSentence: "好沃兹哟奈特?" },
        { word: "Did you sleep well", phonetic: "/dɪd juː sliːp wel/", homophone: "迪德油斯利普韦尔", meaning: "你睡得好吗", sentence: "Did you sleep well last night?", translation: "你昨晚睡得好吗？", homophoneSentence: "迪德油斯利普韦尔拉斯特奈特?" },
        { word: "How was your weekend", phonetic: "/haʊ wɒz jɔː ˌwiːkˈend/", homophone: "好沃兹哟威肯德", meaning: "你周末过得怎么样", sentence: "How was your weekend?", translation: "你周末过得怎么样？", homophoneSentence: "好沃兹哟威肯德?" },
        { word: "Ready for the week", phonetic: "/ˈredi fɔː ðə wiːk/", homophone: "雷迪福泽威克", meaning: "准备好迎接这周了吗", sentence: "Ready for the week?", translation: "准备好迎接这周了吗？", homophoneSentence: "雷迪福泽威克?" },
        { word: "How's your week going", phonetic: "/haʊz jɔː wiːk ˈɡəʊɪŋ/", homophone: "好兹哟威克戈英", meaning: "你这周过得怎么样", sentence: "How's your week going?", translation: "你这周过得怎么样？", homophoneSentence: "好兹哟威克戈英?" },
        { word: "Happy Monday", phonetic: "/ˈhæpi ˈmʌndeɪ/", homophone: "哈皮曼迪", meaning: "周一快乐", sentence: "Happy Monday!", translation: "周一快乐！", homophoneSentence: "哈皮曼迪!" },
        { word: "Happy Friday", phonetic: "/ˈhæpi ˈfraɪdeɪ/", homophone: "哈皮弗莱迪", meaning: "周五快乐", sentence: "Happy Friday!", translation: "周五快乐！", homophoneSentence: "哈皮弗莱迪!" },
        { word: "Have a great day", phonetic: "/hæv ə ɡreɪt deɪ/", homophone: "哈夫阿格雷特戴", meaning: "祝你今天愉快", sentence: "Have a great day!", translation: "祝你今天愉快！", homophoneSentence: "哈夫阿格雷特戴!" },
        { word: "Enjoy your day", phonetic: "/ɪnˈdʒɔɪ jɔː deɪ/", homophone: "因乔伊哟戴", meaning: "享受你的一天", sentence: "Enjoy your day!", translation: "享受你的一天！", homophoneSentence: "因乔伊哟戴!" }
    ],
    emotions: [
        { word: "Calm", phonetic: "/kɑːm/", homophone: "卡姆", meaning: "平静的", sentence: "Stay calm and carry on.", translation: "保持冷静，继续前行。", homophoneSentence: "斯泰卡姆安德卡里昂." },
        { word: "Serene", phonetic: "/səˈriːn/", homophone: "瑟林", meaning: "宁静的", sentence: "The lake was serene.", translation: "湖面很宁静。", homophoneSentence: "泽莱克沃兹瑟林." },
        { word: "Tranquil", phonetic: "/ˈtræŋkwɪl/", homophone: "特兰奎尔", meaning: "宁静的", sentence: "A tranquil garden.", translation: "一个宁静的花园。", homophoneSentence: "阿特兰奎尔加登." },
        { word: "Peaceful", phonetic: "/ˈpiːsfʊl/", homophone: "皮斯福尔", meaning: "和平的", sentence: "It's so peaceful here.", translation: "这里很宁静。", homophoneSentence: "伊茨索皮斯福尔希尔." },
        { word: "Relaxed", phonetic: "/rɪˈlækst/", homophone: "里拉克斯特", meaning: "放松的", sentence: "I feel so relaxed.", translation: "我感到很放松。", homophoneSentence: "爱菲尔索里拉克斯特." },
        { word: "At ease", phonetic: "/æt iːz/", homophone: "阿特伊兹", meaning: "自在的", sentence: "I feel at ease with you.", translation: "和你在一起我很自在。", homophoneSentence: "爱菲尔阿特伊兹威兹油." },
        { word: "Comfortable", phonetic: "/ˈkʌmftəbl/", homophone: "康弗特布尔", meaning: "舒适的", sentence: "Make yourself comfortable.", translation: "让自己舒服点。", homophoneSentence: "梅克约塞尔夫康弗特布尔." },
        { word: "Cozy", phonetic: "/ˈkəʊzi/", homophone: "科齐", meaning: "舒适的", sentence: "This room is so cozy.", translation: "这个房间很舒适。", homophoneSentence: "泽斯鲁姆伊兹索科齐." },
        { word: "Content", phonetic: "/kənˈtent/", homophone: "康滕特", meaning: "满足的", sentence: "I'm content with my life.", translation: "我对我的生活感到满足。", homophoneSentence: "爱姆康滕特威兹麦莱夫." },
        { word: "Satisfied", phonetic: "/ˈsætɪsfaɪd/", homophone: "萨蒂斯法伊德", meaning: "满意的", sentence: "Are you satisfied?", translation: "你满意吗？", homophoneSentence: "啊油萨蒂斯法伊德?" }
    ],
    numbers: [
        { word: "Eleventh", phonetic: "/ɪˈlevnθ/", homophone: "伊莱文斯", meaning: "第十一", sentence: "It's the eleventh hour.", translation: "这是最后时刻。", homophoneSentence: "伊茨泽伊莱文斯阿沃尔." },
        { word: "Twelfth", phonetic: "/twelfθ/", homophone: "特韦尔夫斯", meaning: "第十二", sentence: "December is the twelfth month.", translation: "十二月是第十二个月。", homophoneSentence: "迪森伯伊兹泽特韦尔夫斯曼斯." },
        { word: "Thirteenth", phonetic: "/ˌθɜːˈtiːnθ/", homophone: "瑟廷斯", meaning: "第十三", sentence: "Friday the thirteenth.", translation: "十三号星期五。", homophoneSentence: "弗莱迪泽瑟廷斯." },
        { word: "Twentieth", phonetic: "/ˈtwentiəθ/", homophone: "滕蒂厄斯", meaning: "第二十", sentence: "It's my twentieth birthday.", translation: "这是我二十岁生日。", homophoneSentence: "伊茨麦滕蒂厄斯伯斯戴." },
        { word: "Thirtieth", phonetic: "/ˈθɜːtiəθ/", homophone: "瑟蒂厄斯", meaning: "第三十", sentence: "Today is the thirtieth.", translation: "今天是三十号。", homophoneSentence: "特戴伊兹泽瑟蒂厄斯." },
        { word: "Fortieth", phonetic: "/ˈfɔːtiəθ/", homophone: "福蒂厄斯", meaning: "第四十", sentence: "It's our fortieth anniversary.", translation: "这是我们四十周年纪念日。", homophoneSentence: "伊茨奥尔福蒂厄斯阿尼弗萨里." },
        { word: "Fiftieth", phonetic: "/ˈfɪftiəθ/", homophone: "菲夫蒂厄斯", meaning: "第五十", sentence: "It's the fiftieth state.", translation: "这是第五十个州。", homophoneSentence: "伊茨泽菲夫蒂厄斯斯泰特." },
        { word: "Sixtieth", phonetic: "/ˈsɪkstiəθ/", homophone: "西克斯蒂厄斯", meaning: "第六十", sentence: "He celebrated his sixtieth.", translation: "他庆祝了他的六十岁生日。", homophoneSentence: "希塞勒布雷蒂德希兹西克斯蒂厄斯." },
        { word: "Seventieth", phonetic: "/ˈsevntiəθ/", homophone: "塞文蒂厄斯", meaning: "第七十", sentence: "It's her seventieth birthday.", translation: "这是她七十岁生日。", homophoneSentence: "伊茨赫塞文蒂厄斯伯斯戴." },
        { word: "Eightieth", phonetic: "/ˈeɪtiəθ/", homophone: "埃蒂厄斯", meaning: "第八十", sentence: "He's in his eightieth year.", translation: "他八十岁了。", homophoneSentence: "希兹因希兹埃蒂厄斯耶尔." }
    ],
    colors: [
        { word: "Eggplant", phonetic: "/ˈeɡplɑːnt/", homophone: "埃格普兰特", meaning: "茄子紫", sentence: "Eggplant is a deep purple.", translation: "茄子紫是一种深紫色。", homophoneSentence: "埃格普兰特伊兹阿迪普珀普尔." },
        { word: "Grape", phonetic: "/ɡreɪp/", homophone: "格雷普", meaning: "葡萄色", sentence: "Grape purple is rich.", translation: "葡萄紫很浓郁。", homophoneSentence: "格雷普珀普尔伊兹里奇." },
        { word: "Raisin", phonetic: "/ˈreɪzn/", homophone: "雷津", meaning: "葡萄干色", sentence: "Raisin is a dark purple.", translation: "葡萄干色是一种深紫色。", homophoneSentence: "雷津伊兹阿达克珀普尔." },
        { word: "Mulberry", phonetic: "/ˈmʌlbəri/", homophone: "马尔贝里", meaning: "桑葚色", sentence: "Mulberry is a rich purple.", translation: "桑葚色是一种浓郁的紫色。", homophoneSentence: "马尔贝里伊兹阿里奇珀普尔." },
        { word: "Eggshell", phonetic: "/ˈeɡʃel/", homophone: "埃格谢尔", meaning: "蛋壳色", sentence: "Eggshell is a soft white.", translation: "蛋壳色是一种柔和的白色。", homophoneSentence: "埃格谢尔伊兹阿索夫特瓦伊特." },
        { word: "Alabaster", phonetic: "/ˈæləbɑːstə/", homophone: "阿拉巴斯特", meaning: "雪花石膏色", sentence: "Alabaster skin.", translation: "雪白的皮肤。", homophoneSentence: "阿拉巴斯特斯金." },
        { word: "Porcelain", phonetic: "/ˈpɔːsəlɪn/", homophone: "波瑟林", meaning: "瓷白色", sentence: "Porcelain white.", translation: "瓷白色。", homophoneSentence: "波瑟林瓦伊特." },
        { word: "Pearl", phonetic: "/pɜːl/", homophone: "珀尔", meaning: "珍珠色", sentence: "Pearl white is elegant.", translation: "珍珠白很优雅。", homophoneSentence: "珀尔瓦伊特伊兹埃勒甘特." },
        { word: "Off-white", phonetic: "/ˌɒf ˈwaɪt/", homophone: "奥夫瓦伊特", meaning: "米白色", sentence: "Off-white walls.", translation: "米白色的墙壁。", homophoneSentence: "奥夫瓦伊特沃尔兹." },
        { word: "Ecru", phonetic: "/ˈeɪkruː/", homophone: "埃克鲁", meaning: "淡褐色", sentence: "Ecru is a natural color.", translation: "淡褐色是一种自然色。", homophoneSentence: "埃克鲁伊兹阿纳彻拉尔卡勒." }
    ],
    family: [
        { word: "Tribe", phonetic: "/traɪb/", homophone: "特拉伊布", meaning: "部落", sentence: "The tribe gathered.", translation: "部落聚集在一起。", homophoneSentence: "泽特拉伊布盖泽德." },
        { word: "Dynasty", phonetic: "/ˈdɪnəsti/", homophone: "迪纳斯蒂", meaning: "王朝", sentence: "The dynasty lasted centuries.", translation: "王朝持续了几个世纪。", homophoneSentence: "泽迪纳斯蒂拉斯蒂德森丘里兹." },
        { word: "Household", phonetic: "/ˈhaʊshəʊld/", homophone: "霍斯霍尔德", meaning: "家庭", sentence: "The whole household gathered.", translation: "全家人聚集在一起。", homophoneSentence: "泽霍尔霍斯霍尔德盖泽德." },
        { word: "Family name", phonetic: "/ˈfæmɪli neɪm/", homophone: "法米利内姆", meaning: "姓氏", sentence: "What's your family name?", translation: "你姓什么？", homophoneSentence: "沃茨哟法米利内姆?" },
        { word: "Maiden name", phonetic: "/ˈmeɪdn neɪm/", homophone: "梅登内姆", meaning: "娘家姓", sentence: "What was her maiden name?", translation: "她娘家姓什么？", homophoneSentence: "沃特沃兹赫梅登内姆?" },
        { word: "Surname", phonetic: "/ˈsɜːneɪm/", homophone: "瑟内姆", meaning: "姓氏", sentence: "Smith is a common surname.", translation: "史密斯是一个常见的姓氏。", homophoneSentence: "史密斯伊兹阿科蒙瑟内姆." },
        { word: "Given name", phonetic: "/ˈɡɪvn neɪm/", homophone: "吉文内姆", meaning: "名字", sentence: "What's your given name?", translation: "你的名字是什么？", homophoneSentence: "沃茨哟吉文内姆?" },
        { word: "Nickname", phonetic: "/ˈnɪkneɪm/", homophone: "尼克内姆", meaning: "昵称", sentence: "What's your nickname?", translation: "你的昵称是什么？", homophoneSentence: "沃茨哟尼克内姆?" },
        { word: "Pet name", phonetic: "/pet neɪm/", homophone: "佩特内姆", meaning: "爱称", sentence: "He calls her by a pet name.", translation: "他用爱称叫她。", homophoneSentence: "希科尔兹赫拜阿佩特内姆." },
        { word: "Namesake", phonetic: "/ˈneɪmseɪk/", homophone: "内姆塞克", meaning: "同名者", sentence: "He is my namesake.", translation: "他和我的名字一样。", homophoneSentence: "希伊兹麦内姆塞克." }
    ],
    time: [
        { word: "Permanently", phonetic: "/ˈpɜːmənəntli/", homophone: "珀马嫩特利", meaning: "永久地", sentence: "He moved permanently.", translation: "他永久地搬走了。", homophoneSentence: "希穆夫德珀马嫩特利." },
        { word: "Forever", phonetic: "/fəˈrevə/", homophone: "福雷弗", meaning: "永远", sentence: "I'll love you forever.", translation: "我会永远爱你。", homophoneSentence: "爱尔拉夫油福雷弗." },
        { word: "Eternally", phonetic: "/ɪˈtɜːnəli/", homophone: "伊特纳利", meaning: "永恒地", sentence: "Eternally grateful.", translation: "永远感激。", homophoneSentence: "伊特纳利格雷特福尔." },
        { word: "Perpetually", phonetic: "/pəˈpetʃuəli/", homophone: "佩佩丘利", meaning: "永恒地", sentence: "The machine runs perpetually.", translation: "机器永恒地运转。", homophoneSentence: "泽马辛兰兹佩佩丘利." },
        { word: "Continuously", phonetic: "/kənˈtɪnjuəsli/", homophone: "康蒂纽厄斯利", meaning: "持续地", sentence: "It rained continuously.", translation: "雨持续地下。", homophoneSentence: "伊特雷恩德康蒂纽厄斯利." },
        { word: "Constantly", phonetic: "/ˈkɒnstəntli/", homophone: "康斯坦特利", meaning: "不断地", sentence: "She's constantly working.", translation: "她不断地工作。", homophoneSentence: "希兹康斯坦特利沃金." },
        { word: "Unceasingly", phonetic: "/ʌnˈsiːsɪŋli/", homophone: "安西辛利", meaning: "不停地", sentence: "They worked unceasingly.", translation: "他们不停地工作。", homophoneSentence: "泽伊沃克特安西辛利." },
        { word: "Intermittently", phonetic: "/ˌɪntəˈmɪtəntli/", homophone: "因特米滕特利", meaning: "间歇地", sentence: "It rained intermittently.", translation: "雨间歇地下。", homophoneSentence: "伊特雷恩德因特米滕特利." },
        { word: "Periodically", phonetic: "/ˌpɪəriˈɒdɪkli/", homophone: "皮里奥迪克利", meaning: "定期地", sentence: "Check it periodically.", translation: "定期检查。", homophoneSentence: "切克伊特皮里奥迪克利." },
        { word: "Occasionally", phonetic: "/əˈkeɪʒnəli/", homophone: "奥凯詹纳利", meaning: "偶尔", sentence: "I visit occasionally.", translation: "我偶尔去拜访。", homophoneSentence: "爱维齐特奥凯詹纳利." }
    ],
    food: [
        { word: "Pastry", phonetic: "/ˈpeɪstri/", homophone: "佩斯特里", meaning: "糕点", sentence: "Fresh pastry is delicious.", translation: "新鲜糕点很好吃。", homophoneSentence: "弗雷什佩斯特里伊兹迪利谢斯." },
        { word: "Croissant", phonetic: "/ˈkrwæsɒ̃/", homophone: "克瓦桑", meaning: "羊角面包", sentence: "I had a croissant for breakfast.", translation: "我早餐吃了羊角面包。", homophoneSentence: "爱哈德阿克瓦桑福布雷克法斯特." },
        { word: "Bagel", phonetic: "/ˈbeɪɡəl/", homophone: "贝格尔", meaning: "贝果", sentence: "I'll have a bagel.", translation: "我要一个贝果。", homophoneSentence: "爱尔哈夫阿贝格尔." },
        { word: "Muffin", phonetic: "/ˈmʌfɪn/", homophone: "马芬", meaning: "松饼", sentence: "Blueberry muffin, please.", translation: "请给我蓝莓松饼。", homophoneSentence: "布卢贝里马芬,普利斯." },
        { word: "Scone", phonetic: "/skɒn/", homophone: "斯康", meaning: "司康饼", sentence: "Tea and scones.", translation: "茶和司康饼。", homophoneSentence: "蒂安德斯康兹." },
        { word: "Donut", phonetic: "/ˈdəʊnʌt/", homophone: "多纳特", meaning: "甜甜圈", sentence: "I love glazed donuts.", translation: "我喜欢糖霜甜甜圈。", homophoneSentence: "爱拉夫格雷兹德多纳茨." },
        { word: "Pancake", phonetic: "/ˈpænkeɪk/", homophone: "潘凯克", meaning: "薄煎饼", sentence: "Pancakes for breakfast.", translation: "早餐吃薄煎饼。", homophoneSentence: "潘凯克斯福布雷克法斯特." },
        { word: "Waffle", phonetic: "/ˈwɒfl/", homophone: "沃弗尔", meaning: "华夫饼", sentence: "Belgian waffle with syrup.", translation: "比利时华夫饼配糖浆。", homophoneSentence: "贝尔詹沃弗尔威兹西鲁普." },
        { word: "Crepe", phonetic: "/kreɪp/", homophone: "克雷普", meaning: "可丽饼", sentence: "French crepes are thin.", translation: "法式可丽饼很薄。", homophoneSentence: "弗伦奇克雷普斯阿辛." },
        { word: "Tart", phonetic: "/tɑːt/", homophone: "塔特", meaning: "挞", sentence: "Apple tart is sweet.", translation: "苹果挞很甜。", homophoneSentence: "阿普尔塔特伊兹斯威特." }
    ],
    conversations: [
        { word: "What's your take on this", phonetic: "/wɒts jɔː teɪk ɒn ðɪs/", homophone: "沃茨哟泰克昂泽斯", meaning: "你怎么看这件事", sentence: "What's your take on this issue?", translation: "你怎么看这个问题？", homophoneSentence: "沃茨哟泰克昂泽斯伊舒?" },
        { word: "How do you feel about", phonetic: "/haʊ duː juː fiːl əˈbaʊt/", homophone: "好度油菲尔阿鲍特", meaning: "你对...感觉如何", sentence: "How do you feel about this?", translation: "你对此感觉如何？", homophoneSentence: "好度油菲尔阿鲍特泽斯?" },
        { word: "What are your thoughts", phonetic: "/wɒt ɑː jɔː θɔːts/", homophone: "沃特阿哟索茨", meaning: "你有什么想法", sentence: "What are your thoughts on this?", translation: "你对此有什么想法？", homophoneSentence: "沃特阿哟索茨昂泽斯?" },
        { word: "Do you have any ideas", phonetic: "/duː juː hæv ˈeni aɪˈdɪəz/", homophone: "度油哈夫艾尼艾迪亚兹", meaning: "你有什么想法吗", sentence: "Do you have any ideas?", translation: "你有什么想法吗？", homophoneSentence: "度油哈夫艾尼艾迪亚兹?" },
        { word: "Any suggestions", phonetic: "/ˈeni səˈdʒestʃənz/", homophone: "艾尼萨杰斯钦兹", meaning: "有什么建议吗", sentence: "Any suggestions for improvement?", translation: "有什么改进建议吗？", homophoneSentence: "艾尼萨杰斯钦兹福因普鲁夫门特?" },
        { word: "What would you recommend", phonetic: "/wɒt wʊd juː ˌrekəˈmend/", homophone: "沃特武德油雷科门德", meaning: "你会推荐什么", sentence: "What would you recommend?", translation: "你会推荐什么？", homophoneSentence: "沃特武德油雷科门德?" },
        { word: "What do you suggest", phonetic: "/wɒt duː juː səˈdʒest/", homophone: "沃特度油萨杰斯特", meaning: "你建议什么", sentence: "What do you suggest we do?", translation: "你建议我们怎么做？", homophoneSentence: "沃特度油萨杰斯特维杜?" },
        { word: "Do you have any advice", phonetic: "/duː juː hæv ˈeni ədˈvaɪs/", homophone: "度油哈夫艾尼阿德瓦伊斯", meaning: "你有什么建议吗", sentence: "Do you have any advice?", translation: "你有什么建议吗？", homophoneSentence: "度油哈夫艾尼阿德瓦伊斯?" },
        { word: "Can you give me some tips", phonetic: "/kæn juː ɡɪv miː sʌm tɪps/", homophone: "坎油吉夫米萨姆蒂普斯", meaning: "你能给我一些建议吗", sentence: "Can you give me some tips?", translation: "你能给我一些建议吗？", homophoneSentence: "坎油吉夫米萨姆蒂普斯?" },
        { word: "What's the best way to", phonetic: "/wɒts ðə best weɪ tuː/", homophone: "沃茨泽贝斯特韦图", meaning: "最好的方法是", sentence: "What's the best way to learn?", translation: "学习的最好方法是什么？", homophoneSentence: "沃茨泽贝斯特韦图勒恩?" }
    ],
    sentences: [
        { word: "You reap what you sow", phonetic: "/juː riːp wɒt juː səʊ/", homophone: "油里普沃特油索", meaning: "种瓜得瓜种豆得豆", sentence: "You reap what you sow.", translation: "种瓜得瓜，种豆得豆。", homophoneSentence: "油里普沃特油索." },
        { word: "Where there's smoke, there's fire", phonetic: "/weə ðeəz sməʊk ðeəz ˈfaɪə/", homophone: "韦尔泽尔兹斯莫克泽尔兹法伊厄", meaning: "无风不起浪", sentence: "Where there's smoke, there's fire.", translation: "无风不起浪。", homophoneSentence: "韦尔泽尔兹斯莫克泽尔兹法伊厄." },
        { word: "When the going gets tough, the tough get going", phonetic: "/wen ðə ˈɡəʊɪŋ ɡets tʌf ðə tʌf ɡet ˈɡəʊɪŋ/", homophone: "温泽戈英盖茨塔夫泽塔夫盖特戈英", meaning: "艰难困苦玉汝于成", sentence: "When the going gets tough, the tough get going.", translation: "艰难困苦，玉汝于成。", homophoneSentence: "温泽戈英盖茨塔夫泽塔夫盖特戈英." },
        { word: "Where there's a will, there's a way", phonetic: "/weə ðeəz ə wɪl ðeəz ə weɪ/", homophone: "韦尔泽尔兹阿威尔泽尔兹阿韦", meaning: "有志者事竟成", sentence: "Where there's a will, there's a way.", translation: "有志者事竟成。", homophoneSentence: "韦尔泽尔兹阿威尔泽尔兹阿韦." },
        { word: "Two wrongs don't make a right", phonetic: "/tuː rɒŋz dəʊnt meɪk ə raɪt/", homophone: "图朗兹东特梅克阿赖特", meaning: "以牙还牙不对", sentence: "Two wrongs don't make a right.", translation: "以牙还牙不对。", homophoneSentence: "图朗兹东特梅克阿赖特." },
        { word: "The squeaky wheel gets the grease", phonetic: "/ðə ˈskwiːki wiːl ɡets ðə ɡriːs/", homophone: "泽斯奎基威尔盖茨泽格里斯", meaning: "会哭的孩子有奶吃", sentence: "The squeaky wheel gets the grease.", translation: "会哭的孩子有奶吃。", homophoneSentence: "泽斯奎基威尔盖茨泽格里斯." },
        { word: "There's no time like the present", phonetic: "/ðeəz nəʊ taɪm laɪk ðə ˈpreznt/", homophone: "泽尔兹诺泰姆莱克泽普雷曾特", meaning: "机不可失", sentence: "There's no time like the present.", translation: "机不可失。", homophoneSentence: "泽尔兹诺泰姆莱克泽普雷曾特." },
        { word: "Too many cooks spoil the broth", phonetic: "/tuː ˈmeni kʊks spɔɪl ðə brɒθ/", homophone: "图梅尼库克斯斯波伊尔泽布罗思", meaning: "人多手杂", sentence: "Too many cooks spoil the broth.", translation: "人多手杂。", homophoneSentence: "图梅尼库克斯斯波伊尔泽布罗思." },
        { word: "Variety is the spice of life", phonetic: "/vəˈraɪəti ɪz ðə spaɪs əv laɪf/", homophone: "韦拉伊埃蒂伊兹泽斯派斯阿夫莱夫", meaning: "变化是生活的调味品", sentence: "Variety is the spice of life.", translation: "变化是生活的调味品。", homophoneSentence: "韦拉伊埃蒂伊兹泽斯派斯阿夫莱夫." },
        { word: "What goes around comes around", phonetic: "/wɒt ɡəʊz əˈraʊnd kʌmz əˈraʊnd/", homophone: "沃特戈兹阿劳恩德卡姆兹阿劳恩德", meaning: "善有善报恶有恶报", sentence: "What goes around comes around.", translation: "善有善报，恶有恶报。", homophoneSentence: "沃特戈兹阿劳恩德卡姆兹阿劳恩德." }
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
