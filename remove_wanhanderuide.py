#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
删除包含"万汉德瑞德安德奈恩踢图"的单词条目
"""

def remove_words():
    print('读取 word-data.js 文件...')
    with open('word-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print('查找并删除包含"万汉德瑞德安德奈恩踢图"的单词条目...')
    
    # 统计原始单词数量
    original_count = content.count('word:')
    print(f'原始单词数量: {original_count}')
    
    # 按行处理
    lines = content.split('\n')
    new_lines = []
    removed_count = 0
    
    for line in lines:
        # 检查是否包含"万汉德瑞德安德奈恩踢图"
        if '万汉德瑞德安德奈恩踢图' in line:
            removed_count += 1
        else:
            new_lines.append(line)
    
    print(f'删除了 {removed_count} 个包含"万汉德瑞德安德奈恩踢图"的单词条目')
    
    # 写入更新后的文件
    print('写入更新后的文件...')
    with open('word-data.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    
    # 统计新单词数量
    new_content = '\n'.join(new_lines)
    new_count = new_content.count('word:')
    print(f'新单词数量: {new_count}')
    print(f'✅ 完成！成功删除 {removed_count} 个包含"万汉德瑞德安德奈恩踢图"的单词')

if __name__ == '__main__':
    remove_words()
