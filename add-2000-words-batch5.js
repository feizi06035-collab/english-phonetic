const fs = require('fs');

const wordData = `Ice|/aɪs/|艾斯|冰|The ice is melting.|冰正在融化。|泽艾斯伊兹梅尔廷
Ice cream|/ˌaɪs ˈkriːm/|艾斯克里姆|冰淇淋|I love ice cream.|我喜欢冰淇淋。|艾拉夫艾斯克里姆
Idea|/aɪˈdɪə/|艾迪厄|想法|That is a good idea.|那是个好主意。|泽特伊兹阿古德艾迪厄
Ideal|/aɪˈdɪəl/|艾迪厄尔|理想的|This is the ideal solution.|这是理想的解决方案。|迪斯伊兹泽艾迪厄尔瑟卢申
Identify|/aɪˈdentɪfaɪ/|艾登蒂法伊|识别|Can you identify the problem?|你能识别问题吗？|坎尤艾登蒂法伊泽普罗布勒姆
Identity|/aɪˈdentəti/|艾登蒂蒂|身份|Please show your identity card.|请出示您的身份证。|普利斯肖尤尔艾登蒂蒂卡德
Idiom|/ˈɪdiəm/|伊迪厄姆|习语|English has many idioms.|英语有很多习语。|英格利什哈兹梅尼伊迪厄姆兹
Ignore|/ɪɡˈnɔː(r)/|伊格诺|忽视|Don't ignore the warning signs.|不要忽视警告标志。|东特伊格诺泽沃宁赛恩兹
Ill|/ɪl/|伊尔|生病的|She is feeling ill.|她感觉不舒服。|希伊兹菲林伊尔
Illegal|/ɪˈliːɡl/|伊利格尔|非法的|It is illegal to steal.|偷窃是非法的。|伊特伊兹伊利格尔图斯蒂尔
Illness|/ˈɪlnəs/|伊尔尼斯|疾病|He recovered from his illness.|他从疾病中康复了。|希里卡弗德弗罗姆希兹伊尔尼斯
Illustrate|/ˈɪləstreɪt/|伊拉斯特雷特|说明|Let me illustrate my point.|让我说明我的观点。|莱特米伊拉斯特雷特迈波因特
Image|/ˈɪmɪdʒ/|伊米奇|图像|The image is very clear.|图像很清晰。|泽伊米奇伊兹维里克利尔
Imagination|/ɪˌmædʒɪˈneɪʃn/|伊马吉内申|想象力|Children have great imagination.|孩子们有很棒的想象力。|奇尔德伦哈夫格雷特伊马吉内申
Imagine|/ɪˈmædʒɪn/|伊马金|想象|Can you imagine that?|你能想象吗？|坎尤伊马金泽特
Imitate|/ˈɪmɪteɪt/|伊米泰特|模仿|Children like to imitate adults.|孩子们喜欢模仿成年人。|奇尔德伦莱克图伊米泰特阿达尔茨
Immediate|/ɪˈmiːdiət/|伊米迪厄特|立即的|We need immediate action.|我们需要立即行动。|威尼迪米迪厄特阿克申
Immediately|/ɪˈmiːdiətli/|伊米迪厄特利|立即|Please come immediately.|请立即来。|普利斯卡姆伊米迪厄特利
Immense|/ɪˈmens/|伊门斯|巨大的|The ocean is immense.|海洋是巨大的。|泽欧申伊兹伊门斯
Immigrant|/ˈɪmɪɡrənt/|伊米格兰特|移民|He is an immigrant from China.|他是来自中国的移民。|希伊兹安伊米格兰特弗罗姆中国
Immigration|/ˌɪmɪˈɡreɪʃn/|伊米格雷申|移民|Immigration laws are strict.|移民法律很严格。|伊米格雷申洛兹阿斯特里克特
Impact|/ˈɪmpækt/|因帕克特|影响|The impact was significant.|影响是显著的。|泽因帕克特沃兹西格尼菲肯特
Impatient|/ɪmˈpeɪʃnt/|因佩申特|不耐烦的|Don't be impatient.|不要不耐烦。|东特比因佩申特
Implement|/ˈɪmplɪment/|因普利门特|实施|We will implement the plan.|我们将实施这个计划。|威威尔因普利门特泽普兰
Importance|/ɪmˈpɔːtns/|因波特恩斯|重要性|The importance of education is clear.|教育的重要性是清楚的。|泽因波特恩斯奥夫教育伊兹克利尔
Important|/ɪmˈpɔːtnt/|因波特恩特|重要的|This is very important.|这非常重要。|迪斯伊兹维里因波特恩特
Impossible|/ɪmˈpɒsəbl/|因波西布尔|不可能的|Nothing is impossible.|没有什么是不可能的。|纳辛伊兹因波西布尔
Impress|/ɪmˈpres/|因普雷斯|给人留下印象|He wants to impress her.|他想给她留下印象。|希万茨图因普雷斯赫尔
Impression|/ɪmˈpreʃn/|因普雷申|印象|First impression is important.|第一印象很重要。|弗斯特因普雷申伊兹因波特恩特
Improve|/ɪmˈpruːv/|因普鲁夫|改善|I want to improve my English.|我想提高我的英语。|艾沃特图因普鲁夫迈英格利什
Improvement|/ɪmˈpruːvmənt/|因普鲁夫门特|改善|There is room for improvement.|还有改进的空间。|泽尔伊兹鲁姆福因普鲁夫门特
Incident|/ˈɪnsɪdənt/|因西登特|事件|There was an incident yesterday.|昨天发生了一起事件。|泽尔沃兹安因西登特耶斯特迪
Include|/ɪnˈkluːd/|因克鲁德|包括|The price includes breakfast.|价格包括早餐。|泽普莱斯因克鲁兹布雷克法斯特
Income|/ˈɪnkʌm/|因卡姆|收入|His income has increased.|他的收入增加了。|希兹因卡姆哈兹因克里斯德
Increase|/ɪnˈkriːs/|因克里斯|增加|The price will increase.|价格将会上涨。|泽普莱斯威尔因克里斯
Indeed|/ɪnˈdiːd/|因迪德|确实|Indeed, it is true.|确实，这是真的。|因迪德，伊特伊兹特鲁
Independence|/ˌɪndɪˈpendəns/|因迪彭登斯|独立|The country gained independence.|这个国家获得了独立。|泽坎特里盖恩德因迪彭登斯
Independent|/ˌɪndɪˈpendənt/|因迪彭登特|独立的|She is very independent.|她很独立。|希伊兹维里因迪彭登特
Index|/ˈɪndeks/|因德克斯|索引|Check the index for more information.|查看索引获取更多信息。|切克泽因德克斯福莫因福梅申
Indian|/ˈɪndiən/|因迪厄n|印度的|Indian food is spicy.|印度食物很辣。|因迪厄n富德伊兹斯派西
Indicate|/ˈɪndɪkeɪt/|因迪凯特|表明|The sign indicates the direction.|标志表明方向。|泽赛恩因迪凯茨泽迪雷克申
Individual|/ˌɪndɪˈvɪdʒuəl/|因迪维朱厄尔|个人|Each individual has rights.|每个人都有权利。|伊奇因迪维朱厄尔哈兹赖茨
Indoor|/ˈɪndɔː(r)/|因多尔|室内的|Indoor activities are fun.|室内活动很有趣。|因多尔阿克蒂维蒂兹阿范
Indoors|/ɪnˈdɔːz/|因多兹|在室内|Let's go indoors.|让我们进屋吧。|莱茨戈因多兹
Industry|/ˈɪndəstri/|因达斯特里|工业|The car industry is growing.|汽车工业正在增长。|泽卡尔因达斯特里伊兹格罗英
Infant|/ˈɪnfənt/|因芬特|婴儿|The infant is sleeping.|婴儿正在睡觉。|泽因芬特伊兹斯利平
Infection|/ɪnˈfekʃn/|因费克申|感染|The infection spread quickly.|感染迅速蔓延。|泽因费克申斯普雷德奎克利
Influence|/ˈɪnfluəns/|因弗卢恩斯|影响|Parents have great influence on children.|父母对孩子有很大影响。|佩伦茨哈夫格雷特因弗卢恩斯昂奇尔德伦
Inform|/ɪnˈfɔːm/|因福姆|通知|Please inform me of any changes.|请通知我任何变化。|普利斯因福姆米奥夫埃尼钱吉兹
Information|/ˌɪnfəˈmeɪʃn/|因福梅申|信息|The information is helpful.|这信息很有帮助。|泽因福梅申伊兹赫尔普富尔
Ingredient|/ɪnˈɡriːdiənt/|因格里迪恩特|成分|Check the ingredients list.|检查成分表。|切克泽因格里迪恩茨利斯特
Initial|/ɪˈnɪʃl/|伊尼舍尔|最初的|My initial reaction was surprise.|我最初的反应是惊讶。|迈伊尼舍尔里亚克申沃兹瑟普莱兹
Initially|/ɪˈnɪʃəli/|伊尼舍利|最初|Initially, I was nervous.|最初，我很紧张。|伊尼舍利，艾沃兹纳沃斯
Initiative|/ɪˈnɪʃətɪv/|伊尼舍蒂夫|倡议|He took the initiative.|他采取了主动。|希图克泽伊尼舍蒂夫
Injury|/ˈɪndʒəri/|因杰里|伤害|He suffered a serious injury.|他受了重伤。|希萨弗德阿西里厄斯因杰里
Ink|/ɪŋk/|因克|墨水|The ink is black.|墨水是黑色的。|泽因克伊兹布莱克
Inland|/ˈɪnlænd/|因兰德|内陆|They traveled inland.|他们去了内陆。|泽伊特拉夫尔德因兰德
Inn|/ɪn/|因|客栈|We stayed at an inn.|我们住在一家客栈。|威斯泰德阿特安因
Inner|/ˈɪnə(r)/|因纳|内部的|Her inner thoughts are complex.|她的内心想法很复杂。|赫尔因纳索茨阿康普莱克斯
Innocent|/ˈɪnəsnt/|因诺森特|无辜的|He is innocent of the crime.|他对这罪行是无辜的。|希伊兹因诺森特奥夫泽克莱姆
Input|/ˈɪnpʊt/|因普特|输入|We need your input on this.|我们需要你对此的意见。|威尼迪尤尔因普特昂迪斯
Insect|/ˈɪnsekt/|因塞克特|昆虫|The insect is small.|这只昆虫很小。|泽因塞克特伊兹斯莫尔
Insert|/ɪnˈsɜːt/|因瑟特|插入|Insert the key into the lock.|把钥匙插入锁里。|因瑟特泽基因图泽洛克
Inside|/ɪnˈsaɪd/|因赛德|里面|The cat is inside the box.|猫在盒子里面。|泽凯特伊兹因赛德泽博克斯
Insist|/ɪnˈsɪst/|因西斯特|坚持|He insists on his opinion.|他坚持自己的意见。|希因西斯特斯昂希兹奥皮尼恩
Inspect|/ɪnˈspekt/|因斯佩克特|检查|They will inspect the building.|他们将检查这座建筑。|泽伊威尔因斯佩克特泽比尔丁
Inspire|/ɪnˈspaɪə(r)/|因斯派厄|激励|The story inspired me.|这个故事激励了我。|泽斯托里因斯派尔德米
Instance|/ˈɪnstəns/|因斯坦斯|例子|For instance, consider this.|例如，考虑这个。|福因斯坦斯，康西德迪斯
Instant|/ˈɪnstənt/|因斯坦特|立即的|The result was instant.|结果是立即的。|泽里萨尔特沃兹因斯坦特
Instead|/ɪnˈsted/|因斯特德|代替|Let's walk instead.|让我们走路代替。|莱茨沃克因斯特德
Institute|/ˈɪnstɪtjuːt/|因斯蒂图特|研究所|He works at a research institute.|他在研究所工作。|希沃克斯阿特阿里瑟奇因斯蒂图特
Institution|/ˌɪnstɪˈtjuːʃn/|因斯蒂图申|机构|The institution has a long history.|这个机构历史悠久。|泽因斯蒂图申哈兹阿龙希斯特里
Instruct|/ɪnˈstrʌkt/|因斯特拉克特|指导|He instructed us to wait.|他指导我们等待。|希因斯特拉克蒂德阿斯图韦特
Instruction|/ɪnˈstrʌkʃn/|因斯特拉克申|指示|Follow the instructions carefully.|仔细遵循指示。|法洛泽因斯特拉克申兹凯尔富利
Instrument|/ˈɪnstrəmənt/|因斯特鲁门特|乐器|He plays a musical instrument.|他演奏乐器。|希普雷兹阿缪齐克尔因斯特鲁门特
Insult|/ɪnˈsʌlt/|因萨尔特|侮辱|That was an insult.|那是一种侮辱。|泽特沃兹安因萨尔特
Insurance|/ɪnˈʃʊərəns/|因舒伦斯|保险|Do you have health insurance?|你有健康保险吗？|杜尤哈夫赫尔思因舒伦斯
Insure|/ɪnˈʃʊə(r)/|因舒尔|保险|You should insure your car.|你应该给你的车保险。|尤舒德因舒尔尤尔卡尔
Intellectual|/ˌɪntəˈlektʃuəl/|因特莱克切尔|智力的|Intellectual growth is important.|智力成长很重要。|因特莱克切尔格罗思伊兹因波特恩特
Intelligence|/ɪnˈtelɪdʒəns/|因泰利金斯|智力|He has high intelligence.|他有很高的智力。|希哈兹海因泰利金斯
Intelligent|/ɪnˈtelɪdʒənt/|因泰利金特|聪明的|She is very intelligent.|她很聪明。|希伊兹维里因泰利金特
Intend|/ɪnˈtend/|因滕德|打算|I intend to leave early.|我打算早点离开。|艾因滕德图利夫厄利
Intense|/ɪnˈtens/|因滕斯|强烈的|The heat was intense.|热很强烈。|泽希特沃兹因滕斯
Intensity|/ɪnˈtensəti/|因滕西蒂|强度|The intensity of the storm increased.|风暴的强度增加了。|泽因滕西蒂奥夫泽斯托姆因克里斯德
Intention|/ɪnˈtenʃn/|因滕申|意图|His intention was good.|他的意图是好的。|希兹因滕申沃兹古德
Interaction|/ˌɪntərˈækʃn/|因特阿克申|互动|Social interaction is important.|社交互动很重要。|索舍尔因特阿克申伊兹因波特恩特
Interest|/ˈɪntrəst/|因特雷斯特|兴趣|I have an interest in art.|我对艺术有兴趣。|艾哈夫安因特雷斯特因阿特
Interesting|/ˈɪntrəstɪŋ/|因特雷斯廷|有趣的|This book is interesting.|这本书很有趣。|迪斯布克伊兹因特雷斯廷
Interior|/ɪnˈtɪəriə(r)/|因蒂里厄|内部|The interior of the house is beautiful.|房子的内部很美丽。|泽因蒂里厄奥夫泽豪斯伊兹比尤蒂富尔
Internal|/ɪnˈtɜːnl/|因特纳尔|内部的|Internal conflicts exist.|内部冲突存在。|因特纳尔康弗利克茨伊格齐斯特
International|/ˌɪntəˈnæʃnəl/|因特纳申纳尔|国际的|This is an international event.|这是一个国际活动。|迪斯伊兹安因特纳申纳尔伊文特
Internet|/ˈɪntənet/|因特内特|互联网|The internet changed our lives.|互联网改变了我们的生活。|泽因特内特钱吉德阿沃尔利夫兹
Interpret|/ɪnˈtɜːrprɪt/|因特普里特|解释|Can you interpret this?|你能解释这个吗？|坎尤因特普里特迪斯
Interrupt|/ˌɪntəˈrʌpt/|因特拉普特|打断|Don't interrupt me.|不要打断我。|东特因特拉普特米
Interval|/ˈɪntəvl/|因特瓦尔|间隔|There is a ten-minute interval.|有十分钟的间隔。|泽尔伊兹阿滕米尼特因特瓦尔
Interview|/ˈɪntəvjuː/|因特维尤|面试|I have a job interview tomorrow.|我明天有工作面试。|艾哈夫阿贾布因特维尤图莫罗
Introduce|/ˌɪntrəˈdjuːs/|因特罗杜斯|介绍|Let me introduce myself.|让我介绍一下自己。|莱特米因特罗杜斯迈塞尔夫
Introduction|/ˌɪntrəˈdʌkʃn/|因特罗达克申|介绍|The introduction was brief.|介绍很简短。|泽因特罗达克申沃兹布利夫
Invade|/ɪnˈveɪd/|因韦德|入侵|The army invaded the country.|军队入侵了这个国家。|泽阿米因韦迪德泽坎特里
Invent|/ɪnˈvent/|因文特|发明|Who invented the telephone?|谁发明了电话？|胡因文蒂德泽泰利丰
Invention|/ɪnˈvenʃn/|因文申|发明|The invention changed the world.|这个发明改变了世界。|泽因文申钱吉德泽沃尔德
Inventor|/ɪnˈventə(r)/|因文特尔|发明家|Edison was a great inventor.|爱迪生是一位伟大的发明家。|爱迪生沃兹阿格雷特因文特尔
Invest|/ɪnˈvest/|因韦斯特|投资|He wants to invest in stocks.|他想投资股票。|希万茨图因韦斯特因斯托克斯
Investigate|/ɪnˈvestɪɡeɪt/|因韦斯蒂盖特|调查|The police will investigate.|警方将调查。|泽波利斯威尔因韦斯蒂盖特
Investment|/ɪnˈvestmənt/|因韦斯特门特|投资|This is a good investment.|这是一个好的投资。|迪斯伊兹阿古德因韦斯特门特
Investor|/ɪnˈvestə(r)/|因韦斯特|投资者|The investor is cautious.|投资者很谨慎。|泽因韦斯特伊兹科舍斯
Invitation|/ˌɪnvɪˈteɪʃn/|因维泰申|邀请|I received an invitation.|我收到了一份邀请。|艾里西夫德安因维泰申
Invite|/ɪnˈvaɪt/|因韦特|邀请|I want to invite you to dinner.|我想邀请你吃晚餐。|艾沃特图因韦特尤图迪纳
Involve|/ɪnˈvɒlv/|因沃尔夫|涉及|The project involves many people.|这个项目涉及很多人。|泽普罗杰克特因沃尔夫兹梅尼皮普尔
Iron|/ˈaɪən/|艾厄n|铁|Iron is a strong metal.|铁是一种坚固的金属。|艾厄n伊兹阿斯特龙梅特尔
Island|/ˈaɪlənd/|艾兰德|岛|Hawaii is a beautiful island.|夏威夷是一个美丽的岛屿。|夏威夷伊兹阿比尤蒂富尔艾兰德
Isolate|/ˈaɪsəleɪt/|艾索莱特|隔离|Don't isolate yourself.|不要孤立自己。|东特艾索莱特尤尔塞尔夫
Issue|/ˈɪʃuː/|伊舒|问题|This is a serious issue.|这是一个严重的问题。|迪斯伊兹阿西里厄斯伊舒
Item|/ˈaɪtəm/|艾特姆|项目|Check each item on the list.|检查清单上的每一项。|切克伊奇艾特姆昂泽利斯特
Its|/ɪts/|伊茨|它的|The cat licked its paw.|猫舔了它的爪子。|泽凯特利克蒂茨波
Itself|/ɪtˈself/|伊特塞尔夫|它自己|The door opened by itself.|门自己打开了。|泽多尔欧彭德拜伊特塞尔夫
Jacket|/ˈdʒækɪt/|杰克特|夹克|Wear a jacket, it's cold.|穿上夹克，天气很冷。|韦尔阿杰克特，伊茨科尔德
Jail|/dʒeɪl/|杰尔|监狱|The criminal was sent to jail.|罪犯被送进了监狱。|泽克里米纳尔沃兹森特图杰尔
Jam|/dʒæm/|杰姆|果酱|I like strawberry jam.|我喜欢草莓果酱。|艾莱克斯特罗伯里杰姆
January|/ˈdʒænjuəri/|贾纽厄里|一月|January is the first month.|一月是第一个月。|贾纽厄里伊兹泽弗斯特曼斯
Japan|/dʒəˈpæn/|贾潘|日本|Japan is an island country.|日本是一个岛国。|贾潘伊兹安艾兰德坎特里
Japanese|/ˌdʒæpəˈniːz/|贾帕尼兹|日本的|Japanese food is delicious.|日本食物很美味。|贾帕尼兹富德伊兹迪利舍斯
Jar|/dʒɑː(r)/|贾尔|罐子|The jar is full of cookies.|罐子里装满了饼干。|泽贾尔伊兹富尔奥夫库基兹
Jazz|/dʒæz/|贾兹|爵士乐|He loves jazz music.|他喜欢爵士乐。|希拉夫兹贾兹缪齐克
Jealous|/ˈdʒeləs/|杰勒斯|嫉妒的|Don't be jealous of others.|不要嫉妒别人。|东特比杰勒斯奥夫阿泽斯
Jeans|/dʒiːnz/|金兹|牛仔裤|I'm wearing blue jeans.|我穿着蓝色牛仔裤。|艾姆韦林布卢金兹
Jet|/dʒet/|杰特|喷气机|The jet flew across the ocean.|喷气机飞越了海洋。|泽杰特弗卢阿克罗斯泽欧申
Jewel|/ˈdʒuːəl/|朱厄尔|宝石|The jewel is very expensive.|这颗宝石很昂贵。|泽朱厄尔伊兹维里伊克斯彭西夫
Jewelry|/ˈdʒuːəlri/|朱厄尔里|珠宝|She loves jewelry.|她喜欢珠宝。|希拉夫兹朱厄尔里
Job|/dʒɒb/|贾布|工作|I have a new job.|我有一份新工作。|艾哈夫阿纽贾布
Join|/dʒɔɪn/|乔因|加入|Will you join us?|你会加入我们吗？|威尔尤乔因阿斯
Joint|/dʒɔɪnt/|乔因特|关节|My knee joint hurts.|我的膝关节疼。|迈尼乔因特赫茨
Joke|/dʒəʊk/|乔克|笑话|He told a funny joke.|他讲了一个有趣的笑话。|希托尔德阿范尼乔克
Journal|/ˈdʒɜːnl/|乔纳尔|期刊|She writes in her journal.|她在日记里写作。|希赖茨因赫尔乔纳尔
Journey|/ˈdʒɜːni/|乔尼|旅程|Have a safe journey!|旅途平安！|哈夫阿塞夫乔尼
Joy|/dʒɔɪ/|乔伊|快乐|The news brought her joy.|这个消息给她带来了快乐。|泽纽斯布罗特赫尔乔伊
Judge|/dʒʌdʒ/|贾奇|法官|The judge made a decision.|法官做出了决定。|泽贾奇梅德阿迪西让
Judgment|/ˈdʒʌdʒmənt/|贾奇门特|判断|Use your own judgment.|用你自己的判断。|尤兹尤尔翁贾奇门特
Juice|/dʒuːs/|朱斯|果汁|I want some orange juice.|我想要一些橙汁。|艾沃特萨姆奥林奇朱斯
July|/dʒuˈlaɪ/|朱莱|七月|July is a hot month.|七月是一个炎热的月份。|朱莱伊兹阿霍特曼斯
Jump|/dʒʌmp/|贾姆普|跳|The cat can jump high.|猫可以跳得很高。|泽凯特坎贾姆普海
June|/dʒuːn/|朱恩|六月|June is the sixth month.|六月是第六个月。|朱恩伊兹泽西克斯斯曼斯
Jungle|/ˈdʒʌŋɡl/|贾格尔|丛林|The jungle is dense.|丛林很茂密。|泽贾格尔伊兹登斯
Junior|/ˈdʒuːniə(r)/|朱尼厄|年少的|He is a junior student.|他是一名低年级学生。|希伊兹阿朱尼厄斯图登特
Jury|/ˈdʒʊəri/|朱里|陪审团|The jury reached a verdict.|陪审团达成了裁决。|泽朱里里奇德阿沃尔迪克特
Just|/dʒʌst/|贾斯特|只是|I just want to help.|我只是想帮忙。|艾贾斯特沃特图赫尔普
Justice|/ˈdʒʌstɪs/|贾斯蒂斯|正义|Justice must be served.|正义必须得到伸张。|贾斯蒂斯马斯比瑟夫德
Keen|/kiːn/|基恩|热衷的|He is keen on sports.|他对运动很热衷。|希伊兹基恩昂斯波茨
Keep|/kiːp/|基普|保持|Keep the door closed.|保持门关闭。|基普泽多尔克洛兹德
Kettle|/ˈketl/|凯特尔|水壶|The kettle is boiling.|水壶正在烧水。|泽凯特尔伊兹博伊林
Key|/kiː/|基|钥匙|I lost my key.|我丢了我的钥匙。|艾洛斯特迈基
Keyboard|/ˈkiːbɔːd/|基博德|键盘|The keyboard is new.|键盘是新的。|泽基博德伊兹纽
Kick|/kɪk/|基克|踢|Don't kick the ball.|不要踢球。|东特基克泽博尔
Kid|/kɪd/|基德|孩子|The kid is playing.|孩子在玩耍。|泽基德伊兹普雷英
Kidney|/ˈkɪdni/|基德尼|肾脏|The kidney filters blood.|肾脏过滤血液。|泽基德尼菲尔特斯布拉德
Kill|/kɪl/|基尔|杀死|Don't kill the spider.|不要杀死蜘蛛。|东特基尔泽斯派德尔
Kilogram|/ˈkɪləɡræm/|基洛格拉姆|千克|One kilogram equals 1000 grams.|一千克等于1000克。|万基洛格拉姆伊奎尔斯万索森德格拉姆兹
Kilometer|/kɪˈlɒmɪtə(r)/|基洛米特尔|千米|The distance is five kilometers.|距离是五千米。|泽迪斯坦斯伊兹法夫基洛米特尔兹
Kind|/kaɪnd/|凯恩德|善良的|She is very kind.|她很善良。|希伊兹维里凯恩德
Kindergarten|/ˈkɪndəɡɑːtn/|金德加登|幼儿园|My son goes to kindergarten.|我的儿子上幼儿园。|迈桑戈兹图金德加登
Kindness|/ˈkaɪndnəs/|凯恩德尼斯|善良|Thank you for your kindness.|谢谢你的善良。|森克尤福尤尔凯恩德尼斯
King|/kɪŋ/|金|国王|The king ruled the kingdom.|国王统治着王国。|泽金鲁尔德泽金德姆
Kingdom|/ˈkɪŋdəm/|金德姆|王国|The kingdom was peaceful.|王国很和平。|泽金德姆沃兹皮斯富尔
Kiss|/kɪs/|基斯|吻|She gave him a kiss.|她给了他一个吻。|希盖夫希姆阿基斯
Kitchen|/ˈkɪtʃɪn/|基钦|厨房|The kitchen is clean.|厨房很干净。|泽基钦伊兹克林
Kite|/kaɪt/|凯特|风筝|The kite is flying high.|风筝飞得很高。|泽凯特伊兹弗莱英海
Knee|/niː/|尼|膝盖|My knee hurts.|我的膝盖疼。|迈尼赫茨
Knife|/naɪf/|奈夫|刀|Use a sharp knife.|用一把锋利的刀。|尤兹阿夏普奈夫
Knight|/naɪt/|奈特|骑士|The knight was brave.|骑士很勇敢。|泽奈特沃兹布雷夫
Knock|/nɒk/|诺克|敲|Knock on the door.|敲门。|诺克昂泽多尔
Know|/nəʊ/|诺|知道|I know the answer.|我知道答案。|艾诺泽安塞尔
Knowledge|/ˈnɒlɪdʒ/|诺利奇|知识|Knowledge is power.|知识就是力量。|诺利奇伊兹帕沃尔
Lab|/læb/|莱布|实验室|The lab is well equipped.|实验室设备齐全。|泽莱布伊兹韦尔伊奎普特
Label|/ˈleɪbl/|莱布尔|标签|Read the label carefully.|仔细阅读标签。|里德泽莱布尔凯尔富利
Laboratory|/ləˈbɒrətri/|拉博拉特里|实验室|She works in a laboratory.|她在实验室工作。|希沃克斯因阿拉博拉特里
Labor|/ˈleɪbə(r)/|莱伯|劳动|Manual labor is hard.|体力劳动很辛苦。|曼纽尔莱伯伊兹哈德
Lack|/læk/|莱克|缺乏|There is a lack of water.|缺水。|泽尔伊兹阿莱克奥夫沃特尔
Ladder|/ˈlædə(r)/|莱德尔|梯子|Climb the ladder carefully.|小心爬梯子。|克莱姆泽莱德尔凯尔富利
Lady|/ˈleɪdi/|莱迪|女士|The lady is waiting.|女士在等待。|泽莱迪伊兹韦廷
Lake|/leɪk/|莱克|湖|The lake is beautiful.|湖很美丽。|泽莱克伊兹比尤蒂富尔
Lamb|/læm/|莱姆|小羊|The lamb is cute.|小羊很可爱。|泽莱姆伊兹克尤特
Lamp|/læmp/|莱姆普|灯|Turn on the lamp.|打开灯。|特恩昂泽莱姆普
Land|/lænd/|兰德|陆地|The plane landed safely.|飞机安全着陆。|泽普莱恩兰迪德塞夫利
Landlord|/ˈlændlɔːd/|兰德洛德|房东|The landlord is nice.|房东很好。|泽兰德洛德伊兹奈斯
Landscape|/ˈlændskeɪp/|兰德斯凯普|风景|The landscape is stunning.|风景令人惊叹。|泽兰德斯凯普伊兹斯坦宁
Lane|/leɪn/|莱恩|车道|Stay in your lane.|保持在你的车道。|斯泰因尤尔莱恩
Language|/ˈlæŋɡwɪdʒ/|兰格威奇|语言|English is a global language.|英语是一种全球语言。|英格利什伊兹阿格洛布尔兰格威奇
Lantern|/ˈlæntən/|兰特恩|灯笼|The lantern glowed brightly.|灯笼明亮地发光。|泽兰特恩格洛德布莱特利
Laptop|/ˈlæptɒp/|莱普托普|笔记本电脑|I bought a new laptop.|我买了一台新笔记本电脑。|艾博特阿纽莱普托普
Large|/lɑːdʒ/|拉奇|大的|The house is large.|房子很大。|泽豪斯伊兹拉奇
Largely|/ˈlɑːdʒli/|拉奇利|主要地|The success was largely due to him.|成功主要归功于他。|泽萨克塞斯沃兹拉奇利杜图希姆
Laser|/ˈleɪzə(r)/|莱泽|激光|Laser technology is advanced.|激光技术很先进。|莱泽泰克诺洛吉伊兹阿德万斯特
Last|/lɑːst/|拉斯特|最后的|This is the last chance.|这是最后的机会。|迪斯伊兹泽拉斯特钱斯
Late|/leɪt/|莱特|迟到的|Don't be late.|不要迟到。|东特比莱特
Lately|/ˈleɪtli/|莱特利|最近|Have you seen him lately?|你最近见过他吗？|哈夫尤辛希姆莱特利
Later|/ˈleɪtə(r)/|莱特尔|后来|See you later.|回头见。|西尤莱特尔
Latin|/ˈlætɪn/|拉丁|拉丁语|Latin is an ancient language.|拉丁语是一种古老的语言。|拉丁伊兹安恩申特兰格威奇
Latter|/ˈlætə(r)/|拉特尔|后者的|I prefer the latter option.|我更喜欢后一个选择。|艾普里弗泽拉特尔奥普申
Laugh|/lɑːf/|拉夫|笑|She laughed at the joke.|她被笑话逗笑了。|希拉夫特阿特泽乔克
Laughter|/ˈlɑːftə(r)/|拉夫特尔|笑声|The room was filled with laughter.|房间里充满了笑声。|泽鲁姆沃兹菲尔德威兹拉夫特尔
Launch|/lɔːntʃ/|劳恩奇|发射|They will launch a new product.|他们将推出新产品。|泽伊威尔劳恩奇阿纽普罗达克特
Laundry|/ˈlɔːndri/|劳恩德里|洗衣|I need to do the laundry.|我需要洗衣服。|艾尼德图杜泽劳恩德里
Law|/lɔː/|洛|法律|Everyone must follow the law.|每个人都必须遵守法律。|埃弗里万马斯法洛泽洛
Lawn|/lɔːn/|洛恩|草坪|The lawn needs mowing.|草坪需要修剪。|泽洛恩尼兹莫英
Lawyer|/ˈlɔːjə(r)/|洛耶|律师|He is a famous lawyer.|他是一位著名的律师。|希伊兹阿费默斯洛耶
Lay|/leɪ/|莱|放置|Lay the book on the table.|把书放在桌子上。|莱泽布克昂泽泰布尔
Layer|/ˈleɪə(r)/|莱厄|层|Add another layer of paint.|再加一层油漆。|阿德安纳泽莱厄奥夫佩因特
Lazy|/ˈleɪzi/|莱齐|懒惰的|Don't be lazy.|不要懒惰。|东特比莱齐
Lead|/liːd/|利德|领导|He will lead the team.|他将领导团队。|希威尔利德泽蒂姆
Leader|/ˈliːdə(r)/|利德尔|领导|He is a natural leader.|他是一位天生的领导者。|希伊兹阿纳彻拉尔利德尔
Leadership|/ˈliːdəʃɪp/|利德尔希普|领导力|Good leadership is essential.|良好的领导力至关重要。|古德利德尔希普伊兹伊森舍尔
Leading|/ˈliːdɪŋ/|利丁|领先的|He is a leading expert.|他是一位领先的专家。|希伊兹阿利丁埃克斯珀特
Leaf|/liːf/|利夫|叶子|The leaf fell from the tree.|叶子从树上掉下来。|泽利夫费尔弗罗姆泽特里
League|/liːɡ/|利格|联盟|They won the league championship.|他们赢得了联盟冠军。|泽伊万泽利格钱皮恩希普
Lean|/liːn/|利恩|倾斜|Don't lean on the glass.|不要靠在玻璃上。|东特利恩昂泽格拉斯
Leap|/liːp/|利普|跳跃|The cat made a leap.|猫做了一个跳跃。|泽凯特梅德阿利普
Learn|/lɜːn/|勒恩|学习|We learn something new every day.|我们每天都学到新东西。|威勒恩萨姆辛纽埃弗里代
Least|/liːst/|利斯特|最少的|At least try your best.|至少尽力而为。|阿特利斯特特莱尤尔贝斯特
Leather|/ˈleðə(r)/|莱泽尔|皮革|The jacket is made of leather.|这件夹克是皮革做的。|泽杰克特伊兹梅德奥夫莱泽尔
Leave|/liːv/|利夫|离开|I will leave tomorrow.|我明天离开。|艾威尔利夫图莫罗
Lecture|/ˈlektʃə(r)/|莱克彻|讲座|The lecture was interesting.|讲座很有趣。|泽莱克彻沃兹因特雷斯廷
Left|/left/|莱夫特|左边的|Turn left at the corner.|在拐角处左转。|特恩莱夫特阿特泽科纳
Leg|/leɡ/|莱格|腿|My leg is tired.|我的腿累了。|迈莱格伊兹泰厄德
Legal|/ˈliːɡl/|利格尔|合法的|Is it legal to do that?|这样做合法吗？|伊兹伊特利格尔图杜泽特
Legend|/ˈledʒənd/|莱金德|传说|The legend is famous.|这个传说很有名。|泽莱金德伊兹费默斯
Legislation|/ˌledʒɪsˈleɪʃn/|莱吉斯莱申|立法|New legislation was passed.|新立法通过了。|纽莱吉斯莱申沃兹帕斯特`;

