Rails.application.routes.draw do
  resources :profile_photos
  resources :user_cars
  resources :dealers
  resources :cars
  resources :users

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"
  get "/dashboard/:id", to: "cars#show"
  get "/inventory", to: "cars#inventory"
  get "/get_user_cars", to: "user_cars#get_user_cars"
  get "current_user_photos", to: "profile_photos#current_user_photos"

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
