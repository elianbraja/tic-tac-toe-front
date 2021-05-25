import React, { useState } from 'react';
import "./Login.css"
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useHistory } from "react-router-dom";
import LOGIN_USER_MUTATION from '../../mutations/user/LoginUser'
import CURRENT_USER from '../../queries/user/CurrentUser'

function Login() {
  let history = useHistory();
  const initialValues = {
    email: "",
    password: ""
  };

const [loginUser, { data }] = useMutation(LOGIN_USER_MUTATION);
const {data:current_user, refetch} = useQuery(CURRENT_USER)

const [values, setValues] = useState(initialValues);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
        <form onSubmit={e => {
          e.preventDefault();
          loginUser({ variables: {
            email: values.email,
            password: values.password
          }}).then(
              result => {
                const token = result.data.loginUser.token;
                localStorage.setItem("token", token);
                history.push('/playground', result.data.loginUser)
              },
            ).catch(
              error => {
                console.log("error: " + error)
              }
            );;;
        }} className="box">
            <h1>Login</h1>
            <p className="text-muted"> Please enter your credentials!</p>
              <input
                value={values.email}
                onChange={handleInputChange}
                type="text"
                name="email"
                placeholder="Email"
              />
              <input
                value={values.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <input type="submit" name="" value="Login" href="#"/>
        </form>
    </div>
  );
}

export default Login;
