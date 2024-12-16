"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7051],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),y=r,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},99700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(75890),r=(a(37953),a(58860));const i={title:"Data Export",tags:["Docs"]},o="Exporting Data",l={unversionedId:"data-export/data-export-method",id:"data-export/data-export-method",title:"Data Export",description:"This tutorial aims to guide users on how to export data from tables in ByConity to different file systems or databases, as well as how to export query results. Currently, ByConity supports exporting data to local file systems and HDFS (Hadoop Distributed FileSystem).",source:"@site/docs/data-export/data-export-method.mdx",sourceDirName:"data-export",slug:"/data-export/data-export-method",permalink:"/docs/data-export/data-export-method",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-export/data-export-method.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"Data Export",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deployment Settings",permalink:"/docs/deployment/deployment-settings"},next:{title:"Data Description",permalink:"/docs/data-import/data-introduction"}},p={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Exporting to Local",id:"exporting-to-local",level:2},{value:"Exporting to HDFS",id:"exporting-to-hdfs",level:2},{value:"Migrating Data Using the Dumper Tool",id:"migrating-data-using-the-dumper-tool",level:2}],d={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"exporting-data"},"Exporting Data"),(0,r.yg)("p",null,"This tutorial aims to guide users on how to export data from tables in ByConity to different file systems or databases, as well as how to export query results. Currently, ByConity supports exporting data to local file systems and HDFS (Hadoop Distributed FileSystem)."),(0,r.yg)("h2",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,"Ensure that you are familiar with the basic operations of ByConity and the use of SQL syntax."),(0,r.yg)("h2",{id:"exporting-to-local"},"Exporting to Local"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a sample table and insert data:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.select_outfile_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8,\n    `date` Date\n)\nENGINE = CnchMergeTree()\nPARTITION by toYYYYMM(date)\nORDER BY tuple()\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Insert data:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.select_outfile_testtable VALUES (1, 'a', 1,'2022-11-10'), (2, 'b', 2,'2022-11-11'), (3, 'c', 3,'2022-11-12'), (4, 'd', 4,'2022-11-13');\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Use the ",(0,r.yg)("inlineCode",{parentName:"li"},"SELECT ... INTO OUTFILE")," statement to export data as a CSV file:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.select_outfile_testtable INTO OUTFILE 'select.csv' FORMAT CSV\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Output result:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\u279c  ~ cat select.csv\n1,"a",1,"2022-11-10"\n2,"b",2,"2022-11-11"\n3,"c",3,"2022-11-12"\n4,"d",4,"2022-11-13"\n')),(0,r.yg)("h2",{id:"exporting-to-hdfs"},"Exporting to HDFS"),(0,r.yg)("p",null,"Using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT ... INTO OUTFILE")," statement, you can export data to HDFS. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT <expr_list> INTO OUTFILE 'hdfs://ip:port/user/tiger/test/test.gz' FORMAT format_name\n")),(0,r.yg)("p",null,"Where ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://ip:port/user/tiger/test/test.gz")," is the HDFS address for uploading, with the following format:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hdfs://")," is a fixed prefix indicating upload to HDFS; ",(0,r.yg)("inlineCode",{parentName:"li"},"ip")," is the hdfs namenode service address."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"/user/tiger/test/test.gz")," is the path of the output file. Note that the hdfs directory path must be available.")),(0,r.yg)("p",null,"Common formats such as CSV, Parquet, and JSON are supported for exporting to HDFS. To reduce network transmission, gzip compression is enabled by default."),(0,r.yg)("h2",{id:"migrating-data-using-the-dumper-tool"},"Migrating Data Using the Dumper Tool"),(0,r.yg)("p",null,"Migrating data from ClickHouse to ByConity involves the following two main steps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 1: Dump the data in an offline manner onto HDFS (accomplished using the Dumper tool)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Step 2: ByConity attaches the data from HDFS in batch"))),(0,r.yg)("p",null,"When using the Dumper for data migration, you can specify a table and some of its partitions at once and write them to HDFS. The main principle of work is to traverse the local disk of the table that needs to be migrated, find the active part, write it in ByConity's own format, and then use the Dumper to upload it to HDFS."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"usage: clickhouse-dumper --config-file <config-file> --database <db> --table <table> --output <path>\n\n-C<file>, --config-file=<file>             load configuration from a given file\n--database=<database>                      database to be<path>, --output=<path>                  output path on shared-storage\n-P<num_threads>, --parallel=<num_threads>  threads for dumping parts\n-R, --overwrite                            overwrite existed parts\n--partition_list \n--skip_partition_list\n--S\n--skip_unkowning_settings\n--help                                     produce this help message\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--config-file"),": Specifies the configuration file for the open-source clickhouse."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--database"),": Specifies the database to be migrated."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--table"),": Specifies the table to be migrated."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--hdfs_nnproxy"),": Specifies the ByConity hdfs nnproxy."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--output"),": Specifies the path where the Dumper will upload to hdfs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--partition_list"),": Supports specifying a particular partition_list."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"--skip_partition_list"),": Specifies the partition_list to be skipped."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-S"),": Skips bad parts."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-R"),": Supports overwriting existing parts if they already exist in hdfs.")),(0,r.yg)("p",null,"Note\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The Dumper tool currently does not support cmrk3 and mrk3. Additionally, it has compatibility issues with the community regarding map types. It only supports the MergeTree and ReplicatedMergeTree engines.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In terms of configuration, Dumper does not support adaptive index_granularity (index_granularity_bytes = 0, disabling adaptivity) or compression (compress_marks = 0, disabling compression). It only supports Wide parts (min_rows_for_wide_part = 0, enabling Wide parts). Furthermore, the database must be of the Ordinary type."))),(0,r.yg)("p",null,"Finally, execute the following command on the ByConity side to complete the migration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE test_db.test_table ATTACH PARTITION '2020-10-10' FROM '/tmp/hdfs_path/<ip>/test_db/test_table'\n")))}g.isMDXComponent=!0}}]);