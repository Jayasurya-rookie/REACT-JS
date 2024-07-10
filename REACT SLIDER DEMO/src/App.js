

import { useState } from "react";
import "./app.css";










function App(){
  const msg=["Page1","Page2", "Page3"];

  const [pg, setpg]=useState(1);

function handleNext(){
  if(pg==0){
    setpg(pg+1);

  }

 
}

function handlePrevious(){
  if(pg>0){
    setpg(pg-1);
  }


  
  

    // pg=pg-1;

  
  
}
  return(
    <div className="page">

      <div className="number">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>




      <div className="message">
        <p>{msg[pg]}</p>

      </div>


      <div className="buttons">
      <button onClick={handleNext}>Next</button>
      
        <button onClick={handlePrevious}>Previous</button>
    
      </div>


    </div>
  );
}



export default App;
