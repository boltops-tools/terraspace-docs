---
title: "Backend GitLab"
nav_text: "GitLab"
categories: backend-examples
order: 6
---

{% include videos/learn.md
     url="terraspace-onprem/lessons/terraspace-gitlab-http-backend"
     img="https://learn-uploads.boltops.com/4sg2231obqo8r39b97e1fd4as0jn" %}

Here's an example with the [GitLab](https://docs.gitlab.com/ee/user/infrastructure/iac/terraform_state.html) [http backend](https://www.terraform.io/language/settings/backends/http).

config/terraform/backend.tf:

```
terraform {
  backend "http" {
    address        = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion(":ENV-:TYPE_DIR-:MOD_NAME") %>"
    lock_address   = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion(":ENV-:TYPE_DIR-:MOD_NAME") %>/lock"
    unlock_address = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion(":ENV-:TYPE_DIR-:MOD_NAME") %>/lock"
    username       = "<%= ENV['GITLAB_USER'] %>"
    password       = "<%= ENV['GITLAB_ACCESS_TOKEN'] %>"
    lock_method    = "POST"
    unlock_method  = "DELETE"
    retry_wait_min = 5
  }
}
```

You can set the env var defaults with the [config/boot.rb]({% link _docs/config/boot.md %}) hook.

config/boot.rb:

```ruby
ENV['GITLAB_PROJECT_ID']   ||= 'your project id'
ENV['GITLAB_USER']         ||= 'gitlab-user'
ENV['GITLAB_ACCESS_TOKEN'] ||= 'gitlab-api-access-token'
ENV['GITLAB_PROJECT_URL']    = "https://gitlab.com/api/v4/projects/#{ENV['GITLAB_PROJECT_ID']}/terraform/state"
```

## Including Region

When a http backend is used, a generic expander is used and `:REGION` is not expanded. This is because you can use the http backend without any `terraspace_plugin_*` at all . If you want to include `:REGION` in the expansion helper, here's one way to do that:

config/terraform/backend.tf:

```
terraform {
  backend "http" {
    address        = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion("#{ENV['AWS_REGION']}-:ENV-:TYPE_DIR-:MOD_NAME") %>"
    lock_address   = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion("#{ENV['AWS_REGION']}-:ENV-:TYPE_DIR-:MOD_NAME") %>/lock"
    unlock_address = "<%= ENV['GITLAB_PROJECT_URL'] %>/<%= expansion("#{ENV['AWS_REGION']}-:ENV-:TYPE_DIR-:MOD_NAME") %>/lock"
    username       = "<%= ENV['GITLAB_USER'] %>"
    password       = "<%= ENV['GITLAB_ACCESS_TOKEN'] %>"
    lock_method    = "POST"
    unlock_method  = "DELETE"
    retry_wait_min = 5
  }
}
```

You can set the env var defaults with the [config/boot.rb]({% link _docs/config/boot.md %}) hook.

config/boot.rb:

```ruby
ENV['GITLAB_PROJECT_ID']   ||= 'your project id'
ENV['GITLAB_USER']         ||= 'gitlab-user'
ENV['GITLAB_ACCESS_TOKEN'] ||= 'gitlab-api-access-token'
ENV['GITLAB_PROJECT_URL']    = "https://gitlab.com/api/v4/projects/#{ENV['GITLAB_PROJECT_ID']}/terraform/state"
ENV['AWS_REGION']          ||= "us-east-1"
```
