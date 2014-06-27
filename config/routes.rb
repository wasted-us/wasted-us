WastedUs::Application.routes.draw do
  resources :meetings

  root 'meetings#new'

  # get '/meeting(/:id)', :to => "meetings#show", :as => :meeting, :via => :get
end
