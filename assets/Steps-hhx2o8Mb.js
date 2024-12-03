import{c as te,f as O,a as Q,z as se,j as e,U as oe,H as X,T as ne,L as F,d as pe,r as T,B as G,e as re,J as ae,k as ce,g as ie,s as K,i as le,m as de,N as Se}from"./index-BepBHx-0.js";import{C as me,g as ue}from"./CheckIcon-zE-zTQ4N.js";const[ge,ve]=te("Stepper component was not found in tree"),z=()=>null;z.displayName="@mantine/core/StepperCompleted";var D={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};const P=(o,n)=>typeof o=="function"?e.jsx(o,{step:n||0}):o,ye={withIcon:!0,allowStepClick:!0,iconPosition:"left"},U=O((o,n)=>{const{classNames:p,className:r,style:d,styles:h,vars:C,step:m,state:a,color:f,icon:u,completedIcon:g,progressIcon:N,label:x,description:j,withIcon:k,iconSize:V,loading:A,allowStepClick:c,allowStepSelect:_,iconPosition:b,orientation:L,mod:B,...E}=Q("StepperStep",ye,o),s=ve(),R=se(),t={classNames:p,styles:h},I=a==="stepCompleted"?null:a==="stepProgress"?N:u,v={"data-progress":a==="stepProgress"||void 0,"data-completed":a==="stepCompleted"||void 0};return e.jsxs(oe,{...s.getStyles("step",{className:r,style:d,variant:s.orientation,...t}),mod:[{"icon-position":b||s.iconPosition,"allow-click":c},B],ref:n,...v,...E,__vars:{"--step-color":f?X(f,R):void 0},tabIndex:c?0:-1,children:[k&&e.jsxs("span",{...s.getStyles("stepWrapper",t),children:[e.jsxs("span",{...s.getStyles("stepIcon",t),...v,children:[e.jsx(ne,{mounted:a==="stepCompleted",transition:"pop",duration:200,children:w=>e.jsx("span",{...s.getStyles("stepCompletedIcon",{style:w,...t}),children:A?e.jsx(F,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...s.getStyles("stepLoader",t)}):P(g,m)||e.jsx(me,{size:"60%"})})}),a!=="stepCompleted"?A?e.jsx(F,{...s.getStyles("stepLoader",t),size:"calc(var(--stepper-icon-size) / 2)",color:f}):P(I||u,m):null]}),L==="vertical"&&e.jsx("span",{...s.getStyles("verticalSeparator",t),"data-active":a==="stepCompleted"||void 0})]}),(x||j)&&e.jsxs("span",{...s.getStyles("stepBody",t),"data-orientation":s.orientation,"data-icon-position":b||s.iconPosition,children:[x&&e.jsx("span",{...s.getStyles("stepLabel",t),children:P(x,m)}),j&&e.jsx("span",{...s.getStyles("stepDescription",t),children:P(j,m)})]})]})});U.classes=D;U.displayName="@mantine/core/StepperStep";const he={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},Ce=re((o,{color:n,iconSize:p,size:r,contentPadding:d,radius:h,autoContrast:C})=>({root:{"--stepper-color":n?X(n,o):void 0,"--stepper-icon-color":ue(C,o)?ae({color:n,theme:o,autoContrast:C}):void 0,"--stepper-icon-size":p===void 0?ce(r,"stepper-icon-size"):ie(p),"--stepper-content-padding":K(d),"--stepper-radius":h===void 0?void 0:le(h),"--stepper-fz":de(r),"--stepper-spacing":K(r)}})),l=O((o,n)=>{var $,H,J;const p=Q("Stepper",he,o),{classNames:r,className:d,style:h,styles:C,unstyled:m,vars:a,children:f,onStepClick:u,active:g,icon:N,completedIcon:x,progressIcon:j,color:k,iconSize:V,contentPadding:A,orientation:c,iconPosition:_,size:b,radius:L,allowNextStepsSelect:B,wrap:E,autoContrast:s,...R}=p,t=pe({name:"Stepper",classes:D,props:p,className:d,style:h,classNames:r,styles:C,unstyled:m,vars:a,varsResolver:Ce}),I=T.Children.toArray(f),v=I.filter(y=>y.type!==z),w=I.find(y=>y.type===z),Y=v.reduce((y,S,i)=>{const M=g===i?"stepProgress":g>i?"stepCompleted":"stepInactive",q=typeof u!="function"?!1:typeof S.props.allowStepSelect=="boolean"?S.props.allowStepSelect:M==="stepCompleted"||B;return y.push(T.cloneElement(S,{icon:S.props.icon||N||i+1,key:i,step:i,state:M,onClick:()=>q&&(u==null?void 0:u(i)),allowStepClick:q,completedIcon:S.props.completedIcon||x,progressIcon:S.props.progressIcon||j,color:S.props.color||k,iconSize:V,radius:L,iconPosition:S.props.iconPosition||_,orientation:c,unstyled:m})),c==="horizontal"&&i!==v.length-1&&y.push(T.createElement("div",{...t("separator"),"data-active":i<g||void 0,"data-orientation":c,key:`separator-${i}`})),y},[]),Z=(H=($=v[g])==null?void 0:$.props)==null?void 0:H.children,ee=(J=w==null?void 0:w.props)==null?void 0:J.children,W=g>v.length-1?ee:Z;return e.jsx(ge,{value:{getStyles:t,orientation:c,iconPosition:_},children:e.jsxs(G,{...t("root"),ref:n,size:b,...R,children:[e.jsx(G,{...t("steps"),mod:{orientation:c,"icon-position":_,wrap:E&&c!=="vertical"},children:Y}),W&&e.jsx("div",{...t("content"),children:W})]})})});l.classes=D;l.displayName="@mantine/core/Stepper";l.Completed=z;l.Step=U;function we({activeStep:o,setActiveStep:n}){const p=Se(),r=d=>{d===0?p(-1):n(d)};return e.jsx("div",{style:{margin:"40px auto",width:"70%",textAlign:"center"},children:e.jsxs(l,{active:o,onStepClick:r,styles:{stepLabel:{display:"none"},stepBody:{display:"none"}},children:[e.jsx(l.Step,{}),e.jsx(l.Step,{}),e.jsx(l.Step,{}),e.jsx(l.Completed,{})]})})}export{we as S};