"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9197],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(75890),r=(n(37953),n(58860));const i={title:"Functions",slug:"functions",hidden:!1,metadata:{title:"Functions in ByConity",description:"ByConity provides two SQL modes, ClickHouse and ANSI. For the ClickHouse mode, some are self-developed functions by ByConity."},createdAt:"2021-07-29T02:29:18.073Z",updatedAt:"2022-02-28T02:39:28.268Z",tags:["Docs"]},s=void 0,a={unversionedId:"sql-syntax/functions/functions",id:"sql-syntax/functions/functions",title:"Functions",description:"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.",source:"@site/docs/sql-syntax/functions/functions.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/functions",permalink:"/docs/sql-syntax/functions/functions",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/sql-syntax/functions/functions.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Functions",slug:"functions",hidden:!1,metadata:{title:"Functions in ByConity",description:"ByConity provides two SQL modes, ClickHouse and ANSI. For the ClickHouse mode, some are self-developed functions by ByConity."},createdAt:"2021-07-29T02:29:18.073Z",updatedAt:"2022-02-28T02:39:28.268Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/docs/sql-syntax/data-types"},next:{title:"Aggregation",permalink:"/docs/sql-syntax/functions/aggregate"}},c={},l=[],u={toc:l},p="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ByConity provides two SQL dialects, (1) ",(0,r.yg)("strong",{parentName:"p"},"ClickHouse")," and (2) ",(0,r.yg)("strong",{parentName:"p"},"ANSI"),"."),(0,r.yg)("p",null,"For the ClickHouse SQL, the SQL functions are mostly similar to what is provided in the community ClickHouse version, but it also includes additional functions that are only supported in ByConity. The following sections will use the content from ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/sql-reference/functions/"},"ClickHouse.tech documentation site")," as the reference to describe how to use them in ByConity."),(0,r.yg)("p",null,"For the ANSI mode, ByConity provides a rich set of SQL syntax through ANSI SQL mode by using Apache Calcite. For the details please refer to the BNF-grammar here for more details: ",(0,r.yg)("a",{parentName:"p",href:"https://calcite.apache.org/docs/reference.html"},"https://calcite.apache.org/docs/reference.html"),"."))}y.isMDXComponent=!0}}]);