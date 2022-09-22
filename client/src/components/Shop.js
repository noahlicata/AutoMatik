import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";

function Shop() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars")
      .then((res) => res.json())
      .then((cars) => {
        setCars(cars);
      });
  }, []);

  const carsArr = cars.map((car) => {
    return <CarCard key={car.id} car={car} />;
  });

  return <div className="cars">{carsArr}</div>;
}

export default Shop;
