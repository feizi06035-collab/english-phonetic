const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

let count = 0;

data = data.replace(/There"s/g, () => {
    count++;
    return "There's";
});

data = data.replace(/What"s/g, () => {
    count++;
    return "What's";
});

data = data.replace(/It"s/g, () => {
    count++;
    return "It's";
});

data = data.replace(/You"re/g, () => {
    count++;
    return "You're";
});

data = data.replace(/I"ve/g, () => {
    count++;
    return "I've";
});

data = data.replace(/Don"t/g, () => {
    count++;
    return "Don't";
});

data = data.replace(/o"clock/g, () => {
    count++;
    return "o'clock";
});

data = data.replace(/sentence: "([^"]*)',/g, (match, p1) => {
    count++;
    return `sentence: "${p1}",`;
});

fs.writeFileSync('word-data.js', data, 'utf8');

console.log(`Fixed ${count} issues`);
