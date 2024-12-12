"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[3382],{8860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var i=t(7953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?i.createElement(g,l(l({ref:n},s),{},{components:t})):i.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=t(5890),o=(t(7953),t(8860));const r={title:"Client Connection",tags:["Docs"]},l="Client Connection",a={unversionedId:"basic-guide/client-connection",id:"version-0.2.0/basic-guide/client-connection",title:"Client Connection",description:"Document Type: Tutorial",source:"@site/versioned_docs/version-0.2.0/basic-guide/client-connection.mdx",sourceDirName:"basic-guide",slug:"/basic-guide/client-connection",permalink:"/docs/0.2.0/basic-guide/client-connection",draft:!1,editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/versioned_docs/version-0.2.0/basic-guide/client-connection.mdx",tags:[{label:"Docs",permalink:"/docs/0.2.0/tags/docs"}],version:"0.2.0",frontMatter:{title:"Client Connection",tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Background Tasks Management",permalink:"/docs/0.2.0/basic-guide/background-task-management"},next:{title:"Cluster Configuration",permalink:"/docs/0.2.0/basic-guide/cluster-configuration"}},c={},u=[{value:"Command line client (CLI)",id:"command-line-client-cli",level:2},{value:"Docker Client",id:"docker-client",level:3},{value:"Clickhouse Client",id:"clickhouse-client",level:3},{value:"Driver",id:"driver",level:2},{value:"Python",id:"python",level:3},{value:"clickhouse-connect",id:"clickhouse-connect",level:4},{value:"clickhouse-driver",id:"clickhouse-driver",level:4},{value:"Go",id:"go",level:3},{value:"use clickhouse-go to connect",id:"use-clickhouse-go-to-connect",level:4},{value:"use ch-go to connect",id:"use-ch-go-to-connect",level:4},{value:"Java",id:"java",level:3},{value:"HTTP",id:"http",level:2},{value:"Reference Documentation",id:"reference-documentation",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,i.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"client-connection"},"Client Connection"),(0,o.yg)("p",null,"Document Type: Tutorial"),(0,o.yg)("p",null,"Document structure: tutorial purpose, pre-preparation, step-by-step explanation of principles & examples, and related document recommendations;"),(0,o.yg)("p",null,"Summary:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Which clients or drivers does ByConity provide to interact with other systems"),(0,o.yg)("li",{parentName:"ol"},"How to download and start these clients after the cluster is deployed")),(0,o.yg)("h2",{id:"command-line-client-cli"},"Command line client (CLI)"),(0,o.yg)("h3",{id:"docker-client"},(0,o.yg)("a",{parentName:"h3",href:"https://hub.docker.com/r/yandex/clickhouse-server/"},"Docker Client")),(0,o.yg)("p",null,"If you have installed Docker, you can directly establish a ByConity connection with the following command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run -it yandex/clickhouse-client --host 127.0.0.1 --port 9000 --user default --password xxxx\n\n")),(0,o.yg)("p",null,"All of the following are ",(0,o.yg)("strong",{parentName:"p"},"Optional"),", subject to availability:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--host xxx")," host IP or domain name"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--port 9000")," tcp port\uff0cdefault as 9000"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--user default")," user name"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"--password xxxx")," password")),(0,o.yg)("h3",{id:"clickhouse-client"},"Clickhouse Client"),(0,o.yg)("p",null,"ByConity is compatible with clients provided by the ClickHouse open source community."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/sql-clients/clickhouse-client-local"},"ClickhouseClient installation reference for each operating system"),"\uff0c\u4e0b\u9762\u662f\u4ee5 MacOS x86_64 \u4e3a\u4f8b\u7684\u5b89\u88c5\u547d\u4ee4\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' \\\n&& chmod a+x ./clickhouse\n\nsudo mv ./clickhouse /usr/local/bin/\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Build connection\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clickhouse client --host 127.0.0.1 --password xxxx\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"clickhouse client --help")," You can view the optional parameters, the parameters here and above.")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"docker run -it yandex/clickhouse-client ...")," The following parameter names are consistent."),(0,o.yg)("h2",{id:"driver"},"Driver"),(0,o.yg)("p",null,"The open source drivers in various languages officially provided by Clickhouse can be directly used for ByConity connections."),(0,o.yg)("h3",{id:"python"},"Python"),(0,o.yg)("h4",{id:"clickhouse-connect"},(0,o.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-connect"},"clickhouse-connect")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"clickhouse-connect only support python3"),(0,o.yg)("li",{parentName:"ul"},"installation\uff1a",(0,o.yg)("inlineCode",{parentName:"li"},"pip3 install clickhouse-connect")),(0,o.yg)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"import clickhouse_connect\n\n# connect\nclient = clickhouse_connect.get_client(host='localhost', username='default', password='xxxx')\n\n# query\nquery_result = client.query('SHOW DATABASES;')\nprint (query_result.result_set)\n\n")),(0,o.yg)("h4",{id:"clickhouse-driver"},(0,o.yg)("a",{parentName:"h4",href:"https://pypi.org/project/clickhouse-driver/"},"clickhouse-driver")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Python3 installation\uff1a",(0,o.yg)("inlineCode",{parentName:"li"},"pip3 install clickhouse-driver")),(0,o.yg)("li",{parentName:"ul"},"Python2 installation\uff1a",(0,o.yg)("inlineCode",{parentName:"li"},"pip install clickhouse-driver")),(0,o.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"from clickhouse_driver import Client\nfrom clickhouse_driver import connect\n\n# connect\nclient = Client(host='localhost',port =9000, user='default', password='xxxx')\n\n# query\nquery_result = client.execute('SHOW DATABASES;')\nprint (query_result)\n\n")),(0,o.yg)("h3",{id:"go"},"Go"),(0,o.yg)("h4",{id:"use-clickhouse-go-to-connect"},"use ",(0,o.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/clickhouse-go"},"clickhouse-go")," to connect"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Compared with the later ch-go, lickhouse-go is more friendly to Go's type support, and the bottom layer is implemented by ch-go, which is recommended."),(0,o.yg)("li",{parentName:"ul"},"Execute ",(0,o.yg)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/clickhouse-go/v2")," in the project to install"),(0,o.yg)("li",{parentName:"ul"},"demo code:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'package main\n\nimport (\n        "context"\n        "log"\n        "net"\n        "time"\n\n        "github.com/ClickHouse/clickhouse-go/v2"\n)\n\nfunc main() {\n        ctx := context.Background()\n\n        // Configure connection parameters\n        conn, err := clickhouse.Open(&clickhouse.Options{\n                Addr: string[]{"127.0.0.1"},\n                Auth: clickhouse.Auth{\n                        Database: "my_db",\n                        Username: "default",\n                        Password: "xxxx",\n                },\n                DialContext: func(ctx context.Context, addr string) (net.Conn, error) {\n                        var d net.Dialer\n                        return d.DialContext(ctx, "tcp", addr)\n                },\n                Settings: clickhouse.Settings{\n                        "max_execution_time": 60,\n                },\n                DialTimeout:      time.Duration(10) * time.Second,\n                MaxOpenConns:     5,\n                MaxIdleConns:     5,\n                ConnMaxLifetime:  time.Duration(10) * time.Minute,\n                ConnOpenStrategy: clickhouse.ConnOpenInOrder,\n        })\n        if err != nil {\n                log.Panic(err)\n        }\n\n        if err := conn.Ping(ctx); err != nil {\n                log.Panic(err)\n        }\n\n        // run SQL\n        if err := conn.Exec(ctx, "SHOW DATABASES;"); err != nil {\n                log.Panic(err)\n        }\n}\n\n')),(0,o.yg)("h4",{id:"use-ch-go-to-connect"},"use ",(0,o.yg)("a",{parentName:"h4",href:"https://github.com/ClickHouse/ch-go"},"ch-go")," to connect"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"ch-go has better support for Clickhouse data types, and its performance is slightly higher than clickhouse-go."),(0,o.yg)("li",{parentName:"ul"},"installation\uff1a",(0,o.yg)("inlineCode",{parentName:"li"},"go get ``github.com/ClickHouse/ch-go")),(0,o.yg)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'package main\n\nimport (\n  "context"\n  "fmt"\n\n  "github.com/ClickHouse/ch-go"\n  "github.com/ClickHouse/ch-go/proto"\n)\n\nfunc main() {\n  ctx := context.Background()\n  c, err := ch.Dial(ctx, ch.Options{Address: "localhost:9000"})\n  if err != nil {\n    panic(err)\n  }\n  var (\n    numbers int\n    data    proto.ColUInt64\n  )\n  if err := c.Do(ctx, ch.Query{\n    Body: "SELECT number FROM system.numbers LIMIT 500000000",\n    Result: proto.Results{\n      {Name: "number", Data: &data},\n    },\n    // OnResult will be called on next received data block.\n    OnResult: func(ctx context.Context, b proto.Block) error {\n      numbers += len(data)\n      return nil\n    },\n  }); err != nil {\n    panic(err)\n  }\n  fmt.Println("numbers:", numbers)\n}\n\n')),(0,o.yg)("h3",{id:"java"},"Java"),(0,o.yg)("p",null,"use ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-jdbc"},"clickhouse-jdbc")," to connect"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Installation and configuration via maven \uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<dependency>\n    \x3c!-- please stop using ru.yandex.clickhouse as it's been deprecated --\x3e\n    <groupId>com.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.2-patch11</version>\n    \x3c!-- use uber jar with all dependencies included, change classifier to http for smaller jar --\x3e\n    <classifier>all</classifier>\n    <exclusions>\n        <exclusion>\n            <groupId>*</groupId>\n            <artifactId>*</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"demo code\uff1a")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'String url = "jdbc:ch://localhost:8123";\nProperties properties = new Properties();\nproperties.setProperty("max_execution_time", "120");\nClickHouseDataSource dataSource = new ClickHouseDataSource(url, properties);\ntry (Connection conn = dataSource.getConnection("default", "password");\n    Statement stmt = conn.createStatement()) {\n    ResultSet rs = stmt.executeQuery("SHOW DATABASES;");\n    while(rs.next()) {\n        // ...\n    }\n}\n\n')),(0,o.yg)("h2",{id:"http"},"HTTP"),(0,o.yg)("p",null,"ByConity also provides an HTTP connection method, which can execute SQL with curl or postman. curl example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"curl --location --request POST '127.0.0.1:8123/?max_execution_time=60&default_format=Native' \\\n--header 'Authorization: Basic xxx' \\\n--header 'Content-Type: text/plain' \\\n--data-raw 'SHOW DATABASES;'\n\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Encrypt with ",(0,o.yg)("inlineCode",{parentName:"li"},"Basic Auth")," (username + password), the encrypted result is ",(0,o.yg)("inlineCode",{parentName:"li"},"--header 'Authorization: Basic xxx'")," above"),(0,o.yg)("li",{parentName:"ul"},"Fill in the SQL to be executed directly in the Body, corresponding to ",(0,o.yg)("inlineCode",{parentName:"li"},"--data-raw 'SHOW DATABASES;'")," above"),(0,o.yg)("li",{parentName:"ul"},"The default port number of the HTTP interface is ",(0,o.yg)("inlineCode",{parentName:"li"},"8123")),(0,o.yg)("li",{parentName:"ul"},"Example parameters:"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_execution_time=60")," specifies the maximum waiting time for the query (seconds)"),(0,o.yg)("li",{parentName:"ul"},"By default, the returned data is in ",(0,o.yg)("inlineCode",{parentName:"li"},"TabSeparated")," format, and ",(0,o.yg)("inlineCode",{parentName:"li"},"default_format")," can specify a default format other than ",(0,o.yg)("inlineCode",{parentName:"li"},"TabSeparated"))),(0,o.yg)("h2",{id:"reference-documentation"},"Reference Documentation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/zh/interfaces/http"},"Clickhouse Http reference")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/integrations/language-clients"},"Clickhouse different language Driver reference"))))}d.isMDXComponent=!0}}]);