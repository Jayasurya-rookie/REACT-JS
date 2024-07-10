import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/indexpage.css";

export default function Indexpage(){
    return(
        <div>
             <button>
                <Link to="/registration">Registration</Link>
               

                </button>

             <br></br>
             <br></br>
             
             <button>
             <Link to="/login">Login</Link>
                
                </button>
          

        </div>
    );
}