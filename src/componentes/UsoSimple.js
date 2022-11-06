import React, { useEffect, useState } from "react";

const UsoSimple = () => {

  const [mensaje, setMensaje] = useState("");
  const [cont, setCont] = useState(0);

  useEffect(()=>{


  },[mensaje]);

  return (
    <div>
      <h2>Ejemplo useEffect</h2>
      <p>{mensaje}</p>
     
       
      <input type="text" onChange={(e)=>{
          setMensaje(e.target.value)

      }}/> 

      <p> {cont}  </p>
      <button onClick={(e)=>{(setCont(cont + 1))}}>apreta</button>      
    </div>
  );
};

export default UsoSimple;
