const fs = require('fs');
const path = require('path');

const newFoodWords = [
    { word: 'Salmon', phonetic: '/ˈsæmən/', homophone: '萨蒙', meaning: '三文鱼', sentence: 'Salmon is rich in omega-3.', translation: '三文鱼富含欧米茄-3。', homophoneSentence: '萨蒙is瑞奇in欧米茄-3.' },
    { word: 'Tuna', phonetic: '/ˈtuːnə/', homophone: '图纳', meaning: '金枪鱼', sentence: 'Tuna is used in sushi.', translation: '金枪鱼用于寿司。', homophoneSentence: '图纳is尤兹德insushi.' },
    { word: 'Mackerel', phonetic: '/ˈmækərəl/', homophone: '麦克瑞尔', meaning: '鲭鱼', sentence: 'Mackerel is oily fish.', translation: '鲭鱼是油性鱼类。', homophoneSentence: '麦克瑞尔is奥利fish.' },
    { word: 'Sardine', phonetic: '/sɑːrˈdiːn/', homophone: '萨丁', meaning: '沙丁鱼', sentence: 'Sardines come in cans.', translation: '沙丁鱼装在罐头里。', homophoneSentence: '萨丁兹卡姆in坎斯.' },
    { word: 'Anchovy', phonetic: '/ˈæntʃoʊvi/', homophone: '安乔维', meaning: '凤尾鱼', sentence: 'Anchovies are salty.', translation: '凤尾鱼很咸。', homophoneSentence: '安乔维兹啊索尔蒂.' },
    { word: 'Trout', phonetic: '/traʊt/', homophone: '特劳特', meaning: '鳟鱼', sentence: 'Trout lives in freshwater.', translation: '鳟鱼生活在淡水中。', homophoneSentence: '特劳特利夫兹infreshwater.' },
    { word: 'Cod', phonetic: '/kɒd/', homophone: '科德', meaning: '鳕鱼', sentence: 'Cod is white fish.', translation: '鳕鱼是白肉鱼。', homophoneSentence: '科德is怀特fish.' },
    { word: 'Haddock', phonetic: '/ˈhædək/', homophone: '哈德克', meaning: '黑线鳕', sentence: 'Haddock is similar to cod.', translation: '黑线鳕类似于鳕鱼。', homophoneSentence: '哈德克is西米拉图cod.' },
    { word: 'Halibut', phonetic: '/ˈhælɪbət/', homophone: '哈利巴特', meaning: '大比目鱼', sentence: 'Halibut is large flatfish.', translation: '大比目鱼是大型比目鱼。', homophoneSentence: '哈利巴特is拉吉flatfish.' },
    { word: 'Flounder', phonetic: '/ˈflaʊndər/', homophone: '弗劳恩德', meaning: '比目鱼', sentence: 'Flounder is flat fish.', translation: '比目鱼是扁鱼。', homophoneSentence: '弗劳恩德is弗拉特fish.' },
    { word: 'Sole', phonetic: '/soʊl/', homophone: '索尔', meaning: '鳎鱼', sentence: 'Sole is delicate fish.', translation: '鳎鱼是精致的鱼。', homophoneSentence: '索尔is迪利凯特fish.' },
    { word: 'Turbot', phonetic: '/ˈtɜːrbət/', homophone: '特伯特', meaning: '大菱鲆', sentence: 'Turbot is prized fish.', translation: '大菱鲆是珍贵的鱼。', homophoneSentence: '特伯特is普拉伊兹德fish.' },
    { word: 'Sea bass', phonetic: '/siː bæs/', homophone: '西巴斯', meaning: '海鲈鱼', sentence: 'Sea bass is popular dish.', translation: '海鲈鱼是受欢迎的菜肴。', homophoneSentence: '西巴斯is帕皮尤勒dish.' },
    { word: 'Snapper', phonetic: '/ˈsnæpər/', homophone: '斯纳珀', meaning: '鲷鱼', sentence: 'Snapper has red skin.', translation: '鲷鱼有红色的皮。', homophoneSentence: '斯纳珀哈兹瑞德skin.' },
    { word: 'Grouper', phonetic: '/ˈɡruːpər/', homophone: '古鲁珀', meaning: '石斑鱼', sentence: 'Grouper is large fish.', translation: '石斑鱼是大鱼。', homophoneSentence: '古鲁珀is拉吉fish.' },
    { word: 'Mahi-mahi', phonetic: '/ˈmɑːhi ˈmɑːhi/', homophone: '马希马希', meaning: '鲯鳅', sentence: 'Mahi-mahi is tropical fish.', translation: '鲯鳅是热带鱼。', homophoneSentence: '马希马希is特罗皮卡尔fish.' },
    { word: 'Swordfish', phonetic: '/ˈsɔːrdfɪʃ/', homophone: '索德fish', meaning: '剑鱼', sentence: 'Swordfish has long bill.', translation: '剑鱼有长嘴。', homophoneSentence: '索德fish哈兹朗bill.' },
    { word: 'Marlin', phonetic: '/ˈmɑːrlɪn/', homophone: '马林', meaning: '马林鱼', sentence: 'Marlin is game fish.', translation: '马林鱼是游钓鱼。', homophoneSentence: '马林is盖姆fish.' },
    { word: 'Eel', phonetic: '/iːl/', homophone: '伊尔', meaning: '鳗鱼', sentence: 'Eel is used in sushi.', translation: '鳗鱼用于寿司。', homophoneSentence: '伊尔is尤兹德insushi.' },
    { word: 'Catfish', phonetic: '/ˈkætfɪʃ/', homophone: '凯特fish', meaning: '鲶鱼', sentence: 'Catfish has whiskers.', translation: '鲶鱼有胡须。', homophoneSentence: '凯特fish哈兹威斯克斯.' },
    { word: 'Tilapia', phonetic: '/tɪˈlɑːpiə/', homophone: '提拉皮亚', meaning: '罗非鱼', sentence: 'Tilapia is farmed fish.', translation: '罗非鱼是养殖鱼。', homophoneSentence: '提拉皮亚is法姆德fish.' },
    { word: 'Perch', phonetic: '/pɜːrtʃ/', homophone: '珀奇', meaning: '鲈鱼', sentence: 'Perch is freshwater fish.', translation: '鲈鱼是淡水鱼。', homophoneSentence: '珀奇is freshwaterfish.' },
    { word: 'Walleye', phonetic: '/ˈwɔːlaɪ/', homophone: '沃莱', meaning: '大眼鱼', sentence: 'Walleye is popular game fish.', translation: '大眼鱼是受欢迎的游钓鱼。', homophoneSentence: '沃莱is帕皮尤勒盖姆fish.' },
    { word: 'Pike', phonetic: '/paɪk/', homophone: '派克', meaning: '狗鱼', sentence: 'Pike has sharp teeth.', translation: '狗鱼有锋利的牙齿。', homophoneSentence: '派克哈兹夏普teeth.' },
    { word: 'Carp', phonetic: '/kɑːrp/', homophone: '卡普', meaning: '鲤鱼', sentence: 'Carp is common in Asia.', translation: '鲤鱼在亚洲很常见。', homophoneSentence: '卡普is卡蒙inAsia.' },
    { word: 'Crab', phonetic: '/kræb/', homophone: '克拉布', meaning: '螃蟹', sentence: 'Crab has hard shell.', translation: '螃蟹有硬壳。', homophoneSentence: '克拉布哈兹哈德shell.' },
    { word: 'Lobster', phonetic: '/ˈlɒbstər/', homophone: '洛布斯特', meaning: '龙虾', sentence: 'Lobster is luxury food.', translation: '龙虾是奢侈食品。', homophoneSentence: '洛布斯特is拉克瑟里food.' },
    { word: 'Shrimp', phonetic: '/ʃrɪmp/', homophone: '施林普', meaning: '虾', sentence: 'Shrimp is small shellfish.', translation: '虾是小型贝类。', homophoneSentence: '施林普is斯莫shellfish.' },
    { word: 'Prawn', phonetic: '/prɔːn/', homophone: '普劳恩', meaning: '大虾', sentence: 'Prawns are larger than shrimp.', translation: '大虾比虾大。', homophoneSentence: '普劳恩兹啊拉杰丹shrimp.' },
    { word: 'Crayfish', phonetic: '/ˈkreɪfɪʃ/', homophone: '克雷fish', meaning: '小龙虾', sentence: 'Crayfish is freshwater lobster.', translation: '小龙虾是淡水龙虾。', homophoneSentence: '克雷fishis freshwaterlobster.' },
    { word: 'Scallop', phonetic: '/ˈskæləp/', homophone: '斯卡洛普', meaning: '扇贝', sentence: 'Scallops are expensive.', translation: '扇贝很贵。', homophoneSentence: '斯卡洛普兹啊伊克斯彭西夫.' },
    { word: 'Oyster', phonetic: '/ˈɔɪstər/', homophone: '奥伊斯特', meaning: '牡蛎', sentence: 'Oysters are eaten raw.', translation: '牡蛎可以生吃。', homophoneSentence: '奥伊斯特兹啊伊顿raw.' },
    { word: 'Mussel', phonetic: '/ˈmʌsəl/', homophone: '马瑟尔', meaning: '贻贝', sentence: 'Mussels have dark shells.', translation: '贻贝有深色的壳。', homophoneSentence: '马瑟尔兹哈夫达克shells.' },
    { word: 'Clam', phonetic: '/klæm/', homophone: '克拉姆', meaning: '蛤蜊', sentence: 'Clams live in sand.', translation: '蛤蜊生活在沙子里。', homophoneSentence: '克拉姆兹利夫insand.' },
    { word: 'Squid', phonetic: '/skwɪd/', homophone: '斯奎德', meaning: '鱿鱼', sentence: 'Squid has tentacles.', translation: '鱿鱼有触手。', homophoneSentence: '斯奎德哈兹坦塔克尔斯.' },
    { word: 'Octopus', phonetic: '/ˈɒktəpəs/', homophone: '奥克托珀斯', meaning: '章鱼', sentence: 'Octopus has eight arms.', translation: '章鱼有八条腿。', homophoneSentence: '奥克托珀斯哈兹艾特arms.' },
    { word: 'Cuttlefish', phonetic: '/ˈkʌtlfɪʃ/', homophone: '卡特尔fish', meaning: '墨鱼', sentence: 'Cuttlefish has ink.', translation: '墨鱼有墨汁。', homophoneSentence: '卡特尔fish哈兹ink.' },
    { word: 'Sea urchin', phonetic: '/siː ˈɜːrtʃɪn/', homophone: '西厄钦', meaning: '海胆', sentence: 'Sea urchin has spines.', translation: '海胆有刺。', homophoneSentence: '西厄钦哈兹斯派恩斯.' },
    { word: 'Abalone', phonetic: '/ˌæbəˈloʊni/', homophone: '阿巴洛尼', meaning: '鲍鱼', sentence: 'Abalone is expensive delicacy.', translation: '鲍鱼是昂贵的珍馐。', homophoneSentence: '阿巴洛尼is伊克斯彭西夫delicacy.' },
    { word: 'Geoduck', phonetic: '/ˈɡuːiːdʌk/', homophone: '古伊达克', meaning: '象拔蚌', sentence: 'Geoduck has long siphon.', translation: '象拔蚌有长虹吸管。', homophoneSentence: '古伊达克哈兹朗siphon.' },
    { word: 'Ketchup', phonetic: '/ˈketʃəp/', homophone: '凯查普', meaning: '番茄酱', sentence: 'Ketchup goes with fries.', translation: '番茄酱配薯条。', homophoneSentence: '凯查普goes威兹fries.' },
    { word: 'Mustard', phonetic: '/ˈmʌstərd/', homophone: '马斯塔德', meaning: '芥末', sentence: 'Mustard is yellow.', translation: '芥末是黄色的。', homophoneSentence: '马斯塔德is耶洛.' },
    { word: 'Mayonnaise', phonetic: '/ˈmeɪəneɪz/', homophone: '梅奥奈兹', meaning: '蛋黄酱', sentence: 'Mayonnaise is creamy.', translation: '蛋黄酱很细腻。', homophoneSentence: '梅奥奈兹is克里米.' },
    { word: 'Relish', phonetic: '/ˈrelɪʃ/', homophone: '瑞利什', meaning: '调味酱', sentence: 'Relish adds flavor.', translation: '调味酱增加风味。', homophoneSentence: '瑞利什阿兹弗雷沃尔.' },
    { word: 'Soy sauce', phonetic: '/sɔɪ sɔːs/', homophone: '索伊索斯', meaning: '酱油', sentence: 'Soy sauce is salty.', translation: '酱油是咸的。', homophoneSentence: '索伊索斯is索尔蒂.' },
    { word: 'Hot sauce', phonetic: '/hɒt sɔːs/', homophone: '霍特索斯', meaning: '辣椒酱', sentence: 'Hot sauce is spicy.', translation: '辣椒酱是辣的。', homophoneSentence: '霍特索斯is斯派西.' },
    { word: 'BBQ sauce', phonetic: '/biːbiːkjuː sɔːs/', homophone: 'BBQ索斯', meaning: '烧烤酱', sentence: 'BBQ sauce is sweet and tangy.', translation: '烧烤酱又甜又酸。', homophoneSentence: 'BBQ索斯is斯威特安德坦吉.' },
    { word: 'Tartar sauce', phonetic: '/tɑːrtər sɔːs/', homophone: '塔塔尔索斯', meaning: '塔塔酱', sentence: 'Tartar sauce goes with fish.', translation: '塔塔酱配鱼。', homophoneSentence: '塔塔尔索斯goes威兹fish.' },
    { word: 'Worcestershire sauce', phonetic: '/ˈwʊstərʃər sɔːs/', homophone: '伍斯特索斯', meaning: '伍斯特酱', sentence: 'Worcestershire sauce is savory.', translation: '伍斯特酱是咸鲜的。', homophoneSentence: '伍斯特索斯is萨沃里.' },
    { word: 'Vinegar', phonetic: '/ˈvɪnɪɡər/', homophone: '维尼格', meaning: '醋', sentence: 'Vinegar is acidic.', translation: '醋是酸性的。', homophoneSentence: '维尼格is阿西迪克.' },
    { word: 'Olive oil', phonetic: '/ˈɒlɪv ɔɪl/', homophone: '奥利夫奥伊尔', meaning: '橄榄油', sentence: 'Olive oil is healthy.', translation: '橄榄油很健康。', homophoneSentence: '奥利夫奥伊尔is海尔西.' },
    { word: 'Sesame oil', phonetic: '/ˈsesəmi ɔɪl/', homophone: '塞萨米奥伊尔', meaning: '芝麻油', sentence: 'Sesame oil is fragrant.', translation: '芝麻油很香。', homophoneSentence: '塞萨米奥伊尔is弗雷格兰特.' },
    { word: 'Coconut oil', phonetic: '/ˈkoʊkənʌt ɔɪl/', homophone: '扣扣纳特奥伊尔', meaning: '椰子油', sentence: 'Coconut oil is versatile.', translation: '椰子油用途广泛。', homophoneSentence: '扣扣纳特奥伊尔is沃萨泰尔.' },
    { word: 'Butter', phonetic: '/ˈbʌtər/', homophone: '巴特尔', meaning: '黄油', sentence: 'Butter is made from cream.', translation: '黄油由奶油制成。', homophoneSentence: '巴特尔is梅德弗罗姆cream.' },
    { word: 'Margarine', phonetic: '/ˈmɑːrdʒərɪn/', homophone: '马杰瑞', meaning: '人造黄油', sentence: 'Margarine is butter substitute.', translation: '人造黄油是黄油替代品。', homophoneSentence: '马杰瑞is巴特尔substitute.' },
    { word: 'Lard', phonetic: '/lɑːrd/', homophone: '拉德', meaning: '猪油', sentence: 'Lard is pork fat.', translation: '猪油是猪脂肪。', homophoneSentence: '拉德is porkfat.' },
    { word: 'Shortening', phonetic: '/ˈʃɔːrtənɪŋ/', homophone: '肖特宁', meaning: '起酥油', sentence: 'Shortening is used in baking.', translation: '起酥油用于烘焙。', homophoneSentence: '肖特宁is尤兹德inbaking.' },
    { word: 'Ghee', phonetic: '/ɡiː/', homophone: '吉', meaning: '酥油', sentence: 'Ghee is clarified butter.', translation: '酥油是澄清黄油。', homophoneSentence: '吉is克拉里法德butter.' },
    { word: 'Honey', phonetic: '/ˈhʌni/', homophone: '哈尼', meaning: '蜂蜜', sentence: 'Honey is natural sweetener.', translation: '蜂蜜是天然甜味剂。', homophoneSentence: '哈尼is纳彻尔sweetener.' },
    { word: 'Maple syrup', phonetic: '/ˈmeɪpl sɪrəp/', homophone: '梅普尔西拉普', meaning: '枫糖浆', sentence: 'Maple syrup goes on pancakes.', translation: '枫糖浆配煎饼。', homophoneSentence: '梅普尔西拉普goesonpancakes.' },
    { word: 'Molasses', phonetic: '/məˈlæsɪz/', homophone: '莫拉西兹', meaning: '糖蜜', sentence: 'Molasses is thick and dark.', translation: '糖蜜又稠又黑。', homophoneSentence: '莫拉西兹is西克安德达克.' },
    { word: 'Corn syrup', phonetic: '/kɔːrn sɪrəp/', homophone: '科恩西拉普', meaning: '玉米糖浆', sentence: 'Corn syrup is used in candy.', translation: '玉米糖浆用于糖果。', homophoneSentence: '科恩西拉普is尤兹德incandy.' },
    { word: 'Agave nectar', phonetic: '/əˈɡɑːvi nektər/', homophone: '阿加维内克特', meaning: '龙舌兰蜜', sentence: 'Agave nectar is natural sweetener.', translation: '龙舌兰蜜是天然甜味剂。', homophoneSentence: '阿加维内克特is纳彻尔sweetener.' },
    { word: 'Stevia', phonetic: '/ˈstiːviə/', homophone: '斯蒂维亚', meaning: '甜叶菊', sentence: 'Stevia is zero-calorie sweetener.', translation: '甜叶菊是零卡甜味剂。', homophoneSentence: '斯蒂维亚is zero-caloriesweetener.' },
    { word: 'Salt', phonetic: '/sɔːlt/', homophone: '索尔特', meaning: '盐', sentence: 'Salt enhances flavor.', translation: '盐增强风味。', homophoneSentence: '索尔特enhances弗雷沃尔.' },
    { word: 'Sea salt', phonetic: '/siː sɔːlt/', homophone: '西索尔特', meaning: '海盐', sentence: 'Sea salt is from ocean.', translation: '海盐来自海洋。', homophoneSentence: '西索尔特is弗罗姆ocean.' },
    { word: 'Himalayan salt', phonetic: '/hɪməˈleɪən sɔːlt/', homophone: '喜马拉雅索尔特', meaning: '喜马拉雅盐', sentence: 'Himalayan salt is pink.', translation: '喜马拉雅盐是粉色的。', homophoneSentence: '喜马拉雅索尔特is平克.' },
    { word: 'Black pepper', phonetic: '/blæk ˈpepər/', homophone: '布莱克佩珀', meaning: '黑胡椒', sentence: 'Black pepper adds heat.', translation: '黑胡椒增加辣味。', homophoneSentence: '布莱克佩珀阿兹heat.' },
    { word: 'White pepper', phonetic: '/waɪt ˈpepər/', homophone: '怀特佩珀', meaning: '白胡椒', sentence: 'White pepper is milder.', translation: '白胡椒更温和。', homophoneSentence: '怀特佩珀is迈尔德.' },
    { word: 'Cayenne pepper', phonetic: '/kaɪˈen ˈpepər/', homophone: '凯恩佩珀', meaning: '辣椒粉', sentence: 'Cayenne pepper is very hot.', translation: '辣椒粉很辣。', homophoneSentence: '凯恩佩珀is歪瑞hot.' },
    { word: 'Paprika', phonetic: '/pəˈpriːkə/', homophone: '帕普里卡', meaning: '红椒粉', sentence: 'Paprika adds color.', translation: '红椒粉增加颜色。', homophoneSentence: '帕普里卡阿兹color.' },
    { word: 'Chili powder', phonetic: '/ˈtʃɪli ˈpaʊdər/', homophone: '奇利帕沃德', meaning: '辣椒粉', sentence: 'Chili powder is spicy.', translation: '辣椒粉是辣的。', homophoneSentence: '奇利帕沃德is斯派西.' },
    { word: 'Cumin', phonetic: '/ˈkjuːmɪn/', homophone: '库明', meaning: '孜然', sentence: 'Cumin is earthy spice.', translation: '孜然是泥土味香料。', homophoneSentence: '库明is厄西spice.' },
    { word: 'Coriander', phonetic: '/ˌkɔːriˈændər/', homophone: '科里安德', meaning: '芫荽', sentence: 'Coriander has citrus notes.', translation: '芫荽有柑橘味。', homophoneSentence: '科里安德哈兹citrusnotes.' },
    { word: 'Turmeric', phonetic: '/ˈtɜːrmərɪk/', homophone: '特梅里克', meaning: '姜黄', sentence: 'Turmeric is bright yellow.', translation: '姜黄是鲜黄色的。', homophoneSentence: '特梅里克is布赖特yellow.' },
    { word: 'Ginger', phonetic: '/ˈdʒɪndʒər/', homophone: '金杰', meaning: '姜', sentence: 'Ginger is spicy and warm.', translation: '姜又辣又暖。', homophoneSentence: '金杰is斯派西安德warm.' },
    { word: 'Garlic powder', phonetic: '/ˈɡɑːrlɪk ˈpaʊdər/', homophone: '加里克帕沃德', meaning: '蒜粉', sentence: 'Garlic powder adds flavor.', translation: '蒜粉增加风味。', homophoneSentence: '加里克帕沃德阿兹弗雷沃尔.' },
    { word: 'Onion powder', phonetic: '/ˈʌnjən ˈpaʊdər/', homophone: '安尼恩帕沃德', meaning: '洋葱粉', sentence: 'Onion powder is convenient.', translation: '洋葱粉很方便。', homophoneSentence: '安尼恩帕沃德is convenient.' },
    { word: 'Cinnamon', phonetic: '/ˈsɪnəmən/', homophone: '辛纳蒙', meaning: '肉桂', sentence: 'Cinnamon is sweet spice.', translation: '肉桂是甜香料。', homophoneSentence: '辛纳蒙is斯威特spice.' },
    { word: 'Nutmeg', phonetic: '/ˈnʌtmeɡ/', homophone: '纳特梅格', meaning: '肉豆蔻', sentence: 'Nutmeg is warm spice.', translation: '肉豆蔻是暖性香料。', homophoneSentence: '纳特梅格is warmspice.' },
    { word: 'Cloves', phonetic: '/kloʊvz/', homophone: '克洛夫兹', meaning: '丁香', sentence: 'Cloves are aromatic.', translation: '丁香很香。', homophoneSentence: '克洛夫兹啊阿罗马蒂克.' },
    { word: 'Cardamom', phonetic: '/ˈkɑːrdəməm/', homophone: '卡达蒙', meaning: '豆蔻', sentence: 'Cardamom is used in chai.', translation: '豆蔻用于印度茶。', homophoneSentence: '卡达蒙is尤兹德in chai.' },
    { word: 'Star anise', phonetic: '/stɑːr ˈænɪs/', homophone: '斯塔安尼斯', meaning: '八角', sentence: 'Star anise has licorice flavor.', translation: '八角有甘草味。', homophoneSentence: '斯塔安尼斯哈兹licoriceflavor.' },
    { word: 'Fennel seeds', phonetic: '/ˈfenl siːdz/', homophone: '芬尼尔西兹', meaning: '茴香籽', sentence: 'Fennel seeds aid digestion.', translation: '茴香籽助消化。', homophoneSentence: '芬尼尔西兹艾德digestion.' },
    { word: 'Mustard seeds', phonetic: '/ˈmʌstərd siːdz/', homophone: '马斯塔德西兹', meaning: '芥末籽', sentence: 'Mustard seeds are pungent.', translation: '芥末籽有刺激性气味。', homophoneSentence: '马斯塔德西兹啊潘金特.' },
    { word: 'Dried herbs', phonetic: '/draɪd hɜːrbz/', homophone: '德拉伊德赫布兹', meaning: '干香草', sentence: 'Dried herbs last longer.', translation: '干香草保存更久。', homophoneSentence: '德拉伊德赫布兹last朗格.' },
    { word: 'Fresh herbs', phonetic: '/freʃ hɜːrbz/', homophone: '弗雷什赫布兹', meaning: '新鲜香草', sentence: 'Fresh herbs are flavorful.', translation: '新鲜香草风味浓郁。', homophoneSentence: '弗雷什赫布兹啊弗雷沃尔弗尔.' },
    { word: 'Basil', phonetic: '/ˈbeɪzəl/', homophone: '贝泽尔', meaning: '罗勒', sentence: 'Basil is used in pesto.', translation: '罗勒用于青酱。', homophoneSentence: '贝泽尔is尤兹德in pesto.' },
    { word: 'Oregano', phonetic: '/əˈreɡənoʊ/', homophone: '奥雷加诺', meaning: '牛至', sentence: 'Oregano is used in pizza.', translation: '牛至用于披萨。', homophoneSentence: '奥雷加诺is尤兹德in pizza.' },
    { word: 'Thyme', phonetic: '/taɪm/', homophone: '泰姆', meaning: '百里香', sentence: 'Thyme pairs with chicken.', translation: '百里香配鸡肉。', homophoneSentence: '泰姆pairs威兹chicken.' },
    { word: 'Rosemary', phonetic: '/ˈroʊzməri/', homophone: '罗斯玛丽', meaning: '迷迭香', sentence: 'Rosemary is woody herb.', translation: '迷迭香是木本香草。', homophoneSentence: '罗斯玛丽is woodyherb.' },
    { word: 'Sage', phonetic: '/seɪdʒ/', homophone: '塞奇', meaning: '鼠尾草', sentence: 'Sage is used in stuffing.', translation: '鼠尾草用于馅料。', homophoneSentence: '塞奇is尤兹德in stuffing.' },
    { word: 'Parsley', phonetic: '/ˈpɑːrsli/', homophone: '帕斯利', meaning: '欧芹', sentence: 'Parsley is used as garnish.', translation: '欧芹用作装饰。', homophoneSentence: '帕斯利is尤兹德as garnish.' },
    { word: 'Cilantro', phonetic: '/sɪˈlɑːntroʊ/', homophone: '西兰特罗', meaning: '香菜', sentence: 'Cilantro is used in salsa.', translation: '香菜用于莎莎酱。', homophoneSentence: '西兰特罗is尤兹德in salsa.' },
    { word: 'Dill', phonetic: '/dɪl/', homophone: '迪尔', meaning: '莳萝', sentence: 'Dill goes with salmon.', translation: '莳萝配三文鱼。', homophoneSentence: '迪尔goes威兹salmon.' },
    { word: 'Mint', phonetic: '/mɪnt/', homophone: '明特', meaning: '薄荷', sentence: 'Mint is refreshing.', translation: '薄荷很清爽。', homophoneSentence: '明特is refreshing.' },
    { word: 'Chives', phonetic: '/tʃaɪvz/', homophone: '柴夫兹', meaning: '细香葱', sentence: 'Chives are mild onion.', translation: '细香葱是温和的洋葱。', homophoneSentence: '柴夫兹啊迈尔德onion.' },
    { word: 'Tarragon', phonetic: '/ˈtærəɡən/', homophone: '塔拉贡', meaning: '龙蒿', sentence: 'Tarragon has anise flavor.', translation: '龙蒿有茴香味。', homophoneSentence: '塔拉贡哈兹aniseflavor.' },
    { word: 'Bay leaf', phonetic: '/beɪ liːf/', homophone: '贝利夫', meaning: '月桂叶', sentence: 'Bay leaf adds depth.', translation: '月桂叶增加深度。', homophoneSentence: '贝利夫阿兹depth.' },
    { word: 'Curry powder', phonetic: '/ˈkɜːri ˈpaʊdər/', homophone: '咖喱帕沃德', meaning: '咖喱粉', sentence: 'Curry powder is spice blend.', translation: '咖喱粉是混合香料。', homophoneSentence: '咖喱帕沃德is spiceblend.' },
    { word: 'Garam masala', phonetic: '/ɡəˈrɑːm məˈsɑːlə/', homophone: '加拉姆马萨拉', meaning: '印度香料', sentence: 'Garam masala is warming.', translation: '印度香料是暖性的。', homophoneSentence: '加拉姆马萨拉is warming.' },
    { word: 'Five-spice powder', phonetic: '/faɪv spaɪs ˈpaʊdər/', homophone: '法伊夫斯派斯帕沃德', meaning: '五香粉', sentence: 'Five-spice is Chinese blend.', translation: '五香粉是中国混合香料。', homophoneSentence: '法伊夫斯派斯is Chineseblend.' },
    { word: 'Italian seasoning', phonetic: '/ɪˈtæliən ˈsiːznɪŋ/', homophone: '意大利安西兹宁', meaning: '意式调味料', sentence: 'Italian seasoning is versatile.', translation: '意式调味料用途广泛。', homophoneSentence: '意大利安西兹宁is versatile.' },
    { word: 'Herbes de Provence', phonetic: '/ɛrb də proʊˈvɑːns/', homophone: '赫布德普罗旺斯', meaning: '普罗旺斯香草', sentence: 'Herbes de Provence is French blend.', translation: '普罗旺斯香草是法国混合香料。', homophoneSentence: '赫布德普罗旺斯is Frenchblend.' },
    { word: 'Zaatar', phonetic: '/ˈzɑːtɑːr/', homophone: '扎塔尔', meaning: '扎塔尔香料', sentence: 'Zaatar is Middle Eastern.', translation: '扎塔尔香料是中东的。', homophoneSentence: '扎塔尔is MiddleEastern.' },
    { word: 'Everything bagel', phonetic: '/ˈevriθɪŋ ˈbeɪɡəl/', homophone: '埃弗瑞辛贝果', meaning: '全味贝果', sentence: 'Everything bagel has many toppings.', translation: '全味贝果有很多配料。', homophoneSentence: '埃弗瑞辛贝果哈兹梅尼toppings.' },
    { word: 'Coffee', phonetic: '/ˈkɒfi/', homophone: '咖啡', meaning: '咖啡', sentence: 'Coffee contains caffeine.', translation: '咖啡含有咖啡因。', homophoneSentence: '咖啡contains咖啡因.' },
    { word: 'Espresso', phonetic: '/eˈspresoʊ/', homophone: '艾斯普莱索', meaning: '浓缩咖啡', sentence: 'Espresso is strong coffee.', translation: '浓缩咖啡是浓咖啡。', homophoneSentence: '艾斯普莱索is strongcoffee.' },
    { word: 'Cappuccino', phonetic: '/ˌkæpəˈtʃiːnoʊ/', homophone: '卡普奇诺', meaning: '卡布奇诺', sentence: 'Cappuccino has foam.', translation: '卡布奇诺有泡沫。', homophoneSentence: '卡普奇诺哈兹foam.' },
    { word: 'Latte', phonetic: '/ˈlɑːteɪ/', homophone: '拉泰', meaning: '拿铁', sentence: 'Latte is milky coffee.', translation: '拿铁是奶味咖啡。', homophoneSentence: '拉泰is milkycoffee.' },
    { word: 'Mocha', phonetic: '/ˈmoʊkə/', homophone: '莫卡', meaning: '摩卡', sentence: 'Mocha has chocolate.', translation: '摩卡有巧克力。', homophoneSentence: '莫卡哈兹chocolate.' },
    { word: 'Americano', phonetic: '/əˌmerɪˈkɑːnoʊ/', homophone: '阿美瑞卡诺', meaning: '美式咖啡', sentence: 'Americano is diluted espresso.', translation: '美式咖啡是稀释的浓缩咖啡。', homophoneSentence: '阿美瑞卡诺is dilutedespresso.' },
    { word: 'Macchiato', phonetic: '/ˌmɑːkiˈɑːtoʊ/', homophone: '马基亚托', meaning: '玛奇朵', sentence: 'Macchiato is marked with milk.', translation: '玛奇朵用牛奶标记。', homophoneSentence: '马基亚托is marked威兹milk.' },
    { word: 'Cold brew', phonetic: '/koʊld bruː/', homophone: '科尔德布鲁', meaning: '冷萃咖啡', sentence: 'Cold brew is smooth.', translation: '冷萃咖啡很顺滑。', homophoneSentence: '科尔德布鲁is smooth.' },
    { word: 'Iced coffee', phonetic: '/aɪst ˈkɒfi/', homophone: '艾斯德咖啡', meaning: '冰咖啡', sentence: 'Iced coffee is refreshing.', translation: '冰咖啡很清爽。', homophoneSentence: '艾斯德咖啡is refreshing.' },
    { word: 'Tea', phonetic: '/tiː/', homophone: '提', meaning: '茶', sentence: 'Tea has antioxidants.', translation: '茶含有抗氧化剂。', homophoneSentence: '提has antioxidants.' },
    { word: 'Green tea', phonetic: '/ɡriːn tiː/', homophone: '格林提', meaning: '绿茶', sentence: 'Green tea is healthy.', translation: '绿茶很健康。', homophoneSentence: '格林提is healthy.' },
    { word: 'Black tea', phonetic: '/blæk tiː/', homophone: '布莱克提', meaning: '红茶', sentence: 'Black tea is oxidized.', translation: '红茶是氧化的。', homophoneSentence: '布莱克提is oxidized.' },
    { word: 'Oolong tea', phonetic: '/ˈuːlɒŋ tiː/', homophone: '乌龙提', meaning: '乌龙茶', sentence: 'Oolong is semi-oxidized.', translation: '乌龙茶是半氧化的。', homophoneSentence: '乌龙is semi-oxidized.' },
    { word: 'White tea', phonetic: '/waɪt tiː/', homophone: '怀特提', meaning: '白茶', sentence: 'White tea is delicate.', translation: '白茶很精致。', homophoneSentence: '怀特提is delicate.' },
    { word: 'Herbal tea', phonetic: '/ˈɜːrbəl tiː/', homophone: '赫伯提', meaning: '草本茶', sentence: 'Herbal tea is caffeine-free.', translation: '草本茶不含咖啡因。', homophoneSentence: '赫伯提is caffeine-free.' },
    { word: 'Chamomile tea', phonetic: '/ˈkæməmaɪl tiː/', homophone: '卡莫迈尔提', meaning: '洋甘菊茶', sentence: 'Chamomile tea is calming.', translation: '洋甘菊茶有镇静作用。', homophoneSentence: '卡莫迈尔提is calming.' },
    { word: 'Peppermint tea', phonetic: '/ˈpepərmɪnt tiː/', homophone: '佩珀明特提', meaning: '薄荷茶', sentence: 'Peppermint tea aids digestion.', translation: '薄荷茶助消化。', homophoneSentence: '佩珀明特提aids digestion.' },
    { word: 'Chai', phonetic: '/tʃaɪ/', homophone: '柴', meaning: '印度茶', sentence: 'Chai is spiced tea.', translation: '印度茶是香料茶。', homophoneSentence: '柴is spicedtea.' },
    { word: 'Matcha', phonetic: '/ˈmætʃə/', homophone: '马查', meaning: '抹茶', sentence: 'Matcha is powdered green tea.', translation: '抹茶是绿茶粉。', homophoneSentence: '马查is powderedgreentea.' },
    { word: 'Bubble tea', phonetic: '/ˈbʌbəl tiː/', homophone: '巴布提', meaning: '珍珠奶茶', sentence: 'Bubble tea has tapioca pearls.', translation: '珍珠奶茶有木薯珍珠。', homophoneSentence: '巴布提has tapiocapearls.' },
    { word: 'Hot chocolate', phonetic: '/hɒt ˈtʃɒklət/', homophone: '霍特乔克利特', meaning: '热巧克力', sentence: 'Hot chocolate is comforting.', translation: '热巧克力很舒适。', homophoneSentence: '霍特乔克利特is comforting.' },
    { word: 'Smoothie', phonetic: '/ˈsmuːði/', homophone: '斯穆西', meaning: '奶昔', sentence: 'Smoothie is blended drink.', translation: '奶昔是混合饮料。', homophoneSentence: '斯穆西is blendeddrink.' },
    { word: 'Milkshake', phonetic: '/ˈmɪlkʃeɪk/', homophone: '米尔克谢克', meaning: '奶昔', sentence: 'Milkshake is thick and cold.', translation: '奶昔又稠又冷。', homophoneSentence: '米尔克谢克is thickandcold.' },
    { word: 'Juice', phonetic: '/dʒuːs/', homophone: '朱斯', meaning: '果汁', sentence: 'Juice is from fruits.', translation: '果汁来自水果。', homophoneSentence: '朱斯is fromfruits.' },
    { word: 'Orange juice', phonetic: '/ˈɔːrɪndʒ dʒuːs/', homophone: '奥林奇朱斯', meaning: '橙汁', sentence: 'Orange juice has vitamin C.', translation: '橙汁含有维生素C。', homophoneSentence: '奥林奇朱斯has vitaminC.' },
    { word: 'Apple juice', phonetic: '/ˈæpl dʒuːs/', homophone: '艾坡朱斯', meaning: '苹果汁', sentence: 'Apple juice is sweet.', translation: '苹果汁很甜。', homophoneSentence: '艾坡朱斯is sweet.' },
    { word: 'Grape juice', phonetic: '/ɡreɪp dʒuːs/', homophone: '格雷普朱斯', meaning: '葡萄汁', sentence: 'Grape juice is purple.', translation: '葡萄汁是紫色的。', homophoneSentence: '格雷普朱斯is purple.' },
    { word: 'Cranberry juice', phonetic: '/ˈkrænbəri dʒuːs/', homophone: '克兰贝瑞朱斯', meaning: '蔓越莓汁', sentence: 'Cranberry juice is tart.', translation: '蔓越莓汁是酸的。', homophoneSentence: '克兰贝瑞朱斯is tart.' },
    { word: 'Pineapple juice', phonetic: '/ˈpaɪnæpl dʒuːs/', homophone: '派纳普朱斯', meaning: '菠萝汁', sentence: 'Pineapple juice is tropical.', translation: '菠萝汁是热带风味。', homophoneSentence: '派纳普朱斯is tropical.' },
    { word: 'Tomato juice', phonetic: '/təˈmeɪtoʊ dʒuːs/', homophone: '托梅托朱斯', meaning: '番茄汁', sentence: 'Tomato juice is savory.', translation: '番茄汁是咸的。', homophoneSentence: '托梅托朱斯is savory.' },
    { word: 'Carrot juice', phonetic: '/ˈkærət dʒuːs/', homophone: '卡罗特朱斯', meaning: '胡萝卜汁', sentence: 'Carrot juice is healthy.', translation: '胡萝卜汁很健康。', homophoneSentence: '卡罗特朱斯is healthy.' },
    { word: 'Lemonade', phonetic: '/ˌleməˈneɪd/', homophone: '莱蒙纳德', meaning: '柠檬水', sentence: 'Lemonade is refreshing.', translation: '柠檬水很清爽。', homophoneSentence: '莱蒙纳德is refreshing.' },
    { word: 'Limeade', phonetic: '/ˈlaɪmeɪd/', homophone: '莱梅德', meaning: '酸橙水', sentence: 'Limeade is tangy.', translation: '酸橙水味道浓郁。', homophoneSentence: '莱梅德is tangy.' },
    { word: 'Iced tea', phonetic: '/aɪst tiː/', homophone: '艾斯德提', meaning: '冰茶', sentence: 'Iced tea is cold beverage.', translation: '冰茶是冷饮。', homophoneSentence: '艾斯德提is coldbeverage.' },
    { word: 'Soda', phonetic: '/ˈsoʊdə/', homophone: '索达', meaning: '苏打水', sentence: 'Soda is carbonated.', translation: '苏打水是碳酸的。', homophoneSentence: '索达is carbonated.' },
    { word: 'Cola', phonetic: '/ˈkoʊlə/', homophone: '科拉', meaning: '可乐', sentence: 'Cola is popular soda.', translation: '可乐是受欢迎的苏打水。', homophoneSentence: '科拉is popularsoda.' },
    { word: 'Root beer', phonetic: '/ruːt bɪr/', homophone: '鲁特比尔', meaning: '根汁啤酒', sentence: 'Root beer is unique flavor.', translation: '根汁啤酒风味独特。', homophoneSentence: '鲁特比尔is uniqueflavor.' },
    { word: 'Ginger ale', phonetic: '/ˈdʒɪndʒər eɪl/', homophone: '金杰艾尔', meaning: '姜汁汽水', sentence: 'Ginger ale settles stomach.', translation: '姜汁汽水能安抚胃。', homophoneSentence: '金杰艾尔settles stomach.' },
    { word: 'Tonic water', phonetic: '/ˈtɒnɪk ˈwɔːtər/', homophone: '托尼克沃特', meaning: '汤力水', sentence: 'Tonic water is bitter.', translation: '汤力水是苦的。', homophoneSentence: '托尼克沃特is bitter.' },
    { word: 'Sparkling water', phonetic: '/ˈspɑːrklɪŋ ˈwɔːtər/', homophone: '斯帕克林沃特', meaning: '气泡水', sentence: 'Sparkling water has bubbles.', translation: '气泡水有气泡。', homophoneSentence: '斯帕克林沃特has bubbles.' },
    { word: 'Coconut water', phonetic: '/ˈkoʊkənʌt ˈwɔːtər/', homophone: '扣扣纳特沃特', meaning: '椰子水', sentence: 'Coconut water is hydrating.', translation: '椰子水能补水。', homophoneSentence: '扣扣纳特沃特is hydrating.' },
    { word: 'Energy drink', phonetic: '/ˈenərdʒi drɪŋk/', homophone: '埃纳吉德林克', meaning: '能量饮料', sentence: 'Energy drink has caffeine.', translation: '能量饮料含有咖啡因。', homophoneSentence: '埃纳吉德林克has caffeine.' },
    { word: 'Sports drink', phonetic: '/spɔːrts drɪŋk/', homophone: '斯波茨德林克', meaning: '运动饮料', sentence: 'Sports drink replaces electrolytes.', translation: '运动饮料补充电解质。', homophoneSentence: '斯波茨德林克replaces electrolytes.' },
    { word: 'Beer', phonetic: '/bɪr/', homophone: '比尔', meaning: '啤酒', sentence: 'Beer is alcoholic beverage.', translation: '啤酒是酒精饮料。', homophoneSentence: '比尔is alcoholicbeverage.' },
    { word: 'Lager', phonetic: '/ˈlɑːɡər/', homophone: '拉格', meaning: '拉格啤酒', sentence: 'Lager is light beer.', translation: '拉格啤酒是淡啤酒。', homophoneSentence: '拉格is lightbeer.' },
    { word: 'Ale', phonetic: '/eɪl/', homophone: '艾尔', meaning: '艾尔啤酒', sentence: 'Ale is fermented warm.', translation: '艾尔啤酒是温发酵的。', homophoneSentence: '艾尔is fermentedwarm.' },
    { word: 'Stout', phonetic: '/staʊt/', homophone: '斯托特', meaning: '黑啤酒', sentence: 'Stout is dark beer.', translation: '黑啤酒是深色啤酒。', homophoneSentence: '斯托特is darkbeer.' },
    { word: 'IPA', phonetic: '/aɪpiːeɪ/', homophone: '艾皮艾', meaning: '印度淡色艾尔', sentence: 'IPA is hoppy beer.', translation: '印度淡色艾尔是啤酒花味的啤酒。', homophoneSentence: 'IPAis hoppybeer.' },
    { word: 'Wine', phonetic: '/waɪn/', homophone: '瓦因', meaning: '葡萄酒', sentence: 'Wine is made from grapes.', translation: '葡萄酒由葡萄制成。', homophoneSentence: '瓦因is madefromgrapes.' },
    { word: 'Red wine', phonetic: '/red waɪn/', homophone: '瑞德瓦因', meaning: '红葡萄酒', sentence: 'Red wine has tannins.', translation: '红葡萄酒有单宁。', homophoneSentence: '瑞德瓦因has tannins.' },
    { word: 'White wine', phonetic: '/waɪt waɪn/', homophone: '怀特瓦因', meaning: '白葡萄酒', sentence: 'White wine is chilled.', translation: '白葡萄酒是冰镇的。', homophoneSentence: '怀特瓦因is chilled.' },
    { word: 'Rose wine', phonetic: '/roʊˈzeɪ waɪn/', homophone: '罗泽瓦因', meaning: '桃红酒', sentence: 'Rose wine is pink wine.', translation: '桃红酒是粉色葡萄酒。', homophoneSentence: '罗泽瓦因is pinkwine.' },
    { word: 'Champagne', phonetic: '/ʃæmˈpeɪn/', homophone: '尚佩恩', meaning: '香槟', sentence: 'Champagne is sparkling wine.', translation: '香槟是起泡葡萄酒。', homophoneSentence: '尚佩恩is sparklingwine.' },
    { word: 'Prosecco', phonetic: '/proʊˈsekoʊ/', homophone: '普罗塞科', meaning: '普罗塞克', sentence: 'Prosecco is Italian sparkling.', translation: '普罗塞克是意大利起泡酒。', homophoneSentence: '普罗塞科is Italiansparkling.' },
    { word: 'Whiskey', phonetic: '/ˈwɪski/', homophone: '威士忌', meaning: '威士忌', sentence: 'Whiskey is aged spirit.', translation: '威士忌是陈年烈酒。', homophoneSentence: '威士忌is agedspirit.' },
    { word: 'Bourbon', phonetic: '/ˈbɜːrbən/', homophone: '伯本', meaning: '波本威士忌', sentence: 'Bourbon is American whiskey.', translation: '波本威士忌是美国威士忌。', homophoneSentence: '伯本is Americanwhiskey.' },
    { word: 'Scotch', phonetic: '/skɒtʃ/', homophone: '斯科奇', meaning: '苏格兰威士忌', sentence: 'Scotch is from Scotland.', translation: '苏格兰威士忌来自苏格兰。', homophoneSentence: '斯科奇is fromScotland.' },
    { word: 'Vodka', phonetic: '/ˈvɒdkə/', homophone: '沃德卡', meaning: '伏特加', sentence: 'Vodka is neutral spirit.', translation: '伏特加是中性烈酒。', homophoneSentence: '沃德卡is neutralspirit.' },
    { word: 'Gin', phonetic: '/dʒɪn/', homophone: '金', meaning: '金酒', sentence: 'Gin is juniper-flavored.', translation: '金酒有杜松子味。', homophoneSentence: '金is juniper-flavored.' },
    { word: 'Rum', phonetic: '/rʌm/', homophone: '拉姆', meaning: '朗姆酒', sentence: 'Rum is made from sugarcane.', translation: '朗姆酒由甘蔗制成。', homophoneSentence: '拉姆is madefromsugarcane.' },
    { word: 'Tequila', phonetic: '/təˈkiːlə/', homophone: '特基拉', meaning: '龙舌兰酒', sentence: 'Tequila is from agave.', translation: '龙舌兰酒来自龙舌兰。', homophoneSentence: '特基拉is fromagave.' },
    { word: 'Brandy', phonetic: '/ˈbrændi/', homophone: '布兰迪', meaning: '白兰地', sentence: 'Brandy is distilled wine.', translation: '白兰地是蒸馏葡萄酒。', homophoneSentence: '布兰迪is distilledwine.' },
    { word: 'Cognac', phonetic: '/ˈkoʊnjæk/', homophone: '科尼亚克', meaning: '干邑', sentence: 'Cognac is French brandy.', translation: '干邑是法国白兰地。', homophoneSentence: '科尼亚克is Frenchbrandy.' },
    { word: 'Liqueur', phonetic: '/lɪˈkɜːr/', homophone: '利克尔', meaning: '利口酒', sentence: 'Liqueur is sweet spirit.', translation: '利口酒是甜烈酒。', homophoneSentence: '利克尔is sweetspirit.' },
    { word: 'Cocktail', phonetic: '/ˈkɒkteɪl/', homophone: '科克泰尔', meaning: '鸡尾酒', sentence: 'Cocktail is mixed drink.', translation: '鸡尾酒是混合饮料。', homophoneSentence: '科克泰尔is mixeddrink.' },
    { word: 'Margarita', phonetic: '/ˌmɑːrɡəˈriːtə/', homophone: '玛格丽塔', meaning: '玛格丽塔', sentence: 'Margarita has tequila.', translation: '玛格丽塔有龙舌兰酒。', homophoneSentence: '玛格丽塔has tequila.' },
    { word: 'Martini', phonetic: '/mɑːrˈtiːni/', homophone: '马丁尼', meaning: '马丁尼', sentence: 'Martini is classic cocktail.', translation: '马丁尼是经典鸡尾酒。', homophoneSentence: '马丁尼is classiccocktail.' },
    { word: 'Mojito', phonetic: '/moʊˈhiːtoʊ/', homophone: '莫希托', meaning: '莫希托', sentence: 'Mojito has mint and lime.', translation: '莫希托有薄荷和酸橙。', homophoneSentence: '莫希托has mintandlime.' },
    { word: 'Bloody Mary', phonetic: '/ˈblʌdi ˈmeri/', homophone: '布拉迪玛丽', meaning: '血腥玛丽', sentence: 'Bloody Mary has tomato juice.', translation: '血腥玛丽有番茄汁。', homophoneSentence: '布拉迪玛丽has tomatojuice.' },
    { word: 'Pina colada', phonetic: '/ˌpiːnjə kəˈlɑːdə/', homophone: '皮尼亚科拉达', meaning: '椰林飘香', sentence: 'Pina colada has coconut.', translation: '椰林飘香有椰子。', homophoneSentence: '皮尼亚科拉达has coconut.' },
    { word: 'Cosmopolitan', phonetic: '/ˌkɒzməˈpɒlɪtən/', homophone: '科兹莫波利坦', meaning: '大都会', sentence: 'Cosmopolitan is pink cocktail.', translation: '大都会是粉色鸡尾酒。', homophoneSentence: '科兹莫波利坦is pinkcocktail.' },
    { word: 'Old Fashioned', phonetic: '/oʊld ˈfæʃənd/', homophone: '欧尔德法申德', meaning: '古典鸡尾酒', sentence: 'Old Fashioned is whiskey-based.', translation: '古典鸡尾酒以威士忌为基础。', homophoneSentence: '欧尔德法申德is whiskey-based.' },
    { word: 'Negroni', phonetic: '/nɪˈɡroʊni/', homophone: '内格罗尼', meaning: '内格罗尼', sentence: 'Negroni is bitter cocktail.', translation: '内格罗尼是苦味鸡尾酒。', homophoneSentence: '内格罗尼is bittercocktail.' },
    { word: 'Mimosa', phonetic: '/mɪˈmoʊzə/', homophone: '米莫萨', meaning: '含羞草鸡尾酒', sentence: 'Mimosa has champagne.', translation: '含羞草鸡尾酒有香槟。', homophoneSentence: '米莫萨has champagne.' },
    { word: 'Sangria', phonetic: '/sæŋˈɡriːə/', homophone: '桑格利亚', meaning: '桑格利亚', sentence: 'Sangria has fruit pieces.', translation: '桑格利亚有水果块。', homophoneSentence: '桑格利亚has fruitpieces.' },
    { word: 'Hamburger', phonetic: '/ˈhæmbɜːrɡər/', homophone: '汉伯格', meaning: '汉堡包', sentence: 'Hamburger has beef patty.', translation: '汉堡包有牛肉饼。', homophoneSentence: '汉伯格has beefpatty.' },
    { word: 'Cheeseburger', phonetic: '/ˈtʃiːzbɜːrɡər/', homophone: '奇兹伯格', meaning: '芝士汉堡', sentence: 'Cheeseburger has cheese.', translation: '芝士汉堡有芝士。', homophoneSentence: '奇兹伯格has cheese.' },
    { word: 'Veggie burger', phonetic: '/ˈvedʒi bɜːrɡər/', homophone: '维吉伯格', meaning: '蔬菜汉堡', sentence: 'Veggie burger is plant-based.', translation: '蔬菜汉堡是植物性的。', homophoneSentence: '维吉伯格is plant-based.' },
    { word: 'Hot dog', phonetic: '/hɒt dɒɡ/', homophone: '霍特道格', meaning: '热狗', sentence: 'Hot dog is fast food.', translation: '热狗是快餐。', homophoneSentence: '霍特道格is fastfood.' },
    { word: 'Sandwich', phonetic: '/ˈsænwɪtʃ/', homophone: '桑维奇', meaning: '三明治', sentence: 'Sandwich has fillings.', translation: '三明治有馅料。', homophoneSentence: '桑维奇has fillings.' },
    { word: 'Club sandwich', phonetic: '/klʌb ˈsænwɪtʃ/', homophone: '克拉布桑维奇', meaning: '总汇三明治', sentence: 'Club sandwich has three layers.', translation: '总汇三明治有三层。', homophoneSentence: '克拉布桑维奇has threelayers.' },
    { word: 'BLT', phonetic: '/biːel tiː/', homophone: 'BLT', meaning: '培根生菜番茄三明治', sentence: 'BLT has bacon and tomato.', translation: 'BLT有培根和番茄。', homophoneSentence: 'BLThas baconandtomato.' },
    { word: 'Grilled cheese', phonetic: '/ɡrɪld tʃiːz/', homophone: '格里尔德奇兹', meaning: '烤芝士三明治', sentence: 'Grilled cheese is melted.', translation: '烤芝士三明治是融化的。', homophoneSentence: '格里尔德奇兹is melted.' },
    { word: 'Sub sandwich', phonetic: '/sʌb ˈsænwɪtʃ/', homophone: '萨布桑维奇', meaning: '潜艇三明治', sentence: 'Sub sandwich is long roll.', translation: '潜艇三明治是长卷。', homophoneSentence: '萨布桑维奇is longroll.' },
    { word: 'Wrap', phonetic: '/ræp/', homophone: '拉普', meaning: '卷饼', sentence: 'Wrap uses flatbread.', translation: '卷饼用扁面包。', homophoneSentence: '拉普uses flatbread.' },
    { word: 'Burrito', phonetic: '/bəˈriːtoʊ/', homophone: '布里托', meaning: '墨西哥卷饼', sentence: 'Burrito has beans and rice.', translation: '墨西哥卷饼有豆和米饭。', homophoneSentence: '布里托has beansandrice.' },
    { word: 'Taco', phonetic: '/ˈtɑːkoʊ/', homophone: '塔可', meaning: '墨西哥夹饼', sentence: 'Taco has folded shell.', translation: '墨西哥夹饼有折叠的壳。', homophoneSentence: '塔可has foldedshell.' },
    { word: 'Quesadilla', phonetic: '/ˌkesəˈdiːə/', homophone: '克萨迪亚', meaning: '墨西哥馅饼', sentence: 'Quesadilla has melted cheese.', translation: '墨西哥馅饼有融化的芝士。', homophoneSentence: '克萨迪亚has meltedcheese.' },
    { word: 'Nachos', phonetic: '/ˈnɑːtʃoʊz/', homophone: '纳乔斯', meaning: '玉米片', sentence: 'Nachos have cheese sauce.', translation: '玉米片有芝士酱。', homophoneSentence: '纳乔斯have cheesesauce.' },
    { word: 'Enchilada', phonetic: '/ˌentʃɪˈlɑːdə/', homophone: '恩奇拉达', meaning: '墨西哥卷', sentence: 'Enchilada is covered in sauce.', translation: '墨西哥卷覆盖着酱汁。', homophoneSentence: '恩奇拉达is coveredinsauce.' },
    { word: 'Fajita', phonetic: '/fəˈhiːtə/', homophone: '法希塔', meaning: '法希塔', sentence: 'Fajita is served sizzling.', translation: '法希塔是滋滋作响的。', homophoneSentence: '法希塔is servedsizzling.' },
    { word: 'Pizza', phonetic: '/ˈpiːtsə/', homophone: '皮萨', meaning: '披萨', sentence: 'Pizza has cheese and sauce.', translation: '披萨有芝士和酱。', homophoneSentence: '皮萨has cheeseandsauce.' },
    { word: 'Pepperoni pizza', phonetic: '/pepəˈroʊni ˈpiːtsə/', homophone: '佩珀罗尼皮萨', meaning: '意大利辣香肠披萨', sentence: 'Pepperoni pizza is popular.', translation: '意大利辣香肠披萨很受欢迎。', homophoneSentence: '佩珀罗尼皮萨is popular.' },
    { word: 'Cheese pizza', phonetic: '/tʃiːz ˈpiːtsə/', homophone: '奇兹皮萨', meaning: '芝士披萨', sentence: 'Cheese pizza is simple.', translation: '芝士披萨很简单。', homophoneSentence: '奇兹皮萨is simple.' },
    { word: 'Hawaiian pizza', phonetic: '/həˈwaɪən ˈpiːtsə/', homophone: '夏威夷皮萨', meaning: '夏威夷披萨', sentence: 'Hawaiian pizza has pineapple.', translation: '夏威夷披萨有菠萝。', homophoneSentence: '夏威夷皮萨has pineapple.' },
    { word: 'Veggie pizza', phonetic: '/ˈvedʒi ˈpiːtsə/', homophone: '维吉皮萨', meaning: '蔬菜披萨', sentence: 'Veggie pizza has vegetables.', translation: '蔬菜披萨有蔬菜。', homophoneSentence: '维吉皮萨has vegetables.' },
    { word: 'BBQ chicken pizza', phonetic: '/biːbiːkjuː ˈtʃɪkɪn ˈpiːtsə/', homophone: 'BBQ奇肯皮萨', meaning: '烧烤鸡肉披萨', sentence: 'BBQ chicken pizza is tangy.', translation: '烧烤鸡肉披萨味道浓郁。', homophoneSentence: 'BBQ奇肯皮萨is tangy.' },
    { word: 'Meat lovers pizza', phonetic: '/miːt ˈlʌvərz ˈpiːtsə/', homophone: '米特拉沃兹皮萨', meaning: '肉类爱好者披萨', sentence: 'Meat lovers pizza has many meats.', translation: '肉类爱好者披萨有很多肉。', homophoneSentence: '米特拉沃兹皮萨has manymeats.' },
    { word: 'White pizza', phonetic: '/waɪt ˈpiːtsə/', homophone: '怀特皮萨', meaning: '白披萨', sentence: 'White pizza has no tomato sauce.', translation: '白披萨没有番茄酱。', homophoneSentence: '怀特皮萨has no tomatosauce.' },
    { word: 'Calzone', phonetic: '/kælˈzoʊni/', homophone: '卡尔佐尼', meaning: '卡尔佐尼', sentence: 'Calzone is folded pizza.', translation: '卡尔佐尼是折叠披萨。', homophoneSentence: '卡尔佐尼is foldedpizza.' },
    { word: 'Stromboli', phonetic: '/strɒmˈboʊli/', homophone: '斯特龙博利', meaning: '斯特龙博利卷', sentence: 'Stromboli is rolled pizza.', translation: '斯特龙博利卷是卷起的披萨。', homophoneSentence: '斯特龙博利is rolledpizza.' },
    { word: 'French fries', phonetic: '/frentʃ fraɪz/', homophone: '弗伦奇弗莱兹', meaning: '炸薯条', sentence: 'French fries are deep-fried.', translation: '炸薯条是油炸的。', homophoneSentence: '弗伦奇弗莱兹are deep-fried.' },
    { word: 'Sweet potato fries', phonetic: '/swiːt pəˈteɪtoʊ fraɪz/', homophone: '斯威特珀泰托弗莱兹', meaning: '红薯条', sentence: 'Sweet potato fries are sweet.', translation: '红薯条是甜的。', homophoneSentence: '斯威特珀泰托弗莱兹are sweet.' },
    { word: 'Curly fries', phonetic: '/ˈkɜːrli fraɪz/', homophone: '柯利弗莱兹', meaning: '卷薯条', sentence: 'Curly fries are seasoned.', translation: '卷薯条有调味。', homophoneSentence: '柯利弗莱兹are seasoned.' },
    { word: 'Waffle fries', phonetic: '/ˈwɒfəl fraɪz/', homophone: '沃弗尔弗莱兹', meaning: '华夫薯条', sentence: 'Waffle fries are lattice-cut.', translation: '华夫薯条是格子切的。', homophoneSentence: '沃弗尔弗莱兹are lattice-cut.' },
    { word: 'Onion rings', phonetic: '/ˈʌnjən rɪŋz/', homophone: '安尼恩林兹', meaning: '洋葱圈', sentence: 'Onion rings are battered.', translation: '洋葱圈有面糊。', homophoneSentence: '安尼恩林兹are battered.' },
    { word: 'Mozzarella sticks', phonetic: '/ˌmɒtsəˈrelə stɪks/', homophone: '莫扎雷拉斯蒂克斯', meaning: '马苏里拉芝士条', sentence: 'Mozzarella sticks are stringy.', translation: '马苏里拉芝士条会拉丝。', homophoneSentence: '莫扎雷拉斯蒂克斯are stringy.' },
    { word: 'Chicken nuggets', phonetic: '/ˈtʃɪkɪn ˈnʌɡɪts/', homophone: '奇肯纳吉茨', meaning: '鸡块', sentence: 'Chicken nuggets are bite-sized.', translation: '鸡块是一口大小的。', homophoneSentence: '奇肯纳吉茨are bite-sized.' },
    { word: 'Chicken tenders', phonetic: '/ˈtʃɪkɪn ˈtendərz/', homophone: '奇肯坦德兹', meaning: '鸡柳', sentence: 'Chicken tenders are tender.', translation: '鸡柳很嫩。', homophoneSentence: '奇肯坦德兹are tender.' },
    { word: 'Chicken wings', phonetic: '/ˈtʃɪkɪn wɪŋz/', homophone: '奇肯温兹', meaning: '鸡翅', sentence: 'Chicken wings are popular snack.', translation: '鸡翅是受欢迎的小吃。', homophoneSentence: '奇肯温兹are popularsnack.' },
    { word: 'Buffalo wings', phonetic: '/ˈbʌfəloʊ wɪŋz/', homophone: '巴法洛温兹', meaning: '布法罗鸡翅', sentence: 'Buffalo wings are spicy.', translation: '布法罗鸡翅是辣的。', homophoneSentence: '巴法洛温兹are spicy.' },
    { word: 'Fish and chips', phonetic: '/fɪʃ ənd tʃɪps/', homophone: 'fish安德奇普斯', meaning: '炸鱼薯条', sentence: 'Fish and chips is British.', translation: '炸鱼薯条是英国的。', homophoneSentence: 'fish安德奇普斯is British.' },
    { word: 'Fried chicken', phonetic: '/fraɪd ˈtʃɪkɪn/', homophone: '弗莱德奇肯', meaning: '炸鸡', sentence: 'Fried chicken is crispy.', translation: '炸鸡很脆。', homophoneSentence: '弗莱德奇肯is crispy.' },
    { word: 'Popcorn chicken', phonetic: '/ˈpɒpkɔːrn ˈtʃɪkɪn/', homophone: '帕普科恩奇肯', meaning: '爆米花鸡', sentence: 'Popcorn chicken is small.', translation: '爆米花鸡很小。', homophoneSentence: '帕普科恩奇肯is small.' }
];

