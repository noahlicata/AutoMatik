import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [carDetails, setCarDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data);
      });
  }, []);

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
                  Posted:{" "}
                  <time dateTime="2022-01-20 19:00">January 20, 2022</time>
                </p>
              </footer>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Seller Comments:
              </h4>
            </div>
            <p className="bg-green-400 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
              GREAT PRICE
            </p>
          </div>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
            Options: carDetails.car_options
          </p>
          <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
            Specs: carDetails.standard_specs
          </p>
          <aside className="flex items-center mt-3 space-x-5">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Prev
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
