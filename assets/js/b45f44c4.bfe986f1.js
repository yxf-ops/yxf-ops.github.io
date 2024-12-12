"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6793],{8860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>p});var o=n(7953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,p=u["".concat(l,".").concat(h)]||u[h]||y[h]||a;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(5890),i=(n(7953),n(8860));const a={title:"FAQ",tags:["Docs"]},r="Frequently Asked Questions",s={unversionedId:"faq/all-in-one",id:"faq/all-in-one",title:"FAQ",description:"Deployment-related",source:"@site/docs/faq/all-in-one.mdx",sourceDirName:"faq",slug:"/faq/all-in-one",permalink:"/docs/faq/all-in-one",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/faq/all-in-one.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",frontMatter:{title:"FAQ",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Development Environment",permalink:"/docs/developer-guides/set-up-byconity-dev-env"},next:{title:"ByConity 0.3.0",permalink:"/docs/release-note/0.3.0"}},l={},c=[{value:"Deployment-related",id:"deployment-related",level:2},{value:"Import and Export",id:"import-and-export",level:2},{value:"Designing Databases and Tables",id:"designing-databases-and-tables",level:2},{value:"SQL-related",id:"sql-related",level:2},{value:"Cluster Management",id:"cluster-management",level:2},{value:"Storage-related",id:"storage-related",level:2},{value:"Performance Testing",id:"performance-testing",level:2},{value:"Other",id:"other",level:2}],d={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.yg)("h2",{id:"deployment-related"},"Deployment-related"),(0,i.yg)("p",null,"Q1: After deploying and running using K8s kind, I encounter an error when inserting data: Code: 910. DB::Exception: Received from 127.0.0.1:9000. DB::Exception: No local available worker group for vw_write SQLSTATE: HY000.\nA: Troubleshooting steps: 1. Check if all ByConity components are in a ready state. 2. Check if there are any workers in the system.workers table."),(0,i.yg)("p",null,"Q2: I pulled the ByConity-deploy branch and deployed a demo locally using kind. The ByConity-tso-0 container is stuck in Pending status, while ByConity-daemon-manager and ByConity-server are constantly in CrashLoopBackOff.\nA: You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"kubectl get pvc -n bycontiy"),' to check the usage. If the usage is too high, you can try explicitly adjusting some storage configurations, such as tso, as described in the "Update your ByConity cluster" section of ',(0,i.yg)("a",{parentName:"p",href:"https://ByConity.github.io/docs/deployment/deploy-k8s"},"https://ByConity.github.io/docs/deployment/deploy-k8s"),"."),(0,i.yg)("p",null,"Q3: Running ",(0,i.yg)("inlineCode",{parentName:"p"},"docker run -it ByConity/ByConity-server:stable client")," on my Mac with an M2 chip results in a Segmentation fault.\nA: There are known issues with fdb running on Mac M2 chips within Docker. Based on experience with open-source ClickHouse, ByConity generates images with the jemalloc parameter set to 0 during the compilation of ClickHouse. (Further testing and image updates are needed.)"),(0,i.yg)("h2",{id:"import-and-export"},"Import and Export"),(0,i.yg)("p",null,"Q1: When using the Kafka engine to import data, do I need to delete and recreate the materialized view if I want to add new fields? Or can I just modify the query? If the query is *, do I still need to modify it?\nA: You can execute alter operations on both the base table and the Kafka table, but for VIEW tables, you would need to recreate them."),(0,i.yg)("p",null,"Q2: Where can I download the PartWriter tool provided by ByConity?\nA: The tool is available in the main branch of the code repository. (Documentation needs to be improved.)"),(0,i.yg)("h2",{id:"designing-databases-and-tables"},"Designing Databases and Tables"),(0,i.yg)("p",null,"Q1: What is the difference between MergeTree and CnchMergeTree?\nA: Currently, ByConity only supports CnchMergeTree. (Documentation on database engines and table engines needs to be supplemented.)"),(0,i.yg)("p",null,"Q2: Does ByConity support engines similar to Distributed and ReplicatedMergeTree in ClickHouse? I noticed that the system.zookeeper table does not exist. Does this mean that CnchMergeTree tables automatically distribute data across multiple nodes, and querying a CnchMergeTree table is akin to querying a logically global table rather than just the data on the current machine?\nA: In cnch, the traditional concepts of replicas and shards are no longer relevant."),(0,i.yg)("p",null,"Q3: Can the MergeTree engine from ClickHouse be used with ByConity?\nA: It is generally not used and is only employed for storing some local logs, such as system.query_log."),(0,i.yg)("p",null,"Q4: Can I use SQL to check the storage size occupied by each table in the database and the number of partitions in a certain table?"),(0,i.yg)("p",null,"A: To check the storage size and partition count of a specific partition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select sum(bytes_on_disk), sum(rows_count), count(1) from system.cnch_parts where database = 'xxx' and table = 'xxx' and partition_id = 'xxx' and visible\n")),(0,i.yg)("p",null,"To check the number of partitions in a certain table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select count(1) from system.cnch_parts where database = 'xxx' and table = 'xxx'  and visible\n")),(0,i.yg)("h2",{id:"sql-related"},"SQL-related"),(0,i.yg)("p",null,"Q1: Summary of commonly used SQL statements in ByConity.\nA: Community-provided summary of commonly used SQL statements: ",(0,i.yg)("a",{parentName:"p",href:"https://blog.csdn.net/cheng1483/article/details/132458760?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22132458760%22%2C%22source%22%3A%22cheng1483%22%7D&fromshare=blogdetail"},"https://blog.csdn.net/cheng1483/article/details/132458760?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22132458760%22%2C%22source%22%3A%22cheng1483%22%7D&fromshare=blogdetail")),(0,i.yg)("p",null,"Q2: Are there many differences between ByConity's query syntax and MySQL?\nA: (Answer not provided in the original text. It needs to be supplemented based on actual differences.)"),(0,i.yg)("h2",{id:"cluster-management"},"Cluster Management"),(0,i.yg)("p",null,"Q1: To scale the number of nodes in ByConity, can I simply adjust the replica count for statefulset.apps/ByConity-vw-vw-default and statefulset.apps/ByConity-vw-vw-write? Are there any additional configurations required? Does ByConity support lossless scaling, and can it be configured through hpa?\nA: You can directly adjust the replica count, and ByConity supports lossless scaling. For more details, refer to: ",(0,i.yg)("a",{parentName:"p",href:"https://ByConity.github.io/zh-cn/docs/deployment/deploy-k8s"},"https://ByConity.github.io/zh-cn/docs/deployment/deploy-k8s"),". HPA configuration is also supported."),(0,i.yg)("p",null,"Q2: ByConity supports multi-tenant resource control (virtual warehouse). How are users associated with virtual warehouses? Are there any user-based limitations? Or is it possible to limit the memory consumption of individual requests like in ClickHouse? (Documentation needs to be supplemented.)\nA: Users can be associated with virtual warehouses by specifying them during table creation or at query time. For more information, refer to: ",(0,i.yg)("a",{parentName:"p",href:"https://ByConity.github.io/zh-cn/docs/basic-guide/virtual-warehouse-configuration"},"https://ByConity.github.io/zh-cn/docs/basic-guide/virtual-warehouse-configuration"),". Currently, user-based limitations are only available at the server level and not at the virtual warehouse level."),(0,i.yg)("p",null,"Q3: What is the difference between ByConity-worker-write and ByConity-worker? Are they installed on different nodes?\nA: ByConity-worker-write is specifically designed for write operations and is placed in the write computation group, while ByConity-worker is generally used for read operations."),(0,i.yg)("p",null,"Q4: Does ByConity have control over the usage of local disk space for write nodes?\nA: The size of the disk cache can be controlled through the disk_cache_strategies.simple.lru_max_size parameter. However, if there are many small files, the actual space usage may exceed the configured value. It is recommended to leave some additional space when configuring the disk cache size. We are working on optimizing the storage of small objects to address this issue. See issue 498 for more details: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/498#issuecomment-1752426986"},"https://github.com/ByConity/ByConity/issues/498#issuecomment-1752426986")),(0,i.yg)("p",null,"Q5: The amount of disk space on an instance has reached its limit, and a node has exceeded the maximum attachment limit for disks, which is 16 disks.\nA: This indicates that the fdb installation has exceeded the limit for mounted disks."),(0,i.yg)("h2",{id:"storage-related"},"Storage-related"),(0,i.yg)("p",null,"Q1: After configuring ByConity with s3, how long does it take for data to be written to s3 when performing a write operation? When querying data, does it directly query s3 remotely, or does it first check the local disk for a cache?\nA: When writing data, it is directly written to S3, and the local disk stores temporary files. During a query, the system first checks the local disk cache. If the data is not found, it then accesses the remote storage."),(0,i.yg)("p",null,"Q2: When configuring the AWS s3 endpoint, should I use https://xxx or s3://xxxx? To access an s3 bucket, do I need to combine the endpoint, bucket, and path?\nA: Refer to ",(0,i.yg)("a",{parentName:"p",href:"https://byconity.github.io/docs/admin-guides/cluster-configuration#storage_configuration"},"https://byconity.github.io/docs/admin-guides/cluster-configuration#storage_configuration"),". Yes, you would combine the endpoint, bucket, and path."),(0,i.yg)("p",null,"Q3: In the S3 configuration, what are ak_id and ak_secret? What is the type? What is the purpose of virtual_host_style?\nA: ak_id and ak_secret correspond to the access_key and secret_key of s3, respectively. The type should be set to bytes3. The virtual_host_style can be set to true. Most public clouds use the virtual host request style, while minio defaults to the PathStyle unless otherwise configured."),(0,i.yg)("p",null,"Q4: Which HDFS C++ client does ByConity use?\nA: ByConity uses the HDFS C++ client from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ByConity/libhdfs3-open.git"},"https://github.com/ByConity/libhdfs3-open.git"),"."),(0,i.yg)("p",null,"Q5: How is the size of ByConity's disk cache determined?\nA: The size of the disk cache can be configured through the disk_cache_strategies parameter. Specifically, there is a maximum setting called lru_max_size. For more information and an example configuration, refer to ",(0,i.yg)("a",{parentName:"p",href:"https://ByConity.github.io/zh-cn/docs/basic-guide/cluster-configuration#disk_cache_strategies"},"https://ByConity.github.io/zh-cn/docs/basic-guide/cluster-configuration#disk_cache_strategies"),"."),(0,i.yg)("p",null,"Q6: Are there any changes to the underlying data storage structure of ByConity compared to ClickHouse? How is data consistency between the local cache and remote storage ensured?\nA: ByConity stores data parts belonging to the same partition in separate files in HDFS/S3. Once written, these files are immutable, and any modifications to the data are achieved by adding delta parts. Therefore, there is no consistency issue at the part level between the local cache and remote storage. The only difference is whether the data is cached or not."),(0,i.yg)("h2",{id:"performance-testing"},"Performance Testing"),(0,i.yg)("p",null,'Q1: Is there a comparative analysis of ByConity\'s Join performance with ClickHouse?\nA: You can refer to the "Performance Testing" section in the documentation'),(0,i.yg)("h2",{id:"other"},"Other"),(0,i.yg)("p",null,"Q1: Which version of ClickHouse is ByConity based on? Does it have the same basic features as ClickHouse?\nA: 21.8. Reference: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/pull/347"},"https://github.com/ByConity/ByConity/pull/347")),(0,i.yg)("p",null,"Q2: How to use the CLI client of ByConity? Is there any documentation? (Kevin feedback: the documentation is outdated and needs to be updated)\nA: You can use the following command: ",(0,i.yg)("inlineCode",{parentName:"p"},"docker run -it ByConity/ByConity-server:stable client --host {} --port {}")),(0,i.yg)("p",null,"Q: Enabling the optimizer will automatically use the complex query execution model. It can be enabled by configuring ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_optimizer=1")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"dialect_type='ANSI'"),". Is this done manually or can it be written in a configuration file? (Please update the configuration documentation to explain each configuration)\nA: You can manually modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"users.xml")," file, add these configurations, and then restart ByConity."),(0,i.yg)("p",null,"Q: Does ByConity support secondary indexes? If so, are the secondary index files packaged into HDFS?\nA: Yes, ByConity supports secondary indexes."),(0,i.yg)("p",null,"Q: Does ByConity support ClickHouse dictionaries? Currently, only the MySQL table engine is mentioned in the documentation at ",(0,i.yg)("a",{parentName:"p",href:"https://ByConity.github.io/docs/basic-guide/data-import"},"https://ByConity.github.io/docs/basic-guide/data-import"),"\nA: Yes, ByConity supports dictionaries. Please refer to the CNCH User guide for more information."),(0,i.yg)("p",null,"Q: Does ByConity have a parameter similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"max_bytes_to_merge_at_min_space_in_pool")," in ClickHouse to set the minimum size of parts?\nA: Yes, ByConity has parameters ",(0,i.yg)("inlineCode",{parentName:"p"},"cnch_merge_max_total_rows_to_merge")," to limit the number of rows and ",(0,i.yg)("inlineCode",{parentName:"p"},"max_bytes_to_merge_at_max_space_in_pool")," to limit the bytes."),(0,i.yg)("p",null,"Q: Does ByConity support projections?\nA: Yes, ByConity supports projections for both HDFS and S3."),(0,i.yg)("p",null,"Q: How is the ",(0,i.yg)("inlineCode",{parentName:"p"},"sharding_key")," defined? I see that ByConity has a parameter called ",(0,i.yg)("inlineCode",{parentName:"p"},"optimize_skip_unused_shards")," which defaults to false. If set to true, under what circumstances could there be risks or issues? From my understanding of this parameter, it seems like setting it to true in the code logic would be better. Why is this configuration exposed?\nA: "),(0,i.yg)("p",null,"Q: The parameters in ",(0,i.yg)("inlineCode",{parentName:"p"},"cnch_config.xml")," are not clearly explained.\nA:"))}y.isMDXComponent=!0}}]);