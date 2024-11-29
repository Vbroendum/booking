import{x as f,v as u,r as n,w as h,j as e,G as j,t as k,B as y}from"./index-CXjBbQzF.js";import{H as C}from"./Header-CyqWUQK3.js";import{F as S}from"./FlashCard-Cv_NlZlA.js";import{G as r,T as p,E as v}from"./EtageSelector-BkD8O_Fd.js";import{S as B}from"./Steps-_m4Rbzx9.js";import"./index-TI660OPv.js";import"./Image-CNtRjy3D.js";import"./CheckIcon-ClX7yRcP.js";import"./InputsGroupFieldset-CBplD0rl.js";import"./Input-CKrExrIw.js";import"./DirectionProvider-3vufNb6H.js";const E=f(),z=u("/openlearningBooking")({component:L});function L(){const[i,c]=n.useState([]),[s,g]=n.useState(""),[d,m]=n.useState(1),x=h();return n.useEffect(()=>{(async()=>{try{let o=E.from("lokale").select("id, lokalenr, lokaleimage, description, etage").eq("lokaletype","openlearning").order("lokalenr",{ascending:!0});s&&(o=o.eq("etage",s));const{data:a,error:l}=await o;l?console.error("Error fetching lokaler:",l):(console.log(a),c(a))}catch(o){console.error("Unexpected error:",o)}})()},[s]),e.jsxs("div",{children:[e.jsx(C,{}),e.jsx("div",{style:{marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center"},children:e.jsxs(j,{position:"apart",style:{width:"100%"},children:[e.jsx(k,{variant:"light",onClick:()=>x.navigate({to:"/startBooking"}),style:{margin:"0 16px"},children:"Tilbage"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"90%"},children:e.jsx(B,{activeStep:d,setActiveStep:m})})]})}),e.jsxs(r,{gutter:"md",style:{alignItems:"flex-start"},children:[e.jsxs(r.Col,{span:10,children:[e.jsx(p,{order:1,align:"left",style:{marginBottom:"16px",marginLeft:"32px"},children:"Open learning Lokale"}),e.jsx(r,{gutter:"lg",children:i.length>0?i.map(t=>e.jsx(r.Col,{span:4,children:e.jsx(S,{title:`Lokale ${t.lokalenr}`,imageUrl:t.lokaleimage,description:t.description,button:"Vælg",navigation:`/bekræftBooking?lokalenr=${t.lokalenr}`})},t.id)):e.jsx(r.Col,{span:12,children:e.jsx(p,{order:3,align:"left",style:{color:"gray",marginTop:"24px",marginLeft:"32px"},children:"Ingen lokaler tilgængelig"})})})]}),e.jsx(r.Col,{span:2,children:e.jsx(y,{style:{position:"sticky",top:"16px"},children:e.jsx(v,{setSelectedEtage:g})})})]})]})}export{z as Route};