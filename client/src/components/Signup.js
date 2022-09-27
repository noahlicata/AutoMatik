import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setCurrentUser, setLoggedIn }) {
  const history = useHistory();
  //   const [errors, setErrors] = useState([]);
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
    fetch(`/signup`, {
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

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-car-3.png"
              alt="Your Company"
            />
            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your AutoMatik Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="signin"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign In!
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  placeholder="Email"
                  required={true}
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required={true}
                  value={password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree with the{" "}
                  <span
                    href="/privacy"
                    className="font-medium text-green-600 hover:text-green-500 hover:underline cursor-pointer"
                  >
                    Terms and Conditions
                  </span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <img
          src="https://i.pinimg.com/originals/58/b1/14/58b1147d12c03bfbb8d902a96a80f187.png"
          alt="mockup"
        />
      </div>
    </>
  );
}

export default Signup;
