class CreateUserCars < ActiveRecord::Migration[7.0]
  def change
    create_table :user_cars do |t|
      t.integer :car_id
      t.integer :user_id

      t.timestamps
    end
  end
end
