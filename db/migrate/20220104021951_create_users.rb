class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :age
      t.string :gender
      t.string :marital_status
      t.integer :annual_income
      t.integer :balance
      t.integer :total_expenses
      t.integer :total_income
      t.integer :monthly_budget

      t.timestamps
    end
  end
end
