class SavingsItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :note, :target_amount, :current_amount
  has_one :user
end
