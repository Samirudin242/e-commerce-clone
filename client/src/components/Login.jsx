import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./style/login.css";




function Login(props) {
  const { closePage } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password == "" || email == "";


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
          <label for="email">Email</label>
          <input onChange={({target}) => setEmail(target.value)} id="email" type="text" className="" />
          <p>Contoh: email@tokopedia.com</p>
        </div>
        <div className="password-form">
          <label htmlFor="password">Kata Sandi</label>
          <input onChange={({target}) => setPassword(target.value)} id="password" type="password" className="" />
        </div>
      </div>
        <button disabled={isInvalid} className={`button-login-form ${isInvalid && 'disabled'}`}>Masuk</button>
    </div>
  );
}

export default Login;
