#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成交流对话分类的HTML表格行和Sitemap链接
"""

import re
import json
from datetime import datetime

def read_word_data():
    """从word-data.js读取conversations数据"""
    with open('word-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到conversations数组
    pattern = r"conversations:\s*\[(.*?)\]\s*};"
    match = re.search(pattern, content, re.DOTALL)
    
    if not match:
        print("未找到conversations数据")
        return []
    
    # 提取数组内容
    array_content = match.group(1)
    
    # 解析JSON对象
    words = []
    # 匹配每个单词对象
    word_pattern = r'\{\s*word:\s*["\']([^"\']+)["\'].*?phonetic:\s*["\']([^"\']*)["\'].*?homophone:\s*["\']([^"\']*)["\'].*?meaning:\s*["\']([^"\']*)["\'].*?sentence:\s*["\']([^"\']*)["\'].*?translation:\s*["\']([^"\']*)["\'].*?homophoneSentence:\s*["\']([^"\']*)["\'].*?\}'
    
    for match in re.finditer(word_pattern, array_content, re.DOTALL):
        word = {
            'word': match.group(1),
            'phonetic': match.group(2),
            'homophone': match.group(3),
            'meaning': match.group(4),
            'sentence': match.group(5),
            'translation': match.group(6),
            'homophoneSentence': match.group(7)
        }
        words.append(word)
    
    return words

def generate_html_rows(words):
    """生成HTML表格行"""
    rows = []
    for word in words:
        # 清理单词，移除特殊字符用于onclick
        clean_word = re.sub(r'[^\w\s]', '', word['word']).replace(' ', '')
        
        row = f"""<tr><td><button class="sound-btn" onclick="playSound('{clean_word}')">{word['word']}</button></td><td>{word['phonetic']}</td><td>{word['homophone']}</td><td>{word['meaning']}</td><td>{word['sentence']} → 【{word['translation']}】→ {word['homophoneSentence']}</td></tr>"""
        rows.append(row)
    
    return '\n'.join(rows)

def generate_sitemap_entries(words):
    """生成sitemap.xml条目"""
    today = datetime.now().strftime('%Y-%m-%d')
    entries = []
    
    # 添加分类页面
    entries.append(f"""  <url>
    <loc>https://mzc0603.xyz/category/conversations</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>""")
    
    # 计算分页（每页50个单词）
    total_pages = (len(words) + 49) // 50
    for page in range(2, total_pages + 1):
        entries.append(f"""  <url>
    <loc>https://mzc0603.xyz/category/conversations?page={page}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>""")
    
    # 添加单词详情页
    for word in words:
        clean_word = word['word'].replace(' ', '-').lower()
        clean_word = re.sub(r'[^\w\-]', '', clean_word)
        entries.append(f"""  <url>
    <loc>https://mzc0603.xyz/word/{clean_word}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>""")
    
    return '\n'.join(entries)

def main():
    print("正在读取word-data.js...")
    words = read_word_data()
    print(f"找到 {len(words)} 个交流对话单词")
    
    if not words:
        return
    
    # 生成HTML表格行
    print("生成HTML表格行...")
    html_rows = generate_html_rows(words)
    with open('conversations_table_rows.html', 'w', encoding='utf-8') as f:
        f.write(html_rows)
    print("HTML表格行已保存到 conversations_table_rows.html")
    
    # 生成Sitemap条目
    print("生成Sitemap条目...")
    sitemap_entries = generate_sitemap_entries(words)
    with open('conversations_sitemap_entries.xml', 'w', encoding='utf-8') as f:
        f.write(sitemap_entries)
    print("Sitemap条目已保存到 conversations_sitemap_entries.xml")
    
    print("\n完成！")
    print(f"- 单词总数: {len(words)}")
    print(f"- HTML行数: {len(words)}")
    print(f"- Sitemap条目数: {len(words) + (len(words) + 49) // 50}")

if __name__ == '__main__':
    main()
