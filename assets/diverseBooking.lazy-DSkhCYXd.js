import{x as f,v as u,r as s,w as h,j as e,G as j,t as k,B as y}from"./index-iQJgmkHA.js";import{H as v}from"./Header-CvdI1sdr.js";import{F as C}from"./FlashCard-D05FCoas.js";import{G as r,T as c,E as S}from"./EtageSelector-BfX8wgFP.js";import{S as B}from"./Steps-CKL2809s.js";import"./index-CzModJzh.js";import"./Image-7Ad-IBdz.js";import"./CheckIcon-CI6uWo-h.js";import"./InputsGroupFieldset-cfnGlr45.js";import"./Input-CBs9bcWv.js";import"./DirectionProvider-1GcpIyK8.js";const E=f(),z=u("/diverseBooking")({component:L});function L(){const[a,p]=s.useState([]),[i,d]=s.useState(""),[g,m]=s.useState(1),x=h();return s.useEffect(()=>{(async()=>{try{let o=E.from("lokale").select("id, lokalenr, lokaleimage, description, etage").eq("lokaletype","diverse").order("lokalenr",{ascending:!0});i&&(o=o.eq("etage",i));const{data:n,error:l}=await o;l?console.error("Error fetching lokaler:",l):(console.log(n),p(n))}catch(o){console.error("Unexpected error:",o)}})()},[i]),e.jsxs("div",{children:[e.jsx(v,{}),e.jsx("div",{style:{marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center"},children:e.jsxs(j,{position:"apart",style:{width:"100%"},children:[e.jsx(k,{variant:"light",onClick:()=>x.navigate({to:"/startBooking"}),style:{margin:"0 16px"},children:"Tilbage"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",width:"90%"},children:e.jsx(B,{activeStep:g,setActiveStep:m})})]})}),e.jsxs(r,{gutter:"md",style:{alignItems:"flex-start"},children:[e.jsxs(r.Col,{span:10,children:[e.jsx(c,{order:1,align:"left",style:{marginBottom:"16px",marginLeft:"32px"},children:"Diverse lokaler"}),e.jsx(r,{gutter:"lg",children:a.length>0?a.map(t=>e.jsx(r.Col,{span:4,children:e.jsx(C,{title:`Lokale ${t.lokalenr}`,imageUrl:t.lokaleimage,description:t.description,button:"Vælg",navigation:`/bekræftBooking?lokalenr=${t.lokalenr}`})},t.id)):e.jsx(r.Col,{span:12,children:e.jsx(c,{order:3,align:"left",style:{color:"gray",marginTop:"24px",marginLeft:"32px"},children:"Ingen lokaler tilgængelig"})})})]}),e.jsx(r.Col,{span:2,children:e.jsx(y,{style:{position:"sticky",top:"16px"},children:e.jsx(S,{setSelectedEtage:d})})})]})]})}export{z as Route};