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
              <br />
              <span className="login-letter-send">Olvidate tu contraseña</span>
              <br />
            </label>
            <label  htmlFor="">
              <div className="label2">
                    <button className="login-button">Iniciar Seasion</button>
              <button className="login-signin">Registrarse</button>
              <div className="login-figure">
                  <div className="figure-line-left"></div>
                  <div className="figure-ball"></div>
                  <div className="figure-line-rigth"></div>
              </div>
              <button className="login-fb">Iniciar Sesion Facebook</button>
              </div>
            </label>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
