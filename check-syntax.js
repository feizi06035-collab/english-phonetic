const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 检查文件内容
    console.log('文件前100个字符:');
    console.log(data.substring(0, 100));
    console.log('\n文件后100个字符:');
    console.log(data.substring(data.length - 100));
    
    // 检查是否有未闭合的括号
    let openBraces = 0;
    let openBrackets = 0;
    let openParens = 0;
    
    for (let i = 0; i < data.length; i++) {
        const char = data[i];
        if (char === '{') openBraces++;
        else if (char === '}') openBraces--;
        else if (char === '[') openBrackets++;
        else if (char === ']') openBrackets--;
        else if (char === '(') openParens++;
        else if (char === ')') openParens--;
    }
    
    console.log(`\n括号统计:`);
    console.log(`大括号: ${openBraces}`);
    console.log(`中括号: ${openBrackets}`);
    console.log(`小括号: ${openParens}`);
    
} catch (error) {
    console.error('Error:', error.message);
}