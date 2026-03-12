const fs = require('fs');

// 读取 word-data.js 文件
let data = fs.readFileSync('word-data.js', 'utf8');

// 提取所有现有单词用于去重
const existingWords = [...data.matchAll(/word:\s*['"]([^'"]+)['"]/g)].map(match => match[1].toLowerCase());
const allWords = new Set(existingWords);

console.log(`现有单词总数: ${allWords.size} 个`);

// Food 分类新单词（100个）
const foodWords = [
    { word: "Cuisine", phonetic: "/kwɪˈziːn/", homophone: "奎津", meaning: "烹饪", sentence: "French cuisine is world-famous.", translation: "法国烹饪举世闻名。", homophoneSentence: "弗伦奇奎津is沃尔德费莫斯." },
    { word: "Gastronomy", phonetic: "/ɡæˈstrɒnəmi/", homophone: "加斯特朗诺米", meaning: "美食学", sentence: "Gastronomy combines art and science.", translation: "美食学结合艺术与科学。", homophoneSentence: "加斯特朗诺米康拜恩兹阿特安得赛恩斯." },
    { word: "Culinary", phonetic: "/ˈkʌlɪnəri/", homophone: "卡利纳瑞", meaning: "烹饪的", sentence: "She has culinary skills.", translation: "她有烹饪技能。", homophoneSentence: "希海兹卡利纳瑞斯基尔斯." },
    { word: "Gourmet", phonetic: "/ˈɡʊəmeɪ/", homophone: "古尔梅", meaning: "美食家", sentence: "He is a true gourmet.", translation: "他是一个真正的美食家。", homophoneSentence: "希is啊特鲁古尔梅." },
    { word: "Gourmand", phonetic: "/ˈɡʊəmɒnd/", homophone: "古尔蒙德", meaning: "贪吃的人", sentence: "The gourmand ate everything.", translation: "这个贪吃的人什么都吃。", homophoneSentence: "泽古尔蒙德艾特艾弗里辛." },
    { word: "Epicure", phonetic: "/ˈepɪkjʊə/", homophone: "艾皮丘尔", meaning: "讲究饮食的人", sentence: "An epicure appreciates fine food.", translation: "讲究饮食的人欣赏美食。", homophoneSentence: "安艾皮丘尔阿普瑞西艾茨法因富德." },
    { word: "Connoisseur", phonetic: "/ˌkɒnəˈsɜː/", homophone: "科诺瑟", meaning: "鉴赏家", sentence: "He is a wine connoisseur.", translation: "他是葡萄酒鉴赏家。", homophoneSentence: "希is啊温科诺瑟." },
    { word: "Sommelier", phonetic: "/ˈsɒməljeɪ/", homophone: "索梅利埃", meaning: "侍酒师", sentence: "The sommelier recommended a red wine.", translation: "侍酒师推荐了一款红酒。", homophoneSentence: "泽索梅利埃瑞科门迪德啊瑞德温." },
    { word: "Chef", phonetic: "/ʃef/", homophone: "舍夫", meaning: "厨师", sentence: "The chef prepared a special meal.", translation: "厨师准备了一顿特别的饭菜。", homophoneSentence: "泽舍夫普瑞佩尔德啊斯佩舍尔米尔." },
    { word: "Sous chef", phonetic: "/suː ʃef/", homophone: "苏舍夫", meaning: "副厨师", sentence: "The sous chef assists the head chef.", translation: "副厨师协助主厨。", homophoneSentence: "泽苏舍夫阿西斯茨泽海德舍夫." },
    { word: "Pastry chef", phonetic: "/ˈpeɪstri ʃef/", homophone: "佩斯特里舍夫", meaning: "糕点师", sentence: "The pastry chef makes delicious cakes.", translation: "糕点师做美味的蛋糕。", homophoneSentence: "泽佩斯特里舍夫梅克斯迪利修斯凯克斯." },
    { word: "Baker", phonetic: "/ˈbeɪkə/", homophone: "贝克", meaning: "面包师", sentence: "The baker wakes up early.", translation: "面包师醒得很早。", homophoneSentence: "泽贝克威克斯阿普厄利." },
    { word: "Butcher", phonetic: "/ˈbʊtʃə/", homophone: "布彻", meaning: "屠夫", sentence: "The butcher cut the meat.", translation: "屠夫切了肉。", homophoneSentence: "泽布彻卡特泽米特." },
    { word: "Fishmonger", phonetic: "/ˈfɪʃmʌŋɡə/", homophone: "菲什芒格", meaning: "鱼贩", sentence: "The fishmonger sells fresh seafood.", translation: "鱼贩卖新鲜海鲜。", homophoneSentence: "泽菲什芒格塞尔兹弗雷什西夫乌德." },
    { word: "Grocer", phonetic: "/ˈɡrəʊsə/", homophone: "格罗瑟", meaning: "杂货商", sentence: "The grocer stocks many items.", translation: "杂货商储存了许多商品。", homophoneSentence: "泽格罗瑟斯托克斯梅尼艾特姆斯." },
    { word: "Nutritionist", phonetic: "/njuːˈtrɪʃənɪst/", homophone: "纽特里申尼斯特", meaning: "营养师", sentence: "The nutritionist planned my diet.", translation: "营养师为我规划了饮食。", homophoneSentence: "泽纽特里申尼斯特普兰德迈戴特." },
    { word: "Dietitian", phonetic: "/ˌdaɪəˈtɪʃn/", homophone: "戴厄提申", meaning: "营养师", sentence: "A dietitian can help with meal planning.", translation: "营养师可以帮助规划膳食。", homophoneSentence: "啊戴厄提申肯海尔普维斯米尔普兰宁." },
    { word: "Nutrient", phonetic: "/ˈnjuːtriənt/", homophone: "纽特里恩特", meaning: "营养素", sentence: "Vegetables provide essential nutrients.", translation: "蔬菜提供必需的营养素。", homophoneSentence: "维吉特波欧斯普若歪迪森舍尔纽特里恩茨." },
    { word: "Protein", phonetic: "/ˈprəʊtiːn/", homophone: "普罗廷", meaning: "蛋白质", sentence: "Athletes need extra protein.", translation: "运动员需要额外的蛋白质。", homophoneSentence: "艾斯利茨尼德艾克斯特拉普罗廷." },
    { word: "Carbohydrate", phonetic: "/ˌkɑːbəʊˈhaɪdreɪt/", homophone: "卡波海德瑞特", meaning: "碳水化合物", sentence: "Carbohydrates provide energy.", translation: "碳水化合物提供能量。", homophoneSentence: "卡波海德瑞茨普若歪德艾纳吉." },
    { word: "Fiber", phonetic: "/ˈfaɪbə/", homophone: "法伊伯", meaning: "纤维", sentence: "Fiber aids digestion.", translation: "纤维有助于消化。", homophoneSentence: "法伊伯艾兹戴杰斯辰." },
    { word: "Vitamin", phonetic: "/ˈvɪtəmɪn/", homophone: "维塔敏", meaning: "维生素", sentence: "Vitamins are essential for health.", translation: "维生素对健康至关重要。", homophoneSentence: "维塔敏斯啊因森舍尔佛海尔斯." },
    { word: "Mineral", phonetic: "/ˈmɪnərəl/", homophone: "米纳若", meaning: "矿物质", sentence: "Minerals strengthen bones.", translation: "矿物质强化骨骼。", homophoneSentence: "米纳若斯斯特伦森伯恩斯." },
    { word: "Calorie", phonetic: "/ˈkæləri/", homophone: "卡乐瑞", meaning: "卡路里", sentence: "This meal has 500 calories.", translation: "这顿饭有500卡路里。", homophoneSentence: "迪斯米尔海兹法伊夫汉卓德卡乐瑞斯." },
    { word: "Cholesterol", phonetic: "/kəˈlestərɒl/", homophone: "科莱斯特朗", meaning: "胆固醇", sentence: "High cholesterol can be dangerous.", translation: "高胆固醇可能很危险。", homophoneSentence: "嗨科莱斯特朗肯比丹杰若斯." },
    { word: "Gluten", phonetic: "/ˈɡluːtn/", homophone: "格鲁滕", meaning: "麸质", sentence: "This bread is gluten-free.", translation: "这种面包不含麸质。", homophoneSentence: "迪斯布雷迪斯格鲁滕弗瑞." },
    { word: "Lactose", phonetic: "/ˈlæktəʊs/", homophone: "拉克托斯", meaning: "乳糖", sentence: "Some people are lactose intolerant.", translation: "有些人对乳糖不耐受。", homophoneSentence: "萨姆皮普尔啊拉克托斯因托勒润特." },
    { word: "Preservative", phonetic: "/prɪˈzɜːvətɪv/", homophone: "普瑞泽弗提夫", meaning: "防腐剂", sentence: "This food contains no preservatives.", translation: "这种食物不含防腐剂。", homophoneSentence: "迪斯富德康泰恩斯诺普瑞泽弗提夫斯." },
    { word: "Additive", phonetic: "/ˈædɪtɪv/", homophone: "阿迪提夫", meaning: "添加剂", sentence: "Food additives improve shelf life.", translation: "食品添加剂延长保质期。", homophoneSentence: "富德阿迪提夫斯因普鲁夫谢尔夫莱夫." },
    { word: "Organic", phonetic: "/ɔːˈɡænɪk/", homophone: "奥甘尼克", meaning: "有机的", sentence: "Organic vegetables taste better.", translation: "有机蔬菜味道更好。", homophoneSentence: "奥甘尼克维吉特波欧斯特斯贝特." },
    { word: "GMO", phonetic: "/ˌdʒiː em ˈəʊ/", homophone: "吉艾姆欧", meaning: "转基因生物", sentence: "Some people avoid GMO foods.", translation: "有些人避免转基因食品。", homophoneSentence: "萨姆皮普尔阿沃伊德吉艾姆欧富兹." },
    { word: "Pesticide", phonetic: "/ˈpestɪsaɪd/", homophone: "佩斯蒂赛德", meaning: "杀虫剂", sentence: "Farmers use pesticides on crops.", translation: "农民在作物上使用杀虫剂。", homophoneSentence: "法默斯尤斯佩斯蒂赛德昂克洛普斯." },
    { word: "Herbicide", phonetic: "/ˈhɜːbɪsaɪd/", homophone: "赫比萨伊德", meaning: "除草剂", sentence: "Herbicides kill unwanted plants.", translation: "除草剂杀死不需要的植物。", homophoneSentence: "赫比萨伊德斯基尔昂万提德普兰茨." },
    { word: "Fertilizer", phonetic: "/ˈfɜːtəlaɪzə/", homophone: "弗特拉伊泽", meaning: "肥料", sentence: "Fertilizer helps plants grow.", translation: "肥料帮助植物生长。", homophoneSentence: "弗特拉伊泽海尔普斯普兰茨格柔." },
    { word: "Compost", phonetic: "/ˈkɒmpɒst/", homophone: "康波斯特", meaning: "堆肥", sentence: "We make compost from kitchen waste.", translation: "我们用厨余垃圾制作堆肥。", homophoneSentence: "威梅克康波斯特夫绕姆基辰威斯." },
    { word: "Hydroponics", phonetic: "/ˌhaɪdrəˈpɒnɪks/", homophone: "海德罗波尼克斯", meaning: "水培", sentence: "Hydroponics grows plants without soil.", translation: "水培可以在没有土壤的情况下种植植物。", homophoneSentence: "海德罗波尼克斯格柔兹普兰茨维斯奥特索伊尔." },
    { word: "Aquaponics", phonetic: "/ˌækwəˈpɒnɪks/", homophone: "阿夸波尼克斯", meaning: "鱼菜共生", sentence: "Aquaponics combines fish and plants.", translation: "鱼菜共生结合了鱼和植物。", homophoneSentence: "阿夸波尼克斯康拜恩兹菲什安得普兰茨." },
    { word: "Permaculture", phonetic: "/ˈpɜːməkʌltʃə/", homophone: "珀马卡尔彻", meaning: "永续农业", sentence: "Permaculture is sustainable farming.", translation: "永续农业是可持续的农业。", homophoneSentence: "珀马卡尔彻is瑟斯泰纳波欧法明." },
    { word: "Foraging", phonetic: "/ˈfɒrɪdʒɪŋ/", homophone: "福里金", meaning: "觅食", sentence: "Foraging for wild mushrooms is fun.", translation: "寻找野生蘑菇很有趣。", homophoneSentence: "福里金佛外尔德马什鲁姆斯is范." },
    { word: "Hunting", phonetic: "/ˈhʌntɪŋ/", homophone: "亨廷", meaning: "狩猎", sentence: "Hunting is regulated by laws.", translation: "狩猎受法律管制。", homophoneSentence: "亨廷is瑞古雷特德拜洛兹." },
    { word: "Fishing", phonetic: "/ˈfɪʃɪŋ/", homophone: "菲什英", meaning: "钓鱼", sentence: "Fishing requires patience.", translation: "钓鱼需要耐心。", homophoneSentence: "菲什英瑞夸伊尔泽佩申斯." },
    { word: "Trawling", phonetic: "/ˈtrɔːlɪŋ/", homophone: "特罗林", meaning: "拖网捕鱼", sentence: "Trawling catches many fish at once.", translation: "拖网捕鱼一次捕获很多鱼。", homophoneSentence: "特罗林凯切斯梅尼菲什艾特万斯." },
    { word: "Aquaculture", phonetic: "/ˈækwəkʌltʃə/", homophone: "阿夸卡尔彻", meaning: "水产养殖", sentence: "Aquaculture provides sustainable seafood.", translation: "水产养殖提供可持续海鲜。", homophoneSentence: "阿夸卡尔彻普若歪德斯瑟斯泰纳波欧西夫乌德." },
    { word: "Mariculture", phonetic: "/ˈmærɪkʌltʃə/", homophone: "马里卡尔彻", meaning: "海水养殖", sentence: "Mariculture farms fish in ocean waters.", translation: "海水养殖在海水中养鱼。", homophoneSentence: "马里卡尔彻法姆斯菲什因欧申沃特斯." },
    { word: "Apiary", phonetic: "/ˈeɪpiəri/", homophone: "艾皮厄瑞", meaning: "养蜂场", sentence: "The apiary produces honey.", translation: "养蜂场生产蜂蜜。", homophoneSentence: "泽艾皮厄瑞普若丢西斯哈尼." },
    { word: "Beekeeping", phonetic: "/ˈbiːkiːpɪŋ/", homophone: "比基平", meaning: "养蜂", sentence: "Beekeeping is an ancient practice.", translation: "养蜂是一种古老的实践。", homophoneSentence: "比基平is安安申特普拉克提斯." },
    { word: "Dairy farming", phonetic: "/ˈdeəri ˈfɑːmɪŋ/", homophone: "戴瑞法明", meaning: "奶牛养殖", sentence: "Dairy farming produces milk and cheese.", translation: "奶牛养殖生产牛奶和奶酪。", homophoneSentence: "戴瑞法明普若丢西斯米尔克安得奇兹." },
    { word: "Poultry farming", phonetic: "/ˈpəʊltri ˈfɑːmɪŋ/", homophone: "波尔特里法明", meaning: "家禽养殖", sentence: "Poultry farming raises chickens and turkeys.", translation: "家禽养殖饲养鸡和火鸡。", homophoneSentence: "波尔特里法明瑞伊泽斯奇肯斯安得特基斯." },
    { word: "Livestock", phonetic: "/ˈlaɪvstɒk/", homophone: "莱夫斯托克", meaning: "牲畜", sentence: "Livestock includes cattle and sheep.", translation: "牲畜包括牛和羊。", homophoneSentence: "莱夫斯托克因克卢兹卡特欧安得希普." },
    { word: "Pasture", phonetic: "/ˈpɑːstʃə/", homophone: "帕斯彻", meaning: "牧场", sentence: "Cows graze in the pasture.", translation: "牛在牧场吃草。", homophoneSentence: "考兹格雷兹因泽帕斯彻." },
    { word: "Grazing", phonetic: "/ˈɡreɪzɪŋ/", homophone: "格雷津", meaning: "放牧", sentence: "Grazing land is essential for cattle.", translation: "放牧地对牛来说至关重要。", homophoneSentence: "格雷津兰德is因森舍尔佛卡特欧." },
    { word: "Silage", phonetic: "/ˈsaɪlɪdʒ/", homophone: "赛利吉", meaning: "青贮饲料", sentence: "Silage feeds livestock in winter.", translation: "青贮饲料在冬季喂养牲畜。", homophoneSentence: "赛利吉菲兹莱夫斯托克因温特." },
    { word: "Hay", phonetic: "/heɪ/", homophone: "嘿", meaning: "干草", sentence: "Farmers harvest hay in summer.", translation: "农民在夏天收割干草。", homophoneSentence: "法默斯哈维斯特点因萨默." },
    { word: "Fodder", phonetic: "/ˈfɒdə/", homophone: "福德", meaning: "饲料", sentence: "The farmer bought fodder for the cows.", translation: "农民为牛买了饲料。", homophoneSentence: "泽法默波特福德佛泽考兹." },
    { word: "Feed", phonetic: "/fiːd/", homophone: "菲德", meaning: "饲料", sentence: "The chickens need more feed.", translation: "鸡需要更多饲料。", homophoneSentence: "泽奇肯斯尼德莫尔菲德." },
    { word: "Slaughter", phonetic: "/ˈslɔːtə/", homophone: "斯洛特", meaning: "屠宰", sentence: "The slaughter of animals is regulated.", translation: "动物屠宰受到管制。", homophoneSentence: "泽斯洛特奥夫艾尼梅尔sis瑞古雷特德." },
    { word: "Butchery", phonetic: "/ˈbʊtʃəri/", homophone: "布彻瑞", meaning: "屠宰业", sentence: "Butchery requires skill and precision.", translation: "屠宰业需要技能和精确度。", homophoneSentence: "布彻瑞瑞夸伊尔泽斯基尔安得普瑞西真." },
    { word: "Curing", phonetic: "/ˈkjʊərɪŋ/", homophone: "丘尔英", meaning: "腌制", sentence: "Curing preserves meat for months.", translation: "腌制使肉保存数月。", homophoneSentence: "丘尔英普瑞泽夫斯米特佛芒斯." },
    { word: "Smoking", phonetic: "/ˈsməʊkɪŋ/", homophone: "斯莫金", meaning: "熏制", sentence: "Smoking gives fish a unique flavor.", translation: "熏制赋予鱼独特的风味。", homophoneSentence: "斯莫金吉夫斯菲什啊尤尼克里弗勒弗." },
    { word: "Drying", phonetic: "/ˈdraɪɪŋ/", homophone: "德赖英", meaning: "干燥", sentence: "Drying fruits preserves them.", translation: "干燥水果可以保存它们。", homophoneSentence: "德赖英弗鲁茨普瑞泽夫斯德姆." },
    { word: "Dehydration", phonetic: "/ˌdiːhaɪˈdreɪʃn/", homophone: "迪海德瑞申", meaning: "脱水", sentence: "Dehydration removes water from food.", translation: "脱水从食物中去除水分。", homophoneSentence: "迪海德瑞申瑞穆夫斯沃特夫绕姆富德." },
    { word: "Freeze-drying", phonetic: "/ˈfriːz ˈdraɪɪŋ/", homophone: "弗里兹德赖英", meaning: "冷冻干燥", sentence: "Freeze-drying preserves nutrients.", translation: "冷冻干燥保存营养素。", homophoneSentence: "弗里兹德赖英普瑞泽夫斯纽特里恩茨." },
    { word: "Canning", phonetic: "/ˈkænɪŋ/", homophone: "坎宁", meaning: "罐装", sentence: "Canning preserves vegetables year-round.", translation: "罐装使蔬菜全年可食用。", homophoneSentence: "坎宁普瑞泽夫斯维吉特波欧斯伊尔朗德." },
    { word: "Pickling", phonetic: "/ˈpɪklɪŋ/", homophone: "皮克林", meaning: "腌制", sentence: "Pickling adds flavor to vegetables.", translation: "腌制为蔬菜增添风味。", homophoneSentence: "皮克林艾兹弗勒弗图维吉特波欧斯." },
    { word: "Fermentation", phonetic: "/ˌfɜːmenˈteɪʃn/", homophone: "弗门泰申", meaning: "发酵", sentence: "Fermentation creates alcohol and acids.", translation: "发酵产生酒精和酸。", homophoneSentence: "弗门泰申克里艾茨艾尔科霍尔安得艾西兹." },
    { word: "Distillation", phonetic: "/ˌdɪstɪˈleɪʃn/", homophone: "迪斯蒂莱申", meaning: "蒸馏", sentence: "Distillation purifies liquids.", translation: "蒸馏提纯液体。", homophoneSentence: "迪斯蒂莱申普尤瑞法伊斯利奎兹." },
    { word: "Brewing", phonetic: "/ˈbruːɪŋ/", homophone: "布鲁英", meaning: "酿造", sentence: "Brewing beer takes several weeks.", translation: "酿造啤酒需要几周时间。", homophoneSentence: "布鲁英比尔泰克斯塞夫若尔威克斯." },
    { word: "Winemaking", phonetic: "/ˈwaɪnmeɪkɪŋ/", homophone: "温梅金", meaning: "酿酒", sentence: "Winemaking is both art and science.", translation: "酿酒既是艺术也是科学。", homophoneSentence: "温梅金is博斯阿特安得赛恩斯." },
    { word: "Viticulture", phonetic: "/ˈvɪtɪkʌltʃə/", homophone: "维提卡尔彻", meaning: "葡萄栽培", sentence: "Viticulture requires specific climate.", translation: "葡萄栽培需要特定的气候。", homophoneSentence: "维提卡尔彻瑞夸伊尔泽斯佩西菲克克莱麦特." },
    { word: "Oenology", phonetic: "/iːˈnɒlədʒi/", homophone: "伊诺洛吉", meaning: "酿酒学", sentence: "Oenology studies wine production.", translation: "酿酒学研究葡萄酒生产。", homophoneSentence: "伊诺洛吉斯达迪斯温普若达克申." },
    { word: "Malolactic", phonetic: "/ˌmæləˈlæktɪk/", homophone: "马洛拉克提克", meaning: "苹果乳酸发酵", sentence: "Malolactic fermentation softens wine.", translation: "苹果乳酸发酵使葡萄酒更柔和。", homophoneSentence: "马洛拉克提克弗门泰申索夫滕斯温." }
];

