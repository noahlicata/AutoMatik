import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Sell from "./components/Sell";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Forgot from "./components/Forgot";
import DealerLogin from "./components/DealerLogin";
import DealerDash from "./components/DealerDash";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const displayedCars = cars.filter((car) => {
  //   return car.make.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  useEffect(() => {
    setIsLoading(true);
    fetch("/cars")
      .then((res) => res.json())
      .then((cars) => {
        setCars(cars);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`/logged_in`).then((res) => {
      if (res.ok) {
        setLoggedIn(true);
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, [loggedIn]);

  return (
    <div>
      <div id="nav-container">
        <BrowserRouter>
          <NavBar
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Home loggedIn={loggedIn} currentUser={currentUser} />
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
            <Route exact path="/cars">
              <Shop
                cars={cars}
                currentUser={currentUser}
                loggedIn={loggedIn}
                setCars={setCars}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </Route>
            <Route exact path="/sell">
              <Sell />
            </Route>
            <Route exact path="/contact">
              <Contact loggedIn={loggedIn} currentUser={currentUser} />
            </Route>
            <Route exact path="/cars/:id">
              <Details />
            </Route>
            <Route exact path="/forgot">
              <Forgot />
            </Route>
            <Route exact path="/dealer">
              <DealerLogin
                setCurrentUser={setCurrentUser}
                setLoggedIn={setLoggedIn}
              />
            </Route>
            <Route exact path="/dashboard">
              <DealerDash />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
