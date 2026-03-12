const fs = require('fs');

// 读取 word-data.js 文件
let data = fs.readFileSync('word-data.js', 'utf8');

// 提取所有现有单词用于去重
const existingWords = [...data.matchAll(/word:\s*['"]([^'"]+)['"]/g)].map(match => match[1].toLowerCase());
const allWords = new Set(existingWords);

console.log(`现有单词总数: ${allWords.size} 个`);

// Family 分类新单词（100个）
const familyWords = [
    { word: "Ancestor", phonetic: "/ˈænsestə/", homophone: "安塞斯特", meaning: "祖先", sentence: "My ancestors came from China.", translation: "我的祖先来自中国。", homophoneSentence: "迈安塞斯特斯凯姆夫绕姆拆那." },
    { word: "Descendant", phonetic: "/dɪˈsendənt/", homophone: "迪森登特", meaning: "后代", sentence: "We are descendants of ancient kings.", translation: "我们是古代国王的后代。", homophoneSentence: "威啊迪森登特索夫安申特金兹." },
    { word: "Generation", phonetic: "/ˌdʒenəˈreɪʃn/", homophone: "杰纳瑞申", meaning: "一代人", sentence: "This tradition passes through generations.", translation: "这个传统代代相传。", homophoneSentence: "迪斯垂迪申帕西斯斯鲁杰纳瑞申斯." },
    { word: "Lineage", phonetic: "/ˈlɪniɪdʒ/", homophone: "利尼伊吉", meaning: "血统", sentence: "He traces his lineage back centuries.", translation: "他追溯他的血统到几百年前。", homophoneSentence: "希垂西兹利尼伊吉拜克森彻瑞斯." },
    { word: "Pedigree", phonetic: "/ˈpedɪɡriː/", homophone: "佩迪格里", meaning: "家谱", sentence: "The dog has an impressive pedigree.", translation: "这只狗有令人印象深刻的家谱。", homophoneSentence: "泽道格海兹安因普瑞西夫佩迪格里." },
    { word: "Clan", phonetic: "/klæn/", homophone: "克兰", meaning: "家族", sentence: "Our clan gathers every year.", translation: "我们的家族每年聚会。", homophoneSentence: "奥克兰盖泽斯艾弗里伊尔." },
    { word: "Tribe", phonetic: "/traɪb/", homophone: "吹布", meaning: "部落", sentence: "The tribe lives in the mountains.", translation: "这个部落住在山里。", homophoneSentence: "泽吹布利维斯因泽芒腾斯." },
    { word: "Kinship", phonetic: "/ˈkɪnʃɪp/", homophone: "金希普", meaning: "亲属关系", sentence: "Kinship bonds are important in many cultures.", translation: "亲属关系纽带在许多文化中很重要。", homophoneSentence: "金希普邦兹啊因波腾特因梅尼卡尔彻斯." },
    { word: "Affinity", phonetic: "/əˈfɪnəti/", homophone: "阿菲纳提", meaning: "亲密关系", sentence: "They share a natural affinity.", translation: "他们有着天然的亲密关系。", homophoneSentence: "德伊舍尔啊纳彻若阿菲纳提." },
    { word: "Household", phonetic: "/ˈhaʊshəʊld/", homophone: "豪斯侯德", meaning: "家庭", sentence: "Our household has five members.", translation: "我们家有五口人。", homophoneSentence: "奥豪斯侯德海兹法伊夫门伯斯." },
    { word: "Nuclear family", phonetic: "/ˈnjuːkliə ˈfæməli/", homophone: "纽克利尔法梅里", meaning: "核心家庭", sentence: "A nuclear family consists of parents and children.", translation: "核心家庭由父母和孩子组成。", homophoneSentence: "啊纽克利尔法梅里康西斯茨奥夫佩润茨安得秋准." },
    { word: "Extended family", phonetic: "/ɪkˈstendɪd ˈfæməli/", homophone: "伊克斯滕迪德法梅里", meaning: "大家庭", sentence: "Extended family includes grandparents and cousins.", translation: "大家庭包括祖父母和堂兄弟姐妹。", homophoneSentence: "伊克斯滕迪德法梅里因克卢兹格兰德佩润茨安得卡怎斯." },
    { word: "Blended family", phonetic: "/ˈblendɪd ˈfæməli/", homophone: "布伦迪德法梅里", meaning: "重组家庭", sentence: "A blended family combines two families.", translation: "重组家庭结合了两个家庭。", homophoneSentence: "啊布伦迪德法梅里康拜恩斯图法梅里斯." },
    { word: "Stepfamily", phonetic: "/ˈstepfæməli/", homophone: "斯泰普法梅里", meaning: "继亲家庭", sentence: "Adjusting to a stepfamily takes time.", translation: "适应继亲家庭需要时间。", homophoneSentence: "阿贾斯听图啊斯泰普法梅里泰克斯泰姆." },
    { word: "Foster family", phonetic: "/ˈfɒstə ˈfæməli/", homophone: "福斯特法梅里", meaning: "寄养家庭", sentence: "They became a foster family last year.", translation: "他们去年成为了寄养家庭。", homophoneSentence: "德伊比凯姆啊福斯特法梅里拉斯特伊尔." },
    { word: "Adoptive parents", phonetic: "/əˈdɒptɪv ˈpeərənts/", homophone: "阿多普提夫佩润茨", meaning: "养父母", sentence: "Her adoptive parents love her deeply.", translation: "她的养父母深爱她。", homophoneSentence: "赫尔阿多普提夫佩润茨拉夫赫尔迪普利." },
    { word: "Biological parents", phonetic: "/ˌbaɪəˈlɒdʒɪkl ˈpeərənts/", homophone: "拜奥洛吉克尔佩润茨", meaning: "亲生父母", sentence: "She met her biological parents recently.", translation: "她最近见到了她的亲生父母。", homophoneSentence: "希米特赫尔拜奥洛吉克尔佩润茨瑞森特里." },
    { word: "Birth mother", phonetic: "/bɜːθ ˈmʌðə/", homophone: "伯斯马德", meaning: "生母", sentence: "Her birth mother lives abroad.", translation: "她的生母住在国外。", homophoneSentence: "赫尔伯斯马德利维斯阿布罗德." },
    { word: "Birth father", phonetic: "/bɜːθ ˈfɑːðə/", homophone: "伯斯法德", meaning: "生父", sentence: "He never knew his birth father.", translation: "他从未认识他的生父。", homophoneSentence: "希奈弗纽伊兹海兹伯斯法德." },
    { word: "Surrogate mother", phonetic: "/ˈsʌrəɡət ˈmʌðə/", homophone: "萨罗盖特马德", meaning: "代孕母亲", sentence: "The surrogate mother carried the baby.", translation: "代孕母亲怀了这个宝宝。", homophoneSentence: "泽萨罗盖特马德凯瑞德泽贝比." },
    { word: "Guardian", phonetic: "/ˈɡɑːdiən/", homophone: "加德安", meaning: "监护人", sentence: "Her aunt became her legal guardian.", translation: "她的姑姑成为了她的法定监护人。", homophoneSentence: "赫尔昂特比凯姆赫尔利格尔加德安." },
    { word: "Ward", phonetic: "/wɔːd/", homophone: "沃德", meaning: "被监护人", sentence: "The child became his ward.", translation: "这个孩子成为了他的被监护人。", homophoneSentence: "泽秋尔德比凯姆伊兹沃德." },
    { word: "Custody", phonetic: "/ˈkʌstədi/", homophone: "卡斯特迪", meaning: "监护权", sentence: "They fought for custody of the children.", translation: "他们为孩子的监护权而战。", homophoneSentence: "德伊佛特佛卡斯特迪奥夫泽秋准." },
    { word: "Visitation rights", phonetic: "/ˌvɪzɪˈteɪʃn raɪts/", homophone: "维泽泰申瑞茨", meaning: "探视权", sentence: "He has visitation rights every weekend.", translation: "他每个周末有探视权。", homophoneSentence: "希海兹维泽泰申瑞茨艾弗里维肯德." },
    { word: "Alimony", phonetic: "/ˈælɪməni/", homophone: "阿利莫尼", meaning: "赡养费", sentence: "He pays alimony to his ex-wife.", translation: "他向前妻支付赡养费。", homophoneSentence: "希佩兹阿利莫尼图伊兹艾克斯外夫." },
    { word: "Child support", phonetic: "/tʃaɪld səˈpɔːt/", homophone: "秋尔德瑟波特", meaning: "子女抚养费", sentence: "Child support is paid monthly.", translation: "子女抚养费按月支付。", homophoneSentence: "秋尔德瑟波特is佩德曼斯里." },
    { word: "Paternity", phonetic: "/pəˈtɜːnəti/", homophone: "帕特尼提", meaning: "父权", sentence: "The paternity test confirmed he was the father.", translation: "亲子鉴定证实他是父亲。", homophoneSentence: "泽帕特尼提泰斯特康弗尔姆德希沃兹泽法德." },
    { word: "Maternity", phonetic: "/məˈtɜːnəti/", homophone: "马特尼提", meaning: "母性", sentence: "She embraced her maternity fully.", translation: "她完全拥抱了她的母性。", homophoneSentence: "希伊姆布雷斯特赫尔马特尼提夫利." },
    { word: "Maternity leave", phonetic: "/məˈtɜːnəti liːv/", homophone: "马特尼提利夫", meaning: "产假", sentence: "She took three months of maternity leave.", translation: "她休了三个月的产假。", homophoneSentence: "希图克斯里芒斯奥夫马特尼提利夫." },
    { word: "Paternity leave", phonetic: "/pəˈtɜːnəti liːv/", homophone: "帕特尼提利夫", meaning: "陪产假", sentence: "He requested paternity leave.", translation: "他申请了陪产假。", homophoneSentence: "希瑞奎斯特德帕特尼提利夫." },
    { word: "Parental leave", phonetic: "/pəˈrentl liːv/", homophone: "帕润塔尔利夫", meaning: "育儿假", sentence: "Both parents can take parental leave.", translation: "两位父母都可以休育儿假。", homophoneSentence: "博斯佩润茨肯泰克帕润塔尔利夫." },
    { word: "Family tree", phonetic: "/ˈfæməli triː/", homophone: "法梅里吹", meaning: "家谱树", sentence: "She traced her family tree back ten generations.", translation: "她将家谱树追溯到十代以前。", homophoneSentence: "希垂斯特赫尔法梅里吹拜克腾杰纳瑞申斯." },
    { word: "Genealogy", phonetic: "/ˌdʒiːniˈælədʒi/", homophone: "吉尼艾洛吉", meaning: "家谱学", sentence: "Genealogy is her favorite hobby.", translation: "家谱学是她最喜欢的爱好。", homophoneSentence: "吉尼艾洛吉is赫尔费沃瑞特霍比." },
    { word: "Ancestry", phonetic: "/ˈænsestri/", homophone: "安塞斯特瑞", meaning: "祖先", sentence: "She researched her ancestry online.", translation: "她在网上研究她的祖先。", homophoneSentence: "希瑞瑟奇特赫尔安塞斯特瑞昂莱恩." },
    { word: "Heritage", phonetic: "/ˈherɪtɪdʒ/", homophone: "赫里提吉", meaning: "遗产", sentence: "Our cultural heritage is precious.", translation: "我们的文化遗产很珍贵。", homophoneSentence: "奥卡尔彻赫尔赫里提吉is普瑞舍斯." },
    { word: "Legacy", phonetic: "/ˈleɡəsi/", homophone: "莱格西", meaning: "遗产", sentence: "He left a lasting legacy.", translation: "他留下了持久的遗产。", homophoneSentence: "希莱夫特啊拉斯听莱格西." },
    { word: "Inheritance", phonetic: "/ɪnˈherɪtəns/", homophone: "因赫里腾斯", meaning: "继承", sentence: "She received a large inheritance.", translation: "她收到了一大笔遗产。", homophoneSentence: "希瑞西夫德啊拉只因赫里腾斯." },
    { word: "Heir", phonetic: "/eə/", homophone: "艾尔", meaning: "继承人", sentence: "He is the sole heir to the fortune.", translation: "他是这笔财产的唯一继承人。", homophoneSentence: "希is泽索艾尔图泽佛辰." },
    { word: "Heiress", phonetic: "/ˈeərəs/", homophone: "艾瑞斯", meaning: "女继承人", sentence: "The heiress inherited the estate.", translation: "这位女继承人继承了庄园。", homophoneSentence: "泽艾瑞斯因赫里提德泽伊斯泰特." },
    { word: "Next of kin", phonetic: "/ˌnekst əv ˈkɪn/", homophone: "奈克斯特奥夫金", meaning: "最近亲属", sentence: "Please contact the next of kin.", translation: "请联系最近亲属。", homophoneSentence: "普利斯卡恩泰克特泽奈克斯特奥夫金." },
    { word: "Relative by marriage", phonetic: "/ˈrelətɪv baɪ ˈmærɪdʒ/", homophone: "瑞拉提夫拜麦瑞吉", meaning: "姻亲", sentence: "He is a relative by marriage.", translation: "他是姻亲。", homophoneSentence: "希is啊瑞拉提夫拜麦瑞吉." },
    { word: "Blood relative", phonetic: "/blʌd ˈrelətɪv/", homophone: "布拉德瑞拉提夫", meaning: "血亲", sentence: "She is my blood relative.", translation: "她是我的血亲。", homophoneSentence: "希is迈布拉德瑞拉提夫." },
    { word: "Distant relative", phonetic: "/ˈdɪstənt ˈrelətɪv/", homophone: "迪斯坦特瑞拉提夫", meaning: "远亲", sentence: "He is a distant relative from Italy.", translation: "他是来自意大利的远亲。", homophoneSentence: "希is啊迪斯坦特瑞拉提夫夫绕米伊塔利." },
    { word: "Close relative", phonetic: "/kləʊz ˈrelətɪv/", homophone: "克洛斯瑞拉提夫", meaning: "近亲", sentence: "Only close relatives were invited.", translation: "只有近亲被邀请了。", homophoneSentence: "欧尼克洛斯瑞拉提夫斯沃因歪提德." },
    { word: "Immediate family", phonetic: "/ɪˈmiːdiət ˈfæməli/", homophone: "伊米迪亚特法梅里", meaning: "直系亲属", sentence: "Immediate family attended the funeral.", translation: "直系亲属参加了葬礼。", homophoneSentence: "伊米迪亚特法梅里阿滕迪德泽弗尤尼尔." },
    { word: "In-laws", phonetic: "/ˈɪn lɔːz/", homophone: "因洛兹", meaning: "姻亲", sentence: "My in-laws are very kind.", translation: "我的姻亲很友善。", homophoneSentence: "迈因洛兹啊歪瑞康德." },
    { word: "Father-in-law", phonetic: "/ˈfɑːðər ɪn lɔː/", homophone: "法德因洛", meaning: "岳父/公公", sentence: "My father-in-law is a doctor.", translation: "我的岳父/公公是医生。", homophoneSentence: "迈法德因洛is啊多克特." },
    { word: "Mother-in-law", phonetic: "/ˈmʌðər ɪn lɔː/", homophone: "马德因洛", meaning: "岳母/婆婆", sentence: "Her mother-in-law cooks well.", translation: "她的岳母/婆婆做饭很好。", homophoneSentence: "赫尔马德因洛库克斯歪尔." },
    { word: "Brother-in-law", phonetic: "/ˈbrʌðər ɪn lɔː/", homophone: "布拉德因洛", meaning: "姐夫/妹夫/小舅子", sentence: "My brother-in-law plays tennis.", translation: "我的姐夫/妹夫/小舅子打网球。", homophoneSentence: "迈布拉德因洛普莱兹泰尼斯." },
    { word: "Sister-in-law", phonetic: "/ˈsɪstər ɪn lɔː/", homophone: "西斯特因洛", meaning: "嫂子/弟媳/小姑子", sentence: "Her sister-in-law is a teacher.", translation: "她的嫂子/弟媳/小姑子是老师。", homophoneSentence: "赫尔西斯特因洛is啊提彻." },
    { word: "Son-in-law", phonetic: "/ˈsʌn ɪn lɔː/", homophone: "桑因洛", meaning: "女婿", sentence: "Their son-in-law is an engineer.", translation: "他们的女婿是工程师。", homophoneSentence: "德尔桑因洛is安恩吉尼尔." },
    { word: "Daughter-in-law", phonetic: "/ˈdɔːtər ɪn lɔː/", homophone: "多特因洛", meaning: "儿媳", sentence: "The daughter-in-law is very helpful.", translation: "儿媳很乐于助人。", homophoneSentence: "泽多特因洛is歪瑞海尔普夫欧." },
    { word: "Grandson", phonetic: "/ˈɡrænsʌn/", homophone: "格兰桑", meaning: "孙子", sentence: "Their grandson is in college.", translation: "他们的孙子在上大学。", homophoneSentence: "德尔格兰桑is因卡利吉." },
    { word: "Granddaughter", phonetic: "/ˈɡrændɔːtə/", homophone: "格兰多特", meaning: "孙女", sentence: "The granddaughter plays piano.", translation: "孙女弹钢琴。", homophoneSentence: "泽格兰多特普莱兹皮艾诺." },
    { word: "Grandchild", phonetic: "/ˈɡræntʃaɪld/", homophone: "格兰秋尔德", meaning: "孙辈", sentence: "They have three grandchildren.", translation: "他们有三个孙辈。", homophoneSentence: "德伊海夫斯里格兰秋准." },
    { word: "Great-grandparent", phonetic: "/ɡreɪt ˈɡrændpeərənt/", homophone: "格瑞特格兰佩润特", meaning: "曾祖父母", sentence: "She met her great-grandparents as a baby.", translation: "她小时候见过她的曾祖父母。", homophoneSentence: "希米特赫尔格瑞特格兰佩润茨艾泽兹贝比." },
    { word: "Great-grandchild", phonetic: "/ɡreɪt ˈɡræntʃaɪld/", homophone: "格瑞特格兰秋尔德", meaning: "曾孙", sentence: "The great-grandchild was born yesterday.", translation: "曾孙昨天出生了。", homophoneSentence: "泽格瑞特格兰秋尔德沃兹伯恩耶斯特得." },
    { word: "Stepchild", phonetic: "/ˈsteptʃaɪld/", homophone: "斯泰普秋尔德", meaning: "继子/继女", sentence: "He has two stepchildren.", translation: "他有两个继子/继女。", homophoneSentence: "希海夫图斯泰普秋准." },
    { word: "Stepbrother", phonetic: "/ˈstepbrʌðə/", homophone: "斯泰普布拉德", meaning: "继兄/继弟", sentence: "My stepbrother lives in Boston.", translation: "我的继兄/继弟住在波士顿。", homophoneSentence: "迈斯泰普布拉德利维斯因波斯顿." },
    { word: "Stepsister", phonetic: "/ˈstepsɪstə/", homophone: "斯泰普西斯特", meaning: "继姐/继妹", sentence: "Her stepsister is older than her.", translation: "她的继姐/继妹比她大。", homophoneSentence: "赫尔斯泰普西斯特is欧德泽赫尔." },
    { word: "Half-brother", phonetic: "/ˈhɑːf brʌðə/", homophone: "哈夫布拉德", meaning: "同父异母/同母异父兄弟", sentence: "He has a half-brother from his father's first marriage.", translation: "他有一个同父异母/同母异父兄弟，来自他父亲的第一段婚姻。", homophoneSentence: "希海兹啊哈夫布拉德夫绕姆伊兹法德斯弗斯特麦瑞吉." },
    { word: "Half-sister", phonetic: "/ˈhɑːf sɪstə/", homophone: "哈夫西斯特", meaning: "同父异母/同母异父姐妹", sentence: "My half-sister and I share a mother.", translation: "我的同父异母/同母异父姐妹和我共有一个母亲。", homophoneSentence: "迈哈夫西斯特安得艾舍尔啊马德." },
    { word: "Foster child", phonetic: "/ˈfɒstə tʃaɪld/", homophone: "福斯特秋尔德", meaning: "寄养儿童", sentence: "The foster child found a loving home.", translation: "这个寄养儿童找到了一个充满爱的家。", homophoneSentence: "泽福斯特秋尔德方德啊拉夫英侯姆." },
    { word: "Foster parent", phonetic: "/ˈfɒstə ˈpeərənt/", homophone: "福斯特佩润特", meaning: "寄养父母", sentence: "Foster parents provide temporary care.", translation: "寄养父母提供临时照顾。", homophoneSentence: "福斯特佩润茨普若歪德泰姆波瑞瑞凯尔." },
    { word: "Adopted child", phonetic: "/əˈdɒptɪd tʃaɪld/", homophone: "阿多普提德秋尔德", meaning: "养子/养女", sentence: "The adopted child felt loved.", translation: "这个养子/养女感到被爱。", homophoneSentence: "泽阿多普提德秋尔德费尔特拉夫德." },
    { word: "Orphan", phonetic: "/ˈɔːfn/", homophone: "奥芬", meaning: "孤儿", sentence: "The orphan was raised by nuns.", translation: "这个孤儿被修女抚养长大。", homophoneSentence: "泽奥芬沃兹瑞伊兹德拜纳恩兹." },
    { word: "Widow", phonetic: "/ˈwɪdəʊ/", homophone: "维豆", meaning: "寡妇", sentence: "The widow lives alone now.", translation: "这位寡妇现在独自生活。", homophoneSentence: "泽维豆利维斯啊隆恩纳." },
    { word: "Widower", phonetic: "/ˈwɪdəʊə/", homophone: "维豆尔", meaning: "鳏夫", sentence: "He became a widower last year.", translation: "他去年成为了鳏夫。", homophoneSentence: "希比凯姆啊维豆尔拉斯特伊尔." },
    { word: "Bachelor", phonetic: "/ˈbætʃələ/", homophone: "巴彻勒", meaning: "单身汉", sentence: "He remained a bachelor all his life.", translation: "他一生都是单身汉。", homophoneSentence: "希瑞梅因德啊巴彻勒奥利伊兹莱夫." },
    { word: "Spinster", phonetic: "/ˈspɪnstə/", homophone: "斯平斯特", meaning: "老处女", sentence: "She was considered a spinster at thirty.", translation: "她三十岁时被认为是老处女。", homophoneSentence: "希沃兹康西德尔德啊斯平斯特艾特泽提." },
    { word: "Fiancé", phonetic: "/fiˈɒnseɪ/", homophone: "菲昂塞", meaning: "未婚夫", sentence: "Her fiancé proposed last night.", translation: "她的未婚夫昨晚求婚了。", homophoneSentence: "赫尔菲昂塞普罗波兹德拉斯特奈特." },
    { word: "Fiancée", phonetic: "/fiˈɒnseɪ/", homophone: "菲昂塞", meaning: "未婚妻", sentence: "His fiancée is a doctor.", translation: "他的未婚妻是医生。", homophoneSentence: "伊兹菲昂塞is啊多克特." },
    { word: "Bride", phonetic: "/braɪd/", homophone: "布瑞德", meaning: "新娘", sentence: "The bride wore a white dress.", translation: "新娘穿了一件白色连衣裙。", homophoneSentence: "泽布瑞德沃啊怀特德雷斯." },
    { word: "Groom", phonetic: "/ɡruːm/", homophone: "格鲁姆", meaning: "新郎", sentence: "The groom looked nervous.", translation: "新郎看起来很紧张。", homophoneSentence: "泽格鲁姆卢克特纳弗斯." },
    { word: "Newlyweds", phonetic: "/ˈnjuːliwedz/", homophone: "纽利维兹", meaning: "新婚夫妇", sentence: "The newlyweds went to Hawaii.", translation: "这对新婚夫妇去了夏威夷。", homophoneSentence: "泽纽利维兹温特图哈歪." },
    { word: "Newlywed", phonetic: "/ˈnjuːliwed/", homophone: "纽利维德", meaning: "新婚者", sentence: "She is a happy newlywed.", translation: "她是一个快乐的新婚者。", homophoneSentence: "希is啊海皮纽利维德." },
    { word: "Spouse", phonetic: "/spaʊs/", homophone: "斯波斯", meaning: "配偶", sentence: "My spouse supports my career.", translation: "我的配偶支持我的事业。", homophoneSentence: "迈斯波斯瑟波茨迈凯里尔." },
    { word: "Partner", phonetic: "/ˈpɑːtnə/", homophone: "帕特纳", meaning: "伴侣", sentence: "My partner and I travel together.", translation: "我的伴侣和我一起旅行。", homophoneSentence: "迈帕特纳安得艾吹歪尔图盖德尔." },
    { word: "Significant other", phonetic: "/sɪɡˈnɪfɪkənt ˈʌðə/", homophone: "西格尼菲肯特阿德", meaning: "重要他人", sentence: "I want you to meet my significant other.", translation: "我想让你见见我的重要他人。", homophoneSentence: "艾旺特优图米特迈西格尼菲肯特阿德." },
    { word: "Soulmate", phonetic: "/ˈsəʊlmeɪt/", homophone: "索尔梅特", meaning: "灵魂伴侣", sentence: "She believes he is her soulmate.", translation: "她相信他是她的灵魂伴侣。", homophoneSentence: "希比利夫斯希is赫尔索尔梅特." },
    { word: "Better half", phonetic: "/ˈbetə hɑːf/", homophone: "贝特哈夫", meaning: "另一半", sentence: "I am going out with my better half.", translation: "我要和我的另一半出去。", homophoneSentence: "艾艾姆勾英奥特维斯迈贝特哈夫." },
    { word: "Other half", phonetic: "/ˈʌðə hɑːf/", homophone: "阿德哈夫", meaning: "另一半", sentence: "My other half is cooking dinner.", translation: "我的另一半在做晚餐。", homophoneSentence: "迈阿德哈夫is库克英迪纳." },
    { word: "Life partner", phonetic: "/laɪf ˈpɑːtnə/", homophone: "莱夫帕特纳", meaning: "人生伴侣", sentence: "He is my life partner.", translation: "他是我的人生伴侣。", homophoneSentence: "希is迈莱夫帕特纳." },
    { word: "Domestic partner", phonetic: "/dəˈmestɪk ˈpɑːtnə/", homophone: "德梅斯蒂克帕特纳", meaning: "同居伴侣", sentence: "They are registered domestic partners.", translation: "他们是注册的同居伴侣。", homophoneSentence: "德伊啊瑞吉斯德德梅斯蒂克帕特纳斯." }
];

