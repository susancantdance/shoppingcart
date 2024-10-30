import { App } from "../App";
import { Content } from "./content.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  { path: "content/:name", element: <Content /> },
];

export { routes };
