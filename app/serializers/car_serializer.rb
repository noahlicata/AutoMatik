class CarSerializer < ActiveModel::Serializer
  attributes :id, :vin, :make, :model, :version, :color, :transmission, :drive_type, :fuel_type, :engine_size, :year, :milage, :image, :standard_specs, :car_options, :price

  belongs_to :dealer
end
