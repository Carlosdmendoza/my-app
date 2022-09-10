import React from 'react';
import './Login.css';

function LoginForm() {
  return (
    <div className="Login-Main-Container">
      <header className="Login-Header">
        <h1> Design Systems To Do</h1>
        <p>
          A basic To do application to show the power of design system
        </p>
  
      </header>
     
      <div className= "Secondary-Form">
      

      <form className="Form-Elements">
             <label className = "form-field" htmlFor="email">Email:</label> <br></br>
             <input className = "form-text" placeholder="you@awesome.com" type="text" id="email" name="email"></input><br></br>
             <label className = "form-field2" htmlFor="pwd">Password:</label> <br></br>
             <input className = "form-text" placeholder= "Password" type="password" id="pwd" name="pwd"></input> <br></br>
             
             <input className = "form-checkout" type="checkbox" id="remember" name="Remember" value="remember"></input> 
             <label htmlFor="remember"> Remember Me </label><br></br>

             <button className= "form-button" type="submit" form="nameform" value="Submit"> Login  </button>
       </form>
     
      </div>


    </div>
   
  );
}

export default LoginForm;