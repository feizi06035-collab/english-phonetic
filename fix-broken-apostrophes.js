const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let fixedCount = 0;

const brokenPatterns = [
    { find: /sentence: "There"s /g, replace: 'sentence: "There\'s ' },
    { find: /sentence: "What"s /g, replace: 'sentence: "What\'s ' },
    { find: /sentence: "It"s /g, replace: 'sentence: "It\'s ' },
    { find: /sentence: "He"s /g, replace: 'sentence: "He\'s ' },
    { find: /sentence: "She"s /g, replace: 'sentence: "She\'s ' },
    { find: /sentence: "That"s /g, replace: 'sentence: "That\'s ' },
    { find: /sentence: "Let"s /g, replace: 'sentence: "Let\'s ' },
    { find: /sentence: "Here"s /g, replace: 'sentence: "Here\'s ' },
    { find: /sentence: "How"s /g, replace: 'sentence: "How\'s ' },
    { find: /sentence: "Where"s /g, replace: 'sentence: "Where\'s ' },
    { find: /sentence: "Who"s /g, replace: 'sentence: "Who\'s ' },
    { find: /sentence: "When"s /g, replace: 'sentence: "When\'s ' },
    { find: /sentence: "Why"s /g, replace: 'sentence: "Why\'s ' },
    { find: /sentence: "I"m /g, replace: 'sentence: "I\'m ' },
    { find: /sentence: "I"ve /g, replace: 'sentence: "I\'ve ' },
    { find: /sentence: "I"d /g, replace: 'sentence: "I\'d ' },
    { find: /sentence: "I"ll /g, replace: 'sentence: "I\'ll ' },
    { find: /sentence: "You"re /g, replace: 'sentence: "You\'re ' },
    { find: /sentence: "You"ve /g, replace: 'sentence: "You\'ve ' },
    { find: /sentence: "You"d /g, replace: 'sentence: "You\'d ' },
    { find: /sentence: "You"ll /g, replace: 'sentence: "You\'ll ' },
    { find: /sentence: "We"re /g, replace: 'sentence: "We\'re ' },
    { find: /sentence: "We"ve /g, replace: 'sentence: "We\'ve ' },
    { find: /sentence: "We"d /g, replace: 'sentence: "We\'d ' },
    { find: /sentence: "We"ll /g, replace: 'sentence: "We\'ll ' },
    { find: /sentence: "They"re /g, replace: 'sentence: "They\'re ' },
    { find: /sentence: "They"ve /g, replace: 'sentence: "They\'ve ' },
    { find: /sentence: "They"d /g, replace: 'sentence: "They\'d ' },
    { find: /sentence: "They"ll /g, replace: 'sentence: "They\'ll ' },
    { find: /sentence: "Don"t /g, replace: 'sentence: "Don\'t ' },
    { find: /sentence: "Doesn"t /g, replace: 'sentence: "Doesn\'t ' },
    { find: /sentence: "Didn"t /g, replace: 'sentence: "Didn\'t ' },
    { find: /sentence: "Won"t /g, replace: 'sentence: "Won\'t ' },
    { find: /sentence: "Can"t /g, replace: 'sentence: "Can\'t ' },
    { find: /sentence: "Couldn"t /g, replace: 'sentence: "Couldn\'t ' },
    { find: /sentence: "Shouldn"t /g, replace: 'sentence: "Shouldn\'t ' },
    { find: /sentence: "Wouldn"t /g, replace: 'sentence: "Wouldn\'t ' },
    { find: /sentence: "Isn"t /g, replace: 'sentence: "Isn\'t ' },
    { find: /sentence: "Aren"t /g, replace: 'sentence: "Aren\'t ' },
    { find: /sentence: "Wasn"t /g, replace: 'sentence: "Wasn\'t ' },
    { find: /sentence: "Weren"t /g, replace: 'sentence: "Weren\'t ' },
    { find: /sentence: "Haven"t /g, replace: 'sentence: "Haven\'t ' },
    { find: /sentence: "Hasn"t /g, replace: 'sentence: "Hasn\'t ' },
    { find: /sentence: "Hadn"t /g, replace: 'sentence: "Hadn\'t ' },
    { find: /sentence: "ain"t /g, replace: 'sentence: "ain\'t ' },
    { find: /sentence: "It"ll /g, replace: 'sentence: "It\'ll ' },
    { find: /sentence: "There"ll /g, replace: 'sentence: "There\'ll ' },
];

brokenPatterns.forEach(({ find, replace }) => {
    const before = data;
    data = data.replace(find, replace);
    const matches = before.match(find);
    if (matches) {
        fixedCount += matches.length;
    }
});

fs.writeFileSync('word-data.js', data, 'utf8');
console.log(`修复了 ${fixedCount} 处引号问题`);
