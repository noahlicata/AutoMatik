import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Label, TextInput, Checkbox, Button, Modal } from "flowbite-react";

function Login({ setCurrentUser, setLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((formData) => {
          setCurrentUser(formData);
          setLoggedIn(formData);
          history.push("/profile");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <Modal show={true} size="md" popup={true}>
        <Modal.Header onClick={handleGoBack} />
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to AutoMatik
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  placeholder="name@email.com"
                  required={true}
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  name="password"
                  type="password"
                  required={true}
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button type="submit">Log in to your account</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <a
                  href="/signup"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Login;
