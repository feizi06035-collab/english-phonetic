const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;

data = data.replace(/The point I"m/g, () => {
    count++;
    return "The point I'm";
});

data = data.replace(/That"s a good question/g, () => {
    count++;
    return "That's a good question";
});

data = data.replace(/I"m glad you asked/g, () => {
    count++;
    return "I'm glad you asked";
});

data = data.replace(/That"s an interesting question/g, () => {
    count++;
    return "That's an interesting question";
});

data = data.replace(/I"m sorry to hear that/g, () => {
    count++;
    return "I'm sorry to hear that";
});

data = data.replace(/That"s too bad/g, () => {
    count++;
    return "That's too bad";
});

data = data.replace(/That"s unfortunate/g, () => {
    count++;
    return "That's unfortunate";
});

data = data.replace(/I've never thought about that before',/g, () => {
    count++;
    return 'I\'ve never thought about that before.',;
});

data = data.replace(/I've never thought about that before.', translation: '我以前从没想过这个问题。"/g, () => {
    count++;
    return 'I\'ve never thought about that before.', translation: \'我以前从没想过这个问题。\'';
});

data = data.replace(/That"s a good question!',/g, () => {
    count++;
    return 'That\'s a good question!',;
});

data = data.replace(/That"s a good question!', translation: '这是个好问题！',/g, () => {
    count++;
    return 'That\'s a good question!', translation: \'这是个好问题！\',';
});

data = data.replace(/That"s an interesting question!',/g, () => {
    count++;
    return 'That\'s an interesting question!',;
});

data = data.replace(/That"s an interesting question!', translation: '这是个有趣的问题！',/g, () => {
    count++;
    return 'That\'s an interesting question!', translation: \'这是个有趣的问题！\',';
});

data = data.replace(/I"m sorry to hear that.',/g, () => {
    count++;
    return 'I\'m sorry to hear that.',;
});

data = data.replace(/I"m sorry to hear that.', translation: '听到这个我很遗憾。',/g, () => {
    count++;
    return 'I\'m sorry to hear that.', translation: \'听到这个我很遗憾。\',';
});

data = data.replace(/That"s too bad!',/g, () => {
    count++;
    return 'That\'s too bad!',;
});

data = data.replace(/That"s too bad!', translation: '太糟糕了！',/g, () => {
    count++;
    return 'That\'s too bad!', translation: \'太糟糕了！\',';
});

data = data.replace(/That"s unfortunate.',/g, () => {
    count++;
    return 'That\'s unfortunate.',;
});

data = data.replace(/That"s unfortunate.', translation: '真不幸。',/g, () => {
    count++;
    return 'That\'s unfortunate.', translation: \'真不幸。\',';
});

data = data.replace(/The point I"m trying to make is...',/g, () => {
    count++;
    return 'The point I\'m trying to make is...',;
});

data = data.replace(/The point I"m trying to make is...', translation: '我想表达的观点是...',/g, () => {
    count++;
    return 'The point I\'m trying to make is...', translation: \'我想表达的观点是...\',';
});

data = data.replace(/I"m glad you asked that.',/g, () => {
    count++;
    return 'I\'m glad you asked that.',;
});

data = data.replace(/I"m glad you asked that.', translation: '很高兴你问了那个。',/g, () => {
    count++;
    return 'I\'m glad you asked that.', translation: \'很高兴你问了那个。\',';
});

data = data.replace(/I've never thought about that before.', translation: '我以前从没想过这个问题。"/g, () => {
    count++;
    return 'I\'ve never thought about that before.', translation: \'我以前从没想过这个问题。\',';
});

data = data.replace(/I've never thought about that before.', translation: '我以前从没想过这个问题。",/g, () => {
    count++;
    return 'I\'ve never thought about that before.', translation: \'我以前从没想过这个问题。\',';
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} issues`);
