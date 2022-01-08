Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  resources :users
  resources :income_items
  resources :foods
  resources :housings
  resources :transportations
  resources :personal_cares
  resources :entertainments
  resources :others
  resources :savings_items

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end 