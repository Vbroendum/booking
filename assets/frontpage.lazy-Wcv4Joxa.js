import{w as u,j as e,G as g,p as m,v as x}from"./index-BltrHYVx.js";import{H as b}from"./Header-FF9_8Hp5.js";import{F as h}from"./Footer-B3jsNOYK.js";import{P as t,C as i,I as j,T as n}from"./index-D3QN1bZ2.js";const f={margin:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"370px",textAlign:"left",maxWidth:"333px"};function o({title:s,imageUrl:r,description:l,buttonText:a,color:c,navigation:d}){const p=u();return e.jsxs(i,{style:f,shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[e.jsx(i.Section,{children:e.jsx(j,{src:r||"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:250,width:"100%",alt:"Lokale billede",style:{objectFit:"cover"}})}),e.jsx(g,{justify:"space-between",mt:"md",mb:"xs",children:e.jsx(n,{fw:500,size:"18px",children:s})}),e.jsx(n,{size:"sm",mb:"md",c:"dimmed",children:l}),e.jsx(m,{color:c||"blue",fullWidth:!0,mt:"auto",radius:"md",onClick:()=>p.navigate({to:d}),styles:{root:{color:"white"}},children:a})]})}o.propTypes={title:t.string.isRequired,buttonText:t.string.isRequired,color:t.string,navigation:t.string.isRequired,imageUrl:t.string};const R=x("/frontpage")({component:y});function y(){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[e.jsx(b,{}),e.jsxs("div",{style:{fontSize:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,textAlign:"center"},children:[e.jsx("h1",{children:"Book et lokale eller se dine bookinger."}),e.jsxs("div",{style:{display:"flex",gap:"150px",justifyContent:"space-evenly"},children:[e.jsx(o,{title:"Se dine bookinger",imageUrl:"https://epgjtuypadrnxeldurle.supabase.co/storage/v1/object/public/lokale-images/gruppelokale.webp?",button:"Se bookinger",color:"blue",navigation:"/mineBookinger",buttonText:"Se booking"}),e.jsx(o,{title:"Book et lokale",imageUrl:"https://epgjtuypadrnxeldurle.supabase.co/storage/v1/object/public/lokale-images/gruppelokale.webp",button:"Book",color:"green",navigation:"/startBooking",buttonText:"Book"})]})]}),e.jsx(h,{style:{position:"relative",bottom:0,width:"100%",backgroundColor:"white",zIndex:1e3}})]})}export{R as Route};
