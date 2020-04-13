import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
   return (
      <div className="login">
         <label htmlFor="loginInput">
            Podaj login: <input id="loginInput" type="text"></input>
         </label>
         <br />
         <label htmlFor="passInput">
            Podaj hasło: <input id="passInput" type="password"></input>
         </label>
         <br></br>
         <button>Wyślij</button>
      </div>
   );
};

export default LoginPage;
