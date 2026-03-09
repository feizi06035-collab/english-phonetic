// 为数字分类生成100个新单词的脚本
const fs = require('fs');
const path = require('path');

// 生成100个新的数字相关单词
const newNumbers = [
    // 更大的数字
    { word: 'Ten thousand', phonetic: '/ten ˈθaʊznd/', homophone: '坦萨赞德', meaning: '一万', sentence: 'Ten thousand dollars.', translation: '一万美元。', homophoneSentence: '坦萨赞德道乐兹.' },
    { word: 'Hundred thousand', phonetic: '/ˈhʌndrəd ˈθaʊznd/', homophone: '汉德瑞德萨赞德', meaning: '十万', sentence: 'Hundred thousand people.', translation: '十万人。', homophoneSentence: '汉德瑞德萨赞德皮普欧.' },
    { word: 'Millionaire', phonetic: '/ˌmɪljəˈneə(r)/', homophone: '米尔金艾尔', meaning: '百万富翁', sentence: 'He is a millionaire.', translation: '他是个百万富翁。', homophoneSentence: '希依兹啊米尔金艾尔.' },
    { word: 'Billionaire', phonetic: '/ˌbɪljəˈneə(r)/', homophone: '比尔金艾尔', meaning: '十亿富翁', sentence: 'She is a billionaire.', translation: '她是个十亿富翁。', homophoneSentence: '西依兹啊比尔金艾尔.' },
    { word: 'Trillion', phonetic: '/ˈtrɪljən/', homophone: '吹林', meaning: '万亿', sentence: 'A trillion stars.', translation: '一万亿颗星星。', homophoneSentence: '啊吹林星兹.' },
    { word: 'Quadrillion', phonetic: '/kwɒˈdrɪljən/', homophone: '阔德林', meaning: '千万亿', sentence: 'Quadrillion bytes.', translation: '千万亿字节。', homophoneSentence: '阔德林拜茨.' },
    
    // 分数表达
    { word: 'Third', phonetic: '/θɜːd/', homophone: '瑟德', meaning: '三分之一', sentence: 'One third of the cake.', translation: '蛋糕的三分之一。', homophoneSentence: '万瑟德奥夫则凯克.' },
    { word: 'Fourth', phonetic: '/fɔːθ/', homophone: '佛斯', meaning: '四分之一', sentence: 'One fourth of the pizza.', translation: '披萨的四分之一。', homophoneSentence: '万佛斯奥夫则披萨.' },
    { word: 'Fifth', phonetic: '/fɪfθ/', homophone: '菲夫斯', meaning: '五分之一', sentence: 'One fifth of the pie.', translation: '派的五分之一。', homophoneSentence: '万菲夫斯奥夫则派.' },
    { word: 'Sixth', phonetic: '/sɪksθ/', homophone: '西克斯斯', meaning: '六分之一', sentence: 'One sixth of the book.', translation: '书的六分之一。', homophoneSentence: '万西克斯斯奥夫则布克.' },
    { word: 'Seventh', phonetic: '/ˈsevnθ/', homophone: '赛文斯', meaning: '七分之一', sentence: 'One seventh of the class.', translation: '班级的七分之一。', homophoneSentence: '万赛文斯奥夫则克莱斯.' },
    { word: 'Eighth', phonetic: '/eɪtθ/', homophone: '艾特斯', meaning: '八分之一', sentence: 'One eighth of the cake.', translation: '蛋糕的八分之一。', homophoneSentence: '万艾特斯奥夫则凯克.' },
    { word: 'Ninth', phonetic: '/naɪnθ/', homophone: '奈恩斯', meaning: '九分之一', sentence: 'One ninth of the pizza.', translation: '披萨的九分之一。', homophoneSentence: '万奈恩斯奥夫则披萨.' },
    { word: 'Tenth', phonetic: '/tenθ/', homophone: '坦斯', meaning: '十分之一', sentence: 'One tenth of the pie.', translation: '派的十分之一。', homophoneSentence: '万坦斯奥夫则派.' },
    
    // 小数表达
    { word: 'Zero point one', phonetic: '/ˈzɪərəʊ pɔɪnt wʌn/', homophone: '泽柔坡因特万', meaning: '零点一', sentence: 'Zero point one percent.', translation: '百分之零点一。', homophoneSentence: '泽柔坡因特万波森特.' },
    { word: 'Zero point five', phonetic: '/ˈzɪərəʊ pɔɪnt faɪv/', homophone: '泽柔坡因特法艾夫', meaning: '零点五', sentence: 'Zero point five meters.', translation: '零点五米。', homophoneSentence: '泽柔坡因特法艾夫米特斯.' },
    { word: 'One point five', phonetic: '/wʌn pɔɪnt faɪv/', homophone: '万坡因特法艾夫', meaning: '一点五', sentence: 'One point five hours.', translation: '一个半小时。', homophoneSentence: '万坡因特法艾夫阿瓦斯.' },
    { word: 'Two point five', phonetic: '/tuː pɔɪnt faɪv/', homophone: '图坡因特法艾夫', meaning: '二点五', sentence: 'Two point five miles.', translation: '二点五英里。', homophoneSentence: '图坡因特法艾夫迈尔斯.' },
    { word: 'Three point five', phonetic: '/θriː pɔɪnt faɪv/', homophone: '斯瑞坡因特法艾夫', meaning: '三点五', sentence: 'Three point five kilograms.', translation: '三点五公斤。', homophoneSentence: '斯瑞坡因特法艾夫基楼格拉姆斯.' },
    
    // 数学术语
    { word: 'Addition', phonetic: '/əˈdɪʃn/', homophone: '阿迪申', meaning: '加法', sentence: 'Addition is easy.', translation: '加法很简单。', homophoneSentence: '阿迪申依兹伊兹.' },
    { word: 'Subtraction', phonetic: '/səbˈtrækʃn/', homophone: '萨布拽克申', meaning: '减法', sentence: 'Subtraction is simple.', translation: '减法很简单。', homophoneSentence: '萨布拽克申依兹辛普尔.' },
    { word: 'Multiplication', phonetic: '/ˌmʌltɪplɪˈkeɪʃn/', homophone: '马尔踢普利凯申', meaning: '乘法', sentence: 'Multiplication tables.', translation: '乘法表。', homophoneSentence: '马尔踢普利凯申泰布尔兹.' },
    { word: 'Division', phonetic: '/dɪˈvɪʒn/', homophone: '迪维申', meaning: '除法', sentence: 'Division can be hard.', translation: '除法可能很难。', homophoneSentence: '迪维申坎比哈德.' },
    { word: 'Equals', phonetic: '/ˈiːkwəlz/', homophone: '伊阔尔斯', meaning: '等于', sentence: 'Two plus two equals four.', translation: '二加二等于四。', homophoneSentence: '图普拉斯图伊阔尔斯佛.' },
    { word: 'Plus', phonetic: '/plʌs/', homophone: '普拉斯', meaning: '加', sentence: 'Three plus four equals seven.', translation: '三加四等于七。', homophoneSentence: '斯瑞普拉斯佛伊阔尔斯赛文.' },
    { word: 'Minus', phonetic: '/ˈmaɪnəs/', homophone: '麦纳斯', meaning: '减', sentence: 'Five minus three equals two.', translation: '五减三等于二。', homophoneSentence: '法艾夫麦纳斯斯瑞伊阔尔斯图.' },
    { word: 'Times', phonetic: '/taɪmz/', homophone: '泰姆斯', meaning: '乘', sentence: 'Three times four equals twelve.', translation: '三乘四等于十二。', homophoneSentence: '斯瑞泰姆斯佛伊阔尔斯特维尔夫.' },
    { word: 'Divide', phonetic: '/dɪˈvaɪd/', homophone: '迪外德', meaning: '除', sentence: 'Twelve divided by three equals four.', translation: '十二除以三等于四。', homophoneSentence: '特维尔夫迪外德拜斯瑞伊阔尔斯佛.' },
    { word: 'Square', phonetic: '/skweə(r)/', homophone: '斯阔尔', meaning: '平方', sentence: 'Three squared is nine.', translation: '三的平方是九。', homophoneSentence: '斯瑞斯阔尔的依兹奈恩.' },
    { word: 'Cube', phonetic: '/kjuːb/', homophone: '丘布', meaning: '立方', sentence: 'Two cubed is eight.', translation: '二的立方是八。', homophoneSentence: '图丘布的依兹艾特.' },
    { word: 'Square root', phonetic: '/skweə ruːt/', homophone: '斯阔尔如特', meaning: '平方根', sentence: 'The square root of nine is three.', translation: '九的平方根是三。', homophoneSentence: '则斯阔尔如特奥夫奈恩依兹斯瑞.' },
    
    // 数量单位
    { word: 'Kilogram', phonetic: '/ˈkɪləɡræm/', homophone: '基楼格拉姆', meaning: '公斤', sentence: 'One kilogram of apples.', translation: '一公斤苹果。', homophoneSentence: '万基楼格拉姆奥夫艾坡z.' },
    { word: 'Gram', phonetic: '/ɡræm/', homophone: '格拉姆', meaning: '克', sentence: 'One gram of sugar.', translation: '一克糖。', homophoneSentence: '万格拉姆奥夫苏格.' },
    { word: 'Kilometer', phonetic: '/kɪˈlɒmɪtə(r)/', homophone: '基楼米特', meaning: '公里', sentence: 'One kilometer away.', translation: '一公里远。', homophoneSentence: '万基楼米特阿威.' },
    { word: 'Meter', phonetic: '/ˈmiːtə(r)/', homophone: '米特', meaning: '米', sentence: 'One meter tall.', translation: '一米高。', homophoneSentence: '万米特套.' },
    { word: 'Centimeter', phonetic: '/ˈsentɪmiːtə(r)/', homophone: '森提米特', meaning: '厘米', sentence: 'One centimeter long.', translation: '一厘米长。', homophoneSentence: '万森提米特长.' },
    { word: 'Millimeter', phonetic: '/ˈmɪlimiːtə(r)/', homophone: '米里米特', meaning: '毫米', sentence: 'One millimeter thick.', translation: '一毫米厚。', homophoneSentence: '万米里米特西克.' },
    { word: 'Liter', phonetic: '/ˈliːtə(r)/', homophone: '里特', meaning: '升', sentence: 'One liter of water.', translation: '一升水。', homophoneSentence: '万里特奥夫沃特.' },
    { word: 'Milliliter', phonetic: '/ˈmɪliliːtə(r)/', homophone: '米里里特', meaning: '毫升', sentence: 'One milliliter of medicine.', translation: '一毫升药。', homophoneSentence: '万米里里特奥夫麦迪森.' },
    { word: 'Kilowatt', phonetic: '/ˈkɪləwɒt/', homophone: '基楼瓦特', meaning: '千瓦', sentence: 'One kilowatt power.', translation: '一千瓦功率。', homophoneSentence: '万基楼瓦特泡尔.' },
    { word: 'Watt', phonetic: '/wɒt/', homophone: '瓦特', meaning: '瓦', sentence: 'One watt bulb.', translation: '一瓦灯泡。', homophoneSentence: '万瓦特布尔布.' },
    
    // 时间相关数字
    { word: 'Second', phonetic: '/ˈsekənd/', homophone: '赛肯德', meaning: '秒', sentence: 'One second please.', translation: '请等一秒。', homophoneSentence: '万赛肯德普利斯.' },
    { word: 'Minute', phonetic: '/ˈmɪnɪt/', homophone: '米尼特', meaning: '分钟', sentence: 'One minute wait.', translation: '等一分钟。', homophoneSentence: '万米尼特威特.' },
    { word: 'Hour', phonetic: '/ˈaʊə(r)/', homophone: '阿瓦', meaning: '小时', sentence: 'One hour later.', translation: '一小时后。', homophoneSentence: '万阿瓦雷特.' },
    { word: 'Day', phonetic: '/deɪ/', homophone: '戴', meaning: '天', sentence: 'One day off.', translation: '休息一天。', homophoneSentence: '万戴奥夫.' },
    { word: 'Week', phonetic: '/wiːk/', homophone: '维克', meaning: '周', sentence: 'One week vacation.', translation: '一周假期。', homophoneSentence: '万维克沃凯申.' },
    { word: 'Month', phonetic: '/mʌnθ/', homophone: '芒斯', meaning: '月', sentence: 'One month ago.', translation: '一个月前。', homophoneSentence: '万芒斯阿狗.' },
    { word: 'Year', phonetic: '/jɪə(r)/', homophone: '耶', meaning: '年', sentence: 'One year old.', translation: '一岁。', homophoneSentence: '万耶欧德.' },
    { word: 'Decade', phonetic: '/ˈdekeɪd/', homophone: '德凯德', meaning: '十年', sentence: 'One decade later.', translation: '十年后。', homophoneSentence: '万德凯德雷特.' },
    { word: 'Century', phonetic: '/ˈsentʃəri/', homophone: '森彻瑞', meaning: '世纪', sentence: 'One century ago.', translation: '一个世纪前。', homophoneSentence: '万森彻瑞阿狗.' },
    { word: 'Millennium', phonetic: '/mɪˈleniəm/', homophone: '米伦尼姆', meaning: '千年', sentence: 'One millennium history.', translation: '一千年历史。', homophoneSentence: '万米伦尼姆历史.' },
    
    // 货币相关
    { word: 'Dollar', phonetic: '/ˈdɒlə(r)/', homophone: '道乐', meaning: '美元', sentence: 'One dollar bill.', translation: '一美元纸币。', homophoneSentence: '万道乐比尔.' },
    { word: 'Cent', phonetic: '/sent/', homophone: '森特', meaning: '美分', sentence: 'One cent coin.', translation: '一美分硬币。', homophoneSentence: '万森特扣因.' },
    { word: 'Pound', phonetic: '/paʊnd/', homophone: '磅', meaning: '英镑', sentence: 'One pound note.', translation: '一英镑纸币。', homophoneSentence: '万磅诺特.' },
    { word: 'Penny', phonetic: '/ˈpeni/', homophone: '佩尼', meaning: '便士', sentence: 'One penny coin.', translation: '一便士硬币。', homophoneSentence: '万佩尼扣因.' },
    { word: 'Euro', phonetic: '/ˈjʊərəʊ/', homophone: '优柔', meaning: '欧元', sentence: 'One euro coin.', translation: '一欧元硬币。', homophoneSentence: '万优柔扣因.' },
    { word: 'Yen', phonetic: '/jen/', homophone: ' yen', meaning: '日元', sentence: 'One yen coin.', translation: '一日元硬币。', homophoneSentence: '万 yen 扣因.' },
    
    // 序数词扩展
    { word: 'Eleventh', phonetic: '/ɪˈlevnθ/', homophone: '伊莱文斯', meaning: '第十一', sentence: 'Eleventh hour.', translation: '最后时刻。', homophoneSentence: '伊莱文斯阿瓦.' },
    { word: 'Twelfth', phonetic: '/twelfθ/', homophone: '特维尔夫斯', meaning: '第十二', sentence: 'Twelfth night.', translation: '第十二夜。', homophoneSentence: '特维尔夫斯奈特.' },
    { word: 'Thirteenth', phonetic: '/ˌθɜːˈtiːnθ/', homophone: '瑟廷斯', meaning: '第十三', sentence: 'Thirteenth floor.', translation: '十三楼。', homophoneSentence: '瑟廷斯弗洛.' },
    { word: 'Fourteenth', phonetic: '/ˌfɔːˈtiːnθ/', homophone: '佛廷斯', meaning: '第十四', sentence: 'Fourteenth birthday.', translation: '十四岁生日。', homophoneSentence: '佛廷斯伯斯戴.' },
    { word: 'Fifteenth', phonetic: '/ˌfɪfˈtiːnθ/', homophone: '菲廷斯', meaning: '第十五', sentence: 'Fifteenth of March.', translation: '三月十五日。', homophoneSentence: '菲廷斯奥夫马奇.' },
    { word: 'Sixteenth', phonetic: '/ˌsɪksˈtiːnθ/', homophone: '西克斯廷斯', meaning: '第十六', sentence: 'Sixteenth century.', translation: '十六世纪。', homophoneSentence: '西克斯廷斯森彻瑞.' },
    { word: 'Seventeenth', phonetic: '/ˌsevnˈtiːnθ/', homophone: '赛文廷斯', meaning: '第十七', sentence: 'Seventeenth chapter.', translation: '第十七章。', homophoneSentence: '赛文廷斯查普特.' },
    { word: 'Eighteenth', phonetic: '/ˌeɪˈtiːnθ/', homophone: '艾廷斯', meaning: '第十八', sentence: 'Eighteenth century.', translation: '十八世纪。', homophoneSentence: '艾廷斯森彻瑞.' },
    { word: 'Nineteenth', phonetic: '/ˌnaɪnˈtiːnθ/', homophone: '奈恩廷斯', meaning: '第十九', sentence: 'Nineteenth century.', translation: '十九世纪。', homophoneSentence: '奈恩廷斯森彻瑞.' },
    { word: 'Twentieth', phonetic: '/ˈtwentiəθ/', homophone: '湍踢艾斯', meaning: '第二十', sentence: 'Twentieth century.', translation: '二十世纪。', homophoneSentence: '湍踢艾斯森彻瑞.' },
    { word: 'Thirtieth', phonetic: '/ˈθɜːtiəθ/', homophone: '瑟踢艾斯', meaning: '第三十', sentence: 'Thirtieth birthday.', translation: '三十岁生日。', homophoneSentence: '瑟踢艾斯伯斯戴.' },
    { word: 'Fortieth', phonetic: '/ˈfɔːtiəθ/', homophone: '佛踢艾斯', meaning: '第四十', sentence: 'Fortieth anniversary.', translation: '四十周年纪念。', homophoneSentence: '佛踢艾斯艾尼沃瑟瑞.' },
    { word: 'Fiftieth', phonetic: '/ˈfɪftiəθ/', homophone: '菲夫踢艾斯', meaning: '第五十', sentence: 'Fiftieth birthday.', translation: '五十岁生日。', homophoneSentence: '菲夫踢艾斯伯斯戴.' },
    { word: 'Sixtieth', phonetic: '/ˈsɪkstiəθ/', homophone: '西克斯踢艾斯', meaning: '第六十', sentence: 'Sixtieth anniversary.', translation: '六十周年纪念。', homophoneSentence: '西克斯踢艾斯艾尼沃瑟瑞.' },
    { word: 'Seventieth', phonetic: '/ˈsevntiəθ/', homophone: '赛文踢艾斯', meaning: '第七十', sentence: 'Seventieth birthday.', translation: '七十岁生日。', homophoneSentence: '赛文踢艾斯伯斯戴.' },
    { word: 'Eightieth', phonetic: '/ˈeɪtiəθ/', homophone: '艾踢艾斯', meaning: '第八十', sentence: 'Eightieth anniversary.', translation: '八十周年纪念。', homophoneSentence: '艾踢艾斯艾尼沃瑟瑞.' },
    { word: 'Ninetieth', phonetic: '/ˈnaɪntiəθ/', homophone: '奈恩踢艾斯', meaning: '第九十', sentence: 'Ninetieth birthday.', translation: '九十岁生日。', homophoneSentence: '奈恩踢艾斯伯斯戴.' },
    { word: 'Hundredth', phonetic: '/ˈhʌndrədθ/', homophone: '汉德瑞德斯', meaning: '第一百', sentence: 'Hundredth day.', translation: '第一百天。', homophoneSentence: '汉德瑞德斯戴.' },
    
    // 其他数字相关词汇
    { word: 'Single', phonetic: '/ˈsɪŋɡl/', homophone: '辛格', meaning: '单个', sentence: 'Single room.', translation: '单人间。', homophoneSentence: '辛格如姆.' },
    { word: 'Double', phonetic: '/ˈdʌbl/', homophone: '达波', meaning: '双倍', sentence: 'Double room.', translation: '双人间。', homophoneSentence: '达波如姆.' },
    { word: 'Triple', phonetic: '/ˈtrɪpl/', homophone: '吹波', meaning: '三倍', sentence: 'Triple bonus.', translation: '三倍奖金。', homophoneSentence: '吹波波纳斯.' },
    { word: 'Quadruple', phonetic: '/ˈkwɒdrʊpl/', homophone: '阔朱波', meaning: '四倍', sentence: 'Quadruple the price.', translation: '价格四倍。', homophoneSentence: '阔朱波则普瑞斯.' },
    { word: 'Quintuple', phonetic: '/ˈkwɪntjʊpl/', homophone: '昆丘波', meaning: '五倍', sentence: 'Quintuple the amount.', translation: '数量五倍。', homophoneSentence: '昆丘波则额芒特.' },
    { word: 'Sextuple', phonetic: '/ˈsekstjʊpl/', homophone: '塞克斯丘波', meaning: '六倍', sentence: 'Sextuple the profit.', translation: '利润六倍。', homophoneSentence: '塞克斯丘波则普罗菲特.' },
    { word: 'Septuple', phonetic: '/ˈseptjʊpl/', homophone: '塞普丘波', meaning: '七倍', sentence: 'Septuple the sales.', translation: '销售额七倍。', homophoneSentence: '塞普丘波则塞尔斯.' },
    { word: 'Octuple', phonetic: '/ˈɒktjʊpl/', homophone: '奥克丘波', meaning: '八倍', sentence: 'Octuple the speed.', translation: '速度八倍。', homophoneSentence: '奥克丘波则斯皮德.' },
    { word: 'Nonuple', phonetic: '/ˈnɒnjʊpl/', homophone: '农丘波', meaning: '九倍', sentence: 'Nonuple the output.', translation: '产量九倍。', homophoneSentence: '农丘波则奥普特普特.' },
    { word: 'Decuple', phonetic: '/ˈdekjʊpl/', homophone: '德丘波', meaning: '十倍', sentence: 'Decuple the income.', translation: '收入十倍。', homophoneSentence: '德丘波则因卡姆.' }
];

// 读取现有文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const existingContent = fs.readFileSync(wordDataPath, 'utf8');

// 替换numbers部分
const numbersRegex = /numbers:\s*\[(.*?)\],/s;
const match = existingContent.match(numbersRegex);

if (match) {
    // 提取现有数据
    const existingNumbersText = match[1];
    const existingNumbers = [];
    
    // 简单解析现有数据
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < existingNumbersText.length; i++) {
        const char = existingNumbersText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                existingNumbers.push(currentRow.trim());
            }
            currentRow = '';
        }
    }
    
    // 合并现有数据和新数据
    const combinedNumbers = [...existingNumbers];
    
    newNumbers.forEach(word => {
        const wordString = `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
        combinedNumbers.push(wordString);
    });
    
    const newNumbersContent = combinedNumbers.join(',\n');
    const newContent = existingContent.replace(numbersRegex, `numbers: [\n${newNumbersContent}\n    ],`);
    
    // 写入文件
    fs.writeFileSync(wordDataPath, newContent, 'utf8');
    console.log('成功添加100个新数字相关单词到word-data.js');
} else {
    console.error('未找到numbers部分');
}
