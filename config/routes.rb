Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show, :update]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#logged_in"

  get "/hello", to: "application#hello_world"

  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
