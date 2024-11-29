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
      <img src="/src/assets/image-2.webp" alt="" style={imageStyle} />
      <LoginForm2 />
      </div>
  );
}
