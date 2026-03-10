const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const filePath = path.join(__dirname, '../word-data.js');

try {
    execSync(`node --check "${filePath}"`, { encoding: 'utf8' });
    console.log('Syntax is valid!');
} catch (e) {
    console.log('Syntax error:');
    console.log(e.message);
}
