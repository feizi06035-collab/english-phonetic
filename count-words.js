const fs = require('fs');

try {
    const data = fs.readFileSync('word-data.js', 'utf8');
    
    // 使用正则表达式提取所有单词对象
    const wordMatches = data.match(/\{ word: '[^']+'/g);
    
    console.log(`总共找到 ${wordMatches ? wordMatches.length : 0} 个单词`);
    
    // 提取分类
    const categoryMatches = data.match(/^\s+\w+:\s*\[/gm);
    
    if (categoryMatches) {
        console.log('\n分类统计：');
        console.log('================');
        
        let lastIndex = 0;
        categoryMatches.forEach((match, index) => {
            const category = match.match(/^\s+(\w+):\s*\[/)[1];
            
            // 找到这个分类的结束位置
            const nextIndex = index < categoryMatches.length - 1 ? data.indexOf(categoryMatches[index + 1]) : data.length;
            const categoryData = data.substring(data.indexOf(match), nextIndex);
            const wordCount = (categoryData.match(/\{ word: '[^']+'/g) || []).length;
            
            console.log(`${category}: ${wordCount} 个单词`);
        });
    }
    
} catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
}