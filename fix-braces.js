const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 删除所有单独的},行
    let fixedData = data.replace(/^\s*\},\s*$/gm, '');
    
    fs.writeFileSync('word-data.js', fixedData, 'utf8');
    console.log('修复完成！');
    
} catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
}