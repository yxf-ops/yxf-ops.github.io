"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6399],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),y=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=y(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,g=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=y(n),c=r,u=d["".concat(o,".").concat(c)]||d[c]||m[c]||g;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=n.length,i=new Array(g);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var y=2;y<g;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>g,metadata:()=>l,toc:()=>y});var a=n(75890),r=(n(37953),n(58860));const g={title:"Column ingestion query",tags:["Docs"]},i="Column ingestion query",l={unversionedId:"advanced-guide/ingest-column",id:"version-0.2.0/advanced-guide/ingest-column",title:"Column ingestion query",description:"Introduction",source:"@site/versioned_docs/version-0.2.0/advanced-guide/ingest-column.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/ingest-column",permalink:"/docs/0.2.0/advanced-guide/ingest-column",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/ingest-column.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Column ingestion query",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Import Optimisation",permalink:"/docs/0.2.0/advanced-guide/import-optimisation"},next:{title:"Transactions and Concurrency Control",permalink:"/docs/0.2.0/advanced-guide/managing-concurrency"}},o={},y=[{value:"Introduction",id:"introduction",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:y},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"column-ingestion-query"},"Column ingestion query"),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Column ingestion query updates values of a column in a partition of a table by taking the value of another column from another table"),(0,r.yg)("p",null,"Example:\nTable ",(0,r.yg)("inlineCode",{parentName:"p"},"db.target")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A"),(0,r.yg)("td",{parentName:"tr",align:"right"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"B"),(0,r.yg)("td",{parentName:"tr",align:"right"},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"},"C"),(0,r.yg)("td",{parentName:"tr",align:"right"},"6")))),(0,r.yg)("p",null,"Table ",(0,r.yg)("inlineCode",{parentName:"p"},"db.source")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,r.yg)("th",{parentName:"tr",align:"right"},"Name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"right"},"aa")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"right"},"bb")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"right"},"cc")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE db.target INGEST PARTITION '2021-01-01' COLUMNS Name KEY ID FROM db.source\n")),(0,r.yg)("p",null,"Table ",(0,r.yg)("inlineCode",{parentName:"p"},"db.target")," after execute the query"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"aa"),(0,r.yg)("td",{parentName:"tr",align:"right"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bb"),(0,r.yg)("td",{parentName:"tr",align:"right"},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"right"},"6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"center"},"dd"),(0,r.yg)("td",{parentName:"tr",align:"right"},"0")))),(0,r.yg)("p",null,"The Name value of row with ID = 3 can have value remain to C if the setting for target table ingest_default_column_value_if_not_provided is 0 by creating the table with this syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE db.target\n(\n    `date` Date,\n    `id` Int32,\n    `name` String\n)\nENGINE = CnchMergeTree\nPARTITION BY date\nORDER BY id\nSETTINGS ingest_default_column_value_if_not_provided = 0\n")),(0,r.yg)("p",null,"In that case, the result will be"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"aa"),(0,r.yg)("td",{parentName:"tr",align:"right"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bb"),(0,r.yg)("td",{parentName:"tr",align:"right"},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"3"),(0,r.yg)("td",{parentName:"tr",align:"center"},"C"),(0,r.yg)("td",{parentName:"tr",align:"right"},"6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4"),(0,r.yg)("td",{parentName:"tr",align:"center"},"dd"),(0,r.yg)("td",{parentName:"tr",align:"right"},"0")))),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER TABLE db.target INGEST PARTITION xxx COLUMNS col1, col2 [KEY k1, k2] FROM db.temp_table\n")),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"The main execution of ingest column is done in worker"))}m.isMDXComponent=!0}}]);