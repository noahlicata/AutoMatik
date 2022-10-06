class AddMoreImagesToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :image2, :string
    add_column :cars, :image3, :string
    add_column :cars, :image4, :string
    add_column :cars, :image5, :string
  end
end
