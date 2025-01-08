"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8979],{8860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(7953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,y=d["".concat(o,".").concat(g)]||d[g]||c[g]||l;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(5890),i=(n(7953),n(8860));const l={title:"Unique Key",sidebar_position:5,tags:["Docs"]},r="Unique Key",s={unversionedId:"table-design/unique-key",id:"table-design/unique-key",title:"Unique Key",description:"Introduction",source:"@site/docs/table-design/unique-key.mdx",sourceDirName:"table-design",slug:"/table-design/unique-key",permalink:"/docs/table-design/unique-key",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/table-design/unique-key.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:5,frontMatter:{title:"Unique Key",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Data Compression",permalink:"/docs/table-design/data-compression"},next:{title:"ELT Introduction",permalink:"/docs/elt/elt-introduction"}},o={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Use Cases for Real-Time Updates",id:"use-cases-for-real-time-updates",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Upsert Usage Example",id:"upsert-usage-example",level:3},{value:"UPDATE &amp; DELETE Usage Example",id:"update--delete-usage-example",level:3},{value:"Bucketing Example",id:"bucketing-example",level:3},{value:"Version Management Example",id:"version-management-example",level:3},{value:"Supported SQL Statements",id:"supported-sql-statements",level:3},{value:"SELECT",id:"select",level:4},{value:"INSERT",id:"insert",level:4},{value:"CREATE TABLE with UNIQUE KEY",id:"create-table-with-unique-key",level:4},{value:"DROP TABLE",id:"drop-table",level:4},{value:"DELETE TABLE",id:"delete-table",level:4},{value:"DELETE FROM db.table WHERE expr;",id:"delete-from-dbtable-where-expr",level:4},{value:"UNDROP TABLE",id:"undrop-table",level:4},{value:"TRUNCATE TABLE",id:"truncate-table",level:4},{value:"ALTER TABLE DROP PARTITION",id:"alter-table-drop-partition",level:4},{value:"OPTIMIZE TABLE",id:"optimize-table",level:4},{value:"RENAME TABLE",id:"rename-table",level:4},{value:"UPDATE TABLE",id:"update-table",level:4},{value:"Usage Restrictions",id:"usage-restrictions",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"unique-key"},"Unique Key"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"The ByConity Unique table is mainly used to implement the upsert functionality. This capability is a unique feature developed by the ByConity team, which can maintain efficient query performance while supporting primary key updates. It mainly solves the pain point that the open-source ClickHouse cannot support efficient update operations, helping businesses develop real-time analysis applications more easily. Users can implement upsert update write semantics by specifying a unique key UNIQUE KEY, and the query will automatically return the latest value of each unique key."),(0,i.yg)("p",null,"The Unique table mainly has the following characteristics:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Users configure the unique key through UNIQUE KEY, provide upsert update write semantics, and the query automatically returns the latest value of each unique key."),(0,i.yg)("li",{parentName:"ul"},"While ensuring real-time update capabilities, it still maintains high query performance with almost no loss."),(0,i.yg)("li",{parentName:"ul"},"Supports deleting rows by deleting fields."),(0,i.yg)("li",{parentName:"ul"},"Supports version management for specified fields, retaining only the latest version.")),(0,i.yg)("h2",{id:"use-cases-for-real-time-updates"},"Use Cases for Real-Time Updates"),(0,i.yg)("p",null,"Businesses need to perform real-time analysis on transactional data. During the process of synchronizing the OLTP database to the OLAP database, since order data, etc. need to support update capabilities, the OLAP database also requires support for real-time updates and deletions."),(0,i.yg)("p",null,"In another scenario, although there is no update, de-duplication is required. When developing real-time data, it is difficult to ensure that there are no duplicate data in the data stream, so the storage system usually needs to support idempotent writes of data."),(0,i.yg)("p",null,"The above scenarios can all be supported by the unique key upsert functionality, regardless of the need for idempotence or updates."),(0,i.yg)("h2",{id:"usage-examples"},"Usage Examples"),(0,i.yg)("h3",{id:"upsert-usage-example"},"Upsert Usage Example"),(0,i.yg)("p",null,"Create a database and the corresponding Unique table."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE upsertdb;\nCREATE TABLE IF NOT EXISTS upsertdb.uniquetable\n(\n  `event_time` DateTime,\n  `product_id` UInt64,\n  `city` String,\n  `category` String,\n  `amount` UInt32,\n  `revenue` UInt64\n)\nENGINE = CnchMergeTree()\nPARTITION BY toDate(event_time)\nORDER BY (city, category)\nUNIQUE KEY (product_id, sipHash64(city));\n-- UNIQUE KEY can contain multiple fields and expressions\n")),(0,i.yg)("p",null,"Insert the following fields in sequence:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO upsertdb.uniquetable VALUES\n('2020-10-29 23:40:00', 10001, 'Beijing', '\u7537\u88c5', 5, 500),\n('2020-10-29 23:40:00', 10002, 'Beijing', '\u7537\u88c5', 2, 200),\n('2020-10-29 23:40:00', 10003, 'Beijing', '\u7537\u88c5', 1, 100),\n('2020-10-29 23:50:00', 10002, 'Shanghai', '\u7537\u88c5', 4, 400),\n('2020-10-29 23:50:00', 10003, 'Beijing', '\u7537\u88c5', 2, 200),\n('2020-10-29 23:50:00', 10004, 'Beijing', '\u7537\u88c5', 1, 100);\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Writing data with the same key can implement an update (upsert semantics), that is, if the key does not exist, the data is inserted, otherwise this data is updated.")),(0,i.yg)("p",null,"Query the data in the table, and the de-duplication has been performed:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from upsertdb.uniquetable;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u252cproduct_id\u2500\u252c\u2500city\u2500\u2500\u252c\u2500category\u2500\u252c\u2500amount\u2500\u252c\u2500revenue\u2500\u2510\n\u2502 2020-10-29 23:40:00 \u2502 10001 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    5    \u2502    500 \u2502\n\u2502 2020-10-29 23:40:00 \u2502 10002 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    2    \u2502    200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10003 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    2    \u2502    200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10004 \u2502 Beijing  \u2502 \u7537\u88c5  \u2502    1    \u2502    100 \u2502\n\u2502 2020-10-29 23:50:00 \u2502 10002 \u2502 Shanghai \u2502 \u7537\u88c5  \u2502    4    \u2502    400 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.yg)("p",null,"Deletion: Delete the specified key by setting the virtual column ",(0,i.yg)("inlineCode",{parentName:"p"},"_delete_flag_=1"),"."),(0,i.yg)("p",null,"Insert data through the following statement and specify the delete flag:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Specify the delete field to delete the data, and when the delete field is set to a non-zero value, it indicates deletion, and when set to 0, it indicates a normal upsert operation\nINSERT INTO upsertdb.uniquetable (event_time, product_id, city, category, amount, revenue, _delete_flag_) VALUES\n('2020-10-29 23:50:00', 10001, 'Beijing', '\u7537\u88c5', 4, 400, 5),\n('2020-10-29 23:50:00', 10002, 'Beijing', '\u7537\u88c5', 2, 200, 1),\n('2020-10-29 23:50:00', 10004, 'Beijing', '\u7537\u88c5', 3, 600, 0);\n")),(0,i.yg)("p",null,"Check the effect after deletion:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select * from upsertdb.uniquetable order by toDate(event_time), product_id;\n")),(0,i.yg)("p",null,"It can be seen that the query result contains a row of data replacing ",(0,i.yg)("inlineCode",{parentName:"p"},"product_id=10004")," and deletes the old data of three rows where ",(0,i.yg)("inlineCode",{parentName:"p"},"product_id = 10001")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"10002")," and the city is 'Beijing'."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u252c\u2500product_id\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u252c\u2500category\u2500\u252c\u2500amount\u2500\u252c\u2500revenue\u2500\u2510\n\u2502 2020-10-29 23:50:00 \u2502      10002 \u2502 Shanghai \u2502 \u7537\u88c5     \u2502      4 \u2502     400 \u2502\n\u2502 2020-10-29 23:50:00 \u2502      10003 \u2502 Beijing  \u2502 \u7537\u88c5     \u2502      2 \u2502     200 \u2502\n\u2502 2020-10-29 23:50:00 \u2502      10004 \u2502 Beijing  \u2502 \u7537\u88c5     \u2502      3 \u2502     600 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.yg)("h3",{id:"update--delete-usage-example"},"UPDATE & DELETE Usage Example"),(0,i.yg)("p",null,"In the Unique table, you can refer to the following syntax to update and delete data."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Only for the syntax of the Unique Table\nUPDATE [db.]table SET a=b WHERE expr;\nDELETE FROM [db.]table WHERE expr;\n")),(0,i.yg)("p",null,"For example, perform update and delete operations through the following statements:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Update the specified field\nUpdate test.uniquetable set str = 'updated'  WHERE date = '2023-12-18';\n\n-- Delete the specified field\nDELETE FROM test.uniquetable WHERE product_id=10001;\n")),(0,i.yg)("h3",{id:"bucketing-example"},"Bucketing Example"),(0,i.yg)("p",null,"Suppose a user enables six computing nodes, and due to the large amount of data in a single partition, exceeding 200 million records, the application often performs aggregation and join operations based on the ",(0,i.yg)("inlineCode",{parentName:"p"},"c1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"c2")," fields. Therefore, it is decided to use a bucket table for optimization. The design options for the bucket table are as follows:"),(0,i.yg)("p",null,"Bucket key (CLUSTER Key) selection: Select the ",(0,i.yg)("inlineCode",{parentName:"p"},"c1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"c2")," columns as the bucket keys."),(0,i.yg)("p",null,"Number of buckets (Bucket): Twice the number of nodes: 12."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a table with bucketing\ncreate or replace table table_01 (c1 timestamp, c2 string, c3 number) cluster by (to_date(c1), c2) INTO 12 BUCKETS;\n\n-- Add buckets to existing data\nALTER TABLE t CLUSTER BY (column, expression,...) INTO 64 BUCKETS\n\n-- Add buckets to the cluster by multiple columns\nALTER TABLE t CLUSTER BY sipHash(a,b,c) INTO 64 BUCKETS\n")),(0,i.yg)("h3",{id:"version-management-example"},"Version Management Example"),(0,i.yg)("p",null,"The Unique table uses ",(0,i.yg)("inlineCode",{parentName:"p"},"ENGINE = CnchMergeTree(version)")," for version management. After defining the ",(0,i.yg)("inlineCode",{parentName:"p"},"version")," parameter, when inserting data, only the latest version of the record is retained. As shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--Create a unique table\nCREATE TABLE UniqTest\n(\n        `key` Int64,\n        `val` String,\n        `eventTime` DateTime\n)\nENGINE = CnchMergeTree(eventTime)\nORDER BY `key`\nPRIMARY KEY `key`\nUNIQUE KEY `key`\n\n--Insert two records separately, using eventTime as the version field to distinguish\ninsert into UniqTest VALUES (1, 'first', '2020-01-01 01:01:01');\ninsert into Uniqtest VALUES (1, 'econd', '2020-01-01 00:00:00');\n\n--After the insertion is complete, execute the query, and the second record, which is the old version of the data, will be ignored\nselect * from UniqTest\n\u250c\u2500key\u2500\u252c\u2500val\u2500\u2500\u2500\u252c\u2500eventTime\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1   \u2502 first \u2502 2020-01-01 01:01:01 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.yg)("h3",{id:"supported-sql-statements"},"Supported SQL Statements"),(0,i.yg)("h4",{id:"select"},"SELECT"),(0,i.yg)("h4",{id:"insert"},"INSERT"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"INSERT VALUES"),(0,i.yg)("li",{parentName:"ul"},"INSERT SELECT"),(0,i.yg)("li",{parentName:"ul"},"INSERT FORMAT"),(0,i.yg)("li",{parentName:"ul"},"INSERT INFILE"),(0,i.yg)("li",{parentName:"ul"},"Explanation\nPerformance in concurrent INSERT:"),(0,i.yg)("li",{parentName:"ul"},"For each unique table, insert is executed by a single thread."),(0,i.yg)("li",{parentName:"ul"},"Concurrent inserts are executed sequentially, so large-scale processing (insert infile) may take a long time.")),(0,i.yg)("h4",{id:"create-table-with-unique-key"},"CREATE TABLE with UNIQUE KEY"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Note:")),(0,i.yg)("p",null,"The following restrictions apply in this case:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Only ","[U]","Int8/16/32/64, Boolean, Date, DateTime, String data types can be used as UNIQUE KEY."),(0,i.yg)("li",{parentName:"ul"},"UNIQUE KEY cannot be used with CLUSTER BY (future support will be provided)."),(0,i.yg)("li",{parentName:"ul"},"The size of each String type UNIQUE KEY must be <= 1 MB (this value depends on max_string_size_for_unique_key), otherwise insert will fail.")),(0,i.yg)("h4",{id:"drop-table"},"DROP TABLE"),(0,i.yg)("h4",{id:"delete-table"},"DELETE TABLE"),(0,i.yg)("h4",{id:"delete-from-dbtable-where-expr"},"DELETE FROM ","[db.]","table WHERE expr;"),(0,i.yg)("h4",{id:"undrop-table"},"UNDROP TABLE"),(0,i.yg)("h4",{id:"truncate-table"},"TRUNCATE TABLE"),(0,i.yg)("h4",{id:"alter-table-drop-partition"},"ALTER TABLE DROP PARTITION"),(0,i.yg)("h4",{id:"optimize-table"},"OPTIMIZE TABLE"),(0,i.yg)("h4",{id:"rename-table"},"RENAME TABLE"),(0,i.yg)("h4",{id:"update-table"},"UPDATE TABLE"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name\n    SET assignment_list\n    [WHERE where_condition]\n    [ORDER BY...] \n    [LIMIT...]\n")),(0,i.yg)("h2",{id:"usage-restrictions"},"Usage Restrictions"),(0,i.yg)("p",null,"Currently, the default is to perform de-duplication at the partition level, that is, the unique id will implement the upsert capability in the same partition, and duplicates may occur in different partitions."),(0,i.yg)("p",null,"When importing from a Kafka data source, users need to ensure that the data with the same unique key is written to the same Topic Partition and Topic expansion is disabled."),(0,i.yg)("p",null,"The unique key Unique Key can support a maximum of 10 fields."))}c.isMDXComponent=!0}}]);