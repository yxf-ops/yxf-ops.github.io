"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6896],{58860:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>p});var i=a(37953);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return a?i.createElement(p,o(o({ref:t},d),{},{components:a})):i.createElement(p,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(75890),n=(a(37953),a(58860));const r={title:"Transactions Management",sidebar_position:10,tags:["Docs"]},o="Transactions and concurrency control",s={unversionedId:"admin-guides/transaction-management",id:"admin-guides/transaction-management",title:"Transactions Management",description:"Transaction overview",source:"@site/docs/admin-guides/transaction-management.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/transaction-management",permalink:"/docs/admin-guides/transaction-management",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/admin-guides/transaction-management.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:10,frontMatter:{title:"Transactions Management",sidebar_position:10,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Manage Background Tasks",permalink:"/docs/admin-guides/background-task-management"},next:{title:"TPC-DS",permalink:"/docs/benchmarks/tpc-ds"}},l={},c=[{value:"Transaction overview",id:"transaction-overview",level:3},{value:"Metadata storage selection",id:"metadata-storage-selection",level:3},{value:"Distributed Clocks",id:"distributed-clocks",level:3},{value:"Transaction Processing",id:"transaction-processing",level:3},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Multiple versions",id:"multiple-versions",level:4},{value:"Lock",id:"lock",level:4},{value:"Garbage Collection",id:"garbage-collection",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"transactions-and-concurrency-control"},"Transactions and concurrency control"),(0,n.yg)("h3",{id:"transaction-overview"},"Transaction overview"),(0,n.yg)("p",null,"In ByConity (formerly codenamed CNCH), support for transaction semantics is provided to ensure data quality. Each SQL statement is converted into a transaction for execution. Transactions provide the guarantee of atomicity, consistency, isolation, and durability (ACID) properties and are designed to be used in various situations such as concurrent read and write, software exceptions, and hardware exceptions. This ensures that the correctness and integrity of the data can still be guaranteed even in the face of such situations."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Atomicity ensures that each transaction is treated as a unit, and the transaction either succeeds completely or fails completely. Before the transaction is successful, the written data is not visible, and there will be no situation where only part of the data is visible. After the transaction fails, some of the written data will be automatically cleaned up, so that no garbage data remains. ByConity guarantees atomicity in various situations, including various exceptions such as power failure, error, and downtime."),(0,n.yg)("li",{parentName:"ul"},"Consistency ensures that the database will only change from one valid state to another valid state, and any data writing must follow the defined rules."),(0,n.yg)("li",{parentName:"ul"},"Isolation ensures the correctness of concurrent execution of database SQL (for example, reading and writing the same table at the same time), and ensures that the state of the database can be equivalent to a state of sequential execution in a concurrent scenario, and transactions do not interfere with each other. Isolation is the goal of concurrency control, and there can be multiple isolation levels. ByConity provides users with support for the read committed (RC) isolation level. Writes by outstanding transactions are invisible to other transactions."),(0,n.yg)("li",{parentName:"ul"},"Durability ensures high availability of data. Once the transaction is successfully committed, the written data will be persisted, even if various system failures occur, it will not be lost. The storage and computing separation structure adopted by ByConity uses a mature highly available distributed file system or object storage (such as HDFS, S3) to ensure high availability of data submitted by successful transactions.")),(0,n.yg)("h3",{id:"metadata-storage-selection"},"Metadata storage selection"),(0,n.yg)("p",null,"ByConity is an analytical database (OLAP) that has different transaction requirements from traditional relational databases (OLTP). Analytical transaction requirements focus on high-throughput and low-latency scenarios, whereas OLTP databases prioritize high-QPS real-time scenarios."),(0,n.yg)("p",null,"In addition to the basic ACID properties that need to be guaranteed, ByConity has three special requirements for transaction implementation selection. Firstly, a single transaction in ByConity may involve massive amounts of data (e.g., hundreds of millions of rows), with high requirements for data throughput and write performance, and its atomicity needs to be guaranteed. Secondly, the proportion of reads in the analytical database workload is higher than that of writes, so transactions need to ensure that the read workload is not affected or blocked by the write workload. Finally, transactions need to have flexible and controllable concurrency control functions. In addition to processing user-side concurrent workloads, ByConity also needs to handle concurrent background tasks."),(0,n.yg)("p",null,"ByConity's transaction processing mainly manages the metadata of user data. The metadata includes the user's database metadata (db), table metadata (data table), and part metadata (part is the metadata of the data file, including the part name, columns, number of rows, status, version, submission time, etc.). As the data grows, the metadata itself will also grow linearly in magnitude and cannot be lost, requiring a highly available distributed storage or distributed database solution. ByConity uses a mature distributed key-value database as the storage solution for metadata. Through the abstract metadata read and write API, the backend is adapted to FoundationDB developed by Apple."),(0,n.yg)("h3",{id:"distributed-clocks"},"Distributed Clocks"),(0,n.yg)("p",null,"The execution of transactions in a distributed system requires clock synchronization among different distributed nodes. ByConity adopts a simple and practical solution called Timestamp Oracle (TSO). Its advantages are its simplicity and ease of understanding, and the central time service can be used to determine a unique time. It also has good performance, with a single TSO node supporting over 1 million QPS. The disadvantage is that it is not suitable for cross-data center scenarios, and the time delay of obtaining TSO for all transactions is relatively high. Since TSO is a centralized timing solution, ByConity provides high availability services for it."),(0,n.yg)("p",null,"TSO utilizes a mixed logical clock, where the clock consists of a physical part and a logical part, and 64 bits represent a time. To avoid the loss of timestamps caused by TSO downtime, the timestamps need to be persisted. However, if the timing is persisted every time, performance will be reduced. Thus, TSO pre-applies for an allocatable time window (e.g., 3 seconds). After the application is successful, TSO can directly allocate all timestamps within the 3-second window in memory. When a client requests a timestamp, the logical clock part is incremented with the request. If there is an overflow in the logical part, it will sleep for 50ms and wait for the physical clock to be advanced. TSO checks the clock every 50ms. If the physical clock of the current TSO is behind the current time, the physical clock part of the TSO needs to be updated to the current physical time. If the logical clock is more than half, the physical clock of TSO will also be increased. Once the physical clock increases, the logical clock will be cleared. If the current time window has been used up, the next time window needs to be applied for. At the same time, the upper bound of the persistent window is updated."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(25019).A,width:"1262",height:"230"})),(0,n.yg)("h3",{id:"transaction-processing"},"Transaction Processing"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Atomicity")),(0,n.yg)("p",null,"ByConity's single transaction has high-throughput read and write requirements for metadata management. Since distributed key-value databases (such as FoundationDB) have a size limit (such as 10MB) for the value of a single atomic write, ByConity implements a two-stage approach for its distributed key-value storage to make the size of a single write unlimited and more flexible and controllable. In the first stage, arbitrary data can be written multiple times in batches and is invisible. In the second stage, the transaction is committed, and all written data is visible at the same time after the commit is successful. The following example describes a detailed process of the 2-stage atomic commit using an insert SQL statement."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Phase 1"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"a: Write a transaction record (txn record) in kv to uniquely identify the current transaction;"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"b: parse and execute insert sql;"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"c: Before writing data to the remote file system or object storage, first write the location information of the data to be written into the undo buffer (for cleaning in case of failure);"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"d: Write data to remote file system or object storage;"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},"e: The metadata part of the submitted data is written into kv;"))),(0,n.yg)("li",{parentName:"ul"},"Phase 2"),(0,n.yg)("li",{parentName:"ul"},"Submit the transaction and update the submission time of the transaction record;"),(0,n.yg)("li",{parentName:"ul"},"The commit time of asynchronously updating part data is the commit time of the transaction (before the commit time of part is not updated, it is necessary to check the commit time of the transaction record);")),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(45026).A,width:"2700",height:"1748"})),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"                                                        Transaction submission detailed flow chart\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Consistency")),(0,n.yg)("p",null,"The distributed key-value storage system chosen by ByConity, ByteKV and Foundation have provided consistent support, and can be reused directly."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Isolation")),(0,n.yg)("p",null,"ByConity provides support for the Read Committed (RC) isolation level for users. When each transaction is initialized, it obtains a timestamp (timestamp) from the TSO service as its ID and start time. When the transaction is submitted, it obtains a submission time from the TSO service and updates the submission time of the transaction record in KV. It also asynchronously updates the submission time of the part. The read transaction can read the part metadata information that has been successfully committed (i.e., the corresponding transaction has committed successfully) and the commit time is less than the start time of the read transaction, thus realizing the RC semantics. The RC isolation level maximizes read performance compared to stricter isolation levels. With stricter isolation levels such as Serializable Snapshot Isolation (SSI), reads may be blocked by writes."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Durability")),(0,n.yg)("p",null,"ByConity metadata is persisted to FoundationDB, and the characteristics of distributed Key-value storage provide the guarantee of persistence and high availability."),(0,n.yg)("h3",{id:"concurrency-control"},"Concurrency Control"),(0,n.yg)("p",null,"ByConity uses multiple versions and locks to ensure the correctness of data in concurrent read and write scenarios. In addition to user workloads, ByConity also has background tasks (such as merge/alter tasks and unique key table deduplication tasks) that require concurrent reading and writing. ByConity has chosen the RC isolation level, which allows new writes (such as inserts) to be executed lock-free because they are invisible. However, for existing data, concurrency control is required when reading and writing concurrently."),(0,n.yg)("h4",{id:"multiple-versions"},"Multiple versions"),(0,n.yg)("p",null,"In addition to its original basic information, the metadata of each part has a corresponding version (version). Every time the existing data is changed, a new version will be generated instead of directly updating the original data. . For the RC isolation level, the read transaction that has already started continues to read the old version, and the new version is invisible to it, so that reading and writing do not affect each other, maximizing read and write performance."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(91166).A,width:"2902",height:"484"})),(0,n.yg)("h4",{id:"lock"},"Lock"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Distributed KV lock")),(0,n.yg)("p",null,"ByConity provides a global KV exclusive lock for DDL to avoid concurrent changes to the table schema. Distributed KV locks are globally shared and can be shared by different nodes."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Memory read-write lock"),(0,n.yg)("li",{parentName:"ul"},"Support shared lock and exclusive lock"),(0,n.yg)("li",{parentName:"ul"},"Support waiting"),(0,n.yg)("li",{parentName:"ul"},"Support different granularity")),(0,n.yg)("p",null,"ByConity provides support for multi-level fine-grained DML read-write locks. DML-related tasks can hold different types of locks at different granularities according to requirements."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"         table\n        / \\\n       bucket \\\n       / \\\n    partition partition\n\n")),(0,n.yg)("h3",{id:"garbage-collection"},"Garbage Collection"),(0,n.yg)("p",null,"ByConity periodically recycles invisible parts and versions. For example, after the merge task generates a new part, the old part will be reclaimed when it is no longer referenced by queries to free up space and reduce costs."))}m.isMDXComponent=!0},25019:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/boxcnIQ0kKkzfdE6l3QnZZ31iGb-67025378c3aed94d75829fe30f891205.png"},91166:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/boxcnJmeAgBLo86uZBHIHKbdRhc-7001920c7102836eb91b1e294c3d52de.png"},45026:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/boxcnSsWWnS2sH5qiwBsILZyaNg-e9a60b83384e263f275e957ef7797cc2.png"}}]);