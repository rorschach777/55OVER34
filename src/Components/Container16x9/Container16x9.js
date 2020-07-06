import React from "react";
import "./Container16x9.scss";
const Container16x9 = (props) => {
  return (
    <div className="Container-16x9">
   
          {props.children}

    </div>
  );
};
export default Container16x9;
