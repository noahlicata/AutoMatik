class AddSpecsToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :standard_specs, :string
  end
end
