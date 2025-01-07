"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8960],{58860:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>N});var l=n(37953);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,l,i=function(e,a){if(null==e)return{};var n,l,i={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),g=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=g(e.components);return l.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},y=l.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=g(n),y=i,N=m["".concat(s,".").concat(y)]||m[y]||u[y]||t;return n?l.createElement(N,r(r({ref:a},p),{},{components:n})):l.createElement(N,r({ref:a},p))}));function N(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,r=new Array(t);r[0]=y;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var g=2;g<t;g++)r[g]=n[g];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41021:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>g});var l=n(75890),i=(n(37953),n(58860));const t={title:"Privilege Management",sidebar_position:8,tags:["Docs"]},r="Privilege Management",o={unversionedId:"admin-guides/privilege-management",id:"version-0.3.0/admin-guides/privilege-management",title:"Privilege Management",description:"RBAC Model",source:"@site/versioned_docs/version-0.3.0/admin-guides/privilege-management.mdx",sourceDirName:"admin-guides",slug:"/admin-guides/privilege-management",permalink:"/docs/0.3.0/admin-guides/privilege-management",draft:!1,editUrl:"https://github.com/yxf-ops/yxf-ops.github.io/tree/main/versioned_docs/version-0.3.0/admin-guides/privilege-management.mdx",tags:[{label:"Docs",permalink:"/docs/0.3.0/tags/docs"}],version:"0.3.0",sidebarPosition:8,frontMatter:{title:"Privilege Management",sidebar_position:8,tags:["Docs"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Configuration",permalink:"/docs/0.3.0/admin-guides/cluster-configuration"},next:{title:"Manage Background Tasks",permalink:"/docs/0.3.0/admin-guides/background-task-management"}},s={},g=[{value:"RBAC Model",id:"rbac-model",level:2},{value:"Operation Management",id:"operation-management",level:2},{value:"Enabling RBAC",id:"enabling-rbac",level:3},{value:"Differences",id:"differences",level:3},{value:"How to use RBAC",id:"how-to-use-rbac",level:3},{value:"CREATE and ALTER User/Role",id:"create-and-alter-userrole",level:4},{value:"GRANT Privileges and Roles",id:"grant-privileges-and-roles",level:4},{value:"SET Role",id:"set-role",level:4},{value:"Revoke",id:"revoke",level:4},{value:"Drop",id:"drop",level:4},{value:"System Tables for Access Entities",id:"system-tables-for-access-entities",level:4}],p={toc:g},m="wrapper";function u(e){let{components:a,...t}=e;return(0,i.yg)(m,(0,l.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"privilege-management"},"Privilege Management"),(0,i.yg)("h2",{id:"rbac-model"},"RBAC Model"),(0,i.yg)("p",null,"ByConity's access control design is based on the Role-Based Access Control (RBAC) model, which is used to manage and control user access to system resources. It assigns permissions to roles rather than individual users, leveraging the concept of roles. RBAC mainly consists of three core components: roles, permissions, and users."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Role"),': A role is a group of users with similar responsibilities and permissions. For example, a system might define different roles such as "administrator," "editor," and "reader." Each role represents a set of permissions, and users can be assigned to one or multiple roles.'),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Permission"),": Permission refers to the access rights to system resources. Resources can be files, databases, functional modules, etc. Permissions define the ability to perform operations on these resources, such as reading, writing, modifying, etc. Each role is associated with a set of permissions."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"User"),": A user is an individual entity within the system, such as an administrator, employee, or customer. Users can be assigned to one or multiple roles, thereby acquiring the permissions associated with those roles.")),(0,i.yg)("p",null,"The core idea of RBAC is to grant permissions to roles and then assign roles to users. This approach simplifies access control, enhances system scalability, and improves security. By using RBAC, administrators can flexibly manage and control user access to system resources based on different roles and responsibilities, achieving fine-grained access control and permission management."),(0,i.yg)("p",null,"RBAC in ByConity adopts most aspects of the ClickHouse version of RBAC, with some syntactic differences and underlying implementations, as explained further below."),(0,i.yg)("h2",{id:"operation-management"},"Operation Management"),(0,i.yg)("h3",{id:"enabling-rbac"},"Enabling RBAC"),(0,i.yg)("p",null,"You can enable RBAC by setting ",(0,i.yg)("inlineCode",{parentName:"p"},"access_management = 1")," and adding a password for the default user in the",(0,i.yg)("inlineCode",{parentName:"p"},"users.xml")," configuration file. More info can be found ",(0,i.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/access-rights/#enabling-access-control"},"here"),".\n",(0,i.yg)("img",{src:n(86191).A,width:"2016",height:"1168"})),(0,i.yg)("p",null,"After enabling RBAC, the ",(0,i.yg)("inlineCode",{parentName:"p"},"default")," user would have all the permissions. After this, it is recommended that:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"You create all the required users. Also create an admin account (for eg. ",(0,i.yg)("inlineCode",{parentName:"li"},"admin_user")," ) using the following syntax ",(0,i.yg)("inlineCode",{parentName:"li"},"GRANT ALL ON *.* TO admin_user_account WITH GRANT OPTION"),"."),(0,i.yg)("li",{parentName:"ol"},"You can then restrict the ",(0,i.yg)("inlineCode",{parentName:"li"},"default")," user permissions by setting ",(0,i.yg)("inlineCode",{parentName:"li"},"<readonly>")," value to 1 in the ",(0,i.yg)("inlineCode",{parentName:"li"},"users.xml")," file")),(0,i.yg)("h3",{id:"differences"},"Differences"),(0,i.yg)("p",null,"The main differences are as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"The ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/ByConity/ByConity/issues/660"},"underlying implementation")," uses the key value store by default in order to persist and perform operations on access entities instead of disk storage. This is to support the cloud native architecture of Byconity."),(0,i.yg)("li",{parentName:"ol"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"CREATE/ALTER")," User/Role does not support the ",(0,i.yg)("inlineCode",{parentName:"li"},"HOST")," keyword as Byconity does not store entities on the server disk.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Settings")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Configuration Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Default Value, Meaning"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,i.yg)("th",{parentName:"tr",align:null}))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"access_entity_ttl"),(0,i.yg)("td",{parentName:"tr",align:"left"},"3600(60 Mins), TTL for access entities stored in memory in seconds"),(0,i.yg)("td",{parentName:"tr",align:"left"},"It is recommended that this value be set at a reasonable interval for updating the entities in memory so as to not put too much read pressure on the key value store."),(0,i.yg)("td",{parentName:"tr",align:null})))),(0,i.yg)("h3",{id:"how-to-use-rbac"},"How to use RBAC"),(0,i.yg)("h4",{id:"create-and-alter-userrole"},"CREATE and ALTER User/Role"),(0,i.yg)("p",null,"Create user accounts with the following syntax. Note that passwords should follow the following rules:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Be at least 12 characters long"),(0,i.yg)("li",{parentName:"ul"},"Contain at least 1 numeric character"),(0,i.yg)("li",{parentName:"ul"},"Contain at least 1 uppercase character"),(0,i.yg)("li",{parentName:"ul"},"Contain at least 1 lowercase character"),(0,i.yg)("li",{parentName:"ul"},"Contain at least 1 special character")),(0,i.yg)("p",null,"A user account has the following properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Identification information."),(0,i.yg)("li",{parentName:"ul"},"Privileges that define a scope of queries the user can execute."),(0,i.yg)("li",{parentName:"ul"},"Assigned and default roles."),(0,i.yg)("li",{parentName:"ul"},"Settings with their constraints applied by default at user login."),(0,i.yg)("li",{parentName:"ul"},"Assigned settings profiles.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name\n[NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}]\nBY {'password' | 'hash'}}| {WITH ssl_certificate CN 'common_name'}]\n[DEFAULT ROLE role [,...]] [DEFAULT DATABASE database | NONE]\n[GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n\n-- Example\nCREATE USER john IDENTIFIED WITH sha256_password BY 'my_password' DEFAULT ROLE accountant;\n\n-- To login as a user\nclickhouse-client --host 127.0.0.1 --port 9000 --user=john password=my_password\n")),(0,i.yg)("p",null,"Create roles with the following syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE ROLE [IF NOT EXISTS | OR REPLACE] name\n[SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [CONST|READONLY|WRITABLE|CHANGEABLE_IN_READONLY] | PROFILE 'profile_name'] [,...]\n\n-- Create and Grant privilege to role. Now accountant role can read from `db` database\nCREATE ROLE accountant;\nGRANT SELECT ON db.* TO accountant;\n\n-- user can set his granted role to then execute allowed queries. Note that user and role permissions are unioned.\nSET ROLE accountant;\nSELECT * FROM db.*;\n")),(0,i.yg)("h4",{id:"grant-privileges-and-roles"},"GRANT Privileges and Roles"),(0,i.yg)("p",null,"Privilege in RBAC is a permission to execute specific kind of queries. They have a hierarchical structure. It is similar to ClickHouse. More types of permissions will be added in the future. The current permissions list is follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"SELECT"),(0,i.yg)("li",{parentName:"ul"},"INSERT"),(0,i.yg)("li",{parentName:"ul"},"ALTER",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER UPDATE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DELETE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER COLUMN"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MODIFY COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER COMMENT COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CLEAR COLUMN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER RENAME COLUMN")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER INDEX"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ORDER BY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SAMPLE BY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE INDEX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CLEAR INDEX")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER CONSTRAINT"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ADD CONSTRAINT")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER DROP CONSTRAINT")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER TTL"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MATERIALIZE TTL")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SETTINGS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER MOVE PARTITION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER FETCH PARTITION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER FREEZE PARTITION")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW REFRESH")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER VIEW MODIFY QUERY")))))),(0,i.yg)("li",{parentName:"ul"},"CREATE",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE DATABASE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ARBITRARY TEMPORARY TABLE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE TEMPORARY TABLE")))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE VIEW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE DICTIONARY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE FUNCTION")))),(0,i.yg)("li",{parentName:"ul"},"DROP",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP DATABASE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP TABLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP VIEW")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP DICTIONARY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP FUNCTION")))),(0,i.yg)("li",{parentName:"ul"},"TRUNCATE"),(0,i.yg)("li",{parentName:"ul"},"OPTIMIZE"),(0,i.yg)("li",{parentName:"ul"},"SHOW",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW DATABASES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW TABLES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW COLUMNS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW DICTIONARIES")))),(0,i.yg)("li",{parentName:"ul"},"KILL QUERY"),(0,i.yg)("li",{parentName:"ul"},"ACCESS MANAGEMENT",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP USER")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP ROLE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP ROW POLICY")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP QUOTA")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"CREATE SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ALTER SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"DROP SETTINGS PROFILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW ACCESS"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_USERS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_ROLES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_ROW_POLICIES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_QUOTAS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SHOW_SETTINGS_PROFILES")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ROLE ADMIN")))),(0,i.yg)("li",{parentName:"ul"},"SYSTEM",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM SHUTDOWN")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP CACHE"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP DNS CACHE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP MARK CACHE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM DROP UNCOMPRESSED CACHE")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD CONFIG")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD DICTIONARY"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD EMBEDDED DICTIONARIES")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTION")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM RELOAD FUNCTIONS")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM MERGES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM TTL MERGES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FETCHES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM MOVES")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH DISTRIBUTED")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"SYSTEM FLUSH LOGS")))))),(0,i.yg)("li",{parentName:"ul"},"INTROSPECTION",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToLine")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToLineWithInlines")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"addressToSymbol")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"demangle")))),(0,i.yg)("li",{parentName:"ul"},"SOURCES",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"FILE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"URL")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"REMOTE")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"YSQL")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"ODBC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"JDBC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"HDFS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"S3")))),(0,i.yg)("li",{parentName:"ul"},"dictGet"),(0,i.yg)("li",{parentName:"ul"},"displaySecretsInShowAndSelect")),(0,i.yg)("p",null,"Use the GRANT syntax to grant permissions or assign roles to a user/role."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Grant Privellege\nGRANT privilege[(column_name [,...])] [,...]\nON {db.table|db.*|*.*|table|*}\nTO {user | role | CURRENT_USER} [,...] [WITH GRANT OPTION] [WITH REPLACE OPTION]\n\n-- Grant Roles\nGRANT role [,...] TO {user | another_role | CURRENT_USER} [,...]\n[WITH ADMIN OPTION] [WITH REPLACE OPTION]\n\n-- Grant SELECT permissions on all tables in `db` to `accoutant` role\nGRANT SELECT ON db.* TO accountant;\n\n-- Grant SELECT permissions on `db.table` to user `john`. Also grant `john` the permission to grant other users (who are GRANTEEs of `john`) his own permissions.\nGRANT SELECT(x,y) ON db.table TO john WITH GRANT OPTION;\nALTER  USER john GRANTEES jack;\n\n-- Examples of creating users, roles and granting roles.\nCREATE ROLE column1_users;\nGRANT SELECT(id, column1) ON db1.table1 TO column1_users;\nCREATE USER column_user IDENTIFIED BY 'password';\nGRANT column1_users TO column_user;\n")),(0,i.yg)("h4",{id:"set-role"},"SET Role"),(0,i.yg)("p",null,"Activates roles for the current user. This role should be granted to the user"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,i.yg)("p",null,"Sets default roles to a user."),(0,i.yg)("p",null,"Default roles are roles that are activated at user login. Roles can be set as default only if the usr was granted these roles. An exception is thrown otherwise"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,i.yg)("h4",{id:"revoke"},"Revoke"),(0,i.yg)("p",null,"Revokes privileges from users or roles"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Revoking privileges from users\nREVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n\n-- Example\nREVOKE  SELECT  ON accounts.*  FROM john;\n\n-- REVOKE part of a user's privilege\nGRANT  SELECT  ON accounts.staff TO mira;\nREVOKE  SELECT(wage)  ON accounts.staff FROM mira;\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"-- Revoking roles from users\nREVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,i.yg)("h4",{id:"drop"},"Drop"),(0,i.yg)("p",null,"Drop roles or users"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name] [FROM access_storage_type]\n")),(0,i.yg)("h4",{id:"system-tables-for-access-entities"},"System Tables for Access Entities"),(0,i.yg)("p",null,"Shows privileges for a user"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW GRANTS [FOR user1 [, user2 ...]]\n")),(0,i.yg)("p",null,"Shows parameters that were used at a user creation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW CREATE USER [name1 [, name2 ...] | CURRENT_USER]\n")),(0,i.yg)("p",null,"Shows parameters that were used at a role creation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW CREATE ROLE name1 [, name2 ...]\n")),(0,i.yg)("p",null,"System tables for access entities can be found in the following tables ",(0,i.yg)("inlineCode",{parentName:"p"},"role_grants"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"roles"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"users")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM system.role_grants;\nSELECT * FROM system.roles;\nSELECT * FROM system.users;\n")))}u.isMDXComponent=!0},86191:(e,a,n)=>{n.d(a,{A:()=>l});const l=n.p+"assets/images/enable-rbac-d57e69b84f1fc280b64b55878a042aba.png"}}]);