## RubyGems

Install terraspace via RubyGems.

    gem install terraspace

Terraspace is tested with Ruby 2.7. Ruby 2.7 and patch variants of it is recommended.

## Terraform

Terraspace calls the `terraform` CLI. You will need terraform installed. Refer to the [Terraform installation instructions](https://www.terraform.io/downloads.html) to install terraform for your system.

{% if include.provider %}
Next, we'll configure {{ include.provider }}.
{% endif %}
