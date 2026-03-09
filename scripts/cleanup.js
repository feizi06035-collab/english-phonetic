const fs = require('fs');
const path = require('path');

console.log('开始清理临时脚本文件...');

const projectRoot = path.resolve(__dirname, '..');
const scriptsToDelete = [
    'add-more-greetings.js',
    'check-greetings-count.js',
    'check-greetings-rows.js',
    'check-greetings-table-simple.js',
    'check-greetings-table.js',
    'check-greetings-worddata.js',
    'check-pagination-v2.js',
    'check-pagination.js',
    'check-syntax.js',
    'count-greetings-rows.js',
    'count-greetings-words.js',
    'fix-double-commas-v2.js',
    'fix-double-commas.js',
    'simple-test.js',
    'test-greetings-table.js',
    'test-require.js',
    'test-word-database.js'
];

let deletedCount = 0;

scriptsToDelete.forEach(script => {
    const scriptPath = path.join(projectRoot, script);
    if (fs.existsSync(scriptPath)) {
        fs.unlinkSync(scriptPath);
        console.log(`删除: ${script}`);
        deletedCount++;
    }
});

console.log(`\n清理完成！删除了 ${deletedCount} 个临时脚本文件。`);
console.log('\n现在您可以使用统一的单词管理工具：');
console.log('  node scripts/word-manager.js');
console.log('\n这个工具可以：');
console.log('  - 选择分类');
console.log('  - 输入单词数量');
console.log('  - 自动生成和添加单词');
console.log('  - 同步更新所有相关文件');
console.log('  - 修复语法错误');
console.log('  - 推送GitHub');