// Time 分类新单词（100个）
const timeWords = [
    { word: "Era", phonetic: "/ˈɪərə/", homophone: "伊拉", meaning: "时代", sentence: "We live in a digital era.", translation: "我们生活在数字时代。", homophoneSentence: "威利夫因啊迪吉特尔伊拉." },
    { word: "Epoch", phonetic: "/ˈiːpɒk/", homophone: "伊波克", meaning: "纪元", sentence: "The invention marked a new epoch.", translation: "这项发明标志着一个新纪元。", homophoneSentence: "泽因文申马克德啊纽伊波克." },
    { word: "Millennium", phonetic: "/mɪˈleniəm/", homophone: "米伦尼姆", meaning: "千年", sentence: "The new millennium began in 2000.", translation: "新千年始于2000年。", homophoneSentence: "泽纽米伦尼姆比甘因图萨恩德." },
    { word: "Century", phonetic: "/ˈsentʃəri/", homophone: "森彻瑞", meaning: "世纪", sentence: "The castle was built in the 12th century.", translation: "这座城堡建于12世纪。", homophoneSentence: "泽卡斯尔沃兹比尔特因泽图艾尔夫森彻瑞." },
    { word: "Decade", phonetic: "/ˈdekeɪd/", homophone: "德凯德", meaning: "十年", sentence: "Fashion changed dramatically this decade.", translation: "这十年时尚变化很大。", homophoneSentence: "费申琴吉德拉马提克里迪斯德凯德." },
    { word: "Lustrum", phonetic: "/ˈlʌstrəm/", homophone: "拉斯特勒姆", meaning: "五年", sentence: "A lustrum is a period of five years.", translation: "五年是一个五年的时期。", homophoneSentence: "啊拉斯特勒姆is啊皮瑞奥德奥夫法伊夫伊尔兹." },
    { word: "Biennium", phonetic: "/baɪˈeniəm/", homophone: "拜艾尼姆", meaning: "两年", sentence: "The project spans a biennium.", translation: "这个项目跨越两年。", homophoneSentence: "泽普若杰克特斯潘斯啊拜艾尼姆." },
    { word: "Triennium", phonetic: "/traɪˈeniəm/", homophone: "吹艾尼姆", meaning: "三年", sentence: "The triennium brought many changes.", translation: "这三年带来了许多变化。", homophoneSentence: "泽吹艾尼姆布罗特梅尼琴吉兹." },
    { word: "Quadrennium", phonetic: "/kwɒˈdreniəm/", homophone: "夸德雷尼姆", meaning: "四年", sentence: "A quadrennium passes quickly.", translation: "四年很快就过去了。", homophoneSentence: "啊夸德雷尼姆帕西斯奎克利." },
    { word: "Quinquennium", phonetic: "/kwɪŋˈkweniəm/", homophone: "昆奎尼姆", meaning: "五年", sentence: "The quinquennium was productive.", translation: "这五年很富有成效。", homophoneSentence: "泽昆奎尼姆沃兹普若达克提夫." },
    { word: "Semester", phonetic: "/sɪˈmestə/", homophone: "西梅斯特", meaning: "学期", sentence: "This semester is almost over.", translation: "这个学期快结束了。", homophoneSentence: "迪斯西梅斯特is奥莫斯特欧弗." },
    { word: "Trimester", phonetic: "/traɪˈmestə/", homophone: "吹梅斯特", meaning: "三个月", sentence: "The pregnancy is in the second trimester.", translation: "怀孕进入了第二个月。", homophoneSentence: "泽普瑞格南西is因泽塞肯德吹梅斯特." },
    { word: "Quarter", phonetic: "/ˈkwɔːtə/", homophone: "夸特", meaning: "季度", sentence: "Sales increased in the third quarter.", translation: "第三季度销售额增加了。", homophoneSentence: "塞尔斯因克里斯特因泽泽德夸特." },
    { word: "Fiscal year", phonetic: "/ˈfɪskl jɪə/", homophone: "菲斯克尔伊尔", meaning: "财政年度", sentence: "The fiscal year ends in June.", translation: "财政年度在六月结束。", homophoneSentence: "泽菲斯克尔伊尔恩兹因朱恩." },
    { word: "Academic year", phonetic: "/ˌækəˈdemɪk jɪə/", homophone: "艾卡德米克伊尔", meaning: "学年", sentence: "The academic year starts in September.", translation: "学年在九月开始。", homophoneSentence: "泽艾卡德米克伊尔斯塔尔茨因塞普腾伯." },
    { word: "School year", phonetic: "/skuːl jɪə/", homophone: "斯库尔伊尔", meaning: "学年", sentence: "The school year has 180 days.", translation: "学年有180天。", homophoneSentence: "泽斯库尔伊尔海兹万艾提迪兹." },
    { word: "Calendar year", phonetic: "/ˈkælɪndə jɪə/", homophone: "卡林德尔伊尔", meaning: "日历年", sentence: "The calendar year has 365 days.", translation: "日历年有365天。", homophoneSentence: "泽卡林德尔伊尔海兹斯里辛迪赛克斯蒂法伊夫迪兹." },
    { word: "Leap year", phonetic: "/liːp jɪə/", homophone: "利普伊尔", meaning: "闰年", sentence: "2024 is a leap year.", translation: "2024年是闰年。", homophoneSentence: "图萨恩德安得文提佛is啊利普伊尔." },
    { word: "Common year", phonetic: "/ˈkɒmən jɪə/", homophone: "科门伊尔", meaning: "平年", sentence: "2023 was a common year.", translation: "2023年是平年。", homophoneSentence: "图萨恩德安得文提斯里沃兹啊科门伊尔." },
    { word: "Solar year", phonetic: "/ˈsəʊlə jɪə/", homophone: "索拉伊尔", meaning: "太阳年", sentence: "A solar year is about 365 days.", translation: "太阳年大约是365天。", homophoneSentence: "啊索拉伊尔is啊鲍特斯里辛迪赛克斯蒂法伊夫迪兹." },
    { word: "Lunar year", phonetic: "/ˈluːnə jɪə/", homophone: "卢纳伊尔", meaning: "阴历年", sentence: "The lunar year has 354 days.", translation: "阴历年有354天。", homophoneSentence: "泽卢纳伊尔海兹斯里辛迪佛提佛迪兹." },
    { word: "Sidereal year", phonetic: "/saɪˈdɪəriəl jɪə/", homophone: "赛迪瑞尔伊尔", meaning: "恒星年", sentence: "A sidereal year is slightly longer.", translation: "恒星年稍微长一点。", homophoneSentence: "啊赛迪瑞尔伊尔is斯莱特利朗格尔." },
    { word: "Tropical year", phonetic: "/ˈtrɒpɪkl jɪə/", homophone: "特罗皮克尔伊尔", meaning: "回归年", sentence: "The tropical year marks the seasons.", translation: "回归年标志着季节。", homophoneSentence: "泽特罗皮克尔伊尔马克斯泽西曾斯." },
    { word: "Annum", phonetic: "/ˈænəm/", homophone: "阿纳姆", meaning: "年", sentence: "Per annum means per year.", translation: "每年意味着每年。", homophoneSentence: "珀阿纳姆米因斯珀伊尔." },
    { word: "Chronology", phonetic: "/krəˈnɒlədʒi/", homophone: "克罗诺洛吉", meaning: "年代学", sentence: "Chronology helps us understand history.", translation: "年代学帮助我们理解历史。", homophoneSentence: "克罗诺洛吉海尔普斯阿斯安德斯丹德希斯特瑞." },
    { word: "Timeline", phonetic: "/ˈtaɪmlaɪn/", homophone: "泰姆莱恩", meaning: "时间线", sentence: "The timeline shows important events.", translation: "时间线显示了重要事件。", homophoneSentence: "泽泰姆莱恩瘦兹因波腾特伊文茨." },
    { word: "Schedule", phonetic: "/ˈʃedjuːl/", homophone: "谢久尔", meaning: "时间表", sentence: "Check the schedule for details.", translation: "查看时间表了解详情。", homophoneSentence: "切克泽谢久尔佛迪泰尔斯." },
    { word: "Agenda", phonetic: "/əˈdʒendə/", homophone: "阿真达", meaning: "议程", sentence: "What is on the agenda today?", translation: "今天的议程是什么？", homophoneSentence: "沃特is昂泽阿真达特得?" },
    { word: "Itinerary", phonetic: "/aɪˈtɪnərəri/", homophone: "艾提纳瑞瑞", meaning: "行程", sentence: "The itinerary includes five cities.", translation: "行程包括五个城市。", homophoneSentence: "泽艾提纳瑞瑞因克卢兹法伊夫西提斯." },
    { word: "Routine", phonetic: "/ruːˈtiːn/", homophone: "鲁廷", meaning: "常规", sentence: "My morning routine includes exercise.", translation: "我的早晨常规包括锻炼。", homophoneSentence: "迈莫宁鲁廷因克卢兹艾克瑟赛兹." },
    { word: "Regimen", phonetic: "/ˈredʒɪmən/", homophone: "雷吉门", meaning: "养生法", sentence: "She follows a strict health regimen.", translation: "她遵循严格的健康养生法。", homophoneSentence: "希佛洛兹啊斯特里克特海尔斯雷吉门." },
    { word: "Duration", phonetic: "/djuˈreɪʃn/", homophone: "久瑞申", meaning: "持续时间", sentence: "The duration of the movie is two hours.", translation: "这部电影的持续时间是两小时。", homophoneSentence: "泽久瑞申奥夫泽穆维is图奥尔斯." },
    { word: "Span", phonetic: "/spæn/", homophone: "斯潘", meaning: "跨度", sentence: "The bridge has a long span.", translation: "这座桥有很长的跨度。", homophoneSentence: "泽布里吉海兹啊朗斯潘." },
    { word: "Interval", phonetic: "/ˈɪntəvl/", homophone: "因特弗欧", meaning: "间隔", sentence: "There is a ten-minute interval.", translation: "有十分钟的间隔。", homophoneSentence: "德尔is啊腾米尼特因特弗欧." },
    { word: "Interim", phonetic: "/ˈɪntərɪm/", homophone: "因特里姆", meaning: "过渡期", sentence: "In the interim, we will wait.", translation: "在此期间，我们将等待。", homophoneSentence: "因泽因特里姆威威尔威特." },
    { word: "Meantime", phonetic: "/ˈmiːntaɪm/", homophone: "明泰姆", meaning: "同时", sentence: "In the meantime, prepare dinner.", translation: "同时，准备晚餐。", homophoneSentence: "因泽明泰姆普瑞佩尔迪纳." },
    { word: "Meanwhile", phonetic: "/ˈmiːnwaɪl/", homophone: "明歪尔", meaning: "与此同时", sentence: "Meanwhile, the situation worsened.", translation: "与此同时，情况恶化了。", homophoneSentence: "明歪尔泽西图埃申沃森德." },
    { word: "Simultaneously", phonetic: "/ˌsɪmlˈteɪniəsli/", homophone: "西姆尔特埃尼厄斯利", meaning: "同时地", sentence: "The events occurred simultaneously.", translation: "这些事件同时发生。", homophoneSentence: "泽伊文茨奥克德西姆尔特埃尼厄斯利." },
    { word: "Concurrently", phonetic: "/kənˈkʌrəntli/", homophone: "康卡伦特利", meaning: "同时发生地", sentence: "Two meetings are happening concurrently.", translation: "两个会议同时发生。", homophoneSentence: "图米听斯啊海潘宁康卡伦特利." },
    { word: "Synchronously", phonetic: "/ˈsɪŋkrənəsli/", homophone: "辛克若纳斯利", meaning: "同步地", sentence: "The machines operate synchronously.", translation: "这些机器同步运行。", homophoneSentence: "泽马辛斯奥佩瑞特斯辛克若纳斯利." },
    { word: "Asynchronously", phonetic: "/eɪˈsɪŋkrənəsli/", homophone: "艾辛克若纳斯利", meaning: "异步地", sentence: "The tasks run asynchronously.", translation: "任务异步运行。", homophoneSentence: "泽塔斯克斯拉恩艾辛克若纳斯利." },
    { word: "Temporarily", phonetic: "/ˈtemprərəli/", homophone: "坦普若若利", meaning: "暂时地", sentence: "The store is temporarily closed.", translation: "商店暂时关闭。", homophoneSentence: "泽斯托is坦普若若利克洛兹德." },
    { word: "Permanently", phonetic: "/ˈpɜːmənəntli/", homophone: "珀门恩特利", meaning: "永久地", sentence: "The changes are permanently saved.", translation: "这些更改被永久保存。", homophoneSentence: "泽琴吉兹啊珀门恩特利塞夫德." },
    { word: "Briefly", phonetic: "/ˈbriːfli/", homophone: "布里夫利", meaning: "短暂地", sentence: "She spoke briefly about the issue.", translation: "她简短地谈到了这个问题。", homophoneSentence: "希斯波克布里夫利啊鲍特泽伊舒." },
    { word: "Momentarily", phonetic: "/ˈməʊməntərəli/", homophone: "莫门塔若利", meaning: "片刻地", sentence: "We will stop momentarily.", translation: "我们将片刻停留。", homophoneSentence: "威威尔斯托普莫门塔若利." },
    { word: "Instantly", phonetic: "/ˈɪnstəntli/", homophone: "因斯坦特利", meaning: "立即", sentence: "The medicine worked instantly.", translation: "药物立即起效。", homophoneSentence: "泽梅迪森沃克特因斯坦特利." },
    { word: "Promptly", phonetic: "/ˈprɒmptli/", homophone: "普朗普特利", meaning: "迅速地", sentence: "Please reply promptly.", translation: "请迅速回复。", homophoneSentence: "普利斯里普莱普朗普特利." },
    { word: "Punctually", phonetic: "/ˈpʌŋktʃuəli/", homophone: "庞克丘厄利", meaning: "准时地", sentence: "He arrived punctually at nine.", translation: "他准时九点到达。", homophoneSentence: "希厄瑞伊夫德庞克丘厄利艾特奈恩." },
    { word: "Prematurely", phonetic: "/ˌpreməˈtjʊəli/", homophone: "普瑞马丘厄利", meaning: "过早地", sentence: "The baby was born prematurely.", translation: "婴儿过早出生。", homophoneSentence: "泽贝比沃兹伯恩普瑞马丘厄利." },
    { word: "Belatedly", phonetic: "/bɪˈleɪtɪdli/", homophone: "比莱提德利", meaning: "延迟地", sentence: "She apologized belatedly.", translation: "她延迟道歉。", homophoneSentence: "希阿波勒吉兹德比莱提德利." },
    { word: "Tardily", phonetic: "/ˈtɑːdɪli/", homophone: "塔迪利", meaning: "迟到地", sentence: "He arrived tardily to the meeting.", translation: "他开会迟到了。", homophoneSentence: "希厄瑞伊夫德塔迪利图泽米听." },
    { word: "Posthumously", phonetic: "/ˈpɒstjʊməsli/", homophone: "波斯丘厄斯利", meaning: "死后", sentence: "The award was given posthumously.", translation: "这个奖项是死后授予的。", homophoneSentence: "泽厄沃德沃兹吉文波斯丘厄斯利." },
    { word: "Retroactively", phonetic: "/ˌretrəʊˈæktɪvli/", homophone: "瑞特若艾克提夫利", meaning: "追溯地", sentence: "The law applies retroactively.", translation: "这项法律追溯适用。", homophoneSentence: "泽洛阿普莱兹瑞特若艾克提夫利." },
    { word: "Prospectively", phonetic: "/prəˈspektɪvli/", homophone: "普若斯佩克提夫利", meaning: "预期地", sentence: "The changes apply prospectively.", translation: "这些变化预期适用。", homophoneSentence: "泽琴吉兹阿普莱兹普若斯佩克提夫利." },
    { word: "Consecutively", phonetic: "/kənˈsekjətɪvli/", homophone: "康塞克优提夫利", meaning: "连续地", sentence: "She won three games consecutively.", translation: "她连续赢了三场比赛。", homophoneSentence: "希万斯里盖姆斯康塞克优提夫利." },
    { word: "Successively", phonetic: "/səkˈsesɪvli/", homophone: "瑟克塞西夫利", meaning: "相继地", sentence: "The events occurred successively.", translation: "这些事件相继发生。", homophoneSentence: "泽伊文茨奥克德瑟克塞西夫利." },
    { word: "Sequentially", phonetic: "/sɪˈkwenʃəli/", homophone: "西昆申厄利", meaning: "按顺序地", sentence: "The steps must be done sequentially.", translation: "这些步骤必须按顺序完成。", homophoneSentence: "泽斯泰普斯马斯特比邓西昆申厄利." },
    { word: "Chronologically", phonetic: "/ˌkrɒnəˈlɒdʒɪkli/", homophone: "克罗诺洛吉克里", meaning: "按时间顺序地", sentence: "Arrange the photos chronologically.", translation: "按时间顺序排列照片。", homophoneSentence: "厄瑞恩吉泽夫欧图斯克罗诺洛吉克里." },
    { word: "Annually", phonetic: "/ˈænjuəli/", homophone: "安尼厄利", meaning: "每年", sentence: "The festival is held annually.", translation: "这个节日每年举行。", homophoneSentence: "泽费斯蒂沃is海尔德安尼厄利." },
    { word: "Biannually", phonetic: "/baɪˈænjuəli/", homophone: "拜安尼厄利", meaning: "每半年", sentence: "The meeting occurs biannually.", translation: "这个会议每半年举行一次。", homophoneSentence: "泽米听奥克尔斯拜安尼厄利." },
    { word: "Biennially", phonetic: "/baɪˈeniəli/", homophone: "拜艾尼厄利", meaning: "每两年", sentence: "The conference meets biennially.", translation: "这个会议每两年举行一次。", homophoneSentence: "泽康弗伦斯米茨拜艾尼厄利." },
    { word: "Semiannually", phonetic: "/ˌsemiˈænjuəli/", homophone: "西米安尼厄利", meaning: "每半年", sentence: "Interest is paid semiannually.", translation: "利息每半年支付一次。", homophoneSentence: "因特瑞斯特is佩德西米安尼厄利." },
    { word: "Quarterly", phonetic: "/ˈkwɔːtəli/", homophone: "夸特利", meaning: "每季度", sentence: "The report is published quarterly.", translation: "报告每季度发布。", homophoneSentence: "泽瑞波特is帕布利希德夸特利." },
    { word: "Monthly", phonetic: "/ˈmʌnθli/", homophone: "曼斯里", meaning: "每月", sentence: "The magazine comes out monthly.", translation: "杂志每月出版。", homophoneSentence: "泽马格呃怎卡姆斯奥特曼斯里." },
    { word: "Weekly", phonetic: "/ˈwiːkli/", homophone: "威克利", meaning: "每周", sentence: "We have meetings weekly.", translation: "我们每周开会。", homophoneSentence: "威海夫米听斯威克利." },
    { word: "Daily", phonetic: "/ˈdeɪli/", homophone: "戴利", meaning: "每天", sentence: "Exercise daily for good health.", translation: "每天锻炼有益健康。", homophoneSentence: "艾克瑟赛兹戴利佛古德海尔斯." },
    { word: "Hourly", phonetic: "/ˈaʊəli/", homophone: "奥厄利", meaning: "每小时", sentence: "The bus runs hourly.", translation: "公交车每小时一班。", homophoneSentence: "泽巴斯冉兹奥厄利." },
    { word: "Nightly", phonetic: "/ˈnaɪtli/", homophone: "奈特利", meaning: "每晚", sentence: "The show airs nightly.", translation: "这个节目每晚播出。", homophoneSentence: "泽瘦艾尔兹奈特利." },
    { word: "Fortnightly", phonetic: "/ˈfɔːtnaɪtli/", homophone: "福特奈特利", meaning: "每两周", sentence: "We meet fortnightly.", translation: "我们每两周见面。", homophoneSentence: "威米特福特奈特利." }
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

// 添加 family 单词
const familyAdded = addWordsToCategory('family', familyWords);
console.log(`Family 分类添加了 ${familyAdded} 个新单词`);

// 添加 time 单词
const timeAdded = addWordsToCategory('time', timeWords);
console.log(`Time 分类添加了 ${timeAdded} 个新单词`);

// 保存文件
fs.writeFileSync('word-data.js', data, 'utf8');
console.log('word-data.js 已更新');
console.log(`第三批总共添加了 ${familyAdded + timeAdded} 个新单词`);
