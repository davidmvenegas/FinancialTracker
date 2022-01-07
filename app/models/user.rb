class User < ApplicationRecord
    has_secure_password
    has_many :income_items

    validates :email, presence: true
    validates :email, uniqueness: true
end
