const fs = require('fs');

const wordData = `Galaxy|/ˈɡæləksi/|加拉克西|银河|The galaxy is vast.|银河系很广阔。|泽加拉克西伊兹瓦斯特
Gallery|/ˈɡæləri/|加勒里|画廊|We visited the art gallery.|我们参观了艺术画廊。|威维西蒂德泽阿特加勒里
Game|/ɡeɪm/|盖姆|游戏|Let's play a game.|让我们玩个游戏。|莱茨普雷阿盖姆
Gap|/ɡæp/|盖普|缺口|There is a gap in the fence.|篱笆上有个缺口。|泽尔伊兹阿盖普因泽芬斯
Garage|/ˈɡærɑːʒ/|加拉日|车库|The car is in the garage.|车在车库里。|泽卡尔伊兹因泽加拉日
Garden|/ˈɡɑːdn/|加登|花园|The garden is beautiful.|花园很美丽。|泽加登伊兹比尤蒂富尔
Garlic|/ˈɡɑːlɪk/|加利克|大蒜|Add some garlic to the dish.|在菜里加些大蒜。|阿德萨姆加利克图泽迪什
Gas|/ɡæs/|加斯|气体|Natural gas is a fuel.|天然气是一种燃料。|纳彻拉尔加斯伊兹阿菲尤尔
Gate|/ɡeɪt/|盖特|大门|The gate is open.|大门开着。|泽盖特伊兹欧彭
Gather|/ˈɡæðə(r)/|加泽尔|聚集|People gather in the square.|人们聚集在广场上。|皮普尔加泽尔因泽斯克韦尔
General|/ˈdʒenrəl/|杰内拉尔|一般的|This is a general rule.|这是一般规则。|迪斯伊兹阿杰内拉尔鲁尔
Generate|/ˈdʒenəreɪt/|杰内雷特|生成|The machine generates power.|机器产生动力。|泽马申杰内雷茨帕沃尔
Generation|/ˌdʒenəˈreɪʃn/|杰内雷申|一代|The new generation is different.|新一代不同。|泽纽杰内雷申伊兹迪弗伦特
Generator|/ˈdʒenəreɪtə(r)/|杰内雷特尔|发电机|The generator provides electricity.|发电机提供电力。|泽杰内雷特尔普拉维兹伊莱克特里西蒂
Generous|/ˈdʒenərəs/|杰内勒斯|慷慨的|He is very generous.|他很慷慨。|希伊兹维里杰内勒斯
Genius|/ˈdʒiːniəs/|吉尼厄斯|天才|Einstein was a genius.|爱因斯坦是个天才。|爱因斯坦沃兹阿吉尼厄斯
Gentle|/ˈdʒentl/|杰特尔|温柔的|She has a gentle voice.|她有温柔的声音。|希哈兹阿杰特尔沃伊斯
Gentleman|/ˈdʒentlmən/|杰特尔曼|绅士|He is a true gentleman.|他是个真正的绅士。|希伊兹阿特鲁杰特尔曼
Genuine|/ˈdʒenjuɪn/|杰纽因|真正的|This is a genuine diamond.|这是真正的钻石。|迪斯伊兹阿杰纽因戴蒙德
Geography|/dʒiˈɒɡrəfi/|吉奥格雷菲|地理|I study geography at school.|我在学校学地理。|艾斯塔迪吉奥格雷菲阿特斯库尔
Geology|/dʒiˈɒlədʒi/|吉奥洛吉|地质学|Geology studies the earth.|地质学研究地球。|吉奥洛吉斯塔迪兹泽厄斯
Geometry|/dʒiˈɒmətri/|吉奥米特里|几何|Geometry is about shapes.|几何是关于形状的。|吉奥米特里伊兹阿鲍特谢普斯
Gesture|/ˈdʒestʃə(r)/|杰斯彻|手势|He made a gesture with his hand.|他用手做了一个手势。|希梅德阿杰斯彻威兹希兹汉德
Ghost|/ɡəʊst/|戈斯特|鬼|The ghost story is scary.|鬼故事很吓人。|泽戈斯特斯托里伊兹斯凯里
Giant|/ˈdʒaɪənt/|贾恩特|巨人|The giant was very tall.|巨人很高。|泽贾恩特沃兹维里托尔
Gift|/ɡɪft/|吉夫特|礼物|I received a gift.|我收到了一份礼物。|艾里西夫德阿吉夫特
Gigantic|/dʒaɪˈɡæntɪk/|贾甘蒂克|巨大的|The building is gigantic.|这座建筑巨大。|泽比尔丁伊兹贾甘蒂克
Girl|/ɡɜːl/|格尔|女孩|The girl is playing.|女孩在玩耍。|泽格尔伊兹普雷英
Give|/ɡɪv/|吉夫|给|Please give me the book.|请把书给我。|普利斯吉夫米泽布克
Glad|/ɡlæd/|格拉德|高兴的|I am glad to see you.|我很高兴见到你。|艾阿姆格拉德图西尤
Glance|/ɡlɑːns/|格兰斯|一瞥|He took a glance at her.|他看了她一眼。|希图克阿格兰斯阿特赫尔
Glass|/ɡlɑːs/|格拉斯|玻璃|The glass is broken.|玻璃碎了。|泽格拉斯伊兹布罗肯
Global|/ˈɡləʊbl/|格洛布尔|全球的|This is a global issue.|这是一个全球性问题。|迪斯伊兹阿格洛布尔伊舒
Globe|/ɡləʊb/|格洛布|地球仪|The globe shows the world.|地球仪展示世界。|泽格洛布肖兹泽沃尔德
Glory|/ˈɡlɔːri/|格洛里|荣耀|The team won glory.|团队赢得了荣耀。|泽蒂姆万格洛里
Glove|/ɡlʌv/|格拉夫|手套|Put on your gloves.|戴上你的手套。|普特昂尤尔格拉夫兹
Goal|/ɡəʊl/|戈尔|目标|He achieved his goal.|他实现了他的目标。|希阿奇夫德希兹戈尔
Goat|/ɡəʊt/|戈特|山羊|The goat is eating grass.|山羊在吃草。|泽戈特伊兹伊廷格拉斯
God|/ɡɒd/|戈德|上帝|They pray to God.|他们向上帝祈祷。|泽伊普雷图戈德
Gold|/ɡəʊld/|戈尔德|金|Gold is a precious metal.|金是贵金属。|戈尔德伊兹阿普雷舍斯梅特尔
Golden|/ˈɡəʊldən/|戈尔登|金色的|The golden sun is shining.|金色的太阳在照耀。|泽戈尔登桑伊兹夏宁
Golf|/ɡɒlf/|戈尔夫|高尔夫|He plays golf every weekend.|他每个周末打高尔夫。|希普雷兹戈尔夫埃弗里威肯德
Good|/ɡʊd/|古德|好的|This is a good book.|这是一本好书。|迪斯伊兹阿古德布克
Goods|/ɡʊdz/|古兹|商品|The goods arrived today.|商品今天到了。|泽古兹阿莱夫德图代
Goose|/ɡuːs/|古斯|鹅|The goose is swimming.|鹅在游泳。|泽古斯伊兹斯威明
Govern|/ˈɡʌvn/|加文|统治|The king governs the country.|国王统治这个国家。|泽金加文兹泽坎特里
Government|/ˈɡʌvnmənt/|加文门特|政府|The government makes laws.|政府制定法律。|泽加文门特梅克斯洛兹
Governor|/ˈɡʌvənə(r)/|加文纳|州长|The governor gave a speech.|州长发表了演讲。|泽加文纳盖夫阿斯皮奇
Grace|/ɡreɪs/|格雷斯|优雅|She dances with grace.|她优雅地跳舞。|希丹西斯威兹格雷斯
Grade|/ɡreɪd/|格雷德|年级|I am in fifth grade.|我在五年级。|艾阿姆因菲夫斯格雷德
Gradually|/ˈɡrædʒuəli/|格雷朱利|逐渐地|The weather changed gradually.|天气逐渐变化。|泽韦泽钱吉德格雷朱利
Graduate|/ˈɡrædʒuət/|格雷朱厄特|毕业生|She is a college graduate.|她是大学毕业生。|希伊兹阿科利奇格雷朱厄特
Grain|/ɡreɪn/|格雷恩|谷物|Farmers grow grain.|农民种植谷物。|法默兹格罗格雷恩
Grammar|/ˈɡræmə(r)/|格拉默|语法|English grammar is important.|英语语法很重要。|英格利什格拉默伊兹因波特恩特
Grand|/ɡrænd/|格兰德|宏伟的|The palace is grand.|宫殿很宏伟。|泽帕利斯伊兹格兰德
Grandchild|/ˈɡræntʃaɪld/|格兰德柴尔德|孙辈|She loves her grandchild.|她爱她的孙辈。|希拉夫兹赫尔格兰德柴尔德
Granddaughter|/ˈɡrændɔːtə(r)/|格兰德多特尔|孙女|His granddaughter is cute.|他的孙女很可爱。|希兹格兰德多特尔伊兹克尤特
Grandfather|/ˈɡrænfɑːðə(r)/|格兰德法泽|祖父|My grandfather is old.|我的祖父老了。|迈格兰德法泽伊兹欧尔德
Grandmother|/ˈɡrænmʌðə(r)/|格兰德马泽|祖母|My grandmother cooks well.|我的祖母做饭很好。|迈格兰德马泽库克斯韦尔
Grandson|/ˈɡrænsʌn/|格兰德桑|孙子|The grandson is playing.|孙子在玩耍。|泽格兰德桑伊兹普雷英
Grant|/ɡrɑːnt/|格兰特|授予|The university granted him a degree.|大学授予他学位。|泽尤尼韦西蒂格兰蒂德希姆阿迪格里
Grape|/ɡreɪp/|格雷普|葡萄|I like eating grapes.|我喜欢吃葡萄。|艾莱克伊廷格雷普兹
Graph|/ɡræf/|格拉夫|图表|The graph shows the trend.|图表显示趋势。|泽格拉夫肖兹泽特伦德
Grasp|/ɡrɑːsp/|格拉斯普|抓住|He grasped the rope.|他抓住了绳子。|希格拉斯普德泽罗普
Grass|/ɡrɑːs/|格拉斯|草|The grass is green.|草是绿色的。|泽格拉斯伊兹格林
Grateful|/ˈɡreɪtfl/|格雷特富尔|感激的|I am grateful for your help.|我感激你的帮助。|艾阿姆格雷特富尔福尤尔赫尔普
Grave|/ɡreɪv/|格雷夫|坟墓|They visited the grave.|他们参观了坟墓。|泽伊维西蒂德泽格雷夫
Gravity|/ˈɡrævəti/|格拉维蒂|重力|Gravity keeps us on the ground.|重力让我们保持在地面。|格拉维蒂基普斯阿斯昂泽格劳恩德
Gray|/ɡreɪ/|格雷|灰色|The sky is gray today.|今天天空是灰色的。|泽斯凯伊兹格雷图代
Great|/ɡreɪt/|格雷特|伟大的|He is a great leader.|他是一位伟大的领袖。|希伊兹阿格雷特利德尔
Greedy|/ˈɡriːdi/|格里迪|贪婪的|The greedy man wants more.|贪婪的人想要更多。|泽格里迪曼万茨莫尔
Green|/ɡriːn/|格林|绿色|The leaves are green.|叶子是绿色的。|泽利夫兹阿格林
Greet|/ɡriːt/|格里特|问候|She greeted me warmly.|她热情地问候我。|希格里蒂德米沃姆利
Grey|/ɡreɪ/|格雷|灰色|His hair is grey.|他的头发是灰色的。|希兹海尔伊兹格雷
Grid|/ɡrɪd/|格里德|网格|The city has a grid layout.|城市有网格布局。|泽西蒂哈兹阿格里德雷奥特
Grief|/ɡriːf/|格里夫|悲伤|She felt deep grief.|她感到深深的悲伤。|希费尔特迪普格里夫
Grill|/ɡrɪl/|格里尔|烤架|Cook the meat on the grill.|在烤架上烤肉。|库克泽米特昂泽格里尔
Grin|/ɡrɪn/|格林|咧嘴笑|He gave a big grin.|他咧嘴大笑。|希盖夫阿比格林
Grind|/ɡraɪnd/|格兰德|磨碎|Grind the coffee beans.|磨碎咖啡豆。|格兰德泽科菲宾兹
Grip|/ɡrɪp/|格里普|紧握|He has a strong grip.|他有很强的握力。|希哈兹阿斯特龙格里普
Grocery|/ˈɡrəʊsəri/|格罗瑟里|杂货|I need to buy groceries.|我需要买杂货。|艾尼德图拜格罗瑟里兹
Ground|/ɡraʊnd/|格劳恩德|地面|The ball is on the ground.|球在地上。|泽博尔伊兹昂泽格劳恩德
Group|/ɡruːp/|格鲁普|组|We work in groups.|我们分组工作。|威沃克因格鲁普兹
Grow|/ɡrəʊ/|格罗|生长|Plants grow in spring.|植物在春天生长。|普兰茨格罗因斯普林
Growth|/ɡrəʊθ/|格罗思|增长|The economy shows growth.|经济显示增长。|泽伊科诺米肖兹格罗思
Guarantee|/ˌɡærənˈtiː/|加兰蒂|保证|I guarantee the quality.|我保证质量。|艾加兰蒂泽夸利蒂
Guard|/ɡɑːd/|加德|守卫|The guard is at the door.|守卫在门口。|泽加德伊兹阿特泽多尔
Guess|/ɡes/|格斯|猜测|Can you guess the answer?|你能猜出答案吗？|坎尤格斯泽安塞尔
Guest|/ɡest/|格斯特|客人|We have a guest today.|我们今天有客人。|威哈夫阿格斯特图代
Guide|/ɡaɪd/|盖德|向导|The guide showed us around.|向导带我们四处参观。|泽盖德肖德阿斯阿劳恩德
Guideline|/ˈɡaɪdlaɪn/|盖德拉因|指导方针|Follow the guidelines.|遵循指导方针。|法洛泽盖德拉因兹
Guilty|/ˈɡɪlti/|吉尔蒂|有罪的|He felt guilty about it.|他对此感到内疚。|希费尔特吉尔蒂阿鲍特伊特
Guitar|/ɡɪˈtɑː(r)/|吉塔尔|吉他|She plays the guitar.|她弹吉他。|希普雷兹泽吉塔尔
Gulf|/ɡʌlf/|加尔夫|海湾|The Gulf is beautiful.|海湾很美丽。|泽加尔夫伊兹比尤蒂富尔
Gum|/ɡʌm/|加姆|口香糖|He is chewing gum.|他在嚼口香糖。|希伊兹丘英加姆
Gun|/ɡʌn/|甘|枪|The soldier has a gun.|士兵有一把枪。|泽索尔杰哈兹阿甘
Gym|/dʒɪm/|吉姆|健身房|I go to the gym daily.|我每天去健身房。|艾戈图泽吉姆代利
Habit|/ˈhæbɪt/|哈比特|习惯|Good habits are important.|好习惯很重要。|古德哈比茨阿因波特恩特
Hair|/heə(r)/|海尔|头发|Her hair is long.|她的头发很长。|赫尔海尔伊兹龙
Half|/hɑːf/|哈夫|一半|Half of the students are here.|一半的学生在这里。|哈夫奥夫泽斯图登茨阿希尔
Hall|/hɔːl/|霍尔|大厅|The hall is spacious.|大厅很宽敞。|泽霍尔伊兹斯佩舍斯
Halt|/hɔːlt/|霍尔特|停止|The train came to a halt.|火车停了下来。|泽特雷恩凯姆图阿霍尔特
Ham|/hæm/|哈姆|火腿|I had a ham sandwich.|我吃了一个火腿三明治。|艾哈德阿哈姆桑威奇
Hammer|/ˈhæmə(r)/|哈默|锤子|Use the hammer to fix it.|用锤子修理它。|尤兹泽哈默图菲克斯伊特
Hand|/hænd/|汉德|手|Wash your hands before eating.|吃饭前洗手。|沃什尤尔汉兹比福伊廷
Handful|/ˈhændfl/|汉德富尔|一把|He took a handful of nuts.|他抓了一把坚果。|希图克阿汉德富尔奥夫纳茨
Handle|/ˈhændl/|汉德尔|处理|She can handle the problem.|她能处理这个问题。|希坎汉德尔泽普罗布勒姆
Handsome|/ˈhænsəm/|汉瑟姆|英俊的|He is a handsome man.|他是一个英俊的男人。|希伊兹阿汉瑟姆曼
Handwriting|/ˈhændraɪtɪŋ/|汉德赖廷|笔迹|Her handwriting is beautiful.|她的笔迹很漂亮。|赫尔汉德赖廷伊兹比尤蒂富尔
Hang|/hæŋ/|汉|悬挂|Hang the picture on the wall.|把画挂在墙上。|汉泽皮克彻昂泽沃尔
Happen|/ˈhæpən/|哈彭|发生|What will happen next?|接下来会发生什么？|沃特威尔哈彭内克斯特
Happiness|/ˈhæpinəs/|哈皮尼斯|幸福|Happiness is important.|幸福很重要。|哈皮尼斯伊兹因波特恩特
Happy|/ˈhæpi/|哈皮|快乐的|I am very happy today.|我今天很开心。|艾阿姆维里哈皮图代
Harbor|/ˈhɑːbə(r)/|哈伯|港口|The ship entered the harbor.|船进入了港口。|泽希普恩特尔德泽哈伯
Hard|/hɑːd/|哈德|困难的|The exam was hard.|考试很难。|泽伊格扎姆沃兹哈德
Hardly|/ˈhɑːdli/|哈德利|几乎不|I can hardly believe it.|我几乎不敢相信。|艾坎哈德利比利夫伊特
Hardware|/ˈhɑːdweə(r)/|哈德韦尔|硬件|The hardware store is nearby.|五金店在附近。|泽哈德韦尔斯托尔伊兹尼尔拜
Harm|/hɑːm/|哈姆|伤害|Smoking can harm your health.|吸烟会伤害你的健康。|斯莫金坎哈姆尤尔赫尔思
Harmony|/ˈhɑːməni/|哈莫尼|和谐|They live in harmony.|他们和谐地生活。|泽伊利夫因哈莫尼
Harvest|/ˈhɑːvɪst/|哈维斯特|收获|The harvest was good this year.|今年的收成很好。|泽哈维斯特沃兹古德迪斯伊尔
Haste|/heɪst/|海斯特|匆忙|Make haste!|快点！|梅克海斯特
Hat|/hæt/|哈特|帽子|She is wearing a hat.|她戴着一顶帽子。|希伊兹韦林阿哈特
Hate|/heɪt/|海特|讨厌|I hate waiting.|我讨厌等待。|艾海特韦廷
Have|/hæv/|哈夫|有|I have a book.|我有一本书。|艾哈夫阿布克
Head|/hed/|海德|头|He shook his head.|他摇了摇头。|希舒克希兹海德
Headache|/ˈhedeɪk/|海德埃克|头痛|I have a headache.|我头痛。|艾哈夫阿海德埃克
Headline|/ˈhedlaɪn/|海德拉因|标题|The headline caught my eye.|标题引起了我的注意。|泽海德拉因科特迈艾
Headquarters|/ˌhedˈkwɔːtəz/|海德夸特尔兹|总部|The headquarters is in New York.|总部在纽约。|泽海德夸特尔兹伊兹因纽约
Heal|/hiːl/|希尔|治愈|The wound will heal soon.|伤口很快就会愈合。|泽伍恩德威尔希尔松
Health|/helθ/|赫尔思|健康|Health is wealth.|健康就是财富。|赫尔思伊兹韦尔思
Healthy|/ˈhelθi/|赫尔西|健康的|She is very healthy.|她很健康。|希伊兹维里赫尔西
Hear|/hɪə(r)/|希尔|听到|I can hear the music.|我能听到音乐。|艾坎希尔泽缪齐克
Heart|/hɑːt/|哈特|心|My heart beats fast.|我的心跳得很快。|迈哈特比茨法斯特
Heat|/hiːt/|希特|热|The heat is intense today.|今天热得很强烈。|泽希特伊兹因滕斯图代
Heaven|/ˈhevn/|赫文|天堂|They believe in heaven.|他们相信天堂。|泽伊比利夫因赫文
Heavy|/ˈhevi/|赫维|重的|The box is very heavy.|箱子很重。|泽博克斯伊兹维里赫维
Height|/haɪt/|海特|高度|What is your height?|你的身高是多少？|沃特伊兹尤尔海特
Helicopter|/ˈhelɪkɒptə(r)/|赫利科普特尔|直升机|The helicopter is landing.|直升机正在降落。|泽赫利科普特尔伊兹兰丁
Hell|/hel/|赫尔|地狱|Some people believe in hell.|有些人相信地狱。|萨姆皮普尔比利夫因赫尔
Hello|/həˈləʊ/|赫洛|你好|Hello, how are you?|你好，你好吗？|赫洛，豪阿尤？
Helmet|/ˈhelmɪt/|赫尔米特|头盔|Wear a helmet for safety.|为了安全戴上头盔。|韦尔阿赫尔米特福塞夫蒂
Help|/help/|赫尔普|帮助|Can you help me?|你能帮我吗？|坎尤赫尔普米
Helpful|/ˈhelpfl/|赫尔普富尔|有帮助的|This book is helpful.|这本书很有帮助。|迪斯布克伊兹赫尔普富尔
Hence|/hens/|亨斯|因此|Hence, we must be careful.|因此，我们必须小心。|亨斯，威马斯比凯尔富尔
Her|/hɜː(r)/|赫尔|她的|This is her book.|这是她的书。|迪斯伊兹赫尔布克
Herb|/hɜːb/|赫布|草药|The herb has healing properties.|这种草药有治愈特性。|泽赫布哈兹希林普罗珀蒂兹
Here|/hɪə(r)/|希尔|这里|I am here.|我在这里。|艾阿姆希尔
Hero|/ˈhɪərəʊ/|希罗|英雄|He is a hero.|他是个英雄。|希伊兹阿希罗
Hers|/hɜːz/|赫兹|她的|The book is hers.|这本书是她的。|泽布克伊兹赫兹
Herself|/hɜːˈself/|赫尔塞尔夫|她自己|She did it herself.|她自己做的。|希迪迪特赫尔塞尔夫
Hesitate|/ˈhezɪteɪt/|赫齐泰特|犹豫|Don't hesitate to ask.|不要犹豫，尽管问。|东特赫齐泰特图阿斯克
Hey|/heɪ/|海|嘿|Hey, wait for me!|嘿，等等我！|海，韦特福米
Hide|/haɪd/|海德|隐藏|Don't hide the truth.|不要隐藏真相。|东特海德泽特鲁思
High|/haɪ/|海|高的|The mountain is very high.|山很高。|泽芒廷伊兹维里海
Highlight|/ˈhaɪlaɪt/|海莱特|突出|Please highlight the key points.|请突出重点。|普利斯海莱特泽基波因茨
Highly|/ˈhaɪli/|海利|高度地|He is highly respected.|他受到高度尊重。|希伊兹海利里斯佩克蒂德
Highway|/ˈhaɪweɪ/|海韦|高速公路|The highway is busy.|高速公路很繁忙。|泽海韦伊兹比齐
Hill|/hɪl/|希尔|小山|We climbed the hill.|我们爬上了小山。|威克莱姆德泽希尔
Him|/hɪm/|希姆|他|Give it to him.|把它给他。|吉夫伊特图希姆
Himself|/hɪmˈself/|希姆塞尔夫|他自己|He did it himself.|他自己做的。|希迪迪特希姆塞尔夫
Hint|/hɪnt/|辛特|提示|Give me a hint.|给我一个提示。|吉夫米阿辛特
Hire|/ˈhaɪə(r)/|海尔|雇佣|They hired a new employee.|他们雇佣了一名新员工。|泽伊海尔德阿纽恩普洛伊伊
His|/hɪz/|希兹|他的|This is his car.|这是他的车。|迪斯伊兹希兹卡尔
Historic|/hɪˈstɒrɪk/|希斯托里克|历史性的|This is a historic moment.|这是一个历史性时刻。|迪斯伊兹阿希斯托里克莫门特
Historical|/hɪˈstɒrɪkl/|希斯托里克尔|历史的|Historical records are important.|历史记录很重要。|希斯托里克尔里科德斯阿因波特恩特
History|/ˈhɪstri/|希斯特里|历史|I love learning history.|我喜欢学习历史。|艾拉夫勒宁希斯特里
Hit|/hɪt/|希特|击中|The ball hit the window.|球击中了窗户。|泽博尔希特泽温多
Hobby|/ˈhɒbi/|霍比|爱好|Reading is my hobby.|阅读是我的爱好。|里丁伊兹迈霍比
Hockey|/ˈhɒki/|霍基|曲棍球|He plays hockey on weekends.|他周末打曲棍球。|希普雷兹霍基昂威肯兹
Hold|/həʊld/|霍尔德|握住|Hold my hand.|握住我的手。|霍尔德迈汉德
Hole|/həʊl/|霍尔|洞|There is a hole in the wall.|墙上有个洞。|泽尔伊兹阿霍尔因泽沃尔
Holiday|/ˈhɒlədeɪ/|霍利代|假期|We are on holiday.|我们在度假。|威阿昂霍利代
Hollow|/ˈhɒləʊ/|霍洛|空的|The tree is hollow inside.|树里面是空的。|泽特里伊兹霍洛因赛德
Holy|/ˈhəʊli/|霍利|神圣的|This is a holy place.|这是一个神圣的地方。|迪斯伊兹阿霍利普莱斯
Home|/həʊm/|霍姆|家|I am going home.|我要回家了。|艾阿姆戈英霍姆
Homework|/ˈhəʊmwɜːk/|霍姆沃克|家庭作业|I finished my homework.|我完成了家庭作业。|艾菲尼什德迈霍姆沃克
Honest|/ˈɒnɪst/|奥尼斯特|诚实的|He is an honest man.|他是一个诚实的人。|希伊兹安奥尼斯特曼
Honey|/ˈhʌni/|哈尼|蜂蜜|The honey is sweet.|蜂蜜很甜。|泽哈尼伊兹斯威特
Honor|/ˈɒnə(r)/|奥纳|荣誉|It is an honor to meet you.|很荣幸见到你。|伊特伊兹安奥纳图米特尤
Hook|/hʊk/|胡克|钩子|Hang your coat on the hook.|把你的外套挂在钩子上。|汉尤尔科特昂泽胡克
Hope|/həʊp/|霍普|希望|I hope you understand.|我希望你理解。|艾霍普尤安德斯坦德
Hopeful|/ˈhəʊpfl/|霍普富尔|有希望的|I am hopeful about the future.|我对未来充满希望。|艾阿姆霍普富尔阿鲍特泽菲尤切尔
Hopeless|/ˈhəʊpləs/|霍普勒斯|绝望的|The situation seems hopeless.|情况似乎绝望。|泽西图埃申西姆斯霍普勒斯
Horizon|/həˈraɪzn/|霍雷增|地平线|The sun sets on the horizon.|太阳在地平线上落下。|泽桑塞茨昂泽霍雷增
Horn|/hɔːn/|霍恩|喇叭|The car horn is loud.|汽车喇叭很响。|泽卡尔霍恩伊兹劳德
Horrible|/ˈhɒrəbl/|霍里布尔|可怕的|The accident was horrible.|事故很可怕。|泽阿克西登特沃兹霍里布尔
Horse|/hɔːs/|霍斯|马|The horse is running.|马在奔跑。|泽霍斯伊兹拉宁
Hospital|/ˈhɒspɪtl/|霍斯皮特尔|医院|She works at a hospital.|她在医院工作。|希沃克斯阿特阿霍斯皮特尔
Host|/həʊst/|霍斯特|主人|The host welcomed the guests.|主人欢迎客人。|泽霍斯特韦尔卡姆德泽格斯特斯
Hostile|/ˈhɒstaɪl/|霍斯泰尔|敌对的|The environment was hostile.|环境是敌对的。|泽因瓦伊伦门特沃兹霍斯泰尔
Hot|/hɒt/|霍特|热的|The soup is very hot.|汤很热。|泽苏普伊兹维里霍特
Hotel|/həʊˈtel/|霍特尔|酒店|We stayed at a hotel.|我们住在酒店。|威斯泰德阿特阿霍特尔
Hour|/ˈaʊə(r)/|阿沃尔|小时|I waited for an hour.|我等了一个小时。|艾韦蒂德福安阿沃尔
House|/haʊs/|豪斯|房子|They bought a new house.|他们买了一所新房子。|泽伊博特阿纽豪斯
Household|/ˈhaʊshəʊld/|豪斯霍尔德|家庭|Household chores are necessary.|家务是必要的。|豪斯霍尔德乔斯阿内塞瑟里
Housewife|/ˈhaʊswaɪf/|豪斯韦夫|家庭主妇|She is a housewife.|她是一位家庭主妇。|希伊兹阿豪斯韦夫
However|/haʊˈevə(r)/|豪埃弗|然而|However, I disagree.|然而，我不同意。|豪埃弗，艾迪萨格里
Huge|/hjuːdʒ/|休奇|巨大的|The building is huge.|这座建筑巨大。|泽比尔丁伊兹休奇
Human|/ˈhjuːmən/|休曼|人类|Human beings are social animals.|人类是社会性动物。|休曼宾斯阿索舍尔阿尼马尔兹
Humble|/ˈhʌmbl/|汉布尔|谦逊的|He is a humble person.|他是一个谦逊的人。|希伊兹阿汉布尔珀森
Humor|/ˈhjuːmə(r)/|休默|幽默|He has a great sense of humor.|他很有幽默感。|希哈兹阿格雷特森斯奥夫休默
Humorous|/ˈhjuːmərəs/|休默勒斯|幽默的|The story was humorous.|故事很幽默。|泽斯托里沃兹休默勒斯
Hundred|/ˈhʌndrəd/|汉德里德|百|There are a hundred people.|有一百人。|泽尔阿阿汉德里德皮普尔
Hunger|/ˈhʌŋɡə(r)/|亨格尔|饥饿|Hunger is a serious problem.|饥饿是一个严重的问题。|亨格尔伊兹阿西里厄斯普罗布勒姆
Hungry|/ˈhʌŋɡri/|亨格里|饥饿的|I am hungry.|我饿了。|艾阿姆亨格里
Hunt|/hʌnt/|亨特|打猎|They went hunting in the forest.|他们去森林打猎。|泽伊温特亨廷因泽福雷斯特
Hunter|/ˈhʌntə(r)/|亨特尔|猎人|The hunter caught a deer.|猎人抓到了一只鹿。|泽亨特尔科特阿迪尔
Hurry|/ˈhʌri/|赫里|匆忙|Don't hurry, take your time.|不要匆忙，慢慢来。|东特赫里，泰克尤尔泰姆
Hurt|/hɜːt/|赫特|伤害|Don't hurt yourself.|不要伤害自己。|东特赫特尤尔塞尔夫
Husband|/ˈhʌzbənd/|哈兹本德|丈夫|Her husband is a doctor.|她的丈夫是医生。|赫尔哈兹本德伊兹阿多克特尔
Hut|/hʌt/|哈特|小屋|They live in a small hut.|他们住在一间小屋里。|泽伊利夫因阿斯莫尔哈特
Hydrogen|/ˈhaɪdrədʒən/|海德罗金|氢|Hydrogen is a gas.|氢是一种气体。|海德罗金伊兹阿加斯`;

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
