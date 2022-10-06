import React from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const DashCard = ({ car, price }) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {car.year} {car.make} {car.model} {car.version}
      </Table.Cell>
      <Table.Cell>{car.color}</Table.Cell>
      <Table.Cell>{car.milage.toLocaleString()}</Table.Cell>
      <Table.Cell>${car.price.toLocaleString()}</Table.Cell>
      <Table.Cell>
        <Link
          to={`/dashboard/${car.id}`}
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          View
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default DashCard;
