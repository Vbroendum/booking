import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import TimeSelect from "../components/timeSelect";


export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const context = useRouteContext({ from: "/about" });
  console.log(context);

  return <div>
    Hello from About!
  </div>;
}
