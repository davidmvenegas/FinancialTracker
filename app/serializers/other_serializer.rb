class OtherSerializer < ActiveModel::Serializer
  attributes :id, :amount, :monthly_amount
  has_one :user
end
