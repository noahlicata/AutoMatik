import React, { useState } from "react";
import CarCard from "./CarCard";
import { Spinner } from "flowbite-react";

function Shop({
  cars,
  currentUser,
  loggedIn,
  setCars,
  isLoading,
  setIsLoading,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearOrder, setYearOrder] = useState(true);

  // nonsense
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let price = getRandomInt(5000, 120000);
  // nonsense

  const displayedCars = cars.filter((car) => {
    return car.make.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const carsArr = displayedCars.map((car) => {
    return <CarCard key={car.id} car={car} price={price} />;
  });

  function onSortDesc(e, attr, order, setOrder) {
    setIsLoading(true);
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return b[attr] - a[attr];
    });
    setOrder(!order);
    setCars([...sortedCategory]);
    setIsLoading(false);
  }

  function onSortAsc(e, attr, order, setOrder) {
    setIsLoading(true);
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return a[attr] - b[attr];
    });
    setOrder(!order);
    setCars([...sortedCategory]);
    setIsLoading(false);
  }

  // test

  function onSortDescAlt(e, order, setOrder) {
    setIsLoading(true);
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return b.price - a.price;
    });
    setOrder(!order);
    setCars([...sortedCategory]);
    setIsLoading(false);
  }

  function onSortAscAlt(e, order, setOrder) {
    setIsLoading(true);
    e.preventDefault();
    const sortedCategory = displayedCars.sort((a, b) => {
      return a.price - b.price;
    });
    setOrder(!order);
    setCars([...sortedCategory]);
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen">
          <div className="m-auto">
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <form className="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-40 mb-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Makes, Models, Colors..."
                required=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {/* sidebar */}

          <div className="flex justify-center">
            <aside className="w-64 mr-10" aria-label="Sidebar">
              <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <a href="/" className="flex items-center pl-2.5 mb-2">
                  <img
                    src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-car-3.png"
                    className="mr-3 h-6 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    AutoMatik
                  </span>
                </a>
                <ul className="space-y-2">
                  <li>
                    <a className="flex items-center text-base font-normal text-gray-900 rounded-lg dark:text-white ">
                      <span className="ml-3 font-semibold">
                        Hi {currentUser.email}!
                      </span>
                    </a>
                  </li>

                  <div>
                    <div className="dropdown inline-block relative">
                      <button className="bg-gray-300 text-gray-700 font-semibold py-2 pl-4 pr-10 rounded inline-flex items-center text-sm">
                        <span className="mr-1">Sort by:</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                          <a
                            name="year"
                            className="text-xs cursor-pointer rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortDesc(e, "year", yearOrder, setYearOrder)
                            }
                          >
                            Year - Newest
                          </a>
                        </li>
                        <li className="">
                          <a
                            name="year"
                            className="text-xs cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortAsc(e, "year", yearOrder, setYearOrder)
                            }
                          >
                            Year - Oldest
                          </a>
                        </li>

                        <li className="">
                          <a
                            name="price"
                            className="text-xs cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortDescAlt(e, yearOrder, setYearOrder)
                            }
                          >
                            Price - Highest
                          </a>
                        </li>

                        <li className="">
                          <a
                            name="price"
                            className="text-xs cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortAscAlt(e, yearOrder, setYearOrder)
                            }
                          >
                            Price - Lowest
                          </a>
                        </li>

                        <li className="">
                          <a
                            name="miles"
                            className="text-xs cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortDesc(e, "milage", yearOrder, setYearOrder)
                            }
                          >
                            Miles - Highest
                          </a>
                        </li>

                        <li className="">
                          <a
                            name="miles"
                            className="text-xs cursor-pointer bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            onClick={(e) =>
                              onSortAsc(e, "milage", yearOrder, setYearOrder)
                            }
                          >
                            Miles - Lowest
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* check boxes */}

                  <div className="flex items-center mb-4">
                    <input
                      name="year"
                      onClick={(e) =>
                        onSortAscAlt(
                          e,
                          "year",
                          "milage",
                          yearOrder,
                          setYearOrder
                        )
                      }
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      New
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      name="year"
                      onClick={(e) =>
                        onSortAsc(e, "year", yearOrder, setYearOrder)
                      }
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Used
                    </label>
                  </div>
                  <p className="text-sm pt-1">{displayedCars.length} Results</p>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <span className="pl-2">Clear Filters</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="signin"
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Save Search
                      </span>
                    </a>
                  </li>
                  {loggedIn ? null : (
                    <li>
                      <a
                        href="/signin"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          Sign In
                        </span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </aside>
            <div className="flex flex-col ml-10">{carsArr}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
