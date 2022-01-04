class IncomeItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :category, :date
  has_one :user
end
