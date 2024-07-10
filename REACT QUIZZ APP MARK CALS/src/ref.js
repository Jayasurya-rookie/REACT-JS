
function Header(){
    return (
    <div>  <header>Header</header></div>);
  
  }
  function Footer(){
    return (
    <footer> Footer</footer>);
  }
  function Question(props){
    return (<div>
      <h1 className='q1' >{props.que1}</h1>
      
      <label ><input type="radio" name={props.name}></input>{props.op1}</label>
      <label> <input type="radio" name={props.name}></input>{props.op2}</label>
      <label> <input type="radio" name={props.name}></input>{props.op3}</label>
      <label> <input type="radio" name={props.name}></input>{props.op3}</label>
        
    
      
      </div>);
  }
  function Content(){
    return (
  
    // <div className="content" style={{backgroundColor:'blue',color:'yellow'}}>
    <form>
    <div className="content">
      <Question name="q1"que1="1.What is java?"op1="a. java is OOPS"op2="b. java is SCRIPT lang"op3="c. java is Methods lang"op4="d. java is OOFS"/>
      <Question name="q2"  que1="2.What is Python?"op1="a. python is OOPS"op2="b. python is SCRIPT lang" op3="c. python is Methods lang"op4="d. python is Database lang"/>
      <Question name="q3"que1="1.What is java?"op1="a. java is OOPS"op2="b. java is SCRIPT lang"op3="c. java is Methods lang"op4="d. java is OOFS"/>
      <Question name="q4" que1="2.What is Python?"op1="a. python is OOPS"op2="b. python is SCRIPT lang" op3="c. python is Methods lang"op4="d. python is Database lang"/>
       </div>
      <br></br>
    
      <input type="submit" value="submit the quiz"></input>
  
      <br></br>
      
   
      </form>
      
      
      
      
      );
  
  
  
  
  }
  
  
  
  