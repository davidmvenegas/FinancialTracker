class SavingsItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :target_amount, :current_amount, :target_date
  has_one :user
end
