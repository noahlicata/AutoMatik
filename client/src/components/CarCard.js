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
  let m = getRandomInt(1500, 0);
  // nonsense

  return (
    <div className="">
      <Link
        to={`/cars/${car.id}`}
        class="flex flex-col items-center bg-white rounded-lg border
 md:flex-row hover:bg-gray-100 dark:border-gray-700
      dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={car.image}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <p class="font-normal text-gray-700 dark:text-gray-400">
            ${n.toLocaleString()}
          </p>
          <p class="mb-3 text-xs font-bold text-gray-500 dark:text-gray-400">
            {car.milage.toLocaleString()} miles
          </p>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {car.year} {car.make} {car.model} {car.version}
          </h5>
          <p class=" font-normal text-sm text-gray-700 dark:text-gray-400">
            <span className="font-bold">Random Dealer</span>{" "}
            {`(${m.toLocaleString()} miles away)`}
          </p>
          <p class="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">
            <span class="flex items-center">
              <span className="mr-1">Rating</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </span>
          </p>
          <div>
            <span className="font-normal text-xs text-gray-700 dark:text-gray-400">
              720-073-1109
            </span>
            <span className="text-xs"> | </span>
            <span class="font-normal hover:underline text-xs text-blue-700 dark:text-blue-400">
              Confirm Availability
            </span>
          </div>
        </div>
      </Link>
    </div>
    // <div className="pb-6">
    //   <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    //     <Link to={`/cars/${car.id}`}>
    //       <img className="rounded-t-lg" src={car.image} alt="" />
    //     </Link>
    //     <div className="p-5">
    //       <Link to={`/cars/${car.id}`}>
    //         <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           {car.year} {car.make} {car.model}
    //         </h5>
    //         <h5 className="text-large font-bold tracking-tight text-gray-500 dark:text-white">
    //           {car.version}
    //         </h5>
    //       </Link>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         ${n.toLocaleString()}
    //       </p>
    //       <Link
    //         to={`/cars/${car.id}`}
    //         href="/cars/:id"
    //         className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         View Details
    //         <svg
    //           aria-hidden="true"
    //           className="ml-2 -mr-1 w-4 h-4"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CarCard;
