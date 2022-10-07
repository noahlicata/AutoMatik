import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";

function NavBar({
  currentUser,
  setCurrentUser,
  loggedIn,
  setLoggedIn,
  profPhoto,
}) {
  let history = useHistory();
  const toProfile = () => {
    history.push("/profile");
  };
  const toHome = () => {
    history.push("/");
  };
  const toShop = () => {
    history.push("/cars");
  };
  const toContact = () => {
    history.push("/contact");
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setLoggedIn(false);
        history.push("/");
      }
    });
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-car-3.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            AutoMatik
          </span>
        </Navbar.Brand>
        {loggedIn ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                currentUser ? (
                  <Avatar
                    alt="User settings"
                    img={profPhoto.image_url}
                    rounded={true}
                  />
                ) : null
              }
            >
              <Dropdown.Header>
                <span className="block text-sm font-bold">
                  Welcome {currentUser.email}!
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={toHome}>Home</Dropdown.Item>
              <Dropdown.Item onClick={toProfile}>My Profile</Dropdown.Item>
              <Dropdown.Item onClick={toShop}>Shop</Dropdown.Item>
              <Dropdown.Item onClick={toContact}>Contact</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2">
            <Button className="font-semibold" href="/signin">
              Sign In
            </Button>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="http://localhost:4000/cars">Shop</Navbar.Link>
          <Navbar.Link href="/dealer">Dealer</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
