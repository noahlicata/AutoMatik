import React from "react";

const FavCard = ({ car, onRemoveFavCar }) => {
  function clickedRemove() {
    onRemoveFavCar(car);
  }
  return (
    <div className="flex justify-between items-center mb-8 mt-4">
      <div className="w-9/12">
        <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">
          {car.year} {car.make} {car.model} {car.version}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Stuff and things and stuff and things.
        </p>
        <button onClick={clickedRemove}>Remove from saved cars</button>
      </div>
    </div>
  );
};

export default FavCard;
