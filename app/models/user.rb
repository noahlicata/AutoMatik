class User < ApplicationRecord
  has_secure_password
  has_many :user_cars
  has_many :dealers, through: :user_cars

  validates :email, presence: true
  validates :email, uniqueness: true
end
