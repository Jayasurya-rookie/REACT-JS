import React from "react";

export default function Registration(){
    return (
        <div>
            <h1>Registration Form</h1>

<form action="register" method="POST">
<label >Username:</label><br/>
<input type="text" name="username" required></input>
<br/><br/>

<label>Email:</label><br/>
<input type="email" name="email" ></input>
<br/><br/>

<label>Password:</label><br/>
<input type="password" name="password"></input>
<br/><br/>

<label>Gender:</label><br/>
Male<input type="radio" value="male" name="gender"></input>
Female<input type="radio" value="female" name="gender"></input>
Other<input type="radio" value="other" name="gender"></input>
<br/><br/>

<label >Role:</label><br/>
Admin<input type="radio" name="role" value="admin"></input>
Customer<input type="radio"  name="role" value="customer"></input>
<br/><br/>

<label>Address:</label><br/>
<textarea name="address"></textarea>
<br/><br/>

<input type="submit" value="SUBMIT"></input>

</form>
        </div>
    );
};