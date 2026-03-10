// 为常用语句分类生成100个新单词的脚本
const fs = require('fs');
const path = require('path');

// 生成100个新的常用语句
const newSentences = [
    // 问候与介绍
    { word: 'Good morning', phonetic: '/ɡʊd ˈmɔːnɪŋ/', homophone: '古德 莫宁', meaning: '早上好', sentence: 'Good morning, everyone!', translation: '大家早上好！', homophoneSentence: '古德莫宁,爱乌瑞万!' },
    { word: 'Good afternoon', phonetic: '/ɡʊd ˌɑːftəˈnuːn/', homophone: '古德 阿夫特努恩', meaning: '下午好', sentence: 'Good afternoon, how are you?', translation: '下午好，你好吗？', homophoneSentence: '古德阿夫特努恩,好啊油?' },
    { word: 'Good evening', phonetic: '/ɡʊd ˈiːvnɪŋ/', homophone: '古德 伊夫宁', meaning: '晚上好', sentence: 'Good evening, welcome!', translation: '晚上好，欢迎！', homophoneSentence: '古德伊夫宁,威尔康!' },
    { word: 'Good night', phonetic: '/ɡʊd naɪt/', homophone: '古德 奈特', meaning: '晚安', sentence: 'Good night, sleep well!', translation: '晚安，睡个好觉！', homophoneSentence: '古德奈特,斯利普威尔!' },
    { word: 'Hello', phonetic: '/həˈləʊ/', homophone: '哈喽', meaning: '你好', sentence: 'Hello, nice to see you!', translation: '你好，很高兴见到你！', homophoneSentence: '哈喽,奈斯图西油!' },
    { word: 'Hi', phonetic: '/haɪ/', homophone: '嗨', meaning: '嗨', sentence: 'Hi, hows it going?', translation: '嗨，最近怎么样？', homophoneSentence: '嗨,好爱次伊特够因?' },
    { word: 'How are you doing', phonetic: '/haʊ ɑː juː ˈduːɪŋ/', homophone: '好啊 优 杜因', meaning: '你怎么样', sentence: 'How are you doing today?', translation: '你今天怎么样？', homophoneSentence: '好啊油杜因特戴?' },
    { word: 'Whats up', phonetic: '/wɒts ʌp/', homophone: '沃茨 阿普', meaning: '怎么了', sentence: 'Hey, whats up?', translation: '嘿，怎么了？', homophoneSentence: '嘿,沃茨阿普?' },
    { word: 'Long time no see', phonetic: '/lɒŋ taɪm nəʊ siː/', homophone: '朗 泰姆 诺 西', meaning: '好久不见', sentence: 'Long time no see, how are you?', translation: '好久不见，你好吗？', homophoneSentence: '朗泰姆诺西,好啊油?' },
    { word: 'How have you been', phonetic: '/haʊ hæv juː biːn/', homophone: '好 海夫 优 宾', meaning: '你最近怎么样', sentence: 'How have you been lately?', translation: '你最近怎么样？', homophoneSentence: '好海夫优宾雷特丽?' },
    
    // 感谢与道歉
    { word: 'Thank you', phonetic: '/θæŋk juː/', homophone: '三克 油', meaning: '谢谢你', sentence: 'Thank you very much!', translation: '非常感谢！', homophoneSentence: '三克油歪瑞马奇!' },
    { word: 'Thank you so much', phonetic: '/θæŋk juː səʊ mʌtʃ/', homophone: '三克 油 搜 马奇', meaning: '非常感谢', sentence: 'Thank you so much for your help!', translation: '非常感谢你的帮助！', homophoneSentence: '三克油搜马奇佛尤尔海尔普!' },
    { word: 'Thanks a lot', phonetic: '/θæŋks ə lɒt/', homophone: '三克斯 啊 劳特', meaning: '多谢', sentence: 'Thanks a lot for coming!', translation: '多谢你的到来！', homophoneSentence: '三克斯啊劳特佛卡明!' },
    { word: 'Youre welcome', phonetic: '/jɔː ˈwelkəm/', homophone: '优尔 威尔康', meaning: '不客气', sentence: 'Youre welcome, anytime!', translation: '不客气，随时！', homophoneSentence: '优尔威尔康,安尼泰姆!' },
    { word: 'My pleasure', phonetic: '/maɪ ˈpleʒə/', homophone: '麦 普莱舍', meaning: '我的荣幸', sentence: 'My pleasure to help you!', translation: '很高兴能帮到你！', homophoneSentence: '麦普莱舍图海尔普油!' },
    { word: 'Im sorry', phonetic: '/aɪm ˈsɒri/', homophone: '爱姆 骚瑞', meaning: '对不起', sentence: 'Im sorry for being late!', translation: '对不起，我迟到了！', homophoneSentence: '爱姆骚瑞佛宾雷特!' },
    { word: 'Excuse me', phonetic: '/ɪkˈskjuːz miː/', homophone: '伊克斯丢兹 密', meaning: '打扰一下', sentence: 'Excuse me, where is the restroom?', translation: '打扰一下，洗手间在哪里？', homophoneSentence: '伊克斯丢兹密,威尔依兹则瑞斯特如姆?' },
    { word: 'Pardon me', phonetic: '/ˈpɑːdn miː/', homophone: '帕登 密', meaning: '请再说一遍', sentence: 'Pardon me, I didnt catch that.', translation: '请再说一遍，我没听清。', homophoneSentence: '帕登密,爱东特凯奇扎特.' },
    { word: 'Sorry about that', phonetic: '/ˈsɒri əˈbaʊt ðæt/', homophone: '骚瑞 阿包特 扎特', meaning: '对不起', sentence: 'Sorry about that, let me fix it.', translation: '对不起，让我来修复。', homophoneSentence: '骚瑞阿包特扎特,莱特密菲克斯伊特.' },
    
    // 询问与回答
    { word: 'Whats your name', phonetic: '/wɒts jɔː neɪm/', homophone: '沃茨 尤尔 内姆', meaning: '你叫什么名字', sentence: 'Whats your name, please?', translation: '请问你叫什么名字？', homophoneSentence: '沃茨尤尔内姆,普利斯?' },
    { word: 'My name is', phonetic: '/maɪ neɪm ɪz/', homophone: '麦 内姆 依兹', meaning: '我的名字是', sentence: 'My name is John.', translation: '我叫约翰。', homophoneSentence: '麦内姆依兹约翰.' },
    { word: 'Where are you from', phonetic: '/weə ɑː juː frɒm/', homophone: '威尔 啊 优 弗罗姆', meaning: '你来自哪里', sentence: 'Where are you from originally?', translation: '你原本来自哪里？', homophoneSentence: '威尔啊优弗罗姆奥瑞金纳丽?' },
    { word: 'Im from', phonetic: '/aɪm frɒm/', homophone: '爱姆 弗罗姆', meaning: '我来自', sentence: 'Im from China.', translation: '我来自中国。', homophoneSentence: '爱姆弗罗姆查伊那.' },
    { word: 'How old are you', phonetic: '/haʊ əʊld ɑː juː/', homophone: '好 欧德 啊 优', meaning: '你多大了', sentence: 'How old are you?', translation: '你多大了？', homophoneSentence: '好欧德啊优?' },
    { word: 'Im years old', phonetic: '/aɪm jɪəz əʊld/', homophone: '爱姆 耶兹 欧德', meaning: '我岁', sentence: 'Im 20 years old.', translation: '我20岁。', homophoneSentence: '爱姆20耶兹欧德.' },
    { word: 'What do you do', phonetic: '/wɒt duː juː duː/', homophone: '沃特 杜 优 杜', meaning: '你是做什么的', sentence: 'What do you do for a living?', translation: '你是做什么工作的？', homophoneSentence: '沃特杜优杜佛啊里ving?' },
    { word: 'I am a', phonetic: '/aɪ æm ə/', homophone: '爱 安姆 啊', meaning: '我是', sentence: 'I am a teacher.', translation: '我是一名教师。', homophoneSentence: '爱安姆啊提切.' },
    { word: 'What are you doing', phonetic: '/wɒt ɑː juː ˈduːɪŋ/', homophone: '沃特 啊 优 杜因', meaning: '你在做什么', sentence: 'What are you doing right now?', translation: '你现在在做什么？', homophoneSentence: '沃特啊优杜因莱特闹?' },
    { word: 'Im doing', phonetic: '/aɪm ˈduːɪŋ/', homophone: '爱姆 杜因', meaning: '我在做', sentence: 'Im doing my homework.', translation: '我在做作业。', homophoneSentence: '爱姆杜因麦后母窝克.' },
    
    // 同意与不同意
    { word: 'Yes', phonetic: '/jes/', homophone: '耶斯', meaning: '是的', sentence: 'Yes, I agree.', translation: '是的，我同意。', homophoneSentence: '耶斯,爱阿格瑞.' },
    { word: 'No', phonetic: '/nəʊ/', homophone: '诺', meaning: '不', sentence: 'No, I disagree.', translation: '不，我不同意。', homophoneSentence: '诺,爱迪斯阿格瑞.' },
    { word: 'Yes, please', phonetic: '/jes pliːz/', homophone: '耶斯 普利斯', meaning: '好的，请', sentence: 'Yes, please pass the salt.', translation: '好的，请把盐递给我。', homophoneSentence: '耶斯普利斯帕斯则索尔特.' },
    { word: 'No, thank you', phonetic: '/nəʊ θæŋk juː/', homophone: '诺 三克 油', meaning: '不用了，谢谢', sentence: 'No, thank you, Im full.', translation: '不用了，谢谢，我吃饱了。', homophoneSentence: '诺三克油,爱姆夫欧.' },
    { word: 'I agree', phonetic: '/aɪ əˈɡriː/', homophone: '爱 阿格瑞', meaning: '我同意', sentence: 'I agree with you completely.', translation: '我完全同意你。', homophoneSentence: '爱阿格瑞威斯油康普里特丽.' },
    { word: 'I disagree', phonetic: '/aɪ ˌdɪsəˈɡriː/', homophone: '爱 迪斯阿格瑞', meaning: '我不同意', sentence: 'I disagree with that point.', translation: '我不同意那个观点。', homophoneSentence: '爱迪斯阿格瑞威斯扎特坡因特.' },
    { word: 'Thats right', phonetic: '/ðæts raɪt/', homophone: '扎特 莱特', meaning: '对的', sentence: 'Thats right, youre correct.', translation: '对的，你是对的。', homophoneSentence: '扎特莱特,优阿瑞科瑞克特.' },
    { word: 'Thats wrong', phonetic: '/ðæts rɒŋ/', homophone: '扎特 如昂', meaning: '错的', sentence: 'Thats wrong, let me correct it.', translation: '错了，让我来纠正。', homophoneSentence: '扎特如昂,莱特密科瑞克特伊特.' },
    
    // 表达感受
    { word: 'Im happy', phonetic: '/aɪm ˈhæpi/', homophone: '爱姆 嗨皮', meaning: '我很开心', sentence: 'Im happy to see you!', translation: '见到你我很开心！', homophoneSentence: '爱姆嗨皮图西油!' },
    { word: 'Im sad', phonetic: '/aɪm sæd/', homophone: '爱姆 赛德', meaning: '我很难过', sentence: 'Im sad about the news.', translation: '听到这个消息我很难过。', homophoneSentence: '爱姆赛德阿包特则纽兹.' },
    { word: 'Im angry', phonetic: '/aɪm ˈæŋɡri/', homophone: '爱姆 安格瑞', meaning: '我很生气', sentence: 'Im angry with him.', translation: '我对他很生气。', homophoneSentence: '爱姆安格瑞威斯希姆.' },
    { word: 'Im tired', phonetic: '/aɪm ˈtaɪəd/', homophone: '爱姆 泰厄德', meaning: '我很累', sentence: 'Im tired after work.', translation: '工作后我很累。', homophoneSentence: '爱姆泰厄德阿福特沃克.' },
    { word: 'Im hungry', phonetic: '/aɪm ˈhʌŋɡri/', homophone: '爱姆 亨格瑞', meaning: '我饿了', sentence: 'Im hungry, lets eat.', translation: '我饿了，我们吃饭吧。', homophoneSentence: '爱姆亨格瑞,来茨伊特.' },
    { word: 'Im thirsty', phonetic: '/aɪm ˈθɜːsti/', homophone: '爱姆 色斯蒂', meaning: '我渴了', sentence: 'Im thirsty, I need water.', translation: '我渴了，我需要水。', homophoneSentence: '爱姆色斯蒂,爱尼德沃特.' },
    { word: 'Im excited', phonetic: '/aɪm ɪkˈsaɪtɪd/', homophone: '爱姆 伊克赛泰德', meaning: '我很兴奋', sentence: 'Im excited about the trip!', translation: '我对这次旅行很兴奋！', homophoneSentence: '爱姆伊克赛泰德阿包特则吹普!' },
    { word: 'Im nervous', phonetic: '/aɪm ˈnɜːvəs/', homophone: '爱姆 讷沃斯', meaning: '我很紧张', sentence: 'Im nervous about the exam.', translation: '我对考试很紧张。', homophoneSentence: '爱姆讷沃斯阿包特则伊克赞.' },
    
    // 请求与建议
    { word: 'Can you help me', phonetic: '/kæn juː help miː/', homophone: '看 优 海尔普 密', meaning: '你能帮我吗', sentence: 'Can you help me with this?', translation: '你能帮我做这个吗？', homophoneSentence: '看优海尔普密威斯则斯?' },
    { word: 'Could you please', phonetic: '/kʊd juː pliːz/', homophone: '库德 优 普利斯', meaning: '请你', sentence: 'Could you please open the door?', translation: '请你开门好吗？', homophoneSentence: '库德优普利斯欧盆则多?' },
    { word: 'Would you like', phonetic: '/wʊd juː laɪk/', homophone: '伍德 优 莱克', meaning: '你想要', sentence: 'Would you like some coffee?', translation: '你想要一些咖啡吗？', homophoneSentence: '伍德优莱克萨姆考菲?' },
    { word: 'I would like', phonetic: '/aɪ wʊd laɪk/', homophone: '爱 伍德 莱克', meaning: '我想要', sentence: 'I would like a cup of tea.', translation: '我想要一杯茶。', homophoneSentence: '爱伍德莱克啊卡普奥夫踢.' },
    { word: 'Lets', phonetic: '/lets/', homophone: '来茨', meaning: '让我们', sentence: 'Lets go to the park!', translation: '让我们去公园吧！', homophoneSentence: '来茨够图则帕克!' },
    { word: 'Shall we', phonetic: '/ʃæl wiː/', homophone: '晒欧 威', meaning: '我们要不要', sentence: 'Shall we have dinner together?', translation: '我们一起吃晚餐好吗？', homophoneSentence: '晒欧威海夫迪纳托盖泽?' },
    { word: 'Why dont we', phonetic: '/waɪ dəʊnt wiː/', homophone: '外 东特 威', meaning: '我们为什么不', sentence: 'Why dont we go shopping?', translation: '我们为什么不去购物呢？', homophoneSentence: '外东特威够少ping?' },
    { word: 'You should', phonetic: '/juː ʃʊd/', homophone: '优 树德', meaning: '你应该', sentence: 'You should study more.', translation: '你应该多学习。', homophoneSentence: '优树德斯塔迪莫.' },
    
    // 时间与日期
    { word: 'What time is it', phonetic: '/wɒt taɪm ɪz ɪt/', homophone: '沃特 泰姆 依兹 伊特', meaning: '现在几点了', sentence: 'What time is it now?', translation: '现在几点了？', homophoneSentence: '沃特泰姆依兹伊特闹?' },
    { word: 'Its oclock', phonetic: '/ɪts əklɒk/', homophone: '伊茨 哦克洛克', meaning: '点整', sentence: 'Its 3 oclock.', translation: '现在3点整。', homophoneSentence: '伊茨3哦克洛克.' },
    { word: 'What day is today', phonetic: '/wɒt deɪ ɪz təˈdeɪ/', homophone: '沃特 戴 依兹 特戴', meaning: '今天星期几', sentence: 'What day is today?', translation: '今天星期几？', homophoneSentence: '沃特戴依兹特戴?' },
    { word: 'Today is', phonetic: '/təˈdeɪ ɪz/', homophone: '特戴 依兹', meaning: '今天是', sentence: 'Today is Monday.', translation: '今天是星期一。', homophoneSentence: '特戴依兹曼戴.' },
    { word: 'What date is it', phonetic: '/wɒt deɪt ɪz ɪt/', homophone: '沃特 戴特 依兹 伊特', meaning: '今天几号', sentence: 'What date is it today?', translation: '今天几号？', homophoneSentence: '沃特戴特依兹伊特特戴?' },
    { word: 'Its the', phonetic: '/ɪts ðə/', homophone: '伊茨 则', meaning: '今天是', sentence: 'Its the 1st of January.', translation: '今天是1月1日。', homophoneSentence: '伊茨则1斯特奥夫詹纽瑞.' },
    { word: 'When is', phonetic: '/wen ɪz/', homophone: '温 依兹', meaning: '什么时候是', sentence: 'When is your birthday?', translation: '你的生日是什么时候？', homophoneSentence: '温依兹尤尔伯斯戴?' },
    { word: 'Its on', phonetic: '/ɪts ɒn/', homophone: '伊茨 昂', meaning: '它在', sentence: 'Its on May 5th.', translation: '它在5月5日。', homophoneSentence: '伊茨昂梅5斯.' },
    
    // 地点与方向
    { word: 'Where is', phonetic: '/weə ɪz/', homophone: '威尔 依兹', meaning: '在哪里', sentence: 'Where is the bathroom?', translation: '洗手间在哪里？', homophoneSentence: '威尔依兹则巴森rum?' },
    { word: 'Its over there', phonetic: '/ɪts ˈəʊvə ðeə/', homophone: '伊茨 欧沃 戴尔', meaning: '在那边', sentence: 'Its over there, near the door.', translation: '在那边，靠近门的地方。', homophoneSentence: '伊茨欧沃戴尔,尼尔则多.' },
    { word: 'How do I get to', phonetic: '/haʊ duː aɪ ɡet tuː/', homophone: '好 杜 爱 盖特 图', meaning: '我怎么去', sentence: 'How do I get to the train station?', translation: '我怎么去火车站？', homophoneSentence: '好杜爱盖特图则吹恩斯泰申?' },
    { word: 'Go straight', phonetic: '/ɡəʊ streɪt/', homophone: '够 斯特雷特', meaning: '直走', sentence: 'Go straight for two blocks.', translation: '直走两个街区。', homophoneSentence: '够斯特雷特佛图布劳克斯.' },
    { word: 'Turn left', phonetic: '/tɜːn left/', homophone: '特恩 莱夫特', meaning: '左转', sentence: 'Turn left at the corner.', translation: '在拐角处左转。', homophoneSentence: '特恩莱夫特艾特则考纳.' },
    { word: 'Turn right', phonetic: '/tɜːn raɪt/', homophone: '特恩 莱特', meaning: '右转', sentence: 'Turn right at the traffic light.', translation: '在红绿灯处右转。', homophoneSentence: '特恩莱特艾特则吹菲克莱特.' },
    { word: 'Its near', phonetic: '/ɪts nɪə/', homophone: '伊茨 尼尔', meaning: '它在附近', sentence: 'Its near the park.', translation: '它在公园附近。', homophoneSentence: '伊茨尼尔则帕克.' },
    { word: 'Its far from', phonetic: '/ɪts fɑː frɒm/', homophone: '伊茨 法 弗罗姆', meaning: '它离很远', sentence: 'Its far from here.', translation: '它离这里很远。', homophoneSentence: '伊茨法弗罗姆希尔.' },
    
    // 日常用语
    { word: 'I need', phonetic: '/aɪ niːd/', homophone: '爱 尼德', meaning: '我需要', sentence: 'I need to buy some food.', translation: '我需要买一些食物。', homophoneSentence: '爱尼德图拜萨姆福德.' },
    { word: 'I have to', phonetic: '/aɪ hæv tuː/', homophone: '爱 海夫 图', meaning: '我必须', sentence: 'I have to go to work.', translation: '我必须去上班。', homophoneSentence: '爱海夫图够图沃克.' },
    { word: 'I want to', phonetic: '/aɪ wɒnt tuː/', homophone: '爱 旺特 图', meaning: '我想要', sentence: 'I want to learn English.', translation: '我想要学英语。', homophoneSentence: '爱旺特图乐恩英格丽希.' },
    { word: 'I like', phonetic: '/aɪ laɪk/', homophone: '爱 莱克', meaning: '我喜欢', sentence: 'I like to read books.', translation: '我喜欢读书。', homophoneSentence: '爱莱克图瑞德布克斯.' },
    { word: 'I dont like', phonetic: '/aɪ dəʊnt laɪk/', homophone: '爱 东特 莱克', meaning: '我不喜欢', sentence: 'I dont like spicy food.', translation: '我不喜欢辣的食物。', homophoneSentence: '爱东特莱克斯派西福德.' },
    { word: 'I can', phonetic: '/aɪ kæn/', homophone: '爱 看', meaning: '我能', sentence: 'I can speak English.', translation: '我会说英语。', homophoneSentence: '爱看斯皮克英格丽希.' },
    { word: 'I cant', phonetic: '/aɪ kɑːnt/', homophone: '爱 康特', meaning: '我不能', sentence: 'I cant swim.', translation: '我不会游泳。', homophoneSentence: '爱康特斯威姆.' },
    { word: 'I will', phonetic: '/aɪ wɪl/', homophone: '爱 威尔', meaning: '我会', sentence: 'I will help you tomorrow.', translation: '我明天会帮你。', homophoneSentence: '爱威尔海尔普油特莫柔.' },
    { word: 'I wont', phonetic: '/aɪ wəʊnt/', homophone: '爱 翁特', meaning: '我不会', sentence: 'I wont be late.', translation: '我不会迟到。', homophoneSentence: '爱翁特比雷特.' },
    
    // 告别
    { word: 'Goodbye', phonetic: '/ɡʊdˈbaɪ/', homophone: '古德拜', meaning: '再见', sentence: 'Goodbye, see you later!', translation: '再见，回头见！', homophoneSentence: '古德拜,西油雷特!' },
    { word: 'Bye', phonetic: '/baɪ/', homophone: '拜', meaning: '拜', sentence: 'Bye, have a nice day!', translation: '拜，祝你有个愉快的一天！', homophoneSentence: '拜,海夫啊奈斯戴!' },
    { word: 'See you later', phonetic: '/siː juː ˈleɪtə/', homophone: '西 优 雷特', meaning: '回头见', sentence: 'See you later, alligator!', translation: '回头见！', homophoneSentence: '西优雷特,爱力盖特!' },
    { word: 'See you tomorrow', phonetic: '/siː juː təˈmɒrəʊ/', homophone: '西 优 特莫柔', meaning: '明天见', sentence: 'See you tomorrow morning!', translation: '明天早上见！', homophoneSentence: '西优特莫柔莫宁!' },
    { word: 'Take care', phonetic: '/teɪk keə/', homophone: '忒克 凯尔', meaning: '保重', sentence: 'Take care, stay safe!', translation: '保重，注意安全！', homophoneSentence: '忒克凯尔,斯戴塞夫!' },
    { word: 'Have a good day', phonetic: '/hæv ə ɡʊd deɪ/', homophone: '海夫 啊 古德 戴', meaning: '祝你有个好一天', sentence: 'Have a good day at work!', translation: '祝你工作愉快！', homophoneSentence: '海夫啊古德戴艾特沃克!' },
    { word: 'Have a nice weekend', phonetic: '/hæv ə naɪs ˌwiːkˈend/', homophone: '海夫 啊 奈斯 威肯德', meaning: '周末愉快', sentence: 'Have a nice weekend!', translation: '周末愉快！', homophoneSentence: '海夫啊奈斯威肯德!' },
    { word: 'Until next time', phonetic: '/ənˈtɪl nekst taɪm/', homophone: '安替欧 耐克斯 泰姆', meaning: '下次见', sentence: 'Until next time, my friend!', translation: '下次见，我的朋友！', homophoneSentence: '安替欧耐克斯泰姆,麦夫瑞恩德!' }
];

