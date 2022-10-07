import React, { useState } from "react";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";

const NewVehicle = ({ onAddCar }) => {
  const [vin, setVin] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [driveType, setDriveType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [year, setYear] = useState("");
  const [milage, setMilage] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [standardSpecs, setStandardSpecs] = useState([]);
  const [carOptions, setCarOptions] = useState([]);
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = {
      vin: vin,
      make: make,
      model: model,
      version: version,
      color: color,
      transmission: transmission,
      drive_type: driveType,
      fuel_type: fuelType,
      engine_size: engineSize,
      year: year,
      milage: milage,
      image: image,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      standard_specs: standardSpecs,
      car_options: carOptions,
      price: price,
      dealer_id: 1,
    };
    fetch("/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="px-20 py-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-y-4 gap-x-20"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="make" value="Make" />
          </div>
          <TextInput
            value={make}
            onChange={(e) => setMake(e.target.value)}
            id="make"
            placeholder="Make"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="model" value="Model" />
          </div>
          <TextInput
            value={model}
            onChange={(e) => setModel(e.target.value)}
            id="model"
            placeholder="Model"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="version" value="Version" />
          </div>
          <TextInput
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            id="version"
            placeholder="Version"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="color" value="Color" />
          </div>
          <TextInput
            value={color}
            onChange={(e) => setColor(e.target.value)}
            id="color"
            placeholder="Color"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="transmission" value="Transmission" />
          </div>
          <TextInput
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            id="transmission"
            placeholder="Transmission"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="drive_type" value="Drive Type" />
          </div>
          <TextInput
            value={driveType}
            onChange={(e) => setDriveType(e.target.value)}
            id="drive_type"
            placeholder="Drive Type"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="fuel_type" value="Fuel Type" />
          </div>
          <TextInput
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            id="fuel_type"
            placeholder="Fuel Type"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="engine_size" value="Engine Size" />
          </div>
          <TextInput
            value={engineSize}
            onChange={(e) => setEngineSize(e.target.value)}
            id="engine_size"
            placeholder="Engine Size"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="year" value="Year" />
          </div>
          <TextInput
            value={year}
            onChange={(e) => setYear(e.target.value)}
            id="year"
            placeholder="Year"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="milage" value="Milage" />
          </div>
          <TextInput
            value={milage}
            onChange={(e) => setMilage(e.target.value)}
            id="milage"
            placeholder="Milage"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            placeholder="Price"
          />
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="standard_specs" value="Standard Specs" />
          </div>
          <textarea
            value={standardSpecs}
            onChange={(e) => setStandardSpecs(e.target.value)}
            id="standard_specs"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="List the standard specs for this vehicle, separated by commas."
          ></textarea>
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="car_options" value="Car Options" />
          </div>
          <textarea
            value={carOptions}
            onChange={(e) => setCarOptions(e.target.value)}
            id="car_options"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="List the car options, separated by commas."
          ></textarea>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="vin" value="VIN" />
          </div>
          <TextInput
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            id="vin"
            placeholder="VIN"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Image" />
          </div>
          <TextInput
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="image"
            placeholder="Image"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="image2" value="Image2" />
          </div>
          <TextInput
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            id="image2"
            placeholder="Image2"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="image3" value="Image3" />
          </div>
          <TextInput
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            id="image3"
            placeholder="Image3"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="image4" value="Image4" />
          </div>
          <TextInput
            value={image4}
            onChange={(e) => setImage4(e.target.value)}
            id="image4"
            placeholder="Image4"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="image5" value="Image5" />
          </div>
          <TextInput
            value={image5}
            onChange={(e) => setImage5(e.target.value)}
            id="image5"
            placeholder="Image5"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              I understand that the information I provided cannot be changed
              after submission. See why{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                here
              </span>
              .
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <div className="mt-2">
              <Button type="submit">Submit</Button>
            </div>
            <div className="mt-2">
              <Button color="warning">Reset Form</Button>
            </div>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default NewVehicle;
