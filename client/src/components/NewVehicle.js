import React from "react";
import { Label, TextInput, FileInput, Button, Checkbox } from "flowbite-react";

const NewVehicle = () => {
  return (
    <div className="px-20 py-4">
      <form className="grid grid-cols-2 gap-y-4 gap-x-20">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="make" value="Make" />
          </div>
          <TextInput id="make" placeholder="Make" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="model" value="Model" />
          </div>
          <TextInput id="model" placeholder="Model" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="version" value="Version" />
          </div>
          <TextInput id="version" placeholder="Version" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="color" value="Color" />
          </div>
          <TextInput id="color" placeholder="Color" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="transmission" value="Transmission" />
          </div>
          <TextInput id="transmission" placeholder="Transmission" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="drive_type" value="Drive Type" />
          </div>
          <TextInput id="drive_type" placeholder="Drive Type" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="fuel_type" value="Fuel Type" />
          </div>
          <TextInput id="fuel_type" placeholder="Fuel Type" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="engine_size" value="Engine Size" />
          </div>
          <TextInput id="engine_size" placeholder="Engine Size" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="year" value="Year" />
          </div>
          <TextInput id="year" placeholder="Year" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="milage" value="Milage" />
          </div>
          <TextInput id="milage" placeholder="Milage" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="dealer_id" value="Dealer ID" />
          </div>
          <TextInput id="dealer_id" placeholder="Dealer ID" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput id="price" placeholder="Price" />
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="standard_specs" value="Standard Specs" />
          </div>
          <textarea
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
          <TextInput id="vin" placeholder="VIN" />
        </div>

        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Listing Image" />
          </div>
          <FileInput
            id="file"
            helperText="Upload the primary listing image for this vehicle."
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
