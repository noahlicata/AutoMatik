class RemoveCarOptionsFromCars < ActiveRecord::Migration[7.0]
  def change
    remove_column :cars, :car_options
  end
end
