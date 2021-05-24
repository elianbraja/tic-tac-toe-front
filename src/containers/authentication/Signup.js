import React from "react";
import "./Login.css"

function Signup() {
  return (
    <div>
        <form onSubmit="event.preventDefault()" class="box">
            <h1>Sign up</h1>
            <p class="text-muted"> Please enter your data!</p>
              <input type="text" name="" placeholder="First Name"/>
              <input type="text" name="" placeholder="Last Name"/>
              <input type="text" name="" placeholder="Email"/>
              <input type="password" name="" placeholder="Password"/>
              <input type="password" name="" placeholder="Retype Password"/>
              <input type="submit" name="" value="Sign up" href="#"/>
        </form>
    </div>
  );
}

export default Signup;
