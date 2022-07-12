---
title: Terraspace Cloud Config
nav_text: Config
category: cloud
order: 2
---

When using [Terraspace Cloud](https://app.terraspace.cloud/), Terraspace adds additional convenience like Team Management, Permissions, History, a GUI visual interface, Real-time logging, and Cost Estimates. This page covers the available `config.cloud` settings.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.org = "REPLACE_WITH_YOUR_ORG"
end
```

## Record Changes Only

By default, terraspace cloud will only record plans and updates when changes are detected. This helps maintain a high signal-to-noise ratio.  You can adjust this behavior with:

config/app.rb

```ruby
Terraspace.configure do |config|
  # "all" records all plans and updates.
  # "changes" only records when there are changes
  # the default is "changes", this overrides the default behavior
  config.cloud.record = "all"
end
```

This tells terraspace to record all plans and updates regardless of whether or not changes are detected.

## Cloud Stack Name

Terraspace has a good default for the cloud stack  name. It includes info like env and region. Terraspace is also smart enough to remove double dashes `--` resulting from unset or unused values.  It is recommended to use the default. However, if you need to change it, you can change it with a config.

config/app.rb

```ruby
Terraspace.configure do |config|
  config.cloud.name = ":APP-:ROLE-:MOD_NAME-:ENV-:EXTRA-:REGION" # default
end
```

{% include config/reference/header.md %}
{% include config/reference/cloud.md %}
{% include config/reference/footer.md %}
