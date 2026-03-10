const fs = require('fs');
const path = require('path');

const wordDataPath = path.join(__dirname, '..', 'word-data.js');
const generatePath = path.join(__dirname, 'generate-sentences.js');

const wordDataContent = fs.readFileSync(wordDataPath, 'utf8');

const sentencesRegex = /sentences:\s*\[([\s\S]*?)\s*\]/;
const match = wordDataContent.match(sentencesRegex);

if (match) {
    const sentencesText = match[1];
    const wordObjects = sentencesText.match(/\{[^}]*\}/g) || [];
    
    const existingWords = new Set();
    wordObjects.forEach(objStr => {
        const wordMatch = objStr.match(/word:\s*'([^']*(?:\\.[^']*)*)'/);
        if (wordMatch) {
            existingWords.add(wordMatch[1].toLowerCase());
        }
    });

    console.log(`现有 ${existingWords.size} 个单词`);

    const generateContent = fs.readFileSync(generatePath, 'utf8');
    const allWordObjects = generateContent.match(/\{[^}]*word:[^}]*\}/g) || [];

    const newWordsFromGenerate = [];
    allWordObjects.forEach(objStr => {
        try {
            const wordMatch = objStr.match(/word:\s*'([^']*(?:\\.[^']*)*)'/);
            const phoneticMatch = objStr.match(/phonetic:\s*'([^']*(?:\\.[^']*)*)'/);
            const homophoneMatch = objStr.match(/homophone:\s*'([^']*(?:\\.[^']*)*)'/);
            const meaningMatch = objStr.match(/meaning:\s*'([^']*(?:\\.[^']*)*)'/);
            const sentenceMatch = objStr.match(/sentence:\s*'([^']*(?:\\.[^']*)*)'/);
            const translationMatch = objStr.match(/translation:\s*'([^']*(?:\\.[^']*)*)'/);
            const homophoneSentenceMatch = objStr.match(/homophoneSentence:\s*'([^']*(?:\\.[^']*)*)'/);
            
            if (wordMatch && phoneticMatch && homophoneMatch && meaningMatch && sentenceMatch && translationMatch && homophoneSentenceMatch) {
                const word = wordMatch[1].replace(/\\'/g, "'");
                if (!existingWords.has(word.toLowerCase())) {
                    newWordsFromGenerate.push({
                        word: word,
                        phonetic: phoneticMatch[1].replace(/\\'/g, "'"),
                        homophone: homophoneMatch[1].replace(/\\'/g, "'"),
                        meaning: meaningMatch[1].replace(/\\'/g, "'"),
                        sentence: sentenceMatch[1].replace(/\\'/g, "'"),
                        translation: translationMatch[1].replace(/\\'/g, "'"),
                        homophoneSentence: homophoneSentenceMatch[1].replace(/\\'/g, "'")
                    });
                }
            }
        } catch(e) {
        }
    });

    const uniqueNewWords = [...new Map(newWordsFromGenerate.map(item => [item.word.toLowerCase(), item])).values()];
    const wordsToAdd = uniqueNewWords.slice(0, 300);

    console.log(`从generate-sentences.js找到 ${newWordsFromGenerate.length} 个新单词，去重后 ${uniqueNewWords.length} 个，将添加 ${wordsToAdd.length} 个`);

    if (wordsToAdd.length > 0) {
        const newSentenceObjects = wordsToAdd.map(s => {
            return `        { word: '${s.word.replace(/'/g, "\\'")}', phonetic: '${s.phonetic.replace(/'/g, "\\'")}', homophone: '${s.homophone.replace(/'/g, "\\'")}', meaning: '${s.meaning.replace(/'/g, "\\'")}', sentence: '${s.sentence.replace(/'/g, "\\'")}', translation: '${s.translation.replace(/'/g, "\\'")}', homophoneSentence: '${s.homophoneSentence.replace(/'/g, "\\'")}' }`;
        }).join(',\n');

        const newSentencesText = sentencesText + (sentencesText.trim() ? ',\n' : '') + newSentenceObjects;
        const newWordDataContent = wordDataContent.replace(sentencesRegex, `sentences: [${newSentencesText}]`);

        fs.writeFileSync(wordDataPath, newWordDataContent, 'utf8');
        console.log('成功更新word-data.js');
    } else {
        console.log('没有新单词可添加');
    }
} else {
    console.error('未找到sentences数据');
}
