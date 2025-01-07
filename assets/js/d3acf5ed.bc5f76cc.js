"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1364],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var i=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(75890),r=(n(37953),n(58860));const a={title:"Complex Query Tuning",sidebar_position:3,tags:["Docs"]},o="Complex Query Tuning",l={unversionedId:"query-optimization/complex-query-optimization",id:"query-optimization/complex-query-optimization",title:"Complex Query Tuning",description:"Complex Query Execution Model",source:"@site/docs/query-optimization/complex-query-optimization.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/complex-query-optimization",permalink:"/docs/query-optimization/complex-query-optimization",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/docs/query-optimization/complex-query-optimization.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:3,frontMatter:{title:"Complex Query Tuning",sidebar_position:3,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Cache Preload",permalink:"/docs/query-optimization/query-optimization-with-cache-preload"},next:{title:"Query Optimization with Projection",permalink:"/docs/query-optimization/query-optimization-with-projection"}},s={},u=[{value:"Complex Query Execution Model",id:"complex-query-execution-model",level:2},{value:"How to Enable Query-Level Knobs",id:"how-to-enable-query-level-knobs",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"complex-query-tuning"},"Complex Query Tuning"),(0,r.yg)("h2",{id:"complex-query-execution-model"},"Complex Query Execution Model"),(0,r.yg)("p",null,"Analytical queries can be divided into simple queries and complex queries. Simple queries typically involve single-table retrieval aggregation or joins between large and small tables, resulting in fast query responses. Complex queries, on the other hand, involve large tables, multiple table joins, and complex logical processing, often leading to slow query responses and high resource consumption. ByConity has optimized its design for complex queries."),(0,r.yg)("p",null,"Simple queries can adopt a two-stage execution model, with the partial stage executed on the compute nodes and the final stage executed on the service nodes. However, when it comes to executing complex queries involving multiple aggregations or joins, the flexibility of the two-stage execution model is significantly reduced, making query optimization challenging. To better support distributed queries and facilitate the execution plans generated by the optimizer, we have introduced a complex query execution model that supports multiple rounds of distributed execution."),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(63974).A,width:"1070",height:"462"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Diagram of Complex Query Execution Model")),(0,r.yg)("p",null,"The execution flow of a complex query is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The Query SQL String is parsed into an AST (Abstract Syntax Tree) by the parser."),(0,r.yg)("li",{parentName:"ol"},"The AST undergoes rewriting and optimization to generate an execution plan."),(0,r.yg)("li",{parentName:"ol"},"When the optimizer is enabled, it generates the execution plan."),(0,r.yg)("li",{parentName:"ol"},"The execution plan is divided into multiple PlanSegments."),(0,r.yg)("li",{parentName:"ol"},"A PlanSegment represents an execution fragment in the distributed execution process, which includes:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The required AST fragment or a logical execution plan fragment composed of PlanNodes."),(0,r.yg)("li",{parentName:"ul"},"Node information for PlanSegment execution."),(0,r.yg)("li",{parentName:"ul"},"Upstream and downstream information for the PlanSegment, including the input stream from upstream and the required input stream for downstream."))),(0,r.yg)("li",{parentName:"ol"},"The engine's scheduler constructs a DAG (Directed Acyclic Graph) from these PlanSegments and topologically sorts them before distributing them to all nodes in the cluster."),(0,r.yg)("li",{parentName:"ol"},"Each node receives its PlanSegment and begins executing it."),(0,r.yg)("li",{parentName:"ol"},"PlanSegments containing data sources start reading the data and distributing it to downstream nodes according to shuffle rules."),(0,r.yg)("li",{parentName:"ol"},"PlanSegments with exchange inputs wait for upstream data and continue shuffling the data to various nodes if necessary."),(0,r.yg)("li",{parentName:"ol"},"After multiple stages are completed, the results are returned to the server.")),(0,r.yg)("h2",{id:"how-to-enable-query-level-knobs"},"How to Enable Query-Level Knobs"),(0,r.yg)("p",null,"Enabling the optimizer automatically triggers the complex query execution model. This can be done by configuring ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_optimizer=1")," or setting ",(0,r.yg)("inlineCode",{parentName:"p"},"dialect_type='ANSI'"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ensuring the Existence of Statistics")),(0,r.yg)("p",null,"Without statistics, the generated query plan may not be optimal. You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"show stats [<db_name>.]<table_name>")," to check the statistics."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Analyzing the Execution Time of Each Step")),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"explain analyze sql")," can display the execution time of each step."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tuning Parameters")),(0,r.yg)("p",null,"ByteHouse supports query-level parameter tuning manually, which means these parameters can be set separately for different queries. Parameters related to exchange operator can also be set in this way. You can specify parameter values for a query via keyword ",(0,r.yg)("inlineCode",{parentName:"p"},"SETTINGS")," as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SELECT 1 SETTINGS TEST_KNOB=1;\n")),(0,r.yg)("p",null,"When this SQL statement is executed, the parameter TEST_KNOB will be forcibly set to 1. Note that setting parameters in this way does not affect the parameter values \u200b\u200bof other queries."),(0,r.yg)("p",null,"We show some query-level parameters that have important impacts on performance in the following sentence."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The exchange operator is responsible for data transmission between PlanSegments.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," affects the total number of threads for pipeline execution, especially for non-source pipelines (those that read data directly from storage). The default setting is the number of CPU cores. There is no ideal recommended value, but considering halving or doubling the value and observing the results can be helpful. If the query has a high memory footprint, reducing this value may be beneficial."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_timeout_ms")," is the exchange timeout duration in milliseconds, with a default value of 100 seconds. If Exchange-related timeout errors occur, increasing this value may be appropriate."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," affects the concurrent ability of Exchange to output data, with a default value of 8. Generally, there is no need to adjust this value. However, if ",(0,r.yg)("inlineCode",{parentName:"p"},"exchange_source_pipeline_threads")," is adjusted significantly, it may be beneficial to increase ",(0,r.yg)("inlineCode",{parentName:"p"},"exchange_unordered_output_parallel_size")," to enhance upstream output capability."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_enable_block_compress")," determines whether to enable Exchange compression, which is enabled by default. If the CPU bottleneck is more significant than the network bottleneck, disabling this option may be worth considering."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_parallel_size")," determines the number of partitions that single-partition data is shuffled to downstream, with a default value of 1. Generally, there is no need to adjust this value. Only in scenarios where the exchange is required to be ordered in the future, it is necessary to increase the number of partitions by adjusting ",(0,r.yg)("inlineCode",{parentName:"p"},"exchange_parallel_size")," to enhance the concurrent processing capability of downstream operators."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_local_receiver_queue_size")," represents the queue size for local exchange receiver. It implements soft flow control through the asynchronization of operators and the synchronization of operator states. It sends two signals, idle and backlog, to the Sender. The Sender lowers the transmission priority of the backlogged Stream and raises the priority of the idle Stream."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_remote_receiver_queue_size")," represents the queue size for remote exchange receiver."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_buffer_send_threshold_in_bytes")," limits the minimum bytes when exchange will flush send buffer, which determined the backlog threshold size of the receiver."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"exchange_buffer_send_threshold_in_row")," limits the minimum number of rows when exchange will flush send buffer, which determined the backlog threshold size of the receiver."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"There are some parameters that can take effect for the entire database as well as for a single query.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"max_threads")," limits the maximum number of threads to execute the request. By default, it is determined automatically."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"max_block_size")," limits the maximum block size for reading. By default, it is 65536."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Routing-related parameters are usually used to determine the storage and access paths of data in distributed systems.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"group_by_two_level_threshold")," represents from what number of keys, a two-level aggregation starts."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"group_by_two_level_threshold_bytes")," represents from what size of the aggregation state in bytes, a two-level aggregation begins to be used."),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Runtime filter aims to dynamically generate filtering conditions for certain join queries during runtime to reduce the amount of data scanned, avoid unnecessary I/O and network transmissions, and thereby accelerate the queries. There are some parameters related to runtime filter below.")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"runtime_filter_min_filter_rows")," limits the minimum row num to enable runtime filter."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"runtime_filter_bloom_build_threshold")," limits the threshold of right table to build bloom filter."))}m.isMDXComponent=!0},63974:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/complex-query-model-9adadd60bf95fe79b67512fe58018575.png"}}]);