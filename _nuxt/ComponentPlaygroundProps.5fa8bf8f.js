import k from"./ProseH4.d2be5b59.js";import B from"./ProseCodeInline.bd7c0ded.js";import q from"./Badge.d3d2a0c1.js";import D from"./ProseP.dd2cd27e.js";import{d as N,as as b,J as j,b as o,c as r,F as w,ah as E,K as d,e as m,g as l,w as s,E as _,t as u,Y as i,f as p,k as F}from"./entry.1ae21f51.js";import"./slot.179345af.js";import"./node.efb5c833.js";const I={class:"component-playground-data-section"},O=["id"],H=["value","onChange"],J=N({__name:"ComponentPlaygroundProps",props:{modelValue:{type:Object,required:!0},componentData:{type:Object,required:!0}},emits:["update:modelValue"],setup(f,{emit:g}){const a=f,c=b(a,"modelValue",g),y=(t,n)=>{c.value={...c.value,[n]:t.target.value}},v=j(()=>{var t,n;return(n=(t=a==null?void 0:a.componentData)==null?void 0:t.meta)==null?void 0:n.props});return(t,n)=>{const x=k,h=B,C=q,P=D;return o(),r("div",I,[(o(!0),r(w,null,E(d(v),e=>(o(),r("div",{key:e.name},[m("div",{id:e.name,class:"prop-title"},[l(x,{id:e.name},{default:s(()=>[_(u(e.name),1)]),_:2},1032,["id"]),m("span",null,[l(h,null,{default:s(()=>[_(u(e.type),1)]),_:2},1024),e.required?p("",!0):(o(),i(C,{key:0},{default:s(()=>[_(" Required ")]),_:1}))])],8,O),e.description?(o(),i(P,{key:0},{default:s(()=>[_(u(e.description),1)]),_:2},1024)):p("",!0),m("input",{value:d(c)[e.name],onChange:V=>y(V,e.name)},null,40,H)]))),128))])}}});const $=F(J,[["__scopeId","data-v-acf5a6ce"]]);export{$ as default};