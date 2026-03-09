const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const wordData = fs.readFileSync('word-data.js', 'utf8');

const colorsMatch = wordData.match(/colors: \[([\s\S]*?)\n    \],/);
if (!colorsMatch) {
    console.log('未找到colors数组');
    process.exit(1);
}

const colorsContent = colorsMatch[1];
const wordMatches = colorsContent.matchAll(/\{ word: '([^']+)', phonetic: '([^']+)', homophone: '([^']+)', meaning: '([^']+)', sentence: '([^']+)', translation: '([^']+)', homophoneSentence: '([^']+)' \}/g);

const colors = [];
for (const match of wordMatches) {
    colors.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('找到颜色类单词数量:', colors.length);

const tableRows = colors.map(n => {
    return `<tr><td><button class="sound-btn" onclick="playSound('${n.word}')">${n.word}</button></td><td>${n.phonetic}</td><td>${n.homophone}</td><td>${n.meaning}</td><td>${n.sentence} → 【${n.translation}】→ ${n.homophoneSentence}</td></tr>`;
}).join('\n');

const startMarker = '<!-- 颜色类 -->';
const endMarker = '<!-- 家人称呼类 -->';

const startIndex = indexHtml.indexOf(startMarker);
const endIndex = indexHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log('未找到标记');
    process.exit(1);
}

const beforeSection = indexHtml.substring(0, startIndex);
const afterSection = indexHtml.substring(endIndex);

const newSection = `<!-- 颜色类 -->
            <section class="word-category" id="colors" aria-label="颜色类词汇">
                <h2>颜色类 | Colors</h2>
                <table aria-label="颜色类单词列表">
                    <thead>
                        <tr>
                            <th>单词</th>
                            <th>音标</th>
                            <th>谐音</th>
                            <th>释义</th>
                            <th>例句</th>
                        </tr>
                    </thead>
                    <tbody>
${tableRows}
                    </tbody>
                </table>
            </section>
            `;

const updatedHtml = beforeSection + newSection + afterSection;

fs.writeFileSync('index.html', updatedHtml);
console.log('已更新index.html中的颜色类表格');
