import React, { useState,  useContext } from "react";
import {gql, useMutation} from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {AuthContext} from "../context/auth";
import "./style/login.css";

const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      name
      email
      token
      location
    }
  }
`



function Login(props) {
  const { closePage } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthContext);

  const [loginUser, {loading}] = useMutation(LOGIN_USER, {
    update(_, {data: {login: userData}}) {
      console.log(userData, ",<<<<<")
      context.login(userData)
      history.push("/")
      closePage();
    }, 
    variables: {
      email,
      password
    }
  })


  const isInvalid = password == "" || email == "";

  function login() {
    console.log("tesss")
    loginUser();
  }

  return (
    <div className="login">
      <IoMdClose onClick={closePage} size={25} className="icon" />
      <div className="login-top">
        <p>Masuk</p>
        <Link to="/register" className="daftar" >
          <p>Daftar</p>
        </Link>
      </div>
      <div className="login-form">
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={({target}) => setEmail(target.value)} id="email" type="text" className="" />
          <p>Contoh: email@tokopedia.com</p>
        </div>
        <div className="password-form">
          <label htmlFor="password">Kata Sandi</label>
          <input onChange={({target}) => setPassword(target.value)} id="password" type="password" className="" />
        </div>
      </div>
        <button onClick={login} disabled={isInvalid} className={`button-login-form ${isInvalid && 'disabled'}`}>Masuk</button>
    </div>
  );
}

export default Login;
