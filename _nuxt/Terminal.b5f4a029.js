import{d as v,aj as m,r as h,J as y,b as s,c as o,K as i,f as _,e,F as f,ah as k,p as C,i as b,t as g,k as x}from"./entry.6042ece0.js";const n=t=>(C("data-v-c33b9d7c"),t=t(),b(),t),S={key:0,class:"copied"},w=n(()=>e("div",{class:"scrim"},null,-1)),B=n(()=>e("div",{class:"content"}," Copied! ",-1)),I=[w,B],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),c=h("init"),d=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",S,I)):_("",!0),T,e("div",j,[(s(!0),o(f,null,k(i(d),r=>(s(),o("span",{key:r,class:"line"},[F,e("span",N,g(r),1)]))),128))]),i(c)!=="copied"?(s(),o("div",V," Click to copy ")):_("",!0)]))}});const E=x(q,[["__scopeId","data-v-c33b9d7c"]]);export{E as default};
