"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[4878],{58860:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var o=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||n;return t?o.createElement(g,i(i({ref:r},l),{},{components:t})):o.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},14077:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=t(75890),a=(t(37953),t(58860));const n={title:"resource manager",tags:["Docs"]},i="resource manager",s={unversionedId:"advanced-guide/resource-manager",id:"version-0.2.0/advanced-guide/resource-manager",title:"resource manager",description:"The Resource Manager (RM) component is used for unified management and scheduling of ByConity computing resources, and is the core component to achieve resource elasticity and improve resource utilization.",source:"@site/versioned_docs/version-0.2.0/advanced-guide/resource-manager.mdx",sourceDirName:"advanced-guide",slug:"/advanced-guide/resource-manager",permalink:"/docs/0.2.0/advanced-guide/resource-manager",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.2.0/advanced-guide/resource-manager.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"resource manager",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control (RBAC)",permalink:"/docs/0.2.0/advanced-guide/rbac"},next:{title:"How to Become a Maintainer and TSC Member of ByConity",permalink:"/docs/0.2.0/community/become-maintainer"}},c={},u=[{value:"Target",id:"target",level:2},{value:"The hierarchy of computing resources",id:"the-hierarchy-of-computing-resources",level:2},{value:"Compute Node Worker",id:"compute-node-worker",level:3},{value:"Compute Group Replicas Worker Group",id:"compute-group-replicas-worker-group",level:3},{value:"Virtual Warehouse",id:"virtual-warehouse",level:3},{value:"Scheduling process",id:"scheduling-process",level:2},{value:"SELECT Query scheduling process",id:"select-query-scheduling-process",level:3},{value:"INSERT Query scheduling process",id:"insert-query-scheduling-process",level:3},{value:"Scheduling process of background tasks",id:"scheduling-process-of-background-tasks",level:3},{value:"High Availability &amp; Compatible Upgrade",id:"high-availability--compatible-upgrade",level:2},{value:"Flexible sharing of computing resources",id:"flexible-sharing-of-computing-resources",level:2},{value:"Reference Documentation",id:"reference-documentation",level:2}],l={toc:u},d="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(d,(0,o.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"resource-manager"},"resource manager"),(0,a.yg)("p",null,"The Resource Manager (RM) component is used for unified management and scheduling of ByConity computing resources, and is the core component to achieve resource elasticity and improve resource utilization."),(0,a.yg)("h2",{id:"target"},"Target"),(0,a.yg)("p",null,"The core design goals of ByConity Explorer are as follows:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Able to manage and schedule computing resources to improve resource utilization."),(0,a.yg)("li",{parentName:"ol"},"It can collect the monitoring data of computing group VW, which is convenient for resource scheduling based on load."),(0,a.yg)("li",{parentName:"ol"},"It can provide scheduling functions for queries, INSERTs, and various background tasks."),(0,a.yg)("li",{parentName:"ol"},"Able to coordinate different VWs and dynamically allocate VW resources."),(0,a.yg)("li",{parentName:"ol"},"Realize resource pooling and elastic scaling functions.")),(0,a.yg)("h2",{id:"the-hierarchy-of-computing-resources"},"The hierarchy of computing resources"),(0,a.yg)("p",null,"In order to achieve the above goals, we divide and manage computing resources hierarchically."),(0,a.yg)("h3",{id:"compute-node-worker"},"Compute Node Worker"),(0,a.yg)("p",null,"In ",(0,a.yg)("a",{parentName:"p",href:"../introduction/main-principle-concepts"},"Main Principle Concepts"),", we know that the smallest computing unit in ByConity computing resources is a Worker node, which corresponds to a Kubenetes Pod."),(0,a.yg)("p",null,"After Worker starts, it will periodically report heartbeat information to RM, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Identification information, such as WORKER_ID, WORKER_GROUP_ID, VIRTUAL_WAREHOUSE_ID, etc."),(0,a.yg)("li",{parentName:"ul"},"Node physical load information, such as CPU usage, MEMORY usage, etc."),(0,a.yg)("li",{parentName:"ul"},"Query load information, such as the number of running queries, the number of queued queries, etc.")),(0,a.yg)("p",null,"RM maintains and updates the status of each Worker in time, and routes and schedules the query according to the identity and load information of the Worker when processing the query."),(0,a.yg)("h3",{id:"compute-group-replicas-worker-group"},"Compute Group Replicas Worker Group"),(0,a.yg)("p",null,"A Worker Group (WG for short) is a computing resource used to actually process a query request, and it corresponds to a Kubenetes StatefulSet."),(0,a.yg)("p",null,"A computing group replica consists of multiple workers, and the WORKER_GROUP_ID in each worker's identity indicates the worker group to which it belongs. At the same time, by summarizing the load information of all Workers in the Worker Group, we can obtain the aggregated load information of the Worker Group, such as average CPU usage, maximum CPU usage, average MEMORY usage, maximum MEMORY usage, etc."),(0,a.yg)("p",null,"There are two types of computing group replicas: Physical and Shared."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The copy of the physical computing group (Physical Worker Group) is bound to a set of actual physical resources (Kubernetes StatefulSet)."),(0,a.yg)("li",{parentName:"ul"},"The shared computing group copy (Shared Worker Group) is not bound to physical resources, but points to another Physical Worker Group by reference. Shared Worker Group has independent identification information, namely WOKRER_GROUP_ID, and the load information is the load information of the corresponding Physical Worker Group.")),(0,a.yg)("p",null,"When we need to manage (create, delete, etc.) a copy of a physical computing group, in addition to modifying the meta information inside ByConity, we also need to perform the corresponding K8s operations. To manage a shared computing group copy, you only need to modify the meta-information of the computing group copy, because the shared computing group copy does not own any physical resources."),(0,a.yg)("h3",{id:"virtual-warehouse"},"Virtual Warehouse"),(0,a.yg)("p",null,"A computing group (Virtual Warehouse, referred to as VW) consists of multiple copies of computing groups with the same configuration. The VIRTUAL_WAREHOUSE_ID in the Worker ID identifies the VW to which it belongs."),(0,a.yg)("p",null,"VW is divided into two types: Default and Write."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Default VW is responsible for processing the user's normal SELECT query, and the Default VW is also called the Read VW."),(0,a.yg)("li",{parentName:"ul"},"Write VW is responsible for processing users' INSERT queries, and running ByConity's background tasks such as Merge and Mutate (link background tasks).")),(0,a.yg)("p",null,"The distinction between Default and Write VW enables ByConity to easily separate reads and writes to maximize query performance."),(0,a.yg)("h2",{id:"scheduling-process"},"Scheduling process"),(0,a.yg)("p",null,"Each ByConity user table needs to specify its own default VW and write VW. After that, RM will undertake all the scheduling work of this table: SELECT query, INSERT query, background tasks, etc."),(0,a.yg)("h3",{id:"select-query-scheduling-process"},"SELECT Query scheduling process"),(0,a.yg)("p",null,"When the server finds that the Query is a SELECT Query, it needs to select a WG from the Default VW of the table to process the query."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(28076).A,width:"852",height:"232"})),(0,a.yg)("p",null,"As shown in the figure, suppose there are 2 Physical WGs in the Default VW of the table, and 1 Shared WG (pointing to the Physical WG in another VW). Since it is a SELECT query, we need to select 1 WG to process the query. Physical WG 1 is currently the least loaded WG and is selected to handle the query."),(0,a.yg)("h3",{id:"insert-query-scheduling-process"},"INSERT Query scheduling process"),(0,a.yg)("p",null,"When the server finds that the Query is an INSERT Query, it needs to select a Worker from the table's Write VW to process the query."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(32490).A,width:"852",height:"232"})),(0,a.yg)("p",null,"As shown in the figure, suppose there are 2 Physical WGs in the Write VW of the table, and each WG contains 3 Workers. Because it is an INSERT query, we need to choose a Worker to process the query. Worker 3 currently has the lowest load and is selected to process the query."),(0,a.yg)("h3",{id:"scheduling-process-of-background-tasks"},"Scheduling process of background tasks"),(0,a.yg)("p",null,"In addition to processing user queries, the server also needs to schedule background tasks for the table, such as continuously performing Merge on the table data in the background to improve query performance."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(32151).A,width:"852",height:"204"})),(0,a.yg)("p",null,"As shown in the figure, the Server generates a Merge task and needs to select a Worker from the Write VW to process it. Worker 3 currently has the lowest load and is selected to execute the Merge task."),(0,a.yg)("h2",{id:"high-availability--compatible-upgrade"},"High Availability & Compatible Upgrade"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Adopt a simple multi-copy master-slave configuration."),(0,a.yg)("li",{parentName:"ol"},"The worker's heartbeat is only sent to the master node, and the server's request is only processed by the master node."),(0,a.yg)("li",{parentName:"ol"},"When the primary node goes down, the standby node takes over the service and synchronizes the necessary metadata from the KV database."),(0,a.yg)("li",{parentName:"ol"},"Since the Server has a cache of VW, WG, and Worker information, even if the RM is unavailable for a short time, the service node can still use the cached data to continue working.")),(0,a.yg)("h2",{id:"flexible-sharing-of-computing-resources"},"Flexible sharing of computing resources"),(0,a.yg)("p",null,"Scheduling queries and background tasks based on Worker load information makes the WG and Worker loads in a VW more balanced. In addition, we can achieve elastic sharing of resources between VWs by creating a suitable Shared WG (Shared Computing Group)."),(0,a.yg)("p",null,"When the overall resource utilization of a Physical WG is low, a Shared WG can be created in other VWs that require more computing resources and point to the Physical WG. In this way, this Physical WG can be used by other VW's queries or tasks."),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(89870).A,width:"852",height:"204"})),(0,a.yg)("p",null,"As shown in the figure, in Default VW 1, we created a shared computing group Shared WG 3, which does not own any actual physical computing resources, but points to another physical computing group Physical WG 6 in Default VW 3. Shared WG 3 has exactly the same load information as Physical WG 6. When Default VW 1 makes scheduling decisions, Shared WG 3 (or its Worker) can be selected to process SELECT queries (or INSERT queries, background tasks). Ultimately, queries or background tasks are actually routed to Physical WG 6 for processing."),(0,a.yg)("h2",{id:"reference-documentation"},"Reference Documentation"),(0,a.yg)("p",null,(0,a.yg)("a",{target:"_blank",href:t(40264).A},"Cloud Native Data Warehouse ByteHouse Technical White Paper V1.0 (Chinese)")))}p.isMDXComponent=!0},40264:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/files/\u4e91\u539f\u751f\u6570\u636e\u4ed3\u5e93ByteHouse\u6280\u672f\u767d\u76ae\u4e66V1.0-3cbc2e07938a5127362b057566748f39.pdf"},32490:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/boxcn1vUjQxIvpWIT2zplXffgyg-89083ddae792a9be640450d97ec50add.png"},32151:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/boxcnHyC6wY1ypvpTr7TkWHtLng-26c8a7ee98d824e6a5d8a77abf07927d.png"},28076:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/boxcnbZbcFxobIoWtbHHOFEBuAd-1d14622bd55e66a3f8046e5ef7c268b7.png"},89870:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/boxcnwYSsOLigmR3d9nblBrpLFg-6bdf100b7fb1d9918fb538140f27616e.png"}}]);