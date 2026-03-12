const fs = require('fs');

try {
    let data = fs.readFileSync('word-data.js', 'utf8');
    
    // 收集所有现有单词
    const allWords = new Set();
    const wordMatches = data.match(/\{\s*word:\s*["']([^"']+)["']/g) || [];
    wordMatches.forEach(match => {
        const matchResult = match.match(/\{\s*word:\s*["']([^"']+)["']/);
        if (matchResult && matchResult[1]) {
            allWords.add(matchResult[1].toLowerCase());
        }
    });
    
    console.log(`现有单词总数: ${allWords.size} 个`);
    
    // 100个 numbers 单词
    const numbersWords = [
        { word: "Seven million", phonetic: "/ˈsevn ˈmɪljən/", homophone: "赛文米尔金", meaning: "七百万", sentence: "Seven million dollars.", translation: "七百万美元。", homophoneSentence: "赛文米尔金道乐兹." },
        { word: "Eight million", phonetic: "/eɪt ˈmɪljən/", homophone: "艾特米尔金", meaning: "八百万", sentence: "Eight million dollars.", translation: "八百万美元。", homophoneSentence: "艾特米尔金道乐兹." },
        { word: "Nine million", phonetic: "/naɪn ˈmɪljən/", homophone: "奈恩米尔金", meaning: "九百万", sentence: "Nine million dollars.", translation: "九百万美元。", homophoneSentence: "奈恩米尔金道乐兹." },
        { word: "Ten million", phonetic: "/ten ˈmɪljən/", homophone: "腾米尔金", meaning: "一千万", sentence: "Ten million dollars.", translation: "一千万美元。", homophoneSentence: "腾米尔金道乐兹." },
        { word: "Eleven million", phonetic: "/ɪˈlevn ˈmɪljən/", homophone: "伊莱文米尔金", meaning: "一千一百万", sentence: "Eleven million dollars.", translation: "一千一百万美元。", homophoneSentence: "伊莱文米尔金道乐兹." },
        { word: "Twelve million", phonetic: "/twelv ˈmɪljən/", homophone: "特威尔夫米尔金", meaning: "一千二百万", sentence: "Twelve million dollars.", translation: "一千二百万美元。", homophoneSentence: "特威尔夫米尔金道乐兹." },
        { word: "Thirteen million", phonetic: "/ˌθɜːˈtiːn ˈmɪljən/", homophone: "瑟廷米尔金", meaning: "一千三百万", sentence: "Thirteen million dollars.", translation: "一千三百万美元。", homophoneSentence: "瑟廷米尔金道乐兹." },
        { word: "Fourteen million", phonetic: "/ˌfɔːˈtiːn ˈmɪljən/", homophone: "佛廷米尔金", meaning: "一千四百万", sentence: "Fourteen million dollars.", translation: "一千四百万美元。", homophoneSentence: "佛廷米尔金道乐兹." },
        { word: "Fifteen million", phonetic: "/ˌfɪfˈtiːn ˈmɪljən/", homophone: "菲夫廷米尔金", meaning: "一千五百万", sentence: "Fifteen million dollars.", translation: "一千五百万美元。", homophoneSentence: "菲夫廷米尔金道乐兹." },
        { word: "Sixteen million", phonetic: "/ˌsɪksˈtiːn ˈmɪljən/", homophone: "西克斯廷米尔金", meaning: "一千六百万", sentence: "Sixteen million dollars.", translation: "一千六百万美元。", homophoneSentence: "西克斯廷米尔金道乐兹." },
        { word: "Seventeen million", phonetic: "/ˌsevnˈtiːn ˈmɪljən/", homophone: "赛文廷米尔金", meaning: "一千七百万", sentence: "Seventeen million dollars.", translation: "一千七百万美元。", homophoneSentence: "赛文廷米尔金道乐兹." },
        { word: "Eighteen million", phonetic: "/ˌeɪˈtiːn ˈmɪljən/", homophone: "艾廷米尔金", meaning: "一千八百万", sentence: "Eighteen million dollars.", translation: "一千八百万美元。", homophoneSentence: "艾廷米尔金道乐兹." },
        { word: "Nineteen million", phonetic: "/ˌnaɪnˈtiːn ˈmɪljən/", homophone: "奈恩廷米尔金", meaning: "一千九百万", sentence: "Nineteen million dollars.", translation: "一千九百万美元。", homophoneSentence: "奈恩廷米尔金道乐兹." },
        { word: "Twenty million", phonetic: "/ˈtwenti ˈmɪljən/", homophone: "特温提米尔金", meaning: "二千万", sentence: "Twenty million dollars.", translation: "二千万美元。", homophoneSentence: "特温提米尔金道乐兹." },
        { word: "Thirty million", phonetic: "/ˈθɜːti ˈmɪljən/", homophone: "瑟提米尔金", meaning: "三千万", sentence: "Thirty million dollars.", translation: "三千万美元。", homophoneSentence: "瑟提米尔金道乐兹." },
        { word: "Forty million", phonetic: "/ˈfɔːti ˈmɪljən/", homophone: "佛提米尔金", meaning: "四千万", sentence: "Forty million dollars.", translation: "四千万美元。", homophoneSentence: "佛提米尔金道乐兹." },
        { word: "Fifty million", phonetic: "/ˈfɪfti ˈmɪljən/", homophone: "菲夫提米尔金", meaning: "五千万", sentence: "Fifty million dollars.", translation: "五千万美元。", homophoneSentence: "菲夫提米尔金道乐兹." },
        { word: "Sixty million", phonetic: "/ˈsɪksti ˈmɪljən/", homophone: "西克斯提米尔金", meaning: "六千万", sentence: "Sixty million dollars.", translation: "六千万美元。", homophoneSentence: "西克斯提米尔金道乐兹." },
        { word: "Seventy million", phonetic: "/ˈsevnti ˈmɪljən/", homophone: "赛文提米尔金", meaning: "七千万", sentence: "Seventy million dollars.", translation: "七千万美元。", homophoneSentence: "赛文提米尔金道乐兹." },
        { word: "Eighty million", phonetic: "/ˈeɪti ˈmɪljən/", homophone: "艾提米尔金", meaning: "八千万", sentence: "Eighty million dollars.", translation: "八千万美元。", homophoneSentence: "艾提米尔金道乐兹." },
        { word: "Ninety million", phonetic: "/ˈnaɪnti ˈmɪljən/", homophone: "奈恩提米尔金", meaning: "九千万", sentence: "Ninety million dollars.", translation: "九千万美元。", homophoneSentence: "奈恩提米尔金道乐兹." },
        { word: "One hundred million", phonetic: "/wʌn ˈhʌndrəd ˈmɪljən/", homophone: "万汉卓德米尔金", meaning: "一亿", sentence: "One hundred million dollars.", translation: "一亿美元。", homophoneSentence: "万汉卓德米尔金道乐兹." },
        { word: "Two hundred million", phonetic: "/tuː ˈhʌndrəd ˈmɪljən/", homophone: "图汉卓德米尔金", meaning: "二亿", sentence: "Two hundred million dollars.", translation: "二亿美元。", homophoneSentence: "图汉卓德米尔金道乐兹." },
        { word: "Three hundred million", phonetic: "/θriː ˈhʌndrəd ˈmɪljən/", homophone: "斯瑞汉卓德米尔金", meaning: "三亿", sentence: "Three hundred million dollars.", translation: "三亿美元。", homophoneSentence: "斯瑞汉卓德米尔金道乐兹." },
        { word: "Four hundred million", phonetic: "/fɔː ˈhʌndrəd ˈmɪljən/", homophone: "佛汉卓德米尔金", meaning: "四亿", sentence: "Four hundred million dollars.", translation: "四亿美元。", homophoneSentence: "佛汉卓德米尔金道乐兹." },
        { word: "Five hundred million", phonetic: "/faɪv ˈhʌndrəd ˈmɪljən/", homophone: "法艾夫汉卓德米尔金", meaning: "五亿", sentence: "Five hundred million dollars.", translation: "五亿美元。", homophoneSentence: "法艾夫汉卓德米尔金道乐兹." },
        { word: "Six hundred million", phonetic: "/sɪks ˈhʌndrəd ˈmɪljən/", homophone: "西克斯汉卓德米尔金", meaning: "六亿", sentence: "Six hundred million dollars.", translation: "六亿美元。", homophoneSentence: "西克斯汉卓德米尔金道乐兹." },
        { word: "Seven hundred million", phonetic: "/ˈsevn ˈhʌndrəd ˈmɪljən/", homophone: "赛文汉卓德米尔金", meaning: "七亿", sentence: "Seven hundred million dollars.", translation: "七亿美元。", homophoneSentence: "赛文汉卓德米尔金道乐兹." },
        { word: "Eight hundred million", phonetic: "/eɪt ˈhʌndrəd ˈmɪljən/", homophone: "艾特汉卓德米尔金", meaning: "八亿", sentence: "Eight hundred million dollars.", translation: "八亿美元。", homophoneSentence: "艾特汉卓德米尔金道乐兹." },
        { word: "Nine hundred million", phonetic: "/naɪn ˈhʌndrəd ˈmɪljən/", homophone: "奈恩汉卓德米尔金", meaning: "九亿", sentence: "Nine hundred million dollars.", translation: "九亿美元。", homophoneSentence: "奈恩汉卓德米尔金道乐兹." },
        { word: "One billion", phonetic: "/wʌn ˈbɪljən/", homophone: "万比尔金", meaning: "十亿", sentence: "One billion dollars.", translation: "十亿美元。", homophoneSentence: "万比尔金道乐兹." },
        { word: "Two billion", phonetic: "/tuː ˈbɪljən/", homophone: "图比尔金", meaning: "二十亿", sentence: "Two billion dollars.", translation: "二十亿美元。", homophoneSentence: "图比尔金道乐兹." },
        { word: "Three billion", phonetic: "/θriː ˈbɪljən/", homophone: "斯瑞比尔金", meaning: "三十亿", sentence: "Three billion dollars.", translation: "三十亿美元。", homophoneSentence: "斯瑞比尔金道乐兹." },
        { word: "Four billion", phonetic: "/fɔː ˈbɪljən/", homophone: "佛比尔金", meaning: "四十亿", sentence: "Four billion dollars.", translation: "四十亿美元。", homophoneSentence: "佛比尔金道乐兹." },
        { word: "Five billion", phonetic: "/faɪv ˈbɪljən/", homophone: "法艾夫比尔金", meaning: "五十亿", sentence: "Five billion dollars.", translation: "五十亿美元。", homophoneSentence: "法艾夫比尔金道乐兹." },
        { word: "Six billion", phonetic: "/sɪks ˈbɪljən/", homophone: "西克斯比尔金", meaning: "六十亿", sentence: "Six billion dollars.", translation: "六十亿美元。", homophoneSentence: "西克斯比尔金道乐兹." },
        { word: "Seven billion", phonetic: "/ˈsevn ˈbɪljən/", homophone: "赛文比尔金", meaning: "七十亿", sentence: "Seven billion dollars.", translation: "七十亿美元。", homophoneSentence: "赛文比尔金道乐兹." },
        { word: "Eight billion", phonetic: "/eɪt ˈbɪljən/", homophone: "艾特比尔金", meaning: "八十亿", sentence: "Eight billion dollars.", translation: "八十亿美元。", homophoneSentence: "艾特比尔金道乐兹." },
        { word: "Nine billion", phonetic: "/naɪn ˈbɪljən/", homophone: "奈恩比尔金", meaning: "九十亿", sentence: "Nine billion dollars.", translation: "九十亿美元。", homophoneSentence: "奈恩比尔金道乐兹." },
        { word: "Ten billion", phonetic: "/ten ˈbɪljən/", homophone: "腾比尔金", meaning: "一百亿", sentence: "Ten billion dollars.", translation: "一百亿美元。", homophoneSentence: "腾比尔金道乐兹." },
        { word: "Twenty billion", phonetic: "/ˈtwenti ˈbɪljən/", homophone: "特温提比尔金", meaning: "二百亿", sentence: "Twenty billion dollars.", translation: "二百亿美元。", homophoneSentence: "特温提比尔金道乐兹." },
        { word: "Thirty billion", phonetic: "/ˈθɜːti ˈbɪljən/", homophone: "瑟提比尔金", meaning: "三百亿", sentence: "Thirty billion dollars.", translation: "三百亿美元。", homophoneSentence: "瑟提比尔金道乐兹." },
        { word: "Forty billion", phonetic: "/ˈfɔːti ˈbɪljən/", homophone: "佛提比尔金", meaning: "四百亿", sentence: "Forty billion dollars.", translation: "四百亿美元。", homophoneSentence: "佛提比尔金道乐兹." },
        { word: "Fifty billion", phonetic: "/ˈfɪfti ˈbɪljən/", homophone: "菲夫提比尔金", meaning: "五百亿", sentence: "Fifty billion dollars.", translation: "五百亿美元。", homophoneSentence: "菲夫提比尔金道乐兹." },
        { word: "Sixty billion", phonetic: "/ˈsɪksti ˈbɪljən/", homophone: "西克斯提比尔金", meaning: "六百亿", sentence: "Sixty billion dollars.", translation: "六百亿美元。", homophoneSentence: "西克斯提比尔金道乐兹." },
        { word: "Seventy billion", phonetic: "/ˈsevnti ˈbɪljən/", homophone: "赛文提比尔金", meaning: "七百亿", sentence: "Seventy billion dollars.", translation: "七百亿美元。", homophoneSentence: "赛文提比尔金道乐兹." },
        { word: "Eighty billion", phonetic: "/ˈeɪti ˈbɪljən/", homophone: "艾提比尔金", meaning: "八百亿", sentence: "Eighty billion dollars.", translation: "八百亿美元。", homophoneSentence: "艾提比尔金道乐兹." },
        { word: "Ninety billion", phonetic: "/ˈnaɪnti ˈbɪljən/", homophone: "奈恩提比尔金", meaning: "九百亿", sentence: "Ninety billion dollars.", translation: "九百亿美元。", homophoneSentence: "奈恩提比尔金道乐兹." },
        { word: "One hundred billion", phonetic: "/wʌn ˈhʌndrəd ˈbɪljən/", homophone: "万汉卓德比尔金", meaning: "一千亿", sentence: "One hundred billion dollars.", translation: "一千亿美元。", homophoneSentence: "万汉卓德比尔金道乐兹." },
        { word: "Two hundred billion", phonetic: "/tuː ˈhʌndrəd ˈbɪljən/", homophone: "图汉卓德比尔金", meaning: "二千亿", sentence: "Two hundred billion dollars.", translation: "二千亿美元。", homophoneSentence: "图汉卓德比尔金道乐兹." },
        { word: "Three hundred billion", phonetic: "/θriː ˈhʌndrəd ˈbɪljən/", homophone: "斯瑞汉卓德比尔金", meaning: "三千亿", sentence: "Three hundred billion dollars.", translation: "三千亿美元。", homophoneSentence: "斯瑞汉卓德比尔金道乐兹." },
        { word: "Four hundred billion", phonetic: "/fɔː ˈhʌndrəd ˈbɪljən/", homophone: "佛汉卓德比尔金", meaning: "四千亿", sentence: "Four hundred billion dollars.", translation: "四千亿美元。", homophoneSentence: "佛汉卓德比尔金道乐兹." },
        { word: "Five hundred billion", phonetic: "/faɪv ˈhʌndrəd ˈbɪljən/", homophone: "法艾夫汉卓德比尔金", meaning: "五千亿", sentence: "Five hundred billion dollars.", translation: "五千亿美元。", homophoneSentence: "法艾夫汉卓德比尔金道乐兹." },
        { word: "Six hundred billion", phonetic: "/sɪks ˈhʌndrəd ˈbɪljən/", homophone: "西克斯汉卓德比尔金", meaning: "六千亿", sentence: "Six hundred billion dollars.", translation: "六千亿美元。", homophoneSentence: "西克斯汉卓德比尔金道乐兹." },
        { word: "Seven hundred billion", phonetic: "/ˈsevn ˈhʌndrəd ˈbɪljən/", homophone: "赛文汉卓德比尔金", meaning: "七千亿", sentence: "Seven hundred billion dollars.", translation: "七千亿美元。", homophoneSentence: "赛文汉卓德比尔金道乐兹." },
        { word: "Eight hundred billion", phonetic: "/eɪt ˈhʌndrəd ˈbɪljən/", homophone: "艾特汉卓德比尔金", meaning: "八千亿", sentence: "Eight hundred billion dollars.", translation: "八千亿美元。", homophoneSentence: "艾特汉卓德比尔金道乐兹." },
        { word: "Nine hundred billion", phonetic: "/naɪn ˈhʌndrəd ˈbɪljən/", homophone: "奈恩汉卓德比尔金", meaning: "九千亿", sentence: "Nine hundred billion dollars.", translation: "九千亿美元。", homophoneSentence: "奈恩汉卓德比尔金道乐兹." },
        { word: "One trillion", phonetic: "/wʌn ˈtrɪljən/", homophone: "万特里利恩", meaning: "一万亿", sentence: "One trillion dollars.", translation: "一万亿美元。", homophoneSentence: "万特里利恩道乐兹." },
        { word: "Two trillion", phonetic: "/tuː ˈtrɪljən/", homophone: "图特里利恩", meaning: "二万亿", sentence: "Two trillion dollars.", translation: "二万亿美元。", homophoneSentence: "图特里利恩道乐兹." },
        { word: "Three trillion", phonetic: "/θriː ˈtrɪljən/", homophone: "斯瑞特里利恩", meaning: "三万亿", sentence: "Three trillion dollars.", translation: "三万亿美元。", homophoneSentence: "斯瑞特里利恩道乐兹." },
        { word: "Four trillion", phonetic: "/fɔː ˈtrɪljən/", homophone: "佛特里利恩", meaning: "四万亿", sentence: "Four trillion dollars.", translation: "四万亿美元。", homophoneSentence: "佛特里利恩道乐兹." },
        { word: "Five trillion", phonetic: "/faɪv ˈtrɪljən/", homophone: "法艾夫特里利恩", meaning: "五万亿", sentence: "Five trillion dollars.", translation: "五万亿美元。", homophoneSentence: "法艾夫特里利恩道乐兹." },
        { word: "Six trillion", phonetic: "/sɪks ˈtrɪljən/", homophone: "西克斯特里利恩", meaning: "六万亿", sentence: "Six trillion dollars.", translation: "六万亿美元。", homophoneSentence: "西克斯特里利恩道乐兹." },
        { word: "Seven trillion", phonetic: "/ˈsevn ˈtrɪljən/", homophone: "赛文特里利恩", meaning: "七万亿", sentence: "Seven trillion dollars.", translation: "七万亿美元。", homophoneSentence: "赛文特里利恩道乐兹." },
        { word: "Eight trillion", phonetic: "/eɪt ˈtrɪljən/", homophone: "艾特特里利恩", meaning: "八万亿", sentence: "Eight trillion dollars.", translation: "八万亿美元。", homophoneSentence: "艾特特里利恩道乐兹." },
        { word: "Nine trillion", phonetic: "/naɪn ˈtrɪljən/", homophone: "奈恩特里利恩", meaning: "九万亿", sentence: "Nine trillion dollars.", translation: "九万亿美元。", homophoneSentence: "奈恩特里利恩道乐兹." },
        { word: "Ten trillion", phonetic: "/ten ˈtrɪljən/", homophone: "腾特里利恩", meaning: "十万亿", sentence: "Ten trillion dollars.", translation: "十万亿美元。", homophoneSentence: "腾特里利恩道乐兹." },
        { word: "Twenty trillion", phonetic: "/ˈtwenti ˈtrɪljən/", homophone: "特温提特里利恩", meaning: "二十万亿", sentence: "Twenty trillion dollars.", translation: "二十万亿美元。", homophoneSentence: "特温提特里利恩道乐兹." },
        { word: "Thirty trillion", phonetic: "/ˈθɜːti ˈtrɪljən/", homophone: "瑟提特里利恩", meaning: "三十万亿", sentence: "Thirty trillion dollars.", translation: "三十万亿美元。", homophoneSentence: "瑟提特里利恩道乐兹." },
        { word: "Forty trillion", phonetic: "/ˈfɔːti ˈtrɪljən/", homophone: "佛提特里利恩", meaning: "四十万亿", sentence: "Forty trillion dollars.", translation: "四十万亿美元。", homophoneSentence: "佛提特里利恩道乐兹." },
        { word: "Fifty trillion", phonetic: "/ˈfɪfti ˈtrɪljən/", homophone: "菲夫提特里利恩", meaning: "五十万亿", sentence: "Fifty trillion dollars.", translation: "五十万亿美元。", homophoneSentence: "菲夫提特里利恩道乐兹." },
        { word: "Sixty trillion", phonetic: "/ˈsɪksti ˈtrɪljən/", homophone: "西克斯提特里利恩", meaning: "六十万亿", sentence: "Sixty trillion dollars.", translation: "六十万亿美元。", homophoneSentence: "西克斯提特里利恩道乐兹." },
        { word: "Seventy trillion", phonetic: "/ˈsevnti ˈtrɪljən/", homophone: "赛文提特里利恩", meaning: "七十万亿", sentence: "Seventy trillion dollars.", translation: "七十万亿美元。", homophoneSentence: "赛文提特里利恩道乐兹." },
        { word: "Eighty trillion", phonetic: "/ˈeɪti ˈtrɪljən/", homophone: "艾提特里利恩", meaning: "八十万亿", sentence: "Eighty trillion dollars.", translation: "八十万亿美元。", homophoneSentence: "艾提特里利恩道乐兹." },
        { word: "Ninety trillion", phonetic: "/ˈnaɪnti ˈtrɪljən/", homophone: "奈恩提特里利恩", meaning: "九十万亿", sentence: "Ninety trillion dollars.", translation: "九十万亿美元。", homophoneSentence: "奈恩提特里利恩道乐兹." },
        { word: "One hundred trillion", phonetic: "/wʌn ˈhʌndrəd ˈtrɪljən/", homophone: "万汉卓德特里利恩", meaning: "一百万亿", sentence: "One hundred trillion dollars.", translation: "一百万亿美元。", homophoneSentence: "万汉卓德特里利恩道乐兹." }
    ];
    
    // 100个 colors 单词
    const colorsWords = [
        { word: "Crimson", phonetic: "/ˈkrɪmzən/", homophone: "克里姆森", meaning: "深红色", sentence: "The crimson rose is beautiful.", translation: "深红色的玫瑰很美。", homophoneSentence: "泽克里姆森柔兹is比欧特夫欧." },
        { word: "Maroon", phonetic: "/məˈruːn/", homophone: "马鲁恩", meaning: "栗色", sentence: "He wore a maroon sweater.", translation: "他穿了一件栗色毛衣。", homophoneSentence: "希沃尔啊马鲁恩斯歪特." },
        { word: "Burgundy", phonetic: "/ˈbɜːɡəndi/", homophone: "伯格恩迪", meaning: "酒红色", sentence: "The wine is burgundy.", translation: "这酒是酒红色的。", homophoneSentence: "泽温is伯格恩迪." },
        { word: "Scarlet", phonetic: "/ˈskɑːlət/", homophone: "斯卡勒特", meaning: "猩红色", sentence: "She wore a scarlet dress.", translation: "她穿了一件猩红色连衣裙。", homophoneSentence: "希沃啊斯卡勒特德雷斯." },
        { word: "Ruby", phonetic: "/ˈruːbi/", homophone: "鲁比", meaning: "红宝石色", sentence: "The ruby necklace is stunning.", translation: "这条红宝石项链令人惊叹。", homophoneSentence: "泽鲁比耐克利斯is斯坦宁." },
        { word: "Cherry", phonetic: "/ˈtʃeri/", homophone: "切瑞", meaning: "樱桃红", sentence: "Her lips are cherry red.", translation: "她的嘴唇是樱桃红色的。", homophoneSentence: "赫尔利普斯啊切瑞瑞德." },
        { word: "Rust", phonetic: "/rʌst/", homophone: "拉斯特", meaning: "铁锈色", sentence: "The old car is rust colored.", translation: "这辆旧车是铁锈色的。", homophoneSentence: "泽欧德卡is拉斯特卡乐德." },
        { word: "Copper", phonetic: "/ˈkɒpə/", homophone: "科普", meaning: "铜色", sentence: "The roof is copper.", translation: "屋顶是铜色的。", homophoneSentence: "泽鲁夫is科普." },
        { word: "Bronze", phonetic: "/brɒnz/", homophone: "布朗兹", meaning: "青铜色", sentence: "The statue is bronze.", translation: "这座雕像是青铜色的。", homophoneSentence: "泽斯泰丘is布朗兹." },
        { word: "Terra cotta", phonetic: "/ˈterə ˈkɒtə/", homophone: "特拉科塔", meaning: "赤陶色", sentence: "The pots are terra cotta.", translation: "这些花盆是赤陶色的。", homophoneSentence: "泽波茨啊特拉科塔." },
        { word: "Coral", phonetic: "/ˈkɒrəl/", homophone: "科柔", meaning: "珊瑚色", sentence: "The coral reef is beautiful.", translation: "珊瑚礁很美。", homophoneSentence: "泽科柔瑞夫is比欧特夫欧." },
        { word: "Salmon", phonetic: "/ˈsæmən/", homophone: "萨蒙", meaning: "鲑鱼粉", sentence: "The walls are salmon pink.", translation: "墙壁是鲑鱼粉色的。", homophoneSentence: "泽沃尔斯啊萨蒙平克." },
        { word: "Peach", phonetic: "/piːtʃ/", homophone: "皮奇", meaning: "桃色", sentence: "She wore a peach dress.", translation: "她穿了一件桃色连衣裙。", homophoneSentence: "希沃啊皮奇德雷斯." },
        { word: "Apricot", phonetic: "/ˈeɪprɪkɒt/", homophone: "艾普瑞科特", meaning: "杏色", sentence: "The apricot sky at sunset.", translation: "日落时的杏色天空。", homophoneSentence: "泽艾普瑞科塔斯凯艾特桑塞特." },
        { word: "Tangerine", phonetic: "/ˌtændʒəˈriːn/", homophone: "坦吉瑞恩", meaning: "橘红色", sentence: "The tangerine sunset was beautiful.", translation: "橘红色的日落很美。", homophoneSentence: "泽坦吉瑞恩桑塞特沃兹比欧特夫欧." },
        { word: "Pumpkin", phonetic: "/ˈpʌmpkɪn/", homophone: "潘普金", meaning: "南瓜橙", sentence: "The pumpkin pie is delicious.", translation: "南瓜派很美味。", homophoneSentence: "泽潘普金派is迪利修斯." },
        { word: "Amber", phonetic: "/ˈæmbə/", homophone: "安伯", meaning: "琥珀色", sentence: "The amber necklace is old.", translation: "这条琥珀项链很古老。", homophoneSentence: "泽安伯耐克利斯is欧德." },
        { word: "Gold", phonetic: "/ɡəʊld/", homophone: "勾德", meaning: "金色", sentence: "The gold ring is expensive.", translation: "这枚金戒指很贵。", homophoneSentence: "泽勾德瑞恩is伊克斯潘西夫." },
        { word: "Goldenrod", phonetic: "/ˈɡəʊldənrɒd/", homophone: "勾德恩罗德", meaning: "金菊黄", sentence: "The goldenrod flowers are blooming.", translation: "金菊黄色的花正在盛开。", homophoneSentence: "泽勾德恩罗德弗劳尔斯啊布鲁明." },
        { word: "Mustard", phonetic: "/ˈmʌstəd/", homophone: "马斯特德", meaning: "芥末黄", sentence: "He wore a mustard shirt.", translation: "他穿了一件芥末黄衬衫。", homophoneSentence: "希沃尔啊马斯特德舍特." },
        { word: "Lemon", phonetic: "/ˈlemən/", homophone: "莱蒙", meaning: "柠檬黄", sentence: "The lemon cake is sour.", translation: "柠檬蛋糕是酸的。", homophoneSentence: "泽莱蒙凯克is索尔." },
        { word: "Canary", phonetic: "/kəˈneəri/", homophone: "卡奈瑞", meaning: "金丝雀黄", sentence: "The canary yellow car is bright.", translation: "这辆金丝雀黄色的车很亮。", homophoneSentence: "泽卡奈瑞耶洛卡is布瑞特." },
        { word: "Chartreuse", phonetic: "/ʃɑːˈtrɜːz/", homophone: "沙特鲁斯", meaning: "黄绿色", sentence: "The chartreuse liqueur is strong.", translation: "这种黄绿色利口酒很烈。", homophoneSentence: "泽沙特鲁斯里克尔is斯特朗." },
        { word: "Lime", phonetic: "/laɪm/", homophone: "莱姆", meaning: "青柠色", sentence: "The lime green walls are fresh.", translation: "青柠绿色的墙壁很清新。", homophoneSentence: "泽莱姆格林沃尔斯啊弗瑞什." },
        { word: "Mint", phonetic: "/mɪnt/", homophone: "敏特", meaning: "薄荷绿", sentence: "The mint ice cream is refreshing.", translation: "薄荷冰淇淋很清爽。", homophoneSentence: "泽敏特艾斯克瑞姆is瑞弗瑞什英." },
        { word: "Seafoam", phonetic: "/ˈsiːfəʊm/", homophone: "西佛姆", meaning: "海沫绿", sentence: "The seafoam green dress is pretty.", translation: "这件海沫绿色连衣裙很漂亮。", homophoneSentence: "泽西佛姆格林德雷斯is普瑞提." },
        { word: "Turquoise", phonetic: "/ˈtɜːkwɔɪz/", homophone: "特科伊斯", meaning: "绿松石色", sentence: "The turquoise water is clear.", translation: "绿松石色的水很清澈。", homophoneSentence: "泽特科伊斯沃特is克利尔." },
        { word: "Teal", phonetic: "/tiːl/", homophone: "提尔", meaning: "蓝绿色", sentence: "She wore a teal blouse.", translation: "她穿了一件蓝绿色女衬衫。", homophoneSentence: "希沃啊提尔布劳斯." },
        { word: "Cyan", phonetic: "/ˈsaɪən/", homophone: "赛恩", meaning: "青色", sentence: "The cyan sky is beautiful.", translation: "青色的天空很美。", homophoneSentence: "泽赛恩斯凯is比欧特夫欧." },
        { word: "Sky blue", phonetic: "/skaɪ bluː/", homophone: "斯凯布鲁", meaning: "天蓝色", sentence: "The sky blue dress is lovely.", translation: "这件天蓝色连衣裙很可爱。", homophoneSentence: "泽斯凯布鲁德雷斯is拉夫利." },
        { word: "Baby blue", phonetic: "/ˈbeɪbi bluː/", homophone: "贝比布鲁", meaning: "婴儿蓝", sentence: "The baby blue room is calming.", translation: "这个婴儿蓝色的房间很宁静。", homophoneSentence: "泽贝比布鲁鲁姆is卡明." },
        { word: "Powder blue", phonetic: "/ˈpaʊdə bluː/", homophone: "鲍德布鲁", meaning: "粉蓝色", sentence: "She wore powder blue eyeshadow.", translation: "她涂了粉蓝色眼影。", homophoneSentence: "希沃鲍德布鲁艾沙多." },
        { word: "Steel blue", phonetic: "/stiːl bluː/", homophone: "斯蒂尔布鲁", meaning: "钢蓝色", sentence: "The steel blue suit is professional.", translation: "这套钢蓝色西装很专业。", homophoneSentence: "泽斯蒂尔布鲁苏特is普若费申诺." },
        { word: "Navy", phonetic: "/ˈneɪvi/", homophone: "奈维", meaning: "海军蓝", sentence: "The navy uniform is crisp.", translation: "这套海军蓝制服很挺括。", homophoneSentence: "泽奈维尤尼佛姆is克里斯普." },
        { word: "Midnight blue", phonetic: "/ˈmɪdnaɪt bluː/", homophone: "米德奈特布鲁", meaning: "午夜蓝", sentence: "The midnight blue sky has stars.", translation: "午夜蓝色的天空有星星。", homophoneSentence: "泽米德奈特布鲁斯凯海兹斯塔斯." },
        { word: "Royal blue", phonetic: "/ˈrɔɪəl bluː/", homophone: "罗伊尔布鲁", meaning: "宝蓝色", sentence: "The royal blue velvet is rich.", translation: "这种宝蓝色天鹅绒很华贵。", homophoneSentence: "泽罗伊尔布鲁维尔维特is瑞奇." },
        { word: "Cobalt", phonetic: "/ˈkəʊbɔːlt/", homophone: "科博尔特", meaning: "钴蓝色", sentence: "The cobalt glass is vintage.", translation: "这种钴蓝色玻璃是复古的。", homophoneSentence: "泽科博尔特格拉斯is文泰奇." },
        { word: "Sapphire", phonetic: "/ˈsæfaɪə/", homophone: "萨法伊尔", meaning: "蓝宝石色", sentence: "The sapphire ring is precious.", translation: "这枚蓝宝石戒指很珍贵。", homophoneSentence: "泽萨法伊瑞恩is普瑞舍斯." },
        { word: "Indigo", phonetic: "/ˈɪndɪɡəʊ/", homophone: "因迪勾", meaning: "靛蓝色", sentence: "The indigo dye is natural.", translation: "这种靛蓝色染料是天然的。", homophoneSentence: "泽因迪勾戴is纳彻若." },
        { word: "Violet", phonetic: "/ˈvaɪələt/", homophone: "瓦伊勒特", meaning: "紫罗兰色", sentence: "The violet flowers are fragrant.", translation: "紫罗兰色的花很香。", homophoneSentence: "泽瓦伊勒特弗劳尔斯啊弗雷格兰特." },
        { word: "Lavender", phonetic: "/ˈlævəndə/", homophone: "拉文德", meaning: "薰衣草紫", sentence: "The lavender field is vast.", translation: "这片薰衣草田很广阔。", homophoneSentence: "泽拉文德菲尔德is瓦斯特." },
        { word: "Lilac", phonetic: "/ˈlaɪlək/", homophone: "莱拉克", meaning: "丁香紫", sentence: "The lilac bush is blooming.", translation: "这丛丁香紫灌木正在开花。", homophoneSentence: "泽莱拉克布什is布鲁明." },
        { word: "Plum", phonetic: "/plʌm/", homophone: "普拉姆", meaning: "李子紫", sentence: "The plum color is deep.", translation: "这种李子紫色很深。", homophoneSentence: "泽普拉姆卡乐is迪普." },
        { word: "Magenta", phonetic: "/məˈdʒentə/", homophone: "马真塔", meaning: "洋红色", sentence: "The magenta dress is bold.", translation: "这件洋红色连衣裙很大胆。", homophoneSentence: "泽马真塔德雷斯is博尔德." },
        { word: "Fuchsia", phonetic: "/ˈfjuːʃə/", homophone: "菲尤舍", meaning: "紫红色", sentence: "The fuchsia flowers are vibrant.", translation: "紫红色的花很鲜艳。", homophoneSentence: "泽菲尤舍弗劳尔斯啊歪布兰特." },
        { word: "Orchid", phonetic: "/ˈɔːkɪd/", homophone: "奥基德", meaning: "兰花紫", sentence: "The orchid pink is delicate.", translation: "这种兰花粉色很精致。", homophoneSentence: "泽奥基德平克is戴利凯特." },
        { word: "Mauve", phonetic: "/məʊv/", homophone: "莫夫", meaning: "淡紫色", sentence: "The mauve curtains are elegant.", translation: "这些淡紫色窗帘很优雅。", homophoneSentence: "泽莫夫克腾斯啊艾利根特." },
        { word: "Taupe", phonetic: "/təʊp/", homophone: "托普", meaning: "灰褐色", sentence: "The taupe carpet is neutral.", translation: "这块灰褐色地毯很中性。", homophoneSentence: "泽托普卡皮特is纽特拉." },
        { word: "Beige", phonetic: "/beɪʒ/", homophone: "贝日", meaning: "米色", sentence: "The beige walls are warm.", translation: "这些米色墙壁很温暖。", homophoneSentence: "泽贝日沃尔斯啊沃姆." },
        { word: "Khaki", phonetic: "/ˈkɑːki/", homophone: "卡奇", meaning: "卡其色", sentence: "He wore khaki pants.", translation: "他穿了卡其色裤子。", homophoneSentence: "希沃尔卡奇潘茨." },
        { word: "Tan", phonetic: "/tæn/", homophone: "坦", meaning: "棕褐色", sentence: "The tan leather is soft.", translation: "这种棕褐色皮革很软。", homophoneSentence: "泽坦莱泽is索夫特." },
        { word: "Camel", phonetic: "/ˈkæml/", homophone: "卡梅尔", meaning: "驼色", sentence: "The camel coat is stylish.", translation: "这件驼色外套很时尚。", homophoneSentence: "泽卡梅尔科特is斯泰利什." },
        { word: "Chocolate", phonetic: "/ˈtʃɒklət/", homophone: "巧克勒特", meaning: "巧克力色", sentence: "The chocolate cake is rich.", translation: "这个巧克力蛋糕很浓郁。", homophoneSentence: "泽巧克勒特凯克is瑞奇." },
        { word: "Coffee", phonetic: "/ˈkɒfi/", homophone: "科菲", meaning: "咖啡色", sentence: "The coffee stain is stubborn.", translation: "这个咖啡渍很顽固。", homophoneSentence: "泽科菲斯泰恩is斯塔伯恩." },
        { word: "Mocha", phonetic: "/ˈmɒkə/", homophone: "莫卡", meaning: "摩卡色", sentence: "The mocha frosting is sweet.", translation: "这种摩卡色糖霜很甜。", homophoneSentence: "泽莫卡弗罗斯听is斯威特." },
        { word: "Cinnamon", phonetic: "/ˈsɪnəmən/", homophone: "西纳蒙", meaning: "肉桂色", sentence: "The cinnamon rolls are warm.", translation: "这些肉桂卷很温暖。", homophoneSentence: "泽西纳蒙柔尔斯啊沃姆." },
        { word: "Chestnut", phonetic: "/ˈtʃesnʌt/", homophone: "切斯纳特", meaning: "栗褐色", sentence: "Her hair is chestnut brown.", translation: "她的头发是栗褐色的。", homophoneSentence: "赫尔海尔is切斯纳特布柔恩." },
        { word: "Walnut", phonetic: "/ˈwɔːlnʌt/", homophone: "沃尔纳特", meaning: "核桃棕", sentence: "The walnut table is solid.", translation: "这张核桃棕桌子很结实。", homophoneSentence: "泽沃尔纳特泰波is索利德." },
        { word: "Espresso", phonetic: "/eˈspresəʊ/", homophone: "埃斯普雷索", meaning: "浓咖啡色", sentence: "The espresso color is dark.", translation: "这种浓咖啡色很深。", homophoneSentence: "泽埃斯普雷索卡乐is达克." },
        { word: "Charcoal", phonetic: "/ˈtʃɑːkəʊl/", homophone: "查科尔", meaning: "炭灰色", sentence: "The charcoal suit is formal.", translation: "这套炭灰色西装很正式。", homophoneSentence: "泽查科尔苏特is佛莫尔." },
        { word: "Slate", phonetic: "/sleɪt/", homophone: "斯莱特", meaning: "石板灰", sentence: "The slate roof is durable.", translation: "这个石板灰屋顶很耐用。", homophoneSentence: "泽斯莱特鲁夫is丢若波欧." },
        { word: "Graphite", phonetic: "/ˈɡræfaɪt/", homophone: "格拉法伊特", meaning: "石墨灰", sentence: "The graphite pencil is sharp.", translation: "这支石墨灰铅笔很尖。", homophoneSentence: "泽格拉法伊特彭西利斯夏普." },
        { word: "Silver", phonetic: "/ˈsɪlvə/", homophone: "西尔弗", meaning: "银色", sentence: "The silver necklace is shiny.", translation: "这条银色项链很闪亮。", homophoneSentence: "泽西尔弗耐克利斯is晒尼." },
        { word: "Platinum", phonetic: "/ˈplætɪnəm/", homophone: "普拉提纳姆", meaning: "铂金色", sentence: "The platinum blonde is striking.", translation: "这种铂金色金发很引人注目。", homophoneSentence: "泽普拉提纳姆布隆迪斯斯吹克英." },
        { word: "Pewter", phonetic: "/ˈpjuːtə/", homophone: "皮尤特", meaning: "锡灰色", sentence: "The pewter mug is antique.", translation: "这个锡灰色杯子很古老。", homophoneSentence: "泽皮尤特马格is安泰克." },
        { word: "Gunmetal", phonetic: "/ˈɡʌnmetl/", homophone: "冈梅特尔", meaning: "枪金属灰", sentence: "The gunmetal gray is sleek.", translation: "这种枪金属灰色很时尚。", homophoneSentence: "泽冈梅特尔格瑞is斯利克." },
        { word: "Onyx", phonetic: "/ˈɒnɪks/", homophone: "奥尼克斯", meaning: "玛瑙黑", sentence: "The onyx stone is polished.", translation: "这块玛瑙黑石头很光滑。", homophoneSentence: "泽奥尼克斯斯通is波利什特." },
        { word: "Jet black", phonetic: "/dʒet blæk/", homophone: "杰特布莱克", meaning: "乌黑色", sentence: "The jet black hair is shiny.", translation: "这头乌黑色头发很亮。", homophoneSentence: "泽杰特布莱克海尔is晒尼." },
        { word: "Raven", phonetic: "/ˈreɪvn/", homophone: "瑞文", meaning: "乌鸦黑", sentence: "The raven feathers are dark.", translation: "这些乌鸦黑羽毛很黑。", homophoneSentence: "泽瑞文费泽斯啊达克." },
        { word: "Ebony", phonetic: "/ˈebəni/", homophone: "埃博尼", meaning: "乌木色", sentence: "The ebony wood is rare.", translation: "这种乌木色木材很稀有。", homophoneSentence: "泽埃博尼伍德is瑞尔." },
        { word: "Ivory white", phonetic: "/ˈaɪvəri waɪt/", homophone: "艾弗里怀特", meaning: "象牙白", sentence: "The ivory white keys are old.", translation: "这些象牙白色的琴键很古老。", homophoneSentence: "泽艾弗里怀特基斯啊欧德." },
        { word: "Cream white", phonetic: "/kriːm waɪt/", homophone: "克里姆怀特", meaning: "奶油白", sentence: "The cream white walls are soft.", translation: "这些奶油白色墙壁很柔和。", homophoneSentence: "泽克里姆怀特沃尔斯啊索夫特." },
        { word: "Pearl", phonetic: "/pɜːl/", homophone: "珀尔", meaning: "珍珠白", sentence: "The pearl earrings are elegant.", translation: "这对珍珠白耳环很优雅。", homophoneSentence: "泽珀尔伊林斯啊艾利根特." },
        { word: "Snow white", phonetic: "/snəʊ waɪt/", homophone: "斯诺怀特", meaning: "雪白", sentence: "The snow white dress is pure.", translation: "这件雪白连衣裙很纯洁。", homophoneSentence: "泽斯诺怀特德雷斯is皮尤尔." },
        { word: "Eggshell", phonetic: "/ˈeɡʃel/", homophone: "埃格谢尔", meaning: "蛋壳白", sentence: "The eggshell paint is matte.", translation: "这种蛋壳白油漆是哑光的。", homophoneSentence: "泽埃格谢尔佩因特is马特." },
        { word: "Off white", phonetic: "/ɒf waɪt/", homophone: "奥夫怀特", meaning: "米白色", sentence: "The off white curtains are clean.", translation: "这些米白色窗帘很干净。", homophoneSentence: "泽奥夫怀特克腾斯啊克林." },
        { word: "Olive", phonetic: "/ˈɒlɪv/", homophone: "奥利夫", meaning: "橄榄绿", sentence: "The olive green is natural.", translation: "这种橄榄绿很自然。", homophoneSentence: "泽奥利夫格林is纳彻若." },
        { word: "Fern", phonetic: "/fɜːn/", homophone: "弗恩", meaning: "蕨绿色", sentence: "The fern plants are lush.", translation: "这些蕨绿色植物很茂盛。", homophoneSentence: "泽弗恩普兰茨啊拉什." },
        { word: "Sage", phonetic: "/seɪdʒ/", homophone: "赛吉", meaning: "鼠尾草绿", sentence: "The sage walls are calming.", translation: "这些鼠尾草绿色墙壁很宁静。", homophoneSentence: "泽赛吉沃尔斯啊卡明." },
        { word: "Moss", phonetic: "/mɒs/", homophone: "莫斯", meaning: "苔藓绿", sentence: "The moss grows on rocks.", translation: "苔藓生长在岩石上。", homophoneSentence: "泽莫斯格柔兹昂洛克斯." },
        { word: "Forest", phonetic: "/ˈfɒrɪst/", homophone: "福瑞斯特", meaning: "森林绿", sentence: "The forest green is deep.", translation: "这种森林绿很深。", homophoneSentence: "泽福瑞斯特格林is迪普." },
        { word: "Jungle", phonetic: "/ˈdʒʌŋɡl/", homophone: "江格尔", meaning: "丛林绿", sentence: "The jungle green is vibrant.", translation: "这种丛林绿很鲜艳。", homophoneSentence: "泽江格尔格林is歪布兰特." },
        { word: "Emerald", phonetic: "/ˈemərəld/", homophone: "埃默拉尔德", meaning: "祖母绿", sentence: "The emerald ring is valuable.", translation: "这枚祖母绿戒指很贵重。", homophoneSentence: "泽埃默拉尔德瑞恩is歪留波欧." },
        { word: "Jade", phonetic: "/dʒeɪd/", homophone: "杰德", meaning: "翡翠绿", sentence: "The jade statue is ancient.", translation: "这座翡翠绿雕像很古老。", homophoneSentence: "泽杰德斯泰丘is安申特." },
        { word: "Malachite", phonetic: "/ˈmæləkaɪt/", homophone: "马拉凯特", meaning: "孔雀石绿", sentence: "The malachite stone is beautiful.", translation: "这块孔雀石绿石头很美。", homophoneSentence: "泽马拉凯特斯通is比欧特夫欧." },
        { word: "Peridot", phonetic: "/ˈperɪdɒt/", homophone: "佩里多特", meaning: "橄榄石绿", sentence: "The peridot gem is bright.", translation: "这颗橄榄石绿宝石很亮。", homophoneSentence: "泽佩里多特杰姆is布瑞特." },
        { word: "Kelly green", phonetic: "/ˈkeli ɡriːn/", homophone: "凯利格林", meaning: "凯利绿", sentence: "The kelly green shirt is bright.", translation: "这件凯利绿衬衫很亮。", homophoneSentence: "泽凯利格林舍特is布瑞特." },
        { word: "Neon green", phonetic: "/ˈniːɒn ɡriːn/", homophone: "尼昂格林", meaning: "霓虹绿", sentence: "The neon green sign glows.", translation: "这个霓虹绿标志发光。", homophoneSentence: "泽尼昂格林萨因格洛兹." },
        { word: "Electric blue", phonetic: "/ɪˈlektrɪk bluː/", homophone: "伊莱克特里克布鲁", meaning: "电光蓝", sentence: "The electric blue is shocking.", translation: "这种电光蓝很震撼。", homophoneSentence: "泽伊莱克特里克布鲁is绍克英." },
        { word: "Hot pink", phonetic: "/hɒt pɪŋk/", homophone: "豪特平克", meaning: "热粉色", sentence: "The hot pink dress is bold.", translation: "这件热粉色连衣裙很大胆。", homophoneSentence: "泽豪特平克德雷斯is博尔德." },
        { word: "Fluorescent yellow", phonetic: "/ˌflɔːˈresnt ˈjeləʊ/", homophone: "弗洛雷斯恩特耶洛", meaning: "荧光黄", sentence: "The fluorescent yellow vest is safe.", translation: "这件荧光黄背心很安全。", homophoneSentence: "泽弗洛雷斯恩特耶洛维斯特is塞夫." },
        { word: "Day glo", phonetic: "/ˈdeɪ ɡləʊ/", homophone: "戴格洛", meaning: "荧光色", sentence: "The day glo colors are bright.", translation: "这些荧光色很亮。", homophoneSentence: "泽戴格洛卡乐斯啊布瑞特." },
        { word: "Metallic gold", phonetic: "/məˈtælɪk ɡəʊld/", homophone: "马塔里克勾德", meaning: "金属金", sentence: "The metallic gold paint shines.", translation: "这种金属金油漆闪闪发光。", homophoneSentence: "泽马塔里克勾德佩因特晒恩兹." },
        { word: "Metallic silver", phonetic: "/məˈtælɪk ˈsɪlvə/", homophone: "马塔里克西尔弗", meaning: "金属银", sentence: "The metallic silver car is sleek.", translation: "这辆金属银汽车很时尚。", homophoneSentence: "泽马塔里克西尔弗卡is斯利克." },
        { word: "Rose gold", phonetic: "/rəʊz ɡəʊld/", homophone: "柔兹勾德", meaning: "玫瑰金", sentence: "The rose gold watch is trendy.", translation: "这块玫瑰金手表很时髦。", homophoneSentence: "泽柔兹勾德沃奇is特伦迪." },
        { word: "Champagne", phonetic: "/ʃæmˈpeɪn/", homophone: "尚佩恩", meaning: "香槟色", sentence: "The champagne dress is elegant.", translation: "这件香槟色连衣裙很优雅。", homophoneSentence: "泽尚佩恩德雷斯is艾利根特." },
        { word: "Blush", phonetic: "/blʌʃ/", homophone: "布拉什", meaning: "腮红粉", sentence: "The blush pink is soft.", translation: "这种腮红粉很柔和。", homophoneSentence: "泽布拉什平克is索夫特." },
        { word: "Ballet slipper", phonetic: "/ˈbæleɪ ˈslɪpə/", homophone: "芭蕾斯利珀", meaning: "芭蕾舞鞋粉", sentence: "The ballet slipper pink is sweet.", translation: "这种芭蕾舞鞋粉很甜美。", homophoneSentence: "泽芭蕾斯利珀平克is斯威特." },
        { word: "Millennial pink", phonetic: "/mɪˈleniəl pɪŋk/", homophone: "米伦尼尔平克", meaning: "千禧粉", sentence: "The millennial pink is popular.", translation: "这种千禧粉很流行。", homophoneSentence: "泽米伦尼尔平克is波普尤勒." }
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
    
    // 添加 numbers 单词
    const numbersAdded = addWordsToCategory('numbers', numbersWords);
    console.log(`Numbers 分类添加了 ${numbersAdded} 个新单词`);
    
    // 添加 colors 单词
    const colorsAdded = addWordsToCategory('colors', colorsWords);
    console.log(`Colors 分类添加了 ${colorsAdded} 个新单词`);
    
    // 保存文件
    fs.writeFileSync('word-data.js', data, 'utf8');
    console.log('word-data.js 已更新');
    console.log(`第二批总共添加了 ${numbersAdded + colorsAdded} 个新单词`);
    
} catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
}
