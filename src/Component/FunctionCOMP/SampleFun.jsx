import React, { useState } from "react";

function SampleFun(props) {
  const [count, setcount] = useState(0);
  const  handleadd=()=>
{
    setcount(count+1)
};
  return (
    <div>
      <h1>Movie : {props.movieName}</h1>
      <h3>Ticketcount : {count}</h3>
      <button  onClick={handleadd}>ADD</button>
    </div>
  );
}

export default SampleFun;
