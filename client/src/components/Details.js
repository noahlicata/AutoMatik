import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [randomState, setRandomState] = useState(1);
  const [carDetails, setCarDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data);
        setRandomState(Math.floor(Math.random() * 2));
      });
  }, []);

  let options = carDetails.car_options;
  let specs = carDetails.standard_specs;

  return (
    <div>
      <article className="md:gap-8 md:grid md:grid-cols-3">
        <div>
          <div className="flex items-center mb-6 space-x-4">
            <img
              className="w-500 h-500 rounded-full"
              src={carDetails.image}
              alt=""
            />
            <div className="space-y-1 font-medium dark:text-white">
              <p>
                {carDetails.year} {carDetails.make} {carDetails.model}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                {carDetails.version}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                Miles: {carDetails.milage}
              </div>
              <div>
                {randomState === 1 ? (
                  <p className="bg-green-400 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
                    GREAT PRICE
                  </p>
                ) : (
                  <p className="bg-orange-400 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
                    AVERAGE PRICE
                  </p>
                )}
              </div>
            </div>
          </div>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center">Color: {carDetails.color}</li>
            <li className="flex items-center">
              Transmission: {carDetails.transmission}
            </li>
            <li className="flex items-center">
              Drive Type: {carDetails.drive_type}
            </li>
            <li className="flex items-center">
              Fuel Type: {carDetails.fuel_type}
            </li>
            <li className="flex items-center">
              Engine: {carDetails.engine_size}
            </li>
          </ul>
        </div>
        <div className="col-span-2 mt-6 md:mt-0">
          <div className="flex items-start mb-5">
            <div className="pr-4">
              <footer>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Posted{" "}
                  <time dateTime="2022-01-20 19:00">
                    {Math.floor(Math.random() * 20)} days ago
                  </time>
                </p>
              </footer>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Seller Comments:
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* <div className="inline-flex space-x-20">
            <div>
              Options:
              {options.map((option) => {
                return (
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    {option}
                  </p>
                );
              })}
            </div>
            <div>
              Specs:
              {specs.map((option) => {
                return (
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    {option}
                  </p>
                );
              })}
            </div>
          </div> */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img
                src={`https://loremflickr.com/600/300/vehicle/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/vehicle/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/vehicle/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/vehicle/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/vehicle/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
            </Carousel>
          </div>
          <aside className="flex items-center mt-3 space-x-5">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Prev
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </aside>
        </div>
      </article>
    </div>
  );
};

export default Details;
