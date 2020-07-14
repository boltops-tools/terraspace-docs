## RubyGems

Install terraspace via RubyGems.

    gem install terraspace

Ruby 2.7 and above is recommended.

## Terraform

Terraspace calls the `terraform` CLI. You will need terraform installed. Refer to the [Terraform installation instructions](https://www.terraform.io/downloads.html) to install terraform for your system. Terraform Terraform v0.12 and above is recommended.

## Linux Support Only

Terraspace works on macosx and linux only. Terraspace does not work on windows. For windows users, consider using the [Cloud9 IDE](https://aws.amazon.com/cloud9/), which runs in a browser and uses linux.

{% if include.provider %}
Next, we'll configure {{ include.provider }}.
{% endif %}
