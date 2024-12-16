"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7260],{58860:(e,n,t)=>{t.d(n,{xA:()=>i,yg:()=>d});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),g=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},i=function(e){var n=g(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=g(t),c=r,d=s["".concat(p,".").concat(c)]||s[c]||y[c]||l;return t?a.createElement(d,u(u({ref:n},i),{},{components:t})):a.createElement(d,u({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,u[1]=o;for(var g=2;g<l;g++)u[g]=t[g];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},46919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=t(75890),r=(t(37953),t(58860));const l={title:"UUID",slug:"uuid",hidden:!1,createdAt:"2021-07-29T12:33:03.093Z",updatedAt:"2021-09-23T06:52:47.060Z",tags:["Docs"]},u=void 0,o={unversionedId:"sql-syntax/functions/uuid",id:"version-0.2.0/sql-syntax/functions/uuid",title:"UUID",description:"Notice:",source:"@site/versioned_docs/version-0.2.0/sql-syntax/functions/uuid.mdx",sourceDirName:"sql-syntax/functions",slug:"/sql-syntax/functions/uuid",permalink:"/docs/0.2.0/sql-syntax/functions/uuid",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/sql-syntax/functions/uuid.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"UUID",slug:"uuid",hidden:!1,createdAt:"2021-07-29T12:33:03.093Z",updatedAt:"2021-09-23T06:52:47.060Z",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Type Conversion",permalink:"/docs/0.2.0/sql-syntax/functions/type-conversion"},next:{title:"Window",permalink:"/docs/0.2.0/sql-syntax/functions/window"}},p={},g=[{value:"generateUUIDv4",id:"generateuuidv4",level:2},{value:"toUUID",id:"touuid",level:2},{value:"toUUIDOrNull",id:"touuidornull",level:2},{value:"toUUIDOrZero",id:"touuidorzero",level:2},{value:"generateUUIDv4",id:"generateuuidv4-1",level:2},{value:"toUUID",id:"touuid-1",level:2},{value:"toUUIDOrNull",id:"touuidornull-1",level:2},{value:"toUUIDOrZero",id:"touuidorzero-1",level:2}],i={toc:g},s="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Notice:\nSome of the examples below are referenced from ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/"},"ClickHouse Documentation")," but have been adapted and modified to work in ByConity.")),(0,r.yg)("h2",{id:"generateuuidv4"},"generateUUIDv4"),(0,r.yg)("p",null,"Generates the UUID of ",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"version 4")," ."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ngenerateUUIDv4()\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The UUID type value.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples"),"\nThis example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE test.functionGenerateUUIDv4 (x UUID) ENGINE=CnchMergeTree ORDER BY x;\nINSERT INTO test.functionGenerateUUIDv4 SELECT generateUUIDv4();\nSELECT * FROM test.functionGenerateUUIDv4;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 a630fbcb-1a32-4902-b5cc-dd51eba8cf4b \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"touuid"},"toUUID"),(0,r.yg)("p",null,"Converts String type value to UUID type. Exception will be raised if input string is invalid uuid format."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID(String)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The UUID type value.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid, toTypeName(uuid) AS uuid_type;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid_type\u2500\u2510\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502 UUID      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"touuidornull"},"toUUIDOrNull"),(0,r.yg)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns NULL."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrNull(String)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Nullable(UUID) type value.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrNull('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"touuidorzero"},"toUUIDOrZero"),(0,r.yg)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns zero UUID."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrZero(String)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"String")," \u2014 string in uuid format.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The UUID type value.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Examples")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrZero('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 00000000-0000-0000-0000-000000000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.yg)("h2",{id:"generateuuidv4-1"},"generateUUIDv4"),(0,r.yg)("p",null,"Generates the ",(0,r.yg)("a",{parentName:"p",href:"https://bytedance.feishu.cn/sql-reference/data-types/uuid.md"},"UUID")," of ",(0,r.yg)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"version 4")," ."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ngenerateUUIDv4()\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("p",null,"The UUID type value."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Usage example")),(0,r.yg)("p",null,"This example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nCREATE TABLE t_uuid (x UUID) ENGINE=TinyLog\n\n\n\nINSERT INTO t_uuid SELECT generateUUIDv4()\n\n\n\nSELECT * FROM t_uuid\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u2510\n\n\u2502 f4bf890f-f9dc-4332-ad5c-0c18e73f28e9 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.yg)("h2",{id:"touuid-1"},"toUUID"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Syntax")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID (x)\n\n")),(0,r.yg)("p",null,"Converts String type value to UUID type."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUID(String)\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("p",null,"The UUID type value."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Usage example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.yg)("h2",{id:"touuidornull-1"},"toUUIDOrNull"),(0,r.yg)("p",null,"toUUIDOrNull (x)"),(0,r.yg)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns NULL."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrNull(String)\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("p",null,"The Nullable(UUID) type value."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Usage example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrNull('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500uuid\u2500\u2510\n\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,r.yg)("h2",{id:"touuidorzero-1"},"toUUIDOrZero"),(0,r.yg)("p",null,"toUUIDOrZero (x)"),(0,r.yg)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns zero UUID."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\ntoUUIDOrZero(String)\n\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returned value")),(0,r.yg)("p",null,"The UUID type value."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Usage example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"\nSELECT toUUIDOrZero('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plain%20text"},"\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\n\u2502 00000000-0000-0000-0000-000000000000 \u2502\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")))}y.isMDXComponent=!0}}]);