class AddStandardSpecsToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :standard_specs, :text, array: true, default: []
  end
end
