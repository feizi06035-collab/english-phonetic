const fs = require('fs');
const path = require('path');

const newFoodWords = [
    { word: 'Spring roll', phonetic: '/sprɪŋ roʊl/', homophone: '斯普林罗尔', meaning: '春卷', sentence: 'Spring rolls are crispy.', translation: '春卷很脆。', homophoneSentence: '斯普林罗尔兹啊克里斯皮.' },
    { word: 'Egg roll', phonetic: '/eɡ roʊl/', homophone: '艾格罗尔', meaning: '蛋卷', sentence: 'Egg rolls are deep-fried.', translation: '蛋卷是油炸的。', homophoneSentence: '艾格罗尔兹啊迪普-弗莱德.' },
    { word: 'Dumpling', phonetic: '/ˈdʌmplɪŋ/', homophone: '达姆普林', meaning: '饺子', sentence: 'Dumplings are filled dough.', translation: '饺子是有馅的面团。', homophoneSentence: '达姆普林兹啊菲尔德do.' },
    { word: 'Potsticker', phonetic: '/ˈpɒtstɪkər/', homophone: '波茨蒂克', meaning: '锅贴', sentence: 'Potstickers are pan-fried.', translation: '锅贴是煎的。', homophoneSentence: '波茨蒂克兹啊潘-弗莱德.' },
    { word: 'Wonton', phonetic: '/ˈwɒntɒn/', homophone: '万通', meaning: '馄饨', sentence: 'Wontons are in soup.', translation: '馄饨在汤里。', homophoneSentence: '万通兹啊insoup.' },
    { word: 'Dim sum', phonetic: '/dɪm sʌm/', homophone: '丁萨姆', meaning: '点心', sentence: 'Dim sum is Chinese snack.', translation: '点心是中国小吃。', homophoneSentence: '丁萨姆is Chinese snack.' },
    { word: 'Spring onion', phonetic: '/sprɪŋ ˈʌnjən/', homophone: '斯普林安尼恩', meaning: '葱', sentence: 'Spring onions are mild.', translation: '葱是温和的。', homophoneSentence: '斯普林安尼恩兹啊迈尔德.' },
    { word: 'Bok choy', phonetic: '/bɒk tʃɔɪ/', homophone: '博克乔伊', meaning: '小白菜', sentence: 'Bok choy is leafy green.', translation: '小白菜是叶菜。', homophoneSentence: '博克乔伊is leafy green.' },
    { word: 'Napa cabbage', phonetic: '/ˈnɑːpə ˈkæbɪdʒ/', homophone: '纳帕卡比奇', meaning: '大白菜', sentence: 'Napa cabbage is used in kimchi.', translation: '大白菜用于泡菜。', homophoneSentence: '纳帕卡比奇is used in kimchi.' },
    { word: 'Daikon', phonetic: '/ˈdaɪkɒn/', homophone: '戴康', meaning: '白萝卜', sentence: 'Daikon is white radish.', translation: '白萝卜是白色萝卜。', homophoneSentence: '戴康is white radish.' },
    { word: 'Bamboo shoot', phonetic: '/bæmˈbuː ʃuːt/', homophone: '班布舒特', meaning: '竹笋', sentence: 'Bamboo shoots are crunchy.', translation: '竹笋很脆。', homophoneSentence: '班布舒茨啊克朗奇.' },
    { word: 'Water chestnut', phonetic: '/ˈwɔːtər ˈtʃesnʌt/', homophone: '沃特切斯纳特', meaning: '马蹄', sentence: 'Water chestnuts are crisp.', translation: '马蹄很脆。', homophoneSentence: '沃特切斯纳茨啊克里斯普.' },
    { word: 'Lotus root', phonetic: '/ˈloʊtəs ruːt/', homophone: '洛特斯鲁特', meaning: '莲藕', sentence: 'Lotus root has holes.', translation: '莲藕有孔。', homophoneSentence: '洛特斯鲁特has holes.' },
    { word: 'Shiitake mushroom', phonetic: '/ʃɪˈtɑːki ˈmʌʃruːm/', homophone: '希塔基马什鲁姆', meaning: '香菇', sentence: 'Shiitake mushrooms are savory.', translation: '香菇是咸鲜的。', homophoneSentence: '希塔基马什鲁姆兹啊萨沃里.' },
    { word: 'Wood ear', phonetic: '/wʊd ɪr/', homophone: '伍德伊尔', meaning: '木耳', sentence: 'Wood ear is used in stir-fry.', translation: '木耳用于炒菜。', homophoneSentence: '伍德伊尔is used in stir-fry.' },
    { word: 'Tofu', phonetic: '/ˈtoʊfuː/', homophone: '托夫', meaning: '豆腐', sentence: 'Tofu is made from soybeans.', translation: '豆腐由大豆制成。', homophoneSentence: '托夫is made from soybeans.' },
    { word: 'Silken tofu', phonetic: '/ˈsɪlkən ˈtoʊfuː/', homophone: '西尔肯托夫', meaning: '嫩豆腐', sentence: 'Silken tofu is soft.', translation: '嫩豆腐很软。', homophoneSentence: '西尔肯托夫is soft.' },
    { word: 'Firm tofu', phonetic: '/fɜːrm ˈtoʊfuː/', homophone: '弗姆托夫', meaning: '老豆腐', sentence: 'Firm tofu holds shape.', translation: '老豆腐保持形状。', homophoneSentence: '弗姆托夫holds shape.' },
    { word: 'Tempeh', phonetic: '/ˈtempeɪ/', homophone: '坦佩', meaning: '豆豉', sentence: 'Tempeh is fermented soy.', translation: '豆豉是发酵大豆。', homophoneSentence: '坦佩is fermented soy.' },
    { word: 'Seitan', phonetic: '/ˈseɪtɑːn/', homophone: '塞坦', meaning: '面筋', sentence: 'Seitan is wheat protein.', translation: '面筋是小麦蛋白。', homophoneSentence: '塞坦is wheat protein.' },
    { word: 'Miso', phonetic: '/ˈmiːsoʊ/', homophone: '米索', meaning: '味噌', sentence: 'Miso is fermented paste.', translation: '味噌是发酵酱。', homophoneSentence: '米索is fermented paste.' },
    { word: 'Miso soup', phonetic: '/ˈmiːsoʊ suːp/', homophone: '米索苏普', meaning: '味噌汤', sentence: 'Miso soup is Japanese.', translation: '味噌汤是日本的。', homophoneSentence: '米索苏普is Japanese.' },
    { word: 'Sushi', phonetic: '/ˈsuːʃi/', homophone: '苏希', meaning: '寿司', sentence: 'Sushi has raw fish.', translation: '寿司有生鱼。', homophoneSentence: '苏希has raw fish.' },
    { word: 'Sashimi', phonetic: '/səˈʃiːmi/', homophone: '萨希米', meaning: '刺身', sentence: 'Sashimi is raw fish.', translation: '刺身是生鱼。', homophoneSentence: '萨希米is raw fish.' },
    { word: 'Nigiri', phonetic: '/nɪˈɡɪri/', homophone: '尼吉里', meaning: '握寿司', sentence: 'Nigiri is hand-pressed.', translation: '握寿司是手压的。', homophoneSentence: '尼吉里is hand-pressed.' },
    { word: 'Maki', phonetic: '/ˈmɑːki/', homophone: '马基', meaning: '卷寿司', sentence: 'Maki is rolled sushi.', translation: '卷寿司是卷起的寿司。', homophoneSentence: '马基is rolled sushi.' },
    { word: 'Tempura', phonetic: '/tempʊrə/', homophone: '坦普拉', meaning: '天妇罗', sentence: 'Tempura is battered and fried.', translation: '天妇罗是裹糊油炸的。', homophoneSentence: '坦普拉is battered and fried.' },
    { word: 'Ramen', phonetic: '/ˈrɑːmən/', homophone: '拉面', meaning: '拉面', sentence: 'Ramen has rich broth.', translation: '拉面有浓郁的汤。', homophoneSentence: '拉面has rich broth.' },
    { word: 'Udon', phonetic: '/ˈuːdɒn/', homophone: '乌冬', meaning: '乌冬面', sentence: 'Udon is thick noodle.', translation: '乌冬面是粗面条。', homophoneSentence: '乌冬is thick noodle.' },
    { word: 'Soba', phonetic: '/ˈsoʊbə/', homophone: '索巴', meaning: '荞麦面', sentence: 'Soba is buckwheat noodle.', translation: '荞麦面是荞麦面条。', homophoneSentence: '索巴is buckwheat noodle.' },
    { word: 'Sukiyaki', phonetic: '/ˌsuːkiˈjɑːki/', homophone: '苏基亚基', meaning: '寿喜烧', sentence: 'Sukiyaki is hot pot.', translation: '寿喜烧是火锅。', homophoneSentence: '苏基亚基is hot pot.' },
    { word: 'Teriyaki', phonetic: '/ˌteriˈjɑːki/', homophone: '特里亚基', meaning: '照烧', sentence: 'Teriyaki is sweet glaze.', translation: '照烧是甜酱汁。', homophoneSentence: '特里亚基is sweet glaze.' },
    { word: 'Yakitori', phonetic: '/ˌjɑːkiˈtɔːri/', homophone: '亚基托里', meaning: '烤鸡肉串', sentence: 'Yakitori is grilled chicken.', translation: '烤鸡肉串是烤鸡。', homophoneSentence: '亚基托里is grilled chicken.' },
    { word: 'Onigiri', phonetic: '/ˌoʊnɪˈɡɪri/', homophone: '奥尼吉里', meaning: '饭团', sentence: 'Onigiri is rice ball.', translation: '饭团是米饭团。', homophoneSentence: '奥尼吉里is rice ball.' },
    { word: 'Edamame', phonetic: '/ˌedəˈmɑːmeɪ/', homophone: '埃达梅', meaning: '毛豆', sentence: 'Edamame is young soybean.', translation: '毛豆是年轻的大豆。', homophoneSentence: '埃达梅is young soybean.' },
    { word: 'Wasabi', phonetic: '/wəˈsɑːbi/', homophone: '瓦萨比', meaning: '芥末', sentence: 'Wasabi is very spicy.', translation: '芥末很辣。', homophoneSentence: '瓦萨比is very spicy.' },
    { word: 'Pickled ginger', phonetic: '/ˈpɪkəld ˈdʒɪndʒər/', homophone: '皮克尔德金杰', meaning: '腌姜', sentence: 'Pickled ginger is pink.', translation: '腌姜是粉色的。', homophoneSentence: '皮克尔德金杰is pink.' },
    { word: 'Seaweed', phonetic: '/ˈsiːwiːd/', homophone: '西威德', meaning: '海藻', sentence: 'Seaweed is nutritious.', translation: '海藻有营养。', homophoneSentence: '西威德is nutritious.' },
    { word: 'Nori', phonetic: '/ˈnɔːri/', homophone: '诺里', meaning: '紫菜', sentence: 'Nori is dried seaweed.', translation: '紫菜是干海藻。', homophoneSentence: '诺里is dried seaweed.' },
    { word: 'Kimchi', phonetic: '/ˈkɪmtʃi/', homophone: '金奇', meaning: '泡菜', sentence: 'Kimchi is Korean side dish.', translation: '泡菜是韩国小菜。', homophoneSentence: '金奇is Korean side dish.' },
    { word: 'Bibimbap', phonetic: '/ˈbiːbɪmbɑːp/', homophone: '比宾巴普', meaning: '拌饭', sentence: 'Bibimbap has mixed rice.', translation: '拌饭有混合米饭。', homophoneSentence: '比宾巴普has mixed rice.' },
    { word: 'Bulgogi', phonetic: '/bʊlˈɡoʊɡi/', homophone: '布尔戈吉', meaning: '韩式烤肉', sentence: 'Bulgogi is marinated beef.', translation: '韩式烤肉是腌制牛肉。', homophoneSentence: '布尔戈吉is marinated beef.' },
    { word: 'Japchae', phonetic: '/ˈdʒɑːptʃeɪ/', homophone: '贾普切', meaning: '韩式粉丝', sentence: 'Japchae has glass noodles.', translation: '韩式粉丝有粉丝。', homophoneSentence: '贾普切has glass noodles.' },
    { word: 'Tteokbokki', phonetic: '/ˌtɔːkˈbɔːki/', homophone: '托克博基', meaning: '炒年糕', sentence: 'Tteokbokki is spicy.', translation: '炒年糕是辣的。', homophoneSentence: '托克博基is spicy.' },
    { word: 'Korean BBQ', phonetic: '/kəˈriːən biːbiːkjuː/', homophone: '科里安BBQ', meaning: '韩式烧烤', sentence: 'Korean BBQ is grilled meat.', translation: '韩式烧烤是烤肉。', homophoneSentence: '科里安BBQis grilled meat.' },
    { word: 'Pad Thai', phonetic: '/pɑːd taɪ/', homophone: '帕德泰', meaning: '泰式炒面', sentence: 'Pad Thai has peanuts.', translation: '泰式炒面有花生。', homophoneSentence: '帕德泰has peanuts.' },
    { word: 'Tom Yum', phonetic: '/tɒm jʌm/', homophone: '汤姆扬', meaning: '冬阴功汤', sentence: 'Tom Yum is sour soup.', translation: '冬阴功汤是酸汤。', homophoneSentence: '汤姆扬is sour soup.' },
    { word: 'Green curry', phonetic: '/ɡriːn ˈkɜːri/', homophone: '格林咖喱', meaning: '绿咖喱', sentence: 'Green curry is Thai dish.', translation: '绿咖喱是泰国菜。', homophoneSentence: '格林咖喱is Thai dish.' },
    { word: 'Red curry', phonetic: '/red ˈkɜːri/', homophone: '瑞德咖喱', meaning: '红咖喱', sentence: 'Red curry is spicy.', translation: '红咖喱是辣的。', homophoneSentence: '瑞德咖喱is spicy.' },
    { word: 'Massaman curry', phonetic: '/mæsəˈmɑːn ˈkɜːri/', homophone: '马萨曼咖喱', meaning: '马萨曼咖喱', sentence: 'Massaman curry is rich.', translation: '马萨曼咖喱很浓郁。', homophoneSentence: '马萨曼咖喱is rich.' },
    { word: 'Lemongrass', phonetic: '/ˈlemənɡræs/', homophone: '莱蒙格拉斯', meaning: '香茅', sentence: 'Lemongrass is aromatic.', translation: '香茅很香。', homophoneSentence: '莱蒙格拉斯is aromatic.' },
    { word: 'Galangal', phonetic: '/ɡəˈlæŋɡəl/', homophone: '加兰加尔', meaning: '高良姜', sentence: 'Galangal is like ginger.', translation: '高良姜像姜。', homophoneSentence: '加兰加尔is like ginger.' },
    { word: 'Fish sauce', phonetic: '/fɪʃ sɔːs/', homophone: 'fish索斯', meaning: '鱼露', sentence: 'Fish sauce is salty.', translation: '鱼露是咸的。', homophoneSentence: 'fish索斯is salty.' },
    { word: 'Coconut milk', phonetic: '/ˈkoʊkənʌt mɪlk/', homophone: '扣扣纳特米尔克', meaning: '椰奶', sentence: 'Coconut milk is creamy.', translation: '椰奶很细腻。', homophoneSentence: '扣扣纳特米尔克is creamy.' },
    { word: 'Pho', phonetic: '/foʊ/', homophone: '福', meaning: '越南粉', sentence: 'Pho is Vietnamese soup.', translation: '越南粉是越南汤。', homophoneSentence: '福is Vietnamese soup.' },
    { word: 'Banh mi', phonetic: '/bɑːn miː/', homophone: '班米', meaning: '越南三明治', sentence: 'Banh mi has pickled veggies.', translation: '越南三明治有腌菜。', homophoneSentence: '班米has pickled veggies.' },
    { word: 'Spring roll wrapper', phonetic: '/sprɪŋ roʊl ˈræpər/', homophone: '斯普林罗尔拉珀', meaning: '春卷皮', sentence: 'Spring roll wrapper is thin.', translation: '春卷皮很薄。', homophoneSentence: '斯普林罗尔拉珀is thin.' },
    { word: 'Rice paper', phonetic: '/raɪs ˈpeɪpər/', homophone: '莱斯佩珀', meaning: '米纸', sentence: 'Rice paper is translucent.', translation: '米纸是半透明的。', homophoneSentence: '莱斯佩珀is translucent.' },
    { word: 'Naan', phonetic: '/nɑːn/', homophone: '南', meaning: '印度烤饼', sentence: 'Naan is flatbread.', translation: '印度烤饼是扁面包。', homophoneSentence: '南is flatbread.' },
    { word: 'Roti', phonetic: '/ˈroʊti/', homophone: '罗蒂', meaning: '印度薄饼', sentence: 'Roti is unleavened bread.', translation: '印度薄饼是无酵面包。', homophoneSentence: '罗蒂is unleavened bread.' },
    { word: 'Chapati', phonetic: '/tʃəˈpɑːti/', homophone: '查帕蒂', meaning: '印度薄饼', sentence: 'Chapati is whole wheat.', translation: '印度薄饼是全麦的。', homophoneSentence: '查帕蒂is whole wheat.' },
    { word: 'Paratha', phonetic: '/pəˈrɑːtə/', homophone: '帕拉塔', meaning: '印度酥饼', sentence: 'Paratha is flaky.', translation: '印度酥饼是酥的。', homophoneSentence: '帕拉塔is flaky.' },
    { word: 'Samosa', phonetic: '/səˈmoʊsə/', homophone: '萨莫萨', meaning: '萨莫萨', sentence: 'Samosa is fried pastry.', translation: '萨莫萨是油炸糕点。', homophoneSentence: '萨莫萨is fried pastry.' },
    { word: 'Pakora', phonetic: '/pəˈkɔːrə/', homophone: '帕科拉', meaning: '印度炸蔬菜', sentence: 'Pakora is fritter.', translation: '印度炸蔬菜是油炸饼。', homophoneSentence: '帕科拉is fritter.' },
    { word: 'Biryani', phonetic: '/bɪˈriːɑːni/', homophone: '比里亚尼', meaning: '印度香饭', sentence: 'Biryani has spiced rice.', translation: '印度香饭有香料米饭。', homophoneSentence: '比里亚尼has spiced rice.' },
    { word: 'Dal', phonetic: '/dɑːl/', homophone: '达尔', meaning: '达尔', sentence: 'Dal is lentil soup.', translation: '达尔是扁豆汤。', homophoneSentence: '达尔is lentil soup.' },
    { word: 'Tandoori', phonetic: '/tænˈdʊri/', homophone: '坦杜里', meaning: '坦杜里', sentence: 'Tandoori is clay oven.', translation: '坦杜里是泥炉。', homophoneSentence: '坦杜里is clay oven.' },
    { word: 'Tikka', phonetic: '/ˈtiːkə/', homophone: '蒂卡', meaning: '蒂卡', sentence: 'Tikka is marinated meat.', translation: '蒂卡是腌制的肉。', homophoneSentence: '蒂卡is marinated meat.' },
    { word: 'Korma', phonetic: '/ˈkɔːrmə/', homophone: '科尔马', meaning: '科尔马', sentence: 'Korma is creamy curry.', translation: '科尔马是奶油咖喱。', homophoneSentence: '科尔马is creamy curry.' },
    { word: 'Vindaloo', phonetic: '/vɪnˈdɑːluː/', homophone: '温达卢', meaning: '温达卢', sentence: 'Vindaloo is very spicy.', translation: '温达卢很辣。', homophoneSentence: '温达卢is very spicy.' },
    { word: 'Raita', phonetic: '/ˈraɪtə/', homophone: '赖塔', meaning: '印度酸奶酱', sentence: 'Raita cools the palate.', translation: '印度酸奶酱能降温。', homophoneSentence: '赖塔cools the palate.' },
    { word: 'Chutney', phonetic: '/ˈtʃʌtni/', homophone: '查特尼', meaning: '印度酸辣酱', sentence: 'Chutney is condiment.', translation: '印度酸辣酱是调味品。', homophoneSentence: '查特尼is condiment.' },
    { word: 'Lassi', phonetic: '/ˈlɑːsi/', homophone: '拉西', meaning: '拉西', sentence: 'Lassi is yogurt drink.', translation: '拉西是酸奶饮料。', homophoneSentence: '拉西is yogurt drink.' },
    { word: 'Falafel', phonetic: '/fəˈlɑːfəl/', homophone: '法拉费', meaning: '法拉费', sentence: 'Falafel is chickpea fritter.', translation: '法拉费是鹰嘴豆炸饼。', homophoneSentence: '法拉费is chickpea fritter.' },
    { word: 'Hummus', phonetic: '/ˈhʌməs/', homophone: '胡姆斯', meaning: '鹰嘴豆泥', sentence: 'Hummus is chickpea dip.', translation: '鹰嘴豆泥是鹰嘴豆蘸酱。', homophoneSentence: '胡姆斯is chickpea dip.' },
    { word: 'Tahini', phonetic: '/təˈhiːni/', homophone: '塔希尼', meaning: '芝麻酱', sentence: 'Tahini is sesame paste.', translation: '芝麻酱是芝麻糊。', homophoneSentence: '塔希尼is sesame paste.' },
    { word: 'Pita', phonetic: '/ˈpiːtə/', homophone: '皮塔', meaning: '皮塔饼', sentence: 'Pita has pocket.', translation: '皮塔饼有口袋。', homophoneSentence: '皮塔has pocket.' },
    { word: 'Shawarma', phonetic: '/ʃəˈwɔːrmə/', homophone: '沙瓦玛', meaning: '沙瓦玛', sentence: 'Shawarma is rotating meat.', translation: '沙瓦玛是旋转烤肉。', homophoneSentence: '沙瓦玛is rotating meat.' },
    { word: 'Kebab', phonetic: '/kɪˈbɑːb/', homophone: '凯巴布', meaning: '烤肉串', sentence: 'Kebab is grilled meat.', translation: '烤肉串是烤肉。', homophoneSentence: '凯巴布is grilled meat.' },
    { word: 'Tabbouleh', phonetic: '/təˈbuːli/', homophone: '塔布勒', meaning: '塔布勒沙拉', sentence: 'Tabbouleh has parsley.', translation: '塔布勒沙拉有欧芹。', homophoneSentence: '塔布勒has parsley.' },
    { word: 'Baba ganoush', phonetic: '/bɑːbə ɡəˈnuːʃ/', homophone: '巴巴加努什', meaning: '茄子泥', sentence: 'Baba ganoush has eggplant.', translation: '茄子泥有茄子。', homophoneSentence: '巴巴加努什has eggplant.' },
    { word: 'Baklava', phonetic: '/ˈbɑːkləvə/', homophone: '巴克拉瓦', meaning: '巴克拉瓦', sentence: 'Baklava is sweet pastry.', translation: '巴克拉瓦是甜糕点。', homophoneSentence: '巴克拉瓦is sweet pastry.' },
    { word: 'Couscous', phonetic: '/ˈkuːskuːs/', homophone: '库斯库斯', meaning: '库斯库斯', sentence: 'Couscous is tiny pasta.', translation: '库斯库斯是小面食。', homophoneSentence: '库斯库斯is tiny pasta.' },
    { word: 'Tagine', phonetic: '/təˈʒiːn/', homophone: '塔吉', meaning: '塔吉锅', sentence: 'Tagine is slow-cooked.', translation: '塔吉锅是慢炖的。', homophoneSentence: '塔吉is slow-cooked.' },
    { word: 'Harissa', phonetic: '/həˈriːsə/', homophone: '哈里萨', meaning: '哈里萨辣酱', sentence: 'Harissa is chili paste.', translation: '哈里萨辣酱是辣椒酱。', homophoneSentence: '哈里萨is chili paste.' },
    { word: 'Paella', phonetic: '/paɪˈelə/', homophone: '帕埃利亚', meaning: '西班牙海鲜饭', sentence: 'Paella has saffron rice.', translation: '西班牙海鲜饭有藏红花米饭。', homophoneSentence: '帕埃利亚has saffron rice.' },
    { word: 'Tapas', phonetic: '/ˈtɑːpəs/', homophone: '塔帕斯', meaning: '塔帕斯', sentence: 'Tapas are small dishes.', translation: '塔帕斯是小菜。', homophoneSentence: '塔帕斯are small dishes.' },
    { word: 'Gazpacho', phonetic: '/ɡæsˈpɑːtʃoʊ/', homophone: '加斯帕乔', meaning: '西班牙冷汤', sentence: 'Gazpacho is cold soup.', translation: '西班牙冷汤是冷汤。', homophoneSentence: '加斯帕乔is cold soup.' },
    { word: 'Chorizo', phonetic: '/tʃəˈriːzoʊ/', homophone: '乔里佐', meaning: '西班牙香肠', sentence: 'Chorizo is spicy sausage.', translation: '西班牙香肠是辣香肠。', homophoneSentence: '乔里佐is spicy sausage.' },
    { word: 'Jamón', phonetic: '/həˈmoʊn/', homophone: '哈蒙', meaning: '西班牙火腿', sentence: 'Jamón is cured ham.', translation: '西班牙火腿是腌制火腿。', homophoneSentence: '哈蒙is cured ham.' },
    { word: 'Manchego', phonetic: '/mænˈtʃeɪɡoʊ/', homophone: '曼切戈', meaning: '曼切戈奶酪', sentence: 'Manchego is sheep cheese.', translation: '曼切戈奶酪是羊奶酪。', homophoneSentence: '曼切戈is sheep cheese.' },
    { word: 'Risotto', phonetic: '/rɪˈzɒtoʊ/', homophone: '里索托', meaning: '意大利烩饭', sentence: 'Risotto is creamy rice.', translation: '意大利烩饭是奶油米饭。', homophoneSentence: '里索托is creamy rice.' },
    { word: 'Pasta', phonetic: '/ˈpɑːstə/', homophone: '帕斯塔', meaning: '意大利面', sentence: 'Pasta comes in shapes.', translation: '意大利面有各种形状。', homophoneSentence: '帕斯塔comes in shapes.' },
    { word: 'Spaghetti', phonetic: '/spəˈɡeti/', homophone: '斯帕盖蒂', meaning: '意大利面条', sentence: 'Spaghetti is long pasta.', translation: '意大利面条是长面条。', homophoneSentence: '斯帕盖蒂is long pasta.' },
    { word: 'Penne', phonetic: '/ˈpeni/', homophone: '佩尼', meaning: '通心粉', sentence: 'Penne is tube pasta.', translation: '通心粉是管状面条。', homophoneSentence: '佩尼is tube pasta.' },
    { word: 'Rigatoni', phonetic: '/ˌrɪɡəˈtoʊni/', homophone: '里加托尼', meaning: '大通心粉', sentence: 'Rigatoni is large tube.', translation: '大通心粉是大管状。', homophoneSentence: '里加托尼is large tube.' },
    { word: 'Lasagna', phonetic: '/ləˈzɑːnjə/', homophone: '拉扎尼亚', meaning: '千层面', sentence: 'Lasagna has layers.', translation: '千层面有多层。', homophoneSentence: '拉扎尼亚has layers.' },
    { word: 'Ravioli', phonetic: '/ˌræviˈoʊli/', homophone: '拉维奥利', meaning: '意大利饺子', sentence: 'Ravioli is filled pasta.', translation: '意大利饺子是有馅面条。', homophoneSentence: '拉维奥利is filled pasta.' },
    { word: 'Tortellini', phonetic: '/ˌtɔːrtəˈliːni/', homophone: '托尔特利尼', meaning: '意大利馄饨', sentence: 'Tortellini is ring-shaped.', translation: '意大利馄饨是环形。', homophoneSentence: '托尔特利尼is ring-shaped.' },
    { word: 'Carbonara', phonetic: '/kɑːrbəˈnɑːrə/', homophone: '卡博纳拉', meaning: '卡博纳拉', sentence: 'Carbonara has egg sauce.', translation: '卡博纳拉有蛋酱。', homophoneSentence: '卡博纳拉has egg sauce.' },
    { word: 'Alfredo', phonetic: '/ælˈfreɪdoʊ/', homophone: '阿尔弗雷多', meaning: '阿尔弗雷多', sentence: 'Alfredo is cream sauce.', translation: '阿尔弗雷多是奶油酱。', homophoneSentence: '阿尔弗雷多is cream sauce.' },
    { word: 'Bolognese', phonetic: '/boʊləˈneɪz/', homophone: '博洛涅塞', meaning: '博洛涅塞', sentence: 'Bolognese is meat sauce.', translation: '博洛涅塞是肉酱。', homophoneSentence: '博洛涅塞is meat sauce.' },
    { word: 'Pesto', phonetic: '/ˈpestoʊ/', homophone: '佩斯托', meaning: '青酱', sentence: 'Pesto has basil.', translation: '青酱有罗勒。', homophoneSentence: '佩斯托has basil.' },
    { word: 'Marinara', phonetic: '/ˌmærɪˈnɑːrə/', homophone: '马里纳拉', meaning: '番茄酱', sentence: 'Marinara is tomato sauce.', translation: '番茄酱是番茄酱。', homophoneSentence: '马里纳拉is tomato sauce.' },
    { word: 'Bruschetta', phonetic: '/bruːˈsketə/', homophone: '布鲁斯凯塔', meaning: '意式烤面包', sentence: 'Bruschetta has tomato topping.', translation: '意式烤面包有番茄配料。', homophoneSentence: '布鲁斯凯塔has tomato topping.' },
    { word: 'Caprese', phonetic: '/kəˈpreɪzi/', homophone: '卡普雷塞', meaning: '卡普雷塞沙拉', sentence: 'Caprese has mozzarella.', translation: '卡普雷塞沙拉有马苏里拉。', homophoneSentence: '卡普雷塞has mozzarella.' },
    { word: 'Prosciutto', phonetic: '/proʊˈʃuːtoʊ/', homophone: '普罗休托', meaning: '意大利火腿', sentence: 'Prosciutto is cured ham.', translation: '意大利火腿是腌制火腿。', homophoneSentence: '普罗休托is cured ham.' },
    { word: 'Parmesan', phonetic: '/ˈpɑːrməzɑːn/', homophone: '帕尔马干酪', meaning: '帕尔马干酪', sentence: 'Parmesan is hard cheese.', translation: '帕尔马干酪是硬奶酪。', homophoneSentence: '帕尔马干酪is hard cheese.' },
    { word: 'Mozzarella', phonetic: '/ˌmɒtsəˈrelə/', homophone: '马苏里拉', meaning: '马苏里拉奶酪', sentence: 'Mozzarella is stretchy.', translation: '马苏里拉奶酪会拉丝。', homophoneSentence: '马苏里拉is stretchy.' },
    { word: 'Ricotta', phonetic: '/rɪˈkɒtə/', homophone: '里科塔', meaning: '里科塔奶酪', sentence: 'Ricotta is soft cheese.', translation: '里科塔奶酪是软奶酪。', homophoneSentence: '里科塔is soft cheese.' },
    { word: 'Gorgonzola', phonetic: '/ˌɡɔːrɡənˈzoʊlə/', homophone: '戈尔贡佐拉', meaning: '戈尔贡佐拉奶酪', sentence: 'Gorgonzola is blue cheese.', translation: '戈尔贡佐拉奶酪是蓝纹奶酪。', homophoneSentence: '戈尔贡佐拉is blue cheese.' },
    { word: 'Pecorino', phonetic: '/ˌpekəˈriːnoʊ/', homophone: '佩科里诺', meaning: '佩科里诺奶酪', sentence: 'Pecorino is sheep cheese.', translation: '佩科里诺奶酪是羊奶酪。', homophoneSentence: '佩科里诺is sheep cheese.' },
    { word: 'Gelato', phonetic: '/dʒəˈlɑːtoʊ/', homophone: '杰拉托', meaning: '意式冰淇淋', sentence: 'Gelato is dense.', translation: '意式冰淇淋很浓密。', homophoneSentence: '杰拉托is dense.' },
    { word: 'Croissant', phonetic: '/ˈkrwæsɒn/', homophone: '可颂', meaning: '可颂', sentence: 'Croissant is flaky pastry.', translation: '可颂是酥脆糕点。', homophoneSentence: '可颂is flaky pastry.' },
    { word: 'Baguette', phonetic: '/bæˈɡet/', homophone: '巴盖特', meaning: '法棍', sentence: 'Baguette is long bread.', translation: '法棍是长面包。', homophoneSentence: '巴盖特is long bread.' },
    { word: 'Brioche', phonetic: '/briːˈoʊʃ/', homophone: '布里奥什', meaning: '布里奥什', sentence: 'Brioche is rich bread.', translation: '布里奥什是浓郁面包。', homophoneSentence: '布里奥什is rich bread.' },
    { word: 'Quiche', phonetic: '/kiːʃ/', homophone: '基什', meaning: '法式咸派', sentence: 'Quiche has egg filling.', translation: '法式咸派有蛋馅。', homophoneSentence: '基什has egg filling.' },
    { word: 'Crepe', phonetic: '/kreɪp/', homophone: '克雷普', meaning: '可丽饼', sentence: 'Crepe is thin pancake.', translation: '可丽饼是薄煎饼。', homophoneSentence: '克雷普is thin pancake.' },
    { word: 'Souffle', phonetic: '/suːˈfleɪ/', homophone: '苏弗莱', meaning: '舒芙蕾', sentence: 'Souffle is fluffy.', translation: '舒芙蕾很蓬松。', homophoneSentence: '苏弗莱is fluffy.' },
    { word: 'Ratatouille', phonetic: '/ˌrætəˈtuːi/', homophone: '拉塔图伊', meaning: '普罗旺斯炖菜', sentence: 'Ratatouille has vegetables.', translation: '普罗旺斯炖菜有蔬菜。', homophoneSentence: '拉塔图伊has vegetables.' },
    { word: 'Bouillabaisse', phonetic: '/ˌbuːjəˈbeɪs/', homophone: '布亚贝斯', meaning: '马赛鱼汤', sentence: 'Bouillabaisse is fish soup.', translation: '马赛鱼汤是鱼汤。', homophoneSentence: '布亚贝斯is fish soup.' },
    { word: 'Coq au vin', phonetic: '/koʊk oʊ ˈvæn/', homophone: '科克欧文', meaning: '红酒炖鸡', sentence: 'Coq au vin has wine.', translation: '红酒炖鸡有红酒。', homophoneSentence: '科克欧文has wine.' },
    { word: 'Beef bourguignon', phonetic: '/biːf ˈbʊrɡɪnjən/', homophone: '比夫布尔吉尼翁', meaning: '勃艮第牛肉', sentence: 'Beef bourguignon is stew.', translation: '勃艮第牛肉是炖菜。', homophoneSentence: '比夫布尔吉尼翁is stew.' },
    { word: 'Escargot', phonetic: '/ˈeskɑːrɡoʊ/', homophone: '埃斯卡戈', meaning: '法式蜗牛', sentence: 'Escargot is snail dish.', translation: '法式蜗牛是蜗牛菜。', homophoneSentence: '埃斯卡戈is snail dish.' },
    { word: 'Foie gras', phonetic: '/fwɑː ɡrɑː/', homophone: '福瓦格拉', meaning: '鹅肝', sentence: 'Foie gras is luxury.', translation: '鹅肝是奢侈品。', homophoneSentence: '福瓦格拉is luxury.' },
    { word: 'Truffle', phonetic: '/ˈtrʌfəl/', homophone: '特鲁弗尔', meaning: '松露', sentence: 'Truffle is expensive fungus.', translation: '松露是昂贵的真菌。', homophoneSentence: '特鲁弗尔is expensive fungus.' },
    { word: 'Croque-monsieur', phonetic: '/kroʊk məˈsjɜːr/', homophone: '克罗克先生', meaning: '法式烤芝士三明治', sentence: 'Croque-monsieur has cheese.', translation: '法式烤芝士三明治有芝士。', homophoneSentence: '克罗克先生has cheese.' },
    { word: 'Steak frites', phonetic: '/steɪk friːts/', homophone: '牛排弗莱茨', meaning: '牛排薯条', sentence: 'Steak frites is classic.', translation: '牛排薯条是经典的。', homophoneSentence: '牛排弗莱茨is classic.' },
    { word: 'Cassoulet', phonetic: '/ˌkæsəˈleɪ/', homophone: '卡苏莱', meaning: '卡苏莱', sentence: 'Cassoulet has beans.', translation: '卡苏莱有豆子。', homophoneSentence: '卡苏莱has beans.' },
    { word: 'Fish pie', phonetic: '/fɪʃ paɪ/', homophone: 'fish派', meaning: '鱼肉派', sentence: 'Fish pie has fish filling.', translation: '鱼肉派有鱼馅。', homophoneSentence: 'fish派has fish filling.' },
    { word: 'Shepherds pie', phonetic: '/ˈʃepərdz paɪ/', homophone: '谢泼兹派', meaning: '牧羊人派', sentence: 'Shepherds pie has lamb.', translation: '牧羊人派有羊肉。', homophoneSentence: '谢泼兹派has lamb.' },
    { word: 'Cottage pie', phonetic: '/ˈkɒtɪdʒ paɪ/', homophone: '科蒂奇派', meaning: '农舍派', sentence: 'Cottage pie has beef.', translation: '农舍派有牛肉。', homophoneSentence: '科蒂奇派has beef.' },
    { word: 'Bangers and mash', phonetic: '/ˈbæŋɡərz ənd mæʃ/', homophone: '班杰兹安德马什', meaning: '香肠土豆泥', sentence: 'Bangers and mash is British.', translation: '香肠土豆泥是英国的。', homophoneSentence: '班杰兹安德马什is British.' },
    { word: 'Toad in the hole', phonetic: '/toʊd ɪn ðə hoʊl/', homophone: '托德因泽霍尔', meaning: '洞中蟾蜍', sentence: 'Toad in the hole has sausage.', translation: '洞中蟾蜍有香肠。', homophoneSentence: '托德因泽霍尔has sausage.' },
    { word: 'Yorkshire pudding', phonetic: '/ˈjɔːrkʃər ˈpʊdɪŋ/', homophone: '约克郡普丁', meaning: '约克郡布丁', sentence: 'Yorkshire pudding is puffy.', translation: '约克郡布丁很蓬松。', homophoneSentence: '约克郡普丁is puffy.' },
    { word: 'Roast beef', phonetic: '/roʊst biːf/', homophone: '罗斯特比夫', meaning: '烤牛肉', sentence: 'Roast beef is Sunday dish.', translation: '烤牛肉是周日菜肴。', homophoneSentence: '罗斯特比夫is Sunday dish.' },
    { word: 'Sunday roast', phonetic: '/ˈsʌndeɪ roʊst/', homophone: '森迪罗斯特', meaning: '周日烤肉', sentence: 'Sunday roast is tradition.', translation: '周日烤肉是传统。', homophoneSentence: '森迪罗斯特is tradition.' },
    { word: 'Ploughmans lunch', phonetic: '/ˈplaʊmənz lʌntʃ/', homophone: '普劳曼兹兰奇', meaning: '农夫午餐', sentence: 'Ploughmans lunch has cheese.', translation: '农夫午餐有奶酪。', homophoneSentence: '普劳曼兹兰奇has cheese.' },
    { word: 'Welsh rarebit', phonetic: '/welʃ ˈrerbɪt/', homophone: '威尔士雷比特', meaning: '威尔士干酪', sentence: 'Welsh rarebit has cheese sauce.', translation: '威尔士干酪有奶酪酱。', homophoneSentence: '威尔士雷比特has cheese sauce.' },
    { word: 'Haggis', phonetic: '/ˈhæɡɪs/', homophone: '哈吉斯', meaning: '哈吉斯', sentence: 'Haggis is Scottish dish.', translation: '哈吉斯是苏格兰菜。', homophoneSentence: '哈吉斯is Scottish dish.' },
    { word: 'Neeps and tatties', phonetic: '/niːps ənd ˈtætiz/', homophone: '尼普斯安德塔蒂兹', meaning: '萝卜土豆泥', sentence: 'Neeps and tatties go with haggis.', translation: '萝卜土豆泥配哈吉斯。', homophoneSentence: '尼普斯安德塔蒂兹go with haggis.' },
    { word: 'Scones', phonetic: '/skoʊnz/', homophone: '斯康兹', meaning: '司康饼', sentence: 'Scones are with cream tea.', translation: '司康饼配奶油茶。', homophoneSentence: '斯康兹are with cream tea.' },
    { word: 'Clotted cream', phonetic: '/ˈklɒtɪd kriːm/', homophone: '克洛蒂德克里姆', meaning: '凝脂奶油', sentence: 'Clotted cream is thick.', translation: '凝脂奶油很厚。', homophoneSentence: '克洛蒂德克里姆is thick.' },
    { word: 'Sausage roll', phonetic: '/ˈsɔːsɪdʒ roʊl/', homophone: '索萨奇罗尔', meaning: '香肠卷', sentence: 'Sausage roll is pastry.', translation: '香肠卷是糕点。', homophoneSentence: '索萨奇罗尔is pastry.' },
    { word: 'Cornish pasty', phonetic: '/ˈkɔːrnɪʃ ˈpæsti/', homophone: '康尼什帕斯蒂', meaning: '康沃尔馅饼', sentence: 'Cornish pasty has filling.', translation: '康沃尔馅饼有馅。', homophoneSentence: '康尼什帕斯蒂has filling.' },
    { word: 'Scotch egg', phonetic: '/skɒtʃ eɡ/', homophone: '斯科奇艾格', meaning: '苏格兰蛋', sentence: 'Scotch egg has boiled egg.', translation: '苏格兰蛋有煮蛋。', homophoneSentence: '斯科奇艾格has boiled egg.' },
    { word: 'Black pudding', phonetic: '/blæk ˈpʊdɪŋ/', homophone: '布莱克普丁', meaning: '黑布丁', sentence: 'Black pudding has blood.', translation: '黑布丁有血。', homophoneSentence: '布莱克普丁has blood.' },
    { word: 'Crumpet', phonetic: '/ˈkrʌmpɪt/', homophone: '克朗皮特', meaning: '英式松饼', sentence: 'Crumpet has holes.', translation: '英式松饼有孔。', homophoneSentence: '克朗皮特has holes.' },
    { word: 'Muffin', phonetic: '/ˈmʌfɪn/', homophone: '马芬', meaning: '马芬', sentence: 'Muffin is small cake.', translation: '马芬是小蛋糕。', homophoneSentence: '马芬is small cake.' },
    { word: 'English muffin', phonetic: '/ˈɪŋɡlɪʃ ˈmʌfɪn/', homophone: '英格利什马芬', meaning: '英式松饼', sentence: 'English muffin is split.', translation: '英式松饼是分开的。', homophoneSentence: '英格利什马芬is split.' },
    { word: 'Tea time', phonetic: '/tiː taɪm/', homophone: '提泰姆', meaning: '下午茶时间', sentence: 'Tea time is afternoon.', translation: '下午茶时间是下午。', homophoneSentence: '提泰姆is afternoon.' }
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
