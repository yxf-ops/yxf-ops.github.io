"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6296],{58860:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(37953);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(t),d=l,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?n.createElement(y,o(o({ref:a},c),{},{components:t})):n.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=t[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92707:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var n=t(75890),l=(t(37953),t(58860));const r={title:"External Catalog",sidebar_position:2,tags:["Docs"]},o="Hive External Catalog",i={unversionedId:"data-lakes/hive-external-catalog",id:"data-lakes/hive-external-catalog",title:"External Catalog",description:"In addition to supporting access to Hive data using external tables, Byconity also supports access through the External Catalog feature.",source:"@site/docs/data-lakes/hive-external-catalog.mdx",sourceDirName:"data-lakes",slug:"/data-lakes/hive-external-catalog",permalink:"/docs/data-lakes/hive-external-catalog",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/data-lakes/hive-external-catalog.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"External Catalog",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"External Tables",permalink:"/docs/data-lakes/hive-external-table"},next:{title:"Query Optimizer",permalink:"/docs/query-optimization/query-optimizer"}},s={},g=[{value:"Configuring <code>external_catalog_mgr</code>",id:"configuring-external_catalog_mgr",level:2},{value:"Creating an External Catalog",id:"creating-an-external-catalog",level:2},{value:"Creating a Hive Catalog",id:"creating-a-hive-catalog",level:3},{value:"Creating a Glue Catalog",id:"creating-a-glue-catalog",level:3},{value:"Dropping an External Catalog",id:"dropping-an-external-catalog",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Three-part Naming Convention",id:"three-part-naming-convention",level:3},{value:"Cross-Catalog Queries",id:"cross-catalog-queries",level:3},{value:"Showing Databases and Tables",id:"showing-databases-and-tables",level:3},{value:"Switching Catalogs",id:"switching-catalogs",level:3},{value:"Implementation Details",id:"implementation-details",level:3}],c={toc:g},p="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(p,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hive-external-catalog"},"Hive External Catalog"),(0,l.yg)("p",null,"In addition to supporting access to Hive data using external tables, Byconity also supports access through the External Catalog feature."),(0,l.yg)("h2",{id:"configuring-external_catalog_mgr"},"Configuring ",(0,l.yg)("inlineCode",{parentName:"h2"},"external_catalog_mgr")),(0,l.yg)("p",null,"We need to store the metadata of the External Catalog in Byconity's metadata store. Therefore, we need to configure ",(0,l.yg)("inlineCode",{parentName:"p"},"external_catalog_mgr")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch_config.yaml")," to specify the location where External Catalog-related metadata will be stored."),(0,l.yg)("p",null,"Typically, users can choose to store External Catalog metadata in the same location as Byconity metadata. Therefore, users can directly reuse the content of the ",(0,l.yg)("inlineCode",{parentName:"p"},"catalog_service")," configuration previously used for metadata, such as:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"external_catalog_mgr:\n  type: fdb\n  fdb:\n    cluster_file: /config/fdb.cluster\n")),(0,l.yg)("h2",{id:"creating-an-external-catalog"},"Creating an External Catalog"),(0,l.yg)("p",null,"Currently, only IAM authentication is supported."),(0,l.yg)("h3",{id:"creating-a-hive-catalog"},"Creating a Hive Catalog"),(0,l.yg)("p",null,"For data stored in S3:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"create external catalog hive_s3\nproperties\n    type='hive',\n    hive.metastore.uri = 'thrift://hive_thrift_server_ip:port',\n    aws.s3.region= 's3_region',\n    aws.s3.endpoint = 's3_endpoint',\n    aws.s3.access_key = 's3_ak',\n    aws.s3.secret_key = 's3_sk'\n")),(0,l.yg)("p",null,"For data stored in HDFS:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"create external catalog hive_hdfs\nproperties\n    type='hive',\n    hive.metastore.uri = 'thrift://hive_thrift_server_ip:port'\n")),(0,l.yg)("p",null,"Note: For Hive external tables stored in HDFS, we only support reading data configured in ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch-config.yaml"),"."),(0,l.yg)("h3",{id:"creating-a-glue-catalog"},"Creating a Glue Catalog"),(0,l.yg)("p",null,"We also provide experimental support for the AWS Glue Data Catalog."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"create external catalog glue_s3\nproperties\n    type='glue',\n    aws.glue.endpoint = 'glue_endpoint',\n    aws.glue.region='glue_region',\n    aws.glue.catalog_id='glue_catalog_id',\n    aws.glue.access_key = 'glue_ak',\n    aws.glue.secret_key = 'glue_sk',\n    aws.s3.region= 's3_region',\n    aws.s3.endpoint = 's3_endpoint',\n    aws.s3.access_key = 's3_ak',\n    aws.s3.secret_key = 's3_sk'\n")),(0,l.yg)("p",null,"Here, ",(0,l.yg)("inlineCode",{parentName:"p"},"glue_catalog_id")," is a 12-digit AWS account ID. For more information, refer to ",(0,l.yg)("a",{parentName:"p",href:"https://repost.aws/questions/QUWxpW7KY7RsCj2ttURvb7jQ/get-glue-data-catalog-name-id"},"Aws Account ID Doc"),"."),(0,l.yg)("h3",{id:"dropping-an-external-catalog"},"Dropping an External Catalog"),(0,l.yg)("p",null,"Users can drop an External Catalog as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"drop external catalog your_catalog_name;\n")),(0,l.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.yg)("p",null,"Assuming a user has already created an External Catalog called ",(0,l.yg)("inlineCode",{parentName:"p"},"hive_s3"),"."),(0,l.yg)("h3",{id:"three-part-naming-convention"},"Three-part Naming Convention"),(0,l.yg)("p",null,"Users can directly access tables in Hive using the three-part naming convention: ",(0,l.yg)("inlineCode",{parentName:"p"},"catalog_name.db_name.table_name"),". For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from hive_s3.hive_db_name.hive_table_name;\n")),(0,l.yg)("p",null,"Native CnchMergeTree tables in Byconity can also be accessed using SQL like:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from cnch.cnch_db_name.cnch_table_name;\n-- this is equivalent to select * from cnch_db_name.cnch_table_name;\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"cnch")," (short for cloud-native-clickhouse) is used as the default Catalog name in Byconity."),(0,l.yg)("h3",{id:"cross-catalog-queries"},"Cross-Catalog Queries"),(0,l.yg)("p",null,"With the External Catalog, users can directly join Hive external tables with CnchMergeTree tables in Cnch:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from hive_s3.hive_db.hive_table union all select (1) from cnch.cnch_db.cnch_table;\n")),(0,l.yg)("h3",{id:"showing-databases-and-tables"},"Showing Databases and Tables"),(0,l.yg)("p",null,"Listing database names in a Catalog:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show databases [from hive_catalog]\n")),(0,l.yg)("p",null,"Listing table names in a database:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show tables from [hive_catalog.][database]\n")),(0,l.yg)("p",null,"Getting the create statement for a table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show create table [hive_catalog.][database.][table]\n")),(0,l.yg)("p",null,"Please note that the ",(0,l.yg)("inlineCode",{parentName:"p"},"show create table")," result for an external table will look similar to this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `hive_catalog$$hive_db_name`.hive_table_name UUID 'some-uuid' (--field list-- `cc_call_center_sk` Nullable(Int64), `cc_call_center_id` Nullable(String))) ENGINE = CnchHive(hive_catalog, hive_db_name, hive_table_name) PARTITION BY tuple() SETTINGS endpoint = 'hive_endpoint', ak_id = 's3_ak', ak_secret = 's3_sk', region = 's3_region'\n")),(0,l.yg)("p",null,"This is only used to display schema information for the external table and cannot be used to create an external table in Hive."),(0,l.yg)("p",null,"Currently, Byconity does not support directly creating Hive tables."),(0,l.yg)("h3",{id:"switching-catalogs"},"Switching Catalogs"),(0,l.yg)("p",null,"Users can use the following SQL to change the default Catalog:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"switch catalog hive_s3;\n")),(0,l.yg)("p",null,"At this point, running:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from tpcds.call_center;\n")),(0,l.yg)("p",null,"Byconity will read data from the ",(0,l.yg)("inlineCode",{parentName:"p"},"call_center")," table in the ",(0,l.yg)("inlineCode",{parentName:"p"},"tpcds")," database in Hive."),(0,l.yg)("p",null,"To switch back to the default Catalog, users can use:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"switch catalog cnch;\n")),(0,l.yg)("p",null,"Users can also use:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"use hive_s3.tpcds;\n")),(0,l.yg)("p",null,"to directly change the default database to ",(0,l.yg)("inlineCode",{parentName:"p"},"tpcds")," in Hive."),(0,l.yg)("p",null,"To switch back, simply use:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"use cnch.cnch_database_name;\n")),(0,l.yg)("h3",{id:"implementation-details"},"Implementation Details"),(0,l.yg)("p",null,"We use a SQL rewriting approach to support multiple Catalogs. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from catalog_name.db.tbl;\n")),(0,l.yg)("p",null,"is actually rewritten to:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"select * from `catalog_name$$db`.tbl;\n")),(0,l.yg)("p",null,"So users should not be surprised to see this in the logs."))}u.isMDXComponent=!0}}]);