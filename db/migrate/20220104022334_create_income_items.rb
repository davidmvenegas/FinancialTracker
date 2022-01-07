class CreateIncomeItems < ActiveRecord::Migration[6.1]
  def change
    create_table :income_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.float :amount
      t.string :category
      t.date :date

      t.timestamps
    end
  end
end
