const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const wordData = fs.readFileSync('word-data.js', 'utf8');

const numbersMatch = wordData.match(/numbers: \[([\s\S]*?)\n    \],/);
if (!numbersMatch) {
    console.log('未找到numbers数组');
    process.exit(1);
}

const numbersContent = numbersMatch[1];
const wordMatches = numbersContent.matchAll(/\{ word: '([^']+)', phonetic: '([^']+)', homophone: '([^']+)', meaning: '([^']+)', sentence: '([^']+)', translation: '([^']+)', homophoneSentence: '([^']+)' \}/g);

const numbers = [];
for (const match of wordMatches) {
    numbers.push({
        word: match[1],
        phonetic: match[2],
        homophone: match[3],
        meaning: match[4],
        sentence: match[5],
        translation: match[6],
        homophoneSentence: match[7]
    });
}

console.log('找到数字类单词数量:', numbers.length);

const tableRows = numbers.map(n => {
    return `<tr><td><button class="sound-btn" onclick="playSound('${n.word}')">${n.word}</button></td><td>${n.phonetic}</td><td>${n.homophone}</td><td>${n.meaning}</td><td>${n.sentence} → 【${n.translation}】→ ${n.homophoneSentence}</td></tr>`;
}).join('\n');

const startMarker = '<!-- 数字类 -->';
const endMarker = '<!-- 颜色类 -->';

const startIndex = indexHtml.indexOf(startMarker);
const endIndex = indexHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.log('未找到标记');
    process.exit(1);
}

const beforeSection = indexHtml.substring(0, startIndex);
const afterSection = indexHtml.substring(endIndex);

const newSection = `<!-- 数字类 -->
            <section class="word-category" id="numbers" aria-label="数字类词汇">
                <h2>数字类 | Numbers</h2>
                <table aria-label="数字类单词列表">
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
console.log('已更新index.html中的数字类表格');
