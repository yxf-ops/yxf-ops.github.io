"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[8209],{47016:(e,t,a)=>{a.d(t,{A:()=>E});var l=a(37953),n=a(68835),r=a(20790),s=a(90506),i=a(87858),c=a(13715);const m={sidebar:"sidebar_sHKB",sidebarItemTitle:"sidebarItemTitle_lenv",sidebarItemList:"sidebarItemList_zeQ0",sidebarItem:"sidebarItem_htMz",sidebarItemLink:"sidebarItemLink_mC08",sidebarItemLinkActive:"sidebarItemLinkActive_t322"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var b=a(66697);function g(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return l.createElement(b.GX,{component:g,props:e})}function d(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?l.createElement(u,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(r.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(d,{sidebar:t}),l.createElement("main",{className:(0,n.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},54395:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(37953),n=a(68835),r=a(66627),s=a(63349),i=a(2268),c=a(47016),m=a(91647),o=a(82428);function b(e){let{tags:t,sidebar:a}=e;const b=(0,r.b)();return l.createElement(s.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogTagsListPage)},l.createElement(s.be,{title:b}),l.createElement(o.A,{tag:"blog_tags_list"}),l.createElement(c.A,{sidebar:a},l.createElement("h1",null,b),l.createElement(m.A,{tags:t})))}},24785:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(37953),n=a(68835),r=a(87858);const s={tag:"tag_lVyf",tagRegular:"tagRegular_MP1R",tagWithCount:"tagWithCount_lUm3"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},91647:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(37953),n=a(66627),r=a(24785);const s={tag:"tag_u8g6"};function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:s.tag},l.createElement(r.A,e))))),l.createElement("hr",null))}function c(e){let{tags:t}=e;const a=(0,n.Q)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}},66627:(e,t,a)=>{a.d(t,{Q:()=>r,b:()=>n});var l=a(13715);const n=()=>(0,l.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);