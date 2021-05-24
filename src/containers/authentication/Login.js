import React from "react";
import "./Login.css"

function Login() {
  return (
    <div>
        <form onSubmit="event.preventDefault()" class="box">
            <h1>Login</h1>
            <p class="text-muted"> Please enter your credentials!</p>
              <input type="text" name="" placeholder="Email"/>
              <input type="password" name="" placeholder="Password"/>
              <input type="submit" name="" value="Login" href="#"/>
        </form>
    </div>
  );
}

export default Login;
