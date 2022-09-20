import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/logged_in`).then((res) => {
      if (res.ok) {
        setLoggedIn(true);
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, [loggedIn]);

  console.log(currentUser);

  return (
    <div>
      <div id="nav-container">
        <BrowserRouter>
          <NavBar
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signin">
              <Login
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            </Route>
            <Route exact path="/signup">
              <Signup
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            </Route>
            <Route exact path="/profile">
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
