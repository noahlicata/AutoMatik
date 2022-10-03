Rails.application.routes.draw do
  resources :user_cars
  resources :dealers
  resources :cars
  resources :users

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"
  get "/dashboard/:id", to: "cars#show"
  get "/limit", to: "cars#limit"
  delete "/remove/:id", to: "cars#destroy"
  

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
