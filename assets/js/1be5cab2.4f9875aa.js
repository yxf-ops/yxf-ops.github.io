"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[9204],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||g[m]||r;return n?i.createElement(y,o(o({ref:t},c),{},{components:n})):i.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(75890),a=(n(37953),n(58860));const r={slug:"byconity-benchmark",title:"Performance Comparison Analysis of ByConity and Mainstream Open-Source OLAP Engines (ClickHouse, Doris, Presto)",authors:["tigerwangyb"],tags:["video introduction","docusaurus"]},o="Performance Comparison Analysis of ByConity and Mainstream Open-Source OLAP Engines (ClickHouse, Doris, Presto)",s={permalink:"/blog/byconity-benchmark",editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/blog/2023-07-21-byconity-benchmark/index.md",source:"@site/blog/2023-07-21-byconity-benchmark/index.md",title:"Performance Comparison Analysis of ByConity and Mainstream Open-Source OLAP Engines (ClickHouse, Doris, Presto)",description:"Introduction",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"video introduction",permalink:"/blog/tags/video-introduction"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:8.44,hasTruncateMarker:!1,authors:[{name:"Yunbo Wang",title:"ByConity maintainer",url:"https://github.com/tigerwangyb",imageURL:"https://github.com/tigerwangyb.png",key:"tigerwangyb"}],frontMatter:{slug:"byconity-benchmark",title:"Performance Comparison Analysis of ByConity and Mainstream Open-Source OLAP Engines (ClickHouse, Doris, Presto)",authors:["tigerwangyb"],tags:["video introduction","docusaurus"]},prevItem:{title:"Detailed Explanation of ByConity ELT Principles",permalink:"/blog/byconity-elt"},nextItem:{title:"ByteDance Open Sources Its Cloud Native Data Warehouse ByConity",permalink:"/blog/2023-05-24-byconity-announcement-opensources-its-cloudnative-data-warehouse"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Introduction to TPC-DS Benchmark Test",id:"introduction-to-tpc-ds-benchmark-test",level:2},{value:"Introduction to OLAP Engines",id:"introduction-to-olap-engines",level:2},{value:"Test Environment and Methodology",id:"test-environment-and-methodology",level:2},{value:"Test Environment Configuration",id:"test-environment-configuration",level:3},{value:"Server Configuration",id:"server-configuration",level:3},{value:"Test Methodology",id:"test-methodology",level:3},{value:"Performance Test Results",id:"performance-test-results",level:2},{value:"Basic Query Scenario",id:"basic-query-scenario",level:3},{value:"Join Query Scenario",id:"join-query-scenario",level:3},{value:"Aggregation Query Scenario",id:"aggregation-query-scenario",level:3},{value:"Subquery Scenario",id:"subquery-scenario",level:3},{value:"Window Function Query Scenario",id:"window-function-query-scenario",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Join Us",id:"join-us",level:2}],c={toc:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"As the amount and complexity of data continue to increase, more and more companies are using OLAP (Online Analytical Processing) engines to process large-scale data and provide instant analysis results. Performance is a crucial factor when selecting an OLAP engine. Therefore, this article will compare the performance of four open-source OLAP engines: ClickHouse, Doris, Presto, and ByConity, using the 99 query statements from the TPC-DS benchmark test. The aim is to provide a reference for companies to choose a suitable OLAP engine."),(0,a.yg)("h2",{id:"introduction-to-tpc-ds-benchmark-test"},"Introduction to TPC-DS Benchmark Test"),(0,a.yg)("p",null,"TPC-DS (Transaction Processing Performance Council Decision Support Benchmark) is a benchmark test designed for decision support systems (DSS). Developed by the TPC organization, it simulates multidimensional analysis and decision support scenarios, providing 99 query statements to evaluate the performance of database systems in complex multidimensional analysis scenarios. Each query is designed to simulate complex decision support scenarios, including joins across multiple tables, aggregations and groupings, subqueries, and other advanced SQL techniques."),(0,a.yg)("h2",{id:"introduction-to-olap-engines"},"Introduction to OLAP Engines"),(0,a.yg)("p",null,"ClickHouse, Doris, Presto, and ByConity are currently popular open-source OLAP engines known for their high performance and scalability."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ClickHouse is a column-based database management system developed by Yandex, a Russian search engine company. It focuses on fast query and analysis of large-scale data."),(0,a.yg)("li",{parentName:"ul"},"Doris is a distributed column-based storage and analysis system that supports real-time query and analysis and can integrate with big data technologies such as Hadoop, Spark, and Flink."),(0,a.yg)("li",{parentName:"ul"},"Presto is a distributed SQL query engine developed by Facebook that enables fast query and analysis on large-scale datasets."),(0,a.yg)("li",{parentName:"ul"},"ByConity is a cloud-native data warehouse open-sourced by ByteDance. It adopts a storage-compute separation architecture, achieves tenant resource isolation, elastic scaling, and strong consistency in data read and write. It supports mainstream OLAP engine optimization techniques and exhibits excellent read and write performance.")),(0,a.yg)("p",null,"This article will test the performance of these four OLAP engines using the 99 query statements from the TPC-DS benchmark test and compare their performance differences in different types of queries."),(0,a.yg)("h2",{id:"test-environment-and-methodology"},"Test Environment and Methodology"),(0,a.yg)("h3",{id:"test-environment-configuration"},"Test Environment Configuration"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Environment Configuration")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Memory: 256GB"),(0,a.yg)("li",{parentName:"ul"},"Disk: ATA, 7200rpm, partitioned:gpt"),(0,a.yg)("li",{parentName:"ul"},"System: Linux 4.14.81.bm.30-amd64 x86_64, Debian GNU/Linux 9"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Test Data Volume")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Using 1TB of data tables, equivalent to 2.8 billion rows of data")))),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Software Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Version"),(0,a.yg)("th",{parentName:"tr",align:null},"Release Date"),(0,a.yg)("th",{parentName:"tr",align:null},"Number of Nodes"),(0,a.yg)("th",{parentName:"tr",align:null},"Other Configurations"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClickHouse"),(0,a.yg)("td",{parentName:"tr",align:null},"23.4.1.1943"),(0,a.yg)("td",{parentName:"tr",align:null},"2023-04-26"),(0,a.yg)("td",{parentName:"tr",align:null},"5 Workers"),(0,a.yg)("td",{parentName:"tr",align:null},"distributed_product_mode = 'global', partial_merge_join_optimizations = 1")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Doris"),(0,a.yg)("td",{parentName:"tr",align:null},"1.2.4.1"),(0,a.yg)("td",{parentName:"tr",align:null},"2023-04-27"),(0,a.yg)("td",{parentName:"tr",align:null},"5 BEs, 1 FE"),(0,a.yg)("td",{parentName:"tr",align:null},"Bucket configuration: Dimension table 1, returns table 10-20, sales table 100-200")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Presto"),(0,a.yg)("td",{parentName:"tr",align:null},"0.28.0"),(0,a.yg)("td",{parentName:"tr",align:null},"2023-03-16"),(0,a.yg)("td",{parentName:"tr",align:null},"5 Workers, 1 Coordinator"),(0,a.yg)("td",{parentName:"tr",align:null},"Hive Catalog, ORC format, Xmx200GB, enable_optimizer=1, dialect_type='ANSI'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ByConity"),(0,a.yg)("td",{parentName:"tr",align:null},"0.1.0-GA"),(0,a.yg)("td",{parentName:"tr",align:null},"2023-03-15"),(0,a.yg)("td",{parentName:"tr",align:null},"5 Workers"),(0,a.yg)("td",{parentName:"tr",align:null},"enable_optimizer=1, dialect_type='ANSI'")))),(0,a.yg)("h3",{id:"server-configuration"},"Server Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Architecture:          x86_64\nCPU op-mode(s):        32-bit, 64-bit\nByte Order:            Little Endian\nCPU(s):                48\nOn-line CPU(s) list:   0-47\nThread(s) per core:    2\nCore(s) per socket:    12\nSocket(s):             2\nNUMA node(s):          2\nVendor ID:             GenuineIntel\nCPU family:            6\nModel:                 79\nModel name:            Intel(R) Xeon(R) CPU E5-2650 v4 @ 2.20GHz\nStepping:              1\nCPU MHz:               2494.435\nCPU max MHz:           2900.0000\nCPU min MHz:           1200.0000\nBogoMIPS:              4389.83\nVirtualization:        VT-x\nL1d cache:             32K\nL1i cache:             32K\nL2 cache:              256K\nL3 cache:              30720K\nNUMA node0 CPU(s):     0-11,24-35\nNUMA node1 CPU(s):     12-23,36-47\n")),(0,a.yg)("h3",{id:"test-methodology"},"Test Methodology"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Use the 99 query statements from the TPC-DS benchmark test and 1TB (2.8 billion rows) of data to test the performance of the four OLAP engines."),(0,a.yg)("li",{parentName:"ul"},"Use the same test dataset in each engine and maintain the same configuration and hardware environment."),(0,a.yg)("li",{parentName:"ul"},"Execute each query multiple times and take the average value to reduce measurement errors, with a query timeout set to 500 seconds."),(0,a.yg)("li",{parentName:"ul"},"Record details of query execution, such as query execution plans, I/O and CPU usage.")),(0,a.yg)("h2",{id:"performance-test-results"},"Performance Test Results"),(0,a.yg)("p",null,"We used the same dataset and hardware environment to test the performance of these four OLAP engines. The test dataset size is 1TB, and the hardware and software environments are as described above. We conducted three consecutive tests on each of the four OLAP engines using the 99 query statements from the TPC-DS benchmark test and took the average of the three results. Among them, ByConity successfully ran all 99 query tests. Doris crashed on SQL15 and had four timeouts, specifically SQL54, SQL67, SQL78, and SQL95. Presto had timeouts only on SQL67 and SQL72, while all other queries ran successfully. ClickHouse only ran 50% of the query statements, with some timing out and others reporting system errors. The analysis revealed that ClickHouse does not effectively support multi-table join queries, requiring manual rewriting and splitting of such SQL statements for execution. Therefore, we temporarily exclude ClickHouse from the comparison of total execution time. The total execution time for the TPC-DS tests of the other three OLAP engines is shown in Figure 1. As seen in Figure 1, the query performance of the open-source ByConity is significantly better than the other engines, approximately 3-4 times faster. (Note: The vertical axis units of all charts below are in seconds.)"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 1: Total Execution Time for 99 Queries in TPC-DS",src:n(41857).A,width:"1280",height:"780"})),(0,a.yg)("p",null,"Based on the 99 query statements from the TPC-DS benchmark test, we will categorize them according to different query scenarios, such as basic queries, join queries, aggregation queries, subqueries, and window function queries. We will use these categories to analyze and compare the performance of ClickHouse, Doris, Presto, and ByConity:"),(0,a.yg)("h3",{id:"basic-query-scenario"},"Basic Query Scenario"),(0,a.yg)("p",null,"This scenario involves simple query operations, such as retrieving data from a single table, filtering, and sorting results. The performance test of basic queries mainly focuses on the ability to process individual queries. Among them, ByConity performs best, with Presto and Doris also showing good performance. This is because basic queries usually involve only a small number of tables and fields, allowing Presto and Doris to fully utilize their distributed query features and in-memory computing capabilities. ClickHouse struggles with multi-table joins, resulting in some queries timing out. Specifically, SQL5, 8, 11, 13, 14, 17, and 18 all timed out. We calculated these timeouts as 500 seconds but truncated them to 350 seconds for clearer display. Figure 2 shows the average query time for the four engines in the basic query scenario:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 2: Performance Comparison of Basic Queries in TPC-DS",src:n(11274).A,width:"1280",height:"788"})),(0,a.yg)("h3",{id:"join-query-scenario"},"Join Query Scenario"),(0,a.yg)("p",null,"Join queries are common multi-table query scenarios that typically use JOIN statements to connect multiple tables and retrieve data based on specified conditions. As seen in Figure 3, ByConity performs best, mainly due to its optimized query optimizer, which introduces cost-based optimization capabilities (CBO) and performs optimization operations such as re-ordering during multi-table joins. Presto and Doris follow closely behind, while ClickHouse performs relatively poorly in multi-table joins and does not support many complex statements well."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 3: Performance Comparison of Join Queries in TPC-DS",src:n(66483).A,width:"1280",height:"787"})),(0,a.yg)("h3",{id:"aggregation-query-scenario"},"Aggregation Query Scenario"),(0,a.yg)("p",null,"Aggregation queries involve statistical calculations on data, such as testing the use of aggregate functions like SUM, AVG, COUNT. ByConity continues to perform exceptionally well, followed by Doris and Presto. ClickHouse experienced four timeouts. To facilitate comparison, we truncated the timeout value to 250 seconds."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 4: Performance Comparison of Aggregation Queries in TPC-DS",src:n(11612).A,width:"1280",height:"787"})),(0,a.yg)("h3",{id:"subquery-scenario"},"Subquery Scenario"),(0,a.yg)("p",null,"Subqueries are nested within SQL statements and often serve as conditions or constraints for the main query. As shown in Figure 5, ByConity performs best due to its rule-based optimization (RBO) capabilities. ByConity optimizes complex nested queries holistically through techniques like operator pushdown, column pruning, and partition pruning, eliminating all subqueries and transforming common operators into Join+Agg formats. Doris and Presto also perform relatively well, but Presto experienced timeouts on SQL68 and SQL73, and Doris experienced timeouts on three SQL queries. ClickHouse also had some timeouts and system errors, as mentioned earlier. For easier comparison, we truncated the timeout value to 250 seconds."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 5: Performance Comparison of Subqueries in TPC-DS",src:n(78149).A,width:"1280",height:"796"})),(0,a.yg)("h3",{id:"window-function-query-scenario"},"Window Function Query Scenario"),(0,a.yg)("p",null,"Window function queries are advanced SQL query scenarios that enable ranking, grouping, sorting, and other operations within query results. As shown in Figure 6, ByConity exhibits the best performance, followed by Presto. Doris experienced a single timeout, and ClickHouse still had some TPC-DS tests that did not complete successfully."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Figure 6: Performance Comparison of Window Function Queries in TPC-DS",src:n(24142).A,width:"1280",height:"792"})),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"This article analyzes and compares the performance of four OLAP engines - ClickHouse, Doris, Presto, and ByConity - using the 99 query statements from the TPC-DS benchmark test. We found that the performance of the four engines varies under different query scenarios. ByConity performs exceptionally well in all 99 TPC-DS query scenarios, surpassing the other three OLAP engines. Presto and Doris perform relatively well in join queries, aggregation queries, and window function queries. However, ClickHouse's design and implementation are not specifically optimized for join queries, resulting in subpar performance in multi-table join scenarios."),(0,a.yg)("p",null,"It is important to note that performance test results depend on multiple factors, including data structure, query type, and data model. In practical applications, it is necessary to consider various factors comprehensively to select the most suitable OLAP engine."),(0,a.yg)("p",null,"When selecting an OLAP engine, other factors such as scalability, usability, and stability should also be considered. In practical applications, it is essential to select based on specific business needs and configure and optimize the engine reasonably to achieve optimal performance."),(0,a.yg)("p",null,"In summary, ClickHouse, Doris, Presto, and ByConity are all excellent OLAP engines with different strengths and applicable scenarios. In practical applications, it is necessary to select based on specific business needs and configure and optimize the engine reasonably to achieve optimal performance. At the same time, it is essential to select representative query scenarios and datasets and conduct testing and analysis for different query scenarios to comprehensively evaluate the engine's performance."),(0,a.yg)("h2",{id:"join-us"},"Join Us"),(0,a.yg)("p",null,"The ByConity community has a large number of users and is a very open community. We invite everyone to discuss and contribute together. We have established an issue on Github: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ByConity/ByConity/issues/26"},"https://github.com/ByConity/ByConity/issues/26"),". You can also join our Feishu group, Slack, or Discord to participate in the discussion."),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(53367).A,width:"900",height:"400"})))}g.isMDXComponent=!0},41857:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark1-b501a6894b07e84ebbcbea991548633f.png"},11274:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark2-00a78c3b1d2b94ce8eb03ecc0f3f506a.png"},66483:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark3-1acbfa4ea42175c44667256a6ced5206.png"},11612:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark4-fb103d3e66cdefc5d8dd4e5cff4388e0.png"},78149:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark5-0ae53bb8245ec87a9ac998d1b0b5614f.png"},24142:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark6-334f3bbe8cdd726ae7f6131839b71d43.png"},53367:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/benchmark7-14e580dc14c6dfd29f801716c262ad3b.png"}}]);