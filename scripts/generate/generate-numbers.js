const fs = require('fs');

function generateNumbers() {
    const numbers = [];
    
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const onesH = ['', '万', '图', '斯瑞', '佛', '法艾夫', '西克斯', '赛文', '艾特', '奈恩'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const tensH = ['', '', '湍踢', '瑟踢', '佛踢', '菲夫踢', '西克斯踢', '赛文踢', '艾踢', '奈恩踢'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const teensH = ['坦', '伊莱文', '特维尔夫', '瑟廷', '佛廷', '菲廷', '西克斯廷', '赛文廷', '艾廷', '奈恩廷'];
    const hundreds = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const hundredsH = ['万', '图', '斯瑞', '佛', '法艾夫', '西克斯', '赛文', '艾特', '奈恩'];
    
    // 21-99
    for (let t = 2; t <= 9; t++) {
        for (let o = 1; o <= 9; o++) {
            const num = t * 10 + o;
            numbers.push({
                word: tens[t].charAt(0).toUpperCase() + tens[t].slice(1) + '-' + ones[o],
                phonetic: `/${tens[t]} ${ones[o]}/`,
                homophone: tensH[t] + onesH[o],
                meaning: num.toString(),
                sentence: `I have ${num} dollars.`,
                translation: `我有${num}美元。`,
                homophoneSentence: `爱哈夫${tensH[t]}${onesH[o]}道乐兹.`
            });
        }
    }
    
    // 100-999
    for (let h = 1; h <= 9; h++) {
        numbers.push({
            word: hundreds[h-1] + ' hundred',
            phonetic: `/${hundreds[h-1].toLowerCase()} ˈhʌndrəd/`,
            homophone: hundredsH[h-1] + '汉德瑞德',
            meaning: (h * 100).toString(),
            sentence: `${hundreds[h-1]} hundred people.`,
            translation: `${h * 100}人。`,
            homophoneSentence: `${hundredsH[h-1]}汉德瑞德皮普欧.`
        });
        
        for (let o = 1; o <= 9; o++) {
            numbers.push({
                word: hundreds[h-1] + ' hundred and ' + ones[o],
                phonetic: `/${hundreds[h-1].toLowerCase()} ˈhʌndrəd ənd ${ones[o]}/`,
                homophone: hundredsH[h-1] + '汉德瑞德安德' + onesH[o],
                meaning: (h * 100 + o).toString(),
                sentence: `I have ${h * 100 + o} dollars.`,
                translation: `我有${h * 100 + o}美元。`,
                homophoneSentence: `爱哈夫${hundredsH[h-1]}汉德瑞德安德${onesH[o]}道乐兹.`
            });
        }
        
        for (let t = 0; t <= 9; t++) {
            numbers.push({
                word: hundreds[h-1] + ' hundred and ' + teens[t],
                phonetic: `/${hundreds[h-1].toLowerCase()} ˈhʌndrəd ənd ${teens[t]}/`,
                homophone: hundredsH[h-1] + '汉德瑞德安德' + teensH[t],
                meaning: (h * 100 + 10 + t).toString(),
                sentence: `I have ${h * 100 + 10 + t} dollars.`,
                translation: `我有${h * 100 + 10 + t}美元。`,
                homophoneSentence: `爱哈夫${hundredsH[h-1]}汉德瑞德安德${teensH[t]}道乐兹.`
            });
        }
        
        for (let t = 2; t <= 9; t++) {
            for (let o = 0; o <= 9; o++) {
                const num = h * 100 + t * 10 + o;
                if (o === 0) {
                    numbers.push({
                        word: hundreds[h-1] + ' hundred and ' + tens[t],
                        phonetic: `/${hundreds[h-1].toLowerCase()} ˈhʌndrəd ənd ${tens[t]}/`,
                        homophone: hundredsH[h-1] + '汉德瑞德安德' + tensH[t],
                        meaning: num.toString(),
                        sentence: `I have ${num} dollars.`,
                        translation: `我有${num}美元。`,
                        homophoneSentence: `爱哈夫${hundredsH[h-1]}汉德瑞德安德${tensH[t]}道乐兹.`
                    });
                } else {
                    numbers.push({
                        word: hundreds[h-1] + ' hundred and ' + tens[t] + '-' + ones[o],
                        phonetic: `/${hundreds[h-1].toLowerCase()} ˈhʌndrəd ənd ${tens[t]} ${ones[o]}/`,
                        homophone: hundredsH[h-1] + '汉德瑞德安德' + tensH[t] + onesH[o],
                        meaning: num.toString(),
                        sentence: `I have ${num} dollars.`,
                        translation: `我有${num}美元。`,
                        homophoneSentence: `爱哈夫${hundredsH[h-1]}汉德瑞德安德${tensH[t]}${onesH[o]}道乐兹.`
                    });
                }
            }
        }
    }
    
    // 1000-10000
    const thousands = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    const thousandsH = ['万', '图', '斯瑞', '佛', '法艾夫', '西克斯', '赛文', '艾特', '奈恩', '坦'];
    for (let i = 0; i < thousands.length; i++) {
        numbers.push({
            word: thousands[i] + ' thousand',
            phonetic: `/${thousands[i].toLowerCase()} ˈθaʊznd/`,
            homophone: thousandsH[i] + '萨赞德',
            meaning: ((i + 1) * 1000).toString(),
            sentence: `${thousands[i]} thousand dollars.`,
            translation: `${(i + 1) * 1000}美元。`,
            homophoneSentence: `${thousandsH[i]}萨赞德道乐兹.`
        });
    }
    
    // 序数词
    const ordinals = [
        { w: 'First', p: '/fɜːst/', h: '弗斯特', m: '第一', s: 'First come, first served.', t: '先到先得。', hs: '弗斯特卡姆,弗斯特瑟夫德.' },
        { w: 'Second', p: '/ˈsekənd/', h: '赛肯德', m: '第二', s: 'Second place winner.', t: '第二名获得者。', hs: '赛肯德普雷斯温纳.' },
        { w: 'Third', p: '/θɜːd/', h: '瑟德', m: '第三', s: 'Third time lucky.', t: '第三次走运。', hs: '瑟德泰姆拉基.' },
        { w: 'Fourth', p: '/fɔːθ/', h: '佛斯', m: '第四', s: 'Fourth of July.', t: '七月四日。', hs: '佛斯奥夫朱来.' },
        { w: 'Fifth', p: '/fɪfθ/', h: '菲夫斯', m: '第五', s: 'Fifth floor please.', t: '请去五楼。', hs: '菲夫斯弗洛普利斯.' },
        { w: 'Sixth', p: '/sɪksθ/', h: '西克斯斯', m: '第六', s: 'June is the sixth month.', t: '六月是第六个月。', hs: '朱恩依兹则西克斯斯芒斯.' },
        { w: 'Seventh', p: '/ˈsevnθ/', h: '赛文斯', m: '第七', s: 'Seventh day of the week.', t: '一周的第七天。', hs: '赛文斯戴奥夫则维克.' },
        { w: 'Eighth', p: '/eɪtθ/', h: '艾特斯', m: '第八', s: 'Eighth birthday party.', t: '八岁生日派对。', hs: '艾特斯伯斯戴帕提.' },
        { w: 'Ninth', p: '/naɪnθ/', h: '奈恩斯', m: '第九', s: 'Ninth grade student.', t: '九年级学生。', hs: '奈恩斯格瑞德斯丢等特.' },
        { w: 'Tenth', p: '/tenθ/', h: '坦斯', m: '第十', s: 'Tenth anniversary.', t: '十周年纪念。', hs: '坦斯艾尼沃瑟瑞.' },
        { w: 'Eleventh', p: '/ɪˈlevnθ/', h: '伊莱文斯', m: '第十一', s: 'Eleventh hour.', t: '最后一刻。', hs: '伊莱文斯阿瓦.' },
        { w: 'Twelfth', p: '/twelfθ/', h: '特维尔夫斯', m: '第十二', s: 'Twelfth night.', t: '第十二夜。', hs: '特维尔夫斯奈特.' },
        { w: 'Thirteenth', p: '/θɜːˈtiːnθ/', h: '瑟廷斯', m: '第十三', s: 'Thirteenth floor.', t: '第十三层。', hs: '瑟廷斯弗洛.' },
        { w: 'Fourteenth', p: '/fɔːˈtiːnθ/', h: '佛廷斯', m: '第十四', s: 'Fourteenth century.', t: '十四世纪。', hs: '佛廷斯森彻瑞.' },
        { w: 'Fifteenth', p: '/fɪfˈtiːnθ/', h: '菲廷斯', m: '第十五', s: 'Fifteenth birthday.', t: '十五岁生日。', hs: '菲廷斯伯斯戴.' },
        { w: 'Sixteenth', p: '/sɪksˈtiːnθ/', h: '西克斯廷斯', m: '第十六', s: 'Sixteenth note.', t: '十六分音符。', hs: '西克斯廷斯诺特.' },
        { w: 'Seventeenth', p: '/sevnˈtiːnθ/', h: '赛文廷斯', m: '第十七', s: 'Seventeenth century.', t: '十七世纪。', hs: '赛文廷斯森彻瑞.' },
        { w: 'Eighteenth', p: '/eɪˈtiːnθ/', h: '艾廷斯', m: '第十八', s: 'Eighteenth birthday.', t: '十八岁生日。', hs: '艾廷斯伯斯戴.' },
        { w: 'Nineteenth', p: '/naɪnˈtiːnθ/', h: '奈恩廷斯', m: '第十九', s: 'Nineteenth century.', t: '十九世纪。', hs: '奈恩廷斯森彻瑞.' },
        { w: 'Twentieth', p: '/ˈtwentiəθ/', h: '湍踢艾斯', m: '第二十', s: 'Twentieth century.', t: '二十世纪。', hs: '湍踢艾斯森彻瑞.' },
        { w: 'Thirtieth', p: '/ˈθɜːtiəθ/', h: '瑟踢艾斯', m: '第三十', s: 'Thirtieth birthday.', t: '三十岁生日。', hs: '瑟踢艾斯伯斯戴.' },
        { w: 'Fortieth', p: '/ˈfɔːtiəθ/', h: '佛踢艾斯', m: '第四十', s: 'Fortieth anniversary.', t: '四十周年纪念。', hs: '佛踢艾斯艾尼沃瑟瑞.' },
        { w: 'Fiftieth', p: '/ˈfɪftiəθ/', h: '菲夫踢艾斯', m: '第五十', s: 'Fiftieth birthday.', t: '五十岁生日。', hs: '菲夫踢艾斯伯斯戴.' },
        { w: 'Sixtieth', p: '/ˈsɪkstiəθ/', h: '西克斯踢艾斯', m: '第六十', s: 'Sixtieth anniversary.', t: '六十周年纪念。', hs: '西克斯踢艾斯艾尼沃瑟瑞.' },
        { w: 'Seventieth', p: '/ˈsevntiəθ/', h: '赛文踢艾斯', m: '第七十', s: 'Seventieth birthday.', t: '七十岁生日。', hs: '赛文踢艾斯伯斯戴.' },
        { w: 'Eightieth', p: '/ˈeɪtiəθ/', h: '艾踢艾斯', m: '第八十', s: 'Eightieth anniversary.', t: '八十周年纪念。', hs: '艾踢艾斯艾尼沃瑟瑞.' },
        { w: 'Ninetieth', p: '/ˈnaɪntiəθ/', h: '奈恩踢艾斯', m: '第九十', s: 'Ninetieth birthday.', t: '九十岁生日。', hs: '奈恩踢艾斯伯斯戴.' },
        { w: 'Hundredth', p: '/ˈhʌndrədθ/', h: '汉德瑞德斯', m: '第一百', s: 'Hundredth day.', t: '第一百天。', hs: '汉德瑞德斯戴.' },
        { w: 'Thousandth', p: '/ˈθaʊzndθ/', h: '萨赞德斯', m: '第一千', s: 'Thousandth customer.', t: '第一千位顾客。', hs: '萨赞德斯卡斯托默.' },
        { w: 'Millionth', p: '/ˈmɪljənθ/', h: '米尔金斯', m: '第一百万', s: 'Millionth visitor.', t: '第一百万位访客。', hs: '米尔金斯维泽特.' }
    ];
    ordinals.forEach(o => {
        numbers.push({ word: o.w, phonetic: o.p, homophone: o.h, meaning: o.m, sentence: o.s, translation: o.t, homophoneSentence: o.hs });
    });
    
    // 21-99序数词
    for (let t = 2; t <= 9; t++) {
        for (let o = 1; o <= 9; o++) {
            const num = t * 10 + o;
            numbers.push({
                word: tens[t].charAt(0).toUpperCase() + tens[t].slice(1) + '-' + ones[o] + 'th',
                phonetic: `/${tens[t]} ${ones[o]}θ/`,
                homophone: tensH[t] + onesH[o] + '斯',
                meaning: '第' + num,
                sentence: `The ${tens[t]}-${ones[o]}th day.`,
                translation: `第${num}天。`,
                homophoneSentence: `则${tensH[t]}${onesH[o]}斯戴.`
            });
        }
    }
    
    // 小数
    const decimals = [
        { w: 'Zero point one', p: '/ˈzɪərəʊ pɔɪnt wʌn/', h: '泽柔坡因特万', m: '0.1', s: 'Zero point one meter.', t: '零点一米。', hs: '泽柔坡因特万米特.' },
        { w: 'Zero point five', p: '/ˈzɪərəʊ pɔɪnt faɪv/', h: '泽柔坡因特法艾夫', m: '0.5', s: 'Zero point five liters.', t: '零点五升。', hs: '泽柔坡因特法艾夫里特斯.' },
        { w: 'One point five', p: '/wʌn pɔɪnt faɪv/', h: '万坡因特法艾夫', m: '1.5', s: 'One point five hours.', t: '一点五小时。', hs: '万坡因特法艾夫阿瓦斯.' },
        { w: 'Two point five', p: '/tuː pɔɪnt faɪv/', h: '图坡因特法艾夫', m: '2.5', s: 'Two point five kilometers.', t: '二点五公里。', hs: '图坡因特法艾夫基楼米特斯.' },
        { w: 'Three point one four', p: '/θriː pɔɪnt wʌn fɔː/', h: '斯瑞坡因特万佛', m: '3.14', s: 'Pi is three point one four.', t: '圆周率是三点一四。', hs: '派依兹斯瑞坡因特万佛.' },
        { w: 'Nine point eight', p: '/naɪn pɔɪnt eɪt/', h: '奈恩坡因特艾特', m: '9.8', s: 'Nine point eight meters per second.', t: '每秒九点八米。', hs: '奈恩坡因特艾特米特斯珀赛肯德.' }
    ];
    decimals.forEach(d => {
        numbers.push({ word: d.w, phonetic: d.p, homophone: d.h, meaning: d.m, sentence: d.s, translation: d.t, homophoneSentence: d.hs });
    });
    
    // 分数
    const fractions = [
        { w: 'One half', p: '/wʌn hɑːf/', h: '万哈夫', m: '二分之一', s: 'One half of the cake.', t: '蛋糕的一半。', hs: '万哈夫奥夫则凯克.' },
        { w: 'One third', p: '/wʌn θɜːd/', h: '万瑟德', m: '三分之一', s: 'One third of the class.', t: '班级的三分之一。', hs: '万瑟德奥夫则克莱斯.' },
        { w: 'Two thirds', p: '/tuː θɜːdz/', h: '图瑟兹', m: '三分之二', s: 'Two thirds of the students.', t: '三分之二的学生。', hs: '图瑟兹奥夫则斯丢等茨.' },
        { w: 'One quarter', p: '/wʌn ˈkwɔːtə/', h: '万阔特', m: '四分之一', s: 'One quarter of an hour.', t: '一刻钟。', hs: '万阔特奥夫安阿瓦.' },
        { w: 'Three quarters', p: '/θriː ˈkwɔːtəz/', h: '斯瑞阔特兹', m: '四分之三', s: 'Three quarters of the work.', t: '四分之三的工作。', hs: '斯瑞阔特兹奥夫则沃克.' },
        { w: 'One fifth', p: '/wʌn fɪfθ/', h: '万菲夫斯', m: '五分之一', s: 'One fifth of the population.', t: '五分之一的人口。', hs: '万菲夫斯奥夫则泡普莱申.' },
        { w: 'One sixth', p: '/wʌn sɪksθ/', h: '万西克斯斯', m: '六分之一', s: 'One sixth of the cake.', t: '六分之一的蛋糕。', hs: '万西克斯斯奥夫则凯克.' },
        { w: 'One eighth', p: '/wʌn eɪtθ/', h: '万艾特斯', m: '八分之一', s: 'One eighth of the pizza.', t: '八分之一的披萨。', hs: '万艾特斯奥夫则披萨.' },
        { w: 'One tenth', p: '/wʌn tenθ/', h: '万坦斯', m: '十分之一', s: 'One tenth of the profit.', t: '十分之一的利润。', hs: '万坦斯奥夫则普罗菲特.' }
    ];
    fractions.forEach(f => {
        numbers.push({ word: f.w, phonetic: f.p, homophone: f.h, meaning: f.m, sentence: f.s, translation: f.t, homophoneSentence: f.hs });
    });
    
    // 百分比
    const percentages = [
        { w: 'One percent', p: '/wʌn pəˈsent/', h: '万波森特', m: '百分之一', s: 'One percent discount.', t: '百分之一的折扣。', hs: '万波森特迪斯考特.' },
        { w: 'Five percent', p: '/faɪv pəˈsent/', h: '法艾夫波森特', m: '百分之五', s: 'Five percent tax.', t: '百分之五的税。', hs: '法艾夫波森特塔克斯.' },
        { w: 'Ten percent', p: '/ten pəˈsent/', h: '坦波森特', m: '百分之十', s: 'Ten percent off.', t: '打九折。', hs: '坦波森特奥夫.' },
        { w: 'Twenty percent', p: '/ˈtwenti pəˈsent/', h: '湍踢波森特', m: '百分之二十', s: 'Twenty percent discount.', t: '八折优惠。', hs: '湍踢波森特迪斯考特.' },
        { w: 'Fifty percent', p: '/ˈfɪfti pəˈsent/', h: '菲夫踢波森特', m: '百分之五十', s: 'Fifty percent off.', t: '五折优惠。', hs: '菲夫踢波森特奥夫.' },
        { w: 'One hundred percent', p: '/wʌn ˈhʌndrəd pəˈsent/', h: '万汉德瑞德波森特', m: '百分之百', s: 'One hundred percent sure.', t: '百分之百确定。', hs: '万汉德瑞德波森特舒尔.' }
    ];
    percentages.forEach(p => {
        numbers.push({ word: p.w, phonetic: p.p, homophone: p.h, meaning: p.m, sentence: p.s, translation: p.t, homophoneSentence: p.hs });
    });
    
    // 数学运算
    const mathWords = [
        { w: 'Plus', p: '/plʌs/', h: '普拉斯', m: '加', s: 'Two plus two.', t: '二加二。', hs: '图普拉斯图.' },
        { w: 'Minus', p: '/ˈmaɪnəs/', h: '麦纳斯', m: '减', s: 'Five minus three.', t: '五减三。', hs: '法艾夫麦纳斯斯瑞.' },
        { w: 'Times', p: '/taɪmz/', h: '泰姆斯', m: '乘', s: 'Three times four.', t: '三乘四。', hs: '斯瑞泰姆斯佛.' },
        { w: 'Divided by', p: '/dɪˈvaɪdɪd baɪ/', h: '迪外迪德拜', m: '除以', s: 'Ten divided by two.', t: '十除以二。', hs: '坦迪外迪德拜图.' },
        { w: 'Equals', p: '/ˈiːkwəlz/', h: '伊阔尔斯', m: '等于', s: 'Two plus two equals four.', t: '二加二等于四。', hs: '图普拉斯图伊阔尔斯佛.' },
        { w: 'Square', p: '/skweə/', h: '斯阔尔', m: '平方', s: 'Three squared is nine.', t: '三的平方是九。', hs: '斯瑞斯阔尔依兹奈恩.' },
        { w: 'Square root', p: '/skweə ruːt/', h: '斯阔尔如特', m: '平方根', s: 'Square root of nine.', t: '九的平方根。', hs: '斯阔尔如特奥夫奈恩.' },
        { w: 'Cube', p: '/kjuːb/', h: '丘布', m: '立方', s: 'Two cubed is eight.', t: '二的立方是八。', hs: '图丘布依兹艾特.' },
        { w: 'Sum', p: '/sʌm/', h: '萨姆', m: '总和', s: 'The sum of numbers.', t: '数字的总和。', hs: '则萨姆奥夫南波兹.' },
        { w: 'Average', p: '/ˈævərɪdʒ/', h: '艾沃瑞吉', m: '平均', s: 'The average is ten.', t: '平均值是十。', hs: '则艾沃瑞吉依兹坦.' },
        { w: 'Fraction', p: '/ˈfrækʃn/', h: '弗拉克申', m: '分数', s: 'A simple fraction.', t: '一个简单的分数。', hs: '安辛普弗拉克申.' },
        { w: 'Decimal', p: '/ˈdesɪml/', h: '德西默尔', m: '小数', s: 'A decimal number.', t: '一个小数。', hs: '安德西默尔南波.' },
        { w: 'Integer', p: '/ˈɪntɪdʒə/', h: '因特杰', m: '整数', s: 'An integer value.', t: '一个整数值。', hs: '安因特杰维尤.' },
        { w: 'Negative', p: '/ˈneɡətɪv/', h: '内格提夫', m: '负数', s: 'A negative number.', t: '一个负数。', hs: '安内格提夫南波.' },
        { w: 'Positive', p: '/ˈpɒzətɪv/', h: '波泽提夫', m: '正数', s: 'A positive number.', t: '一个正数。', hs: '安波泽提夫南波.' },
        { w: 'Even', p: '/ˈiːvn/', h: '伊文', m: '偶数', s: 'An even number.', t: '一个偶数。', hs: '安伊文南波.' },
        { w: 'Odd', p: '/ɒd/', h: '奥德', m: '奇数', s: 'An odd number.', t: '一个奇数。', hs: '安奥德南波.' },
        { w: 'Prime', p: '/praɪm/', h: '普莱姆', m: '质数', s: 'A prime number.', t: '一个质数。', hs: '安普莱姆南波.' },
        { w: 'Ratio', p: '/ˈreɪʃiəʊ/', h: '瑞秀', m: '比率', s: 'The ratio is two to one.', t: '比率是二比一。', hs: '则瑞秀依兹图图万.' },
        { w: 'Percentage', p: '/pəˈsentɪdʒ/', h: '波森提吉', m: '百分比', s: 'What percentage?', t: '什么百分比？', hs: '沃特波森提吉.' }
    ];
    mathWords.forEach(m => {
        numbers.push({ word: m.w, phonetic: m.p, homophone: m.h, meaning: m.m, sentence: m.s, translation: m.t, homophoneSentence: m.hs });
    });
    
    // 度量衡
    const measurements = [
        { w: 'Millimeter', p: '/ˈmɪlimiːtə/', h: '米里米特', m: '毫米', s: 'Five millimeters.', t: '五毫米。', hs: '法艾夫米里米特斯.' },
        { w: 'Centimeter', p: '/ˈsentɪmiːtə/', h: '森提米特', m: '厘米', s: 'Ten centimeters.', t: '十厘米。', hs: '坦森提米特斯.' },
        { w: 'Meter', p: '/ˈmiːtə/', h: '米特', m: '米', s: 'One meter tall.', t: '一米高。', hs: '万米特套.' },
        { w: 'Kilometer', p: '/kɪˈlɒmɪtə/', h: '基楼米特', m: '公里', s: 'Five kilometers away.', t: '五公里远。', hs: '法艾夫基楼米特斯阿威.' },
        { w: 'Inch', p: '/ɪntʃ/', h: '因奇', m: '英寸', s: 'Ten inches long.', t: '十英寸长。', hs: '坦因奇兹朗.' },
        { w: 'Foot', p: '/fʊt/', h: '富特', m: '英尺', s: 'Six feet tall.', t: '六英尺高。', hs: '西克斯菲茨套.' },
        { w: 'Yard', p: '/jɑːd/', h: '亚德', m: '码', s: 'Ten yards away.', t: '十码远。', hs: '坦亚兹阿威.' },
        { w: 'Mile', p: '/maɪl/', h: '迈尔', m: '英里', s: 'Five miles per hour.', t: '每小时五英里。', hs: '法艾夫迈尔斯珀阿瓦.' },
        { w: 'Gram', p: '/ɡræm/', h: '格拉姆', m: '克', s: 'One hundred grams.', t: '一百克。', hs: '万汉德瑞德格拉姆斯.' },
        { w: 'Kilogram', p: '/ˈkɪləɡræm/', h: '基楼格拉姆', m: '公斤', s: 'Two kilograms.', t: '两公斤。', hs: '图基楼格拉姆斯.' },
        { w: 'Pound', p: '/paʊnd/', h: '庞德', m: '磅', s: 'Five pounds.', t: '五磅。', hs: '法艾夫庞兹.' },
        { w: 'Ounce', p: '/aʊns/', h: '昂斯', m: '盎司', s: 'Six ounces.', t: '六盎司。', hs: '西克斯昂西斯.' },
        { w: 'Ton', p: '/tʌn/', h: '坦', m: '吨', s: 'One ton.', t: '一吨。', hs: '万坦.' },
        { w: 'Liter', p: '/ˈliːtə/', h: '里特', m: '升', s: 'Two liters.', t: '两升。', hs: '图里特斯.' },
        { w: 'Gallon', p: '/ˈɡælən/', h: '加伦', m: '加仑', s: 'One gallon.', t: '一加仑。', hs: '万加伦.' },
        { w: 'Pint', p: '/paɪnt/', h: '品特', m: '品脱', s: 'One pint.', t: '一品脱。', hs: '万品特.' },
        { w: 'Quart', p: '/kwɔːt/', h: '阔特', m: '夸脱', s: 'Two quarts.', t: '两夸脱。', hs: '图阔茨.' },
        { w: 'Square meter', p: '/skweə ˈmiːtə/', h: '斯阔尔米特', m: '平方米', s: 'Fifty square meters.', t: '五十平方米。', hs: '菲夫踢斯阔尔米特斯.' },
        { w: 'Cubic meter', p: '/ˈkjuːbɪk ˈmiːtə/', h: '丘比克米特', m: '立方米', s: 'Five cubic meters.', t: '五立方米。', hs: '法艾夫丘比克米特斯.' },
        { w: 'Hectare', p: '/ˈhekteə/', h: '海克特尔', m: '公顷', s: 'Ten hectares.', t: '十公顷。', hs: '坦海克特斯.' },
        { w: 'Acre', p: '/ˈeɪkə/', h: '艾克', m: '英亩', s: 'Five acres.', t: '五英亩。', hs: '法艾夫艾克兹.' },
        { w: 'Watt', p: '/wɒt/', h: '瓦特', m: '瓦', s: 'Sixty watts.', t: '六十瓦。', hs: '西克斯踢沃茨.' },
        { w: 'Kilowatt', p: '/ˈkɪləwɒt/', h: '基楼瓦特', m: '千瓦', s: 'One kilowatt.', t: '一千瓦。', hs: '万基楼瓦特.' },
        { w: 'Horsepower', p: '/ˈhɔːspaʊə/', h: '霍尔斯泡尔', m: '马力', s: 'Two hundred horsepower.', t: '两百马力。', hs: '图汉德瑞德霍尔斯泡尔.' },
        { w: 'Degree', p: '/dɪˈɡriː/', h: '迪格瑞', m: '度', s: 'Ninety degrees.', t: '九十度。', hs: '奈恩踢迪格瑞兹.' },
        { w: 'Celsius', p: '/ˈselsiəs/', h: '塞尔修斯', m: '摄氏', s: 'Twenty degrees Celsius.', t: '二十摄氏度。', hs: '湍踢迪格瑞兹塞尔修斯.' },
        { w: 'Fahrenheit', p: '/ˈfærənhaɪt/', h: '法伦海特', m: '华氏', s: 'Sixty-eight degrees Fahrenheit.', t: '六十八华氏度。', hs: '西克斯踢艾特迪格瑞兹法伦海特.' }
    ];
    measurements.forEach(m => {
        numbers.push({ word: m.w, phonetic: m.p, homophone: m.h, meaning: m.m, sentence: m.s, translation: m.t, homophoneSentence: m.hs });
    });
    
    // 时间表达
    const timeWords = [
        { w: 'One o\'clock', p: '/wʌn əˈklɒk/', h: '万阿克洛克', m: '一点钟', s: 'It\'s one o\'clock.', t: '现在一点钟。', hs: '伊茨万阿克洛克.' },
        { w: 'Two o\'clock', p: '/tuː əˈklɒk/', h: '图阿克洛克', m: '两点钟', s: 'It\'s two o\'clock.', t: '现在两点钟。', hs: '伊茨图阿克洛克.' },
        { w: 'Three o\'clock', p: '/θriː əˈklɒk/', h: '斯瑞阿克洛克', m: '三点钟', s: 'It\'s three o\'clock.', t: '现在三点钟。', hs: '伊茨斯瑞阿克洛克.' },
        { w: 'Half past one', p: '/hɑːf pɑːst wʌn/', h: '哈夫帕斯特万', m: '一点半', s: 'It\'s half past one.', t: '现在一点半。', hs: '伊茨哈夫帕斯特万.' },
        { w: 'Quarter past one', p: '/ˈkwɔːtə pɑːst wʌn/', h: '阔特帕斯特万', m: '一点十五', s: 'It\'s quarter past one.', t: '现在一点十五。', hs: '伊茨阔特帕斯特万.' },
        { w: 'Quarter to two', p: '/ˈkwɔːtə tuː tuː/', h: '阔特图图', m: '一点四十五', s: 'It\'s quarter to two.', t: '现在一点四十五。', hs: '伊茨阔特图图.' },
        { w: 'Five minutes', p: '/faɪv ˈmɪnɪts/', h: '法艾夫米尼茨', m: '五分钟', s: 'Wait five minutes.', t: '等五分钟。', hs: '威特法艾夫米尼茨.' },
        { w: 'Ten minutes', p: '/ten ˈmɪnɪts/', h: '坦米尼茨', m: '十分钟', s: 'Ten minutes left.', t: '还剩十分钟。', hs: '坦米尼茨莱夫特.' },
        { w: 'Half an hour', p: '/hɑːf ən ˈaʊə/', h: '哈夫安阿瓦', m: '半小时', s: 'Half an hour later.', t: '半小时后。', hs: '哈夫安阿瓦雷特.' },
        { w: 'One hour', p: '/wʌn ˈaʊə/', h: '万阿瓦', m: '一小时', s: 'One hour left.', t: '还剩一小时。', hs: '万阿瓦莱夫特.' },
        { w: 'One day', p: '/wʌn deɪ/', h: '万戴', m: '一天', s: 'One day trip.', t: '一天旅行。', hs: '万戴特瑞普.' },
        { w: 'One week', p: '/wʌn wiːk/', h: '万维克', m: '一周', s: 'One week later.', t: '一周后。', hs: '万维克雷特.' },
        { w: 'One month', p: '/wʌn mʌnθ/', h: '万芒斯', m: '一个月', s: 'One month ago.', t: '一个月前。', hs: '万芒斯阿勾.' },
        { w: 'One year', p: '/wʌn jɪə/', h: '万耶', m: '一年', s: 'One year ago.', t: '一年前。', hs: '万耶阿勾.' },
        { w: 'One century', p: '/wʌn ˈsentʃəri/', h: '万森彻瑞', m: '一世纪', s: 'One century ago.', t: '一个世纪前。', hs: '万森彻瑞阿勾.' }
    ];
    timeWords.forEach(t => {
        numbers.push({ word: t.w, phonetic: t.p, homophone: t.h, meaning: t.m, sentence: t.s, translation: t.t, homophoneSentence: t.hs });
    });
    
    // 货币
    const moneyWords = [
        { w: 'One dollar', p: '/wʌn ˈdɒlə/', h: '万道乐', m: '一美元', s: 'It costs one dollar.', t: '它花费一美元。', hs: '伊特考斯特万道乐.' },
        { w: 'Five dollars', p: '/faɪv ˈdɒləz/', h: '法艾夫道乐兹', m: '五美元', s: 'Five dollars please.', t: '请付五美元。', hs: '法艾夫道乐兹普利斯.' },
        { w: 'Ten dollars', p: '/ten ˈdɒləz/', h: '坦道乐兹', m: '十美元', s: 'Ten dollars total.', t: '总共十美元。', hs: '坦道乐兹托特尔.' },
        { w: 'One cent', p: '/wʌn sent/', h: '万森特', m: '一美分', s: 'One cent left.', t: '剩一美分。', hs: '万森特莱夫特.' },
        { w: 'One euro', p: '/wʌn ˈjʊərəʊ/', h: '万尤罗', m: '一欧元', s: 'One euro coin.', t: '一欧元硬币。', hs: '万尤罗阔因.' },
        { w: 'One pound', p: '/wʌn paʊnd/', h: '万庞德', m: '一英镑', s: 'One pound coin.', t: '一英镑硬币。', hs: '万庞德阔因.' },
        { w: 'One yuan', p: '/wʌn juːˈɑːn/', h: '万元', m: '一元', s: 'One yuan only.', t: '仅一元。', hs: '万元昂利.' }
    ];
    moneyWords.forEach(m => {
        numbers.push({ word: m.w, phonetic: m.p, homophone: m.h, meaning: m.m, sentence: m.s, translation: m.t, homophoneSentence: m.hs });
    });
    
    // 倍数
    const multiples = [
        { w: 'Single', p: '/ˈsɪŋɡl/', h: '辛格', m: '单倍', s: 'Single room.', t: '单人间。', hs: '辛格如姆.' },
        { w: 'Double', p: '/ˈdʌbl/', h: '达波', m: '双倍', s: 'Double the amount.', t: '数量翻倍。', hs: '达波则额芒特.' },
        { w: 'Triple', p: '/ˈtrɪpl/', h: '吹波', m: '三倍', s: 'Triple the price.', t: '价格三倍。', hs: '吹波则普瑞斯.' },
        { w: 'Quadruple', p: '/ˈkwɒdrʊpl/', h: '阔朱波', m: '四倍', s: 'Quadruple the price.', t: '价格四倍。', hs: '阔朱波则普瑞斯.' },
        { w: 'Quintuple', p: '/ˈkwɪntjʊpl/', h: '昆丘波', m: '五倍', s: 'Quintuple the amount.', t: '数量五倍。', hs: '昆丘波则额芒特.' },
        { w: 'Sextuple', p: '/ˈsekstjʊpl/', h: '塞克斯丘波', m: '六倍', s: 'Sextuple the profit.', t: '利润六倍。', hs: '塞克斯丘波则普罗菲特.' },
        { w: 'Septuple', p: '/ˈseptjʊpl/', h: '塞普丘波', m: '七倍', s: 'Septuple the sales.', t: '销售额七倍。', hs: '塞普丘波则塞尔斯.' },
        { w: 'Octuple', p: '/ˈɒktjʊpl/', h: '奥克丘波', m: '八倍', s: 'Octuple the speed.', t: '速度八倍。', hs: '奥克丘波则斯皮德.' },
        { w: 'Nonuple', p: '/ˈnɒnjʊpl/', h: '农丘波', m: '九倍', s: 'Nonuple the output.', t: '产量九倍。', hs: '农丘波则奥普特普特.' },
        { w: 'Decuple', p: '/ˈdekjʊpl/', h: '德丘波', m: '十倍', s: 'Decuple the income.', t: '收入十倍。', hs: '德丘波则因卡姆.' },
        { w: 'Pair', p: '/peə/', h: '佩尔', m: '一对', s: 'A pair of shoes.', t: '一双鞋。', hs: '啊佩尔奥夫舒兹.' },
        { w: 'Dozen', p: '/ˈdʌzn/', h: '达森', m: '一打', s: 'A dozen eggs.', t: '一打鸡蛋。', hs: '啊达森艾格斯.' },
        { w: 'Score', p: '/skɔː/', h: '斯阔', m: '二十', s: 'A score of people.', t: '二十人。', hs: '啊斯阔奥夫皮普欧.' },
        { w: 'Gross', p: '/ɡrəʊs/', h: '格若斯', m: '一罗', s: 'A gross of pencils.', t: '一罗铅笔。', hs: '啊格若斯奥夫喷西尔斯.' }
    ];
    multiples.forEach(m => {
        numbers.push({ word: m.w, phonetic: m.p, homophone: m.h, meaning: m.m, sentence: m.s, translation: m.t, homophoneSentence: m.hs });
    });
    
    return numbers;
}

const newNumbers = generateNumbers();
fs.writeFileSync('new-numbers.json', JSON.stringify(newNumbers, null, 2));
console.log('生成了', newNumbers.length, '个数字类单词');
console.log('单词已保存到 new-numbers.json 文件');
