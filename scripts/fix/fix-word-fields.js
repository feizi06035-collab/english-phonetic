// 修复word-data.js文件中的单词字段
const fs = require('fs');
const path = require('path');

// 读取word-data.js文件
const wordDataPath = path.join(__dirname, 'word-data.js');
let wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

// 修复单词字段
wordDataContent = wordDataContent.replace(/word:\s*'Whats your name'/g, "word: 'What\\'s your name'");
wordDataContent = wordDataContent.replace(/word:\s*'Youre welcome'/g, "word: 'You\\'re welcome'");
wordDataContent = wordDataContent.replace(/word:\s*'Im sorry'/g, "word: 'I\\'m sorry'");
wordDataContent = wordDataContent.replace(/word:\s*'I dont'/g, "word: 'I don\\'t'");
wordDataContent = wordDataContent.replace(/word:\s*'I cant'/g, "word: 'I can\\'t'");
wordDataContent = wordDataContent.replace(/word:\s*'I wont'/g, "word: 'I won\\'t'");
wordDataContent = wordDataContent.replace(/word:\s*'Youre'/g, "word: 'You\\'re'");
wordDataContent = wordDataContent.replace(/word:\s*'Its'/g, "word: 'It\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Thats'/g, "word: 'That\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Whats'/g, "word: 'What\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Hows'/g, "word: 'How\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Wheres'/g, "word: 'Where\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Whens'/g, "word: 'When\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Whys'/g, "word: 'Why\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Hes'/g, "word: 'He\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Shes'/g, "word: 'She\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Theyre'/g, "word: 'They\\'re'");
wordDataContent = wordDataContent.replace(/word:\s*'Weve'/g, "word: 'We\\'ve'");
wordDataContent = wordDataContent.replace(/word:\s*'Ive'/g, "word: 'I\\'ve'");
wordDataContent = wordDataContent.replace(/word:\s*'Id'/g, "word: 'I\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Youd'/g, "word: 'You\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Hed'/g, "word: 'He\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Shed'/g, "word: 'She\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Wed'/g, "word: 'We\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Theyd'/g, "word: 'They\\'d'");
wordDataContent = wordDataContent.replace(/word:\s*'Lets'/g, "word: 'Let\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Theres'/g, "word: 'There\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Heres'/g, "word: 'Here\\'s'");
wordDataContent = wordDataContent.replace(/word:\s*'Whos'/g, "word: 'Who\\'s'");

// 写入修复后的数据
fs.writeFileSync(wordDataPath, wordDataContent, 'utf8');
console.log('成功修复word-data.js文件中的单词字段');
