import React, { useState } from "react";

function Profile({ currentUser, setCurrentUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }

  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Profile
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src="https://atiinc.org/wp-content/uploads/2017/01/cover-default.jpg"
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <p className="text-xs text-gray-100">Change Cover Photo</p>
                  <div className="ml-2 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
                    alt
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    <p className="text-xs text-gray-100">Edit Picture</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="@example"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  required
                  className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Let the world know who you are"
                  rows={5}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="container mx-auto">
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="John"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="LastName"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="lastName"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Smith"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="Email"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="Email"
                  name="email"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="name@email.com"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="StreetAddress"
                  name="streetAddress"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="1234 Example St"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="City"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  City
                </label>
                <input
                  type="text"
                  id="City"
                  name="city"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Boulder"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="State/Province"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  id="State/Province"
                  name="state"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Colorado"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="Country"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="Country"
                  name="country"
                  required
                  className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="United States"
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <div className="flex items-center pb-2">
                  <label
                    htmlFor="ZIP"
                    className="text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    ZIP/Postal Code
                  </label>
                  <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400"></div>
                </div>
                <input
                  type="text"
                  id="ZIP"
                  name="zip"
                  required
                  className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="80301"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
          <div className="xl:w-full py-5 px-8">
            <div className="flex items-center mx-auto">
              <div className="container mx-auto">
                <div className="mx-auto xl:w-full">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Your Collection
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    Your saved searches and vehicles can be found here
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto pb-6">
            <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
              <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                Saved Vehicles
              </p>
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center mb-8 mt-4">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                    Vehicle 1
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stuff about Vehicle 1
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                    Vehicle 2
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stuff about Vehicle 2
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
                    Vehicle 3
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stuff about Vehicle 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-11/12 xl:w-full">
          <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded-lg text-blue-600 dark:text-blue-600 px-6 py-2 text-xs mr-4">
              Cancel
            </button>
            <button
              className="bg-blue-700 focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 rounded-lg text-white px-8 py-2 text-sm"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//   <img
//     class="mx-auto w-72 h-72 rounded-full"
//     src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
//     alt="profile picture"
//   />

//   <form onSubmit={handleSubmit}>
//     <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
//       <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white">
//         Hi there {currentUser.email}!
//       </h3>

//       {/* split */}

//       <div>
//         <div className="mb-2 block">
//           <Label htmlFor="email" value="Update Email" />
//         </div>
//         <TextInput
//           name="email"
//           type="text"
//           required={true}
//           onChange={handleInputChange}
//         />
//       </div>

//       {/* split */}

//       <div>
//         <div className="mb-2 block">
//           <Label htmlFor="password" value="Update Password" />
//         </div>
//         <TextInput
//           name="password"
//           type="password"
//           required={true}
//           onChange={handleInputChange}
//         />
//       </div>

//       {/* split */}

//       <div class="grid md:grid-cols-2 md:gap-6">
//         <div class="relative z-0 mb-6 w-full group">
//           <input
//             type="text"
//             name="floating_first_name"
//             id="floating_first_name"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required=""
//           />
//           <label
//             for="floating_first_name"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             First name
//           </label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input
//             type="text"
//             name="floating_last_name"
//             id="floating_last_name"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required=""
//           />
//           <label
//             for="floating_last_name"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Last name
//           </label>
//         </div>
//       </div>
//       <div class="grid md:grid-cols-2 md:gap-6">
//         <div class="relative z-0 mb-6 w-full group">
//           <input
//             type="text"
//             name="floating_address"
//             id="floating_address"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required=""
//           />
//           <label
//             for="floating_address"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Street Address
//           </label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input
//             type="text"
//             name="floating_zipcode"
//             id="floating_zipcode"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required=""
//           />
//           <label
//             for="floating_zipcode"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Zipcode
//           </label>
//         </div>
//       </div>

//       <div>
//         <Button type="submit">Update Your Information</Button>
//       </div>
//     </div>
//   </form>
// </div>

export default Profile;
