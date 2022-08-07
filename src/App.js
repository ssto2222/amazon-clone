import React, { useEffect } from "react";
import "./App.css";
import "./Product.css";
import "./Home.css";
import "./Checkout.css";
import "./CheckoutProduct.css";
import "./Subtotal.css";
import "./Login.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "./firebaseApp";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const auth = getAuth();
    //will only run once when the app components loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
