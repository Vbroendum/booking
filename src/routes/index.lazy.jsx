import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import LoginForm2 from '../components/LoginFormNew'

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  const imageStyle = {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  };



  return (
    <div style={{ display: "flex"}}>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: 'url("public/assets/image-2.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <LoginForm2 />
      </div>
  );
}
