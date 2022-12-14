import React, { useState } from "react";
import FavCard from "./FavCard";

function Profile({
  currentUser,
  setCurrentUser,
  favCars,
  onRemoveFavCar,
  onFavCar,
  profPhoto,
  setProfPhoto,
}) {
  const [imageData, setImageData] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (!favCars) {
    return <div>Loading...</div>;
  }

  const displayedFavs = favCars.map((favCar) => {
    return (
      <FavCard
        favCar={favCar}
        key={favCar.id}
        onRemoveFavCar={onRemoveFavCar}
        onFavCar={onFavCar}
      />
    );
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

  const handleImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user_id", currentUser.id);
    data.append("image", imageData);
    fetch("/profile_photos", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setProfPhoto(data));
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Profile | {currentUser.email}
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src="https://di-uploads-pod15.dealerinspire.com/porscheoklahomacity/uploads/2021/05/2022-porsche-911-gt3.jpg"
                  alt="something"
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <div className="ml-2 text-gray-100"></div>
                </div>

                <div className="w-20 h-20 rounded-full absolute bottom-0 -mb-10 ml-12 flex items-center justify-center">
                  <img
                    src={profPhoto.image_url}
                    alt="something"
                    className="absolute z-0 h-full w-full object-cover rounded-full top-0 left-0 bottom-0 right-0"
                    id="custom-upload"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
          <div className="mx-auto pt-4">
            <div className="container mx-auto">
              <form onSubmit={handleImage}>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                    htmlFor="image"
                  >
                    Profile Picture
                  </label>
                  <input
                    onChange={(e) => setImageData(e.target.files[0])}
                    type="file"
                    name="image"
                    id="image"
                    placeholder="image"
                    class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                  />
                  <div
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    Click "Choose File" to select a new profile picture from
                    your computer. Once selected, click the upload button to
                    confirm changes.
                  </div>

                  <div>
                    <button
                      className="bg-green-700 focus:outline-none transition duration-150 ease-in-out hover:bg-green-600 rounded-lg text-white px-8 py-2 mt-2 text-sm"
                      type="submit"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </form>
              <form id="login" onSubmit={handleSubmit}>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder={currentUser.email}
                    required={true}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-blue-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Password"
                    required={true}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="container mx-auto w-11/12 xl:w-full">
                  <div className="w-full sm:px-0 bg-white dark:bg-gray-800 flex">
                    <button
                      className="bg-blue-700 focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 rounded-lg text-white px-8 py-2 text-sm"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
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
                    Your saved vehicles can be found below.
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
            <div className="px-8">{displayedFavs}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
