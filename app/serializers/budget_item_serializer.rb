class BudgetItemSerializer < ActiveModel::Serializer
  attributes :id, :total_budget, :current_total, :food, :housing, :transportation, :personal_care, :other
  has_one :user
end
