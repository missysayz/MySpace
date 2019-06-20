# class Api::ProfilesController < ApplicationController
#   before_action :authenticate_user!

#   def index
#     render json: User.random_profile

#     render json: Profile.all

#     (current_user.liked_accounts)
#   end

#   def update
#     current_user.liked_accounts << params[:id].to_i
#     current_user.save
#   end

#   def my_profiles
#     render json: User.liked(current_user.liked_profiles)
#   end
# end

class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_profile(current_user.liked_accounts)
  end

  def update
    current_user.liked_accounts << params[:id].to_i
    current_user.save
  end

  def my_profiles
    render json: User.liked(current_user.liked_profiles)
  end
end