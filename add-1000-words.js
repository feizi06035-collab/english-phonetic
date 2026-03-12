const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'word-data.js');
let data = fs.readFileSync(filePath, 'utf8');

const wordData = `Pace|/peɪs/|佩斯|步伐|Walk at a steady pace.|以稳定的步伐行走。|沃克阿特阿斯泰迪佩斯
Pacific|/pəˈsɪfɪk/|帕西菲克|太平洋的|The Pacific Ocean is vast.|太平洋很广阔。|泽帕西菲克欧申伊兹瓦斯特
Pack|/pæk/|帕克|打包|Pack your bags.|收拾你的行李。|帕克优尔巴格兹
Package|/ˈpækɪdʒ/|帕克奇|包裹|Send this package.|寄这个包裹。|森德泽斯帕克奇
Paddle|/ˈpædl/|帕德尔|划桨|Paddle the boat.|划船。|帕德尔泽波特
Page|/peɪdʒ/|佩奇|页|Turn the page.|翻页。|特恩泽佩奇
Pain|/peɪn/|佩恩|疼痛|Feel the pain.|感到疼痛。|费尔泽佩恩
Paint|/peɪnt/|佩恩特|绘画|Paint a picture.|画一幅画。|佩恩特阿皮克彻
Pair|/peə(r)/|佩尔|一对|Wear a pair of shoes.|穿一双鞋。|威尔阿佩尔奥夫舒兹
Palace|/ˈpæləs/|帕拉斯|宫殿|Visit the palace.|参观宫殿。|维兹泽特帕拉斯
Pale|/peɪl/|佩尔|苍白的|Look pale.|看起来苍白。|卢克佩尔
Panda|/ˈpændə/|潘达|熊猫|See a panda.|看熊猫。|西阿潘达
Panel|/ˈpænl/|潘尔|面板|Check the panel.|检查面板。|切克泽潘尔
Paper|/ˈpeɪpə(r)/|佩珀|纸|Write on paper.|在纸上写。|瑞特昂佩珀
Parcel|/ˈpɑːsl/|帕索尔|包裹|Receive a parcel.|收到包裹。|瑞塞夫阿帕索尔
Pardon|/ˈpɑːdn/|帕顿|原谅|I beg your pardon.|请再说一遍。|爱贝格优尔帕顿
Park|/pɑːk/|帕克|公园|Play in the park.|在公园里玩。|普莱因泽帕克
Parking|/ˈpɑːkɪŋ/|帕金|停车|Find parking.|找停车位。|芬德帕金
Part|/pɑːt/|帕特|部分|Play a part.|扮演一个角色。|普莱阿帕特
Partner|/ˈpɑːtnə(r)/|帕特纳|伙伴|Work with a partner.|和伙伴一起工作。|沃克维泽阿帕特纳
Party|/ˈpɑːti/|帕蒂|聚会|Have a party.|举办聚会。|海夫阿帕蒂
Pass|/pɑːs/|帕斯|通过|Pass the test.|通过考试。|帕斯泽泰斯特
Passenger|/ˈpæsɪndʒə(r)/|帕森哲|乘客|Help the passenger.|帮助乘客。|海尔泽帕森哲
Passport|/ˈpɑːspɔːt/|帕斯波特|护照|Show your passport.|出示你的护照。|肖优尔帕斯波特
Past|/pɑːst/|帕斯特|过去|Think about the past.|思考过去。|辛克啊包特泽帕斯特
Patch|/pætʃ/|帕奇|补丁|Fix the patch.|修补补丁。|费克泽帕奇
Path|/pɑːθ/|帕斯|小路|Follow the path.|沿着小路走。|福罗泽帕斯
Patience|/ˈpeɪʃns/|佩恩斯|耐心|Have patience.|有耐心。|海夫佩恩斯
Pattern|/ˈpætn/|帕腾|模式|Follow the pattern.|遵循模式。|福罗泽帕腾
Pause|/pɔːz/|波斯|暂停|Take a pause.|暂停一下。|忒克阿波斯
Peace|/piːs/|皮斯|和平|Want peace.|想要和平。|旺特皮斯
Peach|/piːtʃ/|皮奇|桃子|Eat a peach.|吃桃子。|伊特阿皮奇
Peak|/piːk/|皮克|山峰|Climb the peak.|爬山峰。|克莱姆泽皮克
Pear|/peə(r)/|佩尔|梨|Eat a pear.|吃梨。|伊特阿佩尔
Pearl|/pɜːl/|坡尔|珍珠|Wear a pearl.|戴珍珠。|威尔阿坡尔
Peck|/pek/|佩克|啄|The bird pecks.|鸟在啄。|泽博德佩克斯
Peel|/piːl/|皮尔|削皮|Peel the apple.|削苹果。|皮尔泽阿珀欧
Peer|/pɪə(r)/|皮尔|同龄人|Work with peers.|与同龄人一起工作。|沃克维泽皮尔斯
Pen|/pen/|佩恩|钢笔|Write with a pen.|用钢笔写。|瑞特维泽阿佩恩
Penalty|/ˈpenəlti/|佩纳尔提|惩罚|Face a penalty.|面临惩罚。|费斯阿佩纳尔提
Pencil|/ˈpensl/|佩恩索尔|铅笔|Draw with a pencil.|用铅笔画。|德罗维泽阿佩恩索尔
Penny|/ˈpeni/|佩尼|便士|Spend a penny.|花一便士。|斯佩恩德阿佩尼
People|/ˈpiːpl/|皮珀尔|人们|Many people.|许多人。|梅尼皮珀尔
Pepper|/ˈpepə(r)/|/胡椒|Add pepper.|加胡椒。|艾德佩珀
Per|/pɜː(r)/|坡尔|每|Cost per item.|每件成本。|科斯特坡尔艾特姆
Percent|/pəˈsent/|坡森特|百分比|Fifty percent.|百分之五十。|菲夫蒂坡森特
Perfect|/ˈpɜːfɪkt/|坡佛费克特|完美的|Be perfect.|是完美的。|比坡佛费克特
Perform|/pəˈfɔːm/|坡佛奥姆|表演|Perform on stage.|在舞台上表演。|坡佛奥姆昂斯得奇
Perhaps|/pəˈhæps/|坡哈普斯|也许Perhaps not.|也许不是。|坡哈普斯诺特
Period|/ˈpɪəriəd/|皮瑞尔德|时期|Study this period.|研究这个时期。|斯塔迪泽斯皮瑞尔德
Permanent|/ˈpɜːmənənt/|坡莫嫩特|永久的|Make it permanent.|使其永久。|梅克伊特坡莫嫩特
Permission|/pəˈmɪʃn/|坡米申|许可|Ask permission.|请求许可。|阿斯坡米申
Permit|/ˈpɜːmɪt/|坡米特|许可证|Need a permit.|需要许可证。|尼德阿坡米特
Person|/ˈpɜːsn/|坡森|人|One person.|一个人。|万坡森
Personal|/ˈpɜːsənl/|坡瑟诺尔|个人的|Keep it personal.|保密。|基普伊特坡瑟诺尔
Persuade|/pəˈsweɪd/|坡斯威德|说服|Persuade him.|说服他。|坡斯威德希姆
Pest|/pest/|佩斯特|害虫|Kill the pest.|消灭害虫。|kill泽佩斯特
Pet|/pet/|佩特|宠物|Love your pet.|爱你的宠物。|拉夫优尔佩特
Petrol|/ˈpetrəl/|佩特罗尔|汽油|Buy petrol.|买汽油。|拜佩特罗尔
Phase|/feɪz/|菲兹|阶段|Enter a new phase.|进入新阶段。|恩特阿尼乌菲兹
Phone|/fəʊn/|丰|电话|Answer the phone.|接电话。|安塞尔泽丰
Photo|/ˈfəʊtəʊ/|福透|照片|Take a photo.|拍照。|忒克阿福透
Phrase|/freɪz/|夫瑞兹|短语|Learn a phrase.|学习一个短语。|勒恩阿夫瑞兹
Physical|/ˈfɪzɪkl/|菲兹可尔|身体的|Physical exercise.|体育锻炼。|菲兹可尔艾克萨塞兹
Piano|/piˈænəʊ/|皮阿诺|钢琴|Play the piano.|弹钢琴。|普莱泽皮阿诺
Pick|/pɪk/|皮克|挑选|Pick one.|挑选一个。|皮克万
Picnic|/ˈpɪknɪk/|皮克尼克|野餐|Have a picnic.|去野餐。|海夫阿皮克尼克
Piece|/piːs/|皮斯|片|Cut into pieces.|切成片。|卡特因托皮西兹
Pig|/pɪɡ/|皮格|猪|Raise a pig.|养猪。|瑞兹阿皮格
Pile|/paɪl/|派尔|堆|Make a pile.|堆起来。|梅克阿派尔
Pillow|/ˈpɪləʊ/|皮楼|枕头|Use a pillow.|用枕头。|尤兹阿皮楼
Pilot|/ˈpaɪlət/|派勒特|飞行员|Become a pilot.|成为飞行员。|比卡姆阿派勒特
Pin|/pɪn/|皮恩|别针|Fasten a pin.|别上别针。|法森阿皮恩
Pinch|/pɪntʃ/|品奇|拧|Pinch the skin.|拧皮肤。|品奇泽斯金
Pine|/paɪn/|派恩|松树|Plant a pine.|种松树。|普兰特阿派恩
Pink|/pɪŋk/|平克|粉红色|Like pink.|喜欢粉红色。|莱克平克
Pint|/paɪnt/|派恩特|品脱|Drink a pint.|喝一品脱。|德林克阿派恩特
Pipe|/paɪp/|派普|管道|Fix the pipe.|修管道。|费克泽派普
Pity|/ˈpɪti/|皮提|遗憾|Feel pity.|感到遗憾。|费尔皮提
Place|/pleɪs/|普雷斯的|地方|Visit a new place.|参观一个新地方。|维兹阿尼乌普雷斯的
Plain|/pleɪn/|普雷恩|简单的|Simple and plain.|简单明了。|辛珀尔安普雷恩
Plan|/plæn/|普兰|计划|Make a plan.|制定计划。|梅克阿普兰
Plane|/pleɪn/|普雷恩|飞机|Take a plane.|坐飞机。|忒克阿普雷恩
Planet|/ˈplænɪt/|普兰尼特|行星|Study the planet.|研究行星。|斯塔迪泽普兰尼特
Plant|/plɑːnt/|普兰特|植物|Water the plant.|给植物浇水。|沃特泽普兰特
Plate|/pleɪt/|普雷特|盘子|Wash the plate.|洗盘子。|沃什泽普雷特
Play|/pleɪ/|普雷|玩|Play outside.|在外面玩。|普雷奥特赛德
Please|/pliːz/|普利兹|请|Say please.|请说请。|塞普利兹
Pleasure|/ˈpleʒə(r)/|普莱舍|快乐|My pleasure.|我的荣幸。|麦普莱舍
Plenty|/ˈplenti/|普兰提|很多|Have plenty.|有很多。|海夫普兰提
Plot|/plɒt/|普洛特|情节|Plan the plot.|规划情节。|普兰泽普洛特
Plug|/plʌɡ/|普拉格|插头|Plug in.|插入。|普拉格因
Plus|/plʌs/|普拉斯|加|Two plus three.|二加三。|图普拉斯 threes
Pocket|/ˈpɒkɪt/|波克特|口袋|Put in pocket.|放入口袋。|普特因波克特
Poem|/ˈpəʊɪm/|波艾姆|诗|Write a poem.|写一首诗。|瑞特阿波艾姆
Poet|/ˈpəʊɪt/|波艾特|诗人|Become a poet.|成为诗人。|比卡姆阿波艾特
Point|/pɔɪnt/|波因特|点|Make a point.|表明观点。|梅克阿波因特
Poison|/ˈpɔɪzn/|波艾森|毒药|Avoid poison.|避免毒药。|艾沃伊德波艾森
Poke|/pəʊk/|波克|戳|Poke the ball.|戳球。|波克泽波奥
Police|/pəˈliːs/|坡利斯|警察|Call the police.|报警。|考尔泽坡利斯
Polite|/pəˈlaɪt/|坡赖特|有礼貌的|Be polite.|要有礼貌。|比坡赖特
Political|/pəˈlɪtɪkl/|坡里提可尔|政治的|Political news.|政治新闻。|坡里提可尔牛兹
Politics|/ˈpɒlɪtɪks/|波里提克斯|政治|Study politics.|学习政治。|斯塔迪波里提克斯
Poll|/pəʊl/|波欧|投票|Take a poll.|进行投票。|忒克阿波欧
Pollute|/pəˈluːt/|坡露特|污染|Stop polluting.|停止污染。|斯多波露廷
Pool|/puːl/|普尔|泳池|Swim in pool.|在泳池游泳。|斯威姆因普尔
Poor|/pɔː(r)/|波奥|贫穷的|Help the poor.|帮助穷人。|海尔泽波奥
Pop|/pɒp/|波普|流行的|Like pop music.|喜欢流行音乐。|莱克波普谬泽克
Popular|/ˈpɒpjələr/|波普尤拉尔|流行的|Be popular.|受欢迎。|比波普尤拉尔
Population|/ˌpɒpjuˈleɪʃn/|波普尤雷申|人口|Large population.|人口众多。|拉奇波普尤雷申
Pork|/pɔːk/|波克|猪肉|Eat pork.|吃猪肉。|伊特波克
Port|/pɔːt/|波特|港口|Arrive at port.|到达港口。|艾瑞夫艾特波特
Position|/pəˈzɪʃn/|坡泽申|位置|Find position.|找位置。|芬德坡泽申
Positive|/ˈpɒzətɪv/|波泽提夫|积极的|Stay positive.|保持积极。|斯戴波泽提夫
Possess|/pəˈzes/|坡泽斯|拥有|Possess skill.|拥有技能。|坡泽斯斯格儿
Possible|/ˈpɒsəbl/|波瑟布尔|可能的|Make it possible.|使之成为可能。|梅克伊特波瑟布尔
Post|/pəʊst/|波斯特|帖子|Post online.|发帖子。|波斯特奥恩林
Pot|/pɒt/|波特|锅|Cook in pot.|用锅煮。|库克因波特
Potential|/pəˈtenʃl/|坡腾肖尔|潜在的|Great potential.|巨大潜力。|格瑞特坡腾肖尔
Pound|/paʊnd/|庞德|英镑|Spend a pound.|花一英镑。|斯佩恩德阿庞德
Pour|/pɔː(r)/|波奥|倒|Pour water.|倒水。|波奥沃特
Powder|/ˈpaʊdə(r)/|庞德|粉末|Use powder.|用粉末。|尤兹庞德
Power|/ˈpaʊə(r)/|庞尔|力量|Use power.|使用力量。|尤兹庞尔
Practical|/ˈpræktɪkl/|普拉克提可尔|实际的|Very practical.|非常实际。|韦瑞普拉克提可尔
Practice|/ˈpræktɪs/|普拉克提斯|练习|Daily practice.|日常练习。|戴利普拉克提斯
Praise|/preɪz/|普瑞兹|赞美|Give praise.|给予赞美。|吉夫普瑞兹
Pray|/preɪ/|普雷|祈祷|Let's pray.|让我们祈祷。|来次普雷
Prayer|/ˈpreə(r)/|普瑞尔|祈祷|Say a prayer.|做一个祷告。|塞阿普瑞尔
Preach|/priːtʃ/|普瑞奇|讲道|Preach the word.|讲道。|普瑞奇泽沃德
Precious|/ˈpreʃəs/|普瑞舍斯|珍贵的|Very precious.|非常珍贵。|韦瑞普瑞舍斯
Precise|/prɪˈsaɪs/|普瑞塞斯|精确的|Very precise.|非常精确。|韦瑞普瑞塞斯
Predict|/prɪˈdɪkt/|普瑞迪克特|预测|Predict the future.|预测未来。|普瑞迪克特泽菲丘彻
Prefer|/prɪˈfɜː(r)/|普瑞弗|更喜欢|Prefer tea.|更喜欢茶。|普瑞弗提
Pregnant|/ˈpregnənt/|普瑞格南特|怀孕的|Be pregnant.|怀孕。|比普瑞格南特
Prepare|/prɪˈpeə(r)/|普瑞佩尔|准备|Prepare dinner.|准备晚餐。|普瑞佩尔丁纳
Presence|/ˈprezns/|普瑞森斯|存在|Feel presence.|感到存在。|费尔普瑞森S
Present|/ˈpreznt/|普瑞森特|礼物|Give present.|送礼物。|吉夫普瑞森T
Present|/prɪˈzent/|普瑞森特|呈现|Present ideas.|呈现想法。|普瑞森特艾迪兹
President|/ˈprezɪdənt/|普瑞泽丹特|总统|Elect president.|选举总统。|伊莱克特普瑞泽丹特
Press|/pres/|普瑞斯|按|Press the button.|按按钮。|普瑞斯泽巴顿
Pressure|/ˈpreʃə(r)/|普瑞舍尔|压力|Under pressure.|在压力下。|昂德普瑞舍尔
Pretend|/prɪˈtend/|普瑞腾德|假装|Pretend to sleep.|假装睡觉。|普瑞腾特图斯利普
Pretty|/ˈprɪti/|普瑞提|漂亮的|Very pretty.|非常漂亮。|韦瑞普瑞提
Prevent|/prɪˈvent/|普瑞文特|阻止|Prevent disease.|预防疾病。|普瑞文特迪泽兹
Previous|/ˈpriːviəs/|普瑞维尔斯|之前的|Previous.|前一天 day。|普瑞维尔斯戴
Price|/praɪs/|普赖斯|价格|Check price.|查看价格。|切克普赖斯
Pride|/praɪd/|普赖德|骄傲|Feel pride.|感到骄傲。|费尔普赖德
Priest|/priːst/|普瑞斯特|牧师|See the priest.|见牧师。|西泽普瑞斯特
Primary|/ˈpraɪməri/|普赖莫瑞|主要的|Primary school.|小学。|普赖莫瑞斯古尔
Prime|/praɪm/|普赖姆|主要的|Prime minister.|首相。|普赖姆米尼斯特
Prince|/prɪns/|普林斯|王子|See the prince.|见王子。|西泽普林斯
Princess|/prɪnˈses/|普林塞斯|公主|See the princess.|见公主。|西泽普林塞S
Principal|/ˈprɪnsəpl/|普林瑟普尔|校长|See the principal.|见校长。|西泽普林瑟普尔
Principle|/ˈprɪnsəpl/|普林瑟普尔|原则|Follow principle.|遵循原则。|福罗普林瑟普尔
Print|/prɪnt/|普林特|打印|Print the file.|打印文件。|普林特泽非欧
Prior|/ˈpraɪə(r)/|普赖尔|之前的|Prior notice.|事先通知。|普赖尔诺提斯
Prison|/ˈprɪzn/|普里森|监狱|Go to prison.|入狱。|果图普里森
Private|/ˈpraɪvət/|普赖维特|私人的|Private life.|私生活。|普赖维特赖夫
Prize|/praɪz/|普赖兹|奖品|Win prize.|获奖。|温普赖斯
Problem|/ˈprɒbləm/|普罗布勒姆|问题|Solve problem.|解决问题。|索尔弗普罗布勒姆
Procedure|/prəˈsiːdʒə(r)/|普瑞锡哲|程序|Follow procedure.|遵循程序。|福罗普瑞锡哲
Proceed|/prəˈsiːd/|普瑞锡德|继续|Proceed with work.|继续工作。|普瑞锡德维泽沃克
Process|/ˈprəʊses/|普罗塞斯|过程|Finish process.|完成过程。|芬尼什普罗塞斯
Produce|/prəˈdjuːs/|普瑞丢斯|生产|Produce goods.|生产商品。|普瑞丢斯古兹
Product|/ˈprɒdʌkt/|普罗达克特|产品|New product.|新产品。|尼乌普罗达克特
Profession|/prəˈfeʃn/|普瑞费申|职业|Choose profession.|选择职业。|丘兹普瑞费申
Professor|/prəˈfesə(r)/|普瑞费瑟尔|教授|Meet professor.|见教授。|米特普瑞费瑟尔
Profit|/ˈprɒfɪt/|普罗费特|利润|Make profit.|盈利。|梅克普罗费特
Program|/ˈprəʊɡræm/|普罗格兰|程序|Write program.|写程序。|瑞特普罗格兰
Progress|/ˈprəʊɡres/|普罗格瑞斯|进步|Make progress.|取得进步。|梅克普罗格瑞斯
Project|/ˈprɒd�ekt/|普罗杰克特|项目|Start project.|开始项目。|斯达特普罗杰克特
Promise|/ˈprɒmɪs/|普罗米斯|承诺|Keep promise.|守承诺。|基普普罗米斯
Promote|/prəˈməʊt/|普瑞莫特|促进|Promote growth.|促进增长。|普瑞莫特格罗斯
Pronounce|/prəˈnaʊns/|普瑞南斯|发音|Learn pronounce.|学习发音。|勒恩普瑞南斯
Proof|/pruːf/|普鲁夫|证据|Need proof.|需要证据。|尼德普鲁夫
Proper|/ˈprɒpə(r)/|普罗珀尔|适当的|Proper way.|正确的方式。|普罗珀尔韦
Property|/ˈprɒpəti/|普罗珀提|财产|Own property.|拥有财产。|奥恩普罗珀提
Proportion|/prəˈpɔːʃn/|普瑞波申|比例|Right proportion.|正确的比例。|瑞特普瑞波申
Proposal|/prəˈpəʊzl/|普瑞波泽尔|提议|Accept proposal.|接受提议。|艾克塞普特普瑞波泽尔
Propose|/prəˈpəʊz/|普瑞波兹|提议|Propose idea.|提出想法。|普瑞波兹艾迪
Protect|/prəˈtekt/|普瑞泰克特|保护|Protect nature.|保护自然。|普瑞泰克特内彻
Protest|/ˈprəʊtest/|普罗泰斯特|抗议|Make protest.|抗议。|梅克普罗泰斯特
Proud|/praʊd/|普劳德|骄傲的|Feel proud.|感到骄傲。|费尔普劳德
Prove|/pruːv/|普鲁夫|证明|Prove truth.|证明真相。|普鲁夫纯斯
Provide|/prəˈvaɪd/|普瑞威德|提供|Provide help.|提供帮助。|普瑞威德海尔普
Province|/ˈprɒvɪns/|普罗文斯|省|Visit province.|参观省份。|维兹普罗文S
Provision|/prəˈvɪʒn/|普瑞威申|供应|Food provision.|食物供应。|福德普瑞威申
Provoke|/prəˈvəʊk/|普瑞沃克|挑衅|Provoke anger.|激怒。|普瑞沃克安格尔
Psychology|/saɪˈkɒlədʒi/|赛科罗奇|心理学|Study psychology.|学习心理学。|斯塔迪赛科罗奇
Public|/ˈpʌblɪk/|帕布里克|公共的|Public place.|公共场所。|帕布里克普雷斯
Publication|/ˌpʌblɪˈkeɪʃn/|帕布里克诶申|出版物|New publication.|新出版物。|尼乌帕布里克诶申
Publicity|/pʌbˈlɪsəti/|帕布里斯提|宣传|Get publicity.|获得宣传。|盖特帕布里斯提
Publish|/ˈpʌblɪʃ/|帕布利什|出版|Publish book.|出版书籍。|帕布利什布克
Pudding|/ˈpʊdɪŋ/|帕丁|布丁|Eat pudding.|吃布丁。|伊特帕丁
Pull|/pʊl/|帕尔|拉|Pull the door.|拉门。|帕尔泽多
Pump|/pʌmp/|帕姆普|泵|Use pump.|使用泵。|尤兹帕姆普
Punch|/pʌntʃ/|潘奇|拳击|Give punch.|给一拳。|吉夫潘奇
Punctual|/ˈpʌŋktʃuəl/|庞克丘尔|准时的|Be punctual.|要准时。|比庞克丘尔
Punish|/ˈpʌnɪʃ/|帕尼什|惩罚|Punish crime.|惩罚犯罪。|帕尼什克拉艾姆
Pupil|/ˈpjuːpl/|皮尤珀尔|学生|Teach pupil.|教学生。|提奇皮尤珀尔
Puppy|/ˈpʌpi/|帕皮|小狗|Adopt puppy.|收养小狗。|艾多特帕皮
Purchase|/ˈpɜːtʃəs/|坡彻斯|购买|Make purchase.|购买。|梅克坡彻斯
Pure|/pjʊə(r)/|皮尤尔|纯粹的|Pure water.|纯净水。|皮尤尔沃特
Purple|/ˈpɜːpl/|坡普尔|紫色|Like purple.|喜欢紫色。|莱克坡普尔
Purpose|/ˈpɜːpəs/|坡珀斯|目的|State purpose.|说明目的。|斯戴特坡珀斯
Purse|/pɜːs/|坡斯|钱包|Lose purse.|丢失钱包。|洛斯坡斯
Pursue|/pəˈsjuː/|坡休|追求|Pursue dream.|追求梦想。|坡休德瑞姆
Push|/pʊʃ/|帕什|推|Push the button.|按按钮。|帕什泽巴顿
Put|/pʊt/|帕特|放|Put it down.|把它放下。|帕特伊特当
Puzzle|/ˈpʌzl/|帕泽尔|谜题|This is a difficult puzzle.|这是一个困难的谜题。|迪斯伊兹阿迪菲卡尔特帕泽尔`;

