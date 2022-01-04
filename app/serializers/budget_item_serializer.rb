class BudgetItemSerializer < ActiveModel::Serializer
  attributes :id, :category, :total_budget, :current_total
  has_one :user
end
