import{x as f,v as h,r as s,w as u,j as e,G as j,p as k,B as y}from"./index-B2XcA1kM.js";import{H as v}from"./Header-CJvwtzlx.js";import{G as o,F as C,E as S,H as B}from"./HelpModal-BWmArm-L.js";import{S as E}from"./Steps-DO1iit0M.js";import{T as p}from"./Title-C-DqKGkD.js";import"./index-8fLVbOfZ.js";import"./CheckIcon-cVN4vwx7.js";import"./InputsGroupFieldset-DOmPIA1B.js";import"./InputBase-DyzxyKBV.js";import"./Popover-CtJCK48I.js";const L=f(),z=h("/diverseBooking")({component:b});function b(){const[n,c]=s.useState([]),[i,d]=s.useState(""),[g,x]=s.useState(1),m=u();return s.useEffect(()=>{(async()=>{try{let r=L.from("lokale").select("id, lokalenr, lokaleimage, description, etage").eq("lokaletype","diverse").order("lokalenr",{ascending:!0});i&&(r=r.eq("etage",i));const{data:a,error:l}=await r;l?console.error("Error fetching lokaler:",l):(console.log(a),c(a))}catch(r){console.error("Unexpected error:",r)}})()},[i]),e.jsxs("div",{children:[e.jsx(v,{}),e.jsx("div",{style:{marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center"},children:e.jsxs(j,{position:"apart",style:{width:"100%"},children:[e.jsx(k,{variant:"light",onClick:()=>m.navigate({to:"/startBooking"}),style:{margin:"0 16px",position:"absolute"},children:"Genstart booking"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:e.jsx(E,{activeStep:g,setActiveStep:x})})]})}),e.jsxs(o,{gutter:"md",style:{alignItems:"flex-start",overflowX:"hidden",overflowY:"hidden"},children:[e.jsxs(o.Col,{span:10,children:[e.jsx(p,{order:1,align:"left",style:{marginBottom:"16px",marginLeft:"32px"},children:"Diverse lokaler"}),e.jsx(o,{gutter:"lg",children:n.length>0?n.map(t=>e.jsx(o.Col,{span:4,children:e.jsx(C,{title:`Lokale ${t.lokalenr}`,imageUrl:t.lokaleimage,description:t.description,button:"Vælg",navigation:`/bekræftBooking?lokalenr=${t.lokalenr}`})},t.id)):e.jsx(o.Col,{span:12,children:e.jsx(p,{order:3,align:"left",style:{color:"gray",marginTop:"24px",marginLeft:"32px"},children:"Ingen lokaler tilgængelig"})})})]}),e.jsx(o.Col,{span:2,children:e.jsx(y,{style:{position:"sticky",top:"16px"},children:e.jsx(S,{setSelectedEtage:d})})})]}),e.jsx(B,{})]})}export{z as Route};
