class Profile < ApplicationRecord
  belongs_to :user
  has_many :friends
  # has_many :users, through: :friends
end


