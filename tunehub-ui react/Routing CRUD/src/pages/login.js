import React from "react";
export default function Login(){
    return(
        <div>

            <form action="validate" method="POST">
<h2>USER LOGIN:</h2>
<label>Email:</label><br></br>
<input type="email" name="email" ></input>
<br></br>

<label>Password:</label><br></br>
<input type="password" name="password" />
<br></br>

<input type="submit" value="LOGIN"></input>
</form>

        </div>

    );

}