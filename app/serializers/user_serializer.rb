class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :age, :gender, :marital_status, :annual_income, :balance, :total_expenses, :total_income, :monthly_budget
end
