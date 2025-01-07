"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1388],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(75890),o=(t(37953),t(58860));const i={title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},l=void 0,a={unversionedId:"sql-syntax/functions/conditional",id:"version-0.2.0/sql-syntax/functions/conditional",title:"Conditional",description:"Notice:",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/conditional.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/conditional",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/conditional",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/version-0.2.0/sql-syntax/functions/conditional.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Conditional",slug:"conditional",hidden:!1,createdAt:"2021-07-29T11:58:23.803Z",updatedAt:"2021-09-23T03:47:59.032Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Comparison",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/comparison"},next:{title:"Date & Times",permalink:"/zh-cn/docs/0.2.0/sql-syntax/functions/date-times"}},c={},s=[{value:"multiIf",id:"multiif",level:2}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,o.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByteHouse.")),(0,o.yg)("h2",{id:"multiif"},"multiIf"),(0,o.yg)("p",null,"Allows you to write the CASE operator more compactly in the query."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Syntax")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"multiIf(cond_1, then_1, cond_2, then_2, ..., else)\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Arguments:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cond_N")," \u2014 The condition for the function to return ",(0,o.yg)("inlineCode",{parentName:"li"},"then_N")," ."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"then_N")," \u2014 The result of the function when executed."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"else")," \u2014 The result of the function if none of the conditions is met.\nThe function accepts ",(0,o.yg)("inlineCode",{parentName:"li"},"2N+1")," parameters.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Returned values"),"\nThe function returns one of the values ",(0,o.yg)("inlineCode",{parentName:"p"},"then_N")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"else")," , depending on the conditions ",(0,o.yg)("inlineCode",{parentName:"p"},"cond_N")," ."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS test.functionMultiIf (id UInt8, left Nullable(UInt8), right Nullable(UInt8)) ENGINE=CnchMergeTree ORDER BY id;\nINSERT INTO test.functionMultiIf VALUES (1,NULL,4),(2,1,3),(3,2,2),(4,3,1),(5,4,NULL);\nSELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'left is greater', left = right, 'Both equal', 'Null value') AS result\nFROM test.functionMultiIf\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500result\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 4     \u2502 Null value      \u2502\n\u2502 1    \u2502 3     \u2502 left is smaller \u2502\n\u2502 2    \u2502 2     \u2502 Both equal      \u2502\n\u2502 3    \u2502 1     \u2502 left is greater \u2502\n\u2502 4    \u2502 \u1d3a\u1d41\u1d38\u1d38  \u2502 Null value      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);