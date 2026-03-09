const fs = require('fs');

// 读取word-data.js文件
let wordDataContent = fs.readFileSync('word-data.js', 'utf8');

// 修复单引号转义问题
const patterns = [
    { regex: /sentence: 'I'm/g, replacement: "sentence: 'I\\'m" },
    { regex: /sentence: 'Don't/g, replacement: "sentence: 'Don\\'t" },
    { regex: /sentence: 'She's/g, replacement: "sentence: 'She\\'s" },
    { regex: /sentence: 'He's/g, replacement: "sentence: 'He\\'s" },
    { regex: /sentence: 'It's/g, replacement: "sentence: 'It\\'s" },
    { regex: /sentence: 'You're/g, replacement: "sentence: 'You\\'re" },
    { regex: /sentence: 'They're/g, replacement: "sentence: 'They\\'re" },
    { regex: /sentence: 'We're/g, replacement: "sentence: 'We\\'re" },
    { regex: /sentence: 'That's/g, replacement: "sentence: 'That\\'s" },
    { regex: /sentence: 'What's/g, replacement: "sentence: 'What\\'s" },
    { regex: /sentence: 'Let's/g, replacement: "sentence: 'Let\\'s" },
    { regex: /sentence: 'There's/g, replacement: "sentence: 'There\\'s" },
    { regex: /sentence: 'Who's/g, replacement: "sentence: 'Who\\'s" },
    { regex: /sentence: 'Here's/g, replacement: "sentence: 'Here\\'s" },
    { regex: /sentence: 'Where's/g, replacement: "sentence: 'Where\\'s" },
    { regex: /sentence: 'How's/g, replacement: "sentence: 'How\\'s" },
    { regex: /sentence: 'Why's/g, replacement: "sentence: 'Why\\'s" },
    { regex: /sentence: 'When's/g, replacement: "sentence: 'When\\'s" },
    { regex: /sentence: 'Can't/g, replacement: "sentence: 'Can\\'t" },
    { regex: /sentence: 'Won't/g, replacement: "sentence: 'Won\\'t" },
    { regex: /sentence: 'Didn't/g, replacement: "sentence: 'Didn\\'t" },
    { regex: /sentence: 'Doesn't/g, replacement: "sentence: 'Doesn\\'t" },
    { regex: /sentence: 'Isn't/g, replacement: "sentence: 'Isn\\'t" },
    { regex: /sentence: 'Aren't/g, replacement: "sentence: 'Aren\\'t" },
    { regex: /sentence: 'Wasn't/g, replacement: "sentence: 'Wasn\\'t" },
    { regex: /sentence: 'Werent/g, replacement: "sentence: 'Weren\\'t" },
    { regex: /sentence: 'Haven't/g, replacement: "sentence: 'Haven\\'t" },
    { regex: /sentence: 'Hasn't/g, replacement: "sentence: 'Hasn\\'t" },
    { regex: /sentence: 'Wouldn't/g, replacement: "sentence: 'Wouldn\\'t" },
    { regex: /sentence: 'Shouldn't/g, replacement: "sentence: 'Shouldn\\'t" },
    { regex: /sentence: 'Couldn't/g, replacement: "sentence: 'Couldn\\'t" },
    { regex: /homophoneSentence: 'I'm/g, replacement: "homophoneSentence: 'I\\'m" },
    { regex: /homophoneSentence: 'Don't/g, replacement: "homophoneSentence: 'Don\\'t" },
    { regex: /homophoneSentence: 'She's/g, replacement: "homophoneSentence: 'She\\'s" },
    { regex: /homophoneSentence: 'He's/g, replacement: "homophoneSentence: 'He\\'s" },
    { regex: /homophoneSentence: 'It's/g, replacement: "homophoneSentence: 'It\\'s" },
    { regex: /homophoneSentence: 'You're/g, replacement: "homophoneSentence: 'You\\'re" },
    { regex: /homophoneSentence: 'They're/g, replacement: "homophoneSentence: 'They\\'re" },
    { regex: /homophoneSentence: 'We're/g, replacement: "homophoneSentence: 'We\\'re" },
    { regex: /homophoneSentence: 'That's/g, replacement: "homophoneSentence: 'That\\'s" },
    { regex: /homophoneSentence: 'What's/g, replacement: "homophoneSentence: 'What\\'s" },
    { regex: /homophoneSentence: 'Let's/g, replacement: "homophoneSentence: 'Let\\'s" },
    { regex: /homophoneSentence: 'There's/g, replacement: "homophoneSentence: 'There\\'s" },
    { regex: /homophoneSentence: 'Who's/g, replacement: "homophoneSentence: 'Who\\'s" },
    { regex: /homophoneSentence: 'Here's/g, replacement: "homophoneSentence: 'Here\\'s" },
    { regex: /homophoneSentence: 'Where's/g, replacement: "homophoneSentence: 'Where\\'s" },
    { regex: /homophoneSentence: 'How's/g, replacement: "homophoneSentence: 'How\\'s" },
    { regex: /homophoneSentence: 'Why's/g, replacement: "homophoneSentence: 'Why\\'s" },
    { regex: /homophoneSentence: 'When's/g, replacement: "homophoneSentence: 'When\\'s" },
    { regex: /homophoneSentence: 'Can't/g, replacement: "homophoneSentence: 'Can\\'t" },
    { regex: /homophoneSentence: 'Won't/g, replacement: "homophoneSentence: 'Won\\'t" },
    { regex: /homophoneSentence: 'Didn't/g, replacement: "homophoneSentence: 'Didn\\'t" },
    { regex: /homophoneSentence: 'Doesn't/g, replacement: "homophoneSentence: 'Doesn\\'t" },
    { regex: /homophoneSentence: 'Isn't/g, replacement: "homophoneSentence: 'Isn\\'t" },
    { regex: /homophoneSentence: 'Aren't/g, replacement: "homophoneSentence: 'Aren\\'t" },
    { regex: /homophoneSentence: 'Wasn't/g, replacement: "homophoneSentence: 'Wasn\\'t" },
    { regex: /homophoneSentence: 'Weren't/g, replacement: "homophoneSentence: 'Weren\\'t" },
    { regex: /homophoneSentence: 'Haven't/g, replacement: "homophoneSentence: 'Haven\\'t" },
    { regex: /homophoneSentence: 'Hasn't/g, replacement: "homophoneSentence: 'Hasn\\'t" },
    { regex: /homophoneSentence: 'Wouldn't/g, replacement: "homophoneSentence: 'Wouldn\\'t" },
    { regex: /homophoneSentence: 'Shouldn't/g, replacement: "homophoneSentence: 'Shouldn\\'t" },
    { regex: /homophoneSentence: 'Couldn't/g, replacement: "homophoneSentence: 'Couldn\\'t" }
];

let fixedCount = 0;
patterns.forEach(pattern => {
    const matches = wordDataContent.match(pattern.regex);
    if (matches) {
        fixedCount += matches.length;
    }
    wordDataContent = wordDataContent.replace(pattern.regex, pattern.replacement);
});

// 写入修复后的文件
fs.writeFileSync('word-data.js', wordDataContent, 'utf8');

console.log('修复完成，共修复', fixedCount, '处单引号转义问题');
