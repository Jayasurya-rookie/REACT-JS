
import axios from"axios";
import React, { useState } from "react";

//const baseURL="http://localhost:8080/call";
//const baseURLforpost="http://localhost:8080/testpost";
const baseURLforformpost="http://localhost:8080/postform";

const App =()=>{ 

/* const getDataFromBackend=async()=>{
    const response=await axios.get(baseURL);
    
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;

  };

  const data="hello";

  const postDataToBackend=async()=>{

    const response=await axios.post(baseURLforpost, {data,});
    
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;

  };*/

// post data form
  // const data="hello";
  

  const [songName,setsongName]=useState("");
  const [songArtist,setsongArtist]=useState("");



  const postFormToBackend=async()=>{
    const response=await axios.post(baseURLforformpost,{songName,songArtist});
    
    console.log(response.data);
   //document.getElementById("para").innerHTML=response.data;
   alert(response.data);

  };

return (
  <div className="App">


    

      <br/><br></br>
      <form onSubmit={postFormToBackend}>
        <label>SONG NAME</label>
        <input type="text" name="songName" value={songName} onChange={(e)=>setsongName(e.target.value)}></input>
      
      
      <br/><br></br>
      <label>ARTIST NAME</label>

        <input type="text" name="songArtist" value={songArtist} onChange={(e)=>setsongArtist(e.target.value)}></input>



        <input type="submit" value=" SUBMIT"></input>
      </form>

  </div>
);


};

export default App;