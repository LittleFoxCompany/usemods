import o from"./ContentSlot.8bd6b2a8.js";import{d as s,a1 as m,J as p,ao as u}from"./entry.1ae21f51.js";import"./MDCSlot.49971e0c.js";import"./node.efb5c833.js";const l=s({name:"Markdown",extends:o,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};