import React, { useEffect, useState, useContext } from "react";
import {gql, useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import logo from "../image/tokopedia.png";

import "./style/register.css";
import { AuthContext } from "../context/auth";

const REGISTER_USER = gql`
  mutation register($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      id
      email
      name
      token
      location
    }
  }
`;


function Register() {

    const context = useContext(AuthContext);
    const history = useHistory()
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isInvalid = name === "" || location === "" || email === "" || password === "";

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
      update(_, {data: {register: newUser}}) {
        context.login(newUser)
        history.push("/")
      },
      variables: { 
      registerInput: {
        name: name,
        password: password,
        email: email,
        location: location,
      }
    }
    })

  useEffect(() => {
    document.title = "Daftar | React App";
  },[]);

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  }

  return (
    <div className="register">
      <img src={logo} width="155" height="55" />
      <div className="register-form">
        <div className="logo">
          <img
            src="https://ecs7.tokopedia.net/img/content/register_new.png"
            width="355"
            height="300"
          />
          <p>Jual Beli Mudah Hanya di Tokopedia</p>
          <p>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
        </div>
        <div className="form-register">
          <form onSubmit={onSubmit}>
            <p>Daftar Sekarang</p>
            <div className="form-register-label">
              <label htmlFor="name">Nama</label>
              <input onChange={({target}) => setName(target.value)} id="name" type="text" />
            </div>
            <div className="form-register-label">
              <label htmlFor="location">Lokasi</label>
              <input onChange={({target}) => setLocation(target.value)} id="location" type="text" />
            </div>
            <div className="form-register-label">
              <label htmlFor="email">Email</label>
              <input onChange={({target}) => setEmail(target.value)} id="email" type="text" />
            </div>
            <div className="form-register-label">
              <label htmlFor="password">Password</label>
              <input onChange={({target}) => setPassword(target.value)} id="password" type="text" />
            </div>
            <button type="submit" disabled={isInvalid} className={`button-login-form ${isInvalid && 'disabled'}`}>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
