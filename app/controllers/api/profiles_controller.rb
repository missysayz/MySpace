
class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_profiles(current_user.follow_profiles)
    
  end

  def create
    profile = current_user.profiles.new(profile_params)
    if profile.save
      render json: profile
    else
      render json: {}
    end
  end

  def update
    if current_user.follow_profiles << params[:id].to_i 
      current_user.profile.save
    else 
      render json: {}
  end
end

def show
  @profile = Profile.find(params[:id])
  render json: @profile
end

def my_profiles
  render json: User.follow(current_user.follow_profiles)
end

  private
    def profile_params
      params.require(:profile).permit(:name, :dob, :avatar)
    end
  def my_profiles  
    render json: User.profile(user_id: current_user.id)
  end
end