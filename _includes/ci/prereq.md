## Prerequisites Summary

You'll need to set up the following:

{% if include.name == "Azure" -%}
1. A Terraspace project repo on Azure Repos
{% elsif include.vcs -%}
1. A Terraspace project repo on {{ include.vcs }}
{% else -%}
1. A Terraspace project repo on {{ include.name }}
{% endif -%}
2. The ci plugin gem
3. Configure Terraspace Cloud

## A Terraspace project repo on {{ include.vcs }}

If you need a Terraspace project, you can go through one of the [Getting Started Guides]({% link getting-started.md %}).  For this guide, we'll use a simple stack that creates a `random_pet` resource.

Create a {{ include.vcs }} repo and push the project to it. Here are some example commands

    git init
    git add .
    git commit -m 'first commit'
    {% if include.name == "Azure" -%}
    git remote add origin git@ssh.dev.azure.com:v3/ORG/PROJECT/REPO # replace ORG, PROJECT and REPO with your own info
    {% else -%}
    git remote add origin git@{{ include.host }}:USER/REPO.git # replace USER and REPO with your own info
    {% endif -%}
    git push -u origin main

## The ci plugin gem

Double-check and make sure `terraspace_ci_{{ include.name | downcase }}` is in your Terraspace project's Gemfile. It looks something like this.

Gemfile

```
source "https://rubygems.org"

gem "terraspace"
gem "rspec-terraspace"
{% if include.name == "Azure" -%}
gem "terraspace_plugin_azurerm"
{% else -%}
gem "terraspace_plugin_aws"
{% endif -%}
{% if include.name == "GitHub" -%}
gem "terraspace_ci_github"   # Gets VCS info from CI environment
gem "terraspace_vcs_github"  # Posts PR comment on GitHub
{% elsif include.name == "GitLab" -%}
gem "terraspace_ci_gitlab"   # Gets VCS info from CI environment
gem "terraspace_vcs_gitlab"  # Posts MR comment on GitLab
{% elsif include.name == "Bitbucket" -%}
gem "terraspace_ci_bitbucket"   # Gets VCS info from CI environment
{% elsif include.name == "CircleCI" -%}
gem "terraspace_ci_circleci" # Gets VCS info from CI environment
gem "terraspace_vcs_github"  # Posts PR comment on GitHub
{% elsif include.name == "Azure" -%}
gem "terraspace_ci_azure" # Gets VCS info from CI environment
{% endif -%}
```

{% if include.name == "CircleCI" %}
The `terraspace_ci_circleci` gem is how Terraspace gathers the VCS info from the CI enviroment. We're also using `terraspace_vcs_github` so a PR comment can be posted with the plan or apply info. If you're using GitLab instead of GitHub, you should use the `terraspace_vcs_gitlab` plugin instead.
{% endif %}

{% if include.name != "Azure" %}
The Gemfile also happens to be using AWS cloud plugin. You can use another [Terraspace Cloud Plugin]({% link _docs/plugins.md %}), of course.
{% endif %}

Also, make sure that you're using Terraspace 2.1 or above. You can check with `bundle info terraspace` and should see something like:

    $ bundle info terraspace
    * terraspace (2.1.0)

If not, you can update terraspace with

    bundle update terraspace

Or more generally, update all gem dependencies

    bundle update

{% if include.name == "Azure" %}
Note: There is no `terraspace_vcs_azure` plugin yet that supports posting PR comments on Azure Repos. However, since you can connect the Azure Pipeline to other VCS providers, you could add other vcs plugins. For example, if you're using a Azure Pipeline connected to a GitHub repo, you would use  `terraspace_vcs_github`. Terraspace will then grab the CI env info with `terraspace_ci_azure` and a comment to the GitHub PR via `terraspace_vcs_github`.
{% endif %}

## Configure Terraspace Cloud

Configure the `cloud.org` and `cloud.project` settings.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.org = "boltops"  # replace with your org name
  config.cloud.project = "main" # replace with your project name

  # Uncomment to enable cost estimation
  # Make sure to set the INFRACOST_API_KEY as an env var
  # Need the cost estimation plan https://app.terraspace.cloud/pricing
  # config.cloud.cost.enabled = true
end
```

You'll also need to export `TS_TOKEN` to your environment. You want want to add it to your

~/.bash_profile

    export TS_TOKEN=token-123 # Example only. Replace with your own token

For more details, see [Terraspace Cloud]({% link _docs/cloud.md %}).

Next, we'll generate the CI structure.
