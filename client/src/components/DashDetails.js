import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DashDetails = () => {
  const [randomState, setRandomState] = useState(1);
  const [carDetails, setCarDetails] = useState({
    car_options: [],
    standard_specs: [],
  });
  const { id } = useParams();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    fetch(`/dashboard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarDetails(data);
        setRandomState(Math.floor(Math.random() * 2));
      });
  }, []);

  console.log(carDetails.car_options);

  return (
    <div className="">
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            {carDetails.year} {carDetails.make} {carDetails.model} |{" "}
            {carDetails.version}
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Posted {getRandomInt(0, 20)} days ago
          </p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">VIN</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.vin}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Color</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.color}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Transmission</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.transmission}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Drive Type</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.drive_type}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Fuel Type</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.fuel_type}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Engine Size</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {carDetails.engine_size}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Options</dt>
              {carDetails.car_options.map((option) => {
                return (
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {option}
                  </dd>
                );
              })}
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Specs</dt>
              {carDetails.standard_specs.map((spec) => {
                return (
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {spec}
                  </dd>
                );
              })}
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Images</dt>
              <section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                  <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                      <div class="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          class="block object-cover object-center w-full h-full rounded-lg"
                          src={`https://loremflickr.com/600/300/automobile/all?random=${Math.floor(
                            Math.random() * 101
                          )}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Attachments</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">car_image_1</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <svg
                        class="h-5 w-5 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2 w-0 flex-1 truncate">car_image_2</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DashDetails;
