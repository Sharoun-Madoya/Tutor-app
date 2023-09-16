import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState(""); // define the variable and its setter function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email: ", email, " password: ", pass);
  };
  const navigate = useNavigate();
  function handleClick (){
    navigate("/")
  }
  return (
    
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
            <h1>LOG IN</h1>
        <label htmlFor="email">email</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          required
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          value={pass}
          onChange={(event) => setPass(event.target.value)} // use the setter function to update the state
          name="pass"
          required
        />
        <button onClick={handleClick} type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;