const wordsToAdd = wordData.split('\n').map(line => {
    const parts = line.split('|');
    if (parts.length >= 7) {
        return {
            word: parts[0].trim(),
            phonetic: parts[1].trim(),
            homophone: parts[2].trim(),
            meaning: parts[3].trim(),
            sentence: parts[4].trim(),
            translation: parts[5].trim(),
            homophoneSentence: parts[6].trim()
        };
    }
    return null;
}).filter(w => w !== null);

const categories = ['greetings', 'emotions', 'numbers', 'colors', 'family', 'time', 'food', 'conversations', 'sentences'];

const existingWords = new Set();
categories.forEach(cat => {
    const regex = new RegExp(`${cat}:\\s*\\[([\\s\\S]*?)\\n    \\]`, 'g');
    let match;
    while ((match = regex.exec(data)) !== null) {
        const arrayContent = match[1];
        const wordRegex = /word:\s*['"]([^'"]+)['"]/g;
        let wordMatch;
        while ((wordMatch = wordRegex.exec(arrayContent)) !== null) {
            existingWords.add(wordMatch[1].toLowerCase());
        }
    }
});

const newWords = wordsToAdd.filter(w => !existingWords.has(w.word.toLowerCase()));
console.log(`Total new words to add: ${newWords.length}`);

