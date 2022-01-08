class User < ApplicationRecord
    has_secure_password
    has_many :income_items
    has_many :savings_items
    has_many :foods
    has_many :housings
    has_many :transportations
    has_many :personal_cares
    has_many :entertainments
    has_many :others

    validates :email, presence: true
    validates :email, uniqueness: true
end
