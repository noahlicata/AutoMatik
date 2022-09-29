class AddCarOptionsToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :car_options, :text, array: true, default: []
  end
end
