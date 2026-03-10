// 示例脚本：演示如何使用通用单词管理脚本
const WordManager = require('./word-manager');

// 创建WordManager实例
const wordManager = new WordManager();

// 示例1：生成新的单词数据文件
function generateExampleWords() {
    // 示例单词数据
    const exampleWords = [
        { 
            word: 'Hello', 
            phonetic: '/həˈləʊ/', 
            homophone: '哈喽', 
            meaning: '你好', 
            sentence: 'Hello, how are you?', 
            translation: '你好，你好吗？', 
            homophoneSentence: '哈喽，好啊油?' 
        },
        { 
            word: 'Goodbye', 
            phonetic: '/ˌɡʊdˈbaɪ/', 
            homophone: '古德拜', 
            meaning: '再见', 
            sentence: 'Goodbye, see you later!', 
            translation: '再见，回头见！', 
            homophoneSentence: '古德拜，西优雷特!' 
        },
        { 
            word: 'Thank you', 
            phonetic: '/θæŋk juː/', 
            homophone: '森克油', 
            meaning: '谢谢', 
            sentence: 'Thank you very much!', 
            translation: '非常感谢！', 
            homophoneSentence: '森克油歪瑞马奇!' 
        }
    ];

    // 生成单词数据文件
    wordManager.generateWordData('examples', exampleWords, './example-words.json');
}

// 示例2：更新HTML表格
function updateHtmlExample() {
    // 处理单词数据并更新HTML
    wordManager.processWordData('examples', './example-words.json', false);
}

// 示例3：追加单词到现有表格
function appendHtmlExample() {
    // 追加单词到现有表格
    wordManager.processWordData('examples', './example-words.json', true);
}

// 运行示例
console.log('=== 示例1：生成新的单词数据文件 ===');
generateExampleWords();

console.log('\n=== 示例2：更新HTML表格 ===');
// updateHtmlExample(); // 取消注释以运行

console.log('\n=== 示例3：追加单词到现有表格 ===');
// appendHtmlExample(); // 取消注释以运行

console.log('\n示例脚本执行完成！');
console.log('请根据需要取消注释相应的示例代码来运行。');
