class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :age, :gender, :marital_status, :annual_income, :balance, :total_expenses, :total_income, :monthly_budget
  has_many :savings_items
  has_many :budget_items
  has_many :income_items
end
