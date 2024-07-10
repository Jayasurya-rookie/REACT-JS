import React from "react";
import { Link } from "react-router-dom";

export default function Customer(){
    return (
        <div>
            <p>Customer Home</p>
            <Link to="/viewsongs">View Songs</Link>
            
        </div>
    );
}
