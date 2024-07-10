import React from "react";
import { Link } from "react-router-dom";
export default function Registration(){

    return(
        <div>

            <form>
                <label>User Name</label>
                <input type="text"></input>
              <br></br>
              <br></br>

                <label>Email</label>
                <input type="email"></input>
                <br></br>
                <br></br>
            

                <button>
                    <Link to="/login">SUBMIT</Link></button>


            </form>
        </div>
    );
}