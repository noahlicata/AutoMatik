class CarsController < ApplicationController
  def index
    render json: Car.all
  end

  def inventory
    cars = Car.all.limit(8)
    render json: cars
  end

  def show
    car = Car.find_by!(id: params[:id])
    render json: car, status: :ok
  end

  def create
    car = Car.create!(car_params)
    render json: car, status: :created
  end

  def update
    car = Car.find_by!(id: params[:id])
    car.update(car_params)
    render json: car, status: :accepted
  end

  def destroy
    car = Car.find_by!(id: params[:id])
    car.destroy
    head :no_content
  end

  private

  def car_params
    params.permit(:vin, :make, :model, :version, :color, :transmission, :drive_type, :fuel_type, :engine_size, :year, :image, :milage, :standard_specs, :car_options, :price, :dealer_id, :image2, :image3, :image4, :image5)
  end
end
