// 通用单词管理脚本
// 支持生成单词数据和更新HTML文件
const fs = require('fs');
const path = require('path');

class WordManager {
    constructor() {
        this.projectRoot = path.resolve(__dirname, '../..');
        this.indexHtmlPath = path.join(this.projectRoot, 'index.html');
        this.wordDataPath = path.join(this.projectRoot, 'word-data.js');
    }

    /**
     * 生成单词数据文件
     * @param {string} category - 分类名称
     * @param {Array} words - 单词数据数组
     * @param {string} outputFile - 输出文件路径
     */
    generateWordData(category, words, outputFile) {
        try {
            // 构建单词数据对象
            const wordData = {
                [category]: words
            };

            // 写入文件
            fs.writeFileSync(outputFile, JSON.stringify(wordData, null, 2));
            console.log(`成功生成 ${words.length} 个${category}类单词到 ${outputFile}`);
            return true;
        } catch (error) {
            console.error('生成单词数据失败:', error);
            return false;
        }
    }

    /**
     * 更新HTML文件中的单词表格
     * @param {string} category - 分类名称
     * @param {Array} words - 单词数据数组
     * @param {boolean} append - 是否追加到现有表格
     */
    updateHtmlTable(category, words, append = false) {
        try {
            // 读取index.html
            let indexHtmlContent = fs.readFileSync(this.indexHtmlPath, 'utf8');

            // 构建新表格行的字符串（无缩进，与现有格式一致）
            const newRowsString = words.map(word => {
                const wordKey = word.word.replace(/[^a-zA-Z0-9]/g, '');
                const example = word.sentence.replace(/'/g, "\\'") + ' → 【' + word.translation + '】→ ' + word.homophoneSentence.replace(/'/g, "\\'");
                return `<tr><td><button class="sound-btn" onclick="playSound('${wordKey}')">${word.word}</button></td><td>${word.phonetic}</td><td>${word.homophone}</td><td>${word.meaning}</td><td>${example}</td></tr>`;
            }).join('\n');

            // 找到对应分类表格的位置（使用更简单的匹配方式）
            const sectionStart = indexHtmlContent.indexOf(`<section class="word-category" id="${category}"`);
            if (sectionStart === -1) {
                console.error(`无法找到${category}分类的section`);
                return false;
            }
            
            const tbodyStart = indexHtmlContent.indexOf('<tbody>', sectionStart);
            const tbodyEnd = indexHtmlContent.indexOf('</tbody>', tbodyStart);
            
            if (tbodyStart === -1 || tbodyEnd === -1) {
                console.error(`无法找到${category}分类的tbody`);
                return false;
            }
            
            // 提取现有内容
            const existingContent = indexHtmlContent.substring(tbodyStart + 7, tbodyEnd).trim();
            
            // 构建更新后的内容
            let updatedContent;
            if (append) {
                // 追加到现有表格
                const newTbodyContent = existingContent + (existingContent ? '\n' : '') + newRowsString;
                updatedContent = indexHtmlContent.substring(0, tbodyStart + 7) + newTbodyContent + indexHtmlContent.substring(tbodyEnd);
            } else {
                // 替换整个表格内容
                updatedContent = indexHtmlContent.substring(0, tbodyStart + 7) + newRowsString + indexHtmlContent.substring(tbodyEnd);
            }

            // 写回文件
            fs.writeFileSync(this.indexHtmlPath, updatedContent);
            console.log(`成功将 ${words.length} 个${category}类单词${append ? '追加' : '更新'}到index.html`);
            return true;
        } catch (error) {
            console.error('更新HTML表格失败:', error);
            return false;
        }
    }

    /**
     * 从JSON文件加载单词数据
     * @param {string} jsonPath - JSON文件路径
     * @returns {Array} 单词数据数组
     */
    loadWordsFromJson(jsonPath) {
        try {
            const jsonContent = fs.readFileSync(jsonPath, 'utf8');
            const data = JSON.parse(jsonContent);
            // 提取第一个分类的单词数据
            const category = Object.keys(data)[0];
            return data[category];
        } catch (error) {
            console.error('加载JSON文件失败:', error);
            return [];
        }
    }

    /**
     * 验证单词数据格式
     * @param {Array} words - 单词数据数组
     * @returns {boolean} 是否格式正确
     */
    validateWordData(words) {
        const requiredFields = ['word', 'phonetic', 'homophone', 'meaning', 'sentence', 'translation', 'homophoneSentence'];
        
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (const field of requiredFields) {
                if (!word[field]) {
                    console.error(`第${i + 1}个单词缺少${field}字段`);
                    return false;
                }
            }
        }
        
        console.log(`单词数据验证通过，共${words.length}个单词`);
        return true;
    }

