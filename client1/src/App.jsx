import { useState } from "react";

import Btn from "./components/btn";
function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className="flex gap-4 h-screen justify-center items-end" style={{backgroundColor:color}}>
        <Btn color="red" bgc="red" onClick={()=> setColor("red")}/>
        <Btn color="blue" bgc="blue" onClick={()=> setColor("blue")} />
        <Btn color="green" bgc="green" onClick={()=> setColor("green")}/>
        <Btn color="pink" bgc= "pink" onClick={()=> setColor("pink")}/>
        <Btn color="yellow" bgc="yellow" onClick={()=> setColor("yellow")} />
      </div>
    </>
  );
}

export default App;
