import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        history.push("/");
        alert("Login しました.");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          history.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="login">
      <div className="login__imageContainer">
        <Link to="/">
          <img
            className="login__image"
            src="https://pngimg.com/uploads/amazon/amazon_PNG2.png"
            alt=""
          />
        </Link>
      </div>

      <div className="login__container">
        <h1>Sign in</h1>
        <form method="POST" className="login__form">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-maiil address"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          サインインすることにより、アマゾンFake
          Cloneの使用とセールスに同意するものとします。
        </p>
        <button onClick={register} className="login__registerButton">
          Create your new account
        </button>
      </div>
    </div>
  );
}

export default Login;
