"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[2184],{9859:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"template","metadata":{"permalink":"/zh-cn/blog/template","editUrl":"https://github.com/ByConity/byconity.github.io/tree/main/blog/2024-12-11-template/index.md","source":"@site/blog/2024-12-11-template/index.md","title":"template","description":"\u786e\u8ba4\u5177\u6709\u64cd\u4f5cGitHub\u4ed3\u5e93\u6743\u9650","date":"2024-12-10T00:00:00.000Z","formattedDate":"2024\u5e7412\u670810\u65e5","tags":[{"label":"tag1","permalink":"/zh-cn/blog/tags/tag-1"},{"label":"tag2","permalink":"/zh-cn/blog/tags/tag-2"}],"readingTime":2.025,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"template","date":"2024-12-10T00:00:00.000Z","title":"template","tags":["tag1","tag2"],"keywords":["template"]}},"content":"## \u786e\u8ba4\u5177\u6709\u64cd\u4f5cGitHub\u4ed3\u5e93\u6743\u9650\\r\\n\\r\\n### \u6ce8\u518cgithub\u8d26\u53f7\\r\\n\\r\\n### \u6dfb\u52a0SSH\u5bc6\u94a5\uff08\u4e0d\u4f7f\u7528git\u53ef\u4e0d\u64cd\u4f5c\uff09\\r\\n\\r\\n```bash\\r\\nwindows + R --\x3e \u8f93\u5165powershell\\r\\n\\r\\n## powershell\u4e2d\u751f\u6210\u5bc6\u94a5\\r\\nssh-keygen -t rsa -C \\"\u4f60\u7684\u90ae\u7bb1\\"\\r\\nPS C:\\\\Users\\\\11191> ssh-keygen -t rsa -C \\"sszx24@zhejianglab.org\\"\\r\\n## \u590d\u5236\u516c\u94a5\\r\\nPS C:\\\\Users\\\\11191> cat .\\\\.ssh\\\\id_rsa.pub\\r\\nssh-rsa ...\\r\\n...\\r\\nsszx24@zhejianglab.org\\r\\n## \u6dfb\u52a0\u516c\u94a5\\r\\n\u70b9\u51fb\u5934\u50cf --\x3e Setting --\x3e SSH keys and GPG keys --\x3e New SSH key --\x3e Title --\x3e Key\uff08\u516c\u94a5\uff09 --\x3e Add SSH key \\r\\n```\\r\\n\\r\\n### \u6210\u4e3aCollaborators\\r\\n\\r\\n```bash\\r\\n\u4ed3\u5e93(lab-zhejiang.github.io) --\x3e Settings --\x3e Collaborators --\x3e Add people --\x3e \u7528\u6237\u540d\\r\\n\u5982\u8fd8\u672a\u6210\u4e3aCollaborators\u8bf7\u4e0e\u53f6\u6653\u82b3\u8054\u7cfb\\r\\n```\\r\\n\\r\\n## \u4e0a\u4f20\u6587\u4ef6\u5230github\\r\\n\\r\\n```bash\\r\\n## \u521b\u5efa\u6587\u4ef6\u5939\u547d\u540d\u4e3a \u5e74-\u6708-\u65e5-\u6587\u6863\u540d\u79f0\uff08\u9075\u5b88kebab-case\u89c4\u5219\uff09\\r\\n## \u4e0b\u8f7d\u6a21\u677f\u5230\u8be5\u6587\u4ef6\u5939\u4e2d\\r\\n\u4ed3\u5e93(lab-zhejiang.github.io) --\x3e blog --\x3e 2024-12-11-template --\x3e index.md --\x3e \u4e0b\u8f7d\\r\\n```\\r\\n![](./\u4e0b\u8f7d\u6a21\u677f\u793a\u4f8b.png)\\r\\n\\r\\n```bash\\r\\n## \u7f16\u8f91\u4e0b\u8f7d\u7684\u6587\u4ef6\\r\\n# \u4fee\u6539\u6587\u4ef6\u7684\u5143\u6570\u636e\\r\\nslug: template     # \u7528\u4e8e\u5b9a\u4e49\u9875\u9762\u7684URL\u8def\u5f84\\r\\ndate: 2024-12-10   # \u6807\u660e\u53d1\u5e03\u65f6\u95f4\\r\\ntitle: template    # \u5bfc\u822a\u4fa7\u680f\u6807\u9898\\r\\ntags: [tag1, tag2] # \u7528\u6237\u53ef\u4ee5\u70b9\u51fb\u8fd9\u4e9b\u6807\u7b7e\u6765\u6d4f\u89c8\u5176\u4ed6\u5177\u6709\u76f8\u540c\u6807\u7b7e\u7684\u6587\u7ae0\\r\\nkeywords: [\\"Test\\"] # \u5b9a\u6587\u6863\u6216\u535a\u5ba2\u6587\u7ae0\u7684\u5143\u6570\u636e\u5173\u952e\u8bcd\uff0c\u5173\u952e\u8bcd\u4e3b\u8981\u7528\u4e8eSEO\uff08\u641c\u7d22\u5f15\u64ce\u4f18\u5316\uff09\\r\\n\\r\\n# \u5220\u9664\u5206\u5272\u7ebf\u4e0b\u65b9\u5185\u5bb9\u5e76\u6539\u4e3a\u6240\u8981\u4e0a\u4f20\u7684\u6587\u6863\u5185\u5bb9\\r\\n\\r\\n# \u4e0a\u4f20\u76f8\u5173\u56fe\u7247\u81f3\u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u4fee\u6539\u6587\u6863\u4e2d\u56fe\u7247\u7684\u8def\u5f84\u4e3a./\u56fe\u7247\u540d\u79f0\\r\\n\\r\\n## \u4e0a\u4f20\u6587\u4ef6\u5939\\r\\n\u4ed3\u5e93(lab-zhejiang.github.io) --\x3e blog --\x3e Add file --\x3e Upload files --\x3e Create a new branch for this commit and start a pull request. --\x3e Propose changes\\r\\n```\\r\\n\\r\\n![](./\u4e0a\u4f20\u6587\u4ef6\u793a\u4f8b.png)\\r\\n\\r\\n## \u901a\u77e5\u7ba1\u7406\u5458\u5ba1\u6279\u4e0a\u4f20\u6587\u4ef6\u7684\u8bf7\u6c42"}]}')}}]);