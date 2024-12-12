"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1810],{58860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(37953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=i,y=d["".concat(l,".").concat(p)]||d[p]||g[p]||r;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(75890),i=(a(37953),a(58860));const r={slug:"byconity-elt",title:"Detailed Explanation of ByConity ELT Principles",authors:["WangTaoTheTonic","tigerwangyb"],tags:["video introduction","docusaurus"]},o="Detailed Explanation of ByConity ELT Principles",s={permalink:"/blog/byconity-elt",editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/blog/2023-09-10-byconity-elt/index.md",source:"@site/blog/2023-09-10-byconity-elt/index.md",title:"Detailed Explanation of ByConity ELT Principles",description:"Background",date:"2023-09-10T00:00:00.000Z",formattedDate:"September 10, 2023",tags:[{label:"video introduction",permalink:"/blog/tags/video-introduction"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:9.71,hasTruncateMarker:!1,authors:[{name:"Tao Wang",title:"ByConity maintainer",url:"https://github.com/WangTaoTheTonic",imageURL:"https://github.com/WangTaoTheTonic.png",key:"WangTaoTheTonic"},{name:"Yunbo Wang",title:"ByConity maintainer",url:"https://github.com/tigerwangyb",imageURL:"https://github.com/tigerwangyb.png",key:"tigerwangyb"}],frontMatter:{slug:"byconity-elt",title:"Detailed Explanation of ByConity ELT Principles",authors:["WangTaoTheTonic","tigerwangyb"],tags:["video introduction","docusaurus"]},prevItem:{title:"template",permalink:"/blog/template"},nextItem:{title:"Performance Comparison Analysis of ByConity and Mainstream Open-Source OLAP Engines (ClickHouse, Doris, Presto)",permalink:"/blog/byconity-benchmark"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Background",id:"background",level:2},{value:"ETL Scenarios and Solutions",id:"etl-scenarios-and-solutions",level:2},{value:"Differences between ELT and ETL",id:"differences-between-elt-and-etl",level:3},{value:"Challenges of Resource Duplication",id:"challenges-of-resource-duplication",level:3},{value:"Industry Solutions",id:"industry-solutions",level:3},{value:"ELT in ByConity",id:"elt-in-byconity",level:2},{value:"Overall Execution Flow",id:"overall-execution-flow",level:3},{value:"System Requirements for ELT Tasks:",id:"system-requirements-for-elt-tasks",level:3},{value:"Stage-level Scheduling",id:"stage-level-scheduling",level:3},{value:"Principle Analysis",id:"principle-analysis",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Adaptive Scheduler",id:"adaptive-scheduler",level:3},{value:"Query Queue Mechanism",id:"query-queue-mechanism",level:3},{value:"Async Execution",id:"async-execution",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Fault Recovery Capabilities",id:"fault-recovery-capabilities",level:3},{value:"Resources",id:"resources",level:3}],u={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"background"},"Background"),(0,i.yg)("p",null,"When it comes to data warehouses, the use of Extract-Transform-Load (ETL) or Extract-Load-Transform (ELT) is inevitable. It involves extracting data from different sources and in various formats into a data warehouse for processing. Traditionally, the data transformation process uses Extract-Transform-Load (ETL) to convert business data into a data model suitable for data warehouses. However, this relies on an ETL system independent of the data warehouse, resulting in high maintenance costs. As a cloud-native data warehouse, ByConity has gradually supported Extract-Load-Transform (ELT) since version 0.2.0, freeing users from maintaining multiple heterogeneous data systems. This article will introduce ByConity's capabilities, implementation principles, and usage methods related to ELT."),(0,i.yg)("h2",{id:"etl-scenarios-and-solutions"},"ETL Scenarios and Solutions"),(0,i.yg)("h3",{id:"differences-between-elt-and-etl"},"Differences between ELT and ETL"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ETL: Describes the process of extracting data from a source, transforming it, and loading it into a destination (data warehouse). The Transform phase typically describes the preprocessing of data within the data warehouse.")),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(50715).A,width:"1080",height:"388"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ELT focuses on loading minimally processed data into the data warehouse, leaving most of the transformation operations to the analysis phase. Compared to ETL, it requires less data modeling and provides analysts with more flexibility. ELT has become the norm in big data processing today, posing many new requirements for data warehouses.")),(0,i.yg)("h3",{id:"challenges-of-resource-duplication"},"Challenges of Resource Duplication"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(72384).A,width:"1048",height:"402"})),(0,i.yg)("p",null,"A typical data pipeline is as follows: We ingest behavioral data, logs, clickstreams, etc., into a storage system using MQ/Kafka/Flink. The storage system can be further divided into on-premises HDFS and cloud-based OSS&S3 remote storage systems. Then, a series of ETL operations are performed on the data warehouse to provide data for OLAP systems for analysis and query. However, some businesses need to branch off from the above storage, exporting data from the overall pipeline at a certain stage of data analysis to perform ETL operations different from the main pipeline, resulting in duplicate data storage. Additionally, two different ETL logics may emerge during this process."),(0,i.yg)("p",null,"As the amount of data increases, the cost pressure brought by computational and storage redundancy also increases. Meanwhile, the expansion of storage space makes elastic scaling inconvenient."),(0,i.yg)("h3",{id:"industry-solutions"},"Industry Solutions"),(0,i.yg)("p",null,"In the industry, there are several approaches to address the above issues:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Data pre-calculation school: Tools like Kylin. If report generation in Hadoop systems is slow or aggregation capabilities are poor, data pre-calculation can be performed to calculate cubes or views in advance for configured indicators. During actual SQL queries, the cubes or views can be directly used for substitution and returned."),(0,i.yg)("li",{parentName:"ul"},"Streaming and batch integration school: Tools like Flink, Risingwave. Data is aggregated directly in memory for reports or large screens as it flows in. After aggregation, the results are written to HBase or MySQL for retrieval and display. Flink also exposes interfaces for intermediate states, i.e., queryable state, to enable users to better utilize state data. However, the final results still need to be reconciled with batch computation results, and if inconsistencies are found, backtracking operations may be required. The entire process tests the skills of operation and maintenance/development teams."),(0,i.yg)("li",{parentName:"ul"},"Data lake and warehouse integration & HxxP: Combining data lakes with data warehouses.")),(0,i.yg)("h2",{id:"elt-in-byconity"},"ELT in ByConity"),(0,i.yg)("h3",{id:"overall-execution-flow"},"Overall Execution Flow"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(50505).A,width:"1280",height:"828"})),(0,i.yg)("h3",{id:"system-requirements-for-elt-tasks"},"System Requirements for ELT Tasks:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Overall scalability: Importing and transforming often require significant resources, and the system needs to scale horizontally to meet rapid data growth."),(0,i.yg)("li",{parentName:"ol"},"Reliability and fault tolerance: Large numbers of jobs can be scheduled orderly; in case of occasional task failures (OOM), container failures, etc., retries can be triggered; able to handle a certain degree of data skewness."),(0,i.yg)("li",{parentName:"ol"},"Efficiency and performance: Effective utilization of multi-core and multi-machine concurrency; fast data import; efficient memory usage (memory management); CPU optimization (vectorization, codegen)."),(0,i.yg)("li",{parentName:"ol"},"Ecosystem and observability: Compatible with various tools; task status awareness; task progress awareness; failed log query; certain visualization capabilities.")),(0,i.yg)("p",null,"Based on the requirements of ELT tasks and the difficulties encountered in current scenarios, ByConity has added the following features and optimizations."),(0,i.yg)("h3",{id:"stage-level-scheduling"},"Stage-level Scheduling"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(10422).A,width:"830",height:"528"})),(0,i.yg)("h4",{id:"principle-analysis"},"Principle Analysis"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The current SQL execution process in ClickHouse is as follows:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In the first stage, the Coordinator receives a distributed table query and converts it into a local table query for each shard node."),(0,i.yg)("li",{parentName:"ul"},"In the second stage, the Coordinator aggregates the results from each node and returns them to the client."))),(0,i.yg)("li",{parentName:"ul"},"ClickHouse converts the right table in Join operations into a subquery, which brings several issues that are difficult to resolve:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Complex queries have multiple subqueries, resulting in high conversion complexity."),(0,i.yg)("li",{parentName:"ul"},"When the Join table is large, it can easily cause OOM in worker nodes."),(0,i.yg)("li",{parentName:"ul"},"Aggregation occurs at the Coordinator, putting pressure on it and easily becoming a performance bottleneck.")))),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(23711).A,width:"443",height:"521"})," ",(0,i.yg)("img",{src:a(70500).A,width:"395",height:"536"})," ",(0,i.yg)("img",{src:a(24397).A,width:"320",height:"231"})),(0,i.yg)("p",null,"Unlike ClickHouse, we have implemented optimization for the execution of complex queries in ByConity. By splitting the execution plan, we transform the previous two-stage execution model into stage-level execution. During the logical plan phase, exchange operators are inserted based on operator types. During the execution phase, the entire execution plan is DAG-split based on exchange operators, and scheduling is performed stage by stage. The exchange operators between stages are responsible for data transmission and exchange.\nKey nodes:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Insertion of exchange nodes"),(0,i.yg)("li",{parentName:"ol"},"Splitting of stages"),(0,i.yg)("li",{parentName:"ol"},"Stage scheduler"),(0,i.yg)("li",{parentName:"ol"},"Segment executer"),(0,i.yg)("li",{parentName:"ol"},"Exchange manager")),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(66618).A,width:"583",height:"529"})),(0,i.yg)("p",null,"Here, we focus on the exchange perspective. As you can see in the figure above, at the top level is the query plan. When converting it to a physical plan, we transform it into different operators based on different data distribution requirements. The source layer, which receives data, is mostly unified and called ExchangeSource. Sinks have different implementations, such as BroadcastSink, Local, PartitionSink, etc., which run as part of map tasks. For cross-node data operations, we use a unified brpc streaming data transmission at the bottom level, and for local operations, we use memory queues. We have made very detailed optimizations for different points:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Data transmission layer",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"In-process communication uses memory queues, without serialization, zero copy"),(0,i.yg)("li",{parentName:"ul"},"Inter-process communication uses brpc stream RPC, ensuring order preservation, connection reuse, status code transmission, compression, etc."))),(0,i.yg)("li",{parentName:"ul"},"Operator layer",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Batch sending"),(0,i.yg)("li",{parentName:"ul"},"Thread reuse, reducing the number of threads")))),(0,i.yg)("h4",{id:"benefits"},"Benefits"),(0,i.yg)("p",null,"Because ByConity fully adopts a multi-stage query execution approach, there are significant overall benefits:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"More stable and efficient Coordinator",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Aggregation and other operators are split to worker nodes for execution"),(0,i.yg)("li",{parentName:"ul"},"The Coordinator node only needs to aggregate the final results"))),(0,i.yg)("li",{parentName:"ul"},"Reduced Worker OOM",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Stage splitting makes each stage's computation relatively simple"),(0,i.yg)("li",{parentName:"ul"},"The addition of exchange operators reduces memory pressure"))),(0,i.yg)("li",{parentName:"ul"},"More stable and efficient network connections",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Effective transmission by exchange operators"),(0,i.yg)("li",{parentName:"ul"},"Reuse of connection pools")))),(0,i.yg)("h3",{id:"adaptive-scheduler"},"Adaptive Scheduler"),(0,i.yg)("p",null,"The Adaptive Scheduler is a feature we have implemented for stability. In OLAP scenarios, it may be found that some data is incomplete or data queries timeout, often due to the fact that each worker is shared by all queries. Once a worker is slow, it can affect the execution of the entire query."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(30723).A,width:"360",height:"360"})),(0,i.yg)("p",null,"Issues with shared computation nodes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The load on the node where Scan occurs is related to the amount of scan data required by different queries, and it cannot be perfectly averaged."),(0,i.yg)("li",{parentName:"ul"},"The resource requirements vary greatly among Plan Segments.\nThis leads to severe load imbalance among worker nodes. Heavily loaded worker nodes can affect the overall progress of the query. Therefore, we have implemented the following optimization solutions:"),(0,i.yg)("li",{parentName:"ul"},"Establishment of a Worker health mechanism. The server side establishes a Worker health management class that can quickly obtain health information about the Worker Group, including CPU, memory, the number of running queries, etc."),(0,i.yg)("li",{parentName:"ul"},"Adaptive scheduling: Each SQL dynamically selects and controls the concurrency of computation nodes based on Worker health.")),(0,i.yg)("h3",{id:"query-queue-mechanism"},"Query Queue Mechanism"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(63699).A,width:"1280",height:"1024"})," ",(0,i.yg)("img",{src:a(8490).A,width:"1280",height:"1047"})),(0,i.yg)("p",null,"Our clusters may also experience full load situations, where all workers are unhealthy or overloaded/overloaded. In such cases, we use a query queue for optimization.\nWe directly implemented a manager on the server side. Each time a query is made, the manager checks the cluster's resources and holds a lock. If resources are insufficient, it waits for resources to be released before waking up the lock. This avoids the server issuing unbounded computation tasks, leading to worker node overloads and crashes.\nThe current implementation is relatively simple. The server is multi-instanced, and each server instance has its own queue, providing a local perspective lacking a global resource perspective. Additionally, the query status in each queue is not persisted but simply cached in memory.\nIn the future, we will add coordination between servers to limit query concurrency from a global perspective. We will also persist"),(0,i.yg)("h3",{id:"async-execution"},"Async Execution"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(39073).A,width:"1280",height:"708"})),(0,i.yg)("p",null,"A typical characteristic of ELT tasks is that their running time is relatively long compared to real-time analysis. Generally, ELT tasks can take minutes or even hours to execute.\nCurrently, ClickHouse's client queries are returned in a blocking manner. This results in the client remaining in a waiting state for an extended period, during which it needs to maintain a connection with the server. In unstable network conditions, the connection between the client and server may be disconnected, leading to task failures on the server side.\nTo reduce such unnecessary failures and reduce the complexity of maintaining connections for the client, we have developed an asynchronous execution feature, which is implemented as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"User-specified asynchronous execution. Users can specify asynchronous execution on a per-query basis by using ",(0,i.yg)("inlineCode",{parentName:"li"},"settings enable_async_query = 1"),". Alternatively, they can set it at the session level using ",(0,i.yg)("inlineCode",{parentName:"li"},"set enable_async_query = 1"),"."),(0,i.yg)("li",{parentName:"ol"},"If the query is asynchronous, it is placed in a background thread pool for execution."),(0,i.yg)("li",{parentName:"ol"},"Silent I/O. When an asynchronous query is executing, its interaction with the client, such as log output, needs to be severed.")),(0,i.yg)("p",null,"Initialization of the query still occurs in the session's synchronous thread. Once initialization is complete, the query state is written to the metastore, and an async query ID is returned to the client. The client can use this ID to query the status of the query. After the async query ID is returned, it indicates the completion of the interaction for this query. In this mode, if the statement is a ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT"),", subsequent results cannot be sent back to the client. In such cases, we recommend users use a combination of async query and ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT...INTO OUTFILE")," to meet their needs."),(0,i.yg)("h2",{id:"future-plans"},"Future Plans"),(0,i.yg)("p",null,"Regarding ELT mixed loads, the ByConity 0.2.0 version is just the beginning. In subsequent versions, we will continue to optimize query-related capabilities, with ELT as the core focus. The plans are as follows:"),(0,i.yg)("h3",{id:"fault-recovery-capabilities"},"Fault Recovery Capabilities"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Operator Spill",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Spill for Sort, Agg, and Join operators;"),(0,i.yg)("li",{parentName:"ul"},"Exchange Spill capability;"))),(0,i.yg)("li",{parentName:"ul"},"Recoverability",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Operator execution recovery: When ELT tasks run for a long time, occasional failures of intermediate tasks can lead to the failure of the entire query. Supporting task-level retries can significantly reduce occasional failures caused by environmental factors;"),(0,i.yg)("li",{parentName:"ul"},"Stage retries: When a node fails, stage-level retries can be performed;"),(0,i.yg)("li",{parentName:"ul"},"Ability to save queue job states;"))),(0,i.yg)("li",{parentName:"ul"},"Remote Shuffle Service: Currently, open-source shuffle services in the industry are often tailored for Spark and lack generic clients, such as C++ clients. We will supplement this capability in the future.")),(0,i.yg)("h3",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Specifiable computational resources: Users can specify the computational resources required for a query;"),(0,i.yg)("li",{parentName:"ul"},"Computational resource estimation/reservation: Dynamically estimate the computational resources required for a query and allocate them through reservation;"),(0,i.yg)("li",{parentName:"ul"},"Dynamic resource allocation: Currently, workers are permanent processes/nodes. Dynamic resource allocation can improve utilization;"),(0,i.yg)("li",{parentName:"ul"},"Fine-grained resource isolation: Reduce the mutual influence between queries through worker group or process-level isolation;")))}g.isMDXComponent=!0},50715:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt1-ccfe04dd9abfa7d620e7c93b024bbc2c.png"},63699:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt10-00e36ff14589366f30019c9a22871ed0.png"},8490:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt11-7a76adabaa507e6b8502fef8764e9333.png"},39073:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt12-8734ea2851ceceb9d629659aecd68ac5.png"},72384:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt2-caa5b7ef03a16466c984978e04735732.png"},50505:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt3-9500640cd18aa26d9bc3357e5dd627c9.png"},10422:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt4-494e04491f26b62b894e7bcea61beb89.png"},23711:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt5-feb79e6e129f3aeb9ab86aa2b92767f4.png"},70500:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt6-8481e54f07ead8899937be2f068395c6.png"},24397:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt7-306fde6a5dad86ac0bb435ce6909f7bc.png"},66618:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt8-91b30f3fc765792bb11ada8747fd2ec2.png"},30723:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/elt9-5832a9a799604adcf46d919e33a0fd48.png"}}]);