import{c as te,f as O,a as Q,A as se,j as e,U as oe,J as X,T as ne,N as F,d as pe,r as T,B as G,e as re,K as ae,k as ce,g as ie,s as H,i as le,m as de,y as Se}from"./index-iQJgmkHA.js";import{C as me,g as ue}from"./CheckIcon-CI6uWo-h.js";const[ye,ge]=te("Stepper component was not found in tree"),z=()=>null;z.displayName="@mantine/core/StepperCompleted";var D={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};const P=(o,n)=>typeof o=="function"?e.jsx(o,{step:n||0}):o,ve={withIcon:!0,allowStepClick:!0,iconPosition:"left"},U=O((o,n)=>{const{classNames:r,className:a,style:d,styles:h,vars:C,step:m,state:c,color:f,icon:u,completedIcon:y,progressIcon:N,label:x,description:j,withIcon:k,iconSize:V,loading:A,allowStepClick:i,allowStepSelect:_,iconPosition:b,orientation:B,mod:L,...E}=Q("StepperStep",ve,o),s=ge(),R=se(),t={classNames:r,styles:h},I=c==="stepCompleted"?null:c==="stepProgress"?N:u,g={"data-progress":c==="stepProgress"||void 0,"data-completed":c==="stepCompleted"||void 0};return e.jsxs(oe,{...s.getStyles("step",{className:a,style:d,variant:s.orientation,...t}),mod:[{"icon-position":b||s.iconPosition,"allow-click":i},L],ref:n,...g,...E,__vars:{"--step-color":f?X(f,R):void 0},tabIndex:i?0:-1,children:[k&&e.jsxs("span",{...s.getStyles("stepWrapper",t),children:[e.jsxs("span",{...s.getStyles("stepIcon",t),...g,children:[e.jsx(ne,{mounted:c==="stepCompleted",transition:"pop",duration:200,children:w=>e.jsx("span",{...s.getStyles("stepCompletedIcon",{style:w,...t}),children:A?e.jsx(F,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...s.getStyles("stepLoader",t)}):P(y,m)||e.jsx(me,{size:"60%"})})}),c!=="stepCompleted"?A?e.jsx(F,{...s.getStyles("stepLoader",t),size:"calc(var(--stepper-icon-size) / 2)",color:f}):P(I||u,m):null]}),B==="vertical"&&e.jsx("span",{...s.getStyles("verticalSeparator",t),"data-active":c==="stepCompleted"||void 0})]}),(x||j)&&e.jsxs("span",{...s.getStyles("stepBody",t),"data-orientation":s.orientation,"data-icon-position":b||s.iconPosition,children:[x&&e.jsx("span",{...s.getStyles("stepLabel",t),children:P(x,m)}),j&&e.jsx("span",{...s.getStyles("stepDescription",t),children:P(j,m)})]})]})});U.classes=D;U.displayName="@mantine/core/StepperStep";const he={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},Ce=re((o,{color:n,iconSize:r,size:a,contentPadding:d,radius:h,autoContrast:C})=>({root:{"--stepper-color":n?X(n,o):void 0,"--stepper-icon-color":ue(C,o)?ae({color:n,theme:o,autoContrast:C}):void 0,"--stepper-icon-size":r===void 0?ce(a,"stepper-icon-size"):ie(r),"--stepper-content-padding":H(d),"--stepper-radius":h===void 0?void 0:le(h),"--stepper-fz":de(a),"--stepper-spacing":H(a)}})),p=O((o,n)=>{var $,J,K;const r=Q("Stepper",he,o),{classNames:a,className:d,style:h,styles:C,unstyled:m,vars:c,children:f,onStepClick:u,active:y,icon:N,completedIcon:x,progressIcon:j,color:k,iconSize:V,contentPadding:A,orientation:i,iconPosition:_,size:b,radius:B,allowNextStepsSelect:L,wrap:E,autoContrast:s,...R}=r,t=pe({name:"Stepper",classes:D,props:r,className:d,style:h,classNames:a,styles:C,unstyled:m,vars:c,varsResolver:Ce}),I=T.Children.toArray(f),g=I.filter(v=>v.type!==z),w=I.find(v=>v.type===z),Y=g.reduce((v,S,l)=>{const M=y===l?"stepProgress":y>l?"stepCompleted":"stepInactive",q=typeof u!="function"?!1:typeof S.props.allowStepSelect=="boolean"?S.props.allowStepSelect:M==="stepCompleted"||L;return v.push(T.cloneElement(S,{icon:S.props.icon||N||l+1,key:l,step:l,state:M,onClick:()=>q&&(u==null?void 0:u(l)),allowStepClick:q,completedIcon:S.props.completedIcon||x,progressIcon:S.props.progressIcon||j,color:S.props.color||k,iconSize:V,radius:B,iconPosition:S.props.iconPosition||_,orientation:i,unstyled:m})),i==="horizontal"&&l!==g.length-1&&v.push(T.createElement("div",{...t("separator"),"data-active":l<y||void 0,"data-orientation":i,key:`separator-${l}`})),v},[]),Z=(J=($=g[y])==null?void 0:$.props)==null?void 0:J.children,ee=(K=w==null?void 0:w.props)==null?void 0:K.children,W=y>g.length-1?ee:Z;return e.jsx(ye,{value:{getStyles:t,orientation:i,iconPosition:_},children:e.jsxs(G,{...t("root"),ref:n,size:b,...R,children:[e.jsx(G,{...t("steps"),mod:{orientation:i,"icon-position":_,wrap:E&&i!=="vertical"},children:Y}),W&&e.jsx("div",{...t("content"),children:W})]})})});p.classes=D;p.displayName="@mantine/core/Stepper";p.Completed=z;p.Step=U;function we({activeStep:o,setActiveStep:n}){const r=Se(),a=d=>{d===0?r(-1):n(d)};return e.jsx("div",{style:{margin:"40px auto",width:"70%",textAlign:"center"},children:e.jsxs(p,{active:o,onStepClick:a,styles:{stepLabel:{display:"none"},stepBody:{display:"none"}},children:[e.jsx(p.Step,{}),e.jsx(p.Step,{}),e.jsx(p.Step,{}),e.jsx(p.Step,{}),e.jsx(p.Completed,{})]})})}export{we as S};