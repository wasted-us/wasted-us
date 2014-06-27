WastedUs::Application.routes.draw do
  resources :meetings

  root 'meetings#new'

  get '/email', :to => "email#email", :as => :post

  # get '/meeting(/:id)', :to => "meetings#show", :as => :meeting, :via => :get
end
