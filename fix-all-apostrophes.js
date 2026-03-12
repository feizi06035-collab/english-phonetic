const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

data = data.replace(/o"clock/g, "o'clock");

data = data.replace(/don"t/g, "don't");
data = data.replace(/Don"t/g, "Don't");
data = data.replace(/you"re/g, "you're");
data = data.replace(/You"re/g, "You're");
data = data.replace(/it"s/g, "it's");
data = data.replace(/It"s/g, "It's");
data = data.replace(/i"m/g, "i'm");
data = data.replace(/I"m/g, "I'm");
data = data.replace(/we"re/g, "we're");
data = data.replace(/We"re/g, "We're");
data = data.replace(/they"re/g, "they're");
data = data.replace(/They"re/g, "They're");
data = data.replace(/who"s/g, "who's");
data = data.replace(/Who"s/g, "Who's");
data = data.replace(/what"s/g, "what's");
data = data.replace(/What"s/g, "What's");
data = data.replace(/that"s/g, "that's");
data = data.replace(/That"s/g, "That's");
data = data.replace(/there"s/g, "there's");
data = data.replace(/There"s/g, "There's");
data = data.replace(/can"t/g, "can't");
data = data.replace(/Can"t/g, "Can't");
data = data.replace(/won"t/g, "won't");
data = data.replace(/Won"t/g, "Won't");
data = data.replace(/isn"t/g, "isn't");
data = data.replace(/Isn"t/g, "Isn't");
data = data.replace(/aren"t/g, "aren't");
data = data.replace(/Aren"t/g, "Aren't");
data = data.replace(/wasn"t/g, "wasn't");
data = data.replace(/Wasn"t/g, "Wasn't");
data = data.replace(/weren"t/g, "weren't");
data = data.replace(/Weren"t/g, "Weren't");
data = data.replace(/hasn"t/g, "hasn't");
data = data.replace(/Hasn"t/g, "Hasn't");
data = data.replace(/haven"t/g, "haven't");
data = data.replace(/Haven"t/g, "Haven't");
data = data.replace(/hadn"t/g, "hadn't");
data = data.replace(/Hadn"t/g, "Hadn't");
data = data.replace(/doesn"t/g, "doesn't");
data = data.replace(/Doesn"t/g, "Doesn't");
data = data.replace(/don"t/g, "don't");
data = data.replace(/Don"t/g, "Don't");
data = data.replace(/didn"t/g, "didn't");
data = data.replace(/Didn"t/g, "Didn't");

fs.writeFileSync('word-data.js', data, 'utf8');

console.log('Fixed all broken apostrophes');
