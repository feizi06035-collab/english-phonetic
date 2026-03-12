const fs = require('fs');

const wordData = `Abundant|/əˈbʌndənt/|阿班登特|丰富的|The garden has abundant flowers.|花园里有丰富的花朵。|泽加登哈兹阿班登特夫劳尔斯
Accelerate|/əkˈseləreɪt/|阿克塞勒雷特|加速|We need to accelerate the process.|我们需要加快这个过程。|威尼德图阿克塞勒雷特泽普罗塞斯
Accomplish|/əˈkʌmplɪʃ/|阿康普利什|完成|She accomplished her goal.|她完成了她的目标。|希阿康普利什德赫尔格尔
Accurate|/ˈækjərət/|阿克尤拉特|准确的|The information is accurate.|信息是准确的。|泽因弗梅申伊兹阿克尤拉特
Achieve|/əˈtʃiːv/|阿奇夫|实现|You can achieve anything.|你可以实现任何事情。|优坎阿奇夫埃尼辛
Acknowledge|/əkˈnɒlɪdʒ/|阿克诺利奇|承认|Please acknowledge the receipt.|请确认收到。|普利斯阿克诺利奇泽瑞希特
Acquire|/əˈkwaɪə(r)/|阿克瓦亚|获得|He acquired new skills.|他获得了新技能。|希阿克瓦亚德纽斯基尔斯
Adapt|/əˈdæpt/|阿达普特|适应|We must adapt to changes.|我们必须适应变化。|威马斯特阿达普特图切因杰斯
Adequate|/ˈædɪkwət/|阿迪克沃特|足够的|We have adequate resources.|我们有足够的资源。|威海夫阿迪克沃特里索西斯
Adjust|/əˈdʒʌst/|阿贾斯特|调整|Please adjust the settings.|请调整设置。|普利斯阿贾斯特泽塞丁斯
Administration|/ədˌmɪnɪˈstreɪʃn/|阿德米尼斯特雷申|管理|The administration is efficient.|管理很高效。|泽阿德米尼斯特雷申伊兹伊菲申特
Advantage|/ədˈvɑːntɪdʒ/|阿德万蒂奇|优势|This is a great advantage.|这是一个巨大的优势。|迪斯伊兹阿格雷特阿德万蒂奇
Adventure|/ədˈventʃə(r)/|阿德文切尔|冒险|Life is an adventure.|生活是一场冒险。|莱夫伊兹安阿德文切尔
Advertise|/ˈædvətaɪz/|阿德沃泰兹|广告|They advertise on TV.|他们在电视上做广告。|泽伊阿德沃泰兹昂TV
Advocate|/ˈædvəkeɪt/|阿德沃凯特|提倡|He advocates for peace.|他提倡和平。|希阿德沃凯茨福皮斯
Affect|/əˈfekt/|阿费克特|影响|This will affect the result.|这会影响结果。|迪斯威尔阿费克特泽瑞扎尔特
Afford|/əˈfɔːd/|阿福德|负担得起|I cannot afford this.|我负担不起这个。|爱坎诺特阿福德迪斯
Aggregate|/ˈæɡrɪɡət/|阿格里格特|总计|The aggregate score is high.|总分很高。|泽阿格里格特斯科尔伊兹海
Aggressive|/əˈɡresɪv/|阿格雷西夫|进取的|Be aggressive in business.|在商业上要进取。|比阿格雷西夫因比兹尼斯
Allocate|/ˈæləkeɪt/|阿洛凯特|分配|We need to allocate resources.|我们需要分配资源。|威尼德图阿洛凯特里索西斯
Alternative|/ɔːlˈtɜːnətɪv/|奥尔特纳蒂夫|替代的|We need an alternative plan.|我们需要一个替代方案。|威尼德安奥尔特纳蒂夫普兰
Ambition|/æmˈbɪʃn/|安比申|雄心|She has great ambition.|她有很大的雄心。|希哈兹格雷特安比申
Amplify|/ˈæmplɪfaɪ/|安普利法伊|放大|Please amplify the sound.|请放大声音。|普利斯安普利法伊泽桑德
Analyze|/ˈænəlaɪz/|安娜莱兹|分析|We need to analyze the data.|我们需要分析数据。|威尼德图安娜莱兹泽戴塔
Announce|/əˈnaʊns/|阿南斯|宣布|They will announce the winner.|他们将宣布获胜者。|泽伊威尔阿南斯泽温纳
Anticipate|/ænˈtɪsɪpeɪt/|安蒂西佩特|预期|We anticipate good results.|我们预期好的结果。|威安蒂西佩特古德瑞扎茨
Anxious|/ˈæŋkʃəs/|安克斯|焦虑的|She feels anxious about the exam.|她对考试感到焦虑。|希菲尔斯安克斯阿鲍特泽伊格扎姆
Apparent|/əˈpærənt/|阿帕伦特|明显的|The reason is apparent.|原因是明显的。|泽里森伊兹阿帕伦特
Appeal|/əˈpiːl/|阿皮尔|呼吁|The idea has appeal.|这个想法有吸引力。|泽艾迪亚哈兹阿皮尔
Appetite|/ˈæpɪtaɪt/|阿皮泰特|食欲|I have a good appetite.|我胃口很好。|爱海夫阿古德阿皮泰特
Application|/ˌæplɪˈkeɪʃn/|阿普利凯申|应用|Submit your application.|提交你的申请。|萨布米特尤尔阿普利凯申
Appoint|/əˈpɔɪnt/|阿波因特|任命|They appointed a new manager.|他们任命了一位新经理。|泽伊阿波因特德阿纽曼纳杰
Appreciate|/əˈpriːʃieɪt/|阿普里希埃特|感激|I appreciate your help.|我感激你的帮助。|爱阿普里希埃特尤尔赫尔普
Approach|/əˈprəʊtʃ/|阿普罗奇|方法|This is a new approach.|这是一个新方法。|迪斯伊兹阿纽阿普罗奇
Appropriate|/əˈprəʊpriət/|阿普罗普里特|适当的|Wear appropriate clothing.|穿适当的衣服。|韦尔阿普罗普里特克洛辛
Approval|/əˈpruːvl/|阿普鲁瓦尔|批准|We need approval for this.|我们需要对此的批准。|威尼德阿普鲁瓦尔福迪斯
Approximate|/əˈprɒksɪmət/|阿普罗克西梅特|大约的|The approximate cost is 100 dollars.|大约的费用是100美元。|泽阿普罗克西梅特科斯特伊兹100
Arbitrary|/ˈɑːbɪtrəri/|阿比特拉里|任意的|The decision seems arbitrary.|这个决定似乎是任意的。|泽迪西任西姆斯阿比特拉里
Architecture|/ˈɑːkɪtektʃə(r)/|阿基泰克切尔|建筑|The architecture is beautiful.|建筑很美。|泽阿基泰克切尔伊兹比欧特夫欧
Argue|/ˈɑːɡjuː/|阿格尤|争论|Do not argue with me.|不要和我争论。|杜诺特阿格尤威兹米
Arouse|/əˈraʊz/|阿劳兹|引起|This might arouse suspicion.|这可能会引起怀疑。|迪斯迈特阿劳兹萨斯皮申
Arrange|/əˈreɪndʒ/|阿兰奇|安排|I will arrange a meeting.|我会安排一个会议。|爱威尔阿兰奇阿米听
Arrest|/əˈrest/|阿雷斯特|逮捕|The police arrested him.|警察逮捕了他。|泽波利斯阿雷斯特德希姆
Articulate|/ɑːˈtɪkjələt/|阿蒂丘勒特|清晰表达|She speaks articulately.|她说话清晰。|希斯皮克斯阿蒂丘勒特利
Artificial|/ˌɑːtɪˈfɪʃl/|阿蒂菲肖|人工的|This is artificial intelligence.|这是人工智能。|迪斯伊兹阿蒂菲肖因泰利杰斯
Aspect|/ˈæspekt/|阿斯佩克特|方面|Consider every aspect.|考虑每个方面。|康西德埃夫里阿斯佩克特
Assemble|/əˈsembl/|阿森布尔|组装|We need to assemble the team.|我们需要组建团队。|威尼德图阿森布尔泽蒂姆
Assert|/əˈsɜːt/|阿瑟特|断言|He asserted his rights.|他断言他的权利。|希阿瑟特德希兹赖茨
Assess|/əˈses/|阿塞斯|评估|We need to assess the situation.|我们需要评估情况。|威尼德图阿塞斯泽西图埃申
Assign|/əˈsaɪn/|阿赛恩|分配|Please assign a task to him.|请给他分配一个任务。|普利斯阿赛恩阿塔斯克图希姆
Assist|/əˈsɪst/|阿西斯|协助|Can you assist me?|你能协助我吗？|坎优阿西斯米
Associate|/əˈsəʊʃieɪt/|阿索希埃特|联系|I associate this with happiness.|我把这与幸福联系在一起。|爱阿索希埃特迪斯威兹哈皮尼斯
Assume|/əˈsjuːm/|阿休姆|假设|Let us assume this is true.|让我们假设这是真的。|莱特斯阿休姆迪斯伊兹特鲁
Assure|/əˈʃʊə(r)/|阿舒尔|保证|I assure you it is safe.|我向你保证它是安全的。|爱阿舒尔优伊特伊兹塞夫
Attach|/əˈtætʃ/|阿塔奇|附上|Please attach the file.|请附上文件。|普利斯阿塔奇泽法尔
Attain|/əˈteɪn/|阿泰恩|获得|He attained his goal.|他获得了他的目标。|希阿泰恩德希兹格尔
Attempt|/əˈtempt/|阿坦普特|尝试|He made an attempt.|他做了一次尝试。|希梅德安阿坦普特
Attend|/əˈtend/|阿坦德|参加|Please attend the meeting.|请参加会议。|普利斯阿坦德泽米听
Attract|/əˈtrækt/|阿特拉克特|吸引|The music attracts many people.|音乐吸引了许多人。|泽缪齐克阿特拉克茨梅尼皮普尔
Attribute|/əˈtrɪbjuːt/|阿特里布尤特|归因于|He attributes his success to hard work.|他把成功归因于努力工作。|希阿特里布尤茨希兹萨克塞斯图哈德沃克
Authority|/ɔːˈθɒrəti/|奥索拉蒂|权威|He has the authority to decide.|他有权决定。|希哈兹泽奥索拉蒂图迪赛德
Automatic|/ˌɔːtəˈmætɪk/|奥特马蒂克|自动的|This is an automatic process.|这是一个自动过程。|迪斯伊兹安奥特马蒂克普罗塞斯
Available|/əˈveɪləbl/|阿韦拉布尔|可用的|Is this seat available?|这个座位可用吗？|伊兹迪斯西特阿韦拉布尔
Average|/ˈævərɪdʒ/|阿弗里奇|平均的|The average score is 80.|平均分是80。|泽阿弗里奇斯科尔伊兹80
Avoid|/əˈvɔɪd/|阿沃伊德|避免|Avoid making mistakes.|避免犯错。|阿沃伊德梅金米斯泰克斯
Aware|/əˈweə(r)/|阿韦尔|意识到的|Are you aware of this?|你意识到这个了吗？|阿优阿韦尔奥夫迪斯
Awful|/ˈɔːfl/|奥夫欧|可怕的|The weather is awful today.|今天天气很糟糕。|泽韦泽伊兹奥夫欧特戴
Balance|/ˈbæləns/|巴伦斯|平衡|Maintain a good balance.|保持良好的平衡。|梅因特恩阿古德巴伦斯
Barrier|/ˈbæriə(r)/|巴里尔|障碍|Language is a barrier.|语言是一个障碍。|兰圭奇伊兹阿巴里尔
Base|/beɪs/|贝斯|基础|This is the base of the argument.|这是争论的基础。|迪斯伊兹泽贝斯奥夫泽阿格尤门特
Basis|/ˈbeɪsɪs/|贝西斯|基础|On what basis did you decide?|你基于什么基础决定的？|昂沃特贝西斯迪德优迪赛德
Behalf|/bɪˈhɑːf/|比哈夫|代表|I speak on behalf of the team.|我代表团队发言。|爱斯皮克昂比哈夫奥夫泽蒂姆
Behave|/bɪˈheɪv/|比海夫|表现|Please behave yourself.|请表现得体。|普利斯比海夫尤尔塞尔夫
Benefit|/ˈbenɪfɪt/|本尼菲特|好处|This will benefit everyone.|这会使每个人受益。|迪斯威尔本尼菲特埃夫里万
Bias|/ˈbaɪəs/|巴亚斯|偏见|Avoid bias in your judgment.|避免在判断中有偏见。|阿沃伊德巴亚斯因尤尔贾杰门特
Bond|/bɒnd/|邦德|纽带|Family bonds are important.|家庭纽带很重要。|法米利邦兹阿因波坦特
Boundary|/ˈbaʊndri/|邦德里|边界|Set clear boundaries.|设定清晰的边界。|塞特克利尔邦德里斯
Brief|/briːf/|布里夫|简短的|Please be brief.|请简短。|普利斯比布里夫
Brilliant|/ˈbrɪliənt/|布里利恩特|杰出的|She is a brilliant student.|她是一个杰出的学生。|希伊兹阿布里利恩特斯图登特
Budget|/ˈbʌdʒɪt/|巴吉特|预算|We need to stick to the budget.|我们需要坚持预算。|威尼德图斯提克图泽巴吉特
Bulk|/bʌlk/|巴尔克|大量|We bought in bulk.|我们批量购买。|威博特因巴尔克
Calculate|/ˈkælkjuleɪt/|卡尔丘莱特|计算|Calculate the total cost.|计算总成本。|卡尔丘莱特泽托特尔科斯特
Capability|/ˌkeɪpəˈbɪləti/|凯帕比拉蒂|能力|We have the capability to do this.|我们有能力做这件事。|威海夫泽凯帕比拉蒂图杜迪斯
Capacity|/kəˈpæsəti/|卡帕萨蒂|容量|The room has a capacity of 100.|房间容量为100人。|泽鲁姆哈兹阿卡帕萨蒂奥夫100
Capture|/ˈkæptʃə(r)/|卡普切尔|捕获|Capture the moment.|捕捉这一刻。|卡普切尔泽莫门特
Career|/kəˈrɪə(r)/|卡里尔|职业|She has a successful career.|她有成功的职业生涯。|希哈兹阿萨克塞斯福卡里尔
Category|/ˈkætəɡəri/|卡蒂格里|类别|Which category does this belong to?|这属于哪个类别？|威奇卡蒂格里达兹迪斯比朗图
Cease|/siːs/|西斯|停止|Cease fire immediately.|立即停火。|西斯法亚伊米迪特利
Challenge|/ˈtʃælɪndʒ/|查林奇|挑战|This is a big challenge.|这是一个大挑战。|迪斯伊兹阿比格查林奇
Champion|/ˈtʃæmpiən/|查姆皮恩|冠军|She is a world champion.|她是世界冠军。|希伊兹阿沃尔德查姆皮恩
Channel|/ˈtʃænl/|查内尔|渠道|Use the proper channel.|使用正确的渠道。|尤兹泽普罗珀查内尔
Chapter|/ˈtʃæptə(r)/|查普特|章节|Read chapter one.|阅读第一章。|里德查普特万
Characteristic|/ˌkærəktəˈrɪstɪk/|卡拉克特里斯蒂克|特征|This is a key characteristic.|这是一个关键特征。|迪斯伊兹阿基卡拉克特里斯蒂克
Charge|/tʃɑːdʒ/|查奇|负责|Who is in charge?|谁负责？|胡伊兹因查奇
Charity|/ˈtʃærəti/|查里蒂|慈善|She works for charity.|她为慈善工作。|希沃克斯福查里蒂
Chart|/tʃɑːt/|查特|图表|Look at the chart.|看图表。|卢克阿特泽查特
Chase|/tʃeɪs/|切斯|追逐|Chase your dreams.|追逐你的梦想。|切斯尤尔德里姆斯
Circumstance|/ˈsɜːkəmstəns/|瑟卡姆斯坦斯|情况|Under the circumstances we cannot proceed.|在这种情况下我们不能继续。|安德泽瑟卡姆斯坦西斯威坎诺特普罗西德
Cite|/saɪt/|赛特|引用|Please cite your sources.|请引用你的来源。|普利斯赛特尤尔索西斯
Claim|/kleɪm/|克莱姆|声称|He claims to be innocent.|他声称自己是无辜的。|希克莱姆斯图比伊诺森特
Clarify|/ˈklærəfaɪ/|克拉里法伊|澄清|Please clarify your point.|请澄清你的观点。|普利斯克拉里法伊尤尔波因特
Classic|/ˈklæsɪk/|克拉西克|经典的|This is a classic example.|这是一个经典的例子。|迪斯伊兹阿克拉西克伊格扎姆普尔
Climate|/ˈklaɪmət/|克莱梅特|气候|The climate is changing.|气候正在变化。|泽克莱梅特伊兹切因金
Climax|/ˈklaɪmæks/|克莱梅克斯|高潮|This is the climax of the story.|这是故事的高潮。|迪斯伊兹泽克莱梅克斯奥夫泽斯托里
Cluster|/ˈklʌstə(r)/|克拉斯特|群集|A cluster of stars.|一群星星。|阿克拉斯特奥夫斯塔兹
Coherent|/kəʊˈhɪərənt/|科希尔伦特|连贯的|The argument is coherent.|论点是连贯的。|泽阿格尤门特伊兹科希尔伦特
Coincide|/ˌkəʊɪnˈsaɪd/|科因赛德|同时发生|The events coincide.|事件同时发生。|泽伊文茨科因赛德
Collaborate|/kəˈlæbəreɪt/|科拉博雷特|合作|We need to collaborate on this project.|我们需要在这个项目上合作。|威尼德图科拉博雷特昂迪斯普罗杰克特
Collapse|/kəˈlæps/|科拉普斯|崩溃|The building collapsed.|建筑物倒塌了。|泽比尔丁科拉普斯特
Colleague|/ˈkɒliːɡ/|科利格|同事|She is my colleague.|她是我的同事。|希伊兹迈科利格
Collect|/kəˈlekt/|科莱克特|收集|I collect stamps.|我收集邮票。|爱科莱克特斯坦普斯
Collision|/kəˈlɪʒn/|科利任|碰撞|There was a collision.|发生了碰撞。|泽尔沃兹阿科利任
Combine|/kəmˈbaɪn/|康拜恩|结合|Combine all the ingredients.|把所有配料混合在一起。|康拜恩奥尔泽因格里迪恩茨
Comfort|/ˈkʌmfət/|康弗特|舒适|This chair provides comfort.|这把椅子提供舒适。|迪斯切尔普罗瓦伊兹康弗特
Command|/kəˈmɑːnd/|科曼德|命令|Follow the command.|服从命令。|法洛泽科曼德
Comment|/ˈkɒment/|科门特|评论|Please leave a comment.|请留下评论。|普利斯利夫阿科门特
Commission|/kəˈmɪʃn/|科米申|委员会|The commission will investigate.|委员会将调查。|泽科米申威尔因韦斯蒂盖特
Commit|/kəˈmɪt/|科米特|承诺|Commit to your goals.|致力于你的目标。|科米特图尤尔格尔斯
Commodity|/kəˈmɒdəti/|科莫达蒂|商品|Oil is a valuable commodity.|石油是一种有价值的商品。|奥伊尔伊兹阿韦尔尤布尔科莫达蒂
Communicate|/kəˈmjuːnɪkeɪt/|科缪尼凯特|交流|We need to communicate better.|我们需要更好地交流。|威尼德图科缪尼凯特贝特尔
Compare|/kəmˈpeə(r)/|康佩尔|比较|Compare the two options.|比较这两个选项。|康佩尔泽图奥普申斯
Compensate|/ˈkɒmpenseɪt/|康彭塞特|补偿|We will compensate you.|我们会补偿你。|威威尔康彭塞特优
Compete|/kəmˈpiːt/|康皮特|竞争|We compete globally.|我们在全球竞争。|威康皮特格洛巴利
Compile|/kəmˈpaɪl/|康派尔|编译|Compile the data.|编译数据。|康派尔泽戴塔
Complain|/kəmˈpleɪn/|康普莱恩|抱怨|Do not complain.|不要抱怨。|杜诺特康普莱恩
Complete|/kəmˈpliːt/|康普利特|完成|Complete the task.|完成任务。|康普利特泽塔斯克
Complex|/ˈkɒmpleks/|康普莱克斯|复杂的|This is a complex problem.|这是一个复杂的问题。|迪斯伊兹阿康普莱克斯普罗布勒姆
Component|/kəmˈpəʊnənt/|康波嫩特|组件|Each component is important.|每个组件都很重要。|伊奇康波嫩特伊兹因波坦特
Compose|/kəmˈpəʊz/|康波兹|组成|Water is composed of hydrogen and oxygen.|水由氢和氧组成。|沃特尔伊兹康波兹德奥夫海德罗珍安德奥克斯珍
Compound|/ˈkɒmpaʊnd/|康庞德|复合物|This is a chemical compound.|这是一种化合物。|迪斯伊兹阿凯米克尔康庞德
Comprehensive|/ˌkɒmprɪˈhensɪv/|康普里亨西夫|全面的|We need a comprehensive plan.|我们需要一个全面的计划。|威尼德阿康普里亨西夫普兰
Comprise|/kəmˈpraɪz/|康普莱兹|包含|The team comprises five members.|团队包含五名成员。|泽蒂姆康普莱兹法夫蒙伯兹
Compromise|/ˈkɒmprəmaɪz/|康普罗马兹|妥协|We need to compromise.|我们需要妥协。|威尼德图康普罗马兹
Compute|/kəmˈpjuːt/|康皮尤特|计算|Compute the result.|计算结果。|康皮尤特泽瑞扎尔特
Concentrate|/ˈkɒnsntreɪt/|康森特雷特|集中|Concentrate on your work.|专注于你的工作。|康森特雷特昂尤尔沃克
Concept|/ˈkɒnsept/|康塞普特|概念|This is a new concept.|这是一个新概念。|迪斯伊兹阿纽康塞普特
Concern|/kənˈsɜːn/|康瑟恩|关心|I am concerned about you.|我关心你。|爱阿姆康瑟恩德阿鲍特优
Conclude|/kənˈkluːd/|康克卢德|得出结论|We can conclude that he is right.|我们可以得出结论他是对的。|威坎康克卢德泽特希伊兹赖特
Concrete|/ˈkɒŋkriːt/|康克里特|具体的|Give me a concrete example.|给我一个具体的例子。|吉夫米阿康克里特伊格扎姆普尔
Conduct|/kənˈdʌkt/|康达克特|进行|We will conduct a survey.|我们将进行调查。|威威尔康达克特阿瑟维
Conference|/ˈkɒnfərəns/|康弗伦斯|会议|Attend the conference.|参加会议。|阿坦德泽康弗伦斯
Confess|/kənˈfes/|康费斯|承认|He confessed his mistake.|他承认了他的错误。|希康费斯特希兹米斯泰克
Confidence|/ˈkɒnfɪdəns/|康菲登斯|信心|Have confidence in yourself.|对自己有信心。|海夫康菲登斯因尤尔塞尔夫
Confine|/kənˈfaɪn/|康法恩|限制|Confine your discussion to the topic.|把你的讨论限制在主题内。|康法恩尤尔迪斯卡申图泽托皮克
Confirm|/kənˈfɜːm/|康弗姆|确认|Please confirm your reservation.|请确认您的预订。|普利斯康弗姆尤尔雷泽韦申
Conflict|/ˈkɒnflɪkt/|康弗利克特|冲突|There is a conflict of interest.|存在利益冲突。|泽尔伊兹阿康弗利克特奥夫因特雷斯特
Confront|/kənˈfrʌnt/|康弗朗特|面对|We must confront the problem.|我们必须面对问题。|威马斯特康弗朗特泽普罗布勒姆
Confuse|/kənˈfjuːz/|康夫尤兹|使困惑|Do not confuse the issues.|不要混淆问题。|杜诺特康夫尤兹泽伊舒兹
Congratulate|/kənˈɡrætʃuleɪt/|康格拉丘莱特|祝贺|I congratulate you on your success.|我祝贺你的成功。|爱康格拉丘莱特优昂尤尔萨克塞斯
Congress|/ˈkɒŋɡres/|康格雷斯|国会|Congress passed the bill.|国会通过了法案。|康格雷斯帕斯特泽比尔
Connect|/kəˈnekt/|科内克特|连接|Connect the dots.|连接点。|科内克特泽多茨
Conquer|/ˈkɒŋkə(r)/|康克|征服|Conquer your fears.|征服你的恐惧。|康克尤尔菲尔斯
Conscience|/ˈkɒnʃəns/|康申斯|良心|Follow your conscience.|跟随你的良心。|法洛尤尔康申斯
Conscious|/ˈkɒnʃəs/|康舍斯|有意识的|Be conscious of your surroundings.|注意你的周围环境。|比康舍斯奥夫尤尔瑟朗丁斯
Consensus|/kənˈsensəs/|康森萨斯|共识|We reached a consensus.|我们达成了共识。|威里奇德阿康森萨斯
Consent|/kənˈsent/|康森特|同意|I give my consent.|我同意。|爱吉夫迈康森特
Consequence|/ˈkɒnsɪkwəns/|康西克文斯|后果|Consider the consequences.|考虑后果。|康西德泽康西克文西斯
Conserve|/kənˈsɜːv/|康瑟夫|保护|We need to conserve water.|我们需要节约用水。|威尼德图康瑟夫沃特尔
Consider|/kənˈsɪdə(r)/|康西德|考虑|Consider all options.|考虑所有选项。|康西德奥尔奥普申斯
Consist|/kənˈsɪst/|康西斯|由...组成|The team consists of experts.|团队由专家组成。|泽蒂姆康西斯茨奥夫埃克斯珀茨
Consistent|/kənˈsɪstənt/|康西斯滕特|一致的|Be consistent in your efforts.|在你的努力中保持一致。|比康西斯滕特因尤尔埃福茨
Constant|/ˈkɒnstənt/|康斯坦特|不断的|There is constant change.|变化是不断的。|泽尔伊兹康斯坦特切因奇
Constitute|/ˈkɒnstɪtjuːt/|康斯提尤特|构成|Women constitute half the population.|女性占人口的一半。|威明康斯提尤特哈夫泽波普尤莱申
Construct|/kənˈstrʌkt/|康斯特拉克特|建造|They constructed a new building.|他们建造了一座新建筑。|泽伊康斯特拉克特德阿纽比尔丁
Consult|/kənˈsʌlt/|康萨尔特|咨询|Consult your doctor.|咨询你的医生。|康萨尔特尤尔多克特尔
Consume|/kənˈsjuːm/|康休姆|消费|We consume too much sugar.|我们消费太多糖。|威康休姆图马奇舒格尔
Contact|/ˈkɒntækt/|康塔克特|联系|Please contact us.|请联系我们。|普利斯康塔克特阿斯
Contain|/kənˈteɪn/|康泰恩|包含|This box contains books.|这个盒子包含书。|迪斯博克斯康泰恩兹布克斯
Contaminate|/kənˈtæmɪneɪt/|康塔米内特|污染|Do not contaminate the water.|不要污染水。|杜诺特康塔米内特泽沃特尔
Contemplate|/ˈkɒntəmpleɪt/|康坦普莱特|沉思|Contemplate your future.|思考你的未来。|康坦普莱特尤尔菲尤切尔
Contemporary|/kənˈtempərəri/|康坦波拉里|当代的|This is contemporary art.|这是当代艺术。|迪斯伊兹康坦波拉里阿特
Content|/ˈkɒntent/|康滕特|内容|The content is interesting.|内容很有趣。|泽康滕特伊兹因特雷斯丁
Contest|/ˈkɒntest/|康泰斯特|比赛|Enter the contest.|参加比赛。|恩特尔泽康泰斯特
Context|/ˈkɒntekst/|康泰克斯特|背景|Consider the context.|考虑背景。|康西德泽康泰克斯特
Contract|/ˈkɒntrækt/|康特拉克特|合同|Sign the contract.|签署合同。|赛恩泽康特拉克特
Contradict|/ˌkɒntrəˈdɪkt/|康特拉迪克特|反驳|Do not contradict me.|不要反驳我。|杜诺特康特拉迪克特米
Contrast|/ˈkɒntrɑːst/|康特拉斯特|对比|Compare and contrast.|比较和对比。|康佩尔安德康特拉斯特
Contribute|/kənˈtrɪbjuːt/|康特里布尤特|贡献|Everyone can contribute.|每个人都可以贡献。|埃夫里万坎康特里布尤特
Control|/kənˈtrəʊl/|康特罗尔|控制|Control your emotions.|控制你的情绪。|康特罗尔尤尔伊莫申斯
Controversial|/ˌkɒntrəˈvɜːʃl/|康特罗弗沙尔|有争议的|This is a controversial topic.|这是一个有争议的话题。|迪斯伊兹阿康特罗弗沙尔托皮克
Convenient|/kənˈviːniənt/|康维尼恩特|方便的|This location is convenient.|这个位置很方便。|迪斯洛凯申伊兹康维尼恩特
Conventional|/kənˈvenʃənl/|康文申纳尔|传统的|This is the conventional method.|这是传统方法。|迪斯伊兹泽康文申纳尔梅瑟德
Converse|/kənˈvɜːs/|康弗斯|交谈|We conversed for hours.|我们交谈了几个小时。|威康弗斯特福阿韦尔斯
Convert|/kənˈvɜːt/|康弗特|转换|Convert the file to PDF.|将文件转换为PDF。|康弗特泽法尔图PDF
Convey|/kənˈveɪ/|康维|传达|Convey my message.|传达我的信息。|康维迈梅西奇
Convince|/kənˈvɪns/|康文斯|说服|Convince him to join us.|说服他加入我们。|康文斯希姆图乔因阿斯
Cooperate|/kəʊˈɒpəreɪt/|科奥珀雷特|合作|We need to cooperate.|我们需要合作。|威尼德图科奥珀雷特
Coordinate|/kəʊˈɔːdɪneɪt/|科奥迪内特|协调|Coordinate the activities.|协调活动。|科奥迪内特泽阿克提维蒂兹
Cope|/kəʊp/|科普|应对|She cannot cope with the stress.|她无法应对压力。|希坎诺特科普威兹泽斯特雷斯
Core|/kɔː(r)/|科尔|核心|This is the core issue.|这是核心问题。|迪斯伊兹泽科尔伊舒
Corporate|/ˈkɔːpərət/|科尔珀拉特|企业的|Corporate culture is important.|企业文化很重要。|科尔珀拉特卡尔切尔伊兹因波坦特
Correspond|/ˌkɒrɪˈspɒnd/|科里斯庞德|对应|These numbers correspond.|这些数字相对应。|齐兹南伯兹科里斯庞德
Corrupt|/kəˈrʌpt/|科拉普特|腐败的|The system is corrupt.|系统是腐败的。|泽西斯滕伊兹科拉普特
Counsel|/ˈkaʊnsl/|考恩索尔|建议|Seek legal counsel.|寻求法律建议。|西克利格尔考恩索尔
Count|/kaʊnt/|考恩特|计数|Count your blessings.|数数你的祝福。|考恩特尤尔布莱辛斯
Counterpart|/ˈkaʊntəpɑːt/|考恩特帕特|对应物|Meet your counterpart.|见你的对应方。|米特尤尔考恩特帕特
Couple|/ˈkʌpl/|卡普尔|一对|A couple of days.|几天。|阿卡普尔奥夫戴兹
Course|/kɔːs/|科尔斯|课程|Take this course.|参加这个课程。|泰克迪斯科尔斯
Court|/kɔːt/|科特|法院|The court decided.|法院做出了决定。|泽科特迪赛迪德
Cover|/ˈkʌvə(r)/|卡沃|覆盖|Cover the table.|盖住桌子。|卡沃泽泰布尔
Crack|/kræk/|克拉克|裂缝|There is a crack in the wall.|墙上有一条裂缝。|泽尔伊兹阿克拉克因泽沃尔
Craft|/krɑːft/|克拉夫特|工艺|Learn a craft.|学习一门手艺。|勒恩阿克拉夫特
Crash|/kræʃ/|克拉什|崩溃|The computer crashed.|电脑崩溃了。|泽康皮尤特尔克拉什特
Create|/kriˈeɪt/|克里埃特|创造|Create something new.|创造新事物。|克里埃特萨姆辛纽
Creative|/kriˈeɪtɪv/|克里埃蒂夫|有创造力的|Be creative.|要有创造力。|比克里埃蒂夫
Creature|/ˈkriːtʃə(r)/|克里切尔|生物|All creatures are equal.|所有生物都是平等的。|奥尔克里切尔兹阿伊克沃尔
Credit|/ˈkredɪt/|克雷迪特|信用|Give credit where it is due.|给予应有的认可。|吉夫克雷迪特韦尔伊特伊兹杜
Crisis|/ˈkraɪsɪs/|克莱西斯|危机|We face a crisis.|我们面临危机。|威菲斯阿克莱西斯
Criterion|/kraɪˈtɪəriən/|克莱蒂里恩|标准|What is the main criterion?|主要标准是什么？|沃特伊兹泽梅因克莱蒂里恩
Critic|/ˈkrɪtɪk/|克里蒂克|批评家|She is a film critic.|她是一位电影评论家。|希伊兹阿菲尔姆克里蒂克
Critical|/ˈkrɪtɪkl/|克里蒂克尔|关键的|This is a critical moment.|这是一个关键时刻。|迪斯伊兹阿克里蒂克尔莫门特
Criticism|/ˈkrɪtɪsɪzəm/|克里蒂西扎姆|批评|Accept constructive criticism.|接受建设性的批评。|阿克塞普特康斯特拉克蒂夫克里蒂西扎姆
Critique|/krɪˈtiːk/|克里蒂克|评论|Write a critique.|写一篇评论。|莱特阿克里蒂克
Crop|/krɒp/|克洛普|庄稼|The crop failed this year.|今年庄稼歉收。|泽克洛普菲尔德迪斯耶尔
Crucial|/ˈkruːʃl/|克鲁沙尔|关键的|This is crucial information.|这是关键信息。|迪斯伊兹克鲁沙尔因弗梅申
Cruel|/ˈkruːəl/|克鲁尔|残忍的|That was cruel.|那是残忍的。|泽特沃兹克鲁尔
Cultivate|/ˈkʌltɪveɪt/|卡尔蒂维特|培养|Cultivate good habits.|培养好习惯。|卡尔蒂维特古德哈比茨
Culture|/ˈkʌltʃə(r)/|卡尔切尔|文化|Learn about different cultures.|了解不同的文化。|勒恩阿鲍特迪弗伦特卡尔切尔兹
Curiosity|/ˌkjʊəriˈɒsəti/|丘里奥萨蒂|好奇心|Curiosity leads to discovery.|好奇心导致发现。|丘里奥萨蒂利兹图迪斯卡沃里
Curious|/ˈkjʊəriəs/|丘里厄斯|好奇的|Be curious about the world.|对世界保持好奇。|比丘里厄斯阿鲍特泽沃尔德
Currency|/ˈkʌrənsi/|卡伦西|货币|What currency do you use?|你使用什么货币？|沃特卡伦西杜优尤兹
Current|/ˈkʌrənt/|卡伦特|当前的|What is the current situation?|当前的情况是什么？|沃特伊兹泽卡伦特西图埃申
Curriculum|/kəˈrɪkjələm/|科里丘拉姆|课程|The curriculum needs updating.|课程需要更新。|泽科里丘拉姆尼德兹阿普戴丁
Custom|/ˈkʌstəm/|卡斯特姆|习俗|It is a local custom.|这是当地的习俗。|伊特伊兹阿洛克尔卡斯特姆
Cycle|/ˈsaɪkl/|赛克尔|循环|Life is a cycle.|生命是一个循环。|莱夫伊兹阿赛克尔`;

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
