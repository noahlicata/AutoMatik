class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :vin
      t.string :make
      t.string :model
      t.string :version
      t.string :color
      t.string :transmission
      t.string :drive_type
      t.string :fuel_type
      t.string :engine_size
      t.integer :year
      t.integer :milage
      t.integer :dealer_id

      t.timestamps
    end
  end
end
