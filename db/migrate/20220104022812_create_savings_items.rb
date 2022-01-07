class CreateSavingsItems < ActiveRecord::Migration[6.1]
  def change
    create_table :savings_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.text :note
      t.integer :target_amount
      t.float :current_amount

      t.timestamps
    end
  end
end
