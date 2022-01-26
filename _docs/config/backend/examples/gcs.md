---
title: Backend GCS
nav_text: GCS
categories: backend-examples
order: 3
---

Here's an example with the [gcs backend](https://www.terraform.io/language/settings/backends/gcs).

config/terraform/backend.tf:

{% highlight sh %}
terraform {
  backend "gcs" {
    bucket = "<%= expansion('terraform-state-:PROJECT-:REGION-:ENV') %>"
    prefix = "<%= expansion(':REGION/:ENV/:BUILD_DIR') %>"
  }
}
{% endhighlight %}

Notice the variable notation. Terraspace expands it out, substituting the values. The starter `backend.tf` accounts for `PROJECT`, `ENV`, etc. Here's an expanded example:

{% highlight sh %}
terraform {
  backend "gcs" {
    bucket = "terraform-state-google-project-id-us-central1-dev"
    prefix = "us-central1/dev/stacks/demo"
  }
}
{% endhighlight %}

{% include config/backend/env-in-bucket-name.md %}
