"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[7540],{8860:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var n=t(7953);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?n.createElement(y,o(o({ref:a},g),{},{components:t})):n.createElement(y,o({ref:a},g))}));function y(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5139:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(5890),l=(t(7953),t(8860));const r={title:"Hive External Catalog",tags:["Docs"]},o="External Catalog",i={unversionedId:"basic-guide/hive-external-catalog",id:"version-0.2.0/basic-guide/hive-external-catalog",title:"Hive External Catalog",description:"Besides creating tables in CnchHive engine to access external hive tablesl, Byconity also supports visit the external tables using external catalog.",source:"@site/versioned_docs/version-0.2.0/basic-guide/hive-external-catalog.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/hive-external-catalog",permalink:"/docs/0.2.0/basic-guide/hive-external-catalog",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/basic-guide/hive-external-catalog.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Hive External Catalog",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Database Table Design",permalink:"/docs/0.2.0/basic-guide/database-table-design"},next:{title:"Hive External Table",permalink:"/docs/0.2.0/basic-guide/hive-external-table"}},s={},c=[{value:"Create Hive Catalog",id:"create-hive-catalog",level:2},{value:"Create Glue Catalog",id:"create-glue-catalog",level:2},{value:"Three Part Identifier",id:"three-part-identifier",level:2},{value:"Cross-Catalog queries",id:"cross-catalog-queries",level:2},{value:"Show Databases and Tables",id:"show-databases-and-tables",level:2},{value:"Switch Catalog",id:"switch-catalog",level:2},{value:"Implementation Detail",id:"implementation-detail",level:2}],g={toc:c},p="wrapper";function u(e){let{components:a,...t}=e;return(0,l.yg)(p,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"external-catalog"},"External Catalog"),(0,l.yg)("p",null,"Besides creating tables in CnchHive engine to access external hive tablesl, Byconity also supports visit the external tables using external catalog."),(0,l.yg)("h1",{id:"config-external_catalog_mgr"},"Config ",(0,l.yg)("inlineCode",{parentName:"h1"},"external_catalog_mgr")),(0,l.yg)("p",null,"We need to store metas about external catalog in Byconity's metastore and it's separated from the orginal metastore, so we need to configure ",(0,l.yg)("inlineCode",{parentName:"p"},"external_catalog_mgr")," in ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch_config.yaml"),", which locates the external catalog metas."),(0,l.yg)("p",null,"The configuration is almost the same to ",(0,l.yg)("inlineCode",{parentName:"p"},"catalog_service")," part in ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch_config.yml"),".\nNormally, the users could simply resue the content for ",(0,l.yg)("inlineCode",{parentName:"p"},"catalog_service")," before, i.e.,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"external_catalog_mgr:\ntype: fdb\nfdb:\n  cluster_file: /config/fdb.cluster\n")),(0,l.yg)("h1",{id:"create-external-catalog"},"Create External Catalog"),(0,l.yg)("p",null,"Currently only IAM based authentication is supported."),(0,l.yg)("h2",{id:"create-hive-catalog"},"Create Hive Catalog"),(0,l.yg)("p",null,"For s3,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"create external catalog hive_s3\nproperties\n  type='hive',\n  hive.metastore.uri = 'thrift://hive_thrift_server_ip:port',\n  aws.s3.region= 's3_region',\n  aws.s3.endpoint = 's3_endpoint',\n  aws.s3.access_key = 's3_ak',\n  aws.s3.secret_key = 's3_sk'\n")),(0,l.yg)("p",null,"For hdfs,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"create external catalog hive_hdfs\nproperties\n    type='hive',\n    hive.metastore.uri = 'thrift://hive_thrift_server_ip:port',\n")),(0,l.yg)("p",null,"Notice that for Hive catalog with hdfs, we only support using the HDFS filesystem configged in ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch-config.yaml")),(0,l.yg)("h2",{id:"create-glue-catalog"},"Create Glue Catalog"),(0,l.yg)("p",null,"We also support AWS Glue DataCatalog experimentally."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"create external catalog glue_s3\nproperties\ntype='glue',\n    aws.glue.endpoint = 'glue_endpoint',\n    aws.glue.region='glue_region',\n    aws.glue.catalog_id='glue_catalog_id',\n    aws.glue.access_key = 'glue_ak',\n    aws.glue.secret_key = 'glue_sk',\n    aws.s3.region= 's3_region',\n    aws.s3.endpoint = 's3_endpoint',\n    aws.s3.access_key =   's3_ak',\n    aws.s3.secret_key =   's3_sk'\n\n")),(0,l.yg)("p",null,"The glue catalog_id is the 12-digit aws account ID. For more details, please refer to ",(0,l.yg)("a",{parentName:"p",href:"https://repost.aws/questions/QUWxpW7KY7RsCj2ttURvb7jQ/get-glue-data-catalog-name-id"},"Aws Account ID Doc")),(0,l.yg)("h1",{id:"drop-external-catalog"},"Drop External Catalog"),(0,l.yg)("p",null,"Users can drop external catalog via"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"drop external catalog your_catalog_name;\n")),(0,l.yg)("h1",{id:"basic-use"},"Basic Use"),(0,l.yg)("p",null,"We assume users has created a catalog named ",(0,l.yg)("inlineCode",{parentName:"p"},"hive_s3")," here."),(0,l.yg)("h2",{id:"three-part-identifier"},"Three Part Identifier"),(0,l.yg)("p",null,"Users can query external table via ",(0,l.yg)("inlineCode",{parentName:"p"},"catalog_name.db_name.table_name"),", as"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"    select * from hive_s3.hive_db_name.hive_table_name;\n")),(0,l.yg)("p",null,"The native Byconity's CnchMergeTree table could also be visited using"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"    select * from cnch.cnch_db_name.cnch_db_name;\n    -- this is equivalent to select * from  cnch.cnch_db_name.cnch_db_name;\n")),(0,l.yg)("p",null,"Here, ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch")," (abbreviation for cloud-native-clickhouse) is the name for the internal catalog used by Byconity for native tables."),(0,l.yg)("h2",{id:"cross-catalog-queries"},"Cross-Catalog queries"),(0,l.yg)("p",null,"Users could also do queries cross internal catalog ",(0,l.yg)("inlineCode",{parentName:"p"},"cnch")," and external catalog ",(0,l.yg)("inlineCode",{parentName:"p"},"hive_s3"),", as"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," select * from hive_s3.hive_db.hive_table union all select (1) from cnch.cnch_db.cnch_table;\n")),(0,l.yg)("h2",{id:"show-databases-and-tables"},"Show Databases and Tables"),(0,l.yg)("p",null,"List databases from catalog"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"}," show databases [from hive_catalog]\n")),(0,l.yg)("p",null,"List tables from database"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"}," show tables from [hive_catalog.][database]\n")),(0,l.yg)("p",null,"Show create table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," show create table [hive_catalog.][database.][table]\n")),(0,l.yg)("p",null,"Notice that for external table, the ",(0,l.yg)("inlineCode",{parentName:"p"},"show create table")," result is similar to this"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"CREATE TABLE `hive_catalog$$hive_db_name`.hive_table_name UUID 'some-uuid' (--field list -- `cc_call_center_sk` Nullable(Int64), `cc_call_center_id` Nullable(String))) ENGINE = CnchHive(hive_catalog, hive_db_name, hive_table_name) PARTITION BY tuple() SETTINGS endpoint = 'hive_endpoint', ak_id = 's3_ak', ak_secret = 's3_sk', region = 's3_region'\n")),(0,l.yg)("p",null,"This is only used to show the table schema. If the users run it in Byconity, it should fail. Hive table creations is not supported yet."),(0,l.yg)("h2",{id:"switch-catalog"},"Switch Catalog"),(0,l.yg)("p",null,"Users could use"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    switch catalog hive_s3;\n")),(0,l.yg)("p",null,"to change the default catalog to external catalogs, then"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    select * from tpcds.call_center;\n")),(0,l.yg)("p",null,"will try to access data in hive catalog."),(0,l.yg)("p",null,"To switch back, users could use"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    switch catalog cnch;\n")),(0,l.yg)("p",null,"Users could also use"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    use hive_s3.tpcds\n")),(0,l.yg)("p",null,"to set the default database to tpcds in Hive.\nTo switch back, users could run"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    use cnch.cnch_database-name\n")),(0,l.yg)("h2",{id:"implementation-detail"},"Implementation Detail"),(0,l.yg)("p",null,"To support multi-catalog, we actually rewrite the query users send to Byconity Server."),(0,l.yg)("p",null,"For example, if the user types query the following query"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    select * from catalog_name.db.tbl\n")),(0,l.yg)("p",null,"It will be rewritten into"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"    select * from `catalog_name$$db`.tbl\n")),(0,l.yg)("p",null,"before being executed."),(0,l.yg)("p",null,"Hence, the users should not be surprised if such information appeared in logs."))}u.isMDXComponent=!0}}]);