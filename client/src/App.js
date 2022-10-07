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
import DashDetails from "./components/DashDetails";
import NewVehicle from "./components/NewVehicle";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [cars, setCars] = useState([]);
  const [profPhoto, setProfPhoto] = useState([]);
  const [favCars, setFavCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDealer, setIsDealer] = useState(false);
  const [inventory, setInventory] = useState([]);

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
    setIsLoading(true);
    fetch("/inventory")
      .then((res) => res.json())
      .then((inventory) => {
        setInventory(inventory);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/get_user_cars?user_id=${currentUser.id}`)
      .then((res) => res.json())
      .then((favs) => {
        setFavCars(favs);
        setIsLoading(false);
      });
  }, [currentUser]);

  useEffect(() => {
    fetch(`/logged_in`).then((res) => {
      if (res.ok) {
        setLoggedIn(true);
        res.json().then((user) => {
          setCurrentUser(user);
          fetchProfPhoto(user.id);
        });
      }
    });
  }, [loggedIn]);

  function fetchProfPhoto(id) {
    fetch(`/current_user_photos?id=${id}`)
      .then((r) => r.json())
      .then((photosArr) => {
        setProfPhoto(photosArr);
      });
  }

  function handleAddCar(newCar) {
    setCars([newCar, ...cars]);
  }

  function handleFavorites(id) {
    fetch("/user_cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        car_id: id,
      }),
    })
      .then((r) => r.json())
      .then((data) => setFavCars([...favCars, data]));
  }

  function handleRemoveFavorite(id) {
    fetch(`/user_cars/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setFavCars(favCars.filter((car) => car.id !== id)));
  }

  return (
    <div>
      <div id="nav-container">
        <BrowserRouter>
          <NavBar
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            isDealer={isDealer}
            setIsDealer={setIsDealer}
            profPhoto={profPhoto}
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
            {currentUser && (
              <Route exact path="/profile">
                <Profile
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  favCars={favCars}
                  onRemoveFavCar={handleRemoveFavorite}
                  onFavCar={handleFavorites}
                  profPhoto={profPhoto}
                  setProfPhoto={setProfPhoto}
                />
              </Route>
            )}
            <Route exact path="/cars">
              <Shop
                cars={cars}
                currentUser={currentUser}
                loggedIn={loggedIn}
                setCars={setCars}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                onFavoriteCar={handleFavorites}
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
              <DealerDash
                inventory={inventory}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            </Route>
            <Route exact path="/dashboard/:id">
              <DashDetails />
            </Route>
            <Route exact path="/newvehicle">
              <NewVehicle onAddCar={handleAddCar} />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
