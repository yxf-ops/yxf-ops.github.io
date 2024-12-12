---
slug: template
date: 2024-12-10
title: template
tags: [tag1, tag2]
keywords: ["template"]
---

# template

## 确认具有操作GitHub仓库权限

### 注册github账号

### 添加SSH密钥（不使用git可不操作）

```bash
windows + R --> 输入powershell

## powershell中生成密钥
ssh-keygen -t rsa -C "你的邮箱"
PS C:\Users\11191> ssh-keygen -t rsa -C "sszx24@zhejianglab.org"
## 复制公钥
PS C:\Users\11191> cat .\.ssh\id_rsa.pub
ssh-rsa ...
...
sszx24@zhejianglab.org
## 添加公钥
点击头像 --> Setting --> SSH keys and GPG keys --> New SSH key --> Title --> Key（公钥） --> Add SSH key 
```

### 成为Collaborators

```bash
仓库(lab-zhejiang.github.io) --> Settings --> Collaborators --> Add people --> 用户名
如还未成为Collaborators请与叶晓芳联系
```

## 上传文件到github

```bash
## 创建文件夹命名为 年-月-日-文档名称（遵守kebab-case规则）
## 下载模板到该文件夹中
仓库(lab-zhejiang.github.io) --> blog --> 2024-12-11-template --> index.md --> 下载
```
[](./下载模板示例.png)
[](https://github.com/yxf-ops/yxf-ops.github.io/blob/main/blog/2024-12-11-template/%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E7%A4%BA%E4%BE%8B.png)

```bash
## 编辑下载的文件
# 修改文件的元数据
slug: template     # 用于定义页面的URL路径
date: 2024-12-10   # 标明发布时间
title: template    # 导航侧栏标题
tags: [tag1, tag2] # 用户可以点击这些标签来浏览其他具有相同标签的文章
keywords: ["Test"] # 定文档或博客文章的元数据关键词，关键词主要用于SEO（搜索引擎优化）

# 删除分割线下方内容并改为所要上传的文档内容

# 上传相关图片至文件夹中，并修改文档中图片的路径为./图片名称

## 上传文件夹
仓库(lab-zhejiang.github.io) --> blog --> Add file --> Upload files --> Create a new branch for this commit and start a pull request. --> Propose changes
```

[](./上传文件示例.png)

## 通知管理员审批上传文件的请求

