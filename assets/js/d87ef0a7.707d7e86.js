"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4017],{8860:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>N});var r=a(7953);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(a),c=n,N=d["".concat(o,".").concat(c)]||d[c]||y[c]||i;return a?r.createElement(N,g(g({ref:e},m),{},{components:a})):r.createElement(N,g({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,g=new Array(i);g[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:n,g[1]=l;for(var p=2;p<i;p++)g[p]=a[p];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5387:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(5890),n=(a(7953),a(8860));const i={title:"Ad-hoc Import",sidebar_position:7,tags:["Docs"]},g="Ad-hoc Import",l={unversionedId:"data-import/import-methods/ad-hoc-import",id:"data-import/import-methods/ad-hoc-import",title:"Ad-hoc Import",description:"Column ingestion",source:"@site/docs/data-import/import-methods/ad-hoc-import.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/ad-hoc-import",permalink:"/docs/data-import/import-methods/ad-hoc-import",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-import/import-methods/ad-hoc-import.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:7,frontMatter:{title:"Ad-hoc Import",sidebar_position:7,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Direct Access via Hive",permalink:"/docs/data-import/import-methods/direct-access-via-hive"},next:{title:"Data Model",permalink:"/docs/table-design/data-model"}},o={},p=[{value:"Column ingestion",id:"column-ingestion",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Implementation note",id:"implementation-note",level:3}],m={toc:p},d="wrapper";function y(t){let{components:e,...a}=t;return(0,n.yg)(d,(0,r.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"ad-hoc-import"},"Ad-hoc Import"),(0,n.yg)("h2",{id:"column-ingestion"},"Column ingestion"),(0,n.yg)("h3",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Column ingestion query updates values of a column in a partition of a table by taking the value of another column from another table"),(0,n.yg)("p",null,"Example:\nTable ",(0,n.yg)("inlineCode",{parentName:"p"},"db.target")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,n.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1"),(0,n.yg)("td",{parentName:"tr",align:"center"},"A"),(0,n.yg)("td",{parentName:"tr",align:"right"},"4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"2"),(0,n.yg)("td",{parentName:"tr",align:"center"},"B"),(0,n.yg)("td",{parentName:"tr",align:"right"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"3"),(0,n.yg)("td",{parentName:"tr",align:"center"},"C"),(0,n.yg)("td",{parentName:"tr",align:"right"},"6")))),(0,n.yg)("p",null,"Table ",(0,n.yg)("inlineCode",{parentName:"p"},"db.source")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,n.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Name"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1"),(0,n.yg)("td",{parentName:"tr",align:"right"},"aa")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"2"),(0,n.yg)("td",{parentName:"tr",align:"right"},"bb")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"4"),(0,n.yg)("td",{parentName:"tr",align:"right"},"cc")))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE db.target INGEST PARTITION '2021-01-01' COLUMNS Name KEY ID FROM db.source\n")),(0,n.yg)("p",null,"Table ",(0,n.yg)("inlineCode",{parentName:"p"},"db.target")," after execute the query"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,n.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1"),(0,n.yg)("td",{parentName:"tr",align:"center"},"aa"),(0,n.yg)("td",{parentName:"tr",align:"right"},"4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"2"),(0,n.yg)("td",{parentName:"tr",align:"center"},"bb"),(0,n.yg)("td",{parentName:"tr",align:"right"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"3"),(0,n.yg)("td",{parentName:"tr",align:"center"}),(0,n.yg)("td",{parentName:"tr",align:"right"},"6")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"4"),(0,n.yg)("td",{parentName:"tr",align:"center"},"dd"),(0,n.yg)("td",{parentName:"tr",align:"right"},"0")))),(0,n.yg)("p",null,"The Name value of row with ID = 3 can have value remain to C if the setting for target table ingest_default_column_value_if_not_provided is 0 by creating the table with this syntax"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.target\n(\n    `date` Date,\n    `id` Int32,\n    `name` String\n)\nENGINE = CnchMergeTree\nPARTITION BY date\nORDER BY id\nSETTINGS ingest_default_column_value_if_not_provided = 0\n")),(0,n.yg)("p",null,"In that case, the result will be"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,n.yg)("th",{parentName:"tr",align:"center"},"ID"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"right"},"Income"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"1"),(0,n.yg)("td",{parentName:"tr",align:"center"},"aa"),(0,n.yg)("td",{parentName:"tr",align:"right"},"4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"2"),(0,n.yg)("td",{parentName:"tr",align:"center"},"bb"),(0,n.yg)("td",{parentName:"tr",align:"right"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"3"),(0,n.yg)("td",{parentName:"tr",align:"center"},"C"),(0,n.yg)("td",{parentName:"tr",align:"right"},"6")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"2021-01-01"),(0,n.yg)("td",{parentName:"tr",align:"center"},"4"),(0,n.yg)("td",{parentName:"tr",align:"center"},"dd"),(0,n.yg)("td",{parentName:"tr",align:"right"},"0")))),(0,n.yg)("h3",{id:"syntax"},"Syntax"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE db.target INGEST PARTITION xxx COLUMNS col1, col2 [KEY k1, k2] FROM db.temp_table\n")),(0,n.yg)("h3",{id:"implementation-note"},"Implementation note"),(0,n.yg)("p",null,"The main execution of ingest column will be done in worker"))}y.isMDXComponent=!0}}]);