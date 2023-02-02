import React, { useEffect } from "react";
import { useState } from "react";

function Button(props) {
  const [myClass, setMyClass] = useState("nothing here");
  console.log(myClass);
  console.log(props);
  useEffect(() => {
    setMyClass(props.style);
    console.log(props.style);
  }, [props]);

  return (
    <div>
      <button className={`btn ${props.style}`}>
        {myClass != "" ? myClass : "choose a style"}
      </button>
    </div>
  );
}

export default Button;
