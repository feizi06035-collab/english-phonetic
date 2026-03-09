const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const wordData = fs.readFileSync('word-data.js', 'utf8');

const timeMatch = wordData.match(/time: \[([\s\S]*?)\n    \],/);
if (!timeMatch) {
    console.log('未找到time数组');
    process.exit(1);
}

const timeContent = timeMatch[1];
const wordMatches = timeContent.matchAll(/\{ word: '([^']+)', phonetic: '([^']+)', homophone: '([^']+)', meaning: '([^']+)', sentence: '([^']+)', translation: '([^']+)', homophoneSentence: '([^']+)' \}/g);

const timeWords = [];
for (const match of wordMatches) {
    timeWords.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('找到时间类单词数量:', timeWords.length);

const tableRows = timeWords.map(n => {
    return `<tr><td><button class="sound-btn" onclick="playSound('${n.word}')">${n.word}</button></td><td>${n.phonetic}</td><td>${n.homophone}</td><td>${n.meaning}</td><td>${n.sentence} → 【${n.translation}】→ ${n.homophoneSentence}</td></tr>`;
}).join('\n');

const startMarker = '<!-- 时间常用类 -->';
const endMarker = '<!-- 食物基础类 -->';

const startIndex = indexHtml.indexOf(startMarker);
const endIndex = indexHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log('未找到标记');
    process.exit(1);
}

const beforeSection = indexHtml.substring(0, startIndex);
const afterSection = indexHtml.substring(endIndex);

const newSection = `<!-- 时间常用类 -->
            <section class="word-category" id="time" aria-label="时间常用类词汇">
                <h2>时间常用类 | Time Expressions</h2>
                <table aria-label="时间常用类单词列表">
                    <thead>
                        <tr><th>英文</th><th>音标</th><th>中文谐音</th><th>中文释义</th><th>例句</th></tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>
            </section>
            `;

const updatedHtml = beforeSection + newSection + afterSection;

fs.writeFileSync('index.html', updatedHtml);
console.log('已更新index.html中的时间类表格');
