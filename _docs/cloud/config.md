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

Here's a table with the cloud related config settings:

{% include config/reference/header.md %}
{% include config/reference/cloud.md %}
{% include config/reference/footer.md %}
