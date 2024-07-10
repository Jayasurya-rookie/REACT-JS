import React from "react";

export default function Index() {
  return (
    <div className="container">
      <video autoPlay loop muted id="background-video">
        <source src="https://github.com/Jayasurya-rookie/Videos/raw/main/pink%20venom.mp4" />
      </video>

      <div className="login-container">
        <h1><a href="/login">LOGIN</a></h1>
        <br /><br />
        <h1><a href="/registration">REGISTER</a></h1>
      </div>
    </div>
  );
}
