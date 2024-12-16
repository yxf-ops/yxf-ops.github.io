"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4096],{8860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(7953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),g=i,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(5890),i=(a(7953),a(8860));const l={title:"External Tables",sidebar_position:1,tags:["Docs"]},r="External Tables",o={unversionedId:"data-lakes/hive-external-table",id:"data-lakes/hive-external-table",title:"External Tables",description:"CnchHive",source:"@site/docs/data-lakes/hive-external-table.mdx",sourceDirName:"data-lakes",slug:"/data-lakes/hive-external-table",permalink:"/docs/data-lakes/hive-external-table",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/data-lakes/hive-external-table.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:1,frontMatter:{title:"External Tables",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"ELT Introduction",permalink:"/docs/elt/elt-introduction"},next:{title:"External Catalog",permalink:"/docs/data-lakes/hive-external-catalog"}},s={},c=[{value:"CnchHive",id:"cnchhive",level:2},{value:"Table Creation Example",id:"table-creation-example",level:3},{value:"Table Parameter Settings",id:"table-parameter-settings",level:3},{value:"Example Configuration for HDFS Hive Table",id:"example-configuration-for-hdfs-hive-table",level:4},{value:"Example Configuration for S3 Hive Table",id:"example-configuration-for-s3-hive-table",level:4},{value:"Disk Cache Configuration",id:"disk-cache-configuration",level:3},{value:"Query Settings",id:"query-settings",level:3},{value:"Disk Cache Mode",id:"disk-cache-mode",level:4},{value:"Using hive_metastore_filter",id:"using-hive_metastore_filter",level:4},{value:"Using hive_partition_filter",id:"using-hive_partition_filter",level:4},{value:"Using hive_split_level_filter",id:"using-hive_split_level_filter",level:4},{value:"Table Functions",id:"table-functions",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"external-tables"},"External Tables"),(0,i.yg)("h2",{id:"cnchhive"},"CnchHive"),(0,i.yg)("p",null,"CnchHive is a table engine developed by ByConity that supports joint queries on external tables, allowing users to directly accelerate data queries without the need for data import. CnchHive supports querying data stored in HDFS and S3. It currently supports querying Hive data files stored in Parquet and ORC formats."),(0,i.yg)("h3",{id:"table-creation-example"},"Table Creation Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]hive_ext\nENGINE = CnchHive('thrift://127.0.0.1:9083', 'hive_db', 'hive_table')\n[SETTING vw_default = '']\n")),(0,i.yg)("p",null,"Table information can be automatically imported from Hive metadata or manually specified with specific column names and their types."),(0,i.yg)("h3",{id:"table-parameter-settings"},"Table Parameter Settings"),(0,i.yg)("p",null,"CnchHive allows tables to be configured by specifying values in a configuration file, as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n  <hive>\n    <vw_default>vw_default</vw_default>\n  </hive>\n</yandex>\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"vw_default: The virtual table used to execute queries."),(0,i.yg)("li",{parentName:"ul"},"hdfs_fs: The URL of the HDFS namenode."),(0,i.yg)("li",{parentName:"ul"},"endpoint: The endpoint for S3."),(0,i.yg)("li",{parentName:"ul"},"region: The region for S3."),(0,i.yg)("li",{parentName:"ul"},"ak_id: The S3 access key ID."),(0,i.yg)("li",{parentName:"ul"},"ak_secret: The S3 secret access key.")),(0,i.yg)("h4",{id:"example-configuration-for-hdfs-hive-table"},"Example Configuration for HDFS Hive Table"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<hive>\n  <hdfs_fs>hdfs://127.0.0.1:9010</hdfs_fs>\n</hive>\n")),(0,i.yg)("h4",{id:"example-configuration-for-s3-hive-table"},"Example Configuration for S3 Hive Table"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<hive>\n  <endpoint>http://127.0.0.1:9000</endpoint>\n  <ak_id>id</ak_id>\n  <ak_secret>secret</ak_secret>\n</hive>\n")),(0,i.yg)("h3",{id:"disk-cache-configuration"},"Disk Cache Configuration"),(0,i.yg)("p",null,"Add the following configuration to ",(0,i.yg)("strong",{parentName:"p"},"worker.xml")," to enable caching:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"<yandex>\n  <disk_cache_strategies>\n    <Hive>\n      <disk_cache_dir>hive</disk_cache_dir>\n    </Hive>\n  </disk_cache_strategies>\n</yandex>\n")),(0,i.yg)("h3",{id:"query-settings"},"Query Settings"),(0,i.yg)("h4",{id:"disk-cache-mode"},"Disk Cache Mode"),(0,i.yg)("p",null,"Determines whether to use disk caching in SELECT queries. Possible values:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"AUTO - Use disk caching when available."),(0,i.yg)("li",{parentName:"ul"},"SKIP_DISK_CACHE - Do not use disk caching.")),(0,i.yg)("p",null,"If there is a cache miss, Hive files will be cached in the background."),(0,i.yg)("p",null,"Default value: AUTO"),(0,i.yg)("h4",{id:"using-hive_metastore_filter"},"Using hive_metastore_filter"),(0,i.yg)("p",null,"When enabled, CnchHive checks if the query contains partition key conditions that can be passed to the Hive metastore to limit the partitions returned. The Hive metastore will return a filtered list of partitions based on the conditions. The Hive metastore can only recognize simple conditions."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Column d is the Hive partition key\n-- Partitions: d=1/, d=2/, d=3/\n\nSELECT * FROM hive_ext WHERE d = 1\n-- The Hive metastore will only return the partition d=1/\n")),(0,i.yg)("p",null,"Default value: true"),(0,i.yg)("h4",{id:"using-hive_partition_filter"},"Using hive_partition_filter"),(0,i.yg)("p",null,"When enabled, CnchHive further filters the list of partitions returned by the Hive metastore."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Column d is the Hive partition key, with partitions:\n-- d=20220203/, d=20220204/, d=20220205/\n\nSELECT * FROM hive_ext WHERE toDate(d) = '2022-02-03'\n\n-- The Hive metastore will return all three partitions, but CnchHive will apply partition filtering.\n-- Only the partition d=20220203/ will be read in the end.\n")),(0,i.yg)("p",null,"Default value: true"),(0,i.yg)("h4",{id:"using-hive_split_level_filter"},"Using hive_split_level_filter"),(0,i.yg)("p",null,"Parquet and ORC files have index data for each row group/stripe. If enabled, CnchHive will filter these row groups/stripes."),(0,i.yg)("p",null,"Default value: false"),(0,i.yg)("h3",{id:"table-functions"},"Table Functions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM hive('thrift://127.0.0.1', 'hive_db', 'hive_table')\n")),(0,i.yg)("p",null,"You can query Hive tables without explicitly creating them."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hiveMetadata('thrift://127.0.0.1', 'hive_db', 'hive_table')\n")),(0,i.yg)("p",null,"Returns the storage description of a Hive table from the Hive metastore."))}d.isMDXComponent=!0}}]);