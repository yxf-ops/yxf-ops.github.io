"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[973],{58860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(37953);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=u(t),c=l,m=s["".concat(p,".").concat(c)]||s[c]||y[c]||r;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(75890),l=(t(37953),t(58860));const r={title:"Logical",slug:"logical",hidden:!1,createdAt:"2021-07-29T12:13:37.269Z",updatedAt:"2021-09-23T06:31:50.019Z",tags:["Docs"]},o="logical",i={unversionedId:"sql-syntax/logical",id:"version-0.2.0/sql-syntax/logical",title:"Logical",description:"Notice:",source:"@site/versioned_docs/version-0.2.0/sql-syntax/logical.mdx",sourceDirName:"sql-syntax",slug:"/sql-syntax/logical",permalink:"/docs/0.2.0/sql-syntax/logical",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/logical.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Logical",slug:"logical",hidden:!1,createdAt:"2021-07-29T12:13:37.269Z",updatedAt:"2021-09-23T06:31:50.019Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Hash",permalink:"/docs/0.2.0/sql-syntax/hash"},next:{title:"Mathematical",permalink:"/docs/0.2.0/sql-syntax/mathematical"}},p={},u=[{value:"and",id:"and",level:2},{value:"or",id:"or",level:2},{value:"xor",id:"xor",level:2}],g={toc:u},s="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(s,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"logical"},"logical"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,l.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,l.yg)("h2",{id:"and"},"and"),(0,l.yg)("p",null,"Calculates the result of the logical conjunction between two or more values. Corresponds to Logical AND Operator."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"and(val1, val2...)\n\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned value")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"0")," , if there is at least one zero value argument."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," , if there are no zero values arguments and there is at least one ",(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"1")," , otherwise.\nType: UInt8 or Nullable(UInt8).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT and(0, 1, -2);\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u250c\u2500and(0, 1, -2)\u2500\u2510\n\u2502 0             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.yg)("p",null,"With ",(0,l.yg)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT and(NULL, 1, 10, -2);\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u250c\u2500and(NULL, 1, 10, -2)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.yg)("h2",{id:"or"},"or"),(0,l.yg)("p",null,"Calculates the result of the logical disjunction between two or more values. Corresponds to Logical OR Operator."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"or(val1, val2...)\n\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned value")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"1")," , if there is at least one non-zero value."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"0")," , if there are only zero values."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," , if there are only zero values and ",(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," .\nType: UInt8 or Nullable(UInt8).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT or(1, 0, 0, 2, NULL);\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u250c\u2500or(1, 0, 0, 2, NULL)\u2500\u2510\n\u2502 1                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.yg)("h2",{id:"xor"},"xor"),(0,l.yg)("p",null,"Calculates the result of the logical exclusive disjunction between two or more values. For more than two values the function works as if it calculates ",(0,l.yg)("inlineCode",{parentName:"p"},"XOR")," of the first two values and then uses the result with the next value to calculate ",(0,l.yg)("inlineCode",{parentName:"p"},"XOR")," and so on."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Syntax")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"xor(val1, val2...)\n\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Arguments")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. Int, UInt, Float or Nullable.")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Returned value")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"1")," , for two values: if one of the values is zero and other is not."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"0")," , for two values: if both values are zero or non-zero at the same time."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," , if there is at least one ",(0,l.yg)("inlineCode",{parentName:"li"},"NULL")," value.\nType: UInt8 or Nullable(UInt8).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT xor(0, 1, 1);\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u250c\u2500xor(0, 1, 1)\u2500\u2510\n\u2502 0            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.yg)("p",null,"With ",(0,l.yg)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"SELECT xor(NULL, 0);\n\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u250c\u2500xor(NULL, 0)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")))}y.isMDXComponent=!0}}]);