---
title: "Backend Remote: TFC and TFE"
nav_text: "Remote TFC"
categories: backend-examples
order: 4
---

Here's an example with the [TFC](https://www.terraform.io/cloud) or [TFE](https://www.terraform.io/enterprise/admin/agents-on-tfe) [remote](https://www.terraform.io/language/settings/backends/remote) backend.

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "remote" {
    organization = "ORG"
    workspaces {
    name = "<%= expansion(':MOD_NAME-:ENV-:REGION-:INSTANCE') %>"
  }
}
{% endhighlight %}

Here's an expanded example:

{% highlight sh %}
terraform {
  backend "remote" {
    organization = "boltops"
    workspaces {
    name = "demo-dev-us-west-2"
  }
}
{% endhighlight %}
