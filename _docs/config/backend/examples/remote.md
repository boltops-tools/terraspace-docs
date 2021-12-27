---
title: "Backend Remote: TFC and TFE"
nav_text: "Remote TFC"
categories: backend-examples
order: 4
---

config/terraform/backend.tf:

{% highlight sh %}
terraform
  terraform {
    backend "remote" {
      organization = "ORG"
      workspaces {
      name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
    }
  }
}
{% endhighlight %}

Here's an expanded example:

{% highlight sh %}
terraform
  terraform {
    backend "remote" {
      organization = "boltops"
      workspaces {
      name = "demo-dev-us-west-2"
    }
  }
}
{% endhighlight %}
