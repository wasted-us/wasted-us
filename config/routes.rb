WastedUs::Application.routes.draw do
  resources :meetings

  root 'welcome#index'
end
