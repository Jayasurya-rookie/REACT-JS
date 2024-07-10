import React from "react";


export default function Admin(){
    return (<div>
       
            
<header>Admin Home</header>

<div  >
<form action="newsong" >

<input type="submit" value="ADD SONGS" />
</form>

<br/><br/>

<form action="viewsongs" method="GET">

<input type="submit" value="VIEW SONGS"/>
</form>


<br/><br/>

<form action="createplaylists" method="GET">

<input type="submit" value=" CREATE PLAY LIST"/>
</form>


<br/><br/>
<form action="viewplaylist" method="GET">

<input type="submit" value="VIEW PLAY LIST" />
</form>

<br/><br/>
<form action="/logout" method="GET">

<input type="submit" value="LOG OUT"/>


</form>
</div>
        </div>
    );
};