const fs = require('fs');

// 快速更新表格 - 只处理包含"对话词"的行
console.log('读取 index.html...');
let indexContent = fs.readFileSync('index.html', 'utf8');

console.log('删除包含"对话词"的表格行...');

// 按行分割
const lines = indexContent.split('\n');
const newLines = [];
let removedCount = 0;

for (const line of lines) {
    if (line.includes('对话词')) {
        removedCount++;
    } else {
        newLines.push(line);
    }
}

console.log(`删除了 ${removedCount} 行包含"对话词"的内容`);

// 写回文件
fs.writeFileSync('index.html', newLines.join('\n'), 'utf8');
console.log('✅ 完成！');
