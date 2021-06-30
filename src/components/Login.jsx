import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="container">
      <section className="container-login">
        <h2 className="login-title">Iniciar Sesion</h2>
        <div className="login-line"></div>
        <div className="login">
          <form action="">
            <label className="login-label" htmlFor="correo">
              <p className="login-letter">Correo Electronico</p>
              <br />
              <input
                className="login-input"
                placeholder="hola@mail.com"
                type="email"
                name="correo"
                id="correo"
                autoComplete="email"
                required
              />
            </label>
            <label htmlFor="password">
              <p className="login-letter">Contraseña</p>
              <input
                className="login-input"
                placeholder="********"
                type="password"
                name="password"
                id="password" 
                autoComplete="email"
                required
              />
            </label>
            <label htmlFor="">
              <button className="login-button">Iniciar Seasion</button>
              <button className="login-signin">Registrarse</button>
            </label>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
