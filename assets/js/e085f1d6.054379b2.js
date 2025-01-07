"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4912],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(75890),o=(n(37953),n(58860));const i={title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},l=void 0,a={unversionedId:"sql-syntax/functions/conditional",id:"version-0.2.0/sql-syntax/functions/conditional",title:"Conditional",description:"Notice:",source:"@site/versioned_docs/version-0.2.0/sql-syntax/functions/conditional.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/conditional",permalink:"/docs/0.2.0/sql-syntax/functions/conditional",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/functions/conditional.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/docs/0.2.0/sql-syntax/functions/comparison"},next:{title:"Date & Times",permalink:"/docs/0.2.0/sql-syntax/functions/date-times"}},s={},c=[{value:"multiIf",id:"multiif",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,o.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByteHouse.")),(0,o.yg)("h2",{id:"multiif"},"multiIf"),(0,o.yg)("p",null,"Allows you to write the CASE operator more compactly in the query."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Syntax")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"multiIf(cond_1, then_1, cond_2, then_2, ..., else)\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Arguments:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cond_N")," \u2014 The condition for the function to return ",(0,o.yg)("inlineCode",{parentName:"li"},"then_N")," ."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"then_N")," \u2014 The result of the function when executed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"else")," \u2014 The result of the function if none of the conditions is met.\nThe function accepts ",(0,o.yg)("inlineCode",{parentName:"li"},"2N+1")," parameters.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Returned values"),"\nThe function returns one of the values ",(0,o.yg)("inlineCode",{parentName:"p"},"then_N")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"else")," , depending on the conditions ",(0,o.yg)("inlineCode",{parentName:"p"},"cond_N")," ."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionMultiIf (id UInt8, left Nullable(UInt8), right Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY id;\nINSERT INTO test.functionMultiIf VALUES (1,NULL,4),(2,1,3),(3,2,2),(4,3,1),(5,4,NULL);\nSELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'left is greater', left = right, 'Both equal', 'Null value') AS result\nFROM test.functionMultiIf\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500result\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 4     \u2502 Null value      \u2502\n\u2502 1    \u2502 3     \u2502 left is smaller \u2502\n\u2502 2    \u2502 2     \u2502 Both equal      \u2502\n\u2502 3    \u2502 1     \u2502 left is greater \u2502\n\u2502 4    \u2502 \u1d3a\u1d41\u1d38\u1d38  \u2502 Null value      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);