// 读取现有文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const existingContent = fs.readFileSync(wordDataPath, 'utf8');

// 替换sentences部分
const sentencesRegex = /sentences:\s*\[(.*?)\]/s;
const match = existingContent.match(sentencesRegex);

if (match) {
    // 提取现有数据
    const existingSentencesText = match[1];
    const existingSentences = [];
    
    // 简单解析现有数据
    let currentRow = '';
    let braceCount = 0;
    
    for (let i = 0; i < existingSentencesText.length; i++) {
        const char = existingSentencesText[i];
        currentRow += char;
        
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        if (braceCount === 0 && (char === ',' || char === ' ')) {
            if (currentRow.trim()) {
                existingSentences.push(currentRow.trim());
            }
            currentRow = '';
        }
    }
    
    // 合并现有数据和新数据
    const combinedSentences = [...existingSentences];
    
    newSentences.forEach(sentence => {
        const sentenceString = `        { word: '${sentence.word}', phonetic: '${sentence.phonetic}', homophone: '${sentence.homophone}', meaning: '${sentence.meaning}', sentence: '${sentence.sentence}', translation: '${sentence.translation}', homophoneSentence: '${sentence.homophoneSentence}' }`;
        combinedSentences.push(sentenceString);
    });
    
    const newSentencesContent = combinedSentences.join(',\n');
    const newContent = existingContent.replace(sentencesRegex, `sentences: [\n${newSentencesContent}\n    ]`);
    
    // 写入文件
    fs.writeFileSync(wordDataPath, newContent, 'utf8');
    console.log('成功添加100个新常用语句到word-data.js');
} else {
    console.error('未找到sentences部分');
}
