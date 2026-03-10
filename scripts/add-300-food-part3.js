const fs = require('fs');
const path = require('path');

const newFoodWords = [
    { word: 'Pot roast', phonetic: '/pɒt roʊst/', homophone: '波特斯拉斯特', meaning: '炖牛肉', sentence: 'Pot roast is slow-cooked.', translation: '炖牛肉是慢炖的。', homophoneSentence: '波特斯拉斯特is slow-cooked.' },
    { word: 'Meatloaf', phonetic: '/ˈmiːtloʊf/', homophone: '米特洛夫', meaning: '肉 loaf', sentence: 'Meatloaf is baked meat.', translation: '肉 loaf是烤肉。', homophoneSentence: '米特洛夫is baked meat.' },
    { word: 'Corn dog', phonetic: '/kɔːrn dɒɡ/', homophone: '科恩道格', meaning: '玉米热狗', sentence: 'Corn dog is on stick.', translation: '玉米热狗在棍子上。', homophoneSentence: '科恩道格is on stick.' },
    { word: 'Chili', phonetic: '/ˈtʃɪli/', homophone: '奇利', meaning: '辣椒炖肉', sentence: 'Chili has beans and meat.', translation: '辣椒炖肉有豆和肉。', homophoneSentence: '奇利has beans and meat.' },
    { word: 'Gumbo', phonetic: '/ˈɡʌmboʊ/', homophone: '甘博', meaning: '秋葵汤', sentence: 'Gumbo is Creole dish.', translation: '秋葵汤是克里奥尔菜。', homophoneSentence: '甘博is Creole dish.' },
    { word: 'Jambalaya', phonetic: '/ˌdʒæmbəˈlaɪə/', homophone: '詹巴拉亚', meaning: '什锦饭', sentence: 'Jambalaya has rice and meat.', translation: '什锦饭有米饭和肉。', homophoneSentence: '詹巴拉亚has rice and meat.' },
    { word: 'Clam chowder', phonetic: '/klæm ˈtʃaʊdər/', homophone: '克拉姆乔德', meaning: '蛤蜊浓汤', sentence: 'Clam chowder is creamy.', translation: '蛤蜊浓汤很细腻。', homophoneSentence: '克拉姆乔德is creamy.' },
    { word: 'Lobster roll', phonetic: '/ˈlɒbstər roʊl/', homophone: '洛布斯特罗尔', meaning: '龙虾卷', sentence: 'Lobster roll has lobster meat.', translation: '龙虾卷有龙虾肉。', homophoneSentence: '洛布斯特罗尔has lobster meat.' },
    { word: 'Philly cheesesteak', phonetic: '/ˈfɪli ˈtʃiːzsteɪk/', homophone: '菲利奇兹斯泰克', meaning: '费城芝士牛排', sentence: 'Philly cheesesteak is sandwich.', translation: '费城芝士牛排是三明治。', homophoneSentence: '菲利奇兹斯泰克is sandwich.' },
    { word: 'Reuben sandwich', phonetic: '/ˈruːbən ˈsænwɪtʃ/', homophone: '鲁本桑维奇', meaning: '鲁本三明治', sentence: 'Reuben has corned beef.', translation: '鲁本三明治有腌牛肉。', homophoneSentence: '鲁本has corned beef.' },
    { word: 'Po boy', phonetic: '/poʊ bɔɪ/', homophone: '波博伊', meaning: '穷小子三明治', sentence: 'Po boy is New Orleans sandwich.', translation: '穷小子三明治是新奥尔良三明治。', homophoneSentence: '波博伊is New Orleans sandwich.' },
    { word: 'Gyros', phonetic: '/ˈdʒaɪroʊz/', homophone: '吉罗斯', meaning: '希腊烤肉卷', sentence: 'Gyros has lamb meat.', translation: '希腊烤肉卷有羊肉。', homophoneSentence: '吉罗斯has lamb meat.' },
    { word: 'Souvlaki', phonetic: '/suːˈvlɑːki/', homophone: '苏弗拉基', meaning: '希腊烤肉串', sentence: 'Souvlaki is grilled meat.', translation: '希腊烤肉串是烤肉。', homophoneSentence: '苏弗拉基is grilled meat.' },
    { word: 'Spanakopita', phonetic: '/ˌspænəkoʊˈpiːtə/', homophone: '斯帕纳科皮塔', meaning: '菠菜派', sentence: 'Spanakopita has spinach.', translation: '菠菜派有菠菜。', homophoneSentence: '斯帕纳科皮塔has spinach.' },
    { word: 'Moussaka', phonetic: '/muːˈsɑːkə/', homophone: '穆萨卡', meaning: '穆萨卡', sentence: 'Moussaka has eggplant.', translation: '穆萨卡有茄子。', homophoneSentence: '穆萨卡has eggplant.' },
    { word: 'Tzatziki', phonetic: '/tsɑːtˈziːki/', homophone: '察齐基', meaning: '希腊酸奶酱', sentence: 'Tzatziki has cucumber.', translation: '希腊酸奶酱有黄瓜。', homophoneSentence: '察齐基has cucumber.' },
    { word: 'Dolma', phonetic: '/ˈdoʊlmə/', homophone: '多尔马', meaning: '葡萄叶卷', sentence: 'Dolma is stuffed leaves.', translation: '葡萄叶卷是填馅叶子。', homophoneSentence: '多尔马is stuffed leaves.' },
    { word: 'Baklava', phonetic: '/ˈbɑːkləvə/', homophone: '巴克拉瓦', meaning: '巴克拉瓦', sentence: 'Baklava has nuts and honey.', translation: '巴克拉瓦有坚果和蜂蜜。', homophoneSentence: '巴克拉瓦has nuts and honey.' },
    { word: 'Kebab', phonetic: '/kɪˈbɑːb/', homophone: '凯巴布', meaning: '烤肉串', sentence: 'Kebab is grilled on skewer.', translation: '烤肉串是在签子上烤的。', homophoneSentence: '凯巴布is grilled on skewer.' },
    { word: 'Sushi roll', phonetic: '/ˈsuːʃi roʊl/', homophone: '苏希罗尔', meaning: '寿司卷', sentence: 'Sushi roll is wrapped in nori.', translation: '寿司卷用紫菜包裹。', homophoneSentence: '苏希罗尔is wrapped in nori.' },
    { word: 'Sashimi', phonetic: '/səˈʃiːmi/', homophone: '萨希米', meaning: '刺身', sentence: 'Sashimi is sliced raw fish.', translation: '刺身是切片生鱼。', homophoneSentence: '萨希米is sliced raw fish.' },
    { word: 'Miso soup', phonetic: '/ˈmiːsoʊ suːp/', homophone: '米索苏普', meaning: '味噌汤', sentence: 'Miso soup has tofu.', translation: '味噌汤有豆腐。', homophoneSentence: '米索苏普has tofu.' },
    { word: 'Teriyaki', phonetic: '/ˌteriˈjɑːki/', homophone: '特里亚基', meaning: '照烧', sentence: 'Teriyaki is sweet sauce.', translation: '照烧是甜酱。', homophoneSentence: '特里亚基is sweet sauce.' },
    { word: 'Tempura', phonetic: '/tempʊrə/', homophone: '坦普拉', meaning: '天妇罗', sentence: 'Tempura is light batter.', translation: '天妇罗是轻薄面糊。', homophoneSentence: '坦普拉is light batter.' },
    { word: 'Udon', phonetic: '/ˈuːdɒn/', homophone: '乌冬', meaning: '乌冬面', sentence: 'Udon is thick noodle.', translation: '乌冬面是粗面条。', homophoneSentence: '乌冬is thick noodle.' },
    { word: 'Soba', phonetic: '/ˈsoʊbə/', homophone: '索巴', meaning: '荞麦面', sentence: 'Soba is buckwheat noodle.', translation: '荞麦面是荞麦面条。', homophoneSentence: '索巴is buckwheat noodle.' },
    { word: 'Ramen', phonetic: '/ˈrɑːmən/', homophone: '拉面', meaning: '拉面', sentence: 'Ramen has rich broth.', translation: '拉面有浓郁汤底。', homophoneSentence: '拉面has rich broth.' },
    { word: 'Kimchi', phonetic: '/ˈkɪmtʃi/', homophone: '金奇', meaning: '泡菜', sentence: 'Kimchi is fermented cabbage.', translation: '泡菜是发酵白菜。', homophoneSentence: '金奇is fermented cabbage.' },
    { word: 'Bibimbap', phonetic: '/ˈbiːbɪmbɑːp/', homophone: '比宾巴普', meaning: '拌饭', sentence: 'Bibimbap is mixed rice.', translation: '拌饭是混合米饭。', homophoneSentence: '比宾巴普is mixed rice.' },
    { word: 'Bulgogi', phonetic: '/bʊlˈɡoʊɡi/', homophone: '布尔戈吉', meaning: '韩式烤肉', sentence: 'Bulgogi is marinated beef.', translation: '韩式烤肉是腌制牛肉。', homophoneSentence: '布尔戈吉is marinated beef.' },
    { word: 'Pad Thai', phonetic: '/pɑːd taɪ/', homophone: '帕德泰', meaning: '泰式炒面', sentence: 'Pad Thai has noodles.', translation: '泰式炒面有面条。', homophoneSentence: '帕德泰has noodles.' },
    { word: 'Tom Yum', phonetic: '/tɒm jʌm/', homophone: '汤姆扬', meaning: '冬阴功汤', sentence: 'Tom Yum is spicy soup.', translation: '冬阴功汤是辣汤。', homophoneSentence: '汤姆扬is spicy soup.' },
    { word: 'Green curry', phonetic: '/ɡriːn ˈkɜːri/', homophone: '格林咖喱', meaning: '绿咖喱', sentence: 'Green curry is Thai dish.', translation: '绿咖喱是泰国菜。', homophoneSentence: '格林咖喱is Thai dish.' },
    { word: 'Pho', phonetic: '/foʊ/', homophone: '福', meaning: '越南粉', sentence: 'Pho is noodle soup.', translation: '越南粉是汤面。', homophoneSentence: '福is noodle soup.' },
    { word: 'Banh mi', phonetic: '/bɑːn miː/', homophone: '班米', meaning: '越南三明治', sentence: 'Banh mi is Vietnamese sandwich.', translation: '越南三明治是越南三明治。', homophoneSentence: '班米is Vietnamese sandwich.' },
    { word: 'Spring roll', phonetic: '/sprɪŋ roʊl/', homophone: '斯普林罗尔', meaning: '春卷', sentence: 'Spring roll is crispy.', translation: '春卷很脆。', homophoneSentence: '斯普林罗尔is crispy.' },
    { word: 'Dumpling', phonetic: '/ˈdʌmplɪŋ/', homophone: '达姆普林', meaning: '饺子', sentence: 'Dumpling is filled dough.', translation: '饺子是有馅面团。', homophoneSentence: '达姆普林is filled dough.' },
    { word: 'Wonton', phonetic: '/ˈwɒntɒn/', homophone: '万通', meaning: '馄饨', sentence: 'Wonton is in soup.', translation: '馄饨在汤里。', homophoneSentence: '万通is in soup.' },
    { word: 'Dim sum', phonetic: '/dɪm sʌm/', homophone: '丁萨姆', meaning: '点心', sentence: 'Dim sum is small dish.', translation: '点心是小菜。', homophoneSentence: '丁萨姆is small dish.' },
    { word: 'Fried rice', phonetic: '/fraɪd raɪs/', homophone: '弗莱德莱斯', meaning: '炒饭', sentence: 'Fried rice has egg.', translation: '炒饭有蛋。', homophoneSentence: '弗莱德莱斯has egg.' },
    { word: 'Chow mein', phonetic: '/tʃaʊ meɪn/', homophone: '炒面', meaning: '炒面', sentence: 'Chow mein is stir-fried noodles.', translation: '炒面是炒面条。', homophoneSentence: '炒面is stir-fried noodles.' },
    { word: 'Kung Pao chicken', phonetic: '/kʌŋ paʊ ˈtʃɪkɪn/', homophone: '宫保奇肯', meaning: '宫保鸡丁', sentence: 'Kung Pao chicken is spicy.', translation: '宫保鸡丁是辣的。', homophoneSentence: '宫保奇肯is spicy.' },
    { word: 'Sweet and sour pork', phonetic: '/swiːt ənd saʊər pɔːrk/', homophone: '斯威特安德索尔 pork', meaning: '咕噜肉', sentence: 'Sweet and sour pork is tangy.', translation: '咕噜肉是酸甜的。', homophoneSentence: '斯威特安德索尔porkis tangy.' },
    { word: 'Peking duck', phonetic: '/ˈpiːkɪŋ dʌk/', homophone: '北京达克', meaning: '北京烤鸭', sentence: 'Peking duck is roasted.', translation: '北京烤鸭是烤的。', homophoneSentence: '北京达克is roasted.' },
    { word: 'Mapo tofu', phonetic: '/ˈmɑːpoʊ ˈtoʊfuː/', homophone: '麻婆托夫', meaning: '麻婆豆腐', sentence: 'Mapo tofu is spicy.', translation: '麻婆豆腐是辣的。', homophoneSentence: '麻婆托夫is spicy.' },
    { word: 'Hot pot', phonetic: '/hɒt pɒt/', homophone: '霍特波特', meaning: '火锅', sentence: 'Hot pot is communal meal.', translation: '火锅是聚餐。', homophoneSentence: '霍特波特is communal meal.' },
    { word: 'Congee', phonetic: '/ˈkɒndʒi/', homophone: '康吉', meaning: '粥', sentence: 'Congee is rice porridge.', translation: '粥是米粥。', homophoneSentence: '康吉is rice porridge.' },
    { word: 'Egg tart', phonetic: '/eɡ tɑːrt/', homophone: '艾格塔特', meaning: '蛋挞', sentence: 'Egg tart is custard pastry.', translation: '蛋挞是奶油糕点。', homophoneSentence: '艾格塔特is custard pastry.' },
    { word: 'Mooncake', phonetic: '/ˈmuːnkeɪk/', homophone: '穆恩凯克', meaning: '月饼', sentence: 'Mooncake is for festival.', translation: '月饼是节日的。', homophoneSentence: '穆恩凯克is for festival.' },
    { word: 'Bubble tea', phonetic: '/ˈbʌbəl tiː/', homophone: '巴布提', meaning: '珍珠奶茶', sentence: 'Bubble tea has pearls.', translation: '珍珠奶茶有珍珠。', homophoneSentence: '巴布提has pearls.' },
    { word: 'Taro', phonetic: '/ˈtɑːroʊ/', homophone: '塔罗', meaning: '芋头', sentence: 'Taro is purple root.', translation: '芋头是紫色根茎。', homophoneSentence: '塔罗is purple root.' },
    { word: 'Red bean', phonetic: '/red biːn/', homophone: '瑞德宾', meaning: '红豆', sentence: 'Red bean is sweet filling.', translation: '红豆是甜馅。', homophoneSentence: '瑞德宾is sweet filling.' },
    { word: 'Mung bean', phonetic: '/mʌŋ biːn/', homophone: '芒宾', meaning: '绿豆', sentence: 'Mung bean is used in dessert.', translation: '绿豆用于甜点。', homophoneSentence: '芒宾is used in dessert.' },
    { word: 'Lychee', phonetic: '/ˈlaɪtʃi/', homophone: '莱奇', meaning: '荔枝', sentence: 'Lychee is tropical fruit.', translation: '荔枝是热带水果。', homophoneSentence: '莱奇is tropical fruit.' },
    { word: 'Durian', phonetic: '/ˈdʊriən/', homophone: '杜里安', meaning: '榴莲', sentence: 'Durian has strong smell.', translation: '榴莲有强烈气味。', homophoneSentence: '杜里安has strong smell.' },
    { word: 'Mangosteen', phonetic: '/ˈmæŋɡəstiːn/', homophone: '芒戈斯汀', meaning: '山竹', sentence: 'Mangosteen is sweet fruit.', translation: '山竹是甜水果。', homophoneSentence: '芒戈斯汀is sweet fruit.' },
    { word: 'Rambutan', phonetic: '/ræmˈbuːtən/', homophone: '兰布坦', meaning: '红毛丹', sentence: 'Rambutan has hairy skin.', translation: '红毛丹有毛皮。', homophoneSentence: '兰布坦has hairy skin.' },
    { word: 'Jackfruit', phonetic: '/ˈdʒækfruːt/', homophone: '杰克fruit', meaning: '菠萝蜜', sentence: 'Jackfruit is large fruit.', translation: '菠萝蜜是大水果。', homophoneSentence: '杰克fruitis large fruit.' },
    { word: 'Dragon fruit', phonetic: '/ˈdræɡən fruːt/', homophone: '德拉贡fruit', meaning: '火龙果', sentence: 'Dragon fruit has pink skin.', translation: '火龙果有粉皮。', homophoneSentence: '德拉贡fruithas pink skin.' },
    { word: 'Passion fruit', phonetic: '/ˈpæʃən fruːt/', homophone: '帕申fruit', meaning: '百香果', sentence: 'Passion fruit is tangy.', translation: '百香果是酸的。', homophoneSentence: '帕申fruitis tangy.' },
    { word: 'Persimmon', phonetic: '/pərˈsɪmən/', homophone: '珀西蒙', meaning: '柿子', sentence: 'Persimmon is orange fruit.', translation: '柿子是橙色水果。', homophoneSentence: '珀西蒙is orange fruit.' },
    { word: 'Longan', phonetic: '/ˈlɒŋɡən/', homophone: '龙眼', meaning: '龙眼', sentence: 'Longan is similar to lychee.', translation: '龙眼类似荔枝。', homophoneSentence: '龙眼is similar to lychee.' },
    { word: 'Jujube', phonetic: '/ˈdʒuːdʒuːb/', homophone: '朱朱布', meaning: '枣', sentence: 'Jujube is red date.', translation: '枣是红枣。', homophoneSentence: '朱朱布is red date.' },
    { word: 'Goji berry', phonetic: '/ˈɡoʊdʒi ˈberi/', homophone: '戈吉贝瑞', meaning: '枸杞', sentence: 'Goji berry is superfood.', translation: '枸杞是超级食物。', homophoneSentence: '戈吉贝瑞is superfood.' },
    { word: 'Lotus seed', phonetic: '/ˈloʊtəs siːd/', homophone: '洛特斯西德', meaning: '莲子', sentence: 'Lotus seed is in dessert.', translation: '莲子在甜点里。', homophoneSentence: '洛特斯西德is in dessert.' },
    { word: 'Ginkgo nut', phonetic: '/ˈɡɪŋkoʊ nʌt/', homophone: '银杏纳特', meaning: '白果', sentence: 'Ginkgo nut is in soup.', translation: '白果在汤里。', homophoneSentence: '银杏纳特is in soup.' },
    { word: 'Chestnut', phonetic: '/ˈtʃesnʌt/', homophone: '切斯纳特', meaning: '栗子', sentence: 'Chestnut is roasted in winter.', translation: '栗子在冬天烤。', homophoneSentence: '切斯纳特is roasted in winter.' },
    { word: 'Water chestnut', phonetic: '/ˈwɔːtər ˈtʃesnʌt/', homophone: '沃特切斯纳特', meaning: '马蹄', sentence: 'Water chestnut is crunchy.', translation: '马蹄很脆。', homophoneSentence: '沃特切斯纳特is crunchy.' },
    { word: 'Bamboo shoot', phonetic: '/bæmˈbuː ʃuːt/', homophone: '班布舒特', meaning: '竹笋', sentence: 'Bamboo shoot is in stir-fry.', translation: '竹笋在炒菜里。', homophoneSentence: '班布舒特is in stir-fry.' },
    { word: 'Bok choy', phonetic: '/bɒk tʃɔɪ/', homophone: '博克乔伊', meaning: '小白菜', sentence: 'Bok choy is leafy green.', translation: '小白菜是叶菜。', homophoneSentence: '博克乔伊is leafy green.' },
    { word: 'Choy sum', phonetic: '/tʃɔɪ sʌm/', homophone: '乔伊萨姆', meaning: '菜心', sentence: 'Choy sum has yellow flowers.', translation: '菜心有黄花。', homophoneSentence: '乔伊萨姆has yellow flowers.' },
    { word: 'Gai lan', phonetic: '/ɡaɪ lɑːn/', homophone: '盖兰', meaning: '芥兰', sentence: 'Gai lan is Chinese broccoli.', translation: '芥兰是中国西兰花。', homophoneSentence: '盖兰is Chinese broccoli.' },
    { word: 'Napa cabbage', phonetic: '/ˈnɑːpə ˈkæbɪdʒ/', homophone: '纳帕卡比奇', meaning: '大白菜', sentence: 'Napa cabbage is used in kimchi.', translation: '大白菜用于泡菜。', homophoneSentence: '纳帕卡比奇is used in kimchi.' },
    { word: 'Daikon', phonetic: '/ˈdaɪkɒn/', homophone: '戴康', meaning: '白萝卜', sentence: 'Daikon is white radish.', translation: '白萝卜是白色萝卜。', homophoneSentence: '戴康is white radish.' },
    { word: 'Taro root', phonetic: '/ˈtɑːroʊ ruːt/', homophone: '塔罗鲁特', meaning: '芋头根', sentence: 'Taro root is starchy.', translation: '芋头根是淀粉质的。', homophoneSentence: '塔罗鲁特is starchy.' },
    { word: 'Lotus root', phonetic: '/ˈloʊtəs ruːt/', homophone: '洛特斯鲁特', meaning: '莲藕', sentence: 'Lotus root has holes.', translation: '莲藕有孔。', homophoneSentence: '洛特斯鲁特has holes.' },
    { word: 'Wood ear', phonetic: '/wʊd ɪr/', homophone: '伍德伊尔', meaning: '木耳', sentence: 'Wood ear is fungus.', translation: '木耳是真菌。', homophoneSentence: '伍德伊尔is fungus.' },
    { word: 'Shiitake mushroom', phonetic: '/ʃɪˈtɑːki ˈmʌʃruːm/', homophone: '希塔基马什鲁姆', meaning: '香菇', sentence: 'Shiitake mushroom is savory.', translation: '香菇是咸鲜的。', homophoneSentence: '希塔基马什鲁姆is savory.' },
    { word: 'Enoki mushroom', phonetic: '/ɪˈnoʊki ˈmʌʃruːm/', homophone: '伊诺基马什鲁姆', meaning: '金针菇', sentence: 'Enoki mushroom is thin.', translation: '金针菇很细。', homophoneSentence: '伊诺基马什鲁姆is thin.' },
    { word: 'Oyster mushroom', phonetic: '/ˈɔɪstər ˈmʌʃruːm/', homophone: '奥伊斯特马什鲁姆', meaning: '平菇', sentence: 'Oyster mushroom is fan-shaped.', translation: '平菇是扇形的。', homophoneSentence: '奥伊斯特马什鲁姆is fan-shaped.' },
    { word: 'King oyster mushroom', phonetic: '/kɪŋ ˈɔɪstər ˈmʌʃruːm/', homophone: '金奥伊斯特马什鲁姆', meaning: '杏鲍菇', sentence: 'King oyster mushroom is thick.', translation: '杏鲍菇很厚。', homophoneSentence: '金奥伊斯特马什鲁姆is thick.' },
    { word: 'Tofu skin', phonetic: '/ˈtoʊfuː skɪn/', homophone: '托夫斯金', meaning: '豆腐皮', sentence: 'Tofu skin is dried sheet.', translation: '豆腐皮是干片。', homophoneSentence: '托夫斯金is dried sheet.' },
    { word: 'Tofu puff', phonetic: '/ˈtoʊfuː pʌf/', homophone: '托夫帕夫', meaning: '油豆腐', sentence: 'Tofu puff is fried.', translation: '油豆腐是炸的。', homophoneSentence: '托夫帕夫is fried.' },
    { word: 'Firm tofu', phonetic: '/fɜːrm ˈtoʊfuː/', homophone: '弗姆托夫', meaning: '老豆腐', sentence: 'Firm tofu holds shape.', translation: '老豆腐保持形状。', homophoneSentence: '弗姆托夫holds shape.' },
    { word: 'Silken tofu', phonetic: '/ˈsɪlkən ˈtoʊfuː/', homophone: '西尔肯托夫', meaning: '嫩豆腐', sentence: 'Silken tofu is soft.', translation: '嫩豆腐很软。', homophoneSentence: '西尔肯托夫is soft.' },
    { word: 'Dried tofu', phonetic: '/draɪd ˈtoʊfuː/', homophone: '德拉伊德托夫', meaning: '豆腐干', sentence: 'Dried tofu is pressed.', translation: '豆腐干是压制的。', homophoneSentence: '德拉伊德托夫is pressed.' },
    { word: 'Fermented tofu', phonetic: '/fərˈmentɪd ˈtoʊfuː/', homophone: '弗门蒂德托夫', meaning: '腐乳', sentence: 'Fermented tofu is creamy.', translation: '腐乳是奶油状的。', homophoneSentence: '弗门蒂德托夫is creamy.' },
    { word: 'Century egg', phonetic: '/ˈsentʃəri eɡ/', homophone: '森丘里艾格', meaning: '皮蛋', sentence: 'Century egg is preserved.', translation: '皮蛋是腌制的。', homophoneSentence: '森丘里艾格is preserved.' },
    { word: 'Salted egg', phonetic: '/ˈsɔːltɪd eɡ/', homophone: '索尔蒂德艾格', meaning: '咸蛋', sentence: 'Salted egg has yolk.', translation: '咸蛋有蛋黄。', homophoneSentence: '索尔蒂德艾格has yolk.' },
    { word: 'Tea egg', phonetic: '/tiː eɡ/', homophone: '提艾格', meaning: '茶叶蛋', sentence: 'Tea egg is marbled.', translation: '茶叶蛋有花纹。', homophoneSentence: '提艾格is marbled.' },
    { word: 'Dried shrimp', phonetic: '/draɪd ʃrɪmp/', homophone: '德拉伊德施林普', meaning: '虾米', sentence: 'Dried shrimp is flavorful.', translation: '虾米很有味。', homophoneSentence: '德拉伊德施林普is flavorful.' },
    { word: 'Dried scallop', phonetic: '/draɪd ˈskæləp/', homophone: '德拉伊德斯卡洛普', meaning: '干贝', sentence: 'Dried scallop is luxury.', translation: '干贝是奢侈品。', homophoneSentence: '德拉伊德斯卡洛普is luxury.' },
    { word: 'Dried mushroom', phonetic: '/draɪd ˈmʌʃruːm/', homophone: '德拉伊德马什鲁姆', meaning: '干蘑菇', sentence: 'Dried mushroom is rehydrated.', translation: '干蘑菇要泡发。', homophoneSentence: '德拉伊德马什鲁姆is rehydrated.' },
    { word: 'Dried seaweed', phonetic: '/draɪd ˈsiːwiːd/', homophone: '德拉伊德西威德', meaning: '干海藻', sentence: 'Dried seaweed is crispy.', translation: '干海藻很脆。', homophoneSentence: '德拉伊德西威德is crispy.' },
    { word: 'Rice noodle', phonetic: '/raɪs ˈnuːdl/', homophone: '莱斯努德尔', meaning: '米粉', sentence: 'Rice noodle is gluten-free.', translation: '米粉是无麸质的。', homophoneSentence: '莱斯努德尔is gluten-free.' },
    { word: 'Glass noodle', phonetic: '/ɡlæs ˈnuːdl/', homophone: '格拉斯努德尔', meaning: '粉丝', sentence: 'Glass noodle is transparent.', translation: '粉丝是透明的。', homophoneSentence: '格拉斯努德尔is transparent.' },
    { word: 'Egg noodle', phonetic: '/eɡ ˈnuːdl/', homophone: '艾格努德尔', meaning: '鸡蛋面', sentence: 'Egg noodle has egg.', translation: '鸡蛋面有蛋。', homophoneSentence: '艾格努德尔has egg.' },
    { word: 'Wheat noodle', phonetic: '/wiːt ˈnuːdl/', homophone: '威特努德尔', meaning: '小麦面', sentence: 'Wheat noodle is chewy.', translation: '小麦面有嚼劲。', homophoneSentence: '威特努德尔is chewy.' },
    { word: 'Hand-pulled noodle', phonetic: '/hænd pʊld ˈnuːdl/', homophone: '汉德拉普努德尔', meaning: '拉面', sentence: 'Hand-pulled noodle is fresh.', translation: '拉面是新鲜的。', homophoneSentence: '汉德拉普努德尔is fresh.' },
    { word: 'Knife-cut noodle', phonetic: '/naɪf kʌt ˈnuːdl/', homophone: '奈夫卡特努德尔', meaning: '刀削面', sentence: 'Knife-cut noodle is thick.', translation: '刀削面很厚。', homophoneSentence: '奈夫卡特努德尔is thick.' },
    { word: 'Rice vermicelli', phonetic: '/raɪs ˌvɜːrmɪˈtʃeli/', homophone: '莱斯弗米切利', meaning: '米线', sentence: 'Rice vermicelli is thin.', translation: '米线很细。', homophoneSentence: '莱斯弗米切利is thin.' },
    { word: 'Mung bean noodle', phonetic: '/mʌŋ biːn ˈnuːdl/', homophone: '芒宾努德尔', meaning: '绿豆粉', sentence: 'Mung bean noodle is clear.', translation: '绿豆粉是透明的。', homophoneSentence: '芒宾努德尔is clear.' },
    { word: 'Sweet potato noodle', phonetic: '/swiːt pəˈteɪtoʊ ˈnuːdl/', homophone: '斯威特珀泰托努德尔', meaning: '红薯粉', sentence: 'Sweet potato noodle is chewy.', translation: '红薯粉有嚼劲。', homophoneSentence: '斯威特珀泰托努德尔is chewy.' },
    { word: 'Buckwheat noodle', phonetic: '/ˈbʌkwiːt ˈnuːdl/', homophone: '巴克威特努德尔', meaning: '荞麦面', sentence: 'Buckwheat noodle is healthy.', translation: '荞麦面很健康。', homophoneSentence: '巴克威特努德尔is healthy.' }
];

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

