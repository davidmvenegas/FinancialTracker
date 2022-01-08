class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.integer :amount
      t.integer :monthly_amount
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
