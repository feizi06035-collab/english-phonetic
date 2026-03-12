const fs = require('fs');

// 读取 word-data.js 文件
let data = fs.readFileSync('word-data.js', 'utf8');

// 提取所有现有单词用于去重
const existingWords = [...data.matchAll(/word:\s*['"]([^'"]+)['"]/g)].map(match => match[1].toLowerCase());
const allWords = new Set(existingWords);

console.log(`现有单词总数: ${allWords.size} 个`);

// Sentences 分类新单词（100个）
const sentencesWords = [
    { word: "Nevertheless", phonetic: "/ˌnevəðəˈles/", homophone: "内弗泽莱斯", meaning: "尽管如此", sentence: "Nevertheless, we must try.", translation: "尽管如此，我们必须尝试。", homophoneSentence: "内弗泽莱斯威马斯特吹." },
    { word: "Nonetheless", phonetic: "/ˌnʌnðəˈles/", homophone: "农泽莱斯", meaning: "尽管如此", sentence: "It was raining; nonetheless, we went out.", translation: "天在下雨；尽管如此，我们还是出去了。", homophoneSentence: "伊特沃兹瑞宁农泽莱斯威温特奥特." },
    { word: "Notwithstanding", phonetic: "/ˌnɒtwɪθˈstændɪŋ/", homophone: "诺特威斯斯坦丁", meaning: "尽管", sentence: "Notwithstanding the difficulties, we succeeded.", translation: "尽管有困难，我们还是成功了。", homophoneSentence: "诺特威斯斯坦丁泽迪菲库尔提斯威瑟克西迪德." },
    { word: "Whereas", phonetic: "/ˌweərˈæz/", homophone: "威尔阿兹", meaning: "然而", sentence: "He is tall, whereas she is short.", translation: "他很高，然而她很矮。", homophoneSentence: "希is托尔威尔阿兹希is肖特." },
    { word: "Whilst", phonetic: "/waɪlst/", homophone: "歪尔斯特", meaning: "当...时", sentence: "Whilst I was waiting, I read a book.", translation: "当我在等待时，我读了一本书。", homophoneSentence: "歪尔斯特艾沃兹威特英艾瑞德啊布克." },
    { word: "Provided that", phonetic: "/prəˈvaɪdɪd ðæt/", homophone: "普罗歪迪德戴特", meaning: "假如", sentence: "I will go, provided that you come too.", translation: "假如你也来，我就去。", homophoneSentence: "艾威尔勾普罗歪迪德戴特优卡姆图." },
    { word: "Given that", phonetic: "/ˈɡɪvn ðæt/", homophone: "吉文戴特", meaning: "鉴于", sentence: "Given that it's late, we should leave.", translation: "鉴于很晚了，我们应该离开。", homophoneSentence: "吉文戴特伊茨莱特威舒德利夫." },
    { word: "Assuming that", phonetic: "/əˈsjuːmɪŋ ðæt/", homophone: "阿休明戴特", meaning: "假设", sentence: "Assuming that he agrees, we can start.", translation: "假设他同意，我们可以开始。", homophoneSentence: "阿休明戴特希阿格瑞斯威肯斯塔特." },
    { word: "Supposing that", phonetic: "/səˈpəʊzɪŋ ðæt/", homophone: "瑟波津戴特", meaning: "假设", sentence: "Supposing that it rains, what will we do?", translation: "假设下雨，我们会做什么？", homophoneSentence: "瑟波津戴特伊特瑞恩兹沃特威尔威杜?" },
    { word: "Inasmuch as", phonetic: "/ˌɪnəzˈmʌtʃ æz/", homophone: "伊纳兹马奇艾兹", meaning: "因为", sentence: "Inasmuch as you are busy, I will leave.", translation: "因为你很忙，我要走了。", homophoneSentence: "伊纳兹马奇艾兹优啊比兹艾威利夫." },
    { word: "Insofar as", phonetic: "/ˌɪnsəʊˈfɑːr æz/", homophone: "因索法艾兹", meaning: "就...而言", sentence: "Insofar as I know, he is honest.", translation: "就我所知，他是诚实的。", homophoneSentence: "因索法艾兹艾诺希is奥尼斯特." },
    { word: "To the extent that", phonetic: "/tuː ði ɪkˈstent ðæt/", homophone: "图泽伊克斯滕特戴特", meaning: "在...程度上", sentence: "To the extent that he tried, he succeeded.", translation: "在他尝试的程度上，他成功了。", homophoneSentence: "图泽伊克斯滕特戴特希吹德希瑟克西迪德." },
    { word: "Be that as it may", phonetic: "/biː ðæt æz ɪt meɪ/", homophone: "比戴特艾兹伊特梅", meaning: "尽管如此", sentence: "Be that as it may, I still disagree.", translation: "尽管如此，我仍然不同意。", homophoneSentence: "比戴特艾兹伊特梅艾斯蒂尔迪斯阿格瑞." },
    { word: "Come what may", phonetic: "/kʌm wɒt meɪ/", homophone: "卡姆沃特梅", meaning: "不管怎样", sentence: "Come what may, I will finish this project.", translation: "不管怎样，我会完成这个项目。", homophoneSentence: "卡姆沃特梅艾威尔菲尼什迪斯普若杰克特." },
    { word: "Rain or shine", phonetic: "/reɪn ɔː ʃaɪn/", homophone: "瑞恩奥晒恩", meaning: "无论晴雨", sentence: "Rain or shine, the event will happen.", translation: "无论晴雨，活动都会举行。", homophoneSentence: "瑞恩奥晒恩泽伊文特威尔海潘." },
    { word: "Sink or swim", phonetic: "/sɪŋk ɔː swɪm/", homophone: "辛克奥斯威姆", meaning: "成败在此一举", sentence: "It's sink or swim for the new company.", translation: "对新公司来说是成败在此一举。", homophoneSentence: "伊茨辛克奥斯威姆佛泽纽康帕尼." },
    { word: "Make or break", phonetic: "/meɪk ɔː breɪk/", homophone: "梅克奥布雷克", meaning: "成败关键", sentence: "This deal is make or break for us.", translation: "这笔交易是我们的成败关键。", homophoneSentence: "迪斯迪利斯梅克奥布雷克佛阿斯." },
    { word: "Do or die", phonetic: "/duː ɔː daɪ/", homophone: "杜奥戴", meaning: "决一死战", sentence: "It was a do or die situation.", translation: "这是一个决一死战的情况。", homophoneSentence: "伊特沃兹啊杜奥戴西图埃申." },
    { word: "Now or never", phonetic: "/naʊ ɔː ˈnevə/", homophone: "瑙奥内弗", meaning: "机不可失", sentence: "It's now or never - take the chance!", translation: "机不可失 - 抓住这个机会！", homophoneSentence: "伊茨瑙奥内弗泰克泽昌斯!" },
    { word: "All or nothing", phonetic: "/ɔːl ɔː ˈnʌθɪŋ/", homophone: "奥尔奥纳辛", meaning: "孤注一掷", sentence: "He played all or nothing.", translation: "他孤注一掷。", homophoneSentence: "希普莱德奥尔奥纳辛." },
    { word: "Take it or leave it", phonetic: "/teɪk ɪt ɔː liːv ɪt/", homophone: "泰克伊特奥利夫伊特", meaning: "要么接受要么放弃", sentence: "That's my final offer - take it or leave it.", translation: "这是我的最终报价 - 要么接受要么放弃。", homophoneSentence: "戴茨迈法伊诺尔奥弗泰克伊特奥利夫伊特." },
    { word: "Believe it or not", phonetic: "/bɪˈliːv ɪt ɔː nɒt/", homophone: "比利夫伊特奥诺特", meaning: "信不信由你", sentence: "Believe it or not, I won the lottery.", translation: "信不信由你，我中了彩票。", homophoneSentence: "比利夫伊特奥诺特艾万泽洛特里." },
    { word: "Like it or not", phonetic: "/laɪk ɪt ɔː nɒt/", homophone: "莱克伊特奥诺特", meaning: "不管你喜不喜欢", sentence: "Like it or not, we have to finish.", translation: "不管你喜不喜欢，我们必须完成。", homophoneSentence: "莱克伊特奥诺特威海夫图菲尼什." },
    { word: "Willingly or unwillingly", phonetic: "/ˈwɪlɪŋli ɔːr ʌnˈwɪlɪŋli/", homophone: "威林利奥昂威林利", meaning: "愿意或不愿意", sentence: "Willingly or unwillingly, he had to agree.", translation: "愿意或不愿意，他不得不同意。", homophoneSentence: "威林利奥昂威林利希海德图阿格瑞." },
    { word: "Sooner or later", phonetic: "/ˈsuːnə ɔː ˈleɪtə/", homophone: "苏纳奥莱特", meaning: "迟早", sentence: "Sooner or later, the truth will come out.", translation: "迟早，真相会大白。", homophoneSentence: "苏纳奥莱特泽特鲁斯威尔卡姆奥特." },
    { word: "More or less", phonetic: "/mɔːr ɔː les/", homophone: "莫尔奥莱斯", meaning: "或多或少", sentence: "I've more or less finished the work.", translation: "我或多或少完成了工作。", homophoneSentence: "艾夫莫尔奥莱斯菲尼什德泽沃克." },
    { word: "Sooner rather than later", phonetic: "/ˈsuːnə ˈrɑːðə ðæn ˈleɪtə/", homophone: "苏纳拉泽戴恩莱特", meaning: "越早越好", sentence: "We should do this sooner rather than later.", translation: "我们应该越早做这件事越好。", homophoneSentence: "威舒德杜迪斯苏纳拉泽戴恩莱特." },
    { word: "Better late than never", phonetic: "/ˈbetə leɪt ðæn ˈnevə/", homophone: "贝特莱特戴恩内弗", meaning: "迟做总比不做好", sentence: "He finally apologized - better late than never.", translation: "他终于道歉了 - 迟做总比不做好。", homophoneSentence: "希法伊纳利阿波勒吉兹德贝特莱特戴恩内弗." },
    { word: "Better safe than sorry", phonetic: "/ˈbetə seɪf ðæn ˈsɒri/", homophone: "贝特塞夫戴恩索瑞", meaning: "小心驶得万年船", sentence: "Take an umbrella - better safe than sorry.", translation: "带把伞 - 小心驶得万年船。", homophoneSentence: "泰克安昂布雷拉贝特塞夫戴恩索瑞." },
    { word: "Prevention is better than cure", phonetic: "/prɪˈvenʃn ɪz ˈbetə ðæn kjʊə/", homophone: "普瑞文申is贝特戴恩丘尔", meaning: "预防胜于治疗", sentence: "Remember: prevention is better than cure.", translation: "记住：预防胜于治疗。", homophoneSentence: "瑞门伯普瑞文申is贝特戴恩丘尔." },
    { word: "Actions speak louder than words", phonetic: "/ˈækʃnz spiːk ˈlaʊdə ðæn wɜːdz/", homophone: "阿克申斯斯比克劳德戴恩沃德兹", meaning: "行动胜于言语", sentence: "Actions speak louder than words.", translation: "行动胜于言语。", homophoneSentence: "阿克申斯斯比克劳德戴恩沃德兹." },
    { word: "A friend in need is a friend indeed", phonetic: "/ə frend ɪn niːd ɪz ə frend ɪnˈdiːd/", homophone: "啊弗伦德因尼迪斯啊弗伦德因迪德", meaning: "患难见真情", sentence: "A friend in need is a friend indeed.", translation: "患难见真情。", homophoneSentence: "啊弗伦德因尼迪斯啊弗伦德因迪德." },
    { word: "All that glitters is not gold", phonetic: "/ɔːl ðæt ˈɡlɪtəz ɪz nɒt ɡəʊld/", homophone: "奥尔戴特格利特斯is诺特勾德", meaning: "闪光的未必都是金子", sentence: "All that glitters is not gold.", translation: "闪光的未必都是金子。", homophoneSentence: "奥尔戴特格利特斯is诺特勾德." },
    { word: "Don't count your chickens before they hatch", phonetic: "/dəʊnt kaʊnt jɔː ˈtʃɪkɪnz bɪˈfɔː ðeɪ hætʃ/", homophone: "东特康特约奇肯斯比佛德伊哈奇", meaning: "不要过早乐观", sentence: "Don't count your chickens before they hatch.", translation: "不要过早乐观。", homophoneSentence: "东特康特约奇肯斯比佛德伊哈奇." },
    { word: "Every cloud has a silver lining", phonetic: "/ˈevri klaʊd hæz ə ˈsɪlvə ˈlaɪnɪŋ/", homophone: "艾弗里克劳德海兹啊西尔弗莱宁", meaning: "黑暗中总有一线光明", sentence: "Every cloud has a silver lining.", translation: "黑暗中总有一线光明。", homophoneSentence: "艾弗里克劳德海兹啊西尔弗莱宁." },
    { word: "Honesty is the best policy", phonetic: "/ˈɒnɪsti ɪz ðə best ˈpɒləsi/", homophone: "奥尼斯蒂is泽贝斯特波利西", meaning: "诚实是最好的策略", sentence: "Honesty is the best policy.", translation: "诚实是最好的策略。", homophoneSentence: "奥尼斯蒂is泽贝斯特波利西." },
    { word: "Practice makes perfect", phonetic: "/ˈpræktɪs meɪks ˈpɜːfɪkt/", homophone: "普拉克提斯梅克斯珀费克特", meaning: "熟能生巧", sentence: "Practice makes perfect.", translation: "熟能生巧。", homophoneSentence: "普拉克提斯梅克斯珀费克特." },
    { word: "The early bird catches the worm", phonetic: "/ði ˈɜːli bɜːd ˈkætʃɪz ðə wɜːm/", homophone: "泽厄利伯德凯奇泽沃姆", meaning: "早起的鸟儿有虫吃", sentence: "The early bird catches the worm.", translation: "早起的鸟儿有虫吃。", homophoneSentence: "泽厄利伯德凯奇泽沃姆." },
    { word: "When in Rome, do as the Romans do", phonetic: "/wen ɪn rəʊm duː æz ðə ˈrəʊmənz duː/", homophone: "温因柔姆杜艾兹泽柔门兹杜", meaning: "入乡随俗", sentence: "When in Rome, do as the Romans do.", translation: "入乡随俗。", homophoneSentence: "温因柔姆杜艾兹泽柔门兹杜." },
    { word: "Where there's a will, there's a way", phonetic: "/weər ðeəz ə wɪl ðeəz ə weɪ/", homophone: "威尔德尔兹啊威尔德尔兹啊威", meaning: "有志者事竟成", sentence: "Where there's a will, there's a way.", translation: "有志者事竟成。", homophoneSentence: "威尔德尔兹啊威尔德尔兹啊威." },
    { word: "You can't have your cake and eat it", phonetic: "/juː kɑːnt hæv jɔː keɪk ænd iːt ɪt/", homophone: "优康特哈夫约凯克安迪特伊特", meaning: "鱼与熊掌不可兼得", sentence: "You can't have your cake and eat it.", translation: "鱼与熊掌不可兼得。", homophoneSentence: "优康特哈夫约凯克安迪特伊特." },
    { word: "A penny for your thoughts", phonetic: "/ə ˈpeni fɔː jɔː θɔːts/", homophone: "啊佩尼佛约索茨", meaning: "你在想什么", sentence: "A penny for your thoughts?", translation: "你在想什么？", homophoneSentence: "啊佩尼佛约索茨?" },
    { word: "Bite the bullet", phonetic: "/baɪt ðə ˈbʊlɪt/", homophone: "拜特泽布利特", meaning: "咬紧牙关", sentence: "I had to bite the bullet and tell her.", translation: "我不得不咬紧牙关告诉她。", homophoneSentence: "艾海德图拜特泽布利特安得泰尔赫尔." },
    { word: "Break a leg", phonetic: "/breɪk ə leɡ/", homophone: "布雷克啊莱格", meaning: "祝好运", sentence: "Break a leg at your performance tonight!", translation: "祝你今晚演出好运！", homophoneSentence: "布雷克啊莱格艾特约珀佛门斯图奈特!" },
    { word: "Call it a day", phonetic: "/kɔːl ɪt ə deɪ/", homophone: "科尔伊特啊戴", meaning: "收工", sentence: "Let's call it a day and go home.", translation: "我们收工回家吧。", homophoneSentence: "莱茨科尔伊特啊戴安得勾侯姆." },
    { word: "Cut corners", phonetic: "/kʌt ˈkɔːnəz/", homophone: "卡特科纳兹", meaning: "偷工减料", sentence: "Don't cut corners on this project.", translation: "不要在这个项目上偷工减料。", homophoneSentence: "东特卡特科纳兹昂迪斯普若杰克特." },
    { word: "Cutting edge", phonetic: "/ˈkʌtɪŋ edʒ/", homophone: "卡廷艾吉", meaning: "尖端", sentence: "This technology is cutting edge.", translation: "这项技术是尖端的。", homophoneSentence: "迪斯特克诺洛吉is卡廷艾吉." },
    { word: "Easy does it", phonetic: "/ˈiːzi dʌz ɪt/", homophone: "伊西达兹伊特", meaning: "慢慢来", sentence: "Easy does it - don't rush.", translation: "慢慢来 - 不要着急。", homophoneSentence: "伊西达兹伊特东特拉什." },
    { word: "Get out of hand", phonetic: "/ɡet aʊt əv hænd/", homophone: "盖特奥特奥夫汉德", meaning: "失控", sentence: "The situation got out of hand.", translation: "情况失控了。", homophoneSentence: "泽西图埃申盖特奥特奥夫汉德." },
    { word: "Get something out of your system", phonetic: "/ɡet ˈsʌmθɪŋ aʊt əv jɔː ˈsɪstəm/", homophone: "盖特萨姆辛奥特奥夫约西斯特姆", meaning: "发泄", sentence: "Go ahead and get it out of your system.", translation: "去吧，发泄出来。", homophoneSentence: "勾阿赫德安得盖特伊特奥特奥夫约西斯特姆." },
    { word: "Give someone the benefit of the doubt", phonetic: "/ɡɪv ˈsʌmwʌn ðə ˈbenɪfɪt əv ðə daʊt/", homophone: "吉夫萨姆万泽贝尼菲特奥夫泽道特", meaning: "姑且相信", sentence: "I'll give him the benefit of the doubt.", translation: "我姑且相信他。", homophoneSentence: "艾尔吉夫伊姆泽贝尼菲特奥夫泽道特." },
    { word: "Go back to the drawing board", phonetic: "/ɡəʊ bæk tuː ðə ˈdrɔːɪŋ bɔːd/", homophone: "勾拜克图泽德若英博德", meaning: "从头再来", sentence: "We need to go back to the drawing board.", translation: "我们需要从头再来。", homophoneSentence: "威尼德图勾拜克图泽德若英博德." },
    { word: "Hang in there", phonetic: "/hæŋ ɪn ðeər/", homophone: "汉因德尔", meaning: "坚持下去", sentence: "Hang in there - things will get better.", translation: "坚持下去 - 事情会好起来的。", homophoneSentence: "汉因德尔辛斯威尔盖特贝特." },
    { word: "Hit the sack", phonetic: "/hɪt ðə sæk/", homophone: "希特泽萨克", meaning: "睡觉", sentence: "I'm tired - I'm going to hit the sack.", translation: "我累了 - 我要去睡觉了。", homophoneSentence: "艾姆泰尔德艾姆勾英图希特泽萨克." },
    { word: "It's not rocket science", phonetic: "/ɪts nɒt ˈrɒkɪt ˈsaɪəns/", homophone: "伊茨诺特罗基特赛恩斯", meaning: "不是难事", sentence: "Come on, it's not rocket science!", translation: "来吧，这不是什么难事！", homophoneSentence: "卡姆昂伊茨诺特罗基特赛恩斯!" },
    { word: "Let someone off the hook", phonetic: "/let ˈsʌmwʌn ɒf ðə hʊk/", homophone: "莱特萨姆万奥夫泽胡克", meaning: "放某人一马", sentence: "I'll let you off the hook this time.", translation: "这次我放你一马。", homophoneSentence: "艾尔莱特优奥夫泽胡克迪斯泰姆." },
    { word: "Make a long story short", phonetic: "/meɪk ə lɒŋ ˈstɔːri ʃɔːt/", homophone: "梅克啊朗斯托瑞肖特", meaning: "长话短说", sentence: "To make a long story short, we won.", translation: "长话短说，我们赢了。", homophoneSentence: "图梅克啊朗斯托瑞肖特威万." },
    { word: "Miss the boat", phonetic: "/mɪs ðə bəʊt/", homophone: "密斯泽波特", meaning: "错失良机", sentence: "Don't miss the boat - apply now!", translation: "不要错失良机 - 现在就申请！", homophoneSentence: "东特密斯泽波特阿普莱瑙!" },
    { word: "No pain, no gain", phonetic: "/nəʊ peɪn nəʊ ɡeɪn/", homophone: "诺佩恩诺盖恩", meaning: "不劳无获", sentence: "No pain, no gain - you have to work hard.", translation: "不劳无获 - 你必须努力工作。", homophoneSentence: "诺佩恩诺盖恩优海夫图沃克哈德." },
    { word: "On the ball", phonetic: "/ɒn ðə bɔːl/", homophone: "昂泽波尔", meaning: "机警", sentence: "He's really on the ball at work.", translation: "他在工作中真的很机警。", homophoneSentence: "希兹瑞利昂泽波尔艾特沃克." },
    { word: "Pull someone's leg", phonetic: "/pʊl ˈsʌmwʌnz leɡ/", homophone: "普尔萨姆万兹莱格", meaning: "开玩笑", sentence: "Are you pulling my leg?", translation: "你在开玩笑吗？", homophoneSentence: "啊优普尔英迈莱格?" },
    { word: "Pull yourself together", phonetic: "/pʊl jɔːˈself təˈɡeðə/", homophone: "普尔约塞尔夫图盖德尔", meaning: "振作起来", sentence: "Pull yourself together - you can do this!", translation: "振作起来 - 你能做到的！", homophoneSentence: "普尔约塞尔夫图盖德尔优肯杜迪斯!" },
    { word: "So far so good", phonetic: "/səʊ fɑː səʊ ɡʊd/", homophone: "索法索古德", meaning: "到目前为止一切顺利", sentence: "So far so good - no problems yet.", translation: "到目前为止一切顺利 - 还没有问题。", homophoneSentence: "索法索古德诺普罗布勒姆兹耶特." },
    { word: "Speak of the devil", phonetic: "/spiːk əv ðə ˈdevl/", homophone: "斯比克奥夫泽戴弗欧", meaning: "说曹操曹操到", sentence: "Speak of the devil, we were just talking about you!", translation: "说曹操曹操到，我们正说起你呢！", homophoneSentence: "斯比克奥夫泽戴弗欧威沃朱斯特托克英啊鲍特优!" },
    { word: "That's the last straw", phonetic: "/ðæts ðə lɑːst strɔː/", homophone: "戴茨泽拉斯特斯特若", meaning: "忍无可忍", sentence: "That's the last straw - I'm leaving!", translation: "忍无可忍 - 我要走了！", homophoneSentence: "戴茨泽拉斯特斯特若艾姆利夫英!" },
    { word: "The best of both worlds", phonetic: "/ðə best əv bəʊθ wɜːldz/", homophone: "泽贝斯特奥夫博斯沃尔兹", meaning: "两全其美", sentence: "This job offers the best of both worlds.", translation: "这份工作两全其美。", homophoneSentence: "迪斯卓布奥弗斯泽贝斯特奥夫博斯沃尔兹." },
    { word: "Time flies when you're having fun", phonetic: "/taɪm flaɪz wen jʊə ˈhævɪŋ fʌn/", homophone: "泰姆弗莱兹温优哈文范", meaning: "欢乐时光飞逝", sentence: "Time flies when you're having fun.", translation: "欢乐时光飞逝。", homophoneSentence: "泰姆弗莱兹温优哈文范." },
    { word: "To get bent out of shape", phonetic: "/tuː ɡet bent aʊt əv ʃeɪp/", homophone: "图盖特本特奥特奥夫谢普", meaning: "生气", sentence: "Don't get bent out of shape over it.", translation: "不要为此生气。", homophoneSentence: "东特盖特本特奥特奥夫谢普欧弗伊特." },
    { word: "To make matters worse", phonetic: "/tuː meɪk ˈmætəz wɜːs/", homophone: "图梅克马特尔兹沃斯", meaning: "雪上加霜", sentence: "To make matters worse, it started raining.", translation: "雪上加霜的是，开始下雨了。", homophoneSentence: "图梅克马特尔兹沃斯伊特斯塔尔提德瑞宁." },
    { word: "Under the weather", phonetic: "/ˈʌndə ðə ˈweðə/", homophone: "昂德泽韦德尔", meaning: "身体不适", sentence: "I'm feeling under the weather today.", translation: "我今天感觉身体不适。", homophoneSentence: "艾姆菲林昂德泽韦德尔特得." },
    { word: "We'll cross that bridge when we come to it", phonetic: "/wiːl krɒs ðæt brɪdʒ wen wiː kʌm tuː ɪt/", homophone: "威尔克罗斯戴特布里吉温威卡姆图伊特", meaning: "船到桥头自然直", sentence: "We'll cross that bridge when we come to it.", translation: "船到桥头自然直。", homophoneSentence: "威尔克罗斯戴特布里吉温威卡姆图伊特." },
    { word: "Wrap your head around something", phonetic: "/ræp jɔː hed əˈraʊnd ˈsʌmθɪŋ/", homophone: "拉普约海德阿朗德萨姆辛", meaning: "理解", sentence: "I can't wrap my head around this concept.", translation: "我无法理解这个概念。", homophoneSentence: "艾康特拉普迈海德阿朗德迪斯康塞普特." },
    { word: "You can say that again", phonetic: "/juː kæn seɪ ðæt əˈɡen/", homophone: "优康赛戴特阿盖恩", meaning: "说得好", sentence: "You can say that again - I totally agree!", translation: "说得好 - 我完全同意！", homophoneSentence: "优康赛戴特阿盖恩艾托塔利阿格瑞!" },
    { word: "Your guess is as good as mine", phonetic: "/jɔː ɡes ɪz æz ɡʊd æz maɪn/", homophone: "约盖斯is艾兹古德艾兹迈恩", meaning: "我也不清楚", sentence: "Your guess is as good as mine.", translation: "我也不清楚。", homophoneSentence: "约盖斯is艾兹古德艾兹迈恩." }
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

// 添加 sentences 单词
const sentencesAdded = addWordsToCategory('sentences', sentencesWords);
console.log(`Sentences 分类添加了 ${sentencesAdded} 个新单词`);

// 保存文件
fs.writeFileSync('word-data.js', data, 'utf8');
console.log('word-data.js 已更新');
console.log(`第五批总共添加了 ${sentencesAdded} 个新单词`);
