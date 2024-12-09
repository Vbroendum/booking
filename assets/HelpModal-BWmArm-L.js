import{y as se,c as Oe,z as be,A as we,D as N,j as n,I as Ce,f as T,a as B,E as je,B as L,n as Ve,t as ie,d as A,e as W,r as C,U as Ue,i as K,h as Se,g as ae,F as Re,k as F,H,J as ze,K as qe,w as Me,G as _e,p as Ee,x as Ke}from"./index-B2XcA1kM.js";import{P as I,C as le,I as Ye,T as U}from"./index-8fLVbOfZ.js";import{g as ke}from"./CheckIcon-cVN4vwx7.js";import{I as Je,a as Xe}from"./InputsGroupFieldset-DOmPIA1B.js";import{u as Ze,P as V}from"./Popover-CtJCK48I.js";import{a as Pe,c as Ie,u as Qe,I as Te}from"./InputBase-DyzxyKBV.js";function et(e,t){return e in t?se(t[e]):se(e)}function Be(e,t){const r=e.map(o=>({value:o,px:et(o,t)}));return r.sort((o,i)=>o.px-i.px),r}function G(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}var tt={};function rt(){return typeof process<"u"&&tt?"production":"development"}const[de,$e]=Oe("Grid component was not found in tree"),q=(e,t)=>e==="content"?"auto":e==="auto"?"0rem":e?`${100/(t/e)}%`:void 0,ce=(e,t,r)=>r||e==="auto"?"100%":e==="content"?"unset":q(e,t),ue=(e,t)=>{if(e)return e==="auto"||t?"1":"auto"},fe=(e,t)=>e===0?"0":e?`${100/(t/e)}%`:void 0;function ot({span:e,order:t,offset:r,selector:o}){var v;const i=be(),s=$e(),a=s.breakpoints||i.breakpoints,c=G(e)===void 0?12:G(e),g=we({"--col-order":(v=G(t))==null?void 0:v.toString(),"--col-flex-grow":ue(c,s.grow),"--col-flex-basis":q(c,s.columns),"--col-width":c==="content"?"auto":void 0,"--col-max-width":ce(c,s.columns,s.grow),"--col-offset":fe(G(r),s.columns)}),l=N(a).reduce((f,u)=>{var y;return f[u]||(f[u]={}),typeof t=="object"&&t[u]!==void 0&&(f[u]["--col-order"]=(y=t[u])==null?void 0:y.toString()),typeof e=="object"&&e[u]!==void 0&&(f[u]["--col-flex-grow"]=ue(e[u],s.grow),f[u]["--col-flex-basis"]=q(e[u],s.columns),f[u]["--col-width"]=e[u]==="content"?"auto":void 0,f[u]["--col-max-width"]=ce(e[u],s.columns,s.grow)),typeof r=="object"&&r[u]!==void 0&&(f[u]["--col-offset"]=fe(r[u],s.columns)),f},{}),p=Be(N(l),a).filter(f=>N(l[f.value]).length>0).map(f=>({query:s.type==="container"?`mantine-grid (min-width: ${a[f.value]})`:`(min-width: ${a[f.value]})`,styles:l[f.value]}));return n.jsx(Ce,{styles:g,media:s.type==="container"?void 0:p,container:s.type==="container"?p:void 0,selector:o})}var Y={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};const nt={span:12},J=T((e,t)=>{const r=B("GridCol",nt,e),{classNames:o,className:i,style:s,styles:a,vars:d,span:c,order:g,offset:l,...m}=r,p=$e(),v=je();return n.jsxs(n.Fragment,{children:[n.jsx(ot,{selector:`.${v}`,span:c,order:g,offset:l}),n.jsx(L,{ref:t,...p.getStyles("col",{className:Ve(i,v),style:s,classNames:o,styles:a}),...m})]})});J.classes=Y;J.displayName="@mantine/core/GridCol";function ge({gutter:e,selector:t,breakpoints:r,type:o}){const i=be(),s=r||i.breakpoints,a=we({"--grid-gutter":ie(G(e))}),d=N(s).reduce((l,m)=>(l[m]||(l[m]={}),typeof e=="object"&&e[m]!==void 0&&(l[m]["--grid-gutter"]=ie(e[m])),l),{}),g=Be(N(d),s).filter(l=>N(d[l.value]).length>0).map(l=>({query:o==="container"?`mantine-grid (min-width: ${s[l.value]})`:`(min-width: ${s[l.value]})`,styles:d[l.value]}));return n.jsx(Ce,{styles:a,media:o==="container"?void 0:g,container:o==="container"?g:void 0,selector:t})}const st={gutter:"md",grow:!1,columns:12},it=W((e,{justify:t,align:r,overflow:o})=>({root:{"--grid-justify":t,"--grid-align":r,"--grid-overflow":o}})),X=T((e,t)=>{const r=B("Grid",st,e),{classNames:o,className:i,style:s,styles:a,unstyled:d,vars:c,grow:g,gutter:l,columns:m,align:p,justify:v,children:f,breakpoints:u,type:y,...z}=r,x=A({name:"Grid",classes:Y,props:r,className:i,style:s,classNames:o,styles:a,unstyled:d,vars:c,varsResolver:it}),h=je();return y==="container"&&u?n.jsxs(de,{value:{getStyles:x,grow:g,columns:m||12,breakpoints:u,type:y},children:[n.jsx(ge,{selector:`.${h}`,...r}),n.jsx("div",{...x("container"),children:n.jsx(L,{ref:t,...x("root",{className:h}),...z,children:n.jsx("div",{...x("inner"),children:f})})})]}):n.jsxs(de,{value:{getStyles:x,grow:g,columns:m||12,breakpoints:u,type:y},children:[n.jsx(ge,{selector:`.${h}`,...r}),n.jsx(L,{ref:t,...x("root",{className:h}),...z,children:n.jsx("div",{...x("inner"),children:f})})]})});X.classes=Y;X.displayName="@mantine/core/Grid";X.Col=J;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},M.apply(null,arguments)}function at(e,t){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.includes(o))continue;r[o]=e[o]}return r}var lt=C.useLayoutEffect,dt=function(t){var r=C.useRef(t);return lt(function(){r.current=t}),r},me=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},ct=function(t,r){var o=C.useRef();return C.useCallback(function(i){t.current=i,o.current&&me(o.current,null),o.current=r,r&&me(r,i)},[r])},he={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},ut=function(t){Object.keys(he).forEach(function(r){t.style.setProperty(r,he[r],"important")})},pe=ut,w=null,ve=function(t,r){var o=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?o+r.borderSize:o-r.paddingSize};function ft(e,t,r,o){r===void 0&&(r=1),o===void 0&&(o=1/0),w||(w=document.createElement("textarea"),w.setAttribute("tabindex","-1"),w.setAttribute("aria-hidden","true"),pe(w)),w.parentNode===null&&document.body.appendChild(w);var i=e.paddingSize,s=e.borderSize,a=e.sizingStyle,d=a.boxSizing;Object.keys(a).forEach(function(p){var v=p;w.style[v]=a[v]}),pe(w),w.value=t;var c=ve(w,e);w.value=t,c=ve(w,e),w.value="x";var g=w.scrollHeight-i,l=g*r;d==="border-box"&&(l=l+i+s),c=Math.max(l,c);var m=g*o;return d==="border-box"&&(m=m+i+s),c=Math.min(m,c),[c,g]}var xe=function(){},gt=function(t,r){return t.reduce(function(o,i){return o[i]=r[i],o},{})},mt=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],ht=!!document.documentElement.currentStyle,pt=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var o=gt(mt,r),i=o.boxSizing;if(i==="")return null;ht&&i==="border-box"&&(o.width=parseFloat(o.width)+parseFloat(o.borderRightWidth)+parseFloat(o.borderLeftWidth)+parseFloat(o.paddingRight)+parseFloat(o.paddingLeft)+"px");var s=parseFloat(o.paddingBottom)+parseFloat(o.paddingTop),a=parseFloat(o.borderBottomWidth)+parseFloat(o.borderTopWidth);return{sizingStyle:o,paddingSize:s,borderSize:a}},vt=pt;function Ne(e,t,r){var o=dt(r);C.useLayoutEffect(function(){var i=function(a){return o.current(a)};if(e)return e.addEventListener(t,i),function(){return e.removeEventListener(t,i)}},[])}var xt=function(t){Ne(window,"resize",t)},yt=function(t){Ne(document.fonts,"loadingdone",t)},bt=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],wt=function(t,r){var o=t.cacheMeasurements,i=t.maxRows,s=t.minRows,a=t.onChange,d=a===void 0?xe:a,c=t.onHeightChange,g=c===void 0?xe:c,l=at(t,bt),m=l.value!==void 0,p=C.useRef(null),v=ct(p,r),f=C.useRef(0),u=C.useRef(),y=function(){var h=p.current,R=o&&u.current?u.current:vt(h);if(R){u.current=R;var _=ft(R,h.value||h.placeholder||"x",s,i),P=_[0],b=_[1];f.current!==P&&(f.current=P,h.style.setProperty("height",P+"px","important"),g(P,{rowHeight:b}))}},z=function(h){m||y(),d(h)};return C.useLayoutEffect(y),xt(y),yt(y),C.createElement("textarea",M({},l,{onChange:z,ref:v}))},Ct=C.forwardRef(wt);const jt={},Z=T((e,t)=>{const{autosize:r,maxRows:o,minRows:i,__staticSelector:s,resize:a,...d}=B("Textarea",jt,e),c=r&&rt()!=="test",g=c?{maxRows:o,minRows:i}:{};return n.jsx(Pe,{component:c?Ct:"textarea",ref:t,...d,__staticSelector:s||"Textarea",multiline:!0,"data-no-overflow":r&&o===void 0||void 0,__vars:{"--input-resize":a},...g})});Z.classes=Pe.classes;Z.displayName="@mantine/core/Textarea";const[St,Le]=Ie(),[Rt,zt]=Ie();var Ge={card:"m_9dc8ae12"};const _t={withBorder:!0},Et=W((e,{radius:t})=>({card:{"--card-radius":K(t)}})),Q=T((e,t)=>{const r=B("RadioCard",_t,e),{classNames:o,className:i,style:s,styles:a,unstyled:d,vars:c,checked:g,mod:l,withBorder:m,value:p,onClick:v,name:f,onKeyDown:u,...y}=r,z=A({name:"RadioCard",classes:Ge,props:r,className:i,style:s,classNames:o,styles:a,unstyled:d,vars:c,varsResolver:Et,rootSelector:"card"}),{dir:x}=Ze(),h=Le(),R=typeof g=="boolean"?g:(h==null?void 0:h.value)===p||!1,_=f||(h==null?void 0:h.name),P=b=>{if(u==null||u(b),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(b.nativeEvent.code)){b.preventDefault();const S=Array.from(document.querySelectorAll(`[role="radio"][name="${_||"__mantine"}"]`)),$=S.findIndex(D=>D===b.target),E=$+1>=S.length?0:$+1,j=$-1<0?S.length-1:$-1;b.nativeEvent.code==="ArrowDown"&&(S[E].focus(),S[E].click()),b.nativeEvent.code==="ArrowUp"&&(S[j].focus(),S[j].click()),b.nativeEvent.code==="ArrowLeft"&&(S[x==="ltr"?j:E].focus(),S[x==="ltr"?j:E].click()),b.nativeEvent.code==="ArrowRight"&&(S[x==="ltr"?E:j].focus(),S[x==="ltr"?E:j].click())}};return n.jsx(Rt,{value:{checked:R},children:n.jsx(Ue,{ref:t,mod:[{"with-border":m,checked:R},l],...z("card"),...y,role:"radio","aria-checked":R,name:_,onClick:b=>{v==null||v(b),h==null||h.onChange(p||"")},onKeyDown:P})})});Q.displayName="@mantine/core/RadioCard";Q.classes=Ge;const kt={},ee=T((e,t)=>{const{value:r,defaultValue:o,onChange:i,size:s,wrapperProps:a,children:d,name:c,readOnly:g,...l}=B("RadioGroup",kt,e),m=Se(c),[p,v]=Qe({value:r,defaultValue:o,finalValue:"",onChange:i}),f=u=>!g&&v(typeof u=="string"?u:u.currentTarget.value);return n.jsx(St,{value:{value:p,onChange:f,size:s,name:m},children:n.jsx(Te.Wrapper,{size:s,ref:t,...a,...l,labelElement:"div",__staticSelector:"RadioGroup",children:n.jsx(Je,{role:"radiogroup",children:d})})})});ee.classes=Te.Wrapper.classes;ee.displayName="@mantine/core/RadioGroup";function Fe({size:e,style:t,...r}){return n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:ae(e),height:ae(e),...t},"aria-hidden":!0,...r,children:n.jsx("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var He={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};const Pt={icon:Fe},It=W((e,{radius:t,color:r,size:o,iconColor:i,variant:s,autoContrast:a})=>{const d=Re({color:r||e.primaryColor,theme:e}),c=d.isThemeColor&&d.shade===void 0?`var(--mantine-color-${d.color}-outline)`:d.color;return{indicator:{"--radio-size":F(o,"radio-size"),"--radio-radius":t===void 0?void 0:K(t),"--radio-color":s==="outline"?c:H(r,e),"--radio-icon-size":F(o,"radio-icon-size"),"--radio-icon-color":i?H(i,e):ke(a,e)?ze({color:r,theme:e,autoContrast:a}):void 0}}}),te=T((e,t)=>{const r=B("RadioIndicator",Pt,e),{classNames:o,className:i,style:s,styles:a,unstyled:d,vars:c,icon:g,radius:l,color:m,iconColor:p,autoContrast:v,checked:f,mod:u,variant:y,disabled:z,...x}=r,h=g,R=A({name:"RadioIndicator",classes:He,props:r,className:i,style:s,classNames:o,styles:a,unstyled:d,vars:c,varsResolver:It,rootSelector:"indicator"}),_=zt(),P=typeof f=="boolean"?f:(_==null?void 0:_.checked)||!1;return n.jsx(L,{ref:t,...R("indicator",{variant:y}),variant:y,mod:[{checked:P,disabled:z},u],...x,children:n.jsx(h,{...R("icon")})})});te.displayName="@mantine/core/RadioIndicator";te.classes=He;var Ae={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const Tt={labelPosition:"right"},Bt=W((e,{size:t,radius:r,color:o,iconColor:i,variant:s,autoContrast:a})=>{const d=Re({color:o||e.primaryColor,theme:e}),c=d.isThemeColor&&d.shade===void 0?`var(--mantine-color-${d.color}-outline)`:d.color;return{root:{"--radio-size":F(t,"radio-size"),"--radio-radius":r===void 0?void 0:K(r),"--radio-color":s==="outline"?c:H(o,e),"--radio-icon-color":i?H(i,e):ke(a,e)?ze({color:o,theme:e,autoContrast:a}):void 0,"--radio-icon-size":F(t,"radio-icon-size")}}}),k=T((e,t)=>{const r=B("Radio",Tt,e),{classNames:o,className:i,style:s,styles:a,unstyled:d,vars:c,id:g,size:l,label:m,labelPosition:p,description:v,error:f,radius:u,color:y,variant:z,disabled:x,wrapperProps:h,icon:R=Fe,rootRef:_,iconColor:P,onChange:b,mod:S,...$}=r,E=A({name:"Radio",classes:Ae,props:r,className:i,style:s,classNames:o,styles:a,unstyled:d,vars:c,varsResolver:Bt}),j=Le(),D=(j==null?void 0:j.size)??l,We=r.size?l:D,{styleProps:De,rest:O}=qe($),re=Se(g),oe=j?{checked:j.value===O.value,name:O.name??j.name,onChange:ne=>{j.onChange(ne),b==null||b(ne)}}:{};return n.jsx(Xe,{...E("root"),__staticSelector:"Radio",__stylesApiProps:r,id:re,size:We,labelPosition:p,label:m,description:v,error:f,disabled:x,classNames:o,styles:a,unstyled:d,"data-checked":oe.checked||void 0,variant:z,ref:_,mod:S,...De,...h,children:n.jsxs(L,{...E("inner"),mod:{"label-position":p},children:[n.jsx(L,{...E("radio",{focusable:!0,variant:z}),onChange:b,...O,...oe,component:"input",mod:{error:!!f},ref:t,id:re,disabled:x,type:"radio"}),n.jsx(R,{...E("icon"),"aria-hidden":!0})]})})});k.classes=Ae;k.displayName="@mantine/core/Radio";k.Group=ee;k.Card=Q;k.Indicator=te;const $t={margin:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"450px",textAlign:"left"};function Nt({title:e,imageUrl:t,description:r=[],button:o,color:i,navigation:s}){const a=Me();return n.jsxs(le,{style:$t,shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[n.jsx(le.Section,{children:n.jsx(Ye,{src:t||"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:250,width:"100%",alt:"Lokale image",style:{objectFit:"cover"}})}),n.jsx(_e,{justify:"space-between",mt:"md",mb:"xs",children:n.jsx(U,{fw:500,size:"18px",children:e})}),n.jsx(U,{size:"sm",mb:"md",children:r.length>0?r.map((c,g)=>n.jsx("li",{children:c},g)):null}),n.jsx(Ee,{color:i||"blue",fullWidth:!0,mt:"auto",radius:"md",onClick:()=>a.navigate({to:s}),children:o})]})}Nt.propTypes={title:I.string.isRequired,button:I.string.isRequired,color:I.string,navigation:I.string.isRequired,imageUrl:I.string,description:I.arrayOf(I.string)};const Lt={display:"flex",marginLeft:"24px",flexDirection:"column"};function Ot({setSelectedEtage:e}){return n.jsx("div",{style:Lt,children:n.jsx(k.Group,{name:"Etagevælger",label:"Etage",description:"Sorter efter den etage du vil være på",onChange:t=>e(t),children:n.jsxs(_e,{mt:"xl",style:{flexDirection:"column",justifyContent:"flex-start"},children:[n.jsx(k,{value:"1",label:"1. etage"})," ",n.jsx(k,{value:"2",label:"2. etage"})," ",n.jsx(k,{value:"3",label:"3. etage"}),n.jsx(k,{value:"4",label:"4. etage"})]})})})}const ye=Ke();function Vt(){const[e,t]=C.useState(!1),[r,o]=C.useState(""),[i,s]=C.useState(!1),[a,d]=C.useState(null),c=()=>{t(l=>!l),a&&d(null)},g=async()=>{s(!0);try{const{data:{user:l},error:m}=await ye.auth.getUser();if(m)throw new Error(m.message);if(!(l!=null&&l.id))throw new Error("User ID mangler eller er ugyldigt");const{error:p}=await ye.from("feedback").insert({username_id:l.id,hjælp_feedback:r,Email:l.email});if(p)throw new Error(p.message);d("Din besked er nu blevet sendt"),o(""),setTimeout(()=>{t(!1)},2e3)}catch(l){console.error("Fejl ved indsendelse af feedback:",l.message),d("Kunne ikke sende din besked. Prøv igen.")}finally{s(!1)}};return n.jsx(n.Fragment,{children:n.jsxs(V,{opened:e,onClose:()=>t(!1),position:"right",withArrow:!0,width:350,children:[n.jsx(V.Target,{children:n.jsx("div",{onClick:c,style:{position:"fixed",top:"75vh",right:"25px",padding:"20px",backgroundColor:"#228BE6",color:"white",fontSize:"18px",fontWeight:"bold",textAlign:"center",borderRadius:"8px",cursor:"pointer",zIndex:1e3},children:"Har du feedback?"})}),n.jsxs(V.Dropdown,{style:{backgroundColor:"#228BE6",padding:"20px",borderRadius:"8px"},children:[n.jsx("h2",{style:{color:"white",marginTop:"0",marginBottom:"10px"},children:"Del din feedback med os, så kigger vi på det"}),n.jsx(Z,{value:r,onChange:l=>o(l.target.value),placeholder:"Skriv din besked her...",style:{marginBottom:"12px"},autosize:!0,minRows:3,maxRows:6}),a&&n.jsx(U,{style:{color:a.includes("Kunne ikke")?"red":"white",marginBottom:"12px"},children:a}),n.jsx(Ee,{onClick:g,color:"green",fullWidth:!0,loading:i,children:"Send Besked"})]})]})})}export{Ot as E,Nt as F,X as G,Vt as H};
