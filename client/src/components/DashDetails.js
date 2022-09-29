import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "flowbite-react";

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

  return (
    <div className="mx-40 my-4">
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
              <div>
                <ul class="bg-gray-50 w-80 text-gray-900">
                  {carDetails.car_options.map((option) => {
                    return (
                      <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {option}
                      </dd>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Specs</dt>
              <div>
                <ul class="bg-white w-80 text-gray-900">
                  {carDetails.standard_specs.map((spec) => {
                    return (
                      <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        {spec}
                      </dd>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Images</dt>
              <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
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
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DashDetails;
