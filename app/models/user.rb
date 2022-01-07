class User < ApplicationRecord
    has_secure_password
    has_many :income_items
    has_many :savings_items
    has_many :budget_items

    validates :email, presence: true
    validates :email, uniqueness: true
end
