import { Carousel } from "flowbite-react";
import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [randomState, setRandomState] = useState(1);
  const [carDetails, setCarDetails] = useState({
    car_options: [],
    standard_specs: [],
  });
  const [tradeValue, setTradeValue] = useState("");
  const [owedValue, setOwedValue] = useState("");
  const [downValue, setDownValue] = useState("");
  const [total, setTotal] = useState("");

  let dealerDiscount = Math.floor(Math.random() * 1000);

  const calculateValues = () => {
    setTotal();
  };

  const { id } = useParams();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

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

  let m = getRandomInt(1500, 0);

  return (
    <div className="p-4">
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

          <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="px-5 pb-5">
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                <span className="font-bold">Random Dealer</span>{" "}
                {`(${m.toLocaleString()} miles away)`}
              </p>
              <span className="flex items-center mb-4">
                <span className="mr-1 font-bold text-sm text-gray-700 dark:text-gray-400">
                  Rating
                </span>
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
              <div className="flex justify-between items-center">
                <span className="text-l font-bold text-gray-900">Color</span>
                <div
                  href="#"
                  className="text-sm text-gray-700 dark:text-gray-400"
                >
                  {carDetails.color}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-l font-bold text-gray-900">
                  Transmission
                </span>
                <div
                  href="#"
                  className="text-sm text-gray-700 dark:text-gray-400"
                >
                  {carDetails.transmission}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-l font-bold text-gray-900">
                  Drive Type
                </span>
                <div
                  href="#"
                  className="text-sm text-gray-700 dark:text-gray-400"
                >
                  {carDetails.drive_type}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-l font-bold text-gray-900">
                  Fuel Type
                </span>
                <div
                  href="#"
                  className="text-sm text-gray-700 dark:text-gray-400"
                >
                  {carDetails.fuel_type}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-l font-bold text-gray-900">Engine</span>
                <div
                  href="#"
                  className="text-sm text-gray-700 dark:text-gray-400"
                >
                  {carDetails.engine_size}
                </div>
              </div>
              {/* <div className="flex flex-col items-center mt-4">
                <span className="text-l font-bold text-gray-900">Options</span>
                {options.map((option) => {
                  return (
                    <p className="text-sm text-gray-700 dark:text-gray-400 flex justify-center">
                      {option}
                    </p>
                  );
                })}
              </div>
              <div className="flex flex-col items-center mt-4">
                <span className="text-l font-bold text-gray-900">Specs</span>
                {specs.map((option) => {
                  return (
                    <p className="text-sm text-gray-700 dark:text-gray-400 flex justify-center">
                      {option}
                    </p>
                  );
                })}
              </div> */}
            </div>
          </div>
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
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img
                src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
              <img
                src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                  Math.random() * 101
                )}`}
                alt="..."
              />
            </Carousel>
          </div>

          {/* split */}

          <form
            className="mt-5 border-8 border-blue-700 rounded-xl bg-blue-700 shadow-md"
            onSubmit={calculateValues}
          >
            <h1 className="block mb-2 text-xl font-medium text-white">
              FINANCING
            </h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="text-white">MSRP</div>
                <div className="text-white">Dealer Discount</div>
                <div className="text-white mt-4 text-xl font-bold">
                  Listing Price
                </div>
              </div>
              <div>
                <div className="text-white">${carDetails.price}</div>
                <div className="text-white">- ${dealerDiscount}</div>
                <div className="text-white mt-4 text-xl font-bold">
                  ${(carDetails.price -= dealerDiscount)}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Est. Trade-In Value
                </label>
                <input
                  value={tradeValue}
                  onSubmit={(e) => setTradeValue(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Amount Owed on Trade
                </label>
                <input
                  value={owedValue}
                  onSubmit={(e) => setOwedValue(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Down Payment
                </label>
                <input
                  value={downValue}
                  onSubmit={(e) => setDownValue(e.target.value)}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-bold text-center text-white">
                  Average Monthly Payment
                </label>
                <div className="text-white mt-4 text-xl font-bold text-center">
                  WORK PLEASE
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Calculate
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Details;