const wordsPerCategory = Math.ceil(newWords.length / categories.length);

categories.forEach((cat, index) => {
    const startIdx = index * wordsPerCategory;
    const endIdx = Math.min(startIdx + wordsPerCategory, newWords.length);
    const catWords = newWords.slice(startIdx, endIdx);
    
    if (catWords.length === 0) return;
    
    const catRegex = new RegExp(`(${cat}:\\s*\\[)([\\s\\S]*?)(\\],\\s*\\w+:)`);
    const match = data.match(catRegex);
    
    if (match) {
        const newEntries = catWords.map(w => {
            const escapedWord = w.word.replace(/'/g, "\\'");
            const escapedSentence = w.sentence.replace(/'/g, "\\'");
            const escapedTranslation = w.translation.replace(/'/g, "\\'");
            const escapedHomophoneSentence = w.homophoneSentence.replace(/'/g, "\\'");
            
            return `{ word: '${escapedWord}', phonetic: '${w.phonetic}', homophone: '${w.homophone}', meaning: '${w.meaning}', sentence: '${escapedSentence}', translation: '${escapedTranslation}', homophoneSentence: '${escapedHomophoneSentence}' }`;
        }).join(',\n        ');
        
        data = data.replace(catRegex, `$1$2${match[2] ? ',\n        ' : ''}${newEntries}$3`);
        console.log(`Added ${catWords.length} words to ${cat}`);
    }
});

fs.writeFileSync(filePath, data, 'utf8');
console.log('Done!');
