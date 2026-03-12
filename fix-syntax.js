const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 批量修复所有行末尾的多余逗号
    let fixedData = data.replace(/homophoneSentence: '[^']+?'\s*,\s*$/gm, (match) => {
        return match.replace(/,\s*$/, ' },');
    });
    
    fs.writeFileSync('word-data.js', fixedData, 'utf8');
    console.log('修复完成！');
    
} catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
}