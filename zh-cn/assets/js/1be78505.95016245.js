"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[6241,8714],{7364:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var a=n(7953),o=n(8835),l=n(3349),r=n(2268),c=n(3988),i=n(985),s=n(5693),d=n(2301),m=n(2052),u=n(3715),b=n(9947),p=n(837);const h={backToTopButton:"backToTopButton_Kzpt",backToTopButtonShow:"backToTopButtonShow_SQpo"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.gk)();return(0,b.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.$)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(5926),g=n(506),v=n(9803),_=n(710),A=n(5890);function C(e){return a.createElement("svg",(0,A.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k="collapseSidebarButton_p9pI",S="collapseSidebarButtonIcon_uk2b";function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",k),onClick:t},a.createElement(C,{className:S}))}var T=n(7748),I=n(3953);const x=Symbol("EmptyContext"),y=a.createContext(x);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(y.Provider,{value:l},t)}var B=n(8223),L=n(1382),M=n(7858),P=n(9204);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function G(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.p)(),f=function(e){const t=(0,P.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),g=(0,i.w8)(t,l),_=(0,L.ys)(h,l),{collapsed:C,setCollapsed:k}=(0,B.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(y);if(e===x)throw new I.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!C),N(e?null:s),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,I.ZC)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:C,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&k(!0)}),[b,S,s,k,E]),a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(M.A,(0,A.A)({className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(U,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:c+1})))}var F=n(4675),W=n(7069);const D="menuExternalLink_gcex";function V(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,l),E=(0,F.A)(m);return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.A,(0,A.A)({className:(0,o.A)("menu__link",!E&&D,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.A,null)))}const z="menuHtmlItem_qrwv";function R(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[z,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(G,(0,A.A)({item:t},n));case"html":return a.createElement(R,(0,A.A)({item:t},n));default:return a.createElement(V,(0,A.A)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(q,(0,A.A)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(K),X="menu_J18w",Y="menuWithAnnouncementBar_nL2V";function j(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,T.Mj)(),[t,n]=(0,a.useState)(e);return(0,b.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",X,c&&Y,l)},a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const J="sidebar_H_01",O="sidebarWithHideableNavbar_Ezn7",Q="sidebarHidden_FCDn",Z="sidebarLogo_NiAm";function $(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.p)();return a.createElement("div",{className:(0,o.A)(J,c&&O,r&&Q)},c&&a.createElement(_.A,{tabIndex:-1,className:Z}),a.createElement(j,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:l}))}const ee=a.memo($);var te=n(6697),ne=n(4056);const ae=e=>{let{sidebar:t,path:n}=e;const l=(0,ne.M)();return a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function oe(e){return a.createElement(te.GX,{component:ae,props:e})}const le=a.memo(oe);function re(e){const t=(0,g.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ee,e),o&&a.createElement(le,e))}const ce={expandButton:"expandButton_qXFi",expandButtonIcon:"expandButtonIcon__XmD"};function ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ce.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:ce.expandButtonIcon}))}const se={docSidebarContainer:"docSidebarContainer_ldoy",docSidebarContainerHidden:"docSidebarContainerHidden_fGbK",sidebarViewport:"sidebarViewport_TwFD"};function de(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function me(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,f.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.A)(r.G.docs.docSidebarContainer,se.docSidebarContainer,n&&se.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(se.docSidebarContainer)&&n&&s(!0)}},a.createElement(de,null,a.createElement("div",{className:(0,o.A)(se.sidebarViewport,i&&se.sidebarViewportHidden)},a.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ie,{toggleSidebar:d}))))}const ue={docMainContainer:"docMainContainer_baW4",docMainContainerEnhanced:"docMainContainerEnhanced_lsKp",docItemWrapperEnhanced:"docItemWrapperEnhanced_lcNt"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.t)();return a.createElement("main",{className:(0,o.A)(ue.docMainContainer,(t||!l)&&ue.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ue.docItemWrapper,t&&ue.docItemWrapperEnhanced)},n))}const pe={docPage:"docPage_GWs5",docsWrapper:"docsWrapper_h_X8"};function he(e){let{children:t}=e;const n=(0,d.t)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:pe.docsWrapper},a.createElement(E,null),a.createElement("div",{className:pe.docPage},n&&a.createElement(me,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(be,{hiddenSidebarContainer:o},t)))}var Ee=n(6241),fe=n(2428);function ge(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(fe.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(l.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ve(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(Ee.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ge,e),a.createElement(l.e3,{className:(0,o.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(he,null,c)))))}},6241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7953),o=n(3715),l=n(3349),r=n(2052);function c(){return a.createElement(a.Fragment,null,a.createElement(l.be,{title:(0,o.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},5693:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>c});var a=n(7953),o=n(3953);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.dV("DocsVersionProvider");return e}}}]);