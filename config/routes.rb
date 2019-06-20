Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :profiles, only: [:index, :update]
    get "my_profiles", to: "profiles#my_profiles"
  end

  resources :profiles do
    resources :friends, only: [:index]
    get "my_friends", to: "friends#my_friends"
end
end



