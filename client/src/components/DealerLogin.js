import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DealerLogin({ setCurrentUser, setLoggedIn }) {
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
          history.push("/dashboard");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    <div class="flex items-center min-h-screen p-4 lg:justify-center">
      <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class="px-4 text-white bg-orange-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div>
            <a class="text-4xl font-bold tracking-wider text-center" href="/">
              AutoMatik
            </a>
            <div className="text-center">For Dealers</div>
          </div>

          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Stuff and things about cars and dealerships and cars and dealerships
            and cars and dealerships and cars and dealerships and cars and
            dealerships.
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span>What are my</span>
            <a href="/" class="underline">
              Dealership Credentials?
            </a>
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Go back{" "}
            <a href="/" class="underline">
              home
            </a>{" "}
            or go to{" "}
            <a href="/signin" class="underline">
              customer login
            </a>
          </p>
        </div>
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form onSubmit={handleSubmit} class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                name="email"
                onChange={handleChange}
                value={email}
                required={true}
                placeholder="name@email.com"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-orange-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="/forgot"
                  class="text-sm text-orange-600 hover:underline focus:text-orange-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                name="password"
                type="password"
                id="password"
                required={true}
                value={password}
                onChange={handleChange}
                placeholder="password"
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-orange-200"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-orange-200"
              />
              <label for="remember" class="text-sm font-semibold text-gray-500">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-orange-500 rounded-md shadow hover:bg-orange-600 focus:outline-none focus:ring-orange-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
              <div class="flex flex-col space-y-4">
                <a
                  href="/"
                  class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <span></span>
                  <span class="text-sm font-medium text-gray-800 group-hover:text-white">
                    DealerShips+
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DealerLogin;