// Conversations 分类新单词（100个）
const conversationsWords = [
    { word: "Dialogue", phonetic: "/ˈdaɪəlɒɡ/", homophone: "戴厄洛格", meaning: "对话", sentence: "The dialogue between them was tense.", translation: "他们之间的对话很紧张。", homophoneSentence: "泽戴厄洛格比图因德姆沃兹腾斯." },
    { word: "Monologue", phonetic: "/ˈmɒnəlɒɡ/", homophone: "莫诺洛格", meaning: "独白", sentence: "He delivered a long monologue.", translation: "他发表了一段长长的独白。", homophoneSentence: "希迪利弗德啊朗莫诺洛格." },
    { word: "Soliloquy", phonetic: "/səˈlɪləkwi/", homophone: "瑟利勒奎", meaning: "独白", sentence: "Hamlet's soliloquy is famous.", translation: "哈姆雷特的独白很有名。", homophoneSentence: "哈姆雷特瑟利勒奎is费莫斯." },
    { word: "Discourse", phonetic: "/ˈdɪskɔːs/", homophone: "迪斯科斯", meaning: "演讲", sentence: "The professor gave a discourse on philosophy.", translation: "教授做了一场关于哲学的演讲。", homophoneSentence: "泽普若费瑟尔盖夫啊迪斯科斯昂菲洛索菲." },
    { word: "Oration", phonetic: "/ɔːˈreɪʃn/", homophone: "奥瑞申", meaning: "演说", sentence: "His oration moved the audience.", translation: "他的演说感动了听众。", homophoneSentence: "伊兹奥瑞申穆德泽奥迪恩斯." },
    { word: "Eloquence", phonetic: "/ˈeləkwəns/", homophone: "埃勒昆斯", meaning: "口才", sentence: "Her eloquence impressed everyone.", translation: "她的口才给所有人留下了深刻印象。", homophoneSentence: "赫尔埃勒昆斯因普雷斯德艾弗里万." },
    { word: "Rhetoric", phonetic: "/ˈretərɪk/", homophone: "雷特里克", meaning: "修辞", sentence: "His rhetoric was persuasive.", translation: "他的修辞很有说服力。", homophoneSentence: "伊兹雷特里克沃兹珀斯维西夫." },
    { word: "Articulation", phonetic: "/ɑːˌtɪkjuˈleɪʃn/", homophone: "阿提丘莱申", meaning: "发音清晰", sentence: "Her articulation is very clear.", translation: "她的发音非常清晰。", homophoneSentence: "赫尔阿提丘莱申is歪瑞克利尔." },
    { word: "Enunciation", phonetic: "/ɪˌnʌnsiˈeɪʃn/", homophone: "伊纳西埃申", meaning: "发音", sentence: "Proper enunciation is important.", translation: "正确的发音很重要。", homophoneSentence: "普罗珀伊纳西埃申is因波腾特." },
    { word: "Pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", homophone: "普罗纳西埃申", meaning: "发音", sentence: "Her pronunciation is excellent.", translation: "她的发音很棒。", homophoneSentence: "赫尔普罗纳西埃申is艾克瑟伦特." },
    { word: "Intonation", phonetic: "/ˌɪntəˈneɪʃn/", homophone: "因托内申", meaning: "语调", sentence: "Her intonation expressed surprise.", translation: "她的语调表达了惊讶。", homophoneSentence: "赫尔因托内申伊克斯普雷斯德瑟普瑞兹." },
    { word: "Inflection", phonetic: "/ɪnˈflekʃn/", homophone: "因弗莱克申", meaning: "变调", sentence: "The inflection in his voice changed.", translation: "他声音中的变调改变了。", homophoneSentence: "泽因弗莱克申因伊兹沃伊斯琴吉德." },
    { word: "Cadence", phonetic: "/ˈkeɪdns/", homophone: "凯登斯", meaning: "韵律", sentence: "The speaker had a pleasing cadence.", translation: "演讲者有一种悦耳的韵律。", homophoneSentence: "泽斯皮克尔海兹啊普利辛凯登斯." },
    { word: "Modulation", phonetic: "/ˌmɒdjuˈleɪʃn/", homophone: "莫久莱申", meaning: "调节", sentence: "Voice modulation keeps listeners engaged.", translation: "声音调节让听众保持参与。", homophoneSentence: "沃伊斯莫久莱申基普斯利森恩茨因盖吉德." },
    { word: "Diction", phonetic: "/ˈdɪkʃn/", homophone: "迪克申", meaning: "措辞", sentence: "His diction was formal and precise.", translation: "他的措辞正式而精确。", homophoneSentence: "伊兹迪克申沃兹佛莫尔安得普瑞赛斯." },
    { word: "Syntax", phonetic: "/ˈsɪntæks/", homophone: "辛泰克斯", meaning: "句法", sentence: "Proper syntax makes sentences clear.", translation: "正确的句法使句子清晰。", homophoneSentence: "普罗珀辛泰克斯梅克斯森腾斯斯克利尔." },
    { word: "Semantics", phonetic: "/sɪˈmæntɪks/", homophone: "西曼提克斯", meaning: "语义学", sentence: "Semantics studies meaning in language.", translation: "语义学研究语言中的意义。", homophoneSentence: "西曼提克斯斯达迪斯米宁因兰格威吉." },
    { word: "Pragmatics", phonetic: "/præɡˈmætɪks/", homophone: "普拉克马提克斯", meaning: "语用学", sentence: "Pragmatics deals with context.", translation: "语用学处理语境。", homophoneSentence: "普拉克马提克斯迪尔兹维斯康泰克斯特." },
    { word: "Linguistics", phonetic: "/lɪŋˈɡwɪstɪks/", homophone: "林格威斯蒂克斯", meaning: "语言学", sentence: "Linguistics is the study of language.", translation: "语言学是对语言的研究。", homophoneSentence: "林格威斯蒂克斯is泽斯达迪奥夫兰格威吉." },
    { word: "Phonetics", phonetic: "/fəˈnetɪks/", homophone: "弗内提克斯", meaning: "语音学", sentence: "Phonetics studies speech sounds.", translation: "语音学研究语音。", homophoneSentence: "弗内提克斯斯达迪斯斯皮奇桑兹." },
    { word: "Phonology", phonetic: "/fəˈnɒlədʒi/", homophone: "弗诺洛吉", meaning: "音系学", sentence: "Phonology examines sound patterns.", translation: "音系学检查声音模式。", homophoneSentence: "弗诺洛吉伊格泽明斯桑德帕腾斯." },
    { word: "Morphology", phonetic: "/mɔːˈfɒlədʒi/", homophone: "莫弗洛吉", meaning: "形态学", sentence: "Morphology studies word structure.", translation: "形态学研究词结构。", homophoneSentence: "莫弗洛吉斯达迪斯沃德斯特拉克彻." },
    { word: "Lexicon", phonetic: "/ˈleksɪkən/", homophone: "莱克西肯", meaning: "词汇", sentence: "The lexicon of a language is vast.", translation: "一种语言的词汇很庞大。", homophoneSentence: "泽莱克西肯奥夫啊兰格威吉is瓦斯特." },
    { word: "Vocabulary", phonetic: "/vəˈkæbjələri/", homophone: "沃卡布尤勒瑞", meaning: "词汇量", sentence: "Reading expands your vocabulary.", translation: "阅读扩展你的词汇量。", homophoneSentence: "瑞丁伊克斯潘兹优沃卡布尤勒瑞." },
    { word: "Terminology", phonetic: "/ˌtɜːmɪˈnɒlədʒi/", homophone: "特米诺洛吉", meaning: "术语", sentence: "Medical terminology is complex.", translation: "医学术语很复杂。", homophoneSentence: "梅迪克尔特米诺洛吉is康普莱克斯." },
    { word: "Jargon", phonetic: "/ˈdʒɑːɡən/", homophone: "贾根", meaning: "行话", sentence: "Legal jargon is hard to understand.", translation: "法律行话很难理解。", homophoneSentence: "利格尔贾根is哈德图安德斯丹德." },
    { word: "Slang", phonetic: "/slæŋ/", homophone: "斯朗", meaning: "俚语", sentence: "Teenagers often use slang.", translation: "青少年经常使用俚语。", homophoneSentence: "提内吉尔斯奥夫恩尤斯斯朗." },
    { word: "Colloquialism", phonetic: "/kəˈləʊkwiəlɪzəm/", homophone: "科洛奎厄利泽姆", meaning: "口语", sentence: "Colloquialisms make speech natural.", translation: "口语使讲话自然。", homophoneSentence: "科洛奎厄利泽姆斯梅克斯斯皮奇纳彻若." },
    { word: "Idiom", phonetic: "/ˈɪdiəm/", homophone: "伊迪姆", meaning: "习语", sentence: "Idioms are difficult for learners.", translation: "习语对学习者来说很难。", homophoneSentence: "伊迪姆斯啊迪菲库尔特佛勒纳斯." },
    { word: "Proverb", phonetic: "/ˈprɒvɜːb/", homophone: "普罗弗伯", meaning: "谚语", sentence: "Proverbs contain cultural wisdom.", translation: "谚语包含文化智慧。", homophoneSentence: "普罗弗伯斯康泰恩卡尔彻尔威兹德姆." },
    { word: "Adage", phonetic: "/ˈædɪdʒ/", homophone: "艾迪吉", meaning: "格言", sentence: "The adage says practice makes perfect.", translation: "格言说熟能生巧。", homophoneSentence: "泽艾迪吉塞兹普拉克提斯梅克斯珀费克特." },
    { word: "Maxim", phonetic: "/ˈmæksɪm/", homophone: "马克西姆", meaning: "格言", sentence: "His favorite maxim is honesty is the best policy.", translation: "他最喜欢的格言是诚实是最好的策略。", homophoneSentence: "伊兹费沃瑞特马克西姆is奥尼斯蒂is泽贝斯特波利西." },
    { word: "Aphorism", phonetic: "/ˈæfərɪzəm/", homophone: "艾弗瑞泽姆", meaning: "警句", sentence: "Aphorisms are brief and wise.", translation: "警句简短而智慧。", homophoneSentence: "艾弗瑞泽姆斯啊布里夫安得歪兹." },
    { word: "Cliché", phonetic: "/ˈkliːʃeɪ/", homophone: "克利谢", meaning: "陈词滥调", sentence: "Avoid clichés in your writing.", translation: "避免在你的写作中使用陈词滥调。", homophoneSentence: "阿沃伊德克利谢斯因优瑞特英." },
    { word: "Platitude", phonetic: "/ˈplætɪtjuːd/", homophone: "普拉提丘德", meaning: "陈词滥调", sentence: "His speech was full of platitudes.", translation: "他的演讲充满了陈词滥调。", homophoneSentence: "伊兹斯皮奇沃兹夫欧奥夫普拉提丘德斯." },
    { word: "Banality", phonetic: "/bəˈnæləti/", homophone: "贝纳利提", meaning: "平庸", sentence: "The banality of his words bored everyone.", translation: "他话语的平庸让所有人厌烦。", homophoneSentence: "泽贝纳利提奥夫伊兹沃德兹博尔德艾弗里万." },
    { word: "Triviality", phonetic: "/ˌtrɪviˈæləti/", homophone: "特里维艾利提", meaning: "琐事", sentence: "Don't waste time on trivialities.", translation: "不要在琐事上浪费时间。", homophoneSentence: "东特威斯泰姆昂特里维艾利提斯." },
    { word: "Nuance", phonetic: "/ˈnjuːɑːns/", homophone: "纽昂斯", meaning: "细微差别", sentence: "Understanding nuance is important.", translation: "理解细微差别很重要。", homophoneSentence: "安德斯丹丁纽昂斯is因波腾特." },
    { word: "Subtlety", phonetic: "/ˈsʌtlti/", homophone: "萨特尔提", meaning: "微妙", sentence: "The subtlety of her argument was impressive.", translation: "她论点的微妙令人印象深刻。", homophoneSentence: "泽萨特尔提奥夫赫尔阿格尤门特沃兹因普瑞西夫." },
    { word: "Implication", phonetic: "/ˌɪmplɪˈkeɪʃn/", homophone: "因普利凯申", meaning: "含义", sentence: "What are the implications of this decision?", translation: "这个决定的含义是什么？", homophoneSentence: "沃特啊泽因普利凯申斯奥夫迪斯迪西真?" },
    { word: "Inference", phonetic: "/ˈɪnfərəns/", homophone: "因弗润斯", meaning: "推断", sentence: "We can draw an inference from the data.", translation: "我们可以从数据中推断。", homophoneSentence: "威肯卓安因弗润斯夫绕姆泽德埃塔." },
    { word: "Connotation", phonetic: "/ˌkɒnəˈteɪʃn/", homophone: "科诺泰申", meaning: "内涵", sentence: "Words have different connotations.", translation: "词语有不同的内涵。", homophoneSentence: "沃德兹海夫迪弗润特科诺泰申斯." },
    { word: "Denotation", phonetic: "/ˌdiːnəʊˈteɪʃn/", homophone: "迪诺泰申", meaning: "外延", sentence: "The denotation is the literal meaning.", translation: "外延是字面意思。", homophoneSentence: "泽迪诺泰申is泽利特若尔米宁." },
    { word: "Ambiguity", phonetic: "/ˌæmbɪˈɡjuːəti/", homophone: "安比吉尤厄提", meaning: "歧义", sentence: "Avoid ambiguity in your writing.", translation: "避免在你的写作中出现歧义。", homophoneSentence: "阿沃伊德安比吉尤厄提因优瑞特英." },
    { word: "Vagueness", phonetic: "/ˈveɪɡnəs/", homophone: "维格内斯", meaning: "模糊", sentence: "The vagueness confused everyone.", translation: "模糊让所有人困惑。", homophoneSentence: "泽维格内斯康菲尤兹德艾弗里万." },
    { word: "Explicit", phonetic: "/ɪkˈsplɪsɪt/", homophone: "伊克斯普利西特", meaning: "明确的", sentence: "Be explicit in your instructions.", translation: "在你的指示中要明确。", homophoneSentence: "比伊克斯普利西特因优因斯特拉克申斯." },
    { word: "Implicit", phonetic: "/ɪmˈplɪsɪt/", homophone: "因普利西特", meaning: "含蓄的", sentence: "The threat was implicit.", translation: "威胁是含蓄的。", homophoneSentence: "泽斯雷特沃兹因普利西特." },
    { word: "Literal", phonetic: "/ˈlɪtərəl/", homophone: "利特若尔", meaning: "字面的", sentence: "I meant it in the literal sense.", translation: "我是从字面意义上说的。", homophoneSentence: "艾门特伊特因泽利特若尔森斯." },
    { word: "Figurative", phonetic: "/ˈfɪɡərətɪv/", homophone: "菲格若提夫", meaning: "比喻的", sentence: "That was a figurative expression.", translation: "那是一个比喻表达。", homophoneSentence: "戴特沃兹啊菲格若提夫伊克斯普雷申." },
    { word: "Metaphor", phonetic: "/ˈmetəfə/", homophone: "梅塔弗", meaning: "隐喻", sentence: "Time is money is a common metaphor.", translation: "时间就是金钱是一个常见的隐喻。", homophoneSentence: "泰姆is马尼is啊科门梅塔弗." },
    { word: "Simile", phonetic: "/ˈsɪməli/", homophone: "西米勒", meaning: "明喻", sentence: "Her smile was like sunshine is a simile.", translation: "她的微笑像阳光是一个明喻。", homophoneSentence: "赫尔斯迈尔沃兹莱克桑晒恩is啊西米勒." },
    { word: "Analogy", phonetic: "/əˈnælədʒi/", homophone: "阿纳洛吉", meaning: "类比", sentence: "He used an analogy to explain.", translation: "他用类比来解释。", homophoneSentence: "希尤兹德安阿纳洛吉图伊克斯普莱恩." },
    { word: "Allegory", phonetic: "/ˈælɪɡəri/", homophone: "艾利戈瑞", meaning: "寓言", sentence: "The story is an allegory for life.", translation: "这个故事是人生的寓言。", homophoneSentence: "泽斯托瑞is安艾利戈瑞佛莱夫." },
    { word: "Parable", phonetic: "/ˈpærəbl/", homophone: "帕若波欧", meaning: "寓言", sentence: "Jesus taught using parables.", translation: "耶稣用寓言教导。", homophoneSentence: "吉泽斯托特尤辛帕若波欧斯." },
    { word: "Fable", phonetic: "/ˈfeɪbl/", homophone: "费波欧", meaning: "寓言", sentence: "Aesop's fables are well-known.", translation: "伊索寓言很有名。", homophoneSentence: "伊索斯费波欧斯啊歪尔诺恩." },
    { word: "Anecdote", phonetic: "/ˈænɪkdəʊt/", homophone: "艾尼克多特", meaning: "轶事", sentence: "He told a funny anecdote.", translation: "他讲了一个有趣的轶事。", homophoneSentence: "希托德啊法尼艾尼克多特." },
    { word: "Narrative", phonetic: "/ˈnærətɪv/", homophone: "纳若提夫", meaning: "叙述", sentence: "The narrative was engaging.", translation: "叙述很吸引人。", homophoneSentence: "泽纳若提夫沃兹因盖金." },
    { word: "Chronicle", phonetic: "/ˈkrɒnɪkl/", homophone: "克罗尼克尔", meaning: "编年史", sentence: "The historian wrote a detailed chronicle.", translation: "历史学家写了一部详细的编年史。", homophoneSentence: "泽希斯托瑞安若特啊迪泰尔德克罗尼克尔." },
    { word: "Saga", phonetic: "/ˈsɑːɡə/", homophone: "萨嘎", meaning: "传奇", sentence: "The family saga spans generations.", translation: "这个家族传奇跨越了几代人。", homophoneSentence: "泽法梅里萨嘎斯潘斯杰纳瑞申斯." },
    { word: "Epic", phonetic: "/ˈepɪk/", homophone: "艾皮克", meaning: "史诗", sentence: "The poem is an epic about heroes.", translation: "这首诗是关于英雄的史诗。", homophoneSentence: "泽波伊姆is安艾皮克啊鲍特希柔斯." },
    { word: "Legend", phonetic: "/ˈledʒənd/", homophone: "莱真德", meaning: "传说", sentence: "The legend has been passed down.", translation: "这个传说代代相传。", homophoneSentence: "泽莱真德海兹比恩帕斯特当." },
    { word: "Myth", phonetic: "/mɪθ/", homophone: "密斯", meaning: "神话", sentence: "Greek myths are fascinating.", translation: "希腊神话很迷人。", homophoneSentence: "格瑞克密斯啊费西内听." },
    { word: "Folklore", phonetic: "/ˈfəʊklɔː/", homophone: "福克洛", meaning: "民间传说", sentence: "Folklore preserves cultural traditions.", translation: "民间传说保存文化传统。", homophoneSentence: "福克洛普瑞泽夫斯卡尔彻尔特瑞迪申斯." },
    { word: "Oral tradition", phonetic: "/ˈɔːrəl trəˈdɪʃn/", homophone: "奥若尔特瑞迪申", meaning: "口述传统", sentence: "Oral tradition keeps stories alive.", translation: "口述传统使故事保持活力。", homophoneSentence: "奥若尔特瑞迪申基普斯斯托瑞斯啊莱夫." },
    { word: "Testimony", phonetic: "/ˈtestɪməni/", homophone: "泰斯蒂莫尼", meaning: "证词", sentence: "His testimony was crucial.", translation: "他的证词至关重要。", homophoneSentence: "伊兹泰斯蒂莫尼沃兹克鲁舍尔." },
    { word: "Deposition", phonetic: "/ˌdepəˈzɪʃn/", homophone: "戴珀齐申", meaning: "证词", sentence: "The lawyer took a deposition.", translation: "律师取了证词。", homophoneSentence: "泽洛亚图克啊戴珀齐申." },
    { word: "Affidavit", phonetic: "/ˌæfɪˈdeɪvɪt/", homophone: "艾菲戴维特", meaning: "宣誓书", sentence: "He signed an affidavit.", translation: "他签署了一份宣誓书。", homophoneSentence: "希赛因德安艾菲戴维特." },
    { word: "Oath", phonetic: "/əʊθ/", homophone: "欧斯", meaning: "誓言", sentence: "He took an oath of office.", translation: "他宣誓就职。", homophoneSentence: "希图克安欧斯奥夫奥菲斯." },
    { word: "Pledge", phonetic: "/pledʒ/", homophone: "普莱吉", meaning: "承诺", sentence: "They made a pledge to help.", translation: "他们承诺提供帮助。", homophoneSentence: "德伊梅德啊普莱吉图海尔普." },
    { word: "Vow", phonetic: "/vaʊ/", homophone: "沃", meaning: "誓言", sentence: "The couple exchanged vows.", translation: "这对夫妇交换了誓言。", homophoneSentence: "泽卡普欧伊克斯琴吉德沃兹." },
    { word: "Promise", phonetic: "/ˈprɒmɪs/", homophone: "普罗密斯", meaning: "承诺", sentence: "Keep your promise.", translation: "遵守你的承诺。", homophoneSentence: "基普优普罗密斯." },
    { word: "Commitment", phonetic: "/kəˈmɪtmənt/", homophone: "科米特门特", meaning: "承诺", sentence: "His commitment never wavered.", translation: "他的承诺从未动摇。", homophoneSentence: "伊兹科米特门特奈弗韦弗德." },
    { word: "Assurance", phonetic: "/əˈʃʊərəns/", homophone: "阿舒润斯", meaning: "保证", sentence: "She gave him her assurance.", translation: "她向他保证。", homophoneSentence: "希盖夫伊姆赫尔阿舒润斯." },
    { word: "Guarantee", phonetic: "/ˌɡærənˈtiː/", homophone: "加润提", meaning: "保证", sentence: "The product comes with a guarantee.", translation: "这个产品带有保证。", homophoneSentence: "泽普罗达克特卡姆斯维斯啊加润提." },
    { word: "Warranty", phonetic: "/ˈwɒrənti/", homophone: "沃润提", meaning: "保修", sentence: "The warranty covers repairs.", translation: "保修涵盖维修。", homophoneSentence: "泽沃润提卡弗斯瑞佩尔斯." }
];

