require "faker"

Dealer.create(
  name: "AutoMatik Dealership",
  location: "1000 Fake Street, SomeCity, CO 80129",
  brand: "Things",
)

50.times do
  make = Faker::Vehicle.make
  Car.create(
    image: "https://loremflickr.com/300/300/vehicle/all?random=#{rand(1..200)}",
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
    price: rand(5000..120000),
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,

  )
end


  User.create(email: "testuser1@gmail.com", password: "asd123")
  User.create(email: "testuser2@gmail.com", password: "asd123")
  User.create(email: "testuser3@gmail.com", password: "asd123")
  User.create(email: "testuser4@gmail.com", password: "asd123")
  User.create(email: "testuser5@gmail.com", password: "asd123")

  UserCar.create(user_id: 1, car_id: 1)
  UserCar.create(user_id: 1, car_id: 2)
  UserCar.create(user_id: 1, car_id: 3)
  UserCar.create(user_id: 1, car_id: 4)
  UserCar.create(user_id: 1, car_id: 5)

  UserCar.create(user_id: 3, car_id: 1)
  UserCar.create(user_id: 3, car_id: 2)
  UserCar.create(user_id: 3, car_id: 5)
  UserCar.create(user_id: 3, car_id: 6)
  UserCar.create(user_id: 3, car_id: 7)

  UserCar.create(user_id: 2, car_id: 7)
  UserCar.create(user_id: 2, car_id: 8)
  UserCar.create(user_id: 2, car_id: 3)
  UserCar.create(user_id: 2, car_id: 4)
  UserCar.create(user_id: 2, car_id: 5)

  puts 'db seeded'

