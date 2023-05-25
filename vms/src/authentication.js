import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./nav.js";
import axios from "axios";
function Login() {
  const [send,setSend] = useState({
    username:"",
    password:"",

})

const handleChange = (e) => {
    setSend((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
}

const postSubmit = (e) =>{
   e.preventDefault()
   axios.post('http://localhost:4000/postlogin',{send}).then((response)=>{
    console.log(response)
      if(response.data.users.length > 0){
        alert("success");
        window.location.href='/dashboard'
      }else{
        alert("falied.")
      }
   })
  
}


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // console.log(uname.value, pass.value)
   


    // const userData = database.find((user) => user.username === uname.value);

    // if (userData) {
    //   if (userData.password !== pass.value) {
        
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
      
    //   setErrorMessages({ name: "uname", message: errors.uname });
    //}
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label for="id1">Username</label>
          <input type="text" name="username" onChange={handleChange} id="id1" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label for="id2">Password </label>
          <input type="password" name="password" onChange={handleChange} id="id2"required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" onClick={postSubmit} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <h1>Face recognition and Student portal</h1>
      <div className="login-form">
        <div className="title"><b>Login</b></div>
        {isSubmitted ? <div></div> : renderForm}
      </div>
    </div>
  );
}

export default Login;