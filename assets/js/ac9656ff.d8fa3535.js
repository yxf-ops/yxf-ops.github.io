"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3479],{58860:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>p});var n=a(37953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,p=m["".concat(s,".").concat(c)]||m[c]||g[c]||r;return a?n.createElement(p,l(l({ref:t},u),{},{components:a})):n.createElement(p,l({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(75890),i=(a(37953),a(58860));const r={title:"Materialized View",sidebar_position:5,tags:["Docs"]},l="Materialized View",o={unversionedId:"query-optimization/materialized-view",id:"version-0.3.0/query-optimization/materialized-view",title:"Materialized View",description:"Function Definition",source:"@site/versioned_docs/version-0.3.0/query-optimization/materialized-view.mdx",sourceDirName:"query-optimization",slug:"/query-optimization/materialized-view",permalink:"/docs/0.3.0/query-optimization/materialized-view",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.3.0/query-optimization/materialized-view.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:5,frontMatter:{title:"Materialized View",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Query Optimization with Projection",permalink:"/docs/0.3.0/query-optimization/query-optimization-with-projection"},next:{title:"Client Connection",permalink:"/docs/0.3.0/integration/client-connection"}},s={},d=[{value:"Function Definition",id:"function-definition",level:2},{value:"Normal View",id:"normal-view",level:3},{value:"Materialized View",id:"materialized-view-1",level:3},{value:"Implementation Principle",id:"implementation-principle",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Limitations",id:"limitations",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"Create a Materialized View",id:"create-a-materialized-view",level:3},{value:"SQL Syntax",id:"sql-syntax",level:4},{value:"Update the Materialized View",id:"update-the-materialized-view",level:3},{value:"Update Syntax",id:"update-syntax",level:4},{value:"Update Process",id:"update-process",level:4},{value:"Query the Materialized View",id:"query-the-materialized-view",level:3},{value:"Delete the Materialized View",id:"delete-the-materialized-view",level:3},{value:"SQL Syntax",id:"sql-syntax-1",level:4},{value:"Use Example",id:"use-example",level:3},{value:"Example of Use Scenarios",id:"example-of-use-scenarios",level:2},{value:"Aggregate Aggregated View",id:"aggregate-aggregated-view",level:3},{value:"View Definition",id:"view-definition",level:4},{value:"Table Creation Practice",id:"table-creation-practice",level:4},{value:"Import Data",id:"import-data",level:4},{value:"Query Rewriting",id:"query-rewriting",level:4},{value:"Normal Materialized View",id:"normal-materialized-view",level:3},{value:"View Definition",id:"view-definition-1",level:4},{value:"Table Creation Practice",id:"table-creation-practice-1",level:4},{value:"Refresh Data",id:"refresh-data",level:4},{value:"Query Rewriting",id:"query-rewriting-1",level:4},{value:"Realtime Materialized View",id:"realtime-materialized-view",level:3},{value:"View Definition",id:"view-definition-2",level:4},{value:"Table Creation Practice",id:"table-creation-practice-2",level:4},{value:"Multi-table Materialized View (Synchronous Refresh)",id:"multi-table-materialized-view-synchronous-refresh",level:3},{value:"View Definition",id:"view-definition-3",level:4},{value:"Table Creation Practice",id:"table-creation-practice-3",level:4},{value:"Refresh View",id:"refresh-view",level:4}],u={toc:d},m="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"materialized-view"},"Materialized View"),(0,i.yg)("h2",{id:"function-definition"},"Function Definition"),(0,i.yg)("p",null,"In the ByConity database, in addition to the Normal View, there is also a Materialized View."),(0,i.yg)("h3",{id:"normal-view"},"Normal View"),(0,i.yg)("p",null,"Normal View: There is no real data stored, and it does not occupy storage space. It is just an execution operation to read data, which can be regarded as a saved SQL query statement."),(0,i.yg)("h3",{id:"materialized-view-1"},"Materialized View"),(0,i.yg)("p",null,"Materialized View: It stores the data contained in the SQL query statement and provides an update mechanism. Using a query on the materialized view instead of directly querying the data table avoids re-calculating and aggregating the data, and can save query time in a space-for-time manner, achieving the purposes of query acceleration and simplified query logic. As a pre-computed optimization method, materialized views are widely used in traditional databases such as Oracle and MS SQL Server. With the popularization of big data technology, various data warehouses and query engines play an increasingly important role in data analysis in business. As an accelerator for data query, the materialized view will greatly enhance the user experience in data analysis work. The materialized view uses a query rewrite (Query Rewrite) mechanism, and there is no need to modify the original query statement. The engine optimizer will automatically select the appropriate materialized view for query rewrite, which is completely transparent to the application."),(0,i.yg)("h2",{id:"implementation-principle"},"Implementation Principle"),(0,i.yg)("p",null,'A materialized view is a special table that stores the pre-calculated query results. The term "materialized" (Materialized) is relative to a normal view. A normal view provides ease of use and flexibility compared to an ordinary table, but it cannot accelerate data access. A materialized view is like a cache of a view. It does not build and calculate the data set at runtime, but pre-calculates, stores, and optimizes data access at creation, and automatically refreshes to ensure the real-time nature of the data.'),(0,i.yg)("p",null,"The most important function of a materialized view is query acceleration. There are a large number of complex queries executed on large tables in the data warehouse, and these queries consume a lot of resources and time. The materialized view can answer queries through pre-calculated results, eliminating the overhead of expensive Join and aggregation calculations, greatly improving query processing time and reducing system load. The materialized view is especially useful for queries that can foresee and repeatedly use the same subquery results."),(0,i.yg)("p",null,"The core content of the materialized view is data update and query rewrite."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Prepare the underlying table in advance and import the data as needed;"),(0,i.yg)("li",{parentName:"ul"},"Create a target table for the materialized view;")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The underlying table cannot be a unique table."),(0,i.yg)("li",{parentName:"ul"},"If it is a polymerized view SQL, the defined target table should be CnchAggregatingMergeTree."),(0,i.yg)("li",{parentName:"ul"},"The schema of the materialized view and the underlying table need to be consistent.")),(0,i.yg)("h2",{id:"limitations"},"Limitations"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Currently, only three materialized views are allowed to be created for each underlying table, and creation will be prohibited if the number exceeds this."),(0,i.yg)("li",{parentName:"ul"},"The unique key engine (CnchMergeTree) does not currently support the use of materialized views."),(0,i.yg)("li",{parentName:"ul"},"Does not support JOIN/SUB QUERY."),(0,i.yg)("li",{parentName:"ul"},"Nested aggregation functions are not supported. For example, ",(0,i.yg)("inlineCode",{parentName:"li"},"sum(c + 1)")," is supported, but ",(0,i.yg)("inlineCode",{parentName:"li"},"sum(c) + 1")," is not supported."),(0,i.yg)("li",{parentName:"ul"},"If there is no corresponding result after the view SQL is calculated, it cannot be created at this time."),(0,i.yg)("li",{parentName:"ul"},"All ",(0,i.yg)("inlineCode",{parentName:"li"},"GROUP BY")," fields must appear in the ",(0,i.yg)("inlineCode",{parentName:"li"},"SELECT")," statement."),(0,i.yg)("li",{parentName:"ul"},"All columns used in the ",(0,i.yg)("inlineCode",{parentName:"li"},"where")," condition of the query statement need to be defined in the ",(0,i.yg)("inlineCode",{parentName:"li"},"select")," statement, otherwise the query may not be successfully rewritten and matched."),(0,i.yg)("li",{parentName:"ul"},"It is recommended to keep the fields in the view as much as possible the same as those in the source table. For example, ",(0,i.yg)("inlineCode",{parentName:"li"},"select (a + 1) / 2 from table group by a")," can be rewritten as ",(0,i.yg)("inlineCode",{parentName:"li"},"select a from table group by a"),", so that one view can cover as many query scenarios as possible when querying."),(0,i.yg)("li",{parentName:"ul"},'Field aliases in the view statement do not support starting with an underscore "_".')),(0,i.yg)("h2",{id:"user-guide"},"User Guide"),(0,i.yg)("h3",{id:"create-a-materialized-view"},"Create a Materialized View"),(0,i.yg)("h4",{id:"sql-syntax"},"SQL Syntax"),(0,i.yg)("p",null,"Create a materialized view by manually defining the target table (target_table_name), and the syntax reference is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW [IF NOT EXISTS] mv_name [TO [db_name.]target_table_name] \nAS SELECT select_statement FROM base_table_name;\n")),(0,i.yg)("h3",{id:"update-the-materialized-view"},"Update the Materialized View"),(0,i.yg)("p",null,"Since the creation of the materialized view, the data of the materialized view is updated synchronously with the data of the original table. If it is necessary to materialize the historical data partitions, a refresh partition function is provided for the running materialized view."),(0,i.yg)("h4",{id:"update-syntax"},"Update Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW xxx PARTITION xxx\n")),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"refresh materialized view test partition '2019-01-01' // Synchronize the original data of the '2019-01-01' partition\n")),(0,i.yg)("h4",{id:"update-process"},"Update Process"),(0,i.yg)("p",null,"This function is used to update the data of a certain partition of the materialized view, and by default, a cascading operation is performed, that is, when the data of the view partition is updated, all the materialized views that depend on the current view partition will be updated at the same partition, and the cascading will continue. If you don't want cascading, you can add ",(0,i.yg)("inlineCode",{parentName:"p"},"SETTINGS")," and set ",(0,i.yg)("inlineCode",{parentName:"p"},"cascading_refresh_materialized_view")," to 0, that is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"refresh MATERIALIZED VIEW xxx PARTITION xxx SETTINGS cascading_refresh_materialized_view = 0\n")),(0,i.yg)("p",null,"When updating the data of the view partition, the amount of data in the corresponding underlying table partition may be very large, and the update will consume a lot of CPU and memory, and may even cause the update to fail. At this time, you can use the parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"max_rows_to_refresh_by_partition"),". In ClickHouse, a partition consists of multiple data parts. By using this parameter, we can control when the total number of rows of data in a partition on a single machine exceeds the value defined by this parameter, update the partition one part at a time based on the part level instead of updating the entire partition, which can control the amount of resources used. Of course, if the view is an aggregated table, updating by part will result in a worse aggregation effect of the final view data than updating the entire partition, and you need to balance it yourself. The default value of this parameter is 100,000,000 (100 million). Use example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW xxx PARTITION xxx SETTINGS max_rows_to_refresh_by_partition = xxx\n")),(0,i.yg)("p",null,"In addition, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"partitionStatus")," function to obtain the status of a certain partition of the materialized view, and there are three types of statuses:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"None (indicating that the partition does not exist)"),(0,i.yg)("li",{parentName:"ul"},"Normal (indicating that the partition exists and is in a normal state)"),(0,i.yg)("li",{parentName:"ul"},"Refreshing (indicating that the partition is being updated)")),(0,i.yg)("p",null,"For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"select partitionStatus(test, test_mv, '2020-01-01')\n")),(0,i.yg)("h3",{id:"query-the-materialized-view"},"Query the Materialized View"),(0,i.yg)("p",null,"Users can directly query the materialized view, but it is generally recommended to directly query the underlying table. The ByConity optimizer will automatically perform query rewriting to significantly improve the query processing time."),(0,i.yg)("h3",{id:"delete-the-materialized-view"},"Delete the Materialized View"),(0,i.yg)("p",null,"Users can delete the materialized view through the SQL statement."),(0,i.yg)("h4",{id:"sql-syntax-1"},"SQL Syntax"),(0,i.yg)("p",null,"It can be through the following."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]viewname\n")),(0,i.yg)("h3",{id:"use-example"},"Use Example"),(0,i.yg)("p",null,'The following provides an example to demonstrate the creation process of a "materialized view".'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Create a database\nCREATE database test;\n\n-- Create the underlying table\nCREATE TABLE test.event_metric (\n`app_id` UInt32, \n`server_time` UInt64, \n`event_name` String, \n`uid` UInt64, \n`cost` UInt64, \n`duration` UInt64, \n`event_date` Date\n) \nENGINE = CnchMergeTree \nPARTITION BY toDate(event_date) \nORDER BY (app_id, uid, event_name) \nSETTINGS index_granularity = 8192;\n\n-- Insert data into the underlying table\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (1, 1642149961, 'how', 121245, 3454, 64, '2022-09-14');\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (2, 1642149961, 'end', 2345, 476, 64, '2022-09-14');\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (3, 1642150683, 'how', 544545, 87, 5434, '2022-09-14');\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (3, 1642150683, 'how', 544545, 930, 232, '2022-09-14');\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (4, 1642150685, 'lide', 234545, 123, 98, '2022-09-15');\ninsert into table test.event_metric(app_id, server_time, event_name, uid, cost, duration, event_date) values (5, 1642150688, 'click', 131312, 2644, 26, '2022-09-15');\n\n-- Create a target table\nCREATE TABLE test.aggregate_data (\n`app_id`UInt32, \n`event_name`String, \n`event_date`Date, \n`sum_cost`AggregateFunction(sum, UInt64), \n`max_duration`AggregateFunction(max, UInt64)\n) \nENGINE = CnchAggregatingMergeTree \nPARTITION BY toDate(event_date) \nORDER BY (app_id, event_name, event_date) \nSETTINGS index_granularity = 8192;\n\n-- Create a materialized view\nCREATE MATERIALIZED VIEW test.aggregate_view  TO test.aggregate_data (\n`app_id`UInt32, \n`event_name`String, \n`event_date`Date, \n`sum_cost`AggregateFunction(sum, UInt64), \n`max_duration`AggregateFunction(max, UInt64)\n) \nAS SELECT app_id, event_name, event_date, sumState(cost) AS sum_cost, maxState(duration) AS max_duration \nFROM test.event_metric  \nGROUP BY app_id, event_name, event_date;\n\n-- Refresh the materialized view\nrefresh materialized view test.aggregate_view partition '2022-09-14';\nrefresh materialized view test.aggregate_view partition '2022-09-15';\n")),(0,i.yg)("h2",{id:"example-of-use-scenarios"},"Example of Use Scenarios"),(0,i.yg)("p",null,"The essence of a materialized view is similar to a trigger. When there is data written in the source table, it will trigger the view to execute the defined SQL and write to another table."),(0,i.yg)("p",null,"Currently, in ByConity, materialized views are divided into the following usage scenarios according to their purposes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Aggregate polymerized view"),", to improve the performance of specific aggregated queries"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Normal modified primary key sorting materialized view"),", to improve the performance of queries with filter conditions on non-primary key columns"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Realtime real-time consumption materialized view"),", used to process real-time data and produce data"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"ETL transformation materialized view for source data"))),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(41144).A,width:"1750",height:"856"})),(0,i.yg)("p",null,"The following uses an event table of a behavior analysis system to illustrate the use of the above views."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Definition of the source table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--Create a database\ncreate database mv;\n\n--Data source table\nCREATE TABLE mv.events(\n  app_id UInt32,\n  server_time UInt64,\n  event_name String,\n  uid UInt64,\n  cost UInt64,\n  duration UInt64,\n  event_date Date\n) ENGINE = CnchMergeTree PARTITION BY toDate(event_date)\nORDER BY\n  (app_id, uid, event_name);\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Definition of the dimension table")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--users dimension table\nCREATE TABLE mv.users\n(\n    uid UInt64,\n    params String\n)\nENGINE = CnchMergeTree\nORDER BY uid;\n")),(0,i.yg)("h3",{id:"aggregate-aggregated-view"},"Aggregate Aggregated View"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(38016).A,width:"2138",height:"790"})),(0,i.yg)("p",null,"Aggregate aggregated views are the most commonly used scenario for materialized views. Based on specific aggregated queries, the source data is extracted and stored as a materialized view. Since the aggregated query has been aggregated to an intermediate data state, querying the view will reduce the need for aggregation calculations and improve query performance. Subsequent queries that can hit the view will have the original query rewritten by the engine, and directly query the aggregated view table. See the specific scenario below."),(0,i.yg)("h4",{id:"view-definition"},"View Definition"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--View target table\nCREATE TABLE mv.events_aggregation (\n  app_id UInt32,\n  event_name String,\n  event_date Date,\n  sum_cost AggregateFunction(sum, UInt64),\n  max_duration AggregateFunction(max, UInt64)\n) ENGINE = CnchAggregatingMergeTree() PARTITION BY toDate(event_date)\nORDER BY\n  (app_id, event_name, event_date);\n\n--View definition\nCREATE MATERIALIZED VIEW mv.events_aggregate_view to mv.events_aggregation (app_id UInt32,  event_name String, event_date Date, sum_cost AggregateFunction(sum, UInt64), max_duration AggregateFunction(max, UInt64)) AS SELECT\n     app_id,\n     event_name,\n     event_date,\n     sumState(cost) AS sum_cost,\n     maxState(duration) AS max_duration\nFROM mv.events\nGROUP BY app_id, event_name, event_date; \n")),(0,i.yg)("h4",{id:"table-creation-practice"},"Table Creation Practice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The source table is generally defined with the CnchMergeTree engine and currently does not support tables with UNIQUE KEY (because the unique key will automatically merge rows with the same unique key, but the materialized view cannot perceive this change, resulting in inconsistencies in the data between the source table and the view)."),(0,i.yg)("li",{parentName:"ul"},"The target table engine is CnchAggregatingMergeTree. This engine type will merge the same fields in the group by of the aggregation SQL during the merge phase to reduce the amount of data. In the example, the same rows for app_id, event_name, and event_date are aggregated and calculated."),(0,i.yg)("li",{parentName:"ul"},"In the target table, the result of the aggregation function with the State suffix has the data type AggregateFunction, for example, sumState(cost) corresponds to AggregateFunction(sum, UInt64), and UIn64 is the type of cost."),(0,i.yg)("li",{parentName:"ul"},"In the view definition, it is recommended to use to indicate the target table, which is more clear and easy to understand. The aggregation function needs to add the suffix State, such as sumState(cost), maxState(duration). The reason for this is that the aggregated value saved in a single data file of the materialized view is only a partial aggregated result (Partial Aggregate Result), which is an intermediate state data. When actually querying, the intermediate state results of the same grouping in different data shards on different data nodes need to be merged together."),(0,i.yg)("li",{parentName:"ul"},"The order of the group by fields in the view definition determines the sort key order of the target. According to business requirements, determine the sort. Put the fields that are frequently used in query filtering conditions and have a low dimension base in the front, which will improve query performance. In the example, the order by fields of the target are the same as the group by fields."),(0,i.yg)("li",{parentName:"ul"},"The partition partition definitions of the target table and the source table must be consistent, otherwise the refresh command will not be able to run.")),(0,i.yg)("h4",{id:"import-data"},"Import Data"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"---Detail table\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (1, 1642149961, 'how', 121245, 3454, 64, '2022-06-14');\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (2, 1642149961, 'end', 2345, 476, 64, '2022-06-14');\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (3, 1642150683, 'how', 544545, 87, 5434, '2022-06-14');\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (3, 1642150683, 'how', 544545, 930, 232, '2022-06-14');\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (4, 1642150683, 'lide', 234545, 123, 98, '2022-06-14');\ninsert into table mv.events(app_id, server_time, event_name, uid, cost, duration, event_date) values (5, 1642150683, 'click', 131312, 2644, 26, '2022-06-14');\n\n---Dimension\ninsert into table mv.users(uid, params) values (544545, 'ale 35 from beijing');\ninsert into table mv.users(uid, params) values (121245, 'female 20 from nanjing');\n")),(0,i.yg)("h4",{id:"query-rewriting"},"Query Rewriting"),(0,i.yg)("p",null,"There are two ways to query the materialized view:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Directly query the destination table mv.events_aggregation. Note that the aggregation operator needs to add the Merge suffix to query the correct result, otherwise, it will query garbled characters. The result of the aggregation function with the State suffix has the data type AggregateFunction. This type of data is binary and cannot be directly read. The aggregation results returned from different data nodes are also of the AggregateFunction type. Finally, the coordinator node merges these data to obtain the final result.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    app_id,\n    event_name,\n    event_date,\n    sumMerge(sum_cost) AS sum_cost\nFROM mv.events_aggregation\nWHERE (toString(app_id) = '3') AND (event_name = 'how') AND (toDate(event_date) = '2022-06-14')\nGROUP BY\n    app_id,\n    event_name,\n    event_date\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Query the source table and rewrite the query through the optimizer. The optimizer will determine whether the query can be rewritten as a materialized view based on the syntax, query cost, and data consistency. This is the most ideal way, which is transparent to the user and does not require writing the sumMerge query function, and is more versatile. When querying, you need to enable the optimizer (enable_optimizer) and allow view matching (enable_materialized_view_rewrite) in the settings. By default, enabling the optimizer will automatically enable view matching.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_optimizer = 1;\nset enable_materialized_view_rewrite = 1;\n\nSELECT\n    app_id,\n    event_name,\n    event_date,\n    sum(cost) AS sum_cost\nFROM mv.events\nWHERE (toString(app_id) = '3') AND (event_name = 'how') AND (toDate(event_date) = '2022-06-14')\nGROUP BY\n    app_id,\n    event_name,\n    event_date settings enable_optimizer = 1,enable_materialized_view_rewrite = 1;\n")),(0,i.yg)("p",null,"You can obtain the query plan by explaining the SQL. If there is a note in the plan: Materialized Views is applied for 1 times, it indicates that the materialized view is hit. You can compare the differences between the execution plans with and without hitting the view as follows.\nHit the view:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(60426).A,width:"2090",height:"664"})),(0,i.yg)("p",null,"Close the view rewrite:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(45093).A,width:"2090",height:"592"})),(0,i.yg)("h3",{id:"normal-materialized-view"},"Normal Materialized View"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(32028).A,width:"1610",height:"546"})),(0,i.yg)("p",null,"In scenarios with frequent business iterations, it is often necessary to use non-primary key filter conditions for queries, but the primary key order of the main table cannot be modified. Based on this requirement, a materialized view can be defined to modify the primary key order, crop some columns according to business requirements, or filter data according to certain conditions to generate a view."),(0,i.yg)("h4",{id:"view-definition-1"},"View Definition"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--View target table\nCREATE TABLE mv.events_normal (\n  app_id UInt32,\n  event_name String,\n  event_date Date,\n  uid UInt64,\n  cost UInt64\n) ENGINE = CnchMergeTree() PARTITION BY toDate(event_date)\nORDER BY (uid, event_name);\n\n--View definition\nCREATE MATERIALIZED VIEW mv.events_normal_view to mv.events_normal (app_id UInt32,\n  event_name String,\n  event_date Date,\n  uid UInt64,\n  cost UInt64) AS SELECT\n     app_id,\n     event_name,\n     event_date,\n     uid,\n     cost\nFROM mv.events;\n")),(0,i.yg)("h4",{id:"table-creation-practice-1"},"Table Creation Practice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The target table and the source table have the same engine type, generally CnchMergeTree, and the partition keys are consistent. The primary key order is defined according to business requirements."),(0,i.yg)("li",{parentName:"ul"},"The view definition is directly selected according to the field types and requirements of the target table, and there is no need to define the order by field.")),(0,i.yg)("h4",{id:"refresh-data"},"Refresh Data"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--- View refresh\nrefresh materialized view mv.events_normal_view partition '2022-06-14'\n")),(0,i.yg)("h4",{id:"query-rewriting-1"},"Query Rewriting"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_optimizer = 1;\nset enable_materialized_view_rewrite = 1;\n\nSELECT\n    uid,\n    sum(cost)\nFROM mv.events\nWHERE uid = 544545\nGROUP BY uid\n")),(0,i.yg)("p",null,"The optimizer will evaluate the read cost and select the view with the lowest read cost for matching."),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(16311).A,width:"1794",height:"654"})),(0,i.yg)("h3",{id:"realtime-materialized-view"},"Realtime Materialized View"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(73294).A,width:"2318",height:"1290"})),(0,i.yg)("p",null,"Taking Kafka consumption as an example, the SQL definition of the view needs to obtain data from the consumer, and all data can be obtained as a detailed table, and operations such as aggregation, filtering, and projection can be performed. It can be a parallel view or a series view."),(0,i.yg)("h4",{id:"view-definition-2"},"View Definition"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--Real-time consumption consumer table definition\nCREATE TABLE mv.events_consumer (\n  app_id UInt32,\n  server_time UInt64,\n  event_name String,\n  uid UInt64,\n  cost UInt64,\n  duration UInt64,\n  event_date Date\n) ENGINE = CnchKafka() SETTINGS kafka_cluster = 'bmq_data',\nkafka_topic_list = 'ch_qa_cnch_staging_yg',\nkafka_group_name = 'events_consumer_group',\nkafka_format = 'JSONEachRow',\nkafka_row_delimiter = '\\n',\nkafka_num_consumers = 5,\nkafka_max_block_size = 65536;\n\n---Detail table view definition\nCREATE MATERIALIZED VIEW mv.events_real_all_view to mv.events (\n  app_id UInt32,\n  server_time UInt64,\n  event_name String,\n  uid UInt64,\n  cost UInt64,\n  duration UInt64,\n  event_date Date\n) AS\nSELECT * FROM mv.events_consumer;\n\n---Aggregated table view definition\nCREATE MATERIALIZED VIEW mv.events_real_aggregate_view to mv.events_aggregation (app_id UInt32,  event_name String, event_date Date, sum_cost AggregateFunction(sum, UInt64), max_duration AggregateFunction(max, UInt64)) AS SELECT\n     app_id,\n     event_name,\n     event_date,\n     sumState(cost) AS sum_cost,\n     maxState(duration) AS max_duration\nFROM mv.events_consumer\nGROUP BY app_id, event_name, event_date; \n\n--Normal table real-time consumption table\nCREATE MATERIALIZED VIEW mv.events_real_normal_view to mv.events_normal (app_id UInt32,  event_name String, event_date Date, sum_cost AggregateFunction(sum, UInt64), max_duration AggregateFunction(max, UInt64)) AS  SELECT\n     app_id,\n     event_name,\n     event_date,\n     uid,\n     cost\nFROM mv.events_consumer where uid = 5434;\n")),(0,i.yg)("h4",{id:"table-creation-practice-2"},"Table Creation Practice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The source table in the view definition is a real-time consumption table, which is mv.events_consumer in the example."),(0,i.yg)("li",{parentName:"ul"},"The target table can be adapted to various engine types as needed, such as CnchMergeTree, CnchMergeTree (with unique key), and CnchAggregatingMergeTree."),(0,i.yg)("li",{parentName:"ul"},"Currently, when defining a new view, the real-time consumption needs to be restarted, that is, system restart consume mv.events_consumer."),(0,i.yg)("li",{parentName:"ul"},"The above-defined three views will generate three pieces of data. Defining many views or complex aggregated views will affect the performance of real-time consumption."),(0,i.yg)("li",{parentName:"ul"},"Since the real-time materialized view is a consumer, there is no need to perform query rewriting, and the target table of consumption is usually used directly.")),(0,i.yg)("h3",{id:"multi-table-materialized-view-synchronous-refresh"},"Multi-table Materialized View (Synchronous Refresh)"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(62681).A,width:"1654",height:"890"})),(0,i.yg)("p",null,"For some ETL scenarios, a materialized view is simply generated to process the data. The single-table is similar to the above view definition. The following introduces the view definition of multiple tables. Currently, ByConity only supports simple inner join and subquery scenarios, and will support more complex multi-table SQL scenarios in the future."),(0,i.yg)("h4",{id:"view-definition-3"},"View Definition"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--Join view target table\nCREATE TABLE mv.events_join (\n  app_id UInt32,\n  uid UInt64,\n  cost UInt64,\n  event_date Date,\n  params String\n) ENGINE = CnchMergeTree() PARTITION BY toDate(event_date)\nORDER BY (uid, app_id);\n\n--join view definition\nCREATE MATERIALIZED VIEW mv.events_join_view to mv.events_join (app_id UInt32,\n  uid UInt64,\n  cost UInt64,\n  event_date Date,\n  params String\n  ) AS SELECT\n     app_id,\n     uid, \n     cost, \n     event_date,\n     params\nFROM mv.events as v inner join mv.users as u on v.uid = u.uid;\n\n--subset view target table\nCREATE TABLE mv.events_subset (\n  app_id UInt32,\n  uid UInt64,\n  cost UInt64,\n  event_date Date\n) ENGINE = CnchMergeTree() PARTITION BY toDate(event_date)\nORDER BY (uid, app_id);\n\n--subset view definition\nCREATE MATERIALIZED VIEW mv.events_extract_subset_view to mv.events_subset (app_id UInt32,\n  uid UInt64,\n  cost UInt64,\n  event_date Date\n  ) AS SELECT\n     app_id,\n     uid, \n     cost, \n     event_date\nFROM mv.events where uid in (select uid from mv.users);\n")),(0,i.yg)("h4",{id:"table-creation-practice-3"},"Table Creation Practice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"For Join, subquery, the dimension table is required to remain as unchanged as possible, otherwise, all data needs to be refreshed manually."),(0,i.yg)("li",{parentName:"ul"},"Join only supports inner join and left join."),(0,i.yg)("li",{parentName:"ul"},"When new data is written to the driving table events in Join, the view SQL will be triggered to execute, and the update of the dimension table will not update the target table data.")),(0,i.yg)("h4",{id:"refresh-view"},"Refresh View"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- Refresh the join view\nrefresh materialized view mv.events_join_view partition '2022-06-14';\n\n--Refresh the subquery view\nrefresh materialized view mv.events_extract_subset_view partition '2022-06-14';\n")))}g.isMDXComponent=!0},41144:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv1-2c9fa454d591a45281160ab42e9218ba.png"},38016:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv2-384729e645073b3b7d349a5a281ae9f5.png"},60426:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv3-ec2ea19a99dea8ba18c01bedb05a5be6.png"},45093:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv4-3ade7107abeb334908d221baa171f453.png"},32028:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv5-1d7b8941a8e1bce05cf0518ea8380e27.png"},16311:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv6-77cecef15d79b7ed63e3cd45373bb348.png"},73294:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv7-f4c187c824026d6c460bdd3862b6e1e3.png"},62681:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/mv8-ec4d877bdcca4ee956b54fbb728c1b83.png"}}]);