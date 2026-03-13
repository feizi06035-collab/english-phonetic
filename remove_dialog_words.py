#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
删除包含"对话词"的单词条目
"""

import re

def remove_dialog_words():
    print('读取 word-data.js 文件...')
    with open('word-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print('查找并删除包含"对话词"的单词条目...')
    
    # 统计原始单词数量
    original_count = content.count('word:')
    print(f'原始单词数量: {original_count}')
    
    # 删除包含"对话词"的单词条目
    # 匹配模式: 包含"对话词"的完整单词对象
    pattern = r'\{\s*word:\s*[\'"][^\'"]*[\'"],\s*phonetic:\s*[\'"][^\'"]*[\'"],\s*homophone:\s*[\'"][^\'"]*对话词[^\'"]*[\'"],\s*meaning:\s*[\'"][^\'"]*[\'"],\s*sentence:\s*[\'"][^\'"]*[\'"],\s*translation:\s*[\'"][^\'"]*[\'"],\s*homophoneSentence:\s*[\'"][^\'"]*[\'"]\s*\},?'
    
    # 使用更简单的方法：按行处理
    lines = content.split('\n')
    new_lines = []
    removed_count = 0
    skip_next = False
    
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
        
        # 检查是否包含"对话词"
        if '对话词' in line:
            removed_count += 1
            # 如果这行以逗号结尾，跳过；否则检查下一行
            if not line.rstrip().endswith(','):
                skip_next = True
        else:
            new_lines.append(line)
    
    print(f'删除了 {removed_count} 个包含"对话词"的单词条目')
    
    # 写入更新后的文件
    print('写入更新后的文件...')
    with open('word-data.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    
    # 统计新单词数量
    new_content = '\n'.join(new_lines)
    new_count = new_content.count('word:')
    print(f'新单词数量: {new_count}')
    print(f'✅ 完成！成功删除 {removed_count} 个包含"对话词"的单词')

if __name__ == '__main__':
    remove_dialog_words()
