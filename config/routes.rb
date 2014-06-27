WastedUs::Application.routes.draw do
  resources :meetings

  root 'welcome#index'

  # get '/meeting(/:id)', :to => "meetings#show", :as => :meeting, :via => :get
end