    /**
     * 更新word-data.js文件中的单词数据
     * @param {string} category - 分类名称
     * @param {Array} words - 单词数据数组
     * @param {boolean} append - 是否追加到现有数据
     */
    updateWordDataFile(category, words, append = false) {
        try {
            // 读取现有word-data.js文件
            let wordDataContent = fs.readFileSync(this.wordDataPath, 'utf8');
            
            // 找到分类的开始位置
            const categoryStart = wordDataContent.indexOf(`${category}:`);
            if (categoryStart === -1) {
                console.error(`无法找到${category}分类`);
                return false;
            }
            
            // 找到分类数组的开始和结束位置
            const arrayStart = wordDataContent.indexOf('[', categoryStart);
            let arrayEnd = arrayStart;
            let braceCount = 1;
            
            for (let i = arrayStart + 1; i < wordDataContent.length; i++) {
                if (wordDataContent[i] === '[') braceCount++;
                if (wordDataContent[i] === ']') braceCount--;
                if (braceCount === 0) {
                    arrayEnd = i;
                    break;
                }
            }
            
            if (arrayEnd === arrayStart) {
                console.error(`无法找到${category}分类的结束位置`);
                return false;
            }
            
            // 提取现有数据
            const existingContent = wordDataContent.substring(arrayStart + 1, arrayEnd).trim();
            
            // 处理单词数据
            let newContent;
            if (append) {
                // 构建新单词字符串
                const newWordsStr = words.map(word => {
                    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence.replace(/'/g, "\\'")}', translation: '${word.translation.replace(/'/g, "\\'")}', homophoneSentence: '${word.homophoneSentence.replace(/'/g, "\\'")}' },`;
                }).join('\n');
                
                // 构建新内容
                if (existingContent) {
                    newContent = existingContent + '\n' + newWordsStr;
                } else {
                    newContent = newWordsStr;
                }
                console.log(`成功添加 ${words.length} 个新单词到${category}分类`);
            } else {
                // 替换模式
                const newWordsStr = words.map(word => {
                    return `        { word: '${word.word}', phonetic: '${word.phonetic}', homophone: '${word.homophone}', meaning: '${word.meaning}', sentence: '${word.sentence.replace(/'/g, "\\'")}', translation: '${word.translation.replace(/'/g, "\\'")}', homophoneSentence: '${word.homophoneSentence.replace(/'/g, "\\'")}' },`;
                }).join('\n');
                
                newContent = newWordsStr;
                console.log(`成功替换${category}分类的单词数据`);
            }
            
            // 构建更新后的内容
            const updatedContent = wordDataContent.substring(0, arrayStart + 1) + '\n' + newContent + '\n    ' + wordDataContent.substring(arrayEnd);
            
            // 写回文件
            fs.writeFileSync(this.wordDataPath, updatedContent);
            console.log(`成功更新word-data.js文件`);
            return true;
        } catch (error) {
            console.error('更新word-data.js失败:', error);
            return false;
        }
    }

    /**
     * 批量处理单词数据
     * @param {string} category - 分类名称
     * @param {string} inputJson - 输入JSON文件路径
     * @param {boolean} append - 是否追加到现有表格
     */
    processWordData(category, inputJson, append = false) {
        console.log(`开始处理${category}分类单词数据...`);
        
        // 加载单词数据
        const words = this.loadWordsFromJson(inputJson);
        
        if (words.length === 0) {
            console.error('没有找到单词数据');
            return false;
        }
        
        // 验证数据格式
        if (!this.validateWordData(words)) {
            console.error('单词数据格式验证失败');
            return false;
        }
        
        // 更新word-data.js文件
        const updateWordDataResult = this.updateWordDataFile(category, words, append);
        
        // 更新HTML表格
        const updateHtmlResult = this.updateHtmlTable(category, words, append);
        
        return updateWordDataResult && updateHtmlResult;
    }
}

// 导出WordManager类
module.exports = WordManager;

// 命令行使用示例
if (require.main === module) {
    const wordManager = new WordManager();
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('用法: node word-manager.js <分类名称> <输入JSON文件> [--append]');
        console.log('示例: node word-manager.js greetings new-greetings.json');
        console.log('示例: node word-manager.js greetings new-greetings.json --append');
        process.exit(1);
    }
    
    const category = args[0];
    const inputJson = args[1];
    const append = args.includes('--append');
    
    wordManager.processWordData(category, inputJson, append);
}
