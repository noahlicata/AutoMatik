import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { Label, TextInput, Checkbox, Button, Modal } from "flowbite-react";

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
          history.push("/");
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  return (
    // <React.Fragment>
    //   <Modal show={true} size="md" popup={true}>
    //     <Modal.Header onClick={handleGoBack} />
    //     <Modal.Body>
    //       <form onSubmit={handleSubmit}>
    //         <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
    //           <h3 className="text-xl font-medium text-gray-900 dark:text-white">
    //             Sign in to AutoMatik
    //           </h3>
    //           <div>
    //             <div className="mb-2 block">
    //               <Label htmlFor="email" value="Your email" />
    //             </div>
    //             <TextInput
    //               placeholder="name@email.com"
    //               required={true}
    //               name="email"
    //               value={email}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div>
    //             <div className="mb-2 block">
    //               <Label htmlFor="password" value="Your password" />
    //             </div>
    //             <TextInput
    //               name="password"
    //               type="password"
    //               required={true}
    //               value={password}
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <div className="flex justify-between">
    //             <div className="flex items-center gap-2">
    //               <Checkbox id="remember" />
    //               <Label htmlFor="remember">Remember me</Label>
    //             </div>
    //             <a
    //               href="/modal"
    //               className="text-sm text-blue-700 hover:underline dark:text-blue-500"
    //             >
    //               Lost Password?
    //             </a>
    //           </div>
    //           <div className="w-full">
    //             <Button type="submit">Log in to your account</Button>
    //           </div>
    //           <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
    //             Not registered?
    //             <a
    //               href="/signup"
    //               className="text-blue-700 hover:underline dark:text-blue-500"
    //             >
    //               Create account
    //             </a>
    //           </div>
    //         </div>
    //       </form>
    //     </Modal.Body>
    //   </Modal>
    // </React.Fragment>

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
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                create a new one!
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
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/forgot"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <img
          src="https://www.pngmart.com/files/22/Mercedes-Benz-AMG-PNG-File.png"
          alt="mockup"
        />
      </div>
    </>
  );
}

export default Login;
