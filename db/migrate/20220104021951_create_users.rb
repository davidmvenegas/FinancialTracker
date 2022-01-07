class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :profile_picture
      t.string :email
      t.string :password_digest
      t.integer :age
      t.string :gender
      t.string :marital_status
      t.integer :annual_income
      t.float :balance
      t.float :total_expenses
      t.float :total_income
      t.integer :monthly_budget

      t.timestamps
    end
  end
end
