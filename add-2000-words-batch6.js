const fs = require('fs');

const wordData = `Leisure|/ˈleʒə(r)/|莱泽尔|闲暇|I enjoy leisure time.|我喜欢闲暇时间。|艾恩乔伊莱泽尔泰姆
Lemon|/ˈlemən/|莱蒙|柠檬|Add some lemon to the tea.|在茶里加些柠檬。|阿德萨姆莱蒙图泽蒂
Lend|/lend/|伦德|借出|Can you lend me some money?|你能借我一些钱吗？|坎尤伦德米萨姆马尼
Length|/leŋθ/|伦斯|长度|What is the length of the rope?|绳子的长度是多少？|沃特伊兹泽伦斯奥夫泽罗普
Lens|/lenz/|伦兹|镜头|The camera lens is clean.|相机镜头很干净。|泽卡梅拉伦兹伊兹克林
Less|/les/|莱斯|较少的|I have less time than before.|我的时间比以前少了。|艾哈夫莱斯泰姆森比福
Lesson|/ˈlesn/|莱森|课|The lesson was informative.|这节课很有启发性。|泽莱森沃兹因福梅蒂夫
Lest|/lest/|莱斯特|以免|Be careful lest you fall.|小心以免摔倒。|比凯尔富尔莱斯特尤福尔
Let|/let/|莱特|让|Let me help you.|让我帮你。|莱特米赫尔普尤
Letter|/ˈletə(r)/|莱特尔|信|I wrote a letter to my friend.|我给朋友写了一封信。|艾罗特阿莱特尔图迈弗伦德
Level|/ˈlevl/|莱维尔|水平|The water level is rising.|水位正在上升。|泽沃特尔莱维尔伊兹莱辛
Liberate|/ˈlɪbəreɪt/|利伯雷特|解放|The army liberated the city.|军队解放了这座城市。|泽阿米利伯雷蒂德泽西蒂
Liberty|/ˈlɪbəti/|利伯蒂|自由|Liberty is a fundamental right.|自由是一项基本权利。|利伯蒂伊兹阿凡达门特尔赖特
Library|/ˈlaɪbrəri/|莱布雷里|图书馆|I study at the library.|我在图书馆学习。|艾斯塔迪阿特泽莱布雷里
License|/ˈlaɪsns/|莱森斯|执照|Do you have a driver's license?|你有驾驶执照吗？|杜尤哈夫阿德拉弗斯莱森斯
Lick|/lɪk/|利克|舔|The dog licked my hand.|狗舔了我的手。|泽多格利克特迈汉德
Lid|/lɪd/|利德|盖子|Put the lid on the pot.|把盖子放在锅上。|普特泽利德昂泽波特
Lie|/laɪ/|莱|谎言|Don't tell a lie.|不要说谎。|东特特尔阿莱
Life|/laɪf/|莱夫|生活|Life is beautiful.|生活是美好的。|莱夫伊兹比尤蒂富尔
Lifetime|/ˈlaɪftaɪm/|莱夫泰姆|一生|It was a lifetime experience.|那是一生的经历。|伊特沃兹阿莱夫泰姆伊克斯皮里厄恩斯
Lift|/lɪft/|利夫特|举起|Can you lift this box?|你能举起这个箱子吗？|坎尤利夫特迪斯博克斯
Light|/laɪt/|莱特|光|The light is too bright.|光线太亮了。|泽莱特伊兹图布莱特
Lightning|/ˈlaɪtnɪŋ/|莱特宁|闪电|Lightning struck the tree.|闪电击中了树。|莱特宁斯特拉克泽特里
Like|/laɪk/|莱克|喜欢|I like this song.|我喜欢这首歌。|艾莱克迪斯桑
Likely|/ˈlaɪkli/|莱克利|可能的|It is likely to rain.|很可能会下雨。|伊特伊兹莱克利图雷恩
Likewise|/ˈlaɪkwaɪz/|莱克韦兹|同样地|I feel likewise.|我有同样的感觉。|艾菲尔莱克韦兹
Limb|/lɪm/|利姆|肢体|He injured his limb.|他伤了他的肢体。|希因朱尔德希兹利姆
Limit|/ˈlɪmɪt/|利米特|限制|There is a limit to everything.|万事都有极限。|泽尔伊兹阿利米特图埃弗里辛
Limited|/ˈlɪmɪtɪd/|利米蒂德|有限的|Our resources are limited.|我们的资源是有限的。|阿沃尔里索西斯阿利米蒂德
Line|/laɪn/|莱恩|线|Draw a straight line.|画一条直线。|德罗阿斯特雷特莱恩
Linear|/ˈlɪniə(r)/|利尼厄|线性的|The graph shows linear growth.|图表显示线性增长。|泽格拉夫肖兹利尼厄格罗思
Linen|/ˈlɪnɪn/|利宁|亚麻|The sheets are made of linen.|床单是亚麻做的。|泽希茨阿梅德奥夫利宁
Link|/lɪŋk/|林克|链接|Click the link to continue.|点击链接继续。|克利克泽林克图康蒂纽
Lion|/ˈlaɪən/|莱厄n|狮子|The lion is the king of the jungle.|狮子是丛林之王。|泽莱厄n伊兹泽金奥夫泽贾格尔
Lip|/lɪp/|利普|嘴唇|She has red lips.|她有红嘴唇。|希哈兹雷德利普兹
Liquid|/ˈlɪkwɪd/|利奎德|液体|Water is a liquid.|水是一种液体。|沃特尔伊兹阿利奎德
List|/lɪst/|利斯特|列表|Make a shopping list.|做一个购物清单。|梅克阿肖平利斯特
Listen|/ˈlɪsn/|利森|听|Listen to the music.|听音乐。|利森图泽缪齐克
Literacy|/ˈlɪtərəsi/|利特勒西|识字|Adult literacy is important.|成人识字很重要。|阿达尔特利特勒西伊兹因波特恩特
Literal|/ˈlɪtərəl/|利特勒尔|字面的|The literal meaning is different.|字面意思不同。|泽利特勒尔米宁伊兹迪弗伦特
Literary|/ˈlɪtərəri/|利特勒里|文学的|She has a literary background.|她有文学背景。|希哈兹阿利特勒里贝克格劳恩德
Literature|/ˈlɪtrətʃə(r)/|利特拉彻|文学|I love English literature.|我喜欢英国文学。|艾拉夫英格利什利特拉彻
Litter|/ˈlɪtə(r)/|利特尔|垃圾|Don't drop litter.|不要乱扔垃圾。|东特德罗普利特尔
Little|/ˈlɪtl/|利特尔|小的|I have a little dog.|我有一只小狗。|艾哈夫阿利特尔多格
Live|/lɪv/|利夫|生活|I live in Beijing.|我住在北京。|艾利夫因北京
Lively|/ˈlaɪvli/|莱夫利|活泼的|The party was lively.|聚会很热闹。|泽帕蒂沃兹莱夫利
Liver|/ˈlɪvə(r)/|利弗|肝脏|The liver filters toxins.|肝脏过滤毒素。|泽利弗菲尔特斯托克辛兹
Living|/ˈlɪvɪŋ/|利文|生活的|What do you do for a living?|你靠什么谋生？|沃特杜尤杜福阿利文
Load|/ləʊd/|洛德|负载|The truck carries a heavy load.|卡车运载着重物。|泽特拉克卡里兹阿赫维洛德
Loaf|/ləʊf/|洛夫|面包|I bought a loaf of bread.|我买了一条面包。|艾博特阿洛夫奥夫布雷德
Loan|/ləʊn/|洛恩|贷款|I need a student loan.|我需要学生贷款。|艾尼迪阿斯图登特洛恩
Lobby|/ˈlɒbi/|洛比|大厅|Wait in the lobby.|在大厅等候。|韦特因泽洛比
Local|/ˈləʊkl/|洛克尔|当地的|This is a local restaurant.|这是一家当地餐厅。|迪斯伊兹阿洛克尔雷斯特朗
Locate|/ləʊˈkeɪt/|洛凯特|定位|Can you locate the place?|你能找到这个地方吗？|坎尤洛凯特泽普莱斯
Location|/ləʊˈkeɪʃn/|洛凯申|位置|The location is perfect.|位置完美。|泽洛凯申伊兹珀菲克特
Lock|/lɒk/|洛克|锁|Lock the door before you leave.|离开前锁门。|洛克泽多尔比福尤利夫
Locomotive|/ˌləʊkəˈməʊtɪv/|洛科莫蒂夫|机车|The locomotive pulled the train.|机车拉着火车。|泽洛科莫蒂夫普尔德泽特雷恩
Lodge|/lɒdʒ/|洛奇|小屋|We stayed at a mountain lodge.|我们住在山间小屋。|威斯泰德阿特阿芒廷洛奇
Log|/lɒɡ/|洛格|原木|They cut the log into pieces.|他们把原木切成块。|泽伊卡特泽洛格因图皮西兹
Logic|/ˈlɒdʒɪk/|洛吉克|逻辑|Use logic to solve the problem.|用逻辑解决问题。|尤兹洛吉克图索尔夫泽普罗布勒姆
Logical|/ˈlɒdʒɪkl/|洛吉克尔|合乎逻辑的|That is a logical conclusion.|那是一个合乎逻辑的结论。|泽特伊兹阿洛吉克尔康克卢让
Lonely|/ˈləʊnli/|洛恩利|孤独的|He felt lonely in the city.|他在城市里感到孤独。|希费尔特洛恩利因泽西蒂
Long|/lɒŋ/|龙|长的|The journey was long.|旅程很长。|泽乔尼沃兹龙
Look|/lʊk/|卢克|看|Look at the picture.|看这张图片。|卢克阿特泽皮克彻
Loose|/luːs/|卢斯|松的|The screw is loose.|螺丝松了。|泽斯克卢伊兹卢斯
Lorry|/ˈlɒri/|洛里|卡车|A lorry blocked the road.|一辆卡车挡住了路。|阿洛里布洛克特泽罗德
Lose|/luːz/|卢兹|失去|Don't lose hope.|不要失去希望。|东特卢兹霍普
Loss|/lɒs/|洛斯|损失|The loss was significant.|损失很大。|泽洛斯沃兹西格尼菲肯特
Lost|/lɒst/|洛斯特|丢失的|I lost my keys.|我丢了钥匙。|艾洛斯特迈基兹
Lot|/lɒt/|洛特|很多|I have a lot of work.|我有很多工作。|艾哈夫阿洛特奥夫沃克
Loud|/laʊd/|劳德|大声的|The music is too loud.|音乐太响了。|泽缪齐克伊兹图劳德
Lounge|/laʊndʒ/|劳恩奇|休息室|Wait in the lounge.|在休息室等候。|韦特因泽劳恩奇
Love|/lʌv/|拉夫|爱|I love my family.|我爱我的家人。|艾拉夫迈法米利
Lovely|/ˈlʌvli/|拉夫利|可爱的|What a lovely day!|多美好的一天！|沃特阿拉夫利代
Low|/ləʊ/|洛|低的|The temperature is low.|温度很低。|泽坦普拉彻伊兹洛
Lower|/ˈləʊə(r)/|洛厄|降低|Please lower your voice.|请降低你的声音。|普利斯洛厄尤尔沃伊斯
Loyal|/ˈlɔɪəl/|洛亚尔|忠诚的|He is a loyal friend.|他是一位忠诚的朋友。|希伊兹阿洛亚尔弗伦德
Loyalty|/ˈlɔɪəlti/|洛亚尔蒂|忠诚|Loyalty is important in friendship.|忠诚在友谊中很重要。|洛亚尔蒂伊兹因波特恩特因弗伦德希普
Luck|/lʌk/|拉克|运气|Good luck!|祝你好运！|古德拉克
Lucky|/ˈlʌki/|拉基|幸运的|I am lucky to have you.|我很幸运有你。|艾阿姆拉基图哈夫尤
Luggage|/ˈlʌɡɪdʒ/|拉吉奇|行李|Where is your luggage?|你的行李在哪里？|韦尔伊兹尤尔拉吉奇
Lumber|/ˈlʌmbə(r)/|兰伯|木材|They sell lumber at the store.|他们在商店卖木材。|泽伊塞尔兰伯阿特泽斯托尔
Lunch|/lʌntʃ/|兰奇|午餐|Let's have lunch together.|让我们一起吃午餐。|莱茨哈夫兰奇图格泽泽尔
Lung|/lʌŋ/|兰|肺|Smoking damages the lungs.|吸烟损害肺部。|斯莫金达米吉兹泽兰兹
Luxury|/ˈlʌkʃəri/|拉克舒里|奢侈|The hotel offers luxury rooms.|酒店提供豪华客房。|泽霍特尔奥弗兹拉克舒里鲁姆兹
Machine|/məˈʃiːn/|马申|机器|The machine is broken.|机器坏了。|泽马申伊兹布罗肯
Mad|/mæd/|马德|疯狂的|Are you mad at me?|你在生我的气吗？|阿尤马德阿特米
Magazine|/ˌmæɡəˈziːn/|马加津|杂志|I read a fashion magazine.|我读一本时尚杂志。|艾里德阿法申马加津
Magic|/ˈmædʒɪk/|马吉克|魔法|The show was full of magic.|表演充满了魔法。|泽肖沃兹富尔奥夫马吉克
Magnetic|/mæɡˈnetɪk/|马格内蒂克|磁性的|The magnetic field is strong.|磁场很强。|泽马格内蒂克菲尔德伊兹斯特龙
Magnificent|/mæɡˈnɪfɪsnt/|马格尼菲森特|壮丽的|The view is magnificent.|景色壮丽。|泽维尤伊兹马格尼菲森特
Mail|/meɪl/|梅尔|邮件|I sent the mail yesterday.|我昨天发了邮件。|艾森特泽梅尔耶斯特迪
Main|/meɪn/|梅恩|主要的|This is the main entrance.|这是主要入口。|迪斯伊兹泽梅恩恩特伦斯
Mainland|/ˈmeɪnlænd/|梅恩兰德|大陆|They traveled to the mainland.|他们去了大陆。|泽伊特拉夫尔德图泽梅恩兰德
Mainly|/ˈmeɪnli/|梅恩利|主要地|The book is mainly about history.|这本书主要是关于历史的。|泽布克伊兹梅恩利阿鲍特希斯特里
Maintain|/meɪnˈteɪn/|梅恩泰恩|维持|Maintain a healthy lifestyle.|保持健康的生活方式。|梅恩泰恩阿赫尔西莱夫斯泰尔
Maintenance|/ˈmeɪntənəns/|梅恩特南斯|维护|The car needs maintenance.|汽车需要维护。|泽卡尔尼兹梅恩特南斯
Major|/ˈmeɪdʒə(r)/|梅杰尔|主要的|This is a major problem.|这是一个主要问题。|迪斯伊兹阿梅杰尔普罗布勒姆
Majority|/məˈdʒɒrəti/|马乔里蒂|大多数|The majority agreed.|大多数人同意。|泽马乔里蒂阿格里德
Make|/meɪk/|梅克|制造|Can you make a cake?|你能做蛋糕吗？|坎尤梅克阿凯克
Male|/meɪl/|梅尔|男性的|The male bird is colorful.|雄鸟色彩斑斓。|泽梅尔伯德伊兹卡勒富尔
Mammal|/ˈmæml/|马梅尔|哺乳动物|Humans are mammals.|人类是哺乳动物。|休曼兹阿马梅尔兹
Man|/mæn/|曼|男人|The man is tall.|那个男人很高。|泽曼伊兹托尔
Manage|/ˈmænɪdʒ/|马尼奇|管理|She manages the team well.|她管理团队很好。|希马尼奇兹泽蒂姆韦尔
Management|/ˈmænɪdʒmənt/|马尼奇门特|管理|Good management is essential.|良好的管理至关重要。|古德马尼奇门特伊兹伊森舍尔
Manager|/ˈmænɪdʒə(r)/|马尼杰|经理|The manager is in a meeting.|经理在开会。|泽马尼杰伊兹因阿米廷
Mankind|/mænˈkaɪnd/|曼凯恩德|人类|Mankind has made progress.|人类已经取得了进步。|曼凯恩德哈兹梅德普罗格雷斯
Manner|/ˈmænə(r)/|马纳|方式|He has good manners.|他有良好的举止。|希哈兹古德马纳兹
Manual|/ˈmænjuəl/|曼纽厄尔|手动的|Read the manual first.|先阅读手册。|里德泽曼纽厄尔弗斯特
Manufacture|/ˌmænjuˈfæktʃə(r)/|曼纽法克彻|制造|They manufacture cars here.|他们在这里制造汽车。|泽伊曼纽法克彻卡兹希尔
Manufacturer|/ˌmænjuˈfæktʃərə(r)/|曼纽法克彻拉|制造商|The manufacturer offers a warranty.|制造商提供保修。|泽曼纽法克彻拉奥弗兹阿沃伦蒂
Many|/ˈmeni/|梅尼|许多|How many books do you have?|你有多少本书？|豪梅尼布克斯杜尤哈夫
Map|/mæp/|马普|地图|Look at the map.|看地图。|卢克阿特泽马普
March|/mɑːtʃ/|马奇|三月|March is the third month.|三月是第三个月。|马奇伊兹泽瑟德曼斯
Margin|/ˈmɑːdʒɪn/|马金|边缘|Write in the margin.|在边缘写。|赖特因泽马金
Marine|/məˈriːn/|马林|海洋的|Marine life is diverse.|海洋生物多样化。|马林莱夫伊兹戴弗斯
Mark|/mɑːk/|马克|标记|Put a mark on the page.|在页面上做一个标记。|普特阿马克昂泽佩奇
Market|/ˈmɑːkɪt/|马基特|市场|Let's go to the market.|让我们去市场。|莱茨戈图泽马基特
Marriage|/ˈmærɪdʒ/|马里奇|婚姻|Their marriage is happy.|他们的婚姻很幸福。|泽尔马里奇伊兹哈皮
Marry|/ˈmæri/|马里|结婚|They will marry next year.|他们明年结婚。|泽伊威尔马里内克斯特伊尔
Mars|/mɑːz/|马兹|火星|Mars is a red planet.|火星是一颗红色行星。|马兹伊兹阿雷德普拉尼特
Marvelous|/ˈmɑːvələs/|马沃勒斯|了不起的|What a marvelous idea!|多好的主意！|沃特阿马沃勒斯艾迪厄
Mask|/mɑːsk/|马斯克|面具|Wear a mask for protection.|戴上面具保护自己。|韦尔阿马斯克福普罗泰克申
Mass|/mæs/|马斯|大量|There was a mass of people.|有大量的人。|泽尔沃兹阿马斯奥夫皮普尔
Massive|/ˈmæsɪv/|马西夫|巨大的|The building is massive.|这座建筑巨大。|泽比尔丁伊兹马西夫
Master|/ˈmɑːstə(r)/|马斯特|大师|He is a master of chess.|他是国际象棋大师。|希伊兹阿马斯特奥夫切斯
Mat|/mæt/|马特|垫子|Wipe your feet on the mat.|在垫子上擦脚。|韦普尤尔菲特昂泽马特
Match|/mætʃ/|马奇|比赛|The match was exciting.|比赛很激动人心。|泽马奇沃兹伊克赛廷
Mate|/meɪt/|梅特|伙伴|He is my best mate.|他是我最好的伙伴。|希伊兹迈贝斯特梅特
Material|/məˈtɪəriəl/|马蒂里厄尔|材料|What material is this?|这是什么材料？|沃特马蒂里厄尔伊兹迪斯
Mathematics|/ˌmæθəˈmætɪks/|马瑟马蒂克斯|数学|Mathematics is my favorite subject.|数学是我最喜欢的科目。|马瑟马蒂克斯伊兹迈费弗里特萨布杰克特
Matter|/ˈmætə(r)/|马特尔|事情|What's the matter?|怎么了？|沃茨泽马特尔
Mature|/məˈtʃʊə(r)/|马丘厄|成熟的|He is very mature for his age.|以他的年龄来说他很成熟。|希伊兹维里马丘厄福希兹埃奇
Maximum|/ˈmæksɪməm/|马克西默姆|最大值|What is the maximum speed?|最大速度是多少？|沃特伊兹泽马克西默姆斯皮德
May|/meɪ/|梅|五月|May is a beautiful month.|五月是一个美丽的月份。|梅伊兹阿比尤蒂富尔曼斯
Maybe|/ˈmeɪbi/|梅比|也许|Maybe it will rain tomorrow.|也许明天会下雨。|梅比伊特威尔雷恩图莫罗
Mayor|/meə(r)/|梅厄|市长|The mayor gave a speech.|市长发表了演讲。|泽梅厄盖夫阿斯皮奇
Meal|/miːl/|米尔|餐|We had a delicious meal.|我们吃了一顿美味的饭。|威哈德阿迪利舍斯米尔
Mean|/miːn/|米恩|意思是|What do you mean?|你是什么意思？|沃特杜尤米恩
Meaning|/ˈmiːnɪŋ/|米宁|意思|What is the meaning of this word?|这个词的意思是什么？|沃特伊兹泽米宁奥夫迪斯沃德
Means|/miːnz/|米恩兹|手段|This is a means of transport.|这是一种交通方式。|迪斯伊兹阿米恩兹奥夫特兰斯波特
Meantime|/ˈmiːntaɪm/|米恩泰姆|同时|In the meantime, wait here.|同时，在这里等。|因泽米恩泰姆，韦特希尔
Meanwhile|/ˈmiːnwaɪl/|米恩韦尔|同时|Meanwhile, let's eat.|同时，让我们吃饭。|米恩韦尔，莱茨伊特
Measure|/ˈmeʒə(r)/|梅泽尔|测量|Measure the room first.|先测量房间。|梅泽尔泽鲁姆弗斯特
Measurement|/ˈmeʒəmənt/|梅泽门特|测量|The measurement is accurate.|测量准确。|泽梅泽门特伊兹阿克尤雷特
Meat|/miːt/|米特|肉|I don't eat meat.|我不吃肉。|艾东特伊特米特
Mechanic|/məˈkænɪk/|梅卡尼克|技工|The mechanic fixed the car.|技工修好了车。|泽梅卡尼克菲克斯特泽卡尔
Mechanical|/məˈkænɪkl/|梅卡尼克尔|机械的|The mechanical system failed.|机械系统失败了。|泽梅卡尼克尔西斯特姆费尔德
Medal|/ˈmedl/|梅德尔|奖章|He won a gold medal.|他赢得了一枚金牌。|希万阿戈尔德梅德尔
Media|/ˈmiːdiə/|米迪厄|媒体|The media reported the news.|媒体报道了这条新闻。|泽米迪厄里波蒂德泽纽斯
Medical|/ˈmedɪkl/|梅迪克尔|医学的|He needs medical attention.|他需要医疗关注。|希尼兹梅迪克尔阿滕申
Medicine|/ˈmedsn/|梅德森|药|Take your medicine.|吃你的药。|泰克尤尔梅德森
Medium|/ˈmiːdiəm/|米迪厄姆|中等的|I want a medium size.|我要中号。|艾沃特阿米迪厄姆赛兹
Meet|/miːt/|米特|见面|Let's meet tomorrow.|我们明天见面。|莱茨米特图莫罗
Meeting|/ˈmiːtɪŋ/|米廷|会议|The meeting was productive.|会议很有成效。|泽米廷沃兹普罗达克蒂夫
Melon|/ˈmelən/|梅伦|瓜|I like watermelon.|我喜欢西瓜。|艾莱克沃特梅伦
Melt|/melt/|梅尔特|融化|The ice will melt soon.|冰很快就会融化。|泽艾斯威尔梅尔特松
Member|/ˈmembə(r)/|成员|成员|He is a member of the club.|他是俱乐部的成员。|希伊兹阿成员奥夫泽克拉布
Membership|/ˈmembəʃɪp/|成员希普|会员资格|The membership fee is reasonable.|会员费合理。|泽成员希普菲伊兹里佐纳布尔
Memorial|/məˈmɔːriəl/|梅莫里厄尔|纪念的|They built a memorial.|他们建了一个纪念碑。|泽伊比尔特阿梅莫里厄尔
Memory|/ˈmeməri/|梅默里|记忆|I have a good memory.|我有很好的记忆力。|艾哈夫阿古德梅默里
Mental|/ˈmentl/|门特尔|精神的|Mental health is important.|心理健康很重要。|门特尔赫尔思伊兹因波特恩特
Mention|/ˈmenʃn/|门申|提到|Don't mention it.|不用谢。|东特门申伊特
Menu|/ˈmenjuː/|梅纽|菜单|Check the menu first.|先看菜单。|切克泽梅纽弗斯特
Merchant|/ˈmɜːtʃənt/|默钱特|商人|The merchant sold spices.|商人卖香料。|泽默钱特索尔德斯派西斯
Mercy|/ˈmɜːsi/|默西|仁慈|Have mercy on me.|对我仁慈一点。|哈夫默西安米
Mere|/mɪə(r)/|米尔|仅仅的|It was a mere coincidence.|那只是巧合。|伊特沃兹阿米尔科因西登斯
Merely|/ˈmɪəli/|米尔利|仅仅|I merely suggested it.|我只是建议了一下。|艾米尔利萨杰斯泰迪特
Merge|/mɜːdʒ/|默奇|合并|The two companies merged.|两家公司合并了。|泽图康帕尼兹默奇德
Merit|/ˈmerɪt/|梅里特|优点|The plan has some merit.|这个计划有一些优点。|泽普兰哈兹萨姆梅里特
Merry|/ˈmeri/|梅里|快乐的|Merry Christmas!|圣诞快乐！|梅里克里斯马斯
Mess|/mes/|梅斯|混乱|The room is a mess.|房间很乱。|泽鲁姆伊兹阿梅斯
Message|/ˈmesɪdʒ/|梅西奇|消息|I received your message.|我收到了你的消息。|艾里西夫德尤尔梅西奇
Metal|/ˈmetl/|梅特尔|金属|Gold is a precious metal.|金是一种贵金属。|戈尔德伊兹阿普雷舍斯梅特尔
Meter|/ˈmiːtə(r)/|米特尔|米|The room is five meters long.|房间有五米长。|泽鲁姆伊兹法夫米特尔兹龙
Method|/ˈmeθəd/|梅泽德|方法|This method works well.|这个方法很有效。|迪斯梅泽德沃克斯韦尔
Middle|/ˈmɪdl/|米德尔|中间|The middle of the road.|路的中间。|泽米德尔奥夫泽罗德
Midnight|/ˈmɪdnaɪt/|米德奈特|午夜|We arrived at midnight.|我们在午夜到达。|威阿莱夫德阿特米德奈特
Might|/maɪt/|迈特|可能|It might rain today.|今天可能会下雨。|伊特迈特雷恩图代
Mild|/maɪld/|迈尔德|温和的|The weather is mild today.|今天天气温和。|泽韦泽伊兹迈尔德图代
Mile|/maɪl/|迈尔|英里|We walked for miles.|我们走了几英里。|威沃克特福迈尔兹
Military|/ˈmɪlətri/|米利特里|军事的|He has a military background.|他有军事背景。|希哈兹阿米利特里贝克格劳恩德
Milk|/mɪlk/|米尔克|牛奶|I drink milk every morning.|我每天早上喝牛奶。|艾德林克米尔克埃弗里莫宁
Mill|/mɪl/|米尔|磨坊|The old mill is still standing.|老磨坊仍然矗立着。|泽欧尔德米尔伊兹斯蒂尔斯坦丁
Million|/ˈmɪljən/|米利恩|百万|Millions of people watched.|数百万人观看。|米利恩兹奥夫皮普尔沃奇德
Mind|/maɪnd/|迈恩德|头脑|Keep an open mind.|保持开放的心态。|基普安欧彭迈恩德
Mine|/maɪn/|迈恩|我的|This book is mine.|这本书是我的。|迪斯布克伊兹迈恩
Mineral|/ˈmɪnrəl/|米内拉尔|矿物|Mineral water is healthy.|矿泉水很健康。|米内拉尔沃特尔伊兹赫尔西
Minimum|/ˈmɪnɪməm/|米尼默姆|最小值|What is the minimum age?|最小年龄是多少？|沃特伊兹泽米尼默姆埃奇
Minister|/ˈmɪnɪstə(r)/|米尼斯特|部长|The minister gave a speech.|部长发表了演讲。|泽米尼斯特盖夫阿斯皮奇
Ministry|/ˈmɪnɪstri/|米尼斯特里|部|The Ministry of Education.|教育部。|泽米尼斯特里奥夫教育
Minor|/ˈmaɪnə(r)/|迈纳|次要的|This is a minor issue.|这是一个次要问题。|迪斯伊兹阿迈纳伊舒
Minority|/maɪˈnɒrəti/|迈诺里蒂|少数|The minority opposed the plan.|少数人反对这个计划。|泽迈诺里蒂阿波兹德泽普兰
Minute|/ˈmɪnɪt/|米尼特|分钟|Wait a minute, please.|请等一下。|韦特阿米尼特，普利斯
Miracle|/ˈmɪrəkl/|米拉克尔|奇迹|It was a miracle.|这是一个奇迹。|伊特沃兹阿米拉克尔
Mirror|/ˈmɪrə(r)/|米勒|镜子|Look in the mirror.|照镜子。|卢克因泽米勒
Miserable|/ˈmɪzrəbl/|米泽拉布尔|悲惨的|He felt miserable.|他感到悲惨。|希费尔特米泽拉布尔
Mislead|/mɪsˈliːd/|米斯利德|误导|Don't mislead the public.|不要误导公众。|东特米斯利德泽帕布利克
Miss|/mɪs/|米斯|想念|I miss my family.|我想念我的家人。|艾米斯迈法米利
Missile|/ˈmɪsaɪl/|米塞尔|导弹|The missile was launched.|导弹被发射了。|泽米塞尔沃兹劳恩奇德
Missing|/ˈmɪsɪŋ/|米辛|失踪的|The child is missing.|孩子失踪了。|泽柴尔德伊兹米辛
Mission|/ˈmɪʃn/|米申|任务|The mission was successful.|任务成功了。|泽米申沃兹萨克塞斯富尔
Mistake|/mɪˈsteɪk/|米斯特克|错误|Everyone makes mistakes.|每个人都会犯错。|埃弗里万梅克斯米斯特克斯
Mister|/ˈmɪstə(r)/|米斯特|先生|Mister Smith is here.|史密斯先生在这里。|米斯特史密斯伊兹希尔
Mistress|/ˈmɪstrəs/|米斯特雷斯|女主人|The mistress of the house.|房子的女主人。|泽米斯特雷斯奥夫泽豪斯
Misunderstand|/ˌmɪsʌndəˈstænd/|米桑德斯坦德|误解|Don't misunderstand me.|不要误解我。|东特米桑德斯坦德米
Mix|/mɪks/|米克斯|混合|Mix the ingredients well.|把配料混合好。|米克斯泽因格里迪恩茨韦尔
Mixture|/ˈmɪkstʃə(r)/|米克斯彻|混合物|The mixture is ready.|混合物准备好了。|泽米克斯彻伊兹雷迪
Mobile|/ˈməʊbaɪl/|莫贝尔|移动的|Mobile phones are common.|移动电话很常见。|莫贝尔丰兹阿卡蒙
Mode|/məʊd/|莫德|模式|Use silent mode.|使用静音模式。|尤兹赛伦特莫德
Model|/ˈmɒdl/|莫德尔|模型|She is a fashion model.|她是一名时装模特。|希伊兹阿法申莫德尔
Moderate|/ˈmɒdərət/|莫德拉特|适度的|Keep a moderate pace.|保持适度的速度。|基普阿莫德拉特佩斯
Modern|/ˈmɒdn/|莫登|现代的|This is a modern building.|这是一座现代建筑。|迪斯伊兹阿莫登比尔丁
Modest|/ˈmɒdɪst/|莫迪斯特|谦虚的|He is very modest.|他很谦虚。|希伊兹维里莫迪斯特
Modify|/ˈmɒdɪfaɪ/|莫迪法伊|修改|We need to modify the plan.|我们需要修改计划。|威尼德图莫迪法伊泽普兰
Moist|/mɔɪst/|莫伊斯特|潮湿的|The soil is moist.|土壤很潮湿。|泽索伊尔伊兹莫伊斯特
Molecule|/ˈmɒlɪkjuːl/|莫利克尤尔|分子|A molecule is very small.|分子很小。|阿莫利克尤尔伊兹维里斯莫尔
Moment|/ˈməʊmənt/|莫门特|时刻|Wait a moment.|等一下。|韦特阿莫门特
Monday|/ˈmʌndeɪ/|曼代|星期一|Monday is the first day of the week.|星期一是一周的第一天。|曼代伊兹泽弗斯特代奥夫泽威克
Money|/ˈmʌni/|马尼|钱|Money is not everything.|钱不是一切。|马尼伊兹诺特埃弗里辛
Monitor|/ˈmɒnɪtə(r)/|莫尼特尔|监视器|The monitor shows the data.|监视器显示数据。|泽莫尼特尔肖兹泽代塔
Monk|/mʌŋk/|蒙克|和尚|The monk lives in the temple.|和尚住在寺庙里。|泽蒙克利夫兹因泽坦普尔
Monkey|/ˈmʌŋki/|蒙基|猴子|The monkey is eating a banana.|猴子在吃香蕉。|泽蒙基伊兹伊廷阿巴纳纳
Monster|/ˈmɒnstə(r)/|蒙斯特|怪物|The monster was scary.|怪物很可怕。|泽蒙斯特沃兹斯凯里
Month|/mʌnθ/|曼斯|月|This month is busy.|这个月很忙。|迪斯曼斯伊兹比齐
Monument|/ˈmɒnjumənt/|蒙尤门特|纪念碑|The monument is ancient.|纪念碑很古老。|泽蒙尤门特伊兹恩申特
Mood|/muːd/|穆德|心情|I am in a good mood.|我心情很好。|艾阿姆因阿古德穆德
Moon|/muːn/|穆恩|月亮|The moon is bright tonight.|今晚月亮很亮。|泽穆恩伊兹布莱特图奈特
Moral|/ˈmɒrəl/|莫拉尔|道德的|This is a moral issue.|这是一个道德问题。|迪斯伊兹阿莫拉尔伊舒
More|/mɔː(r)/|莫尔|更多|I need more time.|我需要更多时间。|艾尼迪莫尔泰姆
Morning|/ˈmɔːnɪŋ/|莫宁|早晨|Good morning!|早上好！|古德莫宁
Mosquito|/məˈskiːtəʊ/|莫斯基托|蚊子|The mosquito bit me.|蚊子咬了我。|泽莫斯基托比特米
Most|/məʊst/|莫斯特|最|This is the most important thing.|这是最重要的事情。|迪斯伊兹泽莫斯特因波特恩特辛
Mother|/ˈmʌðə(r)/|马泽|母亲|My mother is a teacher.|我的母亲是一名教师。|迈马泽伊兹阿蒂彻
Motion|/ˈməʊʃn/|莫申|运动|The motion was approved.|动议被批准了。|泽莫申沃兹阿普鲁夫德
Motor|/ˈməʊtə(r)/|莫特尔|马达|The motor is not working.|马达不工作了。|泽莫特尔伊兹诺特沃金
Motorcycle|/ˈməʊtəsaɪkl/|莫特赛克尔|摩托车|He rides a motorcycle.|他骑摩托车。|希雷兹阿莫特赛克尔
Mountain|/ˈmaʊntən/|芒廷|山|The mountain is high.|山很高。|泽芒廷伊兹海
Mouse|/maʊs/|莫斯|老鼠|The mouse ran away.|老鼠跑了。|泽莫斯兰阿韦
Mouth|/maʊθ/|莫斯|嘴|Open your mouth.|张开嘴。|欧彭尤尔莫斯
Move|/muːv/|穆夫|移动|Don't move!|不要动！|东特穆夫
Movement|/ˈmuːvmənt/|穆夫门特|运动|The movement is growing.|运动正在发展。|泽穆夫门特伊兹格罗英
Movie|/ˈmuːvi/|穆维|电影|Let's watch a movie.|让我们看一部电影。|莱茨沃奇阿穆维
Much|/mʌtʃ/|马奇|很多|How much does it cost?|多少钱？|豪马奇达兹伊特科斯特
Mud|/mʌd/|马德|泥|My shoes are covered in mud.|我的鞋上沾满了泥。|迈舒兹阿卡弗德因马德
Multiply|/ˈmʌltɪplaɪ/|马尔特普莱|乘|Multiply five by three.|五乘以三。|马尔特普莱法夫拜斯里
Multiple|/ˈmʌltɪpl/|马尔特普尔|多个的|There are multiple options.|有多个选择。|泽尔阿马尔特普尔奥普申兹
Municipal|/mjuːˈnɪsɪpl/|缪尼西普尔|市政的|The municipal government.|市政府。|泽缪尼西普尔加文门特
Murder|/ˈmɜːdə(r)/|默德尔|谋杀|The murder was investigated.|谋杀案被调查了。|泽默德尔沃兹因韦斯蒂盖蒂德
Muscle|/ˈmʌsl/|马斯尔|肌肉|Exercise builds muscle.|锻炼可以增强肌肉。|埃克瑟赛兹比尔德兹马斯尔
Museum|/mjuˈziːəm/|缪齐厄姆|博物馆|We visited the museum.|我们参观了博物馆。|威维西蒂德泽缪齐厄姆
Mushroom|/ˈmʌʃrʊm/|马什鲁姆|蘑菇|I like eating mushrooms.|我喜欢吃蘑菇。|艾莱克伊廷马什鲁姆兹
Music|/ˈmjuːzɪk/|缪齐克|音乐|I love music.|我喜欢音乐。|艾拉夫缪齐克
Musical|/ˈmjuːzɪkl/|缪齐克尔|音乐的|She has musical talent.|她有音乐天赋。|希哈兹缪齐克尔塔伦特
Musician|/mjuˈzɪʃn/|缪齐申|音乐家|He is a famous musician.|他是一位著名的音乐家。|希伊兹阿费默斯缪齐申
Muslim|/ˈmʊzlɪm/|穆斯林姆|穆斯林|Many Muslims live here.|许多穆斯林住在这里。|梅尼穆斯林姆兹利夫希尔
Must|/mʌst/|马斯特|必须|You must study hard.|你必须努力学习。|尤马斯特斯塔迪哈德
Mutual|/ˈmjuːtʃuəl/|缪丘厄尔|相互的|We have mutual respect.|我们相互尊重。|威哈夫缪丘厄尔里斯佩克特
Mystery|/ˈmɪstri/|米斯特里|谜|The mystery was solved.|谜被解开了。|泽米斯特里沃兹索尔夫德
Myth|/mɪθ/|米斯|神话|Greek myths are famous.|希腊神话很有名。|格里克米西斯阿费默斯`;

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
