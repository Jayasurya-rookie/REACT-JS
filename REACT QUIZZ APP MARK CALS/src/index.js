import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <App />
);
function App(){
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header(){
  return <header>Header</header>
}
function Footer(){
  
  return (<footer>Footer</footer>);
  
}
function Content(){
  function getResults(event){
    let marks=0;
    let a = event.target.q1.value;
    let b = event.traget.q2.vaalue;
    if(a==="A. java is OOPS"){
      marks++;


    }
    if(b==="A. java is OOPS"){
      marks++;

    }
    alert("marks is" + marks);


  }
  return (

    <form>
    <div onSubmit={getResults()}>
    <Question name="q1" q1="1.What is JAVA?" op1="A. java is OOPS" op2="B. Java is OFFS" />
    <Question name="q2" q1="1.What is J?" op1="A. java is OOPS" op2="B. Java is OFFS" />
    <br></br>
    <input type="submit" value="SUBMIT"></input>
    <br></br>
    </div>
    </form>
  );
}

function Question(props){
  return (
    <div>
    <h3>{props.q1}</h3>
     <label> <input type="radio" name={props.name}></input>{props.op1}</label>
     <label> <input type="radio" name={props.name}></input>{props.op2}</label>
     
     
     </div>
  );
}