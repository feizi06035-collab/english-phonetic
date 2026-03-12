// 修复搜索功能，直接从wordDatabase读取数据
function searchWordsFixed() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    const resultsContent = document.getElementById('searchResultsContent');
    const resultsCount = document.getElementById('searchResultsCount');
    
    clearHighlights();
    clearSearchResults();
    
    if (!query) {
        return;
    }
    
    // 显示所有分类
    document.querySelectorAll('.word-category').forEach(section => {
        section.classList.add('active');
    });
    
    const matchedWords = [];
    
    // 直接从wordDatabase搜索
    if (typeof wordDatabase !== 'undefined') {
        Object.keys(wordDatabase).forEach(category => {
            wordDatabase[category].forEach(wordItem => {
                const match = wordItem.word.toLowerCase().includes(query) ||
                              wordItem.homophone.toLowerCase().includes(query) ||
                              wordItem.meaning.toLowerCase().includes(query);
                
                if (match) {
                    matchedWords.push({
                        word: wordItem.word,
                        phonetic: wordItem.phonetic,
                        homophone: wordItem.homophone,
                        meaning: wordItem.meaning,
                        category: category,
                        categoryName: categoryNames[category] || category
                    });
                }
            });
        });
    } else {
        //  fallback: 使用现有的allWordsData
        allWordsData.forEach(data => {
            const match = data.word.toLowerCase().includes(query) ||
                          data.homophone.toLowerCase().includes(query) ||
                          data.meaning.toLowerCase().includes(query);
            
            if (match) {
                matchedWords.push(data);
            }
        });
    }
    
    if (matchedWords.length > 0) {
        // 显示搜索结果
        resultsDiv.style.display = 'block';
        resultsCount.textContent = `找到 ${matchedWords.length} 个结果`;
        
        resultsContent.innerHTML = matchedWords.map(data => {
            // 高亮匹配的搜索词
            const highlightedWord = highlightMatch(data.word, query);
            const highlightedHomophone = highlightMatch(data.homophone, query);
            const highlightedMeaning = highlightMatch(data.meaning, query);
            
            return `
            <div class="search-result-item" onclick="goToWord('${data.category}', '${data.word}')">
                <div>
                    <span class="search-result-word">${highlightedWord}</span>
                    <span class="search-result-phonetic">${data.phonetic}</span>
                </div>
                <div class="search-result-homophone">谐音：${highlightedHomophone}</div>
                <div class="search-result-meaning">释义：${highlightedMeaning}</div>
                <span class="search-result-category">${data.categoryName}</span>
            </div>
        `}).join('');
    } else {
        // 未找到，显示提交按钮
        resultsDiv.style.display = 'block';
        resultsCount.textContent = '未找到结果';
        resultsContent.innerHTML = `
            <div class="no-results">
                <p>未找到包含 "${searchInput.value}" 的单词</p>
                <button onclick="submitSearchWordDirectly('${searchInput.value}')" class="submit-word-btn">提交"${searchInput.value}"到后台</button>
            </div>
        `;
    }
}

// 替换原有的searchWords函数
if (typeof searchWords !== 'undefined') {
    window.searchWords = searchWordsFixed;
    console.log('搜索功能已修复，现在直接从wordDatabase读取数据');
}