const fs = require('fs');

const wordData = `Pace|/peɪs/|佩斯|步伐|Walk at a steady pace.|以稳定的步伐行走。|沃克阿特阿斯泰迪佩斯
Pacific|/pəˈsɪfɪk/|帕西菲克|太平洋的|The Pacific Ocean is vast.|太平洋很广阔。|泽帕西菲克欧申伊兹瓦斯特
Pack|/pæk/|帕克|包装|Pack your bags.|收拾你的行李。|帕克尤尔巴格斯
Package|/ˈpækɪdʒ/|帕基奇|包裹|I received a package.|我收到了一个包裹。|艾里西夫德阿帕基奇
Packet|/ˈpækɪt/|帕基特|小包|Buy a packet of sugar.|买一包糖。|拜阿帕基特奥夫舒格尔
Pad|/pæd/|帕德|垫子|Write on the pad.|在垫子上写。|赖特昂泽帕德
Page|/peɪdʒ/|佩奇|页|Turn to page ten.|翻到第十页。|特恩图佩奇滕
Pain|/peɪn/|佩恩|痛苦|I have a pain in my back.|我背痛。|艾哈夫阿佩恩因迈贝克
Painful|/ˈpeɪnfl/|佩恩富尔|痛苦的|The injury was painful.|伤很痛。|泽因杰里沃兹佩恩富尔
Paint|/peɪnt/|佩因特|油漆|Paint the wall white.|把墙刷成白色。|佩因特泽沃尔怀特
Painter|/ˈpeɪntə(r)/|佩因特尔|画家|He is a famous painter.|他是一位著名的画家。|希伊兹阿费默斯佩因特尔
Painting|/ˈpeɪntɪŋ/|佩因廷|绘画|The painting is beautiful.|这幅画很美。|泽佩因廷伊兹比尤蒂富尔
Pair|/peə(r)/|佩厄|一对|I need a pair of shoes.|我需要一双鞋。|艾尼迪阿佩厄奥夫舒兹
Palace|/ˈpæləs/|帕利斯|宫殿|The palace is magnificent.|宫殿很宏伟。|泽帕利斯伊兹马格尼菲森特
Pale|/peɪl/|佩尔|苍白的|Her face was pale.|她的脸色苍白。|赫尔费斯沃兹佩尔
Palm|/pɑːm/|帕姆|手掌|He held the coin in his palm.|他把硬币握在手掌里。|希海尔德泽科因因希兹帕姆
Pan|/pæn/|潘|平底锅|Heat the pan first.|先加热平底锅。|希特泽潘弗斯特
Panel|/ˈpænl/|帕内尔|面板|The control panel is here.|控制面板在这里。|泽康特罗尔帕内尔伊兹希尔
Panic|/ˈpænɪk/|帕尼克|恐慌|Don't panic!|不要恐慌！|东特帕尼克
Pant|/pænt/|潘特|喘气|He was panting after the run.|跑步后他在喘气。|希沃兹潘廷阿弗特泽兰
Paper|/ˈpeɪpə(r)/|佩珀|纸|Write on the paper.|在纸上写。|赖特昂泽佩珀
Parade|/pəˈreɪd/|帕雷德|游行|The parade was colorful.|游行很丰富多彩。|泽帕雷德沃兹卡勒富尔
Paragraph|/ˈpærəɡrɑːf/|帕雷格拉夫|段落|Read the first paragraph.|读第一段。|里德泽弗斯特帕雷格拉夫
Parallel|/ˈpærəlel/|帕雷莱尔|平行的|These lines are parallel.|这些线是平行的。|泽斯莱恩兹阿帕雷莱尔
Parcel|/ˈpɑːsl/|帕瑟尔|包裹|I sent a parcel yesterday.|我昨天寄了一个包裹。|艾森特阿帕瑟尔耶斯特迪
Pardon|/ˈpɑːdn/|帕登|原谅|Pardon me, I didn't hear you.|请原谅，我没有听到你。|帕登米，艾迪登特希尔尤
Parent|/ˈpeərənt/|佩伦特|父母|My parents are teachers.|我的父母是老师。|迈佩伦茨阿蒂彻兹
Park|/pɑːk/|帕克|公园|Let's go to the park.|让我们去公园。|莱茨戈图泽帕克
Parking|/ˈpɑːkɪŋ/|帕金|停车|Parking is available here.|这里可以停车。|帕金伊兹阿韦拉布尔希尔
Parliament|/ˈpɑːləmənt/|帕利门特|议会|The parliament passed the law.|议会通过了这项法律。|泽帕利门特帕斯特泽洛
Part|/pɑːt/|帕特|部分|This is only part of the story.|这只是故事的一部分。|迪斯伊兹欧恩利帕特奥夫泽斯托里
Participate|/pɑːˈtɪsɪpeɪt/|帕蒂西佩特|参与|Everyone should participate.|每个人都应该参与。|埃弗里万舒德帕蒂西佩特
Particular|/pəˈtɪkjələ(r)/|帕蒂丘勒|特别的|Is there a particular reason?|有特别的原因吗？|伊兹泽尔阿帕蒂丘勒里曾
Particularly|/pəˈtɪkjələli/|帕蒂丘勒利|特别地|I'm particularly interested in art.|我对艺术特别感兴趣。|艾姆帕蒂丘勒利因特雷斯蒂德因阿特
Partly|/ˈpɑːtli/|帕特利|部分地|I partly agree with you.|我部分同意你的看法。|艾帕特利阿格里威兹尤
Partner|/ˈpɑːtnə(r)/|帕特纳|伙伴|He is my business partner.|他是我的商业伙伴。|希伊兹迈比兹尼斯帕特纳
Partnership|/ˈpɑːtnəʃɪp/|帕特纳希普|合作关系|Our partnership is strong.|我们的合作关系很牢固。|阿沃尔帕特纳希普伊兹斯特龙
Party|/ˈpɑːti/|帕蒂|聚会|Are you coming to the party?|你会来参加聚会吗？|阿尤卡明图泽帕蒂
Pass|/pɑːs/|帕斯|通过|Please let me pass.|请让我通过。|普利斯莱特米帕斯
Passage|/ˈpæsɪdʒ/|帕西奇|通道|The passage was narrow.|通道很窄。|泽帕西奇沃兹纳罗
Passenger|/ˈpæsɪndʒə(r)/|帕森杰|乘客|The passengers waited patiently.|乘客们耐心地等待。|泽帕森杰兹韦蒂德佩申特利
Passion|/ˈpæʃn/|帕申|激情|He has a passion for music.|他对音乐有热情。|希哈兹阿帕申福缪齐克
Passive|/ˈpæsɪv/|帕西夫|被动的|Don't be passive.|不要被动。|东特比帕西夫
Passport|/ˈpɑːspɔːt/|帕斯波特|护照|I need to renew my passport.|我需要更新我的护照。|艾尼迪图里纽迈帕斯波特
Past|/pɑːst/|帕斯特|过去的|Don't dwell on the past.|不要沉溺于过去。|东特德韦尔昂泽帕斯特
Paste|/peɪst/|佩斯特|粘贴|Paste the picture here.|把图片粘贴在这里。|佩斯特泽皮克彻希尔
Pat|/pæt/|帕特|轻拍|He patted the dog gently.|他轻轻地拍了拍狗。|希帕蒂德泽多格詹特利
Patch|/pætʃ/|帕奇|补丁|There is a patch on his jacket.|他的夹克上有一个补丁。|泽尔伊兹阿帕奇昂希兹杰克特
Path|/pɑːθ/|帕斯|小路|Follow the path.|沿着小路走。|法洛泽帕斯
Patience|/ˈpeɪʃns/|佩申斯|耐心|Have patience.|要有耐心。|哈夫佩申斯
Patient|/ˈpeɪʃnt/|佩申特|病人|The patient is recovering.|病人正在康复。|泽佩申特伊兹里卡弗林
Pattern|/ˈpætn/|帕特恩|模式|Notice the pattern.|注意这个模式。|诺蒂斯泽帕特恩
Pause|/pɔːz/|波兹|暂停|Let's take a pause.|让我们暂停一下。|莱茨泰克阿波兹
Pave|/peɪv/|佩夫|铺路|They paved the road.|他们铺了路。|泽伊佩夫德泽罗德
Paw|/pɔː/|波|爪子|The cat licked its paw.|猫舔了它的爪子。|泽凯特利克蒂茨波
Pay|/peɪ/|佩|支付|How much do I pay?|我要付多少钱？|豪马奇杜艾佩
Payment|/ˈpeɪmənt/|佩门特|付款|The payment is due today.|付款今天到期。|泽佩门特伊兹杜图代
Peace|/piːs/|皮斯|和平|We all want peace.|我们都想要和平。|威奥尔沃特皮斯
Peaceful|/ˈpiːsfl/|皮斯富尔|和平的|The village is peaceful.|村庄很宁静。|泽维利奇伊兹皮斯富尔
Peach|/piːtʃ/|皮奇|桃子|I like eating peaches.|我喜欢吃桃子。|艾莱克伊廷皮奇兹
Peak|/piːk/|皮克|山峰|The peak is covered in snow.|山峰被雪覆盖。|泽皮克伊兹卡弗德因斯诺
Pear|/peə(r)/|佩厄|梨|The pear is sweet.|梨很甜。|泽佩厄伊兹斯威特
Pearl|/pɜːl/|珀尔|珍珠|She wore a pearl necklace.|她戴着珍珠项链。|希沃尔阿珀尔内克利斯
Peasant|/ˈpeznt/|佩森特|农民|The peasant worked in the fields.|农民在田里工作。|泽佩森特沃克特因泽菲尔兹
Pedestrian|/pəˈdestriən/|佩德斯特里厄n|行人|The pedestrian crossed the street.|行人穿过了街道。|泽佩德斯特里厄n克罗斯德泽斯特里特
Pen|/pen/|彭|钢笔|Write with a pen.|用钢笔写。|赖特威兹阿彭
Penalty|/ˈpenəlti/|佩纳尔蒂|惩罚|The penalty was severe.|惩罚很严厉。|泽佩纳尔蒂沃兹西维尔
Pencil|/ˈpensl/|彭西尔|铅笔|Draw with a pencil.|用铅笔画。|德罗威兹阿彭西尔
Penny|/ˈpeni/|彭尼|便士|It costs a penny.|它值一便士。|伊特科斯特斯阿彭尼
Pension|/ˈpenʃn/|彭申|养老金|He receives a pension.|他领取养老金。|希里西夫兹阿彭申
People|/ˈpiːpl/|皮普尔|人们|Many people attended.|很多人参加了。|梅尼皮普尔阿坦迪德
Pepper|/ˈpepə(r)/|佩珀|胡椒|Add some pepper to the soup.|在汤里加些胡椒。|阿德萨姆佩珀图泽苏普
Per|/pɜː(r)/|珀|每|The price is $5 per kilogram.|价格是每公斤5美元。|泽普莱斯伊兹法夫达勒兹珀基洛格拉姆
Perceive|/pəˈsiːv/|珀西夫|感知|I perceived a change.|我察觉到了变化。|艾珀西夫德阿钱奇
Percent|/pəˈsent/|珀森特|百分比|Fifty percent agreed.|百分之五十同意。|菲夫蒂珀森特阿格里德
Percentage|/pəˈsentɪdʒ/|珀森蒂奇|百分比|What percentage agreed?|百分之多少同意？|沃特珀森蒂奇阿格里德
Perception|/pəˈsepʃn/|珀塞普申|感知|Perception varies from person to person.|感知因人而异。|珀塞普申瓦里兹弗罗姆珀森图珀森
Perfect|/ˈpɜːfɪkt/|珀菲克特|完美的|This is a perfect solution.|这是一个完美的解决方案。|迪斯伊兹阿珀菲克特瑟卢申
Perfectly|/ˈpɜːfɪktli/|珀菲克特利|完美地|She speaks English perfectly.|她英语说得完美。|希斯皮克斯英格利什珀菲克特利
Perform|/pəˈfɔːm/|珀福姆|表演|They will perform tonight.|他们今晚将表演。|泽伊威尔珀福姆图奈特
Performance|/pəˈfɔːməns/|珀福门斯|表演|The performance was excellent.|表演很精彩。|泽珀福门斯沃兹埃克塞伦特
Performer|/pəˈfɔːmə(r)/|珀福默|表演者|He is a talented performer.|他是一位有才华的表演者。|希伊兹阿塔伦蒂德珀福默
Perhaps|/pəˈhæps/|珀哈普斯|也许|Perhaps it will rain.|也许会下雨。|珀哈普斯伊特威尔雷恩
Period|/ˈpɪəriəd/|皮里厄德|时期|This was a difficult period.|这是一个困难时期。|迪斯沃兹阿迪菲卡尔特皮里厄德
Permanent|/ˈpɜːmənənt/|珀曼嫩特|永久的|Is this permanent?|这是永久的吗？|伊兹迪斯珀曼嫩特
Permission|/pəˈmɪʃn/|珀米申|许可|Do I have your permission?|我有你的许可吗？|杜艾哈夫尤尔珀米申
Permit|/pəˈmɪt/|珀米特|允许|Smoking is not permitted here.|这里不允许吸烟。|斯莫金伊兹诺特珀米蒂德希尔
Persist|/pəˈsɪst/|珀西斯特|坚持|He persisted in his efforts.|他坚持努力。|希珀西斯特德因希兹埃弗茨
Person|/ˈpɜːsn/|珀森|人|He is a kind person.|他是一个善良的人。|希伊兹阿凯恩德珀森
Personal|/ˈpɜːsənl/|珀森纳尔|个人的|This is a personal matter.|这是个人事务。|迪斯伊兹阿珀森纳尔马特尔
Personality|/ˌpɜːsəˈnæləti/|珀森纳勒蒂|个性|She has a great personality.|她有很好的个性。|希哈兹阿格雷特珀森纳勒蒂
Personally|/ˈpɜːsənəli/|珀森纳利|亲自|I will handle it personally.|我会亲自处理。|艾威尔汉德尔伊特珀森纳利
Personnel|/ˌpɜːsəˈnel/|珀索内尔|人员|The personnel are trained.|人员受过培训。|泽珀索内尔阿特雷恩德
Perspective|/pəˈspektɪv/|珀斯佩克蒂夫|视角|Consider it from my perspective.|从我的角度考虑它。|康西德伊特弗罗姆迈珀斯佩克蒂夫
Persuade|/pəˈsweɪd/|珀斯韦德|说服|I will try to persuade him.|我会试着说服他。|艾威尔特莱图珀斯韦德希姆
Pet|/pet/|佩特|宠物|I have a pet dog.|我有一只宠物狗。|艾哈夫阿佩特多格
Petrol|/ˈpetrəl/|佩特罗尔|汽油|The car needs petrol.|汽车需要汽油。|泽卡尔尼兹佩特罗尔
Phase|/feɪz/|费兹|阶段|This is the first phase.|这是第一阶段。|迪斯伊兹泽弗斯特费兹
Phenomenon|/fəˈnɒmɪnən/|菲诺米嫩|现象|This is a natural phenomenon.|这是一种自然现象。|迪斯伊兹阿纳彻拉尔菲诺米嫩
Philosopher|/fɪˈlɒsəfə(r)/|菲洛索弗|哲学家|Plato was a great philosopher.|柏拉图是一位伟大的哲学家。|柏拉图沃兹阿格雷特菲洛索弗
Philosophy|/fɪˈlɒsəfi/|菲洛索菲|哲学|He studies philosophy.|他学习哲学。|希斯塔迪兹菲洛索菲
Phone|/fəʊn/|丰|电话|Call me on my phone.|给我打电话。|科尔米昂迈丰
Photo|/ˈfəʊtəʊ/|福托|照片|Take a photo of me.|给我拍张照片。|泰克阿福托奥夫米
Photograph|/ˈfəʊtəɡrɑːf/|福托格拉夫|照片|This is an old photograph.|这是一张老照片。|迪斯伊兹安欧尔德福托格拉夫
Photographer|/fəˈtɒɡrəfə(r)/|福托格拉弗|摄影师|She is a professional photographer.|她是一名专业摄影师。|希伊兹阿普拉费什纳尔福托格拉弗
Phrase|/freɪz/|弗雷兹|短语|Learn this phrase.|学习这个短语。|勒恩迪斯弗雷兹
Physical|/ˈfɪzɪkl/|菲齐克尔|身体的|Physical exercise is important.|体育锻炼很重要。|菲齐克尔埃克瑟赛兹伊兹因波特恩特
Physically|/ˈfɪzɪkli/|菲齐克利|身体上|He is physically strong.|他身体很强壮。|希伊兹菲齐克利斯特朗
Physician|/fɪˈzɪʃn/|菲齐申|医生|The physician examined the patient.|医生检查了病人。|泽菲齐申伊格扎米尼德泽佩申特
Physics|/ˈfɪzɪks/|菲齐克斯|物理学|Physics is a difficult subject.|物理学是一门困难的学科。|菲齐克斯伊兹阿迪菲卡尔特萨布杰克特
Pianist|/ˈpɪənɪst/|皮厄尼斯特|钢琴家|He is a famous pianist.|他是一位著名的钢琴家。|希伊兹阿费默斯皮厄尼斯特
Piano|/piˈænəʊ/|皮阿诺|钢琴|She plays the piano beautifully.|她钢琴弹得很美。|希普雷兹泽皮阿诺比尤蒂富利
Pick|/pɪk/|皮克|挑选|Pick a card.|挑一张卡片。|皮克阿卡德
Picnic|/ˈpɪknɪk/|皮克尼克|野餐|We had a picnic in the park.|我们在公园里野餐。|威哈德阿皮克尼克因泽帕克
Picture|/ˈpɪktʃə(r)/|皮克彻|图片|Take a picture.|拍张照片。|泰克阿皮克彻
Pie|/paɪ/|派|派|I want an apple pie.|我想要一个苹果派。|艾沃特安阿普尔派
Piece|/piːs/|皮斯|块|A piece of cake.|一块蛋糕。|阿皮斯奥夫凯克
Pig|/pɪɡ/|皮格|猪|The pig is pink.|猪是粉红色的。|泽皮格伊兹平克
Pigeon|/ˈpɪdʒɪn/|皮金|鸽子|The pigeon flew away.|鸽子飞走了。|泽皮金弗卢阿韦
Pile|/paɪl/|派尔|堆|There is a pile of books.|有一堆书。|泽尔伊兹阿派尔奥夫布克斯
Pill|/pɪl/|皮尔|药丸|Take this pill.|吃这颗药丸。|泰克迪斯皮尔
Pillar|/ˈpɪlə(r)/|皮勒|柱子|The pillar supports the roof.|柱子支撑着屋顶。|泽皮勒萨波茨泽鲁夫
Pillow|/ˈpɪləʊ/|皮洛|枕头|The pillow is soft.|枕头很软。|泽皮洛伊兹索夫特
Pilot|/ˈpaɪlət/|派洛特|飞行员|The pilot landed the plane safely.|飞行员安全地降落了飞机。|泽派洛特兰迪德泽普莱恩塞夫利
Pin|/pɪn/|平|别针|Use a pin to hold it.|用别针固定它。|尤兹阿平图霍尔德伊特
Pine|/paɪn/|派恩|松树|The pine tree is tall.|松树很高。|泽派恩特里伊兹托尔
Pink|/pɪŋk/|平克|粉色|She wore a pink dress.|她穿着一件粉色的裙子。|希沃尔阿平克德雷斯
Pioneer|/ˌpaɪəˈnɪə(r)/|派厄尼厄|先驱|He is a pioneer in this field.|他是这个领域的先驱。|希伊兹阿派厄尼厄因迪斯菲尔德
Pipe|/paɪp/|派普|管子|Water flows through the pipe.|水流过管子。|沃特尔弗洛斯斯鲁泽派普
Pity|/ˈpɪti/|皮蒂|同情|What a pity!|真可惜！|沃特阿皮蒂
Pizza|/ˈpiːtsə/|皮萨|披萨|I love eating pizza.|我喜欢吃披萨。|艾拉夫伊廷皮萨
Place|/pleɪs/|普莱斯|地方|This is a nice place.|这是一个好地方。|迪斯伊兹阿奈斯普莱斯
Plain|/pleɪn/|普莱恩|朴素的|She wore a plain dress.|她穿着一件朴素的裙子。|希沃尔阿普莱恩德雷斯
Plan|/plæn/|普兰|计划|What is your plan?|你的计划是什么？|沃特伊兹尤尔普兰
Plane|/pleɪn/|普莱恩|飞机|The plane landed safely.|飞机安全降落。|泽普莱恩兰迪德塞夫利
Planet|/ˈplænɪt/|普拉尼特|行星|Earth is a planet.|地球是一颗行星。|厄斯伊兹阿普拉尼特
Plant|/plɑːnt/|普兰特|植物|Water the plants.|给植物浇水。|沃特尔泽普兰茨
Plastic|/ˈplæstɪk/|普拉斯蒂克|塑料|This bottle is made of plastic.|这个瓶子是塑料做的。|迪斯博特尔伊兹梅德奥夫普拉斯蒂克
Plate|/pleɪt/|普莱特|盘子|Put the food on the plate.|把食物放在盘子里。|普特泽富德昂泽普莱特
Platform|/ˈplætfɔːm/|普拉特福姆|平台|Wait on the platform.|在站台上等。|韦特昂泽普拉特福姆
Play|/pleɪ/|普雷|玩|Let's play a game.|让我们玩个游戏。|莱茨普雷阿盖姆
Player|/ˈpleɪə(r)/|普雷厄|选手|He is a good player.|他是一名好选手。|希伊兹阿古德普雷厄
Playground|/ˈpleɪɡraʊnd/|普雷格劳恩德|操场|The children are in the playground.|孩子们在操场上。|泽奇尔德伦阿因泽普雷格劳恩德
Pleasant|/ˈpleznt/|普莱森特|令人愉快的|We had a pleasant conversation.|我们有一次愉快的谈话。|威哈德阿普莱森特康弗塞申
Please|/pliːz/|普利斯|请|Please help me.|请帮助我。|普利斯赫尔普米
Pleased|/pliːzd/|普利兹德|高兴的|I am pleased to meet you.|很高兴见到你。|艾阿姆普利兹德图米特尤
Pleasure|/ˈpleʒə(r)/|普莱泽|快乐|It's my pleasure.|这是我的荣幸。|伊茨迈普莱泽
Plenty|/ˈplenti/|普伦蒂|大量|We have plenty of time.|我们有充足的时间。|威哈夫普伦蒂奥夫泰姆
Plot|/plɒt/|普洛特|情节|The plot was interesting.|情节很有趣。|泽普洛特沃兹因特雷斯廷
Plug|/plʌɡ/|普拉格|插头|Plug in the charger.|插上充电器。|普拉格因泽查杰尔
Plum|/plʌm/|普拉姆|李子|The plum is sweet.|李子很甜。|泽普拉姆伊兹斯威特
Plus|/plʌs/|普拉斯|加|Three plus two equals five.|三加二等于五。|斯里普拉斯图伊奎尔斯法夫
Pocket|/ˈpɒkɪt/|波基特|口袋|Put it in your pocket.|把它放在你的口袋里。|普特伊特因尤尔波基特
Poem|/ˈpəʊɪm/|波厄姆|诗|He wrote a beautiful poem.|他写了一首美丽的诗。|希罗特阿比尤蒂富尔波厄姆
Poet|/ˈpəʊɪt/|波厄特|诗人|Shakespeare was a famous poet.|莎士比亚是一位著名的诗人。|莎士比亚沃兹阿费默斯波厄特
Poetry|/ˈpəʊətri/|波厄特里|诗歌|I love reading poetry.|我喜欢读诗歌。|艾拉夫里丁波厄特里
Point|/pɔɪnt/|波因特|点|What's your point?|你的观点是什么？|沃茨尤尔波因特
Poison|/ˈpɔɪzn/|波伊增|毒药|The poison is deadly.|毒药是致命的。|泽波伊增伊兹德德利
Polar|/ˈpəʊlə(r)/|波拉尔|极地的|Polar bears live in the Arctic.|北极熊生活在北极。|波拉贝尔兹利夫因泽阿克蒂克
Pole|/pəʊl/|波尔|杆|The pole is very tall.|杆子很高。|泽波尔伊兹维里托尔
Police|/pəˈliːs/|波利斯|警察|Call the police!|叫警察！|科尔泽波利斯
Policeman|/pəˈliːsmən/|波利斯曼|警察|The policeman helped me.|警察帮助了我。|泽波利斯曼赫尔普特米
Policy|/ˈpɒləsi/|波利西|政策|What is the company policy?|公司政策是什么？|沃特伊兹泽康帕尼波利西
Polish|/ˈpɒlɪʃ/|波利什|波兰语|He speaks Polish fluently.|他流利地说波兰语。|希斯皮克斯波利什弗卢恩特利
Polite|/pəˈlaɪt/|波莱特|礼貌的|Be polite to others.|对他人要有礼貌。|比波莱特图阿泽斯
Political|/pəˈlɪtɪkl/|波利蒂克尔|政治的|The political situation is complex.|政治局势复杂。|泽波利蒂克尔西图埃申伊兹康普莱克斯
Politician|/ˌpɒləˈtɪʃn/|波利蒂申|政治家|He is a famous politician.|他是一位著名的政治家。|希伊兹阿费默斯波利蒂申
Politics|/ˈpɒlətɪks/|波利蒂克斯|政治|Politics is complicated.|政治很复杂。|波利蒂克斯伊兹康普利凯蒂德
Pollute|/pəˈluːt/|波卢特|污染|Factories pollute the air.|工厂污染空气。|法克特里兹波卢特泽埃尔
Pollution|/pəˈluːʃn/|波卢申|污染|Air pollution is a serious problem.|空气污染是一个严重的问题。|埃尔波卢申伊兹阿西里厄斯普罗布勒姆
Pond|/pɒnd/|庞德|池塘|There are fish in the pond.|池塘里有鱼。|泽尔阿菲什因泽庞德
Pool|/puːl/|普尔|游泳池|Let's go to the pool.|让我们去游泳池。|莱茨戈图泽普尔
Poor|/pɔː(r)/|波尔|贫穷的|The poor family needs help.|这个贫困家庭需要帮助。|泽波尔法米利尼兹赫尔普
Pop|/pɒp/|波普|流行音乐|I like pop music.|我喜欢流行音乐。|艾莱克波普缪齐克
Popular|/ˈpɒpjələ(r)/|波皮尤勒|流行的|This song is very popular.|这首歌很流行。|迪斯桑伊兹维里波皮尤勒
Population|/ˌpɒpjuˈleɪʃn/|波皮尤莱申|人口|The population is growing.|人口在增长。|泽波皮尤莱申伊兹格罗英
Port|/pɔːt/|波特|港口|The ship arrived at the port.|船到达了港口。|泽希普阿莱夫德阿特泽波特
Portable|/ˈpɔːtəbl/|波特布尔|便携的|This is a portable device.|这是一个便携设备。|迪斯伊兹阿波特布尔迪韦斯
Portrait|/ˈpɔːtreɪt/|波特雷特|肖像|She painted a portrait.|她画了一幅肖像。|希佩因蒂德阿波特雷特
Portray|/pɔːˈtreɪ/|波特雷|描绘|The book portrays life in the city.|这本书描绘了城市生活。|泽布克波特雷兹莱夫因泽西蒂
Pose|/pəʊz/|波兹|姿势|Hold that pose.|保持那个姿势。|霍尔德泽特波兹
Position|/pəˈzɪʃn/|波齐申|位置|What is your position?|你的立场是什么？|沃特伊兹尤尔波齐申
Positive|/ˈpɒzətɪv/|波齐蒂夫|积极的|Stay positive.|保持积极。|斯泰波齐蒂夫
Possess|/pəˈzes/|波泽斯|拥有|He possesses great wealth.|他拥有巨大的财富。|希波泽西斯格雷特韦尔思
Possession|/pəˈzeʃn/|波泽申|财产|The car is my possession.|这辆车是我的财产。|泽卡尔伊兹迈波泽申
Possibility|/ˌpɒsəˈbɪləti/|波西比勒蒂|可能性|There is a possibility of rain.|有下雨的可能性。|泽尔伊兹阿波西比勒蒂奥夫雷恩
Possible|/ˈpɒsəbl/|波西布尔|可能的|Is it possible?|这可能吗？|伊兹伊特波西布尔
Possibly|/ˈpɒsəbli/|波西布利|可能地|He is possibly the best candidate.|他可能是最好的候选人。|希伊兹波西布利泽贝斯特坎迪代特
Post|/pəʊst/|波斯特|邮件|Did you post the letter?|你寄信了吗？|迪尤波斯特泽莱特尔
Postcard|/ˈpəʊstkɑːd/|波斯特卡德|明信片|I sent a postcard from Paris.|我从巴黎寄了一张明信片。|艾森特阿波斯特卡德弗罗姆巴黎
Poster|/ˈpəʊstə(r)/|波斯特|海报|There is a poster on the wall.|墙上有一张海报。|泽尔伊兹阿波斯特昂泽沃尔
Postpone|/pəˈspəʊn/|波斯特波恩|推迟|They postponed the meeting.|他们推迟了会议。|泽伊波斯特波恩德泽米廷
Pot|/pɒt/|波特|锅|The pot is on the stove.|锅在炉子上。|泽波特伊兹昂泽斯托夫
Potato|/pəˈteɪtəʊ/|珀泰托|土豆|I like fried potatoes.|我喜欢炸土豆。|艾莱克弗莱德珀泰托兹
Potential|/pəˈtenʃl/|珀滕舍尔|潜在的|He has great potential.|他有巨大的潜力。|希哈兹格雷特珀滕舍尔
Potentially|/pəˈtenʃəli/|珀滕舍利|潜在地|This could potentially be a problem.|这可能成为一个问题。|迪斯库德珀滕舍利比阿普罗布勒姆
Pound|/paʊnd/|庞德|英镑|It costs five pounds.|它值五英镑。|伊特科斯特斯法夫庞德兹
Pour|/pɔː(r)/|波尔|倒|Pour some water into the glass.|往杯子里倒些水。|波尔萨姆沃特尔因图泽格拉斯
Poverty|/ˈpɒvəti/|波弗蒂|贫穷|Poverty is a global issue.|贫穷是一个全球性问题。|波弗蒂伊兹阿格洛布尔伊舒
Powder|/ˈpaʊdə(r)/|帕沃德|粉末|The powder is white.|粉末是白色的。|泽帕沃德伊兹怀特
Power|/ˈpaʊə(r)/|帕沃尔|力量|Knowledge is power.|知识就是力量。|诺利奇伊兹帕沃尔
Powerful|/ˈpaʊəfl/|帕沃尔富尔|强大的|He is a powerful leader.|他是一位强大的领导者。|希伊兹阿帕沃尔富尔利德尔
Practical|/ˈpræktɪkl/|普拉克蒂克尔|实际的|This is a practical solution.|这是一个实际的解决方案。|迪斯伊兹阿普拉克蒂克尔瑟卢申
Practice|/ˈpræktɪs/|普拉克蒂斯|练习|Practice makes perfect.|熟能生巧。|普拉克蒂斯梅克斯珀菲克特
Praise|/preɪz/|普雷兹|赞扬|He received praise for his work.|他的工作受到了赞扬。|希里西夫德普雷兹福希兹沃克
Pray|/preɪ/|普雷|祈祷|They pray for peace.|他们为和平祈祷。|泽伊普雷福皮斯
Prayer|/preə(r)/|普雷厄|祈祷|The prayer was answered.|祈祷得到了回应。|泽普雷厄沃兹安塞尔德
Precious|/ˈpreʃəs/|普雷舍斯|珍贵的|Time is precious.|时间是珍贵的。|泰姆伊兹普雷舍斯
Precise|/prɪˈsaɪs/|普里赛斯|精确的|Be precise in your answer.|回答要精确。|比普里赛斯因尤尔安塞尔
Precisely|/prɪˈsaɪsli/|普里赛斯利|精确地|That is precisely what I meant.|那正是我的意思。|泽特伊兹普里赛斯利沃特艾梅恩特
Predict|/prɪˈdɪkt/|普里迪克特|预测|Can you predict the outcome?|你能预测结果吗？|坎尤普里迪克特泽奥特卡姆
Prefer|/prɪˈfɜː(r)/|普里弗|更喜欢|I prefer tea to coffee.|我更喜欢茶而不是咖啡。|艾普里弗蒂图科菲
Preference|/ˈprefrəns/|普雷弗伦斯|偏好|What is your preference?|你的偏好是什么？|沃特伊兹尤尔普雷弗伦斯
Pregnant|/ˈpreɡnənt/|普雷格南特|怀孕的|She is pregnant.|她怀孕了。|希伊兹普雷格南特
Prejudice|/ˈpredʒədɪs/|普雷朱迪斯|偏见|Don't have prejudice against others.|不要对他人有偏见。|东特哈夫普雷朱迪斯阿根斯特阿泽斯
Premier|/ˈpremiə(r)/|普雷米厄|总理|The premier visited our country.|总理访问了我国。|泽普雷米厄维西蒂德阿沃尔坎特里
Premises|/ˈpremɪsɪz/|普雷米西兹|前提|The premises are incorrect.|前提是不正确的。|泽普雷米西兹阿因科雷克特
Premium|/ˈpriːmiəm/|普里米厄姆|高级的|This is a premium product.|这是一个高级产品。|迪斯伊兹阿普里米厄姆普罗达克特
Preparation|/ˌprepəˈreɪʃn/|普雷帕雷申|准备|The preparation took a long time.|准备花了很长时间。|泽普雷帕雷申图克阿龙泰姆
Prepare|/prɪˈpeə(r)/|普里佩厄|准备|Prepare for the exam.|为考试做准备。|普里佩厄福泽伊格扎姆
Preposition|/ˌprepəˈzɪʃn/|普雷波齐申|介词|In is a preposition.|In是一个介词。|因伊兹阿普雷波齐申
Prescribe|/prɪˈskraɪb/|普里斯克莱布|开药|The doctor prescribed medicine.|医生开了药。|泽多克特尔普里斯克莱布德梅德森
Prescription|/prɪˈskrɪpʃn/|普里斯克里普申|处方|I need a prescription.|我需要处方。|艾尼迪阿普里斯克里普申
Presence|/ˈprezns/|普雷森斯|存在|Your presence is appreciated.|感谢您的出席。|尤尔普雷森斯伊兹阿普里希埃蒂德
Present|/ˈpreznt/|普雷森特|礼物|This is a present for you.|这是给你的礼物。|迪斯伊兹阿普雷森特福尤
Presentation|/ˌpreznˈteɪʃn/|普雷森泰申|演示|The presentation was excellent.|演示很精彩。|泽普雷森泰申沃兹埃克塞伦特
Preserve|/prɪˈzɜːv/|普里泽夫|保护|We must preserve nature.|我们必须保护自然。|威马斯普里泽夫内彻
President|/ˈprezɪdənt/|普雷齐登特|总统|The president gave a speech.|总统发表了演讲。|泽普雷齐登特盖夫阿斯皮奇
Press|/pres/|普雷斯|按|Press the button.|按按钮。|普雷斯泽巴滕
Pressure|/ˈpreʃə(r)/|普雷舒尔|压力|I feel a lot of pressure.|我感到很大压力。|艾菲尔阿洛特奥夫普雷舒尔
Prestige|/preˈstiːʒ/|普雷斯蒂奇|声望|The university has great prestige.|这所大学有很高的声望。|泽尤尼韦西蒂哈兹格雷特普雷斯蒂奇
Presumably|/prɪˈzjuːməbli/|普里朱默布利|大概|Presumably, he will come.|大概他会来。|普里朱默布利，希威尔卡姆
Presume|/prɪˈzjuːm/|普里朱姆|假定|I presume you are right.|我假定你是对的。|艾普里朱姆尤阿莱特
Pretend|/prɪˈtend/|普里滕德|假装|Don't pretend to be someone else.|不要假装成别人。|东特普里滕德图比萨姆万埃尔斯
Pretty|/ˈprɪti/|普里蒂|漂亮的|She is very pretty.|她很漂亮。|希伊兹维里普里蒂
Prevent|/prɪˈvent/|普里文特|预防|How can we prevent this?|我们如何预防这个？|豪坎威普里文特迪斯
Previous|/ˈpriːviəs/|普里维厄斯|以前的|I mentioned this in my previous email.|我在之前的邮件中提到过这个。|艾门申德迪斯因迈普里维厄斯伊梅尔
Previously|/ˈpriːviəsli/|普里维厄斯利|以前|I have previously visited Paris.|我以前去过巴黎。|艾哈夫普里维厄斯利维西蒂德巴黎
Price|/praɪs/|普莱斯|价格|What is the price?|价格是多少？|沃特伊兹泽普莱斯
Pride|/praɪd/|普莱德|骄傲|He takes pride in his work.|他为他的工作感到自豪。|希泰克斯普莱德因希兹沃克
Priest|/priːst/|普里斯特|牧师|The priest gave a sermon.|牧师讲道。|泽普里斯特盖夫阿瑟门
Primary|/ˈpraɪməri/|普莱默里|主要的|This is our primary goal.|这是我们的主要目标。|迪斯伊兹阿沃尔普莱默里戈尔
Prime|/praɪm/|普莱姆|主要的|This is a prime example.|这是一个典型的例子。|迪斯伊兹阿普莱姆伊格赞普尔
Prince|/prɪns/|普林斯|王子|The prince lived in a castle.|王子住在城堡里。|泽普林斯利夫德因阿卡瑟尔
Princess|/prɪnˈses/|普林塞斯|公主|The princess was beautiful.|公主很美丽。|泽普林塞斯沃兹比尤蒂富尔
Principal|/ˈprɪnsəpl/|普林西普尔|校长|The principal spoke at the assembly.|校长在集会上讲话。|泽普林西普尔斯波克阿特泽阿森布利
Principle|/ˈprɪnsəpl/|普林西普尔|原则|Follow your principles.|遵循你的原则。|法洛尤尔普林西普尔兹
Print|/prɪnt/|普林特|打印|Print the document.|打印文件。|普林特泽多克尤门特
Printer|/ˈprɪntə(r)/|普林特尔|打印机|The printer is not working.|打印机不工作。|泽普林特尔伊兹诺特沃金
Prior|/ˈpraɪə(r)/|普莱厄|优先的|This task has prior importance.|这个任务有优先重要性。|迪斯塔斯克哈兹普莱厄因波特恩斯
Priority|/praɪˈɒrəti/|普莱奥拉蒂|优先权|This is a high priority.|这是高优先级。|迪斯伊兹阿海普莱奥拉蒂
Prison|/ˈprɪzn/|普里增|监狱|He was sent to prison.|他被送进了监狱。|希沃兹森特图普里增
Prisoner|/ˈprɪznə(r)/|普里增纳|囚犯|The prisoner was released.|囚犯被释放了。|泽普里增纳沃兹里利斯德
Privacy|/ˈprɪvəsi/|普里弗西|隐私|Everyone deserves privacy.|每个人都值得拥有隐私。|埃弗里万迪泽弗兹普里弗西
Private|/ˈpraɪvət/|普莱弗特|私人的|This is a private matter.|这是私人事务。|迪斯伊兹阿普莱弗特马特尔
Privilege|/ˈprɪvəlɪdʒ/|普里弗里奇|特权|Education is a privilege.|教育是一种特权。|教育伊兹阿普里弗里奇
Prize|/praɪz/|普莱兹|奖品|He won first prize.|他赢得了一等奖。|希万弗斯特普莱兹
Probability|/ˌprɒbəˈbɪləti/|波巴比勒蒂|概率|What is the probability?|概率是多少？|沃特伊兹泽波巴比勒蒂
Probable|/ˈprɒbəbl/|波巴布尔|可能的|It is probable that he will come.|他可能会来。|伊特伊兹波巴布尔泽特希威尔卡姆
Probably|/ˈprɒbəbli/|波巴布利|大概|He will probably come tomorrow.|他大概明天会来。|希威尔波巴布利卡姆图莫罗
Problem|/ˈprɒbləm/|波布勒姆|问题|We have a problem.|我们有一个问题。|威哈夫阿波布勒姆
Procedure|/prəˈsiːdʒə(r)/|普罗西杰尔|程序|Follow the procedure.|遵循程序。|法洛泽普罗西杰尔
Proceed|/prəˈsiːd/|普罗西德|继续|Let's proceed with the plan.|让我们继续这个计划。|莱茨普罗西德威兹泽普兰
Process|/ˈprəʊses/|普罗塞斯|过程|The process takes time.|这个过程需要时间。|泽普罗塞斯泰克斯泰姆
Procession|/prəˈseʃn/|普罗塞申|队伍|The procession moved slowly.|队伍缓慢移动。|泽普罗塞申穆夫德斯洛利
Proclaim|/prəˈkleɪm/|普罗克莱姆|宣布|They proclaimed the winner.|他们宣布了获胜者。|泽伊普罗克莱姆德泽温纳
Produce|/prəˈdjuːs/|普罗杜斯|生产|The factory produces cars.|工厂生产汽车。|泽法克特里普罗杜西斯卡兹
Producer|/prəˈdjuːsə(r)/|普罗杜瑟|制片人|He is a famous producer.|他是一位著名的制片人。|希伊兹阿费默斯普罗杜瑟
Product|/ˈprɒdʌkt/|普罗达克特|产品|This is a new product.|这是一个新产品。|迪斯伊兹阿纽普罗达克特
Production|/prəˈdʌkʃn/|普罗达克申|生产|Production has increased.|生产增加了。|普罗达克申哈兹因克里斯德
Profession|/prəˈfeʃn/|普罗费申|职业|What is your profession?|你的职业是什么？|沃特伊兹尤尔普罗费申
Professional|/prəˈfeʃənl/|普罗费申纳尔|专业的|He is very professional.|他很专业。|希伊兹维里普罗费申纳尔
Professor|/prəˈfesə(r)/|普罗费瑟|教授|She is a professor at the university.|她是大学的教授。|希伊兹阿普罗费瑟阿特泽尤尼韦西蒂
Profit|/ˈprɒfɪt/|普罗菲特|利润|The company made a profit.|公司盈利了。|泽康帕尼梅德阿普罗菲特
Program|/ˈprəʊɡræm/|普罗格拉姆|节目|What program are you watching?|你在看什么节目？|沃特普罗格拉姆阿尤沃钦
Progress|/ˈprəʊɡres/|普罗格雷斯|进步|You are making good progress.|你正在取得良好进步。|尤阿梅金古德普罗格雷斯
Project|/ˈprɒdʒekt/|普罗杰克特|项目|This is a big project.|这是一个大项目。|迪斯伊兹阿比格普罗杰克特
Prominent|/ˈprɒmɪnənt/|普罗米嫩特|杰出的|He is a prominent figure.|他是一位杰出人物。|希伊兹阿普罗米嫩特菲格
Promise|/ˈprɒmɪs/|普罗米斯|承诺|I promise to help you.|我承诺帮助你。|艾普罗米斯图赫尔普尤
Promote|/prəˈməʊt/|普罗莫特|促进|They promote healthy living.|他们促进健康生活。|泽伊普罗莫特赫尔西利文
Promotion|/prəˈməʊʃn/|普罗莫申|晋升|He got a promotion.|他升职了。|希戈特阿普罗莫申
Prompt|/prɒmpt/|普罗姆普特|迅速的|Thank you for your prompt reply.|感谢您的迅速回复。|森克尤福尤尔普罗姆普特里普莱
Proof|/pruːf/|普鲁夫|证据|Do you have any proof?|你有证据吗？|杜尤哈夫埃尼普鲁夫
Proper|/ˈprɒpə(r)/|普罗珀|适当的|Wear proper clothing.|穿适当的衣服。|韦尔普罗珀克洛辛
Properly|/ˈprɒpəli/|普罗珀利|适当地|Do it properly.|适当地做。|杜伊特普罗珀利
Property|/ˈprɒpəti/|普罗珀蒂|财产|This is private property.|这是私人财产。|迪斯伊兹普莱弗特普罗珀蒂
Proportion|/prəˈpɔːʃn/|普罗波申|比例|What is the proportion?|比例是多少？|沃特伊兹泽普罗波申
Proposal|/prəˈpəʊzl/|普罗波泽尔|提议|I have a proposal.|我有一个提议。|艾哈夫阿普罗波泽尔
Propose|/prəˈpəʊz/|普罗波兹|提议|I propose a toast.|我提议干杯。|艾普罗波兹阿托斯特
Prospect|/ˈprɒspekt/|普罗斯佩克特|前景|The prospects are good.|前景很好。|泽普罗斯佩克茨阿古德
Prosperity|/prɒˈsperəti/|普罗斯佩拉蒂|繁荣|The country enjoys prosperity.|国家享有繁荣。|泽坎特里恩乔伊斯普罗斯佩拉蒂
Prosperous|/ˈprɒspərəs/|普罗斯珀勒斯|繁荣的|The city is prosperous.|城市很繁荣。|泽西蒂伊兹普罗斯珀勒斯
Protect|/prəˈtekt/|普罗泰克特|保护|We must protect the environment.|我们必须保护环境。|威马斯普罗泰克特泽因瓦伊伦门特
Protection|/prəˈtekʃn/|普罗泰克申|保护|We need protection.|我们需要保护。|威尼迪普罗泰克申
Protein|/ˈprəʊtiːn/|普罗廷|蛋白质|Protein is essential for health.|蛋白质对健康至关重要。|普罗廷伊兹伊森舍尔福赫尔思
Protest|/ˈprəʊtest/|普罗泰斯特|抗议|They organized a protest.|他们组织了一次抗议。|泽伊奥甘奈兹德阿普罗泰斯特
Proud|/praʊd/|普劳德|自豪的|I am proud of you.|我为你感到自豪。|艾阿姆普劳德奥夫尤
Prove|/pruːv/|普鲁夫|证明|Can you prove it?|你能证明吗？|坎尤普鲁夫伊特
Provide|/prəˈvaɪd/|普罗韦德|提供|They provide good service.|他们提供良好的服务。|泽伊普罗韦德古德瑟维斯
Provider|/prəˈvaɪdə(r)/|普罗韦德尔|提供者|He is a reliable provider.|他是一个可靠的提供者。|希伊兹阿里莱厄布尔普罗韦德尔
Province|/ˈprɒvɪns/|普罗文斯|省|He lives in a small province.|他住在一个小省。|希利夫兹因阿斯莫尔普罗文斯
Provision|/prəˈvɪʒn/|普罗维让|规定|There is a provision for this.|对此有一项规定。|泽尔伊兹阿普罗维让福迪斯
Psychological|/ˌsaɪkəˈlɒdʒɪkl/|赛科洛吉克尔|心理的|Psychological health is important.|心理健康很重要。|赛科洛吉克尔赫尔思伊兹因波特恩特
Psychology|/saɪˈkɒlədʒi/|赛科洛吉|心理学|She studies psychology.|她学习心理学。|希斯塔迪兹赛科洛吉
Pub|/pʌb/|帕布|酒吧|Let's go to the pub.|让我们去酒吧。|莱茨戈图泽帕布
Public|/ˈpʌblɪk/|帕布利克|公共的|This is a public place.|这是一个公共场所。|迪斯伊兹阿帕布利克普莱斯
Publication|/ˌpʌblɪˈkeɪʃn/|帕布利凯申|出版物|The publication was delayed.|出版物被推迟了。|泽帕布利凯申沃兹迪莱德
Publicity|/pʌˈblɪsəti/|帕布利西蒂|宣传|The event got a lot of publicity.|这个活动得到了很多宣传。|泽伊文特戈特阿洛特奥夫帕布利西蒂
Publish|/ˈpʌblɪʃ/|帕布利什|出版|They will publish the book next year.|他们明年出版这本书。|泽伊威尔帕布利什泽布克内克斯特伊尔
Publisher|/ˈpʌblɪʃə(r)/|帕布利谢尔|出版商|He works for a publisher.|他为一家出版商工作。|希沃克斯福阿帕布利谢尔
Pull|/pʊl/|普尔|拉|Pull the door open.|把门拉开。|普尔泽多尔欧彭
Pulse|/pʌls/|帕尔斯|脉搏|The doctor checked his pulse.|医生检查了他的脉搏。|泽多克特尔切克特希兹帕尔斯
Pump|/pʌmp/|帕姆普|泵|The pump is broken.|泵坏了。|泽帕姆普伊兹布罗肯
Punch|/pʌntʃ/|潘奇|打孔|He punched a hole in the paper.|他在纸上打了一个孔。|希潘奇德阿霍尔因泽佩珀
Punctual|/ˈpʌŋktʃuəl/|潘克丘厄尔|准时的|Be punctual for the meeting.|开会要准时。|比潘克丘厄尔福泽米廷
Punish|/ˈpʌnɪʃ/|帕尼什|惩罚|Don't punish the child.|不要惩罚孩子。|东特帕尼什泽柴尔德
Punishment|/ˈpʌnɪʃmənt/|帕尼什门特|惩罚|The punishment was severe.|惩罚很严厉。|泽帕尼什门特沃兹西维尔
Pupil|/ˈpjuːpl/|皮尤普尔|学生|The pupils are learning.|学生们正在学习。|泽皮尤普尔兹阿勒宁
Puppet|/ˈpʌpɪt/|帕皮特|木偶|The children watched the puppet show.|孩子们观看了木偶表演。|泽奇尔德伦沃奇德泽帕皮特肖
Puppy|/ˈpʌpi/|帕皮|小狗|The puppy is very cute.|小狗很可爱。|泽帕皮伊兹维里克尤特
Purchase|/ˈpɜːtʃəs/|珀彻斯|购买|I made a purchase online.|我在网上购买了。|艾梅德阿珀彻斯昂莱恩
Pure|/pjʊə(r)/|皮尤厄|纯净的|The water is pure.|水是纯净的。|泽沃特尔伊兹皮尤厄
Purple|/ˈpɜːpl/|珀普尔|紫色|She wore a purple dress.|她穿着一件紫色的裙子。|希沃尔阿珀普尔德雷斯
Purpose|/ˈpɜːpəs/|珀珀斯|目的|What is your purpose?|你的目的是什么？|沃特伊兹尤尔珀珀斯
Purse|/pɜːs/|珀斯|钱包|She lost her purse.|她丢了钱包。|希洛斯特赫尔珀斯
Pursue|/pəˈsjuː/|珀苏|追求|He wants to pursue his dreams.|他想追求他的梦想。|希万茨图珀苏希兹德里姆斯
Pursuit|/pəˈsjuːt/|珀苏特|追求|The pursuit of happiness.|追求幸福。|泽珀苏特奥夫哈皮尼斯
Push|/pʊʃ/|普什|推|Push the door.|推门。|普什泽多尔
Put|/pʊt/|普特|放|Put the book on the table.|把书放在桌子上。|普特泽布克昂泽泰布尔
Puzzle|/ˈpʌzl/|帕泽尔|谜题|This is a difficult puzzle.|这是一个困难的谜题。|迪斯伊兹阿迪菲卡尔特帕泽尔`;

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
