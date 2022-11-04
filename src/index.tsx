import React from "react";

const Comp = () => {
  const list: string[] = ["1", "abc"];
  let peekValue: any;
  peekValue = list.pop();
  return <>这是COMP组件{peekValue}</>;
};

export default Comp;
