import React from "react";

const Home = ({ loggedIn, currentUser }) => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            {loggedIn ? (
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome back {currentUser.email}!
              </h1>
            ) : (
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to AutoMatik!
              </h1>
            )}
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Here at AutoMatik, we make it easier than ever to find your dream
              car at the best price possible. Just visit the shop, filter your
              searches, and remember to save your favorites!
            </p>
            <a
              href="/dealer"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Dealer Login
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="http://localhost:4000/cars"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Browse Cars
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://freepngimg.com/save/31216-car-transparent/624x300"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://s1.1zoom.me/b6462/7/Mercedes-Benz_Brabus_2020_Brabus_700_Widestar_SUV_587678_600x800.jpg"
              alt="g700"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://s1.1zoom.me/b3258/889/Evening_Audi_2020_RS_Q8_Green_Metallic_Crossover_574500_600x800.jpg"
              alt="rsq8"
            />
          </div>
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Sellers
            </h2>
            <p class="mb-4">
              We carry a wide variety of vehicles from many dealers around the
              country. From 4runners and Broncos to Mercedes AMGs and Audi RS
              Models, we have it all!
            </p>
            <p>
              Our dealerships are certified using AutoMatik's DVS or dealer
              verification system, which requires dealerships to maintain a 4+
              star rating overall, and adhere to strict standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