const lines = wordData.trim().split('\n');
const newWords = lines.map(line => {
    const [word, phonetic, homophone, meaning, sentence, translation, homophoneSentence] = line.split('|');
    return { word, phonetic, homophone, meaning, sentence, translation, homophoneSentence };
});

let data = fs.readFileSync('word-data.js', 'utf8');

const categories = ['greetings', 'emotions', 'numbers', 'colors', 'family', 'time', 'food', 'conversations', 'sentences'];

const existingWords = new Set();
categories.forEach(cat => {
    const regex = new RegExp(`${cat}:\\s*\\[([\\s\\S]*?)\\n    \\]`, 'g');
    const match = regex.exec(data);
    if (match) {
        const words = match[1].match(/word: '([^']+)'/g);
        if (words) {
            words.forEach(w => {
                const word = w.match(/word: '([^']+)'/)[1].toLowerCase();
                existingWords.add(word);
            });
        }
    }
});

let wordsToAdd = newWords.filter(w => !existingWords.has(w.word.toLowerCase()));

const wordsPerCategory = Math.ceil(wordsToAdd.length / categories.length);

categories.forEach((cat, index) => {
    const startIdx = index * wordsPerCategory;
    const endIdx = Math.min(startIdx + wordsPerCategory, wordsToAdd.length);
    const catWords = wordsToAdd.slice(startIdx, endIdx);
    
    if (catWords.length === 0) return;
    
    const wordsString = catWords.map(w => {
        return `        { word: '${w.word}', phonetic: '${w.phonetic}', homophone: '${w.homophone}', meaning: '${w.meaning}', sentence: '${w.sentence}', translation: '${w.translation}', homophoneSentence: '${w.homophoneSentence}' }`;
    }).join(',\n');
    
    const regex = new RegExp(`(${cat}:\\s*\\[)`);
    data = data.replace(regex, `$1\n${wordsString},`);
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Added ${wordsToAdd.length} new words`);
