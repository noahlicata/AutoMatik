import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

function NavBar({ currentUser, setCurrentUser, loggedIn, setLoggedIn }) {
  let history = useHistory();

  const toProfile = () => {
    history.push("/profile");
  };

  const toHome = () => {
    history.push("/");
  };

  const toSignIn = () => {
    history.push("/signin");
  };

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setLoggedIn(false);
        history.push("./");
      }
    });
  };

  return (
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
              <Avatar
                alt="User settings"
                img="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Welcome</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={toHome}>Home</Dropdown.Item>
            <Dropdown.Item onClick={toProfile}>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Welcome</span>
              <span className="block truncate text-sm font-medium">
                Please Sign In
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={toSignIn}>Sign In</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      )}
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        <Navbar.Link href="/sell">Sell</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
