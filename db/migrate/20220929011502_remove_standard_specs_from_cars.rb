class RemoveStandardSpecsFromCars < ActiveRecord::Migration[7.0]
  def change
    remove_column :cars, :standard_specs
  end
end
