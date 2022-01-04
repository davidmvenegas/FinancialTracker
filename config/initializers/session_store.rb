if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_finance_authentication_app" #, add domain here
else
    Rails.application.config.session_store :cookie_store, key: "_finance_authentication_app"
end