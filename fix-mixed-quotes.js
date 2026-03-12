const fs = require('fs');

let data = fs.readFileSync('word-data.js', 'utf8');

// Fix the pattern: sentence: "xxx\', translation: "xxx'
// This pattern has:
// - sentence starts with " and ends with \'
// - translation starts with " and ends with '

// First, let's find all such patterns and fix them
const lines = data.split('\n');
const fixedLines = lines.map(line => {
    // Check if line has the broken pattern
    if (line.includes('sentence: "') && line.includes("\\', translation: \"")) {
        // Fix the pattern
        // sentence: "Don\'t panic!\', translation: "不要恐慌！'
        // Should become:
        // sentence: "Don't panic!", translation: '不要恐慌！'
        
        // Replace \', translation: " with ", translation: '
        line = line.replace(/\\', translation: "/g, "', translation: '");
        
        // Now we need to find where sentence ends and fix it
        // The pattern is now: sentence: "xxx', translation: 'xxx'
        // We need to find the sentence content and properly quote it
        
        const sentenceMatch = line.match(/sentence: "([^"]*?)'/);
        if (sentenceMatch) {
            const sentenceContent = sentenceMatch[1];
            // Check if sentence content has apostrophes (contractions)
            if (sentenceContent.includes("'")) {
                // Use double quotes with escaped apostrophes
                const escaped = sentenceContent.replace(/'/g, "\\'");
                line = line.replace(/sentence: "([^"]*?)'/, 'sentence: "' + escaped + '"');
            } else {
                // Use single quotes
                line = line.replace(/sentence: "([^"]*?)'/, "sentence: '" + sentenceContent + "'");
            }
        }
    }
    return line;
});

data = fixedLines.join('\n');

fs.writeFileSync('word-data.js', data, 'utf8');
console.log('Fixed mixed quote patterns');
