# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :profiles
  has_many :friends
  has_many :profiles, through :friends

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

serialize :liked_accounts, Array

def self.random_profile(ids)
 ids = ids.empty? ? [0] : ids
 Profile.where("id NOT IN (?)", ids).order("RANDOM()")
end

def self.liked(ids)
  ids = ids.empty? ? [0] : ids
  Profile.where("id IN (?)", ids)
end

end

