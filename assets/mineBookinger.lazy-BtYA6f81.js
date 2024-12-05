import{j as e,M as w,G as B,p as x,x as b,r as s,v as E,w as S}from"./index-BltrHYVx.js";import{P as y,C as A,I as M,T as u}from"./index-D3QN1bZ2.js";import{H as z}from"./Header-FF9_8Hp5.js";import{F as R}from"./Footer-B3jsNOYK.js";function T({opened:t,onClose:l,onConfirm:g,title:i,bodyContent:a}){return e.jsxs(w,{opened:t,onClose:l,title:i,centered:!0,styles:{modal:{width:"500px"},closeButton:{right:"10px",top:"10px"}},children:[e.jsx("div",{style:{marginBottom:"20px"},children:a}),e.jsxs(B,{mt:"xl",justify:"flex-end",children:[e.jsx(x,{variant:"default",onClick:l,style:{marginRight:"10px"},children:"Annuller"}),e.jsx(x,{color:"red",onClick:g,children:"Bekræft"})]})]})}const D=b(),_={margin:"30px",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"left",textAlign:"left"},q={display:"flex",flexDirection:"column",padding:"0 20px",flex:1,alignItems:"left",textAlign:"left"},F={marginBottom:"30px",textAlign:"left",fontWeight:"bold",fontSize:"30px"};function L(){}function v({booking:t,onCancel:l}){const[g,i]=s.useState(!1),[a,r]=s.useState(!1),[p,h]=s.useState(null),n="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",o=()=>i(!0),c=()=>i(!1),d=()=>{i(!1),r(!0),l(t.id)},m=()=>r(!1);s.useEffect(()=>{t.lokale&&C(t.lokale)},[t.lokale]);const C=async I=>{try{const{data:f,error:j}=await D.from("lokale").select("lokaleimage").eq("lokalenr",I).single();if(j){console.error("Error fetching image:",j.message);return}f&&h(f.lokaleimage)}catch(f){console.error("Error fetching room image:",f.message)}};return e.jsxs(e.Fragment,{children:[e.jsxs(A,{style:_,shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[e.jsx("div",{style:{flex:"1"},children:e.jsx(M,{src:p||t.image_url||n,height:250,fit:"cover",alt:t.lokale||"Selected Room"})}),e.jsxs("div",{style:q,children:[e.jsx("div",{style:F,children:e.jsx(u,{fw:600,size:"30px",children:"Valgt Lokale"})}),e.jsxs("div",{children:[" ",e.jsxs(u,{size:"sm",c:"dimmed",mb:"sm",children:[e.jsx("b",{children:"Dato:"})," ",t.start_date||"Ikke angivet"]}),e.jsxs(u,{size:"sm",c:"dimmed",mb:"sm",children:[e.jsx("b",{children:"Tidspunkt:"})," ",t.start_time||"Ikke angivet"," - ",t.end_time||"Ikke angivet"]}),e.jsxs(u,{size:"sm",c:"dimmed",mb:"sm",children:[e.jsx("b",{children:"Lokale:"})," ",t.lokale||"Ikke angivet"]}),e.jsxs(u,{size:"sm",c:"dimmed",mb:"lg",children:[e.jsx("b",{children:"Antal personer:"})," ",t.number_of_people||"Ikke angivet"]})]}),e.jsx(x,{color:"red",fullWidth:!0,mt:"md",radius:"md",onClick:o,children:"Afmeld booking"})]})]}),e.jsx(T,{opened:g,onClose:c,onConfirm:d,title:"Er du sikker på, at du vil annullere din booking?",bodyContent:"Du skal bestille en ny tid, hvis du ombestemmer dig"}),e.jsx(L,{opened:a,onClose:m})]})}v.propTypes={booking:y.object.isRequired,onCancel:y.func.isRequired};const k=b(),P=E("/mineBookinger")({component:U});function U(){const[t,l]=s.useState([]),[g,i]=s.useState(!0),[a,r]=s.useState(null),p=S();s.useEffect(()=>{async function n(){try{const{data:{user:o},error:c}=await k.auth.getUser();if(c){console.error("Error fetching user:",c),r("Error fetching user");return}if(!o){r("No user logged in");return}console.log("Authenticated user:",o.id);const{data:d,error:m}=await k.from("bookings").select("*").eq("user_id",o.id);m?r("Error fetching bookings: "+m.message):d&&d.length===0?(console.log("Ingen bookinger fundet for denne bruger"),r("Ingen bookinger fundet")):l(d)}catch{r("An unexpected error occurred")}finally{i(!1)}}n()},[]);const h=async n=>{try{console.log("Attempting to delete booking with ID:",n);const{data:o,error:c}=await k.from("bookings").delete().eq("id",n);if(c){console.error("Error deleting booking:",c.message),r("Noget gik galt i afmeldingen ");return}console.log("Booking successfully canceled:",o),l(d=>d.filter(m=>m.id!==n))}catch(o){console.error("Unexpected error while canceling booking:",o),r("An unexpected error occurred while canceling the booking")}};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[" ",e.jsx(z,{}),e.jsxs("div",{style:{fontSize:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,textAlign:"center",overflowY:"auto",paddingBottom:"50px"},children:[e.jsx("h1",{children:"Mine Bookinger"}),g&&e.jsx("p",{children:"Indlæser bookinger..."}),a&&e.jsx("p",{style:{color:"red"},children:a}),t.length===0&&!g&&!a&&e.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:e.jsx("p",{children:"Ingen bookinger fundet"})}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",justifyItems:"center",margin:"20px"},children:t.length>0?t.map(n=>e.jsx(v,{date:n.date,booking:n,onCancel:h},n.id)):e.jsx("div",{style:{gridColumn:"2",textAlign:"center",marginTop:"20px"},children:e.jsx(x,{onClick:()=>p.navigate({to:"/startBooking"}),children:"Start Booking"})})})]}),e.jsx(R,{style:{position:"relative",bottom:0,width:"100%",backgroundColor:"white",zIndex:1e3}})]})}export{P as Route,U as default};
