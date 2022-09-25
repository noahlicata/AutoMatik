import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  // nonsense
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let n = getRandomInt(10000, 50000);
  // nonsense

  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/cars/${car.id}`}>
          <img className="rounded-t-lg" src={car.image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/cars/${car.id}`}>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {car.year} {car.make} {car.model}
            </h5>
            <h5 className="text-large font-bold tracking-tight text-gray-500 dark:text-white">
              {car.version}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${n.toLocaleString()}
          </p>
          <Link
            to={`/cars/${car.id}`}
            href="/cars/:id"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
