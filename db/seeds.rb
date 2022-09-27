require "faker"

Dealer.create(
  name: "AutoMatik Dealership",
  location: "1000 Fake Street, SomeCity, CO 80129",
  brand: "Things",
)

672.times do
  make = Faker::Vehicle.make
  Car.create(
    image: "https://loremflickr.com/500/500/vehicle/all?random=#{rand(1..200)}",
    vin: Faker::Vehicle.vin,
    make: make,
    model: Faker::Vehicle.model(make_of_model: make),
    version: Faker::Vehicle.version,
    color: Faker::Vehicle.color,
    transmission: Faker::Vehicle.transmission,
    drive_type: Faker::Vehicle.drive_type,
    fuel_type: Faker::Vehicle.fuel_type,
    engine_size: Faker::Vehicle.engine_size,
    year: Faker::Vehicle.year,
    milage: rand(1..200000),
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    price: rand(5000..50000),
    dealer_id: 1,
  )
end
