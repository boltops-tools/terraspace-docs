---
title: "Backend Local"
nav_text: "Local"
categories: backend-examples
order: 5
---

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "local" {
    path = "<%= expansion('.terraform/state.tfstate') %>"
  }
}
{% endhighlight %}

Here's an expanded example:

{% highlight sh %}
terraform {
  backend "local" {
    path = ".terraform/state.tfstate"
  }
}
{% endhighlight %}

The local statefile is stored at:

    ls .terraspace-cache/dev/stacks/demo/.terraform/state.tfstate

If you're wondering how the prefix path `.terraspace-cache/dev/stacks/demo` was determined. It's controlled by

config/app.rb:

```ruby
Terraspace.configure do |config|
  config.build.cache_dir = ":CACHE_ROOT/:REGION/:ENV/:BUILD_DIR"
end
```

For defaults, see: [config/reference]({% link _docs/config/reference.md %})
