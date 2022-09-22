class Car < ApplicationRecord
  has_many :user_cars
  has_many :users, through: :user_cars
  belongs_to :dealer
end
