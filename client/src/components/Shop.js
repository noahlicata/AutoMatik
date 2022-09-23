import React from "react";
import CarCard from "./CarCard";

function Shop({ cars }) {
  const carsArr = cars.map((car) => {
    return <CarCard key={car.id} car={car} />;
  });

  return <div className="cars">{carsArr}</div>;
}

export default Shop;