const wordDataPath = path.join(__dirname, '../word-data.js');
let content = fs.readFileSync(wordDataPath, 'utf8');

console.log('Reading word-data.js...');

const foodArrayStart = content.indexOf('food: [');
const foodArrayEnd = content.indexOf(']', foodArrayStart + 6);

if (foodArrayStart === -1 || foodArrayEnd === -1) {
    console.error('Could not find food array');
    process.exit(1);
}

console.log('Found food array at positions:', foodArrayStart, '-', foodArrayEnd);

const existingFoodContent = content.substring(foodArrayStart + 6, foodArrayEnd);
const existingWords = new Set();
const wordRegex = /word:\s*'([^']+)'/g;
let match;
while ((match = wordRegex.exec(existingFoodContent)) !== null) {
    existingWords.add(match[1].toLowerCase());
}

console.log('Existing food words:', existingWords.size);

const uniqueNewWords = newFoodWords.filter(word => {
    const isDuplicate = existingWords.has(word.word.toLowerCase());
    if (isDuplicate) {
        console.log('Skipping duplicate:', word.word);
    }
    return !isDuplicate;
});

console.log('Unique new words to add:', uniqueNewWords.length);

if (uniqueNewWords.length === 0) {
    console.log('No new unique words to add');
    process.exit(0);
}

const newFoodEntries = uniqueNewWords.map(word => {
    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence}', translation: '${word.translation}', homophoneSentence: '${word.homophoneSentence}' }`;
}).join(',\n');

const oldContentBefore = content.substring(0, foodArrayEnd);
const oldContentAfter = content.substring(foodArrayEnd);

const newContent = oldContentBefore + ',\n' + newFoodEntries + oldContentAfter;

fs.writeFileSync(wordDataPath, newContent, 'utf8');

console.log(`Successfully added ${uniqueNewWords.length} new food words to word-data.js`);
console.log('Total food words now:', existingWords.size + uniqueNewWords.length);