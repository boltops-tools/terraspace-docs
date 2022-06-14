---
title: Terraspace Cloud Config
nav_text: Config
category: cloud
order: 2
---

When using [Terraspace Cloud](https://app.terraspace.cloud/), Terraspace adds additional convenience like Team Management, Permissions, History, and a GUI visual interface. This page covers the available `config.cloud` settings.

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

{% include config/reference/header.md %}
{% include config/reference/cloud.md %}
{% include config/reference/footer.md %}
