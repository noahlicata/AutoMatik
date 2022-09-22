class CarSerializer < ActiveModel::Serializer
  attributes :id, :vin, :make, :model, :version, :color, :transmission, :drive_type, :fuel_type, :engine_size, :year, :milage, :image
end
