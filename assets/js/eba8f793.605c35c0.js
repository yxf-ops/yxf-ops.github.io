"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6316],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(75890),r=(n(37953),n(58860));const o={title:"Stream Import",sidebar_position:1,tags:["Docs"]},i="Importing Data",s={unversionedId:"data-import/import-methods/stream-import",id:"version-0.3.0/data-import/import-methods/stream-import",title:"Stream Import",description:"Streaming Data Import (Local Files and In-Memory Data)",source:"@site/versioned_docs/version-0.3.0/data-import/import-methods/stream-import.mdx",sourceDirName:"data-import/import-methods",slug:"/data-import/import-methods/stream-import",permalink:"/docs/0.3.0/data-import/import-methods/stream-import",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.3.0/data-import/import-methods/stream-import.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:1,frontMatter:{title:"Stream Import",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Import Tuning",permalink:"/docs/0.3.0/data-import/data-import-tuning"},next:{title:"Import from HDFS",permalink:"/docs/0.3.0/data-import/import-methods/import-from-hdfs"}},l={},p=[{value:"Streaming Data Import (Local Files and In-Memory Data)",id:"streaming-data-import-local-files-and-in-memory-data",level:2},{value:"Method 1: Using Conventional Syntax with VALUES Format",id:"method-1-using-conventional-syntax-with-values-format",level:3},{value:"Method 2: Using Syntax with Specified Format",id:"method-2-using-syntax-with-specified-format",level:3},{value:"Method 3: Using SELECT Clause",id:"method-3-using-select-clause",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"importing-data"},"Importing Data"),(0,r.yg)("h2",{id:"streaming-data-import-local-files-and-in-memory-data"},"Streaming Data Import (Local Files and In-Memory Data)"),(0,r.yg)("p",null,"ByConity provides three methods to stream data from local files and in-memory sources. These methods cover simple insertion of test data, importing data from various file formats, and saving query results. Different methods are suitable for different use cases, but please note that some advanced features may result in performance degradation."),(0,r.yg)("h3",{id:"method-1-using-conventional-syntax-with-values-format"},"Method 1: Using Conventional Syntax with VALUES Format"),(0,r.yg)("p",null,"This method is suitable for temporarily inserting small amounts of data for testing. The syntax is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO [db.]table [(c1, c2, c3...)] VALUES (v11, v12, v13), (v21, v22, v23), ...\n")),(0,r.yg)("p",null,"Here, ",(0,r.yg)("inlineCode",{parentName:"p"},"c1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"c2"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"c3")," are column declarations that can be omitted. ",(0,r.yg)("inlineCode",{parentName:"p"},"VALUES")," is followed by the data to be written in the form of tuples, corresponding to the column declarations by index. Data can be written in batches, with multiple rows separated by commas."),(0,r.yg)("p",null,"For example, for the following table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE TABLE test.insert_select_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8,\n    `date` Date\n)\nENGINE = CnchMergeTree()\nPARTITION by toYYYYMM(date)\nORDER BY tuple()\n")),(0,r.yg)("p",null,"You can use the following statement to insert data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO insert_select_testtable VALUES (1, 'a', 1,'2022-11-10');\n")),(0,r.yg)("p",null,"You can also include expressions or functions when writing data, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO insert_select_testtable VALUES (1, 'a', 1, now());\n")),(0,r.yg)("h3",{id:"method-2-using-syntax-with-specified-format"},"Method 2: Using Syntax with Specified Format"),(0,r.yg)("p",null,"This method uses syntax with a specified format to insert data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO [db.]table [(c1, c2, c3...)] FORMAT format_name data_set\n")),(0,r.yg)("p",null,"ByConity supports various data formats. Taking the commonly used CSV format as an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO insert_select_testtable FORMAT CSV\n1, 'a', 1, '2022-11-10'\n2, 'b', 2, '2022-11-11'\n")),(0,r.yg)("p",null,"You can also insert data from a file into a table. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT format_name INFILE file_name\n")),(0,r.yg)("p",null,"Using the above statement, you can read data from a client file and insert it into a table. Both ",(0,r.yg)("inlineCode",{parentName:"p"},"file_name")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," are of the ",(0,r.yg)("inlineCode",{parentName:"p"},"String")," type, and the input file format must be set in the ",(0,r.yg)("inlineCode",{parentName:"p"},"FORMAT")," statement."),(0,r.yg)("h3",{id:"method-3-using-select-clause"},"Method 3: Using SELECT Clause"),(0,r.yg)("p",null,"This method is suitable for saving the results of a query for subsequent retrieval:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO [db.]table [(c1, c2, c3...)] SELECT ...\n")),(0,r.yg)("p",null,"The correspondence between the columns when writing and the columns in the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," statement is based on position, even if the names in the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," expression and ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT")," statement are different. If necessary, corresponding type conversions will be performed."),(0,r.yg)("p",null,"For example, if you want to write data from ",(0,r.yg)("inlineCode",{parentName:"p"},"insert_select_testtable_1")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"insert_select_testtable"),", you can use the following statement:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO insert_select_testtable SELECT * FROM insert_select_testtable_1\n")),(0,r.yg)("p",null,"When writing data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," clause, you can also include expressions or functions, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"INSERT INTO insert_select_testtable SELECT 1, 'a', 1, now();\n")),(0,r.yg)("p",null,"Although both the ",(0,r.yg)("inlineCode",{parentName:"p"},"VALUES")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," clause formats support declaring expressions or functions, these can introduce additional performance overhead, leading to reduced write performance. Therefore, if you are seeking optimal write performance, you should avoid using them."))}c.isMDXComponent=!0}}]);