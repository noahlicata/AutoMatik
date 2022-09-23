class AddOptionsToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :car_options, :string
  end
end
