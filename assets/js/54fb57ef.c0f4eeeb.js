"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3381],{8860:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>d});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(d,l(l({ref:t},y),{},{components:n})):a.createElement(d,l({ref:t},y))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(5890),r=(n(7953),n(8860));const o={title:"Deploy on Kubernetes",sidebar_position:2,tags:["Docs"]},l="Deploy on a Kubernetes Cluster",i={unversionedId:"deployment/deployment-with-k8s",id:"deployment/deployment-with-k8s",title:"Deploy on Kubernetes",description:"This article demonstrates how to deploy a ByConity cluster on a Kubernetes (k8s) environment.",source:"@site/docs/deployment/02-deployment-with-k8s.mdx",sourceDirName:"deployment",slug:"/deployment/deployment-with-k8s",permalink:"/docs/deployment/deployment-with-k8s",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/docs/deployment/02-deployment-with-k8s.mdx",tags:[{label:"Docs",permalink:"/docs/tags/docs"}],version:"current",sidebarPosition:2,frontMatter:{title:"Deploy on Kubernetes",sidebar_position:2,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Deployment Requirements",permalink:"/docs/deployment/deployment-requirements"},next:{title:"Deploy on Physical Machines",permalink:"/docs/deployment/package-deployment"}},s={},p=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2}],y={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"deploy-on-a-kubernetes-cluster"},"Deploy on a Kubernetes Cluster"),(0,r.yg)("p",null,"This article demonstrates how to deploy a ByConity cluster on a Kubernetes (k8s) environment."),(0,r.yg)("h2",{id:"environment-setup"},"Environment Setup"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install the Kubernetes command-line tool ",(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," locally to manage the Kubernetes cluster."),(0,r.yg)("li",{parentName:"ul"},"Install ",(0,r.yg)("a",{parentName:"li",href:"https://helm.sh/"},"helm"),", the package manager for Kubernetes applications."),(0,r.yg)("li",{parentName:"ul"},"Clone the bconity-deploy repository locally.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:ByConity/byconity-deploy.git\ncd byconity-deploy\n")),(0,r.yg)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Acquire a Kubernetes Cluster")),(0,r.yg)("p",{parentName:"li"},"You can either deploy or purchase a Kubernetes cluster. ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/"},"Refer to the official documentation")," for more details.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Prepare Storage")),(0,r.yg)("p",{parentName:"li"},"For optimal ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Total_cost_of_ownership"},"TCO")," and performance, it's recommended to use local disks alongside ByConity server and worker nodes. Storage solutions like ",(0,r.yg)("a",{parentName:"p",href:"https://openebs.io/docs/concepts/localpv"},"OpenEBS local PV")," can be utilized.\n",(0,r.yg)("em",{parentName:"p"},"Note: Storage for ByConity server and worker nodes is only used for disk caching and can be deleted at any time."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configure your Helm File")),(0,r.yg)("p",{parentName:"li"},"Copy and modify certain fields from ",(0,r.yg)("inlineCode",{parentName:"p"},"./chart/byconity/values.yaml")," such as:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Storage class name"),(0,r.yg)("li",{parentName:"ul"},"Timezone"),(0,r.yg)("li",{parentName:"ul"},"Number of server/worker replicas"),(0,r.yg)("li",{parentName:"ul"},"HDFS storage configuration")),(0,r.yg)("p",{parentName:"li"},"If you want to use your own HDFS cluster, set ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs.enabled")," to false and override the HDFS configuration in the ",(0,r.yg)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"byconity:\n  hdfs_address: hdfs://your-own-hdfs:port\nhdfs:\n  enabled: false\n")),(0,r.yg)("p",{parentName:"li"},"For FDB (FoundationDB) configuration:\nIf you want to use your own FDB, set both ",(0,r.yg)("inlineCode",{parentName:"p"},"fdb.enabled")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"fdb-operator.enabled")," to false. You can refer to ",(0,r.yg)("inlineCode",{parentName:"p"},"values_use_existing_fdb.yaml")," for configuration."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"byconity:\n  hdfs_address: hdfs://byconity-hdfs-namenodes:8020 # or use your own hdfs\n  use_existing_fdb: true\n  fdb_cluster_file: your-fdb-cluster-file-content # e.g., byconity_fdb:Is0hBgl6iICdHuspBmhAODmD5WISXKzI@192.168.224.150:4501,192.168.226.83:4501,192.168.228.152:4501\nfdb:\n  enabled: false\nfdb-operator:\n  enabled: false\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Initialize the ByConity Cluster")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Install with fdb CRD first (if using custom FDB setup)\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity --set fdb.enabled=false\n\n# Install with fdb cluster (if using ByConity's FDB setup)\nhelm upgrade --install --create-namespace --namespace byconity -f ./your/custom/values.yaml byconity ./chart/byconity\n")),(0,r.yg)("p",{parentName:"li"},"Check and wait for all Pods to be ready:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl -n byconity get pods\n")),(0,r.yg)("p",{parentName:"li"},"Once the installation is successful, you can start using ByConity!"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n byconity exec -it sts/byconity-server -- bash\nroot@byconity-server-0:/# clickhouse-client\n\n172.16.1.1 :)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Deleting the ByConity Cluster")),(0,r.yg)("p",{parentName:"li"},"To delete the ByConity cluster, run:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm uninstall --namespace byconity byconity\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Testing")),(0,r.yg)("p",{parentName:"li"},"You can run some simple queries to test the cluster:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS test;\nUSE test;\nDROP TABLE IF EXISTS test.lc;\nCREATE TABLE test.lc (b LowCardinality(String)) ENGINE = CnchMergeTree ORDER BY b;\nINSERT INTO test.lc SELECT '0123456789' FROM numbers(100000000);\nSELECT count(), b FROM test.lc GROUP BY b;\nDROP TABLE IF EXISTS test.lc;\nDROP DATABASE test;\n")))),(0,r.yg)("p",null,"Make sure to replace any placeholders (like ",(0,r.yg)("inlineCode",{parentName:"p"},"./your/custom/values.yaml"),") with the actual path to your customized Helm values file."))}u.isMDXComponent=!0}}]);