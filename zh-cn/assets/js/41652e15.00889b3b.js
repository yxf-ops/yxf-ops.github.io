"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8560],{8860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>p});var i=t(7953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),o=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=o(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),c=o(t),y=a,p=c["".concat(d,".").concat(y)]||c[y]||u[y]||s;return t?i.createElement(p,l(l({ref:n},g),{},{components:t})):i.createElement(p,l({ref:n},g))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=y;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var o=2;o<s;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=t(5890),a=(t(7953),t(8860));const s={title:"\u7d22\u5f15",sidebar_position:3,tags:["Docs"]},l="\u7d22\u5f15",r={unversionedId:"table-design/indexes",id:"table-design/indexes",title:"\u7d22\u5f15",description:"\u5168\u6587\u68c0\u7d22",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/indexes.mdx",sourceDirName:"table-design",slug:"/table-design/indexes",permalink:"/zh-cn/docs/table-design/indexes",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/table-design/indexes.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u7d22\u5f15",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"\u8868\u5f15\u64ce",permalink:"/zh-cn/docs/table-design/table-engine"},next:{title:"\u6570\u636e\u538b\u7f29",permalink:"/zh-cn/docs/table-design/data-compression"}},d={},o=[{value:"\u5168\u6587\u68c0\u7d22",id:"\u5168\u6587\u68c0\u7d22",level:2},{value:"\u7d22\u5f15\u65b9\u5f0f",id:"\u7d22\u5f15\u65b9\u5f0f",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:4},{value:"Token\u5206\u8bcd",id:"token\u5206\u8bcd",level:4},{value:"Ngram\u5206\u8bcd",id:"ngram\u5206\u8bcd",level:4},{value:"\u4e2d\u6587\u6587\u672c\u7d22\u5f15\u65b9\u5f0f",id:"\u4e2d\u6587\u6587\u672c\u7d22\u5f15\u65b9\u5f0f",level:4},{value:"\u4f7f\u7528\u4e3e\u4f8b",id:"\u4f7f\u7528\u4e3e\u4f8b",level:3},{value:"\u67e5\u8be2\u8bed\u53e5",id:"\u67e5\u8be2\u8bed\u53e5",level:3},{value:"\u8df3\u6570\u7d22\u5f15",id:"\u8df3\u6570\u7d22\u5f15",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u521b\u5efa\u8df3\u6570\u7d22\u5f15",id:"\u521b\u5efa\u8df3\u6570\u7d22\u5f15",level:3},{value:"\u8df3\u6570\u7d22\u5f15\u8bed\u6cd5\u793a\u4f8b",id:"\u8df3\u6570\u7d22\u5f15\u8bed\u6cd5\u793a\u4f8b",level:4},{value:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",id:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",level:4},{value:"\u6700\u5927\u6700\u5c0f\u503c minmax",id:"\u6700\u5927\u6700\u5c0f\u503c-minmax",level:5},{value:"\u6570\u636e\u96c6 Set",id:"\u6570\u636e\u96c6-set",level:5},{value:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7c7b\u578b Bloom filter types",id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7c7b\u578b-bloom-filter-types",level:5},{value:"\u4f7f\u7528\u4e3e\u4f8b",id:"\u4f7f\u7528\u4e3e\u4f8b-1",level:3},{value:"\u8f7d\u5165\u6570\u636e\u96c6\u5230 ByConity",id:"\u8f7d\u5165\u6570\u636e\u96c6\u5230-byconity",level:4},{value:"\u521b\u5efa\u4e0d\u5e26\u7d22\u5f15\u7684\u6570\u636e\u8868",id:"\u521b\u5efa\u4e0d\u5e26\u7d22\u5f15\u7684\u6570\u636e\u8868",level:4},{value:"\u589e\u52a0\u7d22\u5f15",id:"\u589e\u52a0\u7d22\u5f15",level:4},{value:"\u7ed9\u65b0\u8868\u589e\u52a0\u7d22\u5f15",id:"\u7ed9\u65b0\u8868\u589e\u52a0\u7d22\u5f15",level:5},{value:"\u5728\u73b0\u6709\u8868\u6dfb\u52a0\u540e\u7eed\u6570\u636e\u7d22\u5f15",id:"\u5728\u73b0\u6709\u8868\u6dfb\u52a0\u540e\u7eed\u6570\u636e\u7d22\u5f15",level:5},{value:"\u4e3a\u5386\u53f2\u6570\u636e\u589e\u52a0\u7d22\u5f15",id:"\u4e3a\u5386\u53f2\u6570\u636e\u589e\u52a0\u7d22\u5f15",level:5},{value:"\u5220\u9664\u7d22\u5f15",id:"\u5220\u9664\u7d22\u5f15",level:4},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:3}],g={toc:o},c="wrapper";function u(e){let{components:n,...s}=e;return(0,a.yg)(c,(0,i.A)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,a.yg)("h2",{id:"\u5168\u6587\u68c0\u7d22"},"\u5168\u6587\u68c0\u7d22"),(0,a.yg)("p",null,"\u5168\u6587\u68c0\u7d22\uff08\u6216\u4ec5\u6587\u672c\u641c\u7d22\uff09\u63d0\u4f9b\u4e86\u8bc6\u522b\u6ee1\u8db3\u67e5\u8be2\u7684\u81ea\u7136\u8bed\u8a00\u6587\u6863\u7684\u529f\u80fd\u3002\u6700\u5e38\u89c1\u7684\u641c\u7d22\u7c7b\u578b\u662f\u67e5\u627e\u5305\u542b\u7ed9\u5b9a\u67e5\u8be2\u8bcd\u7684\u6240\u6709\u6587\u6863\u3002\u5168\u6587\u7d22\u5f15\u5141\u8bb8\u5bf9\u6587\u6863\u8fdb\u884c\u9884\u5904\u7406\u5e76\u4fdd\u5b58\u7d22\u5f15\u4ee5\u4f9b\u4ee5\u540e\u5feb\u901f\u641c\u7d22\u3002\u6211\u4eec\u901a\u8fc7\u589e\u52a0\u6587\u672c\u5012\u6392\u7d22\u5f15\u7684\u80fd\u529b\uff0c\u6765\u652f\u6301\u66f4\u5feb\u901f\u7684\u6587\u672c\u68c0\u7d22\u548c\u8fc7\u6ee4\u7684\u65b9\u5f0f\u3002\nByConity\u652f\u6301\u901a\u8fc7 SQL \u8bed\u6cd5\u6765\u8fdb\u884c\u5168\u6587\u68c0\u7d22\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u5168\u6587\u7d22\u5f15\u5e76\u8fdb\u884c\u67e5\u8be2\u3002"),(0,a.yg)("h3",{id:"\u7d22\u5f15\u65b9\u5f0f"},"\u7d22\u5f15\u65b9\u5f0f"),(0,a.yg)("p",null,"\u76ee\u524d\u5168\u6587\u68c0\u7d22\u652f\u6301\u6839\u636e\u4e09\u79cd\u6587\u672c\u5206\u8bcd\u7d22\u5f15\u65b9\u5f0f\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8bed\u8a00Token\u5206\u8bcd\uff1aToken\u5206\u8bcd\u4ee5 \u7a7a\u683c \u548c \u6807\u70b9\u7b26\u53f7 \u8fdb\u884c\u5206\u8bcd\u5904\u7406\uff0c\u901a\u5e38\u9002\u7528\u4e8e\u82f1\u8bed\u7b49\u6709\u660e\u663e\u7684\u4ee5\u7a7a\u683c\u6807\u70b9\u5206\u8bcd\u7684\u8bed\u8a00\u79cd\u7c7b\u3002"),(0,a.yg)("li",{parentName:"ul"},"Ngram\u5206\u8bcd\uff1aNgram\u5206\u8bcd\u9047\u5230 \u6307\u5b9a\u7684\u5b57\u7b26\uff08\u5982 : \u7a7a\u767d\u3001\u6807\u70b9\uff09\u65f6\u5206\u5272\u6587\u672c\uff0c\u7136\u540e\u8fd4\u56de\u6307\u5b9a\u957f\u5ea6\u7684\u6bcf\u4e2a\u5355\u8bcd\u7684 N-grams\u3002\u901a\u5e38\u7528\u4e8e\u67e5\u8be2\u4e0d\u4f7f\u7528\u7a7a\u683c\u6216\u5177\u6709\u8f83\u957f\u590d\u5408\u8bcd\u7684\u8bed\u8a00\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4e2d\u6587\u5206\u8bcd\uff1a\u4e2d\u6587\u5206\u8bcd\u5229\u7528\u7edf\u8ba1\u6a21\u578b \u9690\u5f0f\u9a6c\u5c14\u79d1\u592b\u6a21\u578b \u6765\u5bf9\u4e2d\u6587\u8fdb\u884c\u5206\u8bcd\u3002\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u6a21\u578b\u548c\u5206\u8bcd\u8bcd\u5178\u3002")),(0,a.yg)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("h4",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,a.yg)("p",null,"\u521b\u5efa\u5168\u6587\u68c0\u7d22\u7684\u57fa\u672c\u8bed\u6cd5\u4e3e\u4f8b\u5982\u4e0b\uff0c\u6839\u636e\u7d22\u5f15\u65b9\u5f0f\u7684\u4e0d\u540c\uff0c\u6211\u4eec\u9700\u8981\u4e3ainverted()\u4e2d\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--\u5efa\u8868\u65f6\u521b\u5efa\u7d22\u5f15\nCREATE TABLE tab\n(\n    `key` UInt64,\n    `str` String,\n    INDEX inv_idx(str) TYPE inverted(0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY key\nSETTINGS index_granularity = 1024;\n\n--\u52a0\u5165\u5168\u6587\u7d22\u5f15\nALTER TABLE  {table_name} ADD INDEX {index_name} {column_to_index} TYPE {index_type_and_arguments} GRANULARITY {index_granularity};\n\n--\u52a0\u5165\u7269\u5316\u7d22\u5f15\nALTER TABLE {table_name}  MATERIALIZE INDEX {index_name};\n\n-- \u5220\u9664\u7d22\u5f15\nALTER TABLE  {table_name} DROP INDEX {index_name};\nALTER TABLE  {table_name} CLEAR INDEX {index_name};\n")),(0,a.yg)("h4",{id:"token\u5206\u8bcd"},"Token\u5206\u8bcd"),(0,a.yg)("p",null,"\u8bbe\u7f6einverted(0)\u6216\u8005inverted()\u65f6\uff0c\u5206\u8bcd\u5668\u5c06\u8bbe\u7f6e\u4e3a\u201ctokens\u201d\uff0c\u5373\u6cbf\u7a7a\u683c\u5206\u5272\u5b57\u7b26\u4e32\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_inverted_with_token\n(\n    `key` UInt64,\n    `doc` String,\n    -- low(doc) \u53ea\u5c06 \u82f1\u6587\u5b57\u6bcd \u8f6c\u6362\u4e3a \u5c0f\u5199\u540e\u8fdb\u884c\u6587\u672c\u5904\u7406 --\n    -- \u5728\u4e0d\u7279\u6b8a\u6307\u5b9a\u65f6\u9ed8\u8ba4\u91c7\u7528 Token \u8fdb\u884c\u5206\u8bcd --\n    INDEX doc_idx lower(doc) TYPE inverted GRANULARITY 1 \n)\nENGINE = CnchMergeTree()\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h4",{id:"ngram\u5206\u8bcd"},"Ngram\u5206\u8bcd"),(0,a.yg)("p",null,"\u8bbe\u7f6e\u4e3ainverted(N) \u65f6\uff0c\u5373\u662f\u4f7f\u7528 N-gram \u5206\u8bcd\u5668\uff0c\u8303\u56f4\u4e3a","[ 2 , 8 ]","\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_inverted_with_ngram\n(\n    `key` UInt64,\n    `doc` String,\n    -- low(doc) \u53ea\u5c06 \u82f1\u6587\u5b57\u6bcd \u8f6c\u6362\u4e3a \u5c0f\u5199\u540e\u8fdb\u884c\u6587\u672c\u5904\u7406 --\n    -- \u6307\u5b9a\u6570\u5b57 N \u4ee3\u8868\u91c7\u7528 N-gram \u5bf9\u6587\u672c\u5206\u8bcd --\n    INDEX doc_idx lower(doc) TYPE inverted(4) GRANULARITY 1\n)\nENGINE = CnchMergeTree()\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h4",{id:"\u4e2d\u6587\u6587\u672c\u7d22\u5f15\u65b9\u5f0f"},"\u4e2d\u6587\u6587\u672c\u7d22\u5f15\u65b9\u5f0f"),(0,a.yg)("p",null,"ByConity \u53ef\u4ee5\u901a\u8fc7\u9ed8\u8ba4\u914d\u7f6e\u7684\u8bcd\u5e93\u8fdb\u884c\u4e2d\u6587\u6587\u672c\u7d22\u5f15\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_gin.ch_docs\n(\n    `key` UInt64,\n    `doc` String,\n    -- token_chinese_default \u4ee3\u8868\u4f7f\u7528token_chinese_default\u5206\u8bcd\u5668--\n    -- default \u4ee3\u8868\u4f7f\u7528default\u914d\u7f6e --\n    -- \u4ee3\u8868\u5206\u8bcd\u5bc6\u5ea6\u8303\u56f4\u662f \u8303\u56f4\u662f\uff080 - 1.0]\uff0c\u4f1a\u5bf9\u9891\u7387\u9ad8\u7684\u5206\u8bcd\u5ffd\u7565\u5904\u7406--\n    INDEX inv_idx doc TYPE inverted('token_chinese_default', 'default'\uff0c1.0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h3",{id:"\u4f7f\u7528\u4e3e\u4f8b"},"\u4f7f\u7528\u4e3e\u4f8b"),(0,a.yg)("p",null,"\u6570\u636e\u5e93\u4e2d\u5305\u542b\u67d0\u4e2d\u6587\u4f5c\u54c1\u6570\u636e\uff0c\u901a\u8fc7 ngram + \u4e2d\u6587\u5206\u8bcd \u7684\u65b9\u5f0f\u5efa\u8868\u5bfc\u5165\u6d4b\u8bd5\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- \u539f\u8868\nCREATE TABLE test_gin.ch_docs\n(\n    `row` UInt64,\n    `doc` String\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\ninsert into test_gin.ch_docs format CSVWithNames infile '/home/caichangheng/some1.csv';\n0 rows in set. Elapsed: 0.944 sec. Processed 50.23 thousand rows, 7.65 MB (53.20 thousand rows/s., 8.11 MB/s.)\n\n--\u4e2d\u6587\u5206\u8bcd\u8868\n\nCREATE TABLE test_gin.ch_docs_ch\n(\n    `row` UInt64,\n    `doc` String,\n    INDEX inv_idx doc TYPE inverted('token_chinese_default', 'default', 1.0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\ninsert into test_gin.ch_docs_ch format CSVWithNames infile '/home/caichangheng/some1.csv';\n0 rows in set. Elapsed: 41.191 sec. Processed 50.23 thousand rows, 7.65 MB (1.22 thousand rows/s., 185.81 KB/s.)\n\n-- 2-gram \u5206\u8bcd\u8868\n\nCREATE TABLE test_gin.ch_docs_ngram\n(\n    `row` UInt64,\n    `doc` String,\n    INDEX inv_idx doc TYPE inverted(2) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\ninsert into test_gin.ch_docs_ngram format CSVWithNames infile '/home/caichangheng/some1.csv';\n0 rows in set. Elapsed: 17.109 sec. Processed 50.23 thousand rows, 7.65 MB (2.94 thousand rows/s., 447.34 KB/s.)\n")),(0,a.yg)("p",null,"\u67e5\u8be2\u8bed\u53e5\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select count() from test_gin.ch_docs where doc like '%\u5c71\u4e1c%'; \nselect count() from test_gin.ch_docs_ch where doc like '%\u5c71\u4e1c%'; \nselect count() from test_gin.ch_docs_ngram where doc like '%\u5c71\u4e1c%'; \n\nselect count() from test_gin.ch_docs where doc like '%\u6ea5\u4eea%'; \nselect count() from test_gin.ch_docs_ch where doc like '%\u6ea5\u4eea%';\nselect count() from test_gin.ch_docs_ngram where doc like '%\u6ea5\u4eea%';\n")),(0,a.yg)("h3",{id:"\u67e5\u8be2\u8bed\u53e5"},"\u67e5\u8be2\u8bed\u53e5"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(5182).A,width:"570",height:"727"})),(0,a.yg)("h2",{id:"\u8df3\u6570\u7d22\u5f15"},"\u8df3\u6570\u7d22\u5f15"),(0,a.yg)("p",null,"\u5f53\u5c1d\u8bd5\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\uff0c\u67e5\u8be2\u6027\u80fd\u53ef\u80fd\u4f1a\u6076\u5316\uff0c\u56e0\u4e3a\u53ef\u80fd\u9700\u8981\u5bf9\u6bcf\u4e2a\u5217\u503c\u8fdb\u884c\u5b8c\u6574\u626b\u63cf\u624d\u80fd\u5e94\u7528 WHERE \u5b50\u53e5\u6761\u4ef6\u3002"),(0,a.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cByConity \u652f\u6301\u8df3\u6570\u7d22\u5f15\uff08Data Skipping Index\uff09\uff0c\u4f7f\u4eba\u4eec\u80fd\u591f\u8df3\u8fc7\u4e00\u4e9b\u786e\u8ba4\u6ca1\u6709\u5339\u914d\u503c\u7684\u91cd\u8981\u6570\u636e\u5757\u3002"),(0,a.yg)("h3",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.yg)("p",null,"\u6682\u4e0d\u652f\u6301\u7d22\u5f15\u7c7b\u578b:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"bloom_filter \u7d22\u5f15\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u4e3a\u7a7a\u6570\u636e\u7c7b\u578b\u7684\u7d22\u5f15\u3002")),(0,a.yg)("h3",{id:"\u521b\u5efa\u8df3\u6570\u7d22\u5f15"},"\u521b\u5efa\u8df3\u6570\u7d22\u5f15"),(0,a.yg)("p",null,"\u7528\u6237\u53ea\u80fd\u5728 MergeTree \u8868\u7cfb\u5217\u4e0a\u5e94\u7528\u6570\u636e\u8df3\u6570\u7d22\u5f15\u3002 \u8fd9\u4e9b\u7d22\u5f15\u6d89\u53ca\u56db\u4e2a\u4e3b\u8981\u53c2\u6570\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u7d22\u5f15\u540d\u79f0 : "),"\u7528\u4f5c\u521b\u5efa\u7d22\u5f15\u6587\u4ef6\u7684\u6807\u8bc6\u7b26\u3002 \u5b83\u662f\u5220\u9664\u6216\u5177\u4f53\u5316materializing\u7d22\u5f15\u7b49\u64cd\u4f5c\u7684\u5fc5\u8981\u53c2\u6570\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u7d22\u5f15\u8868\u8fbe\u5f0f : \u7d22\u5f15\u8868\u8fbe\u5f0f\u662f\u7528\u4e8e\u8ba1\u7b97\u548c\u786e\u5b9a\u7d22\u5f15\u4e2d\u5b58\u50a8\u7684\u503c\u8303\u56f4\u7684\u516c\u5f0f\u3002 \u5b83\u53ef\u4ee5\u5305\u542b\u5217\u3001\u57fa\u672c\u8fd0\u7b97\u7b26\u548c\u7d22\u5f15\u7c7b\u578b\u6307\u5b9a\u7684\u51fd\u6570\u7684\u6307\u5b9a\u5b50\u96c6\u7684\u7ec4\u5408\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u7c7b\u578b : \u7d22\u5f15\u7684\u7c7b\u578b\u5b9a\u4e49\u4e86\u80fd\u591f\u8df3\u8fc7\u8bfb\u53d6\u548c\u8bc4\u4f30\u6bcf\u4e2a\u7d22\u5f15\u5757\u7684\u8ba1\u7b97\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u7c92\u5ea6 : "),"\u6bcf\u4e2a\u7d22\u5f15\u5757\u90fd\u7531\u5b9a\u4e49\u6570\u91cf\u7684\u9897\u7c92\u7ec4\u6210\uff0c\u7531\u7c92\u5ea6\u53c2\u6570\u51b3\u5b9a\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u4e3b\u8868\u7d22\u5f15\u7684\u7c92\u5ea6\u4e3a 8192 \u884c\uff0c\u5e76\u4e14\u7d22\u5f15\u7c92\u5ea6\u8bbe\u7f6e\u4e3a 4\uff0c\u5219\u6bcf\u4e2a\u7d22\u5f15\u201c\u5757\u201d\u5c06\u5305\u542b 32,768 \u884c\uff088192 \u884c x 4 \u7c92\u5ea6\uff09\u3002")),(0,a.yg)("h4",{id:"\u8df3\u6570\u7d22\u5f15\u8bed\u6cd5\u793a\u4f8b"},"\u8df3\u6570\u7d22\u5f15\u8bed\u6cd5\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"/*\nIndex Name: key_i_idx\nIndex expression: key_i\nType: minmax\nGranularity: 1\n*/\nINDEX key_i_idx key_i TYPE minmax GRANULARITY 1, \n")),(0,a.yg)("h4",{id:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"),(0,a.yg)("h5",{id:"\u6700\u5927\u6700\u5c0f\u503c-minmax"},"\u6700\u5927\u6700\u5c0f\u503c minmax"),(0,a.yg)("p",null,"\u8fd9\u79cd\u9ad8\u6548\u7684\u7d22\u5f15\u65b9\u6cd5\u65e0\u9700\u4efb\u4f55\u7279\u5b9a\u53c2\u6570\u5373\u53ef\u8fd0\u884c\u3002 \u5b83\u4fdd\u7559\u6bcf\u4e2a\u5757\u7684\u7d22\u5f15\u8868\u8fbe\u5f0f\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002 \u5bf9\u4e8e\u5143\u7ec4\u8868\u8fbe\u5f0f\uff0c\u5b83\u5355\u72ec\u4fdd\u7559\u5143\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684\u672b\u7aef\u3002 \u5bf9\u4e8e\u503e\u5411\u4e8e\u5bf9\u503c\u8fdb\u884c\u677e\u6563\u6392\u5e8f\u7684\u5217\u6765\u8bf4\uff0c\u5b83\u662f\u6700\u6709\u6548\u7684\u3002 \u5728\u5404\u79cd\u7d22\u5f15\u7c7b\u578b\u4e2d\uff0c\u8fd9\u79cd\u7d22\u5f15\u7c7b\u578b\u901a\u5e38\u662f\u67e5\u8be2\u6267\u884c\u671f\u95f4\u6700\u5177\u6210\u672c\u6548\u76ca\u7684\u3002 \u4f46\u662f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u7d22\u5f15\u4ec5\u9002\u7528\u4e8e\u6807\u91cf\u6216\u5143\u7ec4\u8868\u8fbe\u5f0f\uff0c\u4e0d\u80fd\u4e0e\u751f\u6210\u6570\u7ec4\u6216\u6620\u5c04\u6570\u636e\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.yg)("h5",{id:"\u6570\u636e\u96c6-set"},"\u6570\u636e\u96c6 Set"),(0,a.yg)("p",null,"\u8fd9\u79cd\u8f7b\u91cf\u7ea7\u7d22\u5f15\u7c7b\u578b\u5141\u8bb8\u4f7f\u7528\u5355\u4e2a\u53c2\u6570max_size\uff0c\u5373\u6bcf\u4e2a\u5757\u8bbe\u7f6e\u7684\u503c\u96c6 \u3002 \u5f53\u8bbe\u7f6e\u4e3a 0 \u65f6\uff0c\u5b83\u5728\u5757\u5185\u5bb9\u7eb3\u6570\u91cf\u4e0d\u53d7\u9650\u5236\u7684\u4e0d\u540c\u503c\u3002 \u8be5\u96c6\u5408\u5305\u542b\u5757\u4e2d\u7684\u6240\u6709\u503c\uff08\u6216\u8005\u5982\u679c\u503c\u7684\u6570\u91cf\u8d85\u8fc7 max_size \u5219\u4e3a\u7a7a\uff09\u3002 \u5c3d\u7ba1\u6574\u4f53\u57fa\u6570\u8f83\u9ad8\uff0c\u4f46\u6b64\u7d22\u5f15\u7c7b\u578b\u5bf9\u4e8e\u6bcf\u7ec4\u9897\u7c92\u4e2d\u503c\u805a\u96c6\u5728\u4e00\u8d77\u7684\u5217\u7279\u522b\u6709\u6548\u3002\n\u8be5\u7d22\u5f15\u7684\u6210\u672c\u3001\u6027\u80fd\u548c\u6709\u6548\u6027\u53d6\u51b3\u4e8e\u8fd9\u4e9b\u5757\u5185\u7684\u57fa\u6570\u3002 \u5982\u679c\u6bcf\u4e2a\u5757\u90fd\u6709\u5927\u91cf\u552f\u4e00\u503c\uff0c\u5219\u9488\u5bf9\u5927\u578b\u7d22\u5f15\u96c6\u8bc4\u4f30\u67e5\u8be2\u6761\u4ef6\u7684\u6210\u672c\u5c06\u53d8\u5f97\u5f88\u9ad8\u3002 \u6216\u8005\uff0c\u5982\u679c\u96c6\u5408\u7531\u4e8e\u8d85\u8fc7\u6307\u5b9a\u7684 max_size \u800c\u4e3a\u7a7a\uff0c\u5219\u7d22\u5f15\u4e0d\u4f1a\u88ab\u5e94\u7528\u3002"),(0,a.yg)("h5",{id:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7c7b\u578b-bloom-filter-types"},"\u5e03\u9686\u8fc7\u6ee4\u5668\u7c7b\u578b Bloom filter types"),(0,a.yg)("p",null,"\u5e03\u9686\u8fc7\u6ee4\u5668\u662f\u4e00\u79cd\u7d27\u51d1\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8bbe\u8ba1\u7528\u4e8e\u5728\u96c6\u5408\u6210\u5458\u662f\u5426\u6709\u6548\u8fdb\u884c\u5224\u65ad\uff0c\u53ef\u80fd\u5b58\u5728\u6781\u5c0f\u53ef\u80fd\u6027\u7684\u8bef\u62a5\u3002 \u5728\u8df3\u6570\u7d22\u5f15\u7684\u4f7f\u7528\u60c5\u51b5\u4e0b\uff0c\u8fd9\u5e76\u4e0d\u662f\u4e3b\u8981\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ea\u4f1a\u5bfc\u81f4\u53bb\u8bfb\u53d6\u4e00\u4e9b\u989d\u5916\u7684\u3001\u4e0d\u5fc5\u8981\u7684\u5757\u3002 \u7136\u800c\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6f5c\u5728\u7684\u8bef\u62a5\u610f\u5473\u7740\u7d22\u5f15\u8868\u8fbe\u5f0f\u5e94\u8be5\u4e3a\u771f\u3002 \u5426\u5219\uff0c\u53ef\u80fd\u4f1a\u65e0\u610f\u4e2d\u8df3\u8fc7\u6709\u6548\u6570\u636e\u3002 \u5e94\u6ce8\u610f\u8bbe\u8ba1\u7d22\u5f15\u8868\u8fbe\u5f0f\uff0c\u4ee5\u5c3d\u91cf\u51cf\u5c11\u8bef\u62a5\u7684\u98ce\u9669\uff0c\u5e76\u786e\u4fdd\u51c6\u786e\u8df3\u8fc7\u4e0d\u76f8\u5173\u7684\u5757\u3002\n\u5e03\u9686\u8fc7\u6ee4\u5668\u5bf9\u4e8e\u9ad8\u6548\u6d4b\u8bd5\u5927\u91cf\u79bb\u6563\u503c\u975e\u5e38\u6709\u6548\uff0c\u6240\u9002\u7528\u4e8e\u4ea7\u751f\u5927\u91cf\u6761\u4ef6\u8868\u8fbe\u5f0f\u5224\u65ad\u7684\u573a\u666f\u3002 \u5177\u4f53\u6765\u8bf4\uff0c\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15\u53ef\u4ee5\u5e94\u7528\u4e8e\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u503c\u90fd\u4f1a\u88ab\u6d4b\u8bd5\u3002 \u6b64\u5916\uff0c\u5b83\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u8bf8\u5982mapKeys\u6216mapValues\u4e4b\u7c7b\u7684\u51fd\u6570\u5c06\u952e\u6216\u503c\u8f6c\u6362\u4e3a\u6570\u7ec4\u6765\u5e94\u7528\u4e8e\u6620\u5c04\u3002 \u8fd9\u79cd\u8c03\u6574\u5141\u8bb8\u5bf9\u6570\u7ec4\u6216\u6620\u5c04\u4e2d\u7684\u6210\u5458\u6709\u6548\u6027\u5224\u65ad\uff0c\u4ece\u800c\u589e\u5f3a\u6b64\u7c7b\u6570\u636e\u7ed3\u6784\u7684\u7d22\u5f15\u529f\u80fd\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e13\u7528\u7684 tokenbf_v1 \u7d22\u5f15\u662f\u4e3a\u589e\u5f3a\u7684\u5e03\u9686\u8fc7\u6ee4\u5668\u529f\u80fd\u800c\u5b9a\u5236\u7684\uff0c\u5e76\u4e14\u9700\u8981\u8c03\u6574\u4e09\u4e2a\u76f8\u5173\u7684\u53c2\u6570\uff1a\n\u8fc7\u6ee4\u5668\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\uff1a\u6b64\u53c2\u6570\u63a7\u5236\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\u3002 \u66f4\u5927\u7684\u8fc7\u6ee4\u5668\u53ef\u4ee5\u51cf\u5c11\u8bef\u62a5\u7684\u53ef\u80fd\u6027\uff0c\u5176\u4ee3\u4ef7\u662f\u589e\u52a0\u5b58\u50a8\u7a7a\u95f4\u3002\n",(0,a.yg)("strong",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6570\u7684\u6570\u91cf\uff1a"),"\u5e94\u7528\u4e8e\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u54c8\u5e0c\u51fd\u6570\u7684\u6570\u91cf\u3002 \u4f7f\u7528\u66f4\u591a\u54c8\u5e0c\u51fd\u6570\u6709\u52a9\u4e8e\u51cf\u5c11\u8bef\u62a5\u3002\n",(0,a.yg)("strong",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6570\u7684\u79cd\u5b50\uff1a"),'\u7528\u4e8e\u751f\u6210\u5e03\u9686\u8fc7\u6ee4\u5668\u54c8\u5e0c\u51fd\u6570\u7684\u79cd\u5b50\u3002\n\u6b64\u7d22\u5f15\u4ec5\u9002\u7528\u4e8eString\u3001FixedString\u548cMap\u7c7b\u578b\u7684\u6570\u636e\u3002\u8f93\u5165\u8868\u8fbe\u5f0f\u88ab\u5206\u5272\u4e3a\u7531\u975e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u5206\u9694\u7684\u5b57\u7b26\u5e8f\u5217\u3002\u4f8b\u5982\uff0c\u5217\u503cThis is a candidate for a "full text" search\u5c06\u88ab\u5206\u5272\u4e3aThis is a candidate for full text search\u3002\n\u6b64\u7d22\u5f15\u7528\u4e8eLIKE\u3001EQUALS\u3001in\u3001hasToken()\u548c\u7c7b\u4f3c\u7684\u957f\u5b57\u7b26\u4e32\u4e2d\u5355\u8bcd\u548c\u5176\u4ed6\u503c\u7684\u641c\u7d22\u3002\u4f8b\u5982\uff0c\u4e00\u79cd\u53ef\u80fd\u7684\u7528\u9014\u662f\u5728\u975e\u7ed3\u6784\u7684\u5e94\u7528\u7a0b\u5e8f\u65e5\u5fd7\u884c\u5217\u4e2d\u641c\u7d22\u5c11\u91cf\u7684\u7c7b\u540d\u6216\u884c\u53f7\u3002')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u66f4\u4e13\u4e1a\u7684ngrambf_v1\u3002\u8be5\u7d22\u5f15\u7684\u529f\u80fd\u4e0etokenbf_v1\u76f8\u540c\u3002\u5728Bloom filter\u8bbe\u7f6e\u4e4b\u524d\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684\u53c2\u6570\uff0c\u5373\u8981\u7d22\u5f15\u7684ngram\u7684\u5927\u5c0f\u3002\u4e00\u4e2angram\u662f\u957f\u5ea6\u4e3an\u7684\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u6bd4\u5982\u5982\u679cn\u662f4\uff0cA short string\u4f1a\u88ab\u5206\u5272\u4e3aA sh`` sho, shor, hort, ort s, or st, r str, stri, trin, ring\u3002\u8fd9\u4e2a\u7d22\u5f15\u5bf9\u4e8e\u6587\u672c\u641c\u7d22\u4e5f\u5f88\u6709\u7528\uff0c\u7279\u522b\u662f\u6ca1\u6709\u5355\u8bcd\u95f4\u65ad\u7684\u8bed\u8a00\uff0c\u6bd4\u5982\u4e2d\u6587\u3002"))),(0,a.yg)("h3",{id:"\u4f7f\u7528\u4e3e\u4f8b-1"},"\u4f7f\u7528\u4e3e\u4f8b"),(0,a.yg)("h4",{id:"\u8f7d\u5165\u6570\u636e\u96c6\u5230-byconity"},"\u8f7d\u5165\u6570\u636e\u96c6\u5230 ByConity"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE IF EXISTS test_si;\n*CREATE DATABASE test_si;\n\n--create table to load numbers_source.csv dataset\nCREATE TABLE test_si.numbers\n(\n    `number` UInt64\n)\nENGINE = CnchMergeTree\nORDER BY number;\n")),(0,a.yg)("p",null,"\u4e0b\u8f7d\u4e0b\u9762\u7684\u6587\u4ef6\uff0c\u5e76\u901a\u8fc7\u6570\u636e\u52a0\u8f7d\u529f\u80fd\u5c06\u6570\u636e\u96c6\u52a0\u8f7d\u5230 test_si.numbers \u8868\u4e2d\u3002\n",(0,a.yg)("img",{src:t(8009).A})),(0,a.yg)("h4",{id:"\u521b\u5efa\u4e0d\u5e26\u7d22\u5f15\u7684\u6570\u636e\u8868"},"\u521b\u5efa\u4e0d\u5e26\u7d22\u5f15\u7684\u6570\u636e\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"USE test_si;\n\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 10000000;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"\u5982\u679c\u6211\u4eec\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--Simple query to select all rows from the table test_skipindex where the key_i column has values of 200 or 700\nselect * from `test_skipindex` where key_i in (200, 700);\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(7043).A,width:"1770",height:"262"})),(0,a.yg)("p",null,"\u663e\u793a\uff0c\u5728\u6ca1\u6709\u7d22\u5f15\u7684\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u4e86 100 \u4e07\u884c\u6570\u636e\u3002"),(0,a.yg)("h4",{id:"\u589e\u52a0\u7d22\u5f15"},"\u589e\u52a0\u7d22\u5f15"),(0,a.yg)("h5",{id:"\u7ed9\u65b0\u8868\u589e\u52a0\u7d22\u5f15"},"\u7ed9\u65b0\u8868\u589e\u52a0\u7d22\u5f15"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si;\n\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date,\n\n--Add index during creation of table\n    INDEX key_i_idx key_i TYPE minmax GRANULARITY 1\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id\n--If we do not set the index_granularity, default would be 8192\nSETTINGS index_granularity = 8192;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"\u8fd0\u884c\u4e0e\u4e0a\u9762\u76f8\u540c\u7684\u547d\u4ee4\uff0c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--Simple query to select all rows from the table test_skipindex where the key_i column has values of 200 or 700\nselect * from `test_skipindex` where key_i in (200, 700); \n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(1768).A,width:"1774",height:"262"})),(0,a.yg)("p",null,"\u7ed3\u679c\u8868\u660e\uff0c\u4f7f\u7528\u8be5\u7d22\u5f15\u7684\u60c5\u51b5\u4e0b\u4ec5\u5904\u7406\u4e86 8192 \u884c\u6570\u636e\uff0c\u4e14\u6267\u884c\u901f\u5ea6\u66f4\u5feb\u3002"),(0,a.yg)("h5",{id:"\u5728\u73b0\u6709\u8868\u6dfb\u52a0\u540e\u7eed\u6570\u636e\u7d22\u5f15"},"\u5728\u73b0\u6709\u8868\u6dfb\u52a0\u540e\u7eed\u6570\u636e\u7d22\u5f15"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si;\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Add index after creation of table\nALTER TABLE test_si.test_skipindex ADD index key_i_idx key_i TYPE minmax GRANULARITY 1;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"\u5982\u679c\u6211\u4eec\u8fd0\u884c\u76f8\u540c\u7684\u547d\u4ee4\uff0c\u6211\u4eec\u7684\u7ed3\u679c\u5c06\u662f\u5904\u7406 100 \u4e07\u884c\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(9633).A,width:"1806",height:"268"})),(0,a.yg)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u5728\u521b\u5efa\u7d22\u5f15\u4e4b\u524d\u6dfb\u52a0\u7684\u6570\u636e\u88ab\u8ba4\u4e3a\u662f\u5386\u53f2\u6570\u636e\uff0c\u5bf9\u4e8e\u5386\u53f2\u6570\u636e\uff0c\u6211\u4eec\u5fc5\u987b\u6267\u884c\u6dfb\u52a0\u6b65\u9aa4\u6765\u5efa\u7acb\u7d22\u5f15\u3002"),(0,a.yg)("h5",{id:"\u4e3a\u5386\u53f2\u6570\u636e\u589e\u52a0\u7d22\u5f15"},"\u4e3a\u5386\u53f2\u6570\u636e\u589e\u52a0\u7d22\u5f15"),(0,a.yg)("p",null,"\u8981\u4e3a\u5386\u53f2\u6570\u636e\u6784\u5efa\u7d22\u5f15\uff0c\u60a8\u9700\u8981\u5728\u547d\u4ee4\u4e2d\u4f7f\u7528 MATERIALIZE INDEX\u3002 \u5982\u679c\u4f7f\u7528ALTER TABLE...ADD\u547d\u4ee4\u800c\u4e0d\u6267\u884cMATERIALIZE INDEX\uff0c\u5219\u53ea\u4f1a\u4e3a\u65b0\u5199\u5165\u7684\u6570\u636e\u751f\u6210\u7d22\u5f15\u3002"),(0,a.yg)("p",null,"*--Run this additional code block\nALTER TABLE test_si.test_skipindex MATERIALIZE INDEX key_i_idx;\n\u67e5\u8be2\u7ed3\u679c\u8868\u660e\u5386\u53f2\u6570\u636e\u7d22\u5f15\u6dfb\u52a0\u6210\u529f\u3002\u4ec5\u67e5\u8be2\u5904\u7406 8192 \u884c\uff0c\u4e14\u901f\u5ea6\u66f4\u5feb\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(8622).A,width:"1832",height:"238"})),(0,a.yg)("p",null,"\u4e3a\u5386\u53f2\u6570\u636e\u5206\u533a\u589e\u52a0\u7d22\u5f15\nMATERIALIZE INDEX \u9ed8\u8ba4\u4f1a\u4e3a\u6240\u6709\u5386\u53f2\u6570\u636e\u751f\u6210\u7d22\u5f15\u3002 \u5982\u679c\u8981\u5c06\u7279\u5b9a\u5206\u533a\u6dfb\u52a0\u5230\u5386\u53f2\u6570\u636e\u4e2d\uff0c\u6211\u4eec\u5fc5\u987b\u5c06 IN PARTITION \u4e0e MATERIALIZE INDEX \u4e00\u8d77\u4f7f\u7528\u3002\u8fd9\u6837\u610f\u5473\u7740\u53ea\u6709\u6307\u5b9a\u7684\u5206\u533a\u624d\u4f1a\u751f\u6210\u7d22\u5f15\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si; \n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()-1\nFROM test_si.numbers\nLIMIT 1000000;\n\nALTER TABLE test_si.test_skipindex ADD index key_i_idx key_i TYPE minmax GRANULARITY 1;\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--Assuming the date of the day before today is 20230927, index is generated only for the 20230927 date partition \nALTER TABLE test_si.test_skipindex MATERIALIZE INDEX key_i_idx IN PARTITION '20230927';\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1 AND p_date = today()-1;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1 AND p_date = today();\n")),(0,a.yg)("p",null,"\u5982\u679c\u6211\u4eec\u8fd0\u884c\u4e0b\u56fe\u4e2d\u7684\u7b80\u5355\u67e5\u8be2\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5206\u533a 20230927 ","[today() - 1]"," \u4e2d\u7684\u5386\u53f2\u6570\u636e\u751f\u6210\u4e86\u7d22\u5f15\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(6935).A,width:"1814",height:"502"})),(0,a.yg)("p",null,"\u5bf9\u4e8e\u672a\u6307\u5b9a\u5206\u533a\u7684\u5386\u53f2\u6570\u636e\uff0c\u4e0d\u751f\u6210\u7d22\u5f15\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(6876).A,width:"1810",height:"510"})),(0,a.yg)("h4",{id:"\u5220\u9664\u7d22\u5f15"},"\u5220\u9664\u7d22\u5f15"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_si.test_skipindex DROP INDEX key_i_idx;\n\nSHOW CREATE TABLE test_skipindex;\n\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("h3",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,a.yg)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u5f53\u6570\u636e\u91cf\u8f83\u5c0f\u65f6\uff0c\u5efa\u7acb\u7d22\u5f15\u7684\u6210\u672c\u4e0d\u4f1a\u5f88\u9ad8\u3002 \u4f46\u662f\uff0c\u5982\u679c\u6211\u4eec\u5e0c\u671b\u4e3a\u5168\u91cf\u5386\u53f2\u6570\u636e\u5efa\u7acb\u7d22\u5f15\uff0c\u5e76\u4e14\u6570\u636e\u91cf\u975e\u5e38\u5927\uff0c\u76f4\u63a5\u4f7f\u7528MATERIAL INDEX\u4e3a\u6240\u6709\u5386\u53f2\u6570\u636e\u6dfb\u52a0\u7d22\u5f15\u53ef\u80fd\u4f1a\u5bf9\u96c6\u7fa4\u8d1f\u8f7d\u9020\u6210\u4e00\u5b9a\u7684\u538b\u529b\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528IN PARTITION\u6309\u5206\u533a\u5efa\u7acb\u7d22\u5f15\u3002"))}u.isMDXComponent=!0},7043:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-1-300a020adfb829163072e524e6b53e7d.png"},1768:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-2-561e91554d8bab4c719fa7c99a574186.png"},9633:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-3-af2ab81e355bd7a8083654c3e549f3e8.png"},8622:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-4-b89aed780f6dd689fc6a19a4ec3f5a15.png"},6935:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-5-14872ce99600d0cd9e8ade415b1d2f8a.png"},6876:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-6-da025fa2795acabbc33823fc6730e396.png"},5182:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-query-6f7c70c06be264de7376076ac280f145.png"},8009:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/numbers_source-64b30384649beb67375743c5cba5e9ae.csv"}}]);