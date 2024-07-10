import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<div>
<App/>
  </div>
);
function App(){
  return(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header(){
  return (<header>REACT JS MCQ QUESTIONS</header>);
}
function Footer(){
  return(<footer></footer>);
}

function Content(){
  
  return (
    <form>
    <div>
      <Question q1="1.What is React?" 
      op1="A. A programming language"
      op2="B. A front-end JavaScript library for building user interfaces"
      op3="C. A database management system"
      op4="D. An operating system" name="q1"/>

      <Question q1="2.What does JSX stand for in React?" 
      op1="A. JavaScript XML"
      op2="B. Java Serialized XML"
      op3="C. JSON XML"
      op4="D. JavaScript Extension" name="q2"/>

      <Question q1="3.Which lifecycle method is invoked immediately after a component is inserted into the DOM?" 
      op1="A. componentDidMount"
      op2="B. componentWillMount"
      op3="C. componentDidUpdate"
      op4="D. componentWillUnmount" name="q3"/>

      
    <Question q1="4.In React, what is the purpose of setState() method?" 
      op1="A. To update the component's state and re-render the component"
      op2="B. To fetch data from an external API"
      op3="C.  To update the component's props"
      op4="D. To define initial state of the component" name="q4"/>

      <Question q1="5.What is the purpose of React Router?" 
      op1="A. To manage state in React components"
      op2="B. To handle server-side routing in Node.js applications"
      op3="C.  To perform client-side routing in React applications"
      op4="D. To connect React applications with databases" name="q5"/>

      <Question q1="6.What is a higher-order component (HOC) in React?" 
      op1="A. A component that renders another component"
      op2="B. A component that receives props and returns a new component"
      op3="C. A component that manages state using Redux"
      op4="D. A component that contains only HTML elements" name="q6"/>

      <Question q1="7.What is the purpose of the key attribute in React lists?" 
      op1="A.  It specifies a unique identifier for a component"
      op2="B.  It specifies the position of the component in the DOM"
      op3="C.  It is used to define the component's lifecycle methods"
      op4="D.  It is a reserved keyword in React" name="q7"/>

      <Question q1="8.What is the purpose of the ref attribute in React?" 
      op1="A. It is used to reference external JavaScript libraries"
      op2="B.  It is used to reference a DOM element or a class component instance"
      op3="C. It is used to define React component properties"
      op4="D.  It is a reserved keyword in React for asynchronous operations" name="q8"/>

      <Question q1="9.What does Redux offer in a React application?" 
      op1="A. State management"
      op2="B. Server-side rendering"
      op3="C.  Component styling"
      op4="D.  Routing" name="q9"/>
      <Question q1="10.What is the purpose of the shouldComponentUpdate() method in React?" 
      op1="A. To update the component's state"
      op2="B. To determine if the component should re-render"
      op3="C. To handle user events"
      op4="D. To fetch data from an external API" name="q10"/>
    </div>



    <br/>
    <button style={{backgroundColor:"pink",alignItems:"center"}} 
    type='submit'>SUBMIT THE QUIZZ</button>
    <br/>
    <br/>

    </form>
  );
}
function Question(props){
  return (
    <div>
      <h3>{props.q1}</h3>
      <input type='radio' name={props.name} value={props.op1}></input><label>{props.op1}</label><br/>
      <input type='radio' name={props.name} value={props.op2}></input><label>{props.op2}</label><br/>
      <input type='radio' name={props.name} value={props.op3}></input><label>{props.op3}</label><br/>
      <input type='radio' name={props.name} value={props.op4}></input><label>{props.op4}</label><br/>

    </div>
  );
}


// style={{backgroundColor:"red",color:"white"}}