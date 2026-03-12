const fs = require('fs');

const wordData = `Nail|/neɪl/|奈尔|指甲|Cut your nails.|剪指甲。|卡特尤尔奈尔兹
Naked|/ˈneɪkɪd/|奈基德|裸体的|The baby was naked.|婴儿是裸体的。|泽贝比沃兹奈基德
Name|/neɪm/|奈姆|名字|What is your name?|你叫什么名字？|沃特伊兹尤尔奈姆
Narrow|/ˈnærəʊ/|纳罗|狭窄的|The road is narrow.|道路很窄。|泽罗德伊兹纳罗
Nasty|/ˈnɑːsti/|纳斯蒂|令人讨厌的|The weather is nasty.|天气很糟糕。|泽韦泽伊兹纳斯蒂
Nation|/ˈneɪʃn/|内申|国家|The nation is developing.|国家正在发展。|泽内申伊兹迪维洛平
National|/ˈnæʃnəl/|纳申纳尔|国家的|This is a national holiday.|这是一个国家法定假日。|迪斯伊兹阿纳申纳尔霍利代
Nationality|/ˌnæʃəˈnæləti/|纳申纳勒蒂|国籍|What is your nationality?|你的国籍是什么？|沃特伊兹尤尔纳申纳勒蒂
Native|/ˈneɪtɪv/|内蒂夫|本地的|He is a native speaker.|他是母语者。|希伊兹安内蒂夫斯皮克尔
Natural|/ˈnætʃrəl/|纳彻拉尔|自然的|This is a natural phenomenon.|这是一种自然现象。|迪斯伊兹阿纳彻拉尔菲诺米嫩
Naturally|/ˈnætʃrəli/|纳彻拉利|自然地|Naturally, I agreed.|自然地，我同意了。|纳彻拉利，艾阿格里德
Nature|/ˈneɪtʃə(r)/|内彻|自然|We should protect nature.|我们应该保护自然。|威舒德普罗泰克特内彻
Naval|/ˈneɪvl/|内维尔|海军的|He is a naval officer.|他是一名海军军官。|希伊兹阿内维尔奥菲瑟
Navigation|/ˌnævɪˈɡeɪʃn/|纳维盖申|导航|GPS helps with navigation.|GPS帮助导航。|GPS赫尔普斯威兹纳维盖申
Navy|/ˈneɪvi/|内维|海军|He joined the navy.|他加入了海军。|希乔因德泽内维
Near|/nɪə(r)/|尼厄|靠近|The school is near my house.|学校在我家附近。|泽斯库尔伊兹尼厄迈豪斯
Nearby|/ˈnɪəbaɪ/|尼厄拜|附近的|There is a store nearby.|附近有一家商店。|泽尔伊兹阿斯托尔尼厄拜
Nearly|/ˈnɪəli/|尼厄利|几乎|I nearly missed the bus.|我差点错过公交车。|艾尼厄利米斯特德泽巴斯
Neat|/niːt/|尼特|整洁的|Keep your room neat.|保持房间整洁。|基普尤尔鲁姆尼特
Necessary|/ˈnesəsəri/|内塞瑟里|必要的|Is it necessary to go?|有必要去吗？|伊兹伊特内塞瑟里图戈
Necessity|/nəˈsesəti/|内塞西蒂|必需品|Food is a necessity.|食物是必需品。|富德伊兹阿内塞西蒂
Neck|/nek/|内克|脖子|She wore a necklace around her neck.|她脖子上戴着项链。|希沃尔阿内克利斯阿劳恩德赫尔内克
Necklace|/ˈnekləs/|内克利斯|项链|The necklace is beautiful.|项链很漂亮。|泽内克利斯伊兹比尤蒂富尔
Need|/niːd/|尼德|需要|I need your help.|我需要你的帮助。|艾尼迪尤尔赫尔普
Needle|/ˈniːdl/|尼德尔|针|Thread the needle.|穿针。|斯雷德泽尼德尔
Negative|/ˈneɡətɪv/|内加蒂夫|消极的|Don't be so negative.|不要那么消极。|东特比索内加蒂夫
Neglect|/nɪˈɡlekt/|尼格莱克特|忽视|Don't neglect your health.|不要忽视你的健康。|东特尼格莱克特尤尔赫尔思
Negotiate|/nɪˈɡəʊʃieɪt/|尼戈希埃特|谈判|They are negotiating a deal.|他们正在谈判一项交易。|泽伊阿尼戈希埃廷阿迪尔
Negotiation|/nɪˌɡəʊʃiˈeɪʃn/|尼戈希埃申|谈判|The negotiation was successful.|谈判成功了。|泽尼戈希埃申沃兹萨克塞斯富尔
Neighbor|/ˈneɪbə(r)/|内伯|邻居|My neighbor is friendly.|我的邻居很友好。|迈内伯伊兹弗伦德利
Neighborhood|/ˈneɪbəhʊd/|内伯胡德|社区|This is a safe neighborhood.|这是一个安全的社区。|迪斯伊兹阿塞夫内伯胡德
Neither|/ˈnaɪðə(r)/|奈泽尔|两者都不|Neither option is good.|两个选择都不好。|奈泽尔奥普申伊兹古德
Nephew|/ˈnefjuː/|内菲尤|侄子|My nephew is young.|我的侄子很年轻。|迈内菲尤伊兹扬
Nerve|/nɜːv/|纳夫|神经|He has strong nerves.|他有很强的神经。|希哈兹斯特龙纳夫兹
Nervous|/ˈnɜːvəs/|纳沃斯|紧张的|I feel nervous before the exam.|考试前我感到紧张。|艾菲尔纳沃斯比福泽伊格扎姆
Nest|/nest/|内斯特|巢|The bird built a nest.|鸟筑了一个巢。|泽伯德比尔特阿内斯特
Net|/net/|内特|网|The fish got caught in the net.|鱼被网住了。|泽菲什戈特科特因泽内特
Network|/ˈnetwɜːk/|内特沃克|网络|The network is down.|网络断了。|泽内特沃克伊兹当
Neutral|/ˈnjuːtrəl/|纽特劳尔|中立的|Switzerland is a neutral country.|瑞士是一个中立国。|瑞士伊兹阿纽特劳尔坎特里
Never|/ˈnevə(r)/|内弗|从不|I will never forget you.|我永远不会忘记你。|艾威尔内弗福格特尤
Nevertheless|/ˌnevəðəˈles/|内弗泽莱斯|然而|Nevertheless, we continued.|然而，我们继续前进。|内弗泽莱斯，威康蒂纽德
New|/njuː/|纽|新的|I bought a new car.|我买了一辆新车。|艾博特阿纽卡尔
Newly|/ˈnjuːli/|纽利|新近|They are newly married.|他们刚结婚。|泽伊阿纽利马里德
News|/njuːz/|纽兹|新闻|I heard the news yesterday.|我昨天听到了这个消息。|艾赫德泽纽兹耶斯特迪
Newspaper|/ˈnjuːzpeɪpə(r)/|纽兹佩珀|报纸|I read the newspaper every day.|我每天读报纸。|艾里德泽纽兹佩珀埃弗里代
Next|/nekst/|内克斯特|下一个|What's the next step?|下一步是什么？|沃茨泽内克斯特斯泰普
Nice|/naɪs/|奈斯|好的|Have a nice day!|祝你今天愉快！|哈夫阿奈斯代
Nicely|/ˈnaɪsli/|奈斯利|很好地|She sings nicely.|她唱得很好。|希辛斯奈斯利
Niece|/niːs/|尼斯|侄女|My niece is cute.|我的侄女很可爱。|迈尼斯伊兹克尤特
Night|/naɪt/|奈特|夜晚|Good night!|晚安！|古德奈特
Nightmare|/ˈnaɪtmeə(r)/|奈特梅厄|噩梦|I had a nightmare.|我做了一个噩梦。|艾哈德阿奈特梅厄
Nine|/naɪn/|奈恩|九|I have nine books.|我有九本书。|艾哈夫奈恩布克斯
Nineteen|/ˌnaɪnˈtiːn/|奈恩廷|十九|She is nineteen years old.|她十九岁了。|希伊兹奈恩廷伊尔兹欧尔德
Ninety|/ˈnaɪnti/|奈恩蒂|九十|My grandmother is ninety.|我的祖母九十岁了。|迈格兰德马泽伊兹奈恩蒂
Ninth|/naɪnθ/|奈恩斯|第九|September is the ninth month.|九月是第九个月。|九月伊兹泽奈恩斯曼斯
No|/nəʊ/|诺|不|No, I don't agree.|不，我不同意。|诺，艾东特阿格里
Noble|/ˈnəʊbl/|诺布尔|高贵的|He is a noble man.|他是一个高尚的人。|希伊兹阿诺布尔曼
Nobody|/ˈnəʊbədi/|诺博迪|没有人|Nobody knows the answer.|没有人知道答案。|诺博迪诺兹泽安塞尔
Nod|/nɒd/|诺德|点头|He nodded in agreement.|他点头表示同意。|希诺迪德因阿格里门特
Noise|/nɔɪz/|诺伊兹|噪音|The noise is annoying.|噪音很烦人。|泽诺伊兹伊兹安诺英
Noisy|/ˈnɔɪzi/|诺伊齐|吵闹的|The classroom is noisy.|教室很吵。|泽克拉斯鲁姆伊兹诺伊齐
None|/nʌn/|南|没有一个|None of them came.|他们都没来。|南奥夫泽姆凯姆
Nonsense|/ˈnɒnsns/|南森斯|废话|That's nonsense!|那是废话！|泽茨南森斯
Noodle|/ˈnuːdl/|努德尔|面条|I like eating noodles.|我喜欢吃面条。|艾莱克伊廷努德尔兹
Noon|/nuːn/|努恩|中午|Let's meet at noon.|让我们中午见面。|莱茨米特阿特努恩
Nor|/nɔː(r)/|诺尔|也不|Neither he nor I know.|他和我都不知道。|奈泽尔希诺尔艾诺
Normal|/ˈnɔːml/|诺默尔|正常的|Is this normal?|这正常吗？|伊兹迪斯诺默尔
Normally|/ˈnɔːməli/|诺默利|通常|Normally, I wake up at seven.|通常，我七点醒来。|诺默利，艾韦克阿普阿特塞文
North|/nɔːθ/|诺斯|北方|The north is cold in winter.|北方冬天很冷。|泽诺斯伊兹科尔德因温特尔
Northern|/ˈnɔːðən/|诺泽恩|北方的|Northern Europe is beautiful.|北欧很美丽。|诺泽恩欧洲伊兹比尤蒂富尔
Nose|/nəʊz/|诺兹|鼻子|My nose is running.|我的鼻子在流鼻涕。|迈诺兹伊兹拉宁
Not|/nɒt/|诺特|不|I am not hungry.|我不饿。|艾阿姆诺特亨格里
Note|/nəʊt/|诺特|笔记|Take notes during the lecture.|讲座时做笔记。|泰克诺茨杜林泽莱克彻
Notebook|/ˈnəʊtbʊk/|诺特布克|笔记本|I bought a new notebook.|我买了一本新笔记本。|艾博特阿纽诺特布克
Nothing|/ˈnʌθɪŋ/|纳辛|没有什么|There is nothing to do.|没有什么可做的。|泽尔伊兹纳辛图杜
Notice|/ˈnəʊtɪs/|诺蒂斯|注意|I didn't notice you.|我没有注意到你。|艾迪登特诺蒂斯尤
Noticeable|/ˈnəʊtɪsəbl/|诺蒂萨布尔|明显的|The change is noticeable.|变化很明显。|泽钱奇伊兹诺蒂萨布尔
Notion|/ˈnəʊʃn/|诺申|概念|I have no notion of it.|我对它没有概念。|艾哈夫诺诺申奥夫伊特
Noun|/naʊn/|纳恩|名词|Cat is a noun.|猫是一个名词。|凯特伊兹阿纳恩
Novel|/ˈnɒvl/|诺维尔|小说|I'm reading a novel.|我正在读一本小说。|艾姆里丁阿诺维尔
November|/nəʊˈvembə(r)/|诺文伯|十一月|November is a cold month.|十一月是一个寒冷的月份。|诺文伯伊兹阿科尔德曼斯
Now|/naʊ/|纳乌|现在|Let's go now.|我们现在走吧。|莱茨戈纳乌
Nowadays|/ˈnaʊədeɪz/|纳乌代兹|如今|Nowadays, people use smartphones.|如今，人们使用智能手机。|纳乌代兹，皮普尔尤兹斯马特丰兹
Nowhere|/ˈnəʊweə(r)/|诺韦尔|无处|The key is nowhere to be found.|钥匙无处可寻。|泽基伊兹诺韦尔图比方德
Nuclear|/ˈnjuːkliə(r)/|纽克利厄|核能的|Nuclear energy is powerful.|核能很强大。|纽克利厄埃纳吉伊兹帕沃尔富尔
Number|/ˈnʌmbə(r)/|南伯|数字|What is your phone number?|你的电话号码是多少？|沃特伊兹尤尔丰南伯
Numerous|/ˈnjuːmərəs/|纽默勒斯|众多的|There are numerous options.|有很多选择。|泽尔阿纽默勒斯奥普申兹
Nurse|/nɜːs/|纳斯|护士|The nurse took care of the patient.|护士照顾病人。|泽纳斯特克凯尔奥夫泽佩申特
Nursery|/ˈnɜːsəri/|纳斯里|托儿所|The child goes to nursery.|孩子去托儿所。|泽柴尔德戈兹图纳斯里
Nut|/nʌt/|纳特|坚果|I like to eat nuts.|我喜欢吃坚果。|艾莱克图伊特纳茨
Nutrition|/njuˈtrɪʃn/|纽特里申|营养|Good nutrition is important.|良好的营养很重要。|古德纽特里申伊兹因波特恩特
Obedience|/əˈbiːdiəns/|厄比迪厄恩斯|服从|The dog shows obedience.|这只狗表现出服从。|泽多格肖兹厄比迪厄恩斯
Obedient|/əˈbiːdiənt/|厄比迪厄恩特|顺从的|Be obedient to your parents.|要听父母的话。|比厄比迪厄恩特图尤尔佩伦茨
Obey|/əʊˈbeɪ/|欧贝|服从|You must obey the rules.|你必须遵守规则。|尤马斯特欧贝泽鲁尔兹
Object|/ˈɒbdʒɪkt/|奥布杰克特|物体|What is that object?|那个物体是什么？|沃特伊兹泽特奥布杰克特
Objective|/əbˈdʒektɪv/|厄布杰克蒂夫|客观的|Be objective in your analysis.|在你的分析中要客观。|比厄布杰克蒂夫因尤尔阿纳莱西斯
Obligation|/ˌɒblɪˈɡeɪʃn/|奥布利盖申|义务|I have an obligation to help.|我有义务帮忙。|艾哈夫安奥布利盖申图赫尔普
Oblige|/əˈblaɪdʒ/|厄布莱奇|迫使|I am obliged to help you.|我有义务帮助你。|艾阿姆厄布莱奇德图赫尔普尤
Observation|/ˌɒbzəˈveɪʃn/|奥布泽韦申|观察|The observation was accurate.|观察是准确的。|泽奥布泽韦申沃兹阿克尤雷特
Observe|/əbˈzɜːv/|厄布泽夫|观察|Observe the rules.|遵守规则。|厄布泽夫泽鲁尔兹
Observer|/əbˈzɜːvə(r)/|厄布泽弗|观察者|He is a keen observer.|他是一位敏锐的观察者。|希伊兹阿基因厄布泽弗
Obstacle|/ˈɒbstəkl/|奥布斯塔克尔|障碍|Overcome the obstacle.|克服障碍。|欧弗卡姆泽奥布斯塔克尔
Obtain|/əbˈteɪn/|厄布泰恩|获得|How can I obtain a visa?|我如何获得签证？|豪坎艾厄布泰恩阿维萨
Obvious|/ˈɒbviəs/|奥布维厄斯|明显的|The answer is obvious.|答案很明显。|泽安塞尔伊兹奥布维厄斯
Obviously|/ˈɒbviəsli/|奥布维厄斯利|显然|Obviously, he is lying.|显然，他在撒谎。|奥布维厄斯利，希伊兹莱英
Occasion|/əˈkeɪʒn/|厄凯让|场合|This is a special occasion.|这是一个特殊的场合。|迪斯伊兹阿斯佩舍尔厄凯让
Occasional|/əˈkeɪʒənl/|厄凯让纳尔|偶尔的|He pays occasional visits.|他偶尔来访。|希佩兹厄凯让纳尔维西茨
Occasionally|/əˈkeɪʒənəli/|厄凯让纳利|偶尔|We meet occasionally.|我们偶尔见面。|威米特厄凯让纳利
Occupation|/ˌɒkjuˈpeɪʃn/|奥丘佩申|职业|What is your occupation?|你的职业是什么？|沃特伊兹尤尔奥丘佩申
Occupy|/ˈɒkjupaɪ/|奥丘派|占据|The army occupied the city.|军队占领了这座城市。|泽阿米奥丘派德泽西蒂
Occur|/əˈkɜː(r)/|厄克|发生|When did the accident occur?|事故是什么时候发生的？|温迪德泽阿克西登特厄克
Ocean|/ˈəʊʃn/|欧申|海洋|The ocean is vast.|海洋很广阔。|泽欧申伊兹瓦斯特
O'clock|/əˈklɒk/|厄克洛克|点钟|It's six o'clock.|现在是六点钟。|伊茨西克斯厄克洛克
October|/ɒkˈtəʊbə(r)/|奥克托伯|十月|October is an autumn month.|十月是秋季的月份。|奥克托伯伊兹安奥特姆曼斯
Odd|/ɒd/|奥德|奇怪的|That's an odd question.|那是一个奇怪的问题。|泽茨安奥德奎斯彻恩
Odds|/ɒdz/|奥德兹|几率|The odds are against us.|几率对我们不利。|泽奥德兹阿阿根斯特阿斯
Of|/ɒv/|奥夫|的|A cup of tea.|一杯茶。|阿卡普奥夫蒂
Off|/ɒf/|奥夫|关闭|Turn off the light.|关灯。|特恩奥夫泽莱特
Offence|/əˈfens/|厄芬斯|冒犯|I meant no offence.|我没有冒犯的意思。|艾梅恩特诺厄芬斯
Offend|/əˈfend/|厄芬德|冒犯|I didn't mean to offend you.|我不是故意冒犯你。|艾迪登特米恩图厄芬德尤
Offense|/əˈfens/|厄芬斯|进攻|The offense was strong.|进攻很猛烈。|泽厄芬斯沃兹斯特龙
Offensive|/əˈfensɪv/|厄芬西夫|冒犯的|His words were offensive.|他的话很冒犯。|希兹沃兹沃厄芬西夫
Offer|/ˈɒfə(r)/|奥弗|提供|I have an offer for you.|我有一个提议给你。|艾哈夫安奥弗福尤
Office|/ˈɒfɪs/|奥菲斯|办公室|I work in an office.|我在办公室工作。|艾沃克因安奥菲斯
Officer|/ˈɒfɪsə(r)/|奥菲瑟|军官|He is a police officer.|他是一名警官。|希伊兹阿波利斯奥菲瑟
Official|/əˈfɪʃl/|厄菲舍尔|官方的|This is an official document.|这是一份官方文件。|迪斯伊兹安厄菲舍尔多克尤门特
Offset|/ˈɒfset/|奥夫塞特|抵消|The gains offset the losses.|收益抵消了损失。|泽盖恩兹奥夫塞特泽洛西兹
Offspring|/ˈɒfsprɪŋ/|奥夫斯普林|后代|The offspring are healthy.|后代很健康。|泽奥夫斯普林阿赫尔西
Often|/ˈɒfn/|奥芬|经常|I often go there.|我经常去那里。|艾奥芬戈泽尔
Oh|/əʊ/|欧|哦|Oh, I see.|哦，我明白了。|欧，艾西
Oil|/ɔɪl/|奥尔|油|The car needs oil.|汽车需要油。|泽卡尔尼兹奥尔
Okay|/ˌəʊˈkeɪ/|欧凯|好的|Okay, let's go.|好的，我们走吧。|欧凯，莱茨戈
Old|/əʊld/|欧尔德|老的|The house is old.|房子很旧。|泽豪斯伊兹欧尔德
Olive|/ˈɒlɪv/|奥利夫|橄榄|Olive oil is healthy.|橄榄油很健康。|奥利夫奥尔伊兹赫尔西
Olympic|/əˈlɪmpɪk/|厄林皮克|奥林匹克的|The Olympic Games are popular.|奥运会很受欢迎。|泽厄林皮克盖姆斯阿波皮尤勒
Omit|/əʊˈmɪt/|欧米特|省略|Don't omit any details.|不要省略任何细节。|东特欧米特埃尼迪泰尔兹
On|/ɒn/|昂|在...上|The book is on the table.|书在桌子上。|泽布克伊兹昂泽泰布尔
Once|/wʌns/|万斯|一次|I have been there once.|我去过那里一次。|艾哈夫宾泽尔万斯
One|/wʌn/|万|一|I have one brother.|我有一个兄弟。|艾哈夫万布拉泽
Oneself|/wʌnˈself/|万塞尔夫|自己|One must believe in oneself.|人必须相信自己。|万马斯比利夫因万塞尔夫
Onion|/ˈʌnjən/|安尼恩|洋葱|I don't like onions.|我不喜欢洋葱。|艾东特莱克安尼恩兹
Online|/ˌɒnˈlaɪn/|昂莱恩|在线的|I bought it online.|我在网上买的。|艾博特伊特昂莱恩
Only|/ˈəʊnli/|欧恩利|只有|I only have one pen.|我只有一支笔。|艾欧恩利哈夫万彭
Onto|/ˈɒntuː/|昂图|到...上|Put the book onto the shelf.|把书放到架子上。|普特泽布克昂图泽谢尔夫
Open|/ˈəʊpən/|欧彭|打开|Open the door, please.|请打开门。|欧彭泽多尔，普利斯
Opening|/ˈəʊpənɪŋ/|欧平宁|开口|There is an opening in the wall.|墙上有一个开口。|泽尔伊兹安欧平宁因泽沃尔
Opera|/ˈɒprə/|奥普拉|歌剧|We went to the opera.|我们去看歌剧了。|威温特图泽奥普拉
Operate|/ˈɒpəreɪt/|奥珀雷特|操作|Can you operate this machine?|你能操作这台机器吗？|坎尤奥珀雷特迪斯马申
Operation|/ˌɒpəˈreɪʃn/|奥珀雷申|手术|The operation was successful.|手术成功了。|泽奥珀雷申沃兹萨克塞斯富尔
Operator|/ˈɒpəreɪtə(r)/|奥珀雷特尔|操作员|The operator will help you.|操作员会帮助你。|泽奥珀雷特尔威尔赫尔普尤
Opinion|/əˈpɪnjən/|厄平尼恩|意见|What is your opinion?|你的意见是什么？|沃特伊兹尤尔厄平尼恩
Opponent|/əˈpəʊnənt/|厄波嫩特|对手|He is a strong opponent.|他是一个强大的对手。|希伊兹阿斯特龙厄波嫩特
Opportunity|/ˌɒpəˈtjuːnəti/|奥珀图纳蒂|机会|This is a great opportunity.|这是一个很好的机会。|迪斯伊兹阿格雷特奥珀图纳蒂
Oppose|/əˈpəʊz/|厄波兹|反对|I oppose this plan.|我反对这个计划。|艾厄波兹迪斯普兰
Opposite|/ˈɒpəzɪt/|奥珀齐特|相反的|The bank is opposite the park.|银行在公园对面。|泽班克伊兹奥珀齐特泽帕克
Opposition|/ˌɒpəˈzɪʃn/|奥珀齐申|反对|The opposition was strong.|反对声很强烈。|泽奥珀齐申沃兹斯特龙
Optical|/ˈɒptɪkl/|奥普蒂克尔|光学的|Optical illusions are interesting.|光学错觉很有趣。|奥普蒂克尔伊卢让兹阿因特雷斯廷
Optimistic|/ˌɒptɪˈmɪstɪk/|奥普蒂米斯蒂克|乐观的|Be optimistic about the future.|对未来要乐观。|比奥普蒂米斯蒂克阿鲍特泽菲尤切尔
Option|/ˈɒpʃn/|奥普申|选择|You have two options.|你有两个选择。|尤哈夫图奥普申兹
Optional|/ˈɒpʃənl/|奥普申纳尔|可选的|This course is optional.|这门课程是选修的。|迪斯科斯伊兹奥普申纳尔
Or|/ɔː(r)/|奥尔|或者|Tea or coffee?|茶还是咖啡？|蒂奥尔科菲
Oral|/ˈɔːrəl/|奥拉尔|口头的|We had an oral exam.|我们进行了口语考试。|威哈德安奥拉尔伊格扎姆
Orange|/ˈɒrɪndʒ/|奥林奇|橙子|I want an orange.|我想要一个橙子。|艾沃特安奥林奇
Orbit|/ˈɔːbɪt/|奥比特|轨道|The satellite is in orbit.|卫星在轨道上。|泽萨特勒特伊兹因奥比特
Orchestra|/ˈɔːkɪstrə/|奥基斯特拉|管弦乐队|The orchestra played beautifully.|管弦乐队演奏得很美。|泽奥基斯特拉普雷德比尤蒂富利
Order|/ˈɔːdə(r)/|奥德尔|订单|I placed an order.|我下了订单。|艾普莱斯德安奥德尔
Ordinary|/ˈɔːdnri/|奥德纳里|普通的|This is an ordinary day.|这是一个普通的日子。|迪斯伊兹安奥德纳里代
Ore|/ɔː(r)/|奥尔|矿石|Iron ore is mined here.|这里开采铁矿石。|艾厄n奥尔伊兹迈恩德希尔
Organ|/ˈɔːɡən/|奥根|器官|The heart is a vital organ.|心脏是一个重要器官。|泽哈特伊兹阿韦特尔奥根
Organic|/ɔːˈɡænɪk/|奥甘尼克|有机的|Organic food is healthier.|有机食品更健康。|奥甘尼克富德伊兹赫尔西厄
Organism|/ˈɔːɡənɪzəm/|奥甘尼泽姆|生物|Every organism needs water.|每个生物都需要水。|埃弗里奥甘尼泽姆尼兹沃特尔
Organization|/ˌɔːɡənaɪˈzeɪʃn/|奥甘奈泽申|组织|The organization helps people.|这个组织帮助人们。|泽奥甘奈泽申赫尔普斯皮普尔
Organize|/ˈɔːɡənaɪz/|奥甘奈兹|组织|Let's organize a meeting.|让我们组织一次会议。|莱茨奥甘奈兹阿米廷
Origin|/ˈɒrɪdʒɪn/|奥里金|起源|What is the origin of this?|这的起源是什么？|沃特伊兹泽奥里金奥夫迪斯
Original|/əˈrɪdʒənl/|厄里金纳尔|最初的|This is the original copy.|这是最初的副本。|迪斯伊兹泽厄里金纳尔科皮
Originally|/əˈrɪdʒənəli/|厄里金纳利|最初|Originally, I was nervous.|最初，我很紧张。|厄里金纳利，艾沃兹纳沃斯
Other|/ˈʌðə(r)/|阿泽|其他的|Do you have other options?|你有其他选择吗？|杜尤哈夫阿泽奥普申兹
Otherwise|/ˈʌðəwaɪz/|阿泽韦兹|否则|Hurry up, otherwise we'll be late.|快点，否则我们会迟到。|赫里阿普，阿泽韦兹威尔比莱特
Ought|/ɔːt/|奥特|应该|You ought to study harder.|你应该更努力学习。|尤奥特图斯塔迪哈德尔
Ounce|/aʊns/|昂斯|盎司|An ounce of gold is expensive.|一盎司黄金很贵。|安昂斯奥夫戈尔德伊兹伊克斯彭西夫
Our|/ˈaʊə(r)/|阿沃尔|我们的|This is our house.|这是我们的房子。|迪斯伊兹阿沃尔豪斯
Ours|/ˈaʊəz/|阿沃尔兹|我们的|The house is ours.|这房子是我们的。|泽豪斯伊兹阿沃尔兹
Ourselves|/ˌaʊəˈselvz/|阿沃尔塞尔夫兹|我们自己|We did it ourselves.|我们自己做的。|威迪迪特阿沃尔塞尔夫兹
Out|/aʊt/|奥特|外面|Let's go out.|让我们出去。|莱茨戈奥特
Outcome|/ˈaʊtkʌm/|奥特卡姆|结果|The outcome was positive.|结果是积极的。|泽奥特卡姆沃兹波齐蒂夫
Outdoor|/ˈaʊtdɔː(r)/|奥特多尔|户外的|Outdoor activities are fun.|户外活动很有趣。|奥特多尔阿克蒂维蒂兹阿范
Outdoors|/ˌaʊtˈdɔːz/|奥特多兹|在户外|We spent the day outdoors.|我们在户外度过了一天。|威斯彭特泽代奥特多兹
Outer|/ˈaʊtə(r)/|奥特|外部的|The outer layer is thin.|外层很薄。|泽奥特莱厄伊兹辛
Outlet|/ˈaʊtlet/|奥特莱特|插座|The outlet is not working.|插座不工作。|泽奥特莱特伊兹诺特沃金
Outline|/ˈaʊtlaɪn/|奥特莱恩|大纲|Make an outline first.|先做一个大纲。|梅克安奥特莱恩弗斯特
Outlook|/ˈaʊtlʊk/|奥特卢克|前景|The outlook is positive.|前景是积极的。|泽奥特卢克伊兹波齐蒂夫
Output|/ˈaʊtpʊt/|奥特普特|输出|The output has increased.|产出增加了。|泽奥特普特哈兹因克里斯德
Outside|/ˌaʊtˈsaɪd/|奥特赛德|外面|The cat is outside.|猫在外面。|泽凯特伊兹奥特赛德
Outstanding|/aʊtˈstændɪŋ/|奥特斯坦丁|杰出的|He is an outstanding student.|他是一名杰出的学生。|希伊兹安奥特斯坦丁斯图登特
Oven|/ˈʌvn/|奥文|烤箱|Put the cake in the oven.|把蛋糕放进烤箱。|普特泽凯克因泽奥文
Over|/ˈəʊvə(r)/|欧弗|在...上方|The bird flew over the tree.|鸟飞过了树。|泽伯德弗卢欧弗泽特里
Overall|/ˌəʊvərˈɔːl/|欧弗奥尔|总的|The overall result is good.|总体结果是好的。|泽欧弗奥尔里萨尔特伊兹古德
Overcoat|/ˈəʊvəkəʊt/|欧弗科特|大衣|Wear an overcoat in winter.|冬天穿大衣。|韦尔安欧弗科特因温特尔
Overcome|/ˌəʊvəˈkʌm/|欧弗卡姆|克服|You can overcome this difficulty.|你可以克服这个困难。|尤坎欧弗卡姆迪斯迪菲卡尔蒂
Overlook|/ˌəʊvəˈlʊk/|欧弗卢克|忽视|Don't overlook the details.|不要忽视细节。|东特欧弗卢克泽迪泰尔兹
Overnight|/ˌəʊvəˈnaɪt/|欧弗奈特|一夜之间|The situation changed overnight.|情况一夜之间改变了。|泽西图埃申钱吉德欧弗奈特
Overseas|/ˌəʊvəˈsiːz/|欧弗西兹|海外的|He works overseas.|他在海外工作。|希沃克斯欧弗西兹
Overtake|/ˌəʊvəˈteɪk/|欧弗泰克|超过|The car overtook the truck.|汽车超过了卡车。|泽卡尔欧弗托克泽特拉克
Overwhelm|/ˌəʊvəˈwelm/|欧弗韦尔姆|压倒|Don't let work overwhelm you.|不要让工作压垮你。|东特莱特沃克欧弗韦尔姆尤
Owe|/əʊ/|欧|欠|I owe you an apology.|我欠你一个道歉。|艾欧尤安阿波洛吉
Owl|/aʊl/|奥尔|猫头鹰|The owl hunts at night.|猫头鹰在夜间捕猎。|泽奥尔汉茨阿特奈特
Own|/əʊn/|欧恩|自己的|I have my own car.|我有自己的车。|艾哈夫迈欧恩卡尔
Owner|/ˈəʊnə(r)/|欧纳|主人|Who is the owner of this?|这是谁的主人？|胡伊兹泽欧纳奥夫迪斯
Ownership|/ˈəʊnəʃɪp/|欧纳希普|所有权|The ownership is disputed.|所有权有争议。|泽欧纳希普伊兹迪斯皮尤蒂德
Ox|/ɒks/|奥克斯|牛|The ox pulled the cart.|牛拉着车。|泽奥克斯普尔德泽卡特
Oxygen|/ˈɒksɪdʒən/|奥克西金|氧气|We need oxygen to breathe.|我们需要氧气呼吸。|威尼迪奥克西金图布里斯`;

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
