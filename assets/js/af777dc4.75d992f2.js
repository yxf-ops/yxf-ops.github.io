"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9944],{8860:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var i=t(7953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=a,y=c["".concat(o,".").concat(p)]||c[p]||u[p]||s;return t?i.createElement(y,r(r({ref:n},g),{},{components:t})):i.createElement(y,r({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<s;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(5890),a=(t(7953),t(8860));const s={title:"Indexes",sidebar_position:3,tags:["Docs"]},r="Indexes",l={unversionedId:"table-design/indexes",id:"table-design/indexes",title:"Indexes",description:"Full-Text Search",source:"@site/docs/table-design/indexes.mdx",sourceDirName:"table-design",slug:"/table-design/indexes",permalink:"/docs/table-design/indexes",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/table-design/indexes.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Indexes",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Table Engines",permalink:"/docs/table-design/table-engine"},next:{title:"Data Compression",permalink:"/docs/table-design/data-compression"}},o={},d=[{value:"Full-Text Search",id:"full-text-search",level:2},{value:"Indexing Methods",id:"indexing-methods",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Basic Syntax",id:"basic-syntax",level:4},{value:"Tokenization",id:"tokenization",level:4},{value:"Ngram Tokenization",id:"ngram-tokenization",level:4},{value:"Chinese Text Indexing",id:"chinese-text-indexing",level:4},{value:"Usage Example",id:"usage-example",level:3},{value:"Query Statements",id:"query-statements",level:3},{value:"Skip Indexes",id:"skip-indexes",level:2},{value:"Usage Limitations",id:"usage-limitations",level:3},{value:"Creating Skip Indexes",id:"creating-skip-indexes",level:3},{value:"Skip Index Syntax Example",id:"skip-index-syntax-example",level:4},{value:"Supported Data Types",id:"supported-data-types",level:4},{value:"MinMax",id:"minmax",level:5},{value:"Set",id:"set",level:5},{value:"Bloom Filter Types",id:"bloom-filter-types",level:5},{value:"Usage Examples",id:"usage-examples",level:3},{value:"Loading Dataset into",id:"loading-dataset-into",level:4},{value:"Creating a Table without Indexes",id:"creating-a-table-without-indexes",level:4},{value:"Adding Indexes",id:"adding-indexes",level:4},{value:"Adding an Index to a New Table",id:"adding-an-index-to-a-new-table",level:5},{value:"Adding an Index for Subsequent Data in an Existing Table",id:"adding-an-index-for-subsequent-data-in-an-existing-table",level:5},{value:"Adding an Index for Historical Data",id:"adding-an-index-for-historical-data",level:5},{value:"Dropping an Index",id:"dropping-an-index",level:4},{value:"Usage Suggestions",id:"usage-suggestions",level:3}],g={toc:d},c="wrapper";function u(e){let{components:n,...s}=e;return(0,a.yg)(c,(0,i.A)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"indexes"},"Indexes"),(0,a.yg)("h2",{id:"full-text-search"},"Full-Text Search"),(0,a.yg)("p",null,"Full-text search (or simply text search) provides the ability to identify natural language documents that satisfy a query. The most common type of search is to find all documents containing a given query term. Full-text indexing allows preprocessing of documents and saves the index for rapid future searches. We support faster text retrieval and filtering by adding the ability of inverted text indexing."),(0,a.yg)("p",null,"ByConity supports full-text search through SQL syntax, and this article will introduce how to create full-text indexes and perform queries."),(0,a.yg)("h3",{id:"indexing-methods"},"Indexing Methods"),(0,a.yg)("p",null,"Currently, full-text search supports three text tokenization indexing methods:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Language Tokenization: Tokenization processes text by splitting it on spaces and punctuation, typically suitable for languages like English that have obvious word boundaries defined by spaces and punctuation."),(0,a.yg)("li",{parentName:"ul"},"Ngram Tokenization: Ngram tokenization splits text when encountering specified characters (e.g., whitespace, punctuation) and then returns N-grams of each word of the specified length. It is often used for languages that do not use spaces or have long compound words."),(0,a.yg)("li",{parentName:"ul"},"Chinese Tokenization: Chinese tokenization utilizes statistical models like Hidden Markov Models to tokenize Chinese text. Users can flexibly configure models and dictionaries for tokenization.")),(0,a.yg)("h3",{id:"syntax"},"Syntax"),(0,a.yg)("h4",{id:"basic-syntax"},"Basic Syntax"),(0,a.yg)("p",null,"An example of the basic syntax for creating full-text search is as follows. Depending on the indexing method, we need to set different values in ",(0,a.yg)("inlineCode",{parentName:"p"},"inverted()"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Creating an index during table creation\nCREATE TABLE tab\n(\n    `key` UInt64,\n    `str` String,\n    INDEX inv_idx(str) TYPE inverted(0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY key\nSETTINGS index_granularity = 1024;\n\n-- Adding a full-text index\nALTER TABLE  {table_name} ADD INDEX {index_name} {column_to_index} TYPE {index_type_and_arguments} GRANULARITY {index_granularity};\n\n-- Materializing an index\nALTER TABLE {table_name}  MATERIALIZE INDEX {index_name};\n\n-- Dropping an index\nALTER TABLE  {table_name} DROP INDEX {index_name};\nALTER TABLE  {table_name} CLEAR INDEX {index_name};\n")),(0,a.yg)("h4",{id:"tokenization"},"Tokenization"),(0,a.yg)("p",null,"When setting ",(0,a.yg)("inlineCode",{parentName:"p"},"inverted(0)")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"inverted()"),', the tokenizer will be set to "tokens," which splits strings along spaces.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_inverted_with_token\n(\n    `key` UInt64,\n    `doc` String,\n    -- low(doc) converts only English letters to lowercase for text processing --\n    -- Tokenization is used by default if not specified --\n    INDEX doc_idx lower(doc) TYPE inverted GRANULARITY 1 \n)\nENGINE = CnchMergeTree()\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h4",{id:"ngram-tokenization"},"Ngram Tokenization"),(0,a.yg)("p",null,"Setting ",(0,a.yg)("inlineCode",{parentName:"p"},"inverted(N)")," uses the N-gram tokenizer, where N ranges from ","[2, 8]","."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_inverted_with_ngram\n(\n    `key` UInt64,\n    `doc` String,\n    -- low(doc) converts only English letters to lowercase for text processing --\n    -- The specified number N represents using N-grams for text tokenization --\n    INDEX doc_idx lower(doc) TYPE inverted(4) GRANULARITY 1\n)\nENGINE = CnchMergeTree()\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h4",{id:"chinese-text-indexing"},"Chinese Text Indexing"),(0,a.yg)("p",null,"ByConity can index Chinese text using a default configured dictionary."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_gin.ch_docs\n(\n    `key` UInt64,\n    `doc` String,\n    -- token_chinese_default represents using the token_chinese_default tokenizer --\n    -- default represents using the default configuration --\n    -- Density range (0 - 1.0] controls the frequency of tokenization to ignore high-frequency terms --\n    INDEX inv_idx doc TYPE inverted('token_chinese_default', 'default', 1.0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY key\nSETTINGS index_granularity = 1024;\n")),(0,a.yg)("h3",{id:"usage-example"},"Usage Example"),(0,a.yg)("p",null,"Assuming a database contains Chinese literary works data, we can create tables and import data for testing using ngram + Chinese tokenization."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Original table\nCREATE TABLE test_gin.ch_docs\n(\n    `row` UInt64,\n    `doc` String\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\n-- ... data loading ...\n\n-- Chinese tokenization table\nCREATE TABLE test_gin.ch_docs_ch\n(\n    `row` UInt64,\n    `doc` String,\n    INDEX inv_idx doc TYPE inverted('token_chinese_default', 'default', 1.0) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\n-- ... data loading ...\n\n-- 2-gram tokenization table\nCREATE TABLE test_gin.ch_docs_ngram\n(\n    `row` UInt64,\n    `doc` String,\n    INDEX inv_idx doc TYPE inverted(2) GRANULARITY 1\n)\nENGINE = CnchMergeTree\nORDER BY row\nSETTINGS index_granularity = 1024;\n\n-- ... data loading ...\n")),(0,a.yg)("p",null,"Query statements:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select count() from test_gin.ch_docs where doc like '%\u5c71\u4e1c%'; \nselect count() from test_gin.ch_docs_ch where doc like '%\u5c71\u4e1c%'; \nselect count() from test_gin.ch_docs_ngram where doc like '%\u5c71\u4e1c%'; \n\nselect count() from test_gin.ch_docs where doc like '%\u6ea5\u4eea%'; \nselect count() from test_gin.ch_docs_ch where doc like '%\u6ea5\u4eea%';\nselect count() from test_gin.ch_docs_ngram where doc like '%\u6ea5\u4eea%';\n")),(0,a.yg)("h3",{id:"query-statements"},"Query Statements"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(121).A,width:"570",height:"727"})),(0,a.yg)("h2",{id:"skip-indexes"},"Skip Indexes"),(0,a.yg)("p",null,"When dealing with large amounts of data, query performance can deteriorate as a complete scan of every column value may be required to apply WHERE clause conditions."),(0,a.yg)("p",null,"To address this, ByConity supports data skipping indexes, enabling skipping of significant data blocks confirmed to contain no matching values."),(0,a.yg)("h3",{id:"usage-limitations"},"Usage Limitations"),(0,a.yg)("p",null,"Unsupported index types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"bloom_filter indexes;"),(0,a.yg)("li",{parentName:"ul"},"indexes for nullable data types.")),(0,a.yg)("h3",{id:"creating-skip-indexes"},"Creating Skip Indexes"),(0,a.yg)("p",null,"Users can only apply data skip indexes on the MergeTree table family. These indexes involve four main parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Index Name"),": Used as an identifier for creating index files. It is a necessary parameter for operations like deleting or materializing indexes."),(0,a.yg)("li",{parentName:"ul"},"Index Expression: The index expression is a formula used to calculate and determine the range of values stored in the index. It can contain a combination of columns, basic operators, and a specified subset of functions specified by the index type."),(0,a.yg)("li",{parentName:"ul"},"Type: The type of index defines the computations that enable skipping reading and evaluating each index block."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Granularity"),': Each index block consists of a defined number of granules, determined by the granularity parameter. For example, if the main table index granularity is 8192 rows, and the index granularity is set to 4, each index "block" will contain 32,768 rows (8192 rows x 4 granules).')),(0,a.yg)("h4",{id:"skip-index-syntax-example"},"Skip Index Syntax Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"/*\nIndex Name: key_i_idx\nIndex expression: key_i\nType: minmax\nGranularity: 1\n*/\nINDEX key_i_idx key_i TYPE minmax GRANULARITY 1, \n")),(0,a.yg)("h4",{id:"supported-data-types"},"Supported Data Types"),(0,a.yg)("h5",{id:"minmax"},"MinMax"),(0,a.yg)("p",null,"This efficient indexing method operates without any specific parameters. It keeps the minimum and maximum values of the index expression for each block. For tuple expressions, it keeps the extremities of each element in the tuple separately. It is most effective for columns that tend to loosely sort values. Among various index types, this index type is often the most cost-effective during query execution. However, note that this index only applies to scalar or tuple expressions and cannot be used with expressions that generate array or map data types."),(0,a.yg)("h5",{id:"set"},"Set"),(0,a.yg)("p",null,"This lightweight index type allows using a single parameter, max_size, representing the set of values per block. When set to 0, it accommodates an unlimited number of distinct values within a block. The set contains all values in the block (or is empty if the number of values exceeds max_size). Depending on the overall cardinality, this index type is particularly effective for columns where values cluster together within each granule."),(0,a.yg)("p",null,"The cost, performance, and effectiveness of this index depend on the cardinality within those blocks. If each block has a large number of unique values, the cost of evaluating query conditions against large index sets can become high. Alternatively, if the set is empty due to exceeding the specified max_size, the index will not be applied."),(0,a.yg)("h5",{id:"bloom-filter-types"},"Bloom Filter Types"),(0,a.yg)("p",null,"Bloom filters are compact data structures designed to efficiently test set membership with a small probability of false positives. In the context of skip indexes, this is not a significant issue as they would only lead to reading some additional, unnecessary blocks. However, it is worth noting that the potential for false positives implies that the index expression should evaluate to true. Otherwise, valid data may be unintentionally skipped. Care should be taken when designing index expressions to minimize the risk of false positives and ensure accurate skipping of irrelevant blocks."),(0,a.yg)("p",null,"Bloom filters are particularly effective for efficiently testing a large number of discrete values, making them suitable for scenarios involving numerous conditional expression evaluations. Specifically, Bloom filter indexes can be applied to arrays, where each value in the array is tested. Additionally, they can be utilized on maps by converting keys or values to arrays using functions like ",(0,a.yg)("inlineCode",{parentName:"p"},"mapKeys")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"mapValues"),". This adjustment allows for evaluating the membership of elements within arrays or maps, thereby enhancing the indexing capabilities of such data structures."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The dedicated ",(0,a.yg)("inlineCode",{parentName:"p"},"tokenbf_v1")," index is tailored for enhanced Bloom filter functionality and requires adjusting three related parameters:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Filter size (in bytes): This parameter controls the size of the Bloom filter in bytes. A larger filter can reduce the probability of false positives at the cost of increased storage space."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Number of hash functions"),": The number of hash functions applied to the Bloom filter. Using more hash functions helps reduce false positives."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hash function seeds"),": Seeds used to generate the hash functions for the Bloom filter.")),(0,a.yg)("p",{parentName:"li"},'This index is only applicable to data of types String, FixedString, and Map. Input expressions are split into sequences of characters delimited by non-alphanumeric characters. For example, the column value "This is a candidate for a \'full text\' search" would be split into "This is a candidate for full text search".'),(0,a.yg)("p",{parentName:"li"},"The index is used for searching words and other values in long strings using functions like LIKE, EQUALS, IN, hasToken(), and similar. For instance, a possible use case is searching for a small number of class names or line numbers in unstructured application log columns.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The specialized ",(0,a.yg)("inlineCode",{parentName:"p"},"ngrambf_v1")," index shares the same functionality as ",(0,a.yg)("inlineCode",{parentName:"p"},"tokenbf_v1"),'. It requires an additional parameter before Bloom filter settings, specifying the size of the n-gram to be indexed. An n-gram is any string of length n. For example, if n is 4, "A short string" would be segmented into "A sh", "sho", "hor", "ort", "rts", "t st", "str", "tri", "rin", "ing". This index is also useful for text searches, especially in languages without word boundaries, such as Chinese.'))),(0,a.yg)("h3",{id:"usage-examples"},"Usage Examples"),(0,a.yg)("h4",{id:"loading-dataset-into"},"Loading Dataset into"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE IF EXISTS test_si;\nCREATE DATABASE test_si;\n\n--create table to load numbers_source.csv dataset\nCREATE TABLE test_si.numbers\n(\n    `number` UInt64\n)\nENGINE = CnchMergeTree\nORDER BY number;\n")),(0,a.yg)("p",null,"Download the file below and load the dataset into the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_si.numbers")," table using data loading functionality.\n",(0,a.yg)("img",{src:t(9035).A})),(0,a.yg)("h4",{id:"creating-a-table-without-indexes"},"Creating a Table without Indexes"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"USE test_si;\n\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 10000000;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"If we run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--Simple query to select all rows from the table test_skipindex where the key_i column has values of 200 or 700\nselect * from `test_skipindex` where key_i in (200, 700);\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(5272).A,width:"1770",height:"262"})),(0,a.yg)("p",null,"This shows that without an index, 1 million rows of data were processed."),(0,a.yg)("h4",{id:"adding-indexes"},"Adding Indexes"),(0,a.yg)("h5",{id:"adding-an-index-to-a-new-table"},"Adding an Index to a New Table"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si;\n\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date,\n\n--Add index during creation of table\n    INDEX key_i_idx key_i TYPE minmax GRANULARITY 1\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id\n--If we do not set the index_granularity, default would be 8192\nSETTINGS index_granularity = 8192;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"Running the same command as before:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"--Simple query to select all rows from the table test_skipindex where the key_i column has values of 200 or 700\nselect * from `test_skipindex` where key_i in (200, 700); \n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(883).A,width:"1774",height:"262"})),(0,a.yg)("p",null,"The results indicate that with the index, only 8192 rows were processed, and the execution was faster."),(0,a.yg)("h5",{id:"adding-an-index-for-subsequent-data-in-an-existing-table"},"Adding an Index for Subsequent Data in an Existing Table"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si;\n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Add index after creation of table\nALTER TABLE test_si.test_skipindex ADD index key_i_idx key_i TYPE minmax GRANULARITY 1;\n\n--Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("p",null,"If we run the same command, the result will be that 1 million rows are processed."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(5322).A,width:"1806",height:"268"})),(0,a.yg)("p",null,"This is because data added before creating the index is considered historical data, and for historical data, we must perform an additional step to build the index."),(0,a.yg)("h5",{id:"adding-an-index-for-historical-data"},"Adding an Index for Historical Data"),(0,a.yg)("p",null,"To build an index for historical data, you need to use ",(0,a.yg)("inlineCode",{parentName:"p"},"MATERIALIZE INDEX")," in the command. If you use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ALTER TABLE...ADD")," command without ",(0,a.yg)("inlineCode",{parentName:"p"},"MATERIALIZE INDEX"),", an index will only be generated for newly written data."),(0,a.yg)("p",null,"*--Run this additional code block"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_si.test_skipindex MATERIALIZE INDEX key_i_idx;\n")),(0,a.yg)("p",null,"The query results indicate that the historical data index has been successfully added. Only 8192 rows are processed, and the speed is faster."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(5749).A,width:"1832",height:"238"})),(0,a.yg)("p",null,"Adding an Index for Specific Partitions of Historical Data"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MATERIALIZE INDEX")," by default generates indexes for all historical data. If you want to add specific partitions to the historical data, you must use ",(0,a.yg)("inlineCode",{parentName:"p"},"IN PARTITION")," along with ",(0,a.yg)("inlineCode",{parentName:"p"},"MATERIALIZE INDEX"),". This means that only the specified partition will have an index generated."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE if EXISTS test_si.test_skipindex;\nUSE test_si; \n--Table creation\nCREATE TABLE test_skipindex\n(\n    `id` UInt64,\n    `key_i` UInt64,\n    `p_date` Date\n)\nENGINE = CnchMergeTree\nPARTITION BY p_date\nORDER BY id;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()\nFROM test_si.numbers\nLIMIT 1000000;\n\n--Insert test dataset into table \nINSERT INTO test_skipindex SELECT\n    number,\n    number,\n    today()-1\nFROM test_si.numbers\nLIMIT 1000000;\n\nALTER TABLE test_si.test_skipindex ADD index key_i_idx key_i TYPE minmax GRANULARITY 1;\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"-- Assuming the date of the day before today is 20230927, index is generated only for the 20230927 date partition \nALTER TABLE test_si.test_skipindex MATERIALIZE INDEX key_i_idx IN PARTITION '20230927';\n\n-- Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1 AND p_date = today()-1;\n\n-- Check to see if data has been added successfully\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1 AND p_date = today();\n")),(0,a.yg)("p",null,"If we run a simple query as shown in the following image, we can see that the historical data in the partition '20230927' ","[today() - 1]"," has had an index generated for it."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(3484).A,width:"1814",height:"502"})),(0,a.yg)("p",null,"For historical data in partitions that are not specifically mentioned, no index will be generated."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(9796).A,width:"1810",height:"510"})),(0,a.yg)("h4",{id:"dropping-an-index"},"Dropping an Index"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_si.test_skipindex DROP INDEX key_i_idx;\n\nSHOW CREATE TABLE test_skipindex;\n\nSELECT sum(id) FROM test_skipindex WHERE key_i = 1;\n")),(0,a.yg)("h3",{id:"usage-suggestions"},"Usage Suggestions"),(0,a.yg)("p",null,"Generally speaking, when the amount of data is small, the cost of creating an index is not very high. However, if we wish to create indexes for the entire historical data set, and the data volume is very large, directly using MATERIALIZE INDEX to add indexes for all historical data may put some strain on the cluster's load. In such cases, we recommend using IN PARTITION to create indexes by partition."))}u.isMDXComponent=!0},5272:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-1-300a020adfb829163072e524e6b53e7d.png"},883:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-2-561e91554d8bab4c719fa7c99a574186.png"},5322:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-3-af2ab81e355bd7a8083654c3e549f3e8.png"},5749:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-4-b89aed780f6dd689fc6a19a4ec3f5a15.png"},3484:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-5-14872ce99600d0cd9e8ade415b1d2f8a.png"},9796:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-6-da025fa2795acabbc33823fc6730e396.png"},121:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/index-query-6f7c70c06be264de7376076ac280f145.png"},9035:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/numbers_source-64b30384649beb67375743c5cba5e9ae.csv"}}]);