"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4895],{58860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),i=u(t),y=r,m=i["".concat(p,".").concat(y)]||i[y]||c[y]||l;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},69113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(75890),r=(t(37953),t(58860));const l={title:"Comparison",slug:"comparison",hidden:!1,createdAt:"2021-07-29T02:30:51.384Z",updatedAt:"2021-09-23T03:46:42.532Z",tags:["Docs"]},o=void 0,s={unversionedId:"sql-syntax/functions/comparison",id:"version-0.2.0/sql-syntax/functions/comparison",title:"Comparison",description:"Notice:",source:"@site/versioned_docs/version-0.2.0/sql-syntax/functions/comparison.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/comparison",permalink:"/docs/0.2.0/sql-syntax/functions/comparison",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/functions/comparison.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Comparison",slug:"comparison",hidden:!1,createdAt:"2021-07-29T02:30:51.384Z",updatedAt:"2021-09-23T03:46:42.532Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Bit & Bitmap",permalink:"/docs/0.2.0/sql-syntax/functions/bit-bitmap"},next:{title:"Conditional",permalink:"/docs/0.2.0/sql-syntax/functions/conditional"}},p={},u=[{value:"greatest",id:"greatest",level:2},{value:"notEquals",id:"notequals",level:2}],g={toc:u},i="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(i,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.yg)("h2",{id:"greatest"},"greatest"),(0,r.yg)("p",null,"Returns the largest value of a and b."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"greatest(a, b)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the larger value of a,b.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT greatest(1, 2)\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatest(1, 2)\u2500\u2510\n\u2502 2              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT greatest(toDate('2019-01-01'), toDate('2019-01-02'))\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500greatest(toDate('2019-01-01'), toDate('2019-01-02'))\u2500\u2510\n\u2502 2019-01-02                                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"notequals"},"notEquals"),(0,r.yg)("p",null,"notEquals, a != b and a ","<",">"," b operator"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"notEquals(a, b)\na!=b\na<>b\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"UInt8")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 1), 1!=1, 1<>1\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u2510\n\u2502 0               \u2502 0               \u2502 0               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 2), 1!=2, 1<>2\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u2510\n\u2502 1               \u2502 1               \u2502 1               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("p",null,"[block:api-header]",'\n{\n"title": "notEquals"\n}\n',"[/block]"),(0,r.yg)("p",null,"notEquals, a != b and a ","<",">"," b operator"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"notEquals(a, b)\na!=b\na<>b\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"a,b")," \u2013 two values to compare")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"UInt8")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 1), 1!=1, 1<>1\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u252c\u2500notEquals(1, 1)\u2500\u2510\n\u2502 0               \u2502 0               \u2502 0               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT notEquals(1, 2), 1!=2, 1<>2\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u252c\u2500notEquals(1, 2)\u2500\u2510\n\u2502 1               \u2502 1               \u2502 1               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);