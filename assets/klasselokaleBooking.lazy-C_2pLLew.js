import{x as f,v as u,r as s,w as h,j as e,G as j,t as k,B as y}from"./index-iQJgmkHA.js";import{H as C}from"./Header-CvdI1sdr.js";import{F as v}from"./FlashCard-D05FCoas.js";import{G as r,T as p,E as S}from"./EtageSelector-BfX8wgFP.js";import{S as B}from"./Steps-CKL2809s.js";import{H as E}from"./HelpModal-CceHZoza.js";import"./index-CzModJzh.js";import"./Image-7Ad-IBdz.js";import"./CheckIcon-CI6uWo-h.js";import"./InputsGroupFieldset-cfnGlr45.js";import"./Input-CBs9bcWv.js";import"./DirectionProvider-1GcpIyK8.js";import"./Popover-fNCNGFFI.js";import"./TextInput-BKG8JIip.js";import"./InputBase-CFpFSS-n.js";const L=f(),D=u("/klasselokaleBooking")({component:T});function T(){const[l,c]=s.useState([]),[a,m]=s.useState(""),[g,d]=s.useState(1),x=h();return s.useEffect(()=>{(async()=>{try{let o=L.from("lokale").select("id, lokalenr, lokaleimage, description, etage").eq("lokaletype","klasselokale").order("lokalenr",{ascending:!0});a&&(o=o.eq("etage",a));const{data:i,error:n}=await o;n?console.error("Error fetching lokaler:",n):(console.log(i),c(i))}catch(o){console.error("Unexpected error:",o)}})()},[a]),e.jsxs("div",{children:[e.jsx(C,{}),e.jsx("div",{style:{marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center"},children:e.jsxs(j,{position:"apart",style:{width:"100%"},children:[e.jsx(k,{variant:"light",onClick:()=>x.navigate({to:"/startBooking"}),style:{margin:"0 16px"},children:"Tilbage"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"90%"},children:e.jsx(B,{activeStep:g,setActiveStep:d})})]})}),e.jsxs(r,{gutter:"md",style:{alignItems:"flex-start"},children:[e.jsxs(r.Col,{span:10,children:[e.jsx(p,{order:1,align:"left",style:{marginBottom:"16px",marginLeft:"32px"},children:"Klasselokale"}),e.jsx(r,{gutter:"lg",children:l.length>0?l.map(t=>e.jsx(r.Col,{span:4,children:e.jsx(v,{title:`Lokale ${t.lokalenr}`,imageUrl:t.lokaleimage,description:t.description,button:"Vælg",navigation:`/bekræftBooking?lokalenr=${t.lokalenr}`})},t.id)):e.jsx(r.Col,{span:12,children:e.jsx(p,{order:3,align:"left",style:{color:"gray",marginTop:"24px",marginLeft:"32px"},children:"Ingen lokaler tilgængelig"})})})]}),e.jsx(r.Col,{span:2,children:e.jsx(y,{style:{marginTop:"16px"},children:e.jsx(S,{setSelectedEtage:m})})})]}),e.jsx(E,{})]})}export{D as Route};