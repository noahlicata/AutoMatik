import React, { useState } from "react";
import { Button, Spinner, Table } from "flowbite-react";
import DashCard from "./DashCard";

const DealerDash = ({ isLoading, inventory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  // eslint-disable-next-line no-unused-vars
  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let price = getRandomInt(5000, 120000);

  const displayedCars = inventory.filter((car) => {
    return car.make.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const carsObj = displayedCars.map((car) => {
    return <DashCard key={car.id} car={car} price={price} />;
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen">
          <div className="m-auto">
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </div>
        </div>
      ) : (
        <div class="bg-white">
          <div
            id="main-content"
            class="h-full w-full bg-gray-50 relative overflow-y-auto"
          >
            <main>
              <div class="pt-6 px-4">
                <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          ${getRandomInt(10000, 64000).toLocaleString()}
                        </span>
                        <h3 class="text-base font-normal text-gray-500">
                          Sales this week
                        </h3>
                        <h3 class="text-sm font-normal text-blue-500 mb-1.5">
                          {displayedCars.length} Results
                        </h3>
                        <Button color="success" size="xs" href="/newvehicle">
                          <div className="mx-auto">Add New Vehicle +</div>
                        </Button>
                        <form className="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full mt-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
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
                              placeholder="Search Inventory..."
                              required=""
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                        </form>
                      </div>
                      <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        12.5%
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <Table>
                      <Table.Head>
                        <Table.HeadCell>Vehicle</Table.HeadCell>
                        <Table.HeadCell>Color</Table.HeadCell>
                        <Table.HeadCell>Miles</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                          <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">{carsObj}</Table.Body>
                    </Table>
                    <div id="main-chart"></div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div class="mb-4 flex items-center justify-between">
                      <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">
                          Latest Transactions
                        </h3>
                      </div>
                      <div class="flex-shrink-0">
                        <a
                          href="/"
                          class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                    <Table>
                      <Table.Head>
                        <Table.HeadCell>TRANSACTION ID</Table.HeadCell>
                        <Table.HeadCell>DATE</Table.HeadCell>
                        <Table.HeadCell>AMOUNT</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            #A-IT{getRandomInt(100, 999)}-{getRandomInt(10, 99)}
                          </Table.Cell>
                          <Table.Cell>
                            {getRandomInt(1, 12)}/{getRandomInt(1, 31)}
                            /2022
                          </Table.Cell>
                          <Table.Cell>
                            ${getRandomInt(444, 4444).toLocaleString()}.
                            {getRandomInt(10, 99)}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                </div>
                <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          {getRandomInt(5, 40)}
                        </span>
                        <h3 class="text-base font-normal text-gray-500">
                          Auto sales this week
                        </h3>
                      </div>
                      <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        {getRandomInt(4, 16)}%
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          {getRandomInt(1, 4500).toLocaleString()}
                        </span>
                        <h3 class="text-base font-normal text-gray-500">
                          Listing views this week
                        </h3>
                      </div>
                      <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        {getRandomInt(4, 16)}%
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          {getRandomInt(1, 16)}
                        </span>
                        <h3 class="text-base font-normal text-gray-500">
                          Payments processed this week
                        </h3>
                      </div>
                      <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                        -{getRandomInt(1, 2)}%
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-xl font-bold leading-none text-gray-900">
                        Latest Customers
                      </h3>
                      <a
                        href="/dashboard"
                        class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                      >
                        View all
                      </a>
                    </div>
                    <div class="flow-root">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src={`https://loremflickr.com/480/480/face/all?random=${Math.floor(
                                  Math.random() * 101
                                )}`}
                                alt="..."
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Neil Sims
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a href="/dashboard">neils3@gmail.com</a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              ${getRandomInt(100, 4200).toLocaleString()}.
                              {getRandomInt(10, 99)}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src={`https://loremflickr.com/480/480/face/all?random=${Math.floor(
                                  Math.random() * 101
                                )}`}
                                alt="..."
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Bonnie Green
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a href="/dashboard">
                                  green.bonnie23@gmail.com
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              ${getRandomInt(100, 4200).toLocaleString()}.
                              {getRandomInt(10, 99)}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src={`https://loremflickr.com/480/480/face/all?random=${Math.floor(
                                  Math.random() * 101
                                )}`}
                                alt="..."
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Michael Gough
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a href="/browse">goughgetem@gmail.com</a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              ${getRandomInt(100, 4200).toLocaleString()}.
                              {getRandomInt(10, 99)}
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src={`https://loremflickr.com/480/480/face/all?random=${Math.floor(
                                  Math.random() * 101
                                )}`}
                                alt="..."
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Thomes Lean
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a href="/dashboard">thomas.l@yahoo.com</a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              ${getRandomInt(100, 4200).toLocaleString()}.
                              {getRandomInt(10, 99)}
                            </div>
                          </div>
                        </li>
                        <li class="pt-3 sm:pt-4 pb-0">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src={`https://loremflickr.com/480/480/face/all?random=${Math.floor(
                                  Math.random() * 101
                                )}`}
                                alt="..."
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Lana Byrd
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a href="/dashbaord">dryblana@gmail.com</a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              ${getRandomInt(100, 4200).toLocaleString()}.
                              {getRandomInt(10, 99)}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">
                      Overview
                    </h3>
                    <div class="block w-full overflow-x-auto">
                      <table class="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                              Top Brands
                            </th>
                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                              Sales
                            </th>
                            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                          <tr class="text-gray-500">
                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                              Ford
                            </th>
                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                              {getRandomInt(27, 32)}
                            </td>
                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">
                                  30%
                                </span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-cyan-600 h-2 rounded-sm"
                                      style={{ width: "30%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-gray-500">
                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                              Honda
                            </th>
                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                              {getRandomInt(23, 27)}
                            </td>
                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">
                                  24%
                                </span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-orange-300 h-2 rounded-sm"
                                      style={{ width: "24%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-gray-500">
                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                              Toyota
                            </th>
                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                              {getRandomInt(18, 23)}
                            </td>
                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">
                                  18%
                                </span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-teal-400 h-2 rounded-sm"
                                      style={{ width: "18%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-gray-500">
                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                              Dodge
                            </th>
                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                              {getRandomInt(12, 18)}
                            </td>
                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">
                                  12%
                                </span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-pink-600 h-2 rounded-sm"
                                      style={{ width: "12%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-gray-500">
                            <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                              Chevrolet
                            </th>
                            <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                              {getRandomInt(7, 12)}
                            </td>
                            <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">9%</span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-indigo-600 h-2 rounded-sm"
                                      style={{ width: "9%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="text-gray-500">
                            <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                              Audi
                            </th>
                            <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                              {getRandomInt(1, 7)}
                            </td>
                            <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                              <div class="flex items-center">
                                <span class="mr-2 text-xs font-medium">7%</span>
                                <div class="relative w-full">
                                  <div class="w-full bg-gray-200 rounded-sm h-2">
                                    <div
                                      class="bg-purple-500 h-2 rounded-sm"
                                      style={{ width: "7%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerDash;