// 添加函数
function addWordsToCategory(category, words) {
    let addedCount = 0;
    
    words.forEach(newWord => {
        if (!allWords.has(newWord.word.toLowerCase())) {
            const categoryStart = data.indexOf(`${category}: [`);
            if (categoryStart !== -1) {
                let openBrackets = 1;
                let categoryEnd = categoryStart + `${category}: [`.length;
                while (openBrackets > 0 && categoryEnd < data.length) {
                    if (data[categoryEnd] === '[') openBrackets++;
                    else if (data[categoryEnd] === ']') openBrackets--;
                    categoryEnd++;
                }
                
                if (openBrackets === 0) {
                    const insertPosition = data.lastIndexOf(']', categoryEnd);
                    const newWordString = `        { word: "${newWord.word}", phonetic: "${newWord.phonetic}", homophone: "${newWord.homophone}", meaning: "${newWord.meaning}", sentence: "${newWord.sentence}", translation: "${newWord.translation}", homophoneSentence: "${newWord.homophoneSentence}" },`;
                    data = data.substring(0, insertPosition) + '\n' + newWordString + '\n' + data.substring(insertPosition);
                    allWords.add(newWord.word.toLowerCase());
                    addedCount++;
                }
            }
        }
    });
    
    return addedCount;
}

// 添加 food 单词
const foodAdded = addWordsToCategory('food', foodWords);
console.log(`Food 分类添加了 ${foodAdded} 个新单词`);

// 添加 conversations 单词
const conversationsAdded = addWordsToCategory('conversations', conversationsWords);
console.log(`Conversations 分类添加了 ${conversationsAdded} 个新单词`);

// 保存文件
fs.writeFileSync('word-data.js', data, 'utf8');
console.log('word-data.js 已更新');
console.log(`第四批总共添加了 ${foodAdded + conversationsAdded} 个新单词`);
