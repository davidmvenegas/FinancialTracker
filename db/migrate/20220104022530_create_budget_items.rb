class CreateBudgetItems < ActiveRecord::Migration[6.1]
  def change
    create_table :budget_items do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :category
      t.float :total_budget
      t.float :current_total

      t.timestamps
    end
  end
end
