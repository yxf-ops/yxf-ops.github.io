"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[171],{8860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(7953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(5890),a=(n(7953),n(8860));const o={title:"Main Principles Concepts",sidebar_position:1,tags:["Docs"]},r="Main principle concept",s={unversionedId:"introduction/main-principle-concepts",id:"version-0.2.0/introduction/main-principle-concepts",title:"Main Principles Concepts",description:"This chapter will introduce the main principles of ByConity and it's query execution. ByConity's query execution process is shown in the figure below. First, ByConity will obtain the Metadata information required for the query through the Metadata service. Then ByConity will generate an efficient query plan through the optimizer according to the user's SQL, and schedule it to the corresponding calculation group to read the data and execute it. Finally, the result set is summarized and sent back to the Client.",source:"@site/versioned_docs/version-0.2.0/introduction/main-principle-concepts.mdx",sourceDirName:"introduction",slug:"/introduction/main-principle-concepts",permalink:"/docs/0.2.0/introduction/main-principle-concepts",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/introduction/main-principle-concepts.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",sidebarPosition:1,frontMatter:{title:"Main Principles Concepts",sidebar_position:1,tags:["Docs"]},sidebar:"tutorialSidebar",next:{title:"Background and Technical Architecture",permalink:"/docs/0.2.0/introduction/background-and-technical-architecture"}},c={},l=[{value:"Metadata Management\uff08Catalog Service\uff09",id:"metadata-managementcatalog-service",level:2},{value:"Query Optimizer",id:"query-optimizer",level:2},{value:"Virtual Warehouse",id:"virtual-warehouse",level:2},{value:"Virtual File System (VFS)",id:"virtual-file-system-vfs",level:2},{value:"Columnar Storage",id:"columnar-storage",level:2},{value:"Query execution",id:"query-execution",level:2},{value:"Data write",id:"data-write",level:2},{value:"Calculate group volume expansion and contraction",id:"calculate-group-volume-expansion-and-contraction",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,i.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"main-principle-concept"},"Main principle concept"),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"This chapter will introduce the main principles of ByConity and it's query execution. ByConity's query execution process is shown in the figure below. First, ByConity will obtain the Metadata information required for the query through the Metadata service. Then ByConity will generate an efficient query plan through the optimizer according to the user's SQL, and schedule it to the corresponding calculation group to read the data and execute it. Finally, the result set is summarized and sent back to the Client."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(6934).A,width:"2148",height:"2032"})),(0,a.yg)("h2",{id:"metadata-managementcatalog-service"},"Metadata Management\uff08Catalog Service\uff09"),(0,a.yg)("p",null,"The function of Metadata Management (Catalog Service) is mainly to read and write the Metadata of read and write requests. Metadata service is a very critical service, which determines the availability and correctness of queries. Not only does ByConity provide highly available and scalable Metadata management services, but it also implements complete transaction semantics guarantee (ACID) on top of it. In addition, ByConity also uses caching to provide low-delay reading of the raw data involved in queries to ensure efficient and stable query performance."),(0,a.yg)("h2",{id:"query-optimizer"},"Query Optimizer"),(0,a.yg)("p",null,"The Query Optimizer is one of the cores of the Database System. An excellent optimizer can greatly improve query performance. Especially in complex query scenarios, the optimizer can bring performance improvements of several to hundreds times."),(0,a.yg)("p",null,"ByConity's self-developed optimizer provides extreme optimization capabilities based on four major optimization directions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"RBO: rule-based optimization capabilities. Support: column clipping, partition clipping, expression simplification, subquery disassociation, predicate push-down, redundant operator elimination, outer-JOIN to INNER-JOIN, operator push-down storage, distributed operator splitting and other common heuristic optimization capabilities."),(0,a.yg)("li",{parentName:"ul"},"CBO : Cost-based optimization capabilities. Support: Join Reorder, Outer-Join Reorder, Join/Agg Reorder, CTE, Materialized View, Dynamic Filter Push-Down, Magic Set and other cost-based optimization capabilities. And integrates Property Enforcement for distributed plans."),(0,a.yg)("li",{parentName:"ul"},"DBO: Optimization capabilities based on data dependencies. Support: unique key, functional dependency, Order dependency, Inclusion dependency and other optimization capabilities based on data dependencies."),(0,a.yg)("li",{parentName:"ul"},"HBO: Optimization ability based on query feedback. Support: dynamic adjustment of cardinality estimation, dynamic adjustment of parallelism, dynamic adjustment of Operating Plan and other optimization capabilities based on historical execution feedback.")),(0,a.yg)("h2",{id:"virtual-warehouse"},"Virtual Warehouse"),(0,a.yg)("p",null,"Virtual Warehouse (VW for short) is a virtual organization of computing resources. Computing resources can be divided into multiple virtual clusters on demand to provide physical resource isolation between different tenants. Each virtual cluster contains 0 to more computing nodes, and performs dynamic volume expansion and contraction according to actual resource requirements."),(0,a.yg)("p",null,"There are two ways to calculate volume expansion and contraction:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"One is vertical expansion, that is, adjusting the number of CPU cores and memory size of the computing group."),(0,a.yg)("li",{parentName:"ul"},"The other is horizontal expansion, increase or decrease the number of computing groups, improve system concurrency.")),(0,a.yg)("p",null,"In the architecture of storage-computing separation, computing resources and storage resources are decoupled and stateless. The volume expansion and contraction process does not need to migrate and balance data. This enables fast elastic volume expansion and contraction can be achieved."),(0,a.yg)("p",null,"Computing nodes are mainly responsible for computing tasks, which can be data writing, user queries, or some background tasks. Under the storage-computing separation architecture of ByConity, user queries can realize read and write separation to reduce mutual interference between read and write jobs. User queries and background tasks can share the same computing node to improve utilization, or independent computing nodes can be used to ensure strict resource isolation. Users can build multiple computing groups according to the characteristics, priorities and business categories of computing tasks, and set different resource elasticity strategies to improve computing efficiency and reduce costs."),(0,a.yg)("h2",{id:"virtual-file-system-vfs"},"Virtual File System (VFS)"),(0,a.yg)("p",null,"ByConity uses cloud storage services such as HDFS or S3 as the data storage layer to store actual data, indexes, etc. The data files of the data table are stored in the remote unified distributed storage system, which is separated from the computing nodes. The underlying storage system may correspond to different types of distributed systems. Such as HDFS, Amazon S3, Google cloud storage, Azure blob storage, Alibaba Cloud object storage , etc."),(0,a.yg)("p",null,"Different distributed storage systems have many different functions and different performance, which will affect the design and implementation of functions. For example, HDFS does not support file update; S3 object move operation requires reoperation to copy data, etc. ByConity provides a unified abstract file system interface to the computing layer through the service of storage. The storage layer adopts S3 or HDFS to be transparent to the computing layer; the computing layer can support ByConity's own computing engine, and can easily connect to other computing engines in the future, such as Presto, Spark, etc."),(0,a.yg)("h2",{id:"columnar-storage"},"Columnar Storage"),(0,a.yg)("p",null,"Similar to mainstream analytical data, ByConity adopts a columnar storage format to reduce unnecessary data IO to improve query performance, and efficiently compress data to reduce storage costs. In addition, for continuously stored columnar data, ByConity further improves query performance through vectorized execution technology."),(0,a.yg)("h1",{id:"main-process"},"Main process"),(0,a.yg)("h2",{id:"query-execution"},"Query execution"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Users submit Select Query to the service node."),(0,a.yg)("li",{parentName:"ol"},"Obtain the required Metadata information from the Metadata service, perform Parsing, Planning, Optimising on Query, and generate Operating Plan."),(0,a.yg)("li",{parentName:"ol"},"The service node schedules the Operating Plan according to the available computing resources and sends tasks to the computing node."),(0,a.yg)("li",{parentName:"ol"},"The computing node receives the Query subquery."),(0,a.yg)("li",{parentName:"ol"},"Query obtains data from the virtual file system (VFS), executes it on the computing node according to the Query's Operating Plan, and sends back the calculation results to the service node for summary.")),(0,a.yg)("h2",{id:"data-write"},"Data write"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The user submits a Write Query to the service node."),(0,a.yg)("li",{parentName:"ol"},"The service node selects the appropriate write node to execute the write request according to the scheduling policy."),(0,a.yg)("li",{parentName:"ol"},"The write node performs the write, writes the data to the local disk and dumps it to the cloud storage side."),(0,a.yg)("li",{parentName:"ol"},"Submit part Metadata to the Catalog Service, submit the transaction, and the write is completed.")),(0,a.yg)("h2",{id:"calculate-group-volume-expansion-and-contraction"},"Calculate group volume expansion and contraction"),(0,a.yg)("p",null,"The Resource Manager is responsible for unified management and scheduling of computing resources. It can collect performance data and resource usage of each computing group, dynamically allocate resources for read and write tasks and background tasks, and perform volume expansion and contraction to improve resources. The components of ByConity have been containerized, and it is very convenient to perform volume expansion and contraction on the specified computing group by adjusting the number of replicas of kubernets. In addition, dynamic volume expansion and contraction can be achieved by setting the volume expansion and contraction threshold of kubernets in combination with calculating group resource usage."))}p.isMDXComponent=!0},6934:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/boxcnCarlKKAt0hSPtXFOpfmo7c-0ccafc19db764b56b10032d5442c6b7d.png"}}]);