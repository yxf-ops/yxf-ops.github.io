"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6541],{8860:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>p});var n=r(7953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,p=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(p,o(o({ref:t},g),{},{components:r})):n.createElement(p,o({ref:t},g))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(5890),a=(r(7953),r(8860));const i={title:"Monitor",sidebar_position:5,tags:["Docs"]},o="Monitoring Cluster",l={unversionedId:"admin-guides/monitoring",id:"admin-guides/monitoring",title:"Monitor",description:"Common Monitoring Metrics",source:"@site/docs/admin-guides/monitoring.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/monitoring",permalink:"/docs/admin-guides/monitoring",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/admin-guides/monitoring.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:5,frontMatter:{title:"Monitor",sidebar_position:5,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"High Availability",permalink:"/docs/admin-guides/high-availability"},next:{title:"Cluster Configuration",permalink:"/docs/admin-guides/cluster-configuration"}},c={},s=[{value:"Common Monitoring Metrics",id:"common-monitoring-metrics",level:2},{value:"Prometheus Metrics:",id:"prometheus-metrics",level:3},{value:"VictoriaMetric Metrics Aggregation:",id:"victoriametric-metrics-aggregation",level:3},{value:"Key Metrics",id:"key-metrics",level:2},{value:"Configuring Grafana Dashboard for Server",id:"configuring-grafana-dashboard-for-server",level:2},{value:"Key Metrics",id:"key-metrics-1",level:2},{value:"Configuring Grafana Dashboard for TSO",id:"configuring-grafana-dashboard-for-tso",level:2}],g={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"monitoring-cluster"},"Monitoring Cluster"),(0,a.yg)("h2",{id:"common-monitoring-metrics"},"Common Monitoring Metrics"),(0,a.yg)("h3",{id:"prometheus-metrics"},"Prometheus Metrics:"),(0,a.yg)("p",null,"The engine exposes monitoring metrics at the HTTP endpoint ",(0,a.yg)("inlineCode",{parentName:"p"},"/metrics")," by default on port 8123, which can be directly accessed."),(0,a.yg)("p",null,"You can view the corresponding metric output using kubectl:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n cnch cnch-default-server-0 8123:8123\n# Use port-forward functionality to proxy the port\n")),(0,a.yg)("p",null,"Afterward, you can open ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost:8123/metrics")," in a web browser to see the displayed metrics as shown in the figure below. Each line corresponds to a specific metric item, following the Prometheus-compliant metric format."),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(5578).A,width:"2208",height:"496"})),(0,a.yg)("h3",{id:"victoriametric-metrics-aggregation"},"VictoriaMetric Metrics Aggregation:"),(0,a.yg)("p",null,"VictoriaMetric is chosen for metric storage, facilitating horizontal scaling and providing richer functionality. An important feature is VMRule, which allows aggregation of raw metrics. Some of the raw Prometheus metrics emitted by various components can be directly used to build monitoring alerts, while others are more complex and not suitable for directly building dashboards or alerts. These are aggregated using VWRule."),(0,a.yg)("p",null,"Refer to the file ",(0,a.yg)("a",{target:"_blank",href:r(6487).A},"cnch-metrics.yaml")," for specific configuration rules, and apply the configuration using kubectl:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubctl apply -f cnch-metrics.yaml # Apply the corresponding rules\n")),(0,a.yg)("h1",{id:"monitoring-service-nodes-server"},"Monitoring Service Nodes (Server)"),(0,a.yg)("h2",{id:"key-metrics"},"Key Metrics"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name (quoted ones are aggregated by VM)"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:latency:queries_cluster:pct95, cnch:latency:queries_cluster:pct99"),(0,a.yg)("td",{parentName:"tr",align:null},"Query latency at percentiles 95 and 99")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:latency:queries_cluster:slow_ratio"),(0,a.yg)("td",{parentName:"tr",align:null},"Percentage of slow queries taking more than 10s")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:profile_events:labelled_query_vw:total_rate5m"),(0,a.yg)("td",{parentName:"tr",align:null},"Total QPS for all VWs")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:profile_events:labelled_query_vw:error_rate5m"),(0,a.yg)("td",{parentName:"tr",align:null},"Failed QPS for all VWs")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch_current_metrics_query"),(0,a.yg)("td",{parentName:"tr",align:null},"Query type labeled as 'insert' for writes")))),(0,a.yg)("h2",{id:"configuring-grafana-dashboard-for-server"},"Configuring Grafana Dashboard for Server"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(8298).A,width:"3337",height:"9813"})),(0,a.yg)("p",null,"Dashboard highlights:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Dashboard Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Expression"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Queries Durations"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'cnch:latency:queries_cluster:pct95{namespace="$namespace", cluster="$cluster"}')," and ",(0,a.yg)("inlineCode",{parentName:"td"},'cnch:latency:queries_cluster:pct99{namespace="$namespace", cluster="$cluster"}')),(0,a.yg)("td",{parentName:"tr",align:null},"Query latency at P99 and P95 percentiles")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Slow Queries > 10s"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'cnch:latency:queries_cluster:slow_ratio{namespace="$namespace", cluster="$cluster"}')),(0,a.yg)("td",{parentName:"tr",align:null},"Percentage of slow queries taking more than 10s")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Queries Per Second"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'sum(cnch:profile_events:labelled_query_vw:total_rate5m{namespace="$namespace", cluster="$cluster", workload=~"$workload"})')),(0,a.yg)("td",{parentName:"tr",align:null},"Total QPS for all VWs")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"VW Queries Success"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'1 - (sum by (pod) (cnch:profile_events:labelled_query_vw:error_rate5m{cluster="$cluster", namespace="$namespace", workload=~"$workload", pod=~"$pod"}) / sum by (pod) (cnch:profile_events:labelled_query_vw:total_rate5m{cluster="$cluster", namespace="$namespace", workload=~"$workload", pod=~"$pod"}))')),(0,a.yg)("td",{parentName:"tr",align:null},"Success rate calculated by subtracting and dividing ",(0,a.yg)("inlineCode",{parentName:"td"},"error_rate5m")," from ",(0,a.yg)("inlineCode",{parentName:"td"},"total_rate5m"))))),(0,a.yg)("p",null,"The complete Grafana configuration file for the Server is available for import in Grafana's UI: ",(0,a.yg)("a",{target:"_blank",href:r(6956).A},"cnch-server.json")),(0,a.yg)("h1",{id:"monitoring-tso"},"Monitoring TSO"),(0,a.yg)("h2",{id:"key-metrics-1"},"Key Metrics"),(0,a.yg)("p",null,"The following are important metrics specific to TSO:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:tso:requests:error_rate5m"),(0,a.yg)("td",{parentName:"tr",align:null},"Failed QPS for the TSO component")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cnch:tso:requests:total_rate5m"),(0,a.yg)("td",{parentName:"tr",align:null},"Total QPS for the TSO component")))),(0,a.yg)("h2",{id:"configuring-grafana-dashboard-for-tso"},"Configuring Grafana Dashboard for TSO"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(3101).A,width:"3355",height:"5626"})))}u.isMDXComponent=!0},6487:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/cnch-metrics-56612630a00f5b499057c51a1ce29067.yaml"},6956:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/cnch-server-9c3a5e54b12f5d1f9fd04500abba5385.json"},3101:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/boxcn3CLoRUlpCEDJnEy8f6dxPe-9a6fde5cfab3aa39288f253a549a1c39.jpeg"},5578:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/boxcnMqU9e8xvq46v7IH9ORtLCf-69b89b581b04f353e3f545df9f414d45.png"},8298:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/boxcnvwueXWFISCRgsRJ66J2vKb-8988c2af21fed0034abda7d7d9f4154c.jpeg"}}]);