console.log('Reading word-data.js...');

const foodArrayStart = content.indexOf('food: [');
const foodArrayEnd = content.indexOf(']', foodArrayStart + 6);

if (foodArrayStart === -1 || foodArrayEnd === -1) {
    console.error('Could not find food array');
    process.exit(1);
}

console.log('Found food array at positions:', foodArrayStart, '-', foodArrayEnd);

const existingFoodContent = content.substring(foodArrayStart + 6, foodArrayEnd);
const existingWords = new Set();
const wordRegex = /word:\s*'([^']+)'/g;
let match;
while ((match = wordRegex.exec(existingFoodContent)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

console.log('Existing food words:', existingWords.size);

const uniqueNewWords = newFoodWords.filter(word => {
    const isDuplicate = existingWords.has(word.word.toLowerCase());
    if (isDuplicate) {
        console.log('Skipping duplicate:', word.word);
    }
    return !isDuplicate;
});

console.log('Unique new words to add:', uniqueNewWords.length);

if (uniqueNewWords.length === 0) {
    console.log('No new unique words to add');
    process.exit(0);
}

const newFoodEntries = uniqueNewWords.map(word => {
    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
}).join(',\n');

const oldContentBefore = content.substring(0, foodArrayEnd);
const oldContentAfter = content.substring(foodArrayEnd);

const newContent = oldContentBefore + ',\n' + newFoodEntries + oldContentAfter;

fs.writeFileSync(wordDataPath, newContent, 'utf8');

console.log(`Successfully added ${uniqueNewWords.length} new food words to word-data.js`);
console.log('Total food words now:', existingWords.size + uniqueNewWords.length);
