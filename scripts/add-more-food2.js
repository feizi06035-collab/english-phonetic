const fs = require('fs');
const path = require('path');

const newFoodWords = [
    { word: 'Pretzel', phonetic: '/ˈpretsəl/', homophone: '普雷策尔', meaning: '椒盐卷饼', sentence: 'Pretzels are twisted snacks.', translation: '椒盐卷饼是扭结的零食。', homophoneSentence: '普雷策尔兹啊特威斯特斯内克斯.' },
    { word: 'Bagel chip', phonetic: '/ˈbeɪɡəl tʃɪp/', homophone: '贝果奇普', meaning: '贝果片', sentence: 'Bagel chips are crunchy.', translation: '贝果片很脆。', homophoneSentence: '贝果奇普兹啊克朗奇.' },
    { word: 'Croissant', phonetic: '/ˈkwɑːsɑːn/', homophone: '可颂', meaning: '羊角面包', sentence: 'Croissants are buttery pastries.', translation: '羊角面包是黄油糕点。', homophoneSentence: '可颂兹啊巴特瑞佩斯特里兹.' },
    { word: 'Danish pastry', phonetic: '/ˈdeɪnɪʃ ˈpeɪstri/', homophone: '戴尼希佩斯特里', meaning: '丹麦酥', sentence: 'Danish pastry has fruit filling.', translation: '丹麦酥有水果馅。', homophoneSentence: '戴尼希佩斯特里哈兹弗鲁特菲林.' },
    { word: 'Scone', phonetic: '/skoʊn/', homophone: '斯康', meaning: '司康饼', sentence: 'Scones are served with tea.', translation: '司康饼配茶食用。', homophoneSentence: '斯康兹啊瑟夫德威兹提.' },
    { word: 'Biscotti', phonetic: '/bɪˈskɔːti/', homophone: '比斯考蒂', meaning: '意式脆饼', sentence: 'Biscotti are twice-baked.', translation: '意式脆饼是烤两次的。', homophoneSentence: '比斯考蒂啊特外斯-贝克特.' },
    { word: 'Macaron', phonetic: '/ˌmækəˈrɒn/', homophone: '马卡龙', meaning: '马卡龙', sentence: 'Macarons are colorful cookies.', translation: '马卡龙是彩色的饼干。', homophoneSentence: '马卡龙兹啊卡勒弗尔库基兹.' },
    { word: 'Madeleine', phonetic: '/ˌmædəˈlɛn/', homophone: '马德琳', meaning: '玛德琳蛋糕', sentence: 'Madeleines are shell-shaped.', translation: '玛德琳蛋糕是贝壳形状的。', homophoneSentence: '马德琳兹啊谢尔-谢普特.' },
    { word: 'Canelé', phonetic: '/kænəˈleɪ/', homophone: '卡内雷', meaning: '可丽露', sentence: 'Canelé has a caramelized crust.', translation: '可丽露有焦糖外壳。', homophoneSentence: '卡内雷哈兹啊卡拉麦莱兹德克拉斯特.' },
    { word: 'Financier', phonetic: /ˌfɪnənˈsjeɪ/, homophone: '菲南谢', meaning: '费南雪', sentence: 'Financier is almond cake.', translation: '费南雪是杏仁蛋糕。', homophoneSentence: '菲南谢is阿蒙德凯克.' },
    { word: 'Opera cake', phonetic: '/ˈɒpərə keɪk/', homophone: '奥佩拉凯克', meaning: '歌剧院蛋糕', sentence: 'Opera cake has coffee layers.', translation: '歌剧院蛋糕有咖啡层。', homophoneSentence: '奥佩拉凯克哈兹咖啡莱尔兹.' },
    { word: 'Tiramisu', phonetic: /ˌtɪrəˈmiːsuː/, homophone: '提拉米苏', meaning: '提拉米苏', sentence: 'Tiramisu is Italian dessert.', translation: '提拉米苏是意大利甜点。', homophoneSentence: '提拉米苏is意大利安迪泽特.' },
    { word: 'Panna cotta', phonetic: /ˈpɑːnə ˈkɑːtə/, homophone: '潘纳科塔', meaning: '意式奶冻', sentence: 'Panna cotta is creamy dessert.', translation: '意式奶冻是奶油甜点。', homophoneSentence: '潘纳科塔is克里米迪泽特.' },
    { word: 'Crème brûlée', phonetic: /krem bruːˈleɪ/, homophone: '克雷姆布鲁雷', meaning: '焦糖布丁', sentence: 'Crème brûlée has caramel top.', translation: '焦糖布丁有焦糖顶。', homophoneSentence: '克雷姆布鲁雷哈兹卡拉麦托普.' },
    { word: 'Mousse', phonetic: '/muːs/', homophone: '慕斯', meaning: '慕斯', sentence: 'Mousse is light and airy.', translation: '慕斯轻盈蓬松。', homophoneSentence: '慕斯is莱特安德埃里.' },
    { word: 'Soufflé', phonetic: /suːˈfleɪ/', homophone: '苏弗莱', meaning: '舒芙蕾', sentence: 'Soufflé rises when baked.', translation: '舒芙蕾烤的时候会膨胀。', homophoneSentence: '苏弗莱赖兹温贝克特.' },
    { word: 'Cannoli', phonetic: /kəˈnoʊli/, homophone: '卡诺利', meaning: '奶油甜馅煎饼卷', sentence: 'Cannoli are Sicilian pastries.', translation: '奶油甜馅煎饼卷是西西里糕点。', homophoneSentence: '卡诺利兹啊西西里安佩斯特里兹.' },
    { word: 'Profiterole', phonetic: /prəˈfɪtəroʊl/, homophone: '普罗菲托罗尔', meaning: '泡芙', sentence: 'Profiteroles are filled with cream.', translation: '泡芙填满了奶油。', homophoneSentence: '普罗菲托罗尔兹啊菲尔德威兹克里姆.' },
    { word: 'Éclair', phonetic: /eɪˈklɛər/, homophone: '埃克莱尔', meaning: '闪电泡芙', sentence: 'Éclair is long pastry.', translation: '闪电泡芙是长糕点。', homophoneSentence: '埃克莱尔is朗佩斯特里.' },
    { word: 'Choux pastry', phonetic: /ʃuː ˈpeɪstri/, homophone: '舒佩斯特里', meaning: '泡芙面团', sentence: 'Choux pastry is used for éclairs.', translation: '泡芙面团用于闪电泡芙。', homophoneSentence: '舒佩斯特里is优兹德佛埃克莱尔兹.' },
    { word: 'Shortbread', phonetic: '/ˈʃɔːrtbred/', homophone: '肖特布瑞德', meaning: '酥饼', sentence: 'Shortbread is buttery cookie.', translation: '酥饼是黄油饼干。', homophoneSentence: '肖特布瑞德is巴特瑞库基.' },
    { word: 'Gingerbread', phonetic: '/ˈdʒɪndʒərbred/', homophone: '金杰布瑞德', meaning: '姜饼', sentence: 'Gingerbread is spicy cookie.', translation: '姜饼是辣味饼干。', homophoneSentence: '金杰布瑞德is斯派西库基.' },
    { word: 'Sugar cookie', phonetic: '/ˈʃʊɡər ˈkʊki/', homophone: '舒格尔库基', meaning: '糖霜饼干', sentence: 'Sugar cookies are decorated.', translation: '糖霜饼干有装饰。', homophoneSentence: '舒格尔库基兹啊德克雷提德.' },
    { word: 'Snickerdoodle', phonetic: /ˈsnɪkərduːdl/, homophone: '斯尼克杜德尔', meaning: '肉桂糖饼干', sentence: 'Snickerdoodle has cinnamon.', translation: '肉桂糖饼干有肉桂。', homophoneSentence: '斯尼克杜德尔哈兹辛纳蒙.' },
    { word: 'Oatmeal cookie', phonetic: /ˈoʊtmiːl ˈkʊki/, homophone: '欧特米尔库基', meaning: '燕麦饼干', sentence: 'Oatmeal cookies are chewy.', translation: '燕麦饼干有嚼劲。', homophoneSentence: '欧特米尔库基兹啊丘伊.' },
    { word: 'Peanut butter cookie', phonetic: /ˈpiːnʌt ˈbʌtər ˈkʊki/, homophone: '皮纳特巴特尔库基', meaning: '花生酱饼干', sentence: 'Peanut butter cookies are popular.', translation: '花生酱饼干很受欢迎。', homophoneSentence: '皮纳特巴特尔库基兹啊帕皮尤勒.' },
    { word: 'Chocolate chip cookie', phonetic: /ˈtʃɔːklət tʃɪp ˈkʊki/, homophone: '乔克利特奇普库基', meaning: '巧克力豆饼干', sentence: 'Chocolate chip cookies are classic.', translation: '巧克力豆饼干是经典的。', homophoneSentence: '乔克利特奇普库基兹啊克拉西克.' },
    { word: 'Macadamia cookie', phonetic: /ˌmækəˈdeɪmiə ˈkʊki/, homophone: '麦克德米娅库基', meaning: '夏威夷果饼干', sentence: 'Macadamia cookies are rich.', translation: '夏威夷果饼干很浓郁。', homophoneSentence: '麦克德米娅库基兹啊瑞奇.' },
    { word: 'Almond biscotti', phonetic: /ˈɑːmənd bɪˈskɔːti/, homophone: '阿蒙德比斯考蒂', meaning: '杏仁意式脆饼', sentence: 'Almond biscotti are crunchy.', translation: '杏仁意式脆饼很脆。', homophoneSentence: '阿蒙德比斯考蒂啊克朗奇.' },
    { word: 'Lemon bar', phonetic: /ˈlemən bɑːr/, homophone: '莱蒙巴尔', meaning: '柠檬条', sentence: 'Lemon bars are tangy.', translation: '柠檬条味道浓郁。', homophoneSentence: '莱蒙巴尔兹啊坦吉.' },
    { word: 'Key lime pie', phonetic: /kiː laɪm paɪ/, homophone: '基莱姆派', meaning: '酸橙派', sentence: 'Key lime pie is Florida specialty.', translation: '酸橙派是佛罗里达特色。', homophoneSentence: '基莱姆派is佛罗里达斯佩舍里提.' },
    { word: 'Pecan pie', phonetic: /pɪˈkæn paɪ/, homophone: '皮坎派', meaning: '碧根果派', sentence: 'Pecan pie is sweet and nutty.', translation: '碧根果派又甜又有坚果味。', homophoneSentence: '皮坎派is斯威特安德纳蒂.' },
    { word: 'Apple pie', phonetic: /ˈæpl paɪ/, homophone: '艾坡派', meaning: '苹果派', sentence: 'Apple pie is American classic.', translation: '苹果派是美国经典。', homophoneSentence: '艾坡派is阿美瑞肯克拉西克.' },
    { word: 'Pumpkin pie', phonetic: /ˈpʌmpkɪn paɪ/, homophone: '帕姆普金派', meaning: '南瓜派', sentence: 'Pumpkin pie is for Thanksgiving.', translation: '南瓜派是感恩节的。', homophoneSentence: '帕姆普金派is佛森克斯吉文.' },
    { word: 'Cherry pie', phonetic: /ˈtʃeri paɪ/, homophone: '切瑞派', meaning: '樱桃派', sentence: 'Cherry pie has bright red filling.', translation: '樱桃派有鲜红的馅。', homophoneSentence: '切瑞派哈兹布赖特瑞德菲林.' },
    { word: 'Blueberry pie', phonetic: /ˈbluːbəri paɪ/, homophone: '布鲁贝瑞派', meaning: '蓝莓派', sentence: 'Blueberry pie is summer dessert.', translation: '蓝莓派是夏天的甜点。', homophoneSentence: '布鲁贝瑞派is萨默迪泽特.' },
    { word: 'Peach pie', phonetic: /piːtʃ paɪ/, homophone: '皮奇派', meaning: '桃子派', sentence: 'Peach pie uses fresh peaches.', translation: '桃子派用新鲜桃子。', homophoneSentence: '皮奇派尤兹斯弗雷什皮奇兹.' },
    { word: 'Lemon meringue pie', phonetic: /ˈlemən məˈræŋ paɪ/, homophone: '莱蒙默兰派', meaning: '柠檬蛋白派', sentence: 'Lemon meringue pie has fluffy top.', translation: '柠檬蛋白派有蓬松的顶。', homophoneSentence: '莱蒙默兰派哈兹弗拉菲托普.' },
    { word: 'Coconut cream pie', phonetic: /ˈkoʊkənʌt kriːm paɪ/, homophone: '扣扣纳特克里姆派', meaning: '椰子奶油派', sentence: 'Coconut cream pie is tropical.', translation: '椰子奶油派是热带风味的。', homophoneSentence: '扣扣纳特克里姆派is特罗皮卡尔.' },
    { word: 'Banana cream pie', phonetic: /bəˈnænə kriːm paɪ/, homophone: '巴娜娜克里姆派', meaning: '香蕉奶油派', sentence: 'Banana cream pie is creamy.', translation: '香蕉奶油派很细腻。', homophoneSentence: '巴娜娜克里姆派is克里米.' },
    { word: 'Chocolate pie', phonetic: /ˈtʃɔːklət paɪ/, homophone: '乔克利特派', meaning: '巧克力派', sentence: 'Chocolate pie is rich dessert.', translation: '巧克力派是浓郁的甜点。', homophoneSentence: '乔克利特派is瑞奇迪泽特.' },
    { word: 'Shoofly pie', phonetic: /ˈʃuːflaɪ paɪ/, homophone: '舒弗莱派', meaning: '糖蜜派', sentence: 'Shoofly pie is Pennsylvania Dutch.', translation: '糖蜜派是宾夕法尼亚荷兰风味。', homophoneSentence: '舒弗莱派is宾夕法尼亚达奇.' },
    { word: 'Chess pie', phonetic: /tʃɛs paɪ/, homophone: '切斯派', meaning: 'chess派', sentence: 'Chess pie is simple and sweet.', translation: 'chess派简单又甜。', homophoneSentence: '切斯派is西姆普尔安德斯威特.' },
    { word: 'Buttermilk pie', phonetic: /ˈbʌtərmɪlk paɪ/, homophone: '巴特尔米尔克派', meaning: '酪乳派', sentence: 'Buttermilk pie is tangy.', translation: '酪乳派味道浓郁。', homophoneSentence: '巴特尔米尔克派is坦吉.' },
    { word: 'Sweet potato pie', phonetic: /swiːt pəˈteɪtoʊ paɪ/, homophone: '斯威特珀泰托派', meaning: '红薯派', sentence: 'Sweet potato pie is similar to pumpkin.', translation: '红薯派类似南瓜派。', homophoneSentence: '斯威特珀泰托派is西米拉图帕姆普金.' },
    { word: 'Rhubarb pie', phonetic: /ˈruːbɑːrb paɪ/, homophone: '鲁巴布派', meaning: '大黄派', sentence: 'Rhubarb pie is tart.', translation: '大黄派有点酸。', homophoneSentence: '鲁巴布派is塔特.' },
    { word: 'Strawberry rhubarb pie', phonetic: /ˈstrɔːbəri ˈruːbɑːrb paɪ/, homophone: '斯特罗贝瑞鲁巴布派', meaning: '草莓大黄派', sentence: 'Strawberry rhubarb pie is classic combo.', translation: '草莓大黄派是经典组合。', homophoneSentence: '斯特罗贝瑞鲁巴布派is克拉西克康博.' },
    { word: 'Blackberry pie', phonetic: /ˈblækbəri paɪ/, homophone: '布莱克贝瑞派', meaning: '黑莓派', sentence: 'Blackberry pie is juicy.', translation: '黑莓派很多汁。', homophoneSentence: '布莱克贝瑞派is朱西.' },
    { word: 'Raspberry pie', phonetic: /ˈrɑːzbəri paɪ/, homophone: '拉斯贝瑞派', meaning: '覆盆子派', sentence: 'Raspberry pie is delicate.', translation: '覆盆子派很精致。', homophoneSentence: '拉斯贝瑞派is迪利凯特.' },
    { word: 'Apricot pie', phonetic: /ˈeɪprɪkɑːt paɪ/, homophone: '艾普瑞卡特派', meaning: '杏子派', sentence: 'Apricot pie is golden.', translation: '杏子派是金色的。', homophoneSentence: '艾普瑞卡特派is戈尔登.' },
    { word: 'Plum pie', phonetic: /plʌm paɪ/, homophone: '普拉姆派', meaning: '李子派', sentence: 'Plum pie uses ripe plums.', translation: '李子派用成熟的李子。', homophoneSentence: '普拉姆派尤兹赖普普拉姆兹.' },
    { word: 'Date pie', phonetic: /deɪt paɪ/, homophone: '戴特派', meaning: '椰枣派', sentence: 'Date pie is very sweet.', translation: '椰枣派很甜。', homophoneSentence: '戴特派is歪瑞斯威特.' },
    { word: 'Fig pie', phonetic: /fɪɡ paɪ/, homophone: '菲格派', meaning: '无花果派', sentence: 'Fig pie has unique flavor.', translation: '无花果派有独特风味。', homophoneSentence: '菲格派哈兹尤尼克弗雷沃尔.' },
    { word: 'Guava pie', phonetic: /ˈɡwɑːvə paɪ/, homophone: '瓜哇派', meaning: '番石榴派', sentence: 'Guava pie is tropical.', translation: '番石榴派是热带风味。', homophoneSentence: '瓜哇派is特罗皮卡尔.' },
    { word: 'Mango pie', phonetic: /ˈmæŋɡoʊ paɪ/, homophone: '芒勾派', meaning: '芒果派', sentence: 'Mango pie is bright and sweet.', translation: '芒果派又鲜亮又甜。', homophoneSentence: '芒勾派is布赖特安德斯威特.' },
    { word: 'Pineapple pie', phonetic: /ˈpaɪnæpl paɪ/, homophone: '派纳普派', meaning: '菠萝派', sentence: 'Pineapple pie is tangy.', translation: '菠萝派味道浓郁。', homophoneSentence: '派纳普派is坦吉.' },
    { word: 'Coconut pie', phonetic: /ˈkoʊkənʌt paɪ/, homophone: '扣扣纳特派', meaning: '椰子派', sentence: 'Coconut pie has shredded coconut.', translation: '椰子派有椰丝。', homophoneSentence: '扣扣纳特派哈兹施莱德扣扣纳特.' },
    { word: 'Banana pie', phonetic: /bəˈnænə paɪ/, homophone: '巴娜娜派', meaning: '香蕉派', sentence: 'Banana pie is creamy.', translation: '香蕉派很细腻。', homophoneSentence: '巴娜娜派is克里米.' }
];

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

const existingFoodMatch = content.match(/food:\s*\[([\s\S]*?)\]/);
if (!existingFoodMatch) {
    console.error('Could not find food array in word-data.js');
    process.exit(1);
}

const existingFoodContent = existingFoodMatch[1];
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

const foodArrayMatch = content.match(/(food:\s*\[[\s\S]*?\n    \])/);
if (!foodArrayMatch) {
    console.error('Could not find food array pattern');
    process.exit(1);
}

const oldFoodArray = foodArrayMatch[1];
const newFoodArray = oldFoodArray.replace(/\]$/, `,\n${newFoodEntries}\n    ]`);

content = content.replace(foodArrayMatch[1], newFoodArray);

fs.writeFileSync(wordDataPath, content, 'utf8');

console.log(`Successfully added ${uniqueNewWords.length} new food words to word-data.js`);
console.log('Total food words now:', existingWords.size + uniqueNewWords.length);
