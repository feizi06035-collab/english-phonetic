const wordDatabase = {
    "greetings": [
        {
            "word": "Cheers",
            "phonetic": "/tʃɪəz/",
            "homophone": "起尔斯",
            "meaning": "干杯",
            "sentence": "Cheers to our friendship!",
            "translation": "为我们的友谊干杯！",
            "homophoneSentence": "起尔斯吐奥儿夫瑞恩德西普!"
        },
        {
            "word": "Salute",
            "phonetic": "/səˈluːt/",
            "homophone": "萨鲁特",
            "meaning": "敬礼",
            "sentence": "Salute to heroes!",
            "translation": "向英雄们敬礼！",
            "homophoneSentence": "萨鲁特吐德希柔兹!"
        },
        {
            "word": "Hola",
            "phonetic": "/ˈhəʊlə/",
            "homophone": "奥拉",
            "meaning": "你好",
            "sentence": "Hola, como estas?",
            "translation": "你好，你怎么样？",
            "homophoneSentence": "奥拉,扣莫埃斯塔斯?"
        },
        {
            "word": "Ciao",
            "phonetic": "/tʃaʊ/",
            "homophone": "乔",
            "meaning": "你好",
            "sentence": "Ciao, my friend!",
            "translation": "你好，我的朋友！",
            "homophoneSentence": "乔麦夫瑞恩德!"
        },
        {
            "word": "Konichiwa",
            "phonetic": "/ˌkɒnɪˈtʃiːwə/",
            "homophone": "扣尼奇瓦",
            "meaning": "你好",
            "sentence": "Konichiwa, how are you?",
            "translation": "你好，你好吗？",
            "homophoneSentence": "扣尼奇瓦好啊油?"
        },
        {
            "word": "Merhaba",
            "phonetic": "/merˈhaba/",
            "homophone": "梅尔哈巴",
            "meaning": "你好",
            "sentence": "Merhaba, welcome!",
            "translation": "你好，欢迎！",
            "homophoneSentence": "梅尔哈巴威尔康!"
        },
        {
            "word": "Bonjour",
            "phonetic": "/ˈbɒnʒʊə/",
            "homophone": "邦儒",
            "meaning": "你好",
            "sentence": "Bonjour, monsieur!",
            "translation": "你好，先生！",
            "homophoneSentence": "邦儒蒙修!"
        },
        {
            "word": "Guten Morgen",
            "phonetic": "/ˈɡuːtn ˈmɔːrɡən/",
            "homophone": "古腾莫根",
            "meaning": "早上好",
            "sentence": "Guten Morgen, wie gehts?",
            "translation": "早上好，你好吗？",
            "homophoneSentence": "古腾莫根维格茨?"
        },
        {
            "word": "Buongiorno",
            "phonetic": "/ˌbwɒnˈdʒɔːnəʊ/",
            "homophone": "布翁焦诺",
            "meaning": "早上好",
            "sentence": "Buongiorno, signore!",
            "translation": "早上好，先生！",
            "homophoneSentence": "布翁焦诺西尼奥雷!"
        },
        {
            "word": "God morgon",
            "phonetic": "/ɡɒd ˈmɔːɡən/",
            "homophone": "高德莫根",
            "meaning": "早上好",
            "sentence": "God morgon, hur mar du?",
            "translation": "早上好，你好吗？",
            "homophoneSentence": "高德莫根胡尔莫尔杜?"
        },
        {
            "word": "Buenos dias",
            "phonetic": "/ˈbwenəs ˈdiːəs/",
            "homophone": "布埃诺斯迪亚斯",
            "meaning": "早上好",
            "sentence": "Buenos dias, senor!",
            "translation": "早上好，先生！",
            "homophoneSentence": "布埃诺斯迪亚斯塞尼奥尔!"
        },
        {
            "word": "Good day",
            "phonetic": "/ɡʊd deɪ/",
            "homophone": "古德戴",
            "meaning": "日安",
            "sentence": "Good day to you!",
            "translation": "日安！",
            "homophoneSentence": "古德戴吐油!"
        },
        {
            "word": "Good afternoon",
            "phonetic": "/ɡʊd ˌɑːftəˈnuːn/",
            "homophone": "古德阿夫特努恩",
            "meaning": "下午好",
            "sentence": "Good afternoon, everyone!",
            "translation": "大家下午好！",
            "homophoneSentence": "古德阿夫特努恩艾瑞碗!"
        },
        {
            "word": "Good evening",
            "phonetic": "/ɡʊd ˈiːvnɪŋ/",
            "homophone": "古德伊夫宁",
            "meaning": "晚上好",
            "sentence": "Good evening, ladies and gentlemen!",
            "translation": "女士们先生们晚上好！",
            "homophoneSentence": "古德伊夫宁蕾迪斯安德詹特门!"
        },
        {
            "word": "Good night",
            "phonetic": "/ɡʊd naɪt/",
            "homophone": "古德奈特",
            "meaning": "晚安",
            "sentence": "Good night, sleep tight!",
            "translation": "晚安，睡个好觉！",
            "homophoneSentence": "古德奈特斯利普泰特!"
        },
        {
            "word": "Sweet dreams",
            "phonetic": "/swiːt driːmz/",
            "homophone": "斯威特底梦兹",
            "meaning": "做个好梦",
            "sentence": "Sweet dreams!",
            "translation": "做个好梦！",
            "homophoneSentence": "斯威特底梦兹!"
        },
        {
            "word": "Sleep well",
            "phonetic": "/sliːp wel/",
            "homophone": "斯利普威尔",
            "meaning": "睡好",
            "sentence": "Sleep well!",
            "translation": "睡好！",
            "homophoneSentence": "斯利普威尔!"
        },
        {
            "word": "Have a good one",
            "phonetic": "/hæv ə ɡʊd wʌn/",
            "homophone": "海夫啊古德万",
            "meaning": "祝你愉快",
            "sentence": "Have a good one!",
            "translation": "祝你愉快！",
            "homophoneSentence": "海夫啊古德万!"
        },
        {
            "word": "Take care",
            "phonetic": "/teɪk keə(r)/",
            "homophone": "忒克凯尔",
            "meaning": "保重",
            "sentence": "Take care!",
            "translation": "保重！",
            "homophoneSentence": "忒克凯尔!"
        },
        {
            "word": "See you later",
            "phonetic": "/siː juː ˈleɪtə(r)/",
            "homophone": "西优雷特",
            "meaning": "回头见",
            "sentence": "See you later!",
            "translation": "回头见！",
            "homophoneSentence": "西优雷特!"
        },
        {
            "word": "See you soon",
            "phonetic": "/siː juː suːn/",
            "homophone": "西优苏恩",
            "meaning": "很快见",
            "sentence": "See you soon!",
            "translation": "很快见！",
            "homophoneSentence": "西优苏恩!"
        },
        {
            "word": "Until next time",
            "phonetic": "/ənˈtɪl nekst taɪm/",
            "homophone": "安提尔耐克斯特泰姆",
            "meaning": "下次见",
            "sentence": "Until next time!",
            "translation": "下次见！",
            "homophoneSentence": "安提尔耐克斯特泰姆!"
        },
        {
            "word": "Catch you later",
            "phonetic": "/kætʃ juː ˈleɪtə(r)/",
            "homophone": "凯奇优雷特",
            "meaning": "回头见",
            "sentence": "Catch you later!",
            "translation": "回头见！",
            "homophoneSentence": "凯奇优雷特!"
        },
        {
            "word": "Farewell",
            "phonetic": "/ˌfeəˈwel/",
            "homophone": "夫尔威尔",
            "meaning": "告别",
            "sentence": "Farewell, my friend!",
            "translation": "再见，我的朋友！",
            "homophoneSentence": "夫尔威尔麦夫瑞恩德!"
        },
        {
            "word": "Adieu",
            "phonetic": "/əˈdjuː/",
            "homophone": "阿迪欧",
            "meaning": "再见",
            "sentence": "Adieu, my love!",
            "translation": "再见，我的爱人！",
            "homophoneSentence": "阿迪欧麦拉夫!"
        }
    ],
    "emotions": [
        {
            "word": "Ecstatic",
            "phonetic": "/ɪkˈstætɪk/",
            "homophone": "伊克斯塔蒂克",
            "meaning": "狂喜的",
            "sentence": "Im ecstatic about the news!",
            "translation": "我对这个消息感到狂喜！",
            "homophoneSentence": "爱姆伊克斯塔蒂克阿鲍特德纽兹!"
        },
        {
            "word": "Euphoric",
            "phonetic": "/juːˈfɒrɪk/",
            "homophone": "优福利克",
            "meaning": "欣快的",
            "sentence": "She felt euphoric after winning.",
            "translation": "她获胜后感到欣快。",
            "homophoneSentence": "希费尔特优福利克阿夫特温宁."
        },
        {
            "word": "Overjoyed",
            "phonetic": "/ˌəʊvəˈdʒɔɪd/",
            "homophone": "欧沃焦伊德",
            "meaning": "欣喜若狂的",
            "sentence": "He was overjoyed to see her.",
            "translation": "他见到她欣喜若狂。",
            "homophoneSentence": "黑沃兹欧沃焦伊德吐西赫."
        },
        {
            "word": "Elated",
            "phonetic": "/ɪˈleɪtɪd/",
            "homophone": "伊莱蒂德",
            "meaning": "兴高采烈的",
            "sentence": "They were elated by the success.",
            "translation": "他们因成功而兴高采烈。",
            "homophoneSentence": "德伊沃兹伊莱蒂德拜德萨克塞斯."
        },
        {
            "word": "Thrilled",
            "phonetic": "/θrɪld/",
            "homophone": "思瑞尔德",
            "meaning": "激动的",
            "sentence": "Im thrilled to meet you!",
            "translation": "见到你我很激动！",
            "homophoneSentence": "爱姆思瑞尔德吐米特油!"
        },
        {
            "word": "Delighted",
            "phonetic": "/dɪˈlaɪtɪd/",
            "homophone": "迪莱蒂德",
            "meaning": "高兴的",
            "sentence": "She was delighted with the gift.",
            "translation": "她对礼物感到高兴。",
            "homophoneSentence": "希沃兹迪莱蒂德威兹德吉夫特."
        },
        {
            "word": "Happy",
            "phonetic": "/ˈhæpi/",
            "homophone": "嗨皮",
            "meaning": "快乐的",
            "sentence": "Im happy today!",
            "translation": "我今天很快乐！",
            "homophoneSentence": "爱姆嗨皮特戴!"
        },
        {
            "word": "Joyful",
            "phonetic": "/ˈdʒɔɪfl/",
            "homophone": "焦伊夫",
            "meaning": "快乐的",
            "sentence": "They sang joyful songs.",
            "translation": "他们唱着快乐的歌。",
            "homophoneSentence": "德伊桑格焦伊夫宋兹."
        },
        {
            "word": "Content",
            "phonetic": "/kənˈtent/",
            "homophone": "肯腾特",
            "meaning": "满足的",
            "sentence": "She felt content with her life.",
            "translation": "她对自己的生活感到满足。",
            "homophoneSentence": "希费尔特肯腾特威兹赫莱尔夫."
        },
        {
            "word": "Satisfied",
            "phonetic": "/ˈsætɪsfaɪd/",
            "homophone": "萨特isfai德",
            "meaning": "满意的",
            "sentence": "Im satisfied with the result.",
            "translation": "我对结果感到满意。",
            "homophoneSentence": "爱姆萨特isfai德威兹德瑞扎尔特."
        },
        {
            "word": "Grateful",
            "phonetic": "/ˈɡreɪtfl/",
            "homophone": "格瑞特夫",
            "meaning": "感激的",
            "sentence": "Im grateful for your help.",
            "translation": "我对你的帮助感到感激。",
            "homophoneSentence": "爱姆格瑞特夫佛油儿海尔普."
        },
        {
            "word": "Thankful",
            "phonetic": "/ˈθæŋkfl/",
            "homophone": "桑克夫",
            "meaning": "感恩的",
            "sentence": "Im thankful for my family.",
            "translation": "我对我的家人感到感恩。",
            "homophoneSentence": "爱姆桑克夫佛麦凡米利."
        },
        {
            "word": "Appreciative",
            "phonetic": "/əˈpriːʃətɪv/",
            "homophone": "阿普瑞西提夫",
            "meaning": "感激的",
            "sentence": "She was appreciative of the gesture.",
            "translation": "她对这个 gesture 感到感激。",
            "homophoneSentence": "希沃兹阿普瑞西提夫奥夫德杰斯特."
        },
        {
            "word": "Relieved",
            "phonetic": "/rɪˈliːvd/",
            "homophone": "瑞利夫德",
            "meaning": "宽慰的",
            "sentence": "I was relieved to hear the news.",
            "translation": "听到这个消息我感到宽慰。",
            "homophoneSentence": "爱沃兹瑞利夫德吐希尔德纽兹."
        },
        {
            "word": "Calm",
            "phonetic": "/kɑːm/",
            "homophone": "卡姆",
            "meaning": "平静的",
            "sentence": "She remained calm under pressure.",
            "translation": "她在压力下保持平静。",
            "homophoneSentence": "希瑞梅恩德卡姆安德普雷舍."
        },
        {
            "word": "Serene",
            "phonetic": "/səˈriːn/",
            "homophone": "塞瑞恩",
            "meaning": "宁静的",
            "sentence": "The lake was serene at dawn.",
            "translation": "黎明时湖面很宁静。",
            "homophoneSentence": "德雷克沃兹塞瑞恩艾特当."
        },
        {
            "word": "Peaceful",
            "phonetic": "/ˈpiːsfl/",
            "homophone": "皮斯夫",
            "meaning": "平静的",
            "sentence": "The garden was peaceful.",
            "translation": "花园很平静。",
            "homophoneSentence": "德加登沃兹皮斯夫."
        },
        {
            "word": "Tranquil",
            "phonetic": "/ˈtræŋkwɪl/",
            "homophone": "传奎尔",
            "meaning": "宁静的",
            "sentence": "The forest was tranquil.",
            "translation": "森林很宁静。",
            "homophoneSentence": "德福瑞斯特沃兹传奎尔."
        },
        {
            "word": "Melancholy",
            "phonetic": "/ˈmelənkəli/",
            "homophone": "梅朗考利",
            "meaning": "忧郁的",
            "sentence": "He felt a touch of melancholy.",
            "translation": "他感到一丝忧郁。",
            "homophoneSentence": "黑费尔特阿塔奇奥夫梅朗考利."
        },
        {
            "word": "Sad",
            "phonetic": "/sæd/",
            "homophone": "萨德",
            "meaning": "悲伤的",
            "sentence": "Im sad to hear that.",
            "translation": "听到那个我很悲伤。",
            "homophoneSentence": "爱姆萨德吐希尔德扎特."
        },
        {
            "word": "Upset",
            "phonetic": "/ʌpˈset/",
            "homophone": "阿普赛特",
            "meaning": "难过的",
            "sentence": "She was upset about the mistake.",
            "translation": "她对这个错误感到难过。",
            "homophoneSentence": "希沃兹阿普赛特阿鲍特德米斯泰克."
        },
        {
            "word": "Disappointed",
            "phonetic": "/ˌdɪsəˈpɔɪntɪd/",
            "homophone": "迪斯阿坡因蒂德",
            "meaning": "失望的",
            "sentence": "I was disappointed with the result.",
            "translation": "我对结果感到失望。",
            "homophoneSentence": "爱沃兹迪斯阿坡因蒂德威兹德瑞扎尔特."
        },
        {
            "word": "Heartbroken",
            "phonetic": "/ˈhɑːtbrəʊkən/",
            "homophone": "哈特布罗肯",
            "meaning": "心碎的",
            "sentence": "She was heartbroken by the news.",
            "translation": "她因这个消息而心碎。",
            "homophoneSentence": "希沃兹哈特布罗肯拜德纽兹."
        },
        {
            "word": "Depressed",
            "phonetic": "/dɪˈprest/",
            "homophone": "迪普瑞斯特",
            "meaning": "沮丧的",
            "sentence": "He felt depressed after the loss.",
            "translation": "他在失败后感到沮丧。",
            "homophoneSentence": "黑费尔特迪普瑞斯特阿夫特德洛斯."
        },
        {
            "word": "Anxious",
            "phonetic": "/ˈæŋkʃəs/",
            "homophone": "安克休斯",
            "meaning": "焦虑的",
            "sentence": "Im anxious about the exam.",
            "translation": "我对考试感到焦虑。",
            "homophoneSentence": "爱姆安克休斯阿鲍特德伊克zam."
        }
    ],
    "numbers": [],
    "colors": [],
    "family": [],
    "time": [],
    "food": [],
    "sentences": []
};