# server-side require
require 'opal'
require 'opal-jquery'
require 'opal-browser'

namespace :opal do
  desc "Build our app to app.js"
  task :build do
    puts "build opal files"
    Opal.append_path "./opal"
    compiled = Opal::Builder.build("app").to_s
    IO.write("js/app.js", compiled)
  end
end

task :default => ["opal:build"]
