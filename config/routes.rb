WastedUs::Application.routes.draw do
  resources :meetings, except: [:destroy, :index]

  post 'meetings/:id/twilio/', to: 'meetings#twilio'

  root 'meetings#new'

  get '/email', :to => "email#email", :as => :post

  # get '/meeting(/:id)', :to => "meetings#show", :as => :meeting, :via => :get
end
