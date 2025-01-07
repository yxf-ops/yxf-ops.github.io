"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4169],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(75890),o=(r(37953),r(58860));const a={title:"\u57fa\u672c\u64cd\u4f5c",sidebar_position:2,tags:["Docs"]},l="\u57fa\u672c\u64cd\u4f5c",i={unversionedId:"quick-start/basic-database-operations",id:"quick-start/basic-database-operations",title:"\u57fa\u672c\u64cd\u4f5c",description:"\u672c\u6559\u7a0b\u6307\u5bfc\u7528\u6237\u5982\u4f55\u5728Docker\u90e8\u7f72\u73af\u5883\u4e0b\uff0c\u4f7f\u7528ByConity\u521b\u5efa\u8868\u3001\u5bfc\u5165\u6570\u636e\u3001\u67e5\u8be2\u6570\u636e\u7b49\u57fa\u672c\u64cd\u4f5c\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/quick-start/basic-database-operations.mdx",sourceDirName:"quick-start",slug:"/quick-start/basic-database-operations",permalink:"/zh-cn/docs/quick-start/basic-database-operations",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/quick-start/basic-database-operations.mdx",tags:[{label:"Docs",permalink:"/zh-cn/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"\u57fa\u672c\u64cd\u4f5c",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Docker\u90e8\u7f72",permalink:"/zh-cn/docs/quick-start/docker-deploy"},next:{title:"\u90e8\u7f72\u8981\u6c42",permalink:"/zh-cn/docs/deployment/deployment-requirements"}},s={},c=[{value:"\u5efa\u8868",id:"\u5efa\u8868",level:2},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u5199\u5165\u6587\u4ef6",id:"\u5199\u5165\u6587\u4ef6",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2},{value:"\u67e5\u770b\u5386\u53f2\u67e5\u8be2",id:"\u67e5\u770b\u5386\u53f2\u67e5\u8be2",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,o.yg)("p",null,"\u672c\u6559\u7a0b\u6307\u5bfc\u7528\u6237\u5982\u4f55\u5728Docker\u90e8\u7f72\u73af\u5883\u4e0b\uff0c\u4f7f\u7528ByConity\u521b\u5efa\u8868\u3001\u5bfc\u5165\u6570\u636e\u3001\u67e5\u8be2\u6570\u636e\u7b49\u57fa\u672c\u64cd\u4f5c\u3002"),(0,o.yg)("h2",{id:"\u5efa\u8868"},"\u5efa\u8868"),(0,o.yg)("p",null,"\u8fde\u63a5\u6570\u636e\u5e93"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./clickhouse-client -m -h HOST --port PORT\n")),(0,o.yg)("p",null,"\u521b\u5efa\u6570\u636e\u5e93"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CREATE DATABASE IF NOT EXISTS helloworld;\nuse helloworld;\n")),(0,o.yg)("p",null,"\u521b\u5efa\u5e93\u8868"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"CREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime\n)\nENGINE = CnchMergeTree()\nPARTITION BY timestamp\nORDER BY (user_id, timestamp);\n")),(0,o.yg)("p",null,"\u67e5\u770b\u8868\u4fe1\u606f"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SHOW TABLES;\nDESC my_first_table;\n\u5199\u5165\u6570\u636e\nINSERT INTO helloworld.my_first_table (user_id, message, timestamp) VALUES\n    (101, 'Hello, ByConity!',                                 now()),\n    (102, 'Insert a lot of rows per batch',                     yesterday()),\n    (102, 'Sort your data based on your commonly-used queries', today()),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5);\n")),(0,o.yg)("h2",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,o.yg)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u9700\u6c42\uff0cByConity\u652f\u6301\u4e865\u79cd\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u672c\u5730\u6587\u4ef6\u5bfc\u5165\u3001HDFS\u5bfc\u5165\u3001Kafka\u5bfc\u5165\u3001Spark\u5bfc\u5165\u3001MySQL\u5bfc\u5165\u3001Hive\u5916\u8868\u5bfc\u5165\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u6587\u6863#\u6570\u636e\u5bfc\u5165#\u90e8\u5206\u3002\u8fd9\u91cc\u4ee5\u672c\u5730\u6587\u4ef6\u5bfc\u5165\u4e3a\u4f8b\u7b80\u5355\u8bf4\u660e\u4e0bByConity\u5982\u4f55\u5199\u5165\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\u3002"),(0,o.yg)("h2",{id:"\u5199\u5165\u6587\u4ef6"},"\u5199\u5165\u6587\u4ef6"),(0,o.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u6570\u636e\u6587\u4ef6 data.csv"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"102,This is data in a file,2022-02-22 10:43:28\n101,It is comma-separated,2022-02-23 00:00:00\n103,Use FORMAT to specify the format,2022-02-21 10:43:30\n...\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"./clickhouse-client -h {HOST} --port {PORT} --query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n\n./clickhouse-client -h {HOST} --port {PORT} --query='SELECT * FROM helloworld.my_first_table'\n")),(0,o.yg)("h2",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,o.yg)("p",null,"ByConity\u652f\u6301\u901a\u8fc7\u7b80\u5355\u7684\u67e5\u8be2\u8bed\u53e5"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SELECT * FROM helloworld.my_first_table;\n\nSELECT * FROM helloworld.my_first_table ORDER BY timestamp;\n\nSELECT *\u3000FROM helloworld.my_first_table\u3000ORDER BY timestamp\u3000FORMAT JSON;\n")),(0,o.yg)("h2",{id:"\u67e5\u770b\u5386\u53f2\u67e5\u8be2"},"\u67e5\u770b\u5386\u53f2\u67e5\u8be2"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/query_log/"},"https://clickhouse.com/docs/en/operations/system-tables/query_log/")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SELECT * FROM system.query_log;\n\n")))}y.isMDXComponent=!0}}]);