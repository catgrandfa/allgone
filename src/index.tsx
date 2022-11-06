import * as React from "react";
import { render } from "react-dom";
import indexImage from "@assets/img/IMG44.jpg";
interface Iprops {
  children: string;
}
function App(props: Iprops) {
  return (
    <>
      <h1>{props.children}</h1>
      <img src={indexImage} alt="" />
    </>
  );
}
render(<App>hello TypeScript!</App>, document.getElementById("root"));
