Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  get :income_items, to: "income_items#index"
  post :income_item, to: "income_items#create"
  delete :income_items, to: "income_items#destroy"

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end