import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip, Button } from "flowbite-react";

function CarCard({ car, onFavoriteCar }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let m = getRandomInt(1500, 0);
  let p = getRandomInt(1, 2);

  const [randomState, setRandomState] = useState(Math.floor(Math.random() * 2));

  function clickedFavorites() {
    onFavoriteCar(car);
  }

  return (
    <div className="mb-4">
      <Link
        to={`/cars/${car.id}`}
        className="flex flex-col items-center w-full bg-white rounded-lg border
 md:flex-row hover:bg-gray-100 dark:border-gray-700
      dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={car.image}
          alt=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="ml-auto"></div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {car.year} {car.make} {car.model} {car.version}{" "}
            <button
              class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={clickedFavorites}
            >
              <i class="fas fa-heart"></i>SAVE
            </button>
            <button
              class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-heart"></i>SHARE
            </button>
            <p className="text-green-500 text-base">
              ${car.price.toLocaleString()}
            </p>
            <p className="mb-2 mt-4 text-xs font-bold text-gray-500 dark:text-gray-400">
              {car.milage.toLocaleString()} miles
            </p>
          </h5>
          <p className=" font-normal text-sm text-gray-700 dark:text-gray-400">
            {randomState === 1 ? (
              <span className="font-bold">AutoMatik Flatiron </span>
            ) : (
              <span className="font-bold">Enterprise Car Sales </span>
            )}
            {`(${m.toLocaleString()} miles away)`}
          </p>
          <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">
            <span className="flex items-center">
              <span className="mr-1">Rating</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {randomState === 1 ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              )}
            </span>
          </p>
          <div>
            {randomState === 1 ? (
              <span className="font-normal text-xs text-gray-700 dark:text-gray-400">
                720-<span>{getRandomInt(100, 999)}-</span>
                <span>{getRandomInt(1000, 9999)}</span>
              </span>
            ) : (
              <span className="font-normal text-xs text-gray-700 dark:text-gray-400">
                303-<span>{getRandomInt(100, 999)}-</span>
                <span>{getRandomInt(1000, 9999)}</span>
              </span>
            )}

            {car.year >= 2021 && car.milage <= 1000 ? (
              <span>
                <Tooltip
                  content="Car is brand new, any existing miles are from test drives."
                  style="dark"
                >
                  <button className="font-normal hover:underline text-xs text-green-700 dark:text-green-400">
                    New
                  </button>
                </Tooltip>
              </span>
            ) : (
              <span>
                <Tooltip
                  content="Car has been previously owned by one or many people. See seller comments for more information on car history."
                  style="dark"
                >
                  <button className="font-normal hover:underline text-xs text-orange-700 dark:text-orange-400">
                    Used
                  </button>
                </Tooltip>
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CarCard;
