## RubyGems

Install terraspace via RubyGems.

    gem install terraspace

## Terraform

Terraspace calls the `terraform` CLI. You will need terraform installed. Refer to the [Terraform installation instructions](https://www.terraform.io/downloads.html) to install terraform for your system.

{% if include.provider %}
Next, we'll configure {{ include.provider }}.
{% endif %}
