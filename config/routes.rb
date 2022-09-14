Rails.application.routes.draw do
  resources :leads
  devise_for :users
  root 'home#index'
  get 'home/profile'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
