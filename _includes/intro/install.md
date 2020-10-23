## RubyGems

Install terraspace via RubyGems.

    gem install terraspace

Ruby 2.7 and above is recommended.

## Terraform

Terraspace calls the `terraform` CLI. You will need terraform installed. Refer to the [Terraform installation instructions](https://www.terraform.io/downloads.html) to install terraform for your system. Terraform Terraform v0.12 and above is recommended.

## Check Setup

You can use this command to check your setup:

    terraspace check_setup

## Linux Support Only

Terraspace currently only works on macosx and linux. For windows users, consider using the [Cloud9 IDE](https://aws.amazon.com/cloud9/), which runs in a browser and uses linux.

## Install Shim

It is recommended to also install a [shim]({% link _docs/misc/shim.md %}) for Terraspace. To install the shim:

    terraspace new shim

{% if include.provider %}
Next, we'll configure {{ include.provider }}.
{% endif %}
