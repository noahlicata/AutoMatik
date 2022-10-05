class UserCarsController < ApplicationController
  before_action :set_user_car, only: %i[ show update destroy ]

  # GET /user_cars
  def index
    @user_cars = UserCar.all

    render json: @user_cars
  end

def get_user_cars
 user_cars = UserCar.where("user_id=?", params[:user_id])
 render json: user_cars
end


  # GET /user_cars/1
  def show
    render json: @user_car
  end

  # POST /user_cars
  def create
    user_car = UserCar.create!(user_car_params)
    render json: user_car, status: :created
  end

  # PATCH/PUT /user_cars/1
  def update
    if @user_car.update(user_car_params)
      render json: @user_car
    else
      render json: @user_car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_cars/1
  def destroy
    @user_car.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_car
      @user_car = UserCar.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_car_params
      params.require(:user_car).permit(:car_id, :user_id)
    end
end
