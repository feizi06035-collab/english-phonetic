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
        { word: "After you", phonetic: "/ˈɑːftə juː/", homophone: "阿夫特油", meaning: "您先请", sentence: "After you, please.", translation: "您先请。", homophoneSentence: "阿夫特油,普利斯." },
        { word: "Age before beauty", phonetic: "/eɪdʒ bɪˈfɔː ˈbjuːti/", homophone: "埃奇比福比尤蒂", meaning: "长者优先", sentence: "Age before beauty!", translation: "长者优先！", homophoneSentence: "埃奇比福比尤蒂!" },
        { word: "Allow me", phonetic: "/əˈlaʊ miː/", homophone: "阿劳米", meaning: "让我来", sentence: "Allow me to help.", translation: "让我来帮忙。", homophoneSentence: "阿劳米图海尔普." },
        { word: "Be my guest", phonetic: "/biː maɪ ɡest/", homophone: "比麦盖斯特", meaning: "请便", sentence: "Be my guest!", translation: "请便！", homophoneSentence: "比麦盖斯特!" },
        { word: "By all means", phonetic: "/baɪ ɔːl miːnz/", homophone: "拜奥尔米恩兹", meaning: "当然可以", sentence: "By all means!", translation: "当然可以！", homophoneSentence: "拜奥尔米恩兹!" },
        { word: "Certainly", phonetic: "/ˈsɜːtnli/", homophone: "瑟滕利", meaning: "当然", sentence: "Certainly, sir.", translation: "当然，先生。", homophoneSentence: "瑟滕利,瑟." },
        { word: "With pleasure", phonetic: "/wɪð ˈpleʒə/", homophone: "威兹普莱热", meaning: "很乐意", sentence: "With pleasure!", translation: "很乐意！", homophoneSentence: "威兹普莱热!" },
        { word: "My pleasure", phonetic: "/maɪ ˈpleʒə/", homophone: "麦普莱热", meaning: "我的荣幸", sentence: "My pleasure!", translation: "我的荣幸！", homophoneSentence: "麦普莱热!" },
        { word: "Anytime", phonetic: "/ˈenitaɪm/", homophone: "艾尼泰姆", meaning: "随时", sentence: "Anytime!", translation: "随时！", homophoneSentence: "艾尼泰姆!" },
        { word: "Glad to help", phonetic: "/ɡlæd tuː help/", homophone: "格拉德图海尔普", meaning: "乐意效劳", sentence: "Glad to help!", translation: "乐意效劳！", homophoneSentence: "格拉德图海尔普!" }
    ],
    emotions: [
        { word: "Overwhelmed", phonetic: "/ˌəʊvəˈwelmd/", homophone: "欧沃韦尔姆德", meaning: "不知所措的", sentence: "I feel overwhelmed.", translation: "我感到不知所措。", homophoneSentence: "爱菲尔欧沃韦尔姆德." },
        { word: "Exhausted", phonetic: "/ɪɡˈzɔːstɪd/", homophone: "伊格佐斯特德", meaning: "筋疲力尽的", sentence: "I'm exhausted.", translation: "我筋疲力尽。", homophoneSentence: "爱姆伊格佐斯特德." },
        { word: "Drained", phonetic: "/dreɪnd/", homophone: "德雷恩德", meaning: "精疲力竭的", sentence: "I feel drained.", translation: "我感到精疲力竭。", homophoneSentence: "爱菲尔德雷恩德." },
        { word: "Worn out", phonetic: "/wɔːn aʊt/", homophone: "沃恩奥特", meaning: "疲惫不堪的", sentence: "I'm worn out.", translation: "我疲惫不堪。", homophoneSentence: "爱姆沃恩奥特." },
        { word: "Beat", phonetic: "/biːt/", homophone: "比特", meaning: "累坏了", sentence: "I'm beat!", translation: "我累坏了！", homophoneSentence: "爱姆比特!" },
        { word: "Pooped", phonetic: "/puːpt/", homophone: "普普特", meaning: "累坏了", sentence: "I'm pooped!", translation: "我累坏了！", homophoneSentence: "爱姆普普特!" },
        { word: "Spent", phonetic: "/spent/", homophone: "斯彭特", meaning: "精疲力尽的", sentence: "I'm spent.", translation: "我精疲力尽。", homophoneSentence: "爱姆斯彭特." },
        { word: "Frazzled", phonetic: "/ˈfræzld/", homophone: "弗雷兹尔德", meaning: "疲惫不堪的", sentence: "I'm frazzled.", translation: "我疲惫不堪。", homophoneSentence: "爱姆弗雷兹尔德." },
        { word: "Run down", phonetic: "/rʌn daʊn/", homophone: "兰道恩", meaning: "疲惫的", sentence: "I feel run down.", translation: "我感到疲惫。", homophoneSentence: "爱菲尔兰道恩." },
        { word: "Burned out", phonetic: "/bɜːnd aʊt/", homophone: "伯恩德奥特", meaning: "倦怠的", sentence: "I'm burned out.", translation: "我倦怠了。", homophoneSentence: "爱姆伯恩德奥特." }
    ],
    numbers: [
        { word: "Million", phonetic: "/ˈmɪljən/", homophone: "米尔恩", meaning: "百万", sentence: "A million dollars.", translation: "一百万美元。", homophoneSentence: "阿米尔恩多拉兹." },
        { word: "Billion", phonetic: "/ˈbɪljən/", homophone: "比尔恩", meaning: "十亿", sentence: "A billion people.", translation: "十亿人。", homophoneSentence: "阿比尔恩皮普尔." },
        { word: "Trillion", phonetic: "/ˈtrɪljən/", homophone: "特里尔恩", meaning: "万亿", sentence: "A trillion stars.", translation: "万亿颗星星。", homophoneSentence: "阿特里尔恩斯塔兹." },
        { word: "Quadrillion", phonetic: "/kwɒˈdrɪljən/", homophone: "夸德里尔恩", meaning: "千万亿", sentence: "A quadrillion bytes.", translation: "千万亿字节。", homophoneSentence: "阿夸德里尔恩拜茨." },
        { word: "Quintillion", phonetic: "/kwɪnˈtɪljən/", homophone: "昆蒂尔恩", meaning: "百京", sentence: "A quintillion atoms.", translation: "百京个原子。", homophoneSentence: "阿昆蒂尔恩阿托姆兹." },
        { word: "Sextillion", phonetic: "/sekˈstɪljən/", homophone: "塞克斯蒂尔恩", meaning: "十垓", sentence: "A sextillion grains.", translation: "十垓粒。", homophoneSentence: "阿塞克斯蒂尔恩格雷恩兹." },
        { word: "Septillion", phonetic: "/sepˈtɪljən/", homophone: "塞普蒂尔恩", meaning: "秭", sentence: "A septillion cells.", translation: "秭个细胞。", homophoneSentence: "阿塞普蒂尔恩塞尔兹." },
        { word: "Octillion", phonetic: "/ɒkˈtɪljən/", homophone: "奥克蒂尔恩", meaning: "千秭", sentence: "An octillion bits.", translation: "千秭比特。", homophoneSentence: "安奥克蒂尔恩比茨." },
        { word: "Nonillion", phonetic: "/nəʊˈnɪljən/", homophone: "诺尼尔恩", meaning: "百穰", sentence: "A nonillion bytes.", translation: "百穰字节。", homophoneSentence: "阿诺尼尔恩拜茨." },
        { word: "Decillion", phonetic: "/dɪˈsɪljən/", homophone: "迪西尔恩", meaning: "沟", sentence: "A decillion particles.", translation: "沟个粒子。", homophoneSentence: "阿迪西尔恩帕蒂克尔兹." }
    ],
    colors: [
        { word: "Teal", phonetic: "/tiːl/", homophone: "蒂尔", meaning: "蓝绿色", sentence: "Teal is calming.", translation: "蓝绿色很平静。", homophoneSentence: "蒂尔伊兹卡明." },
        { word: "Turquoise", phonetic: "/ˈtɜːkwɔɪz/", homophone: "特科伊兹", meaning: "绿松石色", sentence: "Turquoise is beautiful.", translation: "绿松石色很美。", homophoneSentence: "特科伊兹伊兹比尤蒂富尔." },
        { word: "Aquamarine", phonetic: "/ˌækwəməˈriːn/", homophone: "阿夸马林", meaning: "海蓝宝石色", sentence: "Aquamarine is lovely.", translation: "海蓝宝石色很可爱。", homophoneSentence: "阿夸马林伊兹拉夫利." },
        { word: "Periwinkle", phonetic: "/ˈperɪwɪŋkl/", homophone: "佩里温克尔", meaning: "长春花蓝", sentence: "Periwinkle is soft.", translation: "长春花蓝很柔和。", homophoneSentence: "佩里温克尔伊兹索夫特." },
        { word: "Lavender", phonetic: "/ˈlævəndə/", homophone: "拉文德", meaning: "薰衣草紫", sentence: "Lavender is relaxing.", translation: "薰衣草紫很放松。", homophoneSentence: "拉文德伊兹里拉克辛." },
        { word: "Lilac", phonetic: "/ˈlaɪlək/", homophone: "莱拉克", meaning: "丁香紫", sentence: "Lilac is gentle.", translation: "丁香紫很温柔。", homophoneSentence: "莱拉克伊兹詹特尔." },
        { word: "Orchid", phonetic: "/ˈɔːkɪd/", homophone: "奥基德", meaning: "兰花紫", sentence: "Orchid is elegant.", translation: "兰花紫很优雅。", homophoneSentence: "奥基德伊兹埃勒根特." },
        { word: "Magenta", phonetic: "/məˈdʒentə/", homophone: "马真塔", meaning: "洋红色", sentence: "Magenta is vibrant.", translation: "洋红色很鲜艳。", homophoneSentence: "马真塔伊兹维布兰特." },
        { word: "Fuchsia", phonetic: "/ˈfjuːʃə/", homophone: "菲尤沙", meaning: "紫红色", sentence: "Fuchsia is bold.", translation: "紫红色很大胆。", homophoneSentence: "菲尤沙伊兹博尔德." },
        { word: "Plum", phonetic: "/plʌm/", homophone: "普拉姆", meaning: "梅红色", sentence: "Plum is rich.", translation: "梅红色很浓郁。", homophoneSentence: "普拉姆伊兹里奇." }
    ],
    family: [
        { word: "Great-grandfather", phonetic: "/ɡreɪt ˈɡrænfɑːðə/", homophone: "格雷特格兰法泽", meaning: "曾祖父", sentence: "My great-grandfather lived to 100.", translation: "我的曾祖父活到了100岁。", homophoneSentence: "麦格雷特格兰法泽利夫德图万." },
        { word: "Great-grandmother", phonetic: "/ɡreɪt ˈɡrænmʌðə/", homophone: "格雷特格兰马泽", meaning: "曾祖母", sentence: "My great-grandmother was kind.", translation: "我的曾祖母很和蔼。", homophoneSentence: "麦格雷特格兰马泽沃兹凯恩德." },
        { word: "Great-uncle", phonetic: "/ɡreɪt ˈʌŋkl/", homophone: "格雷特安克尔", meaning: "叔公/伯公", sentence: "My great-uncle is wise.", translation: "我的叔公很睿智。", homophoneSentence: "麦格雷特安克尔伊兹瓦伊斯." },
        { word: "Great-aunt", phonetic: "/ɡreɪt ɑːnt/", homophone: "格雷特安特", meaning: "叔婆/伯婆", sentence: "My great-aunt is sweet.", translation: "我的伯婆很甜美。", homophoneSentence: "麦格雷特安特伊兹斯威特." },
        { word: "Grandnephew", phonetic: "/ˈɡrænnefjuː/", homophone: "格兰纽弗尤", meaning: "侄孙", sentence: "My grandnephew is adorable.", translation: "我的侄孙很可爱。", homophoneSentence: "麦格兰纽弗尤伊兹阿多拉布尔." },
        { word: "Grandniece", phonetic: "/ˈɡrænniːs/", homophone: "格兰尼斯", meaning: "侄孙女", sentence: "My grandniece is cute.", translation: "我的侄孙女很可爱。", homophoneSentence: "麦格兰尼斯伊兹克尤特." },
        { word: "First cousin", phonetic: "/fɜːst ˈkʌzn/", homophone: "弗斯特卡曾", meaning: "亲堂/表兄弟姐妹", sentence: "My first cousin visits often.", translation: "我的表亲经常来访。", homophoneSentence: "麦弗斯特卡曾维齐茨奥芬." },
        { word: "Second cousin", phonetic: "/ˈsekənd ˈkʌzn/", homophone: "塞肯德卡曾", meaning: "远房堂/表兄弟姐妹", sentence: "My second cousin lives far.", translation: "我的远房表亲住得很远。", homophoneSentence: "麦塞肯德卡曾利夫兹法." },
        { word: "Cousin once removed", phonetic: "/ˈkʌzn wʌns rɪˈmuːvd/", homophone: "卡曾万斯里穆夫德", meaning: "隔一代的堂/表亲", sentence: "My cousin once removed is older.", translation: "我的隔代表亲年纪更大。", homophoneSentence: "麦卡曾万斯里穆夫德伊兹欧尔德." },
        { word: "Twin", phonetic: "/twɪn/", homophone: "特温", meaning: "双胞胎", sentence: "My twin is my best friend.", translation: "我的双胞胎是我最好的朋友。", homophoneSentence: "麦特温伊兹麦贝斯特弗伦德." }
    ],
    time: [
        { word: "Dawn", phonetic: "/dɔːn/", homophone: "道恩", meaning: "黎明", sentence: "Dawn is beautiful.", translation: "黎明很美。", homophoneSentence: "道恩伊兹比尤蒂富尔." },
        { word: "Dusk", phonetic: "/dʌsk/", homophone: "达斯克", meaning: "黄昏", sentence: "Dusk is peaceful.", translation: "黄昏很宁静。", homophoneSentence: "达斯克伊兹皮斯富尔." },
        { word: "Twilight", phonetic: "/ˈtwaɪlaɪt/", homophone: "特瓦伊莱特", meaning: "暮色", sentence: "Twilight is magical.", translation: "暮色很神奇。", homophoneSentence: "特瓦伊莱特伊兹马吉克尔." },
        { word: "Sunrise", phonetic: "/ˈsʌnraɪz/", homophone: "桑莱兹", meaning: "日出", sentence: "Sunrise is early.", translation: "日出很早。", homophoneSentence: "桑莱兹伊兹厄利." },
        { word: "Sunset", phonetic: "/ˈsʌnset/", homophone: "桑塞特", meaning: "日落", sentence: "Sunset is beautiful.", translation: "日落很美。", homophoneSentence: "桑塞特伊兹比尤蒂富尔." },
        { word: "Midnight", phonetic: "/ˈmɪdnaɪt/", homophone: "米德奈特", meaning: "午夜", sentence: "Midnight is quiet.", translation: "午夜很安静。", homophoneSentence: "米德奈特伊兹夸伊特." },
        { word: "Noon", phonetic: "/nuːn/", homophone: "努恩", meaning: "正午", sentence: "See you at noon.", translation: "正午见。", homophoneSentence: "西油艾特努恩." },
        { word: "Midday", phonetic: "/ˈmɪddeɪ/", homophone: "米德戴", meaning: "中午", sentence: "Midday is hot.", translation: "中午很热。", homophoneSentence: "米德戴伊兹霍特." },
        { word: "Daybreak", phonetic: "/ˈdeɪbreɪk/", homophone: "戴布雷克", meaning: "破晓", sentence: "Daybreak comes early.", translation: "破晓来得很早。", homophoneSentence: "戴布雷克卡姆兹厄利." },
        { word: "Nightfall", phonetic: "/ˈnaɪtfɔːl/", homophone: "奈特福尔", meaning: "傍晚", sentence: "Nightfall is peaceful.", translation: "傍晚很宁静。", homophoneSentence: "奈特福尔伊兹皮斯富尔." }
    ],
    food: [
        { word: "Croissant", phonetic: "/ˈkrwæsɒ̃/", homophone: "克瓦桑", meaning: "羊角面包", sentence: "Fresh croissant.", translation: "新鲜羊角面包。", homophoneSentence: "弗雷什克瓦桑." },
        { word: "Baguette", phonetic: "/bæˈɡet/", homophone: "巴盖特", meaning: "法式长棍面包", sentence: "Crusty baguette.", translation: "脆皮法棍。", homophoneSentence: "克拉斯蒂巴盖特." },
        { word: "Ciabatta", phonetic: "/tʃəˈbætə/", homophone: "恰巴塔", meaning: "夏巴塔面包", sentence: "Ciabatta sandwich.", translation: "夏巴塔三明治。", homophoneSentence: "恰巴塔桑德威奇." },
        { word: "Focaccia", phonetic: "/fəˈkætʃə/", homophone: "福卡恰", meaning: "佛卡夏面包", sentence: "Rosemary focaccia.", translation: "迷迭香佛卡夏。", homophoneSentence: "罗斯玛丽福卡恰." },
        { word: "Brioche", phonetic: "/ˈbriːɒʃ/", homophone: "布里奥什", meaning: "布里欧修面包", sentence: "Sweet brioche.", translation: "甜布里欧修。", homophoneSentence: "斯威特布里奥什." },
        { word: "Sourdough", phonetic: "/ˈsaʊədəʊ/", homophone: "索尔多", meaning: "酸面团面包", sentence: "Sourdough toast.", translation: "酸面团吐司。", homophoneSentence: "索尔多托斯特." },
        { word: "Rye bread", phonetic: "/raɪ bred/", homophone: "莱布雷德", meaning: "黑麦面包", sentence: "Rye bread is healthy.", translation: "黑麦面包很健康。", homophoneSentence: "莱布雷德伊兹海尔希." },
        { word: "Pita", phonetic: "/ˈpiːtə/", homophone: "皮塔", meaning: "皮塔饼", sentence: "Pita pocket.", translation: "皮塔饼口袋。", homophoneSentence: "皮塔波克特." },
        { word: "Naan", phonetic: "/nɑːn/", homophone: "南", meaning: "印度飞饼", sentence: "Garlic naan.", translation: "蒜味飞饼。", homophoneSentence: "加利克南." },
        { word: "Tortilla", phonetic: "/tɔːˈtiːə/", homophone: "托蒂亚", meaning: "玉米饼", sentence: "Flour tortilla.", translation: "面粉玉米饼。", homophoneSentence: "弗劳尔托蒂亚." }
    ],
    conversations: [
        { word: "I beg to differ", phonetic: "/aɪ beɡ tuː ˈdɪfə/", homophone: "爱贝格图迪弗", meaning: "我不敢苟同", sentence: "I beg to differ.", translation: "我不敢苟同。", homophoneSentence: "爱贝格图迪弗." },
        { word: "I have to disagree", phonetic: "/aɪ hæv tuː ˌdɪsəˈɡriː/", homophone: "爱海夫图迪萨格里", meaning: "我不同意", sentence: "I have to disagree.", translation: "我不同意。", homophoneSentence: "爱海夫图迪萨格里." },
        { word: "That's not right", phonetic: "/ðæts nɒt raɪt/", homophone: "泽茨诺特莱特", meaning: "那不对", sentence: "That's not right.", translation: "那不对。", homophoneSentence: "泽茨诺特莱特." },
        { word: "I'm not so sure", phonetic: "/aɪm nɒt səʊ ʃʊə/", homophone: "爱姆诺特索舒尔", meaning: "我不太确定", sentence: "I'm not so sure.", translation: "我不太确定。", homophoneSentence: "爱姆诺特索舒尔." },
        { word: "I have my doubts", phonetic: "/aɪ hæv maɪ daʊts/", homophone: "爱海夫麦道茨", meaning: "我有些怀疑", sentence: "I have my doubts.", translation: "我有些怀疑。", homophoneSentence: "爱海夫麦道茨." },
        { word: "That seems unlikely", phonetic: "/ðæt siːmz ʌnˈlaɪkli/", homophone: "泽特西姆兹安莱克利", meaning: "那不太可能", sentence: "That seems unlikely.", translation: "那不太可能。", homophoneSentence: "泽特西姆兹安莱克利." },
        { word: "I wouldn't be so sure", phonetic: "/aɪ ˈwʊdnt biː səʊ ʃʊə/", homophone: "爱伍德恩特比索舒尔", meaning: "我不太确定", sentence: "I wouldn't be so sure.", translation: "我不太确定。", homophoneSentence: "爱伍德恩特比索舒尔." },
        { word: "Let's agree to disagree", phonetic: "/lets əˈɡriː tuː ˌdɪsəˈɡriː/", homophone: "莱茨阿格里图迪萨格里", meaning: "我们保留各自意见", sentence: "Let's agree to disagree.", translation: "我们保留各自意见。", homophoneSentence: "莱茨阿格里图迪萨格里." },
        { word: "We see things differently", phonetic: "/wiː siː θɪŋz ˈdɪfrəntli/", homophone: "威西辛兹迪弗伦特利", meaning: "我们看法不同", sentence: "We see things differently.", translation: "我们看法不同。", homophoneSentence: "威西辛兹迪弗伦特利." },
        { word: "Everyone has their own opinion", phonetic: "/ˈevriwʌn hæz ðeər əʊn əˈpɪnjən/", homophone: "埃弗里万哈兹泽尔翁阿皮尼恩", meaning: "每个人都有自己的看法", sentence: "Everyone has their own opinion.", translation: "每个人都有自己的看法。", homophoneSentence: "埃弗里万哈兹泽尔翁阿皮尼恩." }
    ],
    sentences: [
        { word: "Actions speak louder than words", phonetic: "/ˈækʃənz spiːk ˈlaʊdə ðæn wɜːdz/", homophone: "埃克申兹斯皮克劳德泽恩沃德兹", meaning: "行动胜于言语", sentence: "Actions speak louder than words.", translation: "行动胜于言语。", homophoneSentence: "埃克申兹斯皮克劳德泽恩沃德兹." },
        { word: "Better late than never", phonetic: "/ˈbetə leɪt ðæn ˈnevə/", homophone: "贝特莱特泽恩内沃", meaning: "迟做总比不做好", sentence: "Better late than never.", translation: "迟做总比不做好。", homophoneSentence: "贝特莱特泽恩内沃." },
        { word: "Don't count your chickens", phonetic: "/dəʊnt kaʊnt jɔː ˈtʃɪkɪnz/", homophone: "东特考恩特哟奇金斯", meaning: "不要过早乐观", sentence: "Don't count your chickens before they hatch.", translation: "不要过早乐观。", homophoneSentence: "东特考恩特哟奇金斯比福泽海奇." },
        { word: "Easy come, easy go", phonetic: "/ˈiːzi kʌm ˈiːzi ɡəʊ/", homophone: "伊兹卡姆伊兹戈", meaning: "来得容易去得快", sentence: "Easy come, easy go.", translation: "来得容易去得快。", homophoneSentence: "伊兹卡姆伊兹戈." },
        { word: "Every cloud has a silver lining", phonetic: "/ˈevri klaʊd hæz ə ˈsɪlvə ˈlaɪnɪŋ/", homophone: "埃弗里克劳德哈兹阿西尔沃莱宁", meaning: "黑暗中总有一线光明", sentence: "Every cloud has a silver lining.", translation: "黑暗中总有一线光明。", homophoneSentence: "埃弗里克劳德哈兹阿西尔沃莱宁." },
        { word: "Fortune favors the bold", phonetic: "/ˈfɔːtʃuːn ˈfeɪvəz ðə bəʊld/", homophone: "福琼费沃兹泽博尔德", meaning: "天助勇者", sentence: "Fortune favors the bold.", translation: "天助勇者。", homophoneSentence: "福琼费沃兹泽博尔德." },
        { word: "Honesty is the best policy", phonetic: "/ˈɒnɪsti ɪz ðə best ˈpɒləsi/", homophone: "奥尼斯蒂伊兹泽贝斯特波利西", meaning: "诚实是上策", sentence: "Honesty is the best policy.", translation: "诚实是上策。", homophoneSentence: "奥尼斯蒂伊兹泽贝斯特波利西." },
        { word: "Knowledge is power", phonetic: "/ˈnɒlɪdʒ ɪz ˈpaʊə/", homophone: "诺利奇伊兹帕沃", meaning: "知识就是力量", sentence: "Knowledge is power.", translation: "知识就是力量。", homophoneSentence: "诺利奇伊兹帕沃." },
        { word: "Laughter is the best medicine", phonetic: "/ˈlɑːftər ɪz ðə best ˈmedsɪn/", homophone: "拉夫特伊兹泽贝斯特梅德辛", meaning: "笑是最好的良药", sentence: "Laughter is the best medicine.", translation: "笑是最好的良药。", homophoneSentence: "拉夫特伊兹泽贝斯特梅德辛." },
        { word: "Money doesn't grow on trees", phonetic: "/ˈmʌni dʌznt ɡrəʊ ɒn triːz/", homophone: "马尼达兹恩特格罗昂特里兹", meaning: "钱不是大风刮来的", sentence: "Money doesn't grow on trees.", translation: "钱不是大风刮来的。", homophoneSentence: "马尼达兹恩特格罗昂特里兹." }
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
