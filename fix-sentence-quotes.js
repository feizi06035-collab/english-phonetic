const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;

// 修复 sentence 字段中包含缩写的引号问题
// 将 sentence: 'xxx' 中包含 ain't, don't, it's 等的改为双引号

// 修复 ain't 的问题
data = data.replace(/sentence: '([^']*ain't[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 don't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*don't[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 it's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*it's[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 I'm 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*I'm[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 I've 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*I've[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 I'll 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*I'll[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 I'd 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*I'd[^']*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 you're 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*you're[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 you've 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*you've[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 you'll 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*you'll[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 you'd 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*you'd[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 that's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*that's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 what's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*what's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 there's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*there's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 here's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*here's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 he's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*he's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 she's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*she's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 we're 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*we're[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 we've 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*we've[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 we'll 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*we'll[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 we'd 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*we'd[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 they're 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*they're[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 they've 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*they've[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 they'll 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*they'll[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 they'd 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*they'd[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 can't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*can't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 won't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*won't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 isn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*isn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 aren't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*aren't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 wasn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*wasn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 weren't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*weren't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 hasn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*hasn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 haven't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*haven't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 hadn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*hadn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 doesn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*doesn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 didn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*didn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 couldn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*couldn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 shouldn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*shouldn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 wouldn't 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*wouldn't[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

// 修复 let's 的问题 (在 sentence 字段中)
data = data.replace(/sentence: '([^']*let's[^']*)',/gi, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} issues`);
