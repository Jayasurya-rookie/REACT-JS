import React from "react";
import { Link } from "react-router-dom";
export default function Login(){

    return(
        <div>

            <form>
                <label>Email</label>
                <input type="email"></input>

                <br></br>
                <br></br>

                <label>Passowrd</label>
                <input type="password"></input>

                <br></br>
                <br></br>

                <button >
                    <Link to="/home">LOGIN</Link>
                    </button>
                  


            </form>
        </div>
    );
}