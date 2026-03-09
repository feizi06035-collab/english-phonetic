// 修复日常问候单词数据的脚本
const fs = require('fs');
const path = require('path');

// 正确的基础单词数据
const baseWords = [
    { word: 'Morning', phonetic: '/ˈmɔːnɪŋ/', homophone: '莫宁', meaning: '早晨', sentence: 'Good morning!', translation: '早上好！', homophoneSentence: '古德莫宁!' },
    { word: 'Afternoon', phonetic: '/ˌɑːftəˈnuːn/', homophone: '阿夫特努恩', meaning: '下午', sentence: 'Good afternoon!', translation: '下午好！', homophoneSentence: '古德阿夫特努恩!' },
    { word: 'Evening', phonetic: '/ˈiːvnɪŋ/', homophone: '伊夫宁', meaning: '晚上', sentence: 'Good evening!', translation: '晚上好！', homophoneSentence: '古德伊夫宁!' },
    { word: 'Night', phonetic: '/naɪt/', homophone: '奈特', meaning: '夜晚', sentence: 'Good night!', translation: '晚安！', homophoneSentence: '古德奈特!' },
    { word: 'Today', phonetic: '/təˈdeɪ/', homophone: '特戴', meaning: '今天', sentence: 'How are you today?', translation: '你今天好吗？', homophoneSentence: '好啊油特戴?' },
    { word: 'Tomorrow', phonetic: '/təˈmɒrəʊ/', homophone: '特莫柔', meaning: '明天', sentence: 'See you tomorrow!', translation: '明天见！', homophoneSentence: '西优特莫柔!' },
    { word: 'Yesterday', phonetic: '/ˈjestədeɪ/', homophone: '耶斯特戴', meaning: '昨天', sentence: 'I saw you yesterday.', translation: '我昨天看到你了。', homophoneSentence: '爱索油耶斯特戴.' },
    { word: 'Week', phonetic: '/wiːk/', homophone: '威克', meaning: '星期', sentence: 'Have a good week!', translation: '祝你这周愉快！', homophoneSentence: '海夫啊古德威克!' },
    { word: 'Weekend', phonetic: '/ˌwiːkˈend/', homophone: '威肯德', meaning: '周末', sentence: 'Happy weekend!', translation: '周末快乐！', homophoneSentence: '嗨皮威肯德!' },
    { word: 'Monday', phonetic: '/ˈmʌndeɪ/', homophone: '曼戴', meaning: '星期一', sentence: 'See you on Monday!', translation: '星期一见！', homophoneSentence: '西优昂曼戴!' },
    { word: 'Tuesday', phonetic: '/ˈtjuːzdeɪ/', homophone: '丘兹戴', meaning: '星期二', sentence: 'Tuesday meeting.', translation: '星期二开会。', homophoneSentence: '丘兹戴米听.' },
    { word: 'Wednesday', phonetic: '/ˈwenzdeɪ/', homophone: '温兹戴', meaning: '星期三', sentence: 'Happy Wednesday!', translation: '星期三快乐！', homophoneSentence: '嗨皮温兹戴!' },
    { word: 'Thursday', phonetic: '/ˈθɜːzdeɪ/', homophone: '色兹戴', meaning: '星期四', sentence: 'Thursday is busy.', translation: '星期四很忙。', homophoneSentence: '色兹戴is比兹.' },
    { word: 'Friday', phonetic: '/ˈfraɪdeɪ/', homophone: '夫来戴', meaning: '星期五', sentence: 'Happy Friday!', translation: '星期五快乐！', homophoneSentence: '嗨皮夫来戴!' },
    { word: 'Saturday', phonetic: '/ˈsætədeɪ/', homophone: '萨特戴', meaning: '星期六', sentence: 'Saturday is fun!', translation: '星期六很有趣！', homophoneSentence: '萨特戴is范!' },
    { word: 'Sunday', phonetic: '/ˈsʌndeɪ/', homophone: '桑戴', meaning: '星期日', sentence: 'Relax on Sunday.', translation: '星期日放松。', homophoneSentence: '瑞来克斯昂桑戴.' },
    { word: 'January', phonetic: '/ˈdʒænjuəri/', homophone: '詹纽瑞', meaning: '一月', sentence: 'January is cold.', translation: '一月很冷。', homophoneSentence: '詹纽瑞is扣德.' },
    { word: 'February', phonetic: '/ˈfebruəri/', homophone: '夫布鲁瑞', meaning: '二月', sentence: 'February is short.', translation: '二月很短。', homophoneSentence: '夫布鲁瑞is绍特.' },
    { word: 'March', phonetic: '/mɑːtʃ/', homophone: '马奇', meaning: '三月', sentence: 'March is windy.', translation: '三月多风。', homophoneSentence: '马奇is温迪.' },
    { word: 'April', phonetic: '/ˈeɪprəl/', homophone: '艾普柔', meaning: '四月', sentence: 'April showers.', translation: '四月阵雨。', homophoneSentence: '艾普柔绍尔斯.' },
    { word: 'May', phonetic: '/meɪ/', homophone: '梅', meaning: '五月', sentence: 'May is beautiful.', translation: '五月很美。', homophoneSentence: '梅is比欧特夫欧.' },
    { word: 'June', phonetic: '/dʒuːn/', homophone: '均', meaning: '六月', sentence: 'June is warm.', translation: '六月很温暖。', homophoneSentence: '均is沃姆.' },
    { word: 'July', phonetic: '/dʒuˈlaɪ/', homophone: '均来', meaning: '七月', sentence: 'July is hot.', translation: '七月很热。', homophoneSentence: '均来is豪特.' },
    { word: 'August', phonetic: '/ˈɔːɡəst/', homophone: '奥古斯特', meaning: '八月', sentence: 'August vacation.', translation: '八月假期。', homophoneSentence: '奥古斯特沃凯申.' },
    { word: 'September', phonetic: '/sepˈtembə(r)/', homophone: '塞普腾波', meaning: '九月', sentence: 'September school.', translation: '九月开学。', homophoneSentence: '塞普腾波斯古.' },
    { word: 'October', phonetic: '/ɒkˈtəʊbə(r)/', homophone: '奥克托波', meaning: '十月', sentence: 'October leaves.', translation: '十月落叶。', homophoneSentence: '奥克托波利夫兹.' },
    { word: 'November', phonetic: '/nəʊˈvembə(r)/', homophone: '诺文波', meaning: '十一月', sentence: 'November rain.', translation: '十一月雨。', homophoneSentence: '诺文波瑞恩.' },
    { word: 'December', phonetic: '/dɪˈsembə(r)/', homophone: '迪森波', meaning: '十二月', sentence: 'December snow.', translation: '十二月雪。', homophoneSentence: '迪森波斯诺.' },
    { word: 'Spring', phonetic: '/sprɪŋ/', homophone: '斯普林', meaning: '春天', sentence: 'Happy spring!', translation: '春天快乐！', homophoneSentence: '嗨皮斯普林!' },
    { word: 'Summer', phonetic: '/ˈsʌmə(r)/', homophone: '萨默', meaning: '夏天', sentence: 'Enjoy summer!', translation: '享受夏天！', homophoneSentence: '因照伊萨默!' },
    { word: 'Autumn', phonetic: '/ˈɔːtəm/', homophone: '奥腾', meaning: '秋天', sentence: 'Beautiful autumn.', translation: '美丽的秋天。', homophoneSentence: '比欧特夫欧奥腾.' },
    { word: 'Winter', phonetic: '/ˈwɪntə(r)/', homophone: '温特', meaning: '冬天', sentence: 'Cold winter.', translation: '寒冷的冬天。', homophoneSentence: '扣德温特.' },
    { word: 'Sunny', phonetic: '/ˈsʌni/', homophone: '萨尼', meaning: '晴朗的', sentence: "It's sunny today.", translation: '今天晴朗。', homophoneSentence: '伊茨萨尼特戴.' },
    { word: 'Rainy', phonetic: '/ˈreɪni/', homophone: '瑞尼', meaning: '下雨的', sentence: "It's rainy today.", translation: '今天下雨。', homophoneSentence: '伊茨瑞尼特戴.' },
    { word: 'Cloudy', phonetic: '/ˈklaʊdi/', homophone: '克劳迪', meaning: '多云的', sentence: "It's cloudy today.", translation: '今天多云。', homophoneSentence: '伊茨克劳迪特戴.' },
    { word: 'Snowy', phonetic: '/ˈsnəʊi/', homophone: '斯诺伊', meaning: '下雪的', sentence: "It's snowy today.", translation: '今天下雪。', homophoneSentence: '伊茨斯诺伊特戴.' },
    { word: 'Windy', phonetic: '/ˈwɪndi/', homophone: '温迪', meaning: '有风的', sentence: "It's windy today.", translation: '今天有风。', homophoneSentence: '伊茨温迪特戴.' },
    { word: 'Hot', phonetic: '/hɒt/', homophone: '豪特', meaning: '热的', sentence: "It's so hot!", translation: '太热了！', homophoneSentence: '伊茨搜豪特!' },
    { word: 'Cold', phonetic: '/kəʊld/', homophone: '扣德', meaning: '冷的', sentence: "It's so cold!", translation: '太冷了！', homophoneSentence: '伊茨搜扣德!' },
    { word: 'Warm', phonetic: '/wɔːm/', homophone: '沃姆', meaning: '温暖的', sentence: "It's warm today.", translation: '今天很温暖。', homophoneSentence: '伊茨沃姆特戴.' },
    { word: 'Cool', phonetic: '/kuːl/', homophone: '库尔', meaning: '凉爽的', sentence: "It's cool today.", translation: '今天很凉爽。', homophoneSentence: '伊茨库尔特戴.' },
    { word: 'Birthday', phonetic: '/ˈbɜːθdeɪ/', homophone: '波斯戴', meaning: '生日', sentence: 'Happy birthday!', translation: '生日快乐！', homophoneSentence: '嗨皮波斯戴!' },
    { word: 'Holiday', phonetic: '/ˈhɒlədeɪ/', homophone: '豪利戴', meaning: '假期', sentence: 'Happy holiday!', translation: '假期快乐！', homophoneSentence: '嗨皮豪利戴!' },
    { word: 'Vacation', phonetic: '/vəˈkeɪʃn/', homophone: '沃凯申', meaning: '假期', sentence: 'Enjoy your vacation!', translation: '享受你的假期！', homophoneSentence: '因照伊油儿沃凯申!' },
    { word: 'Welcome', phonetic: '/ˈwelkəm/', homophone: '威尔康', meaning: '欢迎', sentence: 'Welcome home!', translation: '欢迎回家！', homophoneSentence: '威尔康厚姆!' },
    { word: 'Farewell', phonetic: '/ˌfeəˈwel/', homophone: '夫尔威尔', meaning: '告别', sentence: 'Farewell, my friend!', translation: '再见，我的朋友！', homophoneSentence: '夫尔威尔麦夫瑞恩德!' },
    { word: 'Greetings', phonetic: '/ɡrɪˈtiːŋz/', homophone: '格瑞听兹', meaning: '问候', sentence: "Season's greetings!", translation: '节日问候！', homophoneSentence: '西曾兹格瑞听兹!' },
    { word: 'Hey', phonetic: '/heɪ/', homophone: '嘿', meaning: '嘿', sentence: 'Hey, how are you?', translation: '嘿，你好吗？', homophoneSentence: '嘿好啊油?' },
    { word: 'Yo', phonetic: '/jəʊ/', homophone: '哟', meaning: '哟', sentence: "Yo! What's up?", translation: '哟！怎么了？', homophoneSentence: '哟沃特阿普?' },
    { word: 'Howdy', phonetic: '/ˈhaʊdi/', homophone: '豪迪', meaning: '你好', sentence: 'Howdy partner!', translation: '你好伙伴！', homophoneSentence: '豪迪帕特纳!' },
    { word: 'Cheers', phonetic: '/tʃɪəz/', homophone: '切尔斯', meaning: '干杯', sentence: 'Cheers to us!', translation: '为我们干杯！', homophoneSentence: '切尔斯土阿斯!' },
    { word: 'Take care', phonetic: '/teɪk keə/', homophone: '忒克凯尔', meaning: '保重', sentence: 'Take care!', translation: '保重！', homophoneSentence: '忒克凯尔!' },
    { word: 'Congratulations', phonetic: '/kənˌɡrætʃuˈleɪʃnz/', homophone: '康格雷丘雷申兹', meaning: '恭喜', sentence: 'Congratulations on your success!', translation: '恭喜你的成功！', homophoneSentence: '康格雷丘雷申兹昂油儿色克塞斯!' },
    { word: 'Best wishes', phonetic: '/best ˈwɪʃɪz/', homophone: '百斯特维希兹', meaning: '最美好的祝愿', sentence: 'Best wishes for you!', translation: '给你最美好的祝愿！', homophoneSentence: '百斯特维希兹for油!' },
    { word: 'Get well', phonetic: '/ɡet wel/', homophone: '盖特威尔', meaning: '早日康复', sentence: 'Get well soon!', translation: '早日康复！', homophoneSentence: '盖特威尔苏恩!' },
    { word: 'Bless you', phonetic: '/bles juː/', homophone: '布莱斯优', meaning: '保佑你', sentence: 'Bless you!', translation: '保佑你！', homophoneSentence: '布莱斯优!' },
    { word: 'Have fun', phonetic: '/hæv fʌn/', homophone: '海夫范', meaning: '玩得开心', sentence: 'Have fun!', translation: '玩得开心！', homophoneSentence: '海夫范!' },
    { word: 'Enjoy', phonetic: '/ɪnˈdʒɔɪ/', homophone: '因照伊', meaning: '享受', sentence: 'Enjoy your meal!', translation: '享受你的餐食！', homophoneSentence: '因照伊油儿米尔!' },
    { word: 'Safe trip', phonetic: '/seɪf trɪp/', homophone: '塞夫纯普', meaning: '一路平安', sentence: 'Have a safe trip!', translation: '一路平安！', homophoneSentence: '海夫啊塞夫纯普!' },
    { word: 'Success', phonetic: '/səkˈses/', homophone: '色克塞斯', meaning: '成功', sentence: 'Wish you success!', translation: '祝你成功！', homophoneSentence: '维什油色克塞斯!' },
    { word: 'Happiness', phonetic: '/ˈhæpinəs/', homophone: '嗨皮内斯', meaning: '幸福', sentence: 'Wish you happiness!', translation: '祝你幸福！', homophoneSentence: '维什油嗨皮内斯!' },
    { word: 'Health', phonetic: '/helθ/', homophone: '海尔斯', meaning: '健康', sentence: 'Wish you good health!', translation: '祝你健康！', homophoneSentence: '维什油古德海尔斯!' },
    { word: 'Wealth', phonetic: '/welθ/', homophone: '威尔斯', meaning: '财富', sentence: 'Wish you wealth!', translation: '祝你发财！', homophoneSentence: '维什油威尔斯!' },
    { word: 'Peace', phonetic: '/piːs/', homophone: '皮斯', meaning: '和平', sentence: 'Wish you peace!', translation: '祝你平安！', homophoneSentence: '维什油皮斯!' },
    { word: 'Joy', phonetic: '/dʒɔɪ/', homophone: '卓伊', meaning: '欢乐', sentence: 'Wish you joy!', translation: '祝你欢乐！', homophoneSentence: '维什油卓伊!' },
    { word: 'Absolutely', phonetic: '/ˈæbsəluːtli/', homophone: '艾布索鲁特里', meaning: '绝对', sentence: 'Absolutely! I agree!', translation: '绝对！我同意！', homophoneSentence: '艾布索鲁特里爱阿格瑞!' },
    { word: 'Definitely', phonetic: '/ˈdefɪnətli/', homophone: '戴菲尼特里', meaning: '肯定', sentence: 'Definitely! No doubt!', translation: '肯定！毫无疑问！', homophoneSentence: '戴菲尼特里诺道特!' },
    { word: 'Certainly', phonetic: '/ˈsɜːtnli/', homophone: '色腾利', meaning: '当然', sentence: 'Certainly! My pleasure!', translation: '当然！我的荣幸！', homophoneSentence: '色腾利麦普莱舍!' },
    { word: 'Exactly', phonetic: '/ɪɡˈzæktli/', homophone: '伊格扎克特里', meaning: '正是', sentence: 'Exactly! You are right!', translation: '正是！你说得对！', homophoneSentence: '伊格扎克特里油啊来特!' },
    { word: 'Indeed', phonetic: '/ɪnˈdiːd/', homophone: '因迪德', meaning: '确实', sentence: "Indeed! That's true!", translation: '确实！那是真的！', homophoneSentence: '因迪德戴茨纯!' },
    { word: 'You bet', phonetic: '/juː bet/', homophone: '优百特', meaning: '当然', sentence: 'You bet! Anytime!', translation: '当然！随时！', homophoneSentence: '优百特安尼泰姆!' },
    { word: 'No problem', phonetic: '/nəʊ ˈprɒbləm/', homophone: '诺普罗布勒姆', meaning: '没问题', sentence: 'No problem! Happy to help!', translation: '没问题！乐意帮忙！', homophoneSentence: '诺普罗布勒姆嗨皮to海尔普!' },
    { word: 'My pleasure', phonetic: '/maɪ ˈpleʒə(r)/', homophone: '麦普莱舍', meaning: '我的荣幸', sentence: 'My pleasure! Anytime!', translation: '我的荣幸！随时！', homophoneSentence: '麦普莱舍安尼泰姆!' },
    { word: "You're welcome", phonetic: '/jɔː(r) ˈwelkəm/', homophone: '优儿威尔康', meaning: '不客气', sentence: "You're welcome! Don't mention it!", translation: '不客气！别客气！', homophoneSentence: '优儿威尔康东特门申伊特!' },
    { word: "Don't mention it", phonetic: '/dəʊnt ˈmenʃn ɪt/', homophone: '东特门申伊特', meaning: '别客气', sentence: "Don't mention it! Glad to help!", translation: '别客气！很高兴帮忙！', homophoneSentence: '东特门申伊特格拉德to海尔普!' },
    { word: 'Never mind', phonetic: '/ˈnevə(r) maɪnd/', homophone: '奈夫曼德', meaning: '没关系', sentence: "Never mind! It's okay!", translation: '没关系！没事的！', homophoneSentence: '奈夫曼德伊茨欧凯!' },
    { word: "It's okay", phonetic: '/ɪts əʊˈkeɪ/', homophone: '伊茨欧凯', meaning: '没事', sentence: "It's okay! Don't worry!", translation: '没事！别担心！', homophoneSentence: '伊茨欧凯东特沃瑞!' },
    { word: 'No worries', phonetic: '/nəʊ ˈwʌriz/', homophone: '诺沃瑞兹', meaning: '别担心', sentence: 'No worries! All good!', translation: '别担心！一切都好！', homophoneSentence: '诺沃瑞兹奥古德!' },
    { word: 'All good', phonetic: '/ɔːl ɡʊd/', homophone: '奥古德', meaning: '一切都好', sentence: 'All good! No problem!', translation: '一切都好！没问题！', homophoneSentence: '奥古德诺普罗布勒姆!' },
    { word: 'Sounds good', phonetic: '/saʊndz ɡʊd/', homophone: '桑兹古德', meaning: '听起来不错', sentence: "Sounds good! Let's do it!", translation: '听起来不错！我们开始吧！', homophoneSentence: '桑兹古德来茨度伊特!' },
    { word: "That's great", phonetic: '/ðæts ɡreɪt/', homophone: '戴茨格瑞特', meaning: '太好了', sentence: "That's great! Wonderful!", translation: '太好了！太棒了！', homophoneSentence: '戴茨格瑞特旺德夫欧!' },
    { word: 'Awesome', phonetic: '/ˈɔːsəm/', homophone: '奥瑟姆', meaning: '太棒了', sentence: 'Awesome! Fantastic!', translation: '太棒了！极好的！', homophoneSentence: '奥瑟姆范泰斯提克!' },
    { word: 'Fantastic', phonetic: '/fænˈtæstɪk/', homophone: '范泰斯提克', meaning: '极好的', sentence: 'Fantastic! Well done!', translation: '极好的！做得好！', homophoneSentence: '范泰斯提克威尔丹!' },
    { word: 'Wonderful', phonetic: '/ˈwʌndəfl/', homophone: '旺德夫欧', meaning: '精彩的', sentence: 'Wonderful! Amazing!', translation: '精彩的！令人惊叹的！', homophoneSentence: '旺德夫欧阿梅兹英!' },
    { word: 'Amazing', phonetic: '/əˈmeɪzɪŋ/', homophone: '阿梅兹英', meaning: '惊人的', sentence: 'Amazing! Incredible!', translation: '惊人的！不可思议的！', homophoneSentence: '阿梅兹英因克瑞德波欧!' },
    { word: 'Incredible', phonetic: '/ɪnˈkredəbl/', homophone: '因克瑞德波欧', meaning: '不可思议的', sentence: 'Incredible! Unbelievable!', translation: '不可思议的！难以置信！', homophoneSentence: '因克瑞德波欧昂比利夫波欧!' },
    { word: 'Perfect', phonetic: '/ˈpɜːfɪkt/', homophone: '坡佛费克特', meaning: '完美的', sentence: "Perfect! Couldn't be better!", translation: '完美的！不能再好了！', homophoneSentence: '坡佛费克特库登特比百特!' },
    { word: 'Excellent', phonetic: '/ˈeksələnt/', homophone: '艾克瑟伦特', meaning: '极好的', sentence: 'Excellent! Perfect!', translation: '极好的！完美的！', homophoneSentence: '艾克瑟伦特坡佛费克特!' },
    { word: 'Brilliant', phonetic: '/ˈbrɪliənt/', homophone: '布里连特', meaning: '杰出的', sentence: 'Brilliant! Genius!', translation: '杰出的！天才！', homophoneSentence: '布里连特吉尼尔斯!' },
    { word: 'Superb', phonetic: '/suːˈpɜːb/', homophone: '苏坡布', meaning: '卓越的', sentence: 'Superb! First class!', translation: '卓越的！一流的！', homophoneSentence: '苏坡布佛斯特克拉斯!' },
    { word: 'Marvelous', phonetic: '/ˈmɑːvələs/', homophone: '马夫勒斯', meaning: '极好的', sentence: 'Marvelous! Magnificent!', translation: '极好的！壮丽的！', homophoneSentence: '马夫勒斯马格尼费森特!' },
    { word: 'Terrific', phonetic: '/təˈrɪfɪk/', homophone: '特瑞费克', meaning: '极好的', sentence: 'Terrific! Impressive!', translation: '极好的！令人印象深刻！', homophoneSentence: '特瑞费克因普热斯夫!' },
    { word: 'Fabulous', phonetic: '/ˈfæbjələs/', homophone: '法丘勒斯', meaning: '极好的', sentence: 'Fabulous! Spectacular!', translation: '极好的！壮观的！', homophoneSentence: '法丘勒斯斯佩克泰丘勒!' },
    { word: 'Impressive', phonetic: '/ɪmˈpresɪv/', homophone: '因普热斯夫', meaning: '令人印象深刻的', sentence: 'Impressive! Remarkable!', translation: '令人印象深刻的！非凡的！', homophoneSentence: '因普热斯夫瑞马克波欧!' },
    { word: 'Outstanding', phonetic: '/aʊtˈstændɪŋ/', homophone: '奥特斯丹丁', meaning: '杰出的', sentence: 'Outstanding! Exceptional!', translation: '杰出的！卓越的！', homophoneSentence: '奥特斯丹丁伊克塞普申诺!' },
    { word: 'Magnificent', phonetic: '/mæɡˈnɪfɪsnt/', homophone: '马格尼费森特', meaning: '壮丽的', sentence: 'Magnificent! Grand!', translation: '壮丽的！宏伟的！', homophoneSentence: '马格尼费森特格兰德!' },
    { word: 'Spectacular', phonetic: '/spekˈtækjələ(r)/', homophone: '斯佩克泰丘勒', meaning: '壮观的', sentence: 'Spectacular! Breathtaking!', translation: '壮观的！令人惊叹的！', homophoneSentence: '斯佩克泰丘勒布雷斯泰克英!' },
    { word: 'Stunning', phonetic: '/ˈstʌnɪŋ/', homophone: '斯丹宁', meaning: '令人惊叹的', sentence: 'Stunning! Jaw-dropping!', translation: '令人惊叹的！令人瞠目结舌的！', homophoneSentence: '斯丹宁卓德洛平!' },
    { word: 'Breathtaking', phonetic: '/ˈbreθteɪkɪŋ/', homophone: '布雷斯泰克英', meaning: '令人惊叹的', sentence: 'Breathtaking! Awe-inspiring!', translation: '令人惊叹的！令人敬畏的！', homophoneSentence: '布雷斯泰克英奥因斯派瑞英!' }
];

// 读取现有文件
const wordDataPath = path.join(__dirname, 'word-data.js');
const existingContent = fs.readFileSync(wordDataPath, 'utf8');

// 替换greetings部分
const greetingsRegex = /greetings:\s*\[(.*?)\],/s;
const match = existingContent.match(greetingsRegex);

if (match) {
    const newGreetingsContent = baseWords.map(word => {
        return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
    }).join(',\n');
    
    const newContent = existingContent.replace(greetingsRegex, `greetings: [\n${newGreetingsContent}\n    ],`);
    
    // 写入文件
    fs.writeFileSync(wordDataPath, newContent, 'utf8');
    console.log('成功修复日常问候单词数据，只保留了正确的基础单词');
} else {
    console.error('未找到greetings部分');
}
