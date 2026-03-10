const data = require('../word-data.js');
const fs = require('fs');

const result = {
    foodCount: data.food.length,
    categories: Object.keys(data)
};

fs.writeFileSync(__dirname + '/data-check.txt', JSON.stringify(result, null, 2), 'utf8');
console.log('Food count:', data.food.length);
console.log('Categories:', Object.keys(data).join(', '));
