"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[1499],{344:e=>{e.exports=JSON.parse('{"label":"Docs","permalink":"/docs/0.2.0/tags/docs","allTagsPath":"/docs/0.2.0/tags","count":69,"items":[{"id":"version-0.2.0/sql-syntax/functions/aggregate","title":"Aggregation","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/aggregate"},{"id":"version-0.2.0/sql-syntax/ansi-compatibility","title":"ANSI Compatibility","description":"ByConity provides a rich set of SQL syntax through ANSI SQL dialect. When using this dialect, SQL statements will be parsed and validated by Apache Calcite and then sent to servers for execution. Apache Calcite supports standard ANSI SQL, please refer to the BNF-grammar here for more details//calcite.apache.org/docs/reference.html.","permalink":"/docs/0.2.0/sql-syntax/ansi-compatibility"},{"id":"version-0.2.0/sql-syntax/functions/arithmetic","title":"Arithmetic","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/arithmetic"},{"id":"version-0.2.0/sql-syntax/functions/array","title":"Array","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/array"},{"id":"version-0.2.0/introduction/background-and-technical-architecture","title":"Background and Technical Architecture","description":"ByConity is an open source Data Warehouse system designed for modern IT architecture changes and, it is designed with a Cloud Native architecture. It provides excellent query and write performance while meeting the needs of Data Warehouse users for resource elastic volume expansion and contraction, read and write separation, resource isolation, and strong data consistency.","permalink":"/docs/0.2.0/introduction/background-and-technical-architecture"},{"id":"version-0.2.0/advanced-guide/background-task-configuration","title":"Background Tasks Configuration","description":"Start/Stop Merge of tables","permalink":"/docs/0.2.0/advanced-guide/background-task-configuration"},{"id":"version-0.2.0/basic-guide/background-task-management","title":"Background Tasks Management","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/background-task-management"},{"id":"version-0.2.0/quick-start/basic-database-operations","title":"Basic Database Operations","description":"There are a few ways to get started with ByConity. You have the choice to deploy ByConity through package deployment, using docker wrapper or deploy ByConity in Kubernetes. To get started quickly, we recommend that you use the ByConity Playground with docker-compose/the docker wrapper.","permalink":"/docs/0.2.0/quick-start/basic-database-operations"},{"id":"version-0.2.0/sql-syntax/functions/bit-bitmap","title":"Bit & Bitmap","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/bit-bitmap"},{"id":"version-0.2.0/advanced-guide/bucket-table-best-practice","title":"Bucket table best practice manual","description":"In ByConity, when using a Bucket table, the system organizes table data based on one or more columns and expressions specified by the user in the table creation statement. The data with the same value is clustered together and assigned to the same bucket number.","permalink":"/docs/0.2.0/advanced-guide/bucket-table-best-practice"},{"id":"version-0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist","title":"Byconity 0.2.0 s3 storage upgrade checklist","description":"There are some s3 object key and s3 metadata changes after s3\'s preview version(from pre 0.2.0 version to 0.2.0 version). And we provide some tools to migrate from old version. Only use this if you are using old version of byconity and store data in s3.","permalink":"/docs/0.2.0/advanced-guide/0.2.0_s3_upgrade_checklist"},{"id":"version-0.2.0/basic-guide/client-connection","title":"Client Connection","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/client-connection"},{"id":"version-0.2.0/basic-guide/cluster-configuration","title":"Cluster Configuration","description":"Document Type: Descriptive","permalink":"/docs/0.2.0/basic-guide/cluster-configuration"},{"id":"version-0.2.0/advanced-guide/ingest-column","title":"Column ingestion query","description":"Introduction","permalink":"/docs/0.2.0/advanced-guide/ingest-column"},{"id":"version-0.2.0/advanced-guide/column-based-storage","title":"Column Storage Design Principles","description":"Typically, transactional databases use row storage to support transactions and high concurrent reading and writing, while analytical databases use column storage to reduce IO and facilitate compression. ByConity, on the other hand, uses column storage to ensure read and write performance, support transaction consistency, and is well-suited for large-scale data calculations.","permalink":"/docs/0.2.0/advanced-guide/column-based-storage"},{"id":"version-0.2.0/community/community-code-of-conduct","title":"Community Code of Conduct","description":"Our Pledge","permalink":"/docs/0.2.0/community/community-code-of-conduct"},{"id":"version-0.2.0/sql-syntax/functions/comparison","title":"Comparison","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/comparison"},{"id":"version-0.2.0/advanced-guide/complex-query-model-and-optimisation","title":"Complex Query Models and Execution Tuning","description":"Complex query execution model","permalink":"/docs/0.2.0/advanced-guide/complex-query-model-and-optimisation"},{"id":"version-0.2.0/sql-syntax/functions/conditional","title":"Conditional","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/conditional"},{"id":"version-0.2.0/basic-guide/data-type","title":"Data Type","description":"Document Type: Descriptive","permalink":"/docs/0.2.0/basic-guide/data-type"},{"id":"version-0.2.0/sql-syntax/data-types","title":"Data Types","description":"The data types provided in ByConity are adapted from ClickHouse. Visit this page for more information on ClickHouse data types.","permalink":"/docs/0.2.0/sql-syntax/data-types"},{"id":"version-0.2.0/basic-guide/data-visualisation","title":"Data Visualisation","description":"Tutorial goals:","permalink":"/docs/0.2.0/basic-guide/data-visualisation"},{"id":"version-0.2.0/basic-guide/database-table-design","title":"Database Table Design","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/database-table-design"},{"id":"version-0.2.0/sql-syntax/functions/date-times","title":"Date & Times","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/date-times"},{"id":"version-0.2.0/deployment/deploy-k8s","title":"Deploy ByConity in Kubernetes","description":"This page demonstrates how to deploy a ByConity cluster in your Kubernetes cluster.","permalink":"/docs/0.2.0/deployment/deploy-k8s"},{"id":"version-0.2.0/quick-start/deploy-byconity-with-k8s","title":"Deploy ByConity in Kubernetes","description":"This page demonstrates how to deploy a ByConity cluster in your Kubernetes cluster.","permalink":"/docs/0.2.0/quick-start/deploy-byconity-with-k8s"},{"id":"version-0.2.0/deployment/docker-wrapper","title":"Deploy ByConity to physical servers with a docker wrapper","description":"The current way to deploy ByConity to physical servers is deployed via a docker wrapper.","permalink":"/docs/0.2.0/deployment/docker-wrapper"},{"id":"version-0.2.0/deployment/deployment-requirements","title":"Deployment Requirements","description":"ByConity can run on most mainstream commercial servers. We recommend that the deployment of ByConity can comply with the following requirements:","permalink":"/docs/0.2.0/deployment/deployment-requirements"},{"id":"version-0.2.0/sql-syntax/functions/encoding","title":"Encoding","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/encoding"},{"id":"version-0.2.0/sql-syntax/functions/encryption","title":"Encryption","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/encryption"},{"id":"version-0.2.0/basic-guide/data-export","title":"Export Data","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/data-export"},{"id":"version-0.2.0/deployment/foundationdb-installation","title":"FoundationDB Installation","description":"In this guideline, I will set up a Foundation DB cluster on 3 physical machines. They are all using debian OS. I refer to two official guidelines here Getting Started on Linux and Building a Cluster.","permalink":"/docs/0.2.0/deployment/foundationdb-installation"},{"id":"version-0.2.0/sql-syntax/functions/functions","title":"Functions","description":"ByConity provides two SQL dialects, (1) ClickHouse and (2) ANSI.","permalink":"/docs/0.2.0/sql-syntax/functions/functions"},{"id":"version-0.2.0/sql-syntax/functions/geo","title":"Geo","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/geo"},{"id":"version-0.2.0/community/git-workflow","title":"Git WorkFlow","description":"ByConity is leverage the Github doing the developement. Each contributor and maintainer in ByConity must follow this workflow:","permalink":"/docs/0.2.0/community/git-workflow"},{"id":"version-0.2.0/sql-syntax/functions/hash","title":"Hash","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/hash"},{"id":"version-0.2.0/sql-syntax/hash","title":"Hash","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/hash"},{"id":"version-0.2.0/deployment/hdfs-installation","title":"HDFS Installation","description":"In this guide I will set up HDFS on 3 machine, 1 machine is for name node and other 2 machines is for data nodes. I refer to the following official document SingleCluster and ClusterSetup. I will install HDFS version 3.3.4 so I need java-8 because this is the recommended java version for this Hadoop","permalink":"/docs/0.2.0/deployment/hdfs-installation"},{"id":"version-0.2.0/basic-guide/hive-external-catalog","title":"Hive External Catalog","description":"Besides creating tables in CnchHive engine to access external hive tablesl, Byconity also supports visit the external tables using external catalog.","permalink":"/docs/0.2.0/basic-guide/hive-external-catalog"},{"id":"version-0.2.0/basic-guide/hive-external-table","title":"Hive External Table","description":"CnchHive is a table engine provided by ByConity, which supports federated query in the form of external tables, and users can directly accelerate data query without importing data. CnchHive supports querying data on both HDFS and S3 Hive table.","permalink":"/docs/0.2.0/basic-guide/hive-external-table"},{"id":"version-0.2.0/community/become-maintainer","title":"How to Become a Maintainer and TSC Member of ByConity","description":"Contributing to an open-source project like ByConity can be intimidating, but it can also be a rewarding experience.","permalink":"/docs/0.2.0/community/become-maintainer"},{"id":"version-0.2.0/basic-guide/data-import","title":"Import Data","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/data-import"},{"id":"version-0.2.0/advanced-guide/import-optimisation","title":"Import Optimisation","description":"Currently CNCH supports the following import methods:","permalink":"/docs/0.2.0/advanced-guide/import-optimisation"},{"id":"version-0.2.0/sql-syntax/functions/ip-address","title":"IP Address","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/ip-address"},{"id":"version-0.2.0/community/tsc-membership","title":"Joining the ByConity Technical Steering Committee","description":"This guide aims to provide information on how to become a member of the ByConity Technical Steering Committee (TSC).","permalink":"/docs/0.2.0/community/tsc-membership"},{"id":"version-0.2.0/sql-syntax/functions/json","title":"JSON","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/json"},{"id":"version-0.2.0/sql-syntax/logical","title":"Logical","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/logical"},{"id":"version-0.2.0/introduction/main-principle-concepts","title":"Main Principles Concepts","description":"This chapter will introduce the main principles of ByConity and it\'s query execution. ByConity\'s query execution process is shown in the figure below. First, ByConity will obtain the Metadata information required for the query through the Metadata service. Then ByConity will generate an efficient query plan through the optimizer according to the user\'s SQL, and schedule it to the corresponding calculation group to read the data and execute it. Finally, the result set is summarized and sent back to the Client.","permalink":"/docs/0.2.0/introduction/main-principle-concepts"},{"id":"version-0.2.0/sql-syntax/functions/map","title":"Map","description":"map","permalink":"/docs/0.2.0/sql-syntax/functions/map"},{"id":"version-0.2.0/sql-syntax/mathematical","title":"Mathematical","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/mathematical"},{"id":"version-0.2.0/basic-guide/monitoring","title":"Monitor Cluster","description":"Prometheus Monitoring Indicators\uff1a","permalink":"/docs/0.2.0/basic-guide/monitoring"},{"id":"version-0.2.0/sql-syntax/functions/nullable","title":"Nullable","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/nullable"},{"id":"version-0.2.0/sql-syntax/functions/others","title":"Others","description":"MACNumToString","permalink":"/docs/0.2.0/sql-syntax/functions/others"},{"id":"version-0.2.0/deployment/package-deployment","title":"Package Deployment","description":"One way to deploy ByConity to physical machines is using package manager.","permalink":"/docs/0.2.0/deployment/package-deployment"},{"id":"version-0.2.0/advanced-guide/query-acceleration","title":"Query Acceleration","description":"Preload feature will load data from remote to local disk cache to speed up the coming up queries. After preload is finished, the query will read data from the local disk, rather than the remote storage.","permalink":"/docs/0.2.0/advanced-guide/query-acceleration"},{"id":"version-0.2.0/advanced-guide/query-optimiser","title":"Query Optimizer","description":"The optimizer is the core of the database system. An excellent optimizer can greatly improve query performance, especially in complex query scenarios. The optimizer can bring performance improvements of several to hundreds of times.","permalink":"/docs/0.2.0/advanced-guide/query-optimiser"},{"id":"version-0.2.0/sql-syntax/functions/random","title":"Random","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/random"},{"id":"version-0.2.0/introduction/recommended-use-case","title":"Recommended Use Cases","description":"ByConity uses a large number of mature OLAP technologies, such as column storage engine, MPP execution, intelligent query optimization, vectorized execution, Codegen, indexing, data compression, mainly used in OLAP query and computing scenarios. It has very good performance in real-time data access, aggregation query of large and wide tables, complex analysis and calculation under massive data, and multi-table associated query scenarios.","permalink":"/docs/0.2.0/introduction/recommended-use-case"},{"id":"version-0.2.0/advanced-guide/resource-manager","title":"resource manager","description":"The Resource Manager (RM) component is used for unified management and scheduling of ByConity computing resources, and is the core component to achieve resource elasticity and improve resource utilization.","permalink":"/docs/0.2.0/advanced-guide/resource-manager"},{"id":"version-0.2.0/advanced-guide/rbac","title":"Role-based Access Control (RBAC)","description":"RBAC in Byconity is adapted from the ClickHouse version of RBAC in most aspects other than minor syntax differences and the underlying implementation which will be explained further below.","permalink":"/docs/0.2.0/advanced-guide/rbac"},{"id":"version-0.2.0/community/setup-development-environment","title":"Setup ByConity Developement Environment","description":"Environment Dependencies","permalink":"/docs/0.2.0/community/setup-development-environment"},{"id":"version-0.2.0/sql-syntax/sql-statements","title":"SQL Statements","description":"The supported statements in ByConity are similar to ClickHouse, but it is still recommended to follow the ByConity manual to ensure proper use. Some of the examples below are referenced from ClickHouse Documentation but have been adapted and modified to work in ByConity.","permalink":"/docs/0.2.0/sql-syntax/sql-statements"},{"id":"version-0.2.0/sql-syntax/string","title":"String","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/string"},{"id":"version-0.2.0/advanced-guide/managing-concurrency","title":"Transactions and Concurrency Control","description":"Transaction overview","permalink":"/docs/0.2.0/advanced-guide/managing-concurrency"},{"id":"version-0.2.0/sql-syntax/functions/type-conversion","title":"Type Conversion","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/type-conversion"},{"id":"version-0.2.0/sql-syntax/urls","title":"URLs","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/urls"},{"id":"version-0.2.0/sql-syntax/functions/uuid","title":"UUID","description":"Notice:","permalink":"/docs/0.2.0/sql-syntax/functions/uuid"},{"id":"version-0.2.0/basic-guide/virtual-warehouse-configuration","title":"Virtual Warehouse Configuration","description":"Document Type: Tutorial","permalink":"/docs/0.2.0/basic-guide/virtual-warehouse-configuration"},{"id":"version-0.2.0/sql-syntax/functions/window","title":"Window","description":"ByConity supports the standard syntax of window functions. A list of window related features are explained below.","permalink":"/docs/0.2.0/sql-syntax/functions/window"}]}')}}]);