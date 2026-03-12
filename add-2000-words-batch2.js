const fs = require('fs');

const wordData = `Damage|/ˈdæmɪdʒ/|达米奇|损害|The damage is extensive.|损害是广泛的。|泽达米奇伊兹伊克斯滕西夫
Damp|/dæmp/|达姆普|潮湿的|The room is damp.|房间很潮湿。|泽鲁姆伊兹达姆普
Danger|/ˈdeɪndʒə(r)/|丹杰尔|危险|There is danger ahead.|前方有危险。|泽尔伊兹丹杰尔阿海德
Dare|/deə(r)/|戴尔|敢于|Dare to dream.|敢于梦想。|戴尔图德里姆
Data|/ˈdeɪtə/|戴塔|数据|Analyze the data.|分析数据。|安娜莱兹泽戴塔
Database|/ˈdeɪtəbeɪs/|戴塔贝斯|数据库|Update the database.|更新数据库。|阿普戴特泽戴塔贝斯
Deadline|/ˈdedlaɪn/|戴德莱恩|截止日期|Meet the deadline.|赶上截止日期。|米特泽戴德莱恩
Deal|/diːl/|迪尔|处理|Deal with the problem.|处理问题。|迪尔威兹泽普罗布勒姆
Debate|/dɪˈbeɪt/|迪贝特|辩论|We had a debate.|我们进行了一场辩论。|威哈德阿迪贝特
Debt|/det/|戴特|债务|Pay off your debts.|还清你的债务。|佩奥夫尤尔戴茨
Decade|/ˈdekeɪd/|戴凯德|十年|A decade has passed.|十年过去了。|阿戴凯德哈兹帕斯特
Decay|/dɪˈkeɪ/|迪凯|衰退|The building is in decay.|建筑正在衰败。|泽比尔丁伊兹因迪凯
Deceive|/dɪˈsiːv/|迪西夫|欺骗|Do not deceive others.|不要欺骗他人。|杜诺特迪西夫阿泽尔斯
Decent|/ˈdiːsnt/|迪森特|体面的|He is a decent person.|他是一个体面的人。|希伊兹阿迪森特珀森
Decide|/dɪˈsaɪd/|迪赛德|决定|You need to decide now.|你现在需要决定。|优尼德图迪赛德瑙
Declare|/dɪˈkleə(r)/|迪克莱尔|宣布|They declared victory.|他们宣布胜利。|泽伊迪克莱尔德维克托里
Decline|/dɪˈklaɪn/|迪克莱恩|下降|Sales are declining.|销售额正在下降。|塞尔兹阿迪克莱宁
Decorate|/ˈdekəreɪt/|戴科雷特|装饰|Decorate the room.|装饰房间。|戴科雷特泽鲁姆
Decrease|/dɪˈkriːs/|迪克里斯|减少|Decrease the cost.|减少成本。|迪克里斯泽科斯特
Dedicate|/ˈdedɪkeɪt/|戴迪凯特|奉献|Dedicate time to study.|花时间学习。|戴迪凯特泰姆图斯塔尔迪
Deduce|/dɪˈdjuːs/|迪迪尤斯|推断|We can deduce the answer.|我们可以推断出答案。|威坎迪迪尤斯泽安瑟
Deed|/diːd/|迪德|行为|A good deed.|一件好事。|阿古德迪德
Deem|/diːm/|迪姆|认为|It is deemed necessary.|这被认为是必要的。|伊特伊兹迪姆德内塞瑟里
Deep|/diːp/|迪普|深的|The water is deep.|水很深。|泽沃特尔伊兹迪普
Defeat|/dɪˈfiːt/|迪菲特|击败|They defeated the enemy.|他们击败了敌人。|泽伊迪菲尔德泽埃纳米
Defend|/dɪˈfend/|迪芬德|保卫|Defend your rights.|保卫你的权利。|迪芬德尤尔赖茨
Define|/dɪˈfaɪn/|迪法恩|定义|Define the problem clearly.|清楚地定义问题。|迪法恩泽普罗布勒姆克利利
Definite|/ˈdefɪnət/|戴菲尼特|确定的|We need a definite answer.|我们需要一个确定的答案。|威尼德阿戴菲尼特安瑟
Degree|/dɪˈɡriː/|迪格里|程度|To a certain degree.|在某种程度上。|图阿瑟坦迪格里
Delay|/dɪˈleɪ/|迪雷|延迟|Do not delay.|不要延迟。|杜诺特迪雷
Delegate|/ˈdelɪɡət/|戴利格特|代表|Delegate the task.|委派任务。|戴利格特泽塔斯克
Deliberate|/dɪˈlɪbərət/|迪利伯拉特|故意的|It was a deliberate act.|这是故意的行为。|伊特沃兹阿迪利伯拉特阿克特
Delicate|/ˈdelɪkət/|戴利凯特|精致的|This is a delicate situation.|这是一个微妙的情况。|迪斯伊兹阿戴利凯特西图埃申
Delight|/dɪˈlaɪt/|迪莱特|高兴|To my delight.|令我高兴的是。|图迈迪莱特
Deliver|/dɪˈlɪvə(r)/|迪利沃|交付|Deliver the package.|交付包裹。|迪利沃泽帕凯奇
Demand|/dɪˈmɑːnd/|迪曼德|要求|Meet the demand.|满足需求。|米特泽迪曼德
Demonstrate|/ˈdemənstreɪt/|戴蒙斯特雷特|演示|Demonstrate how it works.|演示它是如何工作的。|戴蒙斯特雷特豪伊特沃克斯
Denial|/dɪˈnaɪəl/|迪纳亚尔|否认|His denial was firm.|他的否认是坚定的。|希兹迪纳亚尔沃兹弗姆
Denote|/dɪˈnəʊt/|迪诺特|表示|This symbol denotes peace.|这个符号表示和平。|迪斯辛博尔迪诺茨皮斯
Denounce|/dɪˈnaʊns/|迪南斯|谴责|They denounced the policy.|他们谴责这项政策。|泽伊迪南斯特泽波利西
Dense|/dens/|登斯|密集的|The forest is dense.|森林很茂密。|泽福雷斯特伊兹登斯
Depart|/dɪˈpɑːt/|迪帕特|离开|The train will depart soon.|火车很快就要出发了。|泽特雷因威尔迪帕特孙
Depend|/dɪˈpend/|迪彭德|依赖|It depends on you.|这取决于你。|伊特迪彭兹昂优
Depict|/dɪˈpɪkt/|迪皮克特|描绘|The painting depicts a landscape.|这幅画描绘了一幅风景。|泽佩因廷迪皮克茨阿兰德斯凯普
Deploy|/dɪˈplɔɪ/|迪普洛伊|部署|Deploy the resources.|部署资源。|迪普洛伊泽里索西斯
Deposit|/dɪˈpɒzɪt/|迪波齐特|存款|Make a deposit.|存款。|梅克阿迪波齐特
Depress|/dɪˈpres/|迪普雷斯|压抑|Do not depress yourself.|不要压抑自己。|杜诺特迪普雷斯尤尔塞尔夫
Deprive|/dɪˈpraɪv/|迪普莱夫|剥夺|Do not deprive him of his rights.|不要剥夺他的权利。|杜诺特迪普莱夫希姆奥夫希兹赖茨
Derive|/dɪˈraɪv/|迪莱夫|获得|We derive pleasure from music.|我们从音乐中获得快乐。|威迪莱夫普莱热弗罗姆缪齐克
Descend|/dɪˈsend/|迪森德|下降|The plane began to descend.|飞机开始下降。|泽普莱恩比甘图迪森德
Describe|/dɪˈskraɪb/|迪斯克莱布|描述|Describe the scene.|描述场景。|迪斯克莱布泽辛
Deserve|/dɪˈzɜːv/|迪泽夫|值得|You deserve it.|你值得。|优迪泽夫伊特
Design|/dɪˈzaɪn/|迪扎恩|设计|Design a new product.|设计一个新产品。|迪扎恩阿纽普罗达克特
Desire|/dɪˈzaɪə(r)/|迪扎亚|渴望|I have a strong desire.|我有强烈的渴望。|爱海夫阿斯特朗迪扎亚
Despair|/dɪˈspeə(r)/|迪斯佩尔|绝望|Do not fall into despair.|不要陷入绝望。|杜诺特福尔因图迪斯佩尔
Desperate|/ˈdespərət/|戴斯帕拉特|绝望的|He is in a desperate situation.|他处于绝望的境地。|希伊兹因阿戴斯帕拉特西图埃申
Despite|/dɪˈspaɪt/|迪斯佩特|尽管|Despite the difficulties.|尽管有困难。|迪斯佩特泽迪菲卡尔蒂兹
Destination|/ˌdestɪˈneɪʃn/|戴斯蒂内申|目的地|What is your destination?|你的目的地是什么？|沃特伊兹尤尔戴斯蒂内申
Destroy|/dɪˈstrɔɪ/|迪斯特罗伊|摧毁|Do not destroy the evidence.|不要销毁证据。|杜诺特迪斯特罗伊泽埃维登斯
Detach|/dɪˈtætʃ/|迪塔奇|分离|Detach the attachment.|分离附件。|迪塔奇泽阿塔奇门特
Detail|/ˈdiːteɪl/|迪泰尔|细节|Pay attention to detail.|注意细节。|佩阿坦申图迪泰尔
Detain|/dɪˈteɪn/|迪泰恩|拘留|The police detained him.|警察拘留了他。|泽波利斯迪泰恩德希姆
Detect|/dɪˈtekt/|迪泰克特|检测|Detect the problem.|检测问题。|迪泰克特泽普罗布勒姆
Deteriorate|/dɪˈtɪəriəreɪt/|迪蒂里奥雷特|恶化|The situation is deteriorating.|情况正在恶化。|泽西图埃申伊兹迪蒂里奥雷廷
Determine|/dɪˈtɜːmɪn/|迪特尔明|决定|Determine the cause.|确定原因。|迪特尔明泽科兹
Develop|/dɪˈveləp/|迪维洛普|发展|Develop new skills.|发展新技能。|迪维洛普纽斯基尔斯
Device|/dɪˈvaɪs/|迪瓦斯|设备|This is a useful device.|这是一个有用的设备。|迪斯伊兹阿尤斯福迪瓦斯
Devote|/dɪˈvəʊt/|迪沃特|奉献|Devote yourself to your work.|致力于你的工作。|迪沃特尤尔塞尔夫图尤尔沃克
Diagnose|/ˈdaɪəɡnəʊz/|戴亚格诺兹|诊断|The doctor diagnosed the illness.|医生诊断了疾病。|泽多克特尔戴亚格诺兹德泽伊尔尼斯
Diagram|/ˈdaɪəɡræm/|戴亚格拉姆|图表|Draw a diagram.|画一个图表。|德罗阿戴亚格拉姆
Dialect|/ˈdaɪəlekt/|戴亚莱克特|方言|He speaks a local dialect.|他说当地方言。|希斯皮克斯阿洛克尔戴亚莱克特
Dialogue|/ˈdaɪəlɒɡ/|戴亚洛格|对话|Have a dialogue.|进行对话。|海夫阿戴亚洛格
Diameter|/daɪˈæmɪtə(r)/|戴亚米特尔|直径|What is the diameter?|直径是多少？|沃特伊兹泽戴亚米特尔
Dictate|/dɪkˈteɪt/|迪克泰特|口述|Dictate the letter.|口述这封信。|迪克泰特泽莱特尔
Differ|/ˈdɪfə(r)/|迪弗|不同|Opinions differ.|意见不同。|奥皮尼恩兹迪弗
Differentiate|/ˌdɪfəˈrenʃieɪt/|迪弗伦希埃特|区分|Differentiate between the two.|区分这两个。|迪弗伦希埃特比特温泽图
Diffuse|/dɪˈfjuːz/|迪夫尤兹|扩散|The light diffuses.|光线扩散。|泽莱特迪夫尤兹
Digest|/daɪˈdʒest/|戴杰斯特|消化|Digest the information.|消化信息。|戴杰斯特泽因弗梅申
Dignity|/ˈdɪɡnəti/|迪格纳蒂|尊严|Maintain your dignity.|保持你的尊严。|梅因特恩尤尔迪格纳蒂
Dilemma|/dɪˈlemə/|迪莱玛|困境|I face a dilemma.|我面临困境。|爱菲斯阿迪莱玛
Diligent|/ˈdɪlɪdʒənt/|迪利杰特|勤奋的|Be diligent in your work.|在工作中要勤奋。|比迪利杰特因尤尔沃克
Dimension|/daɪˈmenʃn/|戴门申|维度|Consider all dimensions.|考虑所有维度。|康西德奥尔戴门申兹
Diminish|/dɪˈmɪnɪʃ/|迪米尼什|减少|Do not diminish your efforts.|不要减少你的努力。|杜诺特迪米尼什尤尔埃福茨
Dine|/daɪn/|戴恩|进餐|We will dine together.|我们将一起进餐。|威威尔戴恩图格泽
Diploma|/dɪˈpləʊmə/|迪普洛玛|文凭|She received her diploma.|她收到了文凭。|希瑞西夫德赫尔迪普洛玛
Direct|/dəˈrekt/|迪雷克特|直接的|Give me a direct answer.|给我一个直接的答案。|吉夫米阿迪雷克特安瑟
Direction|/dəˈrekʃn/|迪雷克申|方向|What direction are we going?|我们要去哪个方向？|沃特迪雷克申阿威戈英
Director|/dəˈrektə(r)/|迪雷克特|导演|He is a famous director.|他是一位著名的导演。|希伊兹阿菲默斯迪雷克特
Disadvantage|/ˌdɪsədˈvɑːntɪdʒ/|迪萨德万蒂奇|劣势|This is a disadvantage.|这是一个劣势。|迪斯伊兹阿迪萨德万蒂奇
Disagree|/ˌdɪsəˈɡriː/|迪萨格里|不同意|I disagree with you.|我不同意你。|爱迪萨格里威兹优
Disappear|/ˌdɪsəˈpɪə(r)/|迪萨皮尔|消失|The problem will not disappear.|问题不会消失。|泽普罗布勒姆威尔诺特迪萨皮尔
Disappoint|/ˌdɪsəˈpɔɪnt/|迪萨波因特|失望|Do not disappoint me.|不要让我失望。|杜诺特迪萨波因特米
Disaster|/dɪˈzɑːstə(r)/|迪扎斯特|灾难|It was a natural disaster.|这是一场自然灾害。|伊特沃兹阿纳彻拉尔迪扎斯特
Discard|/dɪˈskɑːd/|迪斯卡德|丢弃|Discard the old files.|丢弃旧文件。|迪斯卡德泽欧德法尔斯
Discern|/dɪˈsɜːn/|迪瑟恩|辨别|Discern the truth.|辨别真相。|迪瑟恩泽特鲁斯
Discipline|/ˈdɪsəplɪn/|迪西普林|纪律|Maintain discipline.|保持纪律。|梅因特恩迪西普林
Disclose|/dɪˈskləʊz/|迪斯克洛兹|披露|Disclose the information.|披露信息。|迪斯克洛兹泽因弗梅申
Discount|/ˈdɪskaʊnt/|迪斯考恩特|折扣|Get a discount.|获得折扣。|盖特阿迪斯考恩特
Discourage|/dɪˈskʌrɪdʒ/|迪斯卡里奇|使气馁|Do not discourage him.|不要让他气馁。|杜诺特迪斯卡里奇希姆
Discover|/dɪˈskʌvə(r)/|迪斯卡沃|发现|Discover new possibilities.|发现新的可能性。|迪斯卡沃纽波西比利蒂兹
Discuss|/dɪˈskʌs/|迪斯卡斯|讨论|Let us discuss this.|让我们讨论这个。|莱特斯迪斯卡斯迪斯
Disease|/dɪˈziːz/|迪齐兹|疾病|Prevent the disease.|预防疾病。|普里文特泽迪齐兹
Disgrace|/dɪsˈɡreɪs/|迪斯格雷斯|耻辱|It was a disgrace.|这是一种耻辱。|伊特沃兹阿迪斯格雷斯
Disguise|/dɪsˈɡaɪz/|迪斯盖兹|伪装|He wore a disguise.|他伪装了自己。|希沃尔阿迪斯盖兹
Disgust|/dɪsˈɡʌst/|迪斯加斯特|厌恶|She felt disgust.|她感到厌恶。|希菲尔特迪斯加斯特
Dishonest|/dɪsˈɒnɪst/|迪索尼斯特|不诚实的|Do not be dishonest.|不要不诚实。|杜诺特比迪索尼斯特
Dislike|/dɪsˈlaɪk/|迪斯莱克|不喜欢|I dislike this.|我不喜欢这个。|爱迪斯莱克迪斯
Dismay|/dɪsˈmeɪ/|迪斯梅|沮丧|To my dismay.|令我沮丧的是。|图迈迪斯梅
Dismiss|/dɪsˈmɪs/|迪斯米斯|解雇|They dismissed him.|他们解雇了他。|泽伊迪斯米斯特希姆
Disorder|/dɪsˈɔːdə(r)/|迪索尔德|混乱|The room is in disorder.|房间很乱。|泽鲁姆伊兹因迪索尔德
Disperse|/dɪˈspɜːs/|迪斯珀斯|分散|The crowd dispersed.|人群散开了。|泽克劳德迪斯珀斯特
Displace|/dɪsˈpleɪs/|迪斯普莱斯|取代|Do not displace the original.|不要取代原来的。|杜诺特迪斯普莱斯泽奥里吉纳尔
Display|/dɪˈspleɪ/|迪斯普雷|展示|Display your work.|展示你的作品。|迪斯普雷尤尔沃克
Dispose|/dɪˈspəʊz/|迪斯波兹|处理|Dispose of the waste.|处理废物。|迪斯波兹奥夫泽韦斯特
Dispute|/dɪˈspjuːt/|迪斯皮尤特|争议|Settle the dispute.|解决争议。|塞特尔泽迪斯皮尤特
Disrupt|/dɪsˈrʌpt/|迪斯拉普特|扰乱|Do not disrupt the meeting.|不要扰乱会议。|杜诺特迪斯拉普特泽米听
Dissolve|/dɪˈzɒlv/|迪佐尔夫|溶解|Dissolve the sugar.|溶解糖。|迪佐尔夫泽舒格尔
Distance|/ˈdɪstəns/|迪斯坦斯|距离|What is the distance?|距离是多少？|沃特伊兹泽迪斯坦斯
Distant|/ˈdɪstənt/|迪斯坦特|遥远的|He is a distant relative.|他是一位远亲。|希伊兹阿迪斯坦特雷拉蒂夫
Distinct|/dɪˈstɪŋkt/|迪斯廷克特|明显的|There is a distinct difference.|有明显的区别。|泽尔伊兹阿迪斯廷克特迪弗伦斯
Distinguish|/dɪˈstɪŋɡwɪʃ/|迪斯廷圭什|区分|Distinguish right from wrong.|区分对错。|迪斯廷圭什赖特弗罗姆朗
Distort|/dɪˈstɔːt/|迪斯托特|扭曲|Do not distort the facts.|不要扭曲事实。|杜诺特迪斯托特泽法克茨
Distract|/dɪˈstrækt/|迪斯特拉克特|分心|Do not distract me.|不要让我分心。|杜诺特迪斯特拉克特米
Distress|/dɪˈstres/|迪斯特雷斯|痛苦|She is in distress.|她处于痛苦之中。|希伊兹因迪斯特雷斯
Distribute|/dɪˈstrɪbjuːt/|迪斯特里布尤特|分配|Distribute the resources.|分配资源。|迪斯特里布尤特泽里索西斯
District|/ˈdɪstrɪkt/|迪斯特里克特|区域|This is a business district.|这是一个商业区。|迪斯伊兹阿比兹尼斯迪斯特里克特
Disturb|/dɪˈstɜːb/|迪斯特伯|打扰|Do not disturb.|请勿打扰。|杜诺特迪斯特伯
Ditch|/dɪtʃ/|迪奇|沟渠|The car fell into a ditch.|车掉进了沟里。|泽卡尔费尔因图阿迪奇
Dive|/daɪv/|戴夫|潜水|Dive into the water.|潜入水中。|戴夫因图泽沃特尔
Diverse|/daɪˈvɜːs/|戴沃斯|多样的|We have diverse opinions.|我们有不同的意见。|威海夫戴沃斯奥皮尼恩兹
Divert|/daɪˈvɜːt/|戴沃特|转移|Divert the traffic.|转移交通。|戴沃特泽特拉菲克
Divide|/dɪˈvaɪd/|迪瓦伊德|分开|Divide the work.|分开工作。|迪瓦伊德泽沃克
Divine|/dɪˈvaɪn/|迪瓦恩|神圣的|It was a divine experience.|那是一次神圣的经历。|伊特沃兹阿迪瓦恩伊克斯皮里恩斯
Division|/dɪˈvɪʒn/|迪维任|部门|Which division do you work in?|你在哪个部门工作？|威奇迪维任杜优沃克因
Divorce|/dɪˈvɔːs/|迪沃斯|离婚|They got a divorce.|他们离婚了。|泽伊戈特阿迪沃斯
Doctrine|/ˈdɒktrɪn/|多克特林|教条|This is a religious doctrine.|这是一个宗教教条。|迪斯伊兹阿里利杰尔多克特林
Document|/ˈdɒkjumənt/|多克尤门特|文件|Sign the document.|签署文件。|赛恩泽多克尤门特
Domestic|/dəˈmestɪk/|多梅斯蒂克|国内的|This is a domestic flight.|这是国内航班。|迪斯伊兹阿多梅斯蒂克弗莱特
Dominate|/ˈdɒmɪneɪt/|多米内特|主导|Do not let fear dominate you.|不要让恐惧主导你。|杜诺特莱特菲尔多米内特优
Donate|/dəʊˈneɪt/|多内特|捐赠|Donate to charity.|捐赠给慈善机构。|多内特图查里蒂
Dormant|/ˈdɔːmənt/|多蒙特|休眠的|The volcano is dormant.|火山处于休眠状态。|泽沃尔凯诺伊兹多蒙特
Dose|/dəʊs/|多斯|剂量|Take the right dose.|服用正确的剂量。|泰克泽赖特多斯
Dot|/dɒt/|多特|点|Connect the dots.|连接点。|科内克特泽多茨
Double|/ˈdʌbl/|达布尔|双倍的|Double the amount.|加倍数量。|达布尔泽阿芒特
Doubt|/daʊt/|道特|怀疑|I have no doubt.|我毫无疑问。|爱海夫诺道特
Downward|/ˈdaʊnwəd/|当沃德|向下的|The trend is downward.|趋势是向下的。|泽特伦德伊兹当沃德
Draft|/drɑːft/|德拉夫特|草稿|Write a draft.|写一个草稿。|莱特阿德拉夫特
Drag|/dræɡ/|德拉格|拖动|Do not drag your feet.|不要拖延。|杜诺特德拉格尤尔菲茨
Drain|/dreɪn/|德雷恩|排水|Drain the water.|排水。|德雷恩泽沃特尔
Drama|/ˈdrɑːmə/|德拉玛|戏剧|I love drama.|我喜欢戏剧。|爱拉夫德拉玛
Dramatic|/drəˈmætɪk/|德拉马蒂克|戏剧性的|There was a dramatic change.|发生了戏剧性的变化。|泽尔沃兹阿德拉马蒂克切因奇
Drastic|/ˈdræstɪk/|德拉斯蒂克|激烈的|Take drastic measures.|采取激烈措施。|泰克德拉斯蒂克梅热兹
Draw|/drɔː/|德罗|画|Draw a picture.|画一幅画。|德罗阿皮克切尔
Drawback|/ˈdrɔːbæk/|德罗巴克|缺点|What is the drawback?|缺点是什么？|沃特伊兹泽德罗巴克
Dread|/dred/|德雷德|恐惧|I dread the outcome.|我害怕结果。|爱德雷德泽奥特卡姆
Dream|/driːm/|德里姆|梦想|Follow your dream.|追随你的梦想。|法洛尤尔德里姆
Drift|/drɪft/|德里夫特|漂流|The boat began to drift.|船开始漂流。|泽博特比甘图德里夫特
Drill|/drɪl/|德里尔|钻|Drill a hole.|钻一个洞。|德里尔阿霍尔
Drink|/drɪŋk/|德林克|喝|Drink water.|喝水。|德林克沃特尔
Drip|/drɪp/|德里普|滴落|Water is dripping.|水在滴落。|沃特尔伊兹德里平
Drive|/draɪv/|德拉伊夫|驾驶|Drive carefully.|小心驾驶。|德拉伊夫凯尔弗利
Drop|/drɒp/|德洛普|掉落|Drop the idea.|放弃这个想法。|德洛普泽艾迪亚
Drought|/draʊt/|德劳特|干旱|The drought is severe.|干旱很严重。|泽德劳特伊兹西维尔
Drown|/draʊn/|德劳恩|淹没|Do not drown in sorrow.|不要沉浸在悲伤中。|杜诺特德劳恩因索罗
Drug|/drʌɡ/|德拉格|药物|Take the drug.|服用药物。|泰克泽德拉格
Drum|/drʌm/|德拉姆|鼓|Play the drum.|打鼓。|普雷泽德拉姆
Drunk|/drʌŋk/|德朗克|喝醉的|He is drunk.|他喝醉了。|希伊兹德朗克
Dry|/draɪ/|德拉伊|干的|The clothes are dry.|衣服干了。|泽克洛兹阿德拉伊
Dual|/ˈdjuːəl/|迪尤阿尔|双重的|This is a dual purpose.|这是双重目的。|迪斯伊兹阿迪尤阿尔珀珀斯
Dubious|/ˈdjuːbiəs/|迪尤比厄斯|可疑的|I am dubious about this.|我对此表示怀疑。|爱阿姆迪尤比厄斯阿鲍特迪斯
Due|/djuː/|迪尤|到期的|The payment is due.|付款到期了。|泽佩门特伊兹迪尤
Dull|/dʌl/|达尔|枯燥的|The movie was dull.|电影很枯燥。|泽穆维沃兹达尔
Dumb|/dʌm/|达姆|哑的|He is dumb.|他是哑的。|希伊兹达姆
Dump|/dʌmp/|达姆普|倾倒|Do not dump waste here.|不要在这里倾倒废物。|杜诺特达姆普韦斯特希尔
Duplicate|/ˈdjuːplɪkeɪt/|迪尤普利凯特|复制|Do not duplicate the key.|不要复制钥匙。|杜诺特迪尤普利凯特泽基
Durable|/ˈdjʊərəbl/|迪尤拉布尔|耐用的|This product is durable.|这个产品很耐用。|迪斯普罗达克特伊兹迪尤拉布尔
Duration|/djuˈreɪʃn/|迪尤雷申|持续时间|What is the duration?|持续时间是多少？|沃特伊兹泽迪尤雷申
Dusk|/dʌsk/|达斯克|黄昏|The sun sets at dusk.|太阳在黄昏时落下。|泽桑塞茨阿特达斯克
Dust|/dʌst/|达斯特|灰尘|Clean the dust.|清理灰尘。|克林泽达斯特
Duty|/ˈdjuːti/|迪尤蒂|责任|It is your duty.|这是你的责任。|伊特伊兹尤尔迪尤蒂
Dwell|/dwel/|德韦尔|居住|They dwell in the forest.|他们住在森林里。|泽伊德韦尔因泽福雷斯特
Dynamic|/daɪˈnæmɪk/|戴纳米克|动态的|The market is dynamic.|市场是动态的。|泽马基特伊兹戴纳米克
Eager|/ˈiːɡə(r)/|伊格尔|渴望的|I am eager to learn.|我渴望学习。|爱阿姆伊格尔图勒恩
Earn|/ɜːn/|厄恩|赚取|Earn your living.|谋生。|厄恩尤尔利文
Ease|/iːz/|伊斯|缓解|Put your mind at ease.|让你的心放松。|普特尤尔迈恩德阿特伊斯
Easily|/ˈiːzəli/|伊斯利|容易地|You can easily do this.|你可以轻松做到这一点。|优坎伊斯利杜迪斯
Eastern|/ˈiːstən/|伊斯滕|东方的|The eastern part of the city.|城市的东部。|泽伊斯滕帕特奥夫泽西蒂
Echo|/ˈekəʊ/|埃科|回声|The echo was loud.|回声很响。|泽埃科沃兹劳德
Economic|/ˌiːkəˈnɒmɪk/|伊科诺米克|经济的|The economic situation is improving.|经济形势正在好转。|泽伊科诺米克西图埃申伊兹因普鲁文
Economy|/ɪˈkɒnəmi/|伊科诺米|经济|The economy is growing.|经济正在增长。|泽伊科诺米伊兹格罗英
Edge|/edʒ/|埃奇|边缘|Stand at the edge.|站在边缘。|斯坦德阿特泽埃奇
Edit|/ˈedɪt/|埃迪特|编辑|Edit the document.|编辑文档。|埃迪特泽多克尤门特
Edition|/ɪˈdɪʃn/|伊迪申|版本|This is a new edition.|这是新版本。|迪斯伊兹阿纽伊迪申
Editor|/ˈedɪtə(r)/|埃迪特|编辑|She is the chief editor.|她是主编。|希伊兹泽奇夫埃迪特
Effect|/ɪˈfekt/|伊费克特|效果|What is the effect?|效果是什么？|沃特伊兹泽伊费克特
Effective|/ɪˈfektɪv/|伊费克蒂夫|有效的|This method is effective.|这个方法很有效。|迪斯梅瑟德伊兹伊费克蒂夫
Efficiency|/ɪˈfɪʃnsi/|伊菲申西|效率|Improve your efficiency.|提高你的效率。|因普鲁夫尤尔伊菲申西
Efficient|/ɪˈfɪʃnt/|伊菲申特|高效的|He is an efficient worker.|他是一个高效的工人。|希伊兹安伊菲申特沃克尔
Effort|/ˈefət/|埃弗特|努力|Make an effort.|做出努力。|梅克安埃弗特
Ego|/ˈiːɡəʊ/|伊戈|自我|Control your ego.|控制你的自我。|康特罗尔尤尔伊戈
Elaborate|/ɪˈlæbərət/|伊拉伯拉特|详尽的|Give an elaborate explanation.|给出详尽的解释。|吉夫安伊拉伯拉特埃克斯普莱纳申
Elapse|/ɪˈlæps/|伊拉普斯|流逝|Time has elapsed.|时间已经流逝。|泰姆哈兹伊拉普斯特
Elastic|/ɪˈlæstɪk/|伊拉斯蒂克|有弹性的|The material is elastic.|这种材料有弹性。|泽马蒂里尔伊兹伊拉斯蒂克
Elbow|/ˈelbəʊ/|埃尔博|肘部|He hurt his elbow.|他伤了他的肘部。|希赫特希兹埃尔博
Elder|/ˈeldə(r)/|埃尔德|年长的|Respect your elders.|尊重长辈。|里斯佩克特尤尔埃尔德兹
Elect|/ɪˈlekt/|伊莱克特|选举|They elected a new president.|他们选举了一位新总统。|泽伊伊莱克特德阿纽普雷齐登特
Election|/ɪˈlekʃn/|伊莱克申|选举|The election is next month.|选举在下个月。|泽伊莱克申伊兹内克斯特曼斯
Electric|/ɪˈlektrɪk/|伊莱克特里克|电的|This is an electric car.|这是一辆电动车。|迪斯伊兹安伊莱克特里克卡尔
Electrical|/ɪˈlektrɪkl/|伊莱克特里克尔|电气的|He is an electrical engineer.|他是一名电气工程师。|希伊兹安伊莱克特里克尔恩吉尼尔
Electricity|/ɪˌlekˈtrɪsəti/|伊莱克特里萨蒂|电|The electricity went out.|停电了。|泽伊莱克特里萨蒂温特奥特
Electronic|/ɪˌlekˈtrɒnɪk/|伊莱克特罗尼克|电子的|This is an electronic device.|这是一个电子设备。|迪斯伊兹安伊莱克特罗尼克迪瓦斯
Elegant|/ˈelɪɡənt/|埃利根特|优雅的|She looks elegant.|她看起来很优雅。|希卢克斯埃利根特
Element|/ˈelɪmənt/|埃利门特|元素|Water is an essential element.|水是一个基本元素。|沃特尔伊兹安因森谢尔埃利门特
Elementary|/ˌelɪˈmentri/|埃利门特里|基本的|This is elementary knowledge.|这是基本知识。|迪斯伊兹埃利门特里诺利奇
Elevate|/ˈelɪveɪt/|埃利维特|提升|Elevate your standards.|提高你的标准。|埃利维特尤尔斯坦达兹
Elevator|/ˈelɪveɪtə(r)/|埃利维特|电梯|Take the elevator.|乘电梯。|泰克泽埃利维特
Eliminate|/ɪˈlɪmɪneɪt/|伊利米内特|消除|Eliminate the errors.|消除错误。|伊利米内特泽埃罗兹
Elite|/eɪˈliːt/|埃利特|精英|He belongs to the elite.|他属于精英阶层。|希比朗兹图泽埃利特
Elsewhere|/ˌelsˈweə(r)/|埃尔斯韦尔|在别处|Look elsewhere.|去别处看看。|卢克埃尔斯韦尔
Embark|/ɪmˈbɑːk/|恩巴克|开始|Embark on a new journey.|开始一段新的旅程。|恩巴克昂阿纽杰尼
Embarrass|/ɪmˈbærəs/|恩巴拉斯|使尴尬|Do not embarrass him.|不要让他尴尬。|杜诺特恩巴拉斯希姆
Embassy|/ˈembəsi/|恩巴西|大使馆|Visit the embassy.|访问大使馆。|维齐特泽恩巴西
Embrace|/ɪmˈbreɪs/|恩布雷斯|拥抱|Embrace the change.|拥抱变化。|恩布雷斯泽切因奇
Emerge|/ɪˈmɜːdʒ/|伊默奇|出现|New problems emerged.|新问题出现了。|纽普罗布勒姆兹伊默奇德
Emergency|/ɪˈmɜːdʒənsi/|伊默詹西|紧急情况|This is an emergency.|这是紧急情况。|迪斯伊兹安伊默詹西
Emission|/ɪˈmɪʃn/|伊米申|排放|Reduce carbon emissions.|减少碳排放。|里迪尤斯卡本伊米申兹
Emotion|/ɪˈməʊʃn/|伊莫申|情绪|Control your emotions.|控制你的情绪。|康特罗尔尤尔伊莫申斯
Emotional|/ɪˈməʊʃənl/|伊莫申纳尔|情绪的|She is very emotional.|她很情绪化。|希伊兹韦里伊莫申纳尔
Emphasis|/ˈemfəsɪs/|恩弗西斯|强调|Put emphasis on quality.|强调质量。|普特恩弗西斯昂克沃拉蒂
Emphasize|/ˈemfəsaɪz/|恩弗西萨兹|强调|Emphasize the main points.|强调要点。|恩弗西萨兹泽梅因波因茨
Empire|/ˈempaɪə(r)/|恩派亚|帝国|The Roman Empire.|罗马帝国。|泽罗曼恩派亚
Employ|/ɪmˈplɔɪ/|因普洛伊|雇佣|They employ many workers.|他们雇佣了许多工人。|泽伊因普洛伊梅尼沃克尔斯
Employee|/ɪmˈplɔɪiː/|因普洛伊伊|员工|The employees are happy.|员工们很高兴。|泽因普洛伊伊兹阿哈皮
Employer|/ɪmˈplɔɪə(r)/|因普洛伊尔|雇主|The employer is fair.|雇主很公平。|泽因普洛伊尔伊兹费尔
Employment|/ɪmˈplɔɪmənt/|因普洛伊门特|就业|Employment is rising.|就业率在上升。|因普洛伊门特伊兹莱辛
Empty|/ˈempti/|恩普蒂|空的|The room is empty.|房间是空的。|泽鲁姆伊兹恩普蒂
Enable|/ɪˈneɪbl/|伊内布尔|使能够|This will enable progress.|这将使进步成为可能。|迪斯威尔伊内布尔普罗格雷斯
Encounter|/ɪnˈkaʊntə(r)/|恩考恩特|遇到|We encountered a problem.|我们遇到了一个问题。|威恩考恩特德阿普罗布勒姆
Encourage|/ɪnˈkʌrɪdʒ/|恩卡里奇|鼓励|Encourage your children.|鼓励你的孩子。|恩卡里奇尤尔奇尔德伦
Endeavor|/ɪnˈdevə(r)/|恩德沃|努力|Make every endeavor.|尽一切努力。|梅克埃弗里恩德沃
Endless|/ˈendləs/|恩德莱斯|无尽的|The possibilities are endless.|可能性是无限的。|泽波西比利蒂兹阿恩德莱斯
Endorse|/ɪnˈdɔːs/|恩多斯|支持|I endorse this plan.|我支持这个计划。|爱恩多斯迪斯普兰
Endure|/ɪnˈdjʊə(r)/|恩迪尤尔|忍受|You must endure the pain.|你必须忍受痛苦。|优马斯特恩迪尤尔泽佩恩
Enemy|/ˈenəmi/|埃纳米|敌人|Know your enemy.|了解你的敌人。|诺尤尔埃纳米
Energy|/ˈenədʒi/|埃纳吉|能量|Save energy.|节约能源。|塞夫埃纳吉
Enforce|/ɪnˈfɔːs/|恩福斯|执行|Enforce the rules.|执行规则。|恩福斯泽鲁尔斯
Engage|/ɪnˈɡeɪdʒ/|恩盖奇|参与|Engage in the discussion.|参与讨论。|恩盖奇因泽迪斯卡申
Engine|/ˈendʒɪn/|恩金|引擎|The engine is running.|引擎在运转。|泽恩金伊兹拉宁
Engineer|/ˌendʒɪˈnɪə(r)/|恩吉尼尔|工程师|He is a software engineer.|他是一名软件工程师。|希伊兹阿索夫特韦尔恩吉尼尔
Engineering|/ˌendʒɪˈnɪərɪŋ/|恩吉尼林|工程|Study engineering.|学习工程。|斯塔尔迪恩吉尼林
Enhance|/ɪnˈhɑːns/|恩汉斯|增强|Enhance your skills.|增强你的技能。|恩汉斯尤尔斯基尔斯
Enjoy|/ɪnˈdʒɔɪ/|恩乔伊|享受|Enjoy your meal.|享受你的美食。|恩乔伊尤尔米尔
Enormous|/ɪˈnɔːməs/|伊诺默斯|巨大的|It was an enormous success.|那是一个巨大的成功。|伊特沃兹安伊诺默斯萨克塞斯
Enough|/ɪˈnʌf/|伊纳夫|足够的|We have enough time.|我们有足够的时间。|威海夫伊纳夫泰姆
Enquire|/ɪnˈkwaɪə(r)/|恩夸亚|询问|Enquire about the price.|询问价格。|恩夸亚阿鲍特泽普莱斯
Enrich|/ɪnˈrɪtʃ/|恩里奇|丰富|Enrich your vocabulary.|丰富你的词汇量。|恩里奇尤尔沃卡布拉里
Enroll|/ɪnˈrəʊl/|恩罗尔|注册|Enroll in the course.|注册课程。|恩罗尔因泽科尔斯
Ensure|/ɪnˈʃʊə(r)/|恩舒尔|确保|Ensure the quality.|确保质量。|恩舒尔泽克沃拉蒂
Enter|/ˈentə(r)/|恩特|进入|Please enter quietly.|请安静地进入。|普利斯恩特奎特利
Enterprise|/ˈentəpraɪz/|恩特普莱兹|企业|This is a large enterprise.|这是一家大企业。|迪斯伊兹阿拉奇恩特普莱兹
Entertain|/ˌentəˈteɪn/|恩特泰恩|娱乐|Entertain your guests.|招待你的客人。|恩特泰恩尤尔格斯特
Entertainment|/ˌentəˈteɪnmənt/|恩特泰恩门特|娱乐|The entertainment was good.|娱乐活动很好。|泽恩特泰恩门特沃兹古德
Enthusiasm|/ɪnˈθjuːziæzəm/|恩苏齐亚扎姆|热情|Show enthusiasm.|表现出热情。|肖恩苏齐亚扎姆
Enthusiastic|/ɪnˌθjuːziˈæstɪk/|恩苏齐亚斯蒂克|热情的|She is enthusiastic.|她很热情。|希伊兹恩苏齐亚斯蒂克
Entire|/ɪnˈtaɪə(r)/|恩泰亚|整个的|The entire class was present.|全班都出席了。|泽恩泰亚克拉斯沃兹普雷森特
Entitle|/ɪnˈtaɪtl/|恩泰特尔|给...权利|This ticket entitles you to entry.|这张票允许你入场。|迪斯提基特恩泰特尔斯优图恩特里
Entity|/ˈentəti/|恩蒂蒂|实体|The company is a legal entity.|公司是一个法律实体。|泽康帕尼伊兹阿利格尔恩蒂蒂
Entrance|/ˈentrəns/|恩特伦斯|入口|The entrance is over there.|入口在那边。|泽恩特伦斯伊兹欧沃泽尔
Entry|/ˈentri/|恩特里|进入|No entry without permission.|未经许可不得入内。|诺恩特里威扎奥特珀米申
Envelope|/ˈenvələʊp/|恩维洛普|信封|Put the letter in the envelope.|把信放进信封里。|普特泽莱特尔因泽恩维洛普
Environment|/ɪnˈvaɪrənmənt/|因瓦伊伦门特|环境|Protect the environment.|保护环境。|普罗泰克特泽因瓦伊伦门特
Environmental|/ɪnˌvaɪrənˈmentl/|因瓦伊伦门特尔|环境的|Environmental issues are important.|环境问题很重要。|因瓦伊伦门特尔伊舒兹阿因波坦特
Envisage|/ɪnˈvɪzɪdʒ/|恩维西奇|设想|I cannot envisage that.|我无法想象那样。|爱坎诺特恩维西奇泽特
Epidemic|/ˌepɪˈdemɪk/|埃皮戴米克|流行病|The epidemic spread quickly.|流行病迅速蔓延。|泽埃皮戴米克斯普雷德奎克利
Episode|/ˈepɪsəʊd/|埃皮索德|一集|Watch the next episode.|看下一集。|沃奇泽内克斯特埃皮索德
Equal|/ˈiːkwəl/|伊克沃尔|平等的|All men are created equal.|人人生而平等。|奥尔曼阿克里埃蒂德伊克沃尔
Equality|/iˈkwɒləti/|伊克沃拉蒂|平等|Fight for equality.|为平等而战。|法伊特福伊克沃拉蒂
Equation|/ɪˈkweɪʒn/|伊奎申|方程|Solve the equation.|解方程。|索尔夫泽伊奎申
Equip|/ɪˈkwɪp/|伊奎普|装备|Equip yourself with knowledge.|用知识装备自己。|伊奎普尤尔塞尔夫威兹诺利奇
Equipment|/ɪˈkwɪpmənt/|伊奎普门特|设备|The equipment is new.|设备是新的。|泽伊奎普门特伊兹纽
Equivalent|/ɪˈkwɪvələnt/|伊奎沃伦特|等价的|This is equivalent to that.|这等同于那个。|迪斯伊兹伊奎沃伦特图泽特
Era|/ˈɪərə/|伊拉|时代|We live in a digital era.|我们生活在数字时代。|威利夫因阿迪吉特尔伊拉
Erect|/ɪˈrekt/|伊雷克特|竖立|Erect a statue.|竖立一座雕像。|伊雷克特阿斯塔丘
Error|/ˈerə(r)/|埃罗尔|错误|Correct the error.|纠正错误。|科雷克特泽埃罗尔
Escape|/ɪˈskeɪp/|伊斯凯普|逃脱|Escape from danger.|逃离危险。|伊斯凯普弗罗姆丹杰尔
Especially|/ɪˈspeʃəli/|伊斯佩肖利|尤其|I love music, especially jazz.|我喜欢音乐，尤其是爵士乐。|爱拉夫缪齐克伊斯佩肖利杰兹
Essay|/ˈeseɪ/|埃塞|文章|Write an essay.|写一篇文章。|莱特安埃塞
Essence|/ˈesns/|埃森斯|本质|This is the essence of the problem.|这是问题的本质。|迪斯伊兹泽埃森斯奥夫泽普罗布勒姆
Essential|/ɪˈsenʃl/|伊森谢尔|基本的|Water is essential for life.|水对生命至关重要。|沃特尔伊兹伊森谢尔福莱夫
Establish|/ɪˈstæblɪʃ/|伊斯塔布利什|建立|Establish a new company.|建立一家新公司。|伊斯塔布利什阿纽康帕尼
Establishment|/ɪˈstæblɪʃmənt/|伊斯塔布利什门特|建立|The establishment of the university.|大学的建立。|泽伊斯塔布利什门特奥夫泽尤尼沃西蒂
Estate|/ɪˈsteɪt/|伊斯泰特|财产|He owns a large estate.|他拥有一大笔财产。|希欧恩兹阿拉奇伊斯泰特
Estimate|/ˈestɪmət/|埃斯蒂梅特|估计|Estimate the cost.|估计成本。|埃斯蒂梅特泽科斯特
Eternal|/ɪˈtɜːnl/|伊特纳尔|永恒的|Love is eternal.|爱是永恒的。|拉夫伊兹伊特纳尔
Ethical|/ˈeθɪkl/|埃西克尔|道德的|This is an ethical issue.|这是一个道德问题。|迪斯伊兹安埃西克尔伊舒
Ethics|/ˈeθɪks/|埃西克斯|伦理|Business ethics are important.|商业伦理很重要。|比兹尼斯埃西克斯阿因波坦特
Ethnic|/ˈeθnɪk/|埃斯尼克|民族的|There are many ethnic groups.|有许多民族群体。|泽尔阿梅尼埃斯尼克格鲁普斯
Evaluate|/ɪˈvæljueɪt/|伊瓦尔尤埃特|评估|Evaluate the situation.|评估情况。|伊瓦尔尤埃特泽西图埃申
Evaluation|/ɪˌvæljuˈeɪʃn/|伊瓦尔尤埃申|评估|Give me your evaluation.|给我你的评估。|吉夫米尤尔伊瓦尔尤埃申
Evaporate|/ɪˈvæpəreɪt/|伊瓦珀雷特|蒸发|The water will evaporate.|水会蒸发。|泽沃特尔威尔伊瓦珀雷特
Eve|/iːv/|伊夫|前夜|Christmas Eve.|圣诞前夜。|克里斯马斯伊夫
Even|/ˈiːvn/|伊文|甚至|Even a child knows that.|连孩子都知道那个。|伊文阿恰尔德诺兹泽特
Evening|/ˈiːvnɪŋ/|伊文宁|晚上|Good evening.|晚上好。|古德伊文宁
Event|/ɪˈvent/|伊文特|事件|The event was successful.|活动很成功。|泽伊文特沃兹萨克塞斯福
Eventual|/ɪˈventʃuəl/|伊文丘尔|最终的|The eventual outcome was positive.|最终结果是积极的。|泽伊文丘尔奥特卡姆沃兹波齐蒂夫
Ever|/ˈevə(r)/|埃沃|曾经|Have you ever been there?|你去过那里吗？|海夫优埃沃本泽尔
Every|/ˈevri/|埃弗里|每个|Every student passed.|每个学生都通过了。|埃弗里斯图登特帕斯特
Everybody|/ˈevribɒdi/|埃弗里博迪|每个人|Everybody is here.|每个人都在这里。|埃弗里博迪伊兹希尔
Everyday|/ˈevrɪdeɪ/|埃弗里戴|日常的|This is my everyday routine.|这是我的日常。|迪斯伊兹迈埃弗里戴鲁廷
Everyone|/ˈevriwʌn/|埃弗里万|每个人|Everyone agrees.|每个人都同意。|埃弗里万阿格里斯
Everything|/ˈevriθɪŋ/|埃弗里辛|一切|Everything is ready.|一切都准备好了。|埃弗里辛伊兹雷迪
Everywhere|/ˈevriweə(r)/|埃弗里韦尔|到处|I looked everywhere.|我到处都找了。|爱卢克特埃弗里韦尔
Evidence|/ˈevɪdəns/|埃维登斯|证据|There is no evidence.|没有证据。|泽尔伊兹诺埃维登斯
Evident|/ˈevɪdənt/|埃维登特|明显的|It is evident that he is lying.|很明显他在撒谎。|伊特伊兹埃维登特泽特希伊兹莱英
Evil|/ˈiːvl/|伊沃|邪恶的|Fight against evil.|与邪恶作斗争。|法伊特阿根斯特伊沃
Evolution|/ˌiːvəˈluːʃn/|伊沃卢申|进化|The theory of evolution.|进化论。|泽西里奥夫伊沃卢申
Evolve|/ɪˈvɒlv/|伊沃尔夫|进化|Languages evolve over time.|语言随时间演变。|兰圭奇兹伊沃尔夫欧沃泰姆
Exact|/ɪɡˈzækt/|伊格扎克特|精确的|Give me the exact number.|给我确切的数字。|吉夫米泽伊格扎克特南伯
Exactly|/ɪɡˈzæktli/|伊格扎克特利|确切地|That is exactly what I meant.|那正是我的意思。|泽特伊兹伊格扎克特利沃特爱门特
Exaggerate|/ɪɡˈzædʒəreɪt/|伊格扎杰雷特|夸张|Do not exaggerate.|不要夸张。|杜诺特伊格扎杰雷特
Exam|/ɪɡˈzæm/|伊格扎姆|考试|Pass the exam.|通过考试。|帕斯泽伊格扎姆
Examination|/ɪɡˌzæmɪˈneɪʃn/|伊格扎米内申|考试|The examination is tomorrow.|考试在明天。|泽伊格扎米内申伊兹图莫罗
Examine|/ɪɡˈzæmɪn/|伊格扎明|检查|Examine the evidence.|检查证据。|伊格扎明泽埃维登斯
Example|/ɪɡˈzɑːmpl/|伊格扎姆普尔|例子|Give me an example.|给我一个例子。|吉夫米安伊格扎姆普尔
Exceed|/ɪkˈsiːd/|伊克西德|超过|Do not exceed the limit.|不要超过限制。|杜诺特伊克西德泽利米特
Excellent|/ˈeksələnt/|埃克塞伦特|优秀的|She is an excellent student.|她是一名优秀的学生。|希伊兹安埃克塞伦特斯图登特
Except|/ɪkˈsept/|伊克塞普特|除了|Everyone came except him.|除了他每个人都来了。|埃弗里万凯姆伊克塞普特希姆
Exception|/ɪkˈsepʃn/|伊克塞普申|例外|There is an exception to every rule.|每条规则都有例外。|泽尔伊兹安伊克塞普申图埃弗里鲁尔
Excess|/ɪkˈses/|伊克塞斯|过量|Avoid excess sugar.|避免过量糖。|阿沃伊德伊克塞斯舒格尔
Exchange|/ɪksˈtʃeɪndʒ/|伊克斯切因奇|交换|Exchange ideas.|交换想法。|伊克斯切因奇艾迪亚兹
Excite|/ɪkˈsaɪt/|伊克赛特|使兴奋|The news excited everyone.|这个消息让每个人都很兴奋。|泽纽兹伊克赛特德埃夫里万
Excitement|/ɪkˈsaɪtmənt/|伊克赛特门特|兴奋|The excitement was palpable.|兴奋是显而易见的。|泽伊克赛特门特沃兹帕尔帕布尔
Exciting|/ɪkˈsaɪtɪŋ/|伊克赛廷|令人兴奋的|This is an exciting opportunity.|这是一个令人兴奋的机会。|迪斯伊兹安伊克赛廷奥珀图尼蒂
Exclude|/ɪkˈskluːd/|伊克斯克卢德|排除|Do not exclude anyone.|不要排除任何人。|杜诺特伊克斯克卢德埃尼万
Exclusive|/ɪkˈskluːsɪv/|伊克斯克卢西夫|独有的|This is an exclusive offer.|这是一个独家优惠。|迪斯伊兹安伊克斯克卢西夫奥弗
Excuse|/ɪkˈskjuːz/|伊克斯克尤兹|借口|Do not make excuses.|不要找借口。|杜诺特梅克伊克斯克尤兹
Execute|/ˈeksɪkjuːt/|埃克西克尤特|执行|Execute the plan.|执行计划。|埃克西克尤特泽普兰
Executive|/ɪɡˈzekjətɪv/|伊格泽克尤蒂夫|行政的|He is an executive manager.|他是一名行政经理。|希伊兹安伊格泽克尤蒂夫曼纳杰
Exercise|/ˈeksəsaɪz/|埃克塞萨兹|锻炼|Exercise regularly.|定期锻炼。|埃克塞萨兹雷格尤拉利
Exert|/ɪɡˈzɜːt/|伊格泽特|施加|Exert pressure on them.|对他们施加压力。|伊格泽特普雷舍昂泽姆
Exhaust|/ɪɡˈzɔːst/|伊格佐斯特|耗尽|Do not exhaust yourself.|不要让自己筋疲力尽。|杜诺特伊格佐斯特尤尔塞尔夫
Exhibit|/ɪɡˈzɪbɪt/|伊格齐比特|展示|Exhibit your work.|展示你的作品。|伊格齐比特尤尔沃克
Exhibition|/ˌeksɪˈbɪʃn/|埃克西比申|展览|Visit the exhibition.|参观展览。|维齐特泽埃克西比申
Exist|/ɪɡˈzɪst/|伊格齐斯特|存在|Does life exist elsewhere?|其他地方存在生命吗？|达兹莱夫伊格齐斯特埃尔斯韦尔
Existence|/ɪɡˈzɪstəns/|伊格齐斯坦斯|存在|The existence of aliens.|外星人的存在。|泽伊格齐斯坦斯奥夫埃利恩兹
Exit|/ˈeksɪt/|埃克西特|出口|Use the emergency exit.|使用紧急出口。|尤兹泽伊默詹西埃克西特
Expand|/ɪkˈspænd/|伊克斯潘德|扩张|Expand your business.|扩展你的业务。|伊克斯潘德尤尔比兹尼斯
Expansion|/ɪkˈspænʃn/|伊克斯潘申|扩张|The expansion of the company.|公司的扩张。|泽伊克斯潘申奥夫泽康帕尼
Expect|/ɪkˈspekt/|伊克斯佩克特|期望|I expect good results.|我期望好的结果。|爱伊克斯佩克特古德瑞扎茨
Expectation|/ˌekspekˈteɪʃn/|埃克斯佩克泰申|期望|Meet the expectations.|满足期望。|米特泽埃克斯佩克泰申兹
Expedition|/ˌekspəˈdɪʃn/|埃克斯佩迪申|远征|Join the expedition.|加入远征。|乔因泽埃克斯佩迪申
Expense|/ɪkˈspens/|伊克斯彭斯|费用|The expense was high.|费用很高。|泽伊克斯彭斯沃兹海
Expensive|/ɪkˈspensɪv/|伊克斯彭西夫|昂贵的|This is too expensive.|这太贵了。|迪斯伊兹图伊克斯彭西夫
Experience|/ɪkˈspɪəriəns/|伊克斯皮里恩斯|经验|Gain experience.|获得经验。|盖恩伊克斯皮里恩斯
Experiment|/ɪkˈsperɪmənt/|伊克斯佩里门特|实验|Conduct an experiment.|进行实验。|康达克特安伊克斯佩里门特
Expert|/ˈekspɜːt/|埃克斯珀特|专家|He is an expert in this field.|他是这个领域的专家。|希伊兹安埃克斯珀特因迪斯菲尔德
Explain|/ɪkˈspleɪn/|伊克斯普莱恩|解释|Explain the situation.|解释情况。|伊克斯普莱恩泽西图埃申
Explanation|/ˌekspləˈneɪʃn/|埃克斯普莱内申|解释|Give me an explanation.|给我一个解释。|吉夫米安埃克斯普莱内申
Explicit|/ɪkˈsplɪsɪt/|伊克斯普利西特|明确的|Be explicit about your needs.|明确表达你的需求。|比伊克斯普利西特阿鲍特尤尔尼兹
Explode|/ɪkˈspləʊd/|伊克斯普洛德|爆炸|The bomb might explode.|炸弹可能会爆炸。|泽博姆迈特伊克斯普洛德
Exploit|/ɪkˈsplɔɪt/|伊克斯普洛伊特|利用|Do not exploit workers.|不要剥削工人。|杜诺特伊克斯普洛伊特沃克尔斯
Explore|/ɪkˈsplɔː(r)/|伊克斯普洛|探索|Explore new possibilities.|探索新的可能性。|伊克斯普洛纽波西比利蒂兹
Explosion|/ɪkˈspləʊʒn/|伊克斯普洛任|爆炸|There was a loud explosion.|有一声巨大的爆炸声。|泽尔沃兹阿劳德伊克斯普洛任
Export|/ɪkˈspɔːt/|伊克斯波特|出口|Export goods to other countries.|向其他国家出口商品。|伊克斯波特古兹图阿泽尔康特里斯
Expose|/ɪkˈspəʊz/|伊克斯波兹|暴露|Do not expose the secret.|不要暴露秘密。|杜诺特伊克斯波兹泽西克雷特
Exposure|/ɪkˈspəʊʒə(r)/|伊克斯波热|暴露|Avoid exposure to the sun.|避免暴露在阳光下。|阿沃伊德伊克斯波热图泽桑
Express|/ɪkˈspres/|伊克斯普雷斯|表达|Express your opinion.|表达你的意见。|伊克斯普雷斯尤尔奥皮尼恩
Expression|/ɪkˈspreʃn/|伊克斯普雷申|表达|Use appropriate expressions.|使用适当的表达。|尤兹阿普罗普里特伊克斯普雷申兹
Extend|/ɪkˈstend/|伊克斯滕德|延长|Extend the deadline.|延长截止日期。|伊克斯滕德泽戴德莱恩
Extension|/ɪkˈstenʃn/|伊克斯滕申|延伸|Request an extension.|请求延期。|里奎斯特安伊克斯滕申
Extensive|/ɪkˈstensɪv/|伊克斯滕西夫|广泛的|He has extensive knowledge.|他有广泛的知识。|希哈兹伊克斯滕西夫诺利奇
Extent|/ɪkˈstent/|伊克斯滕特|程度|To what extent is this true?|这在多大程度上是真的？|图沃特伊克斯滕特伊兹迪斯特鲁
External|/ɪkˈstɜːnl/|伊克斯特纳尔|外部的|External factors are important.|外部因素很重要。|伊克斯特纳尔法克特兹阿因波坦特
Extra|/ˈekstrə/|埃克斯特拉|额外的|I need extra time.|我需要额外的时间。|爱尼德埃克斯特拉泰姆
Extract|/ɪkˈstrækt/|伊克斯特拉克特|提取|Extract the data.|提取数据。|伊克斯特拉克特泽戴塔
Extraordinary|/ɪkˈstrɔːdnri/|伊克斯特劳德纳里|非凡的|She has extraordinary talent.|她有非凡的才能。|希哈兹伊克斯特劳德纳里泰伦特
Extreme|/ɪkˈstriːm/|伊克斯特里姆|极端的|Avoid extreme measures.|避免极端措施。|阿沃伊德伊克斯特里姆梅热兹
Extremely|/ɪkˈstriːmli/|伊克斯特里姆利|非常|It is extremely important.|这非常重要。|伊特伊兹伊克斯特里姆利因波坦特
Eye|/aɪ/|艾|眼睛|She has beautiful eyes.|她有美丽的眼睛。|希哈兹比欧特夫欧艾兹
Eyesight|/ˈaɪsaɪt/|艾萨特|视力|His eyesight is poor.|他的视力不好。|希兹艾萨特伊兹普尔`;

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
