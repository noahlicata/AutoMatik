class User < ApplicationRecord
  has_secure_password
  has_many :user_cars
  has_many :dealers, through: :user_cars
  has_many :profile_photos

  validates :email, presence: true
  validates :email, uniqueness: true
end
