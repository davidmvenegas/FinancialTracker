class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :age, :gender, :marital_status, :annual_income
  has_many :savings_items
  has_many :income_items
  has_many :foods
  has_many :housings
  has_many :transportations
  has_many :personal_cares
  has_many :entertainments
  has_many :others
end