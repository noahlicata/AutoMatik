require "faker"

Dealer.create(
  name: "AutoMatik Dealership",
  location: "1000 Fake Street, SomeCity, CO 80129",
  brand: "Things",
)

# 50.times do
#   make = Faker::Vehicle.make
#   Car.create(
#     image: "https://loremflickr.com/300/300/vehicle/all?random=#{rand(1..200)}",
#     vin: Faker::Vehicle.vin,
#     make: make,
#     model: Faker::Vehicle.model(make_of_model: make),
#     version: Faker::Vehicle.version,
#     color: Faker::Vehicle.color,
#     transmission: Faker::Vehicle.transmission,
#     drive_type: Faker::Vehicle.drive_type,
#     fuel_type: Faker::Vehicle.fuel_type,
#     engine_size: Faker::Vehicle.engine_size,
#     year: Faker::Vehicle.year,
#     milage: rand(1..200000),
#     price: rand(5000..120000),
#     car_options: Faker::Vehicle.car_options,
#     standard_specs: Faker::Vehicle.standard_specs,
#     dealer_id: 1,

#   )
# end

Car.create(
    image: "https://images.autotrader.com/hn/c/123673c63f934da2944d86ffafaa5871.jpg",
    image2: "https://images.autotrader.com/hn/c/ccf044194b9f40d8a418a9bced9615c7.jpg",
    image3: "https://images.autotrader.com/hn/c/96a5ad4e7a644eb9aa906340fe316028.jpg",
    image4: "https://images.autotrader.com/hn/c/c8ce900a73784330be102f72d1c4e2fb.jpg",
    image5: "https://images.autotrader.com/hn/c/ffbe3513f95841f69adf69b83ea4912b.jpg",
    vin: 'WAUB4AF48PA009110',
    make: 'Audi',
    model: 'S4',
    version: 'Premium Plus',
    color: 'Black',
    transmission: '8-Speed Automatic Transmission',
    drive_type: 'All wheel drive',
    fuel_type: 'Gasoline',
    engine_size: '3.0L 6-Cylinder Turbo Gas Engine',
    year: 2022,
    milage: 4,
    price: 62070,
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,
  )

  Car.create(
    image: "https://images.autotrader.com/hn/c/bb5afbe96e49427db15b82b4195cdd72.jpg",
    vin: 'WA1VWBF76ND022003',
    make: 'Audi',
    model: 'SQ7',
    version: 'Prestige',
    color: 'White',
    transmission: '8-Speed Automatic Transmission',
    drive_type: 'All wheel drive',
    fuel_type: 'Gasoline',
    engine_size: '4.0L 8-Cylinder Turbo Gas Engine',
    year: 2022,
    milage: 8,
    price: 106305,
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,
  )

  Car.create(
    image: "https://images.autotrader.com/hn/c/e5c64b8adc3248669fcb0c4440356493.jpg",
    vin: 'WAULSAF86NN008640',
    make: 'Audi',
    model: 'S8',
    version: 'Prestige',
    color: 'Black',
    transmission: '8-Speed Automatic Transmission',
    drive_type: 'All wheel drive',
    fuel_type: 'Gasoline',
    engine_size: '4.0L 8-Cylinder Turbo Gas Engine',
    year: 2022,
    milage: 1,
    price: 142355,
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,
  )

  Car.create(
    image: "https://images.autotrader.com/hn/c/f8cfe39b679848b286ed9e051ae0ec09.jpg",
    vin: 'WUAPCBF28PN900140',
    make: 'Audi',
    model: 'RS7',
    version: 'Sportback',
    color: 'White',
    transmission: '8-Speed Automatic Transmission',
    drive_type: 'All wheel drive',
    fuel_type: 'Gasoline',
    engine_size: '4.0L 8-Cylinder Turbo Gas Engine',
    year: 2023,
    milage: 5,
    price: 141489,
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,
  )

  Car.create(
    image: "https://images.autotrader.com/hn/c/26ce23a513cb4415ad2bab2a2a9d5ec8.jpg",
    vin: 'WBS83CH01PCL38301',
    make: 'BMW',
    model: 'M5',
    version: 'Competition',
    color: 'Black',
    transmission: '8-Speed Automatic Transmission',
    drive_type: 'All wheel drive',
    fuel_type: 'Gasoline',
    engine_size: '4.4L 8-Cylinder Turbo Gas Engine',
    year: 2023,
    milage: 1,
    price: 127745,
    car_options: Faker::Vehicle.car_options,
    standard_specs: Faker::Vehicle.standard_specs,
    dealer_id: 1,
  )

  User.create(email: "kaya@gmail.com", password: "asd")
  User.create(email: "odie@gmail.com", password: "asd")

  UserCar.create(user_id: 1, car_id: 1)
  UserCar.create(user_id: 1, car_id: 2)

  UserCar.create(user_id: 2, car_id: 3)
  UserCar.create(user_id: 2, car_id: 4)
  

  puts 'db seeded'

