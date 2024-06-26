"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[483],{1183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),o=n(8453);const i={sidebar_position:3},r="How to Use",a={id:"how-to-use",title:"How to Use",description:"The in-memory database provides three simple HTTP endpoints to interact with stored data:",source:"@site/docs/how-to-use.md",sourceDirName:".",slug:"/how-to-use",permalink:"/daredb-docs/docs/how-to-use",draft:!1,unlisted:!1,editUrl:"https://github.com/dmarro89/dare-db/docs/how-to-use.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Running the Database",permalink:"/daredb-docs/docs/running-db"},next:{title:"Configuration",permalink:"/daredb-docs/docs/configuration"}},d={},c=[{value:"GET /get/key",id:"get-getkey",level:3},{value:"SET /set",id:"set-set",level:3},{value:"DELETE /delete/key",id:"delete-deletekey",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(t.p,{children:"The in-memory database provides three simple HTTP endpoints to interact with stored data:"}),"\n",(0,s.jsx)(t.h3,{id:"get-getkey",children:"GET /get/key"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint retrieves an item from the hashtable using a specific key."}),"\n",(0,s.jsx)(t.p,{children:"Example usage with cURL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -X GET http://localhost:2605/get/myKey\n"})}),"\n",(0,s.jsx)(t.h3,{id:"set-set",children:"SET /set"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint inserts a new item into the hashtable. The request body should contain the key and value of the new item."}),"\n",(0,s.jsx)(t.p,{children:"Example usage with cURL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X POST -d \'{"myKey":"myValue"}\' http://localhost:2605/set\n'})}),"\n",(0,s.jsx)(t.h3,{id:"delete-deletekey",children:"DELETE /delete/key"}),"\n",(0,s.jsx)(t.p,{children:"This endpoint deletes an item from the hashtable using a specific key."}),"\n",(0,s.jsx)(t.p,{children:"Example usage with cURL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -X DELETE http://localhost:2605/delete/myKey\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);