const fs = require('fs');
const path = require('path');

// 分析index.html文件
function analyzeIndexHtml() {
    const indexPath = path.join(__dirname, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf8');
    
    console.log('=== index.html SEO分析 ===');
    
    // 检查标题
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
        const title = titleMatch[1].trim();
        console.log(`✓ 标题: ${title}`);
        console.log(`  长度: ${title.length} 字符`);
        if (title.length > 60) {
            console.log('  ⚠ 标题长度超过60字符，可能被搜索引擎截断');
        }
    } else {
        console.log('✗ 缺少标题标签');
    }
    
    // 检查描述
    const descMatch = content.match(/<meta name="description" content="([^"]*)"/i);
    if (descMatch) {
        const description = descMatch[1].trim();
        console.log(`✓ 描述: ${description}`);
        console.log(`  长度: ${description.length} 字符`);
        if (description.length > 160) {
            console.log('  ⚠ 描述长度超过160字符，可能被搜索引擎截断');
        }
    } else {
        console.log('✗ 缺少描述标签');
    }
    
    // 检查关键词
    const keywordsMatch = content.match(/<meta name="keywords" content="([^"]*)"/i);
    if (keywordsMatch) {
        const keywords = keywordsMatch[1].trim();
        console.log(`✓ 关键词: ${keywords}`);
        const keywordCount = keywords.split(',').length;
        console.log(`  关键词数量: ${keywordCount}`);
        if (keywordCount > 10) {
            console.log('  ⚠ 关键词数量超过10个，可能被视为关键词堆砌');
        }
    } else {
        console.log('✗ 缺少关键词标签');
    }
    
    // 检查结构化数据
    const schemaMatch = content.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i);
    if (schemaMatch) {
        console.log('✓ 包含结构化数据 (Schema.org)');
    } else {
        console.log('✗ 缺少结构化数据');
    }
    
    // 检查H1标签
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (h1Match) {
        console.log(`✓ H1标签: ${h1Match[1].trim()}`);
    } else {
        console.log('✗ 缺少H1标签');
    }
    
    // 检查响应式设计
    const viewportMatch = content.match(/<meta name="viewport" content="(.*?)"\s*\/>/i);
    if (viewportMatch) {
        console.log('✓ 响应式设计标签');
    } else {
        console.log('✗ 缺少响应式设计标签');
    }
    
    // 检查图片alt属性
    const imgTags = content.match(/<img[^>]*>/gi);
    if (imgTags) {
        let altCount = 0;
        imgTags.forEach(img => {
            if (img.includes('alt=')) {
                altCount++;
            }
        });
        console.log(`✓ 图片标签数量: ${imgTags.length}`);
        console.log(`✓ 包含alt属性的图片: ${altCount}`);
        if (altCount < imgTags.length) {
            console.log('  ⚠ 部分图片缺少alt属性');
        }
    }
}

// 分析sitemap.xml文件
function analyzeSitemap() {
    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
        const content = fs.readFileSync(sitemapPath, 'utf8');
        console.log('\n=== sitemap.xml SEO分析 ===');
        
        // 计算URL数量
        const urlMatches = content.match(/<url>/g);
        if (urlMatches) {
            console.log(`✓ URL数量: ${urlMatches.length}`);
        } else {
            console.log('✗ 未找到URL条目');
        }
        
        // 检查是否包含主页
        if (content.includes('https://english-phonetic.top/')) {
            console.log('✓ 包含主页URL');
        } else {
            console.log('✗ 缺少主页URL');
        }
        
        // 检查lastmod日期
        const lastmodMatches = content.match(/<lastmod>(.*?)<\/lastmod>/g);
        if (lastmodMatches) {
            console.log('✓ 包含lastmod日期');
        } else {
            console.log('✗ 缺少lastmod日期');
        }
    } else {
        console.log('\n=== sitemap.xml SEO分析 ===');
        console.log('✗ sitemap.xml文件不存在');
    }
}

// 分析robots.txt文件
function analyzeRobots() {
    const robotsPath = path.join(__dirname, 'robots.txt');
    if (fs.existsSync(robotsPath)) {
        const content = fs.readFileSync(robotsPath, 'utf8');
        console.log('\n=== robots.txt SEO分析 ===');
        console.log('✓ robots.txt文件存在');
        console.log('  内容:');
        console.log(content);
    } else {
        console.log('\n=== robots.txt SEO分析 ===');
        console.log('✗ robots.txt文件不存在');
    }
}

// 分析网站结构
function analyzeSiteStructure() {
    console.log('\n=== 网站结构SEO分析 ===');
    
    // 检查文件数量
    const files = fs.readdirSync(__dirname);
    console.log(`✓ 根目录文件数量: ${files.length}`);
    
    // 检查是否有404页面
    if (fs.existsSync(path.join(__dirname, '404.html'))) {
        console.log('✓ 404.html页面存在');
    } else {
        console.log('✗ 缺少404.html页面');
    }
    
    // 检查是否有favicon
    const faviconExtensions = ['.ico', '.png', '.svg'];
    let faviconFound = false;
    for (const ext of faviconExtensions) {
        if (fs.existsSync(path.join(__dirname, `favicon${ext}`))) {
            faviconFound = true;
            break;
        }
    }
    if (faviconFound) {
        console.log('✓ Favicon存在');
    } else {
        console.log('✗ 缺少Favicon');
    }
}

// 生成SEO优化建议
function generateSuggestions() {
    console.log('\n=== SEO优化建议 ===');
    console.log('1. 内容优化:');
    console.log('   - 确保每个页面有唯一的标题和描述');
    console.log('   - 增加高质量的原创内容');
    console.log('   - 优化关键词密度，避免关键词堆砌');
    console.log('   - 为所有图片添加alt属性');
    
    console.log('\n2. 技术优化:');
    console.log('   - 确保网站加载速度快');
    console.log('   - 实现HTTPS');
    console.log('   - 优化移动设备兼容性');
    console.log('   - 修复404错误');
    
    console.log('\n3. 结构优化:');
    console.log('   - 完善sitemap.xml，确保所有重要页面都被索引');
    console.log('   - 优化robots.txt配置');
    console.log('   - 实现面包屑导航');
    console.log('   - 优化URL结构，使用友好的URL');
    
    console.log('\n4. 外部优化:');
    console.log('   - 建立高质量的外部链接');
    console.log('   - 提交网站到搜索引擎');
    console.log('   - 利用社交媒体推广');
    console.log('   - 监控网站分析数据');
}

// 运行分析
console.log('开始SEO分析...\n');
analyzeIndexHtml();
analyzeSitemap();
analyzeRobots();
analyzeSiteStructure();
generateSuggestions();
console.log('\nSEO分析完成！');
