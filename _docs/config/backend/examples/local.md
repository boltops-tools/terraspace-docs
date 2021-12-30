---
title: "Backend Local"
nav_text: "Local"
categories: backend-examples
order: 5
---

Here's an example with the [local backend](https://www.terraform.io/language/settings/backends/local).

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "local" {
    path = "terraform.tfstate"
  }
}
{% endhighlight %}

The local statefile is stored at:

    ls .terraspace-cache/dev/stacks/demo/terraform.tfstate

Note: When using a local backend, the `config/terraform/backend.tf` file is entirely optional. Terraform defaults to a local backend with the `path = "terraform.tfstate"`. The `backend.tf` is provided as an example and shows you how to change the path.

## Prefix Path

If you're wondering how the prefix path `.terraspace-cache/dev/stacks/demo` was determined. It's controlled by

config/app.rb:

```ruby
Terraspace.configure do |config|
  config.build.cache_dir = ":CACHE_ROOT/:REGION/:ENV/:BUILD_DIR"
end
```

For defaults, see: [config/reference]({% link _docs/config/reference.md %})
