import React from "react";

const FavCard = ({ favCar, onRemoveFavCar }) => {
  if (!favCar) {
    return <div>Loading...</div>;
  }

  const { id, year, make, model, version, image } = favCar;

  function clickedRemove() {
    onRemoveFavCar(id);
  }

  return (
    <div className="p-4 flex justify-between items-center mb-8 mt-4 border border-gray-300 rounded-lg">
      <div className="w-9/12">
        <p className="text-sm font-bold text-gray-800 dark:text-gray-100 pb-1">
          {year} {make} {model} {version}{" "}
          <button
            onClick={clickedRemove}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-2.5 py-1.25 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            X
          </button>
        </p>
        <img
          className="w-1/6 h-1/6 border-2 border-gray-900 rounded-lg"
          src={image}
          alt="oops"
        />
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          {color} | {milage} miles
        </p> */}
      </div>
    </div>
  );
};

export default FavCard;
