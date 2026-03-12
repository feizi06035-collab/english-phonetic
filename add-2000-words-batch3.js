const fs = require('fs');

const wordData = `Fabric|/ˈfæbrɪk/|法布里克|织物|The fabric is soft.|这种织物很柔软。|泽法布里克伊兹索夫特
Facility|/fəˈsɪləti/|法西拉蒂|设施|The hotel has good facilities.|酒店设施很好。|泽霍特尔哈兹古德法西利蒂兹
Fact|/fækt/|法克特|事实|This is a fact.|这是事实。|迪斯伊兹阿法克特
Factor|/ˈfæktə(r)/|法克特|因素|Consider all factors.|考虑所有因素。|康西德奥尔法克特兹
Factory|/ˈfæktri/|法克特里|工厂|The factory produces cars.|这家工厂生产汽车。|泽法克特里普罗迪尤西斯卡兹
Faculty|/ˈfæklti/|法科尔蒂|全体教员|The faculty is meeting.|全体教员正在开会。|泽法科尔蒂伊兹米听
Fade|/feɪd/|费德|褪色|The color will fade.|颜色会褪色。|泽卡勒威尔费德
Fail|/feɪl/|费尔|失败|Do not fail me.|不要让我失望。|杜诺特费尔米
Failure|/ˈfeɪljə(r)/|费尔尤尔|失败|Failure is part of success.|失败是成功的一部分。|费尔尤尔伊兹帕特奥夫萨克塞斯
Faint|/feɪnt/|费恩特|微弱的|There was a faint sound.|有一声微弱的声音。|泽尔沃兹阿费恩特桑德
Fair|/feə(r)/|费尔|公平的|Be fair to everyone.|对每个人公平。|比费尔图埃夫里万
Fairly|/ˈfeəli/|费利|相当|This is fairly easy.|这相当容易。|迪斯伊兹费利伊齐
Faith|/feɪθ/|费斯|信念|Have faith in yourself.|对自己有信心。|海夫费斯因尤尔塞尔夫
Faithful|/ˈfeɪθfl/|费斯福|忠诚的|He is a faithful friend.|他是一位忠诚的朋友。|希伊兹阿费斯福弗伦德
Fall|/fɔːl/|福尔|落下|Leaves fall in autumn.|秋天树叶落下。|利夫兹福尔因奥特姆
False|/fɔːls/|福尔斯|错误的|This is false information.|这是错误的信息。|迪斯伊兹福尔斯因弗梅申
Fame|/feɪm/|费姆|名声|He achieved great fame.|他获得了巨大的名声。|希阿奇夫德格雷特费姆
Familiar|/fəˈmɪliə(r)/|法米利尔|熟悉的|This place looks familiar.|这个地方看起来很熟悉。|迪斯普莱斯卢克斯法米利尔
Family|/ˈfæməli/|法米利|家庭|Family is important.|家庭很重要。|法米利伊兹因波坦特
Famous|/ˈfeɪməs/|费默斯|著名的|He is a famous actor.|他是一位著名的演员。|希伊兹阿费默斯阿克特尔
Fan|/fæn/|范|粉丝|He is a big fan.|他是一个大粉丝。|希伊兹阿比格范
Fancy|/ˈfænsi/|范西|精致的|This is a fancy restaurant.|这是一家精致的餐厅。|迪斯伊兹阿范西雷斯特朗
Fantastic|/fænˈtæstɪk/|范塔斯蒂克|极好的|The movie was fantastic.|电影太棒了。|泽穆维沃兹范塔斯蒂克
Fantasy|/ˈfæntəsi/|范塔西|幻想|It was just a fantasy.|那只是一个幻想。|伊特沃兹贾斯特阿范塔西
Far|/fɑː(r)/|法尔|远的|How far is it?|有多远？|豪法尔伊兹伊特
Fare|/feə(r)/|费尔|票价|What is the fare?|票价是多少？|沃特伊兹泽费尔
Farm|/fɑːm/|法姆|农场|They live on a farm.|他们住在农场。|泽伊利夫昂阿法姆
Farmer|/ˈfɑːmə(r)/|法默|农民|The farmer works hard.|农民工作很辛苦。|泽法默沃克斯哈德
Fashion|/ˈfæʃn/|法申|时尚|She loves fashion.|她喜欢时尚。|希拉夫斯法申
Fashionable|/ˈfæʃnəbl/|法申纳布尔|时尚的|This is very fashionable.|这非常时尚。|迪斯伊兹韦里法申纳布尔
Fast|/fɑːst/|法斯特|快的|He runs very fast.|他跑得很快。|希兰兹韦里法斯特
Fasten|/ˈfɑːsn/|法森|系紧|Fasten your seatbelt.|系好安全带。|法森尤尔西特贝尔特
Fat|/fæt/|法特|脂肪|Too much fat is unhealthy.|太多脂肪不健康。|图马奇法特伊兹安海尔希
Fatal|/ˈfeɪtl/|费特尔|致命的|It was a fatal mistake.|那是一个致命的错误。|伊特沃兹阿费特米斯泰克
Fate|/feɪt/|费特|命运|Accept your fate.|接受你的命运。|阿克塞普特尤尔费特
Father|/ˈfɑːðə(r)/|法泽|父亲|My father is a doctor.|我的父亲是一名医生。|迈法泽伊兹阿多克特尔
Fatigue|/fəˈtiːɡ/|法蒂格|疲劳|He suffered from fatigue.|他因疲劳而受苦。|希萨弗德弗罗姆法蒂格
Fault|/fɔːlt/|福尔特|错误|It is not your fault.|这不是你的错。|伊特伊兹诺特尤尔福尔特
Favor|/ˈfeɪvə(r)/|费沃|恩惠|Can you do me a favor?|你能帮我一个忙吗？|坎优杜米阿费沃
Favorite|/ˈfeɪvərɪt/|费沃里特|最喜欢的|This is my favorite book.|这是我最喜欢的书。|迪斯伊兹迈费沃里特布克
Fear|/fɪə(r)/|菲尔|恐惧|Do not let fear stop you.|不要让恐惧阻止你。|杜诺特莱特菲尔斯托普优
Feast|/fiːst/|菲斯特|盛宴|We had a great feast.|我们有一场盛大的宴会。|威哈德阿格雷特菲斯特
Feather|/ˈfeðə(r)/|费泽|羽毛|The bird has colorful feathers.|这只鸟有五颜六色的羽毛。|泽伯德哈兹卡勒弗费泽兹
Feature|/ˈfiːtʃə(r)/|菲切尔|特征|This is a key feature.|这是一个关键特征。|迪斯伊兹阿基菲切尔
February|/ˈfebruəri/|费布鲁阿里|二月|February is the shortest month.|二月是最短的月份。|费布鲁阿里伊兹泽肖泰斯特曼斯
Federal|/ˈfedərəl/|费德拉尔|联邦的|The federal government.|联邦政府。|泽费德拉尔加沃门特
Fee|/fiː/|菲|费用|What is the fee?|费用是多少？|沃特伊兹泽菲
Feeble|/ˈfiːbl/|菲布尔|虚弱的|He is too feeble to walk.|他太虚弱了走不动。|希伊兹图菲布尔图沃克
Feed|/fiːd/|菲德|喂养|Feed the animals.|喂养动物。|菲德泽埃尼梅尔兹
Feedback|/ˈfiːdbæk/|菲德巴克|反馈|Give me your feedback.|给我你的反馈。|吉夫米尤尔菲德巴克
Feel|/fiːl/|菲尔|感觉|I feel happy.|我感到快乐。|爱菲尔哈皮
Feeling|/ˈfiːlɪŋ/|菲林|感觉|Express your feelings.|表达你的感受。|伊克斯普雷斯尤尔菲林兹
Fellow|/ˈfeləʊ/|费洛|家伙|He is a nice fellow.|他是个好人。|希伊兹阿奈斯费洛
Female|/ˈfiːmeɪl/|菲梅尔|女性的|The female population is larger.|女性人口更多。|泽菲梅尔波普尤莱申伊兹拉杰
Fence|/fens/|芬斯|栅栏|Build a fence around the garden.|在花园周围建一个栅栏。|比尔德阿芬斯阿劳恩泽加登
Ferry|/ˈferi/|费里|渡船|Take the ferry across the river.|乘渡船过河。|泰克泽费里阿克罗斯泽里沃
Fertile|/ˈfɜːtaɪl/|弗泰尔|肥沃的|The land is fertile.|这片土地很肥沃。|泽兰德伊兹弗泰尔
Fertilizer|/ˈfɜːtəlaɪzə(r)/|弗泰莱泽|肥料|Use organic fertilizer.|使用有机肥料。|尤兹奥格尼克弗泰莱泽
Festival|/ˈfestɪvl/|费斯蒂沃|节日|The festival is in summer.|节日在夏天。|泽费斯蒂沃伊兹因萨默
Fetch|/fetʃ/|费奇|取来|Fetch me some water.|给我拿些水来。|费奇米萨姆沃特尔
Fever|/ˈfiːvə(r)/|菲沃|发烧|She has a high fever.|她发高烧。|希哈兹阿海菲沃
Few|/fjuː/|菲尤|很少|Only a few people came.|只有几个人来了。|昂利阿菲尤皮普尔凯姆
Fiber|/ˈfaɪbə(r)/|法伊伯|纤维|Eat more fiber.|多吃纤维。|伊特莫法伊伯
Fiction|/ˈfɪkʃn/|菲克申|小说|I enjoy reading fiction.|我喜欢读小说。|爱恩乔伊里丁菲克申
Field|/fiːld/|菲尔德|领域|He is an expert in this field.|他是这个领域的专家。|希伊兹安埃克斯珀特因迪斯菲尔德
Fierce|/fɪəs/|菲尔斯|凶猛的|The competition is fierce.|竞争很激烈。|泽康佩蒂申伊兹菲尔斯
Fifteen|/ˌfɪfˈtiːn/|菲夫廷|十五|There are fifteen students.|有十五名学生。|泽尔阿菲夫廷斯图登茨
Fifth|/fɪfθ/|菲夫斯|第五|This is the fifth time.|这是第五次。|迪斯伊兹泽菲夫斯泰姆
Fifty|/ˈfɪfti/|菲夫蒂|五十|He is fifty years old.|他五十岁了。|希伊兹菲夫蒂耶尔兹欧德
Fight|/faɪt/|法伊特|战斗|Fight for your rights.|为你的权利而战。|法伊特福尤尔赖茨
Figure|/ˈfɪɡə(r)/|菲格尔|数字|What do these figures mean?|这些数字是什么意思？|沃特杜齐兹菲格尔兹米恩
File|/faɪl/|法尔|文件|Save the file.|保存文件。|塞夫泽法尔
Fill|/fɪl/|菲尔|装满|Fill the glass with water.|把杯子装满水。|菲尔泽格拉斯威兹沃特尔
Film|/fɪlm/|菲尔姆|电影|Watch a good film.|看一部好电影。|沃奇阿古德菲尔姆
Filter|/ˈfɪltə(r)/|菲尔特|过滤器|Change the filter.|更换过滤器。|切因奇泽菲尔特
Final|/ˈfaɪnl/|法因纳尔|最后的|This is the final decision.|这是最终决定。|迪斯伊兹泽法因纳尔迪西任
Finally|/ˈfaɪnəli/|法因纳利|最后|Finally we arrived.|最后我们到了。|法因纳利威阿莱夫德
Finance|/ˈfaɪnæns/|法南斯|金融|Study finance at university.|在大学学习金融。|斯塔尔迪法南斯阿特尤尼沃西蒂
Financial|/faɪˈnænʃl/|法南谢尔|金融的|The financial situation is stable.|金融形势稳定。|泽法南谢尔西图埃申伊兹斯泰布尔
Find|/faɪnd/|法因德|找到|Find a solution.|找到解决方案。|法因德阿索卢申
Fine|/faɪn/|法因|好的|This is fine with me.|这对我来说可以。|迪斯伊兹法因威兹米
Finger|/ˈfɪŋɡə(r)/|芬格|手指|Point with your finger.|用手指指。|波因特威兹尤尔芬格
Finish|/ˈfɪnɪʃ/|菲尼什|完成|Finish your homework.|完成你的作业。|菲尼什尤尔霍姆沃克
Finite|/ˈfaɪnaɪt/|法因奈特|有限的|Resources are finite.|资源是有限的。|里索西斯阿法因奈特
Fire|/ˈfaɪə(r)/|法亚|火|The fire is burning.|火在燃烧。|泽法亚伊兹伯宁
Firm|/fɜːm/|弗姆|公司|He works for a law firm.|他在一家律师事务所工作。|希沃克斯福阿洛弗姆
First|/fɜːst/|弗斯特|第一|This is my first time.|这是我第一次。|迪斯伊兹迈弗斯特泰姆
Fish|/fɪʃ/|菲什|鱼|I like to eat fish.|我喜欢吃鱼。|爱莱克图伊特菲什
Fist|/fɪst/|菲斯特|拳头|He shook his fist.|他挥舞着拳头。|希舒克希兹菲斯特
Fit|/fɪt/|菲特|适合|This dress fits you well.|这件裙子很适合你。|迪斯德雷斯菲茨优韦尔
Fitness|/ˈfɪtnəs/|菲特尼斯|健身|Fitness is important for health.|健身对健康很重要。|菲特尼斯伊兹因波坦特福海尔思
Fix|/fɪks/|菲克斯|修理|Fix the problem.|解决问题。|菲克斯泽普罗布勒姆
Flag|/flæɡ/|弗拉格|旗帜|Raise the flag.|升起旗帜。|雷兹泽弗拉格
Flame|/fleɪm/|弗莱姆|火焰|The flame is bright.|火焰很亮。|泽弗莱姆伊兹布莱特
Flash|/flæʃ/|弗拉什|闪光|There was a flash of light.|有一道闪光。|泽尔沃兹阿弗拉什奥夫莱特
Flat|/flæt/|弗拉特|平坦的|The land is flat.|这片土地很平坦。|泽兰德伊兹弗拉特
Flavor|/ˈfleɪvə(r)/|弗莱沃|味道|This has a strong flavor.|这有很浓的味道。|迪斯哈兹阿斯特朗弗莱沃
Flee|/fliː/|弗利|逃离|They had to flee the city.|他们不得不逃离城市。|泽伊哈德图弗利泽西蒂
Flesh|/fleʃ/|弗莱什|肉体|The flesh is weak.|肉体是软弱的。|泽弗莱什伊兹威克
Flexible|/ˈfleksəbl/|弗莱克西布尔|灵活的|Be flexible in your approach.|在你的方法上要灵活。|比弗莱克西布尔因尤尔阿普罗奇
Flight|/flaɪt/|弗莱特|航班|The flight was delayed.|航班延误了。|泽弗莱特沃兹迪雷德
Float|/fləʊt/|弗洛特|漂浮|The boat floats on water.|船漂浮在水上。|泽博特弗洛茨昂沃特尔
Flock|/flɒk/|弗洛克|群|A flock of birds flew by.|一群鸟飞过。|阿弗洛克奥夫伯兹弗鲁拜
Flood|/flʌd/|弗拉德|洪水|The flood caused damage.|洪水造成了损害。|泽弗拉德科兹德达米奇
Floor|/flɔː(r)/|弗洛尔|地板|Sweep the floor.|扫地。|斯威普泽弗洛尔
Flour|/ˈflaʊə(r)/|弗劳尔|面粉|Use flour to make bread.|用面粉做面包。|尤兹弗劳尔图梅克布雷德
Flow|/fləʊt/|弗洛|流动|The river flows to the sea.|河流流入大海。|泽里沃弗洛斯图泽西
Flower|/ˈflaʊə(r)/|弗劳沃|花|The flower is beautiful.|花很美。|泽弗劳沃伊兹比欧特夫欧
Fluctuate|/ˈflʌktʃueɪt/|弗拉克丘埃特|波动|Prices fluctuate daily.|价格每天波动。|普莱西兹弗拉克丘埃特戴利
Fluid|/ˈfluːɪd/|弗卢伊德|流体|Blood is a bodily fluid.|血液是一种体液。|布拉德伊兹阿博迪利弗卢伊德
Flush|/flʌʃ/|弗拉什|冲水|Flush the toilet.|冲厕所。|弗拉什泽托伊莱特
Fly|/flaɪ/|弗莱|飞|Birds fly in the sky.|鸟在天空中飞翔。|伯兹弗莱因泽斯凯
Focus|/ˈfəʊkəs/|福克斯|关注|Focus on your work.|专注于你的工作。|福克斯昂尤尔沃克
Fog|/fɒɡ/|福格|雾|There is heavy fog today.|今天有大雾。|泽尔伊兹海维福格特戴
Fold|/fəʊld/|福尔德|折叠|Fold the paper.|折叠纸张。|福尔德泽佩珀
Folk|/fəʊk/|福克|人们|The local folk are friendly.|当地人很友好。|泽洛克尔福克阿弗伦德利
Follow|/ˈfɒləʊ/|法洛|跟随|Follow the instructions.|按照说明操作。|法洛泽因斯特拉克申兹
Follower|/ˈfɒləʊə(r)/|法洛沃|追随者|He has many followers.|他有很多追随者。|希哈兹梅尼法洛沃兹
Fond|/fɒnd/|丰德|喜欢的|I am fond of music.|我喜欢音乐。|爱阿姆丰德奥夫缪齐克
Food|/fuːd/|富德|食物|The food is delicious.|食物很美味。|泽富德伊兹迪利谢斯
Fool|/fuːl/|富尔|傻瓜|Do not be a fool.|不要做傻瓜。|杜诺特比阿富尔
Foolish|/ˈfuːlɪʃ/|富利什|愚蠢的|That was a foolish decision.|那是一个愚蠢的决定。|泽特沃兹阿富利什迪西任
Foot|/fʊt/|富特|脚|He hurt his foot.|他伤了他的脚。|希赫特希兹富特
Football|/ˈfʊtbɔːl/|富特博尔|足球|Play football with friends.|和朋友踢足球。|普雷富特博尔威兹弗伦兹
Footstep|/ˈfʊtstep/|富特斯泰普|脚步声|I heard footsteps.|我听到了脚步声。|爱赫德富特斯泰普斯
Forbid|/fəˈbɪd/|福比德|禁止|Smoking is forbidden here.|这里禁止吸烟。|斯莫金伊兹福比登希尔
Force|/fɔːs/|福斯|力量|Use force if necessary.|必要时使用武力。|尤兹福斯伊夫内塞瑟里
Forecast|/ˈfɔːkɑːst/|福卡斯特|预测|The weather forecast is good.|天气预报很好。|泽韦泽福卡斯特伊兹古德
Foreign|/ˈfɒrən/|福伦|外国的|She speaks foreign languages.|她会说外语。|希斯皮克斯福伦兰圭奇兹
Foreigner|/ˈfɒrənə(r)/|福伦纳|外国人|He is a foreigner.|他是一个外国人。|希伊兹阿福伦纳
Forest|/ˈfɒrɪst/|福雷斯特|森林|The forest is dense.|森林很茂密。|泽福雷斯特伊兹登斯
Forever|/fəˈrevə(r)/|福雷沃|永远|I will love you forever.|我会永远爱你。|爱威尔拉夫优福雷沃
Forget|/fəˈɡet/|福盖特|忘记|Do not forget me.|不要忘记我。|杜诺特福盖特米
Forgive|/fəˈɡɪv/|福吉夫|原谅|Forgive and forget.|原谅并忘记。|福吉夫安德福盖特
Fork|/fɔːk/|福克|叉子|Use a fork to eat.|用叉子吃饭。|尤兹阿福克图伊特
Form|/fɔːm/|福姆|形式|Fill out this form.|填写这张表格。|菲尔奥特迪斯福姆
Formal|/ˈfɔːml/|福梅尔|正式的|Wear formal clothes.|穿正式服装。|韦尔福梅尔克洛兹
Format|/ˈfɔːmæt/|福梅特|格式|Change the file format.|更改文件格式。|切因奇泽法尔福梅特
Formation|/fɔːˈmeɪʃn/|福梅申|形成|The formation of mountains.|山脉的形成。|泽福梅申奥夫芒滕兹
Former|/ˈfɔːmə(r)/|福默|以前的|The former president.|前总统。|泽福默普雷齐登特
Formula|/ˈfɔːmjələ/|福米尤拉|公式|Use the correct formula.|使用正确的公式。|尤兹泽科雷克特福米尤拉
Forth|/fɔːθ/|福斯|向前|Go forth and explore.|向前探索。|戈福斯安德伊克斯普洛
Fortnight|/ˈfɔːtnaɪt/|福特奈特|两周|See you in a fortnight.|两周后见。|西优因阿福特奈特
Fortune|/ˈfɔːtʃuːn/|福丘恩|财富|He made a fortune.|他发了财。|希梅德阿福丘恩
Forty|/ˈfɔːti/|福蒂|四十|She is forty years old.|她四十岁了。|希伊兹福蒂耶尔兹欧德
Forward|/ˈfɔːwəd/|福沃德|向前|Move forward.|向前移动。|穆夫福沃德
Foster|/ˈfɒstə(r)/|福斯特|培养|Foster good relationships.|培养良好的关系。|福斯特古德里莱申希普斯
Found|/faʊnd/|法翁德|建立|They founded a new company.|他们创办了一家新公司。|泽伊法翁德德阿纽康帕尼
Foundation|/faʊnˈdeɪʃn/|法翁戴申|基础|The foundation of the building.|建筑的基础。|泽法翁戴申奥夫泽比尔丁
Fountain|/ˈfaʊntən/|法翁滕|喷泉|There is a fountain in the park.|公园里有一个喷泉。|泽尔伊兹阿法翁滕因泽帕克
Four|/fɔː(r)/|福尔|四|There are four seasons.|有四个季节。|泽尔阿福尔斯伊森兹
Fourteen|/ˌfɔːˈtiːn/|福尔廷|十四|She is fourteen years old.|她十四岁了。|希伊兹福尔廷耶尔兹欧德
Fourth|/fɔːθ/|福斯|第四|This is the fourth attempt.|这是第四次尝试。|迪斯伊兹泽福斯阿坦普特
Fox|/fɒks/|福克斯|狐狸|The fox is clever.|狐狸很聪明。|泽福克斯伊兹克莱沃
Fraction|/ˈfrækʃn/|弗拉克申|小部分|Only a fraction of the work is done.|只完成了一小部分工作。|昂利阿弗拉克申奥夫泽沃克伊兹丹
Fragment|/ˈfræɡmənt/|弗拉格门特|碎片|The vase broke into fragments.|花瓶碎成了碎片。|泽韦兹布罗克因图弗拉格门茨
Frame|/freɪm/|弗雷姆|框架|Put the picture in a frame.|把照片放在框架里。|普特泽皮克切尔因阿弗雷姆
Framework|/ˈfreɪmwɜːk/|弗雷姆沃克|框架|We need a legal framework.|我们需要一个法律框架。|威尼德阿利格尔弗雷姆沃克
Free|/friː/|弗里|自由的|You are free to go.|你可以自由离开。|优阿弗里图戈
Freedom|/ˈfriːdəm/|弗里德姆|自由|Fight for freedom.|为自由而战。|法伊特福弗里德姆
Freeze|/friːz/|弗里兹|冻结|Water freezes at zero degrees.|水在零度结冰。|沃特尔弗里兹阿特齐罗迪格里兹
Frequency|/ˈfriːkwənsi/|弗里奎恩西|频率|What is the frequency?|频率是多少？|沃特伊兹泽弗里奎恩西
Frequent|/ˈfriːkwənt/|弗里奎恩特|频繁的|He is a frequent visitor.|他是一个常客。|希伊兹阿弗里奎恩特维齐特尔
Fresh|/freʃ/|弗雷什|新鲜的|Eat fresh vegetables.|吃新鲜蔬菜。|伊特弗雷什维吉特布尔斯
Friction|/ˈfrɪkʃn/|弗里克申|摩擦|There is friction between them.|他们之间有摩擦。|泽尔伊兹弗里克申比特温泽姆
Friday|/ˈfraɪdeɪ/|弗莱戴|星期五|Friday is my favorite day.|星期五是我最喜欢的一天。|弗莱戴伊兹迈费沃里特戴
Fridge|/frɪdʒ/|弗里奇|冰箱|Put the milk in the fridge.|把牛奶放进冰箱。|普特泽米尔克因泽弗里奇
Friend|/frend/|弗伦德|朋友|She is my best friend.|她是我最好的朋友。|希伊兹迈贝斯特弗伦德
Friendly|/ˈfrendli/|弗伦德利|友好的|The people are friendly.|人们很友好。|泽皮普尔阿弗伦德利
Friendship|/ˈfrendʃɪp/|弗伦德希普|友谊|Our friendship is strong.|我们的友谊很牢固。|阿维尔弗伦德希普伊兹斯特朗
Frighten|/ˈfraɪtn/|弗莱滕|吓唬|Do not frighten the child.|不要吓唬孩子。|杜诺特弗莱滕泽恰尔德
Frog|/frɒɡ/|弗罗格|青蛙|The frog jumps into the water.|青蛙跳进水里。|泽弗罗格贾姆普斯因图泽沃特尔
From|/frɒm/|弗罗姆|从|I am from China.|我来自中国。|爱阿姆弗罗姆恰伊纳
Front|/frʌnt/|弗朗特|前面|Stand in front of me.|站在我前面。|斯坦德因弗朗特奥夫米
Frontier|/ˈfrʌntɪə(r)/|弗朗蒂尔|边境|They crossed the frontier.|他们越过了边境。|泽伊克洛斯特泽弗朗蒂尔
Frost|/frɒst/|弗罗斯特|霜|There was frost on the ground.|地上有霜。|泽尔沃兹弗罗斯特昂泽格朗德
Frown|/fraʊn/|弗劳恩|皱眉|Why are you frowning?|你为什么皱眉？|威阿优弗劳宁
Frozen|/ˈfrəʊzn/|弗罗泽恩|冻结的|The lake is frozen.|湖结冰了。|泽莱克伊兹弗罗泽恩
Fruit|/fruːt/|弗鲁特|水果|Eat fresh fruit.|吃新鲜水果。|伊特弗雷什弗鲁特
Frustrate|/frʌˈstreɪt/|弗拉斯特雷特|使沮丧|Do not frustrate yourself.|不要让自己沮丧。|杜诺特弗拉斯特雷特尤尔塞尔夫
Frustration|/frʌˈstreɪʃn/|弗拉斯特雷申|沮丧|He felt frustration.|他感到沮丧。|希菲尔特弗拉斯特雷申
Fuel|/ˈfjuːəl/|菲尤尔|燃料|The car needs fuel.|汽车需要燃料。|泽卡尔尼兹菲尤尔
Fulfill|/fʊlˈfɪl/|富菲尔|实现|Fulfill your dreams.|实现你的梦想。|富菲尔尤尔德里姆斯
Full|/fʊl/|富尔|满的|The glass is full.|杯子满了。|泽格拉斯伊兹富尔
Fun|/fʌn/|范|乐趣|Have fun!|玩得开心！|海夫范
Function|/ˈfʌŋkʃn/|范克申|功能|What is the function of this?|这个的功能是什么？|沃特伊兹泽范克申奥夫迪斯
Fund|/fʌnd/|范德|基金|The fund is for education.|这个基金用于教育。|泽范德伊兹福埃朱凯申
Fundamental|/ˌfʌndəˈmentl/|范达门特尔|基本的|This is a fundamental right.|这是一项基本权利。|迪斯伊兹阿范达门特尔赖特
Funeral|/ˈfjuːnərəl/|菲尤纳拉尔|葬礼|Attend the funeral.|参加葬礼。|阿坦德泽菲尤纳拉尔
Funny|/ˈfʌni/|范尼|有趣的|That is very funny.|那很有趣。|泽特伊兹韦里范尼
Fur|/fɜː(r)/|弗尔|皮毛|The cat has soft fur.|这只猫有柔软的皮毛。|泽卡特哈兹索夫特弗尔
Furious|/ˈfjʊəriəs/|菲尤里厄斯|愤怒的|He was furious about the news.|他对这个消息很愤怒。|希沃兹菲尤里厄斯阿鲍特泽纽兹
Furnish|/ˈfɜːnɪʃ/|弗尼什|布置|Furnish the room nicely.|把房间布置得漂亮。|弗尼什泽鲁姆奈斯利
Furniture|/ˈfɜːnɪtʃə(r)/|弗尼切尔|家具|Buy new furniture.|买新家具。|拜纽弗尼切尔
Further|/ˈfɜːðə(r)/|弗泽|进一步的|We need further discussion.|我们需要进一步讨论。|威尼德弗泽迪斯卡申
Furthermore|/ˌfɜːðəˈmɔː(r)/|弗泽莫|此外|Furthermore, I agree.|此外，我同意。|弗泽莫爱阿格里
Fury|/ˈfjʊəri/|菲尤里|愤怒|He was in a fury.|他非常愤怒。|希沃兹因阿菲尤里
Fuse|/fjuːz/|菲尤兹|保险丝|The fuse has blown.|保险丝烧断了。|泽菲尤兹哈兹布洛恩
Fuss|/fʌs/|法斯|大惊小怪|Do not make a fuss.|不要大惊小怪。|杜诺特梅克阿法斯
Future|/ˈfjuːtʃə(r)/|菲尤切尔|未来|The future is bright.|未来是光明的。|泽菲尤切尔伊兹布莱特`;

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
