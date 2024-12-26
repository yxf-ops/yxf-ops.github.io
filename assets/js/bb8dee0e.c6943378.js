"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7740],{8860:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var a=t(7953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},y=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),i=o(t),m=r,g=i["".concat(s,".").concat(m)]||i[m]||c[m]||l;return t?a.createElement(g,p(p({ref:n},y),{},{components:t})):a.createElement(g,p({ref:n},y))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[i]="string"==typeof e?e:r,p[1]=u;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=t(5890),r=(t(7953),t(8860));const l={title:"Map",slug:"map",hidden:!0,createdAt:"2021-07-29T12:29:27.367Z",updatedAt:"2021-07-29T12:29:27.367Z",tags:["Docs"]},p=void 0,u={unversionedId:"sql-syntax/functions/map",id:"sql-syntax/functions/map",title:"Map",description:"map",source:"@site/docs/sql-syntax/functions/map.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/map",permalink:"/docs/sql-syntax/functions/map",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/sql-syntax/functions/map.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Map",slug:"map",hidden:!0,createdAt:"2021-07-29T12:29:27.367Z",updatedAt:"2021-07-29T12:29:27.367Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/docs/sql-syntax/functions/json"},next:{title:"Nullable",permalink:"/docs/sql-syntax/functions/nullable"}},s={},o=[{value:"map",id:"map",level:2},{value:"tuple",id:"tuple",level:2},{value:"tupleElement",id:"tupleelement",level:2}],y={toc:o},i="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(i,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"map"},"map"),(0,r.yg)("p",null,"Arranges ",(0,r.yg)("inlineCode",{parentName:"p"},"key:value")," pairs into ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," data type."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nmap(key1, value1[, key2, value2, ...])\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"key")," \u2014 The key part of the pair. ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md"},"String")," or ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/int-uint.md"},"Integer")," .")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"value")," \u2014 The value part of the pair. ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/string.md"},"String")," , ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/int-uint.md"},"Integer")," or ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/array.md"},"Array")," ."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Data structure as ",(0,r.yg)("inlineCode",{parentName:"li"},"key:value")," pairs.")),(0,r.yg)("p",null,"Type: ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," ."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("p",null,"Query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\n\n")),(0,r.yg)("p",null,"Result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500map('key1', number, 'key2', multiply(number, 2))\u2500\u2510\n\n\u2502 {'key1':0,'key2':0}                              \u2502\n\n\u2502 {'key1':1,'key2':2}                              \u2502\n\n\u2502 {'key1':2,'key2':4}                              \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.yg)("p",null,"Query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE table_map (a Map(String, UInt64)) ENGINE = MergeTree() ORDER BY a;\n\nINSERT INTO table_map SELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\n\nSELECT a['key2'] FROM table_map;\n\n")),(0,r.yg)("p",null,"Result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\n\u2502                       0 \u2502\n\n\u2502                       2 \u2502\n\n\u2502                       4 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See Also")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://bytedance.feishu.cn/sql-reference/data-types/map.md"},"Map(key, value)")," data type")),(0,r.yg)("h2",{id:"tuple"},"tuple"),(0,r.yg)("p",null,"A function that allows grouping multiple columns."),(0,r.yg)("p",null,"For columns with the types T1, T2, \u2026, it returns a Tuple(T1, T2, \u2026) type tuple containing these columns. There is no cost to execute the function."),(0,r.yg)("p",null,"Tuples are normally used as intermediate values for an argument of IN operators, or for creating a list of formal parameters of lambda functions. Tuples can\u2019t be written to a table."),(0,r.yg)("p",null,"The function implements the operator ",(0,r.yg)("inlineCode",{parentName:"p"},"(x, y, \u2026)")," ."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntuple(x, y, \u2026)\n\n")),(0,r.yg)("h2",{id:"tupleelement"},"tupleElement"),(0,r.yg)("p",null,"A function that allows getting a column from a tuple."),(0,r.yg)("p",null,"\u2018N\u2019 is the column index, starting from 1. N must be a constant. \u2018N\u2019 must be a constant. \u2018N\u2019 must be a strict postive integer no greater than the size of the tuple."),(0,r.yg)("p",null,"There is no cost to execute the function."),(0,r.yg)("p",null,"The function implements the operator ",(0,r.yg)("inlineCode",{parentName:"p"},"x.N")," ."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntupleElement(tuple, n)\n\n")))}c.isMDXComponent=!0}}]);