const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

const lines = data.split('\n');
const fixedLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    if (line.includes("sentence: '") && line.includes("'")) {
        const parts = line.split("'");
        let inSentence = false;
        let newLine = "";
        let j = 0;
        
        for (let k = 0; k < parts.length; k++) {
            if (parts[k].includes("sentence: ")) {
                inSentence = true;
                newLine += parts[k] + '"';
            } else if (inSentence && k < parts.length - 1) {
                if (parts[k + 1].includes(", translation:")) {
                    newLine += parts[k] + "'";
                    inSentence = false;
                } else {
                    newLine += parts[k] + "'";
                }
            } else {
                newLine += parts[k] + (k < parts.length - 1 ? "'" : "");
            }
        }
        
        line = line.replace(/sentence: '([^']*(?:'[^']*)*)'/, (match, content) => {
            return `sentence: "${content}"`;
        });
    }
    
    fixedLines.push(line);
}

fs.writeFileSync('word-data.js', fixedLines.join('\n'), 'utf8');
console.log('修复完成');
