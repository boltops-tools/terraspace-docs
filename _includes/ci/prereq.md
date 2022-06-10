## Prerequisites Summary

You'll need to set up the following:

1. A Terraspace project repo on GitLab
2. The terraspace_ci_{{ include.name | downcase }} gem
3. Configure Terraspace Cloud

## A Terraspace project repo on {{ include.name }}

If you need a Terraspace project, you can go through one of the [Getting Started Guides]({% link getting-started.md %}).  For this guide, we'll creating a simple stack that creates a `random_pet` resource.

Create a {{ include.name }} repo and push the project to it. Here are some example commands

    git init
    git add .
    git commit -m 'first commit'
    git remote add origin git@github.com:USER/REPO.git # replace USER and REPO with your own info
    git push -u origin main

## The terraspace_ci_{{ include.name | downcase }} gem

Double-check and make sure `terraspace_ci_{{ include.name | downcase }}` is in your Terraspace project's Gemfile. It probably looks something like this.

Gemfile

```
source "https://rubygems.org"

gem "terraspace"
gem "rspec-terraspace"
gem "terraspace_plugin_aws"
gem "terraspace_ci_{{ include.name | downcase }}" # <= Should have this
```

The Gemfile also happens to be using AWS cloud plugin. You can use any cloud plugin, of course.

## Configure Terraspace Cloud

Configure the `cloud.org` and `cloud.project` settings.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.org = "boltops"  # replace with your org name
  config.cloud.project = "main" # replace with your project name
end
```

You'll also need to export `TS_TOKEN` to your environment. You want want to add it to your

~/.bash_profile

    export TS_TOKEN=token-123 # Example only. Replace with your own token

For more details, see [Terraspace Cloud]({% link _docs/cloud.md %}).

Next, we'll generate the CI